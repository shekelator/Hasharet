require(["jquery",
    "underscore",
    "backbone"], function($, _, Backbone) {

    var participantModel = Backbone.Model.extend({
    	attributes: {
    		name: undefined
    	}
    });

    return participantModel;
});
