define(["jquery",
    "underscore",
    "backbone",
    "serviceSetupModel",
    "serviceSetupCollection",
    "text!serviceSetupTemplate.html"
    ], function($, _, Backbone, Model, ServiceSetupCollection, template) {

    var serviceSetupView = Backbone.View.extend({
        tagName: "div",
        id: "serviceSetup",

    	initialize: function() {
    		this.collection = new ServiceSetupCollection();
    		this.collection.fetch();

            this.listenTo(this.collection, "add", this.render);
    	},

    	render: function() {
    		var compiled = _.template(template);
    		var html = compiled({ "services": this.collection.toJSON() });
    		this.$el.html(html);
            return this;
    	}
    });

    return serviceSetupView;
});
