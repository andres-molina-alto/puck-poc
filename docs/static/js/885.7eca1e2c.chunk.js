"use strict";
(self.webpackChunkpuck_poc = self.webpackChunkpuck_poc || []).push([
  [885],
  {
    885(e, n, l) {
      l.d(n, { HeadingSelectLoaded: () => c });
      var r = l(927),
        t = l(876),
        o = (l(730), l(585), l(28), l(105), l(578)),
        u = l(580),
        a = l(579);
      function c() {
        const { options: e } = (0, t.ym)(),
          n = (0, r.O)(e),
          { editor: l } = (0, t.ym)(),
          o = (0, u.er)({
            editor: l,
            selector: (e) => {
              var n, l;
              if (null == (n = e.editor) ? void 0 : n.isActive("paragraph"))
                return "p";
              for (let r = 1; r <= 6; r++)
                if (
                  null == (l = e.editor)
                    ? void 0
                    : l.isActive("heading", { level: r })
                )
                  return "h".concat(r);
              return "p";
            },
          });
        return (0, a.jsx)(t.Yq, {
          options: n,
          onChange: (e) => {
            const n = null == l ? void 0 : l.chain();
            if ("p" === e) null == n || n.focus().setParagraph().run();
            else {
              const l = parseInt(e.replace("h", ""), 10);
              null == n || n.focus().toggleHeading({ level: l }).run();
            }
          },
          value: null != o ? o : "p",
          defaultValue: "p",
          renderDefaultIcon: t.DZ,
        });
      }
      (0, o.hY)();
    },
  },
]);
//# sourceMappingURL=885.7eca1e2c.chunk.js.map
