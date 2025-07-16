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
exports.id = "app/api/connexion/route";
exports.ids = ["app/api/connexion/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconnexion%2Froute&page=%2Fapi%2Fconnexion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconnexion%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconnexion%2Froute&page=%2Fapi%2Fconnexion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconnexion%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_emyna_Documents_Ecole_React_ProjetINT_project_2_project_src_app_api_connexion_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/connexion/route.ts */ \"(rsc)/./src/app/api/connexion/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/connexion/route\",\n        pathname: \"/api/connexion\",\n        filename: \"route\",\n        bundlePath: \"app/api/connexion/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\emyna\\\\Documents\\\\Ecole\\\\React\\\\ProjetINT\\\\project (2)\\\\project\\\\src\\\\app\\\\api\\\\connexion\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_emyna_Documents_Ecole_React_ProjetINT_project_2_project_src_app_api_connexion_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/connexion/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb25uZXhpb24lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNvbm5leGlvbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNvbm5leGlvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNlbXluYSU1Q0RvY3VtZW50cyU1Q0Vjb2xlJTVDUmVhY3QlNUNQcm9qZXRJTlQlNUNwcm9qZWN0JTIwKDIpJTVDcHJvamVjdCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZW15bmElNUNEb2N1bWVudHMlNUNFY29sZSU1Q1JlYWN0JTVDUHJvamV0SU5UJTVDcHJvamVjdCUyMCgyKSU1Q3Byb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzhEO0FBQzNJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxpZ2h0LWJvb2tpbmctbmV4dGpzLz9mODA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGVteW5hXFxcXERvY3VtZW50c1xcXFxFY29sZVxcXFxSZWFjdFxcXFxQcm9qZXRJTlRcXFxccHJvamVjdCAoMilcXFxccHJvamVjdFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjb25uZXhpb25cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2Nvbm5leGlvbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Nvbm5leGlvblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY29ubmV4aW9uL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZW15bmFcXFxcRG9jdW1lbnRzXFxcXEVjb2xlXFxcXFJlYWN0XFxcXFByb2pldElOVFxcXFxwcm9qZWN0ICgyKVxcXFxwcm9qZWN0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNvbm5leGlvblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY29ubmV4aW9uL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconnexion%2Froute&page=%2Fapi%2Fconnexion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconnexion%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/connexion/route.ts":
/*!****************************************!*\
  !*** ./src/app/api/connexion/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n // ⚠️ utilise bien 'bcryptjs' et pas juste 'bcrypt'\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst JWT_SECRET = process.env.JWT_SECRET || \"supersecret!\";\nasync function POST(req) {\n    const { email, password } = await req.json();\n    const user = await prisma.user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (!user) {\n        return new Response(JSON.stringify({\n            error: \"Utilisateur non trouv\\xe9\"\n        }), {\n            status: 404\n        });\n    }\n    const isMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(password, user.password);\n    if (!isMatch) {\n        return new Response(JSON.stringify({\n            error: \"Mot de passe incorrect\"\n        }), {\n            status: 401\n        });\n    }\n    // Générer le JWT\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n        id: user.id,\n        email: user.email\n    }, JWT_SECRET, {\n        expiresIn: \"7d\"\n    });\n    // Créer la réponse et ajouter le cookie\n    const res = new Response(JSON.stringify({\n        success: true,\n        message: \"Connexion r\\xe9ussie\",\n        user: {\n            id: user.id,\n            email: user.email\n        }\n    }), {\n        status: 200\n    });\n    // Ajouter le cookie JWT (HTTP-only, 7j, sécurisé en prod)\n    res.headers.append(\"Set-Cookie\", `auth=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict;${ false ? 0 : \"\"}`);\n    return res;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb25uZXhpb24vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThDO0FBQ2hCLENBQUMsbURBQW1EO0FBQ25EO0FBRS9CLE1BQU1HLFNBQVMsSUFBSUgsd0RBQVlBO0FBQy9CLE1BQU1JLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0YsVUFBVSxJQUFJO0FBRXRDLGVBQWVHLEtBQUtDLEdBQVk7SUFDckMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7SUFFMUMsTUFBTUMsT0FBTyxNQUFNVCxPQUFPUyxJQUFJLENBQUNDLFVBQVUsQ0FBQztRQUFFQyxPQUFPO1lBQUVMO1FBQU07SUFBRTtJQUU3RCxJQUFJLENBQUNHLE1BQU07UUFDVCxPQUFPLElBQUlHLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQXlCLElBQUk7WUFBRUMsUUFBUTtRQUFJO0lBQ3pGO0lBRUEsTUFBTUMsVUFBVSxNQUFNbkIsd0RBQWMsQ0FBQ1MsVUFBVUUsS0FBS0YsUUFBUTtJQUM1RCxJQUFJLENBQUNVLFNBQVM7UUFDWixPQUFPLElBQUlMLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQXlCLElBQUk7WUFBRUMsUUFBUTtRQUFJO0lBQ3pGO0lBRUEsaUJBQWlCO0lBQ2pCLE1BQU1HLFFBQVFwQix3REFBUSxDQUFDO1FBQUVzQixJQUFJWixLQUFLWSxFQUFFO1FBQUVmLE9BQU9HLEtBQUtILEtBQUs7SUFBQyxHQUFHTCxZQUFZO1FBQUVxQixXQUFXO0lBQUs7SUFFekYsd0NBQXdDO0lBQ3hDLE1BQU1DLE1BQU0sSUFBSVgsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1FBQ3RDVSxTQUFTO1FBQ1RDLFNBQVM7UUFDVGhCLE1BQU07WUFBRVksSUFBSVosS0FBS1ksRUFBRTtZQUFFZixPQUFPRyxLQUFLSCxLQUFLO1FBQUM7SUFDekMsSUFBSTtRQUFFVSxRQUFRO0lBQUk7SUFFbEIsMERBQTBEO0lBQzFETyxJQUFJRyxPQUFPLENBQUNDLE1BQU0sQ0FDaEIsY0FDQSxDQUFDLEtBQUssRUFBRVIsTUFBTSxvREFBb0QsRUFBRWpCLE1BQXlCLEdBQWUsSUFBYSxHQUFHLENBQUM7SUFHL0gsT0FBT3FCO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGlnaHQtYm9va2luZy1uZXh0anMvLi9zcmMvYXBwL2FwaS9jb25uZXhpb24vcm91dGUudHM/NzM3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnOyAvLyDimqDvuI8gdXRpbGlzZSBiaWVuICdiY3J5cHRqcycgZXQgcGFzIGp1c3RlICdiY3J5cHQnXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgJ3N1cGVyc2VjcmV0ISc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbCB9IH0pO1xyXG5cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJVdGlsaXNhdGV1ciBub24gdHJvdXbDqVwiIH0pLCB7IHN0YXR1czogNDA0IH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICBpZiAoIWlzTWF0Y2gpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJNb3QgZGUgcGFzc2UgaW5jb3JyZWN0XCIgfSksIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBHw6luw6lyZXIgbGUgSldUXHJcbiAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IGlkOiB1c2VyLmlkLCBlbWFpbDogdXNlci5lbWFpbCB9LCBKV1RfU0VDUkVULCB7IGV4cGlyZXNJbjogJzdkJyB9KTtcclxuXHJcbiAgLy8gQ3LDqWVyIGxhIHLDqXBvbnNlIGV0IGFqb3V0ZXIgbGUgY29va2llXHJcbiAgY29uc3QgcmVzID0gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHtcclxuICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICBtZXNzYWdlOiAnQ29ubmV4aW9uIHLDqXVzc2llJyxcclxuICAgIHVzZXI6IHsgaWQ6IHVzZXIuaWQsIGVtYWlsOiB1c2VyLmVtYWlsIH1cclxuICB9KSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuXHJcbiAgLy8gQWpvdXRlciBsZSBjb29raWUgSldUIChIVFRQLW9ubHksIDdqLCBzw6ljdXJpc8OpIGVuIHByb2QpXHJcbiAgcmVzLmhlYWRlcnMuYXBwZW5kKFxyXG4gICAgJ1NldC1Db29raWUnLFxyXG4gICAgYGF1dGg9JHt0b2tlbn07IEh0dHBPbmx5OyBQYXRoPS87IE1heC1BZ2U9NjA0ODAwOyBTYW1lU2l0ZT1TdHJpY3Q7JHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJyBTZWN1cmU7JyA6ICcnfWBcclxuICApO1xyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiYmNyeXB0Iiwiand0IiwicHJpc21hIiwiSldUX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJQT1NUIiwicmVxIiwiZW1haWwiLCJwYXNzd29yZCIsImpzb24iLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJpc01hdGNoIiwiY29tcGFyZSIsInRva2VuIiwic2lnbiIsImlkIiwiZXhwaXJlc0luIiwicmVzIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJoZWFkZXJzIiwiYXBwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/connexion/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fconnexion%2Froute&page=%2Fapi%2Fconnexion%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fconnexion%2Froute.ts&appDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cemyna%5CDocuments%5CEcole%5CReact%5CProjetINT%5Cproject%20(2)%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();