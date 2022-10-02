/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/react/Component/index.js":
/*!**************************************!*\
  !*** ./src/react/Component/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _reconciliation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reconciliation */ "./src/react/reconciliation/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*
 * @Author: onino
 * @Date: 2022-10-02 12:23:10
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 15:14:58
 * @Description: 请填写简介
 */

var Component = /*#__PURE__*/function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this.props = props;
  }

  _createClass(Component, [{
    key: "setState",
    value: function setState(partialState) {
      (0,_reconciliation__WEBPACK_IMPORTED_MODULE_0__.scheduleUpdate)(this, partialState);
    }
  }]);

  return Component;
}();

/***/ }),

/***/ "./src/react/createElement/index.js":
/*!******************************************!*\
  !*** ./src/react/createElement/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
/*
 * @Author: onino
 * @Date: 2022-10-02 09:43:51
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 09:44:10
 * @Description: 请填写简介
 */

/*
 * @Author: onino
 * @Date: 2022-10-01 09:14:16
 * @LastEditors: onino
 * @LastEditTime: 2022-10-01 10:15:32
 * @Description: 创建虚拟 dom
 */

/**
 * @description: 
 * @param {*} type 类型 text、function
 * @param {*} props { textContent: '123' }
 * @param {array} children 数组  对象父节点的所有子节点
 * @return {*}  标准格式的虚拟 dom
 */
function createElement(type, props) {
  var _ref;

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var childElement = (_ref = []).concat.apply(_ref, children).reduce(function (result, child) {
    // 除去子节点中 值为 false、true、null的
    if (child != false && child != true && child != null) {
      if (child instanceof Object) {
        result.push(child);
      } else {
        // 将不标准的 text 文本 转为 标准的格式
        result.push(createElement("text", {
          textContent: child
        }));
      }
    }

    return result;
  }, []);

  return {
    type: type,
    // 将根节点的 子节点集合挂载到props上 因为在组件里 是通过 props.children 来获取到子节点的     
    props: Object.assign({
      children: childElement
    }, props)
  };
}

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _Component__WEBPACK_IMPORTED_MODULE_2__.Component),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "render": () => (/* reexport safe */ _reconciliation__WEBPACK_IMPORTED_MODULE_1__.render)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/react/createElement/index.js");
/* harmony import */ var _reconciliation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reconciliation */ "./src/react/reconciliation/index.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component */ "./src/react/Component/index.js");
/*
 * @Author: onino
 * @Date: 2022-10-02 09:42:54
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 12:24:12
 * @Description: 请填写简介
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createElement: _createElement__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/react/misc/Arrified/index.js":
/*!******************************************!*\
  !*** ./src/react/misc/Arrified/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * @Author: onino
 * @Date: 2022-10-02 10:49:10
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 10:51:21
 * @Description: 请填写简介
 */
var arrified = function arrified(arg) {
  return Array.isArray(arg) ? arg : [arg];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrified);

/***/ }),

/***/ "./src/react/misc/DOM/createDOMElement.js":
/*!************************************************!*\
  !*** ./src/react/misc/DOM/createDOMElement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDOMElement)
/* harmony export */ });
/* harmony import */ var _updateNodeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateNodeElement */ "./src/react/misc/DOM/updateNodeElement.js");
/*
 * @Author: onino
 * @Date: 2022-10-02 11:08:36
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 11:09:27
 * @Description: 请填写简介
 */

/*
 * @Author: onino
 * @Date: 2022-10-01 10:39:24
 * @LastEditors: onino
 * @LastEditTime: 2022-10-01 12:11:14
 * @Description: 创建 dom 节点
 */

function createDOMElement(virtualDOM) {
  var newElement = null;

  if (virtualDOM.type === 'text') {
    // 根节点是文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    // 根结点是元素节点
    newElement = document.createElement(virtualDOM.type); // 为元素添加属性

    (0,_updateNodeElement__WEBPACK_IMPORTED_MODULE_0__["default"])(newElement, virtualDOM);
  }

  return newElement;
}

/***/ }),

/***/ "./src/react/misc/DOM/index.js":
/*!*************************************!*\
  !*** ./src/react/misc/DOM/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMElement": () => (/* reexport safe */ _createDOMElement__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "updateNodeElement": () => (/* reexport safe */ _updateNodeElement__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _createDOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOMElement */ "./src/react/misc/DOM/createDOMElement.js");
/* harmony import */ var _updateNodeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateNodeElement */ "./src/react/misc/DOM/updateNodeElement.js");
/*
 * @Author: onino
 * @Date: 2022-10-02 11:10:31
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 11:11:00
 * @Description: 请填写简介
 */



/***/ }),

/***/ "./src/react/misc/DOM/updateNodeElement.js":
/*!*************************************************!*\
  !*** ./src/react/misc/DOM/updateNodeElement.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateNodeElement)
/* harmony export */ });
/*
 * @Author: onino
 * @Date: 2022-10-02 11:09:38
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 13:32:49
 * @Description: 请填写简介
 */

/*
 * @Author: onino
 * @Date: 2022-10-01 10:46:34
 * @LastEditors: onino
 * @LastEditTime: 2022-10-01 13:25:05
 * @Description: 给每个节点添加属性
 */
function updateNodeElement(newElement, virtualDOM) {
  var oldVirtualDOM = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // 获取节点对应的属性对象
  var newProps = virtualDOM.props;
  var oldProps = oldVirtualDOM.props || {};

  if (virtualDOM.type === 'text') {
    if (newProps.textContent !== oldProps.textContent) {
      // 父级节点不同
      if (virtualDOM.parent.type !== oldVirtualDOM.parent.type) {
        virtualDOM.parent.stateNode.appendChild(document.createTextNode(newProps.textContent));
      } else {
        virtualDOM.parent.stateNode.replaceChild(document.createTextNode(newProps.textContent), oldVirtualDOM.stateNode);
      }
    }

    return;
  }

  Object.keys(newProps).forEach(function (propName) {
    // 获取属性值
    var newPropsValue = newProps[propName];
    var oldPropsValue = oldProps[propName];

    if (newPropsValue !== oldPropsValue) {
      // 判断 属性是否是 事件属性 onClick =》 click
      if (propName.slice(0, 2) === "on") {
        // 事件名称
        var eventName = propName.toLowerCase().slice(2); // 为元素添加事件

        newElement.addEventListener(eventName, newPropsValue); // 删除 原有的事件处理函数

        if (oldPropsValue) {
          newElement.removeEventListener(eventName, oldPropsValue);
        }
      } else if (propName === 'checked' || propName === 'value') {
        newElement[propName] = newPropsValue;
      } else if (propName !== 'children') {
        // children 不是属性 是元素
        if (propName === 'className') {
          newElement.setAttribute('class', newPropsValue);
        } else {
          newElement.setAttribute(propName, newPropsValue);
        }
      }
    }
  }); // 判断属性被删除的情况, 防止老的属性 没有被卸载

  Object.keys(oldProps).forEach(function (propName) {
    var newPropsValue = newProps[propName];
    var oldPropsValue = oldProps[propName]; // 某个老的属性 在新的对象中 没有找到 说明该属性被删除了

    if (!newPropsValue) {
      if (propName.slice(0, 2) === 'on') {
        var eventName = propName.toLowerCase().slice(2);
        newElement.removeEventListener(eventName, oldPropsValue);
      } else if (propName !== 'children') {
        newElement.removeAttribute(propName);
      }
    }
  });
}

/***/ }),

/***/ "./src/react/misc/createReactInstance/index.js":
/*!*****************************************************!*\
  !*** ./src/react/misc/createReactInstance/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createReactInstance": () => (/* binding */ createReactInstance)
/* harmony export */ });
/*
 * @Author: onino
 * @Date: 2022-10-02 12:29:32
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 12:58:15
 * @Description: 请填写简介
 */
var createReactInstance = function createReactInstance(fiber) {
  var instance = null;

  if (fiber.tag === "class_component") {
    instance = new fiber.type(fiber.props);
  } else {
    instance = fiber.type;
  }

  return instance;
};

/***/ }),

/***/ "./src/react/misc/createStateNode/index.js":
/*!*************************************************!*\
  !*** ./src/react/misc/createStateNode/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/react/misc/DOM/index.js");
/* harmony import */ var _createReactInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createReactInstance */ "./src/react/misc/createReactInstance/index.js");
/*
 * @Author: onino
 * @Date: 2022-10-02 11:07:13
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 12:32:22
 * @Description: 请填写简介
 */



var createStateNode = function createStateNode(fiber) {
  /**
   *  fiber.tag === "host_component" 普通节点
   */
  if (fiber.tag === "host_component") {
    return (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(fiber);
  } else {
    // 处理组件的情况
    return (0,_createReactInstance__WEBPACK_IMPORTED_MODULE_1__.createReactInstance)(fiber);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStateNode);

/***/ }),

/***/ "./src/react/misc/createTaskQueue/index.js":
/*!*************************************************!*\
  !*** ./src/react/misc/createTaskQueue/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * @Author: onino
 * @Date: 2022-10-02 10:10:06
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 10:27:39
 * @Description: 请填写简介
 */
var createTaskQueue = function createTaskQueue() {
  var taskQueue = [];
  return {
    /**
     * 向任务队列中添加任务
     */
    push: function push(item) {
      return taskQueue.push(item);
    },

    /**
     * 从任务队列中获取任务
     */
    pop: function pop() {
      return taskQueue.shift();
    },

    /**
     * 判断任务队列中是否有任务
     */
    isEmpty: function isEmpty() {
      return taskQueue.length === 0;
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskQueue);

/***/ }),

/***/ "./src/react/misc/getRoot/index.js":
/*!*****************************************!*\
  !*** ./src/react/misc/getRoot/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * @Author: onino
 * @Date: 2022-10-02 15:23:48
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 15:26:18
 * @Description: 请填写简介
 */
var getRoot = function getRoot(instance) {
  var fiber = instance.__fiber;

  while (fiber.parent) {
    fiber = fiber.parent;
  }

  return fiber;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRoot);

/***/ }),

/***/ "./src/react/misc/getTag/index.js":
/*!****************************************!*\
  !*** ./src/react/misc/getTag/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Component */ "./src/react/Component/index.js");
/*
 * @Author: onino
 * @Date: 2022-10-02 11:17:08
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 12:54:27
 * @Description: 请填写简介
 */


var getTag = function getTag(vdom) {
  if (typeof vdom.type === 'string') {
    return "host_component";
  } else if (Object.getPrototypeOf(vdom.type) === _Component__WEBPACK_IMPORTED_MODULE_0__.Component) {
    return "class_component";
  } else {
    return "function_component";
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);

/***/ }),

/***/ "./src/react/misc/index.js":
/*!*********************************!*\
  !*** ./src/react/misc/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrified": () => (/* reexport safe */ _Arrified__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "createStateNode": () => (/* reexport safe */ _createStateNode__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "createTaskQueue": () => (/* reexport safe */ _createTaskQueue__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "getRoot": () => (/* reexport safe */ _getRoot__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "getTag": () => (/* reexport safe */ _getTag__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _createTaskQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskQueue */ "./src/react/misc/createTaskQueue/index.js");
/* harmony import */ var _Arrified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Arrified */ "./src/react/misc/Arrified/index.js");
/* harmony import */ var _createStateNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStateNode */ "./src/react/misc/createStateNode/index.js");
/* harmony import */ var _getTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTag */ "./src/react/misc/getTag/index.js");
/* harmony import */ var _getRoot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getRoot */ "./src/react/misc/getRoot/index.js");
/*
 * @Author: onino
 * @Date: 2022-10-02 10:13:11
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 15:25:29
 * @Description: 请填写简介
 */






/***/ }),

/***/ "./src/react/reconciliation/index.js":
/*!*******************************************!*\
  !*** ./src/react/reconciliation/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "scheduleUpdate": () => (/* binding */ scheduleUpdate)
/* harmony export */ });
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc */ "./src/react/misc/index.js");
/* harmony import */ var _misc_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/DOM */ "./src/react/misc/DOM/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: onino
 * @Date: 2022-10-02 09:46:29
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 15:31:23
 * @Description: 请填写简介
 */


var taskQueue = (0,_misc__WEBPACK_IMPORTED_MODULE_0__.createTaskQueue)();
var subTask = null;
var pendingCommit = null;

var commitAllWork = function commitAllWork(fiber) {
  /**
   * 循环 effects 数组 构建 DOM 节点树
   */
  // 初始渲染
  fiber.effects.forEach(function (item) {
    if (item.tag === "class_component") {
      item.stateNode.__fiber = item;
    }

    if (item.effectTag === 'delete') {
      item.parent.stateNode.removeChild(item.stateNode);
    } else if (item.effectTag === 'update') {
      /**
       * 更新
       */
      if (item.type === item.alternate.type) {
        /**
         *  节点类型相同
         */
        (0,_misc_DOM__WEBPACK_IMPORTED_MODULE_1__.updateNodeElement)(item.stateNode, item, item.alternate);
      } else {
        /**
         * 节点类型不同
         */
        item.parent.stateNode.replaceChild(item.stateNode, item.alternate.stateNode);
      }
    } else if (item.effectTag === 'placement') {
      var _fiber = item;
      var parentFiber = item.parent;

      while (parentFiber.tag === "class_component" || parentFiber.tag === "function_component") {
        parentFiber = parentFiber.parent;
      }

      if (_fiber.tag === "host_component") {
        parentFiber.stateNode.appendChild(_fiber.stateNode);
      }
    }
  });
  /**
   *  备份旧的 fiber 节点对象
   */

  fiber.stateNode.__rootFibercontainer = fiber;
};

var getFirstTask = function getFirstTask() {
  /**
   * 从任务队列中获取任务
   */
  var task = taskQueue.pop();

  if (task.from === "class_component") {
    var root = (0,_misc__WEBPACK_IMPORTED_MODULE_0__.getRoot)(task.instance);
    task.instance.__fiber.partialState = task.partialState;
    return {
      props: root.props,
      stateNode: root.stateNode,
      tag: "host_root",
      effects: [],
      child: null,
      alternate: root
    };
  }
  /**
   * 返回最外层节点的fiber 对象
   */


  return {
    props: task.props,
    stateNode: task.dom,
    tag: "host_root",
    effects: [],
    child: null,
    alternate: task.dom.__rootFibercontainer
  };
};

var reconcileChildren = function reconcileChildren(fiber, children) {
  /**
  * children 可能对象 也可能是数组
  * 将 children 转换成数组
  */
  var arrifiedChildren = (0,_misc__WEBPACK_IMPORTED_MODULE_0__.arrified)(children);
  var index = 0;
  var numberOfElements = arrifiedChildren.length;
  var element = null;
  var newFiber = null;
  var prevFiber = null;
  var alternate = null;

  if (fiber.alternate && fiber.alternate.child) {
    alternate = fiber.alternate.child;
  }

  while (index < numberOfElements || alternate) {
    element = arrifiedChildren[index];

    if (!element && alternate) {
      /**
       *  删除节点
       */
      alternate.effectTag = "delete";
      fiber.effects.push(alternate);
    } else if (element && alternate) {
      /**
       * 更新
       */
      newFiber = {
        type: element.type,
        props: element.props,
        tag: (0,_misc__WEBPACK_IMPORTED_MODULE_0__.getTag)(element),
        effects: [],
        effectTag: "update",
        stateNode: null,
        parent: fiber,
        alternate: alternate
      };

      if (element.type === alternate.type) {
        /**
         * 类型相同
         */
        newFiber.stateNode = alternate.stateNode;
      } else {
        /**
         * 类型不同
         */
        newFiber.stateNode = (0,_misc__WEBPACK_IMPORTED_MODULE_0__.createStateNode)(newFiber);
      }
    } else if (element && !alternate) {
      newFiber = {
        type: element.type,
        props: element.props,
        tag: (0,_misc__WEBPACK_IMPORTED_MODULE_0__.getTag)(element),
        effects: [],
        effectTag: "placement",
        stateNode: null,
        parent: fiber
      };
      newFiber.stateNode = (0,_misc__WEBPACK_IMPORTED_MODULE_0__.createStateNode)(newFiber);
    } // 为父级 fiber 添加 子级 fiber


    if (index == 0) {
      fiber.child = newFiber;
    } else if (element) {
      // 为 fiber 添加下一个兄弟 fiber
      prevFiber.sibling = newFiber;
    }

    if (alternate && alternate.sibling) {
      alternate = alternate.sibling;
    } else {
      alternate = null;
    }

    prevFiber = newFiber;
    index++;
  }
};
/**
 * @description: 查找节点函数
 * @param {*} fiber
 * @return {*}
 */


var executeTask = function executeTask(fiber) {
  if (fiber.tag === "class_component") {
    // 更新state
    if (fiber.stateNode.__fiber && fiber.stateNode.__fiber.partialState) {
      fiber.stateNode.state = _objectSpread(_objectSpread({}, fiber.stateNode.state), fiber.stateNode.__fiber.partialState);
    }

    reconcileChildren(fiber, fiber.stateNode.render());
  } else if (fiber.tag === "function_component") {
    reconcileChildren(fiber, fiber.stateNode(fiber.props));
  } else {
    reconcileChildren(fiber, fiber.props.children);
  } // 构建左侧节点的 fiber 对象
  // 如果子级存在 返回子级
  // 将这个子级当作父级 构建这个父级下的子级


  if (fiber.child) {
    return fiber.child;
  }

  var currentExecutelyFiber = fiber;

  while (currentExecutelyFiber.parent) {
    // 最外层的effects 就会有所有的 fiber 对象
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(currentExecutelyFiber.effects.concat([currentExecutelyFiber]));

    if (currentExecutelyFiber.sibling) {
      return currentExecutelyFiber.sibling;
    }

    currentExecutelyFiber = currentExecutelyFiber.parent;
  }

  pendingCommit = currentExecutelyFiber; // console.log(currentExecutelyFiber) // 最外层节点
};

var workLoop = function workLoop(deadline) {
  /**
   * 如果子任务不存在 就去获取子任务
   */
  if (!subTask) {
    subTask = getFirstTask();
  }
  /**
   * 如果任务存在 并且浏览器有空余时间 就调用
   * excuteTask 方法执行任务 接收任务 返回新任务
   */


  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask);
  }

  if (pendingCommit) {
    commitAllWork(pendingCommit);
  }
};

var performTask = function performTask(deadline) {
  /**
   * 执行任务
   */
  workLoop(deadline);
  /**
   * 判断任务是否存在
   * 判断任务队列中是否还有任务没有执行
   * 再次告诉浏览器在空闲的时间执行任务
   */

  if (subTask || !taskQueue.isEmpty()) {
    requestIdleCallback(performTask);
  }
};

var render = function render(element, dom) {
  /**
   * 1、向任务队列中添加任务 
   *  2、 指定在浏览器空闲时执行任务
   */

  /**
   * 任务就是 通过 vdom 对象 构建 fiber 对象
   */
  taskQueue.push({
    dom: dom,
    // root
    props: {
      children: element
    }
  });
  /**
   * 
   */

  requestIdleCallback(performTask);
};
var scheduleUpdate = function scheduleUpdate(instance, partialState) {
  taskQueue.push({
    from: "class_component",
    instance: instance,
    partialState: partialState
  });
  requestIdleCallback(performTask);
};

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ "./src/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * @Author: onino
 * @Date: 2022-10-02 09:15:31
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 15:14:41
 * @Description: 请填写简介
 */

var root = document.getElementById('root'); // const jsx = (
//     <div>
//         <p>Hello React</p>
//         <p>Hello fiber</p>
//     </div>
// )
// render(jsx, root)
// setTimeout(() => {
//     const jsx = (
//         <div>
//             <div>奥利给</div>
//             {/* <p>Hello fiber</p> */}
//         </div>
//     )
//     render(jsx, root)
// }, 2000)

var Greating = /*#__PURE__*/function (_Component) {
  _inherits(Greating, _Component);

  var _super = _createSuper(Greating);

  function Greating(props) {
    var _this;

    _classCallCheck(this, Greating);

    _this = _super.call(this, props);
    _this.state = {
      name: "张三"
    };
    return _this;
  }

  _createClass(Greating, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(38, this.state);
      return /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, this.props.title, "hahahaha", this.state.name, /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
        onClick: function onClick() {
          return _this2.setState({
            name: "李四"
          });
        }
      }, "button"));
    }
  }]);

  return Greating;
}(_react__WEBPACK_IMPORTED_MODULE_0__.Component);

(0,_react__WEBPACK_IMPORTED_MODULE_0__.render)( /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Greating, {
  title: "\u5965\u5229\u7ED9"
}), root); // function FnComponent(props) {
//     return <div> {props.title} Fncomponent</div>
// }
// render(<FnComponent title="hello " />, root)
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map