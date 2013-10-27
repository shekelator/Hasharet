define(["jquery",
    "underscore",
    "backbone",
    "serviceSetupModel",
    "text!serviceSetupTemplate.html"
    ], function($, _, Backbone, model, template) {

    var serviceSetupView = Backbone.View.extend({
    	initialize: function() {
    		this.render();
    	},

    	render: function() {
    		this.$el.html(template);
    	}
    });

    return serviceSetupView;
});
