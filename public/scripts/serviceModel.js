define(["underscore", "backbone"], 
	function(_, Backbone) {

	var serviceModel = Backbone.Model.extend({
		attributes: {
			name: undefined,
			date: undefined,
			roles: undefined
		},

		initialize: function() {
			this.set({"roles" : []});
		}
	});

	return serviceModel;
});