function createCache() {
    const cache = {}; // A private variable to store cached results

    return async function(url) {
        if (cache[url]) {
            console.log("Returning cached data for:", url);
            return cache[url];
        } else {
            console.log("Fetching data for:", url);
            const response = await fetch(url);
            const data = await response.json();
            cache[url] = data; // Store the result in the cache
            return data;
        }
    };
}

const cachedFetch = createCache();

cachedFetch("https://api.example.com/data1"); // Fetches and caches
cachedFetch("https://api.example.com/data1"); // Returns from cache
