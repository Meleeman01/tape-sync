/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.svelte":
/*!************************!*\
  !*** ./src/app.svelte ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chat */ "./src/components/chat.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* src/app.svelte generated by Svelte v3.49.0 */

var isNaN_1 = svelte_internal__WEBPACK_IMPORTED_MODULE_0__.globals.isNaN;



function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-16h7a6b", ".start-button.svelte-16h7a6b.svelte-16h7a6b{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:3}.start-button.svelte-16h7a6b svg.svelte-16h7a6b{fill:white;width:6rem;height:6rem;margin:0}.text.svelte-16h7a6b.svelte-16h7a6b{padding:0 .75rem}.text.svelte-16h7a6b span.svelte-16h7a6b{color:#ccc}main.svelte-16h7a6b>div.svelte-16h7a6b{height:100vh;width:100vw;overflow:hidden;font-family:sans-serif}#controls-container.svelte-16h7a6b.svelte-16h7a6b{width:100%;height:100px;z-index:1;background-color:rgba(0,0,0,0.2);position:fixed;top:0;transition:opacity 0.5s;opacity:0}#people.svelte-16h7a6b.svelte-16h7a6b{fill:white;width:2rem;height:2rem;margin-right:.2rem}#people.svelte-16h7a6b.svelte-16h7a6b:hover{fill:#ccc;cursor:pointer}.info.svelte-16h7a6b.svelte-16h7a6b{display:flex;align-items:center;justify-content:flex-start;position:fixed;z-index:2;bottom:0;height:50px;padding:0.5rem;background-color:rgba(0,0,0,0.2);transition:opacity 0.5s;opacity:0}.button-container.svelte-16h7a6b.svelte-16h7a6b{display:flex;justify-content:space-between;align-items:center;padding:0 .5rem}.controls-left.svelte-16h7a6b.svelte-16h7a6b{display:flex;padding:.25rem;justify-content:flex-start;align-items:center;flex-wrap:wrap}.controls-right.svelte-16h7a6b.svelte-16h7a6b{display:flex;justify-content:flex-end;align-items:center}.slider.svelte-16h7a6b.svelte-16h7a6b{margin:0 .25rem}.icon.svelte-16h7a6b.svelte-16h7a6b{fill:white;width:3rem;height:3rem;margin:0 .25rem}.icon.svelte-16h7a6b.svelte-16h7a6b:hover{fill:#ccc}progress.svelte-16h7a6b.svelte-16h7a6b{width:100%}.media.svelte-16h7a6b.svelte-16h7a6b{height:100%;width:100%;object-fit:contain}@media(max-width: 640px){main.svelte-16h7a6b.svelte-16h7a6b{max-width:none}.icon.svelte-16h7a6b.svelte-16h7a6b{width:2rem;height:2rem}.slider-container.svelte-16h7a6b.svelte-16h7a6b{width:50%}.slider.svelte-16h7a6b.svelte-16h7a6b{width:75%}}");
} // (264:1) {:else}


function create_else_block_1(ctx) {
  var div;
  return {
    c: function c() {
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div.innerHTML = "<img class=\"media svelte-16h7a6b\" src=\"images/scaredyCat.gif\" alt=\"black cat with his hair standing up.\"/>";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "svelte-16h7a6b");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
    }
  };
} // (195:1) {#if timestamp != undefined}


function create_if_block_1(ctx) {
  var div9;
  var div0;
  var t0;
  var div8;
  var progress;
  var progress_value_value;
  var t1;
  var div4;
  var div2;
  var svg1;
  var t2;
  var svg2;
  var t3;
  var div1;
  var input;
  var t4;
  var div3;
  var svg3;
  var use1;
  var t5;
  var svg4;
  var use2;
  var t6;
  var div7;
  var div5;
  var span0;
  var t7;
  var t8;
  var t9;
  var div6;
  var span1;
  var t10;
  var t11_value = format(
  /*duration*/
  ctx[3] -
  /*timestamp*/
  ctx[1]) + "";
  var t11;
  var t12;
  var t13;
  var mounted;
  var dispose;

  function select_block_type_1(ctx, dirty) {
    if (
    /*paused*/
    ctx[6]) return create_if_block_8;
    return create_else_block;
  }

  var current_block_type = select_block_type_1(ctx, [-1, -1]);
  var if_block0 = current_block_type(ctx);

  function select_block_type_2(ctx, dirty) {
    if (
    /*muted*/
    ctx[7]) return create_if_block_4;
    if (
    /*volume*/
    ctx[8] == 0) return create_if_block_5;
    if (
    /*volume*/
    ctx[8] < 0.9) return create_if_block_6;
    if (
    /*volume*/
    ctx[8] > 0.9) return create_if_block_7;
  }

  var current_block_type_1 = select_block_type_2(ctx, [-1, -1]);
  var if_block1 = current_block_type_1 && current_block_type_1(ctx);
  var if_block2 =
  /*mediaType*/
  ctx[5] == 'video' && create_if_block_3(ctx);
  var if_block3 =
  /*mediaType*/
  ctx[5] == 'audio' && create_if_block_2(ctx);
  return {
    c: function c() {
      div9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0.innerHTML = "<svg id=\"start\" class=\"icon svelte-16h7a6b\"><use href=\"/images/regular.svg#play-circle\"></use></svg>";
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      progress = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("progress");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      svg1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      if_block0.c();
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      svg2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      if (if_block1) if_block1.c();
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      svg3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      use1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("use");
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      svg4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      use2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("use");
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      span0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("latency: ");
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(
      /*latency*/
      ctx[10]);
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("-");
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t11_value);
      t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (if_block2) if_block2.c();
      t13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (if_block3) if_block3.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "start-button svelte-16h7a6b");
      progress.value = progress_value_value =
      /*timestamp*/
      ctx[1] /
      /*duration*/
      ctx[3] || 0;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(progress, "class", "svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg1, "class", "icon svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg2, "class", "icon svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "class", "slider svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "range");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "min", "0");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "max", "1");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "step", ".01");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "slider-container svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "controls-left svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.xlink_attr)(use1, "xlink:href", "images/solid.svg#redo-alt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg3, "class", "icon svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.xlink_attr)(use2, "xlink:href", "images/solid.svg#expand");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg4, "class", "icon svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "controls-right svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "button-container svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span0, "class", "svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "text svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span1, "class", "svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "text svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "button-container svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "id", "controls-container");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "class", "svelte-16h7a6b");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div9, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, div8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, progress);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, svg1);
      if_block0.m(svg1, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, svg2);
      if (if_block1) if_block1.m(svg2, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, input);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input,
      /*volume*/
      ctx[8]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, svg3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg3, use1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, svg4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg4, use2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, span0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span0, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span0, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, span1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span1, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span1, t11);
      /*div8_binding*/

      ctx[25](div8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, t12);
      if (if_block2) if_block2.m(div9, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, t13);
      if (if_block3) if_block3.m(div9, null);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(svg1, "click",
        /*pausePlay*/
        ctx[18]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(svg2, "click",
        /*toggleMute*/
        ctx[21]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "change",
        /*input_change_input_handler*/
        ctx[24]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "input",
        /*input_change_input_handler*/
        ctx[24]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "change",
        /*storeVolume*/
        ctx[17]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(svg3, "click",
        /*resync*/
        ctx[19]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(svg4, "click", shrinkExpand), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div9, "mousemove",
        /*showMenu*/
        ctx[15]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div9, "touch",
        /*showMenu*/
        ctx[15]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div9, "click",
        /*start*/
        ctx[16], {
          once: true
        })];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*timestamp, duration*/
      10 && progress_value_value !== (progress_value_value =
      /*timestamp*/
      ctx[1] /
      /*duration*/
      ctx[3] || 0)) {
        progress.value = progress_value_value;
      }

      if (current_block_type !== (current_block_type = select_block_type_1(ctx, dirty))) {
        if_block0.d(1);
        if_block0 = current_block_type(ctx);

        if (if_block0) {
          if_block0.c();
          if_block0.m(svg1, null);
        }
      }

      if (current_block_type_1 !== (current_block_type_1 = select_block_type_2(ctx, dirty))) {
        if (if_block1) if_block1.d(1);
        if_block1 = current_block_type_1 && current_block_type_1(ctx);

        if (if_block1) {
          if_block1.c();
          if_block1.m(svg2, null);
        }
      }

      if (dirty[0] &
      /*volume*/
      256) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input,
        /*volume*/
        ctx[8]);
      }

      if (dirty[0] &
      /*latency*/
      1024) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t8,
      /*latency*/
      ctx[10]);
      if (dirty[0] &
      /*duration, timestamp*/
      10 && t11_value !== (t11_value = format(
      /*duration*/
      ctx[3] -
      /*timestamp*/
      ctx[1]) + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t11, t11_value);

      if (
      /*mediaType*/
      ctx[5] == 'video') {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block_3(ctx);
          if_block2.c();
          if_block2.m(div9, t13);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }

      if (
      /*mediaType*/
      ctx[5] == 'audio') {
        if (if_block3) {
          if_block3.p(ctx, dirty);
        } else {
          if_block3 = create_if_block_2(ctx);
          if_block3.c();
          if_block3.m(div9, null);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div9);
      if_block0.d();

      if (if_block1) {
        if_block1.d();
      }
      /*div8_binding*/


      ctx[25](null);
      if (if_block2) if_block2.d();
      if (if_block3) if_block3.d();
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (209:6) {:else}


function create_else_block(ctx) {
  var use;
  return {
    c: function c() {
      use = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("use");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(use, "href", "/images/regular.svg#pause-circle");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, use, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(use);
    }
  };
} // (207:6) {#if paused}


function create_if_block_8(ctx) {
  var use;
  return {
    c: function c() {
      use = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("use");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(use, "href", "/images/regular.svg#play-circle");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, use, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(use);
    }
  };
} // (221:30) 


function create_if_block_7(ctx) {
  var use;
  return {
    c: function c() {
      use = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("use");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(use, "href", "images/solid.svg#volume-up");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, use, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(use);
    }
  };
} // (219:30) 


function create_if_block_6(ctx) {
  var use;
  return {
    c: function c() {
      use = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("use");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(use, "href", "images/solid.svg#volume-down");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, use, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(use);
    }
  };
} // (217:7) {#if volume == 0}


function create_if_block_5(ctx) {
  var use;
  return {
    c: function c() {
      use = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("use");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(use, "href", "images/solid.svg#volume-off");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, use, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(use);
    }
  };
} // (214:6) {#if muted}


function create_if_block_4(ctx) {
  var use;
  return {
    c: function c() {
      use = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("use");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(use, "href", "images/solid.svg#volume-mute");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, use, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(use);
    }
  };
} // (252:2) {#if mediaType == 'video'}


function create_if_block_3(ctx) {
  var video;
  var track;
  var video_src_value;
  var video_is_paused = true;
  var mounted;
  var dispose;
  return {
    c: function c() {
      video = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("video");
      track = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("track");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(track, "kind", "captions");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(video, "class", "media svelte-16h7a6b");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(video.src, video_src_value =
      /*url*/
      ctx[4])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(video, "src", video_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(video, "currenttime",
      /*time*/
      ctx[2]);
      if (
      /*duration*/
      ctx[3] === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*video_durationchange_handler*/
          ctx[28].call(video)
        );
      });
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, video, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(video, track);
      /*video_binding*/

      ctx[26](video);

      if (!isNaN_1(
      /*volume*/
      ctx[8])) {
        video.volume =
        /*volume*/
        ctx[8];
      }

      video.muted =
      /*muted*/
      ctx[7];

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(video, "volumechange",
        /*video_volumechange_handler*/
        ctx[27]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(video, "durationchange",
        /*video_durationchange_handler*/
        ctx[28]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(video, "play",
        /*video_play_pause_handler*/
        ctx[29]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(video, "pause",
        /*video_play_pause_handler*/
        ctx[29]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(video, "click",
        /*showMenu*/
        ctx[15])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*url*/
      16 && !(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(video.src, video_src_value =
      /*url*/
      ctx[4])) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(video, "src", video_src_value);
      }

      if (dirty[0] &
      /*time*/
      4) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(video, "currenttime",
        /*time*/
        ctx[2]);
      }

      if (dirty[0] &
      /*volume*/
      256 && !isNaN_1(
      /*volume*/
      ctx[8])) {
        video.volume =
        /*volume*/
        ctx[8];
      }

      if (dirty[0] &
      /*muted*/
      128) {
        video.muted =
        /*muted*/
        ctx[7];
      }

      if (dirty[0] &
      /*paused*/
      64 && video_is_paused !== (video_is_paused =
      /*paused*/
      ctx[6])) {
        video[video_is_paused ? "pause" : "play"]();
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(video);
      /*video_binding*/

      ctx[26](null);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (257:2) {#if mediaType == 'audio'}


function create_if_block_2(ctx) {
  var img;
  var img_src_value;
  var t;
  var audio;
  var track;
  var audio_src_value;
  var audio_is_paused = true;
  var mounted;
  var dispose;
  return {
    c: function c() {
      img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      audio = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("audio");
      track = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("track");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "class", "media svelte-16h7a6b");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = "images/kikiRadio.gif")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "alt", "black cat with his hair standing up.");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(track, "kind", "captions");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(audio.src, audio_src_value =
      /*url*/
      ctx[4])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(audio, "src", audio_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(audio, "currenttime",
      /*time*/
      ctx[2]);
      if (
      /*duration*/
      ctx[3] === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*audio_durationchange_handler*/
          ctx[32].call(audio)
        );
      });
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, img, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, audio, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(audio, track);
      /*audio_binding*/

      ctx[30](audio);

      if (!isNaN_1(
      /*volume*/
      ctx[8])) {
        audio.volume =
        /*volume*/
        ctx[8];
      }

      audio.muted =
      /*muted*/
      ctx[7];

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(img, "click",
        /*showMenu*/
        ctx[15]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(audio, "volumechange",
        /*audio_volumechange_handler*/
        ctx[31]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(audio, "durationchange",
        /*audio_durationchange_handler*/
        ctx[32]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(audio, "play",
        /*audio_play_pause_handler*/
        ctx[33]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(audio, "pause",
        /*audio_play_pause_handler*/
        ctx[33]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(audio, "click",
        /*pausePlay*/
        ctx[18])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*url*/
      16 && !(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(audio.src, audio_src_value =
      /*url*/
      ctx[4])) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(audio, "src", audio_src_value);
      }

      if (dirty[0] &
      /*time*/
      4) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(audio, "currenttime",
        /*time*/
        ctx[2]);
      }

      if (dirty[0] &
      /*volume*/
      256 && !isNaN_1(
      /*volume*/
      ctx[8])) {
        audio.volume =
        /*volume*/
        ctx[8];
      }

      if (dirty[0] &
      /*muted*/
      128) {
        audio.muted =
        /*muted*/
        ctx[7];
      }

      if (dirty[0] &
      /*paused*/
      64 && audio_is_paused !== (audio_is_paused =
      /*paused*/
      ctx[6])) {
        audio[audio_is_paused ? "pause" : "play"]();
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(img);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(audio);
      /*audio_binding*/

      ctx[30](null);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (275:1) {#if chatActive}


function create_if_block(ctx) {
  var chat;
  var current;
  chat = new _components_chat__WEBPACK_IMPORTED_MODULE_2__["default"]({
    props: {
      chats:
      /*chatMessages*/
      ctx[14]
    }
  });
  chat.$on("chat",
  /*handleChatMessage*/
  ctx[22]);
  chat.$on("chat-close",
  /*toggleChat*/
  ctx[20]);
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(chat.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(chat, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var chat_changes = {};
      if (dirty[0] &
      /*chatMessages*/
      16384) chat_changes.chats =
      /*chatMessages*/
      ctx[14];
      chat.$set(chat_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(chat.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(chat.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(chat, detaching);
    }
  };
}

function create_fragment(ctx) {
  var main;
  var t0;
  var div;
  var svg;
  var use;
  var t1;
  var b;
  var t2;
  var t3;
  var current;
  var mounted;
  var dispose;

  function select_block_type(ctx, dirty) {
    if (
    /*timestamp*/
    ctx[1] != undefined) return create_if_block_1;
    return create_else_block_1;
  }

  var current_block_type = select_block_type(ctx, [-1, -1]);
  var if_block0 = current_block_type(ctx);
  var if_block1 =
  /*chatActive*/
  ctx[0] && create_if_block(ctx);
  return {
    c: function c() {
      main = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("main");
      if_block0.c();
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      use = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("use");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      b = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("b");
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(
      /*peopleCount*/
      ctx[13]);
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (if_block1) if_block1.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.xlink_attr)(use, "xlink:href", "images/solid.svg#users");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "id", "people");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "class", "svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(b, "color", "white");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(b, "font-family", "sans");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "info svelte-16h7a6b");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(main, "class", "svelte-16h7a6b");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, main, anchor);
      if_block0.m(main, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(main, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(main, div);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, svg);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, use);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, b);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(b, t2);
      /*div_binding*/

      ctx[34](div);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(main, t3);
      if (if_block1) if_block1.m(main, null);
      current = true;

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(svg, "click",
        /*toggleChat*/
        ctx[20]);
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block0) {
        if_block0.p(ctx, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx);

        if (if_block0) {
          if_block0.c();
          if_block0.m(main, t0);
        }
      }

      if (!current || dirty[0] &
      /*peopleCount*/
      8192) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2,
      /*peopleCount*/
      ctx[13]);

      if (
      /*chatActive*/
      ctx[0]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty[0] &
          /*chatActive*/
          1) {
            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
          if_block1.m(main, null);
        }
      } else if (if_block1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(main);
      if_block0.d();
      /*div_binding*/

      ctx[34](null);
      if (if_block1) if_block1.d();
      mounted = false;
      dispose();
    }
  };
}

function format(seconds) {
  if (isNaN(seconds) || seconds == undefined) return '...';
  var minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  if (seconds < 10) seconds = '0' + seconds;
  return "".concat(minutes, ":").concat(seconds);
}

function shrinkExpand(e) {
  if (!fscreen.fullscreenElement) {
    var video = document.querySelector('main');
    fscreen.requestFullscreen(video);
  } else {
    fscreen.exitFullscreen();
  }
}

function instance($$self, $$props, $$invalidate) {
  var chatMessages;
  var name = $$props.name; // create a look event that bubbles up and cannot be canceled

  console.log('app is uffp');
  var chatActive = false;
  var timestamp = undefined;
  var time = 0;
  var heartBeat = undefined;
  var duration;
  var url = undefined;
  var mediaType = undefined;
  var paused = true;
  var muted = false;
  var volume = localStorage.getItem('volume') ? localStorage.getItem('volume') : 0.5;
  var controls;
  var latency;
  var media;
  var infoPanel;
  var menuVisible;
  var infoVisible;
  var peopleCount = 0;
  var socket = io(); // Server emits event when media ends

  socket.on('newMedia', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('newMedia detected!');
              _context.t0 = $$invalidate;
              _context.next = 4;
              return data.url;

            case 4:
              _context.t1 = url = _context.sent;
              (0, _context.t0)(4, _context.t1);
              _context.t2 = $$invalidate;
              _context.next = 9;
              return data.mediaType;

            case 9:
              _context.t3 = mediaType = _context.sent;
              (0, _context.t2)(5, _context.t3);
              _context.next = 13;
              return media.load();

            case 13:
              if (paused) {
                _context.next = 18;
                break;
              }

              _context.next = 16;
              return media.play();

            case 16:
              $$invalidate(6, paused = true);
              pausePlay();

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()); // Server sends timestamp every three seconds

  socket.on('timestamp', function (data) {
    //console.log('timestamp');
    //console.log(data);
    $$invalidate(5, mediaType = data.mediaType);
    $$invalidate(1, timestamp = data.timestamp);
    heartBeat = new Date().getTime();
    showLatency(timestamp);
    $$invalidate(13, peopleCount = data.clientCount);
  }); // Server emits event when client connects

  socket.on('updateClient', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('updateClient');
              _context2.t0 = $$invalidate;
              _context2.next = 4;
              return data.mediaType;

            case 4:
              _context2.t1 = mediaType = _context2.sent;
              (0, _context2.t0)(5, _context2.t1);
              _context2.t2 = $$invalidate;
              _context2.next = 9;
              return data.timestamp;

            case 9:
              _context2.t3 = timestamp = _context2.sent;
              (0, _context2.t2)(1, _context2.t3);
              _context2.t4 = $$invalidate;
              _context2.next = 14;
              return data.duration;

            case 14:
              _context2.t5 = duration = _context2.sent;
              (0, _context2.t4)(3, _context2.t5);
              _context2.t6 = $$invalidate;
              _context2.next = 19;
              return data.url;

            case 19:
              _context2.t7 = url = _context2.sent;
              (0, _context2.t6)(4, _context2.t7);
              _context2.t8 = $$invalidate;
              _context2.next = 24;
              return Math.floor(timestamp);

            case 24:
              _context2.t9 = media.currentTime = _context2.sent;
              _context2.t10 = media;
              (0, _context2.t8)(11, _context2.t9, _context2.t10);

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  socket.on('updateChat', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('updateChat', data);
              $$invalidate(14, chatMessages = data.messages);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  socket.on('chat message', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(msg) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log('fromserver:', msg);
              $$invalidate(14, chatMessages = [].concat(_toConsumableArray(chatMessages), [msg]));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());

  function showMenu(e) {
    if (e.target !== undefined) {
      clearTimeout(menuVisible);
      clearTimeout(infoVisible);
      e.target.style.cursor = '';
      $$invalidate(9, controls.style.opacity = '1', controls);
      $$invalidate(12, infoPanel.style.opacity = '1', infoPanel);
      menuVisible = setTimeout(function () {
        $$invalidate(9, controls.style.opacity = '0', controls);
        e.target.style.cursor = 'none';
      }, 4000);
      infoVisible = setTimeout(function () {
        $$invalidate(12, infoPanel.style.opacity = '0', infoPanel);
        e.target.style.cursor = 'none';
      }, 4000);
    }
  }

  function start() {
    document.querySelector('.start-button').style.display = 'none';
    document.querySelector('.start-button').style.visibility = 'hidden';
    resync();
    $$invalidate(6, paused = false);
  }

  function storeVolume() {
    localStorage.setItem('volume', volume);
  }

  function pausePlay() {
    if (!paused) {
      $$invalidate(6, paused = true);
      console.log('were paused now');
    } else {
      console.log('were playing now');
      $$invalidate(6, paused = false);
    }
  }

  function showLatency(timestamp) {
    console.log(format(timestamp));
    $$invalidate(10, latency = format(timestamp - media.currentTime));
  }

  function resync(e) {
    // get the difference of the last server heart beat in seconds
    var lastHeartBeatOffset = (new Date().getTime() - heartBeat) / 1000;
    $$invalidate(11, media.currentTime = timestamp + lastHeartBeatOffset, media);
    showLatency();
  }

  function toggleChat(e) {
    $$invalidate(0, chatActive = !chatActive);
    console.log(document.body.clientWidth);
    var clientWidth = document.body.clientWidth;

    if (!chatActive) {
      $$invalidate(9, controls.style.width = '100%', controls);
      $$invalidate(12, infoPanel.style.width = '100%', infoPanel);
      $$invalidate(11, media.parentElement.style.width = '100%', media);
    } else if (clientWidth > 1340) {
      $$invalidate(9, controls.style.width = '80%', controls);
      $$invalidate(12, infoPanel.style.width = '80%', infoPanel);
      $$invalidate(11, media.parentElement.style.width = '80%', media);
      console.log(media.parentElement);
    } else if (clientWidth < 1340 && clientWidth > 894) {
      $$invalidate(9, controls.style.width = '70%', controls);
      $$invalidate(12, infoPanel.style.width = '70%', infoPanel);
      $$invalidate(11, media.parentElement.style.width = '70%', media);
      console.log(media.parentElement);
    } else if (clientWidth < 894) {
      $$invalidate(9, controls.style.width = '100%', controls);
      $$invalidate(12, infoPanel.style.width = '100%', infoPanel);
      $$invalidate(11, media.parentElement.style.width = '100%', media);
    }
  }

  function toggleMute(e) {
    $$invalidate(7, muted = !muted);
  }

  function handleChatMessage(e) {
    console.log('handling chat message', e);
    socket.emit('chat message', e.detail);
  }

  (0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(function (e) {
    console.log('the component has mounted');
  });
  (0,svelte__WEBPACK_IMPORTED_MODULE_1__.afterUpdate)(function () {
    console.log('the component just updated');

    if (timestamp - time > 5) {
      $$invalidate(2, time = timestamp);
    }
  });

  function input_change_input_handler() {
    volume = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.to_number)(this.value);
    $$invalidate(8, volume);
  }

  function div8_binding($$value) {
    svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      controls = $$value;
      $$invalidate(9, controls);
    });
  }

  function video_binding($$value) {
    svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      media = $$value;
      $$invalidate(11, media);
    });
  }

  function video_volumechange_handler() {
    volume = this.volume;
    muted = this.muted;
    $$invalidate(8, volume);
    $$invalidate(7, muted);
  }

  function video_durationchange_handler() {
    duration = this.duration;
    $$invalidate(3, duration);
  }

  function video_play_pause_handler() {
    paused = this.paused;
    $$invalidate(6, paused);
  }

  function audio_binding($$value) {
    svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      media = $$value;
      $$invalidate(11, media);
    });
  }

  function audio_volumechange_handler() {
    volume = this.volume;
    muted = this.muted;
    $$invalidate(8, volume);
    $$invalidate(7, muted);
  }

  function audio_durationchange_handler() {
    duration = this.duration;
    $$invalidate(3, duration);
  }

  function audio_play_pause_handler() {
    paused = this.paused;
    $$invalidate(6, paused);
  }

  function div_binding($$value) {
    svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      infoPanel = $$value;
      $$invalidate(12, infoPanel);
    });
  }

  $$self.$$set = function ($$props) {
    if ('name' in $$props) $$invalidate(23, name = $$props.name);
  };

  $: $$invalidate(14, chatMessages = []);

  return [chatActive, timestamp, time, duration, url, mediaType, paused, muted, volume, controls, latency, media, infoPanel, peopleCount, chatMessages, showMenu, start, storeVolume, pausePlay, resync, toggleChat, toggleMute, handleChatMessage, name, input_change_input_handler, div8_binding, video_binding, video_volumechange_handler, video_durationchange_handler, video_play_pause_handler, audio_binding, audio_volumechange_handler, audio_durationchange_handler, audio_play_pause_handler, div_binding];
}

var App = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(App, _SvelteComponent);

  var _super = _createSuper(App);

  function App(options) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      name: 23
    }, add_css, [-1, -1]);
    return _this;
  }

  return _createClass(App);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/chat.svelte":
/*!************************************!*\
  !*** ./src/components/chat.svelte ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* src/components/chat.svelte generated by Svelte v3.49.0 */




function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-1pd3zmx", "@font-face{font-family:'Montserrat';src:url(fonts/static/Montserrat-SemiBold.ttf)}#close.svelte-1pd3zmx{fill:#ff595e;width:2rem;height:2rem;margin-right:.2rem}#back-to-top.svelte-1pd3zmx{fill:black;width:1rem;height:1rem}h2.svelte-1pd3zmx,p.svelte-1pd3zmx{color:whitesmoke;margin-left:.7rem;margin-right:.7rem;font-family:'Montserrat'}b.svelte-1pd3zmx{font-weight:700}input.svelte-1pd3zmx,button.svelte-1pd3zmx,textarea.svelte-1pd3zmx{font-family:'Montserrat'}button.svelte-1pd3zmx{border-radius:5px;padding:.25rem}.input.svelte-1pd3zmx{margin-bottom:1rem}.input-row.svelte-1pd3zmx{display:flex;justify-content:space-between;align-items:center}.chat-messages.svelte-1pd3zmx{display:inline;word-break:break-all;height:700px;overflow-y:scroll}.chat-window.svelte-1pd3zmx{display:flex;flex-direction:column;justify-content:space-between;align-items:center;background-color:rgba(25, 25, 25, 0.5);overflow-y:scroll;width:20%;height:100%;z-index:4;position:fixed;right:0;top:0}@media screen and ( max-width: 1340px){.chat-window.svelte-1pd3zmx{width:30%}}@media screen and (max-width:894px){.chat-window.svelte-1pd3zmx{width:100%;height:30%;top:unset;bottom:0}}");
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
} // (60:3) {#if chats}


function create_if_block(ctx) {
  var each_1_anchor;
  var each_value =
  /*chats*/
  ctx[0];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function c() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
    },
    m: function m(target, anchor) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(target, anchor);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, each_1_anchor, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*chats*/
      1) {
        each_value =
        /*chats*/
        ctx[0];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(each_1_anchor);
    }
  };
} // (61:3) {#each chats as chat}


function create_each_block(ctx) {
  var p;
  var b;
  var t0_value =
  /*chat*/
  ctx[13].username + "";
  var t0;
  var t1;
  var t2_value =
  /*chat*/
  ctx[13].comment + "";
  var t2;
  return {
    c: function c() {
      p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      b = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("b");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(": ");
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(b, "color",
      /*chat*/
      ctx[13].color);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(b, "class", "svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "svelte-1pd3zmx");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, p, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, b);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(b, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(b, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t2);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*chats*/
      1 && t0_value !== (t0_value =
      /*chat*/
      ctx[13].username + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);

      if (dirty &
      /*chats*/
      1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(b, "color",
        /*chat*/
        ctx[13].color);
      }

      if (dirty &
      /*chats*/
      1 && t2_value !== (t2_value =
      /*chat*/
      ctx[13].comment + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2, t2_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(p);
    }
  };
}

function create_fragment(ctx) {
  var div7;
  var div2;
  var div0;
  var h2;
  var t1;
  var svg0;
  var use0;
  var t2;
  var hr;
  var t3;
  var div1;
  var t4;
  var div6;
  var div3;
  var button0;
  var t6;
  var div4;
  var input;
  var t7;
  var button1;
  var t9;
  var div5;
  var textarea;
  var t10;
  var button2;
  var mounted;
  var dispose;
  var if_block =
  /*chats*/
  ctx[0] && create_if_block(ctx);
  return {
    c: function c() {
      div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      h2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h2");
      h2.textContent = "chat";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      svg0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      use0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("use");
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      hr = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("hr");
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      if (if_block) if_block.c();
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      button0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button0.innerHTML = "back to top <svg id=\"back-to-top\" class=\"svelte-1pd3zmx\"><use xlink:href=\"images/solid.svg#arrow-up\"></use></svg>";
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      button1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button1.textContent = "save";
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      textarea = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("textarea");
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      button2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button2.textContent = "submit";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h2, "class", "svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.xlink_attr)(use0, "xlink:href", "images/regular.svg#window-close");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg0, "id", "close");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg0, "class", "svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "input-row svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "chat-messages svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div2, "width", "100%");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(button0, "display", "flex");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(button0, "align-items", "center");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "class", "svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div3, "display", "flex");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div3, "justify-content", "flex-end");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(input, "margin-right", "5px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "name", "username");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "placeholder", "username");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "class", "svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "class", "svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "input-row svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(textarea, "margin-right", "5px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(textarea, "class", "svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button2, "class", "svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "input-row svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div5, "align-items", "flex-end");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "input svelte-1pd3zmx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "chat-window svelte-1pd3zmx");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div7, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, h2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, svg0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg0, use0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, hr);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
      if (if_block) if_block.m(div1, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, button0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, input);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input,
      /*username*/
      ctx[1]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, button1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, textarea);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(textarea,
      /*comment*/
      ctx[2]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, button2);
      /*div7_binding*/

      ctx[11](div7);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(svg0, "click",
        /*close*/
        ctx[7]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button0, "click",
        /*scrollTop*/
        ctx[8]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "input",
        /*input_input_handler*/
        ctx[9]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button1, "click",
        /*handleUsername*/
        ctx[6]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(textarea, "input",
        /*textarea_input_handler*/
        ctx[10]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button2, "click",
        /*submitMessage*/
        ctx[4]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div7, "keypress",
        /*handleKeyDown*/
        ctx[5])];
        mounted = true;
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*chats*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(div1, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*username*/
      2 && input.value !==
      /*username*/
      ctx[1]) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input,
        /*username*/
        ctx[1]);
      }

      if (dirty &
      /*comment*/
      4) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(textarea,
        /*comment*/
        ctx[2]);
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div7);
      if (if_block) if_block.d();
      /*div7_binding*/

      ctx[11](null);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$chats = $$props.chats,
      chats = _$$props$chats === void 0 ? [] : _$$props$chats;
  var dispatch = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.createEventDispatcher)();
  var username = localStorage.username ? localStorage.username : '';
  var comment;
  var chatWindow;

  function submitMessage() {
    console.log(chats);
    console.log(comment);

    if (!username) {
      $$invalidate(1, username = 'anon');
    }

    if (comment) {
      dispatch('chat', {
        username: username,
        comment: comment
      });
      $$invalidate(2, comment = '');
    }
  }

  function handleKeyDown(e) {
    console.log(chatWindow.scrollHeight);
    chatWindow.scrollTo(0, document.body.scrollHeight + 100);

    if (e.key == 'Enter' && comment.trim() != '') {
      submitMessage();
    }
  }

  function handleUsername() {
    console.log(username);
    localStorage.setItem('username', username);
  }

  function close() {
    dispatch('chat-close');
  }

  function scrollTop() {
    console.log('scroll to top.');
    chatWindow.scrollTo(0, -1);
  }

  (0,svelte__WEBPACK_IMPORTED_MODULE_1__.afterUpdate)(function () {
    console.log('chat updated');
  }); //chatWindow.scrollTo(0,document.body.scrollHeight + 100);

  function input_input_handler() {
    username = this.value;
    $$invalidate(1, username);
  }

  function textarea_input_handler() {
    comment = this.value;
    $$invalidate(2, comment);
  }

  function div7_binding($$value) {
    svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      chatWindow = $$value;
      $$invalidate(3, chatWindow);
    });
  }

  $$self.$$set = function ($$props) {
    if ('chats' in $$props) $$invalidate(0, chats = $$props.chats);
  };

  return [chats, username, comment, chatWindow, submitMessage, handleKeyDown, handleUsername, close, scrollTop, input_input_handler, textarea_input_handler, div7_binding];
}

var Chat = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Chat, _SvelteComponent);

  var _super = _createSuper(Chat);

  function Chat(options) {
    var _this;

    _classCallCheck(this, Chat);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      chats: 0
    }, add_css);
    return _this;
  }

  return _createClass(Chat);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvelteComponent": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.SvelteComponentDev),
/* harmony export */   "SvelteComponentTyped": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.SvelteComponentTyped),
/* harmony export */   "afterUpdate": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.afterUpdate),
/* harmony export */   "beforeUpdate": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.beforeUpdate),
/* harmony export */   "createEventDispatcher": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.createEventDispatcher),
/* harmony export */   "getAllContexts": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getAllContexts),
/* harmony export */   "getContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getContext),
/* harmony export */   "hasContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.hasContext),
/* harmony export */   "onDestroy": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.onDestroy),
/* harmony export */   "onMount": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.onMount),
/* harmony export */   "setContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.setContext),
/* harmony export */   "tick": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.tick)
/* harmony export */ });
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");


/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlTag": () => (/* binding */ HtmlTag),
/* harmony export */   "HtmlTagHydration": () => (/* binding */ HtmlTagHydration),
/* harmony export */   "SvelteComponent": () => (/* binding */ SvelteComponent),
/* harmony export */   "SvelteComponentDev": () => (/* binding */ SvelteComponentDev),
/* harmony export */   "SvelteComponentTyped": () => (/* binding */ SvelteComponentTyped),
/* harmony export */   "SvelteElement": () => (/* binding */ SvelteElement),
/* harmony export */   "action_destroyer": () => (/* binding */ action_destroyer),
/* harmony export */   "add_attribute": () => (/* binding */ add_attribute),
/* harmony export */   "add_classes": () => (/* binding */ add_classes),
/* harmony export */   "add_flush_callback": () => (/* binding */ add_flush_callback),
/* harmony export */   "add_location": () => (/* binding */ add_location),
/* harmony export */   "add_render_callback": () => (/* binding */ add_render_callback),
/* harmony export */   "add_resize_listener": () => (/* binding */ add_resize_listener),
/* harmony export */   "add_styles": () => (/* binding */ add_styles),
/* harmony export */   "add_transform": () => (/* binding */ add_transform),
/* harmony export */   "afterUpdate": () => (/* binding */ afterUpdate),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "append_dev": () => (/* binding */ append_dev),
/* harmony export */   "append_empty_stylesheet": () => (/* binding */ append_empty_stylesheet),
/* harmony export */   "append_hydration": () => (/* binding */ append_hydration),
/* harmony export */   "append_hydration_dev": () => (/* binding */ append_hydration_dev),
/* harmony export */   "append_styles": () => (/* binding */ append_styles),
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "attr_dev": () => (/* binding */ attr_dev),
/* harmony export */   "attribute_to_object": () => (/* binding */ attribute_to_object),
/* harmony export */   "beforeUpdate": () => (/* binding */ beforeUpdate),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "binding_callbacks": () => (/* binding */ binding_callbacks),
/* harmony export */   "blank_object": () => (/* binding */ blank_object),
/* harmony export */   "bubble": () => (/* binding */ bubble),
/* harmony export */   "check_outros": () => (/* binding */ check_outros),
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "claim_component": () => (/* binding */ claim_component),
/* harmony export */   "claim_element": () => (/* binding */ claim_element),
/* harmony export */   "claim_html_tag": () => (/* binding */ claim_html_tag),
/* harmony export */   "claim_space": () => (/* binding */ claim_space),
/* harmony export */   "claim_svg_element": () => (/* binding */ claim_svg_element),
/* harmony export */   "claim_text": () => (/* binding */ claim_text),
/* harmony export */   "clear_loops": () => (/* binding */ clear_loops),
/* harmony export */   "component_subscribe": () => (/* binding */ component_subscribe),
/* harmony export */   "compute_rest_props": () => (/* binding */ compute_rest_props),
/* harmony export */   "compute_slots": () => (/* binding */ compute_slots),
/* harmony export */   "createEventDispatcher": () => (/* binding */ createEventDispatcher),
/* harmony export */   "create_animation": () => (/* binding */ create_animation),
/* harmony export */   "create_bidirectional_transition": () => (/* binding */ create_bidirectional_transition),
/* harmony export */   "create_component": () => (/* binding */ create_component),
/* harmony export */   "create_in_transition": () => (/* binding */ create_in_transition),
/* harmony export */   "create_out_transition": () => (/* binding */ create_out_transition),
/* harmony export */   "create_slot": () => (/* binding */ create_slot),
/* harmony export */   "create_ssr_component": () => (/* binding */ create_ssr_component),
/* harmony export */   "current_component": () => (/* binding */ current_component),
/* harmony export */   "custom_event": () => (/* binding */ custom_event),
/* harmony export */   "dataset_dev": () => (/* binding */ dataset_dev),
/* harmony export */   "debug": () => (/* binding */ debug),
/* harmony export */   "destroy_block": () => (/* binding */ destroy_block),
/* harmony export */   "destroy_component": () => (/* binding */ destroy_component),
/* harmony export */   "destroy_each": () => (/* binding */ destroy_each),
/* harmony export */   "detach": () => (/* binding */ detach),
/* harmony export */   "detach_after_dev": () => (/* binding */ detach_after_dev),
/* harmony export */   "detach_before_dev": () => (/* binding */ detach_before_dev),
/* harmony export */   "detach_between_dev": () => (/* binding */ detach_between_dev),
/* harmony export */   "detach_dev": () => (/* binding */ detach_dev),
/* harmony export */   "dirty_components": () => (/* binding */ dirty_components),
/* harmony export */   "dispatch_dev": () => (/* binding */ dispatch_dev),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "element": () => (/* binding */ element),
/* harmony export */   "element_is": () => (/* binding */ element_is),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "end_hydrating": () => (/* binding */ end_hydrating),
/* harmony export */   "escape": () => (/* binding */ escape),
/* harmony export */   "escape_attribute_value": () => (/* binding */ escape_attribute_value),
/* harmony export */   "escape_object": () => (/* binding */ escape_object),
/* harmony export */   "exclude_internal_props": () => (/* binding */ exclude_internal_props),
/* harmony export */   "fix_and_destroy_block": () => (/* binding */ fix_and_destroy_block),
/* harmony export */   "fix_and_outro_and_destroy_block": () => (/* binding */ fix_and_outro_and_destroy_block),
/* harmony export */   "fix_position": () => (/* binding */ fix_position),
/* harmony export */   "flush": () => (/* binding */ flush),
/* harmony export */   "getAllContexts": () => (/* binding */ getAllContexts),
/* harmony export */   "getContext": () => (/* binding */ getContext),
/* harmony export */   "get_all_dirty_from_scope": () => (/* binding */ get_all_dirty_from_scope),
/* harmony export */   "get_binding_group_value": () => (/* binding */ get_binding_group_value),
/* harmony export */   "get_current_component": () => (/* binding */ get_current_component),
/* harmony export */   "get_custom_elements_slots": () => (/* binding */ get_custom_elements_slots),
/* harmony export */   "get_root_for_style": () => (/* binding */ get_root_for_style),
/* harmony export */   "get_slot_changes": () => (/* binding */ get_slot_changes),
/* harmony export */   "get_spread_object": () => (/* binding */ get_spread_object),
/* harmony export */   "get_spread_update": () => (/* binding */ get_spread_update),
/* harmony export */   "get_store_value": () => (/* binding */ get_store_value),
/* harmony export */   "globals": () => (/* binding */ globals),
/* harmony export */   "group_outros": () => (/* binding */ group_outros),
/* harmony export */   "handle_promise": () => (/* binding */ handle_promise),
/* harmony export */   "hasContext": () => (/* binding */ hasContext),
/* harmony export */   "has_prop": () => (/* binding */ has_prop),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "insert_dev": () => (/* binding */ insert_dev),
/* harmony export */   "insert_hydration": () => (/* binding */ insert_hydration),
/* harmony export */   "insert_hydration_dev": () => (/* binding */ insert_hydration_dev),
/* harmony export */   "intros": () => (/* binding */ intros),
/* harmony export */   "invalid_attribute_name_character": () => (/* binding */ invalid_attribute_name_character),
/* harmony export */   "is_client": () => (/* binding */ is_client),
/* harmony export */   "is_crossorigin": () => (/* binding */ is_crossorigin),
/* harmony export */   "is_empty": () => (/* binding */ is_empty),
/* harmony export */   "is_function": () => (/* binding */ is_function),
/* harmony export */   "is_promise": () => (/* binding */ is_promise),
/* harmony export */   "is_void": () => (/* binding */ is_void),
/* harmony export */   "listen": () => (/* binding */ listen),
/* harmony export */   "listen_dev": () => (/* binding */ listen_dev),
/* harmony export */   "loop": () => (/* binding */ loop),
/* harmony export */   "loop_guard": () => (/* binding */ loop_guard),
/* harmony export */   "merge_ssr_styles": () => (/* binding */ merge_ssr_styles),
/* harmony export */   "missing_component": () => (/* binding */ missing_component),
/* harmony export */   "mount_component": () => (/* binding */ mount_component),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "not_equal": () => (/* binding */ not_equal),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "null_to_empty": () => (/* binding */ null_to_empty),
/* harmony export */   "object_without_properties": () => (/* binding */ object_without_properties),
/* harmony export */   "onDestroy": () => (/* binding */ onDestroy),
/* harmony export */   "onMount": () => (/* binding */ onMount),
/* harmony export */   "once": () => (/* binding */ once),
/* harmony export */   "outro_and_destroy_block": () => (/* binding */ outro_and_destroy_block),
/* harmony export */   "prevent_default": () => (/* binding */ prevent_default),
/* harmony export */   "prop_dev": () => (/* binding */ prop_dev),
/* harmony export */   "query_selector_all": () => (/* binding */ query_selector_all),
/* harmony export */   "raf": () => (/* binding */ raf),
/* harmony export */   "run": () => (/* binding */ run),
/* harmony export */   "run_all": () => (/* binding */ run_all),
/* harmony export */   "safe_not_equal": () => (/* binding */ safe_not_equal),
/* harmony export */   "schedule_update": () => (/* binding */ schedule_update),
/* harmony export */   "select_multiple_value": () => (/* binding */ select_multiple_value),
/* harmony export */   "select_option": () => (/* binding */ select_option),
/* harmony export */   "select_options": () => (/* binding */ select_options),
/* harmony export */   "select_value": () => (/* binding */ select_value),
/* harmony export */   "self": () => (/* binding */ self),
/* harmony export */   "setContext": () => (/* binding */ setContext),
/* harmony export */   "set_attributes": () => (/* binding */ set_attributes),
/* harmony export */   "set_current_component": () => (/* binding */ set_current_component),
/* harmony export */   "set_custom_element_data": () => (/* binding */ set_custom_element_data),
/* harmony export */   "set_data": () => (/* binding */ set_data),
/* harmony export */   "set_data_dev": () => (/* binding */ set_data_dev),
/* harmony export */   "set_input_type": () => (/* binding */ set_input_type),
/* harmony export */   "set_input_value": () => (/* binding */ set_input_value),
/* harmony export */   "set_now": () => (/* binding */ set_now),
/* harmony export */   "set_raf": () => (/* binding */ set_raf),
/* harmony export */   "set_store_value": () => (/* binding */ set_store_value),
/* harmony export */   "set_style": () => (/* binding */ set_style),
/* harmony export */   "set_svg_attributes": () => (/* binding */ set_svg_attributes),
/* harmony export */   "space": () => (/* binding */ space),
/* harmony export */   "spread": () => (/* binding */ spread),
/* harmony export */   "src_url_equal": () => (/* binding */ src_url_equal),
/* harmony export */   "start_hydrating": () => (/* binding */ start_hydrating),
/* harmony export */   "stop_propagation": () => (/* binding */ stop_propagation),
/* harmony export */   "subscribe": () => (/* binding */ subscribe),
/* harmony export */   "svg_element": () => (/* binding */ svg_element),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "tick": () => (/* binding */ tick),
/* harmony export */   "time_ranges_to_array": () => (/* binding */ time_ranges_to_array),
/* harmony export */   "to_number": () => (/* binding */ to_number),
/* harmony export */   "toggle_class": () => (/* binding */ toggle_class),
/* harmony export */   "transition_in": () => (/* binding */ transition_in),
/* harmony export */   "transition_out": () => (/* binding */ transition_out),
/* harmony export */   "trusted": () => (/* binding */ trusted),
/* harmony export */   "update_await_block_branch": () => (/* binding */ update_await_block_branch),
/* harmony export */   "update_keyed_each": () => (/* binding */ update_keyed_each),
/* harmony export */   "update_slot": () => (/* binding */ update_slot),
/* harmony export */   "update_slot_base": () => (/* binding */ update_slot_base),
/* harmony export */   "validate_component": () => (/* binding */ validate_component),
/* harmony export */   "validate_dynamic_element": () => (/* binding */ validate_dynamic_element),
/* harmony export */   "validate_each_argument": () => (/* binding */ validate_each_argument),
/* harmony export */   "validate_each_keys": () => (/* binding */ validate_each_keys),
/* harmony export */   "validate_slots": () => (/* binding */ validate_slots),
/* harmony export */   "validate_store": () => (/* binding */ validate_store),
/* harmony export */   "validate_void_dynamic_element": () => (/* binding */ validate_void_dynamic_element),
/* harmony export */   "xlink_attr": () => (/* binding */ xlink_attr)
/* harmony export */ });
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function noop() {}

var identity = function identity(x) {
  return x;
};

function assign(tar, src) {
  // @ts-ignore
  for (var k in src) {
    tar[k] = src[k];
  }

  return tar;
}

function is_promise(value) {
  return value && _typeof(value) === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, _char) {
  element.__svelte_meta = {
    loc: {
      file: file,
      line: line,
      column: column,
      "char": _char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
}

var src_url_equal_anchor;

function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement('a');
  }

  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error("'".concat(name, "' is not a store with a 'subscribe' method"));
  }
}

function subscribe(store) {
  if (store == null) {
    return noop;
  }

  for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callbacks[_key - 1] = arguments[_key];
  }

  var unsub = store.subscribe.apply(store, callbacks);
  return unsub.unsubscribe ? function () {
    return unsub.unsubscribe();
  } : unsub;
}

function get_store_value(store) {
  var value;
  subscribe(store, function (_) {
    return value = _;
  })();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    var lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (_typeof(lets) === 'object') {
      var merged = [];
      var len = Math.max($$scope.dirty.length, lets.length);

      for (var i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    var slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}

function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  var slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
  update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}

function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    var dirty = [];
    var length = $$scope.ctx.length / 32;

    for (var i = 0; i < length; i++) {
      dirty[i] = -1;
    }

    return dirty;
  }

  return -1;
}

function exclude_internal_props(props) {
  var result = {};

  for (var k in props) {
    if (k[0] !== '$') result[k] = props[k];
  }

  return result;
}

function compute_rest_props(props, keys) {
  var rest = {};
  keys = new Set(keys);

  for (var k in props) {
    if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
  }

  return rest;
}

function compute_slots(slots) {
  var result = {};

  for (var key in slots) {
    result[key] = true;
  }

  return result;
}

function once(fn) {
  var ran = false;
  return function () {
    if (ran) return;
    ran = true;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    fn.call.apply(fn, [this].concat(args));
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}

var has_prop = function has_prop(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

var is_client = typeof window !== 'undefined';
var now = is_client ? function () {
  return window.performance.now();
} : function () {
  return Date.now();
};
var raf = is_client ? function (cb) {
  return requestAnimationFrame(cb);
} : noop; // used internally for testing

function set_now(fn) {
  now = fn;
}

function set_raf(fn) {
  raf = fn;
}

var tasks = new Set();

function run_tasks(now) {
  tasks.forEach(function (task) {
    if (!task.c(now)) {
      tasks["delete"](task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */


function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  var task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(function (fulfill) {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),
    abort: function abort() {
      tasks["delete"](task);
    }
  };
} // Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.


var is_hydrating = false;

function start_hydrating() {
  is_hydrating = true;
}

function end_hydrating() {
  is_hydrating = false;
}

function upper_bound(low, high, key, value) {
  // Return first index of value larger than input value in the range [low, high)
  while (low < high) {
    var mid = low + (high - low >> 1);

    if (key(mid) <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

function init_hydrate(target) {
  if (target.hydrate_init) return;
  target.hydrate_init = true; // We know that all children have claim_order values since the unclaimed have been detached if target is not <head>

  var children = target.childNodes; // If target is <head>, there may be children without claim_order

  if (target.nodeName === 'HEAD') {
    var myChildren = [];

    for (var i = 0; i < children.length; i++) {
      var node = children[i];

      if (node.claim_order !== undefined) {
        myChildren.push(node);
      }
    }

    children = myChildren;
  }
  /*
  * Reorder claimed children optimally.
  * We can reorder claimed children optimally by finding the longest subsequence of
  * nodes that are already claimed in order and only moving the rest. The longest
  * subsequence subsequence of nodes that are claimed in order can be found by
  * computing the longest increasing subsequence of .claim_order values.
  *
  * This algorithm is optimal in generating the least amount of reorder operations
  * possible.
  *
  * Proof:
  * We know that, given a set of reordering operations, the nodes that do not move
  * always form an increasing subsequence, since they do not move among each other
  * meaning that they must be already ordered among each other. Thus, the maximal
  * set of nodes that do not move form a longest increasing subsequence.
  */
  // Compute longest increasing subsequence
  // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j


  var m = new Int32Array(children.length + 1); // Predecessor indices + 1

  var p = new Int32Array(children.length);
  m[0] = -1;
  var longest = 0;

  for (var _i = 0; _i < children.length; _i++) {
    var current = children[_i].claim_order; // Find the largest subsequence length such that it ends in a value less than our current value
    // upper_bound returns first greater value, so we subtract one
    // with fast path for when we are on the current longest subsequence

    var seqLen = (longest > 0 && children[m[longest]].claim_order <= current ? longest + 1 : upper_bound(1, longest, function (idx) {
      return children[m[idx]].claim_order;
    }, current)) - 1;
    p[_i] = m[seqLen] + 1;
    var newLen = seqLen + 1; // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.

    m[newLen] = _i;
    longest = Math.max(newLen, longest);
  } // The longest increasing subsequence of nodes (initially reversed)


  var lis = []; // The rest of the nodes, nodes that will be moved

  var toMove = [];
  var last = children.length - 1;

  for (var cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
    lis.push(children[cur - 1]);

    for (; last >= cur; last--) {
      toMove.push(children[last]);
    }

    last--;
  }

  for (; last >= 0; last--) {
    toMove.push(children[last]);
  }

  lis.reverse(); // We sort the nodes being moved to guarantee that their insertion order matches the claim order

  toMove.sort(function (a, b) {
    return a.claim_order - b.claim_order;
  }); // Finally, we move the nodes

  for (var _i2 = 0, j = 0; _i2 < toMove.length; _i2++) {
    while (j < lis.length && toMove[_i2].claim_order >= lis[j].claim_order) {
      j++;
    }

    var anchor = j < lis.length ? lis[j] : null;
    target.insertBefore(toMove[_i2], anchor);
  }
}

function append(target, node) {
  target.appendChild(node);
}

function append_styles(target, style_sheet_id, styles) {
  var append_styles_to = get_root_for_style(target);

  if (!append_styles_to.getElementById(style_sheet_id)) {
    var style = element('style');
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}

function get_root_for_style(node) {
  if (!node) return document;
  var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;

  if (root && root.host) {
    return root;
  }

  return node.ownerDocument;
}

function append_empty_stylesheet(node) {
  var style_element = element('style');
  append_stylesheet(get_root_for_style(node), style_element);
  return style_element.sheet;
}

function append_stylesheet(node, style) {
  append(node.head || node, style);
}

function append_hydration(target, node) {
  if (is_hydrating) {
    init_hydrate(target);

    if (target.actual_end_child === undefined || target.actual_end_child !== null && target.actual_end_child.parentElement !== target) {
      target.actual_end_child = target.firstChild;
    } // Skip nodes of undefined ordering


    while (target.actual_end_child !== null && target.actual_end_child.claim_order === undefined) {
      target.actual_end_child = target.actual_end_child.nextSibling;
    }

    if (node !== target.actual_end_child) {
      // We only insert if the ordering of this node should be modified or the parent node is not target
      if (node.claim_order !== undefined || node.parentNode !== target) {
        target.insertBefore(node, target.actual_end_child);
      }
    } else {
      target.actual_end_child = node.nextSibling;
    }
  } else if (node.parentNode !== target || node.nextSibling !== null) {
    target.appendChild(node);
  }
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function insert_hydration(target, node, anchor) {
  if (is_hydrating && !anchor) {
    append_hydration(target, node);
  } else if (node.parentNode !== target || node.nextSibling != anchor) {
    target.insertBefore(node, anchor || null);
  }
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (var i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is: is
  });
}

function object_without_properties(obj, exclude) {
  var target = {};

  for (var k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return function () {
    return node.removeEventListener(event, handler, options);
  };
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function trusted(fn) {
  return function (event) {
    // @ts-ignore
    if (event.isTrusted) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  var descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (var key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (var key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group, __value, checked) {
  var value = new Set();

  for (var i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.add(group[i].__value);
  }

  if (!checked) {
    value["delete"](__value);
  }

  return Array.from(value);
}

function to_number(value) {
  return value === '' ? null : +value;
}

function time_ranges_to_array(ranges) {
  var array = [];

  for (var i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function init_claim_info(nodes) {
  if (nodes.claim_info === undefined) {
    nodes.claim_info = {
      last_index: 0,
      total_claimed: 0
    };
  }
}

function claim_node(nodes, predicate, processNode, createNode) {
  var dontUpdateLastIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  // Try to find nodes in an order such that we lengthen the longest increasing subsequence
  init_claim_info(nodes);

  var resultNode = function () {
    // We first try to find an element after the previous one
    for (var i = nodes.claim_info.last_index; i < nodes.length; i++) {
      var node = nodes[i];

      if (predicate(node)) {
        var replacement = processNode(node);

        if (replacement === undefined) {
          nodes.splice(i, 1);
        } else {
          nodes[i] = replacement;
        }

        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = i;
        }

        return node;
      }
    } // Otherwise, we try to find one before
    // We iterate in reverse so that we don't go too far back


    for (var _i3 = nodes.claim_info.last_index - 1; _i3 >= 0; _i3--) {
      var _node = nodes[_i3];

      if (predicate(_node)) {
        var _replacement = processNode(_node);

        if (_replacement === undefined) {
          nodes.splice(_i3, 1);
        } else {
          nodes[_i3] = _replacement;
        }

        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = _i3;
        } else if (_replacement === undefined) {
          // Since we spliced before the last_index, we decrease it
          nodes.claim_info.last_index--;
        }

        return _node;
      }
    } // If we can't find any matching node, we create a new one


    return createNode();
  }();

  resultNode.claim_order = nodes.claim_info.total_claimed;
  nodes.claim_info.total_claimed += 1;
  return resultNode;
}

function claim_element_base(nodes, name, attributes, create_element) {
  return claim_node(nodes, function (node) {
    return node.nodeName === name;
  }, function (node) {
    var remove = [];

    for (var j = 0; j < node.attributes.length; j++) {
      var attribute = node.attributes[j];

      if (!attributes[attribute.name]) {
        remove.push(attribute.name);
      }
    }

    remove.forEach(function (v) {
      return node.removeAttribute(v);
    });
    return undefined;
  }, function () {
    return create_element(name);
  });
}

function claim_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, element);
}

function claim_svg_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, svg_element);
}

function claim_text(nodes, data) {
  return claim_node(nodes, function (node) {
    return node.nodeType === 3;
  }, function (node) {
    var dataStr = '' + data;

    if (node.data.startsWith(dataStr)) {
      if (node.data.length !== dataStr.length) {
        return node.splitText(dataStr.length);
      }
    } else {
      node.data = dataStr;
    }
  }, function () {
    return text(data);
  }, true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
  );
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function find_comment(nodes, text, start) {
  for (var i = start; i < nodes.length; i += 1) {
    var node = nodes[i];

    if (node.nodeType === 8
    /* comment node */
    && node.textContent.trim() === text) {
      return i;
    }
  }

  return nodes.length;
}

function claim_html_tag(nodes, is_svg) {
  // find html opening tag
  var start_index = find_comment(nodes, 'HTML_TAG_START', 0);
  var end_index = find_comment(nodes, 'HTML_TAG_END', start_index);

  if (start_index === end_index) {
    return new HtmlTagHydration(undefined, is_svg);
  }

  init_claim_info(nodes);
  var html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
  detach(html_tag_nodes[0]);
  detach(html_tag_nodes[html_tag_nodes.length - 1]);
  var claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);

  var _iterator = _createForOfIteratorHelper(claimed_nodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var n = _step.value;
      n.claim_order = nodes.claim_info.total_claimed;
      nodes.claim_info.total_claimed += 1;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return new HtmlTagHydration(claimed_nodes, is_svg);
}

function set_data(text, data) {
  data = '' + data;
  if (text.wholeText !== data) text.data = data;
}

function set_input_value(input, value) {
  input.value = value == null ? '' : value;
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? 'important' : '');
  }
}

function select_option(select, value) {
  for (var i = 0; i < select.options.length; i += 1) {
    var option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }

  select.selectedIndex = -1; // no option should be selected
}

function select_options(select, value) {
  for (var i = 0; i < select.options.length; i += 1) {
    var option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  var selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), function (option) {
    return option.__value;
  });
} // unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead


var crossorigin;

function is_crossorigin() {
  if (crossorigin === undefined) {
    crossorigin = false;

    try {
      if (typeof window !== 'undefined' && window.parent) {
        void window.parent.document;
      }
    } catch (error) {
      crossorigin = true;
    }
  }

  return crossorigin;
}

function add_resize_listener(node, fn) {
  var computed_style = getComputedStyle(node);

  if (computed_style.position === 'static') {
    node.style.position = 'relative';
  }

  var iframe = element('iframe');
  iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' + 'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.tabIndex = -1;
  var crossorigin = is_crossorigin();
  var unsubscribe;

  if (crossorigin) {
    iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
    unsubscribe = listen(window, 'message', function (event) {
      if (event.source === iframe.contentWindow) fn();
    });
  } else {
    iframe.src = 'about:blank';

    iframe.onload = function () {
      unsubscribe = listen(iframe.contentWindow, 'resize', fn);
    };
  }

  append(node, iframe);
  return function () {
    if (crossorigin) {
      unsubscribe();
    } else if (unsubscribe && iframe.contentWindow) {
      unsubscribe();
    }

    detach(iframe);
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$bubbles = _ref.bubbles,
      bubbles = _ref$bubbles === void 0 ? false : _ref$bubbles,
      _ref$cancelable = _ref.cancelable,
      cancelable = _ref$cancelable === void 0 ? false : _ref$cancelable;

  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}

function query_selector_all(selector) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  return Array.from(parent.querySelectorAll(selector));
}

var HtmlTag = /*#__PURE__*/function () {
  function HtmlTag() {
    var is_svg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, HtmlTag);

    this.is_svg = false;
    this.is_svg = is_svg;
    this.e = this.n = null;
  }

  _createClass(HtmlTag, [{
    key: "c",
    value: function c(html) {
      this.h(html);
    }
  }, {
    key: "m",
    value: function m(html, target) {
      var anchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (!this.e) {
        if (this.is_svg) this.e = svg_element(target.nodeName);else this.e = element(target.nodeName);
        this.t = target;
        this.c(html);
      }

      this.i(anchor);
    }
  }, {
    key: "h",
    value: function h(html) {
      this.e.innerHTML = html;
      this.n = Array.from(this.e.childNodes);
    }
  }, {
    key: "i",
    value: function i(anchor) {
      for (var i = 0; i < this.n.length; i += 1) {
        insert(this.t, this.n[i], anchor);
      }
    }
  }, {
    key: "p",
    value: function p(html) {
      this.d();
      this.h(html);
      this.i(this.a);
    }
  }, {
    key: "d",
    value: function d() {
      this.n.forEach(detach);
    }
  }]);

  return HtmlTag;
}();

var HtmlTagHydration = /*#__PURE__*/function (_HtmlTag) {
  _inherits(HtmlTagHydration, _HtmlTag);

  var _super = _createSuper(HtmlTagHydration);

  function HtmlTagHydration(claimed_nodes) {
    var _this;

    var is_svg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, HtmlTagHydration);

    _this = _super.call(this, is_svg);
    _this.e = _this.n = null;
    _this.l = claimed_nodes;
    return _this;
  }

  _createClass(HtmlTagHydration, [{
    key: "c",
    value: function c(html) {
      if (this.l) {
        this.n = this.l;
      } else {
        _get(_getPrototypeOf(HtmlTagHydration.prototype), "c", this).call(this, html);
      }
    }
  }, {
    key: "i",
    value: function i(anchor) {
      for (var i = 0; i < this.n.length; i += 1) {
        insert_hydration(this.t, this.n[i], anchor);
      }
    }
  }]);

  return HtmlTagHydration;
}(HtmlTag);

function attribute_to_object(attributes) {
  var result = {};

  var _iterator2 = _createForOfIteratorHelper(attributes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var attribute = _step2.value;
      result[attribute.name] = attribute.value;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return result;
}

function get_custom_elements_slots(element) {
  var result = {};
  element.childNodes.forEach(function (node) {
    result[node.slot || 'default'] = true;
  });
  return result;
} // we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624


var managed_styles = new Map();
var active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  var hash = 5381;
  var i = str.length;

  while (i--) {
    hash = (hash << 5) - hash ^ str.charCodeAt(i);
  }

  return hash >>> 0;
}

function create_style_information(doc, node) {
  var info = {
    stylesheet: append_empty_stylesheet(node),
    rules: {}
  };
  managed_styles.set(doc, info);
  return info;
}

function create_rule(node, a, b, duration, delay, ease, fn) {
  var uid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
  var step = 16.666 / duration;
  var keyframes = '{\n';

  for (var p = 0; p <= 1; p += step) {
    var t = a + (b - a) * ease(p);
    keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
  }

  var rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
  var name = "__svelte_".concat(hash(rule), "_").concat(uid);
  var doc = get_root_for_style(node);

  var _ref2 = managed_styles.get(doc) || create_style_information(doc, node),
      stylesheet = _ref2.stylesheet,
      rules = _ref2.rules;

  if (!rules[name]) {
    rules[name] = true;
    stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
  }

  var animation = node.style.animation || '';
  node.style.animation = "".concat(animation ? "".concat(animation, ", ") : '').concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
  active += 1;
  return name;
}

function delete_rule(node, name) {
  var previous = (node.style.animation || '').split(', ');
  var next = previous.filter(name ? function (anim) {
    return anim.indexOf(name) < 0;
  } // remove specific animation
  : function (anim) {
    return anim.indexOf('__svelte') === -1;
  } // remove all Svelte animations
  );
  var deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(function () {
    if (active) return;
    managed_styles.forEach(function (info) {
      var stylesheet = info.stylesheet;
      var i = stylesheet.cssRules.length;

      while (i--) {
        stylesheet.deleteRule(i);
      }

      info.rules = {};
    });
    managed_styles.clear();
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  var to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;

  var _fn = fn(node, {
    from: from,
    to: to
  }, params),
      _fn$delay = _fn.delay,
      delay = _fn$delay === void 0 ? 0 : _fn$delay,
      _fn$duration = _fn.duration,
      duration = _fn$duration === void 0 ? 300 : _fn$duration,
      _fn$easing = _fn.easing,
      easing = _fn$easing === void 0 ? identity : _fn$easing,
      _fn$start = _fn.start,
      start_time = _fn$start === void 0 ? now() + delay : _fn$start,
      _fn$end = _fn.end,
      end = _fn$end === void 0 ? start_time + duration : _fn$end,
      _fn$tick = _fn.tick,
      tick = _fn$tick === void 0 ? noop : _fn$tick,
      css = _fn.css;

  var running = true;
  var started = false;
  var name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(function (now) {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      var p = now - start_time;
      var t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  var style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    var width = style.width,
        height = style.height;
    var a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  var b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    var style = getComputedStyle(node);
    var transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = "".concat(transform, " translate(").concat(a.left - b.left, "px, ").concat(a.top - b.top, "px)");
  }
}

var current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error('Function called outside component initialization');
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  var component = get_current_component();
  return function (type, detail) {
    var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref3$cancelable = _ref3.cancelable,
        cancelable = _ref3$cancelable === void 0 ? false : _ref3$cancelable;

    var callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      var event = custom_event(type, detail, {
        cancelable: cancelable
      });
      callbacks.slice().forEach(function (fn) {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }

    return true;
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
  return context;
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
}

function getAllContexts() {
  return get_current_component().$$.context;
}

function hasContext(key) {
  return get_current_component().$$.context.has(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  var _this2 = this;

  var callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    // @ts-ignore
    callbacks.slice().forEach(function (fn) {
      return fn.call(_this2, event);
    });
  }
}

var dirty_components = [];
var intros = {
  enabled: false
};
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
} // flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.


var seen_callbacks = new Set();
var flushidx = 0; // Do *not* move this inside the flush() function

function flush() {
  var saved_component = current_component;

  do {
    // first, call beforeUpdate functions
    // and update components
    while (flushidx < dirty_components.length) {
      var component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;

    while (binding_callbacks.length) {
      binding_callbacks.pop()();
    } // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (var i = 0; i < render_callbacks.length; i += 1) {
      var callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    var dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

var promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(function () {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event("".concat(direction ? 'intro' : 'outro').concat(kind)));
}

var outroing = new Set();
var outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing["delete"](block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(function () {
      outroing["delete"](block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}

var null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  var config = fn(node, params);
  var running = false;
  var animation_name;
  var task;
  var uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    var _ref4 = config || null_transition,
        _ref4$delay = _ref4.delay,
        delay = _ref4$delay === void 0 ? 0 : _ref4$delay,
        _ref4$duration = _ref4.duration,
        duration = _ref4$duration === void 0 ? 300 : _ref4$duration,
        _ref4$easing = _ref4.easing,
        easing = _ref4$easing === void 0 ? identity : _ref4$easing,
        _ref4$tick = _ref4.tick,
        tick = _ref4$tick === void 0 ? noop : _ref4$tick,
        css = _ref4.css;

    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    var start_time = now() + delay;
    var end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(function () {
      return dispatch(node, true, 'start');
    });
    task = loop(function (now) {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          var t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  var started = false;
  return {
    start: function start() {
      if (started) return;
      started = true;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },
    invalidate: function invalidate() {
      started = false;
    },
    end: function end() {
      if (running) {
        cleanup();
        running = false;
      }
    }
  };
}

function create_out_transition(node, fn, params) {
  var config = fn(node, params);
  var running = true;
  var animation_name;
  var group = outros;
  group.r += 1;

  function go() {
    var _ref5 = config || null_transition,
        _ref5$delay = _ref5.delay,
        delay = _ref5$delay === void 0 ? 0 : _ref5$delay,
        _ref5$duration = _ref5.duration,
        duration = _ref5$duration === void 0 ? 300 : _ref5$duration,
        _ref5$easing = _ref5.easing,
        easing = _ref5$easing === void 0 ? identity : _ref5$easing,
        _ref5$tick = _ref5.tick,
        tick = _ref5$tick === void 0 ? noop : _ref5$tick,
        css = _ref5.css;

    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    var start_time = now() + delay;
    var end_time = start_time + duration;
    add_render_callback(function () {
      return dispatch(node, false, 'start');
    });
    loop(function (now) {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          var t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(function () {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end: function end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }
  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  var config = fn(node, params);
  var t = intro ? 0 : 1;
  var running_program = null;
  var pending_program = null;
  var animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    var d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d: d,
      duration: duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    var _ref6 = config || null_transition,
        _ref6$delay = _ref6.delay,
        delay = _ref6$delay === void 0 ? 0 : _ref6$delay,
        _ref6$duration = _ref6.duration,
        duration = _ref6$duration === void 0 ? 300 : _ref6$duration,
        _ref6$easing = _ref6.easing,
        easing = _ref6$easing === void 0 ? identity : _ref6$easing,
        _ref6$tick = _ref6.tick,
        tick = _ref6$tick === void 0 ? noop : _ref6$tick,
        css = _ref6.css;

    var program = {
      start: now() + delay,
      b: b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program || pending_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(function () {
        return dispatch(node, b, 'start');
      });
      loop(function (now) {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            var p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run: function run(b) {
      if (is_function(config)) {
        wait().then(function () {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },
    end: function end() {
      clear_animation();
      running_program = pending_program = null;
    }
  };
}

function handle_promise(promise, info) {
  var token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    var child_ctx = info.ctx;

    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }

    var block = type && (info.current = type)(child_ctx);
    var needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach(function (block, i) {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, function () {
              if (info.blocks[i] === block) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    var _current_component = get_current_component();

    promise.then(function (value) {
      set_current_component(_current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, function (error) {
      set_current_component(_current_component);
      update(info["catch"], 2, info.error, error);
      set_current_component(null);

      if (!info.hasCatch) {
        throw error;
      }
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = promise;
  }
}

function update_await_block_branch(info, ctx, dirty) {
  var child_ctx = ctx.slice();
  var resolved = info.resolved;

  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }

  if (info.current === info["catch"]) {
    child_ctx[info.error] = resolved;
  }

  info.block.p(child_ctx, dirty);
}

var globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

function destroy_block(block, lookup) {
  block.d(1);
  lookup["delete"](block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, function () {
    lookup["delete"](block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  var o = old_blocks.length;
  var n = list.length;
  var i = o;
  var old_indexes = {};

  while (i--) {
    old_indexes[old_blocks[i].key] = i;
  }

  var new_blocks = [];
  var new_lookup = new Map();
  var deltas = new Map();
  i = n;

  while (i--) {
    var child_ctx = get_context(ctx, list, i);
    var key = get_key(child_ctx);
    var block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  var will_move = new Set();
  var did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    var new_block = new_blocks[n - 1];
    var old_block = old_blocks[o - 1];
    var new_key = new_block.key;
    var old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    var _old_block = old_blocks[o];
    if (!new_lookup.has(_old_block.key)) destroy(_old_block, lookup);
  }

  while (n) {
    insert(new_blocks[n - 1]);
  }

  return new_blocks;
}

function validate_each_keys(ctx, list, get_context, get_key) {
  var keys = new Set();

  for (var i = 0; i < list.length; i++) {
    var key = get_key(get_context(ctx, list, i));

    if (keys.has(key)) {
      throw new Error('Cannot have duplicate keys in a keyed each');
    }

    keys.add(key);
  }
}

function get_spread_update(levels, updates) {
  var update = {};
  var to_null_out = {};
  var accounted_for = {
    $$scope: 1
  };
  var i = levels.length;

  while (i--) {
    var o = levels[i];
    var n = updates[i];

    if (n) {
      for (var key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (var _key3 in n) {
        if (!accounted_for[_key3]) {
          update[_key3] = n[_key3];
          accounted_for[_key3] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (var _key4 in o) {
        accounted_for[_key4] = 1;
      }
    }
  }

  for (var _key5 in to_null_out) {
    if (!(_key5 in update)) update[_key5] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return _typeof(spread_props) === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


var boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
var void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;

function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}

var invalid_attribute_name_character = /(?:[\t-\r "'\/=>\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFDD0-\uFDEF\uFEFF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF])/; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

function spread(args, attrs_to_add) {
  var attributes = Object.assign.apply(Object, [{}].concat(_toConsumableArray(args)));

  if (attrs_to_add) {
    var classes_to_add = attrs_to_add.classes;
    var styles_to_add = attrs_to_add.styles;

    if (classes_to_add) {
      if (attributes["class"] == null) {
        attributes["class"] = classes_to_add;
      } else {
        attributes["class"] += ' ' + classes_to_add;
      }
    }

    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
    }
  }

  var str = '';
  Object.keys(attributes).forEach(function (name) {
    if (invalid_attribute_name_character.test(name)) return;
    var value = attributes[name];
    if (value === true) str += ' ' + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += ' ' + name;
    } else if (value != null) {
      str += " ".concat(name, "=\"").concat(value, "\"");
    }
  });
  return str;
}

function merge_ssr_styles(style_attribute, style_directive) {
  var style_object = {};

  var _iterator3 = _createForOfIteratorHelper(style_attribute.split(';')),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var individual_style = _step3.value;
      var colon_index = individual_style.indexOf(':');

      var _name = individual_style.slice(0, colon_index).trim();

      var _value = individual_style.slice(colon_index + 1).trim();

      if (!_name) continue;
      style_object[_name] = _value;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  for (var name in style_directive) {
    var value = style_directive[name];

    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }

  return style_object;
}

var ATTR_REGEX = /[&"]/g;
var CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */

function escape(value) {
  var is_attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var str = String(value);
  var pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  var escaped = '';
  var last = 0;

  while (pattern.test(str)) {
    var i = pattern.lastIndex - 1;
    var ch = str[i];
    escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
    last = i + 1;
  }

  return escaped + str.substring(last);
}

function escape_attribute_value(value) {
  // keep booleans, null, and undefined for the sake of `spread`
  var should_escape = typeof value === 'string' || value && _typeof(value) === 'object';
  return should_escape ? escape(value, true) : value;
}

function escape_object(obj) {
  var result = {};

  for (var key in obj) {
    result[key] = escape_attribute_value(obj[key]);
  }

  return result;
}

function each(items, fn) {
  var str = '';

  for (var i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

var missing_component = {
  $$render: function $$render() {
    return '';
  }
};

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error("<".concat(name, "> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules"));
  }

  return component;
}

function debug(file, line, column, values) {
  console.log("{@debug} ".concat(file ? file + ' ' : '', "(").concat(line, ":").concat(column, ")")); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

var on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    var parent_component = current_component;
    var $$ = {
      on_destroy: on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$: $$
    });
    var html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: function render() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref7$$$slots = _ref7.$$slots,
          $$slots = _ref7$$$slots === void 0 ? {} : _ref7$$$slots,
          _ref7$context = _ref7.context,
          context = _ref7$context === void 0 ? new Map() : _ref7$context;

      on_destroy = [];
      var result = {
        title: '',
        head: '',
        css: new Set()
      };
      var html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html: html,
        css: {
          code: Array.from(result.css).map(function (css) {
            return css.code;
          }).join('\n'),
          map: null // TODO

        },
        head: result.title + result.head
      };
    },
    $$render: $$render
  };
}

function add_attribute(name, value, _boolean) {
  if (value == null || _boolean && !value) return '';
  var assignment = _boolean && value === true ? '' : "=\"".concat(escape(value, true), "\"");
  return " ".concat(name).concat(assignment);
}

function add_classes(classes) {
  return classes ? " class=\"".concat(classes, "\"") : '';
}

function style_object_to_string(style_object) {
  return Object.keys(style_object).filter(function (key) {
    return style_object[key];
  }).map(function (key) {
    return "".concat(key, ": ").concat(style_object[key], ";");
  }).join(' ');
}

function add_styles(style_object) {
  var styles = style_object_to_string(style_object);
  return styles ? " style=\"".concat(styles, "\"") : '';
}

function bind(component, name, callback) {
  var index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor, customElement) {
  var _component$$$ = component.$$,
      fragment = _component$$$.fragment,
      on_mount = _component$$$.on_mount,
      on_destroy = _component$$$.on_destroy,
      after_update = _component$$$.after_update;
  fragment && fragment.m(target, anchor);

  if (!customElement) {
    // onMount happens before the initial afterUpdate
    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
  }

  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  var $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, append_styles) {
  var dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
  var parent_component = current_component;
  set_current_component(component);
  var $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props: props,
    update: noop,
    not_equal: not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty: dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  var ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
    var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }

  set_current_component(parent_component);
}

var SvelteElement;

if (typeof HTMLElement === 'function') {
  SvelteElement = /*#__PURE__*/function (_HTMLElement) {
    _inherits(SvelteElement, _HTMLElement);

    var _super2 = _createSuper(SvelteElement);

    function SvelteElement() {
      var _this3;

      _classCallCheck(this, SvelteElement);

      _this3 = _super2.call(this);

      _this3.attachShadow({
        mode: 'open'
      });

      return _this3;
    }

    _createClass(SvelteElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var on_mount = this.$$.on_mount;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function); // @ts-ignore todo: improve typings

        for (var key in this.$$.slotted) {
          // @ts-ignore todo: improve typings
          this.appendChild(this.$$.slotted[key]);
        }
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, _oldValue, newValue) {
        this[attr] = newValue;
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
    }, {
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        // TODO should this delegate to addEventListener?
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    }]);

    return SvelteElement;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
}
/**
 * Base class for Svelte components. Used when dev=false.
 */


var SvelteComponent = /*#__PURE__*/function () {
  function SvelteComponent() {
    _classCallCheck(this, SvelteComponent);
  }

  _createClass(SvelteComponent, [{
    key: "$destroy",
    value: function $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
  }, {
    key: "$on",
    value: function $on(type, callback) {
      var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return function () {
        var index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
  }, {
    key: "$set",
    value: function $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  }]);

  return SvelteComponent;
}();

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.49.0'
  }, detail), {
    bubbles: true
  }));
}

function append_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node
  });
  append(target, node);
}

function append_hydration_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node
  });
  append_hydration(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node,
    anchor: anchor
  });
  insert(target, node, anchor);
}

function insert_hydration_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node,
    anchor: anchor
  });
  insert_hydration(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev('SvelteDOMRemove', {
    node: node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  var modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev('SvelteDOMAddEventListener', {
    node: node,
    event: event,
    handler: handler,
    modifiers: modifiers
  });
  var dispose = listen(node, event, handler, options);
  return function () {
    dispatch_dev('SvelteDOMRemoveEventListener', {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
    node: node,
    attribute: attribute
  });else dispatch_dev('SvelteDOMSetAttribute', {
    node: node,
    attribute: attribute,
    value: value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev('SvelteDOMSetProperty', {
    node: node,
    property: property,
    value: value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev('SvelteDOMSetDataset', {
    node: node,
    property: property,
    value: value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  dispatch_dev('SvelteDOMSetData', {
    node: text,
    data: data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && _typeof(arg) === 'object' && 'length' in arg)) {
    var msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (var _i4 = 0, _Object$keys = Object.keys(slot); _i4 < _Object$keys.length; _i4++) {
    var slot_key = _Object$keys[_i4];

    if (!~keys.indexOf(slot_key)) {
      console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
    }
  }
}

function validate_dynamic_element(tag) {
  var is_string = typeof tag === 'string';

  if (tag && !is_string) {
    throw new Error('<svelte:element> expects "this" attribute to be a string.');
  }
}

function validate_void_dynamic_element(tag) {
  if (tag && is_void(tag)) {
    throw new Error("<svelte:element this=\"".concat(tag, "\"> is self-closing and cannot have content."));
  }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */


var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(SvelteComponentDev, _SvelteComponent);

  var _super3 = _createSuper(SvelteComponentDev);

  function SvelteComponentDev(options) {
    _classCallCheck(this, SvelteComponentDev);

    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }

    return _super3.call(this);
  }

  _createClass(SvelteComponentDev, [{
    key: "$destroy",
    value: function $destroy() {
      _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

      this.$destroy = function () {
        console.warn('Component was already destroyed'); // eslint-disable-line no-console
      };
    }
  }, {
    key: "$capture_state",
    value: function $capture_state() {}
  }, {
    key: "$inject_state",
    value: function $inject_state() {}
  }]);

  return SvelteComponentDev;
}(SvelteComponent);
/**
 * Base class to create strongly typed Svelte components.
 * This only exists for typing purposes and should be used in `.d.ts` files.
 *
 * ### Example:
 *
 * You have component library on npm called `component-library`, from which
 * you export a component called `MyComponent`. For Svelte+TypeScript users,
 * you want to provide typings. Therefore you create a `index.d.ts`:
 * ```ts
 * import { SvelteComponentTyped } from "svelte";
 * export class MyComponent extends SvelteComponentTyped<{foo: string}> {}
 * ```
 * Typing this makes it possible for IDEs like VS Code with the Svelte extension
 * to provide intellisense and to use the component like this in a Svelte file
 * with TypeScript:
 * ```svelte
 * <script lang="ts">
 * 	import { MyComponent } from "component-library";
 * </script>
 * <MyComponent foo={'bar'} />
 * ```
 *
 * #### Why not make this part of `SvelteComponent(Dev)`?
 * Because
 * ```ts
 * class ASubclassOfSvelteComponent extends SvelteComponent<{foo: string}> {}
 * const component: typeof SvelteComponent = ASubclassOfSvelteComponent;
 * ```
 * will throw a type error, so we need to separate the more strictly typed class.
 */


var SvelteComponentTyped = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(SvelteComponentTyped, _SvelteComponentDev);

  var _super4 = _createSuper(SvelteComponentTyped);

  function SvelteComponentTyped(options) {
    _classCallCheck(this, SvelteComponentTyped);

    return _super4.call(this, options);
  }

  return _createClass(SvelteComponentTyped);
}(SvelteComponentDev);

function loop_guard(timeout) {
  var start = Date.now();
  return function () {
    if (Date.now() - start > timeout) {
      throw new Error('Infinite loop detected');
    }
  };
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.svelte */ "./src/app.svelte");


if ('serviceWorker' in navigator) {
  console.log('serviceWorker is supported');
  window.addEventListener('load', function (e) {
    navigator.serviceWorker.register('../serviceWorker.js').then(function (reg) {
      return console.log('serviceWorker registered!');
    })["catch"](function (err) {
      return console.log("serviceWorker Error:: ".concat(err));
    });
  });
}

var app = new _app_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]({
  target: document.body,
  props: {
    name: 'world'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);
})();

/******/ })()
;