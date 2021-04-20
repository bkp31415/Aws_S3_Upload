const multer = require('multer');
 
var storage = multer.memoryStorage()
var upload = multer({storage: storage});
var deleteFile = multer({storage: storage});
module.exports = upload;
module.exports = deleteFile;