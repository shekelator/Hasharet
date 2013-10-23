define("service", ["underscore", "serviceRepository"], function(_, repo) {

	var create = function(name, serviceDate, roles) {
		var services = repo.Get();

		var maxId = _.max(services, function(s) {
			return s.Id;
		}) || 0;

		var newService = {
			Id: maxId + 1,
			Name: name,
			ServiceDate: serviceDate,
			Roles: roles
		};

		services.push(newService);
		return services;
	};

	var deleteService = function(name, serviceDate) {
		services = _(services).reject(function(i) {
			return i.Name === name && i.ServiceDate === serviceDate;
		});
	}

	return {
		Create: create,
		Delete: deleteService
	};
});