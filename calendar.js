var request = require("request");
var moment = require("moment");
var _ = require("lodash-node");
var hebCal = require("./hebCalWrapper");
var serviceDb = require("./serviceDb");


var Calendar = function(currentDate) {

	this.getUpcoming = function(callback) {
		serviceDb.getServices(currentDate, callback);
	};
};

module.exports = Calendar;