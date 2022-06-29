/*! For license information please see 37.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"138":function(e,t,r){"use strict";e.exports=r(141)},"139":function(e,t,r){"use strict";var o=r(26),n=r.n(o),c=r(59),a=r.n(c),s=r(19),i=r.n(s),u=r(34),l=r.n(u),f=r(35),p=r.n(f),d=r(142),b=r.n(d),j=r(144),O=r.n(j),v=r(146),h=r.n(v),y=r(60),x=r.n(y),m=r(21),_=r.n(m);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=h()(e);if(t){var n=h()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return O()(this,r)}}_.a.createElement;var w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||w.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],s=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var i=r.substr(2).toLowerCase(),u=a;return"taro-scroll-view-core"===t&&"scroll"===i&&(u=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([i,u]),c.addEventListener(i,u)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof s)c.style.cssText="";else for(var l in s)updateStyle(c,l,"");for(var f in a)updateStyle(c,f,a[f])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(x()(a),x()(c))).join(" ")}(c,o,n):a}t.a=function reactifyWebComponent(e){var t=function(t){b()(Index,t);var r=_createSuper(Index);function Index(e){var t;return l()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(m.createRef)(),t}return p()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===i()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=a()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(m.createElement)(e,n,r)}}]),Index}(_.a.Component);return _.a.forwardRef((function(e,r){return _.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"141":function(e,t,r){"use strict";r(51);var o=r(21),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},u=null,l=null;for(o in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,o)&&!i.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":u,"ref":l,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"142":function(e,t,r){var o=r(143);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"143":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"144":function(e,t,r){var o=r(19).default,n=r(145);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"145":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"146":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"148":function(e,t,r){"use strict";r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return a})),r.d(t,"k",(function(){return s})),r.d(t,"s",(function(){return i})),r.d(t,"u",(function(){return u})),r.d(t,"v",(function(){return l})),r.d(t,"A",(function(){return f})),r.d(t,"f",(function(){return p})),r.d(t,"o",(function(){return d})),r.d(t,"r",(function(){return b})),r.d(t,"x",(function(){return j})),r.d(t,"a",(function(){return O})),r.d(t,"c",(function(){return v})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return y})),r.d(t,"h",(function(){return x})),r.d(t,"l",(function(){return m})),r.d(t,"m",(function(){return _})),r.d(t,"n",(function(){return w})),r.d(t,"p",(function(){return g})),r.d(t,"q",(function(){return k})),r.d(t,"t",(function(){return P})),r.d(t,"w",(function(){return A})),r.d(t,"y",(function(){return E})),r.d(t,"b",(function(){return N})),r.d(t,"g",(function(){return S})),r.d(t,"z",(function(){return R})),r.d(t,"B",(function(){return I}));var o=r(21),n=r(139),c=(Object(n.a)("taro-cover-image-core"),Object(n.a)("taro-cover-view-core"),Object(n.a)("taro-match-media-core"),Object(n.a)("taro-movable-area-core")),a=Object(n.a)("taro-movable-view-core"),s=Object(n.a)("taro-page-container-core"),i=Object(n.a)("taro-scroll-view-core"),u=(Object(n.a)("taro-share-element-core"),Object(n.a)("taro-swiper-core")),l=Object(n.a)("taro-swiper-item-core"),f=Object(n.a)("taro-view-core"),p=Object(n.a)("taro-icon-core"),d=Object(n.a)("taro-progress-core"),b=Object(n.a)("taro-rich-text-core"),j=Object(n.a)("taro-text-core"),O=Object(n.a)("taro-button-core"),v=Object(n.a)("taro-checkbox-core"),h=Object(n.a)("taro-checkbox-group-core"),y=(Object(n.a)("taro-editor-core"),Object(n.a)("taro-form-core")),x=(Object(n.a)("taro-keyboard-accessory-core"),Object(n.a)("taro-label-core")),m=Object(n.a)("taro-picker-core"),_=Object(n.a)("taro-picker-view-core"),w=Object(n.a)("taro-picker-view-column-core"),g=Object(n.a)("taro-radio-core"),k=Object(n.a)("taro-radio-group-core"),P=Object(n.a)("taro-slider-core"),A=Object(n.a)("taro-switch-core"),E=Object(n.a)("taro-textarea-core"),N=(Object(n.a)("taro-functional-page-navigator-core"),Object(n.a)("taro-navigator-core"),Object(n.a)("taro-audio-core"),Object(n.a)("taro-camera-core")),S=Object(n.a)("taro-image-core"),R=(Object(n.a)("taro-live-player-core"),Object(n.a)("taro-video-core")),I=(Object(n.a)("taro-voip-room-core"),Object(n.a)("taro-map-core"),Object(n.a)("taro-canvas-core"),Object(n.a)("taro-web-view-core"));Object(n.a)("taro-ad-core"),Object(n.a)("taro-ad-custom-core"),Object(n.a)("taro-official-account-core"),Object(n.a)("taro-open-data-core"),Object(n.a)("taro-navigation-bar-core"),Object(n.a)("taro-page-meta-core"),o.Fragment,Object(n.a)("taro-custom-wrapper-core")},"149":function(e,t,r){"use strict";var o=r(148),n=(r(150),r(138));t.a=function Head(e){var t=e.title,r=e.desc;return Object(n.jsxs)(o.A,{"className":"page-head","children":[Object(n.jsx)(o.A,{"className":"page-head-title","children":t}),Object(n.jsx)(o.A,{"className":"page-head-line"}),!!r&&Object(n.jsx)(o.x,{"className":"page-head-desc","children":r})]})}},"150":function(e,t,r){},"209":function(e,t,r){},"293":function(e,t,r){"use strict";r.r(t);var o=r(14),n=r(21),c=r(148),a=r(149),s=(r(209),r(138)),i=[{"value":"美国","text":"美国","checked":!1},{"value":"中国","text":"中国","checked":!0},{"value":"巴西","text":"巴西","checked":!1},{"value":"日本","text":"日本","checked":!1},{"value":"英国","text":"英国","checked":!1},{"value":"法国","text":"法国","checked":!0}];t.default=function Index(){var e=Object(n.useState)(i),t=Object(o.a)(e,2),r=t[0],u=t[1],l=Object(n.useState)(["中国","法国"]),f=Object(o.a)(l,2),p=f[0],d=f[1];return Object(s.jsxs)(c.A,{"className":"components-page","children":[Object(s.jsx)(c.A,{"className":"components-page__header","children":Object(s.jsx)(a.a,{"title":"Checkbox"})}),Object(s.jsxs)(c.A,{"className":"components-page__body","children":[Object(s.jsxs)(c.A,{"className":"components-page__body-example example","children":[Object(s.jsx)(c.A,{"className":"example-header","children":"默认样式"}),Object(s.jsxs)(c.A,{"className":"example-body simple-box","children":[Object(s.jsx)(c.c,{"value":"选中","checked":!0,"children":"选中"}),Object(s.jsx)(c.c,{"style":"margin-left: 20px","value":"未选中","children":"未选中"})]})]}),Object(s.jsxs)(c.A,{"className":"components-page__body-example example","children":[Object(s.jsx)(c.A,{"className":"example-header","children":"推荐展示样式"}),Object(s.jsxs)(c.A,{"className":"example-body","children":[Object(s.jsxs)(c.A,{"className":"select-box","children":["当前选择: ",p.join(",")]}),Object(s.jsx)(c.A,{"children":Object(s.jsx)(c.A,{"className":"checkbox-list","children":Object(s.jsx)(c.d,{"name":"checkbox","onChange":function checkboxChange(e){var t=r.map((function(t){return t.checked=e.detail.value.indexOf(t.value)>=0,t}));d(e.detail.value),u(t)},"children":r.map((function(e){return Object(s.jsx)(c.h,{"className":"checkbox-list__label","children":Object(s.jsx)(c.c,{"className":"checkbox-list__checkbox","value":e.value,"checked":e.checked,"children":e.text})},e.value)}))})})})]})]})]})]})}}}]);