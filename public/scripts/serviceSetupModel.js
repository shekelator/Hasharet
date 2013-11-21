define(["jquery",
    "underscore",
    "backbone"], function($, _, Backbone) {

    var serviceSetupModel = Backbone.Model.extend({
    	defaults: {
    		serviceDate: undefined
    	}
    });

    return serviceSetupModel;
});
