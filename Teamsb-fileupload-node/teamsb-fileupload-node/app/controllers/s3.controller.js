const s3 = require('../config/s3.config.js');
const env = require('../config/s3.env.js');
 
exports.doUpload = (req, res) => {
	const params = {
		Bucket: env.Bucket,
		Key: req.file.originalname,
		Body: req.file.buffer
	}
	
	s3.upload(params, (err, data) => {
		if (err) {
			res.status(500).send("Error -> " + err);
		}
		res.send("File uploaded successfully! -> keyname = " + req.file.originalname);
	});
}

exports.listKeyNames = (req, res) => {
	const params = {
		Bucket: env.Bucket
	}

	var keys = [];
	s3.listObjectsV2(params, (err, data) => {
        if (err) {
			console.log(err, err.stack); // an error occurred
			res.send("error -> "+ err);
        } else {
            var contents = data.Contents;
            contents.forEach(function (content) {
                keys.push(content.Key);
			});
			res.send(keys);
		}
	});
}

exports.doDownload = (req, res) => {
	const params = {
		Bucket: env.Bucket,
		Key: req.params.filename
	}

	res.setHeader('Content-Disposition', 'attachment');

	s3.getObject(params)
		.createReadStream()
			.on('error', function(err){
				res.status(500).json({error:"Error -> " + err});
		}).pipe(res);
}