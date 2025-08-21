# RecipeWepApp
This document outlines the scope, requirements, and technical specifications for the "User Management and Recipe Dashboard" project. This project is designed to provide Vimbai Danduri, a 2nd-year Computer Science student, with practical experience across various critical areas of software development, including User Interface (UI), User Experience (UX), Application Programming Interface (API) development, and database management using PostgreSQL via Supabase.
The goal is to build a functional web application that allows users to sign up, log in, manage their profiles, and create/view their cooking recipes.

## Done

- Create models -> user obj, recipe, 
- Create utilities file -> move logging funtion
- Create routes folder -> move all routes, each route has its own file
- Then import them into the middleware(app.js)
- Implement cors - specify 2 origins (localhost, localhost:3000)
- Set up satus codes
- Connected app to Supababse using project keys

## Architecture Decisions
- For pre-commit hooks, I choose npm installation because there would be no need to install python and I can also run tests and linting on my files.
- For TTD, I choose Jest because it is simpler and faster for me as a beginner and it is also easy to set up.
- Configures server with JSON Parsing
- Created routes for recipes in recipeRoutes i.e Post /recipe/add, GET/recipe/:id
- Implementimg JWT  for Post /login
- Create models -> user obj, recipe, 
- Create utilities file -> move logging funtion
- Create routes folder -> move all routes, each route has its own file
- Then import them into the middleware(app.js)
- Implement cors - specify 2 origins (localhost, localhost:3000)
- Set up satus codes
- Connected app to Supababse using project keys

## Supabase
- Created users and recipes tables using the SQL editor
- Users table for usere personal information
- Recipes table stores recipe information
- Inserted recipe data with JSON

## Express server
- Configures server with JSON Parsing
- Created routes for recipes in recipeRoutes i.e Post /recipe/add, GET/recipe/:id
- Implementimg JWT  for Post /login
