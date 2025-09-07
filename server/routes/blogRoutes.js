import express from "express";
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogById, getAllBlogs, getBlogComment, togglePusblish } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), auth, addBlog)
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getAllBlogById);
blogRouter.post("/delete",auth, deleteBlogById);
blogRouter.post("/toggle-publish",auth, togglePusblish);

blogRouter.post('/add-comment', addComment)
blogRouter.post('/comments', getBlogComment)
blogRouter.post('/generate', auth, generateContent)


export default blogRouter;