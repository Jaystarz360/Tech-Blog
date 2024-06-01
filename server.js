// Importing necessary dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
require('dotenv').config();

// Initializing the Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Configuring session settings
const sess = {
  secret: process.env.DB_SESS,
  resave: false,
  saveUninitialized: false,
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Applying session middleware
app.use(session(sess));

// Setting up Handlebars.js as the template engine
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle routing
app.use(routes);

// Sync Sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});