var Person = function(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

};

Object.defineProperties(Person.prototype, {
	sayHi: {
		value: function() {
			return "Hi there";
		},
		enumerable: true
	},
	fullName: {
		get: function() {
			return this.firstName + " " + this.lastName;
		},
		enumerable: true
	}
});

var johnDoe = new Person("John", "Doe");
