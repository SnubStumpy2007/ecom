# E-Commerce Back End

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This project is the back end for an e-commerce website. It utilizes Express.js API and Sequelize to interact with a MySQL database. The application allows users to manage categories, products, and tags by performing CRUD (Create, Read, Update, Delete) operations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)
- [Questions](#questions)

## Installation

1. Clone the repository.
2. Navigate to the project folder in your terminal.
3. Run `npm install` to install the required dependencies.
4. Create a `.env` file in the root directory and provide your MySQL username, password, and database name as follows:
        DB_USER=your_username
        DB_PASSWORD=your_password
        DB_NAME=your_database_name
5. Run the database schema creation using the `schema.sql` file in the `db` folder.
6. Seed the database with test data using `npm run seed`.

## Usage

1. Once the database is set up, run `npm start` to start the server.
2. The Sequelize models will sync with the MySQL database.
3. Use an API client (such as Insomnia) to test the API routes.

## Walkthrough Video

[Watch the Walkthrough Video](link_to_your_walkthrough_video)

The walkthrough video demonstrates the following:

- Creating the database schema using MySQL shell.
- Seeding the database with test data from the command line.
- Starting the application's server.
- Testing GET routes for all categories, products, and tags in an API client.
- Testing GET routes for a single category, product, and tag.
- Testing POST, PUT, and DELETE routes for categories, products, and tags.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Questions

If you have any questions or need further assistance, feel free to contact me:

- GitHub: [SnubStumpy2007](https://github.com/SnubStumpy2007/ecom)
- Email: joshua192007@gmail.com


# Sources
https://github.com/jakekelly44/ecomm-backend/blob/master/routes/api/category-routes.js
https://sequelize.org/docs/v6/other-topics/typescript/#the-case-of-modelinit
Activity 05 from the 13-ORM Module
https://sebhastian.com/sequelize-init/
https://sequelize.org/docs/v6/core-concepts/model-basics/
https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
https://expressjs.com/en/guide/routing.html
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-select-queries
https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://sequelize.org/docs/v6/core-concepts/assocs/
https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-constructor-constructor
https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554
TA Samuel Cordova
Tutor Wesley Clements