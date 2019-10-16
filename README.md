# TimeTracker 
> ### React + Redux codebase containing real life database practices and react-store usage.
> 


The purpose of this project is to create an application alongside a website that will track a user's time by acquiring the number from the application and store it under their name. When a user wants to see how much time they've spent, they can view a total amount of hours per week. This will hold a user's time sheet for up to three years. 


In the future we plan to add features such as adding employers and employees where the employer can have several employees and view each of their time sheet history.

Created by Manuel Reyes, Marcos Ibanez and Michael Ibanez.  

## Getting started

You can view a live demo over at https://mimr.herokuapp.com

To get the frontend running locally:
 
- Install git : `https://git-scm.com/download`
- Clone this repo : `git clone https://github.com/Michael-ibanez/MiMr.git`
- Install npm and node : `https://nodejs.org/en/`
- Install all req'd dependencies : `npm install` 
- Start the local server (this project uses create-react-app) : `npm start`
- Open [localhost:8080](http://localhost:8080)

Local web server will use port 8080 instead of standard React's port 3000 to prevent conflicts with some backends like Node or Rails. You can configure port in scripts section of `package.json`: we use [cross-env](https://github.com/kentcdodds/cross-env) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.





