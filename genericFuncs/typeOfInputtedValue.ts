
const inputValue1: number = 45;
const inputValue2: string  = "Text";
const inputValue3 : {name: string; age: number} = {
    name: "John",
    age: 23
}

function inputedValueIsTypeOf(inputVal: unknown): string|undefined{
    let message= "Type of  value is ";
    if(typeof inputVal === "number") return message + "Number"
    if(typeof inputVal === "object") return message + "Object";
    if(typeof inputVal === "string") return message + "String"

}
console.log(`${inputValue1}`,inputedValueIsTypeOf(inputValue1));
console.log(`${inputValue2}`,inputedValueIsTypeOf(inputValue2));
console.log(`${inputValue3}`,inputedValueIsTypeOf(inputValue3));