/*! For license information please see 247.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[247],{"5403":function(e,t,n){n.d(t,{"ub":function(){return r},"Gt":function(){return o},"_z":function(){return A},"pf":function(){return a},"tq":function(){return c},"t3":function(){return s},"G7":function(){return l},"JO":function(){return u},"Ex":function(){return d},"Ho":function(){return f},"xv":function(){return m},"zx":function(){return p},"XZ":function(){return g},"cO":function(){return h},"l0":function(){return y},"__":function(){return b},"cW":function(){return I},"Nf":function(){return v},"$o":function(){return x},"Y8":function(){return w},"FX":function(){return C},"iR":function(){return S},"rs":function(){return k},"gx":function(){return j},"V1":function(){return Z},"Ee":function(){return M},"nk":function(){return D},"kh":function(){return N}});n(3464);var i=n(2214),r=((0,i.Z)("taro-cover-image-core"),(0,i.Z)("taro-cover-view-core"),(0,i.Z)("taro-match-media-core"),(0,i.Z)("taro-movable-area-core")),o=(0,i.Z)("taro-movable-view-core"),A=(0,i.Z)("taro-page-container-core"),a=((0,i.Z)("taro-root-portal-core"),(0,i.Z)("taro-scroll-view-core")),c=((0,i.Z)("taro-share-element-core"),(0,i.Z)("taro-swiper-core")),s=(0,i.Z)("taro-swiper-item-core"),l=(0,i.Z)("taro-view-core"),u=(0,i.Z)("taro-icon-core"),d=(0,i.Z)("taro-progress-core"),f=(0,i.Z)("taro-rich-text-core"),m=(0,i.Z)("taro-text-core"),p=(0,i.Z)("taro-button-core"),g=(0,i.Z)("taro-checkbox-core"),h=(0,i.Z)("taro-checkbox-group-core"),y=((0,i.Z)("taro-editor-core"),(0,i.Z)("taro-form-core")),b=((0,i.Z)("taro-keyboard-accessory-core"),(0,i.Z)("taro-label-core")),I=(0,i.Z)("taro-picker-core"),v=(0,i.Z)("taro-picker-view-core"),x=(0,i.Z)("taro-picker-view-column-core"),w=(0,i.Z)("taro-radio-core"),C=(0,i.Z)("taro-radio-group-core"),S=(0,i.Z)("taro-slider-core"),k=(0,i.Z)("taro-switch-core"),j=(0,i.Z)("taro-textarea-core"),Z=((0,i.Z)("taro-functional-page-navigator-core"),(0,i.Z)("taro-navigator-core"),(0,i.Z)("taro-navigation-bar-core"),(0,i.Z)("taro-audio-core"),(0,i.Z)("taro-camera-core")),M=(0,i.Z)("taro-image-core"),D=((0,i.Z)("taro-live-player-core"),(0,i.Z)("taro-live-pusher-core"),(0,i.Z)("taro-video-core")),N=((0,i.Z)("taro-voip-room-core"),(0,i.Z)("taro-map-core"),(0,i.Z)("taro-canvas-core"),(0,i.Z)("taro-ad-core"),(0,i.Z)("taro-ad-custom-core"),(0,i.Z)("taro-official-account-core"),(0,i.Z)("taro-open-data-core"),(0,i.Z)("taro-web-view-core"));(0,i.Z)("taro-page-meta-core"),(0,i.Z)("taro-custom-wrapper-core")},"2214":function(e,t,n){var i=n(5827),r=n(1760),o=n(517),A=n(6830),a=n(8652),c=n(6014),s=n(3317),l=n(5935),u=n(766),d=n(3464);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,i=(0,l.Z)(e);if(t){var r=(0,l.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,s.Z)(this,n)}}d.createElement;var f="taro-scroll-view-core",m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,n){/^--/.test(t)?e.style.setProperty(t,n):"number"!=typeof n||m.test(t)?e.style[t]=n:e.style[t]=n+"px"}function updateProp(e,t,n,i,r){var o=e.ref.current,A=r[n],a=i?i[n]:void 0;if("children"!==n)if("classname"!==n.toLowerCase()){if("style"!==n){if(/^data-.+/.test(n)&&o.setAttribute(n,A),t===f){if("scrollTop"===n)return void(o.mpScrollTop=A);if("scrollLeft"===n)return void(o.mpScrollLeft=A);if("scrollIntoView"===n)return void(o.mpScrollIntoView=A)}if("function"==typeof A&&n.match(/^on[A-Z]/)){var c=n.substr(2).toLowerCase(),s=A;return t===f&&"scroll"===c&&(s=function fn(e){e instanceof CustomEvent&&A.apply(null,Array.from(arguments))}),e.eventHandlers.push([c,s]),o.addEventListener(c,s)}return"string"==typeof A||"number"==typeof A?(o.setAttribute(n,A),void(o[n]=A)):"boolean"==typeof A?A?(o[n]=!0,o.setAttribute(n,A)):(o[n]=!1,o.removeAttribute(n)):void(o[n]=A)}if("string"==typeof A)return void o.setAttribute(n,A);if(!A)return void o.removeAttribute(n);if(i)if("string"==typeof a)o.style.cssText="";else for(var l in a)updateStyle(o,l,"");for(var d in A)updateStyle(o,d,A[d])}else o.className=i?function getClassName(e,t,n){var i=Array.from(e.classList),r=(t.className||t.class||"").split(" "),o=(n.className||n.class||"").split(" "),A=[];return i.forEach((function(e){o.indexOf(e)>-1?(A.push(e),o=o.filter((function(t){return t!==e}))):-1===r.indexOf(e)&&A.push(e)})),(A=[].concat((0,u.Z)(A),(0,u.Z)(o))).join(" ")}(o,i,r):A}t.Z=function reactifyWebComponent(e){var t=function(t){(0,c.Z)(Index,t);var n=_createSuper(Index);function Index(e){var t;return(0,A.Z)(this,Index),(t=n.call(this,e)).eventHandlers=[],t.ref=(0,d.createRef)(),t}return(0,a.Z)(Index,[{"key":"update","value":function update(t){var n=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(i){"children"===i||"key"===i||i in n.props||updateProp(n,e,i,t,n.props)})),Object.keys(this.props).forEach((function(i){updateProp(n,e,i,t,n.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,o.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var n=(0,r.Z)(t,2),i=n[0],o=n[1];e.ref.current&&e.ref.current.removeEventListener(i,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,n=t.children,i=t.dangerouslySetInnerHTML,r={"ref":this.ref};return i&&(r.dangerouslySetInnerHTML=i),(0,d.createElement)(e,r,n)}}]),Index}(d.Component);return d.forwardRef((function(e,n){return d.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":n}))}))}},"8862":function(e,t,n){n.d(t,{"a":function(){return r},"$":function(){return o}});var i=n(7255),r=(0,i.tA)("openSetting"),o=(0,i.tA)("getSetting")},"4371":function(e,t,n){n.d(t,{"Zk":function(){return b},"Cy":function(){return v},"QP":function(){return y},"K4":function(){return I},"CF":function(){return h}});var i=n(8548),r=n(5639),o=n(7255),A=n(4388),a=n(6830),c=n(8652),s=function noop(){},l=function(){function ActionSheet(){(0,a.Z)(this,ActionSheet),this.options={"itemList":[],"itemColor":"#000000","success":s,"fail":s,"complete":s},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0","background":"rgba(0,0,0,0.6)"},"actionSheetStyle":{"z-index":"4999","position":"fixed","left":"0","bottom":"0","-webkit-transform":"translate(0, 100%)","transform":"translate(0, 100%)","width":"100%","line-height":"1.6","background":"#EFEFF4","-webkit-transition":"-webkit-transform .3s","transition":"transform .3s"},"menuStyle":{"background-color":"#FCFCFD"},"cellStyle":{"position":"relative","padding":"10px 0","text-align":"center","font-size":"18px"},"cancelStyle":{"margin-top":"6px","padding":"10px 0","text-align":"center","font-size":"18px","color":"#000000","background-color":"#FCFCFD"}},this.lastConfig={}}return(0,c.Z)(ActionSheet,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i=e.style,r=i.maskStyle,A=i.actionSheetStyle,a=i.menuStyle,c=i.cellStyle,s=i.cancelStyle,l=Object.assign(Object.assign({},e.options),t);e.lastConfig=l,e.el=document.createElement("div"),e.el.className="taro__actionSheet",e.el.style.opacity="0",e.el.style.transition="opacity 0.2s linear";var u=document.createElement("div");u.setAttribute("style",(0,o.b9)(r)),e.actionSheet=document.createElement("div"),e.actionSheet.setAttribute("style",(0,o.b9)(A)),e.menu=document.createElement("div"),e.menu.setAttribute("style",(0,o.b9)(Object.assign(Object.assign({},a),{"color":l.itemColor}))),e.cells=l.itemList.map((function(t,i){var r=document.createElement("div");return r.className="taro-actionsheet__cell",r.setAttribute("style",(0,o.b9)(c)),r.textContent=t,r.dataset.tapIndex="".concat(i),r.onclick=function(t){e.hide();var i=t.currentTarget,r=Number(null==i?void 0:i.dataset.tapIndex)||0;n(r)},r})),e.cancel=document.createElement("div"),e.cancel.setAttribute("style",(0,o.b9)(s)),e.cancel.textContent="取消",e.cells.forEach((function(t){return e.menu.appendChild(t)})),e.actionSheet.appendChild(e.menu),e.actionSheet.appendChild(e.cancel),e.el.appendChild(u),e.el.appendChild(e.actionSheet);var d=function cb(){e.hide(),n("cancel")};u.onclick=d,e.cancel.onclick=d,document.body.appendChild(e.el),setTimeout((function(){e.el.style.opacity="1",(0,o.B2)(e.actionSheet,"translate(0, 0)")}),0)}))}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i=Object.assign(Object.assign({},e.options),t);e.lastConfig=i,e.hideOpacityTimer&&clearTimeout(e.hideOpacityTimer),e.hideDisplayTimer&&clearTimeout(e.hideDisplayTimer),i.itemColor&&(e.menu.style.color=i.itemColor);var r=e.style.cellStyle;i.itemList.forEach((function(t,i){var A;e.cells[i]?A=e.cells[i]:((A=document.createElement("div")).className="taro-actionsheet__cell",A.setAttribute("style",(0,o.b9)(r)),A.dataset.tapIndex="".concat(i),e.cells.push(A),e.menu.appendChild(A)),A.textContent=t,A.onclick=function(t){e.hide();var i=t.currentTarget,r=Number(null==i?void 0:i.dataset.tapIndex)||0;n(r)}}));var A=e.cells.length,a=i.itemList.length;if(A>a){for(var c=a;c<A;c++)e.menu.removeChild(e.cells[c]);e.cells.splice(a)}e.el.style.display="block",setTimeout((function(){e.el.style.opacity="1",(0,o.B2)(e.actionSheet,"translate(0, 0)")}),0)}))}},{"key":"hide","value":function hide(){var e=this;this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",(0,o.B2)(e.actionSheet,"translate(0, 100%)"),e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),200)}),0)}}]),ActionSheet}(),u=function(){function Modal(){(0,a.Z)(this,Modal),this.options={"title":"","content":"","showCancel":!0,"cancelText":"取消","cancelColor":"#000000","confirmText":"确定","confirmColor":"#3CC51F"},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0","background":"rgba(0,0,0,0.6)"},"modalStyle":{"z-index":"4999","position":"fixed","top":"50%","left":"50%","transform":"translate(-50%, -50%)","width":"80%","max-width":"300px","border-radius":"3px","text-align":"center","line-height":"1.6","overflow":"hidden","background":"#FFFFFF"},"titleStyle":{"padding":"20px 24px 9px","font-size":"18px"},"textStyle":{"padding":"0 24px 12px","min-height":"40px","font-size":"15px","line-height":"1.3","color":"#808080"},"footStyle":{"position":"relative","line-height":"48px","font-size":"18px","display":"flex"},"btnStyle":{"position":"relative","-webkit-box-flex":"1","-webkit-flex":"1","flex":"1"}}}return(0,c.Z)(Modal,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i=e.style,r=i.maskStyle,A=i.modalStyle,a=i.titleStyle,c=i.textStyle,s=i.footStyle,l=i.btnStyle,u=Object.assign(Object.assign({},e.options),t);e.el=document.createElement("div"),e.el.className="taro__modal",e.el.style.opacity="0",e.el.style.transition="opacity 0.2s linear";var d=document.createElement("div");d.className="taro-modal__mask",d.setAttribute("style",(0,o.b9)(r));var f=document.createElement("div");f.className="taro-modal__content",f.setAttribute("style",(0,o.b9)(A));var m=u.title?a:Object.assign(Object.assign({},a),{"display":"none"});e.title=document.createElement("div"),e.title.className="taro-modal__title",e.title.setAttribute("style",(0,o.b9)(m)),e.title.textContent=u.title;var p=u.title?c:Object.assign(Object.assign({},c),{"padding":"40px 20px 26px","color":"#353535"});e.text=document.createElement("div"),e.text.className="taro-modal__text",e.text.setAttribute("style",(0,o.b9)(p)),e.text.textContent=u.content;var g=document.createElement("div");g.className="taro-modal__foot",g.setAttribute("style",(0,o.b9)(s));var h=Object.assign(Object.assign({},l),{"color":u.cancelColor,"display":u.showCancel?"block":"none"});e.cancel=document.createElement("div"),e.cancel.className="taro-model__btn taro-model__cancel",e.cancel.setAttribute("style",(0,o.b9)(h)),e.cancel.textContent=u.cancelText,e.cancel.onclick=function(){e.hide(),n("cancel")},e.confirm=document.createElement("div"),e.confirm.className="taro-model__btn taro-model__confirm",e.confirm.setAttribute("style",(0,o.b9)(l)),e.confirm.style.color=u.confirmColor,e.confirm.textContent=u.confirmText,e.confirm.onclick=function(){e.hide(),n("confirm")},g.appendChild(e.cancel),g.appendChild(e.confirm),f.appendChild(e.title),f.appendChild(e.text),f.appendChild(g),e.el.appendChild(d),e.el.appendChild(f),document.body.appendChild(e.el),setTimeout((function(){e.el.style.opacity="1"}),0)}))}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i=Object.assign(Object.assign({},e.options),t);e.hideOpacityTimer&&clearTimeout(e.hideOpacityTimer),e.hideDisplayTimer&&clearTimeout(e.hideDisplayTimer);var r=e.style.textStyle;if(i.title)e.title.textContent=i.title,e.title.style.display="block",e.text.setAttribute("style",(0,o.b9)(r));else{e.title.textContent="",e.title.style.display="none";var A=Object.assign(Object.assign({},r),{"padding":"40px 20px 26px","color":"#353535"});e.text.setAttribute("style",(0,o.b9)(A))}e.text.textContent=i.content||"",e.cancel.style.display=i.showCancel?"block":"none",e.cancel.textContent=i.cancelText||"",e.cancel.style.color=i.cancelColor||"",e.confirm.textContent=i.confirmText||"",e.confirm.style.color=i.confirmColor||"",e.cancel.onclick=function(){e.hide(),n("cancel")},e.confirm.onclick=function(){e.hide(),n("confirm")},e.el.style.display="block",setTimeout((function(){e.el.style.opacity="1"}),0)}))}},{"key":"hide","value":function hide(){var e=this;this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),200)}),0)}}]),Modal}(),d=function(){function Toast(){(0,a.Z)(this,Toast),this.options={"title":"","icon":"none","image":"","duration":1500,"mask":!1},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0"},"toastStyle":{"z-index":"5000","box-sizing":"border-box","display":"flex","flex-direction":"column","justify-content":"center","-webkit-justify-content":"center","position":"fixed","top":"50%","left":"50%","min-width":"120px","max-width":"200px","min-height":"120px","padding":"15px","transform":"translate(-50%, -50%)","border-radius":"5px","text-align":"center","line-height":"1.6","color":"#FFFFFF","background":"rgba(17, 17, 17, 0.7)"},"successStyle":{"margin":"6px auto","width":"38px","height":"38px","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTQ4OTYzMjA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNDgiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMjE5Ljk1MiA1MTIuNTc2bDIxMC40MzIgMjEwLjQzMi00NS4yNDggNDUuMjU2LTIxMC40MzItMjEwLjQzMnoiIHAtaWQ9IjQzNDkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNzk5LjY3MiAyNjIuMjY0bDQ1LjI1NiA0NS4yNTYtNDYwLjQ2NCA0NjAuNDY0LTQ1LjI1Ni00NS4yNTZ6IiBwLWlkPSI0MzUwIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat","background-size":"100%"},"errrorStyle":{"margin":"6px auto","width":"38px","height":"38px","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTUxMDU1MTgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0MDc2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNTggNjQgNjQgMjY0LjU4IDY0IDUxMnMyMDAuNTggNDQ4IDQ0OCA0NDggNDQ4LTIwMC41OCA0NDgtNDQ4Uzc1OS40MiA2NCA1MTIgNjR6IG0wIDc1MmEzNiAzNiAwIDEgMSAzNi0zNiAzNiAzNiAwIDAgMS0zNiAzNnogbTUxLjgzLTU1MS45NUw1NDggNjM2YTM2IDM2IDAgMCAxLTcyIDBsLTE1LjgzLTM3MS45NWMtMC4xLTEuMzMtMC4xNy0yLjY4LTAuMTctNC4wNWE1MiA1MiAwIDAgMSAxMDQgMGMwIDEuMzctMC4wNyAyLjcyLTAuMTcgNC4wNXoiIHAtaWQ9IjE0MDc3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat","background-size":"100%"},"loadingStyle":{"margin":"6px auto","width":"38px","height":"38px","-webkit-animation":"taroLoading 1s steps(12, end) infinite","animation":"taroLoading 1s steps(12, end) infinite","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat","background-size":"100%"},"imageStyle":{"margin":"6px auto","width":"40px","height":"40px","background":"transparent no-repeat","background-size":"100%"},"textStyle":{"margin":"0","font-size":"16px"}}}return(0,c.Z)(Toast,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toast",i=this.style,r=i.maskStyle,A=i.toastStyle,a=i.successStyle,c=i.errrorStyle,s=i.loadingStyle,l=i.imageStyle,u=i.textStyle,d=Object.assign(Object.assign(Object.assign({},this.options),t),{"_type":n});if(this.el=document.createElement("div"),this.el.className="taro__toast",this.el.style.opacity="0",this.el.style.transition="opacity 0.1s linear",this.mask=document.createElement("div"),this.mask.setAttribute("style",(0,o.b9)(r)),this.mask.style.display=d.mask?"block":"none",this.icon=document.createElement("p"),d.image)this.icon.setAttribute("style",(0,o.b9)(Object.assign(Object.assign({},l),{"background-image":"url(".concat(d.image,")")})));else{var f="loading"===d.icon?s:"error"===d.icon?c:a;this.icon.setAttribute("style",(0,o.b9)(Object.assign(Object.assign({},f),"none"===d.icon?{"display":"none"}:{})))}return this.toast=document.createElement("div"),this.toast.setAttribute("style",(0,o.b9)(Object.assign(Object.assign({},A),"none"===d.icon?{"min-height":"0","padding":"10px 15px"}:{}))),this.title=document.createElement("p"),this.title.setAttribute("style",(0,o.b9)(u)),this.title.textContent=d.title,this.toast.appendChild(this.icon),this.toast.appendChild(this.title),this.el.appendChild(this.mask),this.el.appendChild(this.toast),document.body.appendChild(this.el),setTimeout((function(){e.el.style.opacity="1"}),0),this.type=d._type,d.duration>=0&&this.hide(d.duration,this.type),""}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toast",i=Object.assign(Object.assign(Object.assign({},this.options),t),{"_type":n});this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.title.textContent=i.title||"",this.mask.style.display=i.mask?"block":"none";var r=this.style,A=r.toastStyle,a=r.successStyle,c=r.errrorStyle,s=r.loadingStyle,l=r.imageStyle;if(i.image)this.icon.setAttribute("style",(0,o.b9)(Object.assign(Object.assign({},l),{"background-image":"url(".concat(i.image,")")})));else if(!i.image&&i.icon){var u="loading"===i.icon?s:"error"===i.icon?c:a;this.icon.setAttribute("style",(0,o.b9)(Object.assign(Object.assign({},u),"none"===i.icon?{"display":"none"}:{})))}return this.toast.setAttribute("style",(0,o.b9)(Object.assign(Object.assign({},A),"none"===i.icon?{"min-height":"0","padding":"10px 15px"}:{}))),this.el.style.display="block",setTimeout((function(){e.el.style.opacity="1"}),0),this.type=i._type,i.duration>=0&&this.hide(i.duration,this.type),""}},{"key":"hide","value":function hide(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;this.type===n&&(this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),100)}),t))}}]),Toast}(),__awaiter=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i.throw(e))}catch(e){o(e)}}function step(e){e.done?r(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))},f="default";function init(e){if("ready"!==f){var t=e.createElement("style");t.textContent='@font-face{font-weight:normal;font-style:normal;font-family:"taro";src:url("data:application/x-font-ttf;charset=utf-8;base64, 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") format("truetype");}@-webkit-keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}@keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}.taro-modal__foot:after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);} .taro-model__btn:active {background-color: #EEEEEE}.taro-model__btn:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;width: 1px;bottom: 0;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}.taro-actionsheet__cell:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #e5e5e5;color: #e5e5e5;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}',e.querySelector("head").appendChild(t),f="ready"}}var m=new d,p=new u,g=new l,h=function showToast(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"title":""};init(document);var t=e=Object.assign({"title":"","icon":"success","image":"","duration":1500,"mask":!1},e),n=t.success,i=t.fail,r=t.complete,a=new A.N({"name":"showToast","success":n,"fail":i,"complete":r});if("string"!=typeof e.title)return a.fail({"errMsg":(0,o.Hl)({"para":"title","correct":"String","wrong":e.title})});if("number"!=typeof e.duration)return a.fail({"errMsg":(0,o.Hl)({"para":"duration","correct":"Number","wrong":e.duration})});e.image&&"string"!=typeof e.image&&(e.image=""),e.mask=!!e.mask;var c="";return c=m.el?m.show(e,"toast"):m.create(e,"toast"),a.success({"errMsg":c})},y=function showLoading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"title":""};init(document);var t=e=Object.assign({"title":"","mask":!1},e),n=t.success,i=t.fail,r=t.complete,a=new A.N({"name":"showLoading","success":n,"fail":i,"complete":r}),c={"icon":"loading","image":"","duration":-1};if("string"!=typeof(e=Object.assign({},e,c)).title)return a.fail({"errMsg":(0,o.Hl)({"para":"title","correct":"String","wrong":e.title})});e.mask=!!e.mask;var s="";return s=m.el?m.show(e,"loading"):m.create(e,"loading"),a.success({"errMsg":s})},b=function hideLoading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,i=e.complete,r=new A.N({"name":"hideLoading","success":t,"fail":n,"complete":i});return m.el?(m.hide(0,"loading"),r.success()):r.success()},I=function showModal(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return __awaiter(void 0,void 0,void 0,(0,i.Z)().mark((function _callee(){var t,n,r,a,c,s,l;return(0,i.Z)().wrap((function _callee$(i){for(;;)switch(i.prev=i.next){case 0:if(init(document),e=Object.assign({"title":"","content":"","showCancel":!0,"cancelText":"取消","cancelColor":"#000000","confirmText":"确定","confirmColor":"#3CC51F"},e),n=(t=e).success,r=t.fail,a=t.complete,c=new A.N({"name":"showModal","success":n,"fail":r,"complete":a}),"string"==typeof e.title){i.next=6;break}return i.abrupt("return",c.fail({"errMsg":(0,o.Hl)({"para":"title","correct":"String","wrong":e.title})}));case 6:if("string"==typeof e.content){i.next=8;break}return i.abrupt("return",c.fail({"errMsg":(0,o.Hl)({"para":"content","correct":"String","wrong":e.content})}));case 8:if("string"==typeof e.cancelText){i.next=10;break}return i.abrupt("return",c.fail({"errMsg":(0,o.Hl)({"para":"cancelText","correct":"String","wrong":e.cancelText})}));case 10:if(!(e.cancelText.replace(/[\u0391-\uFFE5]/g,"aa").length>8)){i.next=12;break}return i.abrupt("return",c.fail({"errMsg":"cancelText length should not larger then 4 Chinese characters"}));case 12:if("string"==typeof e.confirmText){i.next=14;break}return i.abrupt("return",c.fail({"errMsg":(0,o.Hl)({"para":"confirmText","correct":"String","wrong":e.confirmText})}));case 14:if(!(e.confirmText.replace(/[\u0391-\uFFE5]/g,"aa").length>8)){i.next=16;break}return i.abrupt("return",c.fail({"errMsg":"confirmText length should not larger then 4 Chinese characters"}));case 16:if("string"==typeof e.cancelColor){i.next=18;break}return i.abrupt("return",c.fail({"errMsg":(0,o.Hl)({"para":"cancelColor","correct":"String","wrong":e.cancelColor})}));case 18:if("string"==typeof e.confirmColor){i.next=20;break}return i.abrupt("return",c.fail({"errMsg":(0,o.Hl)({"para":"confirmColor","correct":"String","wrong":e.confirmColor})}));case 20:if(e.showCancel=!!e.showCancel,s="",p.el){i.next=28;break}return i.next=25,p.create(e);case 25:s=i.sent,i.next=31;break;case 28:return i.next=30,p.show(e);case 30:s=i.sent;case 31:return(l={"cancel":!1,"confirm":!1})[s]=!0,i.abrupt("return",c.success(l));case 34:case"end":return i.stop()}}),_callee)})))};var v=function showActionSheet(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"itemList":[]};return __awaiter(void 0,void 0,void 0,(0,i.Z)().mark((function _callee2(){var t,n,r,a,c,s,l;return(0,i.Z)().wrap((function _callee2$(i){for(;;)switch(i.prev=i.next){case 0:if(init(document),e=Object.assign({"itemColor":"#000000","itemList":[]},e),n=(t=e).success,r=t.fail,a=t.complete,c=new A.N({"name":"showActionSheet","success":n,"fail":r,"complete":a}),Array.isArray(e.itemList)){i.next=6;break}return i.abrupt("return",c.fail({"errMsg":(0,o.Hl)({"para":"itemList","correct":"Array","wrong":e.itemList})}));case 6:if(!(e.itemList.length<1)){i.next=8;break}return i.abrupt("return",c.fail({"errMsg":"parameter error: parameter.itemList should have at least 1 item"}));case 8:if(!(e.itemList.length>6)){i.next=10;break}return i.abrupt("return",c.fail({"errMsg":"parameter error: parameter.itemList should not be large than 6"}));case 10:s=0;case 11:if(!(s<e.itemList.length)){i.next=17;break}if("string"==typeof e.itemList[s]){i.next=14;break}return i.abrupt("return",c.fail({"errMsg":(0,o.Hl)({"para":"itemList[".concat(s,"]"),"correct":"String","wrong":e.itemList[s]})}));case 14:s++,i.next=11;break;case 17:if("string"==typeof e.itemColor){i.next=19;break}return i.abrupt("return",c.fail({"errMsg":(0,o.Hl)({"para":"itemColor","correct":"String","wrong":e.itemColor})}));case 19:if(l="",g.el){i.next=26;break}return i.next=23,g.create(e);case 23:l=i.sent,i.next=29;break;case 26:return i.next=28,g.show(e);case 28:l=i.sent;case 29:if("string"!=typeof l){i.next=33;break}return i.abrupt("return",c.fail({"errMsg":l}));case 33:return i.abrupt("return",c.success({"tapIndex":l}));case 34:case"end":return i.stop()}}),_callee2)})))};r.Z.eventCenter.on("__taroRouterChange",(function(){!function hideToast(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,i=e.complete,r=new A.N({"name":"hideToast","success":t,"fail":n,"complete":i});m.el?(m.hide(0,"toast"),r.success()):r.success()}(),b(),function hideModal(){p.el&&p.hide()}()}));(0,o.tA)("enableAlertBeforeUnload"),(0,o.tA)("disableAlertBeforeUnload")},"832":function(e,t,n){n.d(t,{"W":function(){return o},"F":function(){return A}});var i=n(5639),r=n(4388),o=function startPullDownRefresh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,o=e.complete,A=new r.N({"name":"startPullDownRefresh","success":t,"fail":n,"complete":o});return new Promise((function(e,t){i.Z.eventCenter.trigger("__taroStartPullDownRefresh",{"successHandler":function successHandler(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return A.success(t,e)},"errorHandler":function errorHandler(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return A.fail(e,t)}})}))},A=function stopPullDownRefresh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,o=e.complete,A=new r.N({"name":"stopPullDownRefresh","success":t,"fail":n,"complete":o});return new Promise((function(e,t){i.Z.eventCenter.trigger("__taroStopPullDownRefresh",{"successHandler":function successHandler(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return A.success(t,e)},"errorHandler":function errorHandler(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return A.fail(e,t)}})}))}},"8502":function(e,t,n){var i=n(3464),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var i,o={},s=null,l=null;for(i in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)A.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{"$$typeof":r,"type":e,"key":s,"ref":l,"props":o,"_owner":a.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},"2922":function(e,t,n){e.exports=n(8502)},"247":function(e,t,n){n.r(t),n.d(t,{"default":function(){return u}});var i=n(7255),r=(0,i.tA)("setBackgroundTextStyle"),o=(0,i.tA)("setBackgroundColor"),A=n(832),a=n(4371),c=n(5403),s=n(4898),l=n(2922),u=function Index(){return(0,l.jsxs)(c.G7,{"className":"api-page","children":[(0,l.jsx)(c.zx,{"className":"btn","type":"primary","onClick":function onClick(){r({"textStyle":"dark"}).then((function(){(0,A.W)();var e=setTimeout((function(){(0,A.F)(),e&&clearTimeout(e)}),2e3)})).catch((function(e){console.log(e),(0,a.CF)({"title":"出错了","icon":"none"})}))},"children":"setBackgroundTextStyle【iOS】"}),(0,l.jsx)(c.zx,{"className":"btn","type":"primary","onClick":function onClick(){o({"backgroundColor":(0,s.p)()}).then((function(){(0,A.W)();var e=setTimeout((function(){(0,A.F)(),e&&clearTimeout(e)}),2e3)})).catch((function(){(0,a.CF)({"title":"出错了","icon":"none"})}))},"children":"setBackgroundColor【Android】"})]})}},"4898":function(e,t,n){n.d(t,{"$L":function(){return a},"Fj":function(){return c},"Ib":function(){return loadWeb},"tT":function(){return loadMini},"ff":function(){return loadRn},"D5":function(){return hadlePermissionsDeny},"P2":function(){return throttle},"p":function(){return randomColor}});var i=n(5931),r=n(9042),o=n(4371),A=n(8862),a=i.ZPm.getEnv()===i.ZPm.ENV_TYPE.WEB,c=i.ZPm.getEnv()===i.ZPm.ENV_TYPE.RN;function loadWeb(e){var t=e.url,n=e.title,i=e.right,o=e.open,A=e.certified,c=void 0===A||A;a?window.location.href=t:(0,r.T8)({"url":"/pages/webview/index?certified=".concat(c,"&title=").concat(n,"&link=").concat(encodeURIComponent(t)).concat(i?"&right=".concat(i):"").concat(o?"&open=".concat(encodeURIComponent(o)):"")})}function loadMini(e){var t=e.url;(0,r.T8)({"url":"/pages/about/mini?src="+encodeURIComponent(t)})}function loadRn(e){var t=e.android,n=e.ios;(0,r.T8)({"url":"/pages/about/rn?android="+encodeURIComponent(t)+"&ios="+encodeURIComponent(n)})}function hadlePermissionsDeny(e){var t=e.perssionText;(0,o.K4)({"title":"提示","content":"请在“设置-隐私-".concat(t,"”选项中，允许 Taro 访问你的").concat(t,"。"),"confirmColor":"#6190E8","success":function success(e){e.confirm&&(0,A.a)()}})}function throttle(e,t){var n=0;return function(){var i=Date.now(),r=this,o=arguments;i-n>t&&(e.apply(r,o),n=i)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}}]);