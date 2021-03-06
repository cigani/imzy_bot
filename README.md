# Imzy Bot

<center><img src="https://raw.githubusercontent.com/jacksarick/imzy_bot/master/media/imzy_borg_transparent_small.png"></center>

A bot written in javascript for use with Imzy

##Usage

###Find your token

Imzy does not currently provide a good way for users to get their authentication token. To find it, you must capture one of your outgoing POST requests to Imzy. It will be in labled "sid" in the header.

###Code

Sample script to post a simple text post to the Imzy Developers community

~~~javascript
// Import the library
var imzy = require("./path/to/main.js");

// Authenticate
var token = "asdfghjkl...";
var authentication = imzy.auth(token, "imzy_developers");
authentication.path = "/api/communities/imzy_developers/posts"; // More detail on this later

// Make your post
my_post = imzy.post;
my_post.submitter_display_username = "your_display_name_here";
my_post.title = "This post was made by a bot!";
my_post.contents.body = "I'm testing out a bot, and it made this post!";

// Send the post off!
imzy.send(authentication, my_post);

//Now check to see if it's on top
imzy.get_community(token, "imzy_developers", function(data) {
	data = data;
	console.log(data[0].title)
});
~~~

##Reference
All posts require a title. `contents.body` is optional for all types except text.

###Text Post
~~~javascript
post = imzy.post;
post.type_id = 'text'; //this is default
post.title = "[title text]"
post.contents.body = "[body text]";
~~~

###Link Post
I will eventually add function to produce this manually, but for now this is good.
~~~javascript
post = imzy.post;
post.type_id = 'link';
post.title = "[title text]"
posts.content.url = "[link]"
posts.content.preview = {
	"url":"[link]",
	"title":"[page title]",
	"text_preview":"[page title subtext/blurb]",
	"favicon_url":"[page favicon (optional)]"
}
~~~

###Image posts
I can't figure out how to do the upload, so this is a workaround
~~~javascript
post = imzy.post;
post.type_id = 'image';
post.title = "[title text]"
post.content.image_url = "[link to image]"
post.content.image_type = "image/[png, jpg, gif, etc...]"
~~~
