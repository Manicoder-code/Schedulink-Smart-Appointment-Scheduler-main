// OPTIMIZED COMPONENT - Eliminates unnecessary re-renders
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { fastApi } from '../services/api-optimized';

// Memoized user item to prevent re-renders
const UserItem = React.memo(({ user, onSelect }) => (
  <div 
    className="p-4 border rounded cursor-pointer hover:bg-gray-50"
    onClick={() => onSelect(user.id)}
  >
    <h3 className="font-medium">{user.name}</h3>
    <p className="text-gray-600">{user.email}</p>
  </div>
));

// Optimized users list with minimal re-renders
export const FastUsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoized fetch function
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fastApi.users.getAll();
      if (result.success) {
        setUsers(result.data);
        setError(null);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load users only once
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Memoized user selection handler
  const handleUserSelect = useCallback((userId) => {
    console.log('Selected user:', userId);
    // Handle user selection logic
  }, []);

  // Memoized user list rendering
  const usersList = useMemo(() => 
    users.map(user => (
      <UserItem 
        key={user.id} 
        user={user} 
        onSelect={handleUserSelect} 
      />
    )), [users, handleUserSelect]
  );

  if (loading) return <div className="text-center">Loading users...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Users ({users.length})</h2>
      <div className="grid gap-4">
        {usersList}
      </div>
    </div>
  );
};

export default FastUsersList;

