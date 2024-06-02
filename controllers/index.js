// Import necessary modules and create a router instance
const router = require("express").Router();

// Import route modules
const apiRoutes = require("./api-routes.js");
const homeRoutes = require("./home-routes.js");
const dashRoutes = require("./dash-routes.js");

// Route middleware for different routes
router.use("/", homeRoutes); // Home routes
router.use("/api", apiRoutes); // API routes
router.use("/dash", dashRoutes); // Dashboard routes

// Export the router for use in other parts of the application
module.exports = router;
