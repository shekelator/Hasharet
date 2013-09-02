define(["backbone", "responsibility"], function(Backbone, Responsibility) {
	describe("test runs", function() {
		it("first test", function() {
			var r = new Responsibility();
console.log("running first test");
			expect(typeof r.get).toBe("function");
		});

		it("second test", function() {
			console.log("running second test");
			expect(3).toBe(3);
		});
	});
});
