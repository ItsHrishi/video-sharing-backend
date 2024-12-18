import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  addComment,
  deleteComment,
  getVideoComments,
  updateCommnet,
} from "../controllers/comment.controller.js";

const router = Router();

//adding the middle ware to all the comment routes are protected
router.use(verifyJWT);

router.route("/:videoId").get(getVideoComments).post(addComment);
router.route("/c/:commentId").delete(deleteComment).patch(updateCommnet);

export default router;
