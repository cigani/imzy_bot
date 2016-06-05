var http = require("https");



header = function(sid, type, com) {
	types = {};
	types.post = {
		"method": "POST",
		"hostname": "www.imzy.com",
		"port": null,
		"path": "/api/communities/" + com + "/posts",
		"headers": {
			"sid": sid,
			"origin": "https://www.imzy.com",
			"tz": "-300",
			"lcid": "en-us",
			"user-agent": "imzy bot by jacks (https://sarick.tech)",
			"content-type": "application/json",
			"accept": "*/*",
			"dnt": "1",
			// "referer": "https://www.imzy.com/" + com + "/post/create",
			"accept-encoding": "gzip, deflate, br",
			"accept-language": "en-US,en;q=0.8",
			"cookie": "sid=" + sid,
			"cache-control": "no-cache",
		}
	};

	// types.comment = {}

	return types[type];
};

var post = {
	"submitter_display_username": "[no name]",
	"feature": 'none',
	"flags": {
		"is_anonymous": false,
		"allow_comments": true,
		"allow_anonymous_comments": true,
		"is_meta": false
	},
	"type_id": 'text',
	"contents": { body: "[no content]"},
	"title": '[no title]',
	"tags": [],
	"is_spoiler": false,
	"is_nsfw": false 
};

send = function(header, content){
	// Send a request with our header, and wait for a response
	var req = http.request(header, function (res) {
		var chunks = [];

		// Collect all the data we recieve
		res.on("data", function (chunk) {
			chunks.push(chunk);
		});

		// Print all the data when the connection ends
		res.on("end", function () {
			var data = Buffer.concat(chunks);
			console.log(data.toString());
		});
	});

	// Write the body content of our post to request
	req.write(JSON.stringify(content));

	// Terminate the request once we're done
	req.end();
}

module.exports.auth = header;
module.exports.send = send;
module.exports.post = post;