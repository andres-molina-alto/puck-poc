"use strict";
(self.webpackChunkpuck_poc = self.webpackChunkpuck_poc || []).push([
  [506],
  {
    506(t, e, n) {
      n.d(e, {
        KE: () => rs,
        YY: () => Wi,
        CU: () => $i,
        Db: () => bs,
        bP: () => ks,
        Yv: () => xs,
        AB: () => cs,
        T7: () => Mo,
        Nx: () => Co,
        gu: () => _o,
        FF: () => Ho,
        hO: () => Go,
        fl: () => Zo,
        Pg: () => Sr,
        zU: () => zo,
        _w: () => jo,
        QN: () => ti,
        J_: () => ei,
        rU: () => io,
        BQ: () => ii,
        OX: () => is,
        Zc: () => Ss,
        KV: () => Po,
        jT: () => ss,
        Dd: () => ys,
        kj: () => vs,
        JJ: () => ls,
        tG: () => as,
      });
      var r = n(555),
        o = n(115),
        i = n(282),
        s = n(184);
      const l = (t, e) =>
        !t.selection.empty &&
        (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
      function a(t, e) {
        let { $cursor: n } = t.selection;
        return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0)
          ? null
          : n;
      }
      const c = (t, e, n) => {
        let r = a(t, n);
        if (!r) return !1;
        let l = u(r);
        if (!l) {
          let n = r.blockRange(),
            i = n && (0, o.jP)(n);
          return null != i && (e && e(t.tr.lift(n, i).scrollIntoView()), !0);
        }
        let c = l.nodeBefore;
        if (C(t, l, e, -1)) return !0;
        if (0 == r.parent.content.size && (h(c, "end") || s.nh.isSelectable(c)))
          for (let a = r.depth; ; a--) {
            let n = (0, o.$L)(t.doc, r.before(a), r.after(a), i.Ji.empty);
            if (n && n.slice.size < n.to - n.from) {
              if (e) {
                let r = t.tr.step(n);
                (r.setSelection(
                  h(c, "end")
                    ? s.LN.findFrom(r.doc.resolve(r.mapping.map(l.pos, -1)), -1)
                    : s.nh.create(r.doc, l.pos - c.nodeSize),
                ),
                  e(r.scrollIntoView()));
              }
              return !0;
            }
            if (1 == a || r.node(a - 1).childCount > 1) break;
          }
        return (
          !(!c.isAtom || l.depth != r.depth - 1) &&
          (e && e(t.tr.delete(l.pos - c.nodeSize, l.pos).scrollIntoView()), !0)
        );
      };
      function d(t, e, n) {
        let r = e.nodeBefore,
          l = e.pos - 1;
        for (; !r.isTextblock; l--) {
          if (r.type.spec.isolating) return !1;
          let t = r.lastChild;
          if (!t) return !1;
          r = t;
        }
        let a = e.nodeAfter,
          c = e.pos + 1;
        for (; !a.isTextblock; c++) {
          if (a.type.spec.isolating) return !1;
          let t = a.firstChild;
          if (!t) return !1;
          a = t;
        }
        let d = (0, o.$L)(t.doc, l, c, i.Ji.empty);
        if (!d || d.from != l || (d instanceof o.Ln && d.slice.size >= c - l))
          return !1;
        if (n) {
          let e = t.tr.step(d);
          (e.setSelection(s.U3.create(e.doc, l)), n(e.scrollIntoView()));
        }
        return !0;
      }
      function h(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        for (let r = t; r; r = "start" == e ? r.firstChild : r.lastChild) {
          if (r.isTextblock) return !0;
          if (n && 1 != r.childCount) return !1;
        }
        return !1;
      }
      const p = (t, e, n) => {
        let { $head: r, empty: o } = t.selection,
          i = r;
        if (!o) return !1;
        if (r.parent.isTextblock) {
          if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
            return !1;
          i = u(r);
        }
        let l = i && i.nodeBefore;
        return (
          !(!l || !s.nh.isSelectable(l)) &&
          (e &&
            e(
              t.tr
                .setSelection(s.nh.create(t.doc, i.pos - l.nodeSize))
                .scrollIntoView(),
            ),
          !0)
        );
      };
      function u(t) {
        if (!t.parent.type.spec.isolating)
          for (let e = t.depth - 1; e >= 0; e--) {
            if (t.index(e) > 0) return t.doc.resolve(t.before(e + 1));
            if (t.node(e).type.spec.isolating) break;
          }
        return null;
      }
      function f(t, e) {
        let { $cursor: n } = t.selection;
        return !n ||
          (e
            ? !e.endOfTextblock("forward", t)
            : n.parentOffset < n.parent.content.size)
          ? null
          : n;
      }
      const m = (t, e, n) => {
          let r = f(t, n);
          if (!r) return !1;
          let l = y(r);
          if (!l) return !1;
          let a = l.nodeAfter;
          if (C(t, l, e, 1)) return !0;
          if (
            0 == r.parent.content.size &&
            (h(a, "start") || s.nh.isSelectable(a))
          ) {
            let n = (0, o.$L)(t.doc, r.before(), r.after(), i.Ji.empty);
            if (n && n.slice.size < n.to - n.from) {
              if (e) {
                let r = t.tr.step(n);
                (r.setSelection(
                  h(a, "start")
                    ? s.LN.findFrom(r.doc.resolve(r.mapping.map(l.pos)), 1)
                    : s.nh.create(r.doc, r.mapping.map(l.pos)),
                ),
                  e(r.scrollIntoView()));
              }
              return !0;
            }
          }
          return (
            !(!a.isAtom || l.depth != r.depth - 1) &&
            (e && e(t.tr.delete(l.pos, l.pos + a.nodeSize).scrollIntoView()),
            !0)
          );
        },
        g = (t, e, n) => {
          let { $head: r, empty: o } = t.selection,
            i = r;
          if (!o) return !1;
          if (r.parent.isTextblock) {
            if (
              n
                ? !n.endOfTextblock("forward", t)
                : r.parentOffset < r.parent.content.size
            )
              return !1;
            i = y(r);
          }
          let l = i && i.nodeAfter;
          return (
            !(!l || !s.nh.isSelectable(l)) &&
            (e &&
              e(t.tr.setSelection(s.nh.create(t.doc, i.pos)).scrollIntoView()),
            !0)
          );
        };
      function y(t) {
        if (!t.parent.type.spec.isolating)
          for (let e = t.depth - 1; e >= 0; e--) {
            let n = t.node(e);
            if (t.index(e) + 1 < n.childCount)
              return t.doc.resolve(t.after(e + 1));
            if (n.type.spec.isolating) break;
          }
        return null;
      }
      const v = (t, e) => {
        let { $head: n, $anchor: r } = t.selection;
        return (
          !(!n.parent.type.spec.code || !n.sameParent(r)) &&
          (e && e(t.tr.insertText("\n").scrollIntoView()), !0)
        );
      };
      function w(t) {
        for (let e = 0; e < t.edgeCount; e++) {
          let { type: n } = t.edge(e);
          if (n.isTextblock && !n.hasRequiredAttrs()) return n;
        }
        return null;
      }
      const b = (t, e) => {
          let { $head: n, $anchor: r } = t.selection;
          if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
          let o = n.node(-1),
            i = n.indexAfter(-1),
            l = w(o.contentMatchAt(i));
          if (!l || !o.canReplaceWith(i, i, l)) return !1;
          if (e) {
            let r = n.after(),
              o = t.tr.replaceWith(r, r, l.createAndFill());
            (o.setSelection(s.LN.near(o.doc.resolve(r), 1)),
              e(o.scrollIntoView()));
          }
          return !0;
        },
        k = (t, e) => {
          let n = t.selection,
            { $from: r, $to: o } = n;
          if (
            n instanceof s.i5 ||
            r.parent.inlineContent ||
            o.parent.inlineContent
          )
            return !1;
          let i = w(o.parent.contentMatchAt(o.indexAfter()));
          if (!i || !i.isTextblock) return !1;
          if (e) {
            let n = (!r.parentOffset && o.index() < o.parent.childCount ? r : o)
                .pos,
              l = t.tr.insert(n, i.createAndFill());
            (l.setSelection(s.U3.create(l.doc, n + 1)), e(l.scrollIntoView()));
          }
          return !0;
        },
        x = (t, e) => {
          let { $cursor: n } = t.selection;
          if (!n || n.parent.content.size) return !1;
          if (n.depth > 1 && n.after() != n.end(-1)) {
            let r = n.before();
            if ((0, o.zy)(t.doc, r))
              return (e && e(t.tr.split(r).scrollIntoView()), !0);
          }
          let r = n.blockRange(),
            i = r && (0, o.jP)(r);
          return null != i && (e && e(t.tr.lift(r, i).scrollIntoView()), !0);
        };
      const S = (t, e) => {
        let { $from: n, $to: r } = t.selection;
        if (t.selection instanceof s.nh && t.selection.node.isBlock)
          return (
            !(!n.parentOffset || !(0, o.zy)(t.doc, n.pos)) &&
            (e && e(t.tr.split(n.pos).scrollIntoView()), !0)
          );
        if (!n.depth) return !1;
        let i,
          l,
          a = [],
          c = !1,
          d = !1;
        for (let o = n.depth; ; o--) {
          if (n.node(o).isBlock) {
            ((c = n.end(o) == n.pos + (n.depth - o)),
              (d = n.start(o) == n.pos - (n.depth - o)),
              (l = w(n.node(o - 1).contentMatchAt(n.indexAfter(o - 1)))));
            let t = M && M(r.parent, c, n);
            (a.unshift(t || (c && l ? { type: l } : null)), (i = o));
            break;
          }
          if (1 == o) return !1;
          a.unshift(null);
        }
        let h = t.tr;
        (t.selection instanceof s.U3 || t.selection instanceof s.i5) &&
          h.deleteSelection();
        let p = h.mapping.map(n.pos),
          u = (0, o.zy)(h.doc, p, a.length, a);
        if (
          (u ||
            ((a[0] = l ? { type: l } : null),
            (u = (0, o.zy)(h.doc, p, a.length, a))),
          !u)
        )
          return !1;
        if ((h.split(p, a.length, a), !c && d && n.node(i).type != l)) {
          let t = h.mapping.map(n.before(i)),
            e = h.doc.resolve(t);
          l &&
            n.node(i - 1).canReplaceWith(e.index(), e.index() + 1, l) &&
            h.setNodeMarkup(h.mapping.map(n.before(i)), l);
        }
        return (e && e(h.scrollIntoView()), !0);
      };
      var M;
      function C(t, e, n, r) {
        let l,
          a,
          c = e.nodeBefore,
          d = e.nodeAfter,
          p = c.type.spec.isolating || d.type.spec.isolating;
        if (
          !p &&
          (function (t, e, n) {
            let r = e.nodeBefore,
              i = e.nodeAfter,
              s = e.index();
            return (
              !!(r && i && r.type.compatibleContent(i.type)) &&
              (!r.content.size && e.parent.canReplace(s - 1, s)
                ? (n &&
                    n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()),
                  !0)
                : !(
                    !e.parent.canReplace(s, s + 1) ||
                    (!i.isTextblock && !(0, o.n9)(t.doc, e.pos))
                  ) && (n && n(t.tr.join(e.pos).scrollIntoView()), !0))
            );
          })(t, e, n)
        )
          return !0;
        let u = !p && e.parent.canReplace(e.index(), e.index() + 1);
        if (
          u &&
          (l = (a = c.contentMatchAt(c.childCount)).findWrapping(d.type)) &&
          a.matchType(l[0] || d.type).validEnd
        ) {
          if (n) {
            let r = e.pos + d.nodeSize,
              s = i.FK.empty;
            for (let t = l.length - 1; t >= 0; t--)
              s = i.FK.from(l[t].create(null, s));
            s = i.FK.from(c.copy(s));
            let a = t.tr.step(
                new o.Wg(
                  e.pos - 1,
                  r,
                  e.pos,
                  r,
                  new i.Ji(s, 1, 0),
                  l.length,
                  !0,
                ),
              ),
              h = a.doc.resolve(r + 2 * l.length);
            (h.nodeAfter &&
              h.nodeAfter.type == c.type &&
              (0, o.n9)(a.doc, h.pos) &&
              a.join(h.pos),
              n(a.scrollIntoView()));
          }
          return !0;
        }
        let f =
            d.type.spec.isolating || (r > 0 && p) ? null : s.LN.findFrom(e, 1),
          m = f && f.$from.blockRange(f.$to),
          g = m && (0, o.jP)(m);
        if (null != g && g >= e.depth)
          return (n && n(t.tr.lift(m, g).scrollIntoView()), !0);
        if (u && h(d, "start", !0) && h(c, "end")) {
          let r = c,
            s = [];
          for (; s.push(r), !r.isTextblock; ) r = r.lastChild;
          let l = d,
            a = 1;
          for (; !l.isTextblock; l = l.firstChild) a++;
          if (r.canReplace(r.childCount, r.childCount, l.content)) {
            if (n) {
              let r = i.FK.empty;
              for (let t = s.length - 1; t >= 0; t--)
                r = i.FK.from(s[t].copy(r));
              n(
                t.tr
                  .step(
                    new o.Wg(
                      e.pos - s.length,
                      e.pos + d.nodeSize,
                      e.pos + a,
                      e.pos + d.nodeSize - a,
                      new i.Ji(r, s.length, 0),
                      0,
                      !0,
                    ),
                  )
                  .scrollIntoView(),
              );
            }
            return !0;
          }
        }
        return !1;
      }
      function O(t) {
        return function (e, n) {
          let r = e.selection,
            o = t < 0 ? r.$from : r.$to,
            i = o.depth;
          for (; o.node(i).isInline; ) {
            if (!i) return !1;
            i--;
          }
          return (
            !!o.node(i).isTextblock &&
            (n &&
              n(
                e.tr.setSelection(
                  s.U3.create(e.doc, t < 0 ? o.start(i) : o.end(i)),
                ),
              ),
            !0)
          );
        };
      }
      const N = O(-1),
        T = O(1);
      function A(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function (n, r) {
          let o = !1;
          for (let i = 0; i < n.selection.ranges.length && !o; i++) {
            let {
              $from: { pos: r },
              $to: { pos: s },
            } = n.selection.ranges[i];
            n.doc.nodesBetween(r, s, (r, i) => {
              if (o) return !1;
              if (r.isTextblock && !r.hasMarkup(t, e))
                if (r.type == t) o = !0;
                else {
                  let e = n.doc.resolve(i),
                    r = e.index();
                  o = e.parent.canReplaceWith(r, r + 1, t);
                }
            });
          }
          if (!o) return !1;
          if (r) {
            let o = n.tr;
            for (let r = 0; r < n.selection.ranges.length; r++) {
              let {
                $from: { pos: i },
                $to: { pos: s },
              } = n.selection.ranges[r];
              o.setBlockType(i, s, t, e);
            }
            r(o.scrollIntoView());
          }
          return !0;
        };
      }
      function E() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return function (t, n, r) {
          for (let o = 0; o < e.length; o++) if (e[o](t, n, r)) return !0;
          return !1;
        };
      }
      let D = E(l, c, p),
        R = E(l, m, g);
      const I = {
          Enter: E(v, k, x, S),
          "Mod-Enter": b,
          Backspace: D,
          "Mod-Backspace": D,
          "Shift-Backspace": D,
          Delete: R,
          "Mod-Delete": R,
          "Mod-a": (t, e) => (e && e(t.tr.setSelection(new s.i5(t.doc))), !0),
        },
        P = {
          "Ctrl-h": I.Backspace,
          "Alt-Backspace": I["Mod-Backspace"],
          "Ctrl-d": I.Delete,
          "Ctrl-Alt-Backspace": I["Mod-Delete"],
          "Alt-Delete": I["Mod-Delete"],
          "Alt-d": I["Mod-Delete"],
          "Ctrl-a": N,
          "Ctrl-e": T,
        };
      for (let os in I) P[os] = I[os];
      "undefined" != typeof navigator
        ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
        : !("undefined" == typeof os || !os.platform) && os.platform();
      function z(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function (n, r) {
          let { $from: s, $to: l } = n.selection,
            a = s.blockRange(l);
          if (!a) return !1;
          let c = r ? n.tr : null;
          return (
            !!(function (t, e, n) {
              let r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : null,
                s = !1,
                l = e,
                a = e.$from.doc;
              if (
                e.depth >= 2 &&
                e.$from.node(e.depth - 1).type.compatibleContent(n) &&
                0 == e.startIndex
              ) {
                if (0 == e.$from.index(e.depth - 1)) return !1;
                let t = a.resolve(e.start - 2);
                ((l = new i.u$(t, t, e.depth)),
                  e.endIndex < e.parent.childCount &&
                    (e = new i.u$(
                      e.$from,
                      a.resolve(e.$to.end(e.depth)),
                      e.depth,
                    )),
                  (s = !0));
              }
              let c = (0, o.oM)(l, n, r, e);
              if (!c) return !1;
              t &&
                (function (t, e, n, r, s) {
                  let l = i.FK.empty;
                  for (let o = n.length - 1; o >= 0; o--)
                    l = i.FK.from(n[o].type.create(n[o].attrs, l));
                  t.step(
                    new o.Wg(
                      e.start - (r ? 2 : 0),
                      e.end,
                      e.start,
                      e.end,
                      new i.Ji(l, 0, 0),
                      n.length,
                      !0,
                    ),
                  );
                  let a = 0;
                  for (let o = 0; o < n.length; o++)
                    n[o].type == s && (a = o + 1);
                  let c = n.length - a,
                    d = e.start + n.length - (r ? 2 : 0),
                    h = e.parent;
                  for (
                    let i = e.startIndex, p = e.endIndex, u = !0;
                    i < p;
                    i++, u = !1
                  )
                    (!u &&
                      (0, o.zy)(t.doc, d, c) &&
                      (t.split(d, c), (d += 2 * c)),
                      (d += h.child(i).nodeSize));
                })(t, e, c, s, n);
              return !0;
            })(c, a, t, e) && (r && r(c.scrollIntoView()), !0)
          );
        };
      }
      function F(t) {
        return function (e, n) {
          let { $from: r, $to: s } = e.selection,
            l = r.blockRange(
              s,
              (e) => e.childCount > 0 && e.firstChild.type == t,
            );
          return (
            !!l &&
            (!n ||
              (r.node(l.depth - 1).type == t
                ? (function (t, e, n, r) {
                    let s = t.tr,
                      l = r.end,
                      a = r.$to.end(r.depth);
                    l < a &&
                      (s.step(
                        new o.Wg(
                          l - 1,
                          a,
                          l,
                          a,
                          new i.Ji(
                            i.FK.from(n.create(null, r.parent.copy())),
                            1,
                            0,
                          ),
                          1,
                          !0,
                        ),
                      ),
                      (r = new i.u$(
                        s.doc.resolve(r.$from.pos),
                        s.doc.resolve(a),
                        r.depth,
                      )));
                    const c = (0, o.jP)(r);
                    if (null == c) return !1;
                    s.lift(r, c);
                    let d = s.doc.resolve(s.mapping.map(l, -1) - 1);
                    (0, o.n9)(s.doc, d.pos) &&
                      d.nodeBefore.type == d.nodeAfter.type &&
                      s.join(d.pos);
                    return (e(s.scrollIntoView()), !0);
                  })(e, n, t, l)
                : (function (t, e, n) {
                    let r = t.tr,
                      s = n.parent;
                    for (
                      let o = n.end, i = n.endIndex - 1, m = n.startIndex;
                      i > m;
                      i--
                    )
                      ((o -= s.child(i).nodeSize), r.delete(o - 1, o + 1));
                    let l = r.doc.resolve(n.start),
                      a = l.nodeAfter;
                    if (r.mapping.map(n.end) != n.start + l.nodeAfter.nodeSize)
                      return !1;
                    let c = 0 == n.startIndex,
                      d = n.endIndex == s.childCount,
                      h = l.node(-1),
                      p = l.index(-1);
                    if (
                      !h.canReplace(
                        p + (c ? 0 : 1),
                        p + 1,
                        a.content.append(d ? i.FK.empty : i.FK.from(s)),
                      )
                    )
                      return !1;
                    let u = l.pos,
                      f = u + a.nodeSize;
                    return (
                      r.step(
                        new o.Wg(
                          u - (c ? 1 : 0),
                          f + (d ? 1 : 0),
                          u + 1,
                          f - 1,
                          new i.Ji(
                            (c
                              ? i.FK.empty
                              : i.FK.from(s.copy(i.FK.empty))
                            ).append(
                              d ? i.FK.empty : i.FK.from(s.copy(i.FK.empty)),
                            ),
                            c ? 0 : 1,
                            d ? 0 : 1,
                          ),
                          c ? 0 : 1,
                        ),
                      ),
                      e(r.scrollIntoView()),
                      !0
                    );
                  })(e, n, l)))
          );
        };
      }
      const B = function (t) {
          for (var e = 0; ; e++) if (!(t = t.previousSibling)) return e;
        },
        $ = function (t) {
          let e = t.assignedSlot || t.parentNode;
          return e && 11 == e.nodeType ? e.host : e;
        };
      let V = null;
      const L = function (t, e, n) {
          let r = V || (V = document.createRange());
          return (
            r.setEnd(t, null == n ? t.nodeValue.length : n),
            r.setStart(t, e || 0),
            r
          );
        },
        J = function (t, e, n, r) {
          return n && (K(t, e, n, r, -1) || K(t, e, n, r, 1));
        },
        j = /^(img|br|input|textarea|hr)$/i;
      function K(t, e, n, r, o) {
        for (var i; ; ) {
          if (t == n && e == r) return !0;
          if (e == (o < 0 ? 0 : W(t))) {
            let n = t.parentNode;
            if (
              !n ||
              1 != n.nodeType ||
              q(t) ||
              j.test(t.nodeName) ||
              "false" == t.contentEditable
            )
              return !1;
            ((e = B(t) + (o < 0 ? 0 : 1)), (t = n));
          } else {
            if (1 != t.nodeType) return !1;
            {
              let n = t.childNodes[e + (o < 0 ? -1 : 0)];
              if (1 == n.nodeType && "false" == n.contentEditable) {
                if (
                  !(null === (i = n.pmViewDesc) || void 0 === i
                    ? void 0
                    : i.ignoreForSelection)
                )
                  return !1;
                e += o;
              } else ((t = n), (e = o < 0 ? W(t) : 0));
            }
          }
        }
      }
      function W(t) {
        return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length;
      }
      function q(t) {
        let e;
        for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode);
        return (
          e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t)
        );
      }
      const _ = function (t) {
        return (
          t.focusNode &&
          J(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset)
        );
      };
      function U(t, e) {
        let n = document.createEvent("Event");
        return (
          n.initEvent("keydown", !0, !0),
          (n.keyCode = t),
          (n.key = n.code = e),
          n
        );
      }
      const H = "undefined" != typeof navigator ? navigator : null,
        G = "undefined" != typeof document ? document : null,
        Z = (H && H.userAgent) || "",
        Y = /Edge\/(\d+)/.exec(Z),
        X = /MSIE \d/.exec(Z),
        Q = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Z),
        tt = !!(X || Q || Y),
        et = X ? document.documentMode : Q ? +Q[1] : Y ? +Y[1] : 0,
        nt = !tt && /gecko\/(\d+)/i.test(Z);
      nt && (/Firefox\/(\d+)/.exec(Z) || [0, 0])[1];
      const rt = !tt && /Chrome\/(\d+)/.exec(Z),
        ot = !!rt,
        it = rt ? +rt[1] : 0,
        st = !tt && !!H && /Apple Computer/.test(H.vendor),
        lt = st && (/Mobile\/\w+/.test(Z) || (!!H && H.maxTouchPoints > 2)),
        at = lt || (!!H && /Mac/.test(H.platform)),
        ct = !!H && /Win/.test(H.platform),
        dt = /Android \d/.test(Z),
        ht = !!G && "webkitFontSmoothing" in G.documentElement.style,
        pt = ht
          ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
          : 0;
      function ut(t) {
        let e = t.defaultView && t.defaultView.visualViewport;
        return e
          ? { left: 0, right: e.width, top: 0, bottom: e.height }
          : {
              left: 0,
              right: t.documentElement.clientWidth,
              top: 0,
              bottom: t.documentElement.clientHeight,
            };
      }
      function ft(t, e) {
        return "number" == typeof t ? t : t[e];
      }
      function mt(t) {
        let e = t.getBoundingClientRect(),
          n = e.width / t.offsetWidth || 1,
          r = e.height / t.offsetHeight || 1;
        return {
          left: e.left,
          right: e.left + t.clientWidth * n,
          top: e.top,
          bottom: e.top + t.clientHeight * r,
        };
      }
      function gt(t, e, n) {
        let r = t.someProp("scrollThreshold") || 0,
          o = t.someProp("scrollMargin") || 5,
          i = t.dom.ownerDocument;
        for (let s = n || t.dom; s; ) {
          if (1 != s.nodeType) {
            s = $(s);
            continue;
          }
          let t = s,
            n = t == i.body,
            l = n ? ut(i) : mt(t),
            a = 0,
            c = 0;
          if (
            (e.top < l.top + ft(r, "top")
              ? (c = -(l.top - e.top + ft(o, "top")))
              : e.bottom > l.bottom - ft(r, "bottom") &&
                (c =
                  e.bottom - e.top > l.bottom - l.top
                    ? e.top + ft(o, "top") - l.top
                    : e.bottom - l.bottom + ft(o, "bottom")),
            e.left < l.left + ft(r, "left")
              ? (a = -(l.left - e.left + ft(o, "left")))
              : e.right > l.right - ft(r, "right") &&
                (a = e.right - l.right + ft(o, "right")),
            a || c)
          )
            if (n) i.defaultView.scrollBy(a, c);
            else {
              let n = t.scrollLeft,
                r = t.scrollTop;
              (c && (t.scrollTop += c), a && (t.scrollLeft += a));
              let o = t.scrollLeft - n,
                i = t.scrollTop - r;
              e = {
                left: e.left - o,
                top: e.top - i,
                right: e.right - o,
                bottom: e.bottom - i,
              };
            }
          let d = n ? "fixed" : getComputedStyle(s).position;
          if (/^(fixed|sticky)$/.test(d)) break;
          s = "absolute" == d ? s.offsetParent : $(s);
        }
      }
      function yt(t) {
        let e = [],
          n = t.ownerDocument;
        for (
          let r = t;
          r &&
          (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), t != n);
          r = $(r)
        );
        return e;
      }
      function vt(t, e) {
        for (let n = 0; n < t.length; n++) {
          let { dom: r, top: o, left: i } = t[n];
          (r.scrollTop != o + e && (r.scrollTop = o + e),
            r.scrollLeft != i && (r.scrollLeft = i));
        }
      }
      let wt = null;
      function bt(t, e) {
        let n,
          r,
          o,
          i,
          s = 2e8,
          l = 0,
          a = e.top,
          c = e.top;
        for (let d = t.firstChild, h = 0; d; d = d.nextSibling, h++) {
          let t;
          if (1 == d.nodeType) t = d.getClientRects();
          else {
            if (3 != d.nodeType) continue;
            t = L(d).getClientRects();
          }
          for (let p = 0; p < t.length; p++) {
            let u = t[p];
            if (u.top <= a && u.bottom >= c) {
              ((a = Math.max(u.bottom, a)), (c = Math.min(u.top, c)));
              let t =
                u.left > e.left
                  ? u.left - e.left
                  : u.right < e.left
                    ? e.left - u.right
                    : 0;
              if (t < s) {
                ((n = d),
                  (s = t),
                  (r =
                    t && 3 == n.nodeType
                      ? {
                          left: u.right < e.left ? u.right : u.left,
                          top: e.top,
                        }
                      : e),
                  1 == d.nodeType &&
                    t &&
                    (l = h + (e.left >= (u.left + u.right) / 2 ? 1 : 0)));
                continue;
              }
            } else
              u.top > e.top &&
                !o &&
                u.left <= e.left &&
                u.right >= e.left &&
                ((o = d),
                (i = {
                  left: Math.max(u.left, Math.min(u.right, e.left)),
                  top: u.top,
                }));
            !n &&
              ((e.left >= u.right && e.top >= u.top) ||
                (e.left >= u.left && e.top >= u.bottom)) &&
              (l = h + 1);
          }
        }
        return (
          !n && o && ((n = o), (r = i), (s = 0)),
          n && 3 == n.nodeType
            ? (function (t, e) {
                let n,
                  r = t.nodeValue.length,
                  o = document.createRange();
                for (let i = 0; i < r; i++) {
                  (o.setEnd(t, i + 1), o.setStart(t, i));
                  let r = Ct(o, 1);
                  if (r.top != r.bottom && kt(e, r)) {
                    n = {
                      node: t,
                      offset: i + (e.left >= (r.left + r.right) / 2 ? 1 : 0),
                    };
                    break;
                  }
                }
                return (o.detach(), n || { node: t, offset: 0 });
              })(n, r)
            : !n || (s && 1 == n.nodeType)
              ? { node: t, offset: l }
              : bt(n, r)
        );
      }
      function kt(t, e) {
        return (
          t.left >= e.left - 1 &&
          t.left <= e.right + 1 &&
          t.top >= e.top - 1 &&
          t.top <= e.bottom + 1
        );
      }
      function xt(t, e, n) {
        let r = t.childNodes.length;
        if (r && n.top < n.bottom)
          for (
            let o = Math.max(
                0,
                Math.min(
                  r - 1,
                  Math.floor((r * (e.top - n.top)) / (n.bottom - n.top)) - 2,
                ),
              ),
              i = o;
            ;
          ) {
            let n = t.childNodes[i];
            if (1 == n.nodeType) {
              let t = n.getClientRects();
              for (let r = 0; r < t.length; r++) {
                let o = t[r];
                if (kt(e, o)) return xt(n, e, o);
              }
            }
            if ((i = (i + 1) % r) == o) break;
          }
        return t;
      }
      function St(t, e) {
        let n,
          r = t.dom.ownerDocument,
          o = 0,
          i = (function (t, e, n) {
            if (t.caretPositionFromPoint)
              try {
                let r = t.caretPositionFromPoint(e, n);
                if (r)
                  return {
                    node: r.offsetNode,
                    offset: Math.min(W(r.offsetNode), r.offset),
                  };
              } catch (r) {}
            if (t.caretRangeFromPoint) {
              let r = t.caretRangeFromPoint(e, n);
              if (r)
                return {
                  node: r.startContainer,
                  offset: Math.min(W(r.startContainer), r.startOffset),
                };
            }
          })(r, e.left, e.top);
        i && ({ node: n, offset: o } = i);
        let s,
          l = (t.root.elementFromPoint ? t.root : r).elementFromPoint(
            e.left,
            e.top,
          );
        if (!l || !t.dom.contains(1 != l.nodeType ? l.parentNode : l)) {
          let n = t.dom.getBoundingClientRect();
          if (!kt(e, n)) return null;
          if (((l = xt(t.dom, e, n)), !l)) return null;
        }
        if (st) for (let c = l; n && c; c = $(c)) c.draggable && (n = void 0);
        if (
          ((l = (function (t, e) {
            let n = t.parentNode;
            return n &&
              /^li$/i.test(n.nodeName) &&
              e.left < t.getBoundingClientRect().left
              ? n
              : t;
          })(l, e)),
          n)
        ) {
          if (
            nt &&
            1 == n.nodeType &&
            ((o = Math.min(o, n.childNodes.length)), o < n.childNodes.length)
          ) {
            let t,
              r = n.childNodes[o];
            "IMG" == r.nodeName &&
              (t = r.getBoundingClientRect()).right <= e.left &&
              t.bottom > e.top &&
              o++;
          }
          let r;
          (ht &&
            o &&
            1 == n.nodeType &&
            1 == (r = n.childNodes[o - 1]).nodeType &&
            "false" == r.contentEditable &&
            r.getBoundingClientRect().top >= e.top &&
            o--,
            n == t.dom &&
            o == n.childNodes.length - 1 &&
            1 == n.lastChild.nodeType &&
            e.top > n.lastChild.getBoundingClientRect().bottom
              ? (s = t.state.doc.content.size)
              : (0 != o &&
                  1 == n.nodeType &&
                  "BR" == n.childNodes[o - 1].nodeName) ||
                (s = (function (t, e, n, r) {
                  let o = -1;
                  for (let i = e, s = !1; i != t.dom; ) {
                    let e,
                      n = t.docView.nearestDesc(i, !0);
                    if (!n) return null;
                    if (
                      1 == n.dom.nodeType &&
                      ((n.node.isBlock && n.parent) || !n.contentDOM) &&
                      ((e = n.dom.getBoundingClientRect()).width || e.height) &&
                      (n.node.isBlock &&
                        n.parent &&
                        !/^T(R|BODY|HEAD|FOOT)$/.test(n.dom.nodeName) &&
                        ((!s && e.left > r.left) || e.top > r.top
                          ? (o = n.posBefore)
                          : ((!s && e.right < r.left) || e.bottom < r.top) &&
                            (o = n.posAfter),
                        (s = !0)),
                      !n.contentDOM && o < 0 && !n.node.isText)
                    )
                      return (
                        n.node.isBlock
                          ? r.top < (e.top + e.bottom) / 2
                          : r.left < (e.left + e.right) / 2
                      )
                        ? n.posBefore
                        : n.posAfter;
                    i = n.dom.parentNode;
                  }
                  return o > -1 ? o : t.docView.posFromDOM(e, n, -1);
                })(t, n, o, e)));
        }
        null == s &&
          (s = (function (t, e, n) {
            let { node: r, offset: o } = bt(e, n),
              i = -1;
            if (1 == r.nodeType && !r.firstChild) {
              let t = r.getBoundingClientRect();
              i = t.left != t.right && n.left > (t.left + t.right) / 2 ? 1 : -1;
            }
            return t.docView.posFromDOM(r, o, i);
          })(t, l, e));
        let a = t.docView.nearestDesc(l, !0);
        return { pos: s, inside: a ? a.posAtStart - a.border : -1 };
      }
      function Mt(t) {
        return t.top < t.bottom || t.left < t.right;
      }
      function Ct(t, e) {
        let n = t.getClientRects();
        if (n.length) {
          let t = n[e < 0 ? 0 : n.length - 1];
          if (Mt(t)) return t;
        }
        return Array.prototype.find.call(n, Mt) || t.getBoundingClientRect();
      }
      const Ot = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      function Nt(t, e, n) {
        let {
            node: r,
            offset: o,
            atom: i,
          } = t.docView.domFromPos(e, n < 0 ? -1 : 1),
          s = ht || nt;
        if (3 == r.nodeType) {
          if (
            !s ||
            (!Ot.test(r.nodeValue) && (n < 0 ? o : o != r.nodeValue.length))
          ) {
            let t = o,
              e = o,
              i = n < 0 ? 1 : -1;
            return (
              n < 0 && !o
                ? (e++, (i = -1))
                : n >= 0 && o == r.nodeValue.length
                  ? (t--, (i = 1))
                  : n < 0
                    ? t--
                    : e++,
              Tt(Ct(L(r, t, e), i), i < 0)
            );
          }
          {
            let t = Ct(L(r, o, o), n);
            if (
              nt &&
              o &&
              /\s/.test(r.nodeValue[o - 1]) &&
              o < r.nodeValue.length
            ) {
              let e = Ct(L(r, o - 1, o - 1), -1);
              if (e.top == t.top) {
                let n = Ct(L(r, o, o + 1), -1);
                if (n.top != t.top) return Tt(n, n.left < e.left);
              }
            }
            return t;
          }
        }
        if (!t.state.doc.resolve(e - (i || 0)).parent.inlineContent) {
          if (null == i && o && (n < 0 || o == W(r))) {
            let t = r.childNodes[o - 1];
            if (1 == t.nodeType) return At(t.getBoundingClientRect(), !1);
          }
          if (null == i && o < W(r)) {
            let t = r.childNodes[o];
            if (1 == t.nodeType) return At(t.getBoundingClientRect(), !0);
          }
          return At(r.getBoundingClientRect(), n >= 0);
        }
        if (null == i && o && (n < 0 || o == W(r))) {
          let t = r.childNodes[o - 1],
            e =
              3 == t.nodeType
                ? L(t, W(t) - (s ? 0 : 1))
                : 1 != t.nodeType || ("BR" == t.nodeName && t.nextSibling)
                  ? null
                  : t;
          if (e) return Tt(Ct(e, 1), !1);
        }
        if (null == i && o < W(r)) {
          let t = r.childNodes[o];
          for (; t.pmViewDesc && t.pmViewDesc.ignoreForCoords; )
            t = t.nextSibling;
          let e = t
            ? 3 == t.nodeType
              ? L(t, 0, s ? 0 : 1)
              : 1 == t.nodeType
                ? t
                : null
            : null;
          if (e) return Tt(Ct(e, -1), !0);
        }
        return Tt(Ct(3 == r.nodeType ? L(r) : r, -n), n >= 0);
      }
      function Tt(t, e) {
        if (0 == t.width) return t;
        let n = e ? t.left : t.right;
        return { top: t.top, bottom: t.bottom, left: n, right: n };
      }
      function At(t, e) {
        if (0 == t.height) return t;
        let n = e ? t.top : t.bottom;
        return { top: n, bottom: n, left: t.left, right: t.right };
      }
      function Et(t, e, n) {
        let r = t.state,
          o = t.root.activeElement;
        (r != e && t.updateState(e), o != t.dom && t.focus());
        try {
          return n();
        } finally {
          (r != e && t.updateState(r), o != t.dom && o && o.focus());
        }
      }
      const Dt = /[\u0590-\u08ac]/;
      let Rt = null,
        It = null,
        Pt = !1;
      function zt(t, e, n) {
        return Rt == e && It == n
          ? Pt
          : ((Rt = e),
            (It = n),
            (Pt =
              "up" == n || "down" == n
                ? (function (t, e, n) {
                    let r = e.selection,
                      o = "up" == n ? r.$from : r.$to;
                    return Et(t, e, () => {
                      let { node: e } = t.docView.domFromPos(
                        o.pos,
                        "up" == n ? -1 : 1,
                      );
                      for (;;) {
                        let n = t.docView.nearestDesc(e, !0);
                        if (!n) break;
                        if (n.node.isBlock) {
                          e = n.contentDOM || n.dom;
                          break;
                        }
                        e = n.dom.parentNode;
                      }
                      let r = Nt(t, o.pos, 1);
                      for (let t = e.firstChild; t; t = t.nextSibling) {
                        let e;
                        if (1 == t.nodeType) e = t.getClientRects();
                        else {
                          if (3 != t.nodeType) continue;
                          e = L(t, 0, t.nodeValue.length).getClientRects();
                        }
                        for (let t = 0; t < e.length; t++) {
                          let o = e[t];
                          if (
                            o.bottom > o.top + 1 &&
                            ("up" == n
                              ? r.top - o.top > 2 * (o.bottom - r.top)
                              : o.bottom - r.bottom > 2 * (r.bottom - o.top))
                          )
                            return !1;
                        }
                      }
                      return !0;
                    });
                  })(t, e, n)
                : (function (t, e, n) {
                    let { $head: r } = e.selection;
                    if (!r.parent.isTextblock) return !1;
                    let o = r.parentOffset,
                      i = !o,
                      s = o == r.parent.content.size,
                      l = t.domSelection();
                    return l
                      ? Dt.test(r.parent.textContent) && l.modify
                        ? Et(t, e, () => {
                            let {
                                focusNode: e,
                                focusOffset: o,
                                anchorNode: i,
                                anchorOffset: s,
                              } = t.domSelectionRange(),
                              a = l.caretBidiLevel;
                            l.modify("move", n, "character");
                            let c = r.depth
                                ? t.docView.domAfterPos(r.before())
                                : t.dom,
                              { focusNode: d, focusOffset: h } =
                                t.domSelectionRange(),
                              p =
                                (d &&
                                  !c.contains(
                                    1 == d.nodeType ? d : d.parentNode,
                                  )) ||
                                (e == d && o == h);
                            try {
                              (l.collapse(i, s),
                                e &&
                                  (e != i || o != s) &&
                                  l.extend &&
                                  l.extend(e, o));
                            } catch (u) {}
                            return (null != a && (l.caretBidiLevel = a), p);
                          })
                        : "left" == n || "backward" == n
                          ? i
                          : s
                      : r.pos == r.start() || r.pos == r.end();
                  })(t, e, n)));
      }
      class Ft {
        constructor(t, e, n, r) {
          ((this.parent = t),
            (this.children = e),
            (this.dom = n),
            (this.contentDOM = r),
            (this.dirty = 0),
            (n.pmViewDesc = this));
        }
        matchesWidget(t) {
          return !1;
        }
        matchesMark(t) {
          return !1;
        }
        matchesNode(t, e, n) {
          return !1;
        }
        matchesHack(t) {
          return !1;
        }
        parseRule() {
          return null;
        }
        stopEvent(t) {
          return !1;
        }
        get size() {
          let t = 0;
          for (let e = 0; e < this.children.length; e++)
            t += this.children[e].size;
          return t;
        }
        get border() {
          return 0;
        }
        destroy() {
          ((this.parent = void 0),
            this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0));
          for (let t = 0; t < this.children.length; t++)
            this.children[t].destroy();
        }
        posBeforeChild(t) {
          for (let e = 0, n = this.posAtStart; ; e++) {
            let r = this.children[e];
            if (r == t) return n;
            n += r.size;
          }
        }
        get posBefore() {
          return this.parent.posBeforeChild(this);
        }
        get posAtStart() {
          return this.parent
            ? this.parent.posBeforeChild(this) + this.border
            : 0;
        }
        get posAfter() {
          return this.posBefore + this.size;
        }
        get posAtEnd() {
          return this.posAtStart + this.size - 2 * this.border;
        }
        localPosFromDOM(t, e, n) {
          if (
            this.contentDOM &&
            this.contentDOM.contains(1 == t.nodeType ? t : t.parentNode)
          ) {
            if (n < 0) {
              let n, r;
              if (t == this.contentDOM) n = t.childNodes[e - 1];
              else {
                for (; t.parentNode != this.contentDOM; ) t = t.parentNode;
                n = t.previousSibling;
              }
              for (; n && (!(r = n.pmViewDesc) || r.parent != this); )
                n = n.previousSibling;
              return n ? this.posBeforeChild(r) + r.size : this.posAtStart;
            }
            {
              let n, r;
              if (t == this.contentDOM) n = t.childNodes[e];
              else {
                for (; t.parentNode != this.contentDOM; ) t = t.parentNode;
                n = t.nextSibling;
              }
              for (; n && (!(r = n.pmViewDesc) || r.parent != this); )
                n = n.nextSibling;
              return n ? this.posBeforeChild(r) : this.posAtEnd;
            }
          }
          let r;
          if (t == this.dom && this.contentDOM) r = e > B(this.contentDOM);
          else if (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            this.dom.contains(this.contentDOM)
          )
            r = 2 & t.compareDocumentPosition(this.contentDOM);
          else if (this.dom.firstChild) {
            if (0 == e)
              for (let e = t; ; e = e.parentNode) {
                if (e == this.dom) {
                  r = !1;
                  break;
                }
                if (e.previousSibling) break;
              }
            if (null == r && e == t.childNodes.length)
              for (let e = t; ; e = e.parentNode) {
                if (e == this.dom) {
                  r = !0;
                  break;
                }
                if (e.nextSibling) break;
              }
          }
          return (null == r ? n > 0 : r) ? this.posAtEnd : this.posAtStart;
        }
        nearestDesc(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (let n = !0, r = t; r; r = r.parentNode) {
            let o,
              i = this.getDesc(r);
            if (i && (!e || i.node)) {
              if (
                !n ||
                !(o = i.nodeDOM) ||
                (1 == o.nodeType
                  ? o.contains(1 == t.nodeType ? t : t.parentNode)
                  : o == t)
              )
                return i;
              n = !1;
            }
          }
        }
        getDesc(t) {
          let e = t.pmViewDesc;
          for (let n = e; n; n = n.parent) if (n == this) return e;
        }
        posFromDOM(t, e, n) {
          for (let r = t; r; r = r.parentNode) {
            let o = this.getDesc(r);
            if (o) return o.localPosFromDOM(t, e, n);
          }
          return -1;
        }
        descAt(t) {
          for (let e = 0, n = 0; e < this.children.length; e++) {
            let r = this.children[e],
              o = n + r.size;
            if (n == t && o != n) {
              for (; !r.border && r.children.length; )
                for (let t = 0; t < r.children.length; t++) {
                  let e = r.children[t];
                  if (e.size) {
                    r = e;
                    break;
                  }
                }
              return r;
            }
            if (t < o) return r.descAt(t - n - r.border);
            n = o;
          }
        }
        domFromPos(t, e) {
          if (!this.contentDOM)
            return { node: this.dom, offset: 0, atom: t + 1 };
          let n = 0,
            r = 0;
          for (let o = 0; n < this.children.length; n++) {
            let e = this.children[n],
              i = o + e.size;
            if (i > t || e instanceof Kt) {
              r = t - o;
              break;
            }
            o = i;
          }
          if (r)
            return this.children[n].domFromPos(r - this.children[n].border, e);
          for (
            let o;
            n &&
            !(o = this.children[n - 1]).size &&
            o instanceof Bt &&
            o.side >= 0;
            n--
          );
          if (e <= 0) {
            let t,
              r = !0;
            for (
              ;
              (t = n ? this.children[n - 1] : null),
                t && t.dom.parentNode != this.contentDOM;
              n--, r = !1
            );
            return t && e && r && !t.border && !t.domAtom
              ? t.domFromPos(t.size, e)
              : { node: this.contentDOM, offset: t ? B(t.dom) + 1 : 0 };
          }
          {
            let t,
              r = !0;
            for (
              ;
              (t = n < this.children.length ? this.children[n] : null),
                t && t.dom.parentNode != this.contentDOM;
              n++, r = !1
            );
            return t && r && !t.border && !t.domAtom
              ? t.domFromPos(0, e)
              : {
                  node: this.contentDOM,
                  offset: t ? B(t.dom) : this.contentDOM.childNodes.length,
                };
          }
        }
        parseRange(t, e) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          if (0 == this.children.length)
            return {
              node: this.contentDOM,
              from: t,
              to: e,
              fromOffset: 0,
              toOffset: this.contentDOM.childNodes.length,
            };
          let r = -1,
            o = -1;
          for (let i = n, s = 0; ; s++) {
            let n = this.children[s],
              l = i + n.size;
            if (-1 == r && t <= l) {
              let o = i + n.border;
              if (
                t >= o &&
                e <= l - n.border &&
                n.node &&
                n.contentDOM &&
                this.contentDOM.contains(n.contentDOM)
              )
                return n.parseRange(t, e, o);
              t = i;
              for (let e = s; e > 0; e--) {
                let n = this.children[e - 1];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(1)
                ) {
                  r = B(n.dom) + 1;
                  break;
                }
                t -= n.size;
              }
              -1 == r && (r = 0);
            }
            if (r > -1 && (l > e || s == this.children.length - 1)) {
              e = l;
              for (let t = s + 1; t < this.children.length; t++) {
                let n = this.children[t];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(-1)
                ) {
                  o = B(n.dom);
                  break;
                }
                e += n.size;
              }
              -1 == o && (o = this.contentDOM.childNodes.length);
              break;
            }
            i = l;
          }
          return {
            node: this.contentDOM,
            from: t,
            to: e,
            fromOffset: r,
            toOffset: o,
          };
        }
        emptyChildAt(t) {
          if (this.border || !this.contentDOM || !this.children.length)
            return !1;
          let e = this.children[t < 0 ? 0 : this.children.length - 1];
          return 0 == e.size || e.emptyChildAt(t);
        }
        domAfterPos(t) {
          let { node: e, offset: n } = this.domFromPos(t, 0);
          if (1 != e.nodeType || n == e.childNodes.length)
            throw new RangeError("No node after pos " + t);
          return e.childNodes[n];
        }
        setSelection(t, e, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = Math.min(t, e),
            i = Math.max(t, e);
          for (let u = 0, f = 0; u < this.children.length; u++) {
            let s = this.children[u],
              l = f + s.size;
            if (o > f && i < l)
              return s.setSelection(t - f - s.border, e - f - s.border, n, r);
            f = l;
          }
          let s = this.domFromPos(t, t ? -1 : 1),
            l = e == t ? s : this.domFromPos(e, e ? -1 : 1),
            a = n.root.getSelection(),
            c = n.domSelectionRange(),
            d = !1;
          if ((nt || st) && t == e) {
            let { node: t, offset: e } = s;
            if (3 == t.nodeType) {
              if (
                ((d = !(!e || "\n" != t.nodeValue[e - 1])),
                d && e == t.nodeValue.length)
              )
                for (let n, r = t; r; r = r.parentNode) {
                  if ((n = r.nextSibling)) {
                    "BR" == n.nodeName &&
                      (s = l = { node: n.parentNode, offset: B(n) + 1 });
                    break;
                  }
                  let t = r.pmViewDesc;
                  if (t && t.node && t.node.isBlock) break;
                }
            } else {
              let n = t.childNodes[e - 1];
              d = n && ("BR" == n.nodeName || "false" == n.contentEditable);
            }
          }
          if (
            nt &&
            c.focusNode &&
            c.focusNode != l.node &&
            1 == c.focusNode.nodeType
          ) {
            let t = c.focusNode.childNodes[c.focusOffset];
            t && "false" == t.contentEditable && (r = !0);
          }
          if (
            !(r || (d && st)) &&
            J(s.node, s.offset, c.anchorNode, c.anchorOffset) &&
            J(l.node, l.offset, c.focusNode, c.focusOffset)
          )
            return;
          let h = !1;
          if ((a.extend || t == e) && (!d || !nt)) {
            a.collapse(s.node, s.offset);
            try {
              (t != e && a.extend(l.node, l.offset), (h = !0));
            } catch (p) {}
          }
          if (!h) {
            if (t > e) {
              let t = s;
              ((s = l), (l = t));
            }
            let n = document.createRange();
            (n.setEnd(l.node, l.offset),
              n.setStart(s.node, s.offset),
              a.removeAllRanges(),
              a.addRange(n));
          }
        }
        ignoreMutation(t) {
          return !this.contentDOM && "selection" != t.type;
        }
        get contentLost() {
          return (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            !this.dom.contains(this.contentDOM)
          );
        }
        markDirty(t, e) {
          for (let n = 0, r = 0; r < this.children.length; r++) {
            let o = this.children[r],
              i = n + o.size;
            if (n == i ? t <= i && e >= n : t < i && e > n) {
              let r = n + o.border,
                s = i - o.border;
              if (t >= r && e <= s)
                return (
                  (this.dirty = t == n || e == i ? 2 : 1),
                  void (t != r ||
                  e != s ||
                  (!o.contentLost && o.dom.parentNode == this.contentDOM)
                    ? o.markDirty(t - r, e - r)
                    : (o.dirty = 3))
                );
              o.dirty =
                o.dom != o.contentDOM ||
                o.dom.parentNode != this.contentDOM ||
                o.children.length
                  ? 3
                  : 2;
            }
            n = i;
          }
          this.dirty = 2;
        }
        markParentsDirty() {
          let t = 1;
          for (let e = this.parent; e; e = e.parent, t++) {
            let n = 1 == t ? 2 : 1;
            e.dirty < n && (e.dirty = n);
          }
        }
        get domAtom() {
          return !1;
        }
        get ignoreForCoords() {
          return !1;
        }
        get ignoreForSelection() {
          return !1;
        }
        isText(t) {
          return !1;
        }
      }
      class Bt extends Ft {
        constructor(t, e, n, r) {
          let o,
            i = e.type.toDOM;
          if (
            ("function" == typeof i &&
              (i = i(n, () =>
                o ? (o.parent ? o.parent.posBeforeChild(o) : void 0) : r,
              )),
            !e.type.spec.raw)
          ) {
            if (1 != i.nodeType) {
              let t = document.createElement("span");
              (t.appendChild(i), (i = t));
            }
            ((i.contentEditable = "false"),
              i.classList.add("ProseMirror-widget"));
          }
          (super(t, [], i, null),
            (this.widget = e),
            (this.widget = e),
            (o = this));
        }
        matchesWidget(t) {
          return 0 == this.dirty && t.type.eq(this.widget.type);
        }
        parseRule() {
          return { ignore: !0 };
        }
        stopEvent(t) {
          let e = this.widget.spec.stopEvent;
          return !!e && e(t);
        }
        ignoreMutation(t) {
          return "selection" != t.type || this.widget.spec.ignoreSelection;
        }
        destroy() {
          (this.widget.type.destroy(this.dom), super.destroy());
        }
        get domAtom() {
          return !0;
        }
        get ignoreForSelection() {
          return !!this.widget.type.spec.relaxedSide;
        }
        get side() {
          return this.widget.type.side;
        }
      }
      class $t extends Ft {
        constructor(t, e, n, r) {
          (super(t, [], e, null), (this.textDOM = n), (this.text = r));
        }
        get size() {
          return this.text.length;
        }
        localPosFromDOM(t, e) {
          return t != this.textDOM
            ? this.posAtStart + (e ? this.size : 0)
            : this.posAtStart + e;
        }
        domFromPos(t) {
          return { node: this.textDOM, offset: t };
        }
        ignoreMutation(t) {
          return "characterData" === t.type && t.target.nodeValue == t.oldValue;
        }
      }
      class Vt extends Ft {
        constructor(t, e, n, r, o) {
          (super(t, [], n, r), (this.mark = e), (this.spec = o));
        }
        static create(t, e, n, r) {
          let o = r.nodeViews[e.type.name],
            s = o && o(e, r, n);
          return (
            (s && s.dom) ||
              (s = i.ZF.renderSpec(
                document,
                e.type.spec.toDOM(e, n),
                null,
                e.attrs,
              )),
            new Vt(t, e, s.dom, s.contentDOM || s.dom, s)
          );
        }
        parseRule() {
          return 3 & this.dirty || this.mark.type.spec.reparseInView
            ? null
            : {
                mark: this.mark.type.name,
                attrs: this.mark.attrs,
                contentElement: this.contentDOM,
              };
        }
        matchesMark(t) {
          return 3 != this.dirty && this.mark.eq(t);
        }
        markDirty(t, e) {
          if ((super.markDirty(t, e), 0 != this.dirty)) {
            let t = this.parent;
            for (; !t.node; ) t = t.parent;
            (t.dirty < this.dirty && (t.dirty = this.dirty), (this.dirty = 0));
          }
        }
        slice(t, e, n) {
          let r = Vt.create(this.parent, this.mark, !0, n),
            o = this.children,
            i = this.size;
          (e < i && (o = ne(o, e, i, n)), t > 0 && (o = ne(o, 0, t, n)));
          for (let s = 0; s < o.length; s++) o[s].parent = r;
          return ((r.children = o), r);
        }
        ignoreMutation(t) {
          return this.spec.ignoreMutation
            ? this.spec.ignoreMutation(t)
            : super.ignoreMutation(t);
        }
        destroy() {
          (this.spec.destroy && this.spec.destroy(), super.destroy());
        }
      }
      class Lt extends Ft {
        constructor(t, e, n, r, o, i, s, l, a) {
          (super(t, [], o, i),
            (this.node = e),
            (this.outerDeco = n),
            (this.innerDeco = r),
            (this.nodeDOM = s));
        }
        static create(t, e, n, r, o, s) {
          let l,
            a = o.nodeViews[e.type.name],
            c =
              a &&
              a(
                e,
                o,
                () =>
                  l ? (l.parent ? l.parent.posBeforeChild(l) : void 0) : s,
                n,
                r,
              ),
            d = c && c.dom,
            h = c && c.contentDOM;
          if (e.isText)
            if (d) {
              if (3 != d.nodeType)
                throw new RangeError(
                  "Text must be rendered as a DOM text node",
                );
            } else d = document.createTextNode(e.text);
          else if (!d) {
            let t = i.ZF.renderSpec(
              document,
              e.type.spec.toDOM(e),
              null,
              e.attrs,
            );
            ({ dom: d, contentDOM: h } = t);
          }
          h ||
            e.isText ||
            "BR" == d.nodeName ||
            (d.hasAttribute("contenteditable") || (d.contentEditable = "false"),
            e.type.spec.draggable && (d.draggable = !0));
          let p = d;
          return (
            (d = Yt(d, n, e)),
            c
              ? (l = new Wt(t, e, n, r, d, h || null, p, c, o, s + 1))
              : e.isText
                ? new jt(t, e, n, r, d, p, o)
                : new Lt(t, e, n, r, d, h || null, p, o, s + 1)
          );
        }
        parseRule() {
          if (this.node.type.spec.reparseInView) return null;
          let t = { node: this.node.type.name, attrs: this.node.attrs };
          if (
            ("pre" == this.node.type.whitespace &&
              (t.preserveWhitespace = "full"),
            this.contentDOM)
          )
            if (this.contentLost) {
              for (let e = this.children.length - 1; e >= 0; e--) {
                let n = this.children[e];
                if (this.dom.contains(n.dom.parentNode)) {
                  t.contentElement = n.dom.parentNode;
                  break;
                }
              }
              t.contentElement || (t.getContent = () => i.FK.empty);
            } else t.contentElement = this.contentDOM;
          else t.getContent = () => this.node.content;
          return t;
        }
        matchesNode(t, e, n) {
          return (
            0 == this.dirty &&
            t.eq(this.node) &&
            Xt(e, this.outerDeco) &&
            n.eq(this.innerDeco)
          );
        }
        get size() {
          return this.node.nodeSize;
        }
        get border() {
          return this.node.isLeaf ? 0 : 1;
        }
        updateChildren(t, e) {
          let n = this.node.inlineContent,
            r = e,
            o = t.composing ? this.localCompositionInfo(t, e) : null,
            s = o && o.pos > -1 ? o : null,
            l = o && o.pos < 0,
            a = new te(this, s && s.node, t);
          (!(function (t, e, n, r) {
            let o = e.locals(t),
              i = 0;
            if (0 == o.length) {
              for (let n = 0; n < t.childCount; n++) {
                let s = t.child(n);
                (r(s, o, e.forChild(i, s), n), (i += s.nodeSize));
              }
              return;
            }
            let s = 0,
              l = [],
              a = null;
            for (let c = 0; ; ) {
              let d, h, p, u;
              for (; s < o.length && o[s].to == i; ) {
                let t = o[s++];
                t.widget && (d ? (h || (h = [d])).push(t) : (d = t));
              }
              if (d)
                if (h) {
                  h.sort(ee);
                  for (let t = 0; t < h.length; t++) n(h[t], c, !!a);
                } else n(d, c, !!a);
              if (a) ((u = -1), (p = a), (a = null));
              else {
                if (!(c < t.childCount)) break;
                ((u = c), (p = t.child(c++)));
              }
              for (let t = 0; t < l.length; t++)
                l[t].to <= i && l.splice(t--, 1);
              for (; s < o.length && o[s].from <= i && o[s].to > i; )
                l.push(o[s++]);
              let f = i + p.nodeSize;
              if (p.isText) {
                let t = f;
                s < o.length && o[s].from < t && (t = o[s].from);
                for (let e = 0; e < l.length; e++) l[e].to < t && (t = l[e].to);
                t < f &&
                  ((a = p.cut(t - i)),
                  (p = p.cut(0, t - i)),
                  (f = t),
                  (u = -1));
              } else for (; s < o.length && o[s].to < f; ) s++;
              (r(
                p,
                p.isInline && !p.isLeaf
                  ? l.filter((t) => !t.inline)
                  : l.slice(),
                e.forChild(i, p),
                u,
              ),
                (i = f));
            }
          })(
            this.node,
            this.innerDeco,
            (e, o, s) => {
              (e.spec.marks
                ? a.syncToMarks(e.spec.marks, n, t, o)
                : e.type.side >= 0 &&
                  !s &&
                  a.syncToMarks(
                    o == this.node.childCount
                      ? i.CU.none
                      : this.node.child(o).marks,
                    n,
                    t,
                    o,
                  ),
                a.placeWidget(e, t, r));
            },
            (e, i, s, c) => {
              let d;
              (a.syncToMarks(e.marks, n, t, c),
                a.findNodeMatch(e, i, s, c) ||
                  (l &&
                    t.state.selection.from > r &&
                    t.state.selection.to < r + e.nodeSize &&
                    (d = a.findIndexWithChild(o.node)) > -1 &&
                    a.updateNodeAt(e, i, s, d, t)) ||
                  a.updateNextNode(e, i, s, t, c, r) ||
                  a.addNode(e, i, s, t, r),
                (r += e.nodeSize));
            },
          ),
            a.syncToMarks([], n, t, 0),
            this.node.isTextblock && a.addTextblockHacks(),
            a.destroyRest(),
            (a.changed || 2 == this.dirty) &&
              (s && this.protectLocalComposition(t, s),
              qt(this.contentDOM, this.children, t),
              lt &&
                (function (t) {
                  if ("UL" == t.nodeName || "OL" == t.nodeName) {
                    let e = t.style.cssText;
                    ((t.style.cssText = e + "; list-style: square !important"),
                      window.getComputedStyle(t).listStyle,
                      (t.style.cssText = e));
                  }
                })(this.dom)));
        }
        localCompositionInfo(t, e) {
          let { from: n, to: r } = t.state.selection;
          if (
            !(t.state.selection instanceof s.U3) ||
            n < e ||
            r > e + this.node.content.size
          )
            return null;
          let o = t.input.compositionNode;
          if (!o || !this.dom.contains(o.parentNode)) return null;
          if (this.node.inlineContent) {
            let t = o.nodeValue,
              i = (function (t, e, n, r) {
                for (let o = 0, i = 0; o < t.childCount && i <= r; ) {
                  let s = t.child(o++),
                    l = i;
                  if (((i += s.nodeSize), !s.isText)) continue;
                  let a = s.text;
                  for (; o < t.childCount; ) {
                    let e = t.child(o++);
                    if (((i += e.nodeSize), !e.isText)) break;
                    a += e.text;
                  }
                  if (i >= n) {
                    if (i >= r && a.slice(r - e.length - l, r - l) == e)
                      return r - e.length;
                    let t = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
                    if (t >= 0 && t + e.length + l >= n) return l + t;
                    if (
                      n == r &&
                      a.length >= r + e.length - l &&
                      a.slice(r - l, r - l + e.length) == e
                    )
                      return r;
                  }
                }
                return -1;
              })(this.node.content, t, n - e, r - e);
            return i < 0 ? null : { node: o, pos: i, text: t };
          }
          return { node: o, pos: -1, text: "" };
        }
        protectLocalComposition(t, e) {
          let { node: n, pos: r, text: o } = e;
          if (this.getDesc(n)) return;
          let i = n;
          for (; i.parentNode != this.contentDOM; i = i.parentNode) {
            for (; i.previousSibling; )
              i.parentNode.removeChild(i.previousSibling);
            for (; i.nextSibling; ) i.parentNode.removeChild(i.nextSibling);
            i.pmViewDesc && (i.pmViewDesc = void 0);
          }
          let s = new $t(this, i, n, o);
          (t.input.compositionNodes.push(s),
            (this.children = ne(this.children, r, r + o.length, t, s)));
        }
        update(t, e, n, r) {
          return (
            !(3 == this.dirty || !t.sameMarkup(this.node)) &&
            (this.updateInner(t, e, n, r), !0)
          );
        }
        updateInner(t, e, n, r) {
          (this.updateOuterDeco(e),
            (this.node = t),
            (this.innerDeco = n),
            this.contentDOM && this.updateChildren(r, this.posAtStart),
            (this.dirty = 0));
        }
        updateOuterDeco(t) {
          if (Xt(t, this.outerDeco)) return;
          let e = 1 != this.nodeDOM.nodeType,
            n = this.dom;
          ((this.dom = Gt(
            this.dom,
            this.nodeDOM,
            Ht(this.outerDeco, this.node, e),
            Ht(t, this.node, e),
          )),
            this.dom != n &&
              ((n.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
            (this.outerDeco = t));
        }
        selectNode() {
          1 == this.nodeDOM.nodeType &&
            (this.nodeDOM.classList.add("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              (this.nodeDOM.draggable = !0));
        }
        deselectNode() {
          1 == this.nodeDOM.nodeType &&
            (this.nodeDOM.classList.remove("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              this.nodeDOM.removeAttribute("draggable"));
        }
        get domAtom() {
          return this.node.isAtom;
        }
      }
      function Jt(t, e, n, r, o) {
        Yt(r, e, t);
        let i = new Lt(void 0, t, e, n, r, r, r, o, 0);
        return (i.contentDOM && i.updateChildren(o, 0), i);
      }
      class jt extends Lt {
        constructor(t, e, n, r, o, i, s) {
          super(t, e, n, r, o, null, i, s, 0);
        }
        parseRule() {
          let t = this.nodeDOM.parentNode;
          for (; t && t != this.dom && !t.pmIsDeco; ) t = t.parentNode;
          return { skip: t || !0 };
        }
        update(t, e, n, r) {
          return (
            !(
              3 == this.dirty ||
              (0 != this.dirty && !this.inParent()) ||
              !t.sameMarkup(this.node)
            ) &&
            (this.updateOuterDeco(e),
            (0 == this.dirty && t.text == this.node.text) ||
              t.text == this.nodeDOM.nodeValue ||
              ((this.nodeDOM.nodeValue = t.text),
              r.trackWrites == this.nodeDOM && (r.trackWrites = null)),
            (this.node = t),
            (this.dirty = 0),
            !0)
          );
        }
        inParent() {
          let t = this.parent.contentDOM;
          for (let e = this.nodeDOM; e; e = e.parentNode) if (e == t) return !0;
          return !1;
        }
        domFromPos(t) {
          return { node: this.nodeDOM, offset: t };
        }
        localPosFromDOM(t, e, n) {
          return t == this.nodeDOM
            ? this.posAtStart + Math.min(e, this.node.text.length)
            : super.localPosFromDOM(t, e, n);
        }
        ignoreMutation(t) {
          return "characterData" != t.type && "selection" != t.type;
        }
        slice(t, e, n) {
          let r = this.node.cut(t, e),
            o = document.createTextNode(r.text);
          return new jt(
            this.parent,
            r,
            this.outerDeco,
            this.innerDeco,
            o,
            o,
            n,
          );
        }
        markDirty(t, e) {
          (super.markDirty(t, e),
            this.dom == this.nodeDOM ||
              (0 != t && e != this.nodeDOM.nodeValue.length) ||
              (this.dirty = 3));
        }
        get domAtom() {
          return !1;
        }
        isText(t) {
          return this.node.text == t;
        }
      }
      class Kt extends Ft {
        parseRule() {
          return { ignore: !0 };
        }
        matchesHack(t) {
          return 0 == this.dirty && this.dom.nodeName == t;
        }
        get domAtom() {
          return !0;
        }
        get ignoreForCoords() {
          return "IMG" == this.dom.nodeName;
        }
      }
      class Wt extends Lt {
        constructor(t, e, n, r, o, i, s, l, a, c) {
          (super(t, e, n, r, o, i, s, a, c), (this.spec = l));
        }
        update(t, e, n, r) {
          if (3 == this.dirty) return !1;
          if (
            this.spec.update &&
            (this.node.type == t.type || this.spec.multiType)
          ) {
            let o = this.spec.update(t, e, n);
            return (o && this.updateInner(t, e, n, r), o);
          }
          return !(!this.contentDOM && !t.isLeaf) && super.update(t, e, n, r);
        }
        selectNode() {
          this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
        }
        deselectNode() {
          this.spec.deselectNode
            ? this.spec.deselectNode()
            : super.deselectNode();
        }
        setSelection(t, e, n, r) {
          this.spec.setSelection
            ? this.spec.setSelection(t, e, n.root)
            : super.setSelection(t, e, n, r);
        }
        destroy() {
          (this.spec.destroy && this.spec.destroy(), super.destroy());
        }
        stopEvent(t) {
          return !!this.spec.stopEvent && this.spec.stopEvent(t);
        }
        ignoreMutation(t) {
          return this.spec.ignoreMutation
            ? this.spec.ignoreMutation(t)
            : super.ignoreMutation(t);
        }
      }
      function qt(t, e, n) {
        let r = t.firstChild,
          o = !1;
        for (let i = 0; i < e.length; i++) {
          let s = e[i],
            l = s.dom;
          if (l.parentNode == t) {
            for (; l != r; ) ((r = Qt(r)), (o = !0));
            r = r.nextSibling;
          } else ((o = !0), t.insertBefore(l, r));
          if (s instanceof Vt) {
            let e = r ? r.previousSibling : t.lastChild;
            (qt(s.contentDOM, s.children, n),
              (r = e ? e.nextSibling : t.firstChild));
          }
        }
        for (; r; ) ((r = Qt(r)), (o = !0));
        o && n.trackWrites == t && (n.trackWrites = null);
      }
      const _t = function (t) {
        t && (this.nodeName = t);
      };
      _t.prototype = Object.create(null);
      const Ut = [new _t()];
      function Ht(t, e, n) {
        if (0 == t.length) return Ut;
        let r = n ? Ut[0] : new _t(),
          o = [r];
        for (let i = 0; i < t.length; i++) {
          let s = t[i].type.attrs;
          if (s) {
            s.nodeName && o.push((r = new _t(s.nodeName)));
            for (let t in s) {
              let i = s[t];
              null != i &&
                (n &&
                  1 == o.length &&
                  o.push((r = new _t(e.isInline ? "span" : "div"))),
                "class" == t
                  ? (r.class = (r.class ? r.class + " " : "") + i)
                  : "style" == t
                    ? (r.style = (r.style ? r.style + ";" : "") + i)
                    : "nodeName" != t && (r[t] = i));
            }
          }
        }
        return o;
      }
      function Gt(t, e, n, r) {
        if (n == Ut && r == Ut) return e;
        let o = e;
        for (let i = 0; i < r.length; i++) {
          let e = r[i],
            s = n[i];
          if (i) {
            let n;
            ((s &&
              s.nodeName == e.nodeName &&
              o != t &&
              (n = o.parentNode) &&
              n.nodeName.toLowerCase() == e.nodeName) ||
              ((n = document.createElement(e.nodeName)),
              (n.pmIsDeco = !0),
              n.appendChild(o),
              (s = Ut[0])),
              (o = n));
          }
          Zt(o, s || Ut[0], e);
        }
        return o;
      }
      function Zt(t, e, n) {
        for (let r in e)
          "class" == r ||
            "style" == r ||
            "nodeName" == r ||
            r in n ||
            t.removeAttribute(r);
        for (let r in n)
          "class" != r &&
            "style" != r &&
            "nodeName" != r &&
            n[r] != e[r] &&
            t.setAttribute(r, n[r]);
        if (e.class != n.class) {
          let r = e.class ? e.class.split(" ").filter(Boolean) : [],
            o = n.class ? n.class.split(" ").filter(Boolean) : [];
          for (let e = 0; e < r.length; e++)
            -1 == o.indexOf(r[e]) && t.classList.remove(r[e]);
          for (let e = 0; e < o.length; e++)
            -1 == r.indexOf(o[e]) && t.classList.add(o[e]);
          0 == t.classList.length && t.removeAttribute("class");
        }
        if (e.style != n.style) {
          if (e.style) {
            let n,
              r =
                /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
            for (; (n = r.exec(e.style)); ) t.style.removeProperty(n[1]);
          }
          n.style && (t.style.cssText += n.style);
        }
      }
      function Yt(t, e, n) {
        return Gt(t, t, Ut, Ht(e, n, 1 != t.nodeType));
      }
      function Xt(t, e) {
        if (t.length != e.length) return !1;
        for (let n = 0; n < t.length; n++)
          if (!t[n].type.eq(e[n].type)) return !1;
        return !0;
      }
      function Qt(t) {
        let e = t.nextSibling;
        return (t.parentNode.removeChild(t), e);
      }
      class te {
        constructor(t, e, n) {
          ((this.lock = e),
            (this.view = n),
            (this.index = 0),
            (this.stack = []),
            (this.changed = !1),
            (this.top = t),
            (this.preMatch = (function (t, e) {
              let n = e,
                r = n.children.length,
                o = t.childCount,
                i = new Map(),
                s = [];
              t: for (; o > 0; ) {
                let l;
                for (;;)
                  if (r) {
                    let t = n.children[r - 1];
                    if (!(t instanceof Vt)) {
                      ((l = t), r--);
                      break;
                    }
                    ((n = t), (r = t.children.length));
                  } else {
                    if (n == e) break t;
                    ((r = n.parent.children.indexOf(n)), (n = n.parent));
                  }
                let a = l.node;
                if (a) {
                  if (a != t.child(o - 1)) break;
                  (--o, i.set(l, o), s.push(l));
                }
              }
              return { index: o, matched: i, matches: s.reverse() };
            })(t.node.content, t)));
        }
        destroyBetween(t, e) {
          if (t != e) {
            for (let n = t; n < e; n++) this.top.children[n].destroy();
            (this.top.children.splice(t, e - t), (this.changed = !0));
          }
        }
        destroyRest() {
          this.destroyBetween(this.index, this.top.children.length);
        }
        syncToMarks(t, e, n, r) {
          let o = 0,
            i = this.stack.length >> 1,
            s = Math.min(i, t.length);
          for (
            ;
            o < s &&
            (o == i - 1 ? this.top : this.stack[(o + 1) << 1]).matchesMark(
              t[o],
            ) &&
            !1 !== t[o].type.spec.spanning;
          )
            o++;
          for (; o < i; )
            (this.destroyRest(),
              (this.top.dirty = 0),
              (this.index = this.stack.pop()),
              (this.top = this.stack.pop()),
              i--);
          for (; i < t.length; ) {
            this.stack.push(this.top, this.index + 1);
            let o = -1,
              s = this.top.children.length;
            r < this.preMatch.index && (s = Math.min(this.index + 3, s));
            for (let e = this.index; e < s; e++) {
              let n = this.top.children[e];
              if (n.matchesMark(t[i]) && !this.isLocked(n.dom)) {
                o = e;
                break;
              }
            }
            if (o > -1)
              (o > this.index &&
                ((this.changed = !0), this.destroyBetween(this.index, o)),
                (this.top = this.top.children[this.index]));
            else {
              let r = Vt.create(this.top, t[i], e, n);
              (this.top.children.splice(this.index, 0, r),
                (this.top = r),
                (this.changed = !0));
            }
            ((this.index = 0), i++);
          }
        }
        findNodeMatch(t, e, n, r) {
          let o,
            i = -1;
          if (
            r >= this.preMatch.index &&
            (o = this.preMatch.matches[r - this.preMatch.index]).parent ==
              this.top &&
            o.matchesNode(t, e, n)
          )
            i = this.top.children.indexOf(o, this.index);
          else
            for (
              let s = this.index, l = Math.min(this.top.children.length, s + 5);
              s < l;
              s++
            ) {
              let r = this.top.children[s];
              if (r.matchesNode(t, e, n) && !this.preMatch.matched.has(r)) {
                i = s;
                break;
              }
            }
          return (
            !(i < 0) && (this.destroyBetween(this.index, i), this.index++, !0)
          );
        }
        updateNodeAt(t, e, n, r, o) {
          let i = this.top.children[r];
          return (
            3 == i.dirty && i.dom == i.contentDOM && (i.dirty = 2),
            !!i.update(t, e, n, o) &&
              (this.destroyBetween(this.index, r), this.index++, !0)
          );
        }
        findIndexWithChild(t) {
          for (;;) {
            let e = t.parentNode;
            if (!e) return -1;
            if (e == this.top.contentDOM) {
              let e = t.pmViewDesc;
              if (e)
                for (let t = this.index; t < this.top.children.length; t++)
                  if (this.top.children[t] == e) return t;
              return -1;
            }
            t = e;
          }
        }
        updateNextNode(t, e, n, r, o, i) {
          for (let s = this.index; s < this.top.children.length; s++) {
            let l = this.top.children[s];
            if (l instanceof Lt) {
              let a = this.preMatch.matched.get(l);
              if (null != a && a != o) return !1;
              let c,
                d = l.dom,
                h =
                  this.isLocked(d) &&
                  !(
                    t.isText &&
                    l.node &&
                    l.node.isText &&
                    l.nodeDOM.nodeValue == t.text &&
                    3 != l.dirty &&
                    Xt(e, l.outerDeco)
                  );
              if (!h && l.update(t, e, n, r))
                return (
                  this.destroyBetween(this.index, s),
                  l.dom != d && (this.changed = !0),
                  this.index++,
                  !0
                );
              if (!h && (c = this.recreateWrapper(l, t, e, n, r, i)))
                return (
                  this.destroyBetween(this.index, s),
                  (this.top.children[this.index] = c),
                  c.contentDOM &&
                    ((c.dirty = 2), c.updateChildren(r, i + 1), (c.dirty = 0)),
                  (this.changed = !0),
                  this.index++,
                  !0
                );
              break;
            }
          }
          return !1;
        }
        recreateWrapper(t, e, n, r, o, i) {
          if (
            t.dirty ||
            e.isAtom ||
            !t.children.length ||
            !t.node.content.eq(e.content) ||
            !Xt(n, t.outerDeco) ||
            !r.eq(t.innerDeco)
          )
            return null;
          let s = Lt.create(this.top, e, n, r, o, i);
          if (s.contentDOM) {
            ((s.children = t.children), (t.children = []));
            for (let t of s.children) t.parent = s;
          }
          return (t.destroy(), s);
        }
        addNode(t, e, n, r, o) {
          let i = Lt.create(this.top, t, e, n, r, o);
          (i.contentDOM && i.updateChildren(r, o + 1),
            this.top.children.splice(this.index++, 0, i),
            (this.changed = !0));
        }
        placeWidget(t, e, n) {
          let r =
            this.index < this.top.children.length
              ? this.top.children[this.index]
              : null;
          if (
            !r ||
            !r.matchesWidget(t) ||
            (t != r.widget && r.widget.type.toDOM.parentNode)
          ) {
            let r = new Bt(this.top, t, e, n);
            (this.top.children.splice(this.index++, 0, r), (this.changed = !0));
          } else this.index++;
        }
        addTextblockHacks() {
          let t = this.top.children[this.index - 1],
            e = this.top;
          for (; t instanceof Vt; )
            ((e = t), (t = e.children[e.children.length - 1]));
          (!t ||
            !(t instanceof jt) ||
            /\n$/.test(t.node.text) ||
            (this.view.requiresGeckoHackNode && /\s$/.test(t.node.text))) &&
            ((st || ot) &&
              t &&
              "false" == t.dom.contentEditable &&
              this.addHackNode("IMG", e),
            this.addHackNode("BR", this.top));
        }
        addHackNode(t, e) {
          if (
            e == this.top &&
            this.index < e.children.length &&
            e.children[this.index].matchesHack(t)
          )
            this.index++;
          else {
            let n = document.createElement(t);
            ("IMG" == t &&
              ((n.className = "ProseMirror-separator"), (n.alt = "")),
              "BR" == t && (n.className = "ProseMirror-trailingBreak"));
            let r = new Kt(this.top, [], n, null);
            (e != this.top
              ? e.children.push(r)
              : e.children.splice(this.index++, 0, r),
              (this.changed = !0));
          }
        }
        isLocked(t) {
          return (
            this.lock &&
            (t == this.lock ||
              (1 == t.nodeType && t.contains(this.lock.parentNode)))
          );
        }
      }
      function ee(t, e) {
        return t.type.side - e.type.side;
      }
      function ne(t, e, n, r, o) {
        let i = [];
        for (let s = 0, l = 0; s < t.length; s++) {
          let a = t[s],
            c = l,
            d = (l += a.size);
          c >= n || d <= e
            ? i.push(a)
            : (c < e && i.push(a.slice(0, e - c, r)),
              o && (i.push(o), (o = void 0)),
              d > n && i.push(a.slice(n - c, a.size, r)));
        }
        return i;
      }
      function re(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = t.domSelectionRange(),
          r = t.state.doc;
        if (!n.focusNode) return null;
        let o = t.docView.nearestDesc(n.focusNode),
          i = o && 0 == o.size,
          l = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
        if (l < 0) return null;
        let a,
          c,
          d = r.resolve(l);
        if (_(n)) {
          for (a = l; o && !o.node; ) o = o.parent;
          let t = o.node;
          if (
            o &&
            t.isAtom &&
            s.nh.isSelectable(t) &&
            o.parent &&
            (!t.isInline ||
              !(function (t, e, n) {
                for (let r = 0 == e, o = e == W(t); r || o; ) {
                  if (t == n) return !0;
                  let e = B(t);
                  if (!(t = t.parentNode)) return !1;
                  ((r = r && 0 == e), (o = o && e == W(t)));
                }
              })(n.focusNode, n.focusOffset, o.dom))
          ) {
            let t = o.posBefore;
            c = new s.nh(l == t ? d : r.resolve(t));
          }
        } else {
          if (
            n instanceof t.dom.ownerDocument.defaultView.Selection &&
            n.rangeCount > 1
          ) {
            let e = l,
              o = l;
            for (let r = 0; r < n.rangeCount; r++) {
              let i = n.getRangeAt(r);
              ((e = Math.min(
                e,
                t.docView.posFromDOM(i.startContainer, i.startOffset, 1),
              )),
                (o = Math.max(
                  o,
                  t.docView.posFromDOM(i.endContainer, i.endOffset, -1),
                )));
            }
            if (e < 0) return null;
            (([a, l] = o == t.state.selection.anchor ? [o, e] : [e, o]),
              (d = r.resolve(l)));
          } else a = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
          if (a < 0) return null;
        }
        let h = r.resolve(a);
        if (!c) {
          c = pe(
            t,
            h,
            d,
            "pointer" == e || (t.state.selection.head < d.pos && !i) ? 1 : -1,
          );
        }
        return c;
      }
      function oe(t) {
        return t.editable
          ? t.hasFocus()
          : fe(t) &&
              document.activeElement &&
              document.activeElement.contains(t.dom);
      }
      function ie(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = t.state.selection;
        if ((de(t, n), oe(t))) {
          if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && ot) {
            let e = t.domSelectionRange(),
              n = t.domObserver.currentSelection;
            if (
              e.anchorNode &&
              n.anchorNode &&
              J(e.anchorNode, e.anchorOffset, n.anchorNode, n.anchorOffset)
            )
              return (
                (t.input.mouseDown.delayedSelectionSync = !0),
                void t.domObserver.setCurSelection()
              );
          }
          if ((t.domObserver.disconnectSelection(), t.cursorWrapper))
            !(function (t) {
              let e = t.domSelection();
              if (!e) return;
              let n = t.cursorWrapper.dom,
                r = "IMG" == n.nodeName;
              r ? e.collapse(n.parentNode, B(n) + 1) : e.collapse(n, 0);
              !r &&
                !t.state.selection.visible &&
                tt &&
                et <= 11 &&
                ((n.disabled = !0), (n.disabled = !1));
            })(t);
          else {
            let r,
              o,
              { anchor: i, head: l } = n;
            (!se ||
              n instanceof s.U3 ||
              (n.$from.parent.inlineContent || (r = le(t, n.from)),
              n.empty || n.$from.parent.inlineContent || (o = le(t, n.to))),
              t.docView.setSelection(i, l, t, e),
              se && (r && ce(r), o && ce(o)),
              n.visible
                ? t.dom.classList.remove("ProseMirror-hideselection")
                : (t.dom.classList.add("ProseMirror-hideselection"),
                  "onselectionchange" in document &&
                    (function (t) {
                      let e = t.dom.ownerDocument;
                      e.removeEventListener(
                        "selectionchange",
                        t.input.hideSelectionGuard,
                      );
                      let n = t.domSelectionRange(),
                        r = n.anchorNode,
                        o = n.anchorOffset;
                      e.addEventListener(
                        "selectionchange",
                        (t.input.hideSelectionGuard = () => {
                          (n.anchorNode == r && n.anchorOffset == o) ||
                            (e.removeEventListener(
                              "selectionchange",
                              t.input.hideSelectionGuard,
                            ),
                            setTimeout(() => {
                              (oe(t) && !t.state.selection.visible) ||
                                t.dom.classList.remove(
                                  "ProseMirror-hideselection",
                                );
                            }, 20));
                        }),
                      );
                    })(t)));
          }
          (t.domObserver.setCurSelection(), t.domObserver.connectSelection());
        }
      }
      const se = st || (ot && it < 63);
      function le(t, e) {
        let { node: n, offset: r } = t.docView.domFromPos(e, 0),
          o = r < n.childNodes.length ? n.childNodes[r] : null,
          i = r ? n.childNodes[r - 1] : null;
        if (st && o && "false" == o.contentEditable) return ae(o);
        if (
          (!o || "false" == o.contentEditable) &&
          (!i || "false" == i.contentEditable)
        ) {
          if (o) return ae(o);
          if (i) return ae(i);
        }
      }
      function ae(t) {
        return (
          (t.contentEditable = "true"),
          st && t.draggable && ((t.draggable = !1), (t.wasDraggable = !0)),
          t
        );
      }
      function ce(t) {
        ((t.contentEditable = "false"),
          t.wasDraggable && ((t.draggable = !0), (t.wasDraggable = null)));
      }
      function de(t, e) {
        if (e instanceof s.nh) {
          let n = t.docView.descAt(e.from);
          n != t.lastSelectedViewDesc &&
            (he(t), n && n.selectNode(), (t.lastSelectedViewDesc = n));
        } else he(t);
      }
      function he(t) {
        t.lastSelectedViewDesc &&
          (t.lastSelectedViewDesc.parent &&
            t.lastSelectedViewDesc.deselectNode(),
          (t.lastSelectedViewDesc = void 0));
      }
      function pe(t, e, n, r) {
        return (
          t.someProp("createSelectionBetween", (r) => r(t, e, n)) ||
          s.U3.between(e, n, r)
        );
      }
      function ue(t) {
        return !(t.editable && !t.hasFocus()) && fe(t);
      }
      function fe(t) {
        let e = t.domSelectionRange();
        if (!e.anchorNode) return !1;
        try {
          return (
            t.dom.contains(
              3 == e.anchorNode.nodeType
                ? e.anchorNode.parentNode
                : e.anchorNode,
            ) &&
            (t.editable ||
              t.dom.contains(
                3 == e.focusNode.nodeType
                  ? e.focusNode.parentNode
                  : e.focusNode,
              ))
          );
        } catch (n) {
          return !1;
        }
      }
      function me(t, e) {
        let { $anchor: n, $head: r } = t.selection,
          o = e > 0 ? n.max(r) : n.min(r),
          i = o.parent.inlineContent
            ? o.depth
              ? t.doc.resolve(e > 0 ? o.after() : o.before())
              : null
            : o;
        return i && s.LN.findFrom(i, e);
      }
      function ge(t, e) {
        return (t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0);
      }
      function ye(t, e, n) {
        let r = t.state.selection;
        if (!(r instanceof s.U3)) {
          if (r instanceof s.nh && r.node.isInline)
            return ge(t, new s.U3(e > 0 ? r.$to : r.$from));
          {
            let n = me(t.state, e);
            return !!n && ge(t, n);
          }
        }
        if (n.indexOf("s") > -1) {
          let { $head: n } = r,
            o = n.textOffset ? null : e < 0 ? n.nodeBefore : n.nodeAfter;
          if (!o || o.isText || !o.isLeaf) return !1;
          let i = t.state.doc.resolve(n.pos + o.nodeSize * (e < 0 ? -1 : 1));
          return ge(t, new s.U3(r.$anchor, i));
        }
        if (!r.empty) return !1;
        if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
          let n = me(t.state, e);
          return !!(n && n instanceof s.nh) && ge(t, n);
        }
        if (!(at && n.indexOf("m") > -1)) {
          let n,
            o = r.$head,
            i = o.textOffset ? null : e < 0 ? o.nodeBefore : o.nodeAfter;
          if (!i || i.isText) return !1;
          let l = e < 0 ? o.pos - i.nodeSize : o.pos;
          return (
            !!(i.isAtom || ((n = t.docView.descAt(l)) && !n.contentDOM)) &&
            (s.nh.isSelectable(i)
              ? ge(
                  t,
                  new s.nh(e < 0 ? t.state.doc.resolve(o.pos - i.nodeSize) : o),
                )
              : !!ht &&
                ge(
                  t,
                  new s.U3(t.state.doc.resolve(e < 0 ? l : l + i.nodeSize)),
                ))
          );
        }
      }
      function ve(t) {
        return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length;
      }
      function we(t, e) {
        let n = t.pmViewDesc;
        return (
          n && 0 == n.size && (e < 0 || t.nextSibling || "BR" != t.nodeName)
        );
      }
      function be(t, e) {
        return e < 0
          ? (function (t) {
              let e = t.domSelectionRange(),
                n = e.focusNode,
                r = e.focusOffset;
              if (!n) return;
              let o,
                i,
                s = !1;
              nt &&
                1 == n.nodeType &&
                r < ve(n) &&
                we(n.childNodes[r], -1) &&
                (s = !0);
              for (;;)
                if (r > 0) {
                  if (1 != n.nodeType) break;
                  {
                    let t = n.childNodes[r - 1];
                    if (we(t, -1)) ((o = n), (i = --r));
                    else {
                      if (3 != t.nodeType) break;
                      ((n = t), (r = n.nodeValue.length));
                    }
                  }
                } else {
                  if (ke(n)) break;
                  {
                    let e = n.previousSibling;
                    for (; e && we(e, -1); )
                      ((o = n.parentNode), (i = B(e)), (e = e.previousSibling));
                    if (e) ((n = e), (r = ve(n)));
                    else {
                      if (((n = n.parentNode), n == t.dom)) break;
                      r = 0;
                    }
                  }
                }
              s ? xe(t, n, r) : o && xe(t, o, i);
            })(t)
          : (function (t) {
              let e = t.domSelectionRange(),
                n = e.focusNode,
                r = e.focusOffset;
              if (!n) return;
              let o,
                i,
                s = ve(n);
              for (;;)
                if (r < s) {
                  if (1 != n.nodeType) break;
                  if (!we(n.childNodes[r], 1)) break;
                  ((o = n), (i = ++r));
                } else {
                  if (ke(n)) break;
                  {
                    let e = n.nextSibling;
                    for (; e && we(e, 1); )
                      ((o = e.parentNode), (i = B(e) + 1), (e = e.nextSibling));
                    if (e) ((n = e), (r = 0), (s = ve(n)));
                    else {
                      if (((n = n.parentNode), n == t.dom)) break;
                      r = s = 0;
                    }
                  }
                }
              o && xe(t, o, i);
            })(t);
      }
      function ke(t) {
        let e = t.pmViewDesc;
        return e && e.node && e.node.isBlock;
      }
      function xe(t, e, n) {
        if (3 != e.nodeType) {
          let t, r;
          (r = (function (t, e) {
            for (; t && e == t.childNodes.length && !q(t); )
              ((e = B(t) + 1), (t = t.parentNode));
            for (; t && e < t.childNodes.length; ) {
              let n = t.childNodes[e];
              if (3 == n.nodeType) return n;
              if (1 == n.nodeType && "false" == n.contentEditable) break;
              ((t = n), (e = 0));
            }
          })(e, n))
            ? ((e = r), (n = 0))
            : (t = (function (t, e) {
                for (; t && !e && !q(t); ) ((e = B(t)), (t = t.parentNode));
                for (; t && e; ) {
                  let n = t.childNodes[e - 1];
                  if (3 == n.nodeType) return n;
                  if (1 == n.nodeType && "false" == n.contentEditable) break;
                  e = (t = n).childNodes.length;
                }
              })(e, n)) && ((e = t), (n = t.nodeValue.length));
        }
        let r = t.domSelection();
        if (!r) return;
        if (_(r)) {
          let t = document.createRange();
          (t.setEnd(e, n),
            t.setStart(e, n),
            r.removeAllRanges(),
            r.addRange(t));
        } else r.extend && r.extend(e, n);
        t.domObserver.setCurSelection();
        let { state: o } = t;
        setTimeout(() => {
          t.state == o && ie(t);
        }, 50);
      }
      function Se(t, e) {
        let n = t.state.doc.resolve(e);
        if (!ot && !ct && n.parent.inlineContent) {
          let r = t.coordsAtPos(e);
          if (e > n.start()) {
            let n = t.coordsAtPos(e - 1),
              o = (n.top + n.bottom) / 2;
            if (o > r.top && o < r.bottom && Math.abs(n.left - r.left) > 1)
              return n.left < r.left ? "ltr" : "rtl";
          }
          if (e < n.end()) {
            let n = t.coordsAtPos(e + 1),
              o = (n.top + n.bottom) / 2;
            if (o > r.top && o < r.bottom && Math.abs(n.left - r.left) > 1)
              return n.left > r.left ? "ltr" : "rtl";
          }
        }
        return "rtl" == getComputedStyle(t.dom).direction ? "rtl" : "ltr";
      }
      function Me(t, e, n) {
        let r = t.state.selection;
        if ((r instanceof s.U3 && !r.empty) || n.indexOf("s") > -1) return !1;
        if (at && n.indexOf("m") > -1) return !1;
        let { $from: o, $to: i } = r;
        if (
          !o.parent.inlineContent ||
          t.endOfTextblock(e < 0 ? "up" : "down")
        ) {
          let n = me(t.state, e);
          if (n && n instanceof s.nh) return ge(t, n);
        }
        if (!o.parent.inlineContent) {
          let n = e < 0 ? o : i,
            l = r instanceof s.i5 ? s.LN.near(n, e) : s.LN.findFrom(n, e);
          return !!l && ge(t, l);
        }
        return !1;
      }
      function Ce(t, e) {
        if (!(t.state.selection instanceof s.U3)) return !0;
        let { $head: n, $anchor: r, empty: o } = t.state.selection;
        if (!n.sameParent(r)) return !0;
        if (!o) return !1;
        if (t.endOfTextblock(e > 0 ? "forward" : "backward")) return !0;
        let i = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
        if (i && !i.isText) {
          let r = t.state.tr;
          return (
            e < 0
              ? r.delete(n.pos - i.nodeSize, n.pos)
              : r.delete(n.pos, n.pos + i.nodeSize),
            t.dispatch(r),
            !0
          );
        }
        return !1;
      }
      function Oe(t, e, n) {
        (t.domObserver.stop(), (e.contentEditable = n), t.domObserver.start());
      }
      function Ne(t, e) {
        let n = e.keyCode,
          r = (function (t) {
            let e = "";
            return (
              t.ctrlKey && (e += "c"),
              t.metaKey && (e += "m"),
              t.altKey && (e += "a"),
              t.shiftKey && (e += "s"),
              e
            );
          })(e);
        if (8 == n || (at && 72 == n && "c" == r))
          return Ce(t, -1) || be(t, -1);
        if ((46 == n && !e.shiftKey) || (at && 68 == n && "c" == r))
          return Ce(t, 1) || be(t, 1);
        if (13 == n || 27 == n) return !0;
        if (37 == n || (at && 66 == n && "c" == r)) {
          let e =
            37 == n ? ("ltr" == Se(t, t.state.selection.from) ? -1 : 1) : -1;
          return ye(t, e, r) || be(t, e);
        }
        if (39 == n || (at && 70 == n && "c" == r)) {
          let e =
            39 == n ? ("ltr" == Se(t, t.state.selection.from) ? 1 : -1) : 1;
          return ye(t, e, r) || be(t, e);
        }
        return 38 == n || (at && 80 == n && "c" == r)
          ? Me(t, -1, r) || be(t, -1)
          : 40 == n || (at && 78 == n && "c" == r)
            ? (function (t) {
                if (!st || t.state.selection.$head.parentOffset > 0) return !1;
                let { focusNode: e, focusOffset: n } = t.domSelectionRange();
                if (
                  e &&
                  1 == e.nodeType &&
                  0 == n &&
                  e.firstChild &&
                  "false" == e.firstChild.contentEditable
                ) {
                  let n = e.firstChild;
                  (Oe(t, n, "true"), setTimeout(() => Oe(t, n, "false"), 20));
                }
                return !1;
              })(t) ||
              Me(t, 1, r) ||
              be(t, 1)
            : r == (at ? "m" : "c") &&
              (66 == n || 73 == n || 89 == n || 90 == n);
      }
      function Te(t, e) {
        t.someProp("transformCopied", (n) => {
          e = n(e, t);
        });
        let n = [],
          { content: r, openStart: o, openEnd: s } = e;
        for (
          ;
          o > 1 && s > 1 && 1 == r.childCount && 1 == r.firstChild.childCount;
        ) {
          (o--, s--);
          let t = r.firstChild;
          (n.push(t.type.name, t.attrs != t.type.defaultAttrs ? t.attrs : null),
            (r = t.content));
        }
        let l =
            t.someProp("clipboardSerializer") ||
            i.ZF.fromSchema(t.state.schema),
          a = $e(),
          c = a.createElement("div");
        c.appendChild(l.serializeFragment(r, { document: a }));
        let d,
          h = c.firstChild,
          p = 0;
        for (; h && 1 == h.nodeType && (d = Fe[h.nodeName.toLowerCase()]); ) {
          for (let t = d.length - 1; t >= 0; t--) {
            let e = a.createElement(d[t]);
            for (; c.firstChild; ) e.appendChild(c.firstChild);
            (c.appendChild(e), p++);
          }
          h = c.firstChild;
        }
        return (
          h &&
            1 == h.nodeType &&
            h.setAttribute(
              "data-pm-slice",
              ""
                .concat(o, " ")
                .concat(s)
                .concat(p ? " -".concat(p) : "", " ")
                .concat(JSON.stringify(n)),
            ),
          {
            dom: c,
            text:
              t.someProp("clipboardTextSerializer", (n) => n(e, t)) ||
              e.content.textBetween(0, e.content.size, "\n\n"),
            slice: e,
          }
        );
      }
      function Ae(t, e, n, r, o) {
        let s,
          l,
          a = o.parent.type.spec.code;
        if (!n && !e) return null;
        let c = !!e && (r || a || !n);
        if (c) {
          if (
            (t.someProp("transformPastedText", (n) => {
              e = n(e, a || r, t);
            }),
            a)
          )
            return (
              (l = new i.Ji(
                i.FK.from(t.state.schema.text(e.replace(/\r\n?/g, "\n"))),
                0,
                0,
              )),
              t.someProp("transformPasted", (e) => {
                l = e(l, t, !0);
              }),
              l
            );
          let n = t.someProp("clipboardTextParser", (n) => n(e, o, r, t));
          if (n) l = n;
          else {
            let n = o.marks(),
              { schema: r } = t.state,
              l = i.ZF.fromSchema(r);
            ((s = document.createElement("div")),
              e.split(/(?:\r\n?|\n)+/).forEach((t) => {
                let e = s.appendChild(document.createElement("p"));
                t && e.appendChild(l.serializeNode(r.text(t, n)));
              }));
          }
        } else
          (t.someProp("transformPastedHTML", (e) => {
            n = e(n, t);
          }),
            (s = (function (t) {
              let e = /^(\s*<meta [^>]*>)*/.exec(t);
              e && (t = t.slice(e[0].length));
              let n,
                r = $e().createElement("div"),
                o = /<([a-z][^>\s]+)/i.exec(t);
              (n = o && Fe[o[1].toLowerCase()]) &&
                (t =
                  n.map((t) => "<" + t + ">").join("") +
                  t +
                  n
                    .map((t) => "</" + t + ">")
                    .reverse()
                    .join(""));
              if (
                ((r.innerHTML = (function (t) {
                  let e = window.trustedTypes;
                  if (!e) return t;
                  Ve ||
                    (Ve =
                      e.defaultPolicy ||
                      e.createPolicy("ProseMirrorClipboard", {
                        createHTML: (t) => t,
                      }));
                  return Ve.createHTML(t);
                })(t)),
                n)
              )
                for (let i = 0; i < n.length; i++)
                  r = r.querySelector(n[i]) || r;
              return r;
            })(n)),
            ht &&
              (function (t) {
                let e = t.querySelectorAll(
                  ot
                    ? "span:not([class]):not([style])"
                    : "span.Apple-converted-space",
                );
                for (let n = 0; n < e.length; n++) {
                  let r = e[n];
                  1 == r.childNodes.length &&
                    "\xa0" == r.textContent &&
                    r.parentNode &&
                    r.parentNode.replaceChild(
                      t.ownerDocument.createTextNode(" "),
                      r,
                    );
                }
              })(s));
        let d = s && s.querySelector("[data-pm-slice]"),
          h =
            d &&
            /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
              d.getAttribute("data-pm-slice") || "",
            );
        if (h && h[3])
          for (let i = +h[3]; i > 0; i--) {
            let t = s.firstChild;
            for (; t && 1 != t.nodeType; ) t = t.nextSibling;
            if (!t) break;
            s = t;
          }
        if (!l) {
          let e =
            t.someProp("clipboardParser") ||
            t.someProp("domParser") ||
            i.S4.fromSchema(t.state.schema);
          l = e.parseSlice(s, {
            preserveWhitespace: !(!c && !h),
            context: o,
            ruleFromNode: (t) =>
              "BR" != t.nodeName ||
              t.nextSibling ||
              !t.parentNode ||
              Ee.test(t.parentNode.nodeName)
                ? null
                : { ignore: !0 },
          });
        }
        if (h)
          l = (function (t, e) {
            if (!t.size) return t;
            let n,
              r = t.content.firstChild.type.schema;
            try {
              n = JSON.parse(e);
            } catch (a) {
              return t;
            }
            let { content: o, openStart: s, openEnd: l } = t;
            for (let c = n.length - 2; c >= 0; c -= 2) {
              let t = r.nodes[n[c]];
              if (!t || t.hasRequiredAttrs()) break;
              ((o = i.FK.from(t.create(n[c + 1], o))), s++, l++);
            }
            return new i.Ji(o, s, l);
          })(ze(l, +h[1], +h[2]), h[4]);
        else if (
          ((l = i.Ji.maxOpen(
            (function (t, e) {
              if (t.childCount < 2) return t;
              for (let n = e.depth; n >= 0; n--) {
                let r,
                  o = e.node(n).contentMatchAt(e.index(n)),
                  s = [];
                if (
                  (t.forEach((t) => {
                    if (!s) return;
                    let e,
                      n = o.findWrapping(t.type);
                    if (!n) return (s = null);
                    if (
                      (e =
                        s.length && r.length && Re(n, r, t, s[s.length - 1], 0))
                    )
                      s[s.length - 1] = e;
                    else {
                      s.length &&
                        (s[s.length - 1] = Ie(s[s.length - 1], r.length));
                      let e = De(t, n);
                      (s.push(e), (o = o.matchType(e.type)), (r = n));
                    }
                  }),
                  s)
                )
                  return i.FK.from(s);
              }
              return t;
            })(l.content, o),
            !0,
          )),
          l.openStart || l.openEnd)
        ) {
          let t = 0,
            e = 0;
          for (
            let n = l.content.firstChild;
            t < l.openStart && !n.type.spec.isolating;
            t++, n = n.firstChild
          );
          for (
            let n = l.content.lastChild;
            e < l.openEnd && !n.type.spec.isolating;
            e++, n = n.lastChild
          );
          l = ze(l, t, e);
        }
        return (
          t.someProp("transformPasted", (e) => {
            l = e(l, t, c);
          }),
          l
        );
      }
      const Ee =
        /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
      function De(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        for (let r = e.length - 1; r >= n; r--)
          t = e[r].create(null, i.FK.from(t));
        return t;
      }
      function Re(t, e, n, r, o) {
        if (o < t.length && o < e.length && t[o] == e[o]) {
          let s = Re(t, e, n, r.lastChild, o + 1);
          if (s) return r.copy(r.content.replaceChild(r.childCount - 1, s));
          if (
            r
              .contentMatchAt(r.childCount)
              .matchType(o == t.length - 1 ? n.type : t[o + 1])
          )
            return r.copy(r.content.append(i.FK.from(De(n, t, o + 1))));
        }
      }
      function Ie(t, e) {
        if (0 == e) return t;
        let n = t.content.replaceChild(
            t.childCount - 1,
            Ie(t.lastChild, e - 1),
          ),
          r = t.contentMatchAt(t.childCount).fillBefore(i.FK.empty, !0);
        return t.copy(n.append(r));
      }
      function Pe(t, e, n, r, o, s) {
        let l = e < 0 ? t.firstChild : t.lastChild,
          a = l.content;
        return (
          t.childCount > 1 && (s = 0),
          o < r - 1 && (a = Pe(a, e, n, r, o + 1, s)),
          o >= n &&
            (a =
              e < 0
                ? l
                    .contentMatchAt(0)
                    .fillBefore(a, s <= o)
                    .append(a)
                : a.append(
                    l.contentMatchAt(l.childCount).fillBefore(i.FK.empty, !0),
                  )),
          t.replaceChild(e < 0 ? 0 : t.childCount - 1, l.copy(a))
        );
      }
      function ze(t, e, n) {
        return (
          e < t.openStart &&
            (t = new i.Ji(
              Pe(t.content, -1, e, t.openStart, 0, t.openEnd),
              e,
              t.openEnd,
            )),
          n < t.openEnd &&
            (t = new i.Ji(
              Pe(t.content, 1, n, t.openEnd, 0, 0),
              t.openStart,
              n,
            )),
          t
        );
      }
      const Fe = {
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        caption: ["table"],
        colgroup: ["table"],
        col: ["table", "colgroup"],
        tr: ["table", "tbody"],
        td: ["table", "tbody", "tr"],
        th: ["table", "tbody", "tr"],
      };
      let Be = null;
      function $e() {
        return Be || (Be = document.implementation.createHTMLDocument("title"));
      }
      let Ve = null;
      const Le = {},
        Je = {},
        je = { touchstart: !0, touchmove: !0 };
      class Ke {
        constructor() {
          ((this.shiftKey = !1),
            (this.mouseDown = null),
            (this.lastKeyCode = null),
            (this.lastKeyCodeTime = 0),
            (this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }),
            (this.lastSelectionOrigin = null),
            (this.lastSelectionTime = 0),
            (this.lastIOSEnter = 0),
            (this.lastIOSEnterFallbackTimeout = -1),
            (this.lastFocus = 0),
            (this.lastTouch = 0),
            (this.lastChromeDelete = 0),
            (this.composing = !1),
            (this.compositionNode = null),
            (this.composingTimeout = -1),
            (this.compositionNodes = []),
            (this.compositionEndedAt = -2e8),
            (this.compositionID = 1),
            (this.badSafariComposition = !1),
            (this.compositionPendingChanges = 0),
            (this.domChangeCount = 0),
            (this.eventHandlers = Object.create(null)),
            (this.hideSelectionGuard = null));
        }
      }
      function We(t, e) {
        ((t.input.lastSelectionOrigin = e),
          (t.input.lastSelectionTime = Date.now()));
      }
      function qe(t) {
        t.someProp("handleDOMEvents", (e) => {
          for (let n in e)
            t.input.eventHandlers[n] ||
              t.dom.addEventListener(
                n,
                (t.input.eventHandlers[n] = (e) => _e(t, e)),
              );
        });
      }
      function _e(t, e) {
        return t.someProp("handleDOMEvents", (n) => {
          let r = n[e.type];
          return !!r && (r(t, e) || e.defaultPrevented);
        });
      }
      function Ue(t, e) {
        if (!e.bubbles) return !0;
        if (e.defaultPrevented) return !1;
        for (let n = e.target; n != t.dom; n = n.parentNode)
          if (
            !n ||
            11 == n.nodeType ||
            (n.pmViewDesc && n.pmViewDesc.stopEvent(e))
          )
            return !1;
        return !0;
      }
      function He(t) {
        return { left: t.clientX, top: t.clientY };
      }
      function Ge(t, e, n, r, o) {
        if (-1 == r) return !1;
        let i = t.state.doc.resolve(r);
        for (let s = i.depth + 1; s > 0; s--)
          if (
            t.someProp(e, (e) =>
              s > i.depth
                ? e(t, n, i.nodeAfter, i.before(s), o, !0)
                : e(t, n, i.node(s), i.before(s), o, !1),
            )
          )
            return !0;
        return !1;
      }
      function Ze(t, e, n) {
        if ((t.focused || t.focus(), t.state.selection.eq(e))) return;
        let r = t.state.tr.setSelection(e);
        ("pointer" == n && r.setMeta("pointer", !0), t.dispatch(r));
      }
      function Ye(t, e, n, r, o) {
        return (
          Ge(t, "handleClickOn", e, n, r) ||
          t.someProp("handleClick", (n) => n(t, e, r)) ||
          (o
            ? (function (t, e) {
                if (-1 == e) return !1;
                let n,
                  r,
                  o = t.state.selection;
                o instanceof s.nh && (n = o.node);
                let i = t.state.doc.resolve(e);
                for (let l = i.depth + 1; l > 0; l--) {
                  let t = l > i.depth ? i.nodeAfter : i.node(l);
                  if (s.nh.isSelectable(t)) {
                    r =
                      n &&
                      o.$from.depth > 0 &&
                      l >= o.$from.depth &&
                      i.before(o.$from.depth + 1) == o.$from.pos
                        ? i.before(o.$from.depth)
                        : i.before(l);
                    break;
                  }
                }
                return (
                  null != r &&
                  (Ze(t, s.nh.create(t.state.doc, r), "pointer"), !0)
                );
              })(t, n)
            : (function (t, e) {
                if (-1 == e) return !1;
                let n = t.state.doc.resolve(e),
                  r = n.nodeAfter;
                return (
                  !!(r && r.isAtom && s.nh.isSelectable(r)) &&
                  (Ze(t, new s.nh(n), "pointer"), !0)
                );
              })(t, n))
        );
      }
      function Xe(t, e, n, r) {
        return (
          Ge(t, "handleDoubleClickOn", e, n, r) ||
          t.someProp("handleDoubleClick", (n) => n(t, e, r))
        );
      }
      function Qe(t, e, n, r) {
        return (
          Ge(t, "handleTripleClickOn", e, n, r) ||
          t.someProp("handleTripleClick", (n) => n(t, e, r)) ||
          (function (t, e, n) {
            if (0 != n.button) return !1;
            let r = t.state.doc;
            if (-1 == e)
              return (
                !!r.inlineContent &&
                (Ze(t, s.U3.create(r, 0, r.content.size), "pointer"), !0)
              );
            let o = r.resolve(e);
            for (let i = o.depth + 1; i > 0; i--) {
              let e = i > o.depth ? o.nodeAfter : o.node(i),
                n = o.before(i);
              if (e.inlineContent)
                Ze(t, s.U3.create(r, n + 1, n + 1 + e.content.size), "pointer");
              else {
                if (!s.nh.isSelectable(e)) continue;
                Ze(t, s.nh.create(r, n), "pointer");
              }
              return !0;
            }
          })(t, n, r)
        );
      }
      function tn(t) {
        return cn(t);
      }
      ((Je.keydown = (t, e) => {
        let n = e;
        if (
          ((t.input.shiftKey = 16 == n.keyCode || n.shiftKey),
          !rn(t, n) &&
            ((t.input.lastKeyCode = n.keyCode),
            (t.input.lastKeyCodeTime = Date.now()),
            !dt || !ot || 13 != n.keyCode))
        )
          if (
            (229 != n.keyCode && t.domObserver.forceFlush(),
            !lt || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey)
          )
            t.someProp("handleKeyDown", (e) => e(t, n)) || Ne(t, n)
              ? n.preventDefault()
              : We(t, "key");
          else {
            let e = Date.now();
            ((t.input.lastIOSEnter = e),
              (t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                t.input.lastIOSEnter == e &&
                  (t.someProp("handleKeyDown", (e) => e(t, U(13, "Enter"))),
                  (t.input.lastIOSEnter = 0));
              }, 200)));
          }
      }),
        (Je.keyup = (t, e) => {
          16 == e.keyCode && (t.input.shiftKey = !1);
        }),
        (Je.keypress = (t, e) => {
          let n = e;
          if (
            rn(t, n) ||
            !n.charCode ||
            (n.ctrlKey && !n.altKey) ||
            (at && n.metaKey)
          )
            return;
          if (t.someProp("handleKeyPress", (e) => e(t, n)))
            return void n.preventDefault();
          let r = t.state.selection;
          if (!(r instanceof s.U3) || !r.$from.sameParent(r.$to)) {
            let e = String.fromCharCode(n.charCode),
              o = () => t.state.tr.insertText(e).scrollIntoView();
            (/[\r\n]/.test(e) ||
              t.someProp("handleTextInput", (n) =>
                n(t, r.$from.pos, r.$to.pos, e, o),
              ) ||
              t.dispatch(o()),
              n.preventDefault());
          }
        }));
      const en = at ? "metaKey" : "ctrlKey";
      Le.mousedown = (t, e) => {
        let n = e;
        t.input.shiftKey = n.shiftKey;
        let r = tn(t),
          o = Date.now(),
          i = "singleClick";
        (o - t.input.lastClick.time < 500 &&
          (function (t, e) {
            let n = e.x - t.clientX,
              r = e.y - t.clientY;
            return n * n + r * r < 100;
          })(n, t.input.lastClick) &&
          !n[en] &&
          t.input.lastClick.button == n.button &&
          ("singleClick" == t.input.lastClick.type
            ? (i = "doubleClick")
            : "doubleClick" == t.input.lastClick.type && (i = "tripleClick")),
          (t.input.lastClick = {
            time: o,
            x: n.clientX,
            y: n.clientY,
            type: i,
            button: n.button,
          }));
        let s = t.posAtCoords(He(n));
        s &&
          ("singleClick" == i
            ? (t.input.mouseDown && t.input.mouseDown.done(),
              (t.input.mouseDown = new nn(t, s, n, !!r)))
            : ("doubleClick" == i ? Xe : Qe)(t, s.pos, s.inside, n)
              ? n.preventDefault()
              : We(t, "pointer"));
      };
      class nn {
        constructor(t, e, n, r) {
          let o, i;
          if (
            ((this.view = t),
            (this.pos = e),
            (this.event = n),
            (this.flushed = r),
            (this.delayedSelectionSync = !1),
            (this.mightDrag = null),
            (this.startDoc = t.state.doc),
            (this.selectNode = !!n[en]),
            (this.allowDefault = n.shiftKey),
            e.inside > -1)
          )
            ((o = t.state.doc.nodeAt(e.inside)), (i = e.inside));
          else {
            let n = t.state.doc.resolve(e.pos);
            ((o = n.parent), (i = n.depth ? n.before() : 0));
          }
          const l = r ? null : n.target,
            a = l ? t.docView.nearestDesc(l, !0) : null;
          this.target = a && 1 == a.nodeDOM.nodeType ? a.nodeDOM : null;
          let { selection: c } = t.state;
          (((0 == n.button &&
            o.type.spec.draggable &&
            !1 !== o.type.spec.selectable) ||
            (c instanceof s.nh && c.from <= i && c.to > i)) &&
            (this.mightDrag = {
              node: o,
              pos: i,
              addAttr: !(!this.target || this.target.draggable),
              setUneditable: !(
                !this.target ||
                !nt ||
                this.target.hasAttribute("contentEditable")
              ),
            }),
            this.target &&
              this.mightDrag &&
              (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr && (this.target.draggable = !0),
              this.mightDrag.setUneditable &&
                setTimeout(() => {
                  this.view.input.mouseDown == this &&
                    this.target.setAttribute("contentEditable", "false");
                }, 20),
              this.view.domObserver.start()),
            t.root.addEventListener("mouseup", (this.up = this.up.bind(this))),
            t.root.addEventListener(
              "mousemove",
              (this.move = this.move.bind(this)),
            ),
            We(t, "pointer"));
        }
        done() {
          (this.view.root.removeEventListener("mouseup", this.up),
            this.view.root.removeEventListener("mousemove", this.move),
            this.mightDrag &&
              this.target &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr &&
                this.target.removeAttribute("draggable"),
              this.mightDrag.setUneditable &&
                this.target.removeAttribute("contentEditable"),
              this.view.domObserver.start()),
            this.delayedSelectionSync && setTimeout(() => ie(this.view)),
            (this.view.input.mouseDown = null));
        }
        up(t) {
          if ((this.done(), !this.view.dom.contains(t.target))) return;
          let e = this.pos;
          (this.view.state.doc != this.startDoc &&
            (e = this.view.posAtCoords(He(t))),
            this.updateAllowDefault(t),
            this.allowDefault || !e
              ? We(this.view, "pointer")
              : Ye(this.view, e.pos, e.inside, t, this.selectNode)
                ? t.preventDefault()
                : 0 == t.button &&
                    (this.flushed ||
                      (st && this.mightDrag && !this.mightDrag.node.isAtom) ||
                      (ot &&
                        !this.view.state.selection.visible &&
                        Math.min(
                          Math.abs(e.pos - this.view.state.selection.from),
                          Math.abs(e.pos - this.view.state.selection.to),
                        ) <= 2))
                  ? (Ze(
                      this.view,
                      s.LN.near(this.view.state.doc.resolve(e.pos)),
                      "pointer",
                    ),
                    t.preventDefault())
                  : We(this.view, "pointer"));
        }
        move(t) {
          (this.updateAllowDefault(t),
            We(this.view, "pointer"),
            0 == t.buttons && this.done());
        }
        updateAllowDefault(t) {
          !this.allowDefault &&
            (Math.abs(this.event.x - t.clientX) > 4 ||
              Math.abs(this.event.y - t.clientY) > 4) &&
            (this.allowDefault = !0);
        }
      }
      function rn(t, e) {
        return (
          !!t.composing ||
          (!!(st && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500) &&
            ((t.input.compositionEndedAt = -2e8), !0))
        );
      }
      ((Le.touchstart = (t) => {
        ((t.input.lastTouch = Date.now()), tn(t), We(t, "pointer"));
      }),
        (Le.touchmove = (t) => {
          ((t.input.lastTouch = Date.now()), We(t, "pointer"));
        }),
        (Le.contextmenu = (t) => tn(t)));
      const on = dt ? 5e3 : -1;
      function sn(t, e) {
        (clearTimeout(t.input.composingTimeout),
          e > -1 && (t.input.composingTimeout = setTimeout(() => cn(t), e)));
      }
      function ln(t) {
        for (
          t.composing &&
          ((t.input.composing = !1),
          (t.input.compositionEndedAt = (function () {
            let t = document.createEvent("Event");
            return (t.initEvent("event", !0, !0), t.timeStamp);
          })()));
          t.input.compositionNodes.length > 0;
        )
          t.input.compositionNodes.pop().markParentsDirty();
      }
      function an(t) {
        let e = t.domSelectionRange();
        if (!e.focusNode) return null;
        let n = (function (t, e) {
            for (;;) {
              if (3 == t.nodeType && e) return t;
              if (1 == t.nodeType && e > 0) {
                if ("false" == t.contentEditable) return null;
                e = W((t = t.childNodes[e - 1]));
              } else {
                if (!t.parentNode || q(t)) return null;
                ((e = B(t)), (t = t.parentNode));
              }
            }
          })(e.focusNode, e.focusOffset),
          r = (function (t, e) {
            for (;;) {
              if (3 == t.nodeType && e < t.nodeValue.length) return t;
              if (1 == t.nodeType && e < t.childNodes.length) {
                if ("false" == t.contentEditable) return null;
                ((t = t.childNodes[e]), (e = 0));
              } else {
                if (!t.parentNode || q(t)) return null;
                ((e = B(t) + 1), (t = t.parentNode));
              }
            }
          })(e.focusNode, e.focusOffset);
        if (n && r && n != r) {
          let e = r.pmViewDesc,
            o = t.domObserver.lastChangedTextNode;
          if (n == o || r == o) return o;
          if (!e || !e.isText(r.nodeValue)) return r;
          if (t.input.compositionNode == r) {
            let t = n.pmViewDesc;
            if (t && t.isText(n.nodeValue)) return r;
          }
        }
        return n || r;
      }
      function cn(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!(dt && t.domObserver.flushingSoon >= 0)) {
          if (
            (t.domObserver.forceFlush(),
            ln(t),
            e || (t.docView && t.docView.dirty))
          ) {
            let n = re(t),
              r = t.state.selection;
            return (
              n && !n.eq(r)
                ? t.dispatch(t.state.tr.setSelection(n))
                : (!t.markCursor && !e) ||
                    r.$from.node(r.$from.sharedDepth(r.to)).inlineContent
                  ? t.updateState(t.state)
                  : t.dispatch(t.state.tr.deleteSelection()),
              !0
            );
          }
          return !1;
        }
      }
      ((Je.compositionstart = Je.compositionupdate =
        (t) => {
          if (!t.composing) {
            t.domObserver.flush();
            let { state: e } = t,
              n = e.selection.$to;
            if (
              e.selection instanceof s.U3 &&
              (e.storedMarks ||
                (!n.textOffset &&
                  n.parentOffset &&
                  n.nodeBefore.marks.some(
                    (t) => !1 === t.type.spec.inclusive,
                  )) ||
                (ot &&
                  ct &&
                  (function (t) {
                    let { focusNode: e, focusOffset: n } =
                      t.domSelectionRange();
                    if (!e || 1 != e.nodeType || n >= e.childNodes.length)
                      return !1;
                    let r = e.childNodes[n];
                    return 1 == r.nodeType && "false" == r.contentEditable;
                  })(t)))
            )
              ((t.markCursor = t.state.storedMarks || n.marks()),
                cn(t, !0),
                (t.markCursor = null));
            else if (
              (cn(t, !e.selection.empty),
              nt &&
                e.selection.empty &&
                n.parentOffset &&
                !n.textOffset &&
                n.nodeBefore.marks.length)
            ) {
              let e = t.domSelectionRange();
              for (
                let n = e.focusNode, r = e.focusOffset;
                n && 1 == n.nodeType && 0 != r;
              ) {
                let e = r < 0 ? n.lastChild : n.childNodes[r - 1];
                if (!e) break;
                if (3 == e.nodeType) {
                  let n = t.domSelection();
                  n && n.collapse(e, e.nodeValue.length);
                  break;
                }
                ((n = e), (r = -1));
              }
            }
            t.input.composing = !0;
          }
          sn(t, on);
        }),
        (Je.compositionend = (t, e) => {
          t.composing &&
            ((t.input.composing = !1),
            (t.input.compositionEndedAt = e.timeStamp),
            (t.input.compositionPendingChanges = t.domObserver.pendingRecords()
              .length
              ? t.input.compositionID
              : 0),
            (t.input.compositionNode = null),
            t.input.badSafariComposition
              ? t.domObserver.forceFlush()
              : t.input.compositionPendingChanges &&
                Promise.resolve().then(() => t.domObserver.flush()),
            t.input.compositionID++,
            sn(t, 20));
        }));
      const dn = (tt && et < 15) || (lt && pt < 604);
      function hn(t, e, n, r, o) {
        let s = Ae(t, e, n, r, t.state.selection.$from);
        if (t.someProp("handlePaste", (e) => e(t, o, s || i.Ji.empty)))
          return !0;
        if (!s) return !1;
        let l = (function (t) {
            return 0 == t.openStart &&
              0 == t.openEnd &&
              1 == t.content.childCount
              ? t.content.firstChild
              : null;
          })(s),
          a = l
            ? t.state.tr.replaceSelectionWith(l, r)
            : t.state.tr.replaceSelection(s);
        return (
          t.dispatch(
            a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste"),
          ),
          !0
        );
      }
      function pn(t) {
        let e = t.getData("text/plain") || t.getData("Text");
        if (e) return e;
        let n = t.getData("text/uri-list");
        return n ? n.replace(/\r?\n/g, " ") : "";
      }
      ((Le.copy = Je.cut =
        (t, e) => {
          let n = e,
            r = t.state.selection,
            o = "cut" == n.type;
          if (r.empty) return;
          let i = dn ? null : n.clipboardData,
            s = r.content(),
            { dom: l, text: a } = Te(t, s);
          (i
            ? (n.preventDefault(),
              i.clearData(),
              i.setData("text/html", l.innerHTML),
              i.setData("text/plain", a))
            : (function (t, e) {
                if (!t.dom.parentNode) return;
                let n = t.dom.parentNode.appendChild(
                  document.createElement("div"),
                );
                (n.appendChild(e),
                  (n.style.cssText =
                    "position: fixed; left: -10000px; top: 10px"));
                let r = getSelection(),
                  o = document.createRange();
                (o.selectNodeContents(e),
                  t.dom.blur(),
                  r.removeAllRanges(),
                  r.addRange(o),
                  setTimeout(() => {
                    (n.parentNode && n.parentNode.removeChild(n), t.focus());
                  }, 50));
              })(t, l),
            o &&
              t.dispatch(
                t.state.tr
                  .deleteSelection()
                  .scrollIntoView()
                  .setMeta("uiEvent", "cut"),
              ));
        }),
        (Je.paste = (t, e) => {
          let n = e;
          if (t.composing && !dt) return;
          let r = dn ? null : n.clipboardData,
            o = t.input.shiftKey && 45 != t.input.lastKeyCode;
          r && hn(t, pn(r), r.getData("text/html"), o, n)
            ? n.preventDefault()
            : (function (t, e) {
                if (!t.dom.parentNode) return;
                let n =
                    t.input.shiftKey ||
                    t.state.selection.$from.parent.type.spec.code,
                  r = t.dom.parentNode.appendChild(
                    document.createElement(n ? "textarea" : "div"),
                  );
                (n || (r.contentEditable = "true"),
                  (r.style.cssText =
                    "position: fixed; left: -10000px; top: 10px"),
                  r.focus());
                let o = t.input.shiftKey && 45 != t.input.lastKeyCode;
                setTimeout(() => {
                  (t.focus(),
                    r.parentNode && r.parentNode.removeChild(r),
                    n
                      ? hn(t, r.value, null, o, e)
                      : hn(t, r.textContent, r.innerHTML, o, e));
                }, 50);
              })(t, n);
        }));
      class un {
        constructor(t, e, n) {
          ((this.slice = t), (this.move = e), (this.node = n));
        }
      }
      const fn = at ? "altKey" : "ctrlKey";
      function mn(t, e) {
        let n = t.someProp("dragCopies", (t) => !t(e));
        return null != n ? n : !e[fn];
      }
      ((Le.dragstart = (t, e) => {
        let n = e,
          r = t.input.mouseDown;
        if ((r && r.done(), !n.dataTransfer)) return;
        let o,
          i = t.state.selection,
          l = i.empty ? null : t.posAtCoords(He(n));
        if (
          l &&
          l.pos >= i.from &&
          l.pos <= (i instanceof s.nh ? i.to - 1 : i.to)
        );
        else if (r && r.mightDrag)
          o = s.nh.create(t.state.doc, r.mightDrag.pos);
        else if (n.target && 1 == n.target.nodeType) {
          let e = t.docView.nearestDesc(n.target, !0);
          e &&
            e.node.type.spec.draggable &&
            e != t.docView &&
            (o = s.nh.create(t.state.doc, e.posBefore));
        }
        let a = (o || t.state.selection).content(),
          { dom: c, text: d, slice: h } = Te(t, a);
        ((!n.dataTransfer.files.length || !ot || it > 120) &&
          n.dataTransfer.clearData(),
          n.dataTransfer.setData(dn ? "Text" : "text/html", c.innerHTML),
          (n.dataTransfer.effectAllowed = "copyMove"),
          dn || n.dataTransfer.setData("text/plain", d),
          (t.dragging = new un(h, mn(t, n), o)));
      }),
        (Le.dragend = (t) => {
          let e = t.dragging;
          window.setTimeout(() => {
            t.dragging == e && (t.dragging = null);
          }, 50);
        }),
        (Je.dragover = Je.dragenter = (t, e) => e.preventDefault()),
        (Je.drop = (t, e) => {
          try {
            !(function (t, e, n) {
              if (!e.dataTransfer) return;
              let r = t.posAtCoords(He(e));
              if (!r) return;
              let l = t.state.doc.resolve(r.pos),
                a = n && n.slice;
              a
                ? t.someProp("transformPasted", (e) => {
                    a = e(a, t, !1);
                  })
                : (a = Ae(
                    t,
                    pn(e.dataTransfer),
                    dn ? null : e.dataTransfer.getData("text/html"),
                    !1,
                    l,
                  ));
              let c = !(!n || !mn(t, e));
              if (t.someProp("handleDrop", (n) => n(t, e, a || i.Ji.empty, c)))
                return void e.preventDefault();
              if (!a) return;
              e.preventDefault();
              let d = a ? (0, o.Um)(t.state.doc, l.pos, a) : l.pos;
              null == d && (d = l.pos);
              let h = t.state.tr;
              if (c) {
                let { node: t } = n;
                t ? t.replace(h) : h.deleteSelection();
              }
              let p = h.mapping.map(d),
                u =
                  0 == a.openStart &&
                  0 == a.openEnd &&
                  1 == a.content.childCount,
                f = h.doc;
              u
                ? h.replaceRangeWith(p, p, a.content.firstChild)
                : h.replaceRange(p, p, a);
              if (h.doc.eq(f)) return;
              let m = h.doc.resolve(p);
              if (
                u &&
                s.nh.isSelectable(a.content.firstChild) &&
                m.nodeAfter &&
                m.nodeAfter.sameMarkup(a.content.firstChild)
              )
                h.setSelection(new s.nh(m));
              else {
                let e = h.mapping.map(d);
                (h.mapping.maps[h.mapping.maps.length - 1].forEach(
                  (t, n, r, o) => (e = o),
                ),
                  h.setSelection(pe(t, m, h.doc.resolve(e))));
              }
              (t.focus(), t.dispatch(h.setMeta("uiEvent", "drop")));
            })(t, e, t.dragging);
          } finally {
            t.dragging = null;
          }
        }),
        (Le.focus = (t) => {
          ((t.input.lastFocus = Date.now()),
            t.focused ||
              (t.domObserver.stop(),
              t.dom.classList.add("ProseMirror-focused"),
              t.domObserver.start(),
              (t.focused = !0),
              setTimeout(() => {
                t.docView &&
                  t.hasFocus() &&
                  !t.domObserver.currentSelection.eq(t.domSelectionRange()) &&
                  ie(t);
              }, 20)));
        }),
        (Le.blur = (t, e) => {
          let n = e;
          t.focused &&
            (t.domObserver.stop(),
            t.dom.classList.remove("ProseMirror-focused"),
            t.domObserver.start(),
            n.relatedTarget &&
              t.dom.contains(n.relatedTarget) &&
              t.domObserver.currentSelection.clear(),
            (t.focused = !1));
        }),
        (Le.beforeinput = (t, e) => {
          if (ot && dt && "deleteContentBackward" == e.inputType) {
            t.domObserver.flushSoon();
            let { domChangeCount: e } = t.input;
            setTimeout(() => {
              if (t.input.domChangeCount != e) return;
              if (
                (t.dom.blur(),
                t.focus(),
                t.someProp("handleKeyDown", (e) => e(t, U(8, "Backspace"))))
              )
                return;
              let { $cursor: n } = t.state.selection;
              n &&
                n.pos > 0 &&
                t.dispatch(
                  t.state.tr.delete(n.pos - 1, n.pos).scrollIntoView(),
                );
            }, 50);
          }
        }));
      for (let os in Je) Le[os] = Je[os];
      function gn(t, e) {
        if (t == e) return !0;
        for (let n in t) if (t[n] !== e[n]) return !1;
        for (let n in e) if (!(n in t)) return !1;
        return !0;
      }
      class yn {
        constructor(t, e) {
          ((this.toDOM = t),
            (this.spec = e || xn),
            (this.side = this.spec.side || 0));
        }
        map(t, e, n, r) {
          let { pos: o, deleted: i } = t.mapResult(
            e.from + r,
            this.side < 0 ? -1 : 1,
          );
          return i ? null : new bn(o - n, o - n, this);
        }
        valid() {
          return !0;
        }
        eq(t) {
          return (
            this == t ||
            (t instanceof yn &&
              ((this.spec.key && this.spec.key == t.spec.key) ||
                (this.toDOM == t.toDOM && gn(this.spec, t.spec))))
          );
        }
        destroy(t) {
          this.spec.destroy && this.spec.destroy(t);
        }
      }
      class vn {
        constructor(t, e) {
          ((this.attrs = t), (this.spec = e || xn));
        }
        map(t, e, n, r) {
          let o = t.map(e.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
            i = t.map(e.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
          return o >= i ? null : new bn(o, i, this);
        }
        valid(t, e) {
          return e.from < e.to;
        }
        eq(t) {
          return (
            this == t ||
            (t instanceof vn &&
              gn(this.attrs, t.attrs) &&
              gn(this.spec, t.spec))
          );
        }
        static is(t) {
          return t.type instanceof vn;
        }
        destroy() {}
      }
      class wn {
        constructor(t, e) {
          ((this.attrs = t), (this.spec = e || xn));
        }
        map(t, e, n, r) {
          let o = t.mapResult(e.from + r, 1);
          if (o.deleted) return null;
          let i = t.mapResult(e.to + r, -1);
          return i.deleted || i.pos <= o.pos
            ? null
            : new bn(o.pos - n, i.pos - n, this);
        }
        valid(t, e) {
          let n,
            { index: r, offset: o } = t.content.findIndex(e.from);
          return (
            o == e.from && !(n = t.child(r)).isText && o + n.nodeSize == e.to
          );
        }
        eq(t) {
          return (
            this == t ||
            (t instanceof wn &&
              gn(this.attrs, t.attrs) &&
              gn(this.spec, t.spec))
          );
        }
        destroy() {}
      }
      class bn {
        constructor(t, e, n) {
          ((this.from = t), (this.to = e), (this.type = n));
        }
        copy(t, e) {
          return new bn(t, e, this.type);
        }
        eq(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (
            this.type.eq(t.type) &&
            this.from + e == t.from &&
            this.to + e == t.to
          );
        }
        map(t, e, n) {
          return this.type.map(t, this, e, n);
        }
        static widget(t, e, n) {
          return new bn(t, t, new yn(e, n));
        }
        static inline(t, e, n, r) {
          return new bn(t, e, new vn(n, r));
        }
        static node(t, e, n, r) {
          return new bn(t, e, new wn(n, r));
        }
        get spec() {
          return this.type.spec;
        }
        get inline() {
          return this.type instanceof vn;
        }
        get widget() {
          return this.type instanceof yn;
        }
      }
      const kn = [],
        xn = {};
      class Sn {
        constructor(t, e) {
          ((this.local = t.length ? t : kn),
            (this.children = e.length ? e : kn));
        }
        static create(t, e) {
          return e.length ? An(e, t, 0, xn) : Mn;
        }
        find(t, e, n) {
          let r = [];
          return (
            this.findInner(null == t ? 0 : t, null == e ? 1e9 : e, r, 0, n),
            r
          );
        }
        findInner(t, e, n, r, o) {
          for (let i = 0; i < this.local.length; i++) {
            let s = this.local[i];
            s.from <= e &&
              s.to >= t &&
              (!o || o(s.spec)) &&
              n.push(s.copy(s.from + r, s.to + r));
          }
          for (let i = 0; i < this.children.length; i += 3)
            if (this.children[i] < e && this.children[i + 1] > t) {
              let s = this.children[i] + 1;
              this.children[i + 2].findInner(t - s, e - s, n, r + s, o);
            }
        }
        map(t, e, n) {
          return this == Mn || 0 == t.maps.length
            ? this
            : this.mapInner(t, e, 0, 0, n || xn);
        }
        mapInner(t, e, n, r, o) {
          let i;
          for (let s = 0; s < this.local.length; s++) {
            let l = this.local[s].map(t, n, r);
            l && l.type.valid(e, l)
              ? (i || (i = [])).push(l)
              : o.onRemove && o.onRemove(this.local[s].spec);
          }
          return this.children.length
            ? (function (t, e, n, r, o, i, s) {
                let l = t.slice();
                for (let c = 0, d = i; c < n.maps.length; c++) {
                  let t = 0;
                  (n.maps[c].forEach((e, n, r, o) => {
                    let i = o - r - (n - e);
                    for (let s = 0; s < l.length; s += 3) {
                      let r = l[s + 1];
                      if (r < 0 || e > r + d - t) continue;
                      let o = l[s] + d - t;
                      n >= o
                        ? (l[s + 1] = e <= o ? -2 : -1)
                        : e >= d && i && ((l[s] += i), (l[s + 1] += i));
                    }
                    t += i;
                  }),
                    (d = n.maps[c].map(d, -1)));
                }
                let a = !1;
                for (let c = 0; c < l.length; c += 3)
                  if (l[c + 1] < 0) {
                    if (-2 == l[c + 1]) {
                      ((a = !0), (l[c + 1] = -1));
                      continue;
                    }
                    let e = n.map(t[c] + i),
                      d = e - o;
                    if (d < 0 || d >= r.content.size) {
                      a = !0;
                      continue;
                    }
                    let h = n.map(t[c + 1] + i, -1) - o,
                      { index: p, offset: u } = r.content.findIndex(d),
                      f = r.maybeChild(p);
                    if (f && u == d && u + f.nodeSize == h) {
                      let r = l[c + 2].mapInner(n, f, e + 1, t[c] + i + 1, s);
                      r != Mn
                        ? ((l[c] = d), (l[c + 1] = h), (l[c + 2] = r))
                        : ((l[c + 1] = -2), (a = !0));
                    } else a = !0;
                  }
                if (a) {
                  let a = (function (t, e, n, r, o, i, s) {
                      function l(t, e) {
                        for (let i = 0; i < t.local.length; i++) {
                          let l = t.local[i].map(r, o, e);
                          l
                            ? n.push(l)
                            : s.onRemove && s.onRemove(t.local[i].spec);
                        }
                        for (let n = 0; n < t.children.length; n += 3)
                          l(t.children[n + 2], t.children[n] + e + 1);
                      }
                      for (let a = 0; a < t.length; a += 3)
                        -1 == t[a + 1] && l(t[a + 2], e[a] + i + 1);
                      return n;
                    })(l, t, e, n, o, i, s),
                    c = An(a, r, 0, s);
                  e = c.local;
                  for (let t = 0; t < l.length; t += 3)
                    l[t + 1] < 0 && (l.splice(t, 3), (t -= 3));
                  for (let t = 0, e = 0; t < c.children.length; t += 3) {
                    let n = c.children[t];
                    for (; e < l.length && l[e] < n; ) e += 3;
                    l.splice(
                      e,
                      0,
                      c.children[t],
                      c.children[t + 1],
                      c.children[t + 2],
                    );
                  }
                }
                return new Sn(e.sort(En), l);
              })(this.children, i || [], t, e, n, r, o)
            : i
              ? new Sn(i.sort(En), kn)
              : Mn;
        }
        add(t, e) {
          return e.length
            ? this == Mn
              ? Sn.create(t, e)
              : this.addInner(t, e, 0)
            : this;
        }
        addInner(t, e, n) {
          let r,
            o = 0;
          t.forEach((t, i) => {
            let s,
              l = i + n;
            if ((s = Nn(e, t, l))) {
              for (r || (r = this.children.slice()); o < r.length && r[o] < i; )
                o += 3;
              (r[o] == i
                ? (r[o + 2] = r[o + 2].addInner(t, s, l + 1))
                : r.splice(o, 0, i, i + t.nodeSize, An(s, t, l + 1, xn)),
                (o += 3));
            }
          });
          let i = On(o ? Tn(e) : e, -n);
          for (let s = 0; s < i.length; s++)
            i[s].type.valid(t, i[s]) || i.splice(s--, 1);
          return new Sn(
            i.length ? this.local.concat(i).sort(En) : this.local,
            r || this.children,
          );
        }
        remove(t) {
          return 0 == t.length || this == Mn ? this : this.removeInner(t, 0);
        }
        removeInner(t, e) {
          let n = this.children,
            r = this.local;
          for (let o = 0; o < n.length; o += 3) {
            let r,
              i = n[o] + e,
              s = n[o + 1] + e;
            for (let e, n = 0; n < t.length; n++)
              (e = t[n]) &&
                e.from > i &&
                e.to < s &&
                ((t[n] = null), (r || (r = [])).push(e));
            if (!r) continue;
            n == this.children && (n = this.children.slice());
            let l = n[o + 2].removeInner(r, i + 1);
            l != Mn ? (n[o + 2] = l) : (n.splice(o, 3), (o -= 3));
          }
          if (r.length)
            for (let o, i = 0; i < t.length; i++)
              if ((o = t[i]))
                for (let t = 0; t < r.length; t++)
                  r[t].eq(o, e) &&
                    (r == this.local && (r = this.local.slice()),
                    r.splice(t--, 1));
          return n == this.children && r == this.local
            ? this
            : r.length || n.length
              ? new Sn(r, n)
              : Mn;
        }
        forChild(t, e) {
          if (this == Mn) return this;
          if (e.isLeaf) return Sn.empty;
          let n, r;
          for (let s = 0; s < this.children.length; s += 3)
            if (this.children[s] >= t) {
              this.children[s] == t && (n = this.children[s + 2]);
              break;
            }
          let o = t + 1,
            i = o + e.content.size;
          for (let s = 0; s < this.local.length; s++) {
            let t = this.local[s];
            if (t.from < i && t.to > o && t.type instanceof vn) {
              let e = Math.max(o, t.from) - o,
                n = Math.min(i, t.to) - o;
              e < n && (r || (r = [])).push(t.copy(e, n));
            }
          }
          if (r) {
            let t = new Sn(r.sort(En), kn);
            return n ? new Cn([t, n]) : t;
          }
          return n || Mn;
        }
        eq(t) {
          if (this == t) return !0;
          if (
            !(t instanceof Sn) ||
            this.local.length != t.local.length ||
            this.children.length != t.children.length
          )
            return !1;
          for (let e = 0; e < this.local.length; e++)
            if (!this.local[e].eq(t.local[e])) return !1;
          for (let e = 0; e < this.children.length; e += 3)
            if (
              this.children[e] != t.children[e] ||
              this.children[e + 1] != t.children[e + 1] ||
              !this.children[e + 2].eq(t.children[e + 2])
            )
              return !1;
          return !0;
        }
        locals(t) {
          return Dn(this.localsInner(t));
        }
        localsInner(t) {
          if (this == Mn) return kn;
          if (t.inlineContent || !this.local.some(vn.is)) return this.local;
          let e = [];
          for (let n = 0; n < this.local.length; n++)
            this.local[n].type instanceof vn || e.push(this.local[n]);
          return e;
        }
        forEachSet(t) {
          t(this);
        }
      }
      ((Sn.empty = new Sn([], [])), (Sn.removeOverlap = Dn));
      const Mn = Sn.empty;
      class Cn {
        constructor(t) {
          this.members = t;
        }
        map(t, e) {
          const n = this.members.map((n) => n.map(t, e, xn));
          return Cn.from(n);
        }
        forChild(t, e) {
          if (e.isLeaf) return Sn.empty;
          let n = [];
          for (let r = 0; r < this.members.length; r++) {
            let o = this.members[r].forChild(t, e);
            o != Mn &&
              (o instanceof Cn ? (n = n.concat(o.members)) : n.push(o));
          }
          return Cn.from(n);
        }
        eq(t) {
          if (!(t instanceof Cn) || t.members.length != this.members.length)
            return !1;
          for (let e = 0; e < this.members.length; e++)
            if (!this.members[e].eq(t.members[e])) return !1;
          return !0;
        }
        locals(t) {
          let e,
            n = !0;
          for (let r = 0; r < this.members.length; r++) {
            let o = this.members[r].localsInner(t);
            if (o.length)
              if (e) {
                n && ((e = e.slice()), (n = !1));
                for (let t = 0; t < o.length; t++) e.push(o[t]);
              } else e = o;
          }
          return e ? Dn(n ? e : e.sort(En)) : kn;
        }
        static from(t) {
          switch (t.length) {
            case 0:
              return Mn;
            case 1:
              return t[0];
            default:
              return new Cn(
                t.every((t) => t instanceof Sn)
                  ? t
                  : t.reduce(
                      (t, e) => t.concat(e instanceof Sn ? e : e.members),
                      [],
                    ),
              );
          }
        }
        forEachSet(t) {
          for (let e = 0; e < this.members.length; e++)
            this.members[e].forEachSet(t);
        }
      }
      function On(t, e) {
        if (!e || !t.length) return t;
        let n = [];
        for (let r = 0; r < t.length; r++) {
          let o = t[r];
          n.push(new bn(o.from + e, o.to + e, o.type));
        }
        return n;
      }
      function Nn(t, e, n) {
        if (e.isLeaf) return null;
        let r = n + e.nodeSize,
          o = null;
        for (let i, s = 0; s < t.length; s++)
          (i = t[s]) &&
            i.from > n &&
            i.to < r &&
            ((o || (o = [])).push(i), (t[s] = null));
        return o;
      }
      function Tn(t) {
        let e = [];
        for (let n = 0; n < t.length; n++) null != t[n] && e.push(t[n]);
        return e;
      }
      function An(t, e, n, r) {
        let o = [],
          i = !1;
        e.forEach((e, s) => {
          let l = Nn(t, e, s + n);
          if (l) {
            i = !0;
            let t = An(l, e, n + s + 1, r);
            t != Mn && o.push(s, s + e.nodeSize, t);
          }
        });
        let s = On(i ? Tn(t) : t, -n).sort(En);
        for (let l = 0; l < s.length; l++)
          s[l].type.valid(e, s[l]) ||
            (r.onRemove && r.onRemove(s[l].spec), s.splice(l--, 1));
        return s.length || o.length ? new Sn(s, o) : Mn;
      }
      function En(t, e) {
        return t.from - e.from || t.to - e.to;
      }
      function Dn(t) {
        let e = t;
        for (let n = 0; n < e.length - 1; n++) {
          let r = e[n];
          if (r.from != r.to)
            for (let o = n + 1; o < e.length; o++) {
              let i = e[o];
              if (i.from != r.from) {
                i.from < r.to &&
                  (e == t && (e = t.slice()),
                  (e[n] = r.copy(r.from, i.from)),
                  Rn(e, o, r.copy(i.from, r.to)));
                break;
              }
              i.to != r.to &&
                (e == t && (e = t.slice()),
                (e[o] = i.copy(i.from, r.to)),
                Rn(e, o + 1, i.copy(r.to, i.to)));
            }
        }
        return e;
      }
      function Rn(t, e, n) {
        for (; e < t.length && En(n, t[e]) > 0; ) e++;
        t.splice(e, 0, n);
      }
      function In(t) {
        let e = [];
        return (
          t.someProp("decorations", (n) => {
            let r = n(t.state);
            r && r != Mn && e.push(r);
          }),
          t.cursorWrapper &&
            e.push(Sn.create(t.state.doc, [t.cursorWrapper.deco])),
          Cn.from(e)
        );
      }
      const Pn = {
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
          attributes: !0,
          attributeOldValue: !0,
          subtree: !0,
        },
        zn = tt && et <= 11;
      class Fn {
        constructor() {
          ((this.anchorNode = null),
            (this.anchorOffset = 0),
            (this.focusNode = null),
            (this.focusOffset = 0));
        }
        set(t) {
          ((this.anchorNode = t.anchorNode),
            (this.anchorOffset = t.anchorOffset),
            (this.focusNode = t.focusNode),
            (this.focusOffset = t.focusOffset));
        }
        clear() {
          this.anchorNode = this.focusNode = null;
        }
        eq(t) {
          return (
            t.anchorNode == this.anchorNode &&
            t.anchorOffset == this.anchorOffset &&
            t.focusNode == this.focusNode &&
            t.focusOffset == this.focusOffset
          );
        }
      }
      class Bn {
        constructor(t, e) {
          ((this.view = t),
            (this.handleDOMChange = e),
            (this.queue = []),
            (this.flushingSoon = -1),
            (this.observer = null),
            (this.currentSelection = new Fn()),
            (this.onCharData = null),
            (this.suppressingSelectionUpdates = !1),
            (this.lastChangedTextNode = null),
            (this.observer =
              window.MutationObserver &&
              new window.MutationObserver((e) => {
                for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
                tt &&
                et <= 11 &&
                e.some(
                  (t) =>
                    ("childList" == t.type && t.removedNodes.length) ||
                    ("characterData" == t.type &&
                      t.oldValue.length > t.target.nodeValue.length),
                )
                  ? this.flushSoon()
                  : st &&
                      t.composing &&
                      e.some(
                        (t) =>
                          "childList" == t.type && "TR" == t.target.nodeName,
                      )
                    ? ((t.input.badSafariComposition = !0), this.flushSoon())
                    : this.flush();
              })),
            zn &&
              (this.onCharData = (t) => {
                (this.queue.push({
                  target: t.target,
                  type: "characterData",
                  oldValue: t.prevValue,
                }),
                  this.flushSoon());
              }),
            (this.onSelectionChange = this.onSelectionChange.bind(this)));
        }
        flushSoon() {
          this.flushingSoon < 0 &&
            (this.flushingSoon = window.setTimeout(() => {
              ((this.flushingSoon = -1), this.flush());
            }, 20));
        }
        forceFlush() {
          this.flushingSoon > -1 &&
            (window.clearTimeout(this.flushingSoon),
            (this.flushingSoon = -1),
            this.flush());
        }
        start() {
          (this.observer &&
            (this.observer.takeRecords(),
            this.observer.observe(this.view.dom, Pn)),
            this.onCharData &&
              this.view.dom.addEventListener(
                "DOMCharacterDataModified",
                this.onCharData,
              ),
            this.connectSelection());
        }
        stop() {
          if (this.observer) {
            let t = this.observer.takeRecords();
            if (t.length) {
              for (let e = 0; e < t.length; e++) this.queue.push(t[e]);
              window.setTimeout(() => this.flush(), 20);
            }
            this.observer.disconnect();
          }
          (this.onCharData &&
            this.view.dom.removeEventListener(
              "DOMCharacterDataModified",
              this.onCharData,
            ),
            this.disconnectSelection());
        }
        connectSelection() {
          this.view.dom.ownerDocument.addEventListener(
            "selectionchange",
            this.onSelectionChange,
          );
        }
        disconnectSelection() {
          this.view.dom.ownerDocument.removeEventListener(
            "selectionchange",
            this.onSelectionChange,
          );
        }
        suppressSelectionUpdates() {
          ((this.suppressingSelectionUpdates = !0),
            setTimeout(() => (this.suppressingSelectionUpdates = !1), 50));
        }
        onSelectionChange() {
          if (ue(this.view)) {
            if (this.suppressingSelectionUpdates) return ie(this.view);
            if (tt && et <= 11 && !this.view.state.selection.empty) {
              let t = this.view.domSelectionRange();
              if (
                t.focusNode &&
                J(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset)
              )
                return this.flushSoon();
            }
            this.flush();
          }
        }
        setCurSelection() {
          this.currentSelection.set(this.view.domSelectionRange());
        }
        ignoreSelectionChange(t) {
          if (!t.focusNode) return !0;
          let e,
            n = new Set();
          for (let o = t.focusNode; o; o = $(o)) n.add(o);
          for (let o = t.anchorNode; o; o = $(o))
            if (n.has(o)) {
              e = o;
              break;
            }
          let r = e && this.view.docView.nearestDesc(e);
          return r &&
            r.ignoreMutation({
              type: "selection",
              target: 3 == e.nodeType ? e.parentNode : e,
            })
            ? (this.setCurSelection(), !0)
            : void 0;
        }
        pendingRecords() {
          if (this.observer)
            for (let t of this.observer.takeRecords()) this.queue.push(t);
          return this.queue;
        }
        flush() {
          let { view: t } = this;
          if (!t.docView || this.flushingSoon > -1) return;
          let e = this.pendingRecords();
          e.length && (this.queue = []);
          let n = t.domSelectionRange(),
            r =
              !this.suppressingSelectionUpdates &&
              !this.currentSelection.eq(n) &&
              ue(t) &&
              !this.ignoreSelectionChange(n),
            o = -1,
            i = -1,
            l = !1,
            a = [];
          if (t.editable)
            for (let s = 0; s < e.length; s++) {
              let t = this.registerMutation(e[s], a);
              t &&
                ((o = o < 0 ? t.from : Math.min(t.from, o)),
                (i = i < 0 ? t.to : Math.max(t.to, i)),
                t.typeOver && (l = !0));
            }
          if (nt && a.length) {
            let e = a.filter((t) => "BR" == t.nodeName);
            if (2 == e.length) {
              let [t, n] = e;
              t.parentNode && t.parentNode.parentNode == n.parentNode
                ? n.remove()
                : t.remove();
            } else {
              let { focusNode: n } = this.currentSelection;
              for (let r of e) {
                let e = r.parentNode;
                !e || "LI" != e.nodeName || (n && Jn(t, n) == e) || r.remove();
              }
            }
          } else if (
            (ot || st) &&
            a.some((t) => "BR" == t.nodeName) &&
            (8 == t.input.lastKeyCode || 46 == t.input.lastKeyCode)
          )
            for (let s of a)
              if ("BR" == s.nodeName && s.parentNode) {
                let t = s.nextSibling;
                t &&
                  1 == t.nodeType &&
                  "false" == t.contentEditable &&
                  s.parentNode.removeChild(s);
              }
          let c = null;
          o < 0 &&
          r &&
          t.input.lastFocus > Date.now() - 200 &&
          Math.max(t.input.lastTouch, t.input.lastClick.time) <
            Date.now() - 300 &&
          _(n) &&
          (c = re(t)) &&
          c.eq(s.LN.near(t.state.doc.resolve(0), 1))
            ? ((t.input.lastFocus = 0),
              ie(t),
              this.currentSelection.set(n),
              t.scrollToSelection())
            : (o > -1 || r) &&
              (o > -1 &&
                (t.docView.markDirty(o, i),
                (function (t) {
                  if ($n.has(t)) return;
                  if (
                    ($n.set(t, null),
                    -1 !==
                      ["normal", "nowrap", "pre-line"].indexOf(
                        getComputedStyle(t.dom).whiteSpace,
                      ))
                  ) {
                    if (((t.requiresGeckoHackNode = nt), Vn)) return;
                    (console.warn(
                      "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.",
                    ),
                      (Vn = !0));
                  }
                })(t)),
              t.input.badSafariComposition &&
                ((t.input.badSafariComposition = !1),
                (function (t, e) {
                  var n;
                  let { focusNode: r, focusOffset: o } = t.domSelectionRange();
                  for (let i of e)
                    if (
                      "TR" ==
                      (null === (n = i.parentNode) || void 0 === n
                        ? void 0
                        : n.nodeName)
                    ) {
                      let e = i.nextSibling;
                      for (; e && "TD" != e.nodeName && "TH" != e.nodeName; )
                        e = e.nextSibling;
                      if (e) {
                        let n = e;
                        for (;;) {
                          let t = n.firstChild;
                          if (
                            !t ||
                            1 != t.nodeType ||
                            "false" == t.contentEditable ||
                            /^(BR|IMG)$/.test(t.nodeName)
                          )
                            break;
                          n = t;
                        }
                        (n.insertBefore(i, n.firstChild),
                          r == i && t.domSelection().collapse(i, o));
                      } else i.parentNode.removeChild(i);
                    }
                })(t, a)),
              this.handleDOMChange(o, i, l, a),
              t.docView && t.docView.dirty
                ? t.updateState(t.state)
                : this.currentSelection.eq(n) || ie(t),
              this.currentSelection.set(n));
        }
        registerMutation(t, e) {
          if (e.indexOf(t.target) > -1) return null;
          let n = this.view.docView.nearestDesc(t.target);
          if (
            "attributes" == t.type &&
            (n == this.view.docView ||
              "contenteditable" == t.attributeName ||
              ("style" == t.attributeName &&
                !t.oldValue &&
                !t.target.getAttribute("style")))
          )
            return null;
          if (!n || n.ignoreMutation(t)) return null;
          if ("childList" == t.type) {
            for (let n = 0; n < t.addedNodes.length; n++) {
              let r = t.addedNodes[n];
              (e.push(r), 3 == r.nodeType && (this.lastChangedTextNode = r));
            }
            if (
              n.contentDOM &&
              n.contentDOM != n.dom &&
              !n.contentDOM.contains(t.target)
            )
              return { from: n.posBefore, to: n.posAfter };
            let r = t.previousSibling,
              o = t.nextSibling;
            if (tt && et <= 11 && t.addedNodes.length)
              for (let e = 0; e < t.addedNodes.length; e++) {
                let { previousSibling: n, nextSibling: i } = t.addedNodes[e];
                ((!n || Array.prototype.indexOf.call(t.addedNodes, n) < 0) &&
                  (r = n),
                  (!i || Array.prototype.indexOf.call(t.addedNodes, i) < 0) &&
                    (o = i));
              }
            let i = r && r.parentNode == t.target ? B(r) + 1 : 0,
              s = n.localPosFromDOM(t.target, i, -1),
              l =
                o && o.parentNode == t.target
                  ? B(o)
                  : t.target.childNodes.length;
            return { from: s, to: n.localPosFromDOM(t.target, l, 1) };
          }
          return "attributes" == t.type
            ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border }
            : ((this.lastChangedTextNode = t.target),
              {
                from: n.posAtStart,
                to: n.posAtEnd,
                typeOver: t.target.nodeValue == t.oldValue,
              });
        }
      }
      let $n = new WeakMap(),
        Vn = !1;
      function Ln(t, e) {
        let n = e.startContainer,
          r = e.startOffset,
          o = e.endContainer,
          i = e.endOffset,
          s = t.domAtPos(t.state.selection.anchor);
        return (
          J(s.node, s.offset, o, i) && ([n, r, o, i] = [o, i, n, r]),
          { anchorNode: n, anchorOffset: r, focusNode: o, focusOffset: i }
        );
      }
      function Jn(t, e) {
        for (let n = e.parentNode; n && n != t.dom; n = n.parentNode) {
          let e = t.docView.nearestDesc(n, !0);
          if (e && e.node.isBlock) return n;
        }
        return null;
      }
      function jn(t) {
        let e = t.pmViewDesc;
        if (e) return e.parseRule();
        if ("BR" == t.nodeName && t.parentNode) {
          if (st && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
            let t = document.createElement("div");
            return (t.appendChild(document.createElement("li")), { skip: t });
          }
          if (
            t.parentNode.lastChild == t ||
            (st && /^(tr|table)$/i.test(t.parentNode.nodeName))
          )
            return { ignore: !0 };
        } else if ("IMG" == t.nodeName && t.getAttribute("mark-placeholder"))
          return { ignore: !0 };
        return null;
      }
      const Kn =
        /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
      function Wn(t, e, n, r, o) {
        let l =
          t.input.compositionPendingChanges ||
          (t.composing ? t.input.compositionID : 0);
        if (((t.input.compositionPendingChanges = 0), e < 0)) {
          let e =
              t.input.lastSelectionTime > Date.now() - 50
                ? t.input.lastSelectionOrigin
                : null,
            n = re(t, e);
          if (n && !t.state.selection.eq(n)) {
            if (
              ot &&
              dt &&
              13 === t.input.lastKeyCode &&
              Date.now() - 100 < t.input.lastKeyCodeTime &&
              t.someProp("handleKeyDown", (e) => e(t, U(13, "Enter")))
            )
              return;
            let r = t.state.tr.setSelection(n);
            ("pointer" == e
              ? r.setMeta("pointer", !0)
              : "key" == e && r.scrollIntoView(),
              l && r.setMeta("composition", l),
              t.dispatch(r));
          }
          return;
        }
        let a = t.state.doc.resolve(e),
          c = a.sharedDepth(n);
        ((e = a.before(c + 1)), (n = t.state.doc.resolve(n).after(c + 1)));
        let d,
          h,
          p = t.state.selection,
          u = (function (t, e, n) {
            let r,
              {
                node: o,
                fromOffset: s,
                toOffset: l,
                from: a,
                to: c,
              } = t.docView.parseRange(e, n),
              d = t.domSelectionRange(),
              h = d.anchorNode;
            if (
              (h &&
                t.dom.contains(1 == h.nodeType ? h : h.parentNode) &&
                ((r = [{ node: h, offset: d.anchorOffset }]),
                _(d) || r.push({ node: d.focusNode, offset: d.focusOffset })),
              ot && 8 === t.input.lastKeyCode)
            )
              for (let i = l; i > s; i--) {
                let t = o.childNodes[i - 1],
                  e = t.pmViewDesc;
                if ("BR" == t.nodeName && !e) {
                  l = i;
                  break;
                }
                if (!e || e.size) break;
              }
            let p = t.state.doc,
              u = t.someProp("domParser") || i.S4.fromSchema(t.state.schema),
              f = p.resolve(a),
              m = null,
              g = u.parse(o, {
                topNode: f.parent,
                topMatch: f.parent.contentMatchAt(f.index()),
                topOpen: !0,
                from: s,
                to: l,
                preserveWhitespace: "pre" != f.parent.type.whitespace || "full",
                findPositions: r,
                ruleFromNode: jn,
                context: f,
              });
            if (r && null != r[0].pos) {
              let t = r[0].pos,
                e = r[1] && r[1].pos;
              (null == e && (e = t), (m = { anchor: t + a, head: e + a }));
            }
            return { doc: g, sel: m, from: a, to: c };
          })(t, e, n),
          f = t.state.doc,
          m = f.slice(u.from, u.to);
        (8 === t.input.lastKeyCode && Date.now() - 100 < t.input.lastKeyCodeTime
          ? ((d = t.state.selection.to), (h = "end"))
          : ((d = t.state.selection.from), (h = "start")),
          (t.input.lastKeyCode = null));
        let g = (function (t, e, n, r, o) {
          let i = t.findDiffStart(e, n);
          if (null == i) return null;
          let { a: s, b: l } = t.findDiffEnd(e, n + t.size, n + e.size);
          if ("end" == o) {
            r -= s + Math.max(0, i - Math.min(s, l)) - i;
          }
          if (s < i && t.size < e.size) {
            let t = r <= i && r >= s ? i - r : 0;
            ((i -= t),
              i &&
                i < e.size &&
                Un(e.textBetween(i - 1, i + 1)) &&
                (i += t ? 1 : -1),
              (l = i + (l - s)),
              (s = i));
          } else if (l < i) {
            let e = r <= i && r >= l ? i - r : 0;
            ((i -= e),
              i &&
                i < t.size &&
                Un(t.textBetween(i - 1, i + 1)) &&
                (i += e ? 1 : -1),
              (s = i + (s - l)),
              (l = i));
          }
          return { start: i, endA: s, endB: l };
        })(m.content, u.doc.content, u.from, d, h);
        if (
          (g && t.input.domChangeCount++,
          ((lt && t.input.lastIOSEnter > Date.now() - 225) || dt) &&
            o.some((t) => 1 == t.nodeType && !Kn.test(t.nodeName)) &&
            (!g || g.endA >= g.endB) &&
            t.someProp("handleKeyDown", (e) => e(t, U(13, "Enter"))))
        )
          return void (t.input.lastIOSEnter = 0);
        if (!g) {
          if (
            !(
              r &&
              p instanceof s.U3 &&
              !p.empty &&
              p.$head.sameParent(p.$anchor)
            ) ||
            t.composing ||
            (u.sel && u.sel.anchor != u.sel.head)
          ) {
            if (u.sel) {
              let e = qn(t, t.state.doc, u.sel);
              if (e && !e.eq(t.state.selection)) {
                let n = t.state.tr.setSelection(e);
                (l && n.setMeta("composition", l), t.dispatch(n));
              }
            }
            return;
          }
          g = { start: p.from, endA: p.to, endB: p.to };
        }
        (t.state.selection.from < t.state.selection.to &&
          g.start == g.endB &&
          t.state.selection instanceof s.U3 &&
          (g.start > t.state.selection.from &&
          g.start <= t.state.selection.from + 2 &&
          t.state.selection.from >= u.from
            ? (g.start = t.state.selection.from)
            : g.endA < t.state.selection.to &&
              g.endA >= t.state.selection.to - 2 &&
              t.state.selection.to <= u.to &&
              ((g.endB += t.state.selection.to - g.endA),
              (g.endA = t.state.selection.to))),
          tt &&
            et <= 11 &&
            g.endB == g.start + 1 &&
            g.endA == g.start &&
            g.start > u.from &&
            " \xa0" ==
              u.doc.textBetween(g.start - u.from - 1, g.start - u.from + 1) &&
            (g.start--, g.endA--, g.endB--));
        let y = u.doc.resolveNoCache(g.start - u.from),
          v = u.doc.resolveNoCache(g.endB - u.from),
          w = f.resolve(g.start),
          b = y.sameParent(v) && y.parent.inlineContent && w.end() >= g.endA;
        if (
          ((lt &&
            t.input.lastIOSEnter > Date.now() - 225 &&
            (!b || o.some((t) => "DIV" == t.nodeName || "P" == t.nodeName))) ||
            (!b &&
              y.pos < u.doc.content.size &&
              (!y.sameParent(v) || !y.parent.inlineContent) &&
              y.pos < v.pos &&
              !/\S/.test(u.doc.textBetween(y.pos, v.pos, "", "")))) &&
          t.someProp("handleKeyDown", (e) => e(t, U(13, "Enter")))
        )
          return void (t.input.lastIOSEnter = 0);
        if (
          t.state.selection.anchor > g.start &&
          (function (t, e, n, r, o) {
            if (n - e <= o.pos - r.pos || _n(r, !0, !1) < o.pos) return !1;
            let i = t.resolve(e);
            if (!r.parent.isTextblock) {
              let t = i.nodeAfter;
              return null != t && n == e + t.nodeSize;
            }
            if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock)
              return !1;
            let s = t.resolve(_n(i, !0, !0));
            return (
              !(!s.parent.isTextblock || s.pos > n || _n(s, !0, !1) < n) &&
              r.parent.content.cut(r.parentOffset).eq(s.parent.content)
            );
          })(f, g.start, g.endA, y, v) &&
          t.someProp("handleKeyDown", (e) => e(t, U(8, "Backspace")))
        )
          return void (dt && ot && t.domObserver.suppressSelectionUpdates());
        (ot && g.endB == g.start && (t.input.lastChromeDelete = Date.now()),
          dt &&
            !b &&
            y.start() != v.start() &&
            0 == v.parentOffset &&
            y.depth == v.depth &&
            u.sel &&
            u.sel.anchor == u.sel.head &&
            u.sel.head == g.endA &&
            ((g.endB -= 2),
            (v = u.doc.resolveNoCache(g.endB - u.from)),
            setTimeout(() => {
              t.someProp("handleKeyDown", function (e) {
                return e(t, U(13, "Enter"));
              });
            }, 20)));
        let k,
          x = g.start,
          S = g.endA,
          M = (e) => {
            let n =
              e ||
              t.state.tr.replace(
                x,
                S,
                u.doc.slice(g.start - u.from, g.endB - u.from),
              );
            if (u.sel) {
              let e = qn(t, n.doc, u.sel);
              e &&
                !(
                  (ot &&
                    t.composing &&
                    e.empty &&
                    (g.start != g.endB ||
                      t.input.lastChromeDelete < Date.now() - 100) &&
                    (e.head == x || e.head == n.mapping.map(S) - 1)) ||
                  (tt && e.empty && e.head == x)
                ) &&
                n.setSelection(e);
            }
            return (l && n.setMeta("composition", l), n.scrollIntoView());
          };
        if (b)
          if (y.pos == v.pos) {
            tt &&
              et <= 11 &&
              0 == y.parentOffset &&
              (t.domObserver.suppressSelectionUpdates(),
              setTimeout(() => ie(t), 20));
            let e = M(t.state.tr.delete(x, S)),
              n = f.resolve(g.start).marksAcross(f.resolve(g.endA));
            (n && e.ensureMarks(n), t.dispatch(e));
          } else if (
            g.endA == g.endB &&
            (k = (function (t, e) {
              let n,
                r,
                o,
                s = t.firstChild.marks,
                l = e.firstChild.marks,
                a = s,
                c = l;
              for (let i = 0; i < l.length; i++) a = l[i].removeFromSet(a);
              for (let i = 0; i < s.length; i++) c = s[i].removeFromSet(c);
              if (1 == a.length && 0 == c.length)
                ((r = a[0]),
                  (n = "add"),
                  (o = (t) => t.mark(r.addToSet(t.marks))));
              else {
                if (0 != a.length || 1 != c.length) return null;
                ((r = c[0]),
                  (n = "remove"),
                  (o = (t) => t.mark(r.removeFromSet(t.marks))));
              }
              let d = [];
              for (let i = 0; i < e.childCount; i++) d.push(o(e.child(i)));
              if (i.FK.from(d).eq(t)) return { mark: r, type: n };
            })(
              y.parent.content.cut(y.parentOffset, v.parentOffset),
              w.parent.content.cut(w.parentOffset, g.endA - w.start()),
            ))
          ) {
            let e = M(t.state.tr);
            ("add" == k.type
              ? e.addMark(x, S, k.mark)
              : e.removeMark(x, S, k.mark),
              t.dispatch(e));
          } else if (
            y.parent.child(y.index()).isText &&
            y.index() == v.index() - (v.textOffset ? 0 : 1)
          ) {
            let e = y.parent.textBetween(y.parentOffset, v.parentOffset),
              n = () => M(t.state.tr.insertText(e, x, S));
            t.someProp("handleTextInput", (r) => r(t, x, S, e, n)) ||
              t.dispatch(n());
          } else t.dispatch(M());
        else t.dispatch(M());
      }
      function qn(t, e, n) {
        return Math.max(n.anchor, n.head) > e.content.size
          ? null
          : pe(t, e.resolve(n.anchor), e.resolve(n.head));
      }
      function _n(t, e, n) {
        let r = t.depth,
          o = e ? t.end() : t.pos;
        for (; r > 0 && (e || t.indexAfter(r) == t.node(r).childCount); )
          (r--, o++, (e = !1));
        if (n) {
          let e = t.node(r).maybeChild(t.indexAfter(r));
          for (; e && !e.isLeaf; ) ((e = e.firstChild), o++);
        }
        return o;
      }
      function Un(t) {
        if (2 != t.length) return !1;
        let e = t.charCodeAt(0),
          n = t.charCodeAt(1);
        return e >= 56320 && e <= 57343 && n >= 55296 && n <= 56319;
      }
      class Hn {
        constructor(t, e) {
          ((this._root = null),
            (this.focused = !1),
            (this.trackWrites = null),
            (this.mounted = !1),
            (this.markCursor = null),
            (this.cursorWrapper = null),
            (this.lastSelectedViewDesc = void 0),
            (this.input = new Ke()),
            (this.prevDirectPlugins = []),
            (this.pluginViews = []),
            (this.requiresGeckoHackNode = !1),
            (this.dragging = null),
            (this._props = e),
            (this.state = e.state),
            (this.directPlugins = e.plugins || []),
            this.directPlugins.forEach(Qn),
            (this.dispatch = this.dispatch.bind(this)),
            (this.dom = (t && t.mount) || document.createElement("div")),
            t &&
              (t.appendChild
                ? t.appendChild(this.dom)
                : "function" == typeof t
                  ? t(this.dom)
                  : t.mount && (this.mounted = !0)),
            (this.editable = Yn(this)),
            Zn(this),
            (this.nodeViews = Xn(this)),
            (this.docView = Jt(
              this.state.doc,
              Gn(this),
              In(this),
              this.dom,
              this,
            )),
            (this.domObserver = new Bn(this, (t, e, n, r) =>
              Wn(this, t, e, n, r),
            )),
            this.domObserver.start(),
            (function (t) {
              for (let e in Le) {
                let n = Le[e];
                t.dom.addEventListener(
                  e,
                  (t.input.eventHandlers[e] = (e) => {
                    !Ue(t, e) ||
                      _e(t, e) ||
                      (!t.editable && e.type in Je) ||
                      n(t, e);
                  }),
                  je[e] ? { passive: !0 } : void 0,
                );
              }
              (st && t.dom.addEventListener("input", () => null), qe(t));
            })(this),
            this.updatePluginViews());
        }
        get composing() {
          return this.input.composing;
        }
        get props() {
          if (this._props.state != this.state) {
            let t = this._props;
            this._props = {};
            for (let e in t) this._props[e] = t[e];
            this._props.state = this.state;
          }
          return this._props;
        }
        update(t) {
          t.handleDOMEvents != this._props.handleDOMEvents && qe(this);
          let e = this._props;
          ((this._props = t),
            t.plugins &&
              (t.plugins.forEach(Qn), (this.directPlugins = t.plugins)),
            this.updateStateInner(t.state, e));
        }
        setProps(t) {
          let e = {};
          for (let n in this._props) e[n] = this._props[n];
          e.state = this.state;
          for (let n in t) e[n] = t[n];
          this.update(e);
        }
        updateState(t) {
          this.updateStateInner(t, this._props);
        }
        updateStateInner(t, e) {
          var n;
          let r = this.state,
            o = !1,
            i = !1;
          (t.storedMarks && this.composing && (ln(this), (i = !0)),
            (this.state = t));
          let s = r.plugins != t.plugins || this._props.plugins != e.plugins;
          if (
            s ||
            this._props.plugins != e.plugins ||
            this._props.nodeViews != e.nodeViews
          ) {
            let t = Xn(this);
            (function (t, e) {
              let n = 0,
                r = 0;
              for (let o in t) {
                if (t[o] != e[o]) return !0;
                n++;
              }
              for (let o in e) r++;
              return n != r;
            })(t, this.nodeViews) && ((this.nodeViews = t), (o = !0));
          }
          ((s || e.handleDOMEvents != this._props.handleDOMEvents) && qe(this),
            (this.editable = Yn(this)),
            Zn(this));
          let l = In(this),
            a = Gn(this),
            c =
              r.plugins == t.plugins || r.doc.eq(t.doc)
                ? t.scrollToSelection > r.scrollToSelection
                  ? "to selection"
                  : "preserve"
                : "reset",
            d = o || !this.docView.matchesNode(t.doc, a, l);
          (!d && t.selection.eq(r.selection)) || (i = !0);
          let h =
            "preserve" == c &&
            i &&
            null == this.dom.style.overflowAnchor &&
            (function (t) {
              let e,
                n,
                r = t.dom.getBoundingClientRect(),
                o = Math.max(0, r.top);
              for (
                let i = (r.left + r.right) / 2, s = o + 1;
                s < Math.min(innerHeight, r.bottom);
                s += 5
              ) {
                let r = t.root.elementFromPoint(i, s);
                if (!r || r == t.dom || !t.dom.contains(r)) continue;
                let l = r.getBoundingClientRect();
                if (l.top >= o - 20) {
                  ((e = r), (n = l.top));
                  break;
                }
              }
              return { refDOM: e, refTop: n, stack: yt(t.dom) };
            })(this);
          if (i) {
            this.domObserver.stop();
            let e =
              d &&
              (tt || ot) &&
              !this.composing &&
              !r.selection.empty &&
              !t.selection.empty &&
              (function (t, e) {
                let n = Math.min(
                  t.$anchor.sharedDepth(t.head),
                  e.$anchor.sharedDepth(e.head),
                );
                return t.$anchor.start(n) != e.$anchor.start(n);
              })(r.selection, t.selection);
            if (d) {
              let n = ot
                ? (this.trackWrites = this.domSelectionRange().focusNode)
                : null;
              (this.composing && (this.input.compositionNode = an(this)),
                (!o && this.docView.update(t.doc, a, l, this)) ||
                  (this.docView.updateOuterDeco(a),
                  this.docView.destroy(),
                  (this.docView = Jt(t.doc, a, l, this.dom, this))),
                !n ||
                  (this.trackWrites && this.dom.contains(this.trackWrites)) ||
                  (e = !0));
            }
            (e ||
            !(
              this.input.mouseDown &&
              this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
              (function (t) {
                let e = t.docView.domFromPos(t.state.selection.anchor, 0),
                  n = t.domSelectionRange();
                return J(e.node, e.offset, n.anchorNode, n.anchorOffset);
              })(this)
            )
              ? ie(this, e)
              : (de(this, t.selection), this.domObserver.setCurSelection()),
              this.domObserver.start());
          }
          (this.updatePluginViews(r),
            (null === (n = this.dragging) || void 0 === n ? void 0 : n.node) &&
              !r.doc.eq(t.doc) &&
              this.updateDraggedNode(this.dragging, r),
            "reset" == c
              ? (this.dom.scrollTop = 0)
              : "to selection" == c
                ? this.scrollToSelection()
                : h &&
                  (function (t) {
                    let { refDOM: e, refTop: n, stack: r } = t,
                      o = e ? e.getBoundingClientRect().top : 0;
                    vt(r, 0 == o ? 0 : o - n);
                  })(h));
        }
        scrollToSelection() {
          let t = this.domSelectionRange().focusNode;
          if (t && this.dom.contains(1 == t.nodeType ? t : t.parentNode))
            if (this.someProp("handleScrollToSelection", (t) => t(this)));
            else if (this.state.selection instanceof s.nh) {
              let e = this.docView.domAfterPos(this.state.selection.from);
              1 == e.nodeType && gt(this, e.getBoundingClientRect(), t);
            } else gt(this, this.coordsAtPos(this.state.selection.head, 1), t);
          else;
        }
        destroyPluginViews() {
          let t;
          for (; (t = this.pluginViews.pop()); ) t.destroy && t.destroy();
        }
        updatePluginViews(t) {
          if (
            t &&
            t.plugins == this.state.plugins &&
            this.directPlugins == this.prevDirectPlugins
          )
            for (let e = 0; e < this.pluginViews.length; e++) {
              let n = this.pluginViews[e];
              n.update && n.update(this, t);
            }
          else {
            ((this.prevDirectPlugins = this.directPlugins),
              this.destroyPluginViews());
            for (let t = 0; t < this.directPlugins.length; t++) {
              let e = this.directPlugins[t];
              e.spec.view && this.pluginViews.push(e.spec.view(this));
            }
            for (let t = 0; t < this.state.plugins.length; t++) {
              let e = this.state.plugins[t];
              e.spec.view && this.pluginViews.push(e.spec.view(this));
            }
          }
        }
        updateDraggedNode(t, e) {
          let n = t.node,
            r = -1;
          if (this.state.doc.nodeAt(n.from) == n.node) r = n.from;
          else {
            let t = n.from + (this.state.doc.content.size - e.doc.content.size);
            (t > 0 && this.state.doc.nodeAt(t)) == n.node && (r = t);
          }
          this.dragging = new un(
            t.slice,
            t.move,
            r < 0 ? void 0 : s.nh.create(this.state.doc, r),
          );
        }
        someProp(t, e) {
          let n,
            r = this._props && this._props[t];
          if (null != r && (n = e ? e(r) : r)) return n;
          for (let i = 0; i < this.directPlugins.length; i++) {
            let r = this.directPlugins[i].props[t];
            if (null != r && (n = e ? e(r) : r)) return n;
          }
          let o = this.state.plugins;
          if (o)
            for (let i = 0; i < o.length; i++) {
              let r = o[i].props[t];
              if (null != r && (n = e ? e(r) : r)) return n;
            }
        }
        hasFocus() {
          if (tt) {
            let t = this.root.activeElement;
            if (t == this.dom) return !0;
            if (!t || !this.dom.contains(t)) return !1;
            for (; t && this.dom != t && this.dom.contains(t); ) {
              if ("false" == t.contentEditable) return !1;
              t = t.parentElement;
            }
            return !0;
          }
          return this.root.activeElement == this.dom;
        }
        focus() {
          (this.domObserver.stop(),
            this.editable &&
              (function (t) {
                if (t.setActive) return t.setActive();
                if (wt) return t.focus(wt);
                let e = yt(t);
                (t.focus(
                  null == wt
                    ? {
                        get preventScroll() {
                          return ((wt = { preventScroll: !0 }), !0);
                        },
                      }
                    : void 0,
                ),
                  wt || ((wt = !1), vt(e, 0)));
              })(this.dom),
            ie(this),
            this.domObserver.start());
        }
        get root() {
          let t = this._root;
          if (null == t)
            for (let e = this.dom.parentNode; e; e = e.parentNode)
              if (9 == e.nodeType || (11 == e.nodeType && e.host))
                return (
                  e.getSelection ||
                    (Object.getPrototypeOf(e).getSelection = () =>
                      e.ownerDocument.getSelection()),
                  (this._root = e)
                );
          return t || document;
        }
        updateRoot() {
          this._root = null;
        }
        posAtCoords(t) {
          return St(this, t);
        }
        coordsAtPos(t) {
          return Nt(
            this,
            t,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          );
        }
        domAtPos(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.docView.domFromPos(t, e);
        }
        nodeDOM(t) {
          let e = this.docView.descAt(t);
          return e ? e.nodeDOM : null;
        }
        posAtDOM(t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : -1,
            r = this.docView.posFromDOM(t, e, n);
          if (null == r)
            throw new RangeError("DOM position not inside the editor");
          return r;
        }
        endOfTextblock(t, e) {
          return zt(this, e || this.state, t);
        }
        pasteHTML(t, e) {
          return hn(this, "", t, !1, e || new ClipboardEvent("paste"));
        }
        pasteText(t, e) {
          return hn(this, t, null, !0, e || new ClipboardEvent("paste"));
        }
        serializeForClipboard(t) {
          return Te(this, t);
        }
        destroy() {
          this.docView &&
            (!(function (t) {
              t.domObserver.stop();
              for (let e in t.input.eventHandlers)
                t.dom.removeEventListener(e, t.input.eventHandlers[e]);
              (clearTimeout(t.input.composingTimeout),
                clearTimeout(t.input.lastIOSEnterFallbackTimeout));
            })(this),
            this.destroyPluginViews(),
            this.mounted
              ? (this.docView.update(this.state.doc, [], In(this), this),
                (this.dom.textContent = ""))
              : this.dom.parentNode &&
                this.dom.parentNode.removeChild(this.dom),
            this.docView.destroy(),
            (this.docView = null),
            (V = null));
        }
        get isDestroyed() {
          return null == this.docView;
        }
        dispatchEvent(t) {
          return (function (t, e) {
            _e(t, e) ||
              !Le[e.type] ||
              (!t.editable && e.type in Je) ||
              Le[e.type](t, e);
          })(this, t);
        }
        domSelectionRange() {
          let t = this.domSelection();
          return t
            ? (st &&
                11 === this.root.nodeType &&
                (function (t) {
                  let e = t.activeElement;
                  for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement;
                  return e;
                })(this.dom.ownerDocument) == this.dom &&
                (function (t, e) {
                  if (e.getComposedRanges) {
                    let n = e.getComposedRanges(t.root)[0];
                    if (n) return Ln(t, n);
                  }
                  let n;
                  function r(t) {
                    (t.preventDefault(),
                      t.stopImmediatePropagation(),
                      (n = t.getTargetRanges()[0]));
                  }
                  return (
                    t.dom.addEventListener("beforeinput", r, !0),
                    document.execCommand("indent"),
                    t.dom.removeEventListener("beforeinput", r, !0),
                    n ? Ln(t, n) : null
                  );
                })(this, t)) ||
                t
            : {
                focusNode: null,
                focusOffset: 0,
                anchorNode: null,
                anchorOffset: 0,
              };
        }
        domSelection() {
          return this.root.getSelection();
        }
      }
      function Gn(t) {
        let e = Object.create(null);
        return (
          (e.class = "ProseMirror"),
          (e.contenteditable = String(t.editable)),
          t.someProp("attributes", (n) => {
            if (("function" == typeof n && (n = n(t.state)), n))
              for (let t in n)
                "class" == t
                  ? (e.class += " " + n[t])
                  : "style" == t
                    ? (e.style = (e.style ? e.style + ";" : "") + n[t])
                    : e[t] ||
                      "contenteditable" == t ||
                      "nodeName" == t ||
                      (e[t] = String(n[t]));
          }),
          e.translate || (e.translate = "no"),
          [bn.node(0, t.state.doc.content.size, e)]
        );
      }
      function Zn(t) {
        if (t.markCursor) {
          let e = document.createElement("img");
          ((e.className = "ProseMirror-separator"),
            e.setAttribute("mark-placeholder", "true"),
            e.setAttribute("alt", ""),
            (t.cursorWrapper = {
              dom: e,
              deco: bn.widget(t.state.selection.from, e, {
                raw: !0,
                marks: t.markCursor,
              }),
            }));
        } else t.cursorWrapper = null;
      }
      function Yn(t) {
        return !t.someProp("editable", (e) => !1 === e(t.state));
      }
      function Xn(t) {
        let e = Object.create(null);
        function n(t) {
          for (let n in t)
            Object.prototype.hasOwnProperty.call(e, n) || (e[n] = t[n]);
        }
        return (t.someProp("nodeViews", n), t.someProp("markViews", n), e);
      }
      function Qn(t) {
        if (
          t.spec.state ||
          t.spec.filterTransaction ||
          t.spec.appendTransaction
        )
          throw new RangeError(
            "Plugins passed directly to the view must not have a state component",
          );
      }
      Hn.prototype.dispatch = function (t) {
        let e = this._props.dispatchTransaction;
        e ? e.call(this, t) : this.updateState(this.state.apply(t));
      };
      for (
        var tr = {
            8: "Backspace",
            9: "Tab",
            10: "Enter",
            12: "NumLock",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Meta",
            92: "Meta",
            106: "*",
            107: "+",
            108: ",",
            109: "-",
            110: ".",
            111: "/",
            144: "NumLock",
            145: "ScrollLock",
            160: "Shift",
            161: "Shift",
            162: "Control",
            163: "Control",
            164: "Alt",
            165: "Alt",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
          },
          er = {
            48: ")",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            59: ":",
            61: "+",
            173: "_",
            186: ":",
            187: "+",
            188: "<",
            189: "_",
            190: ">",
            191: "?",
            192: "~",
            219: "{",
            220: "|",
            221: "}",
            222: '"',
          },
          nr =
            "undefined" != typeof navigator && /Mac/.test(navigator.platform),
          rr =
            "undefined" != typeof navigator &&
            /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
              navigator.userAgent,
            ),
          or = 0;
        or < 10;
        or++
      )
        tr[48 + or] = tr[96 + or] = String(or);
      for (or = 1; or <= 24; or++) tr[or + 111] = "F" + or;
      for (or = 65; or <= 90; or++)
        ((tr[or] = String.fromCharCode(or + 32)),
          (er[or] = String.fromCharCode(or)));
      for (var ir in tr) er.hasOwnProperty(ir) || (er[ir] = tr[ir]);
      const sr =
          "undefined" != typeof navigator &&
          /Mac|iP(hone|[oa]d)/.test(navigator.platform),
        lr = "undefined" != typeof navigator && /Win/.test(navigator.platform);
      function ar(t) {
        let e,
          n,
          r,
          o,
          i = t.split(/-(?!$)/),
          s = i[i.length - 1];
        "Space" == s && (s = " ");
        for (let l = 0; l < i.length - 1; l++) {
          let t = i[l];
          if (/^(cmd|meta|m)$/i.test(t)) o = !0;
          else if (/^a(lt)?$/i.test(t)) e = !0;
          else if (/^(c|ctrl|control)$/i.test(t)) n = !0;
          else if (/^s(hift)?$/i.test(t)) r = !0;
          else {
            if (!/^mod$/i.test(t))
              throw new Error("Unrecognized modifier name: " + t);
            sr ? (o = !0) : (n = !0);
          }
        }
        return (
          e && (s = "Alt-" + s),
          n && (s = "Ctrl-" + s),
          o && (s = "Meta-" + s),
          r && (s = "Shift-" + s),
          s
        );
      }
      function cr(t, e) {
        let n =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return (
          e.altKey && (t = "Alt-" + t),
          e.ctrlKey && (t = "Ctrl-" + t),
          e.metaKey && (t = "Meta-" + t),
          n && e.shiftKey && (t = "Shift-" + t),
          t
        );
      }
      function dr(t) {
        let e = (function (t) {
          let e = Object.create(null);
          for (let n in t) e[ar(n)] = t[n];
          return e;
        })(t);
        return function (t, n) {
          let r,
            o = (function (t) {
              var e =
                (!(
                  (nr && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey) ||
                  (rr && t.shiftKey && t.key && 1 == t.key.length) ||
                  "Unidentified" == t.key
                ) &&
                  t.key) ||
                (t.shiftKey ? er : tr)[t.keyCode] ||
                t.key ||
                "Unidentified";
              return (
                "Esc" == e && (e = "Escape"),
                "Del" == e && (e = "Delete"),
                "Left" == e && (e = "ArrowLeft"),
                "Up" == e && (e = "ArrowUp"),
                "Right" == e && (e = "ArrowRight"),
                "Down" == e && (e = "ArrowDown"),
                e
              );
            })(n),
            i = e[cr(o, n)];
          if (i && i(t.state, t.dispatch, t)) return !0;
          if (1 == o.length && " " != o) {
            if (n.shiftKey) {
              let r = e[cr(o, n, !1)];
              if (r && r(t.state, t.dispatch, t)) return !0;
            }
            if (
              (n.altKey || n.metaKey || n.ctrlKey) &&
              !(lr && n.ctrlKey && n.altKey) &&
              (r = tr[n.keyCode]) &&
              r != o
            ) {
              let o = e[cr(r, n)];
              if (o && o(t.state, t.dispatch, t)) return !0;
            }
          }
          return !1;
        };
      }
      var hr = Object.defineProperty,
        pr = (t, e) => {
          for (var n in e) hr(t, n, { get: e[n], enumerable: !0 });
        };
      function ur(t) {
        const { state: e, transaction: n } = t;
        let { selection: o } = n,
          { doc: i } = n,
          { storedMarks: s } = n;
        return (0, r.A)(
          (0, r.A)({}, e),
          {},
          {
            apply: e.apply.bind(e),
            applyTransaction: e.applyTransaction.bind(e),
            plugins: e.plugins,
            schema: e.schema,
            reconfigure: e.reconfigure.bind(e),
            toJSON: e.toJSON.bind(e),
            get storedMarks() {
              return s;
            },
            get selection() {
              return o;
            },
            get doc() {
              return i;
            },
            get tr() {
              return ((o = n.selection), (i = n.doc), (s = n.storedMarks), n);
            },
          },
        );
      }
      var fr = class {
          constructor(t) {
            ((this.editor = t.editor),
              (this.rawCommands = this.editor.extensionManager.commands),
              (this.customState = t.state));
          }
          get hasCustomState() {
            return !!this.customState;
          }
          get state() {
            return this.customState || this.editor.state;
          }
          get commands() {
            var t = this;
            const { rawCommands: e, editor: n, state: r } = this,
              { view: o } = n,
              { tr: i } = r,
              s = this.buildProps(i);
            return Object.fromEntries(
              Object.entries(e).map((e) => {
                let [n, r] = e;
                return [
                  n,
                  function () {
                    const e = r(...arguments)(s);
                    return (
                      i.getMeta("preventDispatch") ||
                        t.hasCustomState ||
                        o.dispatch(i),
                      e
                    );
                  },
                ];
              }),
            );
          }
          get chain() {
            return () => this.createChain();
          }
          get can() {
            return () => this.createCan();
          }
          createChain(t) {
            var e = this;
            let n =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            const { rawCommands: o, editor: i, state: s } = this,
              { view: l } = i,
              a = [],
              c = !!t,
              d = t || s.tr,
              h = (0, r.A)(
                (0, r.A)(
                  {},
                  Object.fromEntries(
                    Object.entries(o).map((t) => {
                      let [r, o] = t;
                      return [
                        r,
                        function () {
                          const t = e.buildProps(d, n),
                            r = o(...arguments)(t);
                          return (a.push(r), h);
                        },
                      ];
                    }),
                  ),
                ),
                {},
                {
                  run: () => (
                    c ||
                      !n ||
                      d.getMeta("preventDispatch") ||
                      this.hasCustomState ||
                      l.dispatch(d),
                    a.every((t) => !0 === t)
                  ),
                },
              );
            return h;
          }
          createCan(t) {
            const { rawCommands: e, state: n } = this,
              o = !1,
              i = t || n.tr,
              s = this.buildProps(i, o),
              l = Object.fromEntries(
                Object.entries(e).map((t) => {
                  let [e, n] = t;
                  return [
                    e,
                    function () {
                      return n(...arguments)(
                        (0, r.A)((0, r.A)({}, s), {}, { dispatch: void 0 }),
                      );
                    },
                  ];
                }),
              );
            return (0, r.A)(
              (0, r.A)({}, l),
              {},
              { chain: () => this.createChain(i, o) },
            );
          }
          buildProps(t) {
            let e =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            const { rawCommands: n, editor: r, state: o } = this,
              { view: i } = r,
              s = {
                tr: t,
                editor: r,
                view: i,
                state: ur({ state: o, transaction: t }),
                dispatch: e ? () => {} : void 0,
                chain: () => this.createChain(t, e),
                can: () => this.createCan(t),
                get commands() {
                  return Object.fromEntries(
                    Object.entries(n).map((t) => {
                      let [e, n] = t;
                      return [
                        e,
                        function () {
                          return n(...arguments)(s);
                        },
                      ];
                    }),
                  );
                },
              };
            return s;
          }
        },
        mr = {};
      pr(mr, {
        blur: () => gr,
        clearContent: () => yr,
        clearNodes: () => vr,
        command: () => wr,
        createParagraphNear: () => br,
        cut: () => kr,
        deleteCurrentNode: () => xr,
        deleteNode: () => Mr,
        deleteRange: () => Cr,
        deleteSelection: () => Or,
        enter: () => Nr,
        exitCode: () => Tr,
        extendMarkRange: () => zr,
        first: () => Fr,
        focus: () => jr,
        forEach: () => Kr,
        insertContent: () => Wr,
        insertContentAt: () => Hr,
        joinBackward: () => Yr,
        joinDown: () => Zr,
        joinForward: () => Xr,
        joinItemBackward: () => Qr,
        joinItemForward: () => to,
        joinTextblockBackward: () => eo,
        joinTextblockForward: () => no,
        joinUp: () => Gr,
        keyboardShortcut: () => oo,
        lift: () => so,
        liftEmptyBlock: () => lo,
        liftListItem: () => ao,
        newlineInCode: () => co,
        resetAttributes: () => uo,
        scrollIntoView: () => fo,
        selectAll: () => mo,
        selectNodeBackward: () => go,
        selectNodeForward: () => yo,
        selectParentNode: () => vo,
        selectTextblockEnd: () => wo,
        selectTextblockStart: () => bo,
        setContent: () => xo,
        setMark: () => ci,
        setMeta: () => di,
        setNode: () => hi,
        setNodeSelection: () => pi,
        setTextDirection: () => ui,
        setTextSelection: () => fi,
        sinkListItem: () => mi,
        splitBlock: () => yi,
        splitListItem: () => vi,
        toggleList: () => ki,
        toggleMark: () => xi,
        toggleNode: () => Si,
        toggleWrap: () => Mi,
        undoInputRule: () => Ci,
        unsetAllMarks: () => Oi,
        unsetMark: () => Ni,
        unsetTextDirection: () => Ti,
        updateAttributes: () => Ai,
        wrapIn: () => Ei,
        wrapInList: () => Di,
      });
      var gr = () => (t) => {
          let { editor: e, view: n } = t;
          return (
            requestAnimationFrame(() => {
              var t;
              e.isDestroyed ||
                (n.dom.blur(),
                null == (t = null == window ? void 0 : window.getSelection()) ||
                  t.removeAllRanges());
            }),
            !0
          );
        },
        yr = function () {
          let t =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return (e) => {
            let { commands: n } = e;
            return n.setContent("", { emitUpdate: t });
          };
        },
        vr = () => (t) => {
          let { state: e, tr: n, dispatch: r } = t;
          const { selection: i } = n,
            { ranges: s } = i;
          return (
            !r ||
            (s.forEach((t) => {
              let { $from: r, $to: i } = t;
              e.doc.nodesBetween(r.pos, i.pos, (t, e) => {
                if (t.type.isText) return;
                const { doc: r, mapping: i } = n,
                  s = r.resolve(i.map(e)),
                  l = r.resolve(i.map(e + t.nodeSize)),
                  a = s.blockRange(l);
                if (!a) return;
                const c = (0, o.jP)(a);
                if (t.type.isTextblock) {
                  const { defaultType: t } = s.parent.contentMatchAt(s.index());
                  n.setNodeMarkup(a.start, t);
                }
                (c || 0 === c) && n.lift(a, c);
              });
            }),
            !0)
          );
        },
        wr = (t) => (e) => t(e),
        br = () => (t) => {
          let { state: e, dispatch: n } = t;
          return k(e, n);
        },
        kr = (t, e) => (n) => {
          let { editor: r, tr: o } = n;
          const { state: i } = r,
            l = i.doc.slice(t.from, t.to);
          o.deleteRange(t.from, t.to);
          const a = o.mapping.map(e);
          return (
            o.insert(a, l.content),
            o.setSelection(new s.U3(o.doc.resolve(Math.max(a - 1, 0)))),
            !0
          );
        },
        xr = () => (t) => {
          let { tr: e, dispatch: n } = t;
          const { selection: r } = e,
            o = r.$anchor.node();
          if (o.content.size > 0) return !1;
          const i = e.selection.$anchor;
          for (let s = i.depth; s > 0; s -= 1) {
            if (i.node(s).type === o.type) {
              if (n) {
                const t = i.before(s),
                  n = i.after(s);
                e.delete(t, n).scrollIntoView();
              }
              return !0;
            }
          }
          return !1;
        };
      function Sr(t, e) {
        if ("string" === typeof t) {
          if (!e.nodes[t])
            throw Error(
              "There is no node type named '".concat(
                t,
                "'. Maybe you forgot to add the extension?",
              ),
            );
          return e.nodes[t];
        }
        return t;
      }
      var Mr = (t) => (e) => {
          let { tr: n, state: r, dispatch: o } = e;
          const i = Sr(t, r.schema),
            s = n.selection.$anchor;
          for (let t = s.depth; t > 0; t -= 1) {
            if (s.node(t).type === i) {
              if (o) {
                const e = s.before(t),
                  r = s.after(t);
                n.delete(e, r).scrollIntoView();
              }
              return !0;
            }
          }
          return !1;
        },
        Cr = (t) => (e) => {
          let { tr: n, dispatch: r } = e;
          const { from: o, to: i } = t;
          return (r && n.delete(o, i), !0);
        },
        Or = () => (t) => {
          let { state: e, dispatch: n } = t;
          return l(e, n);
        },
        Nr = () => (t) => {
          let { commands: e } = t;
          return e.keyboardShortcut("Enter");
        },
        Tr = () => (t) => {
          let { state: e, dispatch: n } = t;
          return b(e, n);
        };
      function Ar(t) {
        return "[object RegExp]" === Object.prototype.toString.call(t);
      }
      function Er(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { strict: !0 };
        const r = Object.keys(e);
        return (
          !r.length ||
          r.every((r) =>
            n.strict
              ? e[r] === t[r]
              : Ar(e[r])
                ? e[r].test(t[r])
                : e[r] === t[r],
          )
        );
      }
      function Dr(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return t.find(
          (t) =>
            t.type === e &&
            Er(
              Object.fromEntries(Object.keys(n).map((e) => [e, t.attrs[e]])),
              n,
            ),
        );
      }
      function Rr(t, e) {
        return !!Dr(
          t,
          e,
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        );
      }
      function Ir(t, e, n) {
        var r;
        if (!t || !e) return;
        let o = t.parent.childAfter(t.parentOffset);
        if (
          ((o.node && o.node.marks.some((t) => t.type === e)) ||
            (o = t.parent.childBefore(t.parentOffset)),
          !o.node || !o.node.marks.some((t) => t.type === e))
        )
          return;
        n = n || (null == (r = o.node.marks[0]) ? void 0 : r.attrs);
        if (!Dr([...o.node.marks], e, n)) return;
        let i = o.index,
          s = t.start() + o.offset,
          l = i + 1,
          a = s + o.node.nodeSize;
        for (; i > 0 && Rr([...t.parent.child(i - 1).marks], e, n); )
          ((i -= 1), (s -= t.parent.child(i).nodeSize));
        for (
          ;
          l < t.parent.childCount && Rr([...t.parent.child(l).marks], e, n);
        )
          ((a += t.parent.child(l).nodeSize), (l += 1));
        return { from: s, to: a };
      }
      function Pr(t, e) {
        if ("string" === typeof t) {
          if (!e.marks[t])
            throw Error(
              "There is no mark type named '".concat(
                t,
                "'. Maybe you forgot to add the extension?",
              ),
            );
          return e.marks[t];
        }
        return t;
      }
      var zr = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (n) => {
            let { tr: r, state: o, dispatch: i } = n;
            const l = Pr(t, o.schema),
              { doc: a, selection: c } = r,
              { $from: d, from: h, to: p } = c;
            if (i) {
              const t = Ir(d, l, e);
              if (t && t.from <= h && t.to >= p) {
                const e = s.U3.create(a, t.from, t.to);
                r.setSelection(e);
              }
            }
            return !0;
          };
        },
        Fr = (t) => (e) => {
          const n = "function" === typeof t ? t(e) : t;
          for (let t = 0; t < n.length; t += 1) if (n[t](e)) return !0;
          return !1;
        };
      function Br(t) {
        return t instanceof s.U3;
      }
      function $r() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Math.min(Math.max(t, e), n);
      }
      function Vr(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!e) return null;
        const n = s.LN.atStart(t),
          r = s.LN.atEnd(t);
        if ("start" === e || !0 === e) return n;
        if ("end" === e) return r;
        const o = n.from,
          i = r.to;
        return "all" === e
          ? s.U3.create(t, $r(0, o, i), $r(t.content.size, o, i))
          : s.U3.create(t, $r(e, o, i), $r(e, o, i));
      }
      function Lr() {
        return (
          "Android" === navigator.platform ||
          /android/i.test(navigator.userAgent)
        );
      }
      function Jr() {
        return (
          [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod",
          ].includes(navigator.platform) ||
          (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        );
      }
      var jr = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (n) => {
            let { editor: o, view: i, tr: s, dispatch: l } = n;
            e = (0, r.A)({ scrollIntoView: !0 }, e);
            const a = () => {
              ((Jr() || Lr()) && i.dom.focus(),
                "undefined" === typeof navigator ||
                  !/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  Jr() ||
                  Lr() ||
                  i.dom.focus({ preventScroll: !0 }),
                requestAnimationFrame(() => {
                  o.isDestroyed ||
                    (i.focus(),
                    (null == e ? void 0 : e.scrollIntoView) &&
                      o.commands.scrollIntoView());
                }));
            };
            try {
              if ((i.hasFocus() && null === t) || !1 === t) return !0;
            } catch (h) {
              return !1;
            }
            if (l && null === t && !Br(o.state.selection)) return (a(), !0);
            const c = Vr(s.doc, t) || o.state.selection,
              d = o.state.selection.eq(c);
            return (
              l &&
                (d || s.setSelection(c),
                d && s.storedMarks && s.setStoredMarks(s.storedMarks),
                a()),
              !0
            );
          };
        },
        Kr = (t, e) => (n) =>
          t.every((t, o) => e(t, (0, r.A)((0, r.A)({}, n), {}, { index: o }))),
        Wr = (t, e) => (n) => {
          let { tr: r, commands: o } = n;
          return o.insertContentAt(
            { from: r.selection.from, to: r.selection.to },
            t,
            e,
          );
        },
        qr = (t) => {
          const e = t.childNodes;
          for (let n = e.length - 1; n >= 0; n -= 1) {
            const r = e[n];
            3 === r.nodeType && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue)
              ? t.removeChild(r)
              : 1 === r.nodeType && qr(r);
          }
          return t;
        };
      function _r(t) {
        if ("undefined" === typeof window)
          throw new Error(
            "[tiptap error]: there is no window object available, so this function cannot be used",
          );
        const e = "<body>".concat(t, "</body>"),
          n = new window.DOMParser().parseFromString(e, "text/html").body;
        return qr(n);
      }
      function Ur(t, e, n) {
        if (t instanceof i.bP || t instanceof i.FK) return t;
        n = (0, r.A)({ slice: !0, parseOptions: {} }, n);
        const o = "string" === typeof t;
        if ("object" === typeof t && null !== t)
          try {
            if (Array.isArray(t) && t.length > 0)
              return i.FK.fromArray(t.map((t) => e.nodeFromJSON(t)));
            const r = e.nodeFromJSON(t);
            return (n.errorOnInvalidContent && r.check(), r);
          } catch (s) {
            if (n.errorOnInvalidContent)
              throw new Error("[tiptap error]: Invalid JSON content", {
                cause: s,
              });
            return (
              console.warn(
                "[tiptap warn]: Invalid content.",
                "Passed value:",
                t,
                "Error:",
                s,
              ),
              Ur("", e, n)
            );
          }
        if (o) {
          if (n.errorOnInvalidContent) {
            let r = !1,
              o = "";
            const s = new i.Sj({
              topNode: e.spec.topNode,
              marks: e.spec.marks,
              nodes: e.spec.nodes.append({
                __tiptap__private__unknown__catch__all__node: {
                  content: "inline*",
                  group: "block",
                  parseDOM: [
                    {
                      tag: "*",
                      getAttrs: (t) => (
                        (r = !0),
                        (o = "string" === typeof t ? t : t.outerHTML),
                        null
                      ),
                    },
                  ],
                },
              }),
            });
            if (
              (n.slice
                ? i.S4.fromSchema(s).parseSlice(_r(t), n.parseOptions)
                : i.S4.fromSchema(s).parse(_r(t), n.parseOptions),
              n.errorOnInvalidContent && r)
            )
              throw new Error("[tiptap error]: Invalid HTML content", {
                cause: new Error("Invalid element found: ".concat(o)),
              });
          }
          const r = i.S4.fromSchema(e);
          return n.slice
            ? r.parseSlice(_r(t), n.parseOptions).content
            : r.parse(_r(t), n.parseOptions);
        }
        return Ur("", e, n);
      }
      var Hr = (t, e, n) => (l) => {
          let { tr: a, dispatch: c, editor: d } = l;
          var h;
          if (c) {
            let l;
            n = (0, r.A)(
              {
                parseOptions: d.options.parseOptions,
                updateSelection: !0,
                applyInputRules: !1,
                applyPasteRules: !1,
              },
              n,
            );
            const c = (t) => {
                d.emit("contentError", {
                  editor: d,
                  error: t,
                  disableCollaboration: () => {
                    "collaboration" in d.storage &&
                      "object" === typeof d.storage.collaboration &&
                      d.storage.collaboration &&
                      (d.storage.collaboration.isDisabled = !0);
                  },
                });
              },
              u = (0, r.A)({ preserveWhitespace: "full" }, n.parseOptions);
            if (
              !n.errorOnInvalidContent &&
              !d.options.enableContentCheck &&
              d.options.emitContentError
            )
              try {
                Ur(e, d.schema, { parseOptions: u, errorOnInvalidContent: !0 });
              } catch (p) {
                c(p);
              }
            try {
              l = Ur(e, d.schema, {
                parseOptions: u,
                errorOnInvalidContent:
                  null != (h = n.errorOnInvalidContent)
                    ? h
                    : d.options.enableContentCheck,
              });
            } catch (p) {
              return (c(p), !1);
            }
            let { from: f, to: m } =
                "number" === typeof t
                  ? { from: t, to: t }
                  : { from: t.from, to: t.to },
              g = !0,
              y = !0;
            if (
              (("type" in l ? [l] : l).forEach((t) => {
                (t.check(),
                  (g = !!g && t.isText && 0 === t.marks.length),
                  (y = !!y && t.isBlock));
              }),
              f === m && y)
            ) {
              const { parent: t } = a.doc.resolve(f);
              t.isTextblock &&
                !t.type.spec.code &&
                !t.childCount &&
                ((f -= 1), (m += 1));
            }
            let v;
            if (g) {
              if (Array.isArray(e)) v = e.map((t) => t.text || "").join("");
              else if (e instanceof i.FK) {
                let t = "";
                (e.forEach((e) => {
                  e.text && (t += e.text);
                }),
                  (v = t));
              } else v = "object" === typeof e && e && e.text ? e.text : e;
              a.insertText(v, f, m);
            } else {
              v = l;
              const t = a.doc.resolve(f),
                e = t.node(),
                n = 0 === t.parentOffset,
                r = e.isText || e.isTextblock,
                o = e.content.size > 0;
              (n && r && o && (f = Math.max(0, f - 1)), a.replaceWith(f, m, v));
            }
            (n.updateSelection &&
              (function (t, e, n) {
                const r = t.steps.length - 1;
                if (r < e) return;
                const i = t.steps[r];
                if (!(i instanceof o.Ln || i instanceof o.Wg)) return;
                const l = t.mapping.maps[r];
                let a = 0;
                (l.forEach((t, e, n, r) => {
                  0 === a && (a = r);
                }),
                  t.setSelection(s.LN.near(t.doc.resolve(a), n)));
              })(a, a.steps.length - 1, -1),
              n.applyInputRules &&
                a.setMeta("applyInputRules", { from: f, text: v }),
              n.applyPasteRules &&
                a.setMeta("applyPasteRules", { from: f, text: v }));
          }
          return !0;
        },
        Gr = () => (t) => {
          let { state: e, dispatch: n } = t;
          return ((t, e) => {
            let n,
              r = t.selection,
              i = r instanceof s.nh;
            if (i) {
              if (r.node.isTextblock || !(0, o.n9)(t.doc, r.from)) return !1;
              n = r.from;
            } else if (((n = (0, o.N0)(t.doc, r.from, -1)), null == n))
              return !1;
            if (e) {
              let r = t.tr.join(n);
              (i &&
                r.setSelection(
                  s.nh.create(r.doc, n - t.doc.resolve(n).nodeBefore.nodeSize),
                ),
                e(r.scrollIntoView()));
            }
            return !0;
          })(e, n);
        },
        Zr = () => (t) => {
          let { state: e, dispatch: n } = t;
          return ((t, e) => {
            let n,
              r = t.selection;
            if (r instanceof s.nh) {
              if (r.node.isTextblock || !(0, o.n9)(t.doc, r.to)) return !1;
              n = r.to;
            } else if (((n = (0, o.N0)(t.doc, r.to, 1)), null == n)) return !1;
            return (e && e(t.tr.join(n).scrollIntoView()), !0);
          })(e, n);
        },
        Yr = () => (t) => {
          let { state: e, dispatch: n } = t;
          return c(e, n);
        },
        Xr = () => (t) => {
          let { state: e, dispatch: n } = t;
          return m(e, n);
        },
        Qr = () => (t) => {
          let { state: e, dispatch: n, tr: r } = t;
          try {
            const t = (0, o.N0)(e.doc, e.selection.$from.pos, -1);
            return null !== t && void 0 !== t && (r.join(t, 2), n && n(r), !0);
          } catch (i) {
            return !1;
          }
        },
        to = () => (t) => {
          let { state: e, dispatch: n, tr: r } = t;
          try {
            const t = (0, o.N0)(e.doc, e.selection.$from.pos, 1);
            return null !== t && void 0 !== t && (r.join(t, 2), n && n(r), !0);
          } catch (i) {
            return !1;
          }
        },
        eo = () => (t) => {
          let { state: e, dispatch: n } = t;
          return ((t, e, n) => {
            let r = a(t, n);
            if (!r) return !1;
            let o = u(r);
            return !!o && d(t, o, e);
          })(e, n);
        },
        no = () => (t) => {
          let { state: e, dispatch: n } = t;
          return ((t, e, n) => {
            let r = f(t, n);
            if (!r) return !1;
            let o = y(r);
            return !!o && d(t, o, e);
          })(e, n);
        };
      function ro() {
        return (
          "undefined" !== typeof navigator && /Mac/.test(navigator.platform)
        );
      }
      var oo = (t) => (e) => {
        let { editor: n, view: r, tr: o, dispatch: i } = e;
        const s = (function (t) {
            const e = t.split(/-(?!$)/);
            let n,
              r,
              o,
              i,
              s = e[e.length - 1];
            "Space" === s && (s = " ");
            for (let l = 0; l < e.length - 1; l += 1) {
              const t = e[l];
              if (/^(cmd|meta|m)$/i.test(t)) i = !0;
              else if (/^a(lt)?$/i.test(t)) n = !0;
              else if (/^(c|ctrl|control)$/i.test(t)) r = !0;
              else if (/^s(hift)?$/i.test(t)) o = !0;
              else {
                if (!/^mod$/i.test(t))
                  throw new Error("Unrecognized modifier name: ".concat(t));
                Jr() || ro() ? (i = !0) : (r = !0);
              }
            }
            return (
              n && (s = "Alt-".concat(s)),
              r && (s = "Ctrl-".concat(s)),
              i && (s = "Meta-".concat(s)),
              o && (s = "Shift-".concat(s)),
              s
            );
          })(t).split(/-(?!$)/),
          l = s.find((t) => !["Alt", "Ctrl", "Meta", "Shift"].includes(t)),
          a = new KeyboardEvent("keydown", {
            key: "Space" === l ? " " : l,
            altKey: s.includes("Alt"),
            ctrlKey: s.includes("Ctrl"),
            metaKey: s.includes("Meta"),
            shiftKey: s.includes("Shift"),
            bubbles: !0,
            cancelable: !0,
          }),
          c = n.captureTransaction(() => {
            r.someProp("handleKeyDown", (t) => t(r, a));
          });
        return (
          null == c ||
            c.steps.forEach((t) => {
              const e = t.map(o.mapping);
              e && i && o.maybeStep(e);
            }),
          !0
        );
      };
      function io(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const { from: r, to: o, empty: i } = t.selection,
          s = e ? Sr(e, t.schema) : null,
          l = [];
        t.doc.nodesBetween(r, o, (t, e) => {
          if (t.isText) return;
          const n = Math.max(r, e),
            i = Math.min(o, e + t.nodeSize);
          l.push({ node: t, from: n, to: i });
        });
        const a = o - r,
          c = l
            .filter((t) => !s || s.name === t.node.type.name)
            .filter((t) => Er(t.node.attrs, n, { strict: !1 }));
        if (i) return !!c.length;
        return c.reduce((t, e) => t + e.to - e.from, 0) >= a;
      }
      var so = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (n) => {
            let { state: r, dispatch: i } = n;
            return (
              !!io(r, Sr(t, r.schema), e) &&
              ((t, e) => {
                let { $from: n, $to: r } = t.selection,
                  i = n.blockRange(r),
                  s = i && (0, o.jP)(i);
                return (
                  null != s && (e && e(t.tr.lift(i, s).scrollIntoView()), !0)
                );
              })(r, i)
            );
          };
        },
        lo = () => (t) => {
          let { state: e, dispatch: n } = t;
          return x(e, n);
        },
        ao = (t) => (e) => {
          let { state: n, dispatch: r } = e;
          return F(Sr(t, n.schema))(n, r);
        },
        co = () => (t) => {
          let { state: e, dispatch: n } = t;
          return v(e, n);
        };
      function ho(t, e) {
        return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
      }
      function po(t, e) {
        const n = "string" === typeof e ? [e] : e;
        return Object.keys(t).reduce(
          (e, r) => (n.includes(r) || (e[r] = t[r]), e),
          {},
        );
      }
      var uo = (t, e) => (n) => {
          let { tr: r, state: o, dispatch: i } = n,
            s = null,
            l = null;
          const a = ho("string" === typeof t ? t : t.name, o.schema);
          if (!a) return !1;
          ("node" === a && (s = Sr(t, o.schema)),
            "mark" === a && (l = Pr(t, o.schema)));
          let c = !1;
          return (
            r.selection.ranges.forEach((t) => {
              o.doc.nodesBetween(t.$from.pos, t.$to.pos, (t, n) => {
                (s &&
                  s === t.type &&
                  ((c = !0), i && r.setNodeMarkup(n, void 0, po(t.attrs, e))),
                  l &&
                    t.marks.length &&
                    t.marks.forEach((o) => {
                      l === o.type &&
                        ((c = !0),
                        i &&
                          r.addMark(
                            n,
                            n + t.nodeSize,
                            l.create(po(o.attrs, e)),
                          ));
                    }));
              });
            }),
            c
          );
        },
        fo = () => (t) => {
          let { tr: e, dispatch: n } = t;
          return (n && e.scrollIntoView(), !0);
        },
        mo = () => (t) => {
          let { tr: e, dispatch: n } = t;
          if (n) {
            const t = new s.i5(e.doc);
            e.setSelection(t);
          }
          return !0;
        },
        go = () => (t) => {
          let { state: e, dispatch: n } = t;
          return p(e, n);
        },
        yo = () => (t) => {
          let { state: e, dispatch: n } = t;
          return g(e, n);
        },
        vo = () => (t) => {
          let { state: e, dispatch: n } = t;
          return ((t, e) => {
            let n,
              { $from: r, to: o } = t.selection,
              i = r.sharedDepth(o);
            return (
              0 != i &&
              ((n = r.before(i)),
              e && e(t.tr.setSelection(s.nh.create(t.doc, n))),
              !0)
            );
          })(e, n);
        },
        wo = () => (t) => {
          let { state: e, dispatch: n } = t;
          return T(e, n);
        },
        bo = () => (t) => {
          let { state: e, dispatch: n } = t;
          return N(e, n);
        };
      function ko(t, e) {
        return Ur(t, e, {
          slice: !1,
          parseOptions:
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          errorOnInvalidContent: (arguments.length > 3 &&
          void 0 !== arguments[3]
            ? arguments[3]
            : {}
          ).errorOnInvalidContent,
        });
      }
      var xo = function (t) {
        let {
          errorOnInvalidContent: e,
          emitUpdate: n = !0,
          parseOptions: r = {},
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (o) => {
          let { editor: i, tr: s, dispatch: l, commands: a } = o;
          const { doc: c } = s;
          if ("full" !== r.preserveWhitespace) {
            const o = ko(t, i.schema, r, {
              errorOnInvalidContent:
                null != e ? e : i.options.enableContentCheck,
            });
            return (
              l &&
                s
                  .replaceWith(0, c.content.size, o)
                  .setMeta("preventUpdate", !n),
              !0
            );
          }
          return (
            l && s.setMeta("preventUpdate", !n),
            a.insertContentAt({ from: 0, to: c.content.size }, t, {
              parseOptions: r,
              errorOnInvalidContent:
                null != e ? e : i.options.enableContentCheck,
            })
          );
        };
      };
      function So(t, e) {
        const n = Pr(e, t.schema),
          { from: o, to: i, empty: s } = t.selection,
          l = [];
        s
          ? (t.storedMarks && l.push(...t.storedMarks),
            l.push(...t.selection.$head.marks()))
          : t.doc.nodesBetween(o, i, (t) => {
              l.push(...t.marks);
            });
        const a = l.find((t) => t.type.name === n.name);
        return a ? (0, r.A)({}, a.attrs) : {};
      }
      function Mo(t, e) {
        const n = new o.dL(t);
        return (
          e.forEach((t) => {
            t.steps.forEach((t) => {
              n.step(t);
            });
          }),
          n
        );
      }
      function Co(t, e, n) {
        const r = [];
        return (
          t.nodesBetween(e.from, e.to, (t, e) => {
            n(t) && r.push({ node: t, pos: e });
          }),
          r
        );
      }
      function Oo(t) {
        return (e) =>
          (function (t, e) {
            for (let n = t.depth; n > 0; n -= 1) {
              const r = t.node(n);
              if (e(r))
                return {
                  pos: n > 0 ? t.before(n) : 0,
                  start: t.start(n),
                  depth: n,
                  node: r,
                };
            }
          })(e.$from, t);
      }
      function No(t, e, n) {
        if (void 0 === t.config[e] && t.parent) return No(t.parent, e, n);
        if ("function" === typeof t.config[e]) {
          return t.config[e].bind(
            (0, r.A)(
              (0, r.A)({}, n),
              {},
              { parent: t.parent ? No(t.parent, e, n) : null },
            ),
          );
        }
        return t.config[e];
      }
      function To(t) {
        return t
          .map((t) => {
            const e = No(t, "addExtensions", {
              name: t.name,
              options: t.options,
              storage: t.storage,
            });
            return e ? [t, ...To(e())] : t;
          })
          .flat(10);
      }
      function Ao(t, e) {
        const n = i.ZF.fromSchema(e).serializeFragment(t),
          r = document.implementation.createHTMLDocument().createElement("div");
        return (r.appendChild(n), r.innerHTML);
      }
      function Eo(t) {
        return "function" === typeof t;
      }
      function Do(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : void 0;
        if (Eo(t)) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
            o < n;
            o++
          )
            r[o - 2] = arguments[o];
          return e ? t.bind(e)(...r) : t(...r);
        }
        return t;
      }
      function Ro(t) {
        return {
          baseExtensions: t.filter((t) => "extension" === t.type),
          nodeExtensions: t.filter((t) => "node" === t.type),
          markExtensions: t.filter((t) => "mark" === t.type),
        };
      }
      function Io(t) {
        const e = [],
          { nodeExtensions: n, markExtensions: o } = Ro(t),
          i = [...n, ...o],
          s = {
            default: null,
            validate: void 0,
            rendered: !0,
            renderHTML: null,
            parseHTML: null,
            keepOnSplit: !0,
            isRequired: !1,
          };
        return (
          t.forEach((t) => {
            const n = No(t, "addGlobalAttributes", {
              name: t.name,
              options: t.options,
              storage: t.storage,
              extensions: i,
            });
            if (!n) return;
            n().forEach((t) => {
              t.types.forEach((n) => {
                Object.entries(t.attributes).forEach((t) => {
                  let [o, i] = t;
                  e.push({
                    type: n,
                    name: o,
                    attribute: (0, r.A)((0, r.A)({}, s), i),
                  });
                });
              });
            });
          }),
          i.forEach((t) => {
            const n = { name: t.name, options: t.options, storage: t.storage },
              o = No(t, "addAttributes", n);
            if (!o) return;
            const i = o();
            Object.entries(i).forEach((n) => {
              let [o, i] = n;
              const l = (0, r.A)((0, r.A)({}, s), i);
              ("function" === typeof (null == l ? void 0 : l.default) &&
                (l.default = l.default()),
                (null == l ? void 0 : l.isRequired) &&
                  void 0 === (null == l ? void 0 : l.default) &&
                  delete l.default,
                e.push({ type: t.name, name: o, attribute: l }));
            });
          }),
          e
        );
      }
      function Po() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return e
          .filter((t) => !!t)
          .reduce((t, e) => {
            const n = (0, r.A)({}, t);
            return (
              Object.entries(e).forEach((t) => {
                let [e, r] = t;
                if (n[e])
                  if ("class" === e) {
                    const t = r ? String(r).split(" ") : [],
                      o = n[e] ? n[e].split(" ") : [],
                      i = t.filter((t) => !o.includes(t));
                    n[e] = [...o, ...i].join(" ");
                  } else if ("style" === e) {
                    const t = r
                        ? r
                            .split(";")
                            .map((t) => t.trim())
                            .filter(Boolean)
                        : [],
                      o = n[e]
                        ? n[e]
                            .split(";")
                            .map((t) => t.trim())
                            .filter(Boolean)
                        : [],
                      i = new Map();
                    (o.forEach((t) => {
                      const [e, n] = t.split(":").map((t) => t.trim());
                      i.set(e, n);
                    }),
                      t.forEach((t) => {
                        const [e, n] = t.split(":").map((t) => t.trim());
                        i.set(e, n);
                      }),
                      (n[e] = Array.from(i.entries())
                        .map((t) => {
                          let [e, n] = t;
                          return "".concat(e, ": ").concat(n);
                        })
                        .join("; ")));
                  } else n[e] = r;
                else n[e] = r;
              }),
              n
            );
          }, {});
      }
      function zo(t, e) {
        return e
          .filter((e) => e.type === t.type.name)
          .filter((t) => t.attribute.rendered)
          .map((e) =>
            e.attribute.renderHTML
              ? e.attribute.renderHTML(t.attrs) || {}
              : { [e.name]: t.attrs[e.name] },
          )
          .reduce((t, e) => Po(t, e), {});
      }
      function Fo(t, e) {
        return "style" in t
          ? t
          : (0, r.A)(
              (0, r.A)({}, t),
              {},
              {
                getAttrs: (n) => {
                  const o = t.getAttrs ? t.getAttrs(n) : t.attrs;
                  if (!1 === o) return !1;
                  const i = e.reduce((t, e) => {
                    const o = e.attribute.parseHTML
                      ? e.attribute.parseHTML(n)
                      : (function (t) {
                          return "string" !== typeof t
                            ? t
                            : t.match(/^[+-]?(?:\d*\.)?\d+$/)
                              ? Number(t)
                              : "true" === t || ("false" !== t && t);
                        })(n.getAttribute(e.name));
                    return null === o || void 0 === o
                      ? t
                      : (0, r.A)((0, r.A)({}, t), {}, { [e.name]: o });
                  }, {});
                  return (0, r.A)((0, r.A)({}, o), i);
                },
              },
            );
      }
      function Bo(t) {
        return Object.fromEntries(
          Object.entries(t).filter((t) => {
            let [e, n] = t;
            return (
              ("attrs" !== e ||
                !(function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    0 === Object.keys(t).length && t.constructor === Object
                  );
                })(n)) &&
              null !== n &&
              void 0 !== n
            );
          }),
        );
      }
      function $o(t) {
        var e, n;
        const r = {};
        return (
          !(null == (e = null == t ? void 0 : t.attribute)
            ? void 0
            : e.isRequired) &&
            "default" in ((null == t ? void 0 : t.attribute) || {}) &&
            (r.default = t.attribute.default),
          void 0 !==
            (null == (n = null == t ? void 0 : t.attribute)
              ? void 0
              : n.validate) && (r.validate = t.attribute.validate),
          [t.name, r]
        );
      }
      function Vo(t, e) {
        var n;
        const o = Io(t),
          { nodeExtensions: s, markExtensions: l } = Ro(t),
          a = null == (n = s.find((t) => No(t, "topNode"))) ? void 0 : n.name,
          c = Object.fromEntries(
            s.map((n) => {
              const i = o.filter((t) => t.type === n.name),
                s = {
                  name: n.name,
                  options: n.options,
                  storage: n.storage,
                  editor: e,
                },
                l = t.reduce((t, e) => {
                  const o = No(e, "extendNodeSchema", s);
                  return (0, r.A)((0, r.A)({}, t), o ? o(n) : {});
                }, {}),
                a = Bo(
                  (0, r.A)(
                    (0, r.A)({}, l),
                    {},
                    {
                      content: Do(No(n, "content", s)),
                      marks: Do(No(n, "marks", s)),
                      group: Do(No(n, "group", s)),
                      inline: Do(No(n, "inline", s)),
                      atom: Do(No(n, "atom", s)),
                      selectable: Do(No(n, "selectable", s)),
                      draggable: Do(No(n, "draggable", s)),
                      code: Do(No(n, "code", s)),
                      whitespace: Do(No(n, "whitespace", s)),
                      linebreakReplacement: Do(
                        No(n, "linebreakReplacement", s),
                      ),
                      defining: Do(No(n, "defining", s)),
                      isolating: Do(No(n, "isolating", s)),
                      attrs: Object.fromEntries(i.map($o)),
                    },
                  ),
                ),
                c = Do(No(n, "parseHTML", s));
              c && (a.parseDOM = c.map((t) => Fo(t, i)));
              const d = No(n, "renderHTML", s);
              d && (a.toDOM = (t) => d({ node: t, HTMLAttributes: zo(t, i) }));
              const h = No(n, "renderText", s);
              return (h && (a.toText = h), [n.name, a]);
            }),
          ),
          d = Object.fromEntries(
            l.map((n) => {
              const i = o.filter((t) => t.type === n.name),
                s = {
                  name: n.name,
                  options: n.options,
                  storage: n.storage,
                  editor: e,
                },
                l = t.reduce((t, e) => {
                  const o = No(e, "extendMarkSchema", s);
                  return (0, r.A)((0, r.A)({}, t), o ? o(n) : {});
                }, {}),
                a = Bo(
                  (0, r.A)(
                    (0, r.A)({}, l),
                    {},
                    {
                      inclusive: Do(No(n, "inclusive", s)),
                      excludes: Do(No(n, "excludes", s)),
                      group: Do(No(n, "group", s)),
                      spanning: Do(No(n, "spanning", s)),
                      code: Do(No(n, "code", s)),
                      attrs: Object.fromEntries(i.map($o)),
                    },
                  ),
                ),
                c = Do(No(n, "parseHTML", s));
              c && (a.parseDOM = c.map((t) => Fo(t, i)));
              const d = No(n, "renderHTML", s);
              return (
                d &&
                  (a.toDOM = (t) => d({ mark: t, HTMLAttributes: zo(t, i) })),
                [n.name, a]
              );
            }),
          );
        return new i.Sj({ topNode: a, nodes: c, marks: d });
      }
      function Lo(t) {
        return t.sort((t, e) => {
          const n = No(t, "priority") || 100,
            r = No(e, "priority") || 100;
          return n > r ? -1 : n < r ? 1 : 0;
        });
      }
      function Jo(t) {
        const e = Lo(To(t)),
          n = (function (t) {
            const e = t.filter((e, n) => t.indexOf(e) !== n);
            return Array.from(new Set(e));
          })(e.map((t) => t.name));
        return (
          n.length &&
            console.warn(
              "[tiptap warn]: Duplicate extension names found: [".concat(
                n.map((t) => "'".concat(t, "'")).join(", "),
                "]. This can lead to issues.",
              ),
            ),
          e
        );
      }
      function jo(t, e) {
        return Vo(Jo(t), e);
      }
      function Ko(t, e, n) {
        const { from: r, to: o } = e,
          { blockSeparator: i = "\n\n", textSerializers: s = {} } = n || {};
        let l = "";
        return (
          t.nodesBetween(r, o, (t, n, a, c) => {
            var d;
            t.isBlock && n > r && (l += i);
            const h = null == s ? void 0 : s[t.type.name];
            if (h)
              return (
                a &&
                  (l += h({ node: t, pos: n, parent: a, index: c, range: e })),
                !1
              );
            t.isText &&
              (l +=
                null == (d = null == t ? void 0 : t.text)
                  ? void 0
                  : d.slice(Math.max(r, n) - n, o - n));
          }),
          l
        );
      }
      function Wo(t, e) {
        return Ko(t, { from: 0, to: t.content.size }, e);
      }
      function qo(t) {
        return Object.fromEntries(
          Object.entries(t.nodes)
            .filter((t) => {
              let [, e] = t;
              return e.spec.toText;
            })
            .map((t) => {
              let [e, n] = t;
              return [e, n.spec.toText];
            }),
        );
      }
      function _o(t, e) {
        const n = ho("string" === typeof e ? e : e.name, t.schema);
        return "node" === n
          ? (function (t, e) {
              const n = Sr(e, t.schema),
                { from: o, to: i } = t.selection,
                s = [];
              t.doc.nodesBetween(o, i, (t) => {
                s.push(t);
              });
              const l = s.reverse().find((t) => t.type.name === n.name);
              return l ? (0, r.A)({}, l.attrs) : {};
            })(t, e)
          : "mark" === n
            ? So(t, e)
            : {};
      }
      function Uo(t) {
        const e = (function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : JSON.stringify;
          const n = {};
          return t.filter((t) => {
            const r = e(t);
            return !Object.prototype.hasOwnProperty.call(n, r) && (n[r] = !0);
          });
        })(t);
        return 1 === e.length
          ? e
          : e.filter((t, n) => {
              const r = e.filter((t, e) => e !== n);
              return !r.some(
                (e) =>
                  t.oldRange.from >= e.oldRange.from &&
                  t.oldRange.to <= e.oldRange.to &&
                  t.newRange.from >= e.newRange.from &&
                  t.newRange.to <= e.newRange.to,
              );
            });
      }
      function Ho(t) {
        const { mapping: e, steps: n } = t,
          r = [];
        return (
          e.maps.forEach((t, o) => {
            const i = [];
            if (t.ranges.length)
              t.forEach((t, e) => {
                i.push({ from: t, to: e });
              });
            else {
              const { from: t, to: e } = n[o];
              if (void 0 === t || void 0 === e) return;
              i.push({ from: t, to: e });
            }
            i.forEach((t) => {
              let { from: n, to: i } = t;
              const s = e.slice(o).map(n, -1),
                l = e.slice(o).map(i),
                a = e.invert().map(s, -1),
                c = e.invert().map(l);
              r.push({
                oldRange: { from: a, to: c },
                newRange: { from: s, to: l },
              });
            });
          }),
          Uo(r)
        );
      }
      function Go(t, e, n) {
        const o = [];
        return (
          t === e
            ? n
                .resolve(t)
                .marks()
                .forEach((e) => {
                  const i = Ir(n.resolve(t), e.type);
                  i && o.push((0, r.A)({ mark: e }, i));
                })
            : n.nodesBetween(t, e, (t, e) => {
                t &&
                  void 0 !== (null == t ? void 0 : t.nodeSize) &&
                  o.push(
                    ...t.marks.map((n) => ({
                      from: e,
                      to: e + t.nodeSize,
                      mark: n,
                    })),
                  );
              }),
          o
        );
      }
      var Zo = function (t, e, n) {
        let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20;
        const o = t.doc.resolve(n);
        let i = r,
          s = null;
        for (; i > 0 && null === s; ) {
          const t = o.node(i);
          (null == t ? void 0 : t.type.name) === e ? (s = t) : (i -= 1);
        }
        return [s, i];
      };
      function Yo(t, e) {
        return e.nodes[t] || e.marks[t] || null;
      }
      function Xo(t, e, n) {
        return Object.fromEntries(
          Object.entries(n).filter((n) => {
            let [r] = n;
            const o = t.find((t) => t.type === e && t.name === r);
            return !!o && o.attribute.keepOnSplit;
          }),
        );
      }
      function Qo(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const { empty: r, ranges: o } = t.selection,
          i = e ? Pr(e, t.schema) : null;
        if (r)
          return !!(t.storedMarks || t.selection.$from.marks())
            .filter((t) => !i || i.name === t.type.name)
            .find((t) => Er(t.attrs, n, { strict: !1 }));
        let s = 0;
        const l = [];
        if (
          (o.forEach((e) => {
            let { $from: n, $to: r } = e;
            const o = n.pos,
              i = r.pos;
            t.doc.nodesBetween(o, i, (t, e) => {
              if (!t.isText && !t.marks.length) return;
              const n = Math.max(o, e),
                r = Math.min(i, e + t.nodeSize);
              ((s += r - n),
                l.push(...t.marks.map((t) => ({ mark: t, from: n, to: r }))));
            });
          }),
          0 === s)
        )
          return !1;
        const a = l
            .filter((t) => !i || i.name === t.mark.type.name)
            .filter((t) => Er(t.mark.attrs, n, { strict: !1 }))
            .reduce((t, e) => t + e.to - e.from, 0),
          c = l
            .filter((t) => !i || (t.mark.type !== i && t.mark.type.excludes(i)))
            .reduce((t, e) => t + e.to - e.from, 0);
        return (a > 0 ? a + c : a) >= s;
      }
      var ti = (t, e) => {
          const { $from: n, $to: r, $anchor: o } = t.selection;
          if (e) {
            const n = Oo((t) => t.type.name === e)(t.selection);
            if (!n) return !1;
            const r = t.doc.resolve(n.pos + 1);
            return o.pos + 1 === r.end();
          }
          return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos);
        },
        ei = (t) => {
          const { $from: e, $to: n } = t.selection;
          return !(e.parentOffset > 0 || e.pos !== n.pos);
        };
      function ni(t, e) {
        return Array.isArray(e)
          ? e.some((e) => ("string" === typeof e ? e : e.name) === t.name)
          : e;
      }
      function ri(t, e) {
        const { nodeExtensions: n } = Ro(e),
          r = n.find((e) => e.name === t);
        if (!r) return !1;
        const o = Do(
          No(r, "group", {
            name: r.name,
            options: r.options,
            storage: r.storage,
          }),
        );
        return "string" === typeof o && o.split(" ").includes("list");
      }
      function oi(t) {
        let { checkChildren: e = !0, ignoreWhitespace: n = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var r;
        if (n) {
          if ("hardBreak" === t.type.name) return !0;
          if (t.isText) return /^\s*$/m.test(null != (r = t.text) ? r : "");
        }
        if (t.isText) return !t.text;
        if (t.isAtom || t.isLeaf) return !1;
        if (0 === t.content.childCount) return !0;
        if (e) {
          let r = !0;
          return (
            t.content.forEach((t) => {
              !1 !== r &&
                (oi(t, { ignoreWhitespace: n, checkChildren: e }) || (r = !1));
            }),
            r
          );
        }
        return !1;
      }
      function ii(t) {
        return t instanceof s.nh;
      }
      var si = class t {
        constructor(t) {
          this.position = t;
        }
        static fromJSON(e) {
          return new t(e.position);
        }
        toJSON() {
          return { position: this.position };
        }
      };
      function li(t, e) {
        const n = e.mapping.mapResult(t.position);
        return { position: new si(n.pos), mapResult: n };
      }
      function ai(t) {
        return new si(t);
      }
      var ci = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (n) => {
            let { tr: o, state: i, dispatch: s } = n;
            const { selection: l } = o,
              { empty: a, ranges: c } = l,
              d = Pr(t, i.schema);
            if (s)
              if (a) {
                const t = So(i, d);
                o.addStoredMark(d.create((0, r.A)((0, r.A)({}, t), e)));
              } else
                c.forEach((t) => {
                  const n = t.$from.pos,
                    s = t.$to.pos;
                  i.doc.nodesBetween(n, s, (t, i) => {
                    const l = Math.max(i, n),
                      a = Math.min(i + t.nodeSize, s);
                    t.marks.find((t) => t.type === d)
                      ? t.marks.forEach((t) => {
                          d === t.type &&
                            o.addMark(
                              l,
                              a,
                              d.create((0, r.A)((0, r.A)({}, t.attrs), e)),
                            );
                        })
                      : o.addMark(l, a, d.create(e));
                  });
                });
            return (function (t, e, n) {
              var r;
              const { selection: o } = e;
              let i = null;
              if ((Br(o) && (i = o.$cursor), i)) {
                const e = null != (r = t.storedMarks) ? r : i.marks();
                return (
                  i.parent.type.allowsMarkType(n) &&
                  (!!n.isInSet(e) || !e.some((t) => t.type.excludes(n)))
                );
              }
              const { ranges: s } = o;
              return s.some((e) => {
                let { $from: r, $to: o } = e,
                  i =
                    0 === r.depth &&
                    t.doc.inlineContent &&
                    t.doc.type.allowsMarkType(n);
                return (
                  t.doc.nodesBetween(r.pos, o.pos, (t, e, r) => {
                    if (i) return !1;
                    if (t.isInline) {
                      const e = !r || r.type.allowsMarkType(n),
                        o =
                          !!n.isInSet(t.marks) ||
                          !t.marks.some((t) => t.type.excludes(n));
                      i = e && o;
                    }
                    return !i;
                  }),
                  i
                );
              });
            })(i, o, d);
          };
        },
        di = (t, e) => (n) => {
          let { tr: r } = n;
          return (r.setMeta(t, e), !0);
        },
        hi = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (n) => {
            let { state: o, dispatch: i, chain: s } = n;
            const l = Sr(t, o.schema);
            let a;
            return (
              o.selection.$anchor.sameParent(o.selection.$head) &&
                (a = o.selection.$anchor.parent.attrs),
              l.isTextblock
                ? s()
                    .command((t) => {
                      let { commands: n } = t;
                      return (
                        !!A(l, (0, r.A)((0, r.A)({}, a), e))(o) ||
                        n.clearNodes()
                      );
                    })
                    .command((t) => {
                      let { state: n } = t;
                      return A(l, (0, r.A)((0, r.A)({}, a), e))(n, i);
                    })
                    .run()
                : (console.warn(
                    '[tiptap warn]: Currently "setNode()" only supports text block nodes.',
                  ),
                  !1)
            );
          };
        },
        pi = (t) => (e) => {
          let { tr: n, dispatch: r } = e;
          if (r) {
            const { doc: e } = n,
              r = $r(t, 0, e.content.size),
              o = s.nh.create(e, r);
            n.setSelection(o);
          }
          return !0;
        },
        ui = (t, e) => (n) => {
          let { tr: o, state: i, dispatch: s } = n;
          const { selection: l } = i;
          let a, c;
          return (
            "number" === typeof e
              ? ((a = e), (c = e))
              : e && "from" in e && "to" in e
                ? ((a = e.from), (c = e.to))
                : ((a = l.from), (c = l.to)),
            s &&
              o.doc.nodesBetween(a, c, (e, n) => {
                e.isText ||
                  o.setNodeMarkup(
                    n,
                    void 0,
                    (0, r.A)((0, r.A)({}, e.attrs), {}, { dir: t }),
                  );
              }),
            !0
          );
        },
        fi = (t) => (e) => {
          let { tr: n, dispatch: r } = e;
          if (r) {
            const { doc: e } = n,
              { from: r, to: o } =
                "number" === typeof t ? { from: t, to: t } : t,
              i = s.U3.atStart(e).from,
              l = s.U3.atEnd(e).to,
              a = $r(r, i, l),
              c = $r(o, i, l),
              d = s.U3.create(e, a, c);
            n.setSelection(d);
          }
          return !0;
        },
        mi = (t) => (e) => {
          let { state: n, dispatch: r } = e;
          const s = Sr(t, n.schema);
          return ((l = s),
          function (t, e) {
            let { $from: n, $to: r } = t.selection,
              s = n.blockRange(
                r,
                (t) => t.childCount > 0 && t.firstChild.type == l,
              );
            if (!s) return !1;
            let a = s.startIndex;
            if (0 == a) return !1;
            let c = s.parent,
              d = c.child(a - 1);
            if (d.type != l) return !1;
            if (e) {
              let n = d.lastChild && d.lastChild.type == c.type,
                r = i.FK.from(n ? l.create() : null),
                a = new i.Ji(
                  i.FK.from(l.create(null, i.FK.from(c.type.create(null, r)))),
                  n ? 3 : 1,
                  0,
                ),
                h = s.start,
                p = s.end;
              e(
                t.tr
                  .step(new o.Wg(h - (n ? 3 : 1), p, h, p, a, 1, !0))
                  .scrollIntoView(),
              );
            }
            return !0;
          })(n, r);
          var l;
        };
      function gi(t, e) {
        const n =
          t.storedMarks ||
          (t.selection.$to.parentOffset && t.selection.$from.marks());
        if (n) {
          const r = n.filter((t) =>
            null == e ? void 0 : e.includes(t.type.name),
          );
          t.tr.ensureMarks(r);
        }
      }
      var yi = function () {
          let { keepMarks: t = !0 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (e) => {
            let { tr: n, state: r, dispatch: i, editor: l } = e;
            const { selection: a, doc: c } = n,
              { $from: d, $to: h } = a,
              p = Xo(
                l.extensionManager.attributes,
                d.node().type.name,
                d.node().attrs,
              );
            if (a instanceof s.nh && a.node.isBlock)
              return (
                !(!d.parentOffset || !(0, o.zy)(c, d.pos)) &&
                (i &&
                  (t && gi(r, l.extensionManager.splittableMarks),
                  n.split(d.pos).scrollIntoView()),
                !0)
              );
            if (!d.parent.isBlock) return !1;
            const u = h.parentOffset === h.parent.content.size,
              f =
                0 === d.depth
                  ? void 0
                  : (function (t) {
                      for (let e = 0; e < t.edgeCount; e += 1) {
                        const { type: n } = t.edge(e);
                        if (n.isTextblock && !n.hasRequiredAttrs()) return n;
                      }
                      return null;
                    })(d.node(-1).contentMatchAt(d.indexAfter(-1)));
            let m = u && f ? [{ type: f, attrs: p }] : void 0,
              g = (0, o.zy)(n.doc, n.mapping.map(d.pos), 1, m);
            if (
              (m ||
                g ||
                !(0, o.zy)(
                  n.doc,
                  n.mapping.map(d.pos),
                  1,
                  f ? [{ type: f }] : void 0,
                ) ||
                ((g = !0), (m = f ? [{ type: f, attrs: p }] : void 0)),
              i)
            ) {
              if (
                g &&
                (a instanceof s.U3 && n.deleteSelection(),
                n.split(n.mapping.map(d.pos), 1, m),
                f && !u && !d.parentOffset && d.parent.type !== f)
              ) {
                const t = n.mapping.map(d.before()),
                  e = n.doc.resolve(t);
                d.node(-1).canReplaceWith(e.index(), e.index() + 1, f) &&
                  n.setNodeMarkup(n.mapping.map(d.before()), f);
              }
              (t && gi(r, l.extensionManager.splittableMarks),
                n.scrollIntoView());
            }
            return g;
          };
        },
        vi = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (n) => {
            let { tr: l, state: a, dispatch: c, editor: d } = n;
            var h;
            const p = Sr(t, a.schema),
              { $from: u, $to: f } = a.selection,
              m = a.selection.node;
            if ((m && m.isBlock) || u.depth < 2 || !u.sameParent(f)) return !1;
            const g = u.node(-1);
            if (g.type !== p) return !1;
            const y = d.extensionManager.attributes;
            if (
              0 === u.parent.content.size &&
              u.node(-1).childCount === u.indexAfter(-1)
            ) {
              if (
                2 === u.depth ||
                u.node(-3).type !== p ||
                u.index(-2) !== u.node(-2).childCount - 1
              )
                return !1;
              if (c) {
                let t = i.FK.empty;
                const n = u.index(-1) ? 1 : u.index(-2) ? 2 : 3;
                for (let e = u.depth - n; e >= u.depth - 3; e -= 1)
                  t = i.FK.from(u.node(e).copy(t));
                const o =
                    u.indexAfter(-1) < u.node(-2).childCount
                      ? 1
                      : u.indexAfter(-2) < u.node(-3).childCount
                        ? 2
                        : 3,
                  a = (0, r.A)(
                    (0, r.A)({}, Xo(y, u.node().type.name, u.node().attrs)),
                    e,
                  ),
                  c =
                    (null == (h = p.contentMatch.defaultType)
                      ? void 0
                      : h.createAndFill(a)) || void 0;
                t = t.append(i.FK.from(p.createAndFill(null, c) || void 0));
                const d = u.before(u.depth - (n - 1));
                l.replace(d, u.after(-o), new i.Ji(t, 4 - n, 0));
                let f = -1;
                (l.doc.nodesBetween(d, l.doc.content.size, (t, e) => {
                  if (f > -1) return !1;
                  t.isTextblock && 0 === t.content.size && (f = e + 1);
                }),
                  f > -1 && l.setSelection(s.U3.near(l.doc.resolve(f))),
                  l.scrollIntoView());
              }
              return !0;
            }
            const v =
                f.pos === u.end() ? g.contentMatchAt(0).defaultType : null,
              w = (0, r.A)((0, r.A)({}, Xo(y, g.type.name, g.attrs)), e),
              b = (0, r.A)(
                (0, r.A)({}, Xo(y, u.node().type.name, u.node().attrs)),
                e,
              );
            l.delete(u.pos, f.pos);
            const k = v
              ? [
                  { type: p, attrs: w },
                  { type: v, attrs: b },
                ]
              : [{ type: p, attrs: w }];
            if (!(0, o.zy)(l.doc, u.pos, 2)) return !1;
            if (c) {
              const { selection: t, storedMarks: e } = a,
                { splittableMarks: n } = d.extensionManager,
                r = e || (t.$to.parentOffset && t.$from.marks());
              if ((l.split(u.pos, 2, k).scrollIntoView(), !r || !c)) return !0;
              const o = r.filter((t) => n.includes(t.type.name));
              l.ensureMarks(o);
            }
            return !0;
          };
        },
        wi = (t, e) => {
          const n = Oo((t) => t.type === e)(t.selection);
          if (!n) return !0;
          const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
          if (void 0 === r) return !0;
          const i = t.doc.nodeAt(r);
          return (
            n.node.type !== (null == i ? void 0 : i.type) ||
            !(0, o.n9)(t.doc, n.pos) ||
            (t.join(n.pos), !0)
          );
        },
        bi = (t, e) => {
          const n = Oo((t) => t.type === e)(t.selection);
          if (!n) return !0;
          const r = t.doc.resolve(n.start).after(n.depth);
          if (void 0 === r) return !0;
          const i = t.doc.nodeAt(r);
          return (
            n.node.type !== (null == i ? void 0 : i.type) ||
            !(0, o.n9)(t.doc, r) ||
            (t.join(r), !0)
          );
        },
        ki = function (t, e, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return (o) => {
            let {
              editor: i,
              tr: s,
              state: l,
              dispatch: a,
              chain: c,
              commands: d,
              can: h,
            } = o;
            const { extensions: p, splittableMarks: u } = i.extensionManager,
              f = Sr(t, l.schema),
              m = Sr(e, l.schema),
              { selection: g, storedMarks: y } = l,
              { $from: v, $to: w } = g,
              b = v.blockRange(w),
              k = y || (g.$to.parentOffset && g.$from.marks());
            if (!b) return !1;
            const x = Oo((t) => ri(t.type.name, p))(g);
            if (b.depth >= 1 && x && b.depth - x.depth <= 1) {
              if (x.node.type === f) return d.liftListItem(m);
              if (
                ri(x.node.type.name, p) &&
                f.validContent(x.node.content) &&
                a
              )
                return c()
                  .command(() => (s.setNodeMarkup(x.pos, f), !0))
                  .command(() => wi(s, f))
                  .command(() => bi(s, f))
                  .run();
            }
            return n && k && a
              ? c()
                  .command(() => {
                    const t = h().wrapInList(f, r),
                      e = k.filter((t) => u.includes(t.type.name));
                    return (s.ensureMarks(e), !!t || d.clearNodes());
                  })
                  .wrapInList(f, r)
                  .command(() => wi(s, f))
                  .command(() => bi(s, f))
                  .run()
              : c()
                  .command(() => !!h().wrapInList(f, r) || d.clearNodes())
                  .wrapInList(f, r)
                  .command(() => wi(s, f))
                  .command(() => bi(s, f))
                  .run();
          };
        },
        xi = function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          return (r) => {
            let { state: o, commands: i } = r;
            const { extendEmptyMarkRange: s = !1 } = n,
              l = Pr(t, o.schema);
            return Qo(o, l, e)
              ? i.unsetMark(l, { extendEmptyMarkRange: s })
              : i.setMark(l, e);
          };
        },
        Si = function (t, e) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return (o) => {
            let { state: i, commands: s } = o;
            const l = Sr(t, i.schema),
              a = Sr(e, i.schema),
              c = io(i, l, n);
            let d;
            return (
              i.selection.$anchor.sameParent(i.selection.$head) &&
                (d = i.selection.$anchor.parent.attrs),
              c ? s.setNode(a, d) : s.setNode(l, (0, r.A)((0, r.A)({}, d), n))
            );
          };
        },
        Mi = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (n) => {
            let { state: r, commands: o } = n;
            const i = Sr(t, r.schema);
            return io(r, i, e) ? o.lift(i) : o.wrapIn(i, e);
          };
        },
        Ci = () => (t) => {
          let { state: e, dispatch: n } = t;
          const r = e.plugins;
          for (let o = 0; o < r.length; o += 1) {
            const t = r[o];
            let i;
            if (t.spec.isInputRules && (i = t.getState(e))) {
              if (n) {
                const t = e.tr,
                  n = i.transform;
                for (let e = n.steps.length - 1; e >= 0; e -= 1)
                  t.step(n.steps[e].invert(n.docs[e]));
                if (i.text) {
                  const n = t.doc.resolve(i.from).marks();
                  t.replaceWith(i.from, i.to, e.schema.text(i.text, n));
                } else t.delete(i.from, i.to);
              }
              return !0;
            }
          }
          return !1;
        },
        Oi = () => (t) => {
          let { tr: e, dispatch: n } = t;
          const { selection: r } = e,
            { empty: o, ranges: i } = r;
          return (
            o ||
              (n &&
                i.forEach((t) => {
                  e.removeMark(t.$from.pos, t.$to.pos);
                })),
            !0
          );
        },
        Ni = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (n) => {
            let { tr: r, state: o, dispatch: i } = n;
            var s;
            const { extendEmptyMarkRange: l = !1 } = e,
              { selection: a } = r,
              c = Pr(t, o.schema),
              { $from: d, empty: h, ranges: p } = a;
            if (!i) return !0;
            if (h && l) {
              let { from: t, to: e } = a;
              const n =
                  null == (s = d.marks().find((t) => t.type === c))
                    ? void 0
                    : s.attrs,
                o = Ir(d, c, n);
              (o && ((t = o.from), (e = o.to)), r.removeMark(t, e, c));
            } else
              p.forEach((t) => {
                r.removeMark(t.$from.pos, t.$to.pos, c);
              });
            return (r.removeStoredMark(c), !0);
          };
        },
        Ti = (t) => (e) => {
          let { tr: n, state: o, dispatch: i } = e;
          const { selection: s } = o;
          let l, a;
          return (
            "number" === typeof t
              ? ((l = t), (a = t))
              : t && "from" in t && "to" in t
                ? ((l = t.from), (a = t.to))
                : ((l = s.from), (a = s.to)),
            i &&
              n.doc.nodesBetween(l, a, (t, e) => {
                if (t.isText) return;
                const o = (0, r.A)({}, t.attrs);
                (delete o.dir, n.setNodeMarkup(e, void 0, o));
              }),
            !0
          );
        },
        Ai = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (n) => {
            let { tr: o, state: i, dispatch: s } = n,
              l = null,
              a = null;
            const c = ho("string" === typeof t ? t : t.name, i.schema);
            if (!c) return !1;
            ("node" === c && (l = Sr(t, i.schema)),
              "mark" === c && (a = Pr(t, i.schema)));
            let d = !1;
            return (
              o.selection.ranges.forEach((t) => {
                const n = t.$from.pos,
                  c = t.$to.pos;
                let h, p, u, f;
                (o.selection.empty
                  ? i.doc.nodesBetween(n, c, (t, e) => {
                      l &&
                        l === t.type &&
                        ((d = !0),
                        (u = Math.max(e, n)),
                        (f = Math.min(e + t.nodeSize, c)),
                        (h = e),
                        (p = t));
                    })
                  : i.doc.nodesBetween(n, c, (t, i) => {
                      (i < n &&
                        l &&
                        l === t.type &&
                        ((d = !0),
                        (u = Math.max(i, n)),
                        (f = Math.min(i + t.nodeSize, c)),
                        (h = i),
                        (p = t)),
                        i >= n &&
                          i <= c &&
                          (l &&
                            l === t.type &&
                            ((d = !0),
                            s &&
                              o.setNodeMarkup(
                                i,
                                void 0,
                                (0, r.A)((0, r.A)({}, t.attrs), e),
                              )),
                          a &&
                            t.marks.length &&
                            t.marks.forEach((l) => {
                              if (a === l.type && ((d = !0), s)) {
                                const s = Math.max(i, n),
                                  d = Math.min(i + t.nodeSize, c);
                                o.addMark(
                                  s,
                                  d,
                                  a.create((0, r.A)((0, r.A)({}, l.attrs), e)),
                                );
                              }
                            })));
                    }),
                  p &&
                    (void 0 !== h &&
                      s &&
                      o.setNodeMarkup(
                        h,
                        void 0,
                        (0, r.A)((0, r.A)({}, p.attrs), e),
                      ),
                    a &&
                      p.marks.length &&
                      p.marks.forEach((t) => {
                        a === t.type &&
                          s &&
                          o.addMark(
                            u,
                            f,
                            a.create((0, r.A)((0, r.A)({}, t.attrs), e)),
                          );
                      })));
              }),
              d
            );
          };
        },
        Ei = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (n) => {
            let { state: r, dispatch: i } = n;
            return (function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              return function (n, r) {
                let { $from: i, $to: s } = n.selection,
                  l = i.blockRange(s),
                  a = l && (0, o.oM)(l, t, e);
                return !!a && (r && r(n.tr.wrap(l, a).scrollIntoView()), !0);
              };
            })(Sr(t, r.schema), e)(r, i);
          };
        },
        Di = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (n) => {
            let { state: r, dispatch: o } = n;
            return z(Sr(t, r.schema), e)(r, o);
          };
        },
        Ri = class {
          constructor() {
            this.callbacks = {};
          }
          on(t, e) {
            return (
              this.callbacks[t] || (this.callbacks[t] = []),
              this.callbacks[t].push(e),
              this
            );
          }
          emit(t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            const o = this.callbacks[t];
            return (o && o.forEach((t) => t.apply(this, n)), this);
          }
          off(t, e) {
            const n = this.callbacks[t];
            return (
              n &&
                (e
                  ? (this.callbacks[t] = n.filter((t) => t !== e))
                  : delete this.callbacks[t]),
              this
            );
          }
          once(t, e) {
            var n = this;
            const r = function () {
              n.off(t, r);
              for (
                var o = arguments.length, i = new Array(o), s = 0;
                s < o;
                s++
              )
                i[s] = arguments[s];
              e.apply(n, i);
            };
            return this.on(t, r);
          }
          removeAllListeners() {
            this.callbacks = {};
          }
        },
        Ii = class {
          constructor(t) {
            var e;
            ((this.find = t.find),
              (this.handler = t.handler),
              (this.undoable = null == (e = t.undoable) || e));
          }
        };
      function Pi(t) {
        var e;
        const { editor: n, from: r, to: o, text: i, rules: s, plugin: l } = t,
          { view: a } = n;
        if (a.composing) return !1;
        const c = a.state.doc.resolve(r);
        if (
          c.parent.type.spec.code ||
          (null == (e = c.nodeBefore || c.nodeAfter)
            ? void 0
            : e.marks.find((t) => t.type.spec.code))
        )
          return !1;
        let d = !1;
        const h =
          (function (t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 500,
              n = "";
            const r = t.parentOffset;
            return (
              t.parent.nodesBetween(Math.max(0, r - e), r, (t, e, o, i) => {
                var s, l;
                const a =
                  (null == (l = (s = t.type.spec).toText)
                    ? void 0
                    : l.call(s, { node: t, pos: e, parent: o, index: i })) ||
                  t.textContent ||
                  "%leaf%";
                n += t.isAtom && !t.isText ? a : a.slice(0, Math.max(0, r - e));
              }),
              n
            );
          })(c) + i;
        return (
          s.forEach((t) => {
            if (d) return;
            const e = ((t, e) => {
              if (Ar(e)) return e.exec(t);
              const n = e(t);
              if (!n) return null;
              const r = [n.text];
              return (
                (r.index = n.index),
                (r.input = t),
                (r.data = n.data),
                n.replaceWith &&
                  (n.text.includes(n.replaceWith) ||
                    console.warn(
                      '[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".',
                    ),
                  r.push(n.replaceWith)),
                r
              );
            })(h, t.find);
            if (!e) return;
            const s = a.state.tr,
              c = ur({ state: a.state, transaction: s }),
              p = { from: r - (e[0].length - i.length), to: o },
              {
                commands: u,
                chain: f,
                can: m,
              } = new fr({ editor: n, state: c });
            null !==
              t.handler({
                state: c,
                range: p,
                match: e,
                commands: u,
                chain: f,
                can: m,
              }) &&
              s.steps.length &&
              (t.undoable &&
                s.setMeta(l, { transform: s, from: r, to: o, text: i }),
              a.dispatch(s),
              (d = !0));
          }),
          d
        );
      }
      function zi(t) {
        return (
          "Object" ===
            (function (t) {
              return Object.prototype.toString.call(t).slice(8, -1);
            })(t) &&
          t.constructor === Object &&
          Object.getPrototypeOf(t) === Object.prototype
        );
      }
      function Fi(t, e) {
        const n = (0, r.A)({}, t);
        return (
          zi(t) &&
            zi(e) &&
            Object.keys(e).forEach((r) => {
              zi(e[r]) && zi(t[r]) ? (n[r] = Fi(t[r], e[r])) : (n[r] = e[r]);
            }),
          n
        );
      }
      var Bi = class {
          constructor() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            ((this.type = "extendable"),
              (this.parent = null),
              (this.child = null),
              (this.name = ""),
              (this.config = { name: this.name }),
              (this.config = (0, r.A)((0, r.A)({}, this.config), t)),
              (this.name = this.config.name));
          }
          get options() {
            return (0, r.A)(
              {},
              Do(No(this, "addOptions", { name: this.name })) || {},
            );
          }
          get storage() {
            return (0, r.A)(
              {},
              Do(
                No(this, "addStorage", {
                  name: this.name,
                  options: this.options,
                }),
              ) || {},
            );
          }
          configure() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const e = this.extend(
              (0, r.A)(
                (0, r.A)({}, this.config),
                {},
                { addOptions: () => Fi(this.options, t) },
              ),
            );
            return ((e.name = this.name), (e.parent = this.parent), e);
          }
          extend() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const e = new this.constructor(
              (0, r.A)((0, r.A)({}, this.config), t),
            );
            return (
              (e.parent = this),
              (this.child = e),
              (e.name = "name" in t ? t.name : e.parent.name),
              e
            );
          }
        },
        $i = class t extends Bi {
          constructor() {
            (super(...arguments), (this.type = "mark"));
          }
          static create() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const n = "function" === typeof e ? e() : e;
            return new t(n);
          }
          static handleExit(t) {
            let { editor: e, mark: n } = t;
            const { tr: r } = e.state,
              o = e.state.selection.$from;
            if (o.pos === o.end()) {
              const t = o.marks();
              if (
                !!!t.find((t) => (null == t ? void 0 : t.type.name) === n.name)
              )
                return !1;
              const i = t.find(
                (t) => (null == t ? void 0 : t.type.name) === n.name,
              );
              return (
                i && r.removeStoredMark(i),
                r.insertText(" ", o.pos),
                e.view.dispatch(r),
                !0
              );
            }
            return !1;
          }
          configure(t) {
            return super.configure(t);
          }
          extend(t) {
            const e = "function" === typeof t ? t() : t;
            return super.extend(e);
          }
        };
      var Vi = class {
        constructor(t) {
          ((this.find = t.find), (this.handler = t.handler));
        }
      };
      function Li(t) {
        const {
            editor: e,
            state: n,
            from: r,
            to: o,
            rule: i,
            pasteEvent: s,
            dropEvent: l,
          } = t,
          { commands: a, chain: c, can: d } = new fr({ editor: e, state: n }),
          h = [];
        n.doc.nodesBetween(r, o, (t, e) => {
          var p, u, f, m, g;
          if (
            (null == (u = null == (p = t.type) ? void 0 : p.spec)
              ? void 0
              : u.code) ||
            !(t.isText || t.isTextblock || t.isInline)
          )
            return;
          const y =
              null !=
              (g =
                null != (m = null == (f = t.content) ? void 0 : f.size)
                  ? m
                  : t.nodeSize)
                ? g
                : 0,
            v = Math.max(r, e),
            w = Math.min(o, e + y);
          if (v >= w) return;
          ((t, e, n) => {
            if (Ar(e)) return [...t.matchAll(e)];
            const r = e(t, n);
            return r
              ? r.map((e) => {
                  const n = [e.text];
                  return (
                    (n.index = e.index),
                    (n.input = t),
                    (n.data = e.data),
                    e.replaceWith &&
                      (e.text.includes(e.replaceWith) ||
                        console.warn(
                          '[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".',
                        ),
                      n.push(e.replaceWith)),
                    n
                  );
                })
              : [];
          })(
            t.isText
              ? t.text || ""
              : t.textBetween(v - e, w - e, void 0, "\ufffc"),
            i.find,
            s,
          ).forEach((t) => {
            if (void 0 === t.index) return;
            const e = v + t.index + 1,
              r = e + t[0].length,
              o = { from: n.tr.mapping.map(e), to: n.tr.mapping.map(r) },
              p = i.handler({
                state: n,
                range: o,
                match: t,
                commands: a,
                chain: c,
                can: d,
                pasteEvent: s,
                dropEvent: l,
              });
            h.push(p);
          });
        });
        return h.every((t) => null !== t);
      }
      var Ji = null;
      function ji(t) {
        const { editor: e, rules: n } = t;
        let r,
          o = null,
          l = !1,
          a = !1,
          c =
            "undefined" !== typeof ClipboardEvent
              ? new ClipboardEvent("paste")
              : null;
        try {
          r = "undefined" !== typeof DragEvent ? new DragEvent("drop") : null;
        } catch (h) {
          r = null;
        }
        const d = (t) => {
          let { state: n, from: o, to: i, rule: s, pasteEvt: l } = t;
          const a = n.tr,
            d = ur({ state: n, transaction: a });
          if (
            Li({
              editor: e,
              state: d,
              from: Math.max(o - 1, 0),
              to: i.b - 1,
              rule: s,
              pasteEvent: l,
              dropEvent: r,
            }) &&
            a.steps.length
          ) {
            try {
              r =
                "undefined" !== typeof DragEvent ? new DragEvent("drop") : null;
            } catch (h) {
              r = null;
            }
            return (
              (c =
                "undefined" !== typeof ClipboardEvent
                  ? new ClipboardEvent("paste")
                  : null),
              a
            );
          }
        };
        return n.map(
          (t) =>
            new s.k_({
              view(t) {
                const n = (n) => {
                    var r;
                    ((o = (
                      null == (r = t.dom.parentElement)
                        ? void 0
                        : r.contains(n.target)
                    )
                      ? t.dom.parentElement
                      : null),
                      o && (Ji = e));
                  },
                  r = () => {
                    Ji && (Ji = null);
                  };
                return (
                  window.addEventListener("dragstart", n),
                  window.addEventListener("dragend", r),
                  {
                    destroy() {
                      (window.removeEventListener("dragstart", n),
                        window.removeEventListener("dragend", r));
                    },
                  }
                );
              },
              props: {
                handleDOMEvents: {
                  drop: (t, e) => {
                    if (((a = o === t.dom.parentElement), (r = e), !a)) {
                      const t = Ji;
                      (null == t ? void 0 : t.isEditable) &&
                        setTimeout(() => {
                          const e = t.state.selection;
                          e &&
                            t.commands.deleteRange({ from: e.from, to: e.to });
                        }, 10);
                    }
                    return !1;
                  },
                  paste: (t, e) => {
                    var n;
                    const r =
                      null == (n = e.clipboardData)
                        ? void 0
                        : n.getData("text/html");
                    return (
                      (c = e),
                      (l = !!(null == r
                        ? void 0
                        : r.includes("data-pm-slice"))),
                      !1
                    );
                  },
                },
              },
              appendTransaction: (e, n, r) => {
                const o = e[0],
                  s = "paste" === o.getMeta("uiEvent") && !l,
                  h = "drop" === o.getMeta("uiEvent") && !a,
                  p = o.getMeta("applyPasteRules"),
                  u = !!p;
                if (!s && !h && !u) return;
                if (u) {
                  let { text: e } = p;
                  "string" === typeof e || (e = Ao(i.FK.from(e), r.schema));
                  const { from: n } = p,
                    o = n + e.length,
                    s = ((t) => {
                      var e;
                      const n = new ClipboardEvent("paste", {
                        clipboardData: new DataTransfer(),
                      });
                      return (
                        null == (e = n.clipboardData) ||
                          e.setData("text/html", t),
                        n
                      );
                    })(e);
                  return d({
                    rule: t,
                    state: r,
                    from: n,
                    to: { b: o },
                    pasteEvt: s,
                  });
                }
                const f = n.doc.content.findDiffStart(r.doc.content),
                  m = n.doc.content.findDiffEnd(r.doc.content);
                return "number" === typeof f && m && f !== m.b
                  ? d({ rule: t, state: r, from: f, to: m, pasteEvt: c })
                  : void 0;
              },
            }),
        );
      }
      var Ki = class {
        constructor(t, e) {
          ((this.splittableMarks = []),
            (this.editor = e),
            (this.baseExtensions = t),
            (this.extensions = Jo(t)),
            (this.schema = Vo(this.extensions, e)),
            this.setupExtensions());
        }
        get commands() {
          return this.extensions.reduce((t, e) => {
            const n = No(e, "addCommands", {
              name: e.name,
              options: e.options,
              storage: this.editor.extensionStorage[e.name],
              editor: this.editor,
              type: Yo(e.name, this.schema),
            });
            return n ? (0, r.A)((0, r.A)({}, t), n()) : t;
          }, {});
        }
        get plugins() {
          const { editor: t } = this;
          return Lo([...this.extensions].reverse()).flatMap((e) => {
            const n = {
                name: e.name,
                options: e.options,
                storage: this.editor.extensionStorage[e.name],
                editor: t,
                type: Yo(e.name, this.schema),
              },
              o = [],
              l = No(e, "addKeyboardShortcuts", n);
            let a = {};
            if (
              ("mark" === e.type &&
                No(e, "exitable", n) &&
                (a.ArrowRight = () => $i.handleExit({ editor: t, mark: e })),
              l)
            ) {
              const e = Object.fromEntries(
                Object.entries(l()).map((e) => {
                  let [n, r] = e;
                  return [n, () => r({ editor: t })];
                }),
              );
              a = (0, r.A)((0, r.A)({}, a), e);
            }
            const c = ((d = a), new s.k_({ props: { handleKeyDown: dr(d) } }));
            var d;
            o.push(c);
            const h = No(e, "addInputRules", n);
            if (ni(e, t.options.enableInputRules) && h) {
              const e = h();
              if (e && e.length) {
                const n = (function (t) {
                    const { editor: e, rules: n } = t,
                      r = new s.k_({
                        state: {
                          init: () => null,
                          apply(t, o, s) {
                            const l = t.getMeta(r);
                            if (l) return l;
                            const a = t.getMeta("applyInputRules");
                            return (
                              !!a &&
                                setTimeout(() => {
                                  let { text: t } = a;
                                  "string" === typeof t ||
                                    (t = Ao(i.FK.from(t), s.schema));
                                  const { from: o } = a,
                                    l = o + t.length;
                                  Pi({
                                    editor: e,
                                    from: o,
                                    to: l,
                                    text: t,
                                    rules: n,
                                    plugin: r,
                                  });
                                }),
                              t.selectionSet || t.docChanged ? null : o
                            );
                          },
                        },
                        props: {
                          handleTextInput: (t, o, i, s) =>
                            Pi({
                              editor: e,
                              from: o,
                              to: i,
                              text: s,
                              rules: n,
                              plugin: r,
                            }),
                          handleDOMEvents: {
                            compositionend: (t) => (
                              setTimeout(() => {
                                const { $cursor: o } = t.state.selection;
                                o &&
                                  Pi({
                                    editor: e,
                                    from: o.pos,
                                    to: o.pos,
                                    text: "",
                                    rules: n,
                                    plugin: r,
                                  });
                              }),
                              !1
                            ),
                          },
                          handleKeyDown(t, o) {
                            if ("Enter" !== o.key) return !1;
                            const { $cursor: i } = t.state.selection;
                            return (
                              !!i &&
                              Pi({
                                editor: e,
                                from: i.pos,
                                to: i.pos,
                                text: "\n",
                                rules: n,
                                plugin: r,
                              })
                            );
                          },
                        },
                        isInputRules: !0,
                      });
                    return r;
                  })({ editor: t, rules: e }),
                  r = Array.isArray(n) ? n : [n];
                o.push(...r);
              }
            }
            const p = No(e, "addPasteRules", n);
            if (ni(e, t.options.enablePasteRules) && p) {
              const e = p();
              if (e && e.length) {
                const n = ji({ editor: t, rules: e });
                o.push(...n);
              }
            }
            const u = No(e, "addProseMirrorPlugins", n);
            if (u) {
              const t = u();
              o.push(...t);
            }
            return o;
          });
        }
        get attributes() {
          return Io(this.extensions);
        }
        get nodeViews() {
          const { editor: t } = this,
            { nodeExtensions: e } = Ro(this.extensions);
          return Object.fromEntries(
            e
              .filter((t) => !!No(t, "addNodeView"))
              .map((e) => {
                const n = this.attributes.filter((t) => t.type === e.name),
                  r = {
                    name: e.name,
                    options: e.options,
                    storage: this.editor.extensionStorage[e.name],
                    editor: t,
                    type: Sr(e.name, this.schema),
                  },
                  o = No(e, "addNodeView", r);
                if (!o) return [];
                const i = o();
                if (!i) return [];
                return [
                  e.name,
                  (r, o, s, l, a) => {
                    const c = zo(r, n);
                    return i({
                      node: r,
                      view: o,
                      getPos: s,
                      decorations: l,
                      innerDecorations: a,
                      editor: t,
                      extension: e,
                      HTMLAttributes: c,
                    });
                  },
                ];
              }),
          );
        }
        dispatchTransaction(t) {
          const { editor: e } = this;
          return Lo([...this.extensions].reverse()).reduceRight((t, n) => {
            const r = {
                name: n.name,
                options: n.options,
                storage: this.editor.extensionStorage[n.name],
                editor: e,
                type: Yo(n.name, this.schema),
              },
              o = No(n, "dispatchTransaction", r);
            return o
              ? (e) => {
                  o.call(r, { transaction: e, next: t });
                }
              : t;
          }, t);
        }
        get markViews() {
          const { editor: t } = this,
            { markExtensions: e } = Ro(this.extensions);
          return Object.fromEntries(
            e
              .filter((t) => !!No(t, "addMarkView"))
              .map((e) => {
                const n = this.attributes.filter((t) => t.type === e.name),
                  r = {
                    name: e.name,
                    options: e.options,
                    storage: this.editor.extensionStorage[e.name],
                    editor: t,
                    type: Pr(e.name, this.schema),
                  },
                  o = No(e, "addMarkView", r);
                if (!o) return [];
                return [
                  e.name,
                  (r, i, s) => {
                    const l = zo(r, n);
                    return o()({
                      mark: r,
                      view: i,
                      inline: s,
                      editor: t,
                      extension: e,
                      HTMLAttributes: l,
                      updateAttributes: (e) => {
                        ws(r, t, e);
                      },
                    });
                  },
                ];
              }),
          );
        }
        setupExtensions() {
          const t = this.extensions;
          ((this.editor.extensionStorage = Object.fromEntries(
            t.map((t) => [t.name, t.storage]),
          )),
            t.forEach((t) => {
              var e;
              const n = {
                name: t.name,
                options: t.options,
                storage: this.editor.extensionStorage[t.name],
                editor: this.editor,
                type: Yo(t.name, this.schema),
              };
              if ("mark" === t.type) {
                (null == (e = Do(No(t, "keepOnSplit", n))) || e) &&
                  this.splittableMarks.push(t.name);
              }
              const r = No(t, "onBeforeCreate", n),
                o = No(t, "onCreate", n),
                i = No(t, "onUpdate", n),
                s = No(t, "onSelectionUpdate", n),
                l = No(t, "onTransaction", n),
                a = No(t, "onFocus", n),
                c = No(t, "onBlur", n),
                d = No(t, "onDestroy", n);
              (r && this.editor.on("beforeCreate", r),
                o && this.editor.on("create", o),
                i && this.editor.on("update", i),
                s && this.editor.on("selectionUpdate", s),
                l && this.editor.on("transaction", l),
                a && this.editor.on("focus", a),
                c && this.editor.on("blur", c),
                d && this.editor.on("destroy", d));
            }));
        }
      };
      ((Ki.resolve = Jo), (Ki.sort = Lo), (Ki.flatten = To));
      pr(
        {},
        {
          ClipboardTextSerializer: () => qi,
          Commands: () => _i,
          Delete: () => Ui,
          Drop: () => Hi,
          Editable: () => Gi,
          FocusEvents: () => Yi,
          Keymap: () => Xi,
          Paste: () => Qi,
          Tabindex: () => ts,
          TextDirection: () => es,
          focusEventsPluginKey: () => Zi,
        },
      );
      var Wi = class t extends Bi {
          constructor() {
            (super(...arguments), (this.type = "extension"));
          }
          static create() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const n = "function" === typeof e ? e() : e;
            return new t(n);
          }
          configure(t) {
            return super.configure(t);
          }
          extend(t) {
            const e = "function" === typeof t ? t() : t;
            return super.extend(e);
          }
        },
        qi = Wi.create({
          name: "clipboardTextSerializer",
          addOptions: () => ({ blockSeparator: void 0 }),
          addProseMirrorPlugins() {
            return [
              new s.k_({
                key: new s.hs("clipboardTextSerializer"),
                props: {
                  clipboardTextSerializer: () => {
                    const { editor: t } = this,
                      { state: e, schema: n } = t,
                      { doc: o, selection: i } = e,
                      { ranges: s } = i,
                      l = Math.min(...s.map((t) => t.$from.pos)),
                      a = Math.max(...s.map((t) => t.$to.pos)),
                      c = qo(n);
                    return Ko(
                      o,
                      { from: l, to: a },
                      (0, r.A)(
                        (0, r.A)(
                          {},
                          void 0 !== this.options.blockSeparator
                            ? { blockSeparator: this.options.blockSeparator }
                            : {},
                        ),
                        {},
                        { textSerializers: c },
                      ),
                    );
                  },
                },
              }),
            ];
          },
        }),
        _i = Wi.create({
          name: "commands",
          addCommands: () => (0, r.A)({}, mr),
        }),
        Ui = Wi.create({
          name: "delete",
          onUpdate(t) {
            let { transaction: e, appendedTransactions: n } = t;
            var r, i, s;
            const l = () => {
              var t, r, i, s;
              if (
                null !=
                (s =
                  null ==
                  (i =
                    null ==
                    (r =
                      null == (t = this.editor.options.coreExtensionOptions)
                        ? void 0
                        : t.delete)
                      ? void 0
                      : r.filterTransaction)
                    ? void 0
                    : i.call(r, e))
                  ? s
                  : e.getMeta("y-sync$")
              )
                return;
              const l = Mo(e.before, [e, ...n]);
              Ho(l).forEach((t) => {
                l.mapping.mapResult(t.oldRange.from).deletedAfter &&
                  l.mapping.mapResult(t.oldRange.to).deletedBefore &&
                  l.before.nodesBetween(
                    t.oldRange.from,
                    t.oldRange.to,
                    (n, r) => {
                      const o = r + n.nodeSize - 2,
                        i = t.oldRange.from <= r && o <= t.oldRange.to;
                      this.editor.emit("delete", {
                        type: "node",
                        node: n,
                        from: r,
                        to: o,
                        newFrom: l.mapping.map(r),
                        newTo: l.mapping.map(o),
                        deletedRange: t.oldRange,
                        newRange: t.newRange,
                        partial: !i,
                        editor: this.editor,
                        transaction: e,
                        combinedTransform: l,
                      });
                    },
                  );
              });
              const a = l.mapping;
              l.steps.forEach((t, n) => {
                var r, i;
                if (t instanceof o.Ys) {
                  const o = a.slice(n).map(t.from, -1),
                    s = a.slice(n).map(t.to),
                    c = a.invert().map(o, -1),
                    d = a.invert().map(s),
                    h =
                      null == (r = l.doc.nodeAt(o - 1))
                        ? void 0
                        : r.marks.some((e) => e.eq(t.mark)),
                    p =
                      null == (i = l.doc.nodeAt(s))
                        ? void 0
                        : i.marks.some((e) => e.eq(t.mark));
                  this.editor.emit("delete", {
                    type: "mark",
                    mark: t.mark,
                    from: t.from,
                    to: t.to,
                    deletedRange: { from: c, to: d },
                    newRange: { from: o, to: s },
                    partial: Boolean(p || h),
                    editor: this.editor,
                    transaction: e,
                    combinedTransform: l,
                  });
                }
              });
            };
            null ==
              (s =
                null ==
                (i =
                  null == (r = this.editor.options.coreExtensionOptions)
                    ? void 0
                    : r.delete)
                  ? void 0
                  : i.async) || s
              ? setTimeout(l, 0)
              : l();
          },
        }),
        Hi = Wi.create({
          name: "drop",
          addProseMirrorPlugins() {
            return [
              new s.k_({
                key: new s.hs("tiptapDrop"),
                props: {
                  handleDrop: (t, e, n, r) => {
                    this.editor.emit("drop", {
                      editor: this.editor,
                      event: e,
                      slice: n,
                      moved: r,
                    });
                  },
                },
              }),
            ];
          },
        }),
        Gi = Wi.create({
          name: "editable",
          addProseMirrorPlugins() {
            return [
              new s.k_({
                key: new s.hs("editable"),
                props: { editable: () => this.editor.options.editable },
              }),
            ];
          },
        }),
        Zi = new s.hs("focusEvents"),
        Yi = Wi.create({
          name: "focusEvents",
          addProseMirrorPlugins() {
            const { editor: t } = this;
            return [
              new s.k_({
                key: Zi,
                props: {
                  handleDOMEvents: {
                    focus: (e, n) => {
                      t.isFocused = !0;
                      const r = t.state.tr
                        .setMeta("focus", { event: n })
                        .setMeta("addToHistory", !1);
                      return (e.dispatch(r), !1);
                    },
                    blur: (e, n) => {
                      t.isFocused = !1;
                      const r = t.state.tr
                        .setMeta("blur", { event: n })
                        .setMeta("addToHistory", !1);
                      return (e.dispatch(r), !1);
                    },
                  },
                },
              }),
            ];
          },
        }),
        Xi = Wi.create({
          name: "keymap",
          addKeyboardShortcuts() {
            const t = () =>
                this.editor.commands.first((t) => {
                  let { commands: e } = t;
                  return [
                    () => e.undoInputRule(),
                    () =>
                      e.command((t) => {
                        let { tr: n } = t;
                        const { selection: r, doc: o } = n,
                          { empty: i, $anchor: l } = r,
                          { pos: a, parent: c } = l,
                          d =
                            l.parent.isTextblock && a > 0
                              ? n.doc.resolve(a - 1)
                              : l,
                          h = d.parent.type.spec.isolating,
                          p = l.pos - l.parentOffset,
                          u =
                            h && 1 === d.parent.childCount
                              ? p === l.pos
                              : s.LN.atStart(o).from === a;
                        return (
                          !(
                            !i ||
                            !c.type.isTextblock ||
                            c.textContent.length ||
                            !u ||
                            (u && "paragraph" === l.parent.type.name)
                          ) && e.clearNodes()
                        );
                      }),
                    () => e.deleteSelection(),
                    () => e.joinBackward(),
                    () => e.selectNodeBackward(),
                  ];
                }),
              e = () =>
                this.editor.commands.first((t) => {
                  let { commands: e } = t;
                  return [
                    () => e.deleteSelection(),
                    () => e.deleteCurrentNode(),
                    () => e.joinForward(),
                    () => e.selectNodeForward(),
                  ];
                }),
              n = {
                Enter: () =>
                  this.editor.commands.first((t) => {
                    let { commands: e } = t;
                    return [
                      () => e.newlineInCode(),
                      () => e.createParagraphNear(),
                      () => e.liftEmptyBlock(),
                      () => e.splitBlock(),
                    ];
                  }),
                "Mod-Enter": () => this.editor.commands.exitCode(),
                Backspace: t,
                "Mod-Backspace": t,
                "Shift-Backspace": t,
                Delete: e,
                "Mod-Delete": e,
                "Mod-a": () => this.editor.commands.selectAll(),
              },
              o = (0, r.A)({}, n),
              i = (0, r.A)(
                (0, r.A)({}, n),
                {},
                {
                  "Ctrl-h": t,
                  "Alt-Backspace": t,
                  "Ctrl-d": e,
                  "Ctrl-Alt-Backspace": e,
                  "Alt-Delete": e,
                  "Alt-d": e,
                  "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
                  "Ctrl-e": () => this.editor.commands.selectTextblockEnd(),
                },
              );
            return Jr() || ro() ? i : o;
          },
          addProseMirrorPlugins() {
            return [
              new s.k_({
                key: new s.hs("clearDocument"),
                appendTransaction: (t, e, n) => {
                  if (t.some((t) => t.getMeta("composition"))) return;
                  const r = t.some((t) => t.docChanged) && !e.doc.eq(n.doc),
                    o = t.some((t) => t.getMeta("preventClearDocument"));
                  if (!r || o) return;
                  const { empty: i, from: l, to: a } = e.selection,
                    c = s.LN.atStart(e.doc).from,
                    d = s.LN.atEnd(e.doc).to;
                  if (i || !(l === c && a === d)) return;
                  if (!oi(n.doc)) return;
                  const h = n.tr,
                    p = ur({ state: n, transaction: h }),
                    { commands: u } = new fr({ editor: this.editor, state: p });
                  return (u.clearNodes(), h.steps.length ? h : void 0);
                },
              }),
            ];
          },
        }),
        Qi = Wi.create({
          name: "paste",
          addProseMirrorPlugins() {
            return [
              new s.k_({
                key: new s.hs("tiptapPaste"),
                props: {
                  handlePaste: (t, e, n) => {
                    this.editor.emit("paste", {
                      editor: this.editor,
                      event: e,
                      slice: n,
                    });
                  },
                },
              }),
            ];
          },
        }),
        ts = Wi.create({
          name: "tabindex",
          addProseMirrorPlugins() {
            return [
              new s.k_({
                key: new s.hs("tabindex"),
                props: {
                  attributes: () =>
                    this.editor.isEditable ? { tabindex: "0" } : {},
                },
              }),
            ];
          },
        }),
        es = Wi.create({
          name: "textDirection",
          addOptions: () => ({ direction: void 0 }),
          addGlobalAttributes() {
            if (!this.options.direction) return [];
            const { nodeExtensions: t } = Ro(this.extensions);
            return [
              {
                types: t.filter((t) => "text" !== t.name).map((t) => t.name),
                attributes: {
                  dir: {
                    default: this.options.direction,
                    parseHTML: (t) => {
                      const e = t.getAttribute("dir");
                      return !e || ("ltr" !== e && "rtl" !== e && "auto" !== e)
                        ? this.options.direction
                        : e;
                    },
                    renderHTML: (t) => (t.dir ? { dir: t.dir } : {}),
                  },
                },
              },
            ];
          },
          addProseMirrorPlugins() {
            return [
              new s.k_({
                key: new s.hs("textDirection"),
                props: {
                  attributes: () => {
                    const t = this.options.direction;
                    return t ? { dir: t } : {};
                  },
                },
              }),
            ];
          },
        }),
        ns = class t {
          constructor(t, e) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            ((this.currentNode = null),
              (this.actualDepth = null),
              (this.isBlock = n),
              (this.resolvedPos = t),
              (this.editor = e),
              (this.currentNode = r));
          }
          get name() {
            return this.node.type.name;
          }
          get node() {
            return this.currentNode || this.resolvedPos.node();
          }
          get element() {
            return this.editor.view.domAtPos(this.pos).node;
          }
          get depth() {
            var t;
            return null != (t = this.actualDepth) ? t : this.resolvedPos.depth;
          }
          get pos() {
            return this.resolvedPos.pos;
          }
          get content() {
            return this.node.content;
          }
          set content(t) {
            let e = this.from,
              n = this.to;
            if (this.isBlock) {
              if (0 === this.content.size)
                return void console.error(
                  "You can\u2019t set content on a block node. Tried to set content on "
                    .concat(this.name, " at ")
                    .concat(this.pos),
                );
              ((e = this.from + 1), (n = this.to - 1));
            }
            this.editor.commands.insertContentAt({ from: e, to: n }, t);
          }
          get attributes() {
            return this.node.attrs;
          }
          get textContent() {
            return this.node.textContent;
          }
          get size() {
            return this.node.nodeSize;
          }
          get from() {
            return this.isBlock
              ? this.pos
              : this.resolvedPos.start(this.resolvedPos.depth);
          }
          get range() {
            return { from: this.from, to: this.to };
          }
          get to() {
            return this.isBlock
              ? this.pos + this.size
              : this.resolvedPos.end(this.resolvedPos.depth) +
                  (this.node.isText ? 0 : 1);
          }
          get parent() {
            if (0 === this.depth) return null;
            const e = this.resolvedPos.start(this.resolvedPos.depth - 1),
              n = this.resolvedPos.doc.resolve(e);
            return new t(n, this.editor);
          }
          get before() {
            let e = this.resolvedPos.doc.resolve(
              this.from - (this.isBlock ? 1 : 2),
            );
            return (
              e.depth !== this.depth &&
                (e = this.resolvedPos.doc.resolve(this.from - 3)),
              new t(e, this.editor)
            );
          }
          get after() {
            let e = this.resolvedPos.doc.resolve(
              this.to + (this.isBlock ? 2 : 1),
            );
            return (
              e.depth !== this.depth &&
                (e = this.resolvedPos.doc.resolve(this.to + 3)),
              new t(e, this.editor)
            );
          }
          get children() {
            const e = [];
            return (
              this.node.content.forEach((n, r) => {
                const o = n.isBlock && !n.isTextblock,
                  i = n.isAtom && !n.isText,
                  s = n.isInline,
                  l = this.pos + r + (i ? 0 : 1);
                if (l < 0 || l > this.resolvedPos.doc.nodeSize - 2) return;
                const a = this.resolvedPos.doc.resolve(l);
                if (!o && !s && a.depth <= this.depth) return;
                const c = new t(a, this.editor, o, o || s ? n : null);
                (o && (c.actualDepth = this.depth + 1), e.push(c));
              }),
              e
            );
          }
          get firstChild() {
            return this.children[0] || null;
          }
          get lastChild() {
            const t = this.children;
            return t[t.length - 1] || null;
          }
          closest(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = null,
              r = this.parent;
            for (; r && !n; ) {
              if (r.node.type.name === t)
                if (Object.keys(e).length > 0) {
                  const t = r.node.attrs,
                    n = Object.keys(e);
                  for (let r = 0; r < n.length; r += 1) {
                    const o = n[r];
                    if (t[o] !== e[o]) break;
                  }
                } else n = r;
              r = r.parent;
            }
            return n;
          }
          querySelector(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return this.querySelectorAll(t, e, !0)[0] || null;
          }
          querySelectorAll(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = [];
            if (!this.children || 0 === this.children.length) return r;
            const o = Object.keys(e);
            return (
              this.children.forEach((i) => {
                if (!(n && r.length > 0)) {
                  if (i.node.type.name === t) {
                    o.every((t) => e[t] === i.node.attrs[t]) && r.push(i);
                  }
                  (n && r.length > 0) ||
                    (r = r.concat(i.querySelectorAll(t, e, n)));
                }
              }),
              r
            );
          }
          setAttribute(t) {
            const { tr: e } = this.editor.state;
            (e.setNodeMarkup(
              this.from,
              void 0,
              (0, r.A)((0, r.A)({}, this.node.attrs), t),
            ),
              this.editor.view.dispatch(e));
          }
        };
      var rs = class extends Ri {
        constructor() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (super(),
            (this.css = null),
            (this.className = "tiptap"),
            (this.editorView = null),
            (this.isFocused = !1),
            (this.isInitialized = !1),
            (this.extensionStorage = {}),
            (this.instanceId = Math.random().toString(36).slice(2, 9)),
            (this.options = {
              element:
                "undefined" !== typeof document
                  ? document.createElement("div")
                  : null,
              content: "",
              injectCSS: !0,
              injectNonce: void 0,
              extensions: [],
              autofocus: !1,
              editable: !0,
              textDirection: void 0,
              editorProps: {},
              parseOptions: {},
              coreExtensionOptions: {},
              enableInputRules: !0,
              enablePasteRules: !0,
              enableCoreExtensions: !0,
              enableContentCheck: !1,
              emitContentError: !1,
              onBeforeCreate: () => null,
              onCreate: () => null,
              onMount: () => null,
              onUnmount: () => null,
              onUpdate: () => null,
              onSelectionUpdate: () => null,
              onTransaction: () => null,
              onFocus: () => null,
              onBlur: () => null,
              onDestroy: () => null,
              onContentError: (t) => {
                let { error: e } = t;
                throw e;
              },
              onPaste: () => null,
              onDrop: () => null,
              onDelete: () => null,
              enableExtensionDispatchTransaction: !0,
            }),
            (this.isCapturingTransaction = !1),
            (this.capturedTransaction = null),
            (this.utils = {
              getUpdatedPosition: li,
              createMappablePosition: ai,
            }),
            this.setOptions(t),
            this.createExtensionManager(),
            this.createCommandManager(),
            this.createSchema(),
            this.on("beforeCreate", this.options.onBeforeCreate),
            this.emit("beforeCreate", { editor: this }),
            this.on("mount", this.options.onMount),
            this.on("unmount", this.options.onUnmount),
            this.on("contentError", this.options.onContentError),
            this.on("create", this.options.onCreate),
            this.on("update", this.options.onUpdate),
            this.on("selectionUpdate", this.options.onSelectionUpdate),
            this.on("transaction", this.options.onTransaction),
            this.on("focus", this.options.onFocus),
            this.on("blur", this.options.onBlur),
            this.on("destroy", this.options.onDestroy),
            this.on("drop", (t) => {
              let { event: e, slice: n, moved: r } = t;
              return this.options.onDrop(e, n, r);
            }),
            this.on("paste", (t) => {
              let { event: e, slice: n } = t;
              return this.options.onPaste(e, n);
            }),
            this.on("delete", this.options.onDelete));
          const e = this.createDoc(),
            n = Vr(e, this.options.autofocus);
          ((this.editorState = s.$t.create({
            doc: e,
            schema: this.schema,
            selection: n || void 0,
          })),
            this.options.element && this.mount(this.options.element));
        }
        mount(t) {
          if ("undefined" === typeof document)
            throw new Error(
              "[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.",
            );
          (this.createView(t),
            this.emit("mount", { editor: this }),
            this.css &&
              !document.head.contains(this.css) &&
              document.head.appendChild(this.css),
            window.setTimeout(() => {
              this.isDestroyed ||
                (!1 !== this.options.autofocus &&
                  null !== this.options.autofocus &&
                  this.commands.focus(this.options.autofocus),
                this.emit("create", { editor: this }),
                (this.isInitialized = !0));
            }, 0));
        }
        unmount() {
          if (this.editorView) {
            const t = this.editorView.dom;
            ((null == t ? void 0 : t.editor) && delete t.editor,
              this.editorView.destroy());
          }
          if (
            ((this.editorView = null),
            (this.isInitialized = !1),
            this.css &&
              !document.querySelectorAll(".".concat(this.className)).length)
          )
            try {
              "function" === typeof this.css.remove
                ? this.css.remove()
                : this.css.parentNode &&
                  this.css.parentNode.removeChild(this.css);
            } catch (t) {
              console.warn("Failed to remove CSS element:", t);
            }
          ((this.css = null), this.emit("unmount", { editor: this }));
        }
        get storage() {
          return this.extensionStorage;
        }
        get commands() {
          return this.commandManager.commands;
        }
        chain() {
          return this.commandManager.chain();
        }
        can() {
          return this.commandManager.can();
        }
        injectCSS() {
          this.options.injectCSS &&
            "undefined" !== typeof document &&
            (this.css = (function (t, e, n) {
              const r = document.querySelector(
                "style[data-tiptap-style".concat(n ? "-".concat(n) : "", "]"),
              );
              if (null !== r) return r;
              const o = document.createElement("style");
              return (
                e && o.setAttribute("nonce", e),
                o.setAttribute(
                  "data-tiptap-style".concat(n ? "-".concat(n) : ""),
                  "",
                ),
                (o.innerHTML = t),
                document.getElementsByTagName("head")[0].appendChild(o),
                o
              );
            })(
              '.ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: "liga" 0; /* the above doesn\'t seem to work in Edge */\n}\n\n.ProseMirror [contenteditable="false"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable="false"] [contenteditable="true"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}',
              this.options.injectNonce,
            ));
        }
        setOptions() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          ((this.options = (0, r.A)((0, r.A)({}, this.options), t)),
            this.editorView &&
              this.state &&
              !this.isDestroyed &&
              (this.options.editorProps &&
                this.view.setProps(this.options.editorProps),
              this.view.updateState(this.state)));
        }
        setEditable(t) {
          let e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          (this.setOptions({ editable: t }),
            e &&
              this.emit("update", {
                editor: this,
                transaction: this.state.tr,
                appendedTransactions: [],
              }));
        }
        get isEditable() {
          return this.options.editable && this.view && this.view.editable;
        }
        get view() {
          return this.editorView
            ? this.editorView
            : new Proxy(
                {
                  state: this.editorState,
                  updateState: (t) => {
                    this.editorState = t;
                  },
                  dispatch: (t) => {
                    this.dispatchTransaction(t);
                  },
                  composing: !1,
                  dragging: null,
                  editable: !0,
                  isDestroyed: !1,
                },
                {
                  get: (t, e) => {
                    if (this.editorView) return this.editorView[e];
                    if ("state" === e) return this.editorState;
                    if (e in t) return Reflect.get(t, e);
                    throw new Error(
                      "[tiptap error]: The editor view is not available. Cannot access view['".concat(
                        e,
                        "']. The editor may not be mounted yet.",
                      ),
                    );
                  },
                },
              );
        }
        get state() {
          return (
            this.editorView && (this.editorState = this.view.state),
            this.editorState
          );
        }
        registerPlugin(t, e) {
          const n = Eo(e)
              ? e(t, [...this.state.plugins])
              : [...this.state.plugins, t],
            r = this.state.reconfigure({ plugins: n });
          return (this.view.updateState(r), r);
        }
        unregisterPlugin(t) {
          if (this.isDestroyed) return;
          const e = this.state.plugins;
          let n = e;
          if (
            ([].concat(t).forEach((t) => {
              const e = "string" === typeof t ? "".concat(t, "$") : t.key;
              n = n.filter((t) => !t.key.startsWith(e));
            }),
            e.length === n.length)
          )
            return;
          const r = this.state.reconfigure({ plugins: n });
          return (this.view.updateState(r), r);
        }
        createExtensionManager() {
          var t, e;
          const n = [
            ...(this.options.enableCoreExtensions
              ? [
                  Gi,
                  qi.configure({
                    blockSeparator:
                      null ==
                      (e =
                        null == (t = this.options.coreExtensionOptions)
                          ? void 0
                          : t.clipboardTextSerializer)
                        ? void 0
                        : e.blockSeparator,
                  }),
                  _i,
                  Yi,
                  Xi,
                  ts,
                  Hi,
                  Qi,
                  Ui,
                  es.configure({ direction: this.options.textDirection }),
                ].filter(
                  (t) =>
                    "object" !== typeof this.options.enableCoreExtensions ||
                    !1 !== this.options.enableCoreExtensions[t.name],
                )
              : []),
            ...this.options.extensions,
          ].filter((t) =>
            ["extension", "node", "mark"].includes(null == t ? void 0 : t.type),
          );
          this.extensionManager = new Ki(n, this);
        }
        createCommandManager() {
          this.commandManager = new fr({ editor: this });
        }
        createSchema() {
          this.schema = this.extensionManager.schema;
        }
        createDoc() {
          let t;
          try {
            t = ko(
              this.options.content,
              this.schema,
              this.options.parseOptions,
              { errorOnInvalidContent: this.options.enableContentCheck },
            );
          } catch (e) {
            if (
              !(e instanceof Error) ||
              ![
                "[tiptap error]: Invalid JSON content",
                "[tiptap error]: Invalid HTML content",
              ].includes(e.message)
            )
              throw e;
            (this.emit("contentError", {
              editor: this,
              error: e,
              disableCollaboration: () => {
                ("collaboration" in this.storage &&
                  "object" === typeof this.storage.collaboration &&
                  this.storage.collaboration &&
                  (this.storage.collaboration.isDisabled = !0),
                  (this.options.extensions = this.options.extensions.filter(
                    (t) => "collaboration" !== t.name,
                  )),
                  this.createExtensionManager());
              },
            }),
              (t = ko(
                this.options.content,
                this.schema,
                this.options.parseOptions,
                { errorOnInvalidContent: !1 },
              )));
          }
          return t;
        }
        createView(t) {
          const { editorProps: e, enableExtensionDispatchTransaction: n } =
              this.options,
            o = e.dispatchTransaction || this.dispatchTransaction.bind(this),
            i = n ? this.extensionManager.dispatchTransaction(o) : o;
          this.editorView = new Hn(
            t,
            (0, r.A)(
              (0, r.A)({}, e),
              {},
              {
                attributes: (0, r.A)(
                  { role: "textbox" },
                  null == e ? void 0 : e.attributes,
                ),
                dispatchTransaction: i,
                state: this.editorState,
                markViews: this.extensionManager.markViews,
                nodeViews: this.extensionManager.nodeViews,
              },
            ),
          );
          const s = this.state.reconfigure({
            plugins: this.extensionManager.plugins,
          });
          (this.view.updateState(s), this.prependClass(), this.injectCSS());
          this.view.dom.editor = this;
        }
        createNodeViews() {
          this.view.isDestroyed ||
            this.view.setProps({
              markViews: this.extensionManager.markViews,
              nodeViews: this.extensionManager.nodeViews,
            });
        }
        prependClass() {
          this.view.dom.className = ""
            .concat(this.className, " ")
            .concat(this.view.dom.className);
        }
        captureTransaction(t) {
          ((this.isCapturingTransaction = !0),
            t(),
            (this.isCapturingTransaction = !1));
          const e = this.capturedTransaction;
          return ((this.capturedTransaction = null), e);
        }
        dispatchTransaction(t) {
          if (this.view.isDestroyed) return;
          if (this.isCapturingTransaction)
            return this.capturedTransaction
              ? void t.steps.forEach((t) => {
                  var e;
                  return null == (e = this.capturedTransaction)
                    ? void 0
                    : e.step(t);
                })
              : void (this.capturedTransaction = t);
          const { state: e, transactions: n } = this.state.applyTransaction(t),
            r = !this.state.selection.eq(e.selection),
            o = n.includes(t),
            i = this.state;
          if (
            (this.emit("beforeTransaction", {
              editor: this,
              transaction: t,
              nextState: e,
            }),
            !o)
          )
            return;
          (this.view.updateState(e),
            this.emit("transaction", {
              editor: this,
              transaction: t,
              appendedTransactions: n.slice(1),
            }),
            r &&
              this.emit("selectionUpdate", { editor: this, transaction: t }));
          const s = n.findLast((t) => t.getMeta("focus") || t.getMeta("blur")),
            l = null == s ? void 0 : s.getMeta("focus"),
            a = null == s ? void 0 : s.getMeta("blur");
          (l &&
            this.emit("focus", {
              editor: this,
              event: l.event,
              transaction: s,
            }),
            a &&
              this.emit("blur", {
                editor: this,
                event: a.event,
                transaction: s,
              }),
            t.getMeta("preventUpdate") ||
              !n.some((t) => t.docChanged) ||
              i.doc.eq(e.doc) ||
              this.emit("update", {
                editor: this,
                transaction: t,
                appendedTransactions: n.slice(1),
              }));
        }
        getAttributes(t) {
          return _o(this.state, t);
        }
        isActive(t, e) {
          const n = "string" === typeof t ? t : null,
            r = "string" === typeof t ? e : t;
          return (function (t, e) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            if (!e) return io(t, null, n) || Qo(t, null, n);
            const r = ho(e, t.schema);
            return "node" === r ? io(t, e, n) : "mark" === r && Qo(t, e, n);
          })(this.state, n, r);
        }
        getJSON() {
          return this.state.doc.toJSON();
        }
        getHTML() {
          return Ao(this.state.doc.content, this.schema);
        }
        getText(t) {
          const { blockSeparator: e = "\n\n", textSerializers: n = {} } =
            t || {};
          return Wo(this.state.doc, {
            blockSeparator: e,
            textSerializers: (0, r.A)((0, r.A)({}, qo(this.schema)), n),
          });
        }
        get isEmpty() {
          return oi(this.state.doc);
        }
        destroy() {
          (this.emit("destroy"), this.unmount(), this.removeAllListeners());
        }
        get isDestroyed() {
          var t, e;
          return (
            null ==
              (e = null == (t = this.editorView) ? void 0 : t.isDestroyed) || e
          );
        }
        $node(t, e) {
          var n;
          return (
            (null == (n = this.$doc) ? void 0 : n.querySelector(t, e)) || null
          );
        }
        $nodes(t, e) {
          var n;
          return (
            (null == (n = this.$doc) ? void 0 : n.querySelectorAll(t, e)) ||
            null
          );
        }
        $pos(t) {
          const e = this.state.doc.resolve(t);
          return new ns(e, this);
        }
        get $doc() {
          return this.$pos(0);
        }
      };
      function is(t) {
        return new Ii({
          find: t.find,
          handler: (e) => {
            let { state: n, range: r, match: o } = e;
            const i = Do(t.getAttributes, void 0, o);
            if (!1 === i || null === i) return null;
            const { tr: s } = n,
              l = o[o.length - 1],
              a = o[0];
            if (l) {
              const e = a.search(/\S/),
                o = r.from + a.indexOf(l),
                c = o + l.length;
              if (
                Go(r.from, r.to, n.doc)
                  .filter((e) =>
                    e.mark.type.excluded.find(
                      (n) => n === t.type && n !== e.mark.type,
                    ),
                  )
                  .filter((t) => t.to > o).length
              )
                return null;
              (c < r.to && s.delete(c, r.to),
                o > r.from && s.delete(r.from + e, o));
              const d = r.from + e + l.length;
              (s.addMark(r.from + e, d, t.type.create(i || {})),
                s.removeStoredMark(t.type));
            }
          },
          undoable: t.undoable,
        });
      }
      function ss(t) {
        return new Ii({
          find: t.find,
          handler: (e) => {
            let { state: n, range: r, match: o } = e;
            const i = Do(t.getAttributes, void 0, o) || {},
              { tr: s } = n,
              l = r.from;
            let a = r.to;
            const c = t.type.create(i);
            if (o[1]) {
              let t = l + o[0].lastIndexOf(o[1]);
              t > a ? (t = a) : (a = t + o[1].length);
              const e = o[0][o[0].length - 1];
              (s.insertText(e, l + o[0].length - 1), s.replaceWith(t, a, c));
            } else if (o[0]) {
              const e = t.type.isInline ? l : l - 1;
              s.insert(e, t.type.create(i)).delete(
                s.mapping.map(l),
                s.mapping.map(a),
              );
            }
            s.scrollIntoView();
          },
          undoable: t.undoable,
        });
      }
      function ls(t) {
        return new Ii({
          find: t.find,
          handler: (e) => {
            let { state: n, range: r, match: o } = e;
            const i = n.doc.resolve(r.from),
              s = Do(t.getAttributes, void 0, o) || {};
            if (
              !i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), t.type)
            )
              return null;
            n.tr.delete(r.from, r.to).setBlockType(r.from, r.from, t.type, s);
          },
          undoable: t.undoable,
        });
      }
      function as(t) {
        return new Ii({
          find: t.find,
          handler: (e) => {
            let { state: n, range: r, match: i, chain: s } = e;
            const l = Do(t.getAttributes, void 0, i) || {},
              a = n.tr.delete(r.from, r.to),
              c = a.doc.resolve(r.from).blockRange(),
              d = c && (0, o.oM)(c, t.type, l);
            if (!d) return null;
            if ((a.wrap(c, d), t.keepMarks && t.editor)) {
              const { selection: e, storedMarks: r } = n,
                { splittableMarks: o } = t.editor.extensionManager,
                i = r || (e.$to.parentOffset && e.$from.marks());
              if (i) {
                const t = i.filter((t) => o.includes(t.type.name));
                a.ensureMarks(t);
              }
            }
            if (t.keepAttributes) {
              const e =
                "bulletList" === t.type.name || "orderedList" === t.type.name
                  ? "listItem"
                  : "taskList";
              s().updateAttributes(e, l).run();
            }
            const h = a.doc.resolve(r.from - 1).nodeBefore;
            h &&
              h.type === t.type &&
              (0, o.n9)(a.doc, r.from - 1) &&
              (!t.joinPredicate || t.joinPredicate(i, h)) &&
              a.join(r.from - 1);
          },
          undoable: t.undoable,
        });
      }
      function cs(t, e) {
        const { selection: n } = t,
          { $from: r } = n;
        if (n instanceof s.nh) {
          const t = r.index();
          return r.parent.canReplaceWith(t, t + 1, e);
        }
        let o = r.depth;
        for (; o >= 0; ) {
          const t = r.index(o);
          if (r.node(o).contentMatchAt(t).matchType(e)) return !0;
          o -= 1;
        }
        return !1;
      }
      function ds(t) {
        if (!(null == t ? void 0 : t.trim())) return {};
        const e = {},
          n = [],
          r = t.replace(
            /["']([^"']*)["']/g,
            (t) => (n.push(t), "__QUOTED_".concat(n.length - 1, "__")),
          ),
          o = r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
        if (o) {
          const t = o.map((t) => t.trim().slice(1));
          e.class = t.join(" ");
        }
        const i = r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
        i && (e.id = i[1]);
        Array.from(
          r.matchAll(/([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g),
        ).forEach((t) => {
          let [, r, o] = t;
          var i;
          const s = parseInt(
              (null == (i = o.match(/__QUOTED_(\d+)__/)) ? void 0 : i[1]) ||
                "0",
              10,
            ),
            l = n[s];
          l && (e[r] = l.slice(1, -1));
        });
        const s = r
          .replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "")
          .replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "")
          .replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "")
          .trim();
        if (s) {
          s.split(/\s+/)
            .filter(Boolean)
            .forEach((t) => {
              t.match(/^[a-zA-Z][\w-]*$/) && (e[t] = !0);
            });
        }
        return e;
      }
      function hs(t) {
        if (!t || 0 === Object.keys(t).length) return "";
        const e = [];
        if (t.class) {
          String(t.class)
            .split(/\s+/)
            .filter(Boolean)
            .forEach((t) => e.push(".".concat(t)));
        }
        return (
          t.id && e.push("#".concat(t.id)),
          Object.entries(t).forEach((t) => {
            let [n, r] = t;
            "class" !== n &&
              "id" !== n &&
              (!0 === r
                ? e.push(n)
                : !1 !== r &&
                  null != r &&
                  e.push("".concat(n, '="').concat(String(r), '"')));
          }),
          e.join(" ")
        );
      }
      function ps(t) {
        const {
            nodeName: e,
            name: n,
            parseAttributes: o = ds,
            serializeAttributes: i = hs,
            defaultAttributes: s = {},
            requiredAttributes: l = [],
            allowedAttributes: a,
          } = t,
          c = n || e;
        return {
          parseMarkdown: (t, n) => {
            const o = (0, r.A)((0, r.A)({}, s), t.attributes);
            return n.createNode(e, o, []);
          },
          markdownTokenizer: {
            name: e,
            level: "block",
            start(t) {
              var e;
              const n = new RegExp("^:::".concat(c, "(?:\\s|$)"), "m"),
                r = null == (e = t.match(n)) ? void 0 : e.index;
              return void 0 !== r ? r : -1;
            },
            tokenize(t, n, r) {
              const i = new RegExp(
                  "^:::".concat(c, "(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)"),
                ),
                s = t.match(i);
              if (!s) return;
              const a = s[1] || "",
                d = o(a);
              return l.find((t) => !(t in d))
                ? void 0
                : { type: e, raw: s[0], attributes: d };
            },
          },
          renderMarkdown: (t) => {
            const e = ((t) => {
                if (!a) return t;
                const e = {};
                return (
                  a.forEach((n) => {
                    n in t && (e[n] = t[n]);
                  }),
                  e
                );
              })(t.attrs || {}),
              n = i(e),
              r = n ? " {".concat(n, "}") : "";
            return ":::".concat(c).concat(r, " :::");
          },
        };
      }
      function us(t) {
        const {
            nodeName: e,
            name: n,
            getContent: o,
            parseAttributes: i = ds,
            serializeAttributes: s = hs,
            defaultAttributes: l = {},
            content: a = "block",
            allowedAttributes: c,
          } = t,
          d = n || e;
        return {
          parseMarkdown: (t, n) => {
            let i;
            if (o) {
              const e = o(t);
              i = "string" === typeof e ? [{ type: "text", text: e }] : e;
            } else
              i =
                "block" === a
                  ? n.parseChildren(t.tokens || [])
                  : n.parseInline(t.tokens || []);
            const s = (0, r.A)((0, r.A)({}, l), t.attributes);
            return n.createNode(e, s, i);
          },
          markdownTokenizer: {
            name: e,
            level: "block",
            start(t) {
              var e;
              const n = new RegExp("^:::".concat(d), "m"),
                r = null == (e = t.match(n)) ? void 0 : e.index;
              return void 0 !== r ? r : -1;
            },
            tokenize(t, n, r) {
              var o;
              const s = new RegExp(
                  "^:::".concat(d, "(?:\\s+\\{([^}]*)\\})?\\s*\\n"),
                ),
                l = t.match(s);
              if (!l) return;
              const [c, h = ""] = l,
                p = i(h);
              let u = 1;
              const f = c.length;
              let m = "";
              const g = /^:::([\w-]*)(\s.*)?/gm,
                y = t.slice(f);
              for (g.lastIndex = 0; ; ) {
                const n = g.exec(y);
                if (null === n) break;
                const i = n.index,
                  s = n[1];
                if (!(null == (o = n[2]) ? void 0 : o.endsWith(":::")))
                  if (s) u += 1;
                  else if (((u -= 1), 0 === u)) {
                    const o = y.slice(0, i);
                    m = o.trim();
                    const s = t.slice(0, f + i + n[0].length);
                    let l = [];
                    if (m)
                      if ("block" === a)
                        for (
                          l = r.blockTokens(o),
                            l.forEach((t) => {
                              !t.text ||
                                (t.tokens && 0 !== t.tokens.length) ||
                                (t.tokens = r.inlineTokens(t.text));
                            });
                          l.length > 0;
                        ) {
                          const t = l[l.length - 1];
                          if (
                            "paragraph" !== t.type ||
                            (t.text && "" !== t.text.trim())
                          )
                            break;
                          l.pop();
                        }
                      else l = r.inlineTokens(m);
                    return {
                      type: e,
                      raw: s,
                      attributes: p,
                      content: m,
                      tokens: l,
                    };
                  }
              }
            },
          },
          renderMarkdown: (t, e) => {
            const n = ((t) => {
                if (!c) return t;
                const e = {};
                return (
                  c.forEach((n) => {
                    n in t && (e[n] = t[n]);
                  }),
                  e
                );
              })(t.attrs || {}),
              r = s(n),
              o = r ? " {".concat(r, "}") : "",
              i = e.renderChildren(t.content || [], "\n\n");
            return ":::".concat(d).concat(o, "\n\n").concat(i, "\n\n:::");
          },
        };
      }
      function fs(t) {
        if (!t.trim()) return {};
        const e = {},
          n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
        let r = n.exec(t);
        for (; null !== r; ) {
          const [, o, i, s] = r;
          ((e[o] = i || s), (r = n.exec(t)));
        }
        return e;
      }
      function ms(t) {
        return Object.entries(t)
          .filter((t) => {
            let [, e] = t;
            return void 0 !== e && null !== e;
          })
          .map((t) => {
            let [e, n] = t;
            return "".concat(e, '="').concat(n, '"');
          })
          .join(" ");
      }
      function gs(t) {
        const {
            nodeName: e,
            name: n,
            getContent: o,
            parseAttributes: i = fs,
            serializeAttributes: s = ms,
            defaultAttributes: l = {},
            selfClosing: a = !1,
            allowedAttributes: c,
          } = t,
          d = n || e,
          h = d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return {
          parseMarkdown: (t, n) => {
            const i = (0, r.A)((0, r.A)({}, l), t.attributes);
            if (a) return n.createNode(e, i);
            const s = o ? o(t) : t.content || "";
            return s
              ? n.createNode(e, i, [n.createTextNode(s)])
              : n.createNode(e, i, []);
          },
          markdownTokenizer: {
            name: e,
            level: "inline",
            start(t) {
              const e = a
                  ? new RegExp("\\[".concat(h, "\\s*[^\\]]*\\]"))
                  : new RegExp(
                      "\\["
                        .concat(h, "\\s*[^\\]]*\\][\\s\\S]*?\\[\\/")
                        .concat(h, "\\]"),
                    ),
                n = t.match(e),
                r = null == n ? void 0 : n.index;
              return void 0 !== r ? r : -1;
            },
            tokenize(t, n, r) {
              const o = a
                  ? new RegExp("^\\[".concat(h, "\\s*([^\\]]*)\\]"))
                  : new RegExp(
                      "^\\["
                        .concat(h, "\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/")
                        .concat(h, "\\]"),
                    ),
                s = t.match(o);
              if (!s) return;
              let l = "",
                c = "";
              if (a) {
                const [, t] = s;
                c = t;
              } else {
                const [, t, e] = s;
                ((c = t), (l = e || ""));
              }
              const d = i(c.trim());
              return { type: e, raw: s[0], content: l.trim(), attributes: d };
            },
          },
          renderMarkdown: (t) => {
            let e = "";
            o
              ? (e = o(t))
              : t.content &&
                t.content.length > 0 &&
                (e = t.content
                  .filter((t) => "text" === t.type)
                  .map((t) => t.text)
                  .join(""));
            const n = ((t) => {
                if (!c) return t;
                const e = {};
                return (
                  c.forEach((n) => {
                    const r = "string" === typeof n ? n : n.name,
                      o = "string" === typeof n ? void 0 : n.skipIfDefault;
                    if (r in t) {
                      const n = t[r];
                      if (void 0 !== o && n === o) return;
                      e[r] = n;
                    }
                  }),
                  e
                );
              })(t.attrs || {}),
              r = s(n),
              i = r ? " ".concat(r) : "";
            return a
              ? "[".concat(d).concat(i, "]")
              : "[".concat(d).concat(i, "]").concat(e, "[/").concat(d, "]");
          },
        };
      }
      function ys(t, e, n) {
        var r, o, i, s;
        const l = t.split("\n"),
          a = [];
        let c = "",
          d = 0;
        const h = e.baseIndentSize || 2;
        for (; d < l.length; ) {
          const t = l[d],
            p = t.match(e.itemPattern);
          if (!p) {
            if (a.length > 0) break;
            if ("" === t.trim()) {
              ((d += 1), (c = "".concat(c).concat(t, "\n")));
              continue;
            }
            return;
          }
          const u = e.extractItemData(p),
            { indentLevel: f, mainContent: m } = u;
          c = "".concat(c).concat(t, "\n");
          const g = [m];
          for (d += 1; d < l.length; ) {
            const t = l[d];
            if ("" === t.trim()) {
              const e = l.slice(d + 1).findIndex((t) => "" !== t.trim());
              if (-1 === e) break;
              if (
                ((null ==
                (o = null == (r = l[d + 1 + e].match(/^(\s*)/)) ? void 0 : r[1])
                  ? void 0
                  : o.length) || 0) > f
              ) {
                (g.push(t), (c = "".concat(c).concat(t, "\n")), (d += 1));
                continue;
              }
              break;
            }
            if (
              !(
                ((null == (s = null == (i = t.match(/^(\s*)/)) ? void 0 : i[1])
                  ? void 0
                  : s.length) || 0) > f
              )
            )
              break;
            (g.push(t), (c = "".concat(c).concat(t, "\n")), (d += 1));
          }
          let y;
          const v = g.slice(1);
          if (v.length > 0) {
            const t = v.map((t) => t.slice(f + h)).join("\n");
            t.trim() &&
              (y = e.customNestedParser
                ? e.customNestedParser(t)
                : n.blockTokens(t));
          }
          const w = e.createToken(u, y);
          a.push(w);
        }
        if (0 !== a.length) return { items: a, raw: c };
      }
      function vs(t, e, n, r) {
        if (!t || !Array.isArray(t.content)) return "";
        const o = "function" === typeof n ? n(r) : n,
          [i, ...s] = t.content,
          l = e.renderChildren([i]),
          a = ["".concat(o).concat(l)];
        return (
          s &&
            s.length > 0 &&
            s.forEach((t) => {
              const n = e.renderChildren([t]);
              if (n) {
                const t = n
                  .split("\n")
                  .map((t) => (t ? e.indent(t) : ""))
                  .join("\n");
                a.push(t);
              }
            }),
          a.join("\n")
        );
      }
      function ws(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const { state: o } = e,
          { doc: i, tr: s } = o,
          l = t;
        (i.descendants((e, o) => {
          const i = s.mapping.map(o),
            a = s.mapping.map(o) + e.nodeSize;
          let c = null;
          if (
            (e.marks.forEach((t) => {
              if (t !== l) return !1;
              c = t;
            }),
            !c)
          )
            return;
          let d = !1;
          if (
            (Object.keys(n).forEach((t) => {
              n[t] !== c.attrs[t] && (d = !0);
            }),
            d)
          ) {
            const e = t.type.create((0, r.A)((0, r.A)({}, t.attrs), n));
            (s.removeMark(i, a, t.type), s.addMark(i, a, e));
          }
        }),
          s.docChanged && e.view.dispatch(s));
      }
      pr(
        {},
        {
          createAtomBlockMarkdownSpec: () => ps,
          createBlockMarkdownSpec: () => us,
          createInlineMarkdownSpec: () => gs,
          parseAttributes: () => ds,
          parseIndentedBlocks: () => ys,
          renderNestedMarkdownContent: () => vs,
          serializeAttributes: () => hs,
        },
      );
      var bs = class {
          constructor(t, e, n) {
            ((this.component = t),
              (this.editor = e.editor),
              (this.options = (0, r.A)({}, n)),
              (this.mark = e.mark),
              (this.HTMLAttributes = e.HTMLAttributes));
          }
          get dom() {
            return this.editor.view.dom;
          }
          get contentDOM() {
            return null;
          }
          updateAttributes(t, e) {
            ws(e || this.mark, this.editor, t);
          }
          ignoreMutation(t) {
            if (!this.dom || !this.contentDOM) return !0;
            if ("function" === typeof this.options.ignoreMutation)
              return this.options.ignoreMutation({ mutation: t });
            if ("selection" === t.type) return !1;
            if (
              this.dom.contains(t.target) &&
              "childList" === t.type &&
              (Jr() || Lr()) &&
              this.editor.isFocused
            ) {
              if (
                [
                  ...Array.from(t.addedNodes),
                  ...Array.from(t.removedNodes),
                ].every((t) => t.isContentEditable)
              )
                return !1;
            }
            return (
              (this.contentDOM === t.target && "attributes" === t.type) ||
              !this.contentDOM.contains(t.target)
            );
          }
        },
        ks = class t extends Bi {
          constructor() {
            (super(...arguments), (this.type = "node"));
          }
          static create() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const n = "function" === typeof e ? e() : e;
            return new t(n);
          }
          configure(t) {
            return super.configure(t);
          }
          extend(t) {
            const e = "function" === typeof t ? t() : t;
            return super.extend(e);
          }
        },
        xs = class {
          constructor(t, e, n) {
            ((this.isDragging = !1),
              (this.component = t),
              (this.editor = e.editor),
              (this.options = (0, r.A)(
                { stopEvent: null, ignoreMutation: null },
                n,
              )),
              (this.extension = e.extension),
              (this.node = e.node),
              (this.decorations = e.decorations),
              (this.innerDecorations = e.innerDecorations),
              (this.view = e.view),
              (this.HTMLAttributes = e.HTMLAttributes),
              (this.getPos = e.getPos),
              this.mount());
          }
          mount() {}
          get dom() {
            return this.editor.view.dom;
          }
          get contentDOM() {
            return null;
          }
          onDragStart(t) {
            var e, n, r, o, i, l, a;
            const { view: c } = this.editor,
              d = t.target,
              h =
                3 === d.nodeType
                  ? null == (e = d.parentElement)
                    ? void 0
                    : e.closest("[data-drag-handle]")
                  : d.closest("[data-drag-handle]");
            if (
              !this.dom ||
              (null == (n = this.contentDOM) ? void 0 : n.contains(d)) ||
              !h
            )
              return;
            let p = 0,
              u = 0;
            if (this.dom !== h) {
              const e = this.dom.getBoundingClientRect(),
                n = h.getBoundingClientRect(),
                s =
                  null != (o = t.offsetX)
                    ? o
                    : null == (r = t.nativeEvent)
                      ? void 0
                      : r.offsetX,
                a =
                  null != (l = t.offsetY)
                    ? l
                    : null == (i = t.nativeEvent)
                      ? void 0
                      : i.offsetY;
              ((p = n.x - e.x + s), (u = n.y - e.y + a));
            }
            const f = this.dom.cloneNode(!0);
            try {
              const t = this.dom.getBoundingClientRect();
              ((f.style.width = "".concat(Math.round(t.width), "px")),
                (f.style.height = "".concat(Math.round(t.height), "px")),
                (f.style.boxSizing = "border-box"),
                (f.style.pointerEvents = "none"));
            } catch (w) {}
            let m = null;
            try {
              ((m = document.createElement("div")),
                (m.style.position = "absolute"),
                (m.style.top = "-9999px"),
                (m.style.left = "-9999px"),
                (m.style.pointerEvents = "none"),
                m.appendChild(f),
                document.body.appendChild(m),
                null == (a = t.dataTransfer) || a.setDragImage(f, p, u));
            } finally {
              m &&
                setTimeout(() => {
                  try {
                    null == m || m.remove();
                  } catch (t) {}
                }, 0);
            }
            const g = this.getPos();
            if ("number" !== typeof g) return;
            const y = s.nh.create(c.state.doc, g),
              v = c.state.tr.setSelection(y);
            c.dispatch(v);
          }
          stopEvent(t) {
            var e;
            if (!this.dom) return !1;
            if ("function" === typeof this.options.stopEvent)
              return this.options.stopEvent({ event: t });
            const n = t.target;
            if (
              !(
                this.dom.contains(n) &&
                !(null == (e = this.contentDOM) ? void 0 : e.contains(n))
              )
            )
              return !1;
            const r = t.type.startsWith("drag"),
              o = "drop" === t.type;
            if (
              (["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(n.tagName) ||
                n.isContentEditable) &&
              !o &&
              !r
            )
              return !0;
            const { isEditable: i } = this.editor,
              { isDragging: l } = this,
              a = !!this.node.type.spec.draggable,
              c = s.nh.isSelectable(this.node),
              d = "copy" === t.type,
              h = "paste" === t.type,
              p = "cut" === t.type,
              u = "mousedown" === t.type;
            if (
              (!a && c && r && t.target === this.dom && t.preventDefault(),
              a && r && !l && t.target === this.dom)
            )
              return (t.preventDefault(), !1);
            if (a && i && !l && u) {
              const t = n.closest("[data-drag-handle]");
              t &&
                (this.dom === t || this.dom.contains(t)) &&
                ((this.isDragging = !0),
                document.addEventListener(
                  "dragend",
                  () => {
                    this.isDragging = !1;
                  },
                  { once: !0 },
                ),
                document.addEventListener(
                  "drop",
                  () => {
                    this.isDragging = !1;
                  },
                  { once: !0 },
                ),
                document.addEventListener(
                  "mouseup",
                  () => {
                    this.isDragging = !1;
                  },
                  { once: !0 },
                ));
            }
            return !(l || o || d || h || p || (u && c));
          }
          ignoreMutation(t) {
            if (!this.dom || !this.contentDOM) return !0;
            if ("function" === typeof this.options.ignoreMutation)
              return this.options.ignoreMutation({ mutation: t });
            if (this.node.isLeaf || this.node.isAtom) return !0;
            if ("selection" === t.type) return !1;
            if (
              this.dom.contains(t.target) &&
              "childList" === t.type &&
              (Jr() || Lr()) &&
              this.editor.isFocused
            ) {
              if (
                [
                  ...Array.from(t.addedNodes),
                  ...Array.from(t.removedNodes),
                ].every((t) => t.isContentEditable)
              )
                return !1;
            }
            return (
              (this.contentDOM === t.target && "attributes" === t.type) ||
              !this.contentDOM.contains(t.target)
            );
          }
          updateAttributes(t) {
            this.editor.commands.command((e) => {
              let { tr: n } = e;
              const o = this.getPos();
              return (
                "number" === typeof o &&
                (n.setNodeMarkup(
                  o,
                  void 0,
                  (0, r.A)((0, r.A)({}, this.node.attrs), t),
                ),
                !0)
              );
            });
          }
          deleteNode() {
            const t = this.getPos();
            if ("number" !== typeof t) return;
            const e = t + this.node.nodeSize;
            this.editor.commands.deleteRange({ from: t, to: e });
          }
        };
      function Ss(t) {
        return new Vi({
          find: t.find,
          handler: (e) => {
            let { state: n, range: r, match: o, pasteEvent: i } = e;
            const s = Do(t.getAttributes, void 0, o, i);
            if (!1 === s || null === s) return null;
            const { tr: l } = n,
              a = o[o.length - 1],
              c = o[0];
            let d = r.to;
            if (a) {
              const e = c.search(/\S/),
                o = r.from + c.indexOf(a),
                i = o + a.length;
              if (
                Go(r.from, r.to, n.doc)
                  .filter((e) =>
                    e.mark.type.excluded.find(
                      (n) => n === t.type && n !== e.mark.type,
                    ),
                  )
                  .filter((t) => t.to > o).length
              )
                return null;
              (i < r.to && l.delete(i, r.to),
                o > r.from && l.delete(r.from + e, o),
                (d = r.from + e + a.length),
                l.addMark(r.from + e, d, t.type.create(s || {})),
                l.removeStoredMark(t.type));
            }
          },
        });
      }
    },
    282(t, e, n) {
      function r(t) {
        this.content = t;
      }
      (n.d(e, {
        S4: () => X,
        ZF: () => at,
        FK: () => l,
        CU: () => h,
        sX: () => G,
        bP: () => D,
        u$: () => A,
        vI: () => p,
        Sj: () => Z,
        Ji: () => u,
      }),
        (r.prototype = {
          constructor: r,
          find: function (t) {
            for (var e = 0; e < this.content.length; e += 2)
              if (this.content[e] === t) return e;
            return -1;
          },
          get: function (t) {
            var e = this.find(t);
            return -1 == e ? void 0 : this.content[e + 1];
          },
          update: function (t, e, n) {
            var o = n && n != t ? this.remove(n) : this,
              i = o.find(t),
              s = o.content.slice();
            return (
              -1 == i ? s.push(n || t, e) : ((s[i + 1] = e), n && (s[i] = n)),
              new r(s)
            );
          },
          remove: function (t) {
            var e = this.find(t);
            if (-1 == e) return this;
            var n = this.content.slice();
            return (n.splice(e, 2), new r(n));
          },
          addToStart: function (t, e) {
            return new r([t, e].concat(this.remove(t).content));
          },
          addToEnd: function (t, e) {
            var n = this.remove(t).content.slice();
            return (n.push(t, e), new r(n));
          },
          addBefore: function (t, e, n) {
            var o = this.remove(e),
              i = o.content.slice(),
              s = o.find(t);
            return (i.splice(-1 == s ? i.length : s, 0, e, n), new r(i));
          },
          forEach: function (t) {
            for (var e = 0; e < this.content.length; e += 2)
              t(this.content[e], this.content[e + 1]);
          },
          prepend: function (t) {
            return (t = r.from(t)).size
              ? new r(t.content.concat(this.subtract(t).content))
              : this;
          },
          append: function (t) {
            return (t = r.from(t)).size
              ? new r(this.subtract(t).content.concat(t.content))
              : this;
          },
          subtract: function (t) {
            var e = this;
            t = r.from(t);
            for (var n = 0; n < t.content.length; n += 2)
              e = e.remove(t.content[n]);
            return e;
          },
          toObject: function () {
            var t = {};
            return (
              this.forEach(function (e, n) {
                t[e] = n;
              }),
              t
            );
          },
          get size() {
            return this.content.length >> 1;
          },
        }),
        (r.from = function (t) {
          if (t instanceof r) return t;
          var e = [];
          if (t) for (var n in t) e.push(n, t[n]);
          return new r(e);
        }));
      const o = r;
      function i(t, e, n) {
        for (let r = 0; ; r++) {
          if (r == t.childCount || r == e.childCount)
            return t.childCount == e.childCount ? null : n;
          let o = t.child(r),
            s = e.child(r);
          if (o != s) {
            if (!o.sameMarkup(s)) return n;
            if (o.isText && o.text != s.text) {
              for (let t = 0; o.text[t] == s.text[t]; t++) n++;
              return n;
            }
            if (o.content.size || s.content.size) {
              let t = i(o.content, s.content, n + 1);
              if (null != t) return t;
            }
            n += o.nodeSize;
          } else n += o.nodeSize;
        }
      }
      function s(t, e, n, r) {
        for (let o = t.childCount, i = e.childCount; ; ) {
          if (0 == o || 0 == i) return o == i ? null : { a: n, b: r };
          let l = t.child(--o),
            a = e.child(--i),
            c = l.nodeSize;
          if (l != a) {
            if (!l.sameMarkup(a)) return { a: n, b: r };
            if (l.isText && l.text != a.text) {
              let t = 0,
                e = Math.min(l.text.length, a.text.length);
              for (
                ;
                t < e &&
                l.text[l.text.length - t - 1] == a.text[a.text.length - t - 1];
              )
                (t++, n--, r--);
              return { a: n, b: r };
            }
            if (l.content.size || a.content.size) {
              let t = s(l.content, a.content, n - 1, r - 1);
              if (t) return t;
            }
            ((n -= c), (r -= c));
          } else ((n -= c), (r -= c));
        }
      }
      class l {
        constructor(t, e) {
          if (((this.content = t), (this.size = e || 0), null == e))
            for (let n = 0; n < t.length; n++) this.size += t[n].nodeSize;
        }
        nodesBetween(t, e, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            o = arguments.length > 4 ? arguments[4] : void 0;
          for (let i = 0, s = 0; s < e; i++) {
            let l = this.content[i],
              a = s + l.nodeSize;
            if (a > t && !1 !== n(l, r + s, o || null, i) && l.content.size) {
              let o = s + 1;
              l.nodesBetween(
                Math.max(0, t - o),
                Math.min(l.content.size, e - o),
                n,
                r + o,
              );
            }
            s = a;
          }
        }
        descendants(t) {
          this.nodesBetween(0, this.size, t);
        }
        textBetween(t, e, n, r) {
          let o = "",
            i = !0;
          return (
            this.nodesBetween(
              t,
              e,
              (s, l) => {
                let a = s.isText
                  ? s.text.slice(Math.max(t, l) - l, e - l)
                  : s.isLeaf
                    ? r
                      ? "function" === typeof r
                        ? r(s)
                        : r
                      : s.type.spec.leafText
                        ? s.type.spec.leafText(s)
                        : ""
                    : "";
                (s.isBlock &&
                  ((s.isLeaf && a) || s.isTextblock) &&
                  n &&
                  (i ? (i = !1) : (o += n)),
                  (o += a));
              },
              0,
            ),
            o
          );
        }
        append(t) {
          if (!t.size) return this;
          if (!this.size) return t;
          let e = this.lastChild,
            n = t.firstChild,
            r = this.content.slice(),
            o = 0;
          for (
            e.isText &&
            e.sameMarkup(n) &&
            ((r[r.length - 1] = e.withText(e.text + n.text)), (o = 1));
            o < t.content.length;
            o++
          )
            r.push(t.content[o]);
          return new l(r, this.size + t.size);
        }
        cut(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.size;
          if (0 == t && e == this.size) return this;
          let n = [],
            r = 0;
          if (e > t)
            for (let o = 0, i = 0; i < e; o++) {
              let s = this.content[o],
                l = i + s.nodeSize;
              (l > t &&
                ((i < t || l > e) &&
                  (s = s.isText
                    ? s.cut(Math.max(0, t - i), Math.min(s.text.length, e - i))
                    : s.cut(
                        Math.max(0, t - i - 1),
                        Math.min(s.content.size, e - i - 1),
                      )),
                n.push(s),
                (r += s.nodeSize)),
                (i = l));
            }
          return new l(n, r);
        }
        cutByIndex(t, e) {
          return t == e
            ? l.empty
            : 0 == t && e == this.content.length
              ? this
              : new l(this.content.slice(t, e));
        }
        replaceChild(t, e) {
          let n = this.content[t];
          if (n == e) return this;
          let r = this.content.slice(),
            o = this.size + e.nodeSize - n.nodeSize;
          return ((r[t] = e), new l(r, o));
        }
        addToStart(t) {
          return new l([t].concat(this.content), this.size + t.nodeSize);
        }
        addToEnd(t) {
          return new l(this.content.concat(t), this.size + t.nodeSize);
        }
        eq(t) {
          if (this.content.length != t.content.length) return !1;
          for (let e = 0; e < this.content.length; e++)
            if (!this.content[e].eq(t.content[e])) return !1;
          return !0;
        }
        get firstChild() {
          return this.content.length ? this.content[0] : null;
        }
        get lastChild() {
          return this.content.length
            ? this.content[this.content.length - 1]
            : null;
        }
        get childCount() {
          return this.content.length;
        }
        child(t) {
          let e = this.content[t];
          if (!e)
            throw new RangeError("Index " + t + " out of range for " + this);
          return e;
        }
        maybeChild(t) {
          return this.content[t] || null;
        }
        forEach(t) {
          for (let e = 0, n = 0; e < this.content.length; e++) {
            let r = this.content[e];
            (t(r, n, e), (n += r.nodeSize));
          }
        }
        findDiffStart(t) {
          return i(
            this,
            t,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          );
        }
        findDiffEnd(t) {
          return s(
            this,
            t,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.size,
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : t.size,
          );
        }
        findIndex(t) {
          if (0 == t) return c(0, t);
          if (t == this.size) return c(this.content.length, t);
          if (t > this.size || t < 0)
            throw new RangeError(
              "Position ".concat(t, " outside of fragment (").concat(this, ")"),
            );
          for (let e = 0, n = 0; ; e++) {
            let r = n + this.child(e).nodeSize;
            if (r >= t) return r == t ? c(e + 1, r) : c(e, n);
            n = r;
          }
        }
        toString() {
          return "<" + this.toStringInner() + ">";
        }
        toStringInner() {
          return this.content.join(", ");
        }
        toJSON() {
          return this.content.length
            ? this.content.map((t) => t.toJSON())
            : null;
        }
        static fromJSON(t, e) {
          if (!e) return l.empty;
          if (!Array.isArray(e))
            throw new RangeError("Invalid input for Fragment.fromJSON");
          return new l(e.map(t.nodeFromJSON));
        }
        static fromArray(t) {
          if (!t.length) return l.empty;
          let e,
            n = 0;
          for (let r = 0; r < t.length; r++) {
            let o = t[r];
            ((n += o.nodeSize),
              r && o.isText && t[r - 1].sameMarkup(o)
                ? (e || (e = t.slice(0, r)),
                  (e[e.length - 1] = o.withText(e[e.length - 1].text + o.text)))
                : e && e.push(o));
          }
          return new l(e || t, n);
        }
        static from(t) {
          if (!t) return l.empty;
          if (t instanceof l) return t;
          if (Array.isArray(t)) return this.fromArray(t);
          if (t.attrs) return new l([t], t.nodeSize);
          throw new RangeError(
            "Can not convert " +
              t +
              " to a Fragment" +
              (t.nodesBetween
                ? " (looks like multiple versions of prosemirror-model were loaded)"
                : ""),
          );
        }
      }
      l.empty = new l([], 0);
      const a = { index: 0, offset: 0 };
      function c(t, e) {
        return ((a.index = t), (a.offset = e), a);
      }
      function d(t, e) {
        if (t === e) return !0;
        if (!t || "object" != typeof t || !e || "object" != typeof e) return !1;
        let n = Array.isArray(t);
        if (Array.isArray(e) != n) return !1;
        if (n) {
          if (t.length != e.length) return !1;
          for (let n = 0; n < t.length; n++) if (!d(t[n], e[n])) return !1;
        } else {
          for (let n in t) if (!(n in e) || !d(t[n], e[n])) return !1;
          for (let n in e) if (!(n in t)) return !1;
        }
        return !0;
      }
      class h {
        constructor(t, e) {
          ((this.type = t), (this.attrs = e));
        }
        addToSet(t) {
          let e,
            n = !1;
          for (let r = 0; r < t.length; r++) {
            let o = t[r];
            if (this.eq(o)) return t;
            if (this.type.excludes(o.type)) e || (e = t.slice(0, r));
            else {
              if (o.type.excludes(this.type)) return t;
              (!n &&
                o.type.rank > this.type.rank &&
                (e || (e = t.slice(0, r)), e.push(this), (n = !0)),
                e && e.push(o));
            }
          }
          return (e || (e = t.slice()), n || e.push(this), e);
        }
        removeFromSet(t) {
          for (let e = 0; e < t.length; e++)
            if (this.eq(t[e])) return t.slice(0, e).concat(t.slice(e + 1));
          return t;
        }
        isInSet(t) {
          for (let e = 0; e < t.length; e++) if (this.eq(t[e])) return !0;
          return !1;
        }
        eq(t) {
          return this == t || (this.type == t.type && d(this.attrs, t.attrs));
        }
        toJSON() {
          let t = { type: this.type.name };
          for (let e in this.attrs) {
            t.attrs = this.attrs;
            break;
          }
          return t;
        }
        static fromJSON(t, e) {
          if (!e) throw new RangeError("Invalid input for Mark.fromJSON");
          let n = t.marks[e.type];
          if (!n)
            throw new RangeError(
              "There is no mark type ".concat(e.type, " in this schema"),
            );
          let r = n.create(e.attrs);
          return (n.checkAttrs(r.attrs), r);
        }
        static sameSet(t, e) {
          if (t == e) return !0;
          if (t.length != e.length) return !1;
          for (let n = 0; n < t.length; n++) if (!t[n].eq(e[n])) return !1;
          return !0;
        }
        static setFrom(t) {
          if (!t || (Array.isArray(t) && 0 == t.length)) return h.none;
          if (t instanceof h) return [t];
          let e = t.slice();
          return (e.sort((t, e) => t.type.rank - e.type.rank), e);
        }
      }
      h.none = [];
      class p extends Error {}
      class u {
        constructor(t, e, n) {
          ((this.content = t), (this.openStart = e), (this.openEnd = n));
        }
        get size() {
          return this.content.size - this.openStart - this.openEnd;
        }
        insertAt(t, e) {
          let n = m(this.content, t + this.openStart, e);
          return n && new u(n, this.openStart, this.openEnd);
        }
        removeBetween(t, e) {
          return new u(
            f(this.content, t + this.openStart, e + this.openStart),
            this.openStart,
            this.openEnd,
          );
        }
        eq(t) {
          return (
            this.content.eq(t.content) &&
            this.openStart == t.openStart &&
            this.openEnd == t.openEnd
          );
        }
        toString() {
          return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }
        toJSON() {
          if (!this.content.size) return null;
          let t = { content: this.content.toJSON() };
          return (
            this.openStart > 0 && (t.openStart = this.openStart),
            this.openEnd > 0 && (t.openEnd = this.openEnd),
            t
          );
        }
        static fromJSON(t, e) {
          if (!e) return u.empty;
          let n = e.openStart || 0,
            r = e.openEnd || 0;
          if ("number" != typeof n || "number" != typeof r)
            throw new RangeError("Invalid input for Slice.fromJSON");
          return new u(l.fromJSON(t, e.content), n, r);
        }
        static maxOpen(t) {
          let e =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = 0,
            r = 0;
          for (
            let o = t.firstChild;
            o && !o.isLeaf && (e || !o.type.spec.isolating);
            o = o.firstChild
          )
            n++;
          for (
            let o = t.lastChild;
            o && !o.isLeaf && (e || !o.type.spec.isolating);
            o = o.lastChild
          )
            r++;
          return new u(t, n, r);
        }
      }
      function f(t, e, n) {
        let { index: r, offset: o } = t.findIndex(e),
          i = t.maybeChild(r),
          { index: s, offset: l } = t.findIndex(n);
        if (o == e || i.isText) {
          if (l != n && !t.child(s).isText)
            throw new RangeError("Removing non-flat range");
          return t.cut(0, e).append(t.cut(n));
        }
        if (r != s) throw new RangeError("Removing non-flat range");
        return t.replaceChild(r, i.copy(f(i.content, e - o - 1, n - o - 1)));
      }
      function m(t, e, n, r) {
        let { index: o, offset: i } = t.findIndex(e),
          s = t.maybeChild(o);
        if (i == e || s.isText)
          return r && !r.canReplace(o, o, n)
            ? null
            : t.cut(0, e).append(n).append(t.cut(e));
        let l = m(s.content, e - i - 1, n, s);
        return l && t.replaceChild(o, s.copy(l));
      }
      function g(t, e, n) {
        if (n.openStart > t.depth)
          throw new p("Inserted content deeper than insertion position");
        if (t.depth - n.openStart != e.depth - n.openEnd)
          throw new p("Inconsistent open depths");
        return y(t, e, n, 0);
      }
      function y(t, e, n, r) {
        let o = t.index(r),
          i = t.node(r);
        if (o == e.index(r) && r < t.depth - n.openStart) {
          let s = y(t, e, n, r + 1);
          return i.copy(i.content.replaceChild(o, s));
        }
        if (n.content.size) {
          if (n.openStart || n.openEnd || t.depth != r || e.depth != r) {
            let { start: o, end: s } = (function (t, e) {
              let n = e.depth - t.openStart,
                r = e.node(n).copy(t.content);
              for (let o = n - 1; o >= 0; o--) r = e.node(o).copy(l.from(r));
              return {
                start: r.resolveNoCache(t.openStart + n),
                end: r.resolveNoCache(r.content.size - t.openEnd - n),
              };
            })(n, t);
            return x(i, S(t, o, s, e, r));
          }
          {
            let r = t.parent,
              o = r.content;
            return x(
              r,
              o
                .cut(0, t.parentOffset)
                .append(n.content)
                .append(o.cut(e.parentOffset)),
            );
          }
        }
        return x(i, M(t, e, r));
      }
      function v(t, e) {
        if (!e.type.compatibleContent(t.type))
          throw new p("Cannot join " + e.type.name + " onto " + t.type.name);
      }
      function w(t, e, n) {
        let r = t.node(n);
        return (v(r, e.node(n)), r);
      }
      function b(t, e) {
        let n = e.length - 1;
        n >= 0 && t.isText && t.sameMarkup(e[n])
          ? (e[n] = t.withText(e[n].text + t.text))
          : e.push(t);
      }
      function k(t, e, n, r) {
        let o = (e || t).node(n),
          i = 0,
          s = e ? e.index(n) : o.childCount;
        t &&
          ((i = t.index(n)),
          t.depth > n ? i++ : t.textOffset && (b(t.nodeAfter, r), i++));
        for (let l = i; l < s; l++) b(o.child(l), r);
        e && e.depth == n && e.textOffset && b(e.nodeBefore, r);
      }
      function x(t, e) {
        return (t.type.checkContent(e), t.copy(e));
      }
      function S(t, e, n, r, o) {
        let i = t.depth > o && w(t, e, o + 1),
          s = r.depth > o && w(n, r, o + 1),
          a = [];
        return (
          k(null, t, o, a),
          i && s && e.index(o) == n.index(o)
            ? (v(i, s), b(x(i, S(t, e, n, r, o + 1)), a))
            : (i && b(x(i, M(t, e, o + 1)), a),
              k(e, n, o, a),
              s && b(x(s, M(n, r, o + 1)), a)),
          k(r, null, o, a),
          new l(a)
        );
      }
      function M(t, e, n) {
        let r = [];
        if ((k(null, t, n, r), t.depth > n)) {
          b(x(w(t, e, n + 1), M(t, e, n + 1)), r);
        }
        return (k(e, null, n, r), new l(r));
      }
      u.empty = new u(l.empty, 0, 0);
      class C {
        constructor(t, e, n) {
          ((this.pos = t),
            (this.path = e),
            (this.parentOffset = n),
            (this.depth = e.length / 3 - 1));
        }
        resolveDepth(t) {
          return null == t ? this.depth : t < 0 ? this.depth + t : t;
        }
        get parent() {
          return this.node(this.depth);
        }
        get doc() {
          return this.node(0);
        }
        node(t) {
          return this.path[3 * this.resolveDepth(t)];
        }
        index(t) {
          return this.path[3 * this.resolveDepth(t) + 1];
        }
        indexAfter(t) {
          return (
            (t = this.resolveDepth(t)),
            this.index(t) + (t != this.depth || this.textOffset ? 1 : 0)
          );
        }
        start(t) {
          return 0 == (t = this.resolveDepth(t)) ? 0 : this.path[3 * t - 1] + 1;
        }
        end(t) {
          return (
            (t = this.resolveDepth(t)),
            this.start(t) + this.node(t).content.size
          );
        }
        before(t) {
          if (!(t = this.resolveDepth(t)))
            throw new RangeError(
              "There is no position before the top-level node",
            );
          return t == this.depth + 1 ? this.pos : this.path[3 * t - 1];
        }
        after(t) {
          if (!(t = this.resolveDepth(t)))
            throw new RangeError(
              "There is no position after the top-level node",
            );
          return t == this.depth + 1
            ? this.pos
            : this.path[3 * t - 1] + this.path[3 * t].nodeSize;
        }
        get textOffset() {
          return this.pos - this.path[this.path.length - 1];
        }
        get nodeAfter() {
          let t = this.parent,
            e = this.index(this.depth);
          if (e == t.childCount) return null;
          let n = this.pos - this.path[this.path.length - 1],
            r = t.child(e);
          return n ? t.child(e).cut(n) : r;
        }
        get nodeBefore() {
          let t = this.index(this.depth),
            e = this.pos - this.path[this.path.length - 1];
          return e
            ? this.parent.child(t).cut(0, e)
            : 0 == t
              ? null
              : this.parent.child(t - 1);
        }
        posAtIndex(t, e) {
          e = this.resolveDepth(e);
          let n = this.path[3 * e],
            r = 0 == e ? 0 : this.path[3 * e - 1] + 1;
          for (let o = 0; o < t; o++) r += n.child(o).nodeSize;
          return r;
        }
        marks() {
          let t = this.parent,
            e = this.index();
          if (0 == t.content.size) return h.none;
          if (this.textOffset) return t.child(e).marks;
          let n = t.maybeChild(e - 1),
            r = t.maybeChild(e);
          if (!n) {
            let t = n;
            ((n = r), (r = t));
          }
          let o = n.marks;
          for (var i = 0; i < o.length; i++)
            !1 !== o[i].type.spec.inclusive ||
              (r && o[i].isInSet(r.marks)) ||
              (o = o[i--].removeFromSet(o));
          return o;
        }
        marksAcross(t) {
          let e = this.parent.maybeChild(this.index());
          if (!e || !e.isInline) return null;
          let n = e.marks,
            r = t.parent.maybeChild(t.index());
          for (var o = 0; o < n.length; o++)
            !1 !== n[o].type.spec.inclusive ||
              (r && n[o].isInSet(r.marks)) ||
              (n = n[o--].removeFromSet(n));
          return n;
        }
        sharedDepth(t) {
          for (let e = this.depth; e > 0; e--)
            if (this.start(e) <= t && this.end(e) >= t) return e;
          return 0;
        }
        blockRange() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this,
            e = arguments.length > 1 ? arguments[1] : void 0;
          if (t.pos < this.pos) return t.blockRange(this);
          for (
            let n =
              this.depth -
              (this.parent.inlineContent || this.pos == t.pos ? 1 : 0);
            n >= 0;
            n--
          )
            if (t.pos <= this.end(n) && (!e || e(this.node(n))))
              return new A(this, t, n);
          return null;
        }
        sameParent(t) {
          return this.pos - this.parentOffset == t.pos - t.parentOffset;
        }
        max(t) {
          return t.pos > this.pos ? t : this;
        }
        min(t) {
          return t.pos < this.pos ? t : this;
        }
        toString() {
          let t = "";
          for (let e = 1; e <= this.depth; e++)
            t +=
              (t ? "/" : "") + this.node(e).type.name + "_" + this.index(e - 1);
          return t + ":" + this.parentOffset;
        }
        static resolve(t, e) {
          if (!(e >= 0 && e <= t.content.size))
            throw new RangeError("Position " + e + " out of range");
          let n = [],
            r = 0,
            o = e;
          for (let i = t; ; ) {
            let { index: t, offset: e } = i.content.findIndex(o),
              s = o - e;
            if ((n.push(i, t, r + e), !s)) break;
            if (((i = i.child(t)), i.isText)) break;
            ((o = s - 1), (r += e + 1));
          }
          return new C(e, n, o);
        }
        static resolveCached(t, e) {
          let n = T.get(t);
          if (n)
            for (let o = 0; o < n.elts.length; o++) {
              let t = n.elts[o];
              if (t.pos == e) return t;
            }
          else T.set(t, (n = new O()));
          let r = (n.elts[n.i] = C.resolve(t, e));
          return ((n.i = (n.i + 1) % N), r);
        }
      }
      class O {
        constructor() {
          ((this.elts = []), (this.i = 0));
        }
      }
      const N = 12,
        T = new WeakMap();
      class A {
        constructor(t, e, n) {
          ((this.$from = t), (this.$to = e), (this.depth = n));
        }
        get start() {
          return this.$from.before(this.depth + 1);
        }
        get end() {
          return this.$to.after(this.depth + 1);
        }
        get parent() {
          return this.$from.node(this.depth);
        }
        get startIndex() {
          return this.$from.index(this.depth);
        }
        get endIndex() {
          return this.$to.indexAfter(this.depth);
        }
      }
      const E = Object.create(null);
      class D {
        constructor(t, e, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : h.none;
          ((this.type = t),
            (this.attrs = e),
            (this.marks = r),
            (this.content = n || l.empty));
        }
        get children() {
          return this.content.content;
        }
        get nodeSize() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
        get childCount() {
          return this.content.childCount;
        }
        child(t) {
          return this.content.child(t);
        }
        maybeChild(t) {
          return this.content.maybeChild(t);
        }
        forEach(t) {
          this.content.forEach(t);
        }
        nodesBetween(t, e, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          this.content.nodesBetween(t, e, n, r, this);
        }
        descendants(t) {
          this.nodesBetween(0, this.content.size, t);
        }
        get textContent() {
          return this.isLeaf && this.type.spec.leafText
            ? this.type.spec.leafText(this)
            : this.textBetween(0, this.content.size, "");
        }
        textBetween(t, e, n, r) {
          return this.content.textBetween(t, e, n, r);
        }
        get firstChild() {
          return this.content.firstChild;
        }
        get lastChild() {
          return this.content.lastChild;
        }
        eq(t) {
          return (
            this == t || (this.sameMarkup(t) && this.content.eq(t.content))
          );
        }
        sameMarkup(t) {
          return this.hasMarkup(t.type, t.attrs, t.marks);
        }
        hasMarkup(t, e, n) {
          return (
            this.type == t &&
            d(this.attrs, e || t.defaultAttrs || E) &&
            h.sameSet(this.marks, n || h.none)
          );
        }
        copy() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          return t == this.content
            ? this
            : new D(this.type, this.attrs, t, this.marks);
        }
        mark(t) {
          return t == this.marks
            ? this
            : new D(this.type, this.attrs, this.content, t);
        }
        cut(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.content.size;
          return 0 == t && e == this.content.size
            ? this
            : this.copy(this.content.cut(t, e));
        }
        slice(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.content.size,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (t == e) return u.empty;
          let r = this.resolve(t),
            o = this.resolve(e),
            i = n ? 0 : r.sharedDepth(e),
            s = r.start(i),
            l = r.node(i).content.cut(r.pos - s, o.pos - s);
          return new u(l, r.depth - i, o.depth - i);
        }
        replace(t, e, n) {
          return g(this.resolve(t), this.resolve(e), n);
        }
        nodeAt(t) {
          for (let e = this; ; ) {
            let { index: n, offset: r } = e.content.findIndex(t);
            if (((e = e.maybeChild(n)), !e)) return null;
            if (r == t || e.isText) return e;
            t -= r + 1;
          }
        }
        childAfter(t) {
          let { index: e, offset: n } = this.content.findIndex(t);
          return { node: this.content.maybeChild(e), index: e, offset: n };
        }
        childBefore(t) {
          if (0 == t) return { node: null, index: 0, offset: 0 };
          let { index: e, offset: n } = this.content.findIndex(t);
          if (n < t)
            return { node: this.content.child(e), index: e, offset: n };
          let r = this.content.child(e - 1);
          return { node: r, index: e - 1, offset: n - r.nodeSize };
        }
        resolve(t) {
          return C.resolveCached(this, t);
        }
        resolveNoCache(t) {
          return C.resolve(this, t);
        }
        rangeHasMark(t, e, n) {
          let r = !1;
          return (
            e > t &&
              this.nodesBetween(
                t,
                e,
                (t) => (n.isInSet(t.marks) && (r = !0), !r),
              ),
            r
          );
        }
        get isBlock() {
          return this.type.isBlock;
        }
        get isTextblock() {
          return this.type.isTextblock;
        }
        get inlineContent() {
          return this.type.inlineContent;
        }
        get isInline() {
          return this.type.isInline;
        }
        get isText() {
          return this.type.isText;
        }
        get isLeaf() {
          return this.type.isLeaf;
        }
        get isAtom() {
          return this.type.isAtom;
        }
        toString() {
          if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
          let t = this.type.name;
          return (
            this.content.size &&
              (t += "(" + this.content.toStringInner() + ")"),
            I(this.marks, t)
          );
        }
        contentMatchAt(t) {
          let e = this.type.contentMatch.matchFragment(this.content, 0, t);
          if (!e)
            throw new Error(
              "Called contentMatchAt on a node with invalid content",
            );
          return e;
        }
        canReplace(t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : l.empty,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : n.childCount,
            i = this.contentMatchAt(t).matchFragment(n, r, o),
            s = i && i.matchFragment(this.content, e);
          if (!s || !s.validEnd) return !1;
          for (let l = r; l < o; l++)
            if (!this.type.allowsMarks(n.child(l).marks)) return !1;
          return !0;
        }
        canReplaceWith(t, e, n, r) {
          if (r && !this.type.allowsMarks(r)) return !1;
          let o = this.contentMatchAt(t).matchType(n),
            i = o && o.matchFragment(this.content, e);
          return !!i && i.validEnd;
        }
        canAppend(t) {
          return t.content.size
            ? this.canReplace(this.childCount, this.childCount, t.content)
            : this.type.compatibleContent(t.type);
        }
        check() {
          (this.type.checkContent(this.content),
            this.type.checkAttrs(this.attrs));
          let t = h.none;
          for (let e = 0; e < this.marks.length; e++) {
            let n = this.marks[e];
            (n.type.checkAttrs(n.attrs), (t = n.addToSet(t)));
          }
          if (!h.sameSet(t, this.marks))
            throw new RangeError(
              "Invalid collection of marks for node "
                .concat(this.type.name, ": ")
                .concat(this.marks.map((t) => t.type.name)),
            );
          this.content.forEach((t) => t.check());
        }
        toJSON() {
          let t = { type: this.type.name };
          for (let e in this.attrs) {
            t.attrs = this.attrs;
            break;
          }
          return (
            this.content.size && (t.content = this.content.toJSON()),
            this.marks.length && (t.marks = this.marks.map((t) => t.toJSON())),
            t
          );
        }
        static fromJSON(t, e) {
          if (!e) throw new RangeError("Invalid input for Node.fromJSON");
          let n;
          if (e.marks) {
            if (!Array.isArray(e.marks))
              throw new RangeError("Invalid mark data for Node.fromJSON");
            n = e.marks.map(t.markFromJSON);
          }
          if ("text" == e.type) {
            if ("string" != typeof e.text)
              throw new RangeError("Invalid text node in JSON");
            return t.text(e.text, n);
          }
          let r = l.fromJSON(t, e.content),
            o = t.nodeType(e.type).create(e.attrs, r, n);
          return (o.type.checkAttrs(o.attrs), o);
        }
      }
      D.prototype.text = void 0;
      class R extends D {
        constructor(t, e, n, r) {
          if ((super(t, e, null, r), !n))
            throw new RangeError("Empty text nodes are not allowed");
          this.text = n;
        }
        toString() {
          return this.type.spec.toDebugString
            ? this.type.spec.toDebugString(this)
            : I(this.marks, JSON.stringify(this.text));
        }
        get textContent() {
          return this.text;
        }
        textBetween(t, e) {
          return this.text.slice(t, e);
        }
        get nodeSize() {
          return this.text.length;
        }
        mark(t) {
          return t == this.marks
            ? this
            : new R(this.type, this.attrs, this.text, t);
        }
        withText(t) {
          return t == this.text
            ? this
            : new R(this.type, this.attrs, t, this.marks);
        }
        cut() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.text.length;
          return 0 == t && e == this.text.length
            ? this
            : this.withText(this.text.slice(t, e));
        }
        eq(t) {
          return this.sameMarkup(t) && this.text == t.text;
        }
        toJSON() {
          let t = super.toJSON();
          return ((t.text = this.text), t);
        }
      }
      function I(t, e) {
        for (let n = t.length - 1; n >= 0; n--)
          e = t[n].type.name + "(" + e + ")";
        return e;
      }
      class P {
        constructor(t) {
          ((this.validEnd = t), (this.next = []), (this.wrapCache = []));
        }
        static parse(t, e) {
          let n = new z(t, e);
          if (null == n.next) return P.empty;
          let r = F(n);
          n.next && n.err("Unexpected trailing text");
          let o = (function (t) {
            let e = Object.create(null);
            return n(j(t, 0));
            function n(r) {
              let o = [];
              r.forEach((e) => {
                t[e].forEach((e) => {
                  let n,
                    { term: r, to: i } = e;
                  if (r) {
                    for (let t = 0; t < o.length; t++)
                      o[t][0] == r && (n = o[t][1]);
                    j(t, i).forEach((t) => {
                      (n || o.push([r, (n = [])]),
                        -1 == n.indexOf(t) && n.push(t));
                    });
                  }
                });
              });
              let i = (e[r.join(",")] = new P(r.indexOf(t.length - 1) > -1));
              for (let t = 0; t < o.length; t++) {
                let r = o[t][1].sort(J);
                i.next.push({ type: o[t][0], next: e[r.join(",")] || n(r) });
              }
              return i;
            }
          })(
            (function (t) {
              let e = [[]];
              return (o(i(t, 0), n()), e);
              function n() {
                return e.push([]) - 1;
              }
              function r(t, n, r) {
                let o = { term: r, to: n };
                return (e[t].push(o), o);
              }
              function o(t, e) {
                t.forEach((t) => (t.to = e));
              }
              function i(t, e) {
                if ("choice" == t.type)
                  return t.exprs.reduce((t, n) => t.concat(i(n, e)), []);
                if ("seq" != t.type) {
                  if ("star" == t.type) {
                    let s = n();
                    return (r(e, s), o(i(t.expr, s), s), [r(s)]);
                  }
                  if ("plus" == t.type) {
                    let s = n();
                    return (o(i(t.expr, e), s), o(i(t.expr, s), s), [r(s)]);
                  }
                  if ("opt" == t.type) return [r(e)].concat(i(t.expr, e));
                  if ("range" == t.type) {
                    let s = e;
                    for (let e = 0; e < t.min; e++) {
                      let e = n();
                      (o(i(t.expr, s), e), (s = e));
                    }
                    if (-1 == t.max) o(i(t.expr, s), s);
                    else
                      for (let e = t.min; e < t.max; e++) {
                        let e = n();
                        (r(s, e), o(i(t.expr, s), e), (s = e));
                      }
                    return [r(s)];
                  }
                  if ("name" == t.type) return [r(e, void 0, t.value)];
                  throw new Error("Unknown expr type");
                }
                for (let r = 0; ; r++) {
                  let s = i(t.exprs[r], e);
                  if (r == t.exprs.length - 1) return s;
                  o(s, (e = n()));
                }
              }
            })(r),
          );
          return (
            (function (t, e) {
              for (let n = 0, r = [t]; n < r.length; n++) {
                let t = r[n],
                  o = !t.validEnd,
                  i = [];
                for (let e = 0; e < t.next.length; e++) {
                  let { type: n, next: s } = t.next[e];
                  (i.push(n.name),
                    !o || n.isText || n.hasRequiredAttrs() || (o = !1),
                    -1 == r.indexOf(s) && r.push(s));
                }
                o &&
                  e.err(
                    "Only non-generatable nodes (" +
                      i.join(", ") +
                      ") in a required position (see https://prosemirror.net/docs/guide/#generatable)",
                  );
              }
            })(o, n),
            o
          );
        }
        matchType(t) {
          for (let e = 0; e < this.next.length; e++)
            if (this.next[e].type == t) return this.next[e].next;
          return null;
        }
        matchFragment(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t.childCount,
            r = this;
          for (let o = e; r && o < n; o++) r = r.matchType(t.child(o).type);
          return r;
        }
        get inlineContent() {
          return 0 != this.next.length && this.next[0].type.isInline;
        }
        get defaultType() {
          for (let t = 0; t < this.next.length; t++) {
            let { type: e } = this.next[t];
            if (!e.isText && !e.hasRequiredAttrs()) return e;
          }
          return null;
        }
        compatible(t) {
          for (let e = 0; e < this.next.length; e++)
            for (let n = 0; n < t.next.length; n++)
              if (this.next[e].type == t.next[n].type) return !0;
          return !1;
        }
        fillBefore(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            r = [this];
          return (function o(i, s) {
            let a = i.matchFragment(t, n);
            if (a && (!e || a.validEnd))
              return l.from(s.map((t) => t.createAndFill()));
            for (let t = 0; t < i.next.length; t++) {
              let { type: e, next: n } = i.next[t];
              if (!e.isText && !e.hasRequiredAttrs() && -1 == r.indexOf(n)) {
                r.push(n);
                let t = o(n, s.concat(e));
                if (t) return t;
              }
            }
            return null;
          })(this, []);
        }
        findWrapping(t) {
          for (let n = 0; n < this.wrapCache.length; n += 2)
            if (this.wrapCache[n] == t) return this.wrapCache[n + 1];
          let e = this.computeWrapping(t);
          return (this.wrapCache.push(t, e), e);
        }
        computeWrapping(t) {
          let e = Object.create(null),
            n = [{ match: this, type: null, via: null }];
          for (; n.length; ) {
            let r = n.shift(),
              o = r.match;
            if (o.matchType(t)) {
              let t = [];
              for (let e = r; e.type; e = e.via) t.push(e.type);
              return t.reverse();
            }
            for (let t = 0; t < o.next.length; t++) {
              let { type: i, next: s } = o.next[t];
              i.isLeaf ||
                i.hasRequiredAttrs() ||
                i.name in e ||
                (r.type && !s.validEnd) ||
                (n.push({ match: i.contentMatch, type: i, via: r }),
                (e[i.name] = !0));
            }
          }
          return null;
        }
        get edgeCount() {
          return this.next.length;
        }
        edge(t) {
          if (t >= this.next.length)
            throw new RangeError(
              "There's no ".concat(t, "th edge in this content match"),
            );
          return this.next[t];
        }
        toString() {
          let t = [];
          return (
            (function e(n) {
              t.push(n);
              for (let r = 0; r < n.next.length; r++)
                -1 == t.indexOf(n.next[r].next) && e(n.next[r].next);
            })(this),
            t
              .map((e, n) => {
                let r = n + (e.validEnd ? "*" : " ") + " ";
                for (let o = 0; o < e.next.length; o++)
                  r +=
                    (o ? ", " : "") +
                    e.next[o].type.name +
                    "->" +
                    t.indexOf(e.next[o].next);
                return r;
              })
              .join("\n")
          );
        }
      }
      P.empty = new P(!0);
      class z {
        constructor(t, e) {
          ((this.string = t),
            (this.nodeTypes = e),
            (this.inline = null),
            (this.pos = 0),
            (this.tokens = t.split(/\s*(?=\b|\W|$)/)),
            "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(),
            "" == this.tokens[0] && this.tokens.shift());
        }
        get next() {
          return this.tokens[this.pos];
        }
        eat(t) {
          return this.next == t && (this.pos++ || !0);
        }
        err(t) {
          throw new SyntaxError(
            t + " (in content expression '" + this.string + "')",
          );
        }
      }
      function F(t) {
        let e = [];
        do {
          e.push(B(t));
        } while (t.eat("|"));
        return 1 == e.length ? e[0] : { type: "choice", exprs: e };
      }
      function B(t) {
        let e = [];
        do {
          e.push($(t));
        } while (t.next && ")" != t.next && "|" != t.next);
        return 1 == e.length ? e[0] : { type: "seq", exprs: e };
      }
      function $(t) {
        let e = (function (t) {
          if (t.eat("(")) {
            let e = F(t);
            return (t.eat(")") || t.err("Missing closing paren"), e);
          }
          if (!/\W/.test(t.next)) {
            let e = (function (t, e) {
              let n = t.nodeTypes,
                r = n[e];
              if (r) return [r];
              let o = [];
              for (let i in n) {
                let t = n[i];
                t.isInGroup(e) && o.push(t);
              }
              0 == o.length && t.err("No node type or group '" + e + "' found");
              return o;
            })(t, t.next).map(
              (e) => (
                null == t.inline
                  ? (t.inline = e.isInline)
                  : t.inline != e.isInline &&
                    t.err("Mixing inline and block content"),
                { type: "name", value: e }
              ),
            );
            return (
              t.pos++,
              1 == e.length ? e[0] : { type: "choice", exprs: e }
            );
          }
          t.err("Unexpected token '" + t.next + "'");
        })(t);
        for (;;)
          if (t.eat("+")) e = { type: "plus", expr: e };
          else if (t.eat("*")) e = { type: "star", expr: e };
          else if (t.eat("?")) e = { type: "opt", expr: e };
          else {
            if (!t.eat("{")) break;
            e = L(t, e);
          }
        return e;
      }
      function V(t) {
        /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
        let e = Number(t.next);
        return (t.pos++, e);
      }
      function L(t, e) {
        let n = V(t),
          r = n;
        return (
          t.eat(",") && (r = "}" != t.next ? V(t) : -1),
          t.eat("}") || t.err("Unclosed braced range"),
          { type: "range", min: n, max: r, expr: e }
        );
      }
      function J(t, e) {
        return e - t;
      }
      function j(t, e) {
        let n = [];
        return (
          (function e(r) {
            let o = t[r];
            if (1 == o.length && !o[0].term) return e(o[0].to);
            n.push(r);
            for (let t = 0; t < o.length; t++) {
              let { term: r, to: i } = o[t];
              r || -1 != n.indexOf(i) || e(i);
            }
          })(e),
          n.sort(J)
        );
      }
      function K(t) {
        let e = Object.create(null);
        for (let n in t) {
          let r = t[n];
          if (!r.hasDefault) return null;
          e[n] = r.default;
        }
        return e;
      }
      function W(t, e) {
        let n = Object.create(null);
        for (let r in t) {
          let o = e && e[r];
          if (void 0 === o) {
            let e = t[r];
            if (!e.hasDefault)
              throw new RangeError("No value supplied for attribute " + r);
            o = e.default;
          }
          n[r] = o;
        }
        return n;
      }
      function q(t, e, n, r) {
        for (let o in e)
          if (!(o in t))
            throw new RangeError(
              "Unsupported attribute "
                .concat(o, " for ")
                .concat(n, " of type ")
                .concat(o),
            );
        for (let o in t) {
          let n = t[o];
          n.validate && n.validate(e[o]);
        }
      }
      function _(t, e) {
        let n = Object.create(null);
        if (e) for (let r in e) n[r] = new H(t, r, e[r]);
        return n;
      }
      class U {
        constructor(t, e, n) {
          ((this.name = t),
            (this.schema = e),
            (this.spec = n),
            (this.markSet = null),
            (this.groups = n.group ? n.group.split(" ") : []),
            (this.attrs = _(t, n.attrs)),
            (this.defaultAttrs = K(this.attrs)),
            (this.contentMatch = null),
            (this.inlineContent = null),
            (this.isBlock = !(n.inline || "text" == t)),
            (this.isText = "text" == t));
        }
        get isInline() {
          return !this.isBlock;
        }
        get isTextblock() {
          return this.isBlock && this.inlineContent;
        }
        get isLeaf() {
          return this.contentMatch == P.empty;
        }
        get isAtom() {
          return this.isLeaf || !!this.spec.atom;
        }
        isInGroup(t) {
          return this.groups.indexOf(t) > -1;
        }
        get whitespace() {
          return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
        }
        hasRequiredAttrs() {
          for (let t in this.attrs) if (this.attrs[t].isRequired) return !0;
          return !1;
        }
        compatibleContent(t) {
          return this == t || this.contentMatch.compatible(t.contentMatch);
        }
        computeAttrs(t) {
          return !t && this.defaultAttrs ? this.defaultAttrs : W(this.attrs, t);
        }
        create() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (this.isText)
            throw new Error("NodeType.create can't construct text nodes");
          return new D(this, this.computeAttrs(t), l.from(e), h.setFrom(n));
        }
        createChecked() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return (
            (e = l.from(e)),
            this.checkContent(e),
            new D(this, this.computeAttrs(t), e, h.setFrom(n))
          );
        }
        createAndFill() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (((t = this.computeAttrs(t)), (e = l.from(e)), e.size)) {
            let t = this.contentMatch.fillBefore(e);
            if (!t) return null;
            e = t.append(e);
          }
          let r = this.contentMatch.matchFragment(e),
            o = r && r.fillBefore(l.empty, !0);
          return o ? new D(this, t, e.append(o), h.setFrom(n)) : null;
        }
        validContent(t) {
          let e = this.contentMatch.matchFragment(t);
          if (!e || !e.validEnd) return !1;
          for (let n = 0; n < t.childCount; n++)
            if (!this.allowsMarks(t.child(n).marks)) return !1;
          return !0;
        }
        checkContent(t) {
          if (!this.validContent(t))
            throw new RangeError(
              "Invalid content for node "
                .concat(this.name, ": ")
                .concat(t.toString().slice(0, 50)),
            );
        }
        checkAttrs(t) {
          q(this.attrs, t, "node", this.name);
        }
        allowsMarkType(t) {
          return null == this.markSet || this.markSet.indexOf(t) > -1;
        }
        allowsMarks(t) {
          if (null == this.markSet) return !0;
          for (let e = 0; e < t.length; e++)
            if (!this.allowsMarkType(t[e].type)) return !1;
          return !0;
        }
        allowedMarks(t) {
          if (null == this.markSet) return t;
          let e;
          for (let n = 0; n < t.length; n++)
            this.allowsMarkType(t[n].type)
              ? e && e.push(t[n])
              : e || (e = t.slice(0, n));
          return e ? (e.length ? e : h.none) : t;
        }
        static compile(t, e) {
          let n = Object.create(null);
          t.forEach((t, r) => (n[t] = new U(t, e, r)));
          let r = e.spec.topNode || "doc";
          if (!n[r])
            throw new RangeError(
              "Schema is missing its top node type ('" + r + "')",
            );
          if (!n.text) throw new RangeError("Every schema needs a 'text' type");
          for (let o in n.text.attrs)
            throw new RangeError(
              "The text node type should not have attributes",
            );
          return n;
        }
      }
      class H {
        constructor(t, e, n) {
          ((this.hasDefault = Object.prototype.hasOwnProperty.call(
            n,
            "default",
          )),
            (this.default = n.default),
            (this.validate =
              "string" == typeof n.validate
                ? (function (t, e, n) {
                    let r = n.split("|");
                    return (n) => {
                      let o = null === n ? "null" : typeof n;
                      if (r.indexOf(o) < 0)
                        throw new RangeError(
                          "Expected value of type "
                            .concat(r, " for attribute ")
                            .concat(e, " on type ")
                            .concat(t, ", got ")
                            .concat(o),
                        );
                    };
                  })(t, e, n.validate)
                : n.validate));
        }
        get isRequired() {
          return !this.hasDefault;
        }
      }
      class G {
        constructor(t, e, n, r) {
          ((this.name = t),
            (this.rank = e),
            (this.schema = n),
            (this.spec = r),
            (this.attrs = _(t, r.attrs)),
            (this.excluded = null));
          let o = K(this.attrs);
          this.instance = o ? new h(this, o) : null;
        }
        create() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          return !t && this.instance
            ? this.instance
            : new h(this, W(this.attrs, t));
        }
        static compile(t, e) {
          let n = Object.create(null),
            r = 0;
          return (t.forEach((t, o) => (n[t] = new G(t, r++, e, o))), n);
        }
        removeFromSet(t) {
          for (var e = 0; e < t.length; e++)
            t[e].type == this &&
              ((t = t.slice(0, e).concat(t.slice(e + 1))), e--);
          return t;
        }
        isInSet(t) {
          for (let e = 0; e < t.length; e++) if (t[e].type == this) return t[e];
        }
        checkAttrs(t) {
          q(this.attrs, t, "mark", this.name);
        }
        excludes(t) {
          return this.excluded.indexOf(t) > -1;
        }
      }
      class Z {
        constructor(t) {
          ((this.linebreakReplacement = null),
            (this.cached = Object.create(null)));
          let e = (this.spec = {});
          for (let r in t) e[r] = t[r];
          ((e.nodes = o.from(t.nodes)),
            (e.marks = o.from(t.marks || {})),
            (this.nodes = U.compile(this.spec.nodes, this)),
            (this.marks = G.compile(this.spec.marks, this)));
          let n = Object.create(null);
          for (let r in this.nodes) {
            if (r in this.marks)
              throw new RangeError(r + " can not be both a node and a mark");
            let t = this.nodes[r],
              e = t.spec.content || "",
              o = t.spec.marks;
            if (
              ((t.contentMatch = n[e] || (n[e] = P.parse(e, this.nodes))),
              (t.inlineContent = t.contentMatch.inlineContent),
              t.spec.linebreakReplacement)
            ) {
              if (this.linebreakReplacement)
                throw new RangeError("Multiple linebreak nodes defined");
              if (!t.isInline || !t.isLeaf)
                throw new RangeError(
                  "Linebreak replacement nodes must be inline leaf nodes",
                );
              this.linebreakReplacement = t;
            }
            t.markSet =
              "_" == o
                ? null
                : o
                  ? Y(this, o.split(" "))
                  : "" != o && t.inlineContent
                    ? null
                    : [];
          }
          for (let r in this.marks) {
            let t = this.marks[r],
              e = t.spec.excludes;
            t.excluded = null == e ? [t] : "" == e ? [] : Y(this, e.split(" "));
          }
          ((this.nodeFromJSON = (t) => D.fromJSON(this, t)),
            (this.markFromJSON = (t) => h.fromJSON(this, t)),
            (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
            (this.cached.wrappings = Object.create(null)));
        }
        node(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0;
          if ("string" == typeof t) t = this.nodeType(t);
          else {
            if (!(t instanceof U))
              throw new RangeError("Invalid node type: " + t);
            if (t.schema != this)
              throw new RangeError(
                "Node type from different schema used (" + t.name + ")",
              );
          }
          return t.createChecked(e, n, r);
        }
        text(t, e) {
          let n = this.nodes.text;
          return new R(n, n.defaultAttrs, t, h.setFrom(e));
        }
        mark(t, e) {
          return ("string" == typeof t && (t = this.marks[t]), t.create(e));
        }
        nodeType(t) {
          let e = this.nodes[t];
          if (!e) throw new RangeError("Unknown node type: " + t);
          return e;
        }
      }
      function Y(t, e) {
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let o = e[r],
            i = t.marks[o],
            s = i;
          if (i) n.push(i);
          else
            for (let e in t.marks) {
              let r = t.marks[e];
              ("_" == o ||
                (r.spec.group && r.spec.group.split(" ").indexOf(o) > -1)) &&
                n.push((s = r));
            }
          if (!s) throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
        }
        return n;
      }
      class X {
        constructor(t, e) {
          ((this.schema = t),
            (this.rules = e),
            (this.tags = []),
            (this.styles = []));
          let n = (this.matchedStyles = []);
          (e.forEach((t) => {
            if (
              (function (t) {
                return null != t.tag;
              })(t)
            )
              this.tags.push(t);
            else if (
              (function (t) {
                return null != t.style;
              })(t)
            ) {
              let e = /[^=]*/.exec(t.style)[0];
              (n.indexOf(e) < 0 && n.push(e), this.styles.push(t));
            }
          }),
            (this.normalizeLists = !this.tags.some((e) => {
              if (!/^(ul|ol)\b/.test(e.tag) || !e.node) return !1;
              let n = t.nodes[e.node];
              return n.contentMatch.matchType(n);
            })));
        }
        parse(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = new ot(this, e, !1);
          return (n.addAll(t, h.none, e.from, e.to), n.finish());
        }
        parseSlice(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = new ot(this, e, !0);
          return (n.addAll(t, h.none, e.from, e.to), u.maxOpen(n.finish()));
        }
        matchTag(t, e, n) {
          for (
            let r = n ? this.tags.indexOf(n) + 1 : 0;
            r < this.tags.length;
            r++
          ) {
            let n = this.tags[r];
            if (
              it(t, n.tag) &&
              (void 0 === n.namespace || t.namespaceURI == n.namespace) &&
              (!n.context || e.matchesContext(n.context))
            ) {
              if (n.getAttrs) {
                let e = n.getAttrs(t);
                if (!1 === e) continue;
                n.attrs = e || void 0;
              }
              return n;
            }
          }
        }
        matchStyle(t, e, n, r) {
          for (
            let o = r ? this.styles.indexOf(r) + 1 : 0;
            o < this.styles.length;
            o++
          ) {
            let r = this.styles[o],
              i = r.style;
            if (
              !(
                0 != i.indexOf(t) ||
                (r.context && !n.matchesContext(r.context)) ||
                (i.length > t.length &&
                  (61 != i.charCodeAt(t.length) || i.slice(t.length + 1) != e))
              )
            ) {
              if (r.getAttrs) {
                let t = r.getAttrs(e);
                if (!1 === t) continue;
                r.attrs = t || void 0;
              }
              return r;
            }
          }
        }
        static schemaRules(t) {
          let e = [];
          function n(t) {
            let n = null == t.priority ? 50 : t.priority,
              r = 0;
            for (; r < e.length; r++) {
              let t = e[r];
              if ((null == t.priority ? 50 : t.priority) < n) break;
            }
            e.splice(r, 0, t);
          }
          for (let r in t.marks) {
            let e = t.marks[r].spec.parseDOM;
            e &&
              e.forEach((t) => {
                (n((t = st(t))),
                  t.mark || t.ignore || t.clearMark || (t.mark = r));
              });
          }
          for (let r in t.nodes) {
            let e = t.nodes[r].spec.parseDOM;
            e &&
              e.forEach((t) => {
                (n((t = st(t))), t.node || t.ignore || t.mark || (t.node = r));
              });
          }
          return e;
        }
        static fromSchema(t) {
          return (
            t.cached.domParser ||
            (t.cached.domParser = new X(t, X.schemaRules(t)))
          );
        }
      }
      const Q = {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          canvas: !0,
          dd: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          figcaption: !0,
          figure: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          li: !0,
          noscript: !0,
          ol: !0,
          output: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          tfoot: !0,
          ul: !0,
        },
        tt = {
          head: !0,
          noscript: !0,
          object: !0,
          script: !0,
          style: !0,
          title: !0,
        },
        et = { ol: !0, ul: !0 };
      function nt(t, e, n) {
        return null != e
          ? (e ? 1 : 0) | ("full" === e ? 2 : 0)
          : t && "pre" == t.whitespace
            ? 3
            : -5 & n;
      }
      class rt {
        constructor(t, e, n, r, o, i) {
          ((this.type = t),
            (this.attrs = e),
            (this.marks = n),
            (this.solid = r),
            (this.options = i),
            (this.content = []),
            (this.activeMarks = h.none),
            (this.match = o || (4 & i ? null : t.contentMatch)));
        }
        findWrapping(t) {
          if (!this.match) {
            if (!this.type) return [];
            let e = this.type.contentMatch.fillBefore(l.from(t));
            if (!e) {
              let e,
                n = this.type.contentMatch;
              return (e = n.findWrapping(t.type))
                ? ((this.match = n), e)
                : null;
            }
            this.match = this.type.contentMatch.matchFragment(e);
          }
          return this.match.findWrapping(t.type);
        }
        finish(t) {
          if (!(1 & this.options)) {
            let t,
              e = this.content[this.content.length - 1];
            if (e && e.isText && (t = /[ \t\r\n\u000c]+$/.exec(e.text))) {
              let n = e;
              e.text.length == t[0].length
                ? this.content.pop()
                : (this.content[this.content.length - 1] = n.withText(
                    n.text.slice(0, n.text.length - t[0].length),
                  ));
            }
          }
          let e = l.from(this.content);
          return (
            !t &&
              this.match &&
              (e = e.append(this.match.fillBefore(l.empty, !0))),
            this.type ? this.type.create(this.attrs, e, this.marks) : e
          );
        }
        inlineContext(t) {
          return this.type
            ? this.type.inlineContent
            : this.content.length
              ? this.content[0].isInline
              : t.parentNode &&
                !Q.hasOwnProperty(t.parentNode.nodeName.toLowerCase());
        }
      }
      class ot {
        constructor(t, e, n) {
          ((this.parser = t),
            (this.options = e),
            (this.isOpen = n),
            (this.open = 0),
            (this.localPreserveWS = !1));
          let r,
            o = e.topNode,
            i = nt(null, e.preserveWhitespace, 0) | (n ? 4 : 0);
          ((r = o
            ? new rt(
                o.type,
                o.attrs,
                h.none,
                !0,
                e.topMatch || o.type.contentMatch,
                i,
              )
            : new rt(
                n ? null : t.schema.topNodeType,
                null,
                h.none,
                !0,
                null,
                i,
              )),
            (this.nodes = [r]),
            (this.find = e.findPositions),
            (this.needsBlock = !1));
        }
        get top() {
          return this.nodes[this.open];
        }
        addDOM(t, e) {
          3 == t.nodeType
            ? this.addTextNode(t, e)
            : 1 == t.nodeType && this.addElement(t, e);
        }
        addTextNode(t, e) {
          let n = t.nodeValue,
            r = this.top,
            o =
              2 & r.options
                ? "full"
                : this.localPreserveWS || (1 & r.options) > 0,
            { schema: i } = this.parser;
          if (
            "full" === o ||
            r.inlineContext(t) ||
            /[^ \t\r\n\u000c]/.test(n)
          ) {
            if (o)
              if ("full" === o) n = n.replace(/\r\n?/g, "\n");
              else if (
                i.linebreakReplacement &&
                /[\r\n]/.test(n) &&
                this.top.findWrapping(i.linebreakReplacement.create())
              ) {
                let t = n.split(/\r?\n|\r/);
                for (let n = 0; n < t.length; n++)
                  (n && this.insertNode(i.linebreakReplacement.create(), e, !0),
                    t[n] && this.insertNode(i.text(t[n]), e, !/\S/.test(t[n])));
                n = "";
              } else n = n.replace(/\r?\n|\r/g, " ");
            else if (
              ((n = n.replace(/[ \t\r\n\u000c]+/g, " ")),
              /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1)
            ) {
              let e = r.content[r.content.length - 1],
                o = t.previousSibling;
              (!e ||
                (o && "BR" == o.nodeName) ||
                (e.isText && /[ \t\r\n\u000c]$/.test(e.text))) &&
                (n = n.slice(1));
            }
            (n && this.insertNode(i.text(n), e, !/\S/.test(n)),
              this.findInText(t));
          } else this.findInside(t);
        }
        addElement(t, e, n) {
          let r = this.localPreserveWS,
            o = this.top;
          ("PRE" == t.tagName || /pre/.test(t.style && t.style.whiteSpace)) &&
            (this.localPreserveWS = !0);
          let i,
            s = t.nodeName.toLowerCase();
          et.hasOwnProperty(s) &&
            this.parser.normalizeLists &&
            (function (t) {
              for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
                let t = 1 == e.nodeType ? e.nodeName.toLowerCase() : null;
                t && et.hasOwnProperty(t) && n
                  ? (n.appendChild(e), (e = n))
                  : "li" == t
                    ? (n = e)
                    : t && (n = null);
              }
            })(t);
          let l =
            (this.options.ruleFromNode && this.options.ruleFromNode(t)) ||
            (i = this.parser.matchTag(t, this, n));
          t: if (l ? l.ignore : tt.hasOwnProperty(s))
            (this.findInside(t), this.ignoreFallback(t, e));
          else if (!l || l.skip || l.closeParent) {
            l && l.closeParent
              ? (this.open = Math.max(0, this.open - 1))
              : l && l.skip.nodeType && (t = l.skip);
            let n,
              r = this.needsBlock;
            if (Q.hasOwnProperty(s))
              (o.content.length &&
                o.content[0].isInline &&
                this.open &&
                (this.open--, (o = this.top)),
                (n = !0),
                o.type || (this.needsBlock = !0));
            else if (!t.firstChild) {
              this.leafFallback(t, e);
              break t;
            }
            let i = l && l.skip ? e : this.readStyles(t, e);
            (i && this.addAll(t, i), n && this.sync(o), (this.needsBlock = r));
          } else {
            let n = this.readStyles(t, e);
            n &&
              this.addElementByRule(t, l, n, !1 === l.consuming ? i : void 0);
          }
          this.localPreserveWS = r;
        }
        leafFallback(t, e) {
          "BR" == t.nodeName &&
            this.top.type &&
            this.top.type.inlineContent &&
            this.addTextNode(t.ownerDocument.createTextNode("\n"), e);
        }
        ignoreFallback(t, e) {
          "BR" != t.nodeName ||
            (this.top.type && this.top.type.inlineContent) ||
            this.findPlace(this.parser.schema.text("-"), e, !0);
        }
        readStyles(t, e) {
          let n = t.style;
          if (n && n.length)
            for (let r = 0; r < this.parser.matchedStyles.length; r++) {
              let t = this.parser.matchedStyles[r],
                o = n.getPropertyValue(t);
              if (o)
                for (let n; ; ) {
                  let r = this.parser.matchStyle(t, o, this, n);
                  if (!r) break;
                  if (r.ignore) return null;
                  if (
                    ((e = r.clearMark
                      ? e.filter((t) => !r.clearMark(t))
                      : e.concat(
                          this.parser.schema.marks[r.mark].create(r.attrs),
                        )),
                    !1 !== r.consuming)
                  )
                    break;
                  n = r;
                }
            }
          return e;
        }
        addElementByRule(t, e, n, r) {
          let o, i;
          if (e.node)
            if (((i = this.parser.schema.nodes[e.node]), i.isLeaf))
              this.insertNode(i.create(e.attrs), n, "BR" == t.nodeName) ||
                this.leafFallback(t, n);
            else {
              let t = this.enter(i, e.attrs || null, n, e.preserveWhitespace);
              t && ((o = !0), (n = t));
            }
          else {
            let t = this.parser.schema.marks[e.mark];
            n = n.concat(t.create(e.attrs));
          }
          let s = this.top;
          if (i && i.isLeaf) this.findInside(t);
          else if (r) this.addElement(t, n, r);
          else if (e.getContent)
            (this.findInside(t),
              e
                .getContent(t, this.parser.schema)
                .forEach((t) => this.insertNode(t, n, !1)));
          else {
            let r = t;
            ("string" == typeof e.contentElement
              ? (r = t.querySelector(e.contentElement))
              : "function" == typeof e.contentElement
                ? (r = e.contentElement(t))
                : e.contentElement && (r = e.contentElement),
              this.findAround(t, r, !0),
              this.addAll(r, n),
              this.findAround(t, r, !1));
          }
          o && this.sync(s) && this.open--;
        }
        addAll(t, e, n, r) {
          let o = n || 0;
          for (
            let i = n ? t.childNodes[n] : t.firstChild,
              s = null == r ? null : t.childNodes[r];
            i != s;
            i = i.nextSibling, ++o
          )
            (this.findAtPoint(t, o), this.addDOM(i, e));
          this.findAtPoint(t, o);
        }
        findPlace(t, e, n) {
          let r, o;
          for (let i = this.open, s = 0; i >= 0; i--) {
            let e = this.nodes[i],
              l = e.findWrapping(t);
            if (
              l &&
              (!r || r.length > l.length + s) &&
              ((r = l), (o = e), !l.length)
            )
              break;
            if (e.solid) {
              if (n) break;
              s += 2;
            }
          }
          if (!r) return null;
          this.sync(o);
          for (let i = 0; i < r.length; i++)
            e = this.enterInner(r[i], null, e, !1);
          return e;
        }
        insertNode(t, e, n) {
          if (t.isInline && this.needsBlock && !this.top.type) {
            let t = this.textblockFromContext();
            t && (e = this.enterInner(t, null, e));
          }
          let r = this.findPlace(t, e, n);
          if (r) {
            this.closeExtra();
            let e = this.top;
            e.match && (e.match = e.match.matchType(t.type));
            let n = h.none;
            for (let o of r.concat(t.marks))
              (e.type ? e.type.allowsMarkType(o.type) : lt(o.type, t.type)) &&
                (n = o.addToSet(n));
            return (e.content.push(t.mark(n)), !0);
          }
          return !1;
        }
        enter(t, e, n, r) {
          let o = this.findPlace(t.create(e), n, !1);
          return (o && (o = this.enterInner(t, e, n, !0, r)), o);
        }
        enterInner(t, e, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = arguments.length > 4 ? arguments[4] : void 0;
          this.closeExtra();
          let i = this.top;
          i.match = i.match && i.match.matchType(t);
          let s = nt(t, o, i.options);
          4 & i.options && 0 == i.content.length && (s |= 4);
          let l = h.none;
          return (
            (n = n.filter(
              (e) =>
                !(i.type ? i.type.allowsMarkType(e.type) : lt(e.type, t)) ||
                ((l = e.addToSet(l)), !1),
            )),
            this.nodes.push(new rt(t, e, l, r, null, s)),
            this.open++,
            n
          );
        }
        closeExtra() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = this.nodes.length - 1;
          if (e > this.open) {
            for (; e > this.open; e--)
              this.nodes[e - 1].content.push(this.nodes[e].finish(t));
            this.nodes.length = this.open + 1;
          }
        }
        finish() {
          return (
            (this.open = 0),
            this.closeExtra(this.isOpen),
            this.nodes[0].finish(!(!this.isOpen && !this.options.topOpen))
          );
        }
        sync(t) {
          for (let e = this.open; e >= 0; e--) {
            if (this.nodes[e] == t) return ((this.open = e), !0);
            this.localPreserveWS && (this.nodes[e].options |= 1);
          }
          return !1;
        }
        get currentPos() {
          this.closeExtra();
          let t = 0;
          for (let e = this.open; e >= 0; e--) {
            let n = this.nodes[e].content;
            for (let e = n.length - 1; e >= 0; e--) t += n[e].nodeSize;
            e && t++;
          }
          return t;
        }
        findAtPoint(t, e) {
          if (this.find)
            for (let n = 0; n < this.find.length; n++)
              this.find[n].node == t &&
                this.find[n].offset == e &&
                (this.find[n].pos = this.currentPos);
        }
        findInside(t) {
          if (this.find)
            for (let e = 0; e < this.find.length; e++)
              null == this.find[e].pos &&
                1 == t.nodeType &&
                t.contains(this.find[e].node) &&
                (this.find[e].pos = this.currentPos);
        }
        findAround(t, e, n) {
          if (t != e && this.find)
            for (let r = 0; r < this.find.length; r++)
              if (
                null == this.find[r].pos &&
                1 == t.nodeType &&
                t.contains(this.find[r].node)
              ) {
                e.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) &&
                  (this.find[r].pos = this.currentPos);
              }
        }
        findInText(t) {
          if (this.find)
            for (let e = 0; e < this.find.length; e++)
              this.find[e].node == t &&
                (this.find[e].pos =
                  this.currentPos - (t.nodeValue.length - this.find[e].offset));
        }
        matchesContext(t) {
          if (t.indexOf("|") > -1)
            return t.split(/\s*\|\s*/).some(this.matchesContext, this);
          let e = t.split("/"),
            n = this.options.context,
            r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type),
            o = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
            i = (t, s) => {
              for (; t >= 0; t--) {
                let l = e[t];
                if ("" == l) {
                  if (t == e.length - 1 || 0 == t) continue;
                  for (; s >= o; s--) if (i(t - 1, s)) return !0;
                  return !1;
                }
                {
                  let t =
                    s > 0 || (0 == s && r)
                      ? this.nodes[s].type
                      : n && s >= o
                        ? n.node(s - o).type
                        : null;
                  if (!t || (t.name != l && !t.isInGroup(l))) return !1;
                  s--;
                }
              }
              return !0;
            };
          return i(e.length - 1, this.open);
        }
        textblockFromContext() {
          let t = this.options.context;
          if (t)
            for (let e = t.depth; e >= 0; e--) {
              let n = t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
              if (n && n.isTextblock && n.defaultAttrs) return n;
            }
          for (let e in this.parser.schema.nodes) {
            let t = this.parser.schema.nodes[e];
            if (t.isTextblock && t.defaultAttrs) return t;
          }
        }
      }
      function it(t, e) {
        return (
          t.matches ||
          t.msMatchesSelector ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector
        ).call(t, e);
      }
      function st(t) {
        let e = {};
        for (let n in t) e[n] = t[n];
        return e;
      }
      function lt(t, e) {
        let n = e.schema.nodes;
        for (let r in n) {
          let o = n[r];
          if (!o.allowsMarkType(t)) continue;
          let i = [],
            s = (t) => {
              i.push(t);
              for (let n = 0; n < t.edgeCount; n++) {
                let { type: r, next: o } = t.edge(n);
                if (r == e) return !0;
                if (i.indexOf(o) < 0 && s(o)) return !0;
              }
            };
          if (s(o.contentMatch)) return !0;
        }
      }
      class at {
        constructor(t, e) {
          ((this.nodes = t), (this.marks = e));
        }
        serializeFragment(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          n || (n = dt(e).createDocumentFragment());
          let r = n,
            o = [];
          return (
            t.forEach((t) => {
              if (o.length || t.marks.length) {
                let n = 0,
                  i = 0;
                for (; n < o.length && i < t.marks.length; ) {
                  let e = t.marks[i];
                  if (this.marks[e.type.name]) {
                    if (!e.eq(o[n][0]) || !1 === e.type.spec.spanning) break;
                    (n++, i++);
                  } else i++;
                }
                for (; n < o.length; ) r = o.pop()[1];
                for (; i < t.marks.length; ) {
                  let n = t.marks[i++],
                    s = this.serializeMark(n, t.isInline, e);
                  s &&
                    (o.push([n, r]),
                    r.appendChild(s.dom),
                    (r = s.contentDOM || s.dom));
                }
              }
              r.appendChild(this.serializeNodeInner(t, e));
            }),
            n
          );
        }
        serializeNodeInner(t, e) {
          let { dom: n, contentDOM: r } = ut(
            dt(e),
            this.nodes[t.type.name](t),
            null,
            t.attrs,
          );
          if (r) {
            if (t.isLeaf)
              throw new RangeError(
                "Content hole not allowed in a leaf node spec",
              );
            this.serializeFragment(t.content, e, r);
          }
          return n;
        }
        serializeNode(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.serializeNodeInner(t, e);
          for (let r = t.marks.length - 1; r >= 0; r--) {
            let o = this.serializeMark(t.marks[r], t.isInline, e);
            o && ((o.contentDOM || o.dom).appendChild(n), (n = o.dom));
          }
          return n;
        }
        serializeMark(t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = this.marks[t.type.name];
          return r && ut(dt(n), r(t, e), null, t.attrs);
        }
        static renderSpec(t, e) {
          return ut(
            t,
            e,
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
            arguments.length > 3 ? arguments[3] : void 0,
          );
        }
        static fromSchema(t) {
          return (
            t.cached.domSerializer ||
            (t.cached.domSerializer = new at(
              this.nodesFromSchema(t),
              this.marksFromSchema(t),
            ))
          );
        }
        static nodesFromSchema(t) {
          let e = ct(t.nodes);
          return (e.text || (e.text = (t) => t.text), e);
        }
        static marksFromSchema(t) {
          return ct(t.marks);
        }
      }
      function ct(t) {
        let e = {};
        for (let n in t) {
          let r = t[n].spec.toDOM;
          r && (e[n] = r);
        }
        return e;
      }
      function dt(t) {
        return t.document || window.document;
      }
      const ht = new WeakMap();
      function pt(t) {
        let e = ht.get(t);
        return (
          void 0 === e &&
            ht.set(
              t,
              (e = (function (t) {
                let e = null;
                function n(t) {
                  if (t && "object" == typeof t)
                    if (Array.isArray(t))
                      if ("string" == typeof t[0]) (e || (e = []), e.push(t));
                      else for (let e = 0; e < t.length; e++) n(t[e]);
                    else for (let e in t) n(t[e]);
                }
                return (n(t), e);
              })(t)),
            ),
          e
        );
      }
      function ut(t, e, n, r) {
        if ("string" == typeof e) return { dom: t.createTextNode(e) };
        if (null != e.nodeType) return { dom: e };
        if (e.dom && null != e.dom.nodeType) return e;
        let o,
          i = e[0];
        if ("string" != typeof i)
          throw new RangeError("Invalid array passed to renderSpec");
        if (r && (o = pt(r)) && o.indexOf(e) > -1)
          throw new RangeError(
            "Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.",
          );
        let s,
          l = i.indexOf(" ");
        l > 0 && ((n = i.slice(0, l)), (i = i.slice(l + 1)));
        let a = n ? t.createElementNS(n, i) : t.createElement(i),
          c = e[1],
          d = 1;
        if (
          c &&
          "object" == typeof c &&
          null == c.nodeType &&
          !Array.isArray(c)
        ) {
          d = 2;
          for (let t in c)
            if (null != c[t]) {
              let e = t.indexOf(" ");
              e > 0
                ? a.setAttributeNS(t.slice(0, e), t.slice(e + 1), c[t])
                : "style" == t && a.style
                  ? (a.style.cssText = c[t])
                  : a.setAttribute(t, c[t]);
            }
        }
        for (let h = d; h < e.length; h++) {
          let o = e[h];
          if (0 === o) {
            if (h < e.length - 1 || h > d)
              throw new RangeError(
                "Content hole must be the only child of its parent node",
              );
            return { dom: a, contentDOM: a };
          }
          {
            let { dom: e, contentDOM: i } = ut(t, o, n, r);
            if ((a.appendChild(e), i)) {
              if (s) throw new RangeError("Multiple content holes");
              s = i;
            }
          }
        }
        return { dom: a, contentDOM: s };
      }
    },
    184(t, e, n) {
      n.d(e, {
        $t: () => S,
        LN: () => s,
        U3: () => d,
        hs: () => T,
        i5: () => f,
        k_: () => C,
        nh: () => p,
      });
      var r = n(282),
        o = n(115);
      const i = Object.create(null);
      class s {
        constructor(t, e, n) {
          ((this.$anchor = t),
            (this.$head = e),
            (this.ranges = n || [new l(t.min(e), t.max(e))]));
        }
        get anchor() {
          return this.$anchor.pos;
        }
        get head() {
          return this.$head.pos;
        }
        get from() {
          return this.$from.pos;
        }
        get to() {
          return this.$to.pos;
        }
        get $from() {
          return this.ranges[0].$from;
        }
        get $to() {
          return this.ranges[0].$to;
        }
        get empty() {
          let t = this.ranges;
          for (let e = 0; e < t.length; e++)
            if (t[e].$from.pos != t[e].$to.pos) return !1;
          return !0;
        }
        content() {
          return this.$from.doc.slice(this.from, this.to, !0);
        }
        replace(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : r.Ji.empty,
            n = e.content.lastChild,
            o = null;
          for (let r = 0; r < e.openEnd; r++) ((o = n), (n = n.lastChild));
          let i = t.steps.length,
            s = this.ranges;
          for (let l = 0; l < s.length; l++) {
            let { $from: a, $to: c } = s[l],
              d = t.mapping.slice(i);
            (t.replaceRange(d.map(a.pos), d.map(c.pos), l ? r.Ji.empty : e),
              0 == l &&
                y(t, i, (n ? n.isInline : o && o.isTextblock) ? -1 : 1));
          }
        }
        replaceWith(t, e) {
          let n = t.steps.length,
            r = this.ranges;
          for (let o = 0; o < r.length; o++) {
            let { $from: i, $to: s } = r[o],
              l = t.mapping.slice(n),
              a = l.map(i.pos),
              c = l.map(s.pos);
            o
              ? t.deleteRange(a, c)
              : (t.replaceRangeWith(a, c, e), y(t, n, e.isInline ? -1 : 1));
          }
        }
        static findFrom(t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = t.parent.inlineContent
              ? new d(t)
              : g(t.node(0), t.parent, t.pos, t.index(), e, n);
          if (r) return r;
          for (let o = t.depth - 1; o >= 0; o--) {
            let r =
              e < 0
                ? g(t.node(0), t.node(o), t.before(o + 1), t.index(o), e, n)
                : g(t.node(0), t.node(o), t.after(o + 1), t.index(o) + 1, e, n);
            if (r) return r;
          }
          return null;
        }
        static near(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return (
            this.findFrom(t, e) || this.findFrom(t, -e) || new f(t.node(0))
          );
        }
        static atStart(t) {
          return g(t, t, 0, 0, 1) || new f(t);
        }
        static atEnd(t) {
          return g(t, t, t.content.size, t.childCount, -1) || new f(t);
        }
        static fromJSON(t, e) {
          if (!e || !e.type)
            throw new RangeError("Invalid input for Selection.fromJSON");
          let n = i[e.type];
          if (!n)
            throw new RangeError(
              "No selection type ".concat(e.type, " defined"),
            );
          return n.fromJSON(t, e);
        }
        static jsonID(t, e) {
          if (t in i)
            throw new RangeError("Duplicate use of selection JSON ID " + t);
          return ((i[t] = e), (e.prototype.jsonID = t), e);
        }
        getBookmark() {
          return d.between(this.$anchor, this.$head).getBookmark();
        }
      }
      s.prototype.visible = !0;
      class l {
        constructor(t, e) {
          ((this.$from = t), (this.$to = e));
        }
      }
      let a = !1;
      function c(t) {
        a ||
          t.parent.inlineContent ||
          ((a = !0),
          console.warn(
            "TextSelection endpoint not pointing into a node with inline content (" +
              t.parent.type.name +
              ")",
          ));
      }
      class d extends s {
        constructor(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
          (c(t), c(e), super(t, e));
        }
        get $cursor() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
        map(t, e) {
          let n = t.resolve(e.map(this.head));
          if (!n.parent.inlineContent) return s.near(n);
          let r = t.resolve(e.map(this.anchor));
          return new d(r.parent.inlineContent ? r : n, n);
        }
        replace(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.Ji.empty;
          if ((super.replace(t, e), e == r.Ji.empty)) {
            let e = this.$from.marksAcross(this.$to);
            e && t.ensureMarks(e);
          }
        }
        eq(t) {
          return (
            t instanceof d && t.anchor == this.anchor && t.head == this.head
          );
        }
        getBookmark() {
          return new h(this.anchor, this.head);
        }
        toJSON() {
          return { type: "text", anchor: this.anchor, head: this.head };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.anchor || "number" != typeof e.head)
            throw new RangeError("Invalid input for TextSelection.fromJSON");
          return new d(t.resolve(e.anchor), t.resolve(e.head));
        }
        static create(t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e,
            r = t.resolve(e);
          return new this(r, n == e ? r : t.resolve(n));
        }
        static between(t, e, n) {
          let r = t.pos - e.pos;
          if (((n && !r) || (n = r >= 0 ? 1 : -1), !e.parent.inlineContent)) {
            let t = s.findFrom(e, n, !0) || s.findFrom(e, -n, !0);
            if (!t) return s.near(e, n);
            e = t.$head;
          }
          return (
            t.parent.inlineContent ||
              ((0 == r ||
                (t = (s.findFrom(t, -n, !0) || s.findFrom(t, n, !0)).$anchor)
                  .pos <
                  e.pos !=
                  r < 0) &&
                (t = e)),
            new d(t, e)
          );
        }
      }
      s.jsonID("text", d);
      class h {
        constructor(t, e) {
          ((this.anchor = t), (this.head = e));
        }
        map(t) {
          return new h(t.map(this.anchor), t.map(this.head));
        }
        resolve(t) {
          return d.between(t.resolve(this.anchor), t.resolve(this.head));
        }
      }
      class p extends s {
        constructor(t) {
          let e = t.nodeAfter,
            n = t.node(0).resolve(t.pos + e.nodeSize);
          (super(t, n), (this.node = e));
        }
        map(t, e) {
          let { deleted: n, pos: r } = e.mapResult(this.anchor),
            o = t.resolve(r);
          return n ? s.near(o) : new p(o);
        }
        content() {
          return new r.Ji(r.FK.from(this.node), 0, 0);
        }
        eq(t) {
          return t instanceof p && t.anchor == this.anchor;
        }
        toJSON() {
          return { type: "node", anchor: this.anchor };
        }
        getBookmark() {
          return new u(this.anchor);
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.anchor)
            throw new RangeError("Invalid input for NodeSelection.fromJSON");
          return new p(t.resolve(e.anchor));
        }
        static create(t, e) {
          return new p(t.resolve(e));
        }
        static isSelectable(t) {
          return !t.isText && !1 !== t.type.spec.selectable;
        }
      }
      ((p.prototype.visible = !1), s.jsonID("node", p));
      class u {
        constructor(t) {
          this.anchor = t;
        }
        map(t) {
          let { deleted: e, pos: n } = t.mapResult(this.anchor);
          return e ? new h(n, n) : new u(n);
        }
        resolve(t) {
          let e = t.resolve(this.anchor),
            n = e.nodeAfter;
          return n && p.isSelectable(n) ? new p(e) : s.near(e);
        }
      }
      class f extends s {
        constructor(t) {
          super(t.resolve(0), t.resolve(t.content.size));
        }
        replace(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.Ji.empty;
          if (e == r.Ji.empty) {
            t.delete(0, t.doc.content.size);
            let e = s.atStart(t.doc);
            e.eq(t.selection) || t.setSelection(e);
          } else super.replace(t, e);
        }
        toJSON() {
          return { type: "all" };
        }
        static fromJSON(t) {
          return new f(t);
        }
        map(t) {
          return new f(t);
        }
        eq(t) {
          return t instanceof f;
        }
        getBookmark() {
          return m;
        }
      }
      s.jsonID("all", f);
      const m = {
        map() {
          return this;
        },
        resolve: (t) => new f(t),
      };
      function g(t, e, n, r, o) {
        let i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (e.inlineContent) return d.create(t, n);
        for (
          let s = r - (o > 0 ? 0 : 1);
          o > 0 ? s < e.childCount : s >= 0;
          s += o
        ) {
          let r = e.child(s);
          if (r.isAtom) {
            if (!i && p.isSelectable(r))
              return p.create(t, n - (o < 0 ? r.nodeSize : 0));
          } else {
            let e = g(t, r, n + o, o < 0 ? r.childCount : 0, o, i);
            if (e) return e;
          }
          n += r.nodeSize * o;
        }
        return null;
      }
      function y(t, e, n) {
        let r = t.steps.length - 1;
        if (r < e) return;
        let i,
          l = t.steps[r];
        (l instanceof o.Ln || l instanceof o.Wg) &&
          (t.mapping.maps[r].forEach((t, e, n, r) => {
            null == i && (i = r);
          }),
          t.setSelection(s.near(t.doc.resolve(i), n)));
      }
      class v extends o.dL {
        constructor(t) {
          (super(t.doc),
            (this.curSelectionFor = 0),
            (this.updated = 0),
            (this.meta = Object.create(null)),
            (this.time = Date.now()),
            (this.curSelection = t.selection),
            (this.storedMarks = t.storedMarks));
        }
        get selection() {
          return (
            this.curSelectionFor < this.steps.length &&
              ((this.curSelection = this.curSelection.map(
                this.doc,
                this.mapping.slice(this.curSelectionFor),
              )),
              (this.curSelectionFor = this.steps.length)),
            this.curSelection
          );
        }
        setSelection(t) {
          if (t.$from.doc != this.doc)
            throw new RangeError(
              "Selection passed to setSelection must point at the current document",
            );
          return (
            (this.curSelection = t),
            (this.curSelectionFor = this.steps.length),
            (this.updated = (-3 & this.updated) | 1),
            (this.storedMarks = null),
            this
          );
        }
        get selectionSet() {
          return (1 & this.updated) > 0;
        }
        setStoredMarks(t) {
          return ((this.storedMarks = t), (this.updated |= 2), this);
        }
        ensureMarks(t) {
          return (
            r.CU.sameSet(this.storedMarks || this.selection.$from.marks(), t) ||
              this.setStoredMarks(t),
            this
          );
        }
        addStoredMark(t) {
          return this.ensureMarks(
            t.addToSet(this.storedMarks || this.selection.$head.marks()),
          );
        }
        removeStoredMark(t) {
          return this.ensureMarks(
            t.removeFromSet(this.storedMarks || this.selection.$head.marks()),
          );
        }
        get storedMarksSet() {
          return (2 & this.updated) > 0;
        }
        addStep(t, e) {
          (super.addStep(t, e),
            (this.updated = -3 & this.updated),
            (this.storedMarks = null));
        }
        setTime(t) {
          return ((this.time = t), this);
        }
        replaceSelection(t) {
          return (this.selection.replace(this, t), this);
        }
        replaceSelectionWith(t) {
          let e =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = this.selection;
          return (
            e &&
              (t = t.mark(
                this.storedMarks ||
                  (n.empty
                    ? n.$from.marks()
                    : n.$from.marksAcross(n.$to) || r.CU.none),
              )),
            n.replaceWith(this, t),
            this
          );
        }
        deleteSelection() {
          return (this.selection.replace(this), this);
        }
        insertText(t, e, n) {
          let r = this.doc.type.schema;
          if (null == e)
            return t
              ? this.replaceSelectionWith(r.text(t), !0)
              : this.deleteSelection();
          {
            if ((null == n && (n = e), !t)) return this.deleteRange(e, n);
            let o = this.storedMarks;
            if (!o) {
              let t = this.doc.resolve(e);
              o = n == e ? t.marks() : t.marksAcross(this.doc.resolve(n));
            }
            return (
              this.replaceRangeWith(e, n, r.text(t, o)),
              this.selection.empty ||
                this.selection.to != e + t.length ||
                this.setSelection(s.near(this.selection.$to)),
              this
            );
          }
        }
        setMeta(t, e) {
          return ((this.meta["string" == typeof t ? t : t.key] = e), this);
        }
        getMeta(t) {
          return this.meta["string" == typeof t ? t : t.key];
        }
        get isGeneric() {
          for (let t in this.meta) return !1;
          return !0;
        }
        scrollIntoView() {
          return ((this.updated |= 4), this);
        }
        get scrolledIntoView() {
          return (4 & this.updated) > 0;
        }
      }
      function w(t, e) {
        return e && t ? t.bind(e) : t;
      }
      class b {
        constructor(t, e, n) {
          ((this.name = t),
            (this.init = w(e.init, n)),
            (this.apply = w(e.apply, n)));
        }
      }
      const k = [
        new b("doc", {
          init: (t) => t.doc || t.schema.topNodeType.createAndFill(),
          apply: (t) => t.doc,
        }),
        new b("selection", {
          init: (t, e) => t.selection || s.atStart(e.doc),
          apply: (t) => t.selection,
        }),
        new b("storedMarks", {
          init: (t) => t.storedMarks || null,
          apply: (t, e, n, r) => (r.selection.$cursor ? t.storedMarks : null),
        }),
        new b("scrollToSelection", {
          init: () => 0,
          apply: (t, e) => (t.scrolledIntoView ? e + 1 : e),
        }),
      ];
      class x {
        constructor(t, e) {
          ((this.schema = t),
            (this.plugins = []),
            (this.pluginsByKey = Object.create(null)),
            (this.fields = k.slice()),
            e &&
              e.forEach((t) => {
                if (this.pluginsByKey[t.key])
                  throw new RangeError(
                    "Adding different instances of a keyed plugin (" +
                      t.key +
                      ")",
                  );
                (this.plugins.push(t),
                  (this.pluginsByKey[t.key] = t),
                  t.spec.state &&
                    this.fields.push(new b(t.key, t.spec.state, t)));
              }));
        }
      }
      class S {
        constructor(t) {
          this.config = t;
        }
        get schema() {
          return this.config.schema;
        }
        get plugins() {
          return this.config.plugins;
        }
        apply(t) {
          return this.applyTransaction(t).state;
        }
        filterTransaction(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
          for (let n = 0; n < this.config.plugins.length; n++)
            if (n != e) {
              let e = this.config.plugins[n];
              if (
                e.spec.filterTransaction &&
                !e.spec.filterTransaction.call(e, t, this)
              )
                return !1;
            }
          return !0;
        }
        applyTransaction(t) {
          if (!this.filterTransaction(t))
            return { state: this, transactions: [] };
          let e = [t],
            n = this.applyInner(t),
            r = null;
          for (;;) {
            let o = !1;
            for (let i = 0; i < this.config.plugins.length; i++) {
              let s = this.config.plugins[i];
              if (s.spec.appendTransaction) {
                let l = r ? r[i].n : 0,
                  a = r ? r[i].state : this,
                  c =
                    l < e.length &&
                    s.spec.appendTransaction.call(s, l ? e.slice(l) : e, a, n);
                if (c && n.filterTransaction(c, i)) {
                  if ((c.setMeta("appendedTransaction", t), !r)) {
                    r = [];
                    for (let t = 0; t < this.config.plugins.length; t++)
                      r.push(
                        t < i
                          ? { state: n, n: e.length }
                          : { state: this, n: 0 },
                      );
                  }
                  (e.push(c), (n = n.applyInner(c)), (o = !0));
                }
                r && (r[i] = { state: n, n: e.length });
              }
            }
            if (!o) return { state: n, transactions: e };
          }
        }
        applyInner(t) {
          if (!t.before.eq(this.doc))
            throw new RangeError("Applying a mismatched transaction");
          let e = new S(this.config),
            n = this.config.fields;
          for (let r = 0; r < n.length; r++) {
            let o = n[r];
            e[o.name] = o.apply(t, this[o.name], this, e);
          }
          return e;
        }
        get tr() {
          return new v(this);
        }
        static create(t) {
          let e = new x(t.doc ? t.doc.type.schema : t.schema, t.plugins),
            n = new S(e);
          for (let r = 0; r < e.fields.length; r++)
            n[e.fields[r].name] = e.fields[r].init(t, n);
          return n;
        }
        reconfigure(t) {
          let e = new x(this.schema, t.plugins),
            n = e.fields,
            r = new S(e);
          for (let o = 0; o < n.length; o++) {
            let e = n[o].name;
            r[e] = this.hasOwnProperty(e) ? this[e] : n[o].init(t, r);
          }
          return r;
        }
        toJSON(t) {
          let e = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON(),
          };
          if (
            (this.storedMarks &&
              (e.storedMarks = this.storedMarks.map((t) => t.toJSON())),
            t && "object" == typeof t)
          )
            for (let n in t) {
              if ("doc" == n || "selection" == n)
                throw new RangeError(
                  "The JSON fields `doc` and `selection` are reserved",
                );
              let r = t[n],
                o = r.spec.state;
              o && o.toJSON && (e[n] = o.toJSON.call(r, this[r.key]));
            }
          return e;
        }
        static fromJSON(t, e, n) {
          if (!e)
            throw new RangeError("Invalid input for EditorState.fromJSON");
          if (!t.schema)
            throw new RangeError("Required config field 'schema' missing");
          let o = new x(t.schema, t.plugins),
            i = new S(o);
          return (
            o.fields.forEach((o) => {
              if ("doc" == o.name) i.doc = r.bP.fromJSON(t.schema, e.doc);
              else if ("selection" == o.name)
                i.selection = s.fromJSON(i.doc, e.selection);
              else if ("storedMarks" == o.name)
                e.storedMarks &&
                  (i.storedMarks = e.storedMarks.map(t.schema.markFromJSON));
              else {
                if (n)
                  for (let r in n) {
                    let s = n[r],
                      l = s.spec.state;
                    if (
                      s.key == o.name &&
                      l &&
                      l.fromJSON &&
                      Object.prototype.hasOwnProperty.call(e, r)
                    )
                      return void (i[o.name] = l.fromJSON.call(s, t, e[r], i));
                  }
                i[o.name] = o.init(t, i);
              }
            }),
            i
          );
        }
      }
      function M(t, e, n) {
        for (let r in t) {
          let o = t[r];
          (o instanceof Function
            ? (o = o.bind(e))
            : "handleDOMEvents" == r && (o = M(o, e, {})),
            (n[r] = o));
        }
        return n;
      }
      class C {
        constructor(t) {
          ((this.spec = t),
            (this.props = {}),
            t.props && M(t.props, this, this.props),
            (this.key = t.key ? t.key.key : N("plugin")));
        }
        getState(t) {
          return t[this.key];
        }
      }
      const O = Object.create(null);
      function N(t) {
        return t in O ? t + "$" + ++O[t] : ((O[t] = 0), t + "$");
      }
      class T {
        constructor() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "key";
          this.key = N(t);
        }
        get(t) {
          return t.config.pluginsByKey[this.key];
        }
        getState(t) {
          return t[this.key];
        }
      }
    },
    115(t, e, n) {
      n.d(e, {
        $L: () => I,
        Ln: () => v,
        N0: () => D,
        Um: () => R,
        Wg: () => w,
        Ys: () => m,
        dL: () => U,
        jP: () => S,
        n9: () => A,
        oM: () => M,
        zy: () => T,
      });
      var r = n(282);
      const o = Math.pow(2, 16);
      function i(t, e) {
        return t + e * o;
      }
      function s(t) {
        return 65535 & t;
      }
      class l {
        constructor(t, e, n) {
          ((this.pos = t), (this.delInfo = e), (this.recover = n));
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class a {
        constructor(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (((this.ranges = t), (this.inverted = e), !t.length && a.empty))
            return a.empty;
        }
        recover(t) {
          let e = 0,
            n = s(t);
          if (!this.inverted)
            for (let r = 0; r < n; r++)
              e += this.ranges[3 * r + 2] - this.ranges[3 * r + 1];
          return (
            this.ranges[3 * n] +
            e +
            (function (t) {
              return (t - (65535 & t)) / o;
            })(t)
          );
        }
        mapResult(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return this._map(t, e, !1);
        }
        map(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return this._map(t, e, !0);
        }
        _map(t, e, n) {
          let r = 0,
            o = this.inverted ? 2 : 1,
            s = this.inverted ? 1 : 2;
          for (let a = 0; a < this.ranges.length; a += 3) {
            let c = this.ranges[a] - (this.inverted ? r : 0);
            if (c > t) break;
            let d = this.ranges[a + o],
              h = this.ranges[a + s],
              p = c + d;
            if (t <= p) {
              let o =
                c + r + ((d ? (t == c ? -1 : t == p ? 1 : e) : e) < 0 ? 0 : h);
              if (n) return o;
              let s = t == (e < 0 ? c : p) ? null : i(a / 3, t - c),
                u = t == c ? 2 : t == p ? 1 : 4;
              return ((e < 0 ? t != c : t != p) && (u |= 8), new l(o, u, s));
            }
            r += h - d;
          }
          return n ? t + r : new l(t + r, 0, null);
        }
        touches(t, e) {
          let n = 0,
            r = s(e),
            o = this.inverted ? 2 : 1,
            i = this.inverted ? 1 : 2;
          for (let s = 0; s < this.ranges.length; s += 3) {
            let e = this.ranges[s] - (this.inverted ? n : 0);
            if (e > t) break;
            let l = this.ranges[s + o];
            if (t <= e + l && s == 3 * r) return !0;
            n += this.ranges[s + i] - l;
          }
          return !1;
        }
        forEach(t) {
          let e = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, o = 0; r < this.ranges.length; r += 3) {
            let i = this.ranges[r],
              s = i - (this.inverted ? o : 0),
              l = i + (this.inverted ? 0 : o),
              a = this.ranges[r + e],
              c = this.ranges[r + n];
            (t(s, s + a, l, l + c), (o += c - a));
          }
        }
        invert() {
          return new a(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(t) {
          return 0 == t ? a.empty : new a(t < 0 ? [0, -t, 0] : [0, 0, t]);
        }
      }
      a.empty = new a([]);
      class c {
        constructor(t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : t
                  ? t.length
                  : 0;
          ((this.mirror = e),
            (this.from = n),
            (this.to = r),
            (this._maps = t || []),
            (this.ownData = !(t || e)));
        }
        get maps() {
          return this._maps;
        }
        slice() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.maps.length;
          return new c(this._maps, this.mirror, t, e);
        }
        appendMap(t, e) {
          (this.ownData ||
            ((this._maps = this._maps.slice()),
            (this.mirror = this.mirror && this.mirror.slice()),
            (this.ownData = !0)),
            (this.to = this._maps.push(t)),
            null != e && this.setMirror(this._maps.length - 1, e));
        }
        appendMapping(t) {
          for (let e = 0, n = this._maps.length; e < t._maps.length; e++) {
            let r = t.getMirror(e);
            this.appendMap(t._maps[e], null != r && r < e ? n + r : void 0);
          }
        }
        getMirror(t) {
          if (this.mirror)
            for (let e = 0; e < this.mirror.length; e++)
              if (this.mirror[e] == t) return this.mirror[e + (e % 2 ? -1 : 1)];
        }
        setMirror(t, e) {
          (this.mirror || (this.mirror = []), this.mirror.push(t, e));
        }
        appendMappingInverted(t) {
          for (
            let e = t.maps.length - 1, n = this._maps.length + t._maps.length;
            e >= 0;
            e--
          ) {
            let r = t.getMirror(e);
            this.appendMap(
              t._maps[e].invert(),
              null != r && r > e ? n - r - 1 : void 0,
            );
          }
        }
        invert() {
          let t = new c();
          return (t.appendMappingInverted(this), t);
        }
        map(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          if (this.mirror) return this._map(t, e, !0);
          for (let n = this.from; n < this.to; n++) t = this._maps[n].map(t, e);
          return t;
        }
        mapResult(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return this._map(t, e, !1);
        }
        _map(t, e, n) {
          let r = 0;
          for (let o = this.from; o < this.to; o++) {
            let n = this._maps[o].mapResult(t, e);
            if (null != n.recover) {
              let e = this.getMirror(o);
              if (null != e && e > o && e < this.to) {
                ((o = e), (t = this._maps[e].recover(n.recover)));
                continue;
              }
            }
            ((r |= n.delInfo), (t = n.pos));
          }
          return n ? t : new l(t, r, null);
        }
      }
      const d = Object.create(null);
      class h {
        getMap() {
          return a.empty;
        }
        merge(t) {
          return null;
        }
        static fromJSON(t, e) {
          if (!e || !e.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let n = d[e.stepType];
          if (!n)
            throw new RangeError(
              "No step type ".concat(e.stepType, " defined"),
            );
          return n.fromJSON(t, e);
        }
        static jsonID(t, e) {
          if (t in d)
            throw new RangeError("Duplicate use of step JSON ID " + t);
          return ((d[t] = e), (e.prototype.jsonID = t), e);
        }
      }
      class p {
        constructor(t, e) {
          ((this.doc = t), (this.failed = e));
        }
        static ok(t) {
          return new p(t, null);
        }
        static fail(t) {
          return new p(null, t);
        }
        static fromReplace(t, e, n, o) {
          try {
            return p.ok(t.replace(e, n, o));
          } catch (i) {
            if (i instanceof r.vI) return p.fail(i.message);
            throw i;
          }
        }
      }
      function u(t, e, n) {
        let o = [];
        for (let r = 0; r < t.childCount; r++) {
          let i = t.child(r);
          (i.content.size && (i = i.copy(u(i.content, e, i))),
            i.isInline && (i = e(i, n, r)),
            o.push(i));
        }
        return r.FK.fromArray(o);
      }
      class f extends h {
        constructor(t, e, n) {
          (super(), (this.from = t), (this.to = e), (this.mark = n));
        }
        apply(t) {
          let e = t.slice(this.from, this.to),
            n = t.resolve(this.from),
            o = n.node(n.sharedDepth(this.to)),
            i = new r.Ji(
              u(
                e.content,
                (t, e) =>
                  t.isAtom && e.type.allowsMarkType(this.mark.type)
                    ? t.mark(this.mark.addToSet(t.marks))
                    : t,
                o,
              ),
              e.openStart,
              e.openEnd,
            );
          return p.fromReplace(t, this.from, this.to, i);
        }
        invert() {
          return new m(this.from, this.to, this.mark);
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return (e.deleted && n.deleted) || e.pos >= n.pos
            ? null
            : new f(e.pos, n.pos, this.mark);
        }
        merge(t) {
          return t instanceof f &&
            t.mark.eq(this.mark) &&
            this.from <= t.to &&
            this.to >= t.from
            ? new f(
                Math.min(this.from, t.from),
                Math.max(this.to, t.to),
                this.mark,
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new f(e.from, e.to, t.markFromJSON(e.mark));
        }
      }
      h.jsonID("addMark", f);
      class m extends h {
        constructor(t, e, n) {
          (super(), (this.from = t), (this.to = e), (this.mark = n));
        }
        apply(t) {
          let e = t.slice(this.from, this.to),
            n = new r.Ji(
              u(e.content, (t) => t.mark(this.mark.removeFromSet(t.marks)), t),
              e.openStart,
              e.openEnd,
            );
          return p.fromReplace(t, this.from, this.to, n);
        }
        invert() {
          return new f(this.from, this.to, this.mark);
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return (e.deleted && n.deleted) || e.pos >= n.pos
            ? null
            : new m(e.pos, n.pos, this.mark);
        }
        merge(t) {
          return t instanceof m &&
            t.mark.eq(this.mark) &&
            this.from <= t.to &&
            this.to >= t.from
            ? new m(
                Math.min(this.from, t.from),
                Math.max(this.to, t.to),
                this.mark,
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new m(e.from, e.to, t.markFromJSON(e.mark));
        }
      }
      h.jsonID("removeMark", m);
      class g extends h {
        constructor(t, e) {
          (super(), (this.pos = t), (this.mark = e));
        }
        apply(t) {
          let e = t.nodeAt(this.pos);
          if (!e) return p.fail("No node at mark step's position");
          let n = e.type.create(e.attrs, null, this.mark.addToSet(e.marks));
          return p.fromReplace(
            t,
            this.pos,
            this.pos + 1,
            new r.Ji(r.FK.from(n), 0, e.isLeaf ? 0 : 1),
          );
        }
        invert(t) {
          let e = t.nodeAt(this.pos);
          if (e) {
            let t = this.mark.addToSet(e.marks);
            if (t.length == e.marks.length) {
              for (let n = 0; n < e.marks.length; n++)
                if (!e.marks[n].isInSet(t)) return new g(this.pos, e.marks[n]);
              return new g(this.pos, this.mark);
            }
          }
          return new y(this.pos, this.mark);
        }
        map(t) {
          let e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new g(e.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new g(e.pos, t.markFromJSON(e.mark));
        }
      }
      h.jsonID("addNodeMark", g);
      class y extends h {
        constructor(t, e) {
          (super(), (this.pos = t), (this.mark = e));
        }
        apply(t) {
          let e = t.nodeAt(this.pos);
          if (!e) return p.fail("No node at mark step's position");
          let n = e.type.create(
            e.attrs,
            null,
            this.mark.removeFromSet(e.marks),
          );
          return p.fromReplace(
            t,
            this.pos,
            this.pos + 1,
            new r.Ji(r.FK.from(n), 0, e.isLeaf ? 0 : 1),
          );
        }
        invert(t) {
          let e = t.nodeAt(this.pos);
          return e && this.mark.isInSet(e.marks)
            ? new g(this.pos, this.mark)
            : this;
        }
        map(t) {
          let e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new y(e.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON",
            );
          return new y(e.pos, t.markFromJSON(e.mark));
        }
      }
      h.jsonID("removeNodeMark", y);
      class v extends h {
        constructor(t, e, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          (super(),
            (this.from = t),
            (this.to = e),
            (this.slice = n),
            (this.structure = r));
        }
        apply(t) {
          return this.structure && b(t, this.from, this.to)
            ? p.fail("Structure replace would overwrite content")
            : p.fromReplace(t, this.from, this.to, this.slice);
        }
        getMap() {
          return new a([this.from, this.to - this.from, this.slice.size]);
        }
        invert(t) {
          return new v(
            this.from,
            this.from + this.slice.size,
            t.slice(this.from, this.to),
          );
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return e.deletedAcross && n.deletedAcross
            ? null
            : new v(e.pos, Math.max(e.pos, n.pos), this.slice, this.structure);
        }
        merge(t) {
          if (!(t instanceof v) || t.structure || this.structure) return null;
          if (
            this.from + this.slice.size != t.from ||
            this.slice.openEnd ||
            t.slice.openStart
          ) {
            if (t.to != this.from || this.slice.openStart || t.slice.openEnd)
              return null;
            {
              let e =
                this.slice.size + t.slice.size == 0
                  ? r.Ji.empty
                  : new r.Ji(
                      t.slice.content.append(this.slice.content),
                      t.slice.openStart,
                      this.slice.openEnd,
                    );
              return new v(t.from, this.to, e, this.structure);
            }
          }
          {
            let e =
              this.slice.size + t.slice.size == 0
                ? r.Ji.empty
                : new r.Ji(
                    this.slice.content.append(t.slice.content),
                    this.slice.openStart,
                    t.slice.openEnd,
                  );
            return new v(
              this.from,
              this.to + (t.to - t.from),
              e,
              this.structure,
            );
          }
        }
        toJSON() {
          let t = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (t.slice = this.slice.toJSON()),
            this.structure && (t.structure = !0),
            t
          );
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new v(e.from, e.to, r.Ji.fromJSON(t, e.slice), !!e.structure);
        }
      }
      h.jsonID("replace", v);
      class w extends h {
        constructor(t, e, n, r, o, i) {
          let s =
            arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          (super(),
            (this.from = t),
            (this.to = e),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = o),
            (this.insert = i),
            (this.structure = s));
        }
        apply(t) {
          if (
            this.structure &&
            (b(t, this.from, this.gapFrom) || b(t, this.gapTo, this.to))
          )
            return p.fail("Structure gap-replace would overwrite content");
          let e = t.slice(this.gapFrom, this.gapTo);
          if (e.openStart || e.openEnd)
            return p.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, e.content);
          return n
            ? p.fromReplace(t, this.from, this.to, n)
            : p.fail("Content does not fit in gap");
        }
        getMap() {
          return new a([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(t) {
          let e = this.gapTo - this.gapFrom;
          return new w(
            this.from,
            this.from + this.slice.size + e,
            this.from + this.insert,
            this.from + this.insert + e,
            t
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure,
          );
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1),
            r = this.from == this.gapFrom ? e.pos : t.map(this.gapFrom, -1),
            o = this.to == this.gapTo ? n.pos : t.map(this.gapTo, 1);
          return (e.deletedAcross && n.deletedAcross) || r < e.pos || o > n.pos
            ? null
            : new w(
                e.pos,
                n.pos,
                r,
                o,
                this.slice,
                this.insert,
                this.structure,
              );
        }
        toJSON() {
          let t = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (t.slice = this.slice.toJSON()),
            this.structure && (t.structure = !0),
            t
          );
        }
        static fromJSON(t, e) {
          if (
            "number" != typeof e.from ||
            "number" != typeof e.to ||
            "number" != typeof e.gapFrom ||
            "number" != typeof e.gapTo ||
            "number" != typeof e.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON",
            );
          return new w(
            e.from,
            e.to,
            e.gapFrom,
            e.gapTo,
            r.Ji.fromJSON(t, e.slice),
            e.insert,
            !!e.structure,
          );
        }
      }
      function b(t, e, n) {
        let r = t.resolve(e),
          o = n - e,
          i = r.depth;
        for (; o > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount; )
          (i--, o--);
        if (o > 0) {
          let t = r.node(i).maybeChild(r.indexAfter(i));
          for (; o > 0; ) {
            if (!t || t.isLeaf) return !0;
            ((t = t.firstChild), o--);
          }
        }
        return !1;
      }
      function k(t, e, n) {
        let o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : n.contentMatch,
          i =
            !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          s = t.doc.nodeAt(e),
          l = [],
          a = e + 1;
        for (let c = 0; c < s.childCount; c++) {
          let e = s.child(c),
            d = a + e.nodeSize,
            h = o.matchType(e.type);
          if (h) {
            o = h;
            for (let r = 0; r < e.marks.length; r++)
              n.allowsMarkType(e.marks[r].type) ||
                t.step(new m(a, d, e.marks[r]));
            if (i && e.isText && "pre" != n.whitespace) {
              let t,
                o,
                i = /\r?\n|\r/g;
              for (; (t = i.exec(e.text)); )
                (o ||
                  (o = new r.Ji(
                    r.FK.from(n.schema.text(" ", n.allowedMarks(e.marks))),
                    0,
                    0,
                  )),
                  l.push(new v(a + t.index, a + t.index + t[0].length, o)));
            }
          } else l.push(new v(a, d, r.Ji.empty));
          a = d;
        }
        if (!o.validEnd) {
          let e = o.fillBefore(r.FK.empty, !0);
          t.replace(a, a, new r.Ji(e, 0, 0));
        }
        for (let r = l.length - 1; r >= 0; r--) t.step(l[r]);
      }
      function x(t, e, n) {
        return (
          (0 == e || t.canReplace(e, t.childCount)) &&
          (n == t.childCount || t.canReplace(0, n))
        );
      }
      function S(t) {
        let e = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
        for (let n = t.depth, r = 0, o = 0; ; --n) {
          let i = t.$from.node(n),
            s = t.$from.index(n) + r,
            l = t.$to.indexAfter(n) - o;
          if (n < t.depth && i.canReplace(s, l, e)) return n;
          if (0 == n || i.type.spec.isolating || !x(i, s, l)) break;
          (s && (r = 1), l < i.childCount && (o = 1));
        }
        return null;
      }
      function M(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
          o = (function (t, e) {
            let { parent: n, startIndex: r, endIndex: o } = t,
              i = n.contentMatchAt(r).findWrapping(e);
            if (!i) return null;
            let s = i.length ? i[0] : e;
            return n.canReplaceWith(r, o, s) ? i : null;
          })(t, e),
          i =
            o &&
            (function (t, e) {
              let { parent: n, startIndex: r, endIndex: o } = t,
                i = n.child(r),
                s = e.contentMatch.findWrapping(i.type);
              if (!s) return null;
              let l = (s.length ? s[s.length - 1] : e).contentMatch;
              for (let a = r; l && a < o; a++) l = l.matchType(n.child(a).type);
              return l && l.validEnd ? s : null;
            })(r, e);
        return i
          ? o.map(C).concat({ type: e, attrs: n }).concat(i.map(C))
          : null;
      }
      function C(t) {
        return { type: t, attrs: null };
      }
      function O(t, e, n, r) {
        e.forEach((o, i) => {
          if (o.isText) {
            let s,
              l = /\r?\n|\r/g;
            for (; (s = l.exec(o.text)); ) {
              let o = t.mapping.slice(r).map(n + 1 + i + s.index);
              t.replaceWith(
                o,
                o + 1,
                e.type.schema.linebreakReplacement.create(),
              );
            }
          }
        });
      }
      function N(t, e, n, r) {
        e.forEach((o, i) => {
          if (o.type == o.type.schema.linebreakReplacement) {
            let o = t.mapping.slice(r).map(n + 1 + i);
            t.replaceWith(o, o + 1, e.type.schema.text("\n"));
          }
        });
      }
      function T(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 ? arguments[3] : void 0,
          o = t.resolve(e),
          i = o.depth - n,
          s = (r && r[r.length - 1]) || o.parent;
        if (
          i < 0 ||
          o.parent.type.spec.isolating ||
          !o.parent.canReplace(o.index(), o.parent.childCount) ||
          !s.type.validContent(
            o.parent.content.cutByIndex(o.index(), o.parent.childCount),
          )
        )
          return !1;
        for (let c = o.depth - 1, d = n - 2; c > i; c--, d--) {
          let t = o.node(c),
            e = o.index(c);
          if (t.type.spec.isolating) return !1;
          let n = t.content.cutByIndex(e, t.childCount),
            i = r && r[d + 1];
          i && (n = n.replaceChild(0, i.type.create(i.attrs)));
          let s = (r && r[d]) || t;
          if (!t.canReplace(e + 1, t.childCount) || !s.type.validContent(n))
            return !1;
        }
        let l = o.indexAfter(i),
          a = r && r[0];
        return o.node(i).canReplaceWith(l, l, a ? a.type : o.node(i + 1).type);
      }
      function A(t, e) {
        let n = t.resolve(e),
          r = n.index();
        return E(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
      }
      function E(t, e) {
        return !(
          !t ||
          !e ||
          t.isLeaf ||
          !(function (t, e) {
            e.content.size || t.type.compatibleContent(e.type);
            let n = t.contentMatchAt(t.childCount),
              { linebreakReplacement: r } = t.type.schema;
            for (let o = 0; o < e.childCount; o++) {
              let i = e.child(o),
                s = i.type == r ? t.type.schema.nodes.text : i.type;
              if (((n = n.matchType(s)), !n)) return !1;
              if (!t.type.allowsMarks(i.marks)) return !1;
            }
            return n.validEnd;
          })(t, e)
        );
      }
      function D(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          r = t.resolve(e);
        for (let o = r.depth; ; o--) {
          let t,
            i,
            s = r.index(o);
          if (
            (o == r.depth
              ? ((t = r.nodeBefore), (i = r.nodeAfter))
              : n > 0
                ? ((t = r.node(o + 1)), s++, (i = r.node(o).maybeChild(s)))
                : ((t = r.node(o).maybeChild(s - 1)), (i = r.node(o + 1))),
            t && !t.isTextblock && E(t, i) && r.node(o).canReplace(s, s + 1))
          )
            return e;
          if (0 == o) break;
          e = n < 0 ? r.before(o) : r.after(o);
        }
      }
      function R(t, e, n) {
        let r = t.resolve(e);
        if (!n.content.size) return e;
        let o = n.content;
        for (let i = 0; i < n.openStart; i++) o = o.firstChild.content;
        for (let i = 1; i <= (0 == n.openStart && n.size ? 2 : 1); i++)
          for (let t = r.depth; t >= 0; t--) {
            let e =
                t == r.depth
                  ? 0
                  : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2
                    ? -1
                    : 1,
              n = r.index(t) + (e > 0 ? 1 : 0),
              s = r.node(t),
              l = !1;
            if (1 == i) l = s.canReplace(n, n, o);
            else {
              let t = s.contentMatchAt(n).findWrapping(o.firstChild.type);
              l = t && s.canReplaceWith(n, n, t[0]);
            }
            if (l)
              return 0 == e ? r.pos : e < 0 ? r.before(t + 1) : r.after(t + 1);
          }
        return null;
      }
      function I(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
          o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : r.Ji.empty;
        if (e == n && !o.size) return null;
        let i = t.resolve(e),
          s = t.resolve(n);
        return P(i, s, o) ? new v(e, n, o) : new z(i, s, o).fit();
      }
      function P(t, e, n) {
        return (
          !n.openStart &&
          !n.openEnd &&
          t.start() == e.start() &&
          t.parent.canReplace(t.index(), e.index(), n.content)
        );
      }
      h.jsonID("replaceAround", w);
      class z {
        constructor(t, e, n) {
          ((this.$from = t),
            (this.$to = e),
            (this.unplaced = n),
            (this.frontier = []),
            (this.placed = r.FK.empty));
          for (let r = 0; r <= t.depth; r++) {
            let e = t.node(r);
            this.frontier.push({
              type: e.type,
              match: e.contentMatchAt(t.indexAfter(r)),
            });
          }
          for (let o = t.depth; o > 0; o--)
            this.placed = r.FK.from(t.node(o).copy(this.placed));
        }
        get depth() {
          return this.frontier.length - 1;
        }
        fit() {
          for (; this.unplaced.size; ) {
            let t = this.findFittable();
            t ? this.placeNodes(t) : this.openMore() || this.dropNode();
          }
          let t = this.mustMoveInline(),
            e = this.placed.size - this.depth - this.$from.depth,
            n = this.$from,
            o = this.close(t < 0 ? this.$to : n.doc.resolve(t));
          if (!o) return null;
          let i = this.placed,
            s = n.depth,
            l = o.depth;
          for (; s && l && 1 == i.childCount; )
            ((i = i.firstChild.content), s--, l--);
          let a = new r.Ji(i, s, l);
          return t > -1
            ? new w(n.pos, t, this.$to.pos, this.$to.end(), a, e)
            : a.size || n.pos != this.$to.pos
              ? new v(n.pos, o.pos, a)
              : null;
        }
        findFittable() {
          let t = this.unplaced.openStart;
          for (
            let e = this.unplaced.content, n = 0, r = this.unplaced.openEnd;
            n < t;
            n++
          ) {
            let o = e.firstChild;
            if (
              (e.childCount > 1 && (r = 0), o.type.spec.isolating && r <= n)
            ) {
              t = n;
              break;
            }
            e = o.content;
          }
          for (let e = 1; e <= 2; e++)
            for (let n = 1 == e ? t : this.unplaced.openStart; n >= 0; n--) {
              let t,
                o = null;
              n
                ? ((o = $(this.unplaced.content, n - 1).firstChild),
                  (t = o.content))
                : (t = this.unplaced.content);
              let i = t.firstChild;
              for (let s = this.depth; s >= 0; s--) {
                let t,
                  { type: l, match: a } = this.frontier[s],
                  c = null;
                if (
                  1 == e &&
                  (i
                    ? a.matchType(i.type) ||
                      (c = a.fillBefore(r.FK.from(i), !1))
                    : o && l.compatibleContent(o.type))
                )
                  return {
                    sliceDepth: n,
                    frontierDepth: s,
                    parent: o,
                    inject: c,
                  };
                if (2 == e && i && (t = a.findWrapping(i.type)))
                  return {
                    sliceDepth: n,
                    frontierDepth: s,
                    parent: o,
                    wrap: t,
                  };
                if (o && a.matchType(o.type)) break;
              }
            }
        }
        openMore() {
          let { content: t, openStart: e, openEnd: n } = this.unplaced,
            o = $(t, e);
          return (
            !(!o.childCount || o.firstChild.isLeaf) &&
            ((this.unplaced = new r.Ji(
              t,
              e + 1,
              Math.max(n, o.size + e >= t.size - n ? e + 1 : 0),
            )),
            !0)
          );
        }
        dropNode() {
          let { content: t, openStart: e, openEnd: n } = this.unplaced,
            o = $(t, e);
          if (o.childCount <= 1 && e > 0) {
            let i = t.size - e <= e + o.size;
            this.unplaced = new r.Ji(F(t, e - 1, 1), e - 1, i ? e - 1 : n);
          } else this.unplaced = new r.Ji(F(t, e, 1), e, n);
        }
        placeNodes(t) {
          let {
            sliceDepth: e,
            frontierDepth: n,
            parent: o,
            inject: i,
            wrap: s,
          } = t;
          for (; this.depth > n; ) this.closeFrontierNode();
          if (s) for (let r = 0; r < s.length; r++) this.openFrontierNode(s[r]);
          let l = this.unplaced,
            a = o ? o.content : l.content,
            c = l.openStart - e,
            d = 0,
            h = [],
            { match: p, type: u } = this.frontier[n];
          if (i) {
            for (let t = 0; t < i.childCount; t++) h.push(i.child(t));
            p = p.matchFragment(i);
          }
          let f = a.size + e - (l.content.size - l.openEnd);
          for (; d < a.childCount; ) {
            let t = a.child(d),
              e = p.matchType(t.type);
            if (!e) break;
            (d++,
              (d > 1 || 0 == c || t.content.size) &&
                ((p = e),
                h.push(
                  V(
                    t.mark(u.allowedMarks(t.marks)),
                    1 == d ? c : 0,
                    d == a.childCount ? f : -1,
                  ),
                )));
          }
          let m = d == a.childCount;
          (m || (f = -1),
            (this.placed = B(this.placed, n, r.FK.from(h))),
            (this.frontier[n].match = p),
            m &&
              f < 0 &&
              o &&
              o.type == this.frontier[this.depth].type &&
              this.frontier.length > 1 &&
              this.closeFrontierNode());
          for (let r = 0, g = a; r < f; r++) {
            let t = g.lastChild;
            (this.frontier.push({
              type: t.type,
              match: t.contentMatchAt(t.childCount),
            }),
              (g = t.content));
          }
          this.unplaced = m
            ? 0 == e
              ? r.Ji.empty
              : new r.Ji(
                  F(l.content, e - 1, 1),
                  e - 1,
                  f < 0 ? l.openEnd : e - 1,
                )
            : new r.Ji(F(l.content, e, d), l.openStart, l.openEnd);
        }
        mustMoveInline() {
          if (!this.$to.parent.isTextblock) return -1;
          let t,
            e = this.frontier[this.depth];
          if (
            !e.type.isTextblock ||
            !L(this.$to, this.$to.depth, e.type, e.match, !1) ||
            (this.$to.depth == this.depth &&
              (t = this.findCloseLevel(this.$to)) &&
              t.depth == this.depth)
          )
            return -1;
          let { depth: n } = this.$to,
            r = this.$to.after(n);
          for (; n > 1 && r == this.$to.end(--n); ) ++r;
          return r;
        }
        findCloseLevel(t) {
          t: for (let e = Math.min(this.depth, t.depth); e >= 0; e--) {
            let { match: n, type: r } = this.frontier[e],
              o = e < t.depth && t.end(e + 1) == t.pos + (t.depth - (e + 1)),
              i = L(t, e, r, n, o);
            if (i) {
              for (let n = e - 1; n >= 0; n--) {
                let { match: e, type: r } = this.frontier[n],
                  o = L(t, n, r, e, !0);
                if (!o || o.childCount) continue t;
              }
              return {
                depth: e,
                fit: i,
                move: o ? t.doc.resolve(t.after(e + 1)) : t,
              };
            }
          }
        }
        close(t) {
          let e = this.findCloseLevel(t);
          if (!e) return null;
          for (; this.depth > e.depth; ) this.closeFrontierNode();
          (e.fit.childCount && (this.placed = B(this.placed, e.depth, e.fit)),
            (t = e.move));
          for (let n = e.depth + 1; n <= t.depth; n++) {
            let e = t.node(n),
              r = e.type.contentMatch.fillBefore(e.content, !0, t.index(n));
            this.openFrontierNode(e.type, e.attrs, r);
          }
          return t;
        }
        openFrontierNode(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            n = arguments.length > 2 ? arguments[2] : void 0,
            o = this.frontier[this.depth];
          ((o.match = o.match.matchType(t)),
            (this.placed = B(
              this.placed,
              this.depth,
              r.FK.from(t.create(e, n)),
            )),
            this.frontier.push({ type: t, match: t.contentMatch }));
        }
        closeFrontierNode() {
          let t = this.frontier.pop().match.fillBefore(r.FK.empty, !0);
          t.childCount &&
            (this.placed = B(this.placed, this.frontier.length, t));
        }
      }
      function F(t, e, n) {
        return 0 == e
          ? t.cutByIndex(n, t.childCount)
          : t.replaceChild(
              0,
              t.firstChild.copy(F(t.firstChild.content, e - 1, n)),
            );
      }
      function B(t, e, n) {
        return 0 == e
          ? t.append(n)
          : t.replaceChild(
              t.childCount - 1,
              t.lastChild.copy(B(t.lastChild.content, e - 1, n)),
            );
      }
      function $(t, e) {
        for (let n = 0; n < e; n++) t = t.firstChild.content;
        return t;
      }
      function V(t, e, n) {
        if (e <= 0) return t;
        let o = t.content;
        return (
          e > 1 &&
            (o = o.replaceChild(
              0,
              V(o.firstChild, e - 1, 1 == o.childCount ? n - 1 : 0),
            )),
          e > 0 &&
            ((o = t.type.contentMatch.fillBefore(o).append(o)),
            n <= 0 &&
              (o = o.append(
                t.type.contentMatch.matchFragment(o).fillBefore(r.FK.empty, !0),
              ))),
          t.copy(o)
        );
      }
      function L(t, e, n, r, o) {
        let i = t.node(e),
          s = o ? t.indexAfter(e) : t.index(e);
        if (s == i.childCount && !n.compatibleContent(i.type)) return null;
        let l = r.fillBefore(i.content, !0, s);
        return l &&
          !(function (t, e, n) {
            for (let r = n; r < e.childCount; r++)
              if (!t.allowsMarks(e.child(r).marks)) return !0;
            return !1;
          })(n, i.content, s)
          ? l
          : null;
      }
      function J(t) {
        return t.spec.defining || t.spec.definingForContent;
      }
      function j(t, e, n, o, i) {
        if (e < n) {
          let r = t.firstChild;
          t = t.replaceChild(0, r.copy(j(r.content, e + 1, n, o, r)));
        }
        if (e > o) {
          let e = i.contentMatchAt(0),
            n = e.fillBefore(t).append(t);
          t = n.append(e.matchFragment(n).fillBefore(r.FK.empty, !0));
        }
        return t;
      }
      function K(t, e) {
        let n = [];
        for (let r = Math.min(t.depth, e.depth); r >= 0; r--) {
          let o = t.start(r);
          if (
            o < t.pos - (t.depth - r) ||
            e.end(r) > e.pos + (e.depth - r) ||
            t.node(r).type.spec.isolating ||
            e.node(r).type.spec.isolating
          )
            break;
          (o == e.start(r) ||
            (r == t.depth &&
              r == e.depth &&
              t.parent.inlineContent &&
              e.parent.inlineContent &&
              r &&
              e.start(r - 1) == o - 1)) &&
            n.push(r);
        }
        return n;
      }
      class W extends h {
        constructor(t, e, n) {
          (super(), (this.pos = t), (this.attr = e), (this.value = n));
        }
        apply(t) {
          let e = t.nodeAt(this.pos);
          if (!e) return p.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let r in e.attrs) n[r] = e.attrs[r];
          n[this.attr] = this.value;
          let o = e.type.create(n, null, e.marks);
          return p.fromReplace(
            t,
            this.pos,
            this.pos + 1,
            new r.Ji(r.FK.from(o), 0, e.isLeaf ? 0 : 1),
          );
        }
        getMap() {
          return a.empty;
        }
        invert(t) {
          return new W(
            this.pos,
            this.attr,
            t.nodeAt(this.pos).attrs[this.attr],
          );
        }
        map(t) {
          let e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new W(e.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.pos || "string" != typeof e.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new W(e.pos, e.attr, e.value);
        }
      }
      h.jsonID("attr", W);
      class q extends h {
        constructor(t, e) {
          (super(), (this.attr = t), (this.value = e));
        }
        apply(t) {
          let e = Object.create(null);
          for (let r in t.attrs) e[r] = t.attrs[r];
          e[this.attr] = this.value;
          let n = t.type.create(e, t.content, t.marks);
          return p.ok(n);
        }
        getMap() {
          return a.empty;
        }
        invert(t) {
          return new q(this.attr, t.attrs[this.attr]);
        }
        map(t) {
          return this;
        }
        toJSON() {
          return { stepType: "docAttr", attr: this.attr, value: this.value };
        }
        static fromJSON(t, e) {
          if ("string" != typeof e.attr)
            throw new RangeError("Invalid input for DocAttrStep.fromJSON");
          return new q(e.attr, e.value);
        }
      }
      h.jsonID("docAttr", q);
      let _ = class extends Error {};
      ((_ = function t(e) {
        let n = Error.call(this, e);
        return ((n.__proto__ = t.prototype), n);
      }),
        ((_.prototype = Object.create(Error.prototype)).constructor = _),
        (_.prototype.name = "TransformError"));
      class U {
        constructor(t) {
          ((this.doc = t),
            (this.steps = []),
            (this.docs = []),
            (this.mapping = new c()));
        }
        get before() {
          return this.docs.length ? this.docs[0] : this.doc;
        }
        step(t) {
          let e = this.maybeStep(t);
          if (e.failed) throw new _(e.failed);
          return this;
        }
        maybeStep(t) {
          let e = t.apply(this.doc);
          return (e.failed || this.addStep(t, e.doc), e);
        }
        get docChanged() {
          return this.steps.length > 0;
        }
        changedRange() {
          let t = 1e9,
            e = -1e9;
          for (let n = 0; n < this.mapping.maps.length; n++) {
            let r = this.mapping.maps[n];
            (n && ((t = r.map(t, 1)), (e = r.map(e, -1))),
              r.forEach((n, r, o, i) => {
                ((t = Math.min(t, o)), (e = Math.max(e, i)));
              }));
          }
          return 1e9 == t ? null : { from: t, to: e };
        }
        addStep(t, e) {
          (this.docs.push(this.doc),
            this.steps.push(t),
            this.mapping.appendMap(t.getMap()),
            (this.doc = e));
        }
        replace(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : t,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : r.Ji.empty,
            o = I(this.doc, t, e, n);
          return (o && this.step(o), this);
        }
        replaceWith(t, e, n) {
          return this.replace(t, e, new r.Ji(r.FK.from(n), 0, 0));
        }
        delete(t, e) {
          return this.replace(t, e, r.Ji.empty);
        }
        insert(t, e) {
          return this.replaceWith(t, t, e);
        }
        replaceRange(t, e, n) {
          return (
            (function (t, e, n, o) {
              if (!o.size) return t.deleteRange(e, n);
              let i = t.doc.resolve(e),
                s = t.doc.resolve(n);
              if (P(i, s, o)) return t.step(new v(e, n, o));
              let l = K(i, s);
              0 == l[l.length - 1] && l.pop();
              let a = -(i.depth + 1);
              l.unshift(a);
              for (let r = i.depth, u = i.pos - 1; r > 0; r--, u--) {
                let t = i.node(r).type.spec;
                if (t.defining || t.definingAsContext || t.isolating) break;
                l.indexOf(r) > -1
                  ? (a = r)
                  : i.before(r) == u && l.splice(1, 0, -r);
              }
              let c = l.indexOf(a),
                d = [],
                h = o.openStart;
              for (let r = o.content, u = 0; ; u++) {
                let t = r.firstChild;
                if ((d.push(t), u == o.openStart)) break;
                r = t.content;
              }
              for (let r = h - 1; r >= 0; r--) {
                let t = d[r],
                  e = J(t.type);
                if (e && !t.sameMarkup(i.node(Math.abs(a) - 1))) h = r;
                else if (e || !t.type.isTextblock) break;
              }
              for (let u = o.openStart; u >= 0; u--) {
                let e = (u + h + 1) % (o.openStart + 1),
                  a = d[e];
                if (a)
                  for (let d = 0; d < l.length; d++) {
                    let h = l[(d + c) % l.length],
                      p = !0;
                    h < 0 && ((p = !1), (h = -h));
                    let u = i.node(h - 1),
                      f = i.index(h - 1);
                    if (u.canReplaceWith(f, f, a.type, a.marks))
                      return t.replace(
                        i.before(h),
                        p ? s.after(h) : n,
                        new r.Ji(j(o.content, 0, o.openStart, e), e, o.openEnd),
                      );
                  }
              }
              let p = t.steps.length;
              for (
                let r = l.length - 1;
                r >= 0 && (t.replace(e, n, o), !(t.steps.length > p));
                r--
              ) {
                let t = l[r];
                t < 0 || ((e = i.before(t)), (n = s.after(t)));
              }
            })(this, t, e, n),
            this
          );
        }
        replaceRangeWith(t, e, n) {
          return (
            (function (t, e, n, o) {
              if (
                !o.isInline &&
                e == n &&
                t.doc.resolve(e).parent.content.size
              ) {
                let r = (function (t, e, n) {
                  let r = t.resolve(e);
                  if (r.parent.canReplaceWith(r.index(), r.index(), n))
                    return e;
                  if (0 == r.parentOffset)
                    for (let o = r.depth - 1; o >= 0; o--) {
                      let t = r.index(o);
                      if (r.node(o).canReplaceWith(t, t, n))
                        return r.before(o + 1);
                      if (t > 0) return null;
                    }
                  if (r.parentOffset == r.parent.content.size)
                    for (let o = r.depth - 1; o >= 0; o--) {
                      let t = r.indexAfter(o);
                      if (r.node(o).canReplaceWith(t, t, n))
                        return r.after(o + 1);
                      if (t < r.node(o).childCount) return null;
                    }
                  return null;
                })(t.doc, e, o.type);
                null != r && (e = n = r);
              }
              t.replaceRange(e, n, new r.Ji(r.FK.from(o), 0, 0));
            })(this, t, e, n),
            this
          );
        }
        deleteRange(t, e) {
          return (
            (function (t, e, n) {
              let r = t.doc.resolve(e),
                o = t.doc.resolve(n),
                i = K(r, o);
              for (let s = 0; s < i.length; s++) {
                let e = i[s],
                  n = s == i.length - 1;
                if ((n && 0 == e) || r.node(e).type.contentMatch.validEnd)
                  return t.delete(r.start(e), o.end(e));
                if (
                  e > 0 &&
                  (n ||
                    r
                      .node(e - 1)
                      .canReplace(r.index(e - 1), o.indexAfter(e - 1)))
                )
                  return t.delete(r.before(e), o.after(e));
              }
              for (let s = 1; s <= r.depth && s <= o.depth; s++)
                if (
                  e - r.start(s) == r.depth - s &&
                  n > r.end(s) &&
                  o.end(s) - n != o.depth - s &&
                  r.start(s - 1) == o.start(s - 1) &&
                  r.node(s - 1).canReplace(r.index(s - 1), o.index(s - 1))
                )
                  return t.delete(r.before(s), n);
              t.delete(e, n);
            })(this, t, e),
            this
          );
        }
        lift(t, e) {
          return (
            (function (t, e, n) {
              let { $from: o, $to: i, depth: s } = e,
                l = o.before(s + 1),
                a = i.after(s + 1),
                c = l,
                d = a,
                h = r.FK.empty,
                p = 0;
              for (let m = s, g = !1; m > n; m--)
                g || o.index(m) > 0
                  ? ((g = !0), (h = r.FK.from(o.node(m).copy(h))), p++)
                  : c--;
              let u = r.FK.empty,
                f = 0;
              for (let m = s, g = !1; m > n; m--)
                g || i.after(m + 1) < i.end(m)
                  ? ((g = !0), (u = r.FK.from(i.node(m).copy(u))), f++)
                  : d++;
              t.step(
                new w(c, d, l, a, new r.Ji(h.append(u), p, f), h.size - p, !0),
              );
            })(this, t, e),
            this
          );
        }
        join(t) {
          return (
            (function (t, e, n) {
              let o = null,
                { linebreakReplacement: i } = t.doc.type.schema,
                s = t.doc.resolve(e - n),
                l = s.node().type;
              if (i && l.inlineContent) {
                let t = "pre" == l.whitespace,
                  e = !!l.contentMatch.matchType(i);
                t && !e ? (o = !1) : !t && e && (o = !0);
              }
              let a = t.steps.length;
              if (!1 === o) {
                let r = t.doc.resolve(e + n);
                N(t, r.node(), r.before(), a);
              }
              l.inlineContent &&
                k(
                  t,
                  e + n - 1,
                  l,
                  s.node().contentMatchAt(s.index()),
                  null == o,
                );
              let c = t.mapping.slice(a),
                d = c.map(e - n);
              if (
                (t.step(new v(d, c.map(e + n, -1), r.Ji.empty, !0)), !0 === o)
              ) {
                let e = t.doc.resolve(d);
                O(t, e.node(), e.before(), t.steps.length);
              }
            })(
              this,
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            ),
            this
          );
        }
        wrap(t, e) {
          return (
            (function (t, e, n) {
              let o = r.FK.empty;
              for (let l = n.length - 1; l >= 0; l--) {
                if (o.size) {
                  let t = n[l].type.contentMatch.matchFragment(o);
                  if (!t || !t.validEnd)
                    throw new RangeError(
                      "Wrapper type given to Transform.wrap does not form valid content of its parent wrapper",
                    );
                }
                o = r.FK.from(n[l].type.create(n[l].attrs, o));
              }
              let i = e.start,
                s = e.end;
              t.step(new w(i, s, i, s, new r.Ji(o, 0, 0), n.length, !0));
            })(this, t, e),
            this
          );
        }
        setBlockType(t) {
          return (
            (function (t, e, n, o, i) {
              if (!o.isTextblock)
                throw new RangeError(
                  "Type given to setBlockType should be a textblock",
                );
              let s = t.steps.length;
              t.doc.nodesBetween(e, n, (e, n) => {
                let l = "function" == typeof i ? i(e) : i;
                if (
                  e.isTextblock &&
                  !e.hasMarkup(o, l) &&
                  (function (t, e, n) {
                    let r = t.resolve(e),
                      o = r.index();
                    return r.parent.canReplaceWith(o, o + 1, n);
                  })(t.doc, t.mapping.slice(s).map(n), o)
                ) {
                  let i = null;
                  if (o.schema.linebreakReplacement) {
                    let t = "pre" == o.whitespace,
                      e = !!o.contentMatch.matchType(
                        o.schema.linebreakReplacement,
                      );
                    t && !e ? (i = !1) : !t && e && (i = !0);
                  }
                  (!1 === i && N(t, e, n, s),
                    k(t, t.mapping.slice(s).map(n, 1), o, void 0, null === i));
                  let a = t.mapping.slice(s),
                    c = a.map(n, 1),
                    d = a.map(n + e.nodeSize, 1);
                  return (
                    t.step(
                      new w(
                        c,
                        d,
                        c + 1,
                        d - 1,
                        new r.Ji(r.FK.from(o.create(l, null, e.marks)), 0, 0),
                        1,
                        !0,
                      ),
                    ),
                    !0 === i && O(t, e, n, s),
                    !1
                  );
                }
              });
            })(
              this,
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : t,
              arguments.length > 2 ? arguments[2] : void 0,
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            ),
            this
          );
        }
        setNodeMarkup(t, e) {
          return (
            (function (t, e, n, o, i) {
              let s = t.doc.nodeAt(e);
              if (!s) throw new RangeError("No node at given position");
              n || (n = s.type);
              let l = n.create(o, null, i || s.marks);
              if (s.isLeaf) return t.replaceWith(e, e + s.nodeSize, l);
              if (!n.validContent(s.content))
                throw new RangeError("Invalid content for node type " + n.name);
              t.step(
                new w(
                  e,
                  e + s.nodeSize,
                  e + 1,
                  e + s.nodeSize - 1,
                  new r.Ji(r.FK.from(l), 0, 0),
                  1,
                  !0,
                ),
              );
            })(
              this,
              t,
              e,
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
              arguments.length > 3 ? arguments[3] : void 0,
            ),
            this
          );
        }
        setNodeAttribute(t, e, n) {
          return (this.step(new W(t, e, n)), this);
        }
        setDocAttribute(t, e) {
          return (this.step(new q(t, e)), this);
        }
        addNodeMark(t, e) {
          return (this.step(new g(t, e)), this);
        }
        removeNodeMark(t, e) {
          let n = this.doc.nodeAt(t);
          if (!n) throw new RangeError("No node at position " + t);
          if (e instanceof r.CU) e.isInSet(n.marks) && this.step(new y(t, e));
          else {
            let r,
              o = n.marks,
              i = [];
            for (; (r = e.isInSet(o)); )
              (i.push(new y(t, r)), (o = r.removeFromSet(o)));
            for (let t = i.length - 1; t >= 0; t--) this.step(i[t]);
          }
          return this;
        }
        split(t) {
          return (
            (function (t, e) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1,
                o = arguments.length > 3 ? arguments[3] : void 0,
                i = t.doc.resolve(e),
                s = r.FK.empty,
                l = r.FK.empty;
              for (
                let a = i.depth, c = i.depth - n, d = n - 1;
                a > c;
                a--, d--
              ) {
                s = r.FK.from(i.node(a).copy(s));
                let t = o && o[d];
                l = r.FK.from(
                  t ? t.type.create(t.attrs, l) : i.node(a).copy(l),
                );
              }
              t.step(new v(e, e, new r.Ji(s.append(l), n, n), !0));
            })(
              this,
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
              arguments.length > 2 ? arguments[2] : void 0,
            ),
            this
          );
        }
        addMark(t, e, n) {
          return (
            (function (t, e, n, r) {
              let o,
                i,
                s = [],
                l = [];
              (t.doc.nodesBetween(e, n, (t, a, c) => {
                if (!t.isInline) return;
                let d = t.marks;
                if (!r.isInSet(d) && c.type.allowsMarkType(r.type)) {
                  let c = Math.max(a, e),
                    h = Math.min(a + t.nodeSize, n),
                    p = r.addToSet(d);
                  for (let t = 0; t < d.length; t++)
                    d[t].isInSet(p) ||
                      (o && o.to == c && o.mark.eq(d[t])
                        ? (o.to = h)
                        : s.push((o = new m(c, h, d[t]))));
                  i && i.to == c ? (i.to = h) : l.push((i = new f(c, h, r)));
                }
              }),
                s.forEach((e) => t.step(e)),
                l.forEach((e) => t.step(e)));
            })(this, t, e, n),
            this
          );
        }
        removeMark(t, e, n) {
          return (
            (function (t, e, n, o) {
              let i = [],
                s = 0;
              (t.doc.nodesBetween(e, n, (t, l) => {
                if (!t.isInline) return;
                s++;
                let a = null;
                if (o instanceof r.sX) {
                  let e,
                    n = t.marks;
                  for (; (e = o.isInSet(n)); )
                    ((a || (a = [])).push(e), (n = e.removeFromSet(n)));
                } else o ? o.isInSet(t.marks) && (a = [o]) : (a = t.marks);
                if (a && a.length) {
                  let r = Math.min(l + t.nodeSize, n);
                  for (let t = 0; t < a.length; t++) {
                    let n,
                      o = a[t];
                    for (let t = 0; t < i.length; t++) {
                      let e = i[t];
                      e.step == s - 1 && o.eq(i[t].style) && (n = e);
                    }
                    n
                      ? ((n.to = r), (n.step = s))
                      : i.push({
                          style: o,
                          from: Math.max(l, e),
                          to: r,
                          step: s,
                        });
                  }
                }
              }),
                i.forEach((e) => t.step(new m(e.from, e.to, e.style))));
            })(this, t, e, n),
            this
          );
        }
        clearIncompatible(t, e, n) {
          return (k(this, t, e, n), this);
        }
      }
    },
  },
]);
//# sourceMappingURL=506.20747af2.chunk.js.map
