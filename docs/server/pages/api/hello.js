"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 1217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/info.json
const info_namespaceObject = JSON.parse('{"title":"Quiz NExtJs","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.","rules":["Only Single participation is allowed","The medium of the questions will be only English","There will be no screening round","There are 6 questions"]}');
;// CONCATENATED MODULE: ./src/pages/api/hello.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    res.status(200).json(info_namespaceObject);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1217));
module.exports = __webpack_exports__;

})();