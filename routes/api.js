/*
 * Serve JSON to our AngularJS client
 */

exports.products = function (req, res) {
	var request = require("request");
	var productsUrl = "https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js";
	var options = { url: productsUrl };

	request(options, function(error, response, body) {
		console.log('response: ' + response.statusCode);
	  	if (!error && response && response.statusCode == 200) {
			res.status(200).json(JSON.parse(body));
		}else if(response !== undefined && response.statusCode == 401){
			res.status(401).send({"status": "failure", "message": "Unauthorized"});
		} else {
			res.status(500).send({"status": "failure", "message": "Internal Server Error. Please try again later."});
		}
	});
};