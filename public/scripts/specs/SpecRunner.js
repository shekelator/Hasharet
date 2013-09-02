requirejs.config({
    baseUrl: '/public/scripts',

    paths: {
        "text": "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text",
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min",
        "underscore": "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min",
        "backbone": "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min"
    },

    shim: {
        "underscore": {
            exports: "_"
        },

        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }

});

require(["jquery"],
    function ($) {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var htmlReporter = new jasmine.HtmlReporter();

        jasmineEnv.addReporter(htmlReporter);

        jasmineEnv.specFilter = function (spec) {
            return htmlReporter.specFilter(spec);
        };

        var specs = [];
        specs.push('responsibilitySpec.js');

        $(function() {
            require(specs, function() {
                jasmineEnv.execute();
            });
        });
    });