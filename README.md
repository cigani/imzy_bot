# Imzy Bot
A bot written in javascript for use with Imzy

##Usage

Sample script to post a simple text post to the Imzy Developers community

~~~javascript
// Import the library
var imzy = require("./request.js");

// Authenticate
var token = "asdfghjkl...";
var authentication = imzy.auth(token, "imzy_developers");

// Make your post
my_post = imzy.post;
my_post.submitter_display_username = "jacks";
my_post.title = "This post was made by a bot!";
my_post.contents.body = "I'm testing out a bot, and it made this post!";

// Send the post off!
imzy.send(authentication, my_post);
~~~
