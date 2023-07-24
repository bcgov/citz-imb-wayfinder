self.addEventListener('activate', (event) => {
    event.waitUntil(
      self.clients.claim().then(() => {
        console.log('Service worker has taken control of clients');
        // Move specific assets from the precache to the "mapTiles" cache
        return caches.open('mapTiles').then((mapTilesCache) => {
          return caches.open('site').then((siteCache) => {
            return caches.keys().then((cacheNames) => {
              const precacheNames = cacheNames.filter((cacheName) => cacheName.startsWith('workbox-precache-v2'));
              return Promise.all(
                precacheNames.map((precacheName) => {
                  return caches.open(precacheName).then((precache) => {
                    return precache.keys().then((cacheKeys) => {
                      const mapTilesUrls = cacheKeys.filter((cacheKey) => cacheKey.url.includes('mapTiles'));
                      const siteUrls = cacheKeys.filter((cacheKey) => !cacheKey.url.includes('mapTiles'));
  
                      // Move assets matching "mapTiles" to "mapTiles" cache
                      const mapTilesPromises = mapTilesUrls.map((url) => {
                        return precache.match(url).then((response) => {
                          if (response) {
                            return mapTilesCache.put(url, response.clone()).then(() => {
                              // Delete the original asset from the precache
                              return precache.delete(url);
                            });
                          }
                        });
                      });
  
                      // Move assets not matching "mapTiles" to "site" cache
                      const sitePromises = siteUrls.map((url) => {
                        return precache.match(url).then((response) => {
                          if (response) {
                            return siteCache.put(url, response.clone()).then(() => {
                              // Delete the original asset from the precache
                              return precache.delete(url);
                            });
                          }
                        });
                      });
  
                      return Promise.all([...mapTilesPromises, ...sitePromises]);
                    });
                  });
                })
              );
            });
          });
        }).then(() => {
          console.log('Assets moved to "mapTiles" and "site" caches successfully');
          // Find and delete all caches that start with "workbox-precache-v2"
          return caches.keys().then((cacheNames) => {
            const precacheNamesToDelete = cacheNames.filter((cacheName) => cacheName.startsWith('workbox-precache-v2'));
            return Promise.all(
              precacheNamesToDelete.map((cacheName) => {
                return caches.delete(cacheName);
              })
            );
          });
        }).then(() => {
          console.log('Caches starting with "workbox-precache-v2" deleted successfully');
        }).catch((error) => {
          console.error('Error deleting caches:', error);
        });
      })
    );
  });
  
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'clearCache') {
    caches.keys().then((cacheNames) => {
      const cachesToDelete = cacheNames.filter((cacheName) => cacheName === 'mapTiles' || cacheName === 'site');
      return Promise.all(cachesToDelete.map((cacheName) => caches.delete(cacheName)));
    }).then(() => {
      event.source.postMessage({ action: 'clearCache', success: true });
      console.log('"mapTiles" and "site" caches deleted successfully');
    }).catch((error) => {
      console.error('Cache clear error:', error);
      event.source.postMessage({ action: 'clearCache', error });
    });
  }
});
  
  