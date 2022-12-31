"use strict";
exports.__esModule = true;
exports.arrayMap1 = void 0;
function arrayMap1() {
    var todos1 = [
        {
            id: 1,
            taskName: "Shopping go",
            done: false
        },
        {
            id: 2,
            taskName: "Go to cinema",
            done: true
        },
        {
            id: 3,
            taskName: "Go to the Class",
            done: false
        },
    ];
    var newArr1 = todos1.map(function (el) { return el["taskName"]; });
    console.log(newArr1);
    var newArr2 = todos1.filter(function (el) {
        if (el.done === true) {
            return el;
        }
    });
    console.log(newArr2);
    var newArr3 = todos1.reduce(function (acc, curr) {
        return acc + " " + curr.taskName;
    }, "");
    console.log("reduce", newArr3);
}
exports.arrayMap1 = arrayMap1;
arrayMap1();
