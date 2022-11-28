function whatTypeIsVal <T>(val: T): T {
    
    return val;
}

const num: number = 3.14;
const txt: string  = "Friday"
const vehicle: {name: string; numberOfSits: number} = {
    name: "fiat",
    numberOfSits: 4,
}
console.log(`type of ${num}`,  typeof whatTypeIsVal(num))
console.log(`type of ${txt}`, typeof whatTypeIsVal(txt));
console.log(`type of ${vehicle}`, typeof whatTypeIsVal(vehicle));