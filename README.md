# Imzy Bot
A bot written in javascript for use with Imzy

##Usage

###Find your token

Imzy does not currently provide a good way for users to get their authentication token. To find it, you must capture one of your outgoing POST requests to Imzy. It will be in labled "sid" in the header.

###Code

Sample script to post a simple text post to the Imzy Developers community

~~~javascript
// Import the library
var imzy = require("./path/to/request.js");

// Authenticate
var token = "asdfghjkl...";
var authentication = imzy.auth(token, "imzy_developers");

// Make your post
my_post = imzy.post;
my_post.submitter_display_username = "your_display_name_here";
my_post.title = "This post was made by a bot!";
my_post.contents.body = "I'm testing out a bot, and it made this post!";

// Send the post off!
imzy.send(authentication, my_post);
~~~

##Reference
All posts require a title. `contents.body` is optional for all types except text.

###Text
~~~javascript
post = imzy.post;
post.type_id = 'text'; //this is default
post.title = "[title text]"
post.contents.body = "[body text]";
~~~

###Link
I will eventually add function to produce this manually, but for now this is good.
~~~javascript
post = imzy.post;
post.type_id = 'link';
post.title = "[title text]"
posts.content.url = "[link]
posts.content.preview = {
	"url":"[link]",
	"title":"[page title]",
	"text_preview":"[page title subtext/blurb]",
	"favicon_url":[page favicon (optional)]
}
~~~
