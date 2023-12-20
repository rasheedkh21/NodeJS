const { Router } = require("express");
const { getAllPost, addNewPost } = require("../controller/post.controller");

const router = Router();

router.get("/all", getAllPost);
router.post("/add", addNewPost);


module.exports = router;