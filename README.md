# Expense Tracker
![](./public/images/home.png)
## Live Link
[Get started with Expense Tracker](https://redux-expense-tracker.netlify.app/)
## Objectives
- Data management in front-end components
- Handling lifecycle methods and reusable logic with React Hooks
- Using client-side routes with React Router
- Interacting with an API Backend
- Using a state management container in a React application
- Modern redux with Redux toolkit
- Managing async workflow with Redux Sagas
- Basic data visualisation
- Functional Programming
- Meeting model client requirements

## Features
A single page application that allows users to keep track of expenses. After `Sign up` or `Log in`, users are authenticated and able to access the app. The home page allows for creating and managing categories of expenses. Clicking on `Track expenses` in any category opens up a `Track.it` page with information about expenses in a given list. Expenses can be added, edited and deleted as desired. The `Reports` page shows the total outcome of a user's expenses, _by categories_, in a doughnut chart. Lastly, the `Edit Profile` page allows users to edit their profile. _Expense Tracker_ is deployed on Netlify.

_Visualisation of outcomes with Chart.js_

![](./public/images/reports.png)


## Prerequisites
- Internet Connection
- An Integrated Development Environment
- Chrome, Firefox or Safari across all screen sizes
- Node Package Manager [(NPM)](https://docs.npmjs.com/about-npm)

## Built With
- React
- React Router v6
- Redux Toolkit
- Redux Saga
- Javascript ES6+
- Chart.js
- Bootstrap 5
- SCSS
- HTML5/CSS3


## Getting Started
- Clone this project by running `git clone https://github.com/george-swift/expense-tracker.git`
- Run `npm install` to install the required dependencies.
- Clone the [back end](https://github.com/george-swift/expense-tracker-api) to allow CORS. In `config/initializers/cors.rb`,
change `origins` to `http://localhost:FRONTENDPORT`.
- Within this frontend app, navigate to `src/constants` and set the `API_BASE_URL` to `http://localhost:BACKENDPORT`.
- Start the backend server and run `npm start` to fire up a local server.
- To get a production bundle, run `npm run build`

## Testing
Run `npm test` to get a verbose test report.

## Authors

👤 &nbsp; **Ubong George**
- LinkedIn: [Ubong George](https://www.linkedin.com/in/ubong-itok)
- Twitter: [@\_\_pragmaticdev](https://twitter.com/__pragmaticdev)
- GitHub: [@george-swift](https://github.com/george-swift)

## Acknowledgments

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/api/api-reference)
- [Chart.js](https://www.chartjs.org/docs/latest/getting-started/)
- [Microverse](https://www.microverse.org/)

## Show your support

Leave a :star:️ &nbsp; if you like this project!

## License

Available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).