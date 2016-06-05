var http = require("https");

user = {
	"sid": "ASDFGHJKL...",
	"name": "your_name_here"
};


var header = {
	"method": "POST",
	"hostname": "www.imzy.com",
	"port": null,
	"path": "/api/communities/b/posts",
	"headers": {
		"sid": user.sid,
		"origin": "https://www.imzy.com",
		"tz": "-300",
		"lcid": "en-us",
		"user-agent": "imzy bot by jacks (https://sarick.tech)",
		"content-type": "application/json",
		"accept": "*/*",
		"dnt": "1",
		"referer": "https://www.imzy.com/b/post/create",
		"accept-encoding": "gzip, deflate, br",
		"accept-language": "en-US,en;q=0.8",
		"cookie": "sid=" + user.sid,
		"cache-control": "no-cache",
	}
};

var body = {
	"communitySlug": 'b',
	"submitter_display_username": user.name,
	"feature": 'none',
	"flags": {
		"is_anonymous": false,
		"allow_comments": true,
		"allow_anonymous_comments": true,
		"is_meta": false
	},
	"type_id": 'text',
	"contents": { body: "First test of my node.js library. If this works, I'll be polishing it up and posting it to github."},
	"title": 'Node.js library test',
	"tags": [],
	"is_spoiler": false,
	"is_nsfw": false 
};


// Send a request with our header, and wait for a response
var req = http.request(header, function (res) {
	var chunks = [];

	// Collect all the data we recieve
	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	// Print all the data when the connection ends
	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

// Write the body content of our post to request
req.write(JSON.stringify(body));

// Terminate the request once we're done
req.end();