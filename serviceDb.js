var MongoClient = require("mongodb").MongoClient;
var format = require("util").format;

var db = {
	getServices: function(currentDate, callback) {
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
	}
};

module.exports = db;
