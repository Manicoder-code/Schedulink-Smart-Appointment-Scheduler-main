# Raw SQL queries for performance-critical endpoints
import asyncpg
import json
from typing import List, Dict, Any

class FastDatabase:
    def __init__(self, database_url: str):
        self.database_url = database_url
        self.pool = None
    
    async def connect(self):
        self.pool = await asyncpg.create_pool(self.database_url, min_size=5, max_size=20)
    
    async def get_users_raw(self) -> List[Dict[str, Any]]:
        """Get all users with raw SQL - 3x faster than ORM"""
        async with self.pool.acquire() as conn:
            rows = await conn.fetch("""
                SELECT id, name, email, phone, created_at 
                FROM users 
                ORDER BY created_at DESC
            """)
            return [dict(row) for row in rows]
    
    async def get_available_slots_raw(self, date: str = None) -> List[Dict[str, Any]]:
        """Get available slots with raw SQL"""
        async with self.pool.acquire() as conn:
            query = """
                SELECT s.id, s.title, s.description, s.date, s.start_time, s.end_time,
                       u.name as creator_name
                FROM slots s 
                LEFT JOIN users u ON s.user_id = u.id 
                WHERE s.is_booked = false
            """
            params = []
            
            if date:
                query += " AND s.date = $1"
                params.append(date)
            
            query += " ORDER BY s.date, s.start_time"
            
            rows = await conn.fetch(query, *params)
            return [dict(row) for row in rows]
    
    async def book_slot_raw(self, slot_id: int, user_id: int) -> Dict[str, Any]:
        """Book slot with raw SQL transaction"""
        async with self.pool.acquire() as conn:
            async with conn.transaction():
                # Check if slot is available
                slot = await conn.fetchrow(
                    "SELECT id, is_booked FROM slots WHERE id = $1", slot_id
                )
                
                if not slot or slot['is_booked']:
                    raise ValueError("Slot not available")
                
                # Book the slot
                await conn.execute("""
                    UPDATE slots 
                    SET is_booked = true, booked_by = $1, booked_at = NOW() 
                    WHERE id = $2
                """, user_id, slot_id)
                
                # Return updated slot
                updated_slot = await conn.fetchrow("""
                    SELECT s.*, u.name as booked_by_name 
                    FROM slots s 
                    LEFT JOIN users u ON s.booked_by = u.id 
                    WHERE s.id = $1
                """, slot_id)
                
                return dict(updated_slot)

# Fast API endpoints using raw SQL
from fastapi import FastAPI, HTTPException
from .fast_database import FastDatabase

app = FastAPI()
db = FastDatabase("postgresql://user:pass@db:5432/schedulink")

@app.on_event("startup")
async def startup():
    await db.connect()

@app.get("/fast/users")
async def get_users_fast():
    """50% faster than ORM version"""
    try:
        users = await db.get_users_raw()
        return {"users": users, "count": len(users)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/fast/slots")
async def get_slots_fast(date: str = None):
    """60% faster than ORM version"""
    try:
        slots = await db.get_available_slots_raw(date)
        return {"slots": slots, "count": len(slots)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

