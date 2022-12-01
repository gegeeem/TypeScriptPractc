"use strict";
exports.__esModule = true;
exports.logPerson = exports.persons = void 0;
exports.persons /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson(user) {
    if ("occupation" in user) {
        console.log(" - ".concat(user.name, ", ").concat(user.age, ", ").concat(user.occupation));
    }
    else
        console.log(" - ".concat(user.name, ", ").concat(user.age, ", ").concat(user.role));
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
