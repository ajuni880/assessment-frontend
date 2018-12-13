This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project

React App - Gnomes data manager.<br>
This project was part of an assessment.
[Assessment details](https://www.dropbox.com/sh/gfqisikrhuslbu0/AADUE52toTZKPjM6AHmNrkKMa?dl=0)

## Getting Started

Clone this repo to test or play with the project. 

### Prerequisites

```
nodejs v >= 8.10.0
```

### Installing

Install all the dependencies

```
npm install
```

Run the code

```
npm start
```
The server will run on http://localhost:3000

## Running the tests

Run automated tests

```
npm test
```

## Built With

* [create-react-app](https://github.com/facebook/create-react-app) - I have used CRA v2.1.1 for setting up the boilerplate code for working with React. And focus more on develop the project.
* [Redux](https://redux.js.org/) - Used as app state container. I used redux for managing the app state to avoid children components props downtree. And have the state localized in on place. Avoid logic inconsistency. I have composed the state by 3 reducers.
  - People: manages the logic related to people data actions
  - filters: manages the logic relaated to filtering actions
  - pagination: manages the logic relaated to pagination actions
* [react-redux](https://github.com/reduxjs/react-redux) - React bindings for Redux.
* [redux-thunk](https://github.com/reduxjs/redux-thunk) - Works as a middleware to perform sync and async actions to reducers. Runs between a dispatched action and a reducer.
* [SASS](https://jwt.io) - Used for styling purposes and following the [SMACCS](https://smacss.com/) style guide.
* I have tried to follow Container/Presentational pattern
* Also added filter feature.

## Todos
Due a lack of time i couldn't complete the next tasks:
  - Caching images
  - Test App