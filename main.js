"use strict";
(self["webpackChunkSnake"] = self["webpackChunkSnake"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color: black;\n    color: whitesmoke;\n    font-family: 'Courier New', Courier, monospace;\n    margin: 0px;\n}\n\nheader {\n    grid-area: header;\n    font-size: 200%;\n    font-weight: bold;\n}\n\n#score {\n    font-size: 150%;\n}\n\n#container {\n    height: 100vh;\n    grid-template-columns: auto 1fr auto;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n     '. header .'\n     '. main .'\n     '. footer .';\n    display: grid;\n    justify-items: center;\n}\n\n#main {\n    grid-area: main;\n    overflow: hidden;\n    justify-self: stretch;\n    \n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n\nfooter {\n    grid-area: footer;\n    padding: 0 4ch 1ch 4ch;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,8CAA8C;IAC9C,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,iCAAiC;IACjC;;;iBAGa;IACb,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,qBAAqB;;IAErB,aAAa;IACb,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B","sourcesContent":["body {\n    background-color: black;\n    color: whitesmoke;\n    font-family: 'Courier New', Courier, monospace;\n    margin: 0px;\n}\n\nheader {\n    grid-area: header;\n    font-size: 200%;\n    font-weight: bold;\n}\n\n#score {\n    font-size: 150%;\n}\n\n#container {\n    height: 100vh;\n    grid-template-columns: auto 1fr auto;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n     '. header .'\n     '. main .'\n     '. footer .';\n    display: grid;\n    justify-items: center;\n}\n\n#main {\n    grid-area: main;\n    overflow: hidden;\n    justify-self: stretch;\n    \n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n\nfooter {\n    grid-area: footer;\n    padding: 0 4ch 1ch 4ch;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Controller.ts":
/*!***************************!*\
  !*** ./src/Controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./src/Model.ts");
/* harmony import */ var _Direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Direction */ "./src/Direction.ts");


/** Controller object for the game. */
var Controller = /** @class */ (function () {
    /**
     * Attaches an event handler to the document. The event handler catches
     * KeyboardEvents and updates the model accordingly.
     *
     * @param model Game model
     */
    function Controller(model) {
        var _this = this;
        this.model = model;
        document.onkeydown = function (e) { return _this.eventHandler(e); };
    }
    /**
     * Event handler for handling keyboard events. Updates the model.
     *
     * @param e KeyboardEvent
     */
    Controller.prototype.eventHandler = function (e) {
        if (e.code === 'ArrowUp') {
            this.model.setDirection(_Direction__WEBPACK_IMPORTED_MODULE_1__["default"].Up);
        }
        else if (e.code === 'ArrowLeft') {
            this.model.setDirection(_Direction__WEBPACK_IMPORTED_MODULE_1__["default"].Left);
        }
        else if (e.code === 'ArrowDown') {
            this.model.setDirection(_Direction__WEBPACK_IMPORTED_MODULE_1__["default"].Down);
        }
        else if (e.code === 'ArrowRight') {
            this.model.setDirection(_Direction__WEBPACK_IMPORTED_MODULE_1__["default"].Right);
        }
        else if (e.code === 'Space') {
            var status_1 = this.model.getStatus();
            if (status_1 === _Model__WEBPACK_IMPORTED_MODULE_0__["default"].Status.Over || status_1 === _Model__WEBPACK_IMPORTED_MODULE_0__["default"].Status.Won) {
                this.model.reset();
            }
            else {
                this.model.togglePause();
            }
        }
    };
    return Controller;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);


/***/ }),

/***/ "./src/Direction.ts":
/*!**************************!*\
  !*** ./src/Direction.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Direction);


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./src/Model.ts");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/View.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/Controller.ts");



/** Game object */
var Game = /** @class */ (function () {
    /**
     * @param container Mount point for the game canvas
     * @param scoreLabel HTML element to write the player score to
     */
    function Game(container, scoreLabel) {
        /**
         * Tick speed for the game. Controls both the update speed and the render
         * speed of the game
         */
        this.timeStep = 200; // Milliseconds
        this.model = new _Model__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.view = new _View__WEBPACK_IMPORTED_MODULE_1__["default"](this.model, container, scoreLabel);
        this.controller = new _Controller__WEBPACK_IMPORTED_MODULE_2__["default"](this.model);
    }
    /**
     * Starts the game loop. On each iteration updates the game model and renders
     * the game view.
     */
    Game.prototype.loop = function () {
        var _this = this;
        var previousTime = 0.0;
        var delta = 0.0;
        var timeStep = this.timeStep;
        var loop = function (time) {
            // Compute the delta-time against the previous time
            var dt = time - previousTime;
            // Accumulate delta time
            delta = delta + dt;
            // Update the previous time
            previousTime = time;
            while (delta > timeStep) {
                // Update game
                _this.model.update();
                delta = delta - timeStep;
            }
            _this.view.render();
            // Repeat
            window.requestAnimationFrame(loop);
        };
        // Start loop
        window.requestAnimationFrame(function (time) {
            previousTime = time;
            window.requestAnimationFrame(loop);
        });
    };
    return Game;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/Model.ts":
/*!**********************!*\
  !*** ./src/Model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/Point.ts");
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snake */ "./src/Snake.ts");


/** Model for representing the state of the snake game. */
var Model = /** @class */ (function () {
    /** Create a model */
    function Model() {
        /** The size of the game board */
        this.rows = 14;
        this.columns = 10;
        /** Starting length of the snake */
        this.startingLength = 4;
        /** How many points eating the apple yields */
        this.appleScoreValue = 100;
        this.reset();
    }
    /** Reset the game */
    Model.prototype.reset = function () {
        this.status = Model.Status.Running;
        var spawn = {
            // Middle of the game board
            x: Math.floor((this.columns - 1) / 2),
            y: Math.floor((this.rows - 1) / 2),
        };
        this.score = 0;
        this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_1__["default"](spawn, this.startingLength, this);
        this.placeApple();
    };
    /** Set apple coordinates. Looks for a random unoccupied cell. */
    Model.prototype.placeApple = function () {
        var snake = this.snake.getPoints();
        // Start search for a free cell from this row
        var row = Math.floor(Math.random() * this.rows);
        while (true) {
            var numOfSnakeCols = snake.reduce(function (acc, curr) { return (curr.y === row ? 1 + acc : acc); }, 0);
            if (numOfSnakeCols < this.columns) {
                // This row has a free cell for the apple
                break;
            }
            else {
                // No free cells in this row, check next
                row = (row + 1) % this.rows;
            }
        }
        var snakeCols = snake
            .filter(function (p) { return p.y === row; })
            .map(function (p) { return p.x; });
        var initialCol = Math.floor(Math.random() * this.columns);
        for (var i = 0; i < this.columns; i++) {
            var col = (i + initialCol) % this.columns;
            if (!snakeCols.includes(col)) {
                this.apple = { x: col, y: row };
                return;
            }
        }
    };
    /** @returns Apple coordinates */
    Model.prototype.getApple = function () {
        return this.apple;
    };
    /** @returns Array of snake coordinates occupied by the snake */
    Model.prototype.getSnake = function () {
        return this.snake.getPoints();
    };
    /**
     * Set the direction of the snake.
     *
     * @param direction Direction
     */
    Model.prototype.setDirection = function (direction) {
        if (this.status === Model.Status.Running)
            this.snake.setDirection(direction);
    };
    /** Update the state of the game. Move the snake, etc. */
    Model.prototype.update = function () {
        if (this.status !== Model.Status.Running) {
            return;
        }
        this.snake.move();
        if (this.snake.getStatus() === _Snake__WEBPACK_IMPORTED_MODULE_1__["default"].Status.Dead) {
            this.status = Model.Status.Over;
        }
        if (_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(this.snake.head, this.apple)) {
            this.snake.grow();
            this.score = this.score + this.appleScoreValue;
            if (this.snake.length === this.rows * this.columns) {
                this.status = Model.Status.Won;
            }
            else {
                this.placeApple();
            }
        }
    };
    /** Pause and unpause the game. */
    Model.prototype.togglePause = function () {
        if (this.status === Model.Status.Running) {
            this.status = Model.Status.Paused;
        }
        else if (this.status === Model.Status.Paused) {
            this.status = Model.Status.Running;
        }
    };
    /**
     * Get the current game status
     *
     * @returns Game status
     */
    Model.prototype.getStatus = function () {
        return this.status;
    };
    /**
     * Get current game score
     *
     * @returns Score
     */
    Model.prototype.getScore = function () {
        return this.score;
    };
    return Model;
}());
(function (Model) {
    /** Game status */
    var Status;
    (function (Status) {
        Status[Status["Paused"] = 0] = "Paused";
        Status[Status["Running"] = 1] = "Running";
        Status[Status["Over"] = 2] = "Over";
        Status[Status["Won"] = 3] = "Won";
    })(Status = Model.Status || (Model.Status = {}));
})(Model || (Model = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);


/***/ }),

/***/ "./src/Point.ts":
/*!**********************!*\
  !*** ./src/Point.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Point;
(function (Point) {
    /**
     * Returns true if the points have same coordinates, else returns false.
     *
     * @param point1 Point 1
     * @param point2 Point 2
     * @returns Result
     */
    Point.equals = function (point1, point2) {
        return point1.x === point2.x && point1.y == point2.y;
    };
    /**
     * Adds the coordinates of the two points and returns the result
     *
     * @param point1 Point 1
     * @param point2 Point 2
     * @returns Result
     */
    Point.add = function (point1, point2) {
        return { x: point1.x + point2.x, y: point1.y + point2.y };
    };
})(Point || (Point = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);


/***/ }),

/***/ "./src/Snake.ts":
/*!**********************!*\
  !*** ./src/Snake.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/Point.ts");
/* harmony import */ var _Direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Direction */ "./src/Direction.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


/** Object for representing the state of the snake. */
var Snake = /** @class */ (function () {
    /**
     * Create a new snake.
     *
     * @param spawn Spawn point of the snake
     * @param length Starting length of the snake
     * @param model Game model
     */
    function Snake(spawn, length, model) {
        /** Points that make out the snake */
        this.points = [];
        this.direction = null;
        this.status = Snake.Status.Ok;
        this.model = model;
        if (length < 2)
            throw Error('Snake is too smol. Minimum snake length is 2.');
        for (var i = 0; i < length; i++) {
            this.points.push(__assign({}, spawn));
        }
    }
    Object.defineProperty(Snake.prototype, "length", {
        /**
         * Returns the length of the snake
         *
         * @returns Length
         */
        get: function () {
            return this.points.length;
        },
        enumerable: false,
        configurable: true
    });
    /** Move the snake. Snake is moved to the active direction. */
    Snake.prototype.move = function () {
        var newHead = this.movePoint(this.points[0], this.direction);
        var isSelfCollision = this.points
            .slice(0, -1)
            .some(function (p) { return _Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(p, newHead); });
        var isWallCollision = newHead.x < 0 ||
            newHead.x >= this.model.columns ||
            newHead.y < 0 ||
            newHead.y >= this.model.rows;
        if ((isSelfCollision && this.direction !== null) || isWallCollision) {
            this.status = Snake.Status.Dead;
        }
        this.points.unshift(newHead);
        this.points.pop();
    };
    /** Grow the snake. A copy of the last point is appended to the snake. */
    Snake.prototype.grow = function () {
        var last = this.points[this.points.length - 1];
        this.points.push(__assign({}, last));
    };
    Object.defineProperty(Snake.prototype, "head", {
        /**
         * Get the coordinates of the snake head
         *
         * @returns Head
         */
        get: function () {
            return this.points[0];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add point and direction and return the result.
     *
     * @param point Point
     * @param direction Direction to move the point
     * @returns Result
     */
    Snake.prototype.movePoint = function (point, direction) {
        return _Point__WEBPACK_IMPORTED_MODULE_0__["default"].add(point, this.directionToPoint(direction));
    };
    /**
     * Returns the snake coordinates
     *
     * @returns Result
     */
    Snake.prototype.getPoints = function () {
        return this.points;
    };
    /**
     * Converts direction to a point.
     *
     * @param direction New direction
     * @returns Point
     */
    Snake.prototype.directionToPoint = function (direction) {
        var d = { x: 0, y: 0 };
        if (direction === _Direction__WEBPACK_IMPORTED_MODULE_1__["default"].Up)
            d.y = -1;
        else if (direction === _Direction__WEBPACK_IMPORTED_MODULE_1__["default"].Right)
            d.x = 1;
        else if (direction === _Direction__WEBPACK_IMPORTED_MODULE_1__["default"].Down)
            d.y = 1;
        else if (direction === _Direction__WEBPACK_IMPORTED_MODULE_1__["default"].Left)
            d.x = -1;
        return d;
    };
    /**
     * Set the direction of the snake.
     *
     * @param direction Direction
     */
    Snake.prototype.setDirection = function (direction) {
        var neck = this.points[1];
        var head = this.points[0];
        var newHead = this.movePoint(head, direction);
        // 180° turn not allowed
        if (!_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(newHead, neck)) {
            this.direction = direction;
        }
    };
    /**
     * Return the status of the snake
     *
     * @returns Status
     */
    Snake.prototype.getStatus = function () {
        return this.status;
    };
    return Snake;
}());
(function (Snake) {
    /** Represents the status of the snake */
    var Status;
    (function (Status) {
        Status[Status["Ok"] = 0] = "Ok";
        Status[Status["Dead"] = 1] = "Dead";
    })(Status = Snake.Status || (Snake.Status = {}));
})(Snake || (Snake = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);


/***/ }),

/***/ "./src/View.ts":
/*!*********************!*\
  !*** ./src/View.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./src/Model.ts");

/** View that renders the game using a 2D canvas. */
var View = /** @class */ (function () {
    /**
     * Create a view.
     *
     * @param model Game model
     * @param container Mount point for the canvas
     * @param scoreLabel Element to write the score to
     */
    function View(model, container, scoreLabel) {
        var _this = this;
        this.model = model;
        this.container = container;
        this.scoreLabel = scoreLabel;
        this.border = 8; // px
        this.margin = 12; //px
        this.images = this.getImages();
        this.previousStatus = null;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        container.appendChild(this.canvas);
        this.canvas.style.borderWidth = "".concat(this.border, "px");
        this.canvas.style.borderStyle = 'solid';
        this.canvas.style.margin = "".concat(this.margin, "px");
        this.resize();
        window.onresize = function () { return _this.resize(); };
    }
    /**
     * Get the assets used by the game
     *
     * @returns Object containing the images
     */
    View.prototype.getImages = function () {
        var gameOver = new Image();
        var paused = new Image();
        var victory = new Image();
        var apple = new Image();
        gameOver.src = __webpack_require__(/*! ./assets/game_over.svg */ "./src/assets/game_over.svg");
        paused.src = __webpack_require__(/*! ./assets/paused.svg */ "./src/assets/paused.svg");
        victory.src = __webpack_require__(/*! ./assets/victory.svg */ "./src/assets/victory.svg");
        apple.src = __webpack_require__(/*! ./assets/apple.svg */ "./src/assets/apple.svg");
        return { gameOver: gameOver, victory: victory, paused: paused, apple: apple };
    };
    /**
     * Resize the canvas to fit the container. The size is limited by both the
     * container height and container width.
     */
    View.prototype.resize = function () {
        var aspectRatio = this.model.columns / this.model.rows;
        var mnb = 2 * this.margin + 2 * this.border;
        if (this.container.clientHeight <
            this.container.clientWidth / aspectRatio) {
            // Height defines the size
            this.canvas.height = this.container.clientHeight - mnb;
            this.canvas.width = (this.container.clientHeight - mnb) * aspectRatio;
        }
        else {
            // Width defines the size
            this.canvas.height = (this.container.clientWidth - mnb) / aspectRatio;
            this.canvas.width = this.container.clientWidth - mnb;
        }
    };
    /** Renders overlays for the game */
    View.prototype.renderOverlay = function () {
        var status = this.model.getStatus();
        if (status === _Model__WEBPACK_IMPORTED_MODULE_0__["default"].Status.Running)
            return;
        var img = null; // Create new img element
        if (status === _Model__WEBPACK_IMPORTED_MODULE_0__["default"].Status.Over)
            img = this.images.gameOver;
        if (status === _Model__WEBPACK_IMPORTED_MODULE_0__["default"].Status.Won)
            img = this.images.victory;
        if (status === _Model__WEBPACK_IMPORTED_MODULE_0__["default"].Status.Paused)
            img = this.images.paused;
        var size = 0.8; // How much of the screen will be covered
        this.ctx.drawImage(img, (this.canvas.width * (1 - size)) / 2, (this.canvas.height * (1 - size)) / 2, this.canvas.width * size, this.canvas.height * size);
    };
    Object.defineProperty(View.prototype, "cellSize", {
        /**
         * Gets the cell size of the game. The cell size is defined by the canvas
         * size, and by the number of rows and columns in the game.
         *
         * @returns Size of the cell
         */
        get: function () {
            return this.canvas.width / this.model.columns;
        },
        enumerable: false,
        configurable: true
    });
    /** Draws the current state of the model to the canvas. */
    View.prototype.render = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderApple();
        this.renderSnake();
        this.updateScore();
        this.renderOverlay();
        var status = this.model.getStatus();
        if (this.previousStatus != status) {
            // Do these only if the status changed
            this.updateBorderColor();
        }
        this.previousStatus = status;
    };
    /** Draws the snake to the canvas. */
    View.prototype.renderSnake = function () {
        var snake = this.model.getSnake();
        this.ctx.fillStyle = 'white';
        var size = this.cellSize;
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = size * 0.8; // Snake width
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.beginPath();
        for (var i = 0; i < snake.length; i++) {
            var _a = snake[i], x = _a.x, y = _a.y;
            this.ctx.lineTo(x * size + size / 2, y * size + size / 2);
        }
        this.ctx.stroke();
    };
    /** Draws the apple to the canvas. */
    View.prototype.renderApple = function () {
        var apple = this.model.getApple();
        var size = this.cellSize;
        this.ctx.drawImage(this.images.apple, Math.floor(apple.x * size), Math.floor(apple.y * size), Math.ceil(size), Math.ceil(size));
    };
    /** Updates the border color of the game according to the game status. */
    View.prototype.updateBorderColor = function () {
        var status = this.model.getStatus();
        if (status === _Model__WEBPACK_IMPORTED_MODULE_0__["default"].Status.Running)
            this.canvas.style.borderColor = 'green';
        if (status === _Model__WEBPACK_IMPORTED_MODULE_0__["default"].Status.Paused)
            this.canvas.style.borderColor = 'blue';
        if (status === _Model__WEBPACK_IMPORTED_MODULE_0__["default"].Status.Over)
            this.canvas.style.borderColor = 'darkred';
        if (status === _Model__WEBPACK_IMPORTED_MODULE_0__["default"].Status.Won)
            this.canvas.style.borderColor = 'gold';
    };
    /** Update the score label content according to the game score. */
    View.prototype.updateScore = function () {
        this.scoreLabel.innerHTML = String(this.model.getScore());
    };
    return View;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/Game.ts");


var container = document.getElementById('main');
var scoreLabel = document.getElementById('score');
var game = new _Game__WEBPACK_IMPORTED_MODULE_1__["default"](container, scoreLabel);
game.loop();


/***/ }),

/***/ "./src/assets/apple.svg":
/*!******************************!*\
  !*** ./src/assets/apple.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34fcf5357460e01579b3.svg";

/***/ }),

/***/ "./src/assets/game_over.svg":
/*!**********************************!*\
  !*** ./src/assets/game_over.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c38318b0b01dc2f7326.svg";

/***/ }),

/***/ "./src/assets/paused.svg":
/*!*******************************!*\
  !*** ./src/assets/paused.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb852593b651c2a7c2aa.svg";

/***/ }),

/***/ "./src/assets/victory.svg":
/*!********************************!*\
  !*** ./src/assets/victory.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "571f32573ba22f0030b3.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TbmFrZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vU25ha2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1NuYWtlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vU25ha2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vU25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vU25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1NuYWtlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1NuYWtlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1NuYWtlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vU25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9TbmFrZS8uL3NyYy9Db250cm9sbGVyLnRzIiwid2VicGFjazovL1NuYWtlLy4vc3JjL0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly9TbmFrZS8uL3NyYy9HYW1lLnRzIiwid2VicGFjazovL1NuYWtlLy4vc3JjL01vZGVsLnRzIiwid2VicGFjazovL1NuYWtlLy4vc3JjL1BvaW50LnRzIiwid2VicGFjazovL1NuYWtlLy4vc3JjL1NuYWtlLnRzIiwid2VicGFjazovL1NuYWtlLy4vc3JjL1ZpZXcudHMiLCJ3ZWJwYWNrOi8vU25ha2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGZvbnQtc2l6ZTogMjAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNzY29yZSB7XFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgJy4gaGVhZGVyIC4nXFxuICAgICAnLiBtYWluIC4nXFxuICAgICAnLiBmb290ZXIgLic7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIHBhZGRpbmc6IDAgNGNoIDFjaCA0Y2g7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLDhDQUE4QztJQUM5QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQzs7O2lCQUdhO0lBQ2IsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCOztJQUVyQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBmb250LXNpemU6IDIwMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jc2NvcmUge1xcbiAgICBmb250LXNpemU6IDE1MCU7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICcuIGhlYWRlciAuJ1xcbiAgICAgJy4gbWFpbiAuJ1xcbiAgICAgJy4gZm9vdGVyIC4nO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBwYWRkaW5nOiAwIDRjaCAxY2ggNGNoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbCc7XG5pbXBvcnQgRGlyZWN0aW9uIGZyb20gJy4vRGlyZWN0aW9uJztcblxuLyoqIENvbnRyb2xsZXIgb2JqZWN0IGZvciB0aGUgZ2FtZS4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xuICAvKipcbiAgICogQXR0YWNoZXMgYW4gZXZlbnQgaGFuZGxlciB0byB0aGUgZG9jdW1lbnQuIFRoZSBldmVudCBoYW5kbGVyIGNhdGNoZXNcbiAgICogS2V5Ym9hcmRFdmVudHMgYW5kIHVwZGF0ZXMgdGhlIG1vZGVsIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAcGFyYW0gbW9kZWwgR2FtZSBtb2RlbFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kZWw6IE1vZGVsKSB7XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gKGUpID0+IHRoaXMuZXZlbnRIYW5kbGVyKGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGhhbmRsaW5nIGtleWJvYXJkIGV2ZW50cy4gVXBkYXRlcyB0aGUgbW9kZWwuXG4gICAqXG4gICAqIEBwYXJhbSBlIEtleWJvYXJkRXZlbnRcbiAgICovXG4gIHByaXZhdGUgZXZlbnRIYW5kbGVyKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIHRoaXMubW9kZWwuc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5VcCk7XG4gICAgfSBlbHNlIGlmIChlLmNvZGUgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICB0aGlzLm1vZGVsLnNldERpcmVjdGlvbihEaXJlY3Rpb24uTGVmdCk7XG4gICAgfSBlbHNlIGlmIChlLmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICB0aGlzLm1vZGVsLnNldERpcmVjdGlvbihEaXJlY3Rpb24uRG93bik7XG4gICAgfSBlbHNlIGlmIChlLmNvZGUgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgdGhpcy5tb2RlbC5zZXREaXJlY3Rpb24oRGlyZWN0aW9uLlJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJykge1xuICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5tb2RlbC5nZXRTdGF0dXMoKTtcbiAgICAgIGlmIChzdGF0dXMgPT09IE1vZGVsLlN0YXR1cy5PdmVyIHx8IHN0YXR1cyA9PT0gTW9kZWwuU3RhdHVzLldvbikge1xuICAgICAgICB0aGlzLm1vZGVsLnJlc2V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vZGVsLnRvZ2dsZVBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJlbnVtIERpcmVjdGlvbiB7XG4gIFVwLFxuICBEb3duLFxuICBMZWZ0LFxuICBSaWdodCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uO1xuIiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlcic7XG5cbi8qKiBHYW1lIG9iamVjdCAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIC8qKlxuICAgKiBUaWNrIHNwZWVkIGZvciB0aGUgZ2FtZS4gQ29udHJvbHMgYm90aCB0aGUgdXBkYXRlIHNwZWVkIGFuZCB0aGUgcmVuZGVyXG4gICAqIHNwZWVkIG9mIHRoZSBnYW1lXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IHRpbWVTdGVwID0gMjAwOyAvLyBNaWxsaXNlY29uZHNcblxuICBwcml2YXRlIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcbiAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRyb2xsZXI6IENvbnRyb2xsZXI7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjb250YWluZXIgTW91bnQgcG9pbnQgZm9yIHRoZSBnYW1lIGNhbnZhc1xuICAgKiBAcGFyYW0gc2NvcmVMYWJlbCBIVE1MIGVsZW1lbnQgdG8gd3JpdGUgdGhlIHBsYXllciBzY29yZSB0b1xuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHNjb3JlTGFiZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbCgpO1xuICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KHRoaXMubW9kZWwsIGNvbnRhaW5lciwgc2NvcmVMYWJlbCk7XG4gICAgdGhpcy5jb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIodGhpcy5tb2RlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBnYW1lIGxvb3AuIE9uIGVhY2ggaXRlcmF0aW9uIHVwZGF0ZXMgdGhlIGdhbWUgbW9kZWwgYW5kIHJlbmRlcnNcbiAgICogdGhlIGdhbWUgdmlldy5cbiAgICovXG4gIHB1YmxpYyBsb29wKCk6IHZvaWQge1xuICAgIGxldCBwcmV2aW91c1RpbWUgPSAwLjA7XG4gICAgbGV0IGRlbHRhID0gMC4wO1xuICAgIGNvbnN0IHRpbWVTdGVwID0gdGhpcy50aW1lU3RlcDtcblxuICAgIGNvbnN0IGxvb3AgPSAodGltZTogbnVtYmVyKSA9PiB7XG4gICAgICAvLyBDb21wdXRlIHRoZSBkZWx0YS10aW1lIGFnYWluc3QgdGhlIHByZXZpb3VzIHRpbWVcbiAgICAgIGNvbnN0IGR0ID0gdGltZSAtIHByZXZpb3VzVGltZTtcbiAgICAgIC8vIEFjY3VtdWxhdGUgZGVsdGEgdGltZVxuICAgICAgZGVsdGEgPSBkZWx0YSArIGR0O1xuICAgICAgLy8gVXBkYXRlIHRoZSBwcmV2aW91cyB0aW1lXG4gICAgICBwcmV2aW91c1RpbWUgPSB0aW1lO1xuXG4gICAgICB3aGlsZSAoZGVsdGEgPiB0aW1lU3RlcCkge1xuICAgICAgICAvLyBVcGRhdGUgZ2FtZVxuICAgICAgICB0aGlzLm1vZGVsLnVwZGF0ZSgpO1xuICAgICAgICBkZWx0YSA9IGRlbHRhIC0gdGltZVN0ZXA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudmlldy5yZW5kZXIoKTtcblxuICAgICAgLy8gUmVwZWF0XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIH07XG5cbiAgICAvLyBTdGFydCBsb29wXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZSkgPT4ge1xuICAgICAgcHJldmlvdXNUaW1lID0gdGltZTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSAnLi9EaXJlY3Rpb24nO1xuaW1wb3J0IFNuYWtlIGZyb20gJy4vU25ha2UnO1xuXG4vKiogTW9kZWwgZm9yIHJlcHJlc2VudGluZyB0aGUgc3RhdGUgb2YgdGhlIHNuYWtlIGdhbWUuICovXG5jbGFzcyBNb2RlbCB7XG4gIHByaXZhdGUgc25ha2U6IFNuYWtlO1xuXG4gIC8qKiBUaGUgc2l6ZSBvZiB0aGUgZ2FtZSBib2FyZCAqL1xuICBwdWJsaWMgcmVhZG9ubHkgcm93cyA9IDE0O1xuICBwdWJsaWMgcmVhZG9ubHkgY29sdW1ucyA9IDEwO1xuXG4gIC8qKiBTdGFydGluZyBsZW5ndGggb2YgdGhlIHNuYWtlICovXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRpbmdMZW5ndGggPSA0O1xuICAvKiogSG93IG1hbnkgcG9pbnRzIGVhdGluZyB0aGUgYXBwbGUgeWllbGRzICovXG4gIHByaXZhdGUgcmVhZG9ubHkgYXBwbGVTY29yZVZhbHVlID0gMTAwO1xuICBwcml2YXRlIHN0YXR1czogTW9kZWwuU3RhdHVzO1xuICBwcml2YXRlIHNjb3JlOiBudW1iZXI7XG4gIHByaXZhdGUgYXBwbGU6IFBvaW50O1xuXG4gIC8qKiBDcmVhdGUgYSBtb2RlbCAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqIFJlc2V0IHRoZSBnYW1lICovXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXR1cyA9IE1vZGVsLlN0YXR1cy5SdW5uaW5nO1xuICAgIGNvbnN0IHNwYXduOiBQb2ludCA9IHtcbiAgICAgIC8vIE1pZGRsZSBvZiB0aGUgZ2FtZSBib2FyZFxuICAgICAgeDogTWF0aC5mbG9vcigodGhpcy5jb2x1bW5zIC0gMSkgLyAyKSxcbiAgICAgIHk6IE1hdGguZmxvb3IoKHRoaXMucm93cyAtIDEpIC8gMiksXG4gICAgfTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKHNwYXduLCB0aGlzLnN0YXJ0aW5nTGVuZ3RoLCB0aGlzKTtcbiAgICB0aGlzLnBsYWNlQXBwbGUoKTtcbiAgfVxuXG4gIC8qKiBTZXQgYXBwbGUgY29vcmRpbmF0ZXMuIExvb2tzIGZvciBhIHJhbmRvbSB1bm9jY3VwaWVkIGNlbGwuICovXG4gIHByaXZhdGUgcGxhY2VBcHBsZSgpOiB2b2lkIHtcbiAgICBjb25zdCBzbmFrZSA9IHRoaXMuc25ha2UuZ2V0UG9pbnRzKCk7XG4gICAgLy8gU3RhcnQgc2VhcmNoIGZvciBhIGZyZWUgY2VsbCBmcm9tIHRoaXMgcm93XG4gICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucm93cyk7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgbnVtT2ZTbmFrZUNvbHM6IG51bWJlciA9IHNuYWtlLnJlZHVjZShcbiAgICAgICAgKGFjYywgY3VycikgPT4gKGN1cnIueSA9PT0gcm93ID8gMSArIGFjYyA6IGFjYyksXG4gICAgICAgIDAsXG4gICAgICApO1xuICAgICAgaWYgKG51bU9mU25ha2VDb2xzIDwgdGhpcy5jb2x1bW5zKSB7XG4gICAgICAgIC8vIFRoaXMgcm93IGhhcyBhIGZyZWUgY2VsbCBmb3IgdGhlIGFwcGxlXG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gZnJlZSBjZWxscyBpbiB0aGlzIHJvdywgY2hlY2sgbmV4dFxuICAgICAgICByb3cgPSAocm93ICsgMSkgJSB0aGlzLnJvd3M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc25ha2VDb2xzOiBudW1iZXJbXSA9IHNuYWtlXG4gICAgICAuZmlsdGVyKChwKSA9PiBwLnkgPT09IHJvdylcbiAgICAgIC5tYXAoKHApID0+IHAueCk7XG4gICAgY29uc3QgaW5pdGlhbENvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sdW1ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgY29uc3QgY29sID0gKGkgKyBpbml0aWFsQ29sKSAlIHRoaXMuY29sdW1ucztcbiAgICAgIGlmICghc25ha2VDb2xzLmluY2x1ZGVzKGNvbCkpIHtcbiAgICAgICAgdGhpcy5hcHBsZSA9IHsgeDogY29sLCB5OiByb3cgfTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBAcmV0dXJucyBBcHBsZSBjb29yZGluYXRlcyAqL1xuICBwdWJsaWMgZ2V0QXBwbGUoKTogUG9pbnQge1xuICAgIHJldHVybiB0aGlzLmFwcGxlO1xuICB9XG5cbiAgLyoqIEByZXR1cm5zIEFycmF5IG9mIHNuYWtlIGNvb3JkaW5hdGVzIG9jY3VwaWVkIGJ5IHRoZSBzbmFrZSAqL1xuICBwdWJsaWMgZ2V0U25ha2UoKTogUG9pbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuc25ha2UuZ2V0UG9pbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNuYWtlLlxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIERpcmVjdGlvblxuICAgKi9cbiAgcHVibGljIHNldERpcmVjdGlvbihkaXJlY3Rpb246IERpcmVjdGlvbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gTW9kZWwuU3RhdHVzLlJ1bm5pbmcpXG4gICAgICB0aGlzLnNuYWtlLnNldERpcmVjdGlvbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGdhbWUuIE1vdmUgdGhlIHNuYWtlLCBldGMuICovXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdHVzICE9PSBNb2RlbC5TdGF0dXMuUnVubmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNuYWtlLm1vdmUoKTtcbiAgICBpZiAodGhpcy5zbmFrZS5nZXRTdGF0dXMoKSA9PT0gU25ha2UuU3RhdHVzLkRlYWQpIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gTW9kZWwuU3RhdHVzLk92ZXI7XG4gICAgfVxuICAgIGlmIChQb2ludC5lcXVhbHModGhpcy5zbmFrZS5oZWFkLCB0aGlzLmFwcGxlKSkge1xuICAgICAgdGhpcy5zbmFrZS5ncm93KCk7XG4gICAgICB0aGlzLnNjb3JlID0gdGhpcy5zY29yZSArIHRoaXMuYXBwbGVTY29yZVZhbHVlO1xuICAgICAgaWYgKHRoaXMuc25ha2UubGVuZ3RoID09PSB0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnMpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBNb2RlbC5TdGF0dXMuV29uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGFjZUFwcGxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIFBhdXNlIGFuZCB1bnBhdXNlIHRoZSBnYW1lLiAqL1xuICBwdWJsaWMgdG9nZ2xlUGF1c2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSBNb2RlbC5TdGF0dXMuUnVubmluZykge1xuICAgICAgdGhpcy5zdGF0dXMgPSBNb2RlbC5TdGF0dXMuUGF1c2VkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09IE1vZGVsLlN0YXR1cy5QYXVzZWQpIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gTW9kZWwuU3RhdHVzLlJ1bm5pbmc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBnYW1lIHN0YXR1c1xuICAgKlxuICAgKiBAcmV0dXJucyBHYW1lIHN0YXR1c1xuICAgKi9cbiAgcHVibGljIGdldFN0YXR1cygpOiBNb2RlbC5TdGF0dXMge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBnYW1lIHNjb3JlXG4gICAqXG4gICAqIEByZXR1cm5zIFNjb3JlXG4gICAqL1xuICBwdWJsaWMgZ2V0U2NvcmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zY29yZTtcbiAgfVxufVxuXG5uYW1lc3BhY2UgTW9kZWwge1xuICAvKiogR2FtZSBzdGF0dXMgKi9cbiAgZXhwb3J0IGVudW0gU3RhdHVzIHtcbiAgICBQYXVzZWQsXG4gICAgUnVubmluZyxcbiAgICBPdmVyLFxuICAgIFdvbixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiIsImludGVyZmFjZSBQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5uYW1lc3BhY2UgUG9pbnQge1xuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2ludHMgaGF2ZSBzYW1lIGNvb3JkaW5hdGVzLCBlbHNlIHJldHVybnMgZmFsc2UuXG4gICAqXG4gICAqIEBwYXJhbSBwb2ludDEgUG9pbnQgMVxuICAgKiBAcGFyYW0gcG9pbnQyIFBvaW50IDJcbiAgICogQHJldHVybnMgUmVzdWx0XG4gICAqL1xuICBleHBvcnQgY29uc3QgZXF1YWxzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gcG9pbnQxLnggPT09IHBvaW50Mi54ICYmIHBvaW50MS55ID09IHBvaW50Mi55O1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgdHdvIHBvaW50cyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG4gICAqXG4gICAqIEBwYXJhbSBwb2ludDEgUG9pbnQgMVxuICAgKiBAcGFyYW0gcG9pbnQyIFBvaW50IDJcbiAgICogQHJldHVybnMgUmVzdWx0XG4gICAqL1xuICBleHBvcnQgY29uc3QgYWRkID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiB7XG4gICAgcmV0dXJuIHsgeDogcG9pbnQxLnggKyBwb2ludDIueCwgeTogcG9pbnQxLnkgKyBwb2ludDIueSB9O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsJztcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSAnLi9EaXJlY3Rpb24nO1xuXG4vKiogT2JqZWN0IGZvciByZXByZXNlbnRpbmcgdGhlIHN0YXRlIG9mIHRoZSBzbmFrZS4gKi9cbmNsYXNzIFNuYWtlIHtcbiAgLyoqIFBvaW50cyB0aGF0IG1ha2Ugb3V0IHRoZSBzbmFrZSAqL1xuICBwcml2YXRlIHBvaW50czogUG9pbnRbXSA9IFtdO1xuICBwcml2YXRlIGRpcmVjdGlvbjogRGlyZWN0aW9uIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgbW9kZWw6IE1vZGVsO1xuICBwcml2YXRlIHN0YXR1cyA9IFNuYWtlLlN0YXR1cy5PaztcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHNuYWtlLlxuICAgKlxuICAgKiBAcGFyYW0gc3Bhd24gU3Bhd24gcG9pbnQgb2YgdGhlIHNuYWtlXG4gICAqIEBwYXJhbSBsZW5ndGggU3RhcnRpbmcgbGVuZ3RoIG9mIHRoZSBzbmFrZVxuICAgKiBAcGFyYW0gbW9kZWwgR2FtZSBtb2RlbFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNwYXduOiBQb2ludCwgbGVuZ3RoOiBudW1iZXIsIG1vZGVsOiBNb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICBpZiAobGVuZ3RoIDwgMilcbiAgICAgIHRocm93IEVycm9yKCdTbmFrZSBpcyB0b28gc21vbC4gTWluaW11bSBzbmFrZSBsZW5ndGggaXMgMi4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBvaW50cy5wdXNoKHsgLi4uc3Bhd24gfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgc25ha2VcbiAgICpcbiAgICogQHJldHVybnMgTGVuZ3RoXG4gICAqL1xuICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBvaW50cy5sZW5ndGg7XG4gIH1cblxuICAvKiogTW92ZSB0aGUgc25ha2UuIFNuYWtlIGlzIG1vdmVkIHRvIHRoZSBhY3RpdmUgZGlyZWN0aW9uLiAqL1xuICBwdWJsaWMgbW92ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdIZWFkID0gdGhpcy5tb3ZlUG9pbnQodGhpcy5wb2ludHNbMF0sIHRoaXMuZGlyZWN0aW9uKTtcblxuICAgIGNvbnN0IGlzU2VsZkNvbGxpc2lvbiA9IHRoaXMucG9pbnRzXG4gICAgICAuc2xpY2UoMCwgLTEpXG4gICAgICAuc29tZSgocCkgPT4gUG9pbnQuZXF1YWxzKHAsIG5ld0hlYWQpKTtcbiAgICBjb25zdCBpc1dhbGxDb2xsaXNpb24gPVxuICAgICAgbmV3SGVhZC54IDwgMCB8fFxuICAgICAgbmV3SGVhZC54ID49IHRoaXMubW9kZWwuY29sdW1ucyB8fFxuICAgICAgbmV3SGVhZC55IDwgMCB8fFxuICAgICAgbmV3SGVhZC55ID49IHRoaXMubW9kZWwucm93cztcblxuICAgIGlmICgoaXNTZWxmQ29sbGlzaW9uICYmIHRoaXMuZGlyZWN0aW9uICE9PSBudWxsKSB8fCBpc1dhbGxDb2xsaXNpb24pIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gU25ha2UuU3RhdHVzLkRlYWQ7XG4gICAgfVxuXG4gICAgdGhpcy5wb2ludHMudW5zaGlmdChuZXdIZWFkKTtcbiAgICB0aGlzLnBvaW50cy5wb3AoKTtcbiAgfVxuXG4gIC8qKiBHcm93IHRoZSBzbmFrZS4gQSBjb3B5IG9mIHRoZSBsYXN0IHBvaW50IGlzIGFwcGVuZGVkIHRvIHRoZSBzbmFrZS4gKi9cbiAgcHVibGljIGdyb3coKTogdm9pZCB7XG4gICAgY29uc3QgbGFzdCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgIHRoaXMucG9pbnRzLnB1c2goeyAuLi5sYXN0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHNuYWtlIGhlYWRcbiAgICpcbiAgICogQHJldHVybnMgSGVhZFxuICAgKi9cbiAgcHVibGljIGdldCBoZWFkKCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5wb2ludHNbMF07XG4gIH1cblxuICAvKipcbiAgICogQWRkIHBvaW50IGFuZCBkaXJlY3Rpb24gYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICAgKlxuICAgKiBAcGFyYW0gcG9pbnQgUG9pbnRcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBEaXJlY3Rpb24gdG8gbW92ZSB0aGUgcG9pbnRcbiAgICogQHJldHVybnMgUmVzdWx0XG4gICAqL1xuICBwcml2YXRlIG1vdmVQb2ludChwb2ludDogUG9pbnQsIGRpcmVjdGlvbjogRGlyZWN0aW9uKTogUG9pbnQge1xuICAgIHJldHVybiBQb2ludC5hZGQocG9pbnQsIHRoaXMuZGlyZWN0aW9uVG9Qb2ludChkaXJlY3Rpb24pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzbmFrZSBjb29yZGluYXRlc1xuICAgKlxuICAgKiBAcmV0dXJucyBSZXN1bHRcbiAgICovXG4gIHB1YmxpYyBnZXRQb2ludHMoKTogUG9pbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGRpcmVjdGlvbiB0byBhIHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIE5ldyBkaXJlY3Rpb25cbiAgICogQHJldHVybnMgUG9pbnRcbiAgICovXG4gIHByaXZhdGUgZGlyZWN0aW9uVG9Qb2ludChkaXJlY3Rpb246IERpcmVjdGlvbik6IFBvaW50IHtcbiAgICBjb25zdCBkOiBQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlVwKSBkLnkgPSAtMTtcbiAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SaWdodCkgZC54ID0gMTtcbiAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Eb3duKSBkLnkgPSAxO1xuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQpIGQueCA9IC0xO1xuXG4gICAgcmV0dXJuIGQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNuYWtlLlxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIERpcmVjdGlvblxuICAgKi9cbiAgcHVibGljIHNldERpcmVjdGlvbihkaXJlY3Rpb246IERpcmVjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IG5lY2sgPSB0aGlzLnBvaW50c1sxXTtcbiAgICBjb25zdCBoZWFkID0gdGhpcy5wb2ludHNbMF07XG4gICAgY29uc3QgbmV3SGVhZCA9IHRoaXMubW92ZVBvaW50KGhlYWQsIGRpcmVjdGlvbik7XG4gICAgLy8gMTgwwrAgdHVybiBub3QgYWxsb3dlZFxuICAgIGlmICghUG9pbnQuZXF1YWxzKG5ld0hlYWQsIG5lY2spKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzdGF0dXMgb2YgdGhlIHNuYWtlXG4gICAqXG4gICAqIEByZXR1cm5zIFN0YXR1c1xuICAgKi9cbiAgcHVibGljIGdldFN0YXR1cygpOiBTbmFrZS5TdGF0dXMge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfVxufVxuXG5uYW1lc3BhY2UgU25ha2Uge1xuICAvKiogUmVwcmVzZW50cyB0aGUgc3RhdHVzIG9mIHRoZSBzbmFrZSAqL1xuICBleHBvcnQgZW51bSBTdGF0dXMge1xuICAgIE9rLFxuICAgIERlYWQsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU25ha2U7XG4iLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbCc7XG5cbi8qKiBWaWV3IHRoYXQgcmVuZGVycyB0aGUgZ2FtZSB1c2luZyBhIDJEIGNhbnZhcy4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgYm9yZGVyID0gODsgLy8gcHhcbiAgcHJpdmF0ZSByZWFkb25seSBtYXJnaW4gPSAxMjsgLy9weFxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlcyA9IHRoaXMuZ2V0SW1hZ2VzKCk7XG4gIHByaXZhdGUgcHJldmlvdXNTdGF0dXM6IE1vZGVsLlN0YXR1cyB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB2aWV3LlxuICAgKlxuICAgKiBAcGFyYW0gbW9kZWwgR2FtZSBtb2RlbFxuICAgKiBAcGFyYW0gY29udGFpbmVyIE1vdW50IHBvaW50IGZvciB0aGUgY2FudmFzXG4gICAqIEBwYXJhbSBzY29yZUxhYmVsIEVsZW1lbnQgdG8gd3JpdGUgdGhlIHNjb3JlIHRvXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RlbDogTW9kZWwsXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgc2NvcmVMYWJlbDogSFRNTEVsZW1lbnQsXG4gICkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXJXaWR0aCA9IGAke3RoaXMuYm9yZGVyfXB4YDtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUubWFyZ2luID0gYCR7dGhpcy5tYXJnaW59cHhgO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLnJlc2l6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYXNzZXRzIHVzZWQgYnkgdGhlIGdhbWVcbiAgICpcbiAgICogQHJldHVybnMgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGltYWdlc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRJbWFnZXMoKSB7XG4gICAgY29uc3QgZ2FtZU92ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBwYXVzZWQgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCB2aWN0b3J5ID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgYXBwbGUgPSBuZXcgSW1hZ2UoKTtcbiAgICBnYW1lT3Zlci5zcmMgPSByZXF1aXJlKCcuL2Fzc2V0cy9nYW1lX292ZXIuc3ZnJyk7XG4gICAgcGF1c2VkLnNyYyA9IHJlcXVpcmUoJy4vYXNzZXRzL3BhdXNlZC5zdmcnKTtcbiAgICB2aWN0b3J5LnNyYyA9IHJlcXVpcmUoJy4vYXNzZXRzL3ZpY3Rvcnkuc3ZnJyk7XG4gICAgYXBwbGUuc3JjID0gcmVxdWlyZSgnLi9hc3NldHMvYXBwbGUuc3ZnJyk7XG4gICAgcmV0dXJuIHsgZ2FtZU92ZXIsIHZpY3RvcnksIHBhdXNlZCwgYXBwbGUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNpemUgdGhlIGNhbnZhcyB0byBmaXQgdGhlIGNvbnRhaW5lci4gVGhlIHNpemUgaXMgbGltaXRlZCBieSBib3RoIHRoZVxuICAgKiBjb250YWluZXIgaGVpZ2h0IGFuZCBjb250YWluZXIgd2lkdGguXG4gICAqL1xuICBwcml2YXRlIHJlc2l6ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHRoaXMubW9kZWwuY29sdW1ucyAvIHRoaXMubW9kZWwucm93cztcbiAgICBjb25zdCBtbmIgPSAyICogdGhpcy5tYXJnaW4gKyAyICogdGhpcy5ib3JkZXI7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgPFxuICAgICAgdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyBhc3BlY3RSYXRpb1xuICAgICkge1xuICAgICAgLy8gSGVpZ2h0IGRlZmluZXMgdGhlIHNpemVcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCAtIG1uYjtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gKHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCAtIG1uYikgKiBhc3BlY3RSYXRpbztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2lkdGggZGVmaW5lcyB0aGUgc2l6ZVxuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gKHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC0gbW5iKSAvIGFzcGVjdFJhdGlvO1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAtIG1uYjtcbiAgICB9XG4gIH1cblxuICAvKiogUmVuZGVycyBvdmVybGF5cyBmb3IgdGhlIGdhbWUgKi9cbiAgcHJpdmF0ZSByZW5kZXJPdmVybGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMubW9kZWwuZ2V0U3RhdHVzKCk7XG4gICAgaWYgKHN0YXR1cyA9PT0gTW9kZWwuU3RhdHVzLlJ1bm5pbmcpIHJldHVybjtcblxuICAgIGxldCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsID0gbnVsbDsgLy8gQ3JlYXRlIG5ldyBpbWcgZWxlbWVudFxuICAgIGlmIChzdGF0dXMgPT09IE1vZGVsLlN0YXR1cy5PdmVyKSBpbWcgPSB0aGlzLmltYWdlcy5nYW1lT3ZlcjtcbiAgICBpZiAoc3RhdHVzID09PSBNb2RlbC5TdGF0dXMuV29uKSBpbWcgPSB0aGlzLmltYWdlcy52aWN0b3J5O1xuICAgIGlmIChzdGF0dXMgPT09IE1vZGVsLlN0YXR1cy5QYXVzZWQpIGltZyA9IHRoaXMuaW1hZ2VzLnBhdXNlZDtcblxuICAgIGNvbnN0IHNpemUgPSAwLjg7IC8vIEhvdyBtdWNoIG9mIHRoZSBzY3JlZW4gd2lsbCBiZSBjb3ZlcmVkXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgaW1nLFxuICAgICAgKHRoaXMuY2FudmFzLndpZHRoICogKDEgLSBzaXplKSkgLyAyLFxuICAgICAgKHRoaXMuY2FudmFzLmhlaWdodCAqICgxIC0gc2l6ZSkpIC8gMixcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoICogc2l6ZSxcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAqIHNpemUsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjZWxsIHNpemUgb2YgdGhlIGdhbWUuIFRoZSBjZWxsIHNpemUgaXMgZGVmaW5lZCBieSB0aGUgY2FudmFzXG4gICAqIHNpemUsIGFuZCBieSB0aGUgbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnMgaW4gdGhlIGdhbWUuXG4gICAqXG4gICAqIEByZXR1cm5zIFNpemUgb2YgdGhlIGNlbGxcbiAgICovXG4gIHByaXZhdGUgZ2V0IGNlbGxTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMubW9kZWwuY29sdW1ucztcbiAgfVxuXG4gIC8qKiBEcmF3cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgbW9kZWwgdG8gdGhlIGNhbnZhcy4gKi9cbiAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy5yZW5kZXJBcHBsZSgpO1xuICAgIHRoaXMucmVuZGVyU25ha2UoKTtcbiAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgdGhpcy5yZW5kZXJPdmVybGF5KCk7XG5cbiAgICBjb25zdCBzdGF0dXMgPSB0aGlzLm1vZGVsLmdldFN0YXR1cygpO1xuICAgIGlmICh0aGlzLnByZXZpb3VzU3RhdHVzICE9IHN0YXR1cykge1xuICAgICAgLy8gRG8gdGhlc2Ugb25seSBpZiB0aGUgc3RhdHVzIGNoYW5nZWRcbiAgICAgIHRoaXMudXBkYXRlQm9yZGVyQ29sb3IoKTtcbiAgICB9XG4gICAgdGhpcy5wcmV2aW91c1N0YXR1cyA9IHN0YXR1cztcbiAgfVxuXG4gIC8qKiBEcmF3cyB0aGUgc25ha2UgdG8gdGhlIGNhbnZhcy4gKi9cbiAgcHJpdmF0ZSByZW5kZXJTbmFrZSgpOiB2b2lkIHtcbiAgICBjb25zdCBzbmFrZSA9IHRoaXMubW9kZWwuZ2V0U25ha2UoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmNlbGxTaXplO1xuXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHNpemUgKiAwLjg7IC8vIFNuYWtlIHdpZHRoXG4gICAgdGhpcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgdGhpcy5jdHgubGluZUpvaW4gPSAncm91bmQnO1xuXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbmFrZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBzbmFrZVtpXTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh4ICogc2l6ZSArIHNpemUgLyAyLCB5ICogc2l6ZSArIHNpemUgLyAyKTtcbiAgICB9XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH1cblxuICAvKiogRHJhd3MgdGhlIGFwcGxlIHRvIHRoZSBjYW52YXMuICovXG4gIHByaXZhdGUgcmVuZGVyQXBwbGUoKTogdm9pZCB7XG4gICAgY29uc3QgYXBwbGUgPSB0aGlzLm1vZGVsLmdldEFwcGxlKCk7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuY2VsbFNpemU7XG5cbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlcy5hcHBsZSxcbiAgICAgIE1hdGguZmxvb3IoYXBwbGUueCAqIHNpemUpLFxuICAgICAgTWF0aC5mbG9vcihhcHBsZS55ICogc2l6ZSksXG4gICAgICBNYXRoLmNlaWwoc2l6ZSksXG4gICAgICBNYXRoLmNlaWwoc2l6ZSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBib3JkZXIgY29sb3Igb2YgdGhlIGdhbWUgYWNjb3JkaW5nIHRvIHRoZSBnYW1lIHN0YXR1cy4gKi9cbiAgcHJpdmF0ZSB1cGRhdGVCb3JkZXJDb2xvcigpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0dXMgPSB0aGlzLm1vZGVsLmdldFN0YXR1cygpO1xuICAgIGlmIChzdGF0dXMgPT09IE1vZGVsLlN0YXR1cy5SdW5uaW5nKVxuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYm9yZGVyQ29sb3IgPSAnZ3JlZW4nO1xuICAgIGlmIChzdGF0dXMgPT09IE1vZGVsLlN0YXR1cy5QYXVzZWQpIHRoaXMuY2FudmFzLnN0eWxlLmJvcmRlckNvbG9yID0gJ2JsdWUnO1xuICAgIGlmIChzdGF0dXMgPT09IE1vZGVsLlN0YXR1cy5PdmVyKSB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXJDb2xvciA9ICdkYXJrcmVkJztcbiAgICBpZiAoc3RhdHVzID09PSBNb2RlbC5TdGF0dXMuV29uKSB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXJDb2xvciA9ICdnb2xkJztcbiAgfVxuXG4gIC8qKiBVcGRhdGUgdGhlIHNjb3JlIGxhYmVsIGNvbnRlbnQgYWNjb3JkaW5nIHRvIHRoZSBnYW1lIHNjb3JlLiAqL1xuICBwcml2YXRlIHVwZGF0ZVNjb3JlKCk6IHZvaWQge1xuICAgIHRoaXMuc2NvcmVMYWJlbC5pbm5lckhUTUwgPSBTdHJpbmcodGhpcy5tb2RlbC5nZXRTY29yZSgpKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuY29uc3Qgc2NvcmVMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY29udGFpbmVyLCBzY29yZUxhYmVsKTtcbmdhbWUubG9vcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9