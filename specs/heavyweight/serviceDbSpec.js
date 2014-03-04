var serviceDb = require("../serviceDb");

describe("serviceDb", function() {
	it("returns dates", function(done) {
		serviceDb.getServices("2013-06-07", function(err, data) {
			expect(data).not.toBeUndefined();
			expect(data[0].date).toBe("2013-01-05");
			expect(data[0].title).toBe("Parashat Shemot");
			done();
		});
	});

