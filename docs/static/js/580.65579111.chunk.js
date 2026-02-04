/*! For license information please see 580.65579111.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkpuck_poc = self.webpackChunkpuck_poc || []).push([
  [580],
  {
    330(t, e, r) {
      var n = r(43);
      var o =
          "function" === typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t === 1 / e)) ||
                  (t !== t && e !== e)
                );
              },
        i = n.useState,
        s = n.useEffect,
        a = n.useLayoutEffect,
        u = n.useDebugValue;
      function c(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var r = e();
          return !o(t, r);
        } catch (n) {
          return !0;
        }
      }
      var l =
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var r = e(),
                n = i({ inst: { value: r, getSnapshot: e } }),
                o = n[0].inst,
                l = n[1];
              return (
                a(
                  function () {
                    ((o.value = r),
                      (o.getSnapshot = e),
                      c(o) && l({ inst: o }));
                  },
                  [t, r, e],
                ),
                s(
                  function () {
                    return (
                      c(o) && l({ inst: o }),
                      t(function () {
                        c(o) && l({ inst: o });
                      })
                    );
                  },
                  [t],
                ),
                u(r),
                r
              );
            };
      e.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l;
    },
    717(t, e, r) {
      var n = r(43),
        o = r(461);
      var i =
          "function" === typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t === 1 / e)) ||
                  (t !== t && e !== e)
                );
              },
        s = o.useSyncExternalStore,
        a = n.useRef,
        u = n.useEffect,
        c = n.useMemo,
        l = n.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, r, n, o) {
        var d = a(null);
        if (null === d.current) {
          var h = { hasValue: !1, value: null };
          d.current = h;
        } else h = d.current;
        d = c(
          function () {
            function t(t) {
              if (!u) {
                if (
                  ((u = !0), (s = t), (t = n(t)), void 0 !== o && h.hasValue)
                ) {
                  var e = h.value;
                  if (o(e, t)) return (a = e);
                }
                return (a = t);
              }
              if (((e = a), i(s, t))) return e;
              var r = n(t);
              return void 0 !== o && o(e, r)
                ? ((s = t), e)
                : ((s = t), (a = r));
            }
            var s,
              a,
              u = !1,
              c = void 0 === r ? null : r;
            return [
              function () {
                return t(e());
              },
              null === c
                ? void 0
                : function () {
                    return t(c());
                  },
            ];
          },
          [e, r, n, o],
        );
        var f = s(t, d[0], d[1]);
        return (
          u(
            function () {
              ((h.hasValue = !0), (h.value = f));
            },
            [f],
          ),
          l(f),
          f
        );
      };
    },
    461(t, e, r) {
      t.exports = r(330);
    },
    443(t, e, r) {
      t.exports = r(717);
    },
    580(t, e, r) {
      r.d(e, { $Z: () => K, hG: () => tt, er: () => H });
      var n = r(986),
        o = r(555),
        i = r(43),
        s = r(950),
        a = r(461),
        u = r(579),
        c = r(506);
      const { getOwnPropertyNames: l, getOwnPropertySymbols: d } = Object,
        { hasOwnProperty: h } = Object.prototype;
      function f(t, e) {
        return function (r, n, o) {
          return t(r, n, o) && e(r, n, o);
        };
      }
      function p(t) {
        return function (e, r, n) {
          if (!e || !r || "object" !== typeof e || "object" !== typeof r)
            return t(e, r, n);
          const { cache: o } = n,
            i = o.get(e),
            s = o.get(r);
          if (i && s) return i === r && s === e;
          (o.set(e, r), o.set(r, e));
          const a = t(e, r, n);
          return (o.delete(e), o.delete(r), a);
        };
      }
      function b(t) {
        return l(t).concat(d(t));
      }
      const m = Object.hasOwn || ((t, e) => h.call(t, e));
      function y(t, e) {
        return t === e || (!t && !e && t !== t && e !== e);
      }
      const { getOwnPropertyDescriptor: v, keys: g } = Object;
      function E(t, e) {
        return (
          t.byteLength === e.byteLength &&
          I(new Uint8Array(t), new Uint8Array(e))
        );
      }
      function w(t, e, r) {
        let n = t.length;
        if (e.length !== n) return !1;
        for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
        return !0;
      }
      function S(t, e) {
        return (
          t.byteLength === e.byteLength &&
          I(
            new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
            new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
          )
        );
      }
      function C(t, e) {
        return y(t.getTime(), e.getTime());
      }
      function A(t, e) {
        return (
          t.name === e.name &&
          t.message === e.message &&
          t.cause === e.cause &&
          t.stack === e.stack
        );
      }
      function j(t, e) {
        return t === e;
      }
      function q(t, e, r) {
        const n = t.size;
        if (n !== e.size) return !1;
        if (!n) return !0;
        const o = new Array(n),
          i = t.entries();
        let s,
          a,
          u = 0;
        for (; (s = i.next()) && !s.done; ) {
          const n = e.entries();
          let i = !1,
            c = 0;
          for (; (a = n.next()) && !a.done; ) {
            if (o[c]) {
              c++;
              continue;
            }
            const n = s.value,
              l = a.value;
            if (
              r.equals(n[0], l[0], u, c, t, e, r) &&
              r.equals(n[1], l[1], n[0], l[0], t, e, r)
            ) {
              i = o[c] = !0;
              break;
            }
            c++;
          }
          if (!i) return !1;
          u++;
        }
        return !0;
      }
      const D = y;
      function x(t, e, r) {
        const n = g(t);
        let o = n.length;
        if (g(e).length !== o) return !1;
        for (; o-- > 0; ) if (!k(t, e, r, n[o])) return !1;
        return !0;
      }
      function O(t, e, r) {
        const n = b(t);
        let o,
          i,
          s,
          a = n.length;
        if (b(e).length !== a) return !1;
        for (; a-- > 0; ) {
          if (((o = n[a]), !k(t, e, r, o))) return !1;
          if (
            ((i = v(t, o)),
            (s = v(e, o)),
            (i || s) &&
              (!i ||
                !s ||
                i.configurable !== s.configurable ||
                i.enumerable !== s.enumerable ||
                i.writable !== s.writable))
          )
            return !1;
        }
        return !0;
      }
      function R(t, e) {
        return y(t.valueOf(), e.valueOf());
      }
      function T(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function N(t, e, r) {
        const n = t.size;
        if (n !== e.size) return !1;
        if (!n) return !0;
        const o = new Array(n),
          i = t.values();
        let s, a;
        for (; (s = i.next()) && !s.done; ) {
          const n = e.values();
          let i = !1,
            u = 0;
          for (; (a = n.next()) && !a.done; ) {
            if (
              !o[u] &&
              r.equals(s.value, a.value, s.value, a.value, t, e, r)
            ) {
              i = o[u] = !0;
              break;
            }
            u++;
          }
          if (!i) return !1;
        }
        return !0;
      }
      function I(t, e) {
        let r = t.byteLength;
        if (e.byteLength !== r || t.byteOffset !== e.byteOffset) return !1;
        for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function M(t, e) {
        return (
          t.hostname === e.hostname &&
          t.pathname === e.pathname &&
          t.protocol === e.protocol &&
          t.port === e.port &&
          t.hash === e.hash &&
          t.username === e.username &&
          t.password === e.password
        );
      }
      function k(t, e, r, n) {
        return (
          !(
            ("_owner" !== n && "__o" !== n && "__v" !== n) ||
            (!t.$$typeof && !e.$$typeof)
          ) ||
          (m(e, n) && r.equals(t[n], e[n], n, n, t, e, r))
        );
      }
      const U = {
          "[object Int8Array]": !0,
          "[object Uint8Array]": !0,
          "[object Uint8ClampedArray]": !0,
          "[object Int16Array]": !0,
          "[object Uint16Array]": !0,
          "[object Int32Array]": !0,
          "[object Uint32Array]": !0,
          "[object Float16Array]": !0,
          "[object Float32Array]": !0,
          "[object Float64Array]": !0,
          "[object BigInt64Array]": !0,
          "[object BigUint64Array]": !0,
        },
        $ = Object.prototype.toString;
      function P(t) {
        let {
          areArrayBuffersEqual: e,
          areArraysEqual: r,
          areDataViewsEqual: n,
          areDatesEqual: o,
          areErrorsEqual: i,
          areFunctionsEqual: s,
          areMapsEqual: a,
          areNumbersEqual: u,
          areObjectsEqual: c,
          arePrimitiveWrappersEqual: l,
          areRegExpsEqual: d,
          areSetsEqual: h,
          areTypedArraysEqual: f,
          areUrlsEqual: p,
          unknownTagComparators: b,
        } = t;
        return function (t, m, y) {
          if (t === m) return !0;
          if (null == t || null == m) return !1;
          const v = typeof t;
          if (v !== typeof m) return !1;
          if ("object" !== v)
            return "number" === v ? u(t, m, y) : "function" === v && s(t, m, y);
          const g = t.constructor;
          if (g !== m.constructor) return !1;
          if (g === Object) return c(t, m, y);
          if (Array.isArray(t)) return r(t, m, y);
          if (g === Date) return o(t, m, y);
          if (g === RegExp) return d(t, m, y);
          if (g === Map) return a(t, m, y);
          if (g === Set) return h(t, m, y);
          const E = $.call(t);
          if ("[object Date]" === E) return o(t, m, y);
          if ("[object RegExp]" === E) return d(t, m, y);
          if ("[object Map]" === E) return a(t, m, y);
          if ("[object Set]" === E) return h(t, m, y);
          if ("[object Object]" === E)
            return (
              "function" !== typeof t.then &&
              "function" !== typeof m.then &&
              c(t, m, y)
            );
          if ("[object URL]" === E) return p(t, m, y);
          if ("[object Error]" === E) return i(t, m, y);
          if ("[object Arguments]" === E) return c(t, m, y);
          if (U[E]) return f(t, m, y);
          if ("[object ArrayBuffer]" === E) return e(t, m, y);
          if ("[object DataView]" === E) return n(t, m, y);
          if (
            "[object Boolean]" === E ||
            "[object Number]" === E ||
            "[object String]" === E
          )
            return l(t, m, y);
          if (b) {
            let e = b[E];
            if (!e) {
              const r = null != (w = t) ? w[Symbol.toStringTag] : void 0;
              r && (e = b[r]);
            }
            if (e) return e(t, m, y);
          }
          var w;
          return !1;
        };
      }
      const V = B();
      (B({ strict: !0 }),
        B({ circular: !0 }),
        B({ circular: !0, strict: !0 }),
        B({ createInternalComparator: () => y }),
        B({ strict: !0, createInternalComparator: () => y }),
        B({ circular: !0, createInternalComparator: () => y }),
        B({ circular: !0, createInternalComparator: () => y, strict: !0 }));
      function B() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
            circular: e = !1,
            createInternalComparator: r,
            createState: n,
            strict: o = !1,
          } = t,
          i = (function (t) {
            let { circular: e, createCustomConfig: r, strict: n } = t,
              o = {
                areArrayBuffersEqual: E,
                areArraysEqual: n ? O : w,
                areDataViewsEqual: S,
                areDatesEqual: C,
                areErrorsEqual: A,
                areFunctionsEqual: j,
                areMapsEqual: n ? f(q, O) : q,
                areNumbersEqual: D,
                areObjectsEqual: n ? O : x,
                arePrimitiveWrappersEqual: R,
                areRegExpsEqual: T,
                areSetsEqual: n ? f(N, O) : N,
                areTypedArraysEqual: n ? f(I, O) : I,
                areUrlsEqual: M,
                unknownTagComparators: void 0,
              };
            if ((r && (o = Object.assign({}, o, r(o))), e)) {
              const t = p(o.areArraysEqual),
                e = p(o.areMapsEqual),
                r = p(o.areObjectsEqual),
                n = p(o.areSetsEqual);
              o = Object.assign({}, o, {
                areArraysEqual: t,
                areMapsEqual: e,
                areObjectsEqual: r,
                areSetsEqual: n,
              });
            }
            return o;
          })(t),
          s = P(i);
        var a;
        return (function (t) {
          let {
            circular: e,
            comparator: r,
            createState: n,
            equals: o,
            strict: i,
          } = t;
          if (n)
            return function (t, s) {
              const { cache: a = e ? new WeakMap() : void 0, meta: u } = n();
              return r(t, s, { cache: a, equals: o, meta: u, strict: i });
            };
          if (e)
            return function (t, e) {
              return r(t, e, {
                cache: new WeakMap(),
                equals: o,
                meta: void 0,
                strict: i,
              });
            };
          const s = { cache: void 0, equals: o, meta: void 0, strict: i };
          return function (t, e) {
            return r(t, e, s);
          };
        })({
          circular: e,
          comparator: s,
          createState: n,
          equals: r
            ? r(s)
            : ((a = s),
              function (t, e, r, n, o, i, s) {
                return a(t, e, s);
              }),
          strict: o,
        });
      }
      var L = r(443);
      const z = ["editor", "innerRef"];
      var F = function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          return (t) => {
            e.forEach((e) => {
              "function" === typeof e ? e(t) : e && (e.current = t);
            });
          };
        },
        _ = (t) => {
          let { contentComponent: e } = t;
          const r = (0, a.useSyncExternalStore)(
            e.subscribe,
            e.getSnapshot,
            e.getServerSnapshot,
          );
          return (0, u.jsx)(u.Fragment, { children: Object.values(r) });
        };
      var W = class extends i.Component {
          constructor(t) {
            var e;
            (super(t),
              (this.editorContentRef = i.createRef()),
              (this.initialized = !1),
              (this.state = {
                hasContentComponentInitialized: Boolean(
                  null == (e = t.editor) ? void 0 : e.contentComponent,
                ),
              }));
          }
          componentDidMount() {
            this.init();
          }
          componentDidUpdate() {
            this.init();
          }
          init() {
            var t;
            const e = this.props.editor;
            if (
              e &&
              !e.isDestroyed &&
              (null == (t = e.view.dom) ? void 0 : t.parentNode)
            ) {
              if (e.contentComponent) return;
              const t = this.editorContentRef.current;
              (t.append(...e.view.dom.parentNode.childNodes),
                e.setOptions({ element: t }),
                (e.contentComponent = (function () {
                  const t = new Set();
                  let e = {};
                  return {
                    subscribe: (e) => (
                      t.add(e),
                      () => {
                        t.delete(e);
                      }
                    ),
                    getSnapshot: () => e,
                    getServerSnapshot: () => e,
                    setRenderer(r, n) {
                      ((e = (0, o.A)(
                        (0, o.A)({}, e),
                        {},
                        { [r]: s.createPortal(n.reactElement, n.element, r) },
                      )),
                        t.forEach((t) => t()));
                    },
                    removeRenderer(r) {
                      const n = (0, o.A)({}, e);
                      (delete n[r], (e = n), t.forEach((t) => t()));
                    },
                  };
                })()),
                this.state.hasContentComponentInitialized ||
                  (this.unsubscribeToContentComponent =
                    e.contentComponent.subscribe(() => {
                      (this.setState((t) =>
                        t.hasContentComponentInitialized
                          ? t
                          : { hasContentComponentInitialized: !0 },
                      ),
                        this.unsubscribeToContentComponent &&
                          this.unsubscribeToContentComponent());
                    })),
                e.createNodeViews(),
                (this.initialized = !0));
            }
          }
          componentWillUnmount() {
            var t;
            const e = this.props.editor;
            if (e) {
              ((this.initialized = !1),
                e.isDestroyed || e.view.setProps({ nodeViews: {} }),
                this.unsubscribeToContentComponent &&
                  this.unsubscribeToContentComponent(),
                (e.contentComponent = null));
              try {
                if (!(null == (t = e.view.dom) ? void 0 : t.parentNode)) return;
                const r = document.createElement("div");
                (r.append(...e.view.dom.parentNode.childNodes),
                  e.setOptions({ element: r }));
              } catch (r) {}
            }
          }
          render() {
            const t = this.props,
              { editor: e, innerRef: r } = t,
              i = (0, n.A)(t, z);
            return (0, u.jsxs)(u.Fragment, {
              children: [
                (0, u.jsx)(
                  "div",
                  (0, o.A)({ ref: F(r, this.editorContentRef) }, i),
                ),
                (null == e ? void 0 : e.contentComponent) &&
                  (0, u.jsx)(_, { contentComponent: e.contentComponent }),
              ],
            });
          }
        },
        G = (0, i.forwardRef)((t, e) => {
          const r = i.useMemo(
            () => Math.floor(4294967295 * Math.random()).toString(),
            [t.editor],
          );
          return i.createElement(W, (0, o.A)({ key: r, innerRef: e }, t));
        }),
        K = i.memo(G),
        Y = "undefined" !== typeof window ? i.useLayoutEffect : i.useEffect,
        Z = class {
          constructor(t) {
            ((this.transactionNumber = 0),
              (this.lastTransactionNumber = 0),
              (this.subscribers = new Set()),
              (this.editor = t),
              (this.lastSnapshot = { editor: t, transactionNumber: 0 }),
              (this.getSnapshot = this.getSnapshot.bind(this)),
              (this.getServerSnapshot = this.getServerSnapshot.bind(this)),
              (this.watch = this.watch.bind(this)),
              (this.subscribe = this.subscribe.bind(this)));
          }
          getSnapshot() {
            return (
              this.transactionNumber === this.lastTransactionNumber ||
                ((this.lastTransactionNumber = this.transactionNumber),
                (this.lastSnapshot = {
                  editor: this.editor,
                  transactionNumber: this.transactionNumber,
                })),
              this.lastSnapshot
            );
          }
          getServerSnapshot() {
            return { editor: null, transactionNumber: 0 };
          }
          subscribe(t) {
            return (
              this.subscribers.add(t),
              () => {
                this.subscribers.delete(t);
              }
            );
          }
          watch(t) {
            if (((this.editor = t), this.editor)) {
              const t = () => {
                  ((this.transactionNumber += 1),
                    this.subscribers.forEach((t) => t()));
                },
                e = this.editor;
              return (
                e.on("transaction", t),
                () => {
                  e.off("transaction", t);
                }
              );
            }
          }
        };
      function H(t) {
        var e;
        const [r] = (0, i.useState)(() => new Z(t.editor)),
          n = (0, L.useSyncExternalStoreWithSelector)(
            r.subscribe,
            r.getSnapshot,
            r.getServerSnapshot,
            t.selector,
            null != (e = t.equalityFn) ? e : V,
          );
        return (
          Y(() => r.watch(t.editor), [t.editor, r]),
          (0, i.useDebugValue)(n),
          n
        );
      }
      var J = "undefined" === typeof window,
        Q = J || Boolean("undefined" !== typeof window && window.next),
        X = class t {
          constructor(t) {
            ((this.editor = null),
              (this.subscriptions = new Set()),
              (this.isComponentMounted = !1),
              (this.previousDeps = null),
              (this.instanceId = ""),
              (this.options = t),
              (this.subscriptions = new Set()),
              this.setEditor(this.getInitialEditor()),
              this.scheduleDestroy(),
              (this.getEditor = this.getEditor.bind(this)),
              (this.getServerSnapshot = this.getServerSnapshot.bind(this)),
              (this.subscribe = this.subscribe.bind(this)),
              (this.refreshEditorInstance =
                this.refreshEditorInstance.bind(this)),
              (this.scheduleDestroy = this.scheduleDestroy.bind(this)),
              (this.onRender = this.onRender.bind(this)),
              (this.createEditor = this.createEditor.bind(this)));
          }
          setEditor(t) {
            ((this.editor = t),
              (this.instanceId = Math.random().toString(36).slice(2, 9)),
              this.subscriptions.forEach((t) => t()));
          }
          getInitialEditor() {
            return void 0 === this.options.current.immediatelyRender
              ? J || Q
                ? null
                : this.createEditor()
              : (this.options.current.immediatelyRender,
                this.options.current.immediatelyRender
                  ? this.createEditor()
                  : null);
          }
          createEditor() {
            var t = this;
            const e = (0, o.A)(
              (0, o.A)({}, this.options.current),
              {},
              {
                onBeforeCreate: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onBeforeCreate)
                    ? void 0
                    : r.call(e, ...o);
                },
                onBlur: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onBlur)
                    ? void 0
                    : r.call(e, ...o);
                },
                onCreate: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onCreate)
                    ? void 0
                    : r.call(e, ...o);
                },
                onDestroy: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onDestroy)
                    ? void 0
                    : r.call(e, ...o);
                },
                onFocus: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onFocus)
                    ? void 0
                    : r.call(e, ...o);
                },
                onSelectionUpdate: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onSelectionUpdate)
                    ? void 0
                    : r.call(e, ...o);
                },
                onTransaction: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onTransaction)
                    ? void 0
                    : r.call(e, ...o);
                },
                onUpdate: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onUpdate)
                    ? void 0
                    : r.call(e, ...o);
                },
                onContentError: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onContentError)
                    ? void 0
                    : r.call(e, ...o);
                },
                onDrop: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onDrop)
                    ? void 0
                    : r.call(e, ...o);
                },
                onPaste: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onPaste)
                    ? void 0
                    : r.call(e, ...o);
                },
                onDelete: function () {
                  for (
                    var e, r, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return null == (r = (e = t.options.current).onDelete)
                    ? void 0
                    : r.call(e, ...o);
                },
              },
            );
            return new c.KE(e);
          }
          getEditor() {
            return this.editor;
          }
          getServerSnapshot() {
            return null;
          }
          subscribe(t) {
            return (
              this.subscriptions.add(t),
              () => {
                this.subscriptions.delete(t);
              }
            );
          }
          static compareOptions(t, e) {
            return Object.keys(t).every(
              (r) =>
                !![
                  "onCreate",
                  "onBeforeCreate",
                  "onDestroy",
                  "onUpdate",
                  "onTransaction",
                  "onFocus",
                  "onBlur",
                  "onSelectionUpdate",
                  "onContentError",
                  "onDrop",
                  "onPaste",
                ].includes(r) ||
                ("extensions" === r && t.extensions && e.extensions
                  ? t.extensions.length === e.extensions.length &&
                    t.extensions.every((t, r) => {
                      var n;
                      return t === (null == (n = e.extensions) ? void 0 : n[r]);
                    })
                  : t[r] === e[r]),
            );
          }
          onRender(e) {
            return () => (
              (this.isComponentMounted = !0),
              clearTimeout(this.scheduledDestructionTimeout),
              this.editor && !this.editor.isDestroyed && 0 === e.length
                ? t.compareOptions(this.options.current, this.editor.options) ||
                  this.editor.setOptions(
                    (0, o.A)(
                      (0, o.A)({}, this.options.current),
                      {},
                      { editable: this.editor.isEditable },
                    ),
                  )
                : this.refreshEditorInstance(e),
              () => {
                ((this.isComponentMounted = !1), this.scheduleDestroy());
              }
            );
          }
          refreshEditorInstance(t) {
            if (this.editor && !this.editor.isDestroyed) {
              if (null === this.previousDeps)
                return void (this.previousDeps = t);
              if (
                this.previousDeps.length === t.length &&
                this.previousDeps.every((e, r) => e === t[r])
              )
                return;
            }
            (this.editor && !this.editor.isDestroyed && this.editor.destroy(),
              this.setEditor(this.createEditor()),
              (this.previousDeps = t));
          }
          scheduleDestroy() {
            const t = this.instanceId,
              e = this.editor;
            this.scheduledDestructionTimeout = setTimeout(() => {
              this.isComponentMounted && this.instanceId === t
                ? e && e.setOptions(this.options.current)
                : e &&
                  !e.isDestroyed &&
                  (e.destroy(), this.instanceId === t && this.setEditor(null));
            }, 1);
          }
        };
      function tt() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const r = (0, i.useRef)(t);
        r.current = t;
        const [n] = (0, i.useState)(() => new X(r)),
          o = (0, a.useSyncExternalStore)(
            n.subscribe,
            n.getEditor,
            n.getServerSnapshot,
          );
        return (
          (0, i.useDebugValue)(o),
          (0, i.useEffect)(n.onRender(e)),
          H({
            editor: o,
            selector: (e) => {
              let { transactionNumber: r } = e;
              return !1 === t.shouldRerenderOnTransaction ||
                void 0 === t.shouldRerenderOnTransaction
                ? null
                : t.immediatelyRender && 0 === r
                  ? 0
                  : r + 1;
            },
          }),
          o
        );
      }
      var et = (0, i.createContext)({ editor: null });
      et.Consumer;
      var rt = (0, i.createContext)({
          onDragStart: () => {},
          nodeViewContentChildren: void 0,
          nodeViewContentRef: () => {},
        }),
        nt = () => (0, i.useContext)(rt);
      i.forwardRef((t, e) => {
        const { onDragStart: r } = nt(),
          n = t.as || "div";
        return (0, u.jsx)(
          n,
          (0, o.A)(
            (0, o.A)({}, t),
            {},
            {
              ref: e,
              "data-node-view-wrapper": "",
              onDragStart: r,
              style: (0, o.A)({ whiteSpace: "normal" }, t.style),
            },
          ),
        );
      });
      function ot(t) {
        return !(
          "function" !== typeof t ||
          !t.prototype ||
          !t.prototype.isReactComponent
        );
      }
      function it(t) {
        return !(
          "object" !== typeof t ||
          !t.$$typeof ||
          ("Symbol(react.forward_ref)" !== t.$$typeof.toString() &&
            "react.forward_ref" !== t.$$typeof.description)
        );
      }
      var st = class {
          constructor(t, e) {
            let {
              editor: r,
              props: n = {},
              as: o = "div",
              className: i = "",
            } = e;
            ((this.ref = null),
              (this.destroyed = !1),
              (this.id = Math.floor(4294967295 * Math.random()).toString()),
              (this.component = t),
              (this.editor = r),
              (this.props = n),
              (this.element = document.createElement(o)),
              this.element.classList.add("react-renderer"),
              i && this.element.classList.add(...i.split(" ")),
              this.editor.isInitialized
                ? (0, s.flushSync)(() => {
                    this.render();
                  })
                : queueMicrotask(() => {
                    this.destroyed || this.render();
                  }));
          }
          render() {
            var t;
            if (this.destroyed) return;
            const e = this.component,
              r = this.props,
              n = this.editor,
              s = (function () {
                try {
                  if (i.version)
                    return parseInt(i.version.split(".")[0], 10) >= 19;
                } catch (t) {}
                return !1;
              })(),
              a = (function (t) {
                if (ot(t)) return !0;
                if (it(t)) return !0;
                if (
                  (function (t) {
                    return !(
                      "object" !== typeof t ||
                      !t.$$typeof ||
                      ("Symbol(react.memo)" !== t.$$typeof.toString() &&
                        "react.memo" !== t.$$typeof.description)
                    );
                  })(t)
                ) {
                  const e = t.type;
                  if (e) return ot(e) || it(e);
                }
                return !1;
              })(e),
              c = (0, o.A)({}, r);
            (!c.ref || s || a || delete c.ref,
              c.ref ||
                (!s && !a) ||
                (c.ref = (t) => {
                  this.ref = t;
                }),
              (this.reactElement = (0, u.jsx)(e, (0, o.A)({}, c))),
              null == (t = null == n ? void 0 : n.contentComponent) ||
                t.setRenderer(this.id, this));
          }
          updateProps() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            this.destroyed ||
              ((this.props = (0, o.A)((0, o.A)({}, this.props), t)),
              this.render());
          }
          destroy() {
            var t;
            this.destroyed = !0;
            const e = this.editor;
            null == (t = null == e ? void 0 : e.contentComponent) ||
              t.removeRenderer(this.id);
            try {
              this.element &&
                this.element.parentNode &&
                this.element.parentNode.removeChild(this.element);
            } catch (r) {}
          }
          updateAttributes(t) {
            Object.keys(t).forEach((e) => {
              this.element.setAttribute(e, t[e]);
            });
          }
        },
        at = i.createContext({ markViewContentRef: () => {} });
      c.Db;
      c.Yv;
      var ut = (0, i.createContext)({
        get editor() {
          throw new Error("useTiptap must be used within a <Tiptap> provider");
        },
      });
      ut.displayName = "TiptapContext";
      var ct = () => (0, i.useContext)(ut);
      function lt(t) {
        let { editor: e, instance: r, children: n } = t;
        const o = null != e ? e : r;
        if (!o)
          throw new Error(
            "Tiptap: An editor instance is required. Pass a non-null `editor` prop.",
          );
        const s = (0, i.useMemo)(() => ({ editor: o }), [o]),
          a = (0, i.useMemo)(() => ({ editor: o }), [o]);
        return (0, u.jsx)(et.Provider, {
          value: a,
          children: (0, u.jsx)(ut.Provider, { value: s, children: n }),
        });
      }
      function dt(t) {
        let e = Object.assign(
          {},
          ((function (t) {
            if (null == t) throw new TypeError("Cannot destructure " + t);
          })(t),
          t),
        );
        const { editor: r } = ct();
        return (0, u.jsx)(K, (0, o.A)({ editor: r }, e));
      }
      ((lt.displayName = "Tiptap"), (dt.displayName = "Tiptap.Content"));
      Object.assign(lt, { Content: dt });
    },
  },
]);
//# sourceMappingURL=580.65579111.chunk.js.map
