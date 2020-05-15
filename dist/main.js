module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("axios")},function(t,e){t.exports=require("dompurify")},function(t,e,n){"use strict";n.r(e),n.d(e,"Editmode",(function(){return i})),n.d(e,"Chunk",(function(){return _})),n.d(e,"ChunkProperty",(function(){return z})),n.d(e,"ChunkCollection",(function(){return D}));var r=n(0),o=n.n(r),c=o.a.createContext();var i=function(t){var e=document.createElement("script");e.src="https://www.editmode.app/assets/chunks.js",e.async=!0,document.body.append(e);var n=new URL(document.location).searchParams.get("em_branch");return o.a.createElement(c.Provider,{value:{em_branch:n}},t.children)},u=n(1),a=n.n(u),f=n(2),l=n.n(f);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t,e){var n=p(p({},t),{},{content:l.a.sanitize(t.content)});switch(n.chunk_type){case"single_line_text":return o.a.createElement("span",{"data-chunk":n.identifier,className:e,key:n.identifier},n.content);case"image":return o.a.createElement("img",{src:n.content,alt:"",className:e,key:n.identifier});default:return o.a.createElement("span",{className:e},n.content)}};function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g(t);if(e){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(i,t);var e,n,r,c=v(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=c.call(this)).identifier=t.identifier,e.state={chunk_data:{}},e}return e=i,(n=[{key:"componentDidMount",value:function(){var t=this,e=this.context;a.a.get("https://www.editmode.app/api/v1/chunks/".concat(this.identifier),e).then((function(e){t.setState({chunk_data:e.data})})).catch((function(t){return console.log("Something went wrong trying to retrieve chunk data: ".concat(t,".Have you provided the correct Editmode identifier as a prop to your Chunk component instance?"))}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.chunk_data.identifier?h(this.state.chunk_data,this.props.className):this.props.children)}}])&&d(e.prototype,n),r&&d(e,r),i}(o.a.Component);w.contextType=c;var _=w;function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=x(t);if(e){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)}}function E(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=o.a.createContext(),C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(i,t);var e,n,r,c=S(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=c.call(this)).identifier=t.identifier,e.state={chunks:[]},e}return e=i,(n=[{key:"componentDidMount",value:function(){var t=this;a.a.get("https://www.editmode.app/api/v1/chunks/",{params:{collection_identifier:this.props.identifier},em_branch:this.context.em_branch}).then((function(e){t.setState({chunks:e.data.chunks})})).catch((function(t){return console.log("Something went wrong trying to retrieve chunk collection: ".concat(t,". Have you provided the correct Editmode identifier as a prop to your ChunkCollection component instance?"))}))}},{key:"render",value:function(){var t=this;return this.state.chunks.length?this.state.chunks.map((function(e){return o.a.createElement(R.Provider,{value:e.content,key:e.identifier},o.a.createElement("div",{"collection-name":e.collection.name,className:t.props.className},t.props.children))})):o.a.createElement(o.a.Fragment,null,this.props.children)}}])&&P(e.prototype,n),r&&P(e,r),i}(o.a.Component);C.contextType=c;var D=C;function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=H(t);if(e){var o=H(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function H(t){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(i,t);var e,n,r,c=q(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=c.call(this)).identifier=t.identifier,e}return e=i,(n=[{key:"render",value:function(){var t=this;return o.a.createElement(R.Consumer,null,(function(e){return e&&e.length?e.map((function(e){return e["".concat(t.identifier)]?h(e["".concat(t.identifier)],t.props.className):null})):null}))}}])&&N(e.prototype,n),r&&N(e,r),i}(o.a.Component)}]);