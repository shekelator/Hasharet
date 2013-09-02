define(["underscore", "backbone", "responsibilityCollection"], function(_, Backbone, ResponsibilityCollection) {

	var addResponsibilityView = Backbone.View.extend({

		initialize: function (options) {
			this.render();
		},

		events: {
			"click input:button": "addResponsibility"
		},

		render: function() {
			var responsibilitiesSelect = this.$("#descriptionInput").empty();
			_(this.collection.availableResponsibilities).each(function(value, key) {
				var option = $("<option/>").attr("value", key).text(key);
				responsibilitiesSelect.append(option);
			});
		},

		addResponsibility: function() {
			var person = this.$("input#personInput").val();
			var description = this.$("select#descriptionInput").val();
			var date = this.$("input#dateInput").val();

			this.collection.add([{
				"mesharet": person,
				"description": description,
				"date": date
			}]);
		}
	});

	return addResponsibilityView;
});