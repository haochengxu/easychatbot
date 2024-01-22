var EasyChatbot=function(X,N,Qe){"use strict";var ne={exports:{}},G={},ve;function Ze(){if(ve)return G;ve=1;var t={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return t.NODE_ENV!=="production"&&function(){var a=N,n=Symbol.for("react.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),d=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),L=Symbol.iterator,O="@@iterator";function P(e){if(e===null||typeof e!="object")return null;var r=L&&e[L]||e[O];return typeof r=="function"?r:null}var I=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){{for(var r=arguments.length,i=new Array(r>1?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];St("error",e,i)}}function St(e,r,i){{var c=I.ReactDebugCurrentFrame,v=c.getStackAddendum();v!==""&&(r+="%s",i=i.concat([v]));var g=i.map(function(h){return String(h)});g.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,g)}}var Ot=!1,Tt=!1,wt=!1,At=!1,It=!1,Ae;Ae=Symbol.for("react.module.reference");function Nt(e){return!!(typeof e=="string"||typeof e=="function"||e===o||e===p||It||e===u||e===C||e===w||At||e===M||Ot||Tt||wt||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===E||e.$$typeof===f||e.$$typeof===d||e.$$typeof===R||e.$$typeof===Ae||e.getModuleId!==void 0))}function Pt(e,r,i){var c=e.displayName;if(c)return c;var v=r.displayName||r.name||"";return v!==""?i+"("+v+")":i}function Ie(e){return e.displayName||"Context"}function x(e){if(e==null)return null;if(typeof e.tag=="number"&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case o:return"Fragment";case s:return"Portal";case p:return"Profiler";case u:return"StrictMode";case C:return"Suspense";case w:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d:var r=e;return Ie(r)+".Consumer";case f:var i=e;return Ie(i._context)+".Provider";case R:return Pt(e,e.render,"ForwardRef");case E:var c=e.displayName||null;return c!==null?c:x(e.type)||"Memo";case S:{var v=e,g=v._payload,h=v._init;try{return x(h(g))}catch{return null}}}return null}var k=Object.assign,V=0,Ne,Pe,xe,je,Me,De,Le;function ke(){}ke.__reactDisabledLog=!0;function xt(){{if(V===0){Ne=console.log,Pe=console.info,xe=console.warn,je=console.error,Me=console.group,De=console.groupCollapsed,Le=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ke,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}V++}}function jt(){{if(V--,V===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:Ne}),info:k({},e,{value:Pe}),warn:k({},e,{value:xe}),error:k({},e,{value:je}),group:k({},e,{value:Me}),groupCollapsed:k({},e,{value:De}),groupEnd:k({},e,{value:Le})})}V<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var oe=I.ReactCurrentDispatcher,ie;function Q(e,r,i){{if(ie===void 0)try{throw Error()}catch(v){var c=v.stack.trim().match(/\n( *(at )?)/);ie=c&&c[1]||""}return`
`+ie+e}}var ce=!1,Z;{var Mt=typeof WeakMap=="function"?WeakMap:Map;Z=new Mt}function Fe(e,r){if(!e||ce)return"";{var i=Z.get(e);if(i!==void 0)return i}var c;ce=!0;var v=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var g;g=oe.current,oe.current=null,xt();try{if(r){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(j){c=j}Reflect.construct(e,[],h)}else{try{h.call()}catch(j){c=j}e.call(h.prototype)}}else{try{throw Error()}catch(j){c=j}e()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var l=j.stack.split(`
`),T=c.stack.split(`
`),m=l.length-1,y=T.length-1;m>=1&&y>=0&&l[m]!==T[y];)y--;for(;m>=1&&y>=0;m--,y--)if(l[m]!==T[y]){if(m!==1||y!==1)do if(m--,y--,y<0||l[m]!==T[y]){var A=`
`+l[m].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),typeof e=="function"&&Z.set(e,A),A}while(m>=1&&y>=0);break}}}finally{ce=!1,oe.current=g,jt(),Error.prepareStackTrace=v}var Y=e?e.displayName||e.name:"",ze=Y?Q(Y):"";return typeof e=="function"&&Z.set(e,ze),ze}function Dt(e,r,i){return Fe(e,!1)}function Lt(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function ee(e,r,i){if(e==null)return"";if(typeof e=="function")return Fe(e,Lt(e));if(typeof e=="string")return Q(e);switch(e){case C:return Q("Suspense");case w:return Q("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case R:return Dt(e.render);case E:return ee(e.type,r,i);case S:{var c=e,v=c._payload,g=c._init;try{return ee(g(v),r,i)}catch{}}}return""}var te=Object.prototype.hasOwnProperty,Ye={},Ge=I.ReactDebugCurrentFrame;function re(e){if(e){var r=e._owner,i=ee(e.type,e._source,r?r.type:null);Ge.setExtraStackFrame(i)}else Ge.setExtraStackFrame(null)}function kt(e,r,i,c,v){{var g=Function.call.bind(te);for(var h in e)if(g(e,h)){var l=void 0;try{if(typeof e[h]!="function"){var T=Error((c||"React class")+": "+i+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw T.name="Invariant Violation",T}l=e[h](r,h,c,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(m){l=m}l&&!(l instanceof Error)&&(re(v),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",i,h,typeof l),re(null)),l instanceof Error&&!(l.message in Ye)&&(Ye[l.message]=!0,re(v),b("Failed %s type: %s",i,l.message),re(null))}}}var Ft=Array.isArray;function ue(e){return Ft(e)}function Yt(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,i=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i}}function Gt(e){try{return Ue(e),!1}catch{return!0}}function Ue(e){return""+e}function He(e){if(Gt(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Yt(e)),Ue(e)}var J=I.ReactCurrentOwner,Ut={key:!0,ref:!0,__self:!0,__source:!0},Ke,Be,le;le={};function Ht(e){if(te.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Kt(e){if(te.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Bt(e,r){if(typeof e.ref=="string"&&J.current&&r&&J.current.stateNode!==r){var i=x(J.current.type);le[i]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',x(J.current.type),e.ref),le[i]=!0)}}function Wt(e,r){{var i=function(){Ke||(Ke=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}}function $t(e,r){{var i=function(){Be||(Be=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"ref",{get:i,configurable:!0})}}var Vt=function(e,r,i,c,v,g,h){var l={$$typeof:n,type:e,key:r,ref:i,props:h,_owner:g};return l._store={},Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l};function Jt(e,r,i,c,v){{var g,h={},l=null,T=null;i!==void 0&&(He(i),l=""+i),Kt(r)&&(He(r.key),l=""+r.key),Ht(r)&&(T=r.ref,Bt(r,v));for(g in r)te.call(r,g)&&!Ut.hasOwnProperty(g)&&(h[g]=r[g]);if(e&&e.defaultProps){var m=e.defaultProps;for(g in m)h[g]===void 0&&(h[g]=m[g])}if(l||T){var y=typeof e=="function"?e.displayName||e.name||"Unknown":e;l&&Wt(h,y),T&&$t(h,y)}return Vt(e,l,T,v,c,J.current,h)}}var fe=I.ReactCurrentOwner,We=I.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,i=ee(e.type,e._source,r?r.type:null);We.setExtraStackFrame(i)}else We.setExtraStackFrame(null)}var de;de=!1;function he(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function $e(){{if(fe.current){var e=x(fe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Xt(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),i=e.lineNumber;return`

Check your code at `+r+":"+i+"."}return""}}var Ve={};function qt(e){{var r=$e();if(!r){var i=typeof e=="string"?e:e.displayName||e.name;i&&(r=`

Check the top-level render call using <`+i+">.")}return r}}function Je(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var i=qt(r);if(Ve[i])return;Ve[i]=!0;var c="";e&&e._owner&&e._owner!==fe.current&&(c=" It was passed a child from "+x(e._owner.type)+"."),F(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,c),F(null)}}function Xe(e,r){{if(typeof e!="object")return;if(ue(e))for(var i=0;i<e.length;i++){var c=e[i];he(c)&&Je(c,r)}else if(he(e))e._store&&(e._store.validated=!0);else if(e){var v=P(e);if(typeof v=="function"&&v!==e.entries)for(var g=v.call(e),h;!(h=g.next()).done;)he(h.value)&&Je(h.value,r)}}}function zt(e){{var r=e.type;if(r==null||typeof r=="string")return;var i;if(typeof r=="function")i=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===R||r.$$typeof===E))i=r.propTypes;else return;if(i){var c=x(r);kt(i,e.props,"prop",c,e)}else if(r.PropTypes!==void 0&&!de){de=!0;var v=x(r);b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",v||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Qt(e){{for(var r=Object.keys(e.props),i=0;i<r.length;i++){var c=r[i];if(c!=="children"&&c!=="key"){F(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",c),F(null);break}}e.ref!==null&&(F(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),F(null))}}function qe(e,r,i,c,v,g){{var h=Nt(e);if(!h){var l="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var T=Xt(v);T?l+=T:l+=$e();var m;e===null?m="null":ue(e)?m="array":e!==void 0&&e.$$typeof===n?(m="<"+(x(e.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):m=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",m,l)}var y=Jt(e,r,i,v,g);if(y==null)return y;if(h){var A=r.children;if(A!==void 0)if(c)if(ue(A)){for(var Y=0;Y<A.length;Y++)Xe(A[Y],e);Object.freeze&&Object.freeze(A)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Xe(A,e)}return e===o?Qt(y):zt(y),y}}function Zt(e,r,i){return qe(e,r,i,!0)}function er(e,r,i){return qe(e,r,i,!1)}var tr=er,rr=Zt;G.Fragment=o,G.jsx=tr,G.jsxs=rr}(),G}var U={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function et(){if(Ee)return U;Ee=1;var t=N,a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(f,d,R){var C,w={},E=null,S=null;R!==void 0&&(E=""+R),d.key!==void 0&&(E=""+d.key),d.ref!==void 0&&(S=d.ref);for(C in d)s.call(d,C)&&!u.hasOwnProperty(C)&&(w[C]=d[C]);if(f&&f.defaultProps)for(C in d=f.defaultProps,d)w[C]===void 0&&(w[C]=d[C]);return{$$typeof:a,type:f,key:E,ref:S,props:w,_owner:o.current}}return U.Fragment=n,U.jsx=p,U.jsxs=p,U}var tt={};tt.NODE_ENV==="production"?ne.exports=et():ne.exports=Ze();var _=ne.exports;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(ge||(ge={}));var pe;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(pe||(pe={}));var _e;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(_e||(_e={}));var me;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(me||(me={}));var q;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})(q||(q={}));var Re;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(Re||(Re={}));/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H extends Error{constructor(a){super(`[GoogleGenerativeAI Error]: ${a}`)}}class ye extends H{constructor(a,n){super(a),this.response=n}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="https://generativelanguage.googleapis.com",nt="v1",at="0.1.3",st="genai-js";var D;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(D||(D={}));class K{constructor(a,n,s,o){this.model=a,this.task=n,this.apiKey=s,this.stream=o}toString(){let a=`${rt}/${nt}/models/${this.model}:${this.task}`;return this.stream&&(a+="?alt=sse"),a}}function ot(){return`${st}/${at}`}async function B(t,a){let n;try{if(n=await fetch(t.toString(),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":ot(),"x-goog-api-key":t.apiKey},body:a}),!n.ok){let s="";try{const o=await n.json();s=o.error.message,o.error.details&&(s+=` ${JSON.stringify(o.error.details)}`)}catch{}throw new Error(`[${n.status} ${n.statusText}] ${s}`)}}catch(s){const o=new H(`Error fetching from ${t.toString()}: ${s.message}`);throw o.stack=s.stack,o}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Ce(t.candidates[0]))throw new ye(`${z(t)}`,t);return it(t)}else if(t.promptFeedback)throw new ye(`Text not available. ${z(t)}`,t);return""},t}function it(t){var a,n,s,o;return!((o=(s=(n=(a=t.candidates)===null||a===void 0?void 0:a[0].content)===null||n===void 0?void 0:n.parts)===null||s===void 0?void 0:s[0])===null||o===void 0)&&o.text?t.candidates[0].content.parts[0].text:""}const ct=[q.RECITATION,q.SAFETY];function Ce(t){return!!t.finishReason&&ct.includes(t.finishReason)}function z(t){var a,n,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((a=t.promptFeedback)===null||a===void 0)&&a.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const u=t.candidates[0];Ce(u)&&(o+=`Candidate was blocked due to ${u.finishReason}`,u.finishMessage&&(o+=`: ${u.finishMessage}`))}return o}function W(t){return this instanceof W?(this.v=t,this):new W(t)}function ut(t,a,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(t,a||[]),o,u=[];return o={},p("next"),p("throw"),p("return"),o[Symbol.asyncIterator]=function(){return this},o;function p(E){s[E]&&(o[E]=function(S){return new Promise(function(M,L){u.push([E,S,M,L])>1||f(E,S)})})}function f(E,S){try{d(s[E](S))}catch(M){w(u[0][3],M)}}function d(E){E.value instanceof W?Promise.resolve(E.value.v).then(R,C):w(u[0][2],E)}function R(E){f("next",E)}function C(E){f("throw",E)}function w(E,S){E(S),u.shift(),u.length&&f(u[0][0],u[0][1])}}typeof SuppressedError=="function"&&SuppressedError;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function lt(t){const a=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=ht(a),[s,o]=n.tee();return{stream:dt(s),response:ft(o)}}async function ft(t){const a=[],n=t.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return ae(vt(a));a.push(o)}}function dt(t){return ut(this,arguments,function*(){const n=t.getReader();for(;;){const{value:s,done:o}=yield W(n.read());if(o)break;yield yield W(ae(s))}})}function ht(t){const a=t.getReader();return new ReadableStream({start(s){let o="";return u();function u(){return a.read().then(({value:p,done:f})=>{if(f){if(o.trim()){s.error(new H("Failed to parse stream"));return}s.close();return}o+=p;let d=o.match(be),R;for(;d;){try{R=JSON.parse(d[1])}catch{s.error(new H(`Error parsing JSON response: "${d[1]}"`));return}s.enqueue(R),o=o.substring(d[0].length),d=o.match(be)}return u()})}}})}function vt(t){const a=t[t.length-1],n={promptFeedback:a==null?void 0:a.promptFeedback};for(const s of t)if(s.candidates)for(const o of s.candidates){const u=o.index;if(n.candidates||(n.candidates=[]),n.candidates[u]||(n.candidates[u]={index:o.index}),n.candidates[u].citationMetadata=o.citationMetadata,n.candidates[u].finishReason=o.finishReason,n.candidates[u].finishMessage=o.finishMessage,n.candidates[u].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[u].content||(n.candidates[u].content={role:o.content.role||"user",parts:[{text:""}]});for(const p of o.content.parts)p.text&&(n.candidates[u].content.parts[0].text+=p.text)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t,a,n){const s=new K(a,D.STREAM_GENERATE_CONTENT,t,!0),o=await B(s,JSON.stringify(n));return lt(o)}async function Oe(t,a,n){const s=new K(a,D.GENERATE_CONTENT,t,!1),u=await(await B(s,JSON.stringify(n))).json();return{response:ae(u)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,a){let n=[];if(typeof t=="string")n=[{text:t}];else for(const s of t)typeof s=="string"?n.push({text:s}):n.push(s);return{role:a,parts:n}}function se(t){return t.contents?t:{contents:[$(t,"user")]}}function Et(t){return typeof t=="string"||Array.isArray(t)?{content:$(t,"user")}:t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="SILENT_ERROR";class gt{constructor(a,n,s){this.model=n,this.params=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=a,s!=null&&s.history&&(this._history=s.history.map(o=>{if(!o.role)throw new Error("Missing role for history item: "+JSON.stringify(o));return $(o.parts,o.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(a){var n,s;await this._sendPromise;const o=$(a,"user"),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,contents:[...this._history,o]};let p;return this._sendPromise=this._sendPromise.then(()=>Oe(this._apiKey,this.model,u)).then(f=>{var d;if(f.response.candidates&&f.response.candidates.length>0){this._history.push(o);const R=Object.assign({parts:[],role:"model"},(d=f.response.candidates)===null||d===void 0?void 0:d[0].content);this._history.push(R)}else{const R=z(f.response);R&&console.warn(`sendMessage() was unsuccessful. ${R}. Inspect response object for details.`)}p=f}),await this._sendPromise,p}async sendMessageStream(a){var n,s;await this._sendPromise;const o=$(a,"user"),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,contents:[...this._history,o]},p=Se(this._apiKey,this.model,u);return this._sendPromise=this._sendPromise.then(()=>p).catch(f=>{throw new Error(Te)}).then(f=>f.response).then(f=>{if(f.candidates&&f.candidates.length>0){this._history.push(o);const d=Object.assign({},f.candidates[0].content);d.role||(d.role="model"),this._history.push(d)}else{const d=z(f);d&&console.warn(`sendMessageStream() was unsuccessful. ${d}. Inspect response object for details.`)}}).catch(f=>{f.message!==Te&&console.error(f)}),p}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(t,a,n){const s=new K(a,D.COUNT_TOKENS,t,!1);return(await B(s,JSON.stringify(Object.assign(Object.assign({},n),{model:a})))).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(t,a,n){const s=new K(a,D.EMBED_CONTENT,t,!1);return(await B(s,JSON.stringify(n))).json()}async function mt(t,a,n){const s=new K(a,D.BATCH_EMBED_CONTENTS,t,!1),o=n.requests.map(p=>Object.assign(Object.assign({},p),{model:`models/${a}`}));return(await B(s,JSON.stringify({requests:o}))).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(a,n){var s;this.apiKey=a,n.model.startsWith("models/")?this.model=(s=n.model.split("models/"))===null||s===void 0?void 0:s[1]:this.model=n.model,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[]}async generateContent(a){const n=se(a);return Oe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n))}async generateContentStream(a){const n=se(a);return Se(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n))}startChat(a){return new gt(this.apiKey,this.model,a)}async countTokens(a){const n=se(a);return pt(this.apiKey,this.model,n)}async embedContent(a){const n=Et(a);return _t(this.apiKey,this.model,n)}async batchEmbedContents(a){return mt(this.apiKey,this.model,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(a){this.apiKey=a}getGenerativeModel(a){if(!a.model)throw new H("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Rt(this.apiKey,a)}}function we(t){const[a,n]=N.useState(!1),[s,o]=N.useState([{text:"Hello, nice to meet you. I am EasyChatbot. You can talk with me freely",sender:"bot"}]),[u,p]=N.useState(""),f=N.useRef(null),[d,R]=N.useState(!1),[C,w]=N.useState(null),E=new yt(t.apiKey);async function S(O){let P;O==="gemini"?P=E.getGenerativeModel({model:"gemini-pro"}).startChat({history:[{role:"user",parts:"Hello, nice to meet you. Who are you?"},{role:"model",parts:"Great to meet you. I am a nice bot named EasyChatbot that loves to chat and help you."}]}):P={sendMessage:async I=>({response:{text:()=>`You said: ${I}`}})},w(P)}const M=async()=>{if(u){o(O=>[...O,{text:u,sender:"user"}]),p(""),R(!0);try{const I=(await(await C.sendMessage(u)).response).text();o(b=>[...b,{text:I,sender:"bot"}])}catch(O){console.error(O)}finally{R(!1)}}},L=()=>{n(!a)};return N.useEffect(()=>{f.current&&f.current.scrollIntoView({behavior:"smooth"})},[s]),N.useEffect(()=>{S(t.chatbotType)},[]),_.jsxs("div",{className:"chatbot-container",children:[_.jsx("div",{className:"chatbot-button-container",children:!a&&_.jsx("div",{className:"chatbot-button-container",children:_.jsx("img",{onClick:L,src:"https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/DSjjJVtWgP_jxGWP.png",alt:"Chat Icon"})})}),a&&_.jsxs("div",{className:"chatbot-viewer",children:[_.jsxs("p",{className:"chatbot-header",children:["Conversation with EasyChatbot"," ",_.jsx("span",{className:"close-icon",onClick:L,children:"×"})]}),_.jsxs("div",{className:"message-list",children:[s.map((O,P)=>_.jsxs("div",{className:"message-item",ref:P===s.length-1?f:null,children:[_.jsxs("strong",{children:[O.sender==="bot"?"EasyChatbot":"You",":"]}),_.jsx("br",{}),_.jsx("p",{children:O.text})]},P)),d&&_.jsxs("div",{className:"loading",children:[_.jsx("div",{className:"loading-dot"}),_.jsx("div",{className:"loading-dot"}),_.jsx("div",{className:"loading-dot"})]})," "]}),_.jsxs("div",{className:"chat-input-container",children:[_.jsx("input",{placeholder:"Message EasyChatbot...",value:u,onKeyPress:O=>{O.key==="Enter"&&M()},onChange:O=>p(O.target.value)}),_.jsx("button",{onClick:M,children:"Send"})]})]})]})}const Ct=t=>_.jsx(we,{...t}),bt=(t,a)=>{Qe.render(_.jsx(we,{...a}),t)};return X.Chatbot=Ct,X.init=bt,Object.defineProperty(X,Symbol.toStringTag,{value:"Module"}),X}({},React,ReactDOM);
//# sourceMappingURL=easychatbot.iife.js.map
