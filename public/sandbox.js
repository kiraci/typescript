"use strict";
var logDetails = function (user, item) {
    console.log("Item is " + item + ". UID is " + user);
};
logDetails({ name: "ahmet", uid: 5 }, "sabun");
