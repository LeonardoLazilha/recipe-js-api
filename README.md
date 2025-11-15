
 # Recipe API (Node.js + Express + MongoDB)

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
</p>

A simple API developed with Node.js, Express, and MongoDB, created with a focus on practical application, study, and best organizational practices. CRUD for Recipes.

## Structure


       src/
    │ app.js
    │ server.js
    │
    ├── config/
    │     db.js
    │
    ├── controllers/
    │     recipeController.js
    │
    ├── services/
    │     recipeService.js
    │
    ├── models/
    │     Recipe.js
    │
    └── routes/
          recipeRoutes.js


##  How to run the project

#### 1. Clone the repository
```
git clone https://github.com/LeonardoLazilha/recipe-js-api.git
```

#### 2. Install dependencies
```
npm install
```

#### 3. Configure local MongoDB
```
mongodb://localhost:27017/myApiDB
```

#### 4. Start the server
```
npm start
```

#### 4. Server will run at
```
http://localhost:3000
```


## Routes

### POST /recipes

```
{
  "title": "Flan",
  "ingredients": ["Condensed milk", "Eggs", "Suggar"],
  "steps": ["Mix all", "Bake for 40 minutes"],
  "difficult": "easy",
  "prepTime": 40
}
```

### GET /recipes
### PUT /recipes:id
### DELETE /recipes:id

## Model

```
{
  title: String,
  ingredients: [String],
  steps: [String],
  difficult: "easy" | "medium" | "difficult",
  prepTime: Number,
  author: String
}
```

## Architecture

The Recipe API uses:

- Model: defines the recipe schema

- Service: contains the logic for database access

- Controller: receives requests and returns responses

- Routes: connect the endpoints to controllers

This separation keeps the code clean, modular, and easy to maintain.
