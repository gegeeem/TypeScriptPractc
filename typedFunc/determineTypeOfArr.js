var arrOfStr = ["a", "b", "c"];
function determineTypeOfArr(arr) {
    if (Array.isArray(arr)) {
        var isArrTypeOfStr = arr.length > 0 &&
            arr.every(function (value) {
                return typeof value === "string";
            });
        if (isArrTypeOfStr)
            return true;
        if (!isArrTypeOfStr)
            return false;
    }
    else {
        return "inputed value is not an array";
    }
}
console.log(determineTypeOfArr(arrOfStr));
console.log(determineTypeOfArr(19));
console.log(determineTypeOfArr([1, 8, 5, 7]));
