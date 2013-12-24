var hebCal = require("../hebCalWrapper");
var moment = require("moment");
var _ = require("lodash-node");

describe("HebCalWrapper", function() {
	it("returns dates", function(done) {
		hebCal.getShabbatot("2013", function(err, data) {
			expect(data).not.toBeUndefined();
			expect(data[0].date).toBe("2013-01-05");
			expect(data[0].title).toBe("Parashat Shemot");
			done();
		});
	});

	it("returns dates in year", function(done) {
		hebCal.getShabbatot("2011", function(err, data) {
			expect(data).not.toBeUndefined();

			expect(moment(data[0].date).isBefore("2012-01-01")).toBeTruthy();
			expect(moment(data[0].date).isAfter("2010-12-31")).toBeTruthy();
			done();
		});
	});

	it("returns parshiot", function(done) {
		hebCal.getShabbatot("2013", function(err, data) {
			expect(data).not.toBeUndefined();

			var hasYk = _(data).some({title: "Erev Yom Kippur", category: "holiday"});
			expect(hasYk).toBeTruthy();
			var hasMishpatim = _(data).some({title: "Parashat Mishpatim", category: "parashat"});
			expect(hasMishpatim).toBeTruthy();

			done();
		});
	});

	it("returns dates over multiple years");
});