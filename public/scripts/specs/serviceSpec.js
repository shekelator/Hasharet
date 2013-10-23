define(["underscore", "service"], function(_, Service) {
	describe("test runs", function() {

		var fakeServiceRepo = (function() {
			var services = [];
			this.Get = function() {
				return services;
			};
		})();

		it("service dependency has create method", function() {
			var r = new Service();
			expect(typeof r.Create).toBe("function");
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
