var createPerson = function(firstname, lastname) {
	var person = {
		firstname: firstname,
		lastname: lastname,
		sayHello: function() {
			return 'Hi, there.';
		}
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

	var sayHelloFn = person.sayHello.bind(person);

	person.sayHello = function() {
		return sayHelloFn() + ' My name is ' + this.fullname;
	};

	return person;
};

var johnDoe = createEmployee('John', 'Doe', 'Manager');


// johnDoe.fullname -> 'John Doe, Manager'
// johnDoe.firstname = 'Jane'
// johnDoe.fullname -> 'Jane Doe, Manager'
// johnDoe.sayHello() -> 'Hi, there. My name is John Doe, Manager'
