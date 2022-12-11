var alice = {
    name: "Alice",
    age: 25,
    role: "admin"
};
var blake = "Blejk";
console.log(typeof blake);
var propKeys = "age";
console.log("propKeys->", propKeys);
var valueOfUser = 95;
console.log("valueOfUser->", valueOfUser);
var student = "standard";
console.log("student->", student);
var blogBost1 = { title: "first post", tags: undefined };
console.log("blogBost1->", blogBost1);
var person = { name: "Joe", age: 45, role: "admin" };
var someone = { role: "standard", age: 45, name: "Patrick" };
console.log("type User23 = WithName & WithAge & WithRole->person->", person);
console.log("type User23 = WithName | WithAge | WithRole->someone->", someone);
