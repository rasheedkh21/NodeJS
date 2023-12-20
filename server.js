const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
//Blog Post //All files should be on js format
app.use(express.json());

const PORT = process.env.PORT || 3000;
// router initialize (bog'lash)
app.use("posts", require("./routes/post.route"));

//Server running
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
