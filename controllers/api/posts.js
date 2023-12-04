const router = require("express").Router();
const { User, Comment, Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  Post.create({
    title: req.body.title,
    body: req.body.body,
    user_id: req.session.user_id,
  })
    .then((post) => res.status(200).json(post))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/:id", withAuth, async (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((post) => res.status(200).json(post))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", withAuth, async (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((post) => res.status(200).json(post))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;