import Je, { useState as Y, useRef as Pt, useEffect as ke } from "react";
import jt from "react-dom";
var fe = { exports: {} }, G = {}, Fe;
function Mt() {
  if (Fe)
    return G;
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
    var a = Je, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), I = Symbol.iterator, ee = "@@iterator";
    function te(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[ee];
      return typeof r == "function" ? r : null;
    }
    var M = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          i[c - 1] = arguments[c];
        Ze("error", e, i);
      }
    }
    function Ze(e, r, i) {
      {
        var c = M.ReactDebugCurrentFrame, v = c.getStackAddendum();
        v !== "" && (r += "%s", i = i.concat([v]));
        var g = i.map(function(h) {
          return String(h);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var et = !1, tt = !1, rt = !1, nt = !1, at = !1, he;
    he = Symbol.for("react.module.reference");
    function st(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === p || at || e === u || e === b || e === w || nt || e === C || et || tt || rt || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === E || e.$$typeof === f || e.$$typeof === d || e.$$typeof === m || // This needs to include all possible module reference object
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
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case o:
          return "Portal";
        case p:
          return "Profiler";
        case u:
          return "StrictMode";
        case b:
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
          case m:
            return ot(e, e.render, "ForwardRef");
          case E:
            var c = e.displayName || null;
            return c !== null ? c : N(e.type) || "Memo";
          case S: {
            var v = e, g = v._payload, h = v._init;
            try {
              return N(h(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, k = 0, Ee, ge, pe, _e, me, Re, ye;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function it() {
      {
        if (k === 0) {
          Ee = console.log, ge = console.info, pe = console.warn, _e = console.error, me = console.group, Re = console.groupCollapsed, ye = console.groupEnd;
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
        k++;
      }
    }
    function ct() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: Ee
            }),
            info: P({}, e, {
              value: ge
            }),
            warn: P({}, e, {
              value: pe
            }),
            error: P({}, e, {
              value: _e
            }),
            group: P({}, e, {
              value: me
            }),
            groupCollapsed: P({}, e, {
              value: Re
            }),
            groupEnd: P({}, e, {
              value: ye
            })
          });
        }
        k < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = M.ReactCurrentDispatcher, ne;
    function V(e, r, i) {
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
    var ae = !1, J;
    {
      var ut = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ut();
    }
    function be(e, r) {
      if (!e || ae)
        return "";
      {
        var i = J.get(e);
        if (i !== void 0)
          return i;
      }
      var c;
      ae = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = re.current, re.current = null, it();
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
            } catch (x) {
              c = x;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (x) {
              c = x;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            c = x;
          }
          e();
        }
      } catch (x) {
        if (x && c && typeof x.stack == "string") {
          for (var l = x.stack.split(`
`), T = c.stack.split(`
`), _ = l.length - 1, R = T.length - 1; _ >= 1 && R >= 0 && l[_] !== T[R]; )
            R--;
          for (; _ >= 1 && R >= 0; _--, R--)
            if (l[_] !== T[R]) {
              if (_ !== 1 || R !== 1)
                do
                  if (_--, R--, R < 0 || l[_] !== T[R]) {
                    var A = `
` + l[_].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, A), A;
                  }
                while (_ >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ae = !1, re.current = g, ct(), Error.prepareStackTrace = v;
      }
      var L = e ? e.displayName || e.name : "", Le = L ? V(L) : "";
      return typeof e == "function" && J.set(e, Le), Le;
    }
    function lt(e, r, i) {
      return be(e, !1);
    }
    function ft(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, ft(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case b:
          return V("Suspense");
        case w:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return lt(e.render);
          case E:
            return q(e.type, r, i);
          case S: {
            var c = e, v = c._payload, g = c._init;
            try {
              return q(g(v), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, Se = {}, Oe = M.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, i = q(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(i);
      } else
        Oe.setExtraStackFrame(null);
    }
    function dt(e, r, i, c, v) {
      {
        var g = Function.call.bind(X);
        for (var h in e)
          if (g(e, h)) {
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
            l && !(l instanceof Error) && (z(v), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", i, h, typeof l), z(null)), l instanceof Error && !(l.message in Se) && (Se[l.message] = !0, z(v), O("Failed %s type: %s", i, l.message), z(null));
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
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vt(e)), Te(e);
    }
    var F = M.ReactCurrentOwner, gt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, Ie, oe;
    oe = {};
    function pt(e) {
      if (X.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function _t(e) {
      if (X.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function mt(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var i = N(F.current.type);
        oe[i] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(F.current.type), e.ref), oe[i] = !0);
      }
    }
    function Rt(e, r) {
      {
        var i = function() {
          Ae || (Ae = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ie || (Ie = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Ct = function(e, r, i, c, v, g, h) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: i,
        props: h,
        // Record the component responsible for creating this element.
        _owner: g
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
        var g, h = {}, l = null, T = null;
        i !== void 0 && (we(i), l = "" + i), _t(r) && (we(r.key), l = "" + r.key), pt(r) && (T = r.ref, mt(r, v));
        for (g in r)
          X.call(r, g) && !gt.hasOwnProperty(g) && (h[g] = r[g]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (g in _)
            h[g] === void 0 && (h[g] = _[g]);
        }
        if (l || T) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && Rt(h, R), T && yt(h, R);
        }
        return Ct(e, l, T, v, c, F.current, h);
      }
    }
    var ie = M.ReactCurrentOwner, Ne = M.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, i = q(e.type, e._source, r ? r.type : null);
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
          var e = N(ie.current.type);
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
        e && e._owner && e._owner !== ie.current && (c = " It was passed a child from " + N(e._owner.type) + "."), D(e), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, c), D(null);
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
          var v = te(e);
          if (typeof v == "function" && v !== e.entries)
            for (var g = v.call(e), h; !(h = g.next()).done; )
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
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          i = r.propTypes;
        else
          return;
        if (i) {
          var c = N(r);
          dt(i, e.props, "prop", c, e);
        } else if (r.PropTypes !== void 0 && !ce) {
          ce = !0;
          var v = N(r);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wt(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var c = r[i];
          if (c !== "children" && c !== "key") {
            D(e), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), O("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function De(e, r, i, c, v, g) {
      {
        var h = st(e);
        if (!h) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = St(v);
          T ? l += T : l += xe();
          var _;
          e === null ? _ = "null" : se(e) ? _ = "array" : e !== void 0 && e.$$typeof === n ? (_ = "<" + (N(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, l);
        }
        var R = bt(e, r, i, v, g);
        if (R == null)
          return R;
        if (h) {
          var A = r.children;
          if (A !== void 0)
            if (c)
              if (se(A)) {
                for (var L = 0; L < A.length; L++)
                  Me(A[L], e);
                Object.freeze && Object.freeze(A);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(A, e);
        }
        return e === s ? wt(R) : Tt(R), R;
      }
    }
    function At(e, r, i) {
      return De(e, r, i, !0);
    }
    function It(e, r, i) {
      return De(e, r, i, !1);
    }
    var Nt = It, xt = At;
    G.Fragment = s, G.jsx = Nt, G.jsxs = xt;
  }(), G;
}
var $ = {};
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
    return $;
  Ye = 1;
  var t = Je, a = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(f, d, m) {
    var b, w = {}, E = null, S = null;
    m !== void 0 && (E = "" + m), d.key !== void 0 && (E = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (b in d)
      o.call(d, b) && !u.hasOwnProperty(b) && (w[b] = d[b]);
    if (f && f.defaultProps)
      for (b in d = f.defaultProps, d)
        w[b] === void 0 && (w[b] = d[b]);
    return { $$typeof: a, type: f, key: E, ref: S, props: w, _owner: s.current };
  }
  return $.Fragment = n, $.jsx = p, $.jsxs = p, $;
}
var Lt = {};
Lt.NODE_ENV === "production" ? fe.exports = Dt() : fe.exports = Mt();
var y = fe.exports;
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
var Ke;
(function(t) {
  t.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED", t.SAFETY = "SAFETY", t.OTHER = "OTHER";
})(Ke || (Ke = {}));
var Q;
(function(t) {
  t.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED", t.STOP = "STOP", t.MAX_TOKENS = "MAX_TOKENS", t.SAFETY = "SAFETY", t.RECITATION = "RECITATION", t.OTHER = "OTHER";
})(Q || (Q = {}));
var He;
(function(t) {
  t.TASK_TYPE_UNSPECIFIED = "TASK_TYPE_UNSPECIFIED", t.RETRIEVAL_QUERY = "RETRIEVAL_QUERY", t.RETRIEVAL_DOCUMENT = "RETRIEVAL_DOCUMENT", t.SEMANTIC_SIMILARITY = "SEMANTIC_SIMILARITY", t.CLASSIFICATION = "CLASSIFICATION", t.CLUSTERING = "CLUSTERING";
})(He || (He = {}));
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
class K extends Error {
  constructor(a) {
    super(`[GoogleGenerativeAI Error]: ${a}`);
  }
}
class Be extends K {
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
var j;
(function(t) {
  t.GENERATE_CONTENT = "generateContent", t.STREAM_GENERATE_CONTENT = "streamGenerateContent", t.COUNT_TOKENS = "countTokens", t.EMBED_CONTENT = "embedContent", t.BATCH_EMBED_CONTENTS = "batchEmbedContents";
})(j || (j = {}));
class B {
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
async function W(t, a) {
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
    const s = new K(`Error fetching from ${t.toString()}: ${o.message}`);
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
        throw new Be(`${Z(t)}`, t);
      return Ut(t);
    } else if (t.promptFeedback)
      throw new Be(`Text not available. ${Z(t)}`, t);
    return "";
  }, t;
}
function Ut(t) {
  var a, n, o, s;
  return !((s = (o = (n = (a = t.candidates) === null || a === void 0 ? void 0 : a[0].content) === null || n === void 0 ? void 0 : n.parts) === null || o === void 0 ? void 0 : o[0]) === null || s === void 0) && s.text ? t.candidates[0].content.parts[0].text : "";
}
const Kt = [Q.RECITATION, Q.SAFETY];
function qe(t) {
  return !!t.finishReason && Kt.includes(t.finishReason);
}
function Z(t) {
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
function H(t) {
  return this instanceof H ? (this.v = t, this) : new H(t);
}
function Ht(t, a, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = n.apply(t, a || []), s, u = [];
  return s = {}, p("next"), p("throw"), p("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function p(E) {
    o[E] && (s[E] = function(S) {
      return new Promise(function(C, I) {
        u.push([E, S, C, I]) > 1 || f(E, S);
      });
    });
  }
  function f(E, S) {
    try {
      d(o[E](S));
    } catch (C) {
      w(u[0][3], C);
    }
  }
  function d(E) {
    E.value instanceof H ? Promise.resolve(E.value.v).then(m, b) : w(u[0][2], E);
  }
  function m(E) {
    f("next", E);
  }
  function b(E) {
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
  return Ht(this, arguments, function* () {
    const n = t.getReader();
    for (; ; ) {
      const { value: o, done: s } = yield H(n.read());
      if (s)
        break;
      yield yield H(de(o));
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
        return a.read().then(({ value: p, done: f }) => {
          if (f) {
            if (s.trim()) {
              o.error(new K("Failed to parse stream"));
              return;
            }
            o.close();
            return;
          }
          s += p;
          let d = s.match(We), m;
          for (; d; ) {
            try {
              m = JSON.parse(d[1]);
            } catch {
              o.error(new K(`Error parsing JSON response: "${d[1]}"`));
              return;
            }
            o.enqueue(m), s = s.substring(d[0].length), d = s.match(We);
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
          for (const p of s.content.parts)
            p.text && (n.candidates[u].content.parts[0].text += p.text);
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
  const o = new B(
    a,
    j.STREAM_GENERATE_CONTENT,
    t,
    /* stream */
    !0
  ), s = await W(o, JSON.stringify(n));
  return Bt(s);
}
async function ze(t, a, n) {
  const o = new B(
    a,
    j.GENERATE_CONTENT,
    t,
    /* stream */
    !1
  ), u = await (await W(o, JSON.stringify(n))).json();
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
function U(t, a) {
  let n = [];
  if (typeof t == "string")
    n = [{ text: t }];
  else
    for (const o of t)
      typeof o == "string" ? n.push({ text: o }) : n.push(o);
  return { role: a, parts: n };
}
function le(t) {
  return t.contents ? t : { contents: [U(t, "user")] };
}
function Xt(t) {
  return typeof t == "string" || Array.isArray(t) ? { content: U(t, "user") } : t;
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
      return U(s.parts, s.role);
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
    const s = U(a, "user"), u = {
      safetySettings: (n = this.params) === null || n === void 0 ? void 0 : n.safetySettings,
      generationConfig: (o = this.params) === null || o === void 0 ? void 0 : o.generationConfig,
      contents: [...this._history, s]
    };
    let p;
    return this._sendPromise = this._sendPromise.then(() => ze(this._apiKey, this.model, u)).then((f) => {
      var d;
      if (f.response.candidates && f.response.candidates.length > 0) {
        this._history.push(s);
        const m = Object.assign({
          parts: [],
          // Response seems to come back without a role set.
          role: "model"
        }, (d = f.response.candidates) === null || d === void 0 ? void 0 : d[0].content);
        this._history.push(m);
      } else {
        const m = Z(f.response);
        m && console.warn(`sendMessage() was unsuccessful. ${m}. Inspect response object for details.`);
      }
      p = f;
    }), await this._sendPromise, p;
  }
  /**
   * Sends a chat message and receives the response as a
   * {@link GenerateContentStreamResult} containing an iterable stream
   * and a response promise.
   */
  async sendMessageStream(a) {
    var n, o;
    await this._sendPromise;
    const s = U(a, "user"), u = {
      safetySettings: (n = this.params) === null || n === void 0 ? void 0 : n.safetySettings,
      generationConfig: (o = this.params) === null || o === void 0 ? void 0 : o.generationConfig,
      contents: [...this._history, s]
    }, p = Xe(this._apiKey, this.model, u);
    return this._sendPromise = this._sendPromise.then(() => p).catch((f) => {
      throw new Error(Ve);
    }).then((f) => f.response).then((f) => {
      if (f.candidates && f.candidates.length > 0) {
        this._history.push(s);
        const d = Object.assign({}, f.candidates[0].content);
        d.role || (d.role = "model"), this._history.push(d);
      } else {
        const d = Z(f);
        d && console.warn(`sendMessageStream() was unsuccessful. ${d}. Inspect response object for details.`);
      }
    }).catch((f) => {
      f.message !== Ve && console.error(f);
    }), p;
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
  const o = new B(a, j.COUNT_TOKENS, t, !1);
  return (await W(o, JSON.stringify(Object.assign(Object.assign({}, n), { model: a })))).json();
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
  const o = new B(a, j.EMBED_CONTENT, t, !1);
  return (await W(o, JSON.stringify(n))).json();
}
async function er(t, a, n) {
  const o = new B(a, j.BATCH_EMBED_CONTENTS, t, !1), s = n.requests.map((p) => Object.assign(Object.assign({}, p), { model: `models/${a}` }));
  return (await W(o, JSON.stringify({ requests: s }))).json();
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
      throw new K("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");
    return new tr(this.apiKey, a);
  }
}
async function nr(t, a) {
  let n;
  return t === "gemini" ? n = new rr(a).getGenerativeModel({ model: "gemini-pro" }).startChat({
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
  }) : n = {
    sendMessage: async (o) => ({
      response: {
        text: () => `You said: ${o}`
      }
    })
  }, n;
}
function Qe(t) {
  const [a, n] = Y(!1), [o, s] = Y([
    {
      text: "Hello, nice to meet you. I am EasyChatbot. You can talk with me freely.",
      sender: "bot"
    }
  ]), [u, p] = Y(""), f = Pt(null), [d, m] = Y(!1), [b, w] = Y(null), E = async () => {
    if (u) {
      s((C) => [
        ...C,
        { text: u, sender: "user" }
      ]), p(""), m(!0);
      try {
        const ee = (await (await b.sendMessage(u)).response).text();
        s((te) => [
          ...te,
          { text: ee, sender: "bot" }
        ]);
      } catch (C) {
        console.error(C);
      } finally {
        m(!1);
      }
    }
  }, S = () => {
    n(!a);
  };
  return ke(() => {
    f.current && f.current.scrollIntoView({ behavior: "smooth" });
  }, [o]), ke(() => {
    async function C() {
      const I = await nr(t.chatbotType, t.apiKey);
      w(I);
    }
    C();
  }, [t.chatbotType, t.apiKey]), /* @__PURE__ */ y.jsxs("div", { className: "chatbot-container", children: [
    !a && /* @__PURE__ */ y.jsx("div", { className: "start-img-container", onClick: S, children: /* @__PURE__ */ y.jsx(
      "img",
      {
        src: "https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/DSjjJVtWgP_jxGWP.png",
        alt: "Chat Icon"
      }
    ) }),
    a && /* @__PURE__ */ y.jsxs("div", { className: "chatbot-viewer", children: [
      /* @__PURE__ */ y.jsxs("p", { className: "chatbot-header", children: [
        "Conversation with EasyChatbot",
        " ",
        /* @__PURE__ */ y.jsx("span", { className: "close-icon", onClick: S, children: "×" })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "message-list", children: [
        o.map((C, I) => /* @__PURE__ */ y.jsxs(
          "div",
          {
            className: "message-item",
            ref: I === o.length - 1 ? f : null,
            children: [
              /* @__PURE__ */ y.jsxs("strong", { children: [
                C.sender === "bot" ? "EasyChatbot" : "You",
                ":"
              ] }),
              /* @__PURE__ */ y.jsx("br", {}),
              /* @__PURE__ */ y.jsx("p", { children: C.text })
            ]
          },
          I
        )),
        d && /* @__PURE__ */ y.jsxs("div", { className: "loading", children: [
          /* @__PURE__ */ y.jsx("div", { className: "loading-dot" }),
          /* @__PURE__ */ y.jsx("div", { className: "loading-dot" }),
          /* @__PURE__ */ y.jsx("div", { className: "loading-dot" })
        ] }),
        " "
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "chat-input-container", children: [
        /* @__PURE__ */ y.jsx(
          "input",
          {
            placeholder: "Message EasyChatbot...",
            value: u,
            onKeyPress: (C) => {
              C.key === "Enter" && E();
            },
            onChange: (C) => p(C.target.value)
          }
        ),
        /* @__PURE__ */ y.jsx("button", { onClick: E, children: "Send" })
      ] })
    ] })
  ] });
}
const or = (t) => /* @__PURE__ */ y.jsx(Qe, { ...t }), ir = (t, a) => {
  jt.render(/* @__PURE__ */ y.jsx(Qe, { ...a }), t);
};
export {
  or as Chatbot,
  ir as init
};
//# sourceMappingURL=main.Ag0U65nt.js.map
