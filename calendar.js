var request = require("request");
var moment = require("moment");
var _ = require("lodash-node");
var hebCal = require("./hebCalWrapper");

var Calendar = function(currentDate, db) {

	this.getUpcoming = function(shabbatot) {
		var services = db.getServices();

		var upcomingShabbatot = _.filter(shabbatot, function(item) {
			var serviceDate = moment(item.date);
			return serviceDate.isAfter(currentDate);
		});

		return upcomingShabbatot;
	};
};

module.exports = Calendar;