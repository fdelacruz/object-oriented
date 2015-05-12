var createPerson = function(firstname, lastname) {
	var person = {};

	Object.defineProperties(person, {
		firstname: {
			value: firstname,
			enumerable: true
		},
		lastname: {
			value: lastname,
			enumerable: true
		},
		fullName: {
			get: function() {
				return this.firstname + ' ' + this.lastname;
			},
			enumerable: true
		}
	});


	return person;
};

var person = createPerson('John', 'Doe');

// person.fullName (NO ()) -> 'John Doe'
// Object.keys(person)     -> ["firstname", "lastname", "fullName"]
