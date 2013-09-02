define(["underscore", "backbone"], function(_, Backbone) {
	

	var responsibility = Backbone.Model.extend({
		defaults: {
			mesharet: undefined, // the person doing this job
			description: undefined, // the job to be done
			specificDescription: undefined, // more specifics (e.g. passage to be read)
			date: undefined, // the date to perform
			category: undefined // the category it falls in to (Torah service, nursery, teaching)
		},

		initialize: function (options) {
			// if(options.mesharet) {
			// 	this.category = responsibilities[options.mesharet];
			// }
		}
	});

	return responsibility;
});