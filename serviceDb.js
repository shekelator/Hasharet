var MongoClient = require("mongodb").MongoClient;
var format = require("util").format;
var _ = require("lodash-node");
var moment = require("moment");

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

					callback(err, results);
				});

			});
	},

	setService: function(service, callback) {
		var date = service.date;
		var title = service.title;
		MongoClient.connect("mongodb://127.0.0.1/services", function(err, db) {
			if(err) { throw err; }

				db.collection("services")
					.update({"date": date, "title": title}, service,{w:1, multi: false, upsert: true}, function(err, objects) {
					if(err) {
						console.warn(err.message);
					}

					callback(err, objects);
				});
			});
	},

	deleteService: function(service, callback) {
		var date = service.date;
		var title = service.title;
		MongoClient.connect("mongodb://127.0.0.1/services", function(err, db) {
			if(err) { throw err; }

				db.collection("services")
					.remove({"date": date, "title": title}, {w:1}, function(err, objects) {
					if(err) {
						console.warn(err.message);
					}

					callback(err, objects);
				});
 			});

	}
};

module.exports = db;
