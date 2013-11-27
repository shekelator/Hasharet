// Tests for server.js
var server = require("../server");
var request = require("request");
var moment = require("moment");
var _ = require("lodash-node");

var host = "http://localhost:8085";
describe("Server ", function() {
	it("Returns html", function(done) {
		request(host + "/public/index.html", function(error, response, body) {
			expect(body).toContain("Home!");
			done();
		});
	});
});

describe("Calendar API ", function() {
	it("returns valid dates", function(done) {
		request(host + "/api/calendar", function(error, response, body) {
			var data = JSON.parse(body);

			expect(data.length).toBeGreaterThan(0);
			_.each(data, function(item) {
				expect(moment(item.ServiceDate).isValid()).toBe(true);
			});
			done();
		});
	});

	it("only returns dates with date greater than today", function(done) {
		request(host + "/api/calendar", function(error, response, body) {
			var data = JSON.parse(body);
			var now = moment();

			_.each(data, function(item) {
				var serviceDate = moment(item.ServiceDate);
				expect(serviceDate.diff(now)).toBeGreaterThan(0);
			});
			done();
		});
	});


});
