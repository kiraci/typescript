"use strict";
var logDetails;
logDetails = function (user, item) {
    console.log("Item is " + item + ". UID is " + user.uid);
};
logDetails({ name: "ahmet", uid: 5 }, "sabun");
