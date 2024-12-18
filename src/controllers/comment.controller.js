import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getVideoComments = asyncHandler(async (req, res) => {
  // todo : get all comments from a video
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.querry;
});

const addComment = asyncHandler(async (req, res) => {
  // todo: add a comment to a video
});

const updateCommnet = asyncHandler(async (req, res) => {
  // todo: update a commnet
});

const deleteComment = asyncHandler(async (req, res) => {
  // todo: delete commnet from video
});

export { getVideoComments, addComment, updateCommnet, deleteComment };
