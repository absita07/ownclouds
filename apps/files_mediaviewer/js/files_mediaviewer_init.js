(()=>{var e={473:(e,i,t)=>{"use strict";let r,o,s;t.d(i,{Z:()=>a}),r=t(147),o=t(455),s=_.filter(OC.appConfig.core.enabledPreviewProviders,(e=>!e.search("image"))),s=_.map(s,(e=>e.replace(/\\/g,""))),o.mimetypes=o.mimetypes.concat(s),r.config=o;const a=r},147:e=>{"use strict";e.exports=JSON.parse('{"name":"files_mediaviewer","version":"1.0.1","description":"Viewer for pictures and videos integrated in the files app","dependencies":{"@types/moment-duration-format":"^2.2.3","easygettext":"^2.17.0","moment-duration-format":"^2.3.2","svelte":"^3.x","swiper":"^7.2.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.6.2"},"devDependencies":{"@babel/core":"^7.16.0","@babel/preset-env":"^7.16.0","babel-loader":"^8.2.2","css-loader":"^6.5.0","sass":"^1.43.4","sass-loader":"^12.1.0","style-loader":"^3.3.1","vue-loader":"^15.9.8","vue-template-compiler":"^2.6.14","webpack":"^5.61.0","webpack-cli":"^4.9.1"},"scripts":{"build":"webpack --progress --mode=production","watch":"webpack --watch --mode=development"},"repository":{"type":"git","url":"git+https://github.com/owncloud/files_mediaviewer.git"},"keywords":["owncloud","media","gallery"],"author":"Felix Heidecke","license":"GPL-2.0","bugs":{"url":"https://github.com/owncloud/files_mediaviewer/issues"},"homepage":"https://github.com/owncloud/files_mediaviewer#readme"}')},455:e=>{"use strict";e.exports=JSON.parse('{"swiper":{"speed":300,"effect":"slide"},"mimetypes":["video/mp4","video/ogg","video/webm","video/quicktime"]}')}},i={};function r(t){var o=i[t];if(void 0!==o)return o.exports;var s=i[t]={exports:{}};return e[t](s,s.exports,r),s.exports}r.d=(e,i)=>{for(var t in i)r.o(i,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),OCA.Mediaviewer||(OCA.Mediaviewer={}),OCA.Mediaviewer.app=r(473).Z,$(document).ready((function(){const e=OCA.Mediaviewer.app,i=$("<div>",{id:e.name,html:"<div>"});if(!OCA.Files)return;let r=(t,r)=>{$("body").append(i),OCA.Mediaviewer.files=r.fileList.files,OC.addScript(e.name,e.name).then((()=>{OC.redirect(OC.joinPaths("#",e.name,t))}))};e.config.mimetypes.forEach((i=>{if(!(0!==i.search("video")||document.createElement("video").canPlayType&&document.createElement("video").canPlayType(i)))return;let o={mime:i,name:e.name,permissions:OC.PERMISSION_READ,displayName:t("files_mediaviewer","Open in Media Viewer"),iconClass:"icon-toggle",actionHandler:r};OCA.Files.fileActions&&(OCA.Files.fileActions.registerAction(o),OCA.Files.fileActions.setDefault(i,e.name))}))}))})();