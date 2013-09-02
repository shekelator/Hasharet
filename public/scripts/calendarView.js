define([
	"underscore", 
	"backbone", 
	"responsibilityCollection", 
	"calendarEntryView"], 
	function(_, Backbone, ResponsibilityCollection, CalendarEntryView) {

	var calendarView = Backbone.View.extend({
		initialize: function (options) {
			this.render();
			this.listenTo(this.collection, "add", function(item) {
				this.render();
			}, this);
		},

		render: function() {
			this.$el.empty();

			_(this.collection.models).each(function(calendarEntry) {
				var entryView = new CalendarEntryView({model: calendarEntry});
				this.$el.append(entryView.render());
			}, this);
		}
	});

	return calendarView;
});