"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","0a0aae7a1d30560d882d0651ec48a64a"],["static/css/main.3e5e5a8d.css","7411301ccd84f2a06e19beb866a38e51"],["static/js/main.91d0cf24.js","eaf4ddf11e9e478d33dda9e8ba254fea"],["static/media/1.12162ebd.jpg","12162ebd2ae86a53100d2c269d08d83d"],["static/media/10.e548ec3c.jpg","e548ec3ccca5c44f11209e1990c8601f"],["static/media/11.f0e05115.jpg","f0e0511562ed6e914abc38f824a521ff"],["static/media/12.58846deb.jpg","58846deb2743b932ca1c965ec2b14b91"],["static/media/13.9b1ec9ba.jpg","9b1ec9badc09441ba8ea897819ee0144"],["static/media/14.9961bd57.jpg","9961bd5717fcadfebde257f0cae65f4a"],["static/media/15.e876768d.jpg","e876768d84ffe882142c218df47e220a"],["static/media/16.52b2ebeb.jpg","52b2ebeb4d6d8666e20aca8f7ffa6f1c"],["static/media/17.86de5aa6.jpg","86de5aa6d144bb353b7fb38d83e101f5"],["static/media/2.e0400956.jpg","e0400956dcf26e0c4f34ba6e2ac63a0d"],["static/media/3.752b3471.jpg","752b34711ffc83e7fd53fb5cc37229ae"],["static/media/4.61ea067e.jpg","61ea067e6ca54117e6b810e2f45c7dc2"],["static/media/5.f96aa354.jpg","f96aa354ea1988f1f31382b9c3ef0a39"],["static/media/6.af36ce1d.jpg","af36ce1d9326172e44cbeac574f3e8f6"],["static/media/7.13b06e35.jpg","13b06e35471bfd8d6cd86a63eec1fc6e"],["static/media/8.1c250beb.jpg","1c250bebd078813a83d3586ed423722f"],["static/media/9.beb48963.jpg","beb48963ecedcf857aa510b02325aac7"],["static/media/logo.7d47ce9a.png","7d47ce9acc60f0fcb60cb618c1c17574"],["static/media/orb_logo.d3380421.png","d3380421c67fae7ea80f7f0f89bb820c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/GrilltimeLanding/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});