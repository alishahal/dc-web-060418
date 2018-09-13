## Fetch Gets and Posts

### From CRUD to...
- GET
- POST (body must be a string) (almost always requires headers)
- PATCH or PUT (almost always requires headers)
- DELETE

- [Documentation of using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Single Page applications
- loading new content onto the page
- like Twitter

### Mocking your own API
```
json-server --watch db.json
```

### JSON Server Routes
```
GET    /pokemon
GET    /pokemon/1
POST   /pokemon
PUT    /pokemon/1
PATCH  /pokemon/1
DELETE /pokemon/1
```
To POST a new Pokemon:
```
body: JSON.stringify({
"name": "charmeleon",
"sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
})

```

### GET and POST Pokemon App
- See all Pokemon sprites X
- Delete a Pokemon on click X
- Create your own Pokemon X
- https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/:id.png

### Notes:
- data HAS to be a string in a POST, PUT, or PATCH fetch
