(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx



const NavContainer = (external_styled_components_default()).nav`
  max-width: 100%;

  display: flex;
  padding: 1rem;
  ul {
    display: flex;

    li {
      list-style: none;
      padding: 1rem;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;
const StyledLink = external_styled_components_default()((link_default()))`
  color: #e7006c;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
`;
const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(NavContainer, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                        href: "/",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                        href: "/about",
                        children: "About"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/Layout.tsx



// import Footer from "./Footer";

const LayoutContainer = (external_styled_components_default()).div`
  max-width: 100vw;

  display: flex;
  flex-direction: column;

  height: 100vh;
  margin: 0;

  background-image: url("https://png.pngtree.com/background/20220731/original/pngtree-doodle-abstract-pink-background-picture-image_1897330.jpg");
  object-fit: cover;
`;
const Layout = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
                children
            ]
        })
    });
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




const queryClient = new external_react_query_.QueryClient();
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.Hydrate, {
            state: pageProps.dehydratedState,
            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(6072)));
module.exports = __webpack_exports__;

})();