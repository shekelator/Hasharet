define(["jquery",
    "underscore",
    "backbone",
    "serviceSetupModel",
    ], function($, _, Backbone, serviceSetupModel) {

    var serviceCollection = Backbone.Collection.extend({
        model: serviceSetupModel,

    	initialize: function() {
    	},

        url: "../../api/calendar"
    });

    return serviceCollection;
});
