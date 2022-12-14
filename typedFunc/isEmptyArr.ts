function isEmpty<Type extends { length: number }>(
  arr: Type[]
): boolean | undefined {
  // {length:} if value has lentgh check is array on some way
  if (arr.length > 0) return false;
  if (arr.length === 0) return true;
}

const Pi = 3.14;
// isEmpty(Pi); // arg of type 'number' is not assignable
// isEmpty('text'); // arg of type 'string' is not assignable
// isEmpty({length: 68}); // arg of type '{length: 68}' is not assignable
console.log("[] is  empty: ", isEmpty([]));
console.log(
  "['cat', 'dog', 'bird'] is empty: ",
  isEmpty(["cat", "dog", "bird"])
);
