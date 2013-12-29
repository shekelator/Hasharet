var calendar = require("../calendar");
var moment = require("moment");
var _ = require("lodash-node");
var sinon = require("sinon");
require("jasmine-sinon");

describe("Calendar", function() {
		var dates;
		var db;

		beforeEach(function() {
			dates = [{
					title: "Parashat Bo",
					category: "parashat",
					date: "2013-01-19",
					link: "http://www.hebcal.com/sedrot/bo",
					hebrew: "פרשת בא"
				},
				{
					title: "Parashat Beshalach",
					category: "parashat",
					date: "2013-01-26",
					link: "http://www.hebcal.com/sedrot/beshalach",
					hebrew: "פרשת בשלח"
				},
				{
					title: "Tu BiShvat",
					category: "holiday",
					date: "2013-01-26",
					link: "http://www.hebcal.com/holidays/tu-bishvat",
					hebrew: "טו בשבט"
				},
				{
					title: "Parashat Yitro",
					category: "parashat",
					date: "2013-02-02",
					link: "http://www.hebcal.com/sedrot/yitro",
					hebrew: "פרשת יתרו"
				},
				{
					title: "Parashat Mishpatim",
					category: "parashat",
					date: "2013-02-09",
					link: "http://www.hebcal.com/sedrot/mishpatim",
					hebrew: "פרשת משפטים"
				}];

				db = {};
				db.getServices = sinon.stub();
				db.getServices.returns([]);
			});

	it("returns dates", function(done) {
		var cal = new calendar("2013-01-02", db);
		var result = cal.getUpcoming(dates);
		expect(result.length).toBeGreaterThan(0);
		done();
	});

	it("returns dates greater than current date", function(done) {
		var cal = new calendar("2013-01-02", db);
		var result = cal.getUpcoming(dates);
		expect(result.length).toBe(5);

		var cal2 = new calendar("2013-01-20", db);
		result = cal2.getUpcoming(dates);
		expect(result.length).toBe(4);
		done();
	});

	it("returns saturdays", function(done) {
		var cal = new calendar("2013-01-02", db);
		var result = cal.getUpcoming(dates);
		var shabbatot = _.filter(result, {category: "parashat"});
		expect(shabbatot.length).toBe(4);

		_.each(shabbatot, function(item) {
				var dayOfWeek = moment(item.date).weekday();
				expect(dayOfWeek).toBe(6);
			});
		done();
	});
});