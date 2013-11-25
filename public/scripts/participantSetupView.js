define(["jquery",
    "underscore",
    "backbone",
    "participantModel",
    "participantCollection",
    "text!participantSetupTemplate.html"
    ], function($, _, Backbone, ParticipantModel, ParticipantCollection, template) {

    var participantSetupView = Backbone.View.extend({
        tagName: "div",
        id: "participantSetup",

    	initialize: function() {
    		this.collection = new ParticipantCollection();
    		this.collection.fetch();
    		this.render();
    	},

    	render: function() {
    		var compiled = _.template(template);
    		var html = compiled({ "services": this.collection.toJSON() });
    		this.$el.html(html);
            return this;
    	}
    });

    return participantSetupView;
});
