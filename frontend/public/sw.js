// SERVICE WORKER for aggressive caching
const CACHE_NAME = 'schedulink-v1';
const API_CACHE_TIME = 30000; // 30 seconds for API responses

// Cache static assets and API responses
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Cache API responses
  if (request.url.includes('/api/')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(request).then(response => {
          if (response) {
            const cacheDate = new Date(response.headers.get('date'));
            const now = new Date();
            
            // Return cached if less than 30 seconds old
            if (now - cacheDate < API_CACHE_TIME) {
              return response;
            }
          }
          
          // Fetch new data and cache it
          return fetch(request).then(fetchResponse => {
            cache.put(request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  }
  
  // Cache static assets
  else if (request.url.includes('.js') || request.url.includes('.css')) {
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request);
      })
    );
  }
});

