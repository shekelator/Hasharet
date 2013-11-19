require.config({
    paths: {
        "text": "require-text/2.0.10/text",
        "jquery": [
            "https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min",
            "jquery/1.8.2/jquery.min"
            ],
        "underscore": [
            "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min",
            "Underscore/1.4.4/underscore-min"
            ],
        "backbone": [
            "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min",
            "Backbone/1.0.0/backbone-min"
            ],
        "socket.io": "../../socket.io/socket.io",
        "sinon": "SinonJS/1.6.0/sinon-1.6.0"
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "sinon": {
            exports: "sinon"
        }
    }
});
require(["jquery",
    "underscore",
    "backbone",
    "socket.io",
    "serviceSetupView",
    "participantSetupView"
    ], function($, _, Backbone, io, ServiceSetupView, ParticipantSetupView) {
    var socket = io.connect();

    var AppRouter = Backbone.Router.extend({

        routes: {
            "serviceSetup": "serviceSetup",
            "participantSetup": "participantSetup"
        },

        serviceSetup: function() {
            var view = new ServiceSetupView({el: $("#serviceSetup")});
            this.render(view);
        },

        participantSetup: function() {

            var view = new ParticipantSetupView({ el: $("#participantSetup")});
            this.render(view);
        }, 

        render: function(newView) {
            if(this.currentView) {
                this.currentView.remove();
            }

            newView.render();
            
            this.currentView = newView;

            return this;
        }
    });

    var appRouter = new AppRouter();
    Backbone.history.start();

//    responsibilityCollection.on("add", function(model) {
//        socket.emit("add", model);
//    });
//    
//   $(".send").click(function() {
//       var model = {
//           mesharet: $("#personInput").val(),
//           date: $("#dateInput").val,
//           description: $("#descriptionInput").val
//       };
//       responsibilityCollection.add(model);
//   });

    

});