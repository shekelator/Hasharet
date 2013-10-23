define(["underscore", "backbone", "serviceModel"], 
	function(_, Backbone, ServiceModel) {

	var addServiceView = Backbone.View.extend({
		initialize: function() {
			if(this.id) {
				this.model = new ServiceModel({"id": this.id});
				this.model.fetch();
			}
		},

		render: function() {
			// TODO replace serviceSetup.html with template, BB route
		},

		events: {
			"click input:button.addService": "save"
		},

		save: function() {
			this.model.save();
		}

	});

	return addServiceView;
});