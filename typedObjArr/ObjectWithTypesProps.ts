type User = {
  name: string;
  age: number;
  role: "admin" | "standard";
};
const alice: User = {
  name: "Alice",
  age: 25,
  role: "admin",
};
// type age = User.age => syntax error!
type name = User["name"];
const blake: name = "Blejk";
console.log(typeof blake);

type Keys = keyof User;
const propKeys: Keys = "age";
console.log("propKeys->", propKeys);

type UserValues = User[keyof User];
const valueOfUser: UserValues = 95;

console.log("valueOfUser->", valueOfUser);

//common ppatern for generic Object
type ValueOf<Obj> = Obj[keyof Obj];
type UserValuesFromGeneric = ValueOf<User>;

const student: UserValuesFromGeneric = "standard";
console.log("student->", student);
//
// T | undefined scenario must included undefined

type BlogPost = { title: string; tags: string[] | undefined };
const blogBost1: BlogPost = { title: "first post", tags: undefined };

console.log("blogBost1->", blogBost1);

type WithName = { name: string };
type WithAge = { age: number };
type WithRole = { role: "admin" | "standard" };

type User23 = WithName & WithAge & WithRole;
type User52 = WithName | WithAge | WithRole;

const person: User23 = { name: "Joe", age: 45, role: "admin" };
const someone: User52 = { role: "standard", age: 45, name: "Patrick" };

console.log("type User23 = WithName & WithAge & WithRole->person->", person);
console.log("type User23 = WithName | WithAge | WithRole->someone->", someone);
