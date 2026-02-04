"use strict";
(self.webpackChunkpuck_poc = self.webpackChunkpuck_poc || []).push([
  [308],
  {
    308(e, n, t) {
      t.d(n, { RichTextRender: () => f });
      var r = t(644),
        o = t(129),
        i = t(28),
        s = t(578),
        a = t(506),
        c = t(282);
      function u(e, n) {
        if ("undefined" === typeof window)
          throw new Error(
            "generateHTML can only be used in a browser environment\nIf you want to use this in a Node environment, use the `@tiptap/html/server` import instead.",
          );
        const t = (0, a._w)(n);
        return (function (e, n, t) {
          if ("undefined" === typeof window)
            throw new Error(
              "getHTMLFromFragment can only be used in a browser environment\nIf you want to use this in a Node environment, use the `@tiptap/html/server` import instead.",
            );
          if (null == t ? void 0 : t.document) {
            const r = t.document.createElement("div");
            return (
              c.ZF.fromSchema(n).serializeFragment(
                e.content,
                { document: t.document },
                r,
              ),
              r.innerHTML
            );
          }
          const r = c.ZF.fromSchema(n).serializeFragment(e.content, {
            document: window.document,
          });
          return new XMLSerializer().serializeToString(r);
        })(c.bP.fromJSON(t, e), t);
      }
      var d = t(43),
        m = t(579);
      (0, s.hY)();
      var p = (0, i.d)("RichTextEditor", o.o);
      function f(e) {
        let { content: n, field: t } = e;
        const { tiptap: o = {}, options: i } = t,
          { extensions: s = [] } = o,
          f = (0, d.useMemo)(() => [r.b.configure(i), ...s], [t, s]),
          w = (0, d.useMemo)(() => {
            if (
              "object" === typeof n &&
              "doc" === (null == n ? void 0 : n.type)
            )
              return n;
            if ("string" === typeof n) {
              return /<\/?[a-z][\s\S]*>/i.test(n)
                ? (function (e, n, t) {
                    if ("undefined" === typeof window)
                      throw new Error(
                        "generateJSON can only be used in a browser environment\nIf you want to use this in a Node environment, use the `@tiptap/html/server` import instead.",
                      );
                    const r = (0, a._w)(n),
                      o = new window.DOMParser().parseFromString(
                        e,
                        "text/html",
                      );
                    if (!o) throw new Error("Failed to parse HTML string");
                    return c.S4.fromSchema(r).parse(o.body, t).toJSON();
                  })(n, f)
                : {
                    type: "doc",
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: n }],
                      },
                    ],
                  };
            }
            return { type: "doc", content: [] };
          }, [n, f]),
          h = (0, d.useMemo)(() => u(w, f), [w, f]);
        return (0, m.jsx)("div", {
          className: p(),
          children: (0, m.jsx)("div", {
            className: "rich-text",
            dangerouslySetInnerHTML: { __html: h },
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=308.f9198041.chunk.js.map
