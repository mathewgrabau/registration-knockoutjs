var RegistrationForm = function() {

	var customer = {
		personalInfo: {
			title: ko.observable(),
			firstName: ko.observable(),
			middleName: ko.observable(),
			lastName: ko.observable()
		}
	}

	/* Form submission */
	
	
	var submit = function() {
		console.log("submit ");
		console.log(ko.toJSON(customer));
	};

	
	
	var init = function() {
		ko.applyBindings(RegistrationForm);
	};

	$(init);

	return {
		customer: customer,
		submit: submit
	};
}();