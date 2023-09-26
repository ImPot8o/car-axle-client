(()=>{var t={537:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(81),i=n.n(o),a=n(645),s=n.n(a)()(i());s.push([t.id,".cac__button {\n  width: 90% !important;\n  line-height: 6vh !important;\n  background: rgba(230, 230, 230, 0.6) !important;\n  color: #000 !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n}\n.cac__button:hover {\n  transform: translateX(5px) !important;\n}\n.cac__button:last-child {\n  margin-bottom: 5% !important;\n}\n.cac__button--enabled {\n  box-shadow: inset 52vw 0 0px 0 turquoise !important;\n}\n.cac__button__menuicon {\n  margin-right: 2% !important;\n  transform: rotate(-90deg) !important;\n  transition: 0.5s !important;\n  border-radius: 50% !important;\n  width: auto;\n  height: auto;\n}\n.cac__button__menuicon--enabled {\n  transform: rotate(0deg) !important;\n}\n.cac__button__menu-container {\n  width: 85% !important;\n  line-height: 0vh !important;\n  background-color: rgba(230, 230, 230, 0.6) !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  border: none !important;\n  border-radius: 15px !important;\n  overflow: hidden !important;\n  margin-left: 5% !important;\n  margin-top: 0% !important;\n  padding: 2.5% !important;\n  transform-origin: top !important;\n  display: none !important;\n  flex-direction: column !important;\n}\n.cac__button__menu-container--enabled {\n  margin-top: 2% !important;\n  display: flex !important;\n}\n.cac__button__menu-container__option-container {\n  display: flex !important;\n  width: 100% !important;\n  flex-direction: column !important;\n  align-items: flex-start !important;\n}\n.cac__button__menu-container__option-container__title {\n  margin-bottom: 2% !important;\n}\n.cac__button__menu-container__option-container__checkbox {\n  width: 1.25vw !important;\n  height: 1.25vw !important;\n  border-radius: 50% !important;\n  border: 1px solid turquoise !important;\n  text-align: left !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n}\n.cac__button__menu-container__option-container__text {\n  border-radius: 5px !important;\n  height: auto !important;\n}\n.cac__button__menu-container__option-container__text:focus {\n  outline: none !important;\n  border: solid 2px turquoise !important;\n}\n",""]);const r=s},404:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(81),i=n.n(o),a=n(645),s=n.n(a)()(i());s.push([t.id,".cac__tabbar__button {\n  width: 3vw;\n  margin: none;\n  height: 3vw;\n  background: transparent !important;\n  border: none;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n.cac__tabbar__button:last-child {\n  margin-right: 10px;\n}\n.cac__tabbar__button:active svg {\n  transform: scale(0.8) rotate(10deg);\n}\n.cac__tabbar__button:hover p {\n  opacity: 1;\n  text-align: center;\n}\n.cac__tabbar__button svg {\n  width: 70%;\n  transition: 0.6s;\n  height: 70%;\n}\n.cac__tabbar__button p {\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 28vw;\n  top: 0px;\n  right: 3vw;\n  color: #000;\n  transition: 0.3s;\n  font-size: 1vw;\n}\n",""]);const r=s},889:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(81),i=n.n(o),a=n(645),s=n.n(a)()(i());s.push([t.id,".cac__notification {\n  width: 40%;\n  height: 40%;\n  border-radius: 20px;\n  box-shadow: 0px 0px 50px 10px black;\n  background-color: turquoise;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.cac__notification__header {\n  font-size: 2.75vmin;\n  margin-left: 2vw;\n  margin-right: 2vw;\n}\n.cac__notification__body {\n  font-size: 2.25vmin;\n  margin-left: 2vw;\n  margin-right: 2vw;\n}\n.cac__notification__button {\n  border-radius: 10px;\n  width: 20%;\n  padding: 2%;\n  background-color: rgba(230, 230, 230, 0.6);\n  border: none;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  font-size: 1vw;\n  cursor: pointer;\n}\n",""]);const r=s},622:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(81),i=n.n(o),a=n(645),s=n.n(a)()(i());s.push([t.id,"@keyframes introanim {\n  0% {\n    transform: translateX(-50%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n@keyframes slidein {\n  0% {\n    transform: translateX(-20%);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n.cac__section {\n  width: 86% !important;\n  height: 6% !important;\n  background-color: transparent !important;\n  text-align: left !important;\n  border-radius: 2vw !important;\n  position: relative;\n  display: flex !important;\n  align-items: center !important;\n  font-size: 1.5vw !important;\n  margin-top: 5% !important;\n  transition: 0.5s !important;\n  cursor: pointer !important;\n  animation: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) introanim forwards;\n  animation: slidein 1s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.cac__section:hover {\n  transform: translateX(5px) !important;\n}\n.cac__section svg {\n  margin-left: 1% !important;\n  margin-right: 5% !important;\n}\n.cac__section__content {\n  width: 100% !important;\n  height: 100% !important;\n  display: none;\n  position: absolute !important;\n  align-items: center !important;\n  text-align: center !important;\n  overflow-y: scroll !important;\n}\n.cac__section__content::-webkit-scrollbar {\n  width: 7px !important;\n}\n.cac__section__content::-webkit-scrollbar-track {\n  background-color: transparent !important;\n}\n.cac__section__content::-webkit-scrollbar-thumb {\n  background-color: turquoise !important;\n  border-radius: 7px !important;\n}\n.cac__section__title {\n  font-weight: 600 !important;\n  font-size: 2.25vw !important;\n  line-height: 2.25vw !important;\n  margin-left: 5% !important;\n  margin-top: 3vh;\n  text-align: left !important;\n  width: 90% !important;\n}\n.cac__section__description {\n  font-weight: 400 !important;\n  font-size: 1.5vw !important;\n  line-height: 1.5vw !important;\n  text-align: left !important;\n  margin-left: 5% !important;\n  margin-bottom: 3% !important;\n  width: 90% !important;\n}\n",""]);const r=s},928:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(81),i=n.n(o),a=n(645),s=n.n(a)()(i());s.push([t.id,"@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshRTM.ttf) format('truetype');\n}\n.cac__ALL {\n  font-family: 'Nunito', sans-serif !important;\n  color: #000 !important;\n  border: none;\n  margin: none;\n  font-weight: auto;\n}\nsvg {\n  fill: #000;\n}\n#cac__CONTAINER {\n  background-color: rgba(230, 230, 230, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n}\n#cac__GUI {\n  width: 79%;\n  height: 71%;\n  background-color: rgba(230, 230, 230, 0.6);\n  backdrop-filter: blur(10px);\n  text-align: left;\n  display: flex;\n  flex-direction: row;\n  border-radius: 20px;\n}\n#cac__SIDEBAR {\n  width: 20%;\n  height: 100%;\n  background-color: rgba(230, 230, 230, 0.6);\n  text-align: left;\n  border-radius: 20px;\n  position: relative;\n  display: flex;\n  overflow: none;\n  flex-direction: column;\n  align-items: center;\n}\n#cac__MAINCONTENT {\n  width: 80%;\n  height: 100%;\n  background-color: transparent;\n  text-align: left;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#cac__LOGO {\n  width: 100%;\n  height: 8%;\n  background-color: turquoise;\n  text-align: center;\n  border-radius: 20px 0 20px 0;\n  position: relative;\n  font-size: 1.75vw;\n  font-weight: 800;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#cac__section__BACKGROUND {\n  width: 95%;\n  height: 6%;\n  background-color: turquoise;\n  text-align: center;\n  border-radius: 10px;\n  position: absolute;\n}\n#cac__games__iframe {\n  width: 87%;\n  height: 80%;\n  background-color: transparent;\n  border-radius: 20px;\n  margin-right: 2%;\n  border: 4px solid turquoise;\n}\n#cac__TABBAR {\n  width: auto;\n  z-index: 100000000000000;\n  height: 3vw;\n  background-color: turquoise;\n  border-radius: 0px 20px 0 20px;\n  display: flex;\n  justify-content: center;\n  align-self: flex-end;\n  padding-left: 0.25vw;\n}\n#cac__TABBAR:hover .cac__tabbar__button {\n  opacity: 0.5;\n}\n#cac__TABBAR .cac__tabbar__button:hover {\n  opacity: 1;\n}\n",""]);const r=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);o&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},716:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>b});var o=n(379),i=n.n(o),a=n(795),s=n.n(a),r=n(569),c=n.n(r),l=n(565),u=n.n(l),d=n(216),m=n.n(d),h=n(589),p=n.n(h),_=n(537),f={};f.styleTagTransform=p(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=m(),i()(_.Z,f);const b=_.Z&&_.Z.locals?_.Z.locals:void 0},406:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>b});var o=n(379),i=n.n(o),a=n(795),s=n.n(a),r=n(569),c=n.n(r),l=n(565),u=n.n(l),d=n(216),m=n.n(d),h=n(589),p=n.n(h),_=n(404),f={};f.styleTagTransform=p(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=m(),i()(_.Z,f);const b=_.Z&&_.Z.locals?_.Z.locals:void 0},832:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>b});var o=n(379),i=n.n(o),a=n(795),s=n.n(a),r=n(569),c=n.n(r),l=n(565),u=n.n(l),d=n(216),m=n.n(d),h=n(589),p=n.n(h),_=n(889),f={};f.styleTagTransform=p(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=m(),i()(_.Z,f);const b=_.Z&&_.Z.locals?_.Z.locals:void 0},789:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>b});var o=n(379),i=n.n(o),a=n(795),s=n.n(a),r=n(569),c=n.n(r),l=n(565),u=n.n(l),d=n(216),m=n.n(d),h=n(589),p=n.n(h),_=n(622),f={};f.styleTagTransform=p(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=m(),i()(_.Z,f);const b=_.Z&&_.Z.locals?_.Z.locals:void 0},36:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>b});var o=n(379),i=n.n(o),a=n(795),s=n.n(a),r=n(569),c=n.n(r),l=n(565),u=n.n(l),d=n(216),m=n.n(d),h=n(589),p=n.n(h),_=n(928),f={};f.styleTagTransform=p(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=m(),i()(_.Z,f);const b=_.Z&&_.Z.locals?_.Z.locals:void 0},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},s=[],r=0;r<t.length;r++){var c=t[r],l=o.base?c[0]+o.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var m=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var p=i(h,o);o.byIndex=r,e.splice(r,0,{identifier:d,updater:p,references:1})}s.push(d)}return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var a=o(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var r=n(a[s]);e[r].references--}for(var c=o(t,i),l=0;l<a.length;l++){var u=n(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},539:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createElement=void 0,e.createElement=function(t,e,n){const o=document.createElement(t);return n&&(n.id&&(o.id=n.id),n.className&&(o.className=n.className),n.innerHTML&&(o.innerHTML=n.innerHTML),n.type&&o.setAttribute("type",n.type),n.name&&o.setAttribute("name",n.name),n.value&&o.setAttribute("value",n.value)),o.classList.add("cac__ALL"),e&&e.appendChild(o),o}},228:function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.UIManager=void 0;const i=n(162),a=o(n(128)),s=o(n(490)),r=o(n(669)),c=o(n(389)),l=n(539),u=n(203),d=n(333);n(36),e.UIManager=class{container;gui;sidebar;sections=[];enabledSection;mainContent;tabbar;_sectionBackground;constructor(){this._createGUI(),this._createIcons()}_createGUI(){this.container=(0,l.createElement)("div",document.body,{id:"cac__CONTAINER"}),this.gui=(0,l.createElement)("div",this.container,{id:"cac__GUI"}),this.sidebar=(0,l.createElement)("div",this.gui,{id:"cac__SIDEBAR"}),this.mainContent=(0,l.createElement)("div",this.gui,{id:"cac__MAINCONTENT"}),this._sectionBackground=(0,l.createElement)("div",this.sidebar,{id:"cac__section__BACKGROUND"}),this.tabbar=(0,l.createElement)("div",this.mainContent,{id:"cac__TABBAR"}),(0,l.createElement)("div",this.sidebar,{id:"cac__LOGO",innerHTML:`${d.CLIENTNAME} v${d.VERSION}`})}_createIcons(){new s.default(this.tabbar,"New Save",'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/></svg>',this),new a.default(this.tabbar,"Remove Save",'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M448 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64zM184 272c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z"/></svg>'),new c.default(this.tabbar,"Hide",'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>'),new r.default(this.tabbar,"Self Destruct",'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>')}_enableSection(t){this.enabledSection=t,t.enabled=!0,t.sectionContent.style.display="block",t.sectionContent.style.pointerEvents="auto",this._sectionBackground.animate([{top:`${t.navButton.offsetTop}px`}],{duration:1e3,fill:"forwards",easing:"ease"}),t.sectionContent.animate([{opacity:0,transform:"scale(1.1)"},{opacity:1,transform:"scale(1)"}],{duration:500,fill:"forwards",easing:"ease"})}_disableSection(t){t.enabled=!1,t.sectionContent.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],{duration:500,fill:"forwards",easing:"ease"}),setTimeout((()=>{t.sectionContent.style.display="none",t.sectionContent.style.pointerEvents="none;"}),490)}_handleSectionMouseDown(t){t.enabled||(this.enabledSection&&this._disableSection(this.enabledSection),this._enableSection(t))}newSection(t,e,n,o,a=!1){let s=new i.Section(t,e,n,o,this.sidebar,this.mainContent,a);return s.navButton.onmousedown=()=>this._handleSectionMouseDown(s),a&&this._enableSection(s),this.sections.push(s),s}toggleUI(){if("none"===this.container.style.display)return this.container.style.display="flex",void this.gui.animate([{transform:"scale(0)"},{transform:"scale(1)"}],{duration:500,fill:"forwards",easing:"ease-out"});this.container.style.display="none"}addModulesfromList(t){for(let e of t){let t=this.getSectionFromID(e.section);t&&(console.log(e),t.addButton(e.displayName,e.always||!1,e.reset||!1,e.onactive||u.none,e.ondisable||u.none,e.disabled||!1))}}addModulesFromImport(t){for(let e of Object.keys(t)){if(!t[e].default)continue;if(Array.isArray(t[e].default)){this.addModulesfromList(t[e].default);continue}let n=t[e].default,o=this.getSectionFromID(n.section);o&&o.addButton(n.displayName,n.always||!1,n.reset||!1,n.onactive||u.none,n.ondisable||u.none,n.disabled||!1)}}getSectionFromID(t){return this.sections.find((e=>e.id===t))}}},407:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n(539);var i;n(716),function(t){t.checkbox="checkbox",t.text="text"}(i||(i={})),e.default=class{enabled=!1;button;menuContainer;parent;title;onEnable;onDisable;always;reset;disabled;menuOptions;menuValues=[];constructor(t,e,n,o,i,a,s,r=[]){this.parent=t,this.title=e,this.onEnable=i,this.onDisable=a,this.always=n,this.reset=o,this.menuOptions=r,this.disabled=s,r.length>0&&(this.title+='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="cac__button__menuicon" ><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>'),this.render()}_toggle(){this.enabled=!this.enabled,this.button.classList.toggle("cac__button--enabled",this.enabled),this.enabled?this.onEnable():this.onDisable()}_getMenuValues(){this.menuValues=[];for(let t of this.menuContainer.querySelectorAll(".cac__button__menu-container__option-container")){const e=t.querySelector(".cac__button__menu-container__option-container__checkbox"),n=t.querySelector(".cac__button__menu-container__option-container__text");e?this.menuValues.push(e.checked):n&&this.menuValues.push(n.value)}}_updateFunctionOptions(){this._getMenuValues(),this._toggle(),this._toggle()}_addMenuOption(t){const e=(0,o.createElement)("div",this.menuContainer,{className:"cac__button__menu-container__option-container"});switch((0,o.createElement)("p",e,{className:"cac__button__menu-container__option-container__title",innerHTML:t.title}),t.type){case i.checkbox:const n=(0,o.createElement)("input",e,{type:"checkbox",className:"cac__button__menu-container__option-container__checkbox"});n.checked=t.default,n.addEventListener("change",this._updateFunctionOptions.bind(this));break;case i.text:const a=(0,o.createElement)("input",e,{type:"text",className:"cac__button__menu-container__option-container__text"});a.value=t.default,a.addEventListener("change",this._updateFunctionOptions.bind(this))}}_toggleMenu(t){t.preventDefault(),this.menuContainer.classList.toggle("cac__button__menu-container--enabled"),this.button.querySelector("svg")?.classList.toggle("cac__button__menuicon--enabled")}_handleMouseDown(t){2===t.button&&this.menuOptions?.length>0&&this._toggleMenu(t),0!==t.button||this.enabled&&this.always||(this._toggle(),this.reset&&setTimeout((()=>{this._toggle()}),1e3))}render(){if(this.button=(0,o.createElement)("button",this.parent,{className:"cac__button",innerHTML:this.title}),this.disabled||this.button.addEventListener("mousedown",this._handleMouseDown.bind(this)),console.log(this.disabled),this.button.addEventListener("contextmenu",(t=>t.preventDefault())),this.menuOptions.length>0){this.menuContainer=(0,o.createElement)("div",this.parent,{className:"cac__button__menu-container"});for(let t of this.menuOptions)this._addMenuOption(t)}}get values(){return this.reset?{enabled:!1}:{enabled:this.enabled}}set values(t){t.enabled&&this._toggle()}}},389:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n(539);n(406),e.default=class{parent;icon;name;hoverName;iconElement;constructor(t,e,n){this.parent=t,this.icon=n,this.name=e,this.render()}action(){document.dispatchEvent(new KeyboardEvent("keydown",{key:"\\"}))}render(){this.iconElement=(0,o.createElement)("button",this.parent,{className:"cac__tabbar__button",innerHTML:this.icon}),this.iconElement.onclick=this.action,this.hoverName=(0,o.createElement)("p",this.iconElement,{className:"cac__tabbar__button__hovername",innerHTML:this.name})}}},128:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n(539);n(406),e.default=class{parent;icon;name;hoverName;iconElement;constructor(t,e,n){this.parent=t,this.icon=n,this.name=e,this.render(),this.iconElement.onclick=this.action}action(){localStorage.removeItem("car-axle-client")}render(){this.iconElement=(0,o.createElement)("button",this.parent,{className:"cac__tabbar__button",innerHTML:this.icon}),this.hoverName=(0,o.createElement)("p",this.iconElement,{className:"cac__tabbar__button__hovername",innerHTML:this.name})}}},490:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n(539);n(406),e.default=class{parent;icon;name;hoverName;iconElement;constructor(t,e,n,o){this.parent=t,this.icon=n,this.name=e,this.render(),this.iconElement.onclick=()=>{this.action(o)}}action(t){console.log("%cAttempting Save","color:blue; font-size: 3vw;");let e=[];for(let n of t.sections){let t=n.getAllButtonValues();console.log("%c"+n.id,"font-size:1.25vw;"),console.table(t),e.push({sectionID:n.id,buttonValues:t})}localStorage.setItem("car-axle-client",JSON.stringify(e))}render(){this.iconElement=(0,o.createElement)("button",this.parent,{className:"cac__tabbar__button",innerHTML:this.icon}),this.hoverName=(0,o.createElement)("p",this.iconElement,{className:"cac__tabbar__button__hovername",innerHTML:this.name})}}},669:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n(539);n(406),e.default=class{parent;icon;name;hoverName;iconElement;constructor(t,e,n){this.parent=t,this.icon=n,this.name=e,this.render()}action(){document.getElementById("cac__CONTAINER")?.remove()}render(){this.iconElement=(0,o.createElement)("button",this.parent,{className:"cac__tabbar__button",innerHTML:this.icon}),this.iconElement.onclick=this.action,this.hoverName=(0,o.createElement)("p",this.iconElement,{className:"cac__tabbar__button__hovername",innerHTML:this.name})}}},67:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(832);const o=n(539);e.default=class{parent;notification;title;body;constructor(t,e,n,i){this.parent=t,this.title=e,this.body=n,this.render(),i&&((0,o.createElement)("button",this.notification,{className:"cac__notification__button",innerHTML:i.text}).onclick=t=>i.fn())}render(){this.notification=(0,o.createElement)("div",this.parent,{className:"cac__notification"}),(0,o.createElement)("h1",this.notification,{className:"cac__notification__header",innerHTML:this.title}),(0,o.createElement)("p",this.notification,{className:"cac__notification__body",innerHTML:this.body}),(0,o.createElement)("button",this.notification,{className:"cac__notification__button",innerHTML:"Dismiss"}).onclick=t=>this.notification.remove()}display(t=500){}}},162:function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Section=void 0;const i=n(539),a=o(n(407));n(789),e.Section=class{id;navButton;enabled;sectionTitle;sectionContent;buttons=[];_displayName;_container;_description;_icon;constructor(t,e,n,o,i,a,s=!1){this.id=t,this._displayName=e,this._container=i,this._description=n,this._icon=o,this.enabled=s,this._createSectionElements(a),"client"===this.id?(this.navButton.style.position="absolute",this.navButton.style.bottom="7.5vh"):"credit"===this.id&&(this.navButton.style.position="absolute",this.navButton.style.bottom="20px")}_createSectionElements(t){this.navButton=(0,i.createElement)("div",this._container,{className:"cac__section",innerHTML:this._icon+this._displayName}),this.sectionContent=(0,i.createElement)("div",t,{className:"cac__section__content",id:`cac__content__${this.id}`}),(0,i.createElement)("h1",this.sectionContent,{innerHTML:this._displayName,className:"cac__section__title"}),(0,i.createElement)("p",this.sectionContent,{innerHTML:this._description,className:"cac__section__description"})}addButton(t,e,n,o,i,s,r=[]){this.buttons.push(new a.default(this.sectionContent,t,e,n,o,i,s,r))}getAllButtonValues(){return this.buttons.map((t=>[t.enabled]))}setAllButtonValuesFromArray(t){for(const[e,n]of t.entries())this.buttons[e].values={enabled:n[0]}}}},333:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CLIENTNAME=e.VERSION=e.GAMESLINK=void 0,e.GAMESLINK="https://penguinify-web-dev.github.io/",e.VERSION="4",e.CLIENTNAME="car axle client"},203:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.none=e.changeGame=void 0;const o=n(333);e.changeGame=function(t){document.getElementById("cac__games__iframe").setAttribute("src",o.GAMESLINK+t)},e.none=function(){}},939:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={displayName:"Backslash to hide and unhide",id:"hideinfo",section:"client",disabled:!0}},303:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o={displayName:`v${n(333).VERSION} i:0`,id:"version",section:"client",disabled:!0};e.default=o},740:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={displayName:"yexex for the games",id:"cred",section:"credit",disabled:!0}},290:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n={displayName:"NoForceReload",id:"noforcereload",section:"exploit",onactive:function(){window.onbeforeunload=t=>"no"},ondisable:function(){window.onbeforeunload=null}};e.default=n},331:(t,e)=>{"use strict";function n(){let t=document.body.querySelectorAll("*");console.log(t),t.forEach((function(t){t.style.setProperty("user-select","auto","important")}))}Object.defineProperty(e,"__esModule",{value:!0});const o={displayName:"ForceSelect+",id:"betterforce",section:"exploit",onactive:n,ondisable:n,always:!0};e.default=o},995:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n={displayName:"Edit Page Text",id:"editpage",section:"fun",onactive:function(){document.body.contentEditable="true",document.designMode="on"},ondisable:function(){document.body.contentEditable="false",document.designMode="off"}};e.default=n},505:(t,e)=>{"use strict";function n(){!function t(e){var n=e.childNodes;for(var o in n)t(n[o]),n[o].style&&(n[o].style.backgroundImage="url(https://i.chzbgr.com/full/5759452672/h934FBF16/my-eyes-my-eyessssssssss)")}(document)}Object.defineProperty(e,"__esModule",{value:!0});const o={displayName:"don't click this...",id:"eyes",section:"fun",onactive:n,ondisable:n,always:!0};e.default=o},153:function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=n(203),a=o(n(321)),s=[];a.default.forEach((t=>{let e={displayName:t.name,id:t.name,onactive:()=>(0,i.changeGame)(t.url),ondisable:i.none,section:"game",reset:!0};s.push(e)}));const r=s;e.default=r},138:function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.getUpdate=void 0;const i=o(n(67)),a=n(333);e.getUpdate=function(t){fetch("https://raw.githubusercontent.com/car-axle-client/car-axle-database/main/version.json").then((t=>t.json())).then((e=>{var n,o;parseInt(a.VERSION)>=Number(e.version)?console.log("Version is UP TO DATE"):(n=t,o=`${e.version} (i: ${e.i})`,new i.default(n,"A New Update is Available!",`You can update from <strong>v${a.VERSION} (i: 0) -> v${o}</strong><br> Updating can fix issues you may currently be having and will add new features. They can also cause issues. Be careful!`,{text:"Install",fn:()=>window.open("https://car-axle-client.github.io/install")}))}))}},45:(t,e,n)=>{var o={"./client/hideinfo.ts":939,"./client/versionnumber.ts":303,"./credits/gamescredits.ts":740,"./exploits/NoForceReload.ts":290,"./exploits/betterforceselect.ts":331,"./fun/editpagetext.ts":995,"./fun/myeyes.ts":505,"./games/gamesPackager.ts":153};function i(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=a,t.exports=i,i.id=45},321:t=>{"use strict";t.exports=JSON.parse('[{"name":"Moto X3M","url":"motox3m/index.html"},{"name":"Rom Loader","url":"temptations/index.html"},{"name":"yohoho","url":"yohoho/index.html"},{"name":"Burrito Bison","url":"bb/index.html"},{"name":"Bloons TD 4","url":"btd4.html"},{"name":"Minecraft","url":"offline_download_version.html"},{"name":"Retrobowl","url":"retrobowl/retro.html"},{"name":"Agayio","url":"agario-minigame/dots.html"},{"name":"Moto X3M Winter","url":"wintermotox3m/index.html"},{"name":"Basketball Stars","url":"basketball-stars/index.html"},{"name":"slope","url":"slope/index.html"},{"name":"2048","url":"2048/index.html"},{"name":"Geometry Dash","url":"geo.html"},{"name":"Bloons TD 1","url":"bloons.html"},{"name":"Bloons TD 2","url":"bloons1.html"},{"name":"Super Mario 64","url":"sm64/index.html"},{"name":"Quake","url":"quake/index.html"},{"name":"Binding of Isaac","url":"boi.html"}]')}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";const t=n(228),e=n(539),o=n(138),i={};let a=n(45);a.keys().forEach((t=>i[t]=a(t))),function(){const n=new t.UIManager,a=n.newSection("game","games","actual games that work (maybe)",'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/></svg>',!0),s=(0,e.createElement)("iframe",a.sectionContent,{id:"cac__games__iframe"});s.setAttribute("src","https://penguinify-web-dev.github.io/yourgay"),n.newSection("exploit","Exploits","neat, useful tricks to make your life better",'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M64 64l224 0 0 9.8c0 39-23.7 74-59.9 88.4C167.6 186.5 128 245 128 310.2l0 73.8s0 0 0 0H64V64zm288 0l224 0V384H508.3l-3.7-4.5-75.2-90.2c-9.1-10.9-22.6-17.3-36.9-17.3l-71.1 0-41-63.1c-.3-.5-.6-1-1-1.4c44.7-29 72.5-79 72.5-133.6l0-9.8zm73 320H379.2l42.7 64H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48V400c0 26.5 21.5 48 48 48H308.2l33.2 49.8c9.8 14.7 29.7 18.7 44.4 8.9s18.7-29.7 8.9-44.4L310.5 336l74.6 0 40 48zm-159.5 0H192s0 0 0 0l0-73.8c0-10.2 1.6-20.1 4.7-29.5L265.5 384zM192 128a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>'),n.newSection("fun","Fun","some goofy stuff",'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M426.8 14.2C446-5 477.5-4.6 497.1 14.9s20 51 .7 70.3c-14.8 14.8-65.7 23.6-88.3 26.7c-5.6 .9-10.3-3.9-9.5-9.5C403.3 79.9 412 29 426.8 14.2zM75 75C158.2-8.3 284.5-22.2 382.2 33.2c-1.5 4.8-2.9 9.6-4.1 14.3c-3.1 12.2-5.5 24.6-7.3 35c-80.8-53.6-190.7-44.8-261.9 26.4C37.7 180.1 28.9 290 82.5 370.8c-10.5 1.8-22.9 4.2-35 7.3c-4.7 1.2-9.5 2.5-14.3 4.1C-22.2 284.5-8.2 158.2 75 75zm389.6 58.9c4.7-1.2 9.5-2.5 14.3-4.1C534.2 227.5 520.2 353.8 437 437c-83.2 83.2-209.5 97.2-307.2 41.8c1.5-4.8 2.8-9.6 4-14.3c3.1-12.2 5.5-24.6 7.3-35c80.8 53.6 190.7 44.8 261.9-26.4c71.2-71.2 80-181.1 26.4-261.9c10.5-1.8 22.9-4.2 35-7.3zm-105.4 93c10.1-16.3 33.9-16.9 37.9 1.9c9.5 44.4-3.7 93.5-39.3 129.1s-84.8 48.8-129.1 39.3c-18.7-4-18.2-27.8-1.9-37.9c25.2-15.7 50.2-35.4 73.6-58.8s43.1-48.4 58.8-73.6zM92 265.3l97.4-29.7c11.6-3.5 22.5 7.3 19 19l-29.7 97.4c-2.6 8.6-13.4 11.3-19.8 4.9c-2-2-3.2-4.6-3.4-7.3l-5.1-56.1-56.1-5.1c-2.8-.3-5.4-1.5-7.3-3.4c-6.3-6.3-3.6-17.2 4.9-19.8zm193-178.2c2 2 3.2 4.6 3.4 7.3l5.1 56.1 56.1 5.1c2.8 .3 5.4 1.5 7.3 3.4c6.3 6.3 3.6 17.2-4.9 19.8l-97.4 29.7c-11.6 3.5-22.5-7.3-19-19L265.3 92c2.6-8.6 13.4-11.3 19.8-4.9zM14.9 497.1c-19.6-19.6-20-51-.7-70.3C29 412 79.8 403.2 102.4 400.1c5.6-.9 10.3 3.9 9.5 9.5c-3.2 22.5-11.9 73.5-26.7 88.3C66 517 34.5 516.6 14.9 497.1z"/></svg>'),n.newSection("client","Client","client settings and misc stuff",'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>'),n.newSection("credit","Credits","i am a professional skidder",'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/></svg>'),i&&n.addModulesFromImport(i),function(t){const e=JSON.parse(localStorage.getItem("car-axle-client"));e&&e.forEach((function(e){t.getSectionFromID(e.sectionID)?.setAllButtonValuesFromArray(e.buttonValues)}))}(n),document.addEventListener("keydown",(t=>{"\\"==t.key&&n.toggleUI(),"F"==t.key&&t.shiftKey&&s.requestFullscreen()})),(0,o.getUpdate)(n.container)}()})()})();