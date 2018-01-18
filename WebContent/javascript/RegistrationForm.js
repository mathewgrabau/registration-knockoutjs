var RegistrationForm = function() {

	/* Form submission */
	var submit = function() {
		console.log("submit");
	};
	
	var init = function() {
		ko.applyBindings(RegistrationForm);
	};

	$(init);

	return {
		submit: submit
	};
}();