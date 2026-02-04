"use strict";
(self.webpackChunkpuck_poc = self.webpackChunkpuck_poc || []).push([
  [530],
  {
    530(e, t, n) {
      n.d(t, { Editor: () => f });
      var o = n(644),
        i = n(743),
        r = (n(129), n(998), n(834), n(927), n(38), n(876)),
        u = (n(730), n(585), n(28), n(105), n(578)),
        s = n(43),
        a = n(580),
        c = n(970),
        l = n(579);
      function d(e) {
        let {
          content: t,
          onChange: n,
          extensions: o,
          editable: i = !0,
          onFocusChange: l,
          name: d,
        } = e;
        const [f, m] = (0, c.d7)(null, 50, { leading: !0, maxWait: 200 }),
          h = (0, s.useRef)(!1),
          p = (0, s.useRef)(""),
          x = (0, s.useRef)(null),
          g = !!x.current,
          k = (0, r.CU)((e) => e.state.ui.field.focus === d),
          C = (0, r.sL)(),
          v = (0, a.hG)({
            extensions: o,
            content: t,
            editable: i,
            immediatelyRender: !1,
            parseOptions: { preserveWhitespace: "full" },
            onUpdate: (e) => {
              let { editor: t } = e;
              if (h.current || !k)
                return void C.getState().setUi({ field: { focus: d } });
              const n = t.getHTML(),
                { from: o, to: i } = t.state.selection;
              var r;
              (m({ from: o, to: i, html: n }),
                (r = n),
                x.current && clearTimeout(x.current),
                (x.current = setTimeout(() => {
                  p.current === r && (x.current = null);
                }, 200)),
                (p.current = n));
            },
          });
        return (
          (0, s.useEffect)(() => {
            if (!v) return;
            const e = () => {
              null == l || l(v);
            };
            return (
              v.on("focus", e),
              () => {
                v.off("focus", e);
              }
            );
          }, [v, l]),
          (0, s.useEffect)(() => {
            if (f) {
              const { ui: e } = C.getState().state;
              n(f.html, {
                field: (0, u.ko)((0, u.IA)({}, e.field), {
                  metadata: { from: f.from, to: f.to },
                }),
              });
            }
          }, [v, f, n, C, d]),
          (0, s.useEffect)(() => {
            null == v || v.setEditable(i);
          }, [v, i]),
          (0, s.useEffect)(() => {
            var e;
            if (!v) return;
            if (g) return;
            if (v.getHTML() === t) return;
            ((h.current = !0), v.commands.setContent(t, { emitUpdate: !1 }));
            const { ui: n } = C.getState().state;
            ("undefined" !==
              typeof (null == (e = n.field.metadata) ? void 0 : e.from) &&
              v.commands.setTextSelection({
                from: n.field.metadata.from,
                to: n.field.metadata.to,
              }),
              (h.current = !1));
          }, [t, v, C]),
          v
        );
      }
      ((0, u.hY)(), (0, u.hY)());
      var f = (0, s.memo)((e) => {
        const {
            onChange: t,
            content: n,
            readOnly: c = !1,
            field: f,
            inline: m = !1,
            onFocus: h,
            id: p,
            name: x,
          } = e,
          { tiptap: g = {}, options: k } = f,
          { extensions: C = [] } = g,
          v = (0, s.useMemo)(() => [o.b.configure(k), ...C], [f, C]),
          T = (0, r.sL)(),
          R = "".concat(x).concat(m ? "::inline" : ""),
          b = d({
            content: n,
            onChange: t,
            extensions: v,
            editable: !c,
            name: R,
            onFocusChange: (e) => {
              if (e) {
                const t = T.getState();
                (T.setState({
                  currentRichText: { field: f, editor: e, id: p, inline: m },
                  state: (0, u.ko)((0, u.IA)({}, t.state), {
                    ui: (0, u.ko)((0, u.IA)({}, t.state.ui), {
                      field: (0, u.ko)((0, u.IA)({}, t.state.ui.field), {
                        focus: R,
                      }),
                    }),
                  }),
                }),
                  null == h || h(e));
              }
            },
          }),
          E = (0, r.CU)((e) => {
            var t, n;
            return !m &&
              (null == (t = e.currentRichText) ? void 0 : t.id) === p &&
              (null == (n = e.currentRichText) ? void 0 : n.inlineComponentId)
              ? e.currentRichText.editor
              : b;
          });
        return b
          ? (0, l.jsx)(
              i.I,
              (0, u.ko)((0, u.IA)({}, e), {
                editor: b,
                menu: (0, l.jsx)(i.e, { field: f, editor: E, readOnly: c }),
                children: (0, l.jsx)(a.$Z, {
                  editor: b,
                  className: "rich-text",
                }),
              }),
            )
          : null;
      });
      f.displayName = "Editor";
    },
  },
]);
//# sourceMappingURL=530.b3dfa713.chunk.js.map
