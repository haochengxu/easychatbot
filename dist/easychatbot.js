import Je, { useState as $, useRef as Pt, useEffect as ke } from "react";
import jt from "react-dom";
var fe = { exports: {} }, U = {}, Fe;
function Mt() {
  if (Fe)
    return U;
  Fe = 1;
  var t = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return t.NODE_ENV !== "production" && function() {
    var a = Je, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), M = Symbol.iterator, O = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[O];
      return typeof r == "function" ? r : null;
    }
    var I = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          i[c - 1] = arguments[c];
        Ze("error", e, i);
      }
    }
    function Ze(e, r, i) {
      {
        var c = I.ReactDebugCurrentFrame, v = c.getStackAddendum();
        v !== "" && (r += "%s", i = i.concat([v]));
        var p = i.map(function(h) {
          return String(h);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var et = !1, tt = !1, rt = !1, nt = !1, at = !1, he;
    he = Symbol.for("react.module.reference");
    function st(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === g || at || e === u || e === C || e === w || nt || e === j || et || tt || rt || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === E || e.$$typeof === f || e.$$typeof === d || e.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === he || e.getModuleId !== void 0));
    }
    function ot(e, r, i) {
      var c = e.displayName;
      if (c)
        return c;
      var v = r.displayName || r.name || "";
      return v !== "" ? i + "(" + v + ")" : i;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case o:
          return "Portal";
        case g:
          return "Profiler";
        case u:
          return "StrictMode";
        case C:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return ve(r) + ".Consumer";
          case f:
            var i = e;
            return ve(i._context) + ".Provider";
          case R:
            return ot(e, e.render, "ForwardRef");
          case E:
            var c = e.displayName || null;
            return c !== null ? c : x(e.type) || "Memo";
          case S: {
            var v = e, p = v._payload, h = v._init;
            try {
              return x(h(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, Y = 0, Ee, pe, ge, _e, me, Re, ye;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function it() {
      {
        if (Y === 0) {
          Ee = console.log, pe = console.info, ge = console.warn, _e = console.error, me = console.group, Re = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Y++;
      }
    }
    function ct() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: Ee
            }),
            info: D({}, e, {
              value: pe
            }),
            warn: D({}, e, {
              value: ge
            }),
            error: D({}, e, {
              value: _e
            }),
            group: D({}, e, {
              value: me
            }),
            groupCollapsed: D({}, e, {
              value: Re
            }),
            groupEnd: D({}, e, {
              value: ye
            })
          });
        }
        Y < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = I.ReactCurrentDispatcher, ne;
    function q(e, r, i) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (v) {
            var c = v.stack.trim().match(/\n( *(at )?)/);
            ne = c && c[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ae = !1, X;
    {
      var ut = typeof WeakMap == "function" ? WeakMap : Map;
      X = new ut();
    }
    function be(e, r) {
      if (!e || ae)
        return "";
      {
        var i = X.get(e);
        if (i !== void 0)
          return i;
      }
      var c;
      ae = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = re.current, re.current = null, it();
      try {
        if (r) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (P) {
              c = P;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (P) {
              c = P;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            c = P;
          }
          e();
        }
      } catch (P) {
        if (P && c && typeof P.stack == "string") {
          for (var l = P.stack.split(`
`), T = c.stack.split(`
`), _ = l.length - 1, y = T.length - 1; _ >= 1 && y >= 0 && l[_] !== T[y]; )
            y--;
          for (; _ >= 1 && y >= 0; _--, y--)
            if (l[_] !== T[y]) {
              if (_ !== 1 || y !== 1)
                do
                  if (_--, y--, y < 0 || l[_] !== T[y]) {
                    var A = `
` + l[_].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, A), A;
                  }
                while (_ >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        ae = !1, re.current = p, ct(), Error.prepareStackTrace = v;
      }
      var F = e ? e.displayName || e.name : "", Le = F ? q(F) : "";
      return typeof e == "function" && X.set(e, Le), Le;
    }
    function lt(e, r, i) {
      return be(e, !1);
    }
    function ft(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, ft(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case C:
          return q("Suspense");
        case w:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            return lt(e.render);
          case E:
            return z(e.type, r, i);
          case S: {
            var c = e, v = c._payload, p = c._init;
            try {
              return z(p(v), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Se = {}, Oe = I.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, i = z(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(i);
      } else
        Oe.setExtraStackFrame(null);
    }
    function dt(e, r, i, c, v) {
      {
        var p = Function.call.bind(Q);
        for (var h in e)
          if (p(e, h)) {
            var l = void 0;
            try {
              if (typeof e[h] != "function") {
                var T = Error((c || "React class") + ": " + i + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              l = e[h](r, h, c, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              l = _;
            }
            l && !(l instanceof Error) && (Z(v), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", i, h, typeof l), Z(null)), l instanceof Error && !(l.message in Se) && (Se[l.message] = !0, Z(v), b("Failed %s type: %s", i, l.message), Z(null));
          }
      }
    }
    var ht = Array.isArray;
    function se(e) {
      return ht(e);
    }
    function vt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Et(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function we(e) {
      if (Et(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vt(e)), Te(e);
    }
    var G = I.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, Ie, oe;
    oe = {};
    function gt(e) {
      if (Q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function _t(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function mt(e, r) {
      if (typeof e.ref == "string" && G.current && r && G.current.stateNode !== r) {
        var i = x(G.current.type);
        oe[i] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(G.current.type), e.ref), oe[i] = !0);
      }
    }
    function Rt(e, r) {
      {
        var i = function() {
          Ae || (Ae = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function yt(e, r) {
      {
        var i = function() {
          Ie || (Ie = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Ct = function(e, r, i, c, v, p, h) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: i,
        props: h,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function bt(e, r, i, c, v) {
      {
        var p, h = {}, l = null, T = null;
        i !== void 0 && (we(i), l = "" + i), _t(r) && (we(r.key), l = "" + r.key), gt(r) && (T = r.ref, mt(r, v));
        for (p in r)
          Q.call(r, p) && !pt.hasOwnProperty(p) && (h[p] = r[p]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (p in _)
            h[p] === void 0 && (h[p] = _[p]);
        }
        if (l || T) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && Rt(h, y), T && yt(h, y);
        }
        return Ct(e, l, T, v, c, G.current, h);
      }
    }
    var ie = I.ReactCurrentOwner, Ne = I.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, i = z(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(i);
      } else
        Ne.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function xe() {
      {
        if (ie.current) {
          var e = x(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function St(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + r + ":" + i + ".";
        }
        return "";
      }
    }
    var Pe = {};
    function Ot(e) {
      {
        var r = xe();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Ot(r);
        if (Pe[i])
          return;
        Pe[i] = !0;
        var c = "";
        e && e._owner && e._owner !== ie.current && (c = " It was passed a child from " + x(e._owner.type) + "."), k(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, c), k(null);
      }
    }
    function Me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var i = 0; i < e.length; i++) {
            var c = e[i];
            ue(c) && je(c, r);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = N(e);
          if (typeof v == "function" && v !== e.entries)
            for (var p = v.call(e), h; !(h = p.next()).done; )
              ue(h.value) && je(h.value, r);
        }
      }
    }
    function Tt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var i;
        if (typeof r == "function")
          i = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          i = r.propTypes;
        else
          return;
        if (i) {
          var c = x(r);
          dt(i, e.props, "prop", c, e);
        } else if (r.PropTypes !== void 0 && !ce) {
          ce = !0;
          var v = x(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wt(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var c = r[i];
          if (c !== "children" && c !== "key") {
            k(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function De(e, r, i, c, v, p) {
      {
        var h = st(e);
        if (!h) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = St(v);
          T ? l += T : l += xe();
          var _;
          e === null ? _ = "null" : se(e) ? _ = "array" : e !== void 0 && e.$$typeof === n ? (_ = "<" + (x(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, l);
        }
        var y = bt(e, r, i, v, p);
        if (y == null)
          return y;
        if (h) {
          var A = r.children;
          if (A !== void 0)
            if (c)
              if (se(A)) {
                for (var F = 0; F < A.length; F++)
                  Me(A[F], e);
                Object.freeze && Object.freeze(A);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(A, e);
        }
        return e === s ? wt(y) : Tt(y), y;
      }
    }
    function At(e, r, i) {
      return De(e, r, i, !0);
    }
    function It(e, r, i) {
      return De(e, r, i, !1);
    }
    var Nt = It, xt = At;
    U.Fragment = s, U.jsx = Nt, U.jsxs = xt;
  }(), U;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Dt() {
  if (Ye)
    return H;
  Ye = 1;
  var t = Je, a = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(f, d, R) {
    var C, w = {}, E = null, S = null;
    R !== void 0 && (E = "" + R), d.key !== void 0 && (E = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (C in d)
      o.call(d, C) && !u.hasOwnProperty(C) && (w[C] = d[C]);
    if (f && f.defaultProps)
      for (C in d = f.defaultProps, d)
        w[C] === void 0 && (w[C] = d[C]);
    return { $$typeof: a, type: f, key: E, ref: S, props: w, _owner: s.current };
  }
  return H.Fragment = n, H.jsx = g, H.jsxs = g, H;
}
var Lt = {};
Lt.NODE_ENV === "production" ? fe.exports = Dt() : fe.exports = Mt();
var m = fe.exports;
/**
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
 */
var Ge;
(function(t) {
  t.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED", t.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH", t.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT", t.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT", t.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(Ge || (Ge = {}));
var $e;
(function(t) {
  t.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED", t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", t.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", t.BLOCK_NONE = "BLOCK_NONE";
})($e || ($e = {}));
var Ue;
(function(t) {
  t.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED", t.NEGLIGIBLE = "NEGLIGIBLE", t.LOW = "LOW", t.MEDIUM = "MEDIUM", t.HIGH = "HIGH";
})(Ue || (Ue = {}));
var He;
(function(t) {
  t.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED", t.SAFETY = "SAFETY", t.OTHER = "OTHER";
})(He || (He = {}));
var ee;
(function(t) {
  t.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED", t.STOP = "STOP", t.MAX_TOKENS = "MAX_TOKENS", t.SAFETY = "SAFETY", t.RECITATION = "RECITATION", t.OTHER = "OTHER";
})(ee || (ee = {}));
var Ke;
(function(t) {
  t.TASK_TYPE_UNSPECIFIED = "TASK_TYPE_UNSPECIFIED", t.RETRIEVAL_QUERY = "RETRIEVAL_QUERY", t.RETRIEVAL_DOCUMENT = "RETRIEVAL_DOCUMENT", t.SEMANTIC_SIMILARITY = "SEMANTIC_SIMILARITY", t.CLASSIFICATION = "CLASSIFICATION", t.CLUSTERING = "CLUSTERING";
})(Ke || (Ke = {}));
/**
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
 */
class B extends Error {
  constructor(a) {
    super(`[GoogleGenerativeAI Error]: ${a}`);
  }
}
class Be extends B {
  constructor(a, n) {
    super(a), this.response = n;
  }
}
/**
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
 */
const kt = "https://generativelanguage.googleapis.com", Ft = "v1", Yt = "0.1.3", Gt = "genai-js";
var L;
(function(t) {
  t.GENERATE_CONTENT = "generateContent", t.STREAM_GENERATE_CONTENT = "streamGenerateContent", t.COUNT_TOKENS = "countTokens", t.EMBED_CONTENT = "embedContent", t.BATCH_EMBED_CONTENTS = "batchEmbedContents";
})(L || (L = {}));
class V {
  constructor(a, n, o, s) {
    this.model = a, this.task = n, this.apiKey = o, this.stream = s;
  }
  toString() {
    let a = `${kt}/${Ft}/models/${this.model}:${this.task}`;
    return this.stream && (a += "?alt=sse"), a;
  }
}
function $t() {
  return `${Gt}/${Yt}`;
}
async function J(t, a) {
  let n;
  try {
    if (n = await fetch(t.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-client": $t(),
        "x-goog-api-key": t.apiKey
      },
      body: a
    }), !n.ok) {
      let o = "";
      try {
        const s = await n.json();
        o = s.error.message, s.error.details && (o += ` ${JSON.stringify(s.error.details)}`);
      } catch {
      }
      throw new Error(`[${n.status} ${n.statusText}] ${o}`);
    }
  } catch (o) {
    const s = new B(`Error fetching from ${t.toString()}: ${o.message}`);
    throw s.stack = o.stack, s;
  }
  return n;
}
/**
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
 */
function de(t) {
  return t.text = () => {
    if (t.candidates && t.candidates.length > 0) {
      if (t.candidates.length > 1 && console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`), qe(t.candidates[0]))
        throw new Be(`${te(t)}`, t);
      return Ut(t);
    } else if (t.promptFeedback)
      throw new Be(`Text not available. ${te(t)}`, t);
    return "";
  }, t;
}
function Ut(t) {
  var a, n, o, s;
  return !((s = (o = (n = (a = t.candidates) === null || a === void 0 ? void 0 : a[0].content) === null || n === void 0 ? void 0 : n.parts) === null || o === void 0 ? void 0 : o[0]) === null || s === void 0) && s.text ? t.candidates[0].content.parts[0].text : "";
}
const Ht = [ee.RECITATION, ee.SAFETY];
function qe(t) {
  return !!t.finishReason && Ht.includes(t.finishReason);
}
function te(t) {
  var a, n, o;
  let s = "";
  if ((!t.candidates || t.candidates.length === 0) && t.promptFeedback)
    s += "Response was blocked", !((a = t.promptFeedback) === null || a === void 0) && a.blockReason && (s += ` due to ${t.promptFeedback.blockReason}`), !((n = t.promptFeedback) === null || n === void 0) && n.blockReasonMessage && (s += `: ${t.promptFeedback.blockReasonMessage}`);
  else if (!((o = t.candidates) === null || o === void 0) && o[0]) {
    const u = t.candidates[0];
    qe(u) && (s += `Candidate was blocked due to ${u.finishReason}`, u.finishMessage && (s += `: ${u.finishMessage}`));
  }
  return s;
}
function W(t) {
  return this instanceof W ? (this.v = t, this) : new W(t);
}
function Kt(t, a, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = n.apply(t, a || []), s, u = [];
  return s = {}, g("next"), g("throw"), g("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function g(E) {
    o[E] && (s[E] = function(S) {
      return new Promise(function(j, M) {
        u.push([E, S, j, M]) > 1 || f(E, S);
      });
    });
  }
  function f(E, S) {
    try {
      d(o[E](S));
    } catch (j) {
      w(u[0][3], j);
    }
  }
  function d(E) {
    E.value instanceof W ? Promise.resolve(E.value.v).then(R, C) : w(u[0][2], E);
  }
  function R(E) {
    f("next", E);
  }
  function C(E) {
    f("throw", E);
  }
  function w(E, S) {
    E(S), u.shift(), u.length && f(u[0][0], u[0][1]);
  }
}
/**
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
 */
const We = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
function Bt(t) {
  const a = t.body.pipeThrough(new TextDecoderStream("utf8", { fatal: !0 })), n = Jt(a), [o, s] = n.tee();
  return {
    stream: Vt(o),
    response: Wt(s)
  };
}
async function Wt(t) {
  const a = [], n = t.getReader();
  for (; ; ) {
    const { done: o, value: s } = await n.read();
    if (o)
      return de(qt(a));
    a.push(s);
  }
}
function Vt(t) {
  return Kt(this, arguments, function* () {
    const n = t.getReader();
    for (; ; ) {
      const { value: o, done: s } = yield W(n.read());
      if (s)
        break;
      yield yield W(de(o));
    }
  });
}
function Jt(t) {
  const a = t.getReader();
  return new ReadableStream({
    start(o) {
      let s = "";
      return u();
      function u() {
        return a.read().then(({ value: g, done: f }) => {
          if (f) {
            if (s.trim()) {
              o.error(new B("Failed to parse stream"));
              return;
            }
            o.close();
            return;
          }
          s += g;
          let d = s.match(We), R;
          for (; d; ) {
            try {
              R = JSON.parse(d[1]);
            } catch {
              o.error(new B(`Error parsing JSON response: "${d[1]}"`));
              return;
            }
            o.enqueue(R), s = s.substring(d[0].length), d = s.match(We);
          }
          return u();
        });
      }
    }
  });
}
function qt(t) {
  const a = t[t.length - 1], n = {
    promptFeedback: a == null ? void 0 : a.promptFeedback
  };
  for (const o of t)
    if (o.candidates)
      for (const s of o.candidates) {
        const u = s.index;
        if (n.candidates || (n.candidates = []), n.candidates[u] || (n.candidates[u] = {
          index: s.index
        }), n.candidates[u].citationMetadata = s.citationMetadata, n.candidates[u].finishReason = s.finishReason, n.candidates[u].finishMessage = s.finishMessage, n.candidates[u].safetyRatings = s.safetyRatings, s.content && s.content.parts) {
          n.candidates[u].content || (n.candidates[u].content = {
            role: s.content.role || "user",
            parts: [{ text: "" }]
          });
          for (const g of s.content.parts)
            g.text && (n.candidates[u].content.parts[0].text += g.text);
        }
      }
  return n;
}
/**
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
 */
async function Xe(t, a, n) {
  const o = new V(
    a,
    L.STREAM_GENERATE_CONTENT,
    t,
    /* stream */
    !0
  ), s = await J(o, JSON.stringify(n));
  return Bt(s);
}
async function ze(t, a, n) {
  const o = new V(
    a,
    L.GENERATE_CONTENT,
    t,
    /* stream */
    !1
  ), u = await (await J(o, JSON.stringify(n))).json();
  return {
    response: de(u)
  };
}
/**
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
 */
function K(t, a) {
  let n = [];
  if (typeof t == "string")
    n = [{ text: t }];
  else
    for (const o of t)
      typeof o == "string" ? n.push({ text: o }) : n.push(o);
  return { role: a, parts: n };
}
function le(t) {
  return t.contents ? t : { contents: [K(t, "user")] };
}
function Xt(t) {
  return typeof t == "string" || Array.isArray(t) ? { content: K(t, "user") } : t;
}
/**
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
 */
const Ve = "SILENT_ERROR";
class zt {
  constructor(a, n, o) {
    this.model = n, this.params = o, this._history = [], this._sendPromise = Promise.resolve(), this._apiKey = a, o != null && o.history && (this._history = o.history.map((s) => {
      if (!s.role)
        throw new Error("Missing role for history item: " + JSON.stringify(s));
      return K(s.parts, s.role);
    }));
  }
  /**
   * Gets the chat history so far. Blocked prompts are not added to history.
   * Blocked candidates are not added to history, nor are the prompts that
   * generated them.
   */
  async getHistory() {
    return await this._sendPromise, this._history;
  }
  /**
   * Sends a chat message and receives a non-streaming
   * {@link GenerateContentResult}
   */
  async sendMessage(a) {
    var n, o;
    await this._sendPromise;
    const s = K(a, "user"), u = {
      safetySettings: (n = this.params) === null || n === void 0 ? void 0 : n.safetySettings,
      generationConfig: (o = this.params) === null || o === void 0 ? void 0 : o.generationConfig,
      contents: [...this._history, s]
    };
    let g;
    return this._sendPromise = this._sendPromise.then(() => ze(this._apiKey, this.model, u)).then((f) => {
      var d;
      if (f.response.candidates && f.response.candidates.length > 0) {
        this._history.push(s);
        const R = Object.assign({
          parts: [],
          // Response seems to come back without a role set.
          role: "model"
        }, (d = f.response.candidates) === null || d === void 0 ? void 0 : d[0].content);
        this._history.push(R);
      } else {
        const R = te(f.response);
        R && console.warn(`sendMessage() was unsuccessful. ${R}. Inspect response object for details.`);
      }
      g = f;
    }), await this._sendPromise, g;
  }
  /**
   * Sends a chat message and receives the response as a
   * {@link GenerateContentStreamResult} containing an iterable stream
   * and a response promise.
   */
  async sendMessageStream(a) {
    var n, o;
    await this._sendPromise;
    const s = K(a, "user"), u = {
      safetySettings: (n = this.params) === null || n === void 0 ? void 0 : n.safetySettings,
      generationConfig: (o = this.params) === null || o === void 0 ? void 0 : o.generationConfig,
      contents: [...this._history, s]
    }, g = Xe(this._apiKey, this.model, u);
    return this._sendPromise = this._sendPromise.then(() => g).catch((f) => {
      throw new Error(Ve);
    }).then((f) => f.response).then((f) => {
      if (f.candidates && f.candidates.length > 0) {
        this._history.push(s);
        const d = Object.assign({}, f.candidates[0].content);
        d.role || (d.role = "model"), this._history.push(d);
      } else {
        const d = te(f);
        d && console.warn(`sendMessageStream() was unsuccessful. ${d}. Inspect response object for details.`);
      }
    }).catch((f) => {
      f.message !== Ve && console.error(f);
    }), g;
  }
}
/**
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
 */
async function Qt(t, a, n) {
  const o = new V(a, L.COUNT_TOKENS, t, !1);
  return (await J(o, JSON.stringify(Object.assign(Object.assign({}, n), { model: a })))).json();
}
/**
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
 */
async function Zt(t, a, n) {
  const o = new V(a, L.EMBED_CONTENT, t, !1);
  return (await J(o, JSON.stringify(n))).json();
}
async function er(t, a, n) {
  const o = new V(a, L.BATCH_EMBED_CONTENTS, t, !1), s = n.requests.map((g) => Object.assign(Object.assign({}, g), { model: `models/${a}` }));
  return (await J(o, JSON.stringify({ requests: s }))).json();
}
/**
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
 */
class tr {
  constructor(a, n) {
    var o;
    this.apiKey = a, n.model.startsWith("models/") ? this.model = (o = n.model.split("models/")) === null || o === void 0 ? void 0 : o[1] : this.model = n.model, this.generationConfig = n.generationConfig || {}, this.safetySettings = n.safetySettings || [];
  }
  /**
   * Makes a single non-streaming call to the model
   * and returns an object containing a single {@link GenerateContentResponse}.
   */
  async generateContent(a) {
    const n = le(a);
    return ze(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings }, n));
  }
  /**
   * Makes a single streaming call to the model
   * and returns an object containing an iterable stream that iterates
   * over all chunks in the streaming response as well as
   * a promise that returns the final aggregated response.
   */
  async generateContentStream(a) {
    const n = le(a);
    return Xe(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings }, n));
  }
  /**
   * Gets a new {@link ChatSession} instance which can be used for
   * multi-turn chats.
   */
  startChat(a) {
    return new zt(this.apiKey, this.model, a);
  }
  /**
   * Counts the tokens in the provided request.
   */
  async countTokens(a) {
    const n = le(a);
    return Qt(this.apiKey, this.model, n);
  }
  /**
   * Embeds the provided content.
   */
  async embedContent(a) {
    const n = Xt(a);
    return Zt(this.apiKey, this.model, n);
  }
  /**
   * Embeds an array of {@link EmbedContentRequest}s.
   */
  async batchEmbedContents(a) {
    return er(this.apiKey, this.model, a);
  }
}
/**
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
 */
class rr {
  constructor(a) {
    this.apiKey = a;
  }
  /**
   * Gets a {@link GenerativeModel} instance for the provided model name.
   */
  getGenerativeModel(a) {
    if (!a.model)
      throw new B("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");
    return new tr(this.apiKey, a);
  }
}
function Qe(t) {
  const [a, n] = $(!1), [o, s] = $([
    {
      text: "Hello, nice to meet you. I am EasyChatbot. You can talk with me freely",
      sender: "bot"
    }
  ]), [u, g] = $(""), f = Pt(null), [d, R] = $(!1), [C, w] = $(null), E = new rr(t.apiKey);
  async function S(O) {
    let N;
    O === "gemini" ? N = E.getGenerativeModel({ model: "gemini-pro" }).startChat({
      history: [
        {
          role: "user",
          parts: "Hello, nice to meet you. Who are you?"
        },
        {
          role: "model",
          parts: "Great to meet you. I am a nice bot named EasyChatbot that loves to chat and help you."
        }
      ]
    }) : N = {
      sendMessage: async (I) => ({
        response: {
          text: () => `You said: ${I}`
        }
      })
    }, w(N);
  }
  const j = async () => {
    if (u) {
      s((O) => [
        ...O,
        { text: u, sender: "user" }
      ]), g(""), R(!0);
      try {
        const I = (await (await C.sendMessage(u)).response).text();
        s((b) => [
          ...b,
          { text: I, sender: "bot" }
        ]);
      } catch (O) {
        console.error(O);
      } finally {
        R(!1);
      }
    }
  }, M = () => {
    n(!a);
  };
  return ke(() => {
    f.current && f.current.scrollIntoView({ behavior: "smooth" });
  }, [o]), ke(() => {
    S(t.chatbotType);
  }, []), /* @__PURE__ */ m.jsxs("div", { className: "chatbot-container", children: [
    /* @__PURE__ */ m.jsx("div", { className: "chatbot-button-container", children: !a && /* @__PURE__ */ m.jsx("div", { className: "chatbot-button-container", children: /* @__PURE__ */ m.jsx(
      "img",
      {
        onClick: M,
        src: "https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/DSjjJVtWgP_jxGWP.png",
        alt: "Chat Icon"
      }
    ) }) }),
    a && /* @__PURE__ */ m.jsxs("div", { className: "chatbot-viewer", children: [
      /* @__PURE__ */ m.jsxs("p", { className: "chatbot-header", children: [
        "Conversation with EasyChatbot",
        " ",
        /* @__PURE__ */ m.jsx("span", { className: "close-icon", onClick: M, children: "×" })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "message-list", children: [
        o.map((O, N) => /* @__PURE__ */ m.jsxs(
          "div",
          {
            className: "message-item",
            ref: N === o.length - 1 ? f : null,
            children: [
              /* @__PURE__ */ m.jsxs("strong", { children: [
                O.sender === "bot" ? "EasyChatbot" : "You",
                ":"
              ] }),
              /* @__PURE__ */ m.jsx("br", {}),
              /* @__PURE__ */ m.jsx("p", { children: O.text })
            ]
          },
          N
        )),
        d && /* @__PURE__ */ m.jsxs("div", { className: "loading", children: [
          /* @__PURE__ */ m.jsx("div", { className: "loading-dot" }),
          /* @__PURE__ */ m.jsx("div", { className: "loading-dot" }),
          /* @__PURE__ */ m.jsx("div", { className: "loading-dot" })
        ] }),
        " "
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "chat-input-container", children: [
        /* @__PURE__ */ m.jsx(
          "input",
          {
            placeholder: "Message EasyChatbot...",
            value: u,
            onKeyPress: (O) => {
              O.key === "Enter" && j();
            },
            onChange: (O) => g(O.target.value)
          }
        ),
        /* @__PURE__ */ m.jsx("button", { onClick: j, children: "Send" })
      ] })
    ] })
  ] });
}
const sr = (t) => /* @__PURE__ */ m.jsx(Qe, { ...t }), or = (t, a) => {
  jt.render(/* @__PURE__ */ m.jsx(Qe, { ...a }), t);
};
export {
  sr as Chatbot,
  or as init
};
//# sourceMappingURL=easychatbot.js.map
