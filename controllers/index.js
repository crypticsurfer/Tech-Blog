const router = require("express").Router();
const api = require("./api");
const withAuth = require("../utils/auth");
const { User, Comment, Post } = require("../models");

const getUsername = async (userId) => {
  const user = await User.findOne({
    where: {
      id: userId,
    },
  });
  return user.dataValues.username;
};

router.use("/api", api);
router.get("/", withAuth, async (req, res) => {
  const results = await Post.findAll({
    include: { model: User },
  });
  postArray = results.map((r) => {
    return {
      id: r.dataValues.id,
      title: r.dataValues.title,
      author: r.user.dataValues.username,
      createdAt: r.dataValues.created_at,
    };
  });

  res.render("home", {
    username: await getUsername(req.session.user_id),
    blogs: postArray,
  });
});

router.get("/dashboard", withAuth, async (req, res) => {
  const results = await Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    include: { model: User },
  });
  postArray = results.map((r) => {
    return {
      id: r.dataValues.id,
      title: r.dataValues.title,
      createdAt: r.dataValues.created_at,
    };
  });

  res.render("dashboard", {
    blogs: postArray,
  });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/blog/:id", withAuth, async (req, res) => {
    try {
      let blog = await Post.findOne({
        where: {
          id: req.params.id,
        },
        include: {
          model: Comment,
          include: {
            model: User,
          },
        },
      });
  
      res.render("blog", {
        ...blog.dataValues,
        username: await getUsername(blog.dataValues.user_id),
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/new-blog", withAuth, async (req, res) => {
    res.render("new-blog");
  });
  
  router.get("/new-blog/:id", withAuth, async (req, res) => {
    try {
      let blog = await Post.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.render("new-blog", {
        ...blog.dataValues
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;


