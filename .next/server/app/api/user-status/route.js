"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/user-status/route";
exports.ids = ["app/api/user-status/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser-status%2Froute&page=%2Fapi%2Fuser-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser-status%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser-status%2Froute&page=%2Fapi%2Fuser-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser-status%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_emyna_Documents_Ecole_React_ProjetINT_project_2_project_src_app_api_user_status_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/user-status/route.ts */ \"(rsc)/./src/app/api/user-status/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user-status/route\",\n        pathname: \"/api/user-status\",\n        filename: \"route\",\n        bundlePath: \"app/api/user-status/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\emyna\\\\Documents\\\\Ecole\\\\React\\\\ProjetINT\\\\project (2)\\\\project\\\\src\\\\app\\\\api\\\\user-status\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_emyna_Documents_Ecole_React_ProjetINT_project_2_project_src_app_api_user_status_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/user-status/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyLXN0YXR1cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlci1zdGF0dXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VyLXN0YXR1cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNlbXluYSU1Q0RvY3VtZW50cyU1Q0Vjb2xlJTVDUmVhY3QlNUNQcm9qZXRJTlQlNUNwcm9qZWN0JTIwKDIpJTVDcHJvamVjdCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZW15bmElNUNEb2N1bWVudHMlNUNFY29sZSU1Q1JlYWN0JTVDUHJvamV0SU5UJTVDcHJvamVjdCUyMCgyKSU1Q3Byb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2dFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxpZ2h0LWJvb2tpbmctbmV4dGpzLz9jMzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGVteW5hXFxcXERvY3VtZW50c1xcXFxFY29sZVxcXFxSZWFjdFxcXFxQcm9qZXRJTlRcXFxccHJvamVjdCAoMilcXFxccHJvamVjdFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2VyLXN0YXR1c1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlci1zdGF0dXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2VyLXN0YXR1c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlci1zdGF0dXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxlbXluYVxcXFxEb2N1bWVudHNcXFxcRWNvbGVcXFxcUmVhY3RcXFxcUHJvamV0SU5UXFxcXHByb2plY3QgKDIpXFxcXHByb2plY3RcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlci1zdGF0dXNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VzZXItc3RhdHVzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser-status%2Froute&page=%2Fapi%2Fuser-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser-status%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/user-status/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/user-status/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"supersecret!\";\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nasync function GET(req) {\n    const cookie = req.cookies.get(\"auth\")?.value;\n    if (!cookie) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            connected: false\n        }, {\n            status: 401\n        });\n    }\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(cookie, JWT_SECRET);\n        // Récupère aussi le nom et prénom !\n        const user = await prisma.user.findUnique({\n            where: {\n                id: decoded.id\n            },\n            select: {\n                id: true,\n                email: true,\n                name: true,\n                lastname: true\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                connected: false\n            }, {\n                status: 401\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            connected: true,\n            user\n        });\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            connected: false\n        }, {\n            status: 401\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2VyLXN0YXR1cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0Q7QUFDekI7QUFDZTtBQUU5QyxNQUFNRyxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVUsSUFBSTtBQUM3QyxNQUFNRyxTQUFTLElBQUlKLHdEQUFZQTtBQUV4QixlQUFlSyxJQUFJQyxHQUFnQjtJQUN4QyxNQUFNQyxTQUFTRCxJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTQztJQUN4QyxJQUFJLENBQUNILFFBQVE7UUFDWCxPQUFPVCxxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDO1lBQUVDLFdBQVc7UUFBTSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRDtJQUVBLElBQUk7UUFDRixNQUFNQyxVQUFVZiwwREFBVSxDQUFDUSxRQUFRTjtRQUNuQyxvQ0FBb0M7UUFDcEMsTUFBTWUsT0FBTyxNQUFNWixPQUFPWSxJQUFJLENBQUNDLFVBQVUsQ0FBQztZQUN4Q0MsT0FBTztnQkFBRUMsSUFBSUwsUUFBUUssRUFBRTtZQUFDO1lBQ3hCQyxRQUFRO2dCQUNORCxJQUFJO2dCQUNKRSxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxVQUFVO1lBQ1o7UUFDRjtRQUNBLElBQUksQ0FBQ1AsTUFBTTtZQUNULE9BQU9sQixxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDO2dCQUFFQyxXQUFXO1lBQU0sR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQy9EO1FBQ0EsT0FBT2YscURBQVlBLENBQUNhLElBQUksQ0FBQztZQUFFQyxXQUFXO1lBQU1JO1FBQUs7SUFDbkQsRUFBRSxPQUFNO1FBQ04sT0FBT2xCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7WUFBRUMsV0FBVztRQUFNLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQy9EO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGlnaHQtYm9va2luZy1uZXh0anMvLi9zcmMvYXBwL2FwaS91c2VyLXN0YXR1cy9yb3V0ZS50cz9iMjY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgJ3N1cGVyc2VjcmV0ISc7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IGNvb2tpZSA9IHJlcS5jb29raWVzLmdldCgnYXV0aCcpPy52YWx1ZTtcclxuICBpZiAoIWNvb2tpZSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgY29ubmVjdGVkOiBmYWxzZSB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KGNvb2tpZSwgSldUX1NFQ1JFVCkgYXMgeyBpZDogbnVtYmVyLCBlbWFpbDogc3RyaW5nIH07XHJcbiAgICAvLyBSw6ljdXDDqHJlIGF1c3NpIGxlIG5vbSBldCBwcsOpbm9tICFcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGRlY29kZWQuaWQgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICBsYXN0bmFtZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBjb25uZWN0ZWQ6IGZhbHNlIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBjb25uZWN0ZWQ6IHRydWUsIHVzZXIgfSk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBjb25uZWN0ZWQ6IGZhbHNlIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImp3dCIsIlByaXNtYUNsaWVudCIsIkpXVF9TRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwicHJpc21hIiwiR0VUIiwicmVxIiwiY29va2llIiwiY29va2llcyIsImdldCIsInZhbHVlIiwianNvbiIsImNvbm5lY3RlZCIsInN0YXR1cyIsImRlY29kZWQiLCJ2ZXJpZnkiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJzZWxlY3QiLCJlbWFpbCIsIm5hbWUiLCJsYXN0bmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/user-status/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser-status%2Froute&page=%2Fapi%2Fuser-status%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser-status%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();