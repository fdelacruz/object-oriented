var makeRequest = function (url, callback) {
	// make the request with the provided url
	
	var data = 10; // coming from the serve in json, text or xml format

	callback(data);
};

// code that is going to make the request
var obj = {
	someValue: 20,

	// this is going to be the callback function
	loadData: function (data) {

		// add someValue and the data parameter
		var sum = this.someValue + data;

		console.log(sum);
	},

	// this function calls the makeRequest function
	prepareRequest: function () {
		var url = 'http://numberservice.com';

		makeRequest(url, this.loadData.bind(this)); // bind loadData() to obj in makeRequest() execution context
	}
};

// obj.prepareRequest() -> 30

// // 'this' is dependent upon the object that the function is attached to.
// window.name = 'Jane Doe';

// var globalGreet = function () {
// 	return 'My name is ' + this.name;
// };

// var johnDoe = {
// 	name: 'John Doe',
// 	greet: globalGreet
// };

// johnDoe.greet() -> 'My name is John Doe'
// globalGreet()   -> 'My name is Jane Doe'
