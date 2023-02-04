# BadBank Banking App

## Table of content

- [Description](#description)
- [Installation Guidelines](#installation)
- [Features]
- [Roadmap of Future Improvements](#roadmap)
- [Demo](#demo)
- [License](#license)

## Description
This banking application was created with create-react-app and uses React including react-router-dom for navigation routing, Bootstrap and Javascript.  The application includes a home, login, create account and ability to deposit and withdraw from the account.   There is also an administrative screen that displays user account information.  The application is being hosted on AWS.   This application was built for the MIT fullstack web development program and demonstrates the use of technologies including react, node, express, and backend Mongodb database.

## Installation Guidelines: 
1) Clone this project to your local desktop.   There will be two subdirectories, bank-api (a back end server using node and express) and bank-react (a client side react project built with create-react-app.  
2) Within the bank-react directory, run the following commands to create the create-react-app
    npx create-react-app bank-react
   
2) Clone this repository on a local machine and move the files into the newly created react application,  replacing index.html, index.js and App.js that are automatically created with the create-react-app directory structure.
  - public directory includes index.html where a root div is created to render components with App as the parent.   It also includes an images directory where application images are stored
  - src directory includes both an assets/styles directory where the .css files are stored as well as the application component .js files.  These should be all copied to the src directory created by the new directory structure.
3) Open a terminal window and go to the new directory created where the application files have now been copied.  Type in <b><i>npm start</i></b> to start up the application.  It will open in the browser using the assigned localhost address.

## Technology used:
## Features:
This application is made up of 10 main files
  - <b>index.js</b> which renders the main App component into the DOM
  - <b>app.js</b> is the parent component that manages the navigation routes to the children components.
  - <b>context.js</b> sets the user context.  It also includes the Card component which is used by other components to render the screen
  - <b>navbar.js</b> is the navigation bar component with links to all of the children components
  - <b>home.js</b> includes a bootstrap card displaying information about Badbank and providing buttons to enroll or login
  - <b>login.js</b> includes a bootstrap driven login screen.   There are 4 users that are hardcoded into the application (email 'abel@mit.edu' with password, 'secret01' or email of 'juliesmith@gmail.com' and password, 'newone02' are two) and can be used to login or you can create a new account and use this account to login. 
  - <b>createaccount.js</b> allows the user to create a new account
  - <b>deposit.js</b> allows the logged in user to add $$ to their account
  - <b>withdraw.js</b> allows the logged in user to withdraw $$ to their account
  - <b>alldata.js</b> shows user account information styled using bootstrap cards.
 
## Roadmap of Future Improvements
•	Create role logins including for admin.  User account information through All Data would only display when the admin is logged in.
•	Not show Deposit and Withdraw link options until user is logged in.

## Demo
* [Banking Demo](http://pamela-archerbankingapplication.s3-website-us-west-1.amazonaws.com/)

## License

MIT License

Copyright (c) 2022
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Learn More about Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

