var tests = [];
for(var file in window.__karma__.files) {
	if(window.__karma__.files.hasOwnProperty(file)) {
		if(/Spec\.js$/.test(file)) {
			tests.push(file);
			console.log("adding " + file);
		}
	}
}

requirejs.config({
	baseUrl: '/base/public/scripts',

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
	},

	deps: tests,

	callback: window.__karma__.start
});