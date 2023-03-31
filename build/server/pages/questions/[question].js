"use strict";
(() => {
var exports = {};
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 1931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _question_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/pages/questions/[question].tsx
"use client";






const QuestionContainer = (external_styled_components_default()).div`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const QuestionDiv = (external_styled_components_default()).div`
  h3 {
    color: gray;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 1rem 0;
    text-align: center;
  }

  button {
    background-color: #df006c;
    padding: 0.5rem;
    margin: 0.5rem 0;
    outline: none;
    border: 1px solid white;
    border-radius: 3px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
`;
const Input = (external_styled_components_default()).input`
  outline: none;
  padding: 0.5rem;
  width: 100%;
  border-radius: 2px;
  border: 2px solid grey;
  font-size: 1rem;
`;
const ButtonsContainer = (external_styled_components_default()).div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLink = external_styled_components_default()((link_default()))`
  color: #e7006c;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
`;
// type State = {
//   data: Data[];
// };
const Question = ({ dehydratedData  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { question  } = router.query;
    console.log("dehydrated data ", dehydratedData, question);
    const [currrentData, setCurrentData] = (0,external_react_.useState)();
    const [answerArray, setAnswerArray] = (0,external_react_.useState)([]);
    const [inputText, setInputText] = (0,external_react_.useState)("");
    const { queries: [state]  } = dehydratedData ?? {
        queries: []
    };
    const { state: currentState  } = state ?? {
        state: null
    };
    const { data: currentD  } = currentState ?? {
        data: []
    };
    const getCurrentData = ()=>{
        return setCurrentData(currentD.find((item)=>"" + item.id === question));
    };
    (0,external_react_.useEffect)(()=>{
        getCurrentData();
    });
    const storeAnswerFunc = (id, txt)=>{
        setAnswerArray((prev)=>[
                ...prev,
                txt
            ]);
        localStorage.setItem("answers", JSON.stringify(answerArray));
        setInputText("");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(QuestionContainer, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(QuestionDiv, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    children: [
                        currrentData === null || currrentData === void 0 ? void 0 : currrentData.id,
                        ". ",
                        currrentData === null || currrentData === void 0 ? void 0 : currrentData.question
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    onSubmit: (e)=>e.preventDefault(),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                        type: "text",
                        placeholder: "Enter your answer",
                        value: inputText,
                        onChange: (e)=>setInputText(e.target.value)
                    }, currrentData === null || currrentData === void 0 ? void 0 : currrentData.id)
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonsContainer, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        Number(question) > 5 ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/result",
                            style: {
                                textDecoration: "none",
                                color: "#E4006C",
                                border: " 2px solid #E4006C",
                                textAlign: "center",
                                padding: "0.5rem",
                                borderRadius: "3px",
                                fontWeight: "bold",
                                margin: "1rem"
                            },
                            children: "End"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            onClick: ()=>{
                                return storeAnswerFunc(currrentData === null || currrentData === void 0 ? void 0 : currrentData.id, inputText);
                            },
                            style: {
                                textDecoration: "none",
                                color: "#E4006C",
                                border: " 2px solid #E4006C",
                                textAlign: "center",
                                padding: "0.5rem",
                                borderRadius: "3px",
                                fontWeight: "bold",
                                margin: "1rem"
                            },
                            href: "/questions/[question]",
                            as: `/questions/${Number(currrentData === null || currrentData === void 0 ? void 0 : currrentData.id) + 1}`,
                            children: "Next"
                        })
                    ]
                })
            ]
        })
    });
};
// export const getServerSideProps = async (context) => {
//   const res = await fetch(process.env.ORIGIN + `/questions.json`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };
const fetchQuestions = async ()=>{
    const res = await fetch(process.env.ORIGIN + `/questions.json`);
    const data = await res.json();
    return data;
};
const getStaticProps = async (context)=>{
    var _context_params;
    const question = (_context_params = context.params) === null || _context_params === void 0 ? void 0 : _context_params.question;
    const queryClient = new external_react_query_.QueryClient();
    console.log("question number", question);
    await queryClient.prefetchQuery([
        "question",
        question
    ], fetchQuestions);
    return {
        props: {
            dehydratedData: (0,external_react_query_.dehydrate)(queryClient)
        }
    };
};
const getStaticPaths = async ()=>{
    const data = await fetchQuestions();
    const paths = data.map(({ id  })=>({
            params: {
                question: "" + id
            }
        }));
    console.log("all paths", paths);
    return {
        paths,
        fallback: true
    };
};
/* harmony default export */ const _question_ = (Question); // process.env.ORIGIN + `/questions.json/${context.params.question}`


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(1931)));
module.exports = __webpack_exports__;

})();