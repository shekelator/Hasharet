var request = require("request");

var HebCalWrapper =  {
	getShabbatot: function(year, callback) {
		var url = "http://www.hebcal.com/hebcal/?v=1&cfg=json&year=" + year + "&nh=on&ss=on&s=on&i=off&lg=s"
		request(url, {json: true}, function(error, response, body) {
			if(!error && response.statusCode !== 200) {
				callback(new Error("Got status code of " + response.statusCode)); 
			}
			var items = body.items;
			callback(error, items);
		});
	}
};

module.exports = HebCalWrapper;