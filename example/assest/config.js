/* lithe-example |  | vserion 0.0.1*/
(function(o,e){var t,s,n,a=!(typeof window===e||!o.navigator||!o.document);a&&(t=/debug/.test(location.search),s=location.href.slice(0,location.href.lastIndexOf("/")),n="http://localhost:8081");var c={basepath:t?s+"/src/":s+"/assest/",alias:{markdown:"mods/markdown"},publicpath:t?n+"/public/src/":n+"/public/src/",publicdeps:{"vendors/zepto.js":"vendors/v1/zepto.js"}};o.define&&a?define("config",function(){return c}):module.exports=c})(this);