const posts = [];

const getAllPost = (req, res) => {
  res.status(201).json(posts);
};

const addNewPost = (req, res) => {
  const NewPost = {
    id: Date.now(),
    title: req.body.title,
    post: req.body.post,
  };
  posts.push(NewPost);

  res.status(201).send(NewPost);
};

module.exports = { getAllPost, addNewPost };
