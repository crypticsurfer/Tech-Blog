const router = require("express").Router();
const { User, Comment, Post } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const userCredentials = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userCredentials) {
      res
        .status(400)
        .json({
          message:
            "Cannot find user with this username and password combination",
        });
      return;
    }
    const validPassword = userCredentials.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res
        .status(400)
        .json({
          message:
            "Cannot find user with this username and password combination",
        });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userCredentials.id;
      req.session.logged_in = true;
      res.json({ user: userCredentials, message: "Logged in" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/signup", (req, res) => {
  User.findOne({
    where: { username: req.body.username },
  })
    .then((userCredentials) => {
      if(userCredentials) {
        res.status(400).json({
          message: "User already exists with that username"
        });
        return;
      }
  });

  User.create(req.body)
    .then((user) => {
      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.logged_in = true;
        res.json({ user: user, message: "Signed up" });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/logout", (req, res) => {
    req.session.save(() => {
      req.session.user_id = null;
      req.session.logged_in = false;
      res.json({ user: null, message: "Logged out" });
    });
  })
  
module.exports = router;