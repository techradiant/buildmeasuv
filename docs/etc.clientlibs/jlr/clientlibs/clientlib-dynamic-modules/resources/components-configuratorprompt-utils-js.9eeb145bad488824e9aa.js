"use strict";(self.webpackChunkaem_maven_archetype=self.webpackChunkaem_maven_archetype||[]).push([["components-configuratorprompt-utils-js","components-configuratorprompt-cplayer-js"],{47949:function(e,t,r){r.r(t),r.d(t,{adjustCPlayerImage:function(){return f},configuratorImageReduction:function(){return l},getBuildUrl:function(){return m},initCPlayer:function(){return g}});var n=r(2048),i=r(71202),o=r(31695),a=r(97874);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var c=document.querySelector(".ConfiguratorPrompt__saved-build-data")&&document.querySelector(".ConfiguratorPrompt__saved-build-data").getAttribute("data-cplayer-api-key"),l=function(e,t){return t?e-.3*e:e},f=function(e){if(c){var t=e.classList.contains("ConfiguratorPrompt--config-image-reduction"),r=e.querySelector(".CPlayer__innerdiv"),n=e.querySelector(".ConfiguratorPrompt__image"),i=e.querySelector("canvas"),u=e.querySelector(".canvas-container");if(i&&r&&n){if((i.offsetWidth<u.offsetWidth||"large"!==(0,o.pi)(!1))&&(r.style.width="initial"),"large"===(0,o.pi)(!1)){var f=t?100:130,s=(window.innerWidth-(a.Y+1))*((f-200)/(2e3-(a.Y+1)))+200;s=(s=l(s,t))<f?f:s,r.style.width="".concat(s,"%")}var d=r.offsetWidth,m=r.offsetHeight,g=n.offsetWidth,p=n.offsetHeight;r.style.marginLeft="".concat(-(d-g)/2,"px"),r.style.marginTop="".concat(-(m-p)/2,"px"),"large"!==(0,o.pi)(!1)&&t&&(r.style.marginTop="0px")}}},s=function(e){var t;((function(e){if(Array.isArray(e))return u(e)})(t=e.querySelectorAll(".CPlayer__innerdiv"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,void 0);var r=({}).toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,void 0):void 0}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(e,t){t>0&&e.parentNode.removeChild(e)})},d=function(e,t){s(e);var r=t.vehicleName,n=t.vehicleDetail,o=e.querySelector("canvas");(0,i.eA)(o)&&(o.setAttribute("aria-label","".concat(r," ").concat(n[0])),o.setAttribute("role","img")),f(e)},m=function(e){return e&&e.configWebUrl?e.configWebUrl:e&&e.currentBuildUrl},g=function(e,t,r){if(c){var i=m(t);if(i){var o=e.querySelector(".CPlayer__innerdiv");o&&o.parentNode.removeChild(o);var a={webUrl:i&&i.split("?")[0],layout:r,view:"exterior",currentFrame:0,frames:[0]},u=e.querySelector(".canvas-container");new n.A(u,{apiKey:c,scale:1,debug:!1,onLoadCallback:function(){d(e,t)}}).renderFrame(a)}}}},27404:function(e,t,r){r.r(t),r.d(t,{checkForValidConfigBuild:function(){return p},checkForValidQuoteBuild:function(){return g},deleteLegacyLocalStorage:function(){return c},getFinanceLabels:function(){return m},getFinanceOverrideLabels:function(){return f},getJsonFromItemByKey:function(){return s},getTimeDifferenceInDays:function(){return l},initEnquire:function(){return v},nameplateRequiresImageResize:function(){return h},parseVehicleDetails:function(){return y},prefixFinanceLabels:function(){return d},setupDefaultLink:function(){return b}});var n=r(47949),i=r(97874);function o(e,t){if(e){if("string"==typeof e)return u(e,t);var r=({}).toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function c(){var e,t=function(e){if(Array.isArray(e))return u(e)}(e=document.querySelectorAll(".ConfiguratorPrompt"))||a(e)||o(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();if(t.length){var r="jaguar"===t[0].getAttribute("data-brand")?"jag":"lr";localStorage.removeItem("ConfiguratorPrompt_".concat(r))}}function l(e){return(Date.now()-e)/864e5}function f(e){var t=e.getAttribute("data-finance-products");return t?JSON.parse(t.replace(/&quot;/g,'"')):[]}function s(e,t,r){var n=t[e],i=n.visibilityRules.getConfiguredNameplateKey();return n.visibilityRules.datastore.getItemByKey(i,"latest"!==i&&r)}function d(e){return e.getAttribute("data-prefix-labels-before-values")&&"true"===e.getAttribute("data-prefix-labels-before-values")}function m(e,t){var r=e.filter(function(e){return e.productName.toLowerCase()===t.product.name.toLowerCase()});return!!r.length&&r[0]}function g(e,t,r){if(!1===t[r])return!1;var n=s(r,t);return!(l(n.timestamp)>30)&&!!m(e,n)}function p(e){return!1!==e.config}function y(e){var t=[],r=[];if(e&&e.model&&t.push(e.model),e&&e.specpack&&t.push(e.specpack),e&&e.engine){var n,i=function(e){if(Array.isArray(e))return e}(n=e.engine.split("|"))||a(n)||o(n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=i[0],c=i.slice(1);t.push(u),c.forEach(function(e){return r.push(e.trim())})}return{vehicleDetailString:t.join(" | "),engineString:r.join(" | ")}}function v(e,t){enquire.register("screen and (min-width: ".concat(i.Y+1,"px)"),{match:function(){(0,n.initCPlayer)(e,t,"desktop")}}),enquire.register("screen and (max-width: ".concat(i.Y,"px)"),{match:function(){(0,n.initCPlayer)(e,t,"mobile")}})}function b(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#",n=e[t];if(n instanceof HTMLElement){var i=n.getAttribute("href");i&&"#"!==i||n.setAttribute("href",r)}}function h(e,t){var r=document.querySelector('meta[name="configurator-image-reduction"]'),n=r&&r.getAttribute("content"),i=n&&n.split(",").map(function(e){return e.trim().toLowerCase()});i&&i.length&&i.includes(e.toLowerCase())&&t.classList.add("ConfiguratorPrompt--config-image-reduction")}},97874:function(e,t,r){r.d(t,{Y:function(){return n}});var n=900}}]);