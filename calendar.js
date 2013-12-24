var request = require("request");
var moment = require("moment");
var _ = require("lodash-node");
var hebCal = require("./hebCalWrapper");

var Calendar = function(currentDate) {

	this.getUpcoming = function(shabbatot) {
		var upcoming = _.filter(shabbatot, function(item) {
			var serviceDate = moment(item.date);
			return serviceDate.isAfter(currentDate);
		});

		return upcoming;
	};
};

module.exports = Calendar;