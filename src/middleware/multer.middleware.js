import multer from "multer";

// *****-need-to-work***********
// here we need to make a small change about change the file name as npw we are keeping
// the user defined file name these may make the problem in fuure, refere docs

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });
