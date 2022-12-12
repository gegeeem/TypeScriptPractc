const arrOfStr: string[] = ["a", "b", "c"];

function determineTypeOfArr<A>(arr: A): boolean | string | undefined {
  if (Array.isArray(arr)) {
    const isArrTypeOfStr =
      arr.length > 0 &&
      arr.every((value) => {
        return typeof value === "string";
      });
    if (isArrTypeOfStr) return true;
    if (!isArrTypeOfStr) return false;
  } else {
    return "inputed value is not an array";
  }
}

console.log(determineTypeOfArr(arrOfStr));

console.log(determineTypeOfArr(19));
