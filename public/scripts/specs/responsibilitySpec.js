define(["backbone", "responsibility"], function(Backbone, Responsibility) {
	describe("test runs", function() {
		it("first test", function() {
			var r = new Responsibility();
			expect(typeof r.get).toBe("function");
		});

		it("second test", function() {
			console.log("running second test");
			expect(3).toBe(3);
		});

		it("third test", function() {
			var r = new Responsibility({"mesharet": "Dave Nichol"});
			var m = r.get("mesharet");
			expect(m).toBe("Dave Nichol");
		});
	});
});
