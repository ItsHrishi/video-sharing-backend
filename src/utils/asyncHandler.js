// using promise

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// explanation of below :

// const asyncHandler = () => {}; // normal function
// const asyncHandler = (func) => {
// return () => {}
// }; // higner order function
// const asyncHandler = (func) => {return async () => {};} //

// another way to do this :

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       message: error.message,
//     });
//   }
// };
