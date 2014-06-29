var serviceDb = require("../../serviceDb");

describe("serviceDb", function() {
	var testDate = new Date(2014, 8, 27);

	var newService = {
		date: testDate,
		type: "shabbat",
		title: "Vayiqra"
	};

	beforeEach(function(done) {
		serviceDb.deleteService({date: newService.date, title: newService.title}, done);
	});

	it("returns empty list", function(done) {
		serviceDb.getServices(testDate, function(err, results) {
			if(err) throw err;

			expect(results.length).toBe(0);
			done();
		});
	});
	
	it("returns list of 1 after insert", function(done) {
		serviceDb.setService(newService, function() {
			serviceDb.getServices(testDate, function(err, results) {
				if(err) throw err;

				expect(results.length).toBe(1);
				done();
			});
		});

	});

	it("deletes services", function(done) {
		serviceDb.setService(newService, function(err, objects) {
			serviceDb.deleteService(newService, function(err, objects) {
				if(err) throw err;

				serviceDb.getServices(newService, function(err, results) {
					expect(results.length).toBe(0);
					done();
				});
			});
		});
	});
});

