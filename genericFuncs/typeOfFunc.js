function whatTypeIsVal(val) {
    return val;
}
var num = 3.14;
var txt = "Friday";
var vehicle = {
    name: "fiat",
    numberOfSits: 4
};
console.log("type of ".concat(num), typeof whatTypeIsVal(num));
console.log("type of ".concat(txt), typeof whatTypeIsVal(txt));
console.log("type of ".concat(vehicle), typeof whatTypeIsVal(vehicle));
