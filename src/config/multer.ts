import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    cb(null, `${timestamp}_${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
});

export default upload;
