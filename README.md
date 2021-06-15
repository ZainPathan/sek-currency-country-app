# Swedish Krona SEK Currency Convertor

* Swedish Krona SEK Currency Convertor was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* It uses React, Redux, Redux Thunk as middleware and React Material as a UI Component library
* For Countries Search the following API is used [REST Countries](https://restcountries.eu)
  * https://restcountries.eu/rest/v2/name/{name}
* For getting the Currency Exchange rates the following API is used [Fixer]()
  * https://data.fixer.io/api/latest?access_key=API_KEY&base=EUR&symbols=GBP,JPY,EUR
* The free plan of the Fixer API does not allow the change of Base Currency and therefore additional calculations were
  required to obtain the currency conversion from Swedish Krono

## Project Setup

* Run cmd `npm install` or `yarn install` to install the required packages
* Run cmd `npm start` or `yarn start` to run the app 
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
