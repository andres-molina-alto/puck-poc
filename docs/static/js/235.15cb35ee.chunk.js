"use strict";
(self.webpackChunkpuck_poc = self.webpackChunkpuck_poc || []).push([
  [235],
  {
    235(e, l, u) {
      u.d(l, { ListSelectLoaded: () => i });
      var t = u(38),
        o = u(876),
        n = (u(730), u(585), u(28), u(105), u(578)),
        r = u(580),
        s = u(579);
      function i() {
        const { options: e } = (0, o.ym)(),
          l = (0, t.k)(e),
          { editor: u } = (0, o.ym)(),
          n = (0, r.er)({
            editor: u,
            selector: (e) => {
              var l, u;
              return (
                null == (l = e.editor) ? void 0 : l.isActive("bulletList")
              )
                ? "ul"
                : (null == (u = e.editor) ? void 0 : u.isActive("orderedList"))
                  ? "ol"
                  : "p";
            },
          });
        return (0, s.jsx)(o.Yq, {
          options: l,
          onChange: (e) => {
            const l = null == u ? void 0 : u.chain();
            "p" === e
              ? null == l || l.focus().setParagraph().run()
              : "ol" === e
                ? null == l || l.focus().toggleOrderedList().run()
                : "ul" === e &&
                  (null == l || l.focus().toggleBulletList().run());
          },
          value: null != n ? n : "p",
          defaultValue: "p",
          renderDefaultIcon: o.B8,
        });
      }
      (0, n.hY)();
    },
  },
]);
//# sourceMappingURL=235.15cb35ee.chunk.js.map
