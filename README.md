# Front End Tech Test

## Background information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) including the TypeScript template.

This project is supported by a basic backend using [JSON Server](https://www.npmjs.com/package/json-server).


## Running the project

If you run the following command:

`npm run start`

Run the following command to run test:

`npm test`

This will run the backend server on `http://localhost:4000` and it will start the React project on `http://localhost:3000`.

You will find that the backend has a single endpoint:

`GET` `/companies`

This endpoint will return an array of 200 fake companies. You can verify that this is working and running correctly by using your preferred API client such as Postman, Insomnia, etc.

## What I did

I used redux toolkit to fetch the data and Material UI for styling the component and implementing the layout.

The pagination is made by implementing a custom pagination with react by using UseState hook.

I also added a bit of testing to test a text in the page when it is loading and some reducers tests.