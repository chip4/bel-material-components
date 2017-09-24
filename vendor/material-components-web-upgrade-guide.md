1. `wget https://unpkg.com/material-components-web@latest/dist/material-components-web.js`
2. Replace 
```js
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mdc"] = factory();
	else
		root["mdc"] = factory();
})(this, function() {
```
with
```js
const mdc = (function() {
```
3. Append the following to the bottom of the file 
```js
export const {
  autoInit,
  base,
  checkbox,
  dialog,
  drawer,
  formField,
  gridList,
  iconToggle,
  linearProgress,
  menu,
  radio,
  ripple,
  select,
  selectionControl,
  slider,
  snackbar,
  tabs,
  textfield,
  toolbar
} = mdc;
export default mdc;
```