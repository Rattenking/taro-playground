/*! For license information please see 6863.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6863],{"5403":function(e,t,n){n.d(t,{"ub":function(){return i},"Gt":function(){return A},"_z":function(){return o},"pf":function(){return a},"tq":function(){return c},"t3":function(){return s},"G7":function(){return l},"JO":function(){return u},"Ex":function(){return d},"Ho":function(){return p},"xv":function(){return m},"zx":function(){return f},"XZ":function(){return g},"cO":function(){return h},"l0":function(){return y},"__":function(){return b},"cW":function(){return I},"Nf":function(){return x},"$o":function(){return v},"Y8":function(){return w},"FX":function(){return S},"iR":function(){return C},"rs":function(){return k},"gx":function(){return j},"V1":function(){return Z},"Ee":function(){return N},"nk":function(){return M},"kh":function(){return T}});n(3464);var r=n(2214),i=((0,r.Z)("taro-cover-image-core"),(0,r.Z)("taro-cover-view-core"),(0,r.Z)("taro-match-media-core"),(0,r.Z)("taro-movable-area-core")),A=(0,r.Z)("taro-movable-view-core"),o=(0,r.Z)("taro-page-container-core"),a=((0,r.Z)("taro-root-portal-core"),(0,r.Z)("taro-scroll-view-core")),c=((0,r.Z)("taro-share-element-core"),(0,r.Z)("taro-swiper-core")),s=(0,r.Z)("taro-swiper-item-core"),l=(0,r.Z)("taro-view-core"),u=(0,r.Z)("taro-icon-core"),d=(0,r.Z)("taro-progress-core"),p=(0,r.Z)("taro-rich-text-core"),m=(0,r.Z)("taro-text-core"),f=(0,r.Z)("taro-button-core"),g=(0,r.Z)("taro-checkbox-core"),h=(0,r.Z)("taro-checkbox-group-core"),y=((0,r.Z)("taro-editor-core"),(0,r.Z)("taro-form-core")),b=((0,r.Z)("taro-keyboard-accessory-core"),(0,r.Z)("taro-label-core")),I=(0,r.Z)("taro-picker-core"),x=(0,r.Z)("taro-picker-view-core"),v=(0,r.Z)("taro-picker-view-column-core"),w=(0,r.Z)("taro-radio-core"),S=(0,r.Z)("taro-radio-group-core"),C=(0,r.Z)("taro-slider-core"),k=(0,r.Z)("taro-switch-core"),j=(0,r.Z)("taro-textarea-core"),Z=((0,r.Z)("taro-functional-page-navigator-core"),(0,r.Z)("taro-navigator-core"),(0,r.Z)("taro-navigation-bar-core"),(0,r.Z)("taro-audio-core"),(0,r.Z)("taro-camera-core")),N=(0,r.Z)("taro-image-core"),M=((0,r.Z)("taro-live-player-core"),(0,r.Z)("taro-live-pusher-core"),(0,r.Z)("taro-video-core")),T=((0,r.Z)("taro-voip-room-core"),(0,r.Z)("taro-map-core"),(0,r.Z)("taro-canvas-core"),(0,r.Z)("taro-ad-core"),(0,r.Z)("taro-ad-custom-core"),(0,r.Z)("taro-official-account-core"),(0,r.Z)("taro-open-data-core"),(0,r.Z)("taro-web-view-core"));(0,r.Z)("taro-page-meta-core"),(0,r.Z)("taro-custom-wrapper-core")},"2214":function(e,t,n){var r=n(5827),i=n(1760),A=n(517),o=n(6830),a=n(8652),c=n(6014),s=n(3317),l=n(5935),u=n(766),d=n(3464);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}d.createElement;var p="taro-scroll-view-core",m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,n){/^--/.test(t)?e.style.setProperty(t,n):"number"!=typeof n||m.test(t)?e.style[t]=n:e.style[t]=n+"px"}function updateProp(e,t,n,r,i){var A=e.ref.current,o=i[n],a=r?r[n]:void 0;if("children"!==n)if("classname"!==n.toLowerCase()){if("style"!==n){if(/^data-.+/.test(n)&&A.setAttribute(n,o),t===p){if("scrollTop"===n)return void(A.mpScrollTop=o);if("scrollLeft"===n)return void(A.mpScrollLeft=o);if("scrollIntoView"===n)return void(A.mpScrollIntoView=o)}if("function"==typeof o&&n.match(/^on[A-Z]/)){var c=n.substr(2).toLowerCase(),s=o;return t===p&&"scroll"===c&&(s=function fn(e){e instanceof CustomEvent&&o.apply(null,Array.from(arguments))}),e.eventHandlers.push([c,s]),A.addEventListener(c,s)}return"string"==typeof o||"number"==typeof o?(A.setAttribute(n,o),void(A[n]=o)):"boolean"==typeof o?o?(A[n]=!0,A.setAttribute(n,o)):(A[n]=!1,A.removeAttribute(n)):void(A[n]=o)}if("string"==typeof o)return void A.setAttribute(n,o);if(!o)return void A.removeAttribute(n);if(r)if("string"==typeof a)A.style.cssText="";else for(var l in a)updateStyle(A,l,"");for(var d in o)updateStyle(A,d,o[d])}else A.className=r?function getClassName(e,t,n){var r=Array.from(e.classList),i=(t.className||t.class||"").split(" "),A=(n.className||n.class||"").split(" "),o=[];return r.forEach((function(e){A.indexOf(e)>-1?(o.push(e),A=A.filter((function(t){return t!==e}))):-1===i.indexOf(e)&&o.push(e)})),(o=[].concat((0,u.Z)(o),(0,u.Z)(A))).join(" ")}(A,r,i):o}t.Z=function reactifyWebComponent(e){var t=function(t){(0,c.Z)(Index,t);var n=_createSuper(Index);function Index(e){var t;return(0,o.Z)(this,Index),(t=n.call(this,e)).eventHandlers=[],t.ref=(0,d.createRef)(),t}return(0,a.Z)(Index,[{"key":"update","value":function update(t){var n=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(r){"children"===r||"key"===r||r in n.props||updateProp(n,e,r,t,n.props)})),Object.keys(this.props).forEach((function(r){updateProp(n,e,r,t,n.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,A.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var n=(0,i.Z)(t,2),r=n[0],A=n[1];e.ref.current&&e.ref.current.removeEventListener(r,A)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,n=t.children,r=t.dangerouslySetInnerHTML,i={"ref":this.ref};return r&&(i.dangerouslySetInnerHTML=r),(0,d.createElement)(e,i,n)}}]),Index}(d.Component);return d.forwardRef((function(e,n){return d.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":n}))}))}},"4371":function(e,t,n){n.d(t,{"Zk":function(){return b},"Cy":function(){return x},"QP":function(){return y},"K4":function(){return I},"CF":function(){return h}});var r=n(8548),i=n(5639),A=n(7255),o=n(4388),a=n(6830),c=n(8652),s=function noop(){},l=function(){function ActionSheet(){(0,a.Z)(this,ActionSheet),this.options={"itemList":[],"itemColor":"#000000","success":s,"fail":s,"complete":s},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0","background":"rgba(0,0,0,0.6)"},"actionSheetStyle":{"z-index":"4999","position":"fixed","left":"0","bottom":"0","-webkit-transform":"translate(0, 100%)","transform":"translate(0, 100%)","width":"100%","line-height":"1.6","background":"#EFEFF4","-webkit-transition":"-webkit-transform .3s","transition":"transform .3s"},"menuStyle":{"background-color":"#FCFCFD"},"cellStyle":{"position":"relative","padding":"10px 0","text-align":"center","font-size":"18px"},"cancelStyle":{"margin-top":"6px","padding":"10px 0","text-align":"center","font-size":"18px","color":"#000000","background-color":"#FCFCFD"}},this.lastConfig={}}return(0,c.Z)(ActionSheet,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var r=e.style,i=r.maskStyle,o=r.actionSheetStyle,a=r.menuStyle,c=r.cellStyle,s=r.cancelStyle,l=Object.assign(Object.assign({},e.options),t);e.lastConfig=l,e.el=document.createElement("div"),e.el.className="taro__actionSheet",e.el.style.opacity="0",e.el.style.transition="opacity 0.2s linear";var u=document.createElement("div");u.setAttribute("style",(0,A.b9)(i)),e.actionSheet=document.createElement("div"),e.actionSheet.setAttribute("style",(0,A.b9)(o)),e.menu=document.createElement("div"),e.menu.setAttribute("style",(0,A.b9)(Object.assign(Object.assign({},a),{"color":l.itemColor}))),e.cells=l.itemList.map((function(t,r){var i=document.createElement("div");return i.className="taro-actionsheet__cell",i.setAttribute("style",(0,A.b9)(c)),i.textContent=t,i.dataset.tapIndex="".concat(r),i.onclick=function(t){e.hide();var r=t.currentTarget,i=Number(null==r?void 0:r.dataset.tapIndex)||0;n(i)},i})),e.cancel=document.createElement("div"),e.cancel.setAttribute("style",(0,A.b9)(s)),e.cancel.textContent="取消",e.cells.forEach((function(t){return e.menu.appendChild(t)})),e.actionSheet.appendChild(e.menu),e.actionSheet.appendChild(e.cancel),e.el.appendChild(u),e.el.appendChild(e.actionSheet);var d=function cb(){e.hide(),n("cancel")};u.onclick=d,e.cancel.onclick=d,document.body.appendChild(e.el),setTimeout((function(){e.el.style.opacity="1",(0,A.B2)(e.actionSheet,"translate(0, 0)")}),0)}))}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var r=Object.assign(Object.assign({},e.options),t);e.lastConfig=r,e.hideOpacityTimer&&clearTimeout(e.hideOpacityTimer),e.hideDisplayTimer&&clearTimeout(e.hideDisplayTimer),r.itemColor&&(e.menu.style.color=r.itemColor);var i=e.style.cellStyle;r.itemList.forEach((function(t,r){var o;e.cells[r]?o=e.cells[r]:((o=document.createElement("div")).className="taro-actionsheet__cell",o.setAttribute("style",(0,A.b9)(i)),o.dataset.tapIndex="".concat(r),e.cells.push(o),e.menu.appendChild(o)),o.textContent=t,o.onclick=function(t){e.hide();var r=t.currentTarget,i=Number(null==r?void 0:r.dataset.tapIndex)||0;n(i)}}));var o=e.cells.length,a=r.itemList.length;if(o>a){for(var c=a;c<o;c++)e.menu.removeChild(e.cells[c]);e.cells.splice(a)}e.el.style.display="block",setTimeout((function(){e.el.style.opacity="1",(0,A.B2)(e.actionSheet,"translate(0, 0)")}),0)}))}},{"key":"hide","value":function hide(){var e=this;this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",(0,A.B2)(e.actionSheet,"translate(0, 100%)"),e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),200)}),0)}}]),ActionSheet}(),u=function(){function Modal(){(0,a.Z)(this,Modal),this.options={"title":"","content":"","showCancel":!0,"cancelText":"取消","cancelColor":"#000000","confirmText":"确定","confirmColor":"#3CC51F"},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0","background":"rgba(0,0,0,0.6)"},"modalStyle":{"z-index":"4999","position":"fixed","top":"50%","left":"50%","transform":"translate(-50%, -50%)","width":"80%","max-width":"300px","border-radius":"3px","text-align":"center","line-height":"1.6","overflow":"hidden","background":"#FFFFFF"},"titleStyle":{"padding":"20px 24px 9px","font-size":"18px"},"textStyle":{"padding":"0 24px 12px","min-height":"40px","font-size":"15px","line-height":"1.3","color":"#808080"},"footStyle":{"position":"relative","line-height":"48px","font-size":"18px","display":"flex"},"btnStyle":{"position":"relative","-webkit-box-flex":"1","-webkit-flex":"1","flex":"1"}}}return(0,c.Z)(Modal,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var r=e.style,i=r.maskStyle,o=r.modalStyle,a=r.titleStyle,c=r.textStyle,s=r.footStyle,l=r.btnStyle,u=Object.assign(Object.assign({},e.options),t);e.el=document.createElement("div"),e.el.className="taro__modal",e.el.style.opacity="0",e.el.style.transition="opacity 0.2s linear";var d=document.createElement("div");d.className="taro-modal__mask",d.setAttribute("style",(0,A.b9)(i));var p=document.createElement("div");p.className="taro-modal__content",p.setAttribute("style",(0,A.b9)(o));var m=u.title?a:Object.assign(Object.assign({},a),{"display":"none"});e.title=document.createElement("div"),e.title.className="taro-modal__title",e.title.setAttribute("style",(0,A.b9)(m)),e.title.textContent=u.title;var f=u.title?c:Object.assign(Object.assign({},c),{"padding":"40px 20px 26px","color":"#353535"});e.text=document.createElement("div"),e.text.className="taro-modal__text",e.text.setAttribute("style",(0,A.b9)(f)),e.text.textContent=u.content;var g=document.createElement("div");g.className="taro-modal__foot",g.setAttribute("style",(0,A.b9)(s));var h=Object.assign(Object.assign({},l),{"color":u.cancelColor,"display":u.showCancel?"block":"none"});e.cancel=document.createElement("div"),e.cancel.className="taro-model__btn taro-model__cancel",e.cancel.setAttribute("style",(0,A.b9)(h)),e.cancel.textContent=u.cancelText,e.cancel.onclick=function(){e.hide(),n("cancel")},e.confirm=document.createElement("div"),e.confirm.className="taro-model__btn taro-model__confirm",e.confirm.setAttribute("style",(0,A.b9)(l)),e.confirm.style.color=u.confirmColor,e.confirm.textContent=u.confirmText,e.confirm.onclick=function(){e.hide(),n("confirm")},g.appendChild(e.cancel),g.appendChild(e.confirm),p.appendChild(e.title),p.appendChild(e.text),p.appendChild(g),e.el.appendChild(d),e.el.appendChild(p),document.body.appendChild(e.el),setTimeout((function(){e.el.style.opacity="1"}),0)}))}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var r=Object.assign(Object.assign({},e.options),t);e.hideOpacityTimer&&clearTimeout(e.hideOpacityTimer),e.hideDisplayTimer&&clearTimeout(e.hideDisplayTimer);var i=e.style.textStyle;if(r.title)e.title.textContent=r.title,e.title.style.display="block",e.text.setAttribute("style",(0,A.b9)(i));else{e.title.textContent="",e.title.style.display="none";var o=Object.assign(Object.assign({},i),{"padding":"40px 20px 26px","color":"#353535"});e.text.setAttribute("style",(0,A.b9)(o))}e.text.textContent=r.content||"",e.cancel.style.display=r.showCancel?"block":"none",e.cancel.textContent=r.cancelText||"",e.cancel.style.color=r.cancelColor||"",e.confirm.textContent=r.confirmText||"",e.confirm.style.color=r.confirmColor||"",e.cancel.onclick=function(){e.hide(),n("cancel")},e.confirm.onclick=function(){e.hide(),n("confirm")},e.el.style.display="block",setTimeout((function(){e.el.style.opacity="1"}),0)}))}},{"key":"hide","value":function hide(){var e=this;this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),200)}),0)}}]),Modal}(),d=function(){function Toast(){(0,a.Z)(this,Toast),this.options={"title":"","icon":"none","image":"","duration":1500,"mask":!1},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0"},"toastStyle":{"z-index":"5000","box-sizing":"border-box","display":"flex","flex-direction":"column","justify-content":"center","-webkit-justify-content":"center","position":"fixed","top":"50%","left":"50%","min-width":"120px","max-width":"200px","min-height":"120px","padding":"15px","transform":"translate(-50%, -50%)","border-radius":"5px","text-align":"center","line-height":"1.6","color":"#FFFFFF","background":"rgba(17, 17, 17, 0.7)"},"successStyle":{"margin":"6px auto","width":"38px","height":"38px","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTQ4OTYzMjA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNDgiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMjE5Ljk1MiA1MTIuNTc2bDIxMC40MzIgMjEwLjQzMi00NS4yNDggNDUuMjU2LTIxMC40MzItMjEwLjQzMnoiIHAtaWQ9IjQzNDkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNzk5LjY3MiAyNjIuMjY0bDQ1LjI1NiA0NS4yNTYtNDYwLjQ2NCA0NjAuNDY0LTQ1LjI1Ni00NS4yNTZ6IiBwLWlkPSI0MzUwIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat","background-size":"100%"},"errrorStyle":{"margin":"6px auto","width":"38px","height":"38px","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTUxMDU1MTgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0MDc2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNTggNjQgNjQgMjY0LjU4IDY0IDUxMnMyMDAuNTggNDQ4IDQ0OCA0NDggNDQ4LTIwMC41OCA0NDgtNDQ4Uzc1OS40MiA2NCA1MTIgNjR6IG0wIDc1MmEzNiAzNiAwIDEgMSAzNi0zNiAzNiAzNiAwIDAgMS0zNiAzNnogbTUxLjgzLTU1MS45NUw1NDggNjM2YTM2IDM2IDAgMCAxLTcyIDBsLTE1LjgzLTM3MS45NWMtMC4xLTEuMzMtMC4xNy0yLjY4LTAuMTctNC4wNWE1MiA1MiAwIDAgMSAxMDQgMGMwIDEuMzctMC4wNyAyLjcyLTAuMTcgNC4wNXoiIHAtaWQ9IjE0MDc3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat","background-size":"100%"},"loadingStyle":{"margin":"6px auto","width":"38px","height":"38px","-webkit-animation":"taroLoading 1s steps(12, end) infinite","animation":"taroLoading 1s steps(12, end) infinite","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat","background-size":"100%"},"imageStyle":{"margin":"6px auto","width":"40px","height":"40px","background":"transparent no-repeat","background-size":"100%"},"textStyle":{"margin":"0","font-size":"16px"}}}return(0,c.Z)(Toast,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toast",r=this.style,i=r.maskStyle,o=r.toastStyle,a=r.successStyle,c=r.errrorStyle,s=r.loadingStyle,l=r.imageStyle,u=r.textStyle,d=Object.assign(Object.assign(Object.assign({},this.options),t),{"_type":n});if(this.el=document.createElement("div"),this.el.className="taro__toast",this.el.style.opacity="0",this.el.style.transition="opacity 0.1s linear",this.mask=document.createElement("div"),this.mask.setAttribute("style",(0,A.b9)(i)),this.mask.style.display=d.mask?"block":"none",this.icon=document.createElement("p"),d.image)this.icon.setAttribute("style",(0,A.b9)(Object.assign(Object.assign({},l),{"background-image":"url(".concat(d.image,")")})));else{var p="loading"===d.icon?s:"error"===d.icon?c:a;this.icon.setAttribute("style",(0,A.b9)(Object.assign(Object.assign({},p),"none"===d.icon?{"display":"none"}:{})))}return this.toast=document.createElement("div"),this.toast.setAttribute("style",(0,A.b9)(Object.assign(Object.assign({},o),"none"===d.icon?{"min-height":"0","padding":"10px 15px"}:{}))),this.title=document.createElement("p"),this.title.setAttribute("style",(0,A.b9)(u)),this.title.textContent=d.title,this.toast.appendChild(this.icon),this.toast.appendChild(this.title),this.el.appendChild(this.mask),this.el.appendChild(this.toast),document.body.appendChild(this.el),setTimeout((function(){e.el.style.opacity="1"}),0),this.type=d._type,d.duration>=0&&this.hide(d.duration,this.type),""}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toast",r=Object.assign(Object.assign(Object.assign({},this.options),t),{"_type":n});this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.title.textContent=r.title||"",this.mask.style.display=r.mask?"block":"none";var i=this.style,o=i.toastStyle,a=i.successStyle,c=i.errrorStyle,s=i.loadingStyle,l=i.imageStyle;if(r.image)this.icon.setAttribute("style",(0,A.b9)(Object.assign(Object.assign({},l),{"background-image":"url(".concat(r.image,")")})));else if(!r.image&&r.icon){var u="loading"===r.icon?s:"error"===r.icon?c:a;this.icon.setAttribute("style",(0,A.b9)(Object.assign(Object.assign({},u),"none"===r.icon?{"display":"none"}:{})))}return this.toast.setAttribute("style",(0,A.b9)(Object.assign(Object.assign({},o),"none"===r.icon?{"min-height":"0","padding":"10px 15px"}:{}))),this.el.style.display="block",setTimeout((function(){e.el.style.opacity="1"}),0),this.type=r._type,r.duration>=0&&this.hide(r.duration,this.type),""}},{"key":"hide","value":function hide(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;this.type===n&&(this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),100)}),t))}}]),Toast}(),__awaiter=function(e,t,n,r){return new(n||(n=Promise))((function(i,A){function fulfilled(e){try{step(r.next(e))}catch(e){A(e)}}function rejected(e){try{step(r.throw(e))}catch(e){A(e)}}function step(e){e.done?i(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))},p="default";function init(e){if("ready"!==p){var t=e.createElement("style");t.textContent='@font-face{font-weight:normal;font-style:normal;font-family:"taro";src:url("data:application/x-font-ttf;charset=utf-8;base64, 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") format("truetype");}@-webkit-keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}@keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}.taro-modal__foot:after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);} .taro-model__btn:active {background-color: #EEEEEE}.taro-model__btn:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;width: 1px;bottom: 0;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}.taro-actionsheet__cell:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #e5e5e5;color: #e5e5e5;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}',e.querySelector("head").appendChild(t),p="ready"}}var m=new d,f=new u,g=new l,h=function showToast(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"title":""};init(document);var t=e=Object.assign({"title":"","icon":"success","image":"","duration":1500,"mask":!1},e),n=t.success,r=t.fail,i=t.complete,a=new o.N({"name":"showToast","success":n,"fail":r,"complete":i});if("string"!=typeof e.title)return a.fail({"errMsg":(0,A.Hl)({"para":"title","correct":"String","wrong":e.title})});if("number"!=typeof e.duration)return a.fail({"errMsg":(0,A.Hl)({"para":"duration","correct":"Number","wrong":e.duration})});e.image&&"string"!=typeof e.image&&(e.image=""),e.mask=!!e.mask;var c="";return c=m.el?m.show(e,"toast"):m.create(e,"toast"),a.success({"errMsg":c})},y=function showLoading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"title":""};init(document);var t=e=Object.assign({"title":"","mask":!1},e),n=t.success,r=t.fail,i=t.complete,a=new o.N({"name":"showLoading","success":n,"fail":r,"complete":i}),c={"icon":"loading","image":"","duration":-1};if("string"!=typeof(e=Object.assign({},e,c)).title)return a.fail({"errMsg":(0,A.Hl)({"para":"title","correct":"String","wrong":e.title})});e.mask=!!e.mask;var s="";return s=m.el?m.show(e,"loading"):m.create(e,"loading"),a.success({"errMsg":s})},b=function hideLoading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,r=e.complete,i=new o.N({"name":"hideLoading","success":t,"fail":n,"complete":r});return m.el?(m.hide(0,"loading"),i.success()):i.success()},I=function showModal(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return __awaiter(void 0,void 0,void 0,(0,r.Z)().mark((function _callee(){var t,n,i,a,c,s,l;return(0,r.Z)().wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:if(init(document),e=Object.assign({"title":"","content":"","showCancel":!0,"cancelText":"取消","cancelColor":"#000000","confirmText":"确定","confirmColor":"#3CC51F"},e),n=(t=e).success,i=t.fail,a=t.complete,c=new o.N({"name":"showModal","success":n,"fail":i,"complete":a}),"string"==typeof e.title){r.next=6;break}return r.abrupt("return",c.fail({"errMsg":(0,A.Hl)({"para":"title","correct":"String","wrong":e.title})}));case 6:if("string"==typeof e.content){r.next=8;break}return r.abrupt("return",c.fail({"errMsg":(0,A.Hl)({"para":"content","correct":"String","wrong":e.content})}));case 8:if("string"==typeof e.cancelText){r.next=10;break}return r.abrupt("return",c.fail({"errMsg":(0,A.Hl)({"para":"cancelText","correct":"String","wrong":e.cancelText})}));case 10:if(!(e.cancelText.replace(/[\u0391-\uFFE5]/g,"aa").length>8)){r.next=12;break}return r.abrupt("return",c.fail({"errMsg":"cancelText length should not larger then 4 Chinese characters"}));case 12:if("string"==typeof e.confirmText){r.next=14;break}return r.abrupt("return",c.fail({"errMsg":(0,A.Hl)({"para":"confirmText","correct":"String","wrong":e.confirmText})}));case 14:if(!(e.confirmText.replace(/[\u0391-\uFFE5]/g,"aa").length>8)){r.next=16;break}return r.abrupt("return",c.fail({"errMsg":"confirmText length should not larger then 4 Chinese characters"}));case 16:if("string"==typeof e.cancelColor){r.next=18;break}return r.abrupt("return",c.fail({"errMsg":(0,A.Hl)({"para":"cancelColor","correct":"String","wrong":e.cancelColor})}));case 18:if("string"==typeof e.confirmColor){r.next=20;break}return r.abrupt("return",c.fail({"errMsg":(0,A.Hl)({"para":"confirmColor","correct":"String","wrong":e.confirmColor})}));case 20:if(e.showCancel=!!e.showCancel,s="",f.el){r.next=28;break}return r.next=25,f.create(e);case 25:s=r.sent,r.next=31;break;case 28:return r.next=30,f.show(e);case 30:s=r.sent;case 31:return(l={"cancel":!1,"confirm":!1})[s]=!0,r.abrupt("return",c.success(l));case 34:case"end":return r.stop()}}),_callee)})))};var x=function showActionSheet(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"itemList":[]};return __awaiter(void 0,void 0,void 0,(0,r.Z)().mark((function _callee2(){var t,n,i,a,c,s,l;return(0,r.Z)().wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:if(init(document),e=Object.assign({"itemColor":"#000000","itemList":[]},e),n=(t=e).success,i=t.fail,a=t.complete,c=new o.N({"name":"showActionSheet","success":n,"fail":i,"complete":a}),Array.isArray(e.itemList)){r.next=6;break}return r.abrupt("return",c.fail({"errMsg":(0,A.Hl)({"para":"itemList","correct":"Array","wrong":e.itemList})}));case 6:if(!(e.itemList.length<1)){r.next=8;break}return r.abrupt("return",c.fail({"errMsg":"parameter error: parameter.itemList should have at least 1 item"}));case 8:if(!(e.itemList.length>6)){r.next=10;break}return r.abrupt("return",c.fail({"errMsg":"parameter error: parameter.itemList should not be large than 6"}));case 10:s=0;case 11:if(!(s<e.itemList.length)){r.next=17;break}if("string"==typeof e.itemList[s]){r.next=14;break}return r.abrupt("return",c.fail({"errMsg":(0,A.Hl)({"para":"itemList[".concat(s,"]"),"correct":"String","wrong":e.itemList[s]})}));case 14:s++,r.next=11;break;case 17:if("string"==typeof e.itemColor){r.next=19;break}return r.abrupt("return",c.fail({"errMsg":(0,A.Hl)({"para":"itemColor","correct":"String","wrong":e.itemColor})}));case 19:if(l="",g.el){r.next=26;break}return r.next=23,g.create(e);case 23:l=r.sent,r.next=29;break;case 26:return r.next=28,g.show(e);case 28:l=r.sent;case 29:if("string"!=typeof l){r.next=33;break}return r.abrupt("return",c.fail({"errMsg":l}));case 33:return r.abrupt("return",c.success({"tapIndex":l}));case 34:case"end":return r.stop()}}),_callee2)})))};i.Z.eventCenter.on("__taroRouterChange",(function(){!function hideToast(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,r=e.complete,i=new o.N({"name":"hideToast","success":t,"fail":n,"complete":r});m.el?(m.hide(0,"toast"),i.success()):i.success()}(),b(),function hideModal(){f.el&&f.hide()}()}));(0,A.tA)("enableAlertBeforeUnload"),(0,A.tA)("disableAlertBeforeUnload")},"8502":function(e,t,n){var r=n(3464),i=Symbol.for("react.element"),A=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var r,A={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(A[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===A[r]&&(A[r]=t[r]);return{"$$typeof":i,"type":e,"key":s,"ref":l,"props":A,"_owner":a.current}}t.Fragment=A,t.jsx=q,t.jsxs=q},"2922":function(e,t,n){e.exports=n(8502)},"6863":function(e,t,n){n.r(t),n.d(t,{"default":function(){return g}});var r=n(8548),i=n(3831),A=n(1760),o=n(3464),a=n(7255),c=((0,a.tA)("setVisualEffectOnCapture"),(0,a.tA)("setScreenBrightness")),s=(0,a.tA)("setKeepScreenOn"),l=(0,a.tA)("onUserCaptureScreen"),u=(0,a.tA)("offUserCaptureScreen"),d=(0,a.tA)("getScreenBrightness"),p=n(4371),m=n(5403),f=n(2922),g=function Index(){var e=(0,o.useState)(.5),t=(0,A.Z)(e,2),n=t[0],a=t[1];(0,o.useEffect)((function(){d({"success":function success(e){a(e.value)}})}),[]);var g=function _onPressControl(e){if(e){var t=Number((n+.1).toFixed(1));a(t>1?1:t)}else{var r=Number((n-.1).toFixed(1));a(r<0?0:r)}},h=function _handleCallback1(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log("用户截屏了 C1",t)};return(0,f.jsx)(m.G7,{"className":"api-page","children":(0,f.jsxs)(m.G7,{"className":"api-page__body","children":[(0,f.jsxs)(m.G7,{"className":"control common-border","children":[(0,f.jsx)(m.G7,{"className":"control-btn","onClick":function onClick(){return g(!1)},"children":(0,f.jsx)(m.xv,{"className":"control-btn-txt","children":"－"})}),(0,f.jsx)(m.xv,{"className":"control-value","children":n}),(0,f.jsx)(m.G7,{"className":"control-btn","onClick":function onClick(){return g(!0)},"children":(0,f.jsx)(m.xv,{"className":"control-btn-txt","children":"＋"})})]}),(0,f.jsx)(m.zx,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){console.log("设置亮度",n),c({"value":n,"success":function success(e){console.log("设置亮度成功",e)}})},"children":"Taro.setScreenBrightness()"}),(0,f.jsx)(m.zx,{"type":"primary","className":"api-page-btn-success","onClick":(0,i.Z)((0,r.Z)().mark((function _callee(){var e;return(0,r.Z)().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:e=t.sent,(0,p.CF)({"title":"亮度：".concat(e.value)});case 4:case"end":return t.stop()}}),_callee)}))),"children":"Taro.getScreenBrightness()"}),(0,f.jsx)(m.zx,{"type":"primary","className":"api-page-btn-warning","onClick":(0,i.Z)((0,r.Z)().mark((function _callee2(){return(0,r.Z)().wrap((function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:s({"keepScreenOn":!0,"success":function success(){(0,p.CF)({"title":"keepScreenOn： true","icon":"none"})}});case 1:case"end":return e.stop()}}),_callee2)}))),"children":"Taro.setKeepScreenOn(true)"}),(0,f.jsx)(m.zx,{"type":"primary","className":"api-page-btn-warning","onClick":(0,i.Z)((0,r.Z)().mark((function _callee3(){return(0,r.Z)().wrap((function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:s({"keepScreenOn":!1,"success":function success(){(0,p.CF)({"title":"keepScreenOn： false","icon":"none"})}});case 1:case"end":return e.stop()}}),_callee3)}))),"children":"Taro.setKeepScreenOn(false)"}),(0,f.jsx)(m.zx,{"type":"primary","className":"api-page-btn-error","onClick":(0,i.Z)((0,r.Z)().mark((function _callee4(){return(0,r.Z)().wrap((function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:l(h);case 1:case"end":return e.stop()}}),_callee4)}))),"children":"Taro.onUserCaptureScreen()"}),(0,f.jsx)(m.zx,{"type":"primary","className":"api-page-btn-error","onClick":(0,i.Z)((0,r.Z)().mark((function _callee5(){return(0,r.Z)().wrap((function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:u(h);case 1:case"end":return e.stop()}}),_callee5)}))),"children":"Taro.offUserCaptureScreen()"})]})})}},"3831":function(e,t,n){function asyncGeneratorStep(e,t,n,r,i,A,o){try{var a=e[A](o),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var A=e.apply(t,n);function _next(e){asyncGeneratorStep(A,r,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(A,r,i,_next,_throw,"throw",e)}_next(void 0)}))}}n.d(t,{"Z":function(){return _asyncToGenerator}})}}]);