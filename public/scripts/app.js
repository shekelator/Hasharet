require.config({
    paths: {
        "text": "text/2.0.6/text",
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
    "responsibilityCollection",
    "addResponsibilityView",
    "calendarView"
    ], function($, _, Backbone, io, ResponsibilityCollection, AddResponsibilityView, CalendarView) {
    var socket = io.connect();

    var responsibilityCollection = new ResponsibilityCollection();
    var addView = new AddResponsibilityView({
        el: $("form#addResponsibility"),
        collection: responsibilityCollection
     });

    responsibilityCollection.on("add", function(model) {
        socket.emit("add", model);
    });
    
    $(".send").click(function() {
        var model = {
            mesharet: $("#personInput").val(),
            date: $("#dateInput").val,
            description: $("#descriptionInput").val
        };
        responsibilityCollection.add(model);
    });

    var listView = new CalendarView({
        el: $("#calendar"),
        collection: responsibilityCollection
    });
});