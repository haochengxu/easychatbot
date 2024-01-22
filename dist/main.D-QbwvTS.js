var EasyChatbot=function(V,I,Qe){"use strict";var te={exports:{}},F={},ve;function Ze(){if(ve)return F;ve=1;var t={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return t.NODE_ENV!=="production"&&function(){var a=I,n=Symbol.for("react.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),d=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),N=Symbol.iterator,ae="@@iterator";function se(e){if(e===null||typeof e!="object")return null;var r=N&&e[N]||e[ae];return typeof r=="function"?r:null}var D=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function O(e){{for(var r=arguments.length,i=new Array(r>1?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];Ot("error",e,i)}}function Ot(e,r,i){{var c=D.ReactDebugCurrentFrame,v=c.getStackAddendum();v!==""&&(r+="%s",i=i.concat([v]));var g=i.map(function(h){return String(h)});g.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,g)}}var Tt=!1,wt=!1,At=!1,It=!1,Nt=!1,Ae;Ae=Symbol.for("react.module.reference");function Pt(e){return!!(typeof e=="string"||typeof e=="function"||e===o||e===p||Nt||e===u||e===b||e===w||It||e===C||Tt||wt||At||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===E||e.$$typeof===f||e.$$typeof===d||e.$$typeof===R||e.$$typeof===Ae||e.getModuleId!==void 0))}function xt(e,r,i){var c=e.displayName;if(c)return c;var v=r.displayName||r.name||"";return v!==""?i+"("+v+")":i}function Ie(e){return e.displayName||"Context"}function P(e){if(e==null)return null;if(typeof e.tag=="number"&&O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case o:return"Fragment";case s:return"Portal";case p:return"Profiler";case u:return"StrictMode";case b:return"Suspense";case w:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d:var r=e;return Ie(r)+".Consumer";case f:var i=e;return Ie(i._context)+".Provider";case R:return xt(e,e.render,"ForwardRef");case E:var c=e.displayName||null;return c!==null?c:P(e.type)||"Memo";case S:{var v=e,g=v._payload,h=v._init;try{return P(h(g))}catch{return null}}}return null}var M=Object.assign,W=0,Ne,Pe,xe,je,Me,De,Le;function ke(){}ke.__reactDisabledLog=!0;function jt(){{if(W===0){Ne=console.log,Pe=console.info,xe=console.warn,je=console.error,Me=console.group,De=console.groupCollapsed,Le=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ke,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}}function Mt(){{if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:Ne}),info:M({},e,{value:Pe}),warn:M({},e,{value:xe}),error:M({},e,{value:je}),group:M({},e,{value:Me}),groupCollapsed:M({},e,{value:De}),groupEnd:M({},e,{value:Le})})}W<0&&O("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var oe=D.ReactCurrentDispatcher,ie;function q(e,r,i){{if(ie===void 0)try{throw Error()}catch(v){var c=v.stack.trim().match(/\n( *(at )?)/);ie=c&&c[1]||""}return`
`+ie+e}}var ce=!1,z;{var Dt=typeof WeakMap=="function"?WeakMap:Map;z=new Dt}function Fe(e,r){if(!e||ce)return"";{var i=z.get(e);if(i!==void 0)return i}var c;ce=!0;var v=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var g;g=oe.current,oe.current=null,jt();try{if(r){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(x){c=x}Reflect.construct(e,[],h)}else{try{h.call()}catch(x){c=x}e.call(h.prototype)}}else{try{throw Error()}catch(x){c=x}e()}}catch(x){if(x&&c&&typeof x.stack=="string"){for(var l=x.stack.split(`
`),T=c.stack.split(`
`),_=l.length-1,y=T.length-1;_>=1&&y>=0&&l[_]!==T[y];)y--;for(;_>=1&&y>=0;_--,y--)if(l[_]!==T[y]){if(_!==1||y!==1)do if(_--,y--,y<0||l[_]!==T[y]){var A=`
`+l[_].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),typeof e=="function"&&z.set(e,A),A}while(_>=1&&y>=0);break}}}finally{ce=!1,oe.current=g,Mt(),Error.prepareStackTrace=v}var k=e?e.displayName||e.name:"",ze=k?q(k):"";return typeof e=="function"&&z.set(e,ze),ze}function Lt(e,r,i){return Fe(e,!1)}function kt(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function Q(e,r,i){if(e==null)return"";if(typeof e=="function")return Fe(e,kt(e));if(typeof e=="string")return q(e);switch(e){case b:return q("Suspense");case w:return q("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case R:return Lt(e.render);case E:return Q(e.type,r,i);case S:{var c=e,v=c._payload,g=c._init;try{return Q(g(v),r,i)}catch{}}}return""}var Z=Object.prototype.hasOwnProperty,Ye={},Ge=D.ReactDebugCurrentFrame;function ee(e){if(e){var r=e._owner,i=Q(e.type,e._source,r?r.type:null);Ge.setExtraStackFrame(i)}else Ge.setExtraStackFrame(null)}function Ft(e,r,i,c,v){{var g=Function.call.bind(Z);for(var h in e)if(g(e,h)){var l=void 0;try{if(typeof e[h]!="function"){var T=Error((c||"React class")+": "+i+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw T.name="Invariant Violation",T}l=e[h](r,h,c,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(_){l=_}l&&!(l instanceof Error)&&(ee(v),O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",i,h,typeof l),ee(null)),l instanceof Error&&!(l.message in Ye)&&(Ye[l.message]=!0,ee(v),O("Failed %s type: %s",i,l.message),ee(null))}}}var Yt=Array.isArray;function ue(e){return Yt(e)}function Gt(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,i=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i}}function Ut(e){try{return Ue(e),!1}catch{return!0}}function Ue(e){return""+e}function Ke(e){if(Ut(e))return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Gt(e)),Ue(e)}var $=D.ReactCurrentOwner,Kt={key:!0,ref:!0,__self:!0,__source:!0},He,Be,le;le={};function Ht(e){if(Z.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Bt(e){if(Z.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Wt(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var i=P($.current.type);le[i]||(O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',P($.current.type),e.ref),le[i]=!0)}}function $t(e,r){{var i=function(){He||(He=!0,O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}}function Vt(e,r){{var i=function(){Be||(Be=!0,O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"ref",{get:i,configurable:!0})}}var Jt=function(e,r,i,c,v,g,h){var l={$$typeof:n,type:e,key:r,ref:i,props:h,_owner:g};return l._store={},Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l};function Xt(e,r,i,c,v){{var g,h={},l=null,T=null;i!==void 0&&(Ke(i),l=""+i),Bt(r)&&(Ke(r.key),l=""+r.key),Ht(r)&&(T=r.ref,Wt(r,v));for(g in r)Z.call(r,g)&&!Kt.hasOwnProperty(g)&&(h[g]=r[g]);if(e&&e.defaultProps){var _=e.defaultProps;for(g in _)h[g]===void 0&&(h[g]=_[g])}if(l||T){var y=typeof e=="function"?e.displayName||e.name||"Unknown":e;l&&$t(h,y),T&&Vt(h,y)}return Jt(e,l,T,v,c,$.current,h)}}var fe=D.ReactCurrentOwner,We=D.ReactDebugCurrentFrame;function L(e){if(e){var r=e._owner,i=Q(e.type,e._source,r?r.type:null);We.setExtraStackFrame(i)}else We.setExtraStackFrame(null)}var de;de=!1;function he(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function $e(){{if(fe.current){var e=P(fe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function qt(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),i=e.lineNumber;return`

Check your code at `+r+":"+i+"."}return""}}var Ve={};function zt(e){{var r=$e();if(!r){var i=typeof e=="string"?e:e.displayName||e.name;i&&(r=`

Check the top-level render call using <`+i+">.")}return r}}function Je(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var i=zt(r);if(Ve[i])return;Ve[i]=!0;var c="";e&&e._owner&&e._owner!==fe.current&&(c=" It was passed a child from "+P(e._owner.type)+"."),L(e),O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,c),L(null)}}function Xe(e,r){{if(typeof e!="object")return;if(ue(e))for(var i=0;i<e.length;i++){var c=e[i];he(c)&&Je(c,r)}else if(he(e))e._store&&(e._store.validated=!0);else if(e){var v=se(e);if(typeof v=="function"&&v!==e.entries)for(var g=v.call(e),h;!(h=g.next()).done;)he(h.value)&&Je(h.value,r)}}}function Qt(e){{var r=e.type;if(r==null||typeof r=="string")return;var i;if(typeof r=="function")i=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===R||r.$$typeof===E))i=r.propTypes;else return;if(i){var c=P(r);Ft(i,e.props,"prop",c,e)}else if(r.PropTypes!==void 0&&!de){de=!0;var v=P(r);O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",v||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Zt(e){{for(var r=Object.keys(e.props),i=0;i<r.length;i++){var c=r[i];if(c!=="children"&&c!=="key"){L(e),O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",c),L(null);break}}e.ref!==null&&(L(e),O("Invalid attribute `ref` supplied to `React.Fragment`."),L(null))}}function qe(e,r,i,c,v,g){{var h=Pt(e);if(!h){var l="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var T=qt(v);T?l+=T:l+=$e();var _;e===null?_="null":ue(e)?_="array":e!==void 0&&e.$$typeof===n?(_="<"+(P(e.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):_=typeof e,O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",_,l)}var y=Xt(e,r,i,v,g);if(y==null)return y;if(h){var A=r.children;if(A!==void 0)if(c)if(ue(A)){for(var k=0;k<A.length;k++)Xe(A[k],e);Object.freeze&&Object.freeze(A)}else O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Xe(A,e)}return e===o?Zt(y):Qt(y),y}}function er(e,r,i){return qe(e,r,i,!0)}function tr(e,r,i){return qe(e,r,i,!1)}var rr=tr,nr=er;F.Fragment=o,F.jsx=rr,F.jsxs=nr}(),F}var Y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function et(){if(Ee)return Y;Ee=1;var t=I,a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(f,d,R){var b,w={},E=null,S=null;R!==void 0&&(E=""+R),d.key!==void 0&&(E=""+d.key),d.ref!==void 0&&(S=d.ref);for(b in d)s.call(d,b)&&!u.hasOwnProperty(b)&&(w[b]=d[b]);if(f&&f.defaultProps)for(b in d=f.defaultProps,d)w[b]===void 0&&(w[b]=d[b]);return{$$typeof:a,type:f,key:E,ref:S,props:w,_owner:o.current}}return Y.Fragment=n,Y.jsx=p,Y.jsxs=p,Y}var tt={};tt.NODE_ENV==="production"?te.exports=et():te.exports=Ze();var m=te.exports;/**
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
 */var ge;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(ge||(ge={}));var pe;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(pe||(pe={}));var _e;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(_e||(_e={}));var me;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(me||(me={}));var J;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})(J||(J={}));var Re;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(Re||(Re={}));/**
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
 */class G extends Error{constructor(a){super(`[GoogleGenerativeAI Error]: ${a}`)}}class ye extends G{constructor(a,n){super(a),this.response=n}}/**
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
 */const rt="https://generativelanguage.googleapis.com",nt="v1",at="0.1.3",st="genai-js";var j;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(j||(j={}));class U{constructor(a,n,s,o){this.model=a,this.task=n,this.apiKey=s,this.stream=o}toString(){let a=`${rt}/${nt}/models/${this.model}:${this.task}`;return this.stream&&(a+="?alt=sse"),a}}function ot(){return`${st}/${at}`}async function K(t,a){let n;try{if(n=await fetch(t.toString(),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":ot(),"x-goog-api-key":t.apiKey},body:a}),!n.ok){let s="";try{const o=await n.json();s=o.error.message,o.error.details&&(s+=` ${JSON.stringify(o.error.details)}`)}catch{}throw new Error(`[${n.status} ${n.statusText}] ${s}`)}}catch(s){const o=new G(`Error fetching from ${t.toString()}: ${s.message}`);throw o.stack=s.stack,o}return n}/**
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
 */function re(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Ce(t.candidates[0]))throw new ye(`${X(t)}`,t);return it(t)}else if(t.promptFeedback)throw new ye(`Text not available. ${X(t)}`,t);return""},t}function it(t){var a,n,s,o;return!((o=(s=(n=(a=t.candidates)===null||a===void 0?void 0:a[0].content)===null||n===void 0?void 0:n.parts)===null||s===void 0?void 0:s[0])===null||o===void 0)&&o.text?t.candidates[0].content.parts[0].text:""}const ct=[J.RECITATION,J.SAFETY];function Ce(t){return!!t.finishReason&&ct.includes(t.finishReason)}function X(t){var a,n,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((a=t.promptFeedback)===null||a===void 0)&&a.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const u=t.candidates[0];Ce(u)&&(o+=`Candidate was blocked due to ${u.finishReason}`,u.finishMessage&&(o+=`: ${u.finishMessage}`))}return o}function H(t){return this instanceof H?(this.v=t,this):new H(t)}function ut(t,a,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(t,a||[]),o,u=[];return o={},p("next"),p("throw"),p("return"),o[Symbol.asyncIterator]=function(){return this},o;function p(E){s[E]&&(o[E]=function(S){return new Promise(function(C,N){u.push([E,S,C,N])>1||f(E,S)})})}function f(E,S){try{d(s[E](S))}catch(C){w(u[0][3],C)}}function d(E){E.value instanceof H?Promise.resolve(E.value.v).then(R,b):w(u[0][2],E)}function R(E){f("next",E)}function b(E){f("throw",E)}function w(E,S){E(S),u.shift(),u.length&&f(u[0][0],u[0][1])}}typeof SuppressedError=="function"&&SuppressedError;/**
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
 */const be=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function lt(t){const a=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=ht(a),[s,o]=n.tee();return{stream:dt(s),response:ft(o)}}async function ft(t){const a=[],n=t.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return re(vt(a));a.push(o)}}function dt(t){return ut(this,arguments,function*(){const n=t.getReader();for(;;){const{value:s,done:o}=yield H(n.read());if(o)break;yield yield H(re(s))}})}function ht(t){const a=t.getReader();return new ReadableStream({start(s){let o="";return u();function u(){return a.read().then(({value:p,done:f})=>{if(f){if(o.trim()){s.error(new G("Failed to parse stream"));return}s.close();return}o+=p;let d=o.match(be),R;for(;d;){try{R=JSON.parse(d[1])}catch{s.error(new G(`Error parsing JSON response: "${d[1]}"`));return}s.enqueue(R),o=o.substring(d[0].length),d=o.match(be)}return u()})}}})}function vt(t){const a=t[t.length-1],n={promptFeedback:a==null?void 0:a.promptFeedback};for(const s of t)if(s.candidates)for(const o of s.candidates){const u=o.index;if(n.candidates||(n.candidates=[]),n.candidates[u]||(n.candidates[u]={index:o.index}),n.candidates[u].citationMetadata=o.citationMetadata,n.candidates[u].finishReason=o.finishReason,n.candidates[u].finishMessage=o.finishMessage,n.candidates[u].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[u].content||(n.candidates[u].content={role:o.content.role||"user",parts:[{text:""}]});for(const p of o.content.parts)p.text&&(n.candidates[u].content.parts[0].text+=p.text)}}return n}/**
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
 */async function Se(t,a,n){const s=new U(a,j.STREAM_GENERATE_CONTENT,t,!0),o=await K(s,JSON.stringify(n));return lt(o)}async function Oe(t,a,n){const s=new U(a,j.GENERATE_CONTENT,t,!1),u=await(await K(s,JSON.stringify(n))).json();return{response:re(u)}}/**
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
 */function B(t,a){let n=[];if(typeof t=="string")n=[{text:t}];else for(const s of t)typeof s=="string"?n.push({text:s}):n.push(s);return{role:a,parts:n}}function ne(t){return t.contents?t:{contents:[B(t,"user")]}}function Et(t){return typeof t=="string"||Array.isArray(t)?{content:B(t,"user")}:t}/**
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
 */const Te="SILENT_ERROR";class gt{constructor(a,n,s){this.model=n,this.params=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=a,s!=null&&s.history&&(this._history=s.history.map(o=>{if(!o.role)throw new Error("Missing role for history item: "+JSON.stringify(o));return B(o.parts,o.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(a){var n,s;await this._sendPromise;const o=B(a,"user"),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,contents:[...this._history,o]};let p;return this._sendPromise=this._sendPromise.then(()=>Oe(this._apiKey,this.model,u)).then(f=>{var d;if(f.response.candidates&&f.response.candidates.length>0){this._history.push(o);const R=Object.assign({parts:[],role:"model"},(d=f.response.candidates)===null||d===void 0?void 0:d[0].content);this._history.push(R)}else{const R=X(f.response);R&&console.warn(`sendMessage() was unsuccessful. ${R}. Inspect response object for details.`)}p=f}),await this._sendPromise,p}async sendMessageStream(a){var n,s;await this._sendPromise;const o=B(a,"user"),u={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,contents:[...this._history,o]},p=Se(this._apiKey,this.model,u);return this._sendPromise=this._sendPromise.then(()=>p).catch(f=>{throw new Error(Te)}).then(f=>f.response).then(f=>{if(f.candidates&&f.candidates.length>0){this._history.push(o);const d=Object.assign({},f.candidates[0].content);d.role||(d.role="model"),this._history.push(d)}else{const d=X(f);d&&console.warn(`sendMessageStream() was unsuccessful. ${d}. Inspect response object for details.`)}}).catch(f=>{f.message!==Te&&console.error(f)}),p}}/**
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
 */async function pt(t,a,n){const s=new U(a,j.COUNT_TOKENS,t,!1);return(await K(s,JSON.stringify(Object.assign(Object.assign({},n),{model:a})))).json()}/**
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
 */async function _t(t,a,n){const s=new U(a,j.EMBED_CONTENT,t,!1);return(await K(s,JSON.stringify(n))).json()}async function mt(t,a,n){const s=new U(a,j.BATCH_EMBED_CONTENTS,t,!1),o=n.requests.map(p=>Object.assign(Object.assign({},p),{model:`models/${a}`}));return(await K(s,JSON.stringify({requests:o}))).json()}/**
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
 */class Rt{constructor(a,n){var s;this.apiKey=a,n.model.startsWith("models/")?this.model=(s=n.model.split("models/"))===null||s===void 0?void 0:s[1]:this.model=n.model,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[]}async generateContent(a){const n=ne(a);return Oe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n))}async generateContentStream(a){const n=ne(a);return Se(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n))}startChat(a){return new gt(this.apiKey,this.model,a)}async countTokens(a){const n=ne(a);return pt(this.apiKey,this.model,n)}async embedContent(a){const n=Et(a);return _t(this.apiKey,this.model,n)}async batchEmbedContents(a){return mt(this.apiKey,this.model,a)}}/**
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
 */class yt{constructor(a){this.apiKey=a}getGenerativeModel(a){if(!a.model)throw new G("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Rt(this.apiKey,a)}}async function Ct(t,a){let n;return t==="gemini"?n=new yt(a).getGenerativeModel({model:"gemini-pro"}).startChat({history:[{role:"user",parts:"Hello, nice to meet you. Who are you?"},{role:"model",parts:"Great to meet you. I am a nice bot named EasyChatbot that loves to chat and help you."}]}):n={sendMessage:async s=>({response:{text:()=>`You said: ${s}`}})},n}function we(t){const[a,n]=I.useState(!1),[s,o]=I.useState([{text:"Hello, nice to meet you. I am EasyChatbot. You can talk with me freely.",sender:"bot"}]),[u,p]=I.useState(""),f=I.useRef(null),[d,R]=I.useState(!1),[b,w]=I.useState(null),E=async()=>{if(u){o(C=>[...C,{text:u,sender:"user"}]),p(""),R(!0);try{const ae=(await(await b.sendMessage(u)).response).text();o(se=>[...se,{text:ae,sender:"bot"}])}catch(C){console.error(C)}finally{R(!1)}}},S=()=>{n(!a)};return I.useEffect(()=>{f.current&&f.current.scrollIntoView({behavior:"smooth"})},[s]),I.useEffect(()=>{async function C(){const N=await Ct(t.chatbotType,t.apiKey);w(N)}C()},[t.chatbotType,t.apiKey]),m.jsxs("div",{className:"chatbot-container",children:[!a&&m.jsx("div",{className:"start-img-container",onClick:S,children:m.jsx("img",{src:"https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/DSjjJVtWgP_jxGWP.png",alt:"Chat Icon"})}),a&&m.jsxs("div",{className:"chatbot-viewer",children:[m.jsxs("p",{className:"chatbot-header",children:["Conversation with EasyChatbot"," ",m.jsx("span",{className:"close-icon",onClick:S,children:"×"})]}),m.jsxs("div",{className:"message-list",children:[s.map((C,N)=>m.jsxs("div",{className:"message-item",ref:N===s.length-1?f:null,children:[m.jsxs("strong",{children:[C.sender==="bot"?"EasyChatbot":"You",":"]}),m.jsx("br",{}),m.jsx("p",{children:C.text})]},N)),d&&m.jsxs("div",{className:"loading",children:[m.jsx("div",{className:"loading-dot"}),m.jsx("div",{className:"loading-dot"}),m.jsx("div",{className:"loading-dot"})]})," "]}),m.jsxs("div",{className:"chat-input-container",children:[m.jsx("input",{placeholder:"Message EasyChatbot...",value:u,onKeyPress:C=>{C.key==="Enter"&&E()},onChange:C=>p(C.target.value)}),m.jsx("button",{onClick:E,children:"Send"})]})]})]})}const bt=t=>m.jsx(we,{...t}),St=(t,a)=>{Qe.render(m.jsx(we,{...a}),t)};return V.Chatbot=bt,V.init=St,Object.defineProperty(V,Symbol.toStringTag,{value:"Module"}),V}({},React,ReactDOM);
//# sourceMappingURL=main.D-QbwvTS.js.map
