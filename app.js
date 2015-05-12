var createPerson = function (firstname, lastname) {
	return {
		firstname: firstname,
		lastname: lastname,
		sayHi: function () {
			return 'Hi there';
		}
	};
};

var johnDoe = createPerson("John", "Doe");

var janeDoe = createPerson("Jane", "Doe");

var jimDoe = createPerson("Jim", "Doe");

// Old way of creating objects
// var person = new Object();

// person.firstname = 'John';
// person.lastname = 'Doe';

// person.sayHi = function () {
// 	return 'Hi there';
// };
