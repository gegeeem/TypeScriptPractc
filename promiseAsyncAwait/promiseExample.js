"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
var myPaymentPromise = new es6_promise_1.Promise(function (resolve, reject) {
    // a resolved promise with  an object of 1000 Euro payment
    // and a thank you message
    setTimeout(function () {
        resolve({
            amount: 1000,
            note: "Thank You"
        });
    }, 100000);
    // reject with 0 Euro and an unstatisfatory note
    reject({
        amount: 0,
        note: "Sorry Lawn was not properly Mowed"
    });
});
myPaymentPromise.then(function (res) { return console.log(res); });
