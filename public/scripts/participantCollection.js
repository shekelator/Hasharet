define(["jquery",
    "underscore",
    "backbone",
    "participantModel",
    ], function($, _, Backbone, participantModel) {

    var participantCollection = Backbone.Collection.extend({
        model: participantModel,

    	initialize: function() {
    	},

        url: "../../api/participant"
    });

    return participantCollection;
});
