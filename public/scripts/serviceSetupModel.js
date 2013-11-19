require(["jquery",
    "underscore",
    "backbone"], function($, _, Backbone) {

    var serviceSetupModel = Backbone.Model.extend({
    	attributes: {
    		serviceDate: undefined
    	}
    });

    return serviceSetupModel;
});
