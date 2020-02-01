var string = "Welcome to geeks for kreeks"; 
var result = string.match(/(.)?eek/g);
console.log(string, result);


string = '/users/:id/class/:degree'
result = string.match(/([:*])(\w+)/g)
console.log(string, result);

string = '/users/:id/class/:degree'
result = string.match(/[:*]\w+/g)
console.log(string, result);

string = '/users/:id/class/:degree'
result = string.match(/:\w+/g)
console.log(string, result);
