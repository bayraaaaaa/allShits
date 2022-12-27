import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  userName: String,
  privacy: String,
  description: String,
  image: String,
});
const Post = mongoose.model("Post", PostSchema);

export default Post;
