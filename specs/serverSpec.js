// Tests for server.js

var server = require("../server");
var request = require("request");

describe("Server ", function() {
	it("Returns html", function(done) {
		request("http://localhost:8085/public/index.html", function(error, response, body) {
			expect(body).toContain("Home!");
			done();
		});
	})
});