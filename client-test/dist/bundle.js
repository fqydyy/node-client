/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("// import {AppContainer} from 'react-hot-loader';\n// import React from 'react';\n// import ReactDOM from 'react-dom';\n// import { browserHistotry} from 'react-router';\n// import Root from './component/Root';\n//\n// ReactDOM.render(\n//   <AppContainer>\n//     <Root history = {browserHistory}/>\n//   </AppContainer>,\n//   document.getElementById('app')\n// );\n\nplugins: [new HtmlWebpackPlugin({\n    title: 'React Demo',\n    template: path.resolve(root, 'template.html')\n})];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvbWFpbi5qcz8zYzU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7QXBwQ29udGFpbmVyfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJztcclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbi8vIGltcG9ydCB7IGJyb3dzZXJIaXN0b3RyeX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuLy8gaW1wb3J0IFJvb3QgZnJvbSAnLi9jb21wb25lbnQvUm9vdCc7XHJcbi8vXHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICA8QXBwQ29udGFpbmVyPlxyXG4vLyAgICAgPFJvb3QgaGlzdG9yeSA9IHticm93c2VySGlzdG9yeX0vPlxyXG4vLyAgIDwvQXBwQ29udGFpbmVyPixcclxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcclxuLy8gKTtcclxuXHJcbnBsdWdpbnM6IFtcclxuICAgIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XHJcbiAgICAgICAgdGl0bGU6ICdSZWFjdCBEZW1vJyxcclxuICAgICAgICB0ZW1wbGF0ZTogcGF0aC5yZXNvbHZlKHJvb3QsICd0ZW1wbGF0ZS5odG1sJylcclxuICAgIH0pXHJcbl1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL21haW4uanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);