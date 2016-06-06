var imzy = require("./request.js");
var imzy_json = require("./imzy_json.js");

module.exports.auth = imzy.auth();
module.exports.send = imzy.send();
module.exports.post = imzy.post();
module.exports.get_community = imzy_json.get_community();