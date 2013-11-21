define(["jquery",
    "underscore",
    "backbone",
    "serviceSetupModel",
    ], function($, _, Backbone, ServiceSetupModel) {

    var serviceCollection = Backbone.Collection.extend({
        model: ServiceSetupModel,

        url: "../../api/calendar"
    });

    return serviceCollection;
});
