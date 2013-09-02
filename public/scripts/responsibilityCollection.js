define(["underscore", "backbone", "responsibility"], function(_, Backbone, Responsibility) {

	var responsibilityCollection = Backbone.Collection.extend({
		model: Responsibility,

		initialize: function(options) {
		},

		availableResponsibilities: {
			"Torah": "Torah service",
			"Haftarah": "Torah service",
			"Besorah": "Torah service",
			"Nursery": undefined,
			"Kita Aleph": "Shabbat school",
			"Kita Aleph assistant": "Shabbat school",
			"Kita Bet": "Shabbat school",
			"Kita Bet assistant": "Shabbat school",
			"Kita Gimmel": "Shabbat school",
			"Kita Gimmel assistant": "Shabbat school"
		}
	});

	return responsibilityCollection;
});