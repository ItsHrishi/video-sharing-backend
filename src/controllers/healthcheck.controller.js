import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiErros.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const healthcheck = asyncHandler(async (req, res) => {
  //TODO: build a healthcheck response that simply returns the OK status as json with a message
});

export { healthcheck };
