type User = {
  name: string;
  age: number;
};
const alice: User = {
  name: "Alice",
  age: 25,
};
// type age = User.age => syntax error!
type name = User["name"];
const blake: name = "Blejk";
console.log(typeof blake);

type Keys = keyof User;
const propKeys: Keys = "age";
console.log("propKeys->", propKeys);
