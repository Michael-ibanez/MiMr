# TimeTracker

> ### React + Redux codebase containing real life database practices and react-store usage.

The purpose of this project is to create an application alongside a website that will track a user's time by acquiring the number from the application and store it under their name. When a user wants to see how much time they've spent, they can view a total amount of hours per week. This will hold a user's time sheet for up to three years.

In the future we plan to add features such as adding employers and employees where the employer can have several employees and view each of their time sheet history.

Created by Jessenia Ruiz, Manuel Reyes, Marcos Ibanez, and Michael Ibanez.

## Getting started

You can view a live demo over at https://mimr.herokuapp.com

To get the frontend/backend running locally:

- Install git : `https://git-scm.com/download`
- Clone this repo : `git clone https://github.com/Michael-ibanez/MiMr.git`
- Install npm and node : `https://nodejs.org/en/`
- Install all req'd dependencies : `npm install`
- Start the local server and host frontend/backend : `npm run dev`
- Open [localhost:3000](http://localhost:3000) and server is running on [localhost:5000](http://localhost:5000)
- You can also run solely the client or the server. Check out the package json for those commands

You can configure port in scripts section of `package.json`: we use [cross-env](https://github.com/kentcdodds/cross-env) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.

### server.js

This file is where we put all of our configurations before we start the project. It includes connecting to the database and our routes to post data to the database.

### package.json

This file lists the packages your project depends on. specifies versions of a package that your project can use using semantic versioning rules. makes your build reproducible, and therefore easier to share with other developers.

### test

This folder holds the test code for our frontend layout.

### routes

This folder holds routes our code will use to post data to the database.

### models

This folder holds the schemas for our users.

### config

This folder holds the mongoURI and our secretKey.

### client

This folder holds the code for all of our code that runs on the client end.
