"use strict";
(() => {
var exports = {};
exports.id = 457;
exports.ids = [457];
exports.modules = {

/***/ 4369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/questions.json
const questions_namespaceObject = JSON.parse('[{"question":"What are two things you can never eat for breakfast?","answer":"Lunch and Dinner","id":"1"},{"question":"What is always coming but never arrives?","answer":"Tomorrow","id":"2"},{"question":"What can one catch that is not thrown?","answer":"cold","id":"3"},{"question":"A girl fell off a 50-foot ladder but didn’t get hurt. How come?","answer":"She fell off the bottom step","id":"4"},{"question":" What starts with “e” and ends with “e” but only has one letter in it?","answer":"An envelope","id":"5"},{"question":"Some months have 31 days, others have 30 days, but how many have 28 days?","answer":"All 12","id":"6"}]');
;// CONCATENATED MODULE: ./src/pages/api/questionsData.ts

function handler(req, res) {
    res.status(200).json(questions_namespaceObject);
} // type Data = {
 //   id: number;
 //   question: string;
 //   answer: string;
 // };
 // type State = {
 //   data: Data[];
 // };


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4369));
module.exports = __webpack_exports__;

})();