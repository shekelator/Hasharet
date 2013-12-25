var request = require("request");
var moment = require("moment");
var _ = require("lodash-node");

var minimumNumberInThisYearToReturn = 10;

var HebCalWrapper =  {
	getShabbatot: function(date, callback) {
		var self = this;
		var effectiveDate;
		if(typeof date === "function" && !callback) {
			callback = date;
			effectiveDate = moment();
		} else {
			effectiveDate = moment(date);
		}

		var year = moment(effectiveDate).year();
		var url = "http://www.hebcal.com/hebcal/?v=1&cfg=json&nh=on&ss=on&s=on&i=off&lg=s&year=";
		request(url + year, {json: true}, function(error, response, body) {
			if(!error && response.statusCode !== 200) {
				callback(new Error("Got status code of " + response.statusCode)); 
			}

			var itemsAfterEffectiveDate = _.filter(body.items, function(item) {
				return moment(item.date).isAfter(effectiveDate);
			});

			if(itemsAfterEffectiveDate.length < minimumNumberInThisYearToReturn) {
				request(url + (year + 1), {json: true}, function(err, resp, secondBody) {
					if(!err && resp.statusCode !== 200) {
						callback(new Error("Got status code of " + resp.statusCode)); 
					}

					var result = _.union(body.items, secondBody.items);
					callback(error, result);
				});
			} else {
				callback(error, body.items);
			}
		});
	}
};

module.exports = HebCalWrapper;