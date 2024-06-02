// Import required modules
const router = require("express").Router();
const { User } = require("../models");

// Register a new user
router.post("/users", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }).then((userData) => {
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = userData.id;
        res.status(200).json(userData);
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// User login
router.post("/users/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!userData) {
      res.status(400).json({ message: "Invalid email or password." });
      return;
    }

    const isCorrectPassword = await userData.checkPassword(req.body.password);

    if (!isCorrectPassword) {
      console.error(`Invalid email or password: ${userData}`);
      res.status(400).json({ message: "Invalid email or password." });
      return;
    } else {
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = userData.id;
        res.status(200).json(userData);
      });
      console.log("User logged in successfully.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// User logout
router.post("/users/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  }
});

module.exports = router;
