!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).firebase=t()}(this,function(){"use strict";function r(t){const r=[];let n=0;for(let i=0;i<t.length;i++){let e=t.charCodeAt(i);e<128?r[n++]=e:(e<2048?r[n++]=e>>6|192:(55296==(64512&e)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(e=65536+((1023&e)<<10)+(1023&t.charCodeAt(++i)),r[n++]=e>>18|240,r[n++]=e>>12&63|128):r[n++]=e>>12|224,r[n++]=e>>6&63|128),r[n++]=63&e|128)}return r}const n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_;const i=[];for(let l=0;l<r.length;l+=3){var a=r[l],s=l+1<r.length,o=s?r[l+1]:0,c=l+2<r.length,h=c?r[l+2]:0;let e=(15&o)<<2|h>>6,t=63&h;c||(t=64,s||(e=64)),i.push(n[a>>2],n[(3&a)<<4|o>>4],n[e],n[t])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){var i,a,s=e[r++];s<128?t[n++]=String.fromCharCode(s):191<s&&s<224?(i=e[r++],t[n++]=String.fromCharCode((31&s)<<6|63&i)):239<s&&s<365?(a=((7&s)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536,t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))):(i=e[r++],a=e[r++],t[n++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&a))}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();var r=t?this.charToByteMapWebSafe_:this.charToByteMap_;const n=[];for(let c=0;c<e.length;){var i=r[e.charAt(c++)],a=c<e.length?r[e.charAt(c)]:0;++c;var s=c<e.length?r[e.charAt(c)]:64;++c;var o=c<e.length?r[e.charAt(c)]:64;if(++c,null==i||null==a||null==s||null==o)throw Error();n.push(i<<2|a>>4),64!==s&&(n.push(a<<4&240|s>>2),64!==o&&n.push(s<<6&192|o))}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){var t=r(e);return n.encodeByteArray(t,!0)};function c(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const r=t;return new Date(r.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=c(e[n],t[n]));return e}class a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(r){return(e,t)=>{e?this.reject(e):this.resolve(t),"function"==typeof r&&(this.promise.catch(()=>{}),1===r.length?r(e):r(e,t))}}}class s extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,o.prototype.create)}}class o{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){var n,r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],a=a?(n=r,a.replace(h,(e,t)=>{var r=n[t];return null!=r?String(r):`<${t}?>`})):"Error",a=`${this.serviceName}: ${a} (${i}).`;return new s(i,a,r)}}const h=/\{\$([^}]+)}/g;function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function p(e,t){if(e===t)return 1;const r=Object.keys(e),n=Object.keys(t);for(const s of r){if(!n.includes(s))return;var i=e[s],a=t[s];if(u(i)&&u(a)){if(!p(i,a))return}else if(i!==a)return}for(const o of n)if(!r.includes(o))return;return 1}function u(e){return null!==e&&"object"==typeof e}function d(e,t){const r=new f(e,t);return r.subscribe.bind(r)}class f{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=g),void 0===n.error&&(n.error=g),void 0===n.complete&&(n.complete=g);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],--this.observerCount,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function g(){}class m{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const b="[DEFAULT]";class v{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new a;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(r=null==e?void 0:e.optional)&&void 0!==r&&r;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:b})}catch(e){}for(var[t,r]of this.instancesDeferred.entries()){t=this.normalizeInstanceIdentifier(t);try{var n=this.getOrInitializeService({instanceIdentifier:t});r.resolve(n)}catch(e){}}}}clearInstance(e=b){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=b){return this.instances.has(e)}getOptions(e=b){return this.instancesOptions.get(e)||{}}initialize(e={}){var{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);var n,i,a=this.getOrInitializeService({instanceIdentifier:r,options:t});for([n,i]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(n)&&i.resolve(a);return a}onInit(e,t){var r=this.normalizeInstanceIdentifier(t);const n=null!==(i=this.onInitCallbacks.get(r))&&void 0!==i?i:new Set;n.add(e),this.onInitCallbacks.set(r,n);var i=this.instances.get(r);return i&&e(i,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){var r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e)===b?void 0:n,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e=b){return!this.component||this.component.multipleInstances?e:b}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class _{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);var t=new v(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const y=[];var E,e;(e=E=E||{})[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT";const w={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},t=E.INFO,I={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},C=(e,t,...r)=>{if(!(t<e.logLevel)){var n=(new Date).toISOString(),i=I[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${n}]  ${e.name}:`,...r)}};class S{constructor(e){this.name=e,this._logLevel=t,this._logHandler=C,this._userLogHandler=null,y.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in E))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?w[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...e),this._logHandler(this,E.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...e),this._logHandler(this,E.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,E.INFO,...e),this._logHandler(this,E.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,E.WARN,...e),this._logHandler(this,E.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...e),this._logHandler(this,E.ERROR,...e)}}function A(r){return new Promise(function(e,t){r.onsuccess=function(){e(r.result)},r.onerror=function(){t(r.error)}})}function O(r,n,i){var a,e=new Promise(function(e,t){A(a=r[n].apply(r,i)).then(e,t)});return e.request=a,e}function D(e,r,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:function(){return this[r][t]},set:function(e){this[r][t]=e}})})}function N(t,r,n,e){e.forEach(function(e){e in n.prototype&&(t.prototype[e]=function(){return O(this[r],e,arguments)})})}function L(t,r,n,e){e.forEach(function(e){e in n.prototype&&(t.prototype[e]=function(){return this[r][e].apply(this[r],arguments)})})}function P(e,n,t,r){r.forEach(function(r){r in t.prototype&&(e.prototype[r]=function(){return e=this[n],(t=O(e,r,arguments)).then(function(e){if(e)return new T(e,t.request)});var e,t})})}function B(e){this._index=e}function T(e,t){this._cursor=e,this._request=t}function j(e){this._store=e}function R(r){this._tx=r,this.complete=new Promise(function(e,t){r.oncomplete=function(){e()},r.onerror=function(){t(r.error)},r.onabort=function(){t(r.error)}})}function M(e,t,r){this._db=e,this.oldVersion=t,this.transaction=new R(r)}function k(e){this._db=e}D(B,"_index",["name","keyPath","multiEntry","unique"]),N(B,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),P(B,"_index",IDBIndex,["openCursor","openKeyCursor"]),D(T,"_cursor",["direction","key","primaryKey","value"]),N(T,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(r){r in IDBCursor.prototype&&(T.prototype[r]=function(){var t=this,e=arguments;return Promise.resolve().then(function(){return t._cursor[r].apply(t._cursor,e),A(t._request).then(function(e){if(e)return new T(e,t._request)})})})}),j.prototype.createIndex=function(){return new B(this._store.createIndex.apply(this._store,arguments))},j.prototype.index=function(){return new B(this._store.index.apply(this._store,arguments))},D(j,"_store",["name","keyPath","indexNames","autoIncrement"]),N(j,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),P(j,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),L(j,"_store",IDBObjectStore,["deleteIndex"]),R.prototype.objectStore=function(){return new j(this._tx.objectStore.apply(this._tx,arguments))},D(R,"_tx",["objectStoreNames","mode"]),L(R,"_tx",IDBTransaction,["abort"]),M.prototype.createObjectStore=function(){return new j(this._db.createObjectStore.apply(this._db,arguments))},D(M,"_db",["name","version","objectStoreNames"]),L(M,"_db",IDBDatabase,["deleteObjectStore","close"]),k.prototype.transaction=function(){return new R(this._db.transaction.apply(this._db,arguments))},D(k,"_db",["name","version","objectStoreNames"]),L(k,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(a){[j,B].forEach(function(e){a in e.prototype&&(e.prototype[a.replace("open","iterate")]=function(){var e,t=(e=arguments,Array.prototype.slice.call(e)),r=t[t.length-1],n=this._store||this._index,i=n[a].apply(n,t.slice(0,-1));i.onsuccess=function(){r(i.result)}})})}),[B,j].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,r){var n=this,i=[];return new Promise(function(t){n.iterateCursor(e,function(e){e?(i.push(e.value),void 0===r||i.length!=r?e.continue():t(i)):t(i)})})})});class x{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if("VERSION"!==(null==(t=e.getComponent())?void 0:t.type))return null;var t,t=e.getImmediate();return`${t.library}/${t.version}`}).filter(e=>e).join(" ")}}const $="@firebase/app",F=new S("@firebase/app");var z;const H="[DEFAULT]",V={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},U=new Map,W=new Map;function K(t,r){try{t.container.addComponent(r)}catch(e){F.debug(`Component ${r.name} failed to register with FirebaseApp ${t.name}`,e)}}function q(e,t){e.container.addOrOverwriteComponent(t)}function G(e){var t=e.name;if(W.has(t))return F.debug(`There were multiple attempts to register component ${t}.`),!1;W.set(t,e);for(const r of U.values())K(r,e);return!0}function J(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}const Y=new o("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});class X{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new m("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Y.create("app-deleted",{appName:this._name})}}const Z="9.6.8";function Q(e,t={}){if("object"!=typeof t){const n=t;t={name:n}}var r=Object.assign({name:H,automaticDataCollectionEnabled:!1},t);const n=r.name;if("string"!=typeof n||!n)throw Y.create("bad-app-name",{appName:String(n)});var i=U.get(n);if(i){if(p(e,i.options)&&p(r,i.config))return i;throw Y.create("duplicate-app",{appName:n})}const a=new _(n);for(const s of W.values())a.addComponent(s);r=new X(e,r,a);return U.set(n,r),r}async function ee(e){var t=e.name;U.has(t)&&(U.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function te(e,t,r){let n=null!==(a=V[e])&&void 0!==a?a:e;r&&(n+=`-${r}`);var i=n.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const s=[`Unable to register library "${n}" with version "${t}":`];return i&&s.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void F.warn(s.join(" "))}G(new m(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}function re(e,t){if(null!==e&&"function"!=typeof e)throw Y.create("invalid-log-argument");!function(a,e){for(const t of y){let i=null;e&&e.level&&(i=w[e.level]),t.userLogHandler=null===a?null:(e,t,...r)=>{var n=r.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");t>=(null!==i&&void 0!==i?i:e.logLevel)&&a({level:E[t].toLowerCase(),message:n,args:r,type:e.name})}}}(e,t)}function ne(e){var t;t=e,y.forEach(e=>{e.setLogLevel(t)})}const ie="firebase-heartbeat-database",ae=1,se="firebase-heartbeat-store";let oe=null;function ce(){var e,t,r,n,i;return oe=oe||(e=ie,t=ae,r=e=>{0===e.oldVersion&&e.createObjectStore(se)},n=O(indexedDB,"open",[e,t]),(i=n.request)&&(i.onupgradeneeded=function(e){r&&r(new M(i.result,e.oldVersion,i.transaction))}),n.then(function(e){return new k(e)}).catch(e=>{throw Y.create("storage-open",{originalErrorMessage:e.message})})),oe}async function he(e,t){try{const r=await ce(),n=r.transaction(se,"readwrite"),i=n.objectStore(se);return await i.put(t,le(e)),n.complete}catch(e){throw Y.create("storage-set",{originalErrorMessage:e.message})}}function le(e){return`${e.name}!${e.options.appId}`}class pe{constructor(e){this.container=e,this._heartbeatsCache=null;var t=this.container.getProvider("app").getImmediate();this._storage=new ue(t),this._heartbeatsCachePromise=this._storage.read().then(e=>this._heartbeatsCache=e)}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate();var t=e.getPlatformInfoString();const r=function(){const e=new Date;return e.toISOString().substring(0,10)}();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(e=>e.date===r))return this._heartbeatsCache.push({date:r,userAgent:t}),this._heartbeatsCache=this._heartbeatsCache.filter(e=>{var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache)return"";var{heartbeatsToSend:e,unsentEntries:t}=function(e,t=1024){const r=[];let n=e.slice();for(const i of e){const a=r.find(e=>e.userAgent===i.userAgent);if(a){if(a.dates.push(i.date),de(r)>t){a.dates.pop();break}}else if(r.push({userAgent:i.userAgent,dates:[i.date]}),de(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache),e=i(JSON.stringify({version:2,heartbeats:e}));return 0<t.length?(this._heartbeatsCache=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),e}}class ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise((t,r)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var e;r((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){r(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){var e=await async function(e){try{const t=await ce();return t.transaction(se).objectStore(se).get(le(e))}catch(e){throw Y.create("storage-get",{originalErrorMessage:e.message})}}(this.app);return(null==e?void 0:e.heartbeats)||[]}return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return he(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){var t=await this.read();return he(this.app,{heartbeats:[...t,...e]})}}async delete(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return he(this.app,{heartbeats:e.filter(e=>!t.includes(e))})}}async deleteAll(){if(await this._canUseIndexedDBPromise)return async function(e){try{const t=await ce(),r=t.transaction(se,"readwrite");return await r.objectStore(se).delete(le(e)),r.complete}catch(e){throw Y.create("storage-delete",{originalErrorMessage:e.message})}}(this.app)}}function de(e){return i(JSON.stringify({version:2,heartbeats:e})).length}z="",G(new m("platform-logger",e=>new x(e),"PRIVATE")),G(new m("heartbeat",e=>new pe(e),"PRIVATE")),te($,"0.7.18",z),te($,"0.7.18","esm2017"),te("fire-js","");var fe=Object.freeze({__proto__:null,SDK_VERSION:Z,_DEFAULT_ENTRY_NAME:H,_addComponent:K,_addOrOverwriteComponent:q,_apps:U,_clearComponents:function(){W.clear()},_components:W,_getProvider:J,_registerComponent:G,_removeServiceInstance:function(e,t,r=H){J(e,t).clearInstance(r)},deleteApp:ee,getApp:function(e=H){var t=U.get(e);if(!t)throw Y.create("no-app",{appName:e});return t},getApps:function(){return Array.from(U.values())},initializeApp:Q,onLog:re,registerVersion:te,setLogLevel:ne,FirebaseError:s});class ge{constructor(e,t){this._delegate=e,this.firebase=t,K(e,new m("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ee(this._delegate)))}_getService(e,t=H){var r;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(r=n.getComponent())||void 0===r?void 0:r.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=H){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){K(this._delegate,e)}_addOrOverwriteComponent(e){q(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}const me=new o("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});function be(i){const a={},s={__esModule:!0,initializeApp:function(e,t={}){var r=Q(e,t);if(l(a,r.name))return a[r.name];var n=new i(r,s);return a[r.name]=n},app:o,registerVersion:te,setLogLevel:ne,onLog:re,apps:null,SDK_VERSION:Z,INTERNAL:{registerComponent:function(r){const n=r.name,t=n.replace("-compat","");{var e;G(r)&&"PUBLIC"===r.type&&(e=(e=o())=>{if("function"!=typeof e[t])throw me.create("invalid-app-argument",{appName:n});return e[t]()},void 0!==r.serviceProps&&c(e,r.serviceProps),s[t]=e,i.prototype[t]=function(...e){const t=this._getService.bind(this,n);return t.apply(this,r.multipleInstances?e:[])})}return"PUBLIC"===r.type?s[t]:null},removeApp:function(e){delete a[e]},useAsService:function(e,t){if("serverAuth"===t)return null;var r=t;return r},modularAPIs:fe}};function o(e){if(e=e||H,!l(a,e))throw me.create("no-app",{appName:e});return a[e]}return s.default=s,Object.defineProperty(s,"apps",{get:function(){return Object.keys(a).map(e=>a[e])}}),o.App=i,s}var ve=function e(){const t=be(ge);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){c(t,e)},createSubscribe:d,ErrorFactory:o,deepExtend:c}),t}();const _e=new S("@firebase/app-compat");if("object"==typeof self&&self.self===self&&void 0!==self.firebase){_e.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const Ee=self.firebase.SDK_VERSION;Ee&&0<=Ee.indexOf("LITE")&&_e.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ye=ve;te("@firebase/app-compat","0.1.19",void 0);return ye.registerVersion("firebase","9.6.8","app-compat-cdn"),ye});
//# sourceMappingURL=firebase-app-compat.js.map
