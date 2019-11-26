# Peak Services

**Services For Peak: Apartment Finder**: [https://github.com/zachcb/peak-web)

## Development

### Production
```
    #todo
```

### Local
```
    docker-compose up --build
```

Docker builds the node api server and pulls down redis, redis-commander, postgres, and pgadmin. Docker then runs nodemon to watch for file changes.


## Feature Roadmap
* Scraps website for apartments
  * Craigslist
  * Facebook marketplace
* Takes preferences for search query
  * Radius
    * Geo fence
  * Price range
  * Distance to work, gym, grocery
  * Walkability score
  * Crime
* Emails the user when apartment is found
  * Batch apartments
* Automatically send an email template to the property manager

