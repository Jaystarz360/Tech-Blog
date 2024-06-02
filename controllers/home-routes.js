// Router and model imports
const router = require("express").Router();
const { Blog, User, Comment } = require("../models");
const checkLogin = require("../utils/login");

// Route to fetch all blogs and render the homepage
router.get("/", async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const blogbatch = dbBlogData.map((blog) => blog.get({ plain: true }));
    res.render("home", {
      blogbatch,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to view a single blog, its comments, and leave a comment
router.get("/blog/:id", checkLogin, async (req, res) => {
  try {
    const oneBlog = await Blog.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "blogTitle", "blogBody", "createdAt"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["comBody", "user_id", "blog_id", "createdAt"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });
    const mapBlog = oneBlog.get({ plain: true });
    res.render("viewBlog", {
      loggedIn: req.session.loggedIn,
      mapBlog,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to post a comment to a blog
router.post("/comm", checkLogin, async (req, res) => {
  const blogID = parseInt(req.body.blog_id);
  try {
    const postComm = await Comment.create({
      comBody: req.body.comBody,
      user_id: req.session.user_id,
      blog_id: blogID,
    });
    res.status(200).json(postComm);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to navigate to the login screen
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Export the router
module.exports = router;
