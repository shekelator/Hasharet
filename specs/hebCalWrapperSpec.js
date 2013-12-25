var hebCal = require("../hebCalWrapper");
var moment = require("moment");
var _ = require("lodash-node");

describe("HebCalWrapper", function() {
	it("returns dates", function(done) {
		hebCal.getShabbatot("2013-06-07", function(err, data) {
			expect(data).not.toBeUndefined();
			expect(data[0].date).toBe("2013-01-05");
			expect(data[0].title).toBe("Parashat Shemot");
			done();
		});
	});

	it("returns dates in year", function(done) {
		hebCal.getShabbatot("2011-06-07", function(err, data) {
			expect(data).not.toBeUndefined();

			expect(moment(data[0].date).isBefore("2012-01-01")).toBeTruthy();
			expect(moment(data[0].date).isAfter("2010-12-31")).toBeTruthy();
			done();
		});
	});

	it("returns parshiot", function(done) {
		hebCal.getShabbatot("2013-06-07", function(err, data) {
			expect(data).not.toBeUndefined();

			var hasYk = _(data).some({title: "Erev Yom Kippur", category: "holiday"});
			expect(hasYk).toBeTruthy();
			var hasMishpatim = _(data).some({title: "Parashat Mishpatim", category: "parashat"});
			expect(hasMishpatim).toBeTruthy();

			done();
		});
	});

	it("returns dates over multiple years", function (done) {
		var date = "2013-12-17";
		hebCal.getShabbatot(date, function(err, data) {
			expect(data).not.toBeUndefined();

			var hasDatesIn2013 = _(data).some(function(item) {
				return moment(item.date).year() === 2013;
			});
			expect(hasDatesIn2013).toBe(true);

			var hasDatesIn2014 = _(data).some(function(item) {
				return moment(item.date).year() === 2014;
			});
			expect(hasDatesIn2014).toBe(true);

			done();
		});
	});


	it("returns dates in a single year if only 10 dates", function (done) {
		var date = "2013-06-17";
		hebCal.getShabbatot(date, function(err, data) {
			expect(data).not.toBeUndefined();

			var allDatesIn2013 = _(data).every(function(item) {
				return moment(item.date).year() === 2013;
			});
			expect(allDatesIn2013).toBe(true);

			done();
		});
	});
});