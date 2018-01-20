var RegistrationForm = function() {

	var customer = {
		personalInfo: {
			title: ko.observable(),
			firstName: ko.observable(),
			middleName: ko.observable(),
			lastName: ko.observable()
		},
        contactDetails: {
            phoneNumber: ko.observable(),
            emailAddress: ko.observable(),
            preferredContact: ko.observable()
        },
        address: {
            residential: {
                street: ko.observable(),
                city: ko.observable(),
                postalCode: ko.observable(),
                country: ko.observable()
            },
            postal: {
                type: ko.observable(),
                streetAddress: {
                    street: ko.observable(),
                    city: ko.observable(),
                    postalCode: ko.observable(),
                    country: ko.observable()
                },
                poBoxAddress: {
                    poBox: ko.observable(),
                    city: ko.observable(),
                    postalCode: ko.observable(),
                    country: ko.observable()
                }
            }
        }
	};
    
    var titleOptions = [
        {
            value: 'Mr',
            setTitle: function() {
                RegistrationForm.customer.personalInfo.title('Mr');
            }
        },
        {
            value: 'Mrs',
            setTitle: function() {
                RegistrationForm.customer.personalInfo.title('Mrs');
            }
        },
        {
            value: 'Miss',
            setTitle: function() {
                RegistrationForm.customer.personalInfo.title('Miss');                
            }
        },
        {
            value: 'Dr',
            setTitle: function() {
                RegistrationForm.customer.personalInfo.title('Dr');
            }
        }
    ];
    
    /* computed observable for title drop down text change */
    var titleSelect = ko.pureComputed(function() {
       if (customer.personalInfo.title() == null) {
           return 'select';
       } else {
           return customer.personalInfo.title();
       }
    });

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
		submit: submit,
        titleOptions: titleOptions,
        titleSelect: titleSelect
	};
}();