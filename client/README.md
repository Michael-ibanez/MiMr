# Client folder

This folder contains the source code to run the frontend

## Getting started

To get the frontend running locally:

- Install git : `https://git-scm.com/download`
- Clone this repo : `git clone https://github.com/Michael-ibanez/MiMr.git`
- Install npm and node : `https://nodejs.org/en/`
- Install all req'd dependencies : `npm install`
- Start the frontend : `npm start`
- Open [localhost:3000](http://localhost:3000)

You can configure port in scripts section of `package.json`: we use [cross-env](https://github.com/kentcdodds/cross-env) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.

### package.json

This file lists the packages your project depends on. specifies versions of a package that your project can use using semantic versioning rules. makes your build reproducible, and therefore easier to share with other developers.

### actions

This folder holds teh types of actions our website goes through such as 'Loading Current User'

### helpers

This folder holds our keys for different services

### img

This folder contains any images we use on our website except for personal profile pictures

### src

This folder contains the rest of the frontend code using reactJS
