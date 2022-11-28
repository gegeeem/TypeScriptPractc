var inputValue1 = 45;
var inputValue2 = "Text";
var inputValue3 = {
    name: "John",
    age: 23
};
function inputedValueIsTypeOf(inputVal) {
    var message = "Type of  value is ";
    if (typeof inputVal === "number")
        return message + "Number";
    if (typeof inputVal === "object")
        return message + "Object";
    if (typeof inputVal === "string")
        return message + "String";
}
console.log("".concat(inputValue1), inputedValueIsTypeOf(inputValue1));
console.log("".concat(inputValue2), inputedValueIsTypeOf(inputValue2));
console.log("".concat(inputValue3), inputedValueIsTypeOf(inputValue3));
