define(["underscore", "backbone", "responsibility"], function(_, Backbone, Responsibility) {

	var calendarEntryView = Backbone.View.extend({
		model: Responsibility,
		
		el: "div",

		initialize: function (options) {
			this.template = _.template("<%= date %>: <%= mesharet %>, <%= description %>");
			this.render();
		},

		render: function() {
			var html = "another line!";
			// var html = $(this.template(this.model.toJSON())).html();
			this.$el.empty().append(html);
		}
	});

	return calendarEntryView;
});