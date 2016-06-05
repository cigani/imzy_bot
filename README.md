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
