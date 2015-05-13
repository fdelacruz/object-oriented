var createPerson = function(firstname, lastname) {
	var person = {
		firstname: firstname,
		lastname: lastname
	};

	Object.defineProperty(person, 'fullname', {
		get: function() {
			return this.firstname + ' ' + this.lastname;
		},
		enumerable: true,
		configurable: true
	});

	return person;
};

// Parasitic Inheritance
var createEmployee = function (firstname, lastname, position) {
	var person = createPerson(firstname, lastname);

	person.position = position;

	// Overriging Members
	var fullname = Object.getOwnPropertyDescriptor(person, 'fullname');

	var fullNameFunction = fullname.get.bind(person);
	
	Object.defineProperty(person, 'fullname', {
		get: function() {
			return fullNameFunction() + ', ' + this.position;
		},
		enumerable: true,
		configurable: true
	});

	return person;
};

var johnDoe = createEmployee('John', 'Doe', 'Manager');


// johnDoe.fullname -> 'John Doe, Manager'
// johnDoe.firstname = 'Jane'
// johnDoe.fullname -> 'Jane Doe, Manager'
