let express = require('express');
let router = express.Router();
 
let upload = require('../config/multer.config.js');
let deleteFile =require('../config/multer.config.js');

const awsWorker = require('../controllers/s3.controller.js');
 
router.post('/api/files/upload', upload.single("file"), awsWorker.doUpload);

router.get('/api/files/all', awsWorker.listKeyNames);

router.get('/api/files/:filename', awsWorker.doDownload);

router.delete('/api/files/deleteFile',deleteFile.single("file"),awsWorker.doDelete);
 
module.exports = router;