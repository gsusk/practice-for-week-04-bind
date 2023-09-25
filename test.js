const { Employee } = require('./employee');

const employ = new Employee('John Wick', "Dog Lover")
const sayName = employ.sayName.bind(employ)
const sayOcup = employ.sayOcupation.bind(employ)
setTimeout(sayName, 2000)
setTimeout(sayOcup, 3000)
