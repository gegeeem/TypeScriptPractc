type User = {
  name: string;
  age: number;
};
const alice: User = {
  name: "Alice",
  age: 25,
};
type name = User["name"];
const blake: name = "Blejk";
console.log(typeof blake);
