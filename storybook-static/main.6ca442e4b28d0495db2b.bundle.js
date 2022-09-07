(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1078:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(50),__webpack_require__(41),__webpack_require__(33),__webpack_require__(43),__webpack_require__(1079),__webpack_require__(1080),__webpack_require__(8),__webpack_require__(42);var _clientApi=__webpack_require__(55),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1081);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1081:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1082:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(205).configure)([__webpack_require__(1083),__webpack_require__(1084)],module,!1)}).call(this,__webpack_require__(104)(module))},1083:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1083},1084:function(module,exports,__webpack_require__){var map={"./stories/Requirements.stories.js":1085};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1084},1085:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(13);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(205),_components_Requirements__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(1087),__webpack_require__(474));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("App Test",module).addParameters({storySource:{source:"import React, { useState } from 'react';\nimport { storiesOf } from '@storybook/react';\nimport './styles.css';\nimport { Requirements } from '../components/Requirements';\n\nconst stories = storiesOf('App Test', module);\n\nstories.add('App', () => {\n  const [valid,  setValid] = useState(false);\n  const [password, setPassword] = useState('');\n  const [username, setUsername] = useState('');\n\n  const passwordRequirements = [\n    {\n      text: 'Must be at least 8 characters',\n      validator: val => val.length >= 8,\n    },\n    {\n      text: 'Must contain at least one number',\n      validator: val => /\\d/g.test(val),\n    },\n    {\n      text: 'Must contain at least one lower-case letter',\n      validator: val => /[a-z]/g.test(val),\n    },\n    {\n      text: 'Must contain at least one upper-case letter',\n      validator: val => /[A-Z]/g.test(val),\n    }\n  ];\n\n  return (\n    <div className='form'>\n      <h1>Signup</h1>\n\n      <Requirements\n        value={password}\n        requirements={passwordRequirements}\n        onValidChange={isValid => setValid(isValid)}\n      />\n\n      <input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />\n      <input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />\n\n      <button disabled={!valid || !username}>Sign Up</button>\n    </div>\n  );\n});\n",locationsMap:{app:{startLoc:{col:12,line:8},endLoc:{col:1,line:48},startBody:{col:19,line:8},endBody:{col:1,line:48}}}}}).add("App",(function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),2),valid=_useState2[0],setValid=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),2),password=_useState4[0],setPassword=_useState4[1],_useState6=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),2),username=_useState6[0],setUsername=_useState6[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"form",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{children:"Signup"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Requirements__WEBPACK_IMPORTED_MODULE_5__.a,{value:password,requirements:[{text:"Must be at least 8 characters",validator:function validator(val){return val.length>=8}},{text:"Must contain at least one number",validator:function validator(val){return/\d/g.test(val)}},{text:"Must contain at least one lower-case letter",validator:function validator(val){return/[a-z]/g.test(val)}},{text:"Must contain at least one upper-case letter",validator:function validator(val){return/[A-Z]/g.test(val)}}],onValidChange:function onValidChange(isValid){return setValid(isValid)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{placeholder:"Username",value:username,onChange:function onChange(e){return setUsername(e.target.value)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{placeholder:"Password",type:"password",value:password,onChange:function onChange(e){return setPassword(e.target.value)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{disabled:!valid||!username,children:"Sign Up"})]})}))}.call(this,__webpack_require__(196)(module))},1087:function(module,exports,__webpack_require__){var api=__webpack_require__(464),content=__webpack_require__(1088);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1088:function(module,exports,__webpack_require__){(exports=__webpack_require__(465)(!1)).push([module.i,".form {\n  width: 500px;\n  padding: 25px;\n  border-radius: 5px;\n  padding-bottom: 50px;\n  box-shadow: 0px 0px 5px gray;\n}\n.form input {\n  width: 100%;\n  border: none;\n  padding: 8px;\n  outline: none;\n  margin-top: 25px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 3px gray;\n}\n.form button {\n  width: 100%;\n  padding: 8px;\n  border: none;\n  outline: none;\n  color: white;\n  margin-top: 25px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  background-color: rgb(65, 65, 201);\n}\n.form button:disabled {\n  cursor: not-allowed;\n  background-color: lightgray;\n}\n.form h1 {\n  font-family: sans-serif;\n}\n",""]),module.exports=exports},1089:function(module,exports,__webpack_require__){var api=__webpack_require__(464),content=__webpack_require__(1090);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1090:function(module,exports,__webpack_require__){(exports=__webpack_require__(465)(!1)).push([module.i,".requirement {\n  height: 35px;\n  display: flex;\n  align-items: center;\n}\n.requirement p {\n  font-size: 14px;\n  margin-left: 10px;\n  font-weight: bold;\n  font-family: sans-serif;\n}\n.invalid {\n  color: red;\n}\n.valid {\n  color: #7ac142;\n}\n\n/* Ported from Alexander Haniotis' code here: https://codepen.io/haniotis/pen/KwvYLO */\n.checkmark {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  display: block;\n  stroke-width: 5;\n  stroke: #fff;\n  stroke-miterlimit: 10;\n  box-shadow: inset 0px 0px 0px #7ac142;\n  -webkit-animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;\n          animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;\n}\n\n.checkmark__circle {\n  stroke-dasharray: 166;\n  stroke-dashoffset: 166;\n  stroke-width: 2;\n  stroke-miterlimit: 10;\n  stroke: #7ac142;\n  fill: none;\n  -webkit-animation: stroke .6s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;\n          animation: stroke .6s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;\n}\n\n.checkmark__check {\n  transform-origin: 50% 50%;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  -webkit-animation: stroke .2s cubic-bezier(0.650, 0.000, 0.450, 1.000) .5s forwards;\n          animation: stroke .2s cubic-bezier(0.650, 0.000, 0.450, 1.000) .5s forwards;\n}\n\n@-webkit-keyframes stroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes stroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n@-webkit-keyframes scale {\n  0%, 100% {\n    transform: none;\n  }\n  50% {\n    transform: scale3d(1.1, 1.1, 1);\n  }\n}\n\n@keyframes scale {\n  0%, 100% {\n    transform: none;\n  }\n  50% {\n    transform: scale3d(1.1, 1.1, 1);\n  }\n}\n\n@-webkit-keyframes fill {\n  100% {\n    box-shadow: inset 0px 0px 0px 30px #7ac142;\n  }\n}\n\n@keyframes fill {\n  100% {\n    box-shadow: inset 0px 0px 0px 30px #7ac142;\n  }\n}",""]),module.exports=exports},474:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Requirements_Requirements}));__webpack_require__(122),__webpack_require__(20);var jsx_runtime=__webpack_require__(30),react=(__webpack_require__(1089),__webpack_require__(13),__webpack_require__(0)),Xmark_Xmark=function Xmark(){return Object(jsx_runtime.jsx)("svg",{x:"0px",y:"0px",width:"15px",height:"15px",viewBox:"0 0 122.879 122.879",enableBackground:"new 0 0 122.879 122.879",children:Object(jsx_runtime.jsx)("g",{children:Object(jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#FF4141",d:"M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"})})})};Xmark_Xmark.displayName="Xmark",Xmark_Xmark.__docgenInfo={description:"",methods:[],displayName:"Xmark"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Xmark/Xmark.js"]={name:"Xmark",docgenInfo:Xmark_Xmark.__docgenInfo,path:"src/components/Xmark/Xmark.js"});var Checkmark_Checkmark=function Checkmark(){return Object(jsx_runtime.jsxs)("svg",{className:"checkmark",viewBox:"0 0 52 52",children:[Object(jsx_runtime.jsx)("circle",{className:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),Object(jsx_runtime.jsx)("path",{className:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]})};function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}Checkmark_Checkmark.displayName="Checkmark",Checkmark_Checkmark.__docgenInfo={description:"",methods:[],displayName:"Checkmark"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkmark/Checkmark.js"]={name:"Checkmark",docgenInfo:Checkmark_Checkmark.__docgenInfo,path:"src/components/Checkmark/Checkmark.js"});var Requirement_Requirement=function Requirement(_ref){var value=_ref.value,requirement=_ref.requirement,_useState2=_slicedToArray(Object(react.useState)(),2),isValid=_useState2[0],setIsValid=_useState2[1];return Object(react.useEffect)((function(){setIsValid(requirement.validator(value))}),[value,requirement]),Object(jsx_runtime.jsxs)("div",{className:"requirement",children:[isValid?Object(jsx_runtime.jsx)(Checkmark_Checkmark,{}):Object(jsx_runtime.jsx)(Xmark_Xmark,{}),Object(jsx_runtime.jsx)("p",{className:isValid?"valid":"invalid",children:requirement.text})]})};Requirement_Requirement.displayName="Requirement",Requirement_Requirement.__docgenInfo={description:"",methods:[],displayName:"Requirement"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Requirement/Requirement.js"]={name:"Requirement",docgenInfo:Requirement_Requirement.__docgenInfo,path:"src/components/Requirement/Requirement.js"});var Requirements_Requirements=function Requirements(_ref){var value=_ref.value,requirements=_ref.requirements,onValidChange=_ref.onValidChange,validChangeCb=Object(react.useCallback)(onValidChange,[]);return Object(react.useEffect)((function(){validChangeCb(requirements.every((function(r){return r.validator(value)})))}),[value,requirements,validChangeCb]),requirements.map((function(r,index){return Object(jsx_runtime.jsx)(Requirement_Requirement,{value:value,requirement:r,onValidChange:onValidChange},index)}))}},477:function(module,exports,__webpack_require__){__webpack_require__(478),__webpack_require__(641),__webpack_require__(642),__webpack_require__(800),__webpack_require__(1019),__webpack_require__(1052),__webpack_require__(1057),__webpack_require__(1069),__webpack_require__(1071),__webpack_require__(1076),__webpack_require__(1078),module.exports=__webpack_require__(1082)},551:function(module,exports){},642:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(205)}},[[477,1,2]]]);
//# sourceMappingURL=main.6ca442e4b28d0495db2b.bundle.js.map