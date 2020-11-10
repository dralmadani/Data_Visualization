published in my account on [Vizhub](https://vizhub.com/dralmadani/e9a2b6197eb14b87aafbc85a09b90fe8)

A the US map showing Largest cities in the USA by population for 2020 

City data from [Largest Cities by population in the USA](https://gist.github.com/dralmadani/c04f95746e2f36b040d3d764ab7b9c62).

I used the [U.S. Geo Map of State Boundaries](https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/states-10m.json) for the underlying map. In this iteration, I used the geoAlbers projection to clean up and zoom in on the map. While other projection types appear to gracefully handle a lat/long input of 0, it returns null with this projection, which causes a fatal error when you reference the scaled pixel locations.


finding Latitude and longitude form [latlong]
(https://www.latlong.net/category/cities-236-15.html)


