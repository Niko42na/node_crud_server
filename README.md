CRUD (Node.js + Express + MongoDB)

## Getting Started
Just download/clone project, and use this instruction:
1. in terminal run 'npm i' - will install dependencies;
2. in terminal run `npm run dev` - will start server on localhost:3000;

## How to use
In 'Postman' You may use API's:
1) POST 'localhost:3000/notes' - create note (click radiobutton 'x-www-form-urlencoded', create keys 'title', 'body' and add some values to those keys);

2) GET 'localhost:3000/notes' - will return all notes from db collection

3) GET 'localhost:3000/notes/:id' - will return note ( by using 'id' as query);

4) PUT 'localhost:3000/notes/:id' - will update note ( by using 'id' as query, same fields as for POST 'localhost:3000/notes' );

5) DELETE 'localhost:3000/notes/:id' - will delete note ( by using 'id' as query);

6) DELETE 'localhost:3000/notes' - will delete all notes from db collection.
