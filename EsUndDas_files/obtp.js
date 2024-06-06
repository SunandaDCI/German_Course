(()=>{"use strict";var e={865:(e,t)=>{var n,r;t.__esModule=!0,t.LOG_TYPES=t.CONTENT_TYPE=t.Zone=t.GDPR_PURPOSE_CONSENTS=t.HAS_CONSENT_EVENT=t.CONSENT_HANDLER_URL=t.VERSION=void 0,t.VERSION="2.0.5",t.CONSENT_HANDLER_URL="https://my.outbrain.com/mtConsentHandlet/handler",t.HAS_CONSENT_EVENT="has_concent_event",t.GDPR_PURPOSE_CONSENTS=[1,3,4],(r=t.Zone||(t.Zone={})).Default="all",r.EuZone1="euZone1",r.EuZone2="euZone2",(t.CONTENT_TYPE||(t.CONTENT_TYPE={})).Product="product",(n=t.LOG_TYPES||(t.LOG_TYPES={})).Log="log",n.Warning="warning",n.Info="info",n.Error="error"},323:(e,t,n)=>{t.__esModule=!0;var r=n(865);t.default={zone:r.Zone.EuZone1}},778:(e,t)=>{t.__esModule=!0,t.USE_FETCH_WITH_ATTRIBUTION_SRC=t.SEND_BEACON_SUPPORT=t.VERSION_NAME=t.API_NAME=t.GDPR_CALL_ID=t.GDPR_VENDOR_NAME=t.GDPR_VENDOR_ID=t.DOMAIN_URL_PARAMETER_NAME=t.NO_CLICK_ID_COOKIE_NAME=t.VARIATIONS_COOKIE_NAME=t.CLICK_ID_COOKIE_NAME=t.CLICK_ID_URL_PARAM=t.CLICK_ID_PIXEL_URL_PARAM=t.PAGE_VIEW_NAME=t.BASE_URL=void 0,t.BASE_URL="//tr.outbrain.com",t.PAGE_VIEW_NAME="PAGE_VIEW",t.CLICK_ID_PIXEL_URL_PARAM="ob_click_id",t.CLICK_ID_URL_PARAM="dicbo",t.CLICK_ID_COOKIE_NAME="dicbo_id",t.VARIATIONS_COOKIE_NAME="variations",t.NO_CLICK_ID_COOKIE_NAME="dicbo_fetch",t.DOMAIN_URL_PARAMETER_NAME="ob_cvr_pixel_domain",t.GDPR_VENDOR_ID=164,t.GDPR_VENDOR_NAME="Outbrain",t.GDPR_CALL_ID="obamplify",t.API_NAME="obApi",t.VERSION_NAME="obtp",t.SEND_BEACON_SUPPORT=!0,t.USE_FETCH_WITH_ATTRIBUTION_SRC=!0},368:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};t.__esModule=!0,t.transformMarketerIdToString=t.transformMarketerIdToArray=t.runQ=t.logger=t.decorate=t.dummyFunc=t.getQueryParamsString=t.isArray=t.removeEmptyProperties=t.getObjectWithoutProperties=t.isInIframe=t.getRandomInt=void 0;var o=n(778);function i(e){return Array.isArray(e)}t.getRandomInt=function(){return Math.random().toString().replace(".","")},t.isInIframe=function(){try{return window.self!==window.top}catch(e){return!0}},t.getObjectWithoutProperties=function(e,t){var n=r({},e);for(var o in n)t.indexOf(o)>-1&&delete n[o];return n},t.removeEmptyProperties=function(e){var t=r({},e);for(var n in t)null!==t[n]&&void 0!==t[n]&&""!==t[n]||delete t[n];return t},t.isArray=i,t.getQueryParamsString=function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))})).join("&")},t.dummyFunc=function(){},t.decorate=function(e,t,n){var r=e[t];e[t]=function(){var e=r.apply(this,arguments);return n.apply(this,arguments),e}},t.logger=function(e,n,r){(window.postMessage||t.dummyFunc)({action:"log",type:e,message:n,name:r},"*")},t.runQ=function(){for(var e=!1;apiObj.queue.length;){var t=apiObj.queue.shift();if(t[1]===o.PAGE_VIEW_NAME&&!t[2]){if(e)continue;e=!0}apiObj.dispatch.apply(apiObj,t)}},t.transformMarketerIdToArray=function(e){if(e)return"string"==typeof e?e.replace(" ","").split(","):i(e)?e:void 0},t.transformMarketerIdToString=function(e){return"string"==typeof e?e:i(e)?e.join(","):void 0}},894:function(e,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.__esModule=!0,t.getCustomPixelQueryParams=t.getBasePixelUrl=t.logError=void 0,t.logError=function(e,t){(new Image).src="//tr.outbrain.com/log?apiObjVersion="+t.version+"&obtpVersion="+t.obtpVersion+"&msg="+encodeURIComponent('{"error":"LOAD", "apiObjVersion": '+t.version+', "marketerID": '+t.marketerId+', "referrer": '+document.referrer+', "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","message":"'+e.message+'"}}')},t.getBasePixelUrl=function(e){return"//tr.outbrain.com/unifiedPixel"},t.getCustomPixelQueryParams=function(e){e.content,e.contentType;var t=r(e,["content","contentType"]);return n(n({},t),{name:t.name})}},780:(e,t)=>{t.__esModule=!0,t.customDispatch=void 0,t.customDispatch=function(e,t){t(e.toString())}},81:(e,t,n)=>{t.T=void 0;var r=n(261),o=n(859),i=n(368),a=n(894),s=n(599),c=n(323),d=n(784),u=n(269),p=n(388),l=n(199);t.T=window.__$$OBGeoZone||c.default.zone;try{window.apiObj=new r.ApiService(window).apiObj,window.apiObj.setZone(t.T),(0,u.handleExperiments)(window.apiObj),new o.HistoryObserverService,(0,i.runQ)(),new s.KickstartService(p.eventBusService).getCachedClickId(),(0,d.loadWaves)(),(0,l.fireTopics)()}catch(e){(0,a.logError)(e,window.apiObj)}},994:(e,t)=>{t.__esModule=!0,t.gdprCcpaValidator=t.GDPRCcpaValidator=void 0;var n=function(){function e(){}return e.prototype.hasConsent=function(){return window.__uspapi&&"function"==typeof window.__uspapi},e.prototype.handleConsent=function(e){window.__uspapi("getUSPData",1,(function(t,n){t.uspString?n&&"1YYN"!==t.uspString.toUpperCase()&&"1NYN"!==t.uspString.toUpperCase()?e(!0):e(!1):e(!0)}))},e}();t.GDPRCcpaValidator=n,t.gdprCcpaValidator=new n},166:(e,t)=>{t.__esModule=!0,t.gdprCookiebotValidatorService=t.GDPRCookiebotValidatorService=void 0;var n=function(){function e(){this.boundOnAccept=!1}return e.prototype.hasConsent=function(){return!!window.Cookiebot},e.prototype.handleConsent=function(e){var t;this.cb=e;var n=window.Cookiebot;this.boundOnAccept||this.bindOnAccept(),this.cb(null===(t=n.consent)||void 0===t?void 0:t.marketing)},e.prototype.bindOnAccept=function(){window.addEventListener("CookiebotOnAccept",this.cb.bind(this,!0),!1),this.boundOnAccept=!0},e}();t.GDPRCookiebotValidatorService=n,t.gdprCookiebotValidatorService=new n},987:(e,t)=>{t.__esModule=!0,t.gdprDidomiValidatorService=t.GDPRDidomiValidatorService=void 0;var n=function(){function e(){}return e.prototype.hasConsent=function(){return!!window.didomiState},e.prototype.handleConsent=function(e){this.cb=e;var t=window.didomiState;this.cb(t.didomiPurposesConsent.indexOf("cookies")>-1&&t.didomiPurposesConsent.indexOf("measure_ad_performance")>-1)},e}();t.GDPRDidomiValidatorService=n,t.gdprDidomiValidatorService=new n},17:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};t.__esModule=!0,t.gdprGppValidatorService=t.GDPRGppValidatorService=void 0;var i=n(865),a=function(){function e(){}return e.prototype.hasConsent=function(){return!!window.__gpp},e.prototype.handleConsent=function(e){var t=this;this.cb=e,window.__gpp("addEventListener",(function(n){if("signalStatus"===n.eventName&&"ready"===n.data){var r=n.pingData.gppString;t.parseGppString(r,!0,e)}}))},e.prototype.parseGppString=function(e,t,n){return r(this,void 0,void 0,(function(){var r,a,s;return o(this,(function(o){switch(o.label){case 0:r="".concat(i.CONSENT_HANDLER_URL,"?consentString=").concat(e,"&isDefaultZone=").concat(t),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,fetch(r,{method:"GET"}).then((function(e){return e.json()}))];case 2:return a=o.sent().hasConsent,n(a),[3,4];case 3:return s=o.sent(),n(s.data.hasConsent),[3,4];case 4:return[2]}}))}))},e}();t.GDPRGppValidatorService=a,t.gdprGppValidatorService=new a},587:(e,t)=>{t.__esModule=!0,t.gdprGTMValidatorService=t.GDPRGTMValidatorService=void 0;var n=function(){function e(){}return e.prototype.hasConsent=function(){return!!document.querySelector('script[src*="googletagmanager.com/gtm.js"]')},e.prototype.handleConsent=function(e){e(!0)},e}();t.GDPRGTMValidatorService=n,t.gdprGTMValidatorService=new n},618:(e,t)=>{t.__esModule=!0,t.gdprOneTrustValidatorService=t.GDPROneTrustValidatorService=void 0;var n=function(){function e(){}return e.prototype.hasConsent=function(){return void 0!==window.OnetrustActiveGroups},e.prototype.handleConsent=function(e){this.cb=e;var t=window.OnetrustActiveGroups.toUpperCase();this.cb(t.indexOf("4")>-1)},e}();t.GDPROneTrustValidatorService=n,t.gdprOneTrustValidatorService=new n},471:(e,t,n)=>{t.__esModule=!0,t.gdprTcf1ValidatorService=t.GDPRTcf1ValidatorService=void 0;var r=n(778),o=function(){function e(){}return e.prototype.hasConsent=function(){return!!window.__cmp||!!this.getCmpFrame()},e.prototype.handleConsent=function(e){this.cb=e,this.callCmp(this.callback)},e.prototype.getCmpFrame=function(){var e=window;try{for(;e&&!e.frames.__cmpLocator;){if(e===window.top)return;e=e.parent}return e}catch(e){}},e.prototype.callback=function(){window.removeEventListener?window.removeEventListener("message",this.postMsgCB.bind(this),!1):window.detachEvent&&window.detachEvent("message",this.postMsgCB.bind(this),!1),this.cb.apply(this.cb,arguments)},e.prototype.postMsgCB=function(e){var t;try{t=e&&"string"==typeof e.data?JSON.parse(e.data):e.data}catch(e){this.callback.apply(this.callback,[!0])}t&&t.__cmpReturn&&this.onCmpCB(this.callback,t.__cmpReturn.returnValue,t.__cmpReturn.success)},e.prototype.callCmp=function(e){if("function"==typeof window.__cmp){var t=this;window.__cmp("getVendorConsents",[r.GDPR_VENDOR_ID],(function(n,r){t.onCmpCB(e.bind(t),n,r)}))}else{var n=this.getCmpFrame();if(window.addEventListener?window.addEventListener("message",this.postMsgCB,!1):window.attachEvent&&window.attachEvent("message",this.postMsgCB,!1),!n)return void this.callback.apply(this.callback,[{msg:"CMP not found"},!1]);var o={__cmpCall:{command:"getVendorConsents",parameter:[r.GDPR_VENDOR_ID],callId:r.GDPR_CALL_ID}};n.postMessage(o,"*")}},e.prototype.hasPurposeConsent=function(e){if(!e)return!0;var t=!0;for(var n in e)if(e.hasOwnProperty(n)&&(t=!1,e[n]))return!0;return t},e.prototype.onCmpCB=function(e,t,n){if((!n||!t||!t.vendorConsents||void 0===t.vendorConsents[r.GDPR_VENDOR_ID]||!0===t.vendorConsents[r.GDPR_VENDOR_ID])&&this.hasPurposeConsent(t.purposeConsents))return e(!0);e(!1)},e}();t.GDPRTcf1ValidatorService=o,t.gdprTcf1ValidatorService=new o},677:(e,t,n)=>{t.__esModule=!0,t.gdprTcf2ValidatorService=t.GDPRTcf2ValidatorService=void 0;var r=n(778),o=n(865),i=function(){function e(){this.tcfApiEventListeners=[]}return e.prototype.hasConsent=function(){return!!window.__tcfapi||!!this.getTCF2Window()},e.prototype.handleConsent=function(e){if(this.cb=e,window.__tcfapi){var t=this.onTCFChanges.bind(this);this.tcfApiEventListeners.push(t),window.__tcfapi("addEventListener",2,t)}else{var n=this.getTCF2Window();window.addEventListener?window.addEventListener("message",this.postMsgCB.bind(this),!1):window.attachEvent&&window.attachEvent("message",this.postMsgCB.bind(this),!1);var o={__tcfapiCall:{command:"addEventListener",parameter:[r.GDPR_VENDOR_ID],version:2,callId:r.GDPR_CALL_ID}};n.postMessage(o,"*")}},e.prototype.hasPurposeConsent=function(e){if(!(null==e?void 0:e.consents))return!0;var t=e.consents,n=o.GDPR_PURPOSE_CONSENTS,r=!0;return n.forEach((function(e){t.hasOwnProperty(e)&&!1===t[e]&&(r=!1)})),r},e.prototype.postMsgCB=function(e){e.data.__tcfapiReturn&&e.data.__tcfapiReturn.callId===r.GDPR_CALL_ID&&this.onTCFCB(e.data.__tcfapiReturn.returnValue,!0)},e.prototype.onTCFCB=function(e,t){!1!==e&&"cmpuishown"!==e.eventStatus&&(t&&"tcloaded"===(null==e?void 0:e.eventStatus)||"useractioncomplete"===(null==e?void 0:e.eventStatus)?(e&&e.vendor&&e.vendor.consents&&!1===e.vendor.consents[r.GDPR_VENDOR_ID]||!e||!this.hasPurposeConsent(e.purpose)?this.cb(!1):this.cb(!0),this.removeTcfApiEventListeners()):this.cb(!0))},e.prototype.removeTcfApiEventListeners=function(){window.__tcfapi&&this.tcfApiEventListeners.forEach((function(e){window.__tcfapi("removeEventListener",2,e)}))},e.prototype.onTCFChanges=function(e,t){this.onTCFCB(e,t)},e.prototype.getTCF2Window=function(){var e=window;try{for(;e&&!e.frames.__tcfapiLocator;){if(e===window.top)return;e=e.parent}return e}catch(e){}},e}();t.GDPRTcf2ValidatorService=i,t.gdprTcf2ValidatorService=new i},583:(e,t,n)=>{t.__esModule=!0,t.gdprUserCentricValidatorService=t.GDPRUserCentricValidatorService=void 0;var r=n(778),o=function(){function e(){}return e.prototype.hasConsent=function(){return!!window.UC_UI},e.prototype.handleConsent=function(e){this.cb=e;var t,n,o=window.UC_UI;this.cb(o.areAllConsentsAccepted()||!!(null===(n=null===(t=o.getServicesBaseInfo().find((function(e){return e.name===r.GDPR_VENDOR_NAME})))||void 0===t?void 0:t.consent)||void 0===n?void 0:n.status))},e}();t.GDPRUserCentricValidatorService=o,t.gdprUserCentricValidatorService=new o},895:(e,t,n)=>{t.__esModule=!0,t.gdprValidatorService=t.GDPRValidatorService=void 0;var r=n(583),o=n(166),i=n(987),a=n(618),s=n(587),c=n(471),d=n(677),u=n(994),p=n(17),l=function(){function e(){this.consentHandlerType=void 0}return e.prototype.checkHasConsent=function(e){var t=!0,n=this.clearAndCallback.bind(this,e);try{this.timeout=setTimeout((function(){e(t)}),500),d.gdprTcf2ValidatorService.hasConsent()?(this.consentHandlerType="tcf",d.gdprTcf2ValidatorService.handleConsent(n)):c.gdprTcf1ValidatorService.hasConsent()?(this.consentHandlerType="cmp",c.gdprTcf1ValidatorService.handleConsent(n)):r.gdprUserCentricValidatorService.hasConsent()?(this.consentHandlerType="uc",r.gdprUserCentricValidatorService.handleConsent(n)):o.gdprCookiebotValidatorService.hasConsent()?(this.consentHandlerType="cb",o.gdprCookiebotValidatorService.handleConsent(n)):i.gdprDidomiValidatorService.hasConsent()?(this.consentHandlerType="di",i.gdprDidomiValidatorService.handleConsent(n)):a.gdprOneTrustValidatorService.hasConsent()?(this.consentHandlerType="ot",a.gdprOneTrustValidatorService.handleConsent(n)):u.gdprCcpaValidator.hasConsent()?(this.consentHandlerType="ccpa",u.gdprCcpaValidator.handleConsent(n)):p.gdprGppValidatorService.hasConsent()?(this.consentHandlerType="gpp",p.gdprGppValidatorService.handleConsent(n)):s.gdprGTMValidatorService.hasConsent()?(this.consentHandlerType="gtm",s.gdprGTMValidatorService.handleConsent(n)):n(t)}catch(n){throw this.clearAndCallback(e,t),n}},e.prototype.clearAndCallback=function(e,t){clearTimeout(this.timeout),e(t,this.consentHandlerType)},e}();t.GDPRValidatorService=l,t.gdprValidatorService=new l},261:(e,t,n)=>{t.__esModule=!0,t.ApiService=void 0;var r=n(368),o=n(865),i=n(896),a=n(778);t.ApiService=function(e){var t=window[a.API_NAME],n=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.dispatch.apply(n,e)};n.version=t.version,n.loaded=t.loaded,n.marketerId=(0,r.transformMarketerIdToArray)(t.marketerId),n.queue=t.queue;var s=new i.DispatcherService;n.dispatch=s.dispatch.bind(s),n.addMarketer=function(e){n.marketerId=n.marketerId.concat((0,r.transformMarketerIdToArray)(e))},n["".concat(a.VERSION_NAME,"Version")]=o.VERSION,n.setZone=function(e){return n.zone=e},e[a.API_NAME]=n,this.apiObj=n}},63:(e,t,n)=>{t.__esModule=!0,t.cookiesService=t.CookiesService=void 0;var r=n(388),o=n(865),i=n(778),a=function(){function e(e){this.cookiesToProcess=[];var t=this;e.on(o.HAS_CONSENT_EVENT,(function(e){if(t.hasConsent=e,t.hasConsent)for(;t.cookiesToProcess.length;){var n=t.cookiesToProcess.pop();t.set(n.name,n.value,n.expirationInDays,n.domain)}}))}return e.prototype.set=function(e,t,n,r){if(void 0===n&&(n=7),this.hasConsent){var o=this.getAllCookies();o[e]=t;var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var s="expires="+a.toUTCString(),c="".concat(i.CLICK_ID_COOKIE_NAME,"=")+encodeURIComponent(JSON.stringify(o))+"; "+s+"; path=/;";r&&(c+="domain="+r+";"),document.cookie=c}else this.cookiesToProcess.push({name:e,value:t,expirationInDays:n,domain:r})},e.prototype.get=function(e){return this.getAllCookies()[e]||""},e.prototype.getAllCookies=function(){var e,t;if(!document.cookie)return{};var n,r=null===(t=document.cookie.split("; ").find((function(e){return e.startsWith("dicbo_id=")})))||void 0===t?void 0:t.split("=")[1];if(!r)return{};try{n=JSON.parse(decodeURIComponent(r))}catch(t){(e={})[i.CLICK_ID_COOKIE_NAME]=r,n=e}return n},e}();t.CookiesService=a,t.cookiesService=new a(r.eventBusService)},896:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};t.__esModule=!0,t.DispatcherService=void 0;var o=n(368),i=n(466),a=n(865),s=n(3),c=n(63),d=n(895),u=n(388),p=n(865),l=n(778),v=n(894),f=n(780),h=n(778),_=n(821),g=n(269),C=function(){function e(){this.hasConsent=!1,this.pixelsWaitingForConsent=[],this.hasConsentCalled=!1,this.isCheckConsentRespond=!1}return e.prototype.firePixel=function(e){if(this.isCheckConsentRespond)return this.fire(e,this.hasConsent);if(this.pixelsWaitingForConsent.push(e),!this.hasConsentCalled){this.hasConsentCalled=!0;var t=this,n=navigator;d.gdprValidatorService.checkHasConsent((function(r,o){for(o&&(e.cht=o),t.isCheckConsentRespond=!0,t.hasConsent=!!r,u.eventBusService.dispatch(p.HAS_CONSENT_EVENT,t.hasConsent);t.pixelsWaitingForConsent.length>0;)t.fire(t.pixelsWaitingForConsent.shift(),t.hasConsent,n)}))}},e.prototype.fire=function(e,t,n){var i;void 0===n&&(n=null);var a=r({optOut:!t,bust:(0,o.getRandomInt)(),referrer:document.referrer},e.cht&&{cht:e.cht}),s=this.getClickIdCookieCached(),c=r(r(r({},a),(0,v.getCustomPixelQueryParams)(e)),s&&((i={})[l.CLICK_ID_PIXEL_URL_PARAM]=s,i)),d=e.marketerId;if(-1!=d.indexOf("004e6e2a8dddb574d007a0de6dfc517063")||-1!=d.indexOf("00347ead71c7be8e9da622a7e9b52b02b0")||h.USE_FETCH_WITH_ATTRIBUTION_SRC&&_.featureFlagService.isTest(d,5))window.fetch("".concat((0,v.getBasePixelUrl)(e),"?").concat((0,o.getQueryParamsString)(c)),{keepalive:!0,method:"GET",credentials:"include",attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}});else if(h.SEND_BEACON_SUPPORT&&_.featureFlagService.isTest(d,100))(n||navigator).sendBeacon((0,v.getBasePixelUrl)(e)+"?"+(0,o.getQueryParamsString)(c));else{var u=new Image;u.referrerPolicy="no-referrer-when-downgrade",u.src=(0,v.getBasePixelUrl)(e)+"?"+(0,o.getQueryParamsString)(c)}},e.prototype.dispatch=function(e,t){var n=this;if(!t)throw new Error("Can't dispatch pixel, event name is missing");var r=arguments[2],o=this.getUniqueMarketers(apiObj.marketerId);(0,f.customDispatch)(o,(function(o){n.unifiedDispatch(e,t,o,r)}))},e.prototype.unifiedDispatch=function(e,t,n,r){var s=this.getRequestParams(t,n,r);"track"===e?(i.validatorService.validate(s),this.firePixel(s)):(0,o.logger)(a.LOG_TYPES.Error,"Command type ".concat(e," is not recognized."),t)},e.prototype.getRequestParams=function(e,t,n){var o,i=(0,g.getUniqueVariations)(),a=r(r({},n),((o={marketerId:t,name:e,dl:s.urlService.getLocation(),g:this.hasGtm()?1:0})["".concat(h.API_NAME,"Version")]=apiObj.version?apiObj.version:"-1",o["".concat(h.VERSION_NAME,"Version")]=apiObj["".concat(h.VERSION_NAME,"Version")],o));return i.length&&Object.assign(a,{variationId:i.join(",")}),Object.keys(a).forEach((function(e){return void 0===a[e]&&delete a[e]})),a},e.prototype.getUniqueMarketersNew=function(e){return e.filter((function(e,t,n){return n.indexOf(e)===t}))},e.prototype.getUniqueMarketers=function(e){for(var t=[],n={},r=0;r<e.length;r++)n[e[r]]||t.push(e[r]),n[e[r]]=!0;return t},e.prototype.getClickIdCookieCached=function(){var e,t=s.urlService.getParamFromUrl(l.CLICK_ID_URL_PARAM);if(t){var n=s.urlService.getParamFromUrl(l.DOMAIN_URL_PARAMETER_NAME);c.cookiesService.set(l.CLICK_ID_COOKIE_NAME,t,7,n),e=t}else e=c.cookiesService.get(l.CLICK_ID_COOKIE_NAME);return e&&e.replace(/#/g,"")},e.prototype.hasGtm=function(){return!!document.querySelector('script[src*="googletagmanager.com/gtm.js"]')},e}();t.DispatcherService=C},388:function(e,t){var n=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};t.__esModule=!0,t.eventBusService=t.EventBusService=void 0;var r=function(){function e(){this.listeners={}}return e.prototype.on=function(e,t){var n=this;return-1===Object.keys(this.listeners).indexOf(e)&&(this.listeners[e]=[]),this.listeners[e].push(t),function(){n.listeners[e]=n.listeners[e].filter((function(e){return e!=t}))}},e.prototype.dispatch=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];-1!==Object.keys(this.listeners).indexOf(e)&&this.listeners[e].forEach((function(e){return e.call.apply(e,n([null],t,!1))}))},e}();t.EventBusService=r,t.eventBusService=new r},269:function(e,t,n){var r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};t.__esModule=!0,t.getUniqueVariations=t.handleExperiments=void 0;var o=n(63);t.handleExperiments=function(e){e.addVariation=function(t){if(e.variations||(e.variations=[]),!(e.variations.indexOf(t)>-1)){e.variations.push(t);var n=o.cookiesService.get("variations"),i=n?n.split(",").map((function(e){return parseInt(e)})):[];i.indexOf(t)>-1||o.cookiesService.set("variations","".concat(r(r([],i,!0),[t],!1)))}}},t.getUniqueVariations=function(){var e=apiObj.variations||[],t=o.cookiesService.get("variations");return t&&t.split(",").forEach((function(t){var n=parseInt(t);isNaN(n)||-1!==e.indexOf(n)||e.push(n)})),e}},821:(e,t)=>{t.__esModule=!0,t.featureFlagService=t.FeatureFlagService=void 0;var n=function(){function e(){}return e.prototype.isTest=function(e,t){return e.split("").reduce((function(e,t){return e+t.charCodeAt(0)}),0)%100<t},e.prototype.isControl=function(e,t){return!this.isTest(e,t)},e}();t.FeatureFlagService=n,t.featureFlagService=new n},859:(e,t,n)=>{t.__esModule=!0,t.HistoryObserverService=void 0;var r=n(368),o=n(778);t.HistoryObserverService=function(){if(history.pushState&&history.replaceState&&window.addEventListener){var e=this,t=function(t){location.href!==e.lastVisited&&t&&(e.lastVisited=location.href,apiObj("track",o.PAGE_VIEW_NAME))};(0,r.decorate)(history,"pushState",t),(0,r.decorate)(history,"replaceState",t),window.addEventListener("popstate",t,!1)}}},599:(e,t,n)=>{t.__esModule=!0,t.KickstartService=void 0;var r=n(368),o=n(63),i=n(3),a=n(778),s=n(865),c=n(895),d=function(){function e(e){this.eventBusService=e}return e.prototype.getCachedClickId=function(){var e,t,n,d;if(!o.cookiesService.get(a.CLICK_ID_COOKIE_NAME)&&(d=parseInt(o.cookiesService.get(a.NO_CLICK_ID_COOKIE_NAME)),isNaN(d)||Date.now()-d>3e5)&&!i.urlService.getParamFromUrl(a.CLICK_ID_URL_PARAM)){var u=this;apiObj.setCachedClickId=(n=function(){o.cookiesService.set(a.NO_CLICK_ID_COOKIE_NAME,Date.now(),5/1440)},e=document.createElement("script"),t=(0,r.transformMarketerIdToString)(window.apiObj.marketerId),e.src=a.BASE_URL+"/cachedClickId?marketerId="+t,document.body.appendChild(e),function(e){if("optout"!==e)if("NoClickId"===e)apiObj.zone===s.Zone.Default?n():(c.gdprValidatorService.checkHasConsent((function(e,t){e&&n()})),u.eventBusService.on(s.HAS_CONSENT_EVENT,(function(e){e&&n()})));else{var t=i.urlService.getParamFromUrl(a.DOMAIN_URL_PARAMETER_NAME);e&&(e=e.replace(/#/g,"")),o.cookiesService.set(a.CLICK_ID_COOKIE_NAME,e,7,t)}})}},e}();t.KickstartService=d},88:(e,t,n)=>{t.__esModule=!0,t.CustomValidatorService=void 0;var r=n(865),o=n(368),i=n(778),a=function(){function e(){this.validCurrencies=["USD","CAD","EUR","GBP","ILS","AUD","MXN","BRL","SEK","SGD","RUB","NZD","INR","JPY","PHP","CHF"],this.validNameRegX=new RegExp("^[A-Za-z0-9]+[A-Za-z0-9- ]*$"),this.validNumber=new RegExp("^[0-9]+[.0-9]*$"),this.validNameLength=100}return e.prototype.validate=function(e){return e.content&&e.content.id,e.orderValue&&!e.currency?((0,o.logger)(r.LOG_TYPES.Warning,"Order value reported but no currency is declared",e.name),!1):e.currency&&-1===this.validCurrencies.indexOf(e.currency)?((0,o.logger)(r.LOG_TYPES.Warning,"Currency not recognized",e.name),!1):e.orderValue&&!this.validNumber.test(e.orderValue)?((0,o.logger)(r.LOG_TYPES.Warning,"Order value can only be a positive number",e.name),!1):e.name===i.PAGE_VIEW_NAME||this.validNameRegX.test(e.name)?!(e.name!==i.PAGE_VIEW_NAME&&e.name.length>this.validNameLength&&((0,o.logger)(r.LOG_TYPES.Warning,"Event name length cannot exceed 100 characters",e.name),1)):((0,o.logger)(r.LOG_TYPES.Warning,"Event Name invalid",e.name),!1)},e}();t.CustomValidatorService=a},199:(e,t)=>{t.__esModule=!0,t.fireTopics=void 0,t.fireTopics=function(){"browsingTopics"in document&&"featurePolicy"in document&&window.document.featurePolicy.allowsFeature("browsing-topics")&&fetch("https://amplify.outbrain.com/topics",{browsingTopics:!0}).then((function(e){}))}},3:(e,t)=>{t.__esModule=!0,t.urlService=t.UrlService=void 0;var n=function(){function e(){}return e.prototype.getParamFromUrl=function(e){var t=this.getLocation();t.indexOf("#")>-1&&(t=t.substring(0,t.indexOf("#")));for(var n=(t.split("?")[1]||"").split(/&/),r=0;r<n.length;r++)if(this.startsWith(n[r],e))return this.getParamValue(n[r]);return""},e.prototype.getLocation=function(){var e="";try{e=window.top.location.href||document.location.href}catch(t){e=document.location.href}return e||""},e.prototype.startsWith=function(e,t){return 0===e.indexOf(t+"=")},e.prototype.getParamValue=function(e){return e.split("=")[1].split("#")[0]},e}();t.UrlService=n,t.urlService=new n},466:(e,t,n)=>{t.__esModule=!0,t.validatorService=void 0;var r=n(88);t.validatorService=new r.CustomValidatorService},784:(e,t,n)=>{t.__esModule=!0,t.loadWaves=void 0;var r=n(894);t.loadWaves=function(){var e;function t(e){var t=document.createElement("script");t.async=!0,t.src=e,t.type="text/javascript";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}var n=function(e){var r,o;if(["https://my.outbrain.com","http://localhost:4949","http://localhost:2109","https://simsite.outbrain.com"].indexOf(e.origin)>-1&&"SHOW_EVENT_PICKER"===(null===(r=e.data)||void 0===r?void 0:r.message)){var i=(null===(o=e.data)||void 0===o?void 0:o.content).appName;t("https://my.outbrain.com/events-picker-app?appName=".concat(i||"codeless")),window.opener.postMessage({message:"EVENT_PICKER_CONNECTED"},e.origin),window.removeEventListener("message",n)}};window.addEventListener("message",n),null===(e=null===top||void 0===top?void 0:top.window.opener)||void 0===e||e.postMessage({message:"OB_SHOULD_SHOW_PICKER",content:{marketerId:apiObj.marketerId}},"*");try{Array.isArray(apiObj.marketerId)&&apiObj.marketerId.filter((function(e){return!!e})).slice(0,9).forEach((function(e){return t("https://wave.outbrain.com/mtWavesBundler/handler/".concat(e.trim()))}))}catch(e){(0,r.logError)(e,window.apiObj)}}}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(81)})();