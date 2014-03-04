var request = require("request");
var moment = require("moment");
var _ = require("lodash-node");
var hebCal = require("./hebCalWrapper");
var serviceDb = require("./serviceDb");


var Calendar = function(currentDate) {

	this.getUpcoming = function(shabbatot, callback) {
		MongoClient.connect("mongodb://127.0.0.1/services", function(err, db) {
			if(err) { throw err; }

			var collection = db
				.collection("services")
				.find({})
				.toArray(function(err, results) {

					var upcomingShabbatot = _.filter(results, function(item) {
						var serviceDate = moment(item.date);
						return serviceDate.isAfter(currentDate);
					});

					callback(err, upcomingShabbatot);
				});
		});


		return upcomingShabbatot;
	};
};

module.exports = Calendar;