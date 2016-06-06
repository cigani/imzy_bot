var http = require("https");

var get_community = function(sid, com, callback, page, amount) {

	// Weird workaround to get default parameters working
	page = page || 1
	amount = amount || 100

	// Assemble the request
	var options = {
		"method": "GET",
		"hostname": "www.imzy.com",
		"port": null,
		"path": "/api/feed/communities/" + com + "?page=" + page + "&per_page=" + amount,
		"headers": {
			"sid": sid,
			"tz": "-300",
			"content-type": "application/json",
			"accept": "application/json; fields=body,embed,preview,image_url,url,processed_body.text,processed_body.media,has_embed,has_preview,has_image_url,processed_body.has_media;",
			"user-agent": "imzy bot by jacks (https://sarick.tech)",
			"lcid": "en-us",
			"dnt": "1",
			"accept-encoding": "gzip, deflate, sdch, br",
			"accept-language": "en-US,en;q=0.8",
			"cookie": "sid=" + sid,
			"cache-control": "no-cache"
		}
	};

	// Send our request
	return get_request(options, callback);
}

// Simple get request
get_request = function (header, callback) {
	var data = "uh oh";
	var flag = true;
	var req = http.request(header, function (res) {
		var chunks = [];

		res.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res.on("end", function () {
			var body = Buffer.concat(chunks);
			return callback(JSON.parse(body.toString()));
		});
	});

	req.end();
}

module.exports = get_community;