"use strict";
(() => {
var exports = {};
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 3000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
"use client";




const AnswerContainer = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  h5 {
    text-align: start;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.1rem 0;
  }
`;
const Title = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().h2)`
  color: gray;
`;
const Result = ({ dehydratedState  })=>{
    const { queries: [state]  } = dehydratedState;
    const { state: currentState  } = state;
    const { data: currentData  } = currentState;
    console.log(currentData);
    const [answerDb, setAnswersDb] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const data = localStorage.getItem("answers");
        setAnswersDb(JSON.parse(data));
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AnswerContainer, {
        children: [
            currentData.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                            children: [
                                item.question,
                                " ----"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                color: "green"
                            },
                            children: item.answer
                        })
                    ]
                }, item.id)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                children: "Answers you enters"
            }),
            answerDb === null || answerDb === void 0 ? void 0 : answerDb.map((ans)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    style: {
                        color: "purple"
                    },
                    children: ans
                }, ans))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Result);
// export const getServerSideProps = async (context) => {
//   const res = await fetch(process.env.ORIGIN + `/questions.json`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };
const fetchQuestionData = async ()=>{
    const res = await fetch(process.env.ORIGIN + `/questions.json`);
    const data = await res.json();
    return data;
};
const getServerSideProps = async (Context)=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
    await queryClient.fetchQuery([
        "questionData"
    ], fetchQuestionData);
    return {
        props: {
            dehydratedState: (0,react_query__WEBPACK_IMPORTED_MODULE_2__.dehydrate)(queryClient)
        }
    };
};


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3000));
module.exports = __webpack_exports__;

})();