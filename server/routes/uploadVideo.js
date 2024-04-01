const express = require('express');
const multer = require('multer')

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route to handle video uploads from frontend
router.post('/video', upload.single('file'), (req, res) => {
  if (req.file) {
    console.log(`Video uploaded: ${req.file.filename}`);
    res.json({ message: 'Video uploaded successfully!', filename: req.file.filename });
  } else {
    res.status(400).json({ message: 'No video uploaded!' });
  }
});

module.exports=router;