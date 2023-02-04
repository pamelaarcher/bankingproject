# BadBank Banking App

## Table of content

- [Description](#description)
- [Installation Guidelines](#installation-guidelines)
- [Technology Used](#technology-used)
- [Features](#features)
- [Roadmap of Future Improvements](#roadmap-of-future-improvements)
- [Demo](#demo)
- [License](#license)

## Description
This banking application was created with create-react-app and uses React including react-router-dom for navigation routing, Bootstrap and Javascript.  The application includes a home, login, create account and ability to deposit and withdraw from the account.   There is also an administrative screen that displays user account information.  The application is being hosted on AWS.   This application was built for the MIT fullstack web development program and demonstrates the use of technologies including react, node, express, and backend Mongodb database.

## Installation Guidelines 
1. Clone this project to your local desktop.   There will be two subdirectories, bank-api (a back end server using node and express) and bank-react (a client side react project built with create-react-app).  The backend server provides the APIs to the database and routing logic.   

### Setting up the bank-react create-react-app application
1. Rename the new bank-react directory as we will be creating a new one with the same name with create-react-app.
2. Within the bank-react directory, run the following commands to create the create-react-app application.  It will also install react, react-dom and react-scripts using its generic template.  Change to the new directory and run npm to install additional libraries.   This will create a new react application.     
    &nbsp&nbsp npx create-react-app bank-react  
    &nbsp&nbsp cd bank-react  
    &nbsp&nbsp npm install bootstrap axios react-router-dom react-bootstrap  
3. Start up the create-react-app react generic application to make sure installation was successful.  It should start on localhost port 3000.  Then stop the app.
4. Delete everything from the new app's public and src directory.   Copy the files from the downloaded project which you renamed.
5. The bank-react application should be ready to run.  Run the npm command and make sure the app comes up on port 3000.  You cannot log in yet as it relies on the bank-api backend server so lets get that project set up.
     npm start  

### Setting up the node backend API server application
1. Go to the bank-api directory by issuing the command cd ../bank-api
2. Run the command below to create a node app and install dependencies
    npm init -y  
    npm install express cors mongodb  
3. Start up the server by issuing this command.   It will start the bank-api app on localhost:4000;
    node index,js

YOU SHOULD NOW BE UP AND RUNNING.  Run through the application functionality.  

## Technology Used
The client side application requires the following frameworks and libraries.   It runs on top of React.
 - <b>Create_React_App</b> - this installs the React framework along with react-dom and react-scripts and sets up a generic React project
 - <b>React-Router-Dom</b> - allows for hash URL routing across the different functions
 - <b>Bootstrap</b> - CSS styling library    
 - <b>Axios</b> - Allows http calls to the backend api server
    
The server side application requires the following frameworks and libraries.   It runs on top of Node.
 - <b>Node</b> - Javascript code runtime environment 
 - <b>Express</b> - Fast, unopinionated, minimalist web framework for Node.js that supports many functions including routing which is used by this application.
 - <b>CORS</b> - A node.js package that provides a Connect/Express middleware that can be used to enable CORS with various options
     
## Features
This application is made up of 10 main functions
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

