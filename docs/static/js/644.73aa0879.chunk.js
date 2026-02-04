"use strict";
(self.webpackChunkpuck_poc = self.webpackChunkpuck_poc || []).push([
  [644],
  {
    644(t, e, u) {
      u.d(e, { b: () => cu });
      var n = u(578),
        r = u(506),
        s = u(555),
        o = u(986);
      const i = ["children"];
      var a = (t, e) => {
          if ("slot" === t) return 0;
          if (t instanceof Function) return t(e);
          const u = null != e ? e : {},
            { children: n } = u,
            r = (0, o.A)(u, i);
          if ("svg" === t)
            throw new Error(
              "SVG elements are not supported in the JSX syntax, use the array syntax instead",
            );
          return [t, r, n];
        },
        l = /^\s*>\s$/,
        d = r.bP.create({
          name: "blockquote",
          addOptions: () => ({ HTMLAttributes: {} }),
          content: "block+",
          group: "block",
          defining: !0,
          parseHTML: () => [{ tag: "blockquote" }],
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return a(
              "blockquote",
              (0, s.A)(
                (0, s.A)({}, (0, r.KV)(this.options.HTMLAttributes, e)),
                {},
                { children: a("slot", {}) },
              ),
            );
          },
          parseMarkdown: (t, e) =>
            e.createNode("blockquote", void 0, e.parseChildren(t.tokens || [])),
          renderMarkdown: (t, e) => {
            if (!t.content) return "";
            const u = [];
            return (
              t.content.forEach((t) => {
                const n = e
                  .renderChildren([t])
                  .split("\n")
                  .map((t) =>
                    "" === t.trim() ? ">" : "".concat(">", " ").concat(t),
                  );
                u.push(n.join("\n"));
              }),
              u.join("\n".concat(">", "\n"))
            );
          },
          addCommands() {
            return {
              setBlockquote: () => (t) => {
                let { commands: e } = t;
                return e.wrapIn(this.name);
              },
              toggleBlockquote: () => (t) => {
                let { commands: e } = t;
                return e.toggleWrap(this.name);
              },
              unsetBlockquote: () => (t) => {
                let { commands: e } = t;
                return e.lift(this.name);
              },
            };
          },
          addKeyboardShortcuts() {
            return {
              "Mod-Shift-b": () => this.editor.commands.toggleBlockquote(),
            };
          },
          addInputRules() {
            return [(0, r.tG)({ find: l, type: this.type })];
          },
        }),
        D = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/,
        c = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g,
        p = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/,
        h = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g,
        m = r.CU.create({
          name: "bold",
          addOptions: () => ({ HTMLAttributes: {} }),
          parseHTML() {
            return [
              { tag: "strong" },
              {
                tag: "b",
                getAttrs: (t) => "normal" !== t.style.fontWeight && null,
              },
              {
                style: "font-weight=400",
                clearMark: (t) => t.type.name === this.name,
              },
              {
                style: "font-weight",
                getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null,
              },
            ];
          },
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return a(
              "strong",
              (0, s.A)(
                (0, s.A)({}, (0, r.KV)(this.options.HTMLAttributes, e)),
                {},
                { children: a("slot", {}) },
              ),
            );
          },
          markdownTokenName: "strong",
          parseMarkdown: (t, e) =>
            e.applyMark("bold", e.parseInline(t.tokens || [])),
          renderMarkdown: (t, e) => "**".concat(e.renderChildren(t), "**"),
          addCommands() {
            return {
              setBold: () => (t) => {
                let { commands: e } = t;
                return e.setMark(this.name);
              },
              toggleBold: () => (t) => {
                let { commands: e } = t;
                return e.toggleMark(this.name);
              },
              unsetBold: () => (t) => {
                let { commands: e } = t;
                return e.unsetMark(this.name);
              },
            };
          },
          addKeyboardShortcuts() {
            return {
              "Mod-b": () => this.editor.commands.toggleBold(),
              "Mod-B": () => this.editor.commands.toggleBold(),
            };
          },
          addInputRules() {
            return [
              (0, r.OX)({ find: D, type: this.type }),
              (0, r.OX)({ find: p, type: this.type }),
            ];
          },
          addPasteRules() {
            return [
              (0, r.Zc)({ find: c, type: this.type }),
              (0, r.Zc)({ find: h, type: this.type }),
            ];
          },
        }),
        A = /(^|[^`])`([^`]+)`(?!`)$/,
        g = /(^|[^`])`([^`]+)`(?!`)/g,
        E = r.CU.create({
          name: "code",
          addOptions: () => ({ HTMLAttributes: {} }),
          excludes: "_",
          code: !0,
          exitable: !0,
          parseHTML: () => [{ tag: "code" }],
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return ["code", (0, r.KV)(this.options.HTMLAttributes, e), 0];
          },
          markdownTokenName: "codespan",
          parseMarkdown: (t, e) =>
            e.applyMark("code", [{ type: "text", text: t.text || "" }]),
          renderMarkdown: (t, e) =>
            t.content ? "`".concat(e.renderChildren(t.content), "`") : "",
          addCommands() {
            return {
              setCode: () => (t) => {
                let { commands: e } = t;
                return e.setMark(this.name);
              },
              toggleCode: () => (t) => {
                let { commands: e } = t;
                return e.toggleMark(this.name);
              },
              unsetCode: () => (t) => {
                let { commands: e } = t;
                return e.unsetMark(this.name);
              },
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-e": () => this.editor.commands.toggleCode() };
          },
          addInputRules() {
            return [(0, r.OX)({ find: A, type: this.type })];
          },
          addPasteRules() {
            return [(0, r.Zc)({ find: g, type: this.type })];
          },
        }),
        C = u(184),
        F = /^```([a-z]+)?[\s\n]$/,
        k = /^~~~([a-z]+)?[\s\n]$/,
        f = r.bP.create({
          name: "codeBlock",
          addOptions: () => ({
            languageClassPrefix: "language-",
            exitOnTripleEnter: !0,
            exitOnArrowDown: !0,
            defaultLanguage: null,
            enableTabIndentation: !1,
            tabSize: 4,
            HTMLAttributes: {},
          }),
          content: "text*",
          marks: "",
          group: "block",
          code: !0,
          defining: !0,
          addAttributes() {
            return {
              language: {
                default: this.options.defaultLanguage,
                parseHTML: (t) => {
                  var e;
                  const { languageClassPrefix: u } = this.options;
                  if (!u) return null;
                  const n = [
                    ...((null == (e = t.firstElementChild)
                      ? void 0
                      : e.classList) || []),
                  ]
                    .filter((t) => t.startsWith(u))
                    .map((t) => t.replace(u, ""))[0];
                  return n || null;
                },
                rendered: !1,
              },
            };
          },
          parseHTML: () => [{ tag: "pre", preserveWhitespace: "full" }],
          renderHTML(t) {
            let { node: e, HTMLAttributes: u } = t;
            return [
              "pre",
              (0, r.KV)(this.options.HTMLAttributes, u),
              [
                "code",
                {
                  class: e.attrs.language
                    ? this.options.languageClassPrefix + e.attrs.language
                    : null,
                },
                0,
              ],
            ];
          },
          markdownTokenName: "code",
          parseMarkdown: (t, e) => {
            var u;
            return !1 ===
              (null == (u = t.raw) ? void 0 : u.startsWith("```")) &&
              "indented" !== t.codeBlockStyle
              ? []
              : e.createNode(
                  "codeBlock",
                  { language: t.lang || null },
                  t.text ? [e.createTextNode(t.text)] : [],
                );
          },
          renderMarkdown: (t, e) => {
            var u;
            let n = "";
            const r = (null == (u = t.attrs) ? void 0 : u.language) || "";
            if (t.content) {
              n = ["```".concat(r), e.renderChildren(t.content), "```"].join(
                "\n",
              );
            } else n = "```".concat(r, "\n\n```");
            return n;
          },
          addCommands() {
            return {
              setCodeBlock: (t) => (e) => {
                let { commands: u } = e;
                return u.setNode(this.name, t);
              },
              toggleCodeBlock: (t) => (e) => {
                let { commands: u } = e;
                return u.toggleNode(this.name, "paragraph", t);
              },
            };
          },
          addKeyboardShortcuts() {
            return {
              "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
              Backspace: () => {
                const { empty: t, $anchor: e } = this.editor.state.selection,
                  u = 1 === e.pos;
                return (
                  !(!t || e.parent.type.name !== this.name) &&
                  !(!u && e.parent.textContent.length) &&
                  this.editor.commands.clearNodes()
                );
              },
              Tab: (t) => {
                let { editor: e } = t;
                var u;
                if (!this.options.enableTabIndentation) return !1;
                const n = null != (u = this.options.tabSize) ? u : 4,
                  { state: r } = e,
                  { selection: s } = r,
                  { $from: o, empty: i } = s;
                if (o.parent.type !== this.type) return !1;
                const a = " ".repeat(n);
                return i
                  ? e.commands.insertContent(a)
                  : e.commands.command((t) => {
                      let { tr: e } = t;
                      const { from: u, to: n } = s,
                        o = r.doc
                          .textBetween(u, n, "\n", "\n")
                          .split("\n")
                          .map((t) => a + t)
                          .join("\n");
                      return (e.replaceWith(u, n, r.schema.text(o)), !0);
                    });
              },
              "Shift-Tab": (t) => {
                let { editor: e } = t;
                var u;
                if (!this.options.enableTabIndentation) return !1;
                const n = null != (u = this.options.tabSize) ? u : 4,
                  { state: r } = e,
                  { selection: s } = r,
                  { $from: o, empty: i } = s;
                return (
                  o.parent.type === this.type &&
                  (i
                    ? e.commands.command((t) => {
                        let { tr: e } = t;
                        var u;
                        const { pos: s } = o,
                          i = o.start(),
                          a = o.end(),
                          l = r.doc.textBetween(i, a, "\n", "\n").split("\n");
                        let d = 0,
                          D = 0;
                        const c = s - i;
                        for (let n = 0; n < l.length; n += 1) {
                          if (D + l[n].length >= c) {
                            d = n;
                            break;
                          }
                          D += l[n].length + 1;
                        }
                        const p =
                            (null == (u = l[d].match(/^ */)) ? void 0 : u[0]) ||
                            "",
                          h = Math.min(p.length, n);
                        if (0 === h) return !0;
                        let m = i;
                        for (let n = 0; n < d; n += 1) m += l[n].length + 1;
                        e.delete(m, m + h);
                        return (
                          s - m <= h && e.setSelection(C.U3.create(e.doc, m)),
                          !0
                        );
                      })
                    : e.commands.command((t) => {
                        let { tr: e } = t;
                        const { from: u, to: o } = s,
                          i = r.doc
                            .textBetween(u, o, "\n", "\n")
                            .split("\n")
                            .map((t) => {
                              var e;
                              const u =
                                  (null == (e = t.match(/^ */))
                                    ? void 0
                                    : e[0]) || "",
                                r = Math.min(u.length, n);
                              return t.slice(r);
                            })
                            .join("\n");
                        return (e.replaceWith(u, o, r.schema.text(i)), !0);
                      }))
                );
              },
              Enter: (t) => {
                let { editor: e } = t;
                if (!this.options.exitOnTripleEnter) return !1;
                const { state: u } = e,
                  { selection: n } = u,
                  { $from: r, empty: s } = n;
                if (!s || r.parent.type !== this.type) return !1;
                const o = r.parentOffset === r.parent.nodeSize - 2,
                  i = r.parent.textContent.endsWith("\n\n");
                return (
                  !(!o || !i) &&
                  e
                    .chain()
                    .command((t) => {
                      let { tr: e } = t;
                      return (e.delete(r.pos - 2, r.pos), !0);
                    })
                    .exitCode()
                    .run()
                );
              },
              ArrowDown: (t) => {
                let { editor: e } = t;
                if (!this.options.exitOnArrowDown) return !1;
                const { state: u } = e,
                  { selection: n, doc: r } = u,
                  { $from: s, empty: o } = n;
                if (!o || s.parent.type !== this.type) return !1;
                if (!(s.parentOffset === s.parent.nodeSize - 2)) return !1;
                const i = s.after();
                if (void 0 === i) return !1;
                return r.nodeAt(i)
                  ? e.commands.command((t) => {
                      let { tr: e } = t;
                      return (e.setSelection(C.LN.near(r.resolve(i))), !0);
                    })
                  : e.commands.exitCode();
              },
            };
          },
          addInputRules() {
            return [
              (0, r.JJ)({
                find: F,
                type: this.type,
                getAttributes: (t) => ({ language: t[1] }),
              }),
              (0, r.JJ)({
                find: k,
                type: this.type,
                getAttributes: (t) => ({ language: t[1] }),
              }),
            ];
          },
          addProseMirrorPlugins() {
            return [
              new C.k_({
                key: new C.hs("codeBlockVSCodeHandler"),
                props: {
                  handlePaste: (t, e) => {
                    if (!e.clipboardData) return !1;
                    if (this.editor.isActive(this.type.name)) return !1;
                    const u = e.clipboardData.getData("text/plain"),
                      n = e.clipboardData.getData("vscode-editor-data"),
                      r = n ? JSON.parse(n) : void 0,
                      s = null == r ? void 0 : r.mode;
                    if (!u || !s) return !1;
                    const { tr: o, schema: i } = t.state,
                      a = i.text(u.replace(/\r\n?/g, "\n"));
                    return (
                      o.replaceSelectionWith(
                        this.type.create({ language: s }, a),
                      ),
                      o.selection.$from.parent.type !== this.type &&
                        o.setSelection(
                          C.U3.near(
                            o.doc.resolve(Math.max(0, o.selection.from - 2)),
                          ),
                        ),
                      o.setMeta("paste", !0),
                      t.dispatch(o),
                      !0
                    );
                  },
                },
              }),
            ];
          },
        }),
        y = r.bP.create({
          name: "doc",
          topNode: !0,
          content: "block+",
          renderMarkdown: (t, e) =>
            t.content ? e.renderChildren(t.content, "\n\n") : "",
        }),
        b = r.bP.create({
          name: "hardBreak",
          markdownTokenName: "br",
          addOptions: () => ({ keepMarks: !0, HTMLAttributes: {} }),
          inline: !0,
          group: "inline",
          selectable: !1,
          linebreakReplacement: !0,
          parseHTML: () => [{ tag: "br" }],
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return ["br", (0, r.KV)(this.options.HTMLAttributes, e)];
          },
          renderText: () => "\n",
          renderMarkdown: () => "  \n",
          parseMarkdown: () => ({ type: "hardBreak" }),
          addCommands() {
            return {
              setHardBreak: () => (t) => {
                let { commands: e, chain: u, state: n, editor: r } = t;
                return e.first([
                  () => e.exitCode(),
                  () =>
                    e.command(() => {
                      const { selection: t, storedMarks: e } = n;
                      if (t.$from.parent.type.spec.isolating) return !1;
                      const { keepMarks: s } = this.options,
                        { splittableMarks: o } = r.extensionManager,
                        i = e || (t.$to.parentOffset && t.$from.marks());
                      return u()
                        .insertContent({ type: this.name })
                        .command((t) => {
                          let { tr: e, dispatch: u } = t;
                          if (u && i && s) {
                            const t = i.filter((t) => o.includes(t.type.name));
                            e.ensureMarks(t);
                          }
                          return !0;
                        })
                        .run();
                    }),
                ]);
              },
            };
          },
          addKeyboardShortcuts() {
            return {
              "Mod-Enter": () => this.editor.commands.setHardBreak(),
              "Shift-Enter": () => this.editor.commands.setHardBreak(),
            };
          },
        }),
        B = r.bP.create({
          name: "heading",
          addOptions: () => ({
            levels: [1, 2, 3, 4, 5, 6],
            HTMLAttributes: {},
          }),
          content: "inline*",
          group: "block",
          defining: !0,
          addAttributes: () => ({ level: { default: 1, rendered: !1 } }),
          parseHTML() {
            return this.options.levels.map((t) => ({
              tag: "h".concat(t),
              attrs: { level: t },
            }));
          },
          renderHTML(t) {
            let { node: e, HTMLAttributes: u } = t;
            const n = this.options.levels.includes(e.attrs.level)
              ? e.attrs.level
              : this.options.levels[0];
            return [
              "h".concat(n),
              (0, r.KV)(this.options.HTMLAttributes, u),
              0,
            ];
          },
          parseMarkdown: (t, e) =>
            e.createNode(
              "heading",
              { level: t.depth || 1 },
              e.parseInline(t.tokens || []),
            ),
          renderMarkdown: (t, e) => {
            var u;
            const n = (null == (u = t.attrs) ? void 0 : u.level)
                ? parseInt(t.attrs.level, 10)
                : 1,
              r = "#".repeat(n);
            return t.content
              ? "".concat(r, " ").concat(e.renderChildren(t.content))
              : "";
          },
          addCommands() {
            return {
              setHeading: (t) => (e) => {
                let { commands: u } = e;
                return (
                  !!this.options.levels.includes(t.level) &&
                  u.setNode(this.name, t)
                );
              },
              toggleHeading: (t) => (e) => {
                let { commands: u } = e;
                return (
                  !!this.options.levels.includes(t.level) &&
                  u.toggleNode(this.name, "paragraph", t)
                );
              },
            };
          },
          addKeyboardShortcuts() {
            return this.options.levels.reduce(
              (t, e) =>
                (0, s.A)((0, s.A)({}, t), {
                  ["Mod-Alt-".concat(e)]: () =>
                    this.editor.commands.toggleHeading({ level: e }),
                }),
              {},
            );
          },
          addInputRules() {
            return this.options.levels.map((t) =>
              (0, r.JJ)({
                find: new RegExp(
                  "^(#{"
                    .concat(Math.min(...this.options.levels), ",")
                    .concat(t, "})\\s$"),
                ),
                type: this.type,
                getAttributes: { level: t },
              }),
            );
          },
        }),
        L = r.bP.create({
          name: "horizontalRule",
          addOptions: () => ({ HTMLAttributes: {}, nextNodeType: "paragraph" }),
          group: "block",
          parseHTML: () => [{ tag: "hr" }],
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return ["hr", (0, r.KV)(this.options.HTMLAttributes, e)];
          },
          markdownTokenName: "hr",
          parseMarkdown: (t, e) => e.createNode("horizontalRule"),
          renderMarkdown: () => "---",
          addCommands() {
            return {
              setHorizontalRule: () => (t) => {
                let { chain: e, state: u } = t;
                if (!(0, r.AB)(u, u.schema.nodes[this.name])) return !1;
                const { selection: n } = u,
                  { $to: s } = n,
                  o = e();
                return (
                  (0, r.BQ)(n)
                    ? o.insertContentAt(s.pos, { type: this.name })
                    : o.insertContent({ type: this.name }),
                  o
                    .command((t) => {
                      let { state: e, tr: u, dispatch: n } = t;
                      if (n) {
                        const { $to: t } = u.selection,
                          n = t.end();
                        if (t.nodeAfter)
                          t.nodeAfter.isTextblock
                            ? u.setSelection(C.U3.create(u.doc, t.pos + 1))
                            : t.nodeAfter.isBlock
                              ? u.setSelection(C.nh.create(u.doc, t.pos))
                              : u.setSelection(C.U3.create(u.doc, t.pos));
                        else {
                          const r =
                              e.schema.nodes[this.options.nextNodeType] ||
                              t.parent.type.contentMatch.defaultType,
                            s = null == r ? void 0 : r.create();
                          s &&
                            (u.insert(n, s),
                            u.setSelection(C.U3.create(u.doc, n + 1)));
                        }
                        u.scrollIntoView();
                      }
                      return !0;
                    })
                    .run()
                );
              },
            };
          },
          addInputRules() {
            return [
              (0, r.jT)({
                find: /^(?:---|\u2014-|___\s|\*\*\*\s)$/,
                type: this.type,
              }),
            ];
          },
        }),
        T = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,
        M = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,
        v = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,
        w = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g,
        x = r.CU.create({
          name: "italic",
          addOptions: () => ({ HTMLAttributes: {} }),
          parseHTML() {
            return [
              { tag: "em" },
              {
                tag: "i",
                getAttrs: (t) => "normal" !== t.style.fontStyle && null,
              },
              {
                style: "font-style=normal",
                clearMark: (t) => t.type.name === this.name,
              },
              { style: "font-style=italic" },
            ];
          },
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return ["em", (0, r.KV)(this.options.HTMLAttributes, e), 0];
          },
          addCommands() {
            return {
              setItalic: () => (t) => {
                let { commands: e } = t;
                return e.setMark(this.name);
              },
              toggleItalic: () => (t) => {
                let { commands: e } = t;
                return e.toggleMark(this.name);
              },
              unsetItalic: () => (t) => {
                let { commands: e } = t;
                return e.unsetMark(this.name);
              },
            };
          },
          markdownTokenName: "em",
          parseMarkdown: (t, e) =>
            e.applyMark("italic", e.parseInline(t.tokens || [])),
          renderMarkdown: (t, e) => "*".concat(e.renderChildren(t), "*"),
          addKeyboardShortcuts() {
            return {
              "Mod-i": () => this.editor.commands.toggleItalic(),
              "Mod-I": () => this.editor.commands.toggleItalic(),
            };
          },
          addInputRules() {
            return [
              (0, r.OX)({ find: T, type: this.type }),
              (0, r.OX)({ find: v, type: this.type }),
            ];
          },
          addPasteRules() {
            return [
              (0, r.Zc)({ find: M, type: this.type }),
              (0, r.Zc)({ find: w, type: this.type }),
            ];
          },
        });
      const H = "numeric",
        O = "ascii",
        S = "alpha",
        I = "asciinumeric",
        N = "alphanumeric",
        R = "domain",
        P = "emoji",
        j = "scheme",
        K = "slashscheme",
        z = "whitespace";
      function U(t, e) {
        return (t in e || (e[t] = []), e[t]);
      }
      function _(t, e, u) {
        (e[H] && ((e[I] = !0), (e[N] = !0)),
          e[O] && ((e[I] = !0), (e[S] = !0)),
          e[I] && (e[N] = !0),
          e[S] && (e[N] = !0),
          e[N] && (e[R] = !0),
          e[P] && (e[R] = !0));
        for (const n in e) {
          const e = U(n, u);
          e.indexOf(t) < 0 && e.push(t);
        }
      }
      function $() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        ((this.j = {}), (this.jr = []), (this.jd = null), (this.t = t));
      }
      (($.groups = {}),
        ($.prototype = {
          accepts() {
            return !!this.t;
          },
          go(t) {
            const e = this,
              u = e.j[t];
            if (u) return u;
            for (let n = 0; n < e.jr.length; n++) {
              const u = e.jr[n][0],
                r = e.jr[n][1];
              if (r && u.test(t)) return r;
            }
            return e.jd;
          },
          has(t) {
            return arguments.length > 1 &&
              void 0 !== arguments[1] &&
              arguments[1]
              ? t in this.j
              : !!this.go(t);
          },
          ta(t, e, u, n) {
            for (let r = 0; r < t.length; r++) this.tt(t[r], e, u, n);
          },
          tr(t, e, u, n) {
            let r;
            return (
              (n = n || $.groups),
              e && e.j ? (r = e) : ((r = new $(e)), u && n && _(e, u, n)),
              this.jr.push([t, r]),
              r
            );
          },
          ts(t, e, u, n) {
            let r = this;
            const s = t.length;
            if (!s) return r;
            for (let o = 0; o < s - 1; o++) r = r.tt(t[o]);
            return r.tt(t[s - 1], e, u, n);
          },
          tt(t, e, u, n) {
            n = n || $.groups;
            const r = this;
            if (e && e.j) return ((r.j[t] = e), e);
            const s = e;
            let o,
              i = r.go(t);
            if (
              (i
                ? ((o = new $()),
                  Object.assign(o.j, i.j),
                  o.jr.push.apply(o.jr, i.jr),
                  (o.jd = i.jd),
                  (o.t = i.t))
                : (o = new $()),
              s)
            ) {
              if (n)
                if (o.t && "string" === typeof o.t) {
                  const t = Object.assign(
                    (function (t, e) {
                      const u = {};
                      for (const n in e) e[n].indexOf(t) >= 0 && (u[n] = !0);
                      return u;
                    })(o.t, n),
                    u,
                  );
                  _(s, t, n);
                } else u && _(s, u, n);
              o.t = s;
            }
            return ((r.j[t] = o), o);
          },
        }));
      const V = (t, e, u, n, r) => t.ta(e, u, n, r),
        W = (t, e, u, n, r) => t.tr(e, u, n, r),
        q = (t, e, u, n, r) => t.ts(e, u, n, r),
        G = (t, e, u, n, r) => t.tt(e, u, n, r),
        Q = "WORD",
        Y = "UWORD",
        X = "ASCIINUMERICAL",
        J = "ALPHANUMERICAL",
        Z = "LOCALHOST",
        tt = "TLD",
        et = "UTLD",
        ut = "SCHEME",
        nt = "SLASH_SCHEME",
        rt = "NUM",
        st = "WS",
        ot = "NL",
        it = "OPENBRACE",
        at = "CLOSEBRACE",
        lt = "OPENBRACKET",
        dt = "CLOSEBRACKET",
        Dt = "OPENPAREN",
        ct = "CLOSEPAREN",
        pt = "OPENANGLEBRACKET",
        ht = "CLOSEANGLEBRACKET",
        mt = "FULLWIDTHLEFTPAREN",
        At = "FULLWIDTHRIGHTPAREN",
        gt = "LEFTCORNERBRACKET",
        Et = "RIGHTCORNERBRACKET",
        Ct = "LEFTWHITECORNERBRACKET",
        Ft = "RIGHTWHITECORNERBRACKET",
        kt = "FULLWIDTHLESSTHAN",
        ft = "FULLWIDTHGREATERTHAN",
        yt = "AMPERSAND",
        bt = "APOSTROPHE",
        Bt = "ASTERISK",
        Lt = "AT",
        Tt = "BACKSLASH",
        Mt = "BACKTICK",
        vt = "CARET",
        wt = "COLON",
        xt = "COMMA",
        Ht = "DOLLAR",
        Ot = "DOT",
        St = "EQUALS",
        It = "EXCLAMATION",
        Nt = "HYPHEN",
        Rt = "PERCENT",
        Pt = "PIPE",
        jt = "PLUS",
        Kt = "POUND",
        zt = "QUERY",
        Ut = "QUOTE",
        _t = "FULLWIDTHMIDDLEDOT",
        $t = "SEMI",
        Vt = "SLASH",
        Wt = "TILDE",
        qt = "UNDERSCORE",
        Gt = "EMOJI",
        Qt = "SYM";
      var Yt = Object.freeze({
        __proto__: null,
        ALPHANUMERICAL: J,
        AMPERSAND: yt,
        APOSTROPHE: bt,
        ASCIINUMERICAL: X,
        ASTERISK: Bt,
        AT: Lt,
        BACKSLASH: Tt,
        BACKTICK: Mt,
        CARET: vt,
        CLOSEANGLEBRACKET: ht,
        CLOSEBRACE: at,
        CLOSEBRACKET: dt,
        CLOSEPAREN: ct,
        COLON: wt,
        COMMA: xt,
        DOLLAR: Ht,
        DOT: Ot,
        EMOJI: Gt,
        EQUALS: St,
        EXCLAMATION: It,
        FULLWIDTHGREATERTHAN: ft,
        FULLWIDTHLEFTPAREN: mt,
        FULLWIDTHLESSTHAN: kt,
        FULLWIDTHMIDDLEDOT: _t,
        FULLWIDTHRIGHTPAREN: At,
        HYPHEN: Nt,
        LEFTCORNERBRACKET: gt,
        LEFTWHITECORNERBRACKET: Ct,
        LOCALHOST: Z,
        NL: ot,
        NUM: rt,
        OPENANGLEBRACKET: pt,
        OPENBRACE: it,
        OPENBRACKET: lt,
        OPENPAREN: Dt,
        PERCENT: Rt,
        PIPE: Pt,
        PLUS: jt,
        POUND: Kt,
        QUERY: zt,
        QUOTE: Ut,
        RIGHTCORNERBRACKET: Et,
        RIGHTWHITECORNERBRACKET: Ft,
        SCHEME: ut,
        SEMI: $t,
        SLASH: Vt,
        SLASH_SCHEME: nt,
        SYM: Qt,
        TILDE: Wt,
        TLD: tt,
        UNDERSCORE: qt,
        UTLD: et,
        UWORD: Y,
        WORD: Q,
        WS: st,
      });
      const Xt = /[a-z]/,
        Jt =
          /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD40-\uDD59\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC7\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDB0-\uDDDB\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDEA0-\uDEB8\uDEBB-\uDED3\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF2\uDFF3]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDEC0-\uDEDE\uDEE0-\uDEE2\uDEE4\uDEE5\uDEE7-\uDEED\uDEF0-\uDEF4\uDEFE\uDEFF\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79])/,
        Zt =
          /(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED8\uDEDC-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8])/,
        te = /\d/,
        ee = /\s/;
      let ue = null,
        ne = null;
      function re(t, e) {
        const u = (function (t) {
            const e = [],
              u = t.length;
            let n = 0;
            for (; n < u; ) {
              let r,
                s = t.charCodeAt(n),
                o =
                  s < 55296 ||
                  s > 56319 ||
                  n + 1 === u ||
                  (r = t.charCodeAt(n + 1)) < 56320 ||
                  r > 57343
                    ? t[n]
                    : t.slice(n, n + 2);
              (e.push(o), (n += o.length));
            }
            return e;
          })(e.replace(/[A-Z]/g, (t) => t.toLowerCase())),
          n = u.length,
          r = [];
        let s = 0,
          o = 0;
        for (; o < n; ) {
          let i = t,
            a = null,
            l = 0,
            d = null,
            D = -1,
            c = -1;
          for (; o < n && (a = i.go(u[o])); )
            ((i = a),
              i.accepts()
                ? ((D = 0), (c = 0), (d = i))
                : D >= 0 && ((D += u[o].length), c++),
              (l += u[o].length),
              (s += u[o].length),
              o++);
          ((s -= D),
            (o -= c),
            (l -= D),
            r.push({ t: d.t, v: e.slice(s - l, s), s: s - l, e: s }));
        }
        return r;
      }
      function se(t, e, u, n, r) {
        let s;
        const o = e.length;
        for (let i = 0; i < o - 1; i++) {
          const u = e[i];
          (t.j[u]
            ? (s = t.j[u])
            : ((s = new $(n)), (s.jr = r.slice()), (t.j[u] = s)),
            (t = s));
        }
        return ((s = new $(u)), (s.jr = r.slice()), (t.j[e[o - 1]] = s), s);
      }
      function oe(t) {
        const e = [],
          u = [];
        let n = 0;
        for (; n < t.length; ) {
          let r = 0;
          for (; "0123456789".indexOf(t[n + r]) >= 0; ) r++;
          if (r > 0) {
            e.push(u.join(""));
            for (let e = parseInt(t.substring(n, n + r), 10); e > 0; e--)
              u.pop();
            n += r;
          } else (u.push(t[n]), n++);
        }
        return e;
      }
      const ie = {
        defaultProtocol: "http",
        events: null,
        format: le,
        formatHref: le,
        nl2br: !1,
        tagName: "a",
        target: null,
        rel: null,
        validate: !0,
        truncate: 1 / 0,
        className: null,
        attributes: null,
        ignoreTags: [],
        render: null,
      };
      function ae(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          u = Object.assign({}, ie);
        t && (u = Object.assign(u, t instanceof ae ? t.o : t));
        const n = u.ignoreTags,
          r = [];
        for (let s = 0; s < n.length; s++) r.push(n[s].toUpperCase());
        ((this.o = u), e && (this.defaultRender = e), (this.ignoreTags = r));
      }
      function le(t) {
        return t;
      }
      ae.prototype = {
        o: ie,
        ignoreTags: [],
        defaultRender: (t) => t,
        check(t) {
          return this.get("validate", t.toString(), t);
        },
        get(t, e, u) {
          const n = null != e;
          let r = this.o[t];
          return r
            ? ("object" === typeof r
                ? ((r = u.t in r ? r[u.t] : ie[t]),
                  "function" === typeof r && n && (r = r(e, u)))
                : "function" === typeof r && n && (r = r(e, u.t, u)),
              r)
            : r;
        },
        getObj(t, e, u) {
          let n = this.o[t];
          return (
            "function" === typeof n && null != e && (n = n(e, u.t, u)),
            n
          );
        },
        render(t) {
          const e = t.render(this);
          return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
        },
      };
      function de(t, e) {
        ((this.t = "token"), (this.v = t), (this.tk = e));
      }
      function De(t, e) {
        class u extends de {
          constructor(e, u) {
            (super(e, u), (this.t = t));
          }
        }
        for (const n in e) u.prototype[n] = e[n];
        return ((u.t = t), u);
      }
      de.prototype = {
        isLink: !1,
        toString() {
          return this.v;
        },
        toHref(t) {
          return this.toString();
        },
        toFormattedString(t) {
          const e = this.toString(),
            u = t.get("truncate", e, this),
            n = t.get("format", e, this);
          return u && n.length > u ? n.substring(0, u) + "\u2026" : n;
        },
        toFormattedHref(t) {
          return t.get(
            "formatHref",
            this.toHref(t.get("defaultProtocol")),
            this,
          );
        },
        startIndex() {
          return this.tk[0].s;
        },
        endIndex() {
          return this.tk[this.tk.length - 1].e;
        },
        toObject() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ie.defaultProtocol;
          return {
            type: this.t,
            value: this.toString(),
            isLink: this.isLink,
            href: this.toHref(t),
            start: this.startIndex(),
            end: this.endIndex(),
          };
        },
        toFormattedObject(t) {
          return {
            type: this.t,
            value: this.toFormattedString(t),
            isLink: this.isLink,
            href: this.toFormattedHref(t),
            start: this.startIndex(),
            end: this.endIndex(),
          };
        },
        validate(t) {
          return t.get("validate", this.toString(), this);
        },
        render(t) {
          const e = this,
            u = this.toHref(t.get("defaultProtocol")),
            n = t.get("formatHref", u, this),
            r = t.get("tagName", u, e),
            s = this.toFormattedString(t),
            o = {},
            i = t.get("className", u, e),
            a = t.get("target", u, e),
            l = t.get("rel", u, e),
            d = t.getObj("attributes", u, e),
            D = t.getObj("events", u, e);
          return (
            (o.href = n),
            i && (o.class = i),
            a && (o.target = a),
            l && (o.rel = l),
            d && Object.assign(o, d),
            { tagName: r, attributes: o, content: s, eventListeners: D }
          );
        },
      };
      const ce = De("email", {
          isLink: !0,
          toHref() {
            return "mailto:" + this.toString();
          },
        }),
        pe = De("text"),
        he = De("nl"),
        me = De("url", {
          isLink: !0,
          toHref() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ie.defaultProtocol;
            return this.hasProtocol()
              ? this.v
              : "".concat(t, "://").concat(this.v);
          },
          hasProtocol() {
            const t = this.tk;
            return t.length >= 2 && t[0].t !== Z && t[1].t === wt;
          },
        });
      const Ae = (t) => new $(t);
      function ge(t, e, u) {
        const n = u[0].s,
          r = u[u.length - 1].e;
        return new t(e.slice(n, r), u);
      }
      const Ee =
          ("undefined" !== typeof console && console && console.warn) ||
          (() => {}),
        Ce =
          "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.",
        Fe = {
          scanner: null,
          parser: null,
          tokenQueue: [],
          pluginQueue: [],
          customSchemes: [],
          initialized: !1,
        };
      function ke(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (
          (Fe.initialized &&
            Ee(
              'linkifyjs: already initialized - will not register custom scheme "'
                .concat(t, '" ')
                .concat(Ce),
            ),
          !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
        )
          throw new Error(
            'linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or "-"\n2. Cannot start or end with "-"\n3. "-" cannot repeat',
          );
        Fe.customSchemes.push([t, e]);
      }
      function fe() {
        Fe.scanner = (function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          const e = {};
          $.groups = e;
          const u = new $();
          (null == ue &&
            (ue = oe(
              "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5m\xf6gensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",
            )),
            null == ne &&
              (ne = oe(
                "\u03b5\u03bb1\u03c52\u0431\u04331\u0435\u043b3\u0434\u0435\u0442\u04384\u0435\u044e2\u043a\u0430\u0442\u043e\u043b\u0438\u043a6\u043e\u043c3\u043c\u043a\u04342\u043e\u043d1\u0441\u043a\u0432\u04306\u043e\u043d\u043b\u0430\u0439\u043d5\u0440\u04333\u0440\u0443\u04412\u04442\u0441\u0430\u0439\u04423\u0440\u04313\u0443\u043a\u04403\u049b\u0430\u04373\u0570\u0561\u05753\u05d9\u05e9\u05e8\u05d0\u05dc5\u05e7\u05d5\u05dd3\u0627\u0628\u0648\u0638\u0628\u064a5\u0631\u0627\u0645\u0643\u06485\u0644\u0627\u0631\u062f\u06464\u0628\u062d\u0631\u064a\u06465\u062c\u0632\u0627\u0626\u06315\u0633\u0639\u0648\u062f\u064a\u06296\u0639\u0644\u064a\u0627\u06465\u0645\u063a\u0631\u06285\u0645\u0627\u0631\u0627\u062a5\u06cc\u0631\u0627\u06465\u0628\u0627\u0631\u062a2\u0632\u0627\u06314\u064a\u062a\u06433\u06be\u0627\u0631\u062a5\u062a\u0648\u0646\u06334\u0633\u0648\u062f\u0627\u06463\u0631\u064a\u06295\u0634\u0628\u0643\u06294\u0639\u0631\u0627\u06422\u06282\u0645\u0627\u06464\u0641\u0644\u0633\u0637\u064a\u06466\u0642\u0637\u06313\u0643\u0627\u062b\u0648\u0644\u064a\u06436\u0648\u06453\u0645\u0635\u06312\u0644\u064a\u0633\u064a\u06275\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u06277\u0642\u06394\u0647\u0645\u0631\u0627\u06475\u067e\u0627\u06a9\u0633\u062a\u0627\u06467\u0680\u0627\u0631\u062a4\u0915\u0949\u092e3\u0928\u0947\u091f3\u092d\u093e\u0930\u09240\u092e\u094d3\u094b\u09245\u0938\u0902\u0917\u0920\u09285\u09ac\u09be\u0982\u09b2\u09be5\u09ad\u09be\u09b0\u09a42\u09f0\u09a44\u0a2d\u0a3e\u0a30\u0a244\u0aad\u0abe\u0ab0\u0aa44\u0b2d\u0b3e\u0b30\u0b244\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe6\u0bb2\u0b99\u0bcd\u0b95\u0bc86\u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd11\u0c2d\u0c3e\u0c30\u0c24\u0c4d5\u0cad\u0cbe\u0cb0\u0ca44\u0d2d\u0d3e\u0d30\u0d24\u0d025\u0dbd\u0d82\u0d9a\u0dcf4\u0e04\u0e2d\u0e213\u0e44\u0e17\u0e223\u0ea5\u0eb2\u0ea73\u10d2\u10d42\u307f\u3093\u306a3\u30a2\u30de\u30be\u30f34\u30af\u30e9\u30a6\u30c94\u30b0\u30fc\u30b0\u30eb4\u30b3\u30e02\u30b9\u30c8\u30a23\u30bb\u30fc\u30eb3\u30d5\u30a1\u30c3\u30b7\u30e7\u30f36\u30dd\u30a4\u30f3\u30c84\u4e16\u754c2\u4e2d\u4fe11\u56fd1\u570b1\u6587\u7f513\u4e9a\u9a6c\u900a3\u4f01\u4e1a2\u4f5b\u5c712\u4fe1\u606f2\u5065\u5eb72\u516b\u53662\u516c\u53f81\u76ca2\u53f0\u6e7e1\u70632\u5546\u57ce1\u5e971\u68072\u5609\u91cc0\u5927\u9152\u5e975\u5728\u7ebf2\u5927\u62ff2\u5929\u4e3b\u65593\u5a31\u4e502\u5bb6\u96fb2\u5e7f\u4e1c2\u5fae\u535a2\u6148\u55842\u6211\u7231\u4f603\u624b\u673a2\u62db\u80582\u653f\u52a11\u5e9c2\u65b0\u52a0\u57612\u95fb2\u65f6\u5c1a2\u66f8\u7c4d2\u673a\u67842\u6de1\u9a6c\u95213\u6e38\u620f2\u6fb3\u95802\u70b9\u770b2\u79fb\u52a82\u7ec4\u7ec7\u673a\u67844\u7f51\u57401\u5e971\u7ad91\u7edc2\u8054\u901a2\u8c37\u6b4c2\u8d2d\u72692\u901a\u8ca92\u96c6\u56e22\u96fb\u8a0a\u76c8\u79d14\u98de\u5229\u6d663\u98df\u54c12\u9910\u53852\u9999\u683c\u91cc\u62c93\u6e2f2\ub2f7\ub1371\ucef42\uc0bc\uc1312\ud55c\uad6d2",
              )),
            G(u, "'", bt),
            G(u, "{", it),
            G(u, "}", at),
            G(u, "[", lt),
            G(u, "]", dt),
            G(u, "(", Dt),
            G(u, ")", ct),
            G(u, "<", pt),
            G(u, ">", ht),
            G(u, "\uff08", mt),
            G(u, "\uff09", At),
            G(u, "\u300c", gt),
            G(u, "\u300d", Et),
            G(u, "\u300e", Ct),
            G(u, "\u300f", Ft),
            G(u, "\uff1c", kt),
            G(u, "\uff1e", ft),
            G(u, "&", yt),
            G(u, "*", Bt),
            G(u, "@", Lt),
            G(u, "`", Mt),
            G(u, "^", vt),
            G(u, ":", wt),
            G(u, ",", xt),
            G(u, "$", Ht),
            G(u, ".", Ot),
            G(u, "=", St),
            G(u, "!", It),
            G(u, "-", Nt),
            G(u, "%", Rt),
            G(u, "|", Pt),
            G(u, "+", jt),
            G(u, "#", Kt),
            G(u, "?", zt),
            G(u, '"', Ut),
            G(u, "/", Vt),
            G(u, ";", $t),
            G(u, "~", Wt),
            G(u, "_", qt),
            G(u, "\\", Tt),
            G(u, "\u30fb", _t));
          const n = W(u, te, rt, { [H]: !0 });
          W(n, te, n);
          const r = W(n, Xt, X, { [I]: !0 }),
            s = W(n, Jt, J, { [N]: !0 }),
            o = W(u, Xt, Q, { [O]: !0 });
          (W(o, te, r), W(o, Xt, o), W(r, te, r), W(r, Xt, r));
          const i = W(u, Jt, Y, { [S]: !0 });
          (W(i, Xt),
            W(i, te, s),
            W(i, Jt, i),
            W(s, te, s),
            W(s, Xt),
            W(s, Jt, s));
          const a = G(u, "\n", ot, { [z]: !0 }),
            l = G(u, "\r", st, { [z]: !0 }),
            d = W(u, ee, st, { [z]: !0 });
          (G(u, "\ufffc", d),
            G(l, "\n", a),
            G(l, "\ufffc", d),
            W(l, ee, d),
            G(d, "\r"),
            G(d, "\n"),
            W(d, ee, d),
            G(d, "\ufffc", d));
          const D = W(u, Zt, Gt, { [P]: !0 });
          (G(D, "#"), W(D, Zt, D), G(D, "\ufe0f", D));
          const c = G(D, "\u200d");
          (G(c, "#"), W(c, Zt, D));
          const p = [
              [Xt, o],
              [te, r],
            ],
            h = [
              [Xt, null],
              [Jt, i],
              [te, s],
            ];
          for (let m = 0; m < ue.length; m++) se(u, ue[m], tt, Q, p);
          for (let m = 0; m < ne.length; m++) se(u, ne[m], et, Y, h);
          (_(tt, { tld: !0, ascii: !0 }, e),
            _(et, { utld: !0, alpha: !0 }, e),
            se(u, "file", ut, Q, p),
            se(u, "mailto", ut, Q, p),
            se(u, "http", nt, Q, p),
            se(u, "https", nt, Q, p),
            se(u, "ftp", nt, Q, p),
            se(u, "ftps", nt, Q, p),
            _(ut, { scheme: !0, ascii: !0 }, e),
            _(nt, { slashscheme: !0, ascii: !0 }, e),
            (t = t.sort((t, e) => (t[0] > e[0] ? 1 : -1))));
          for (let m = 0; m < t.length; m++) {
            const e = t[m][0],
              n = t[m][1] ? { [j]: !0 } : { [K]: !0 };
            (e.indexOf("-") >= 0
              ? (n[R] = !0)
              : Xt.test(e)
                ? te.test(e)
                  ? (n[I] = !0)
                  : (n[O] = !0)
                : (n[H] = !0),
              q(u, e, e, n));
          }
          return (
            q(u, "localhost", Z, { ascii: !0 }),
            (u.jd = new $(Qt)),
            { start: u, tokens: Object.assign({ groups: e }, Yt) }
          );
        })(Fe.customSchemes);
        for (let t = 0; t < Fe.tokenQueue.length; t++)
          Fe.tokenQueue[t][1]({ scanner: Fe.scanner });
        Fe.parser = (function (t) {
          let { groups: e } = t;
          const u = e.domain.concat([
              yt,
              Bt,
              Lt,
              Tt,
              Mt,
              vt,
              Ht,
              St,
              Nt,
              rt,
              Rt,
              Pt,
              jt,
              Kt,
              Vt,
              Qt,
              Wt,
              qt,
            ]),
            n = [
              bt,
              wt,
              xt,
              Ot,
              It,
              Rt,
              zt,
              Ut,
              $t,
              pt,
              ht,
              it,
              at,
              dt,
              lt,
              Dt,
              ct,
              mt,
              At,
              gt,
              Et,
              Ct,
              Ft,
              kt,
              ft,
            ],
            r = [
              yt,
              bt,
              Bt,
              Tt,
              Mt,
              vt,
              Ht,
              St,
              Nt,
              it,
              at,
              Rt,
              Pt,
              jt,
              Kt,
              zt,
              Vt,
              Qt,
              Wt,
              qt,
            ],
            s = Ae(),
            o = G(s, Wt);
          (V(o, r, o), V(o, e.domain, o));
          const i = Ae(),
            a = Ae(),
            l = Ae();
          (V(s, e.domain, i),
            V(s, e.scheme, a),
            V(s, e.slashscheme, l),
            V(i, r, o),
            V(i, e.domain, i));
          const d = G(i, Lt);
          (G(o, Lt, d), G(a, Lt, d), G(l, Lt, d));
          const D = G(o, Ot);
          (V(D, r, o), V(D, e.domain, o));
          const c = Ae();
          (V(d, e.domain, c), V(c, e.domain, c));
          const p = G(c, Ot);
          V(p, e.domain, c);
          const h = Ae(ce);
          (V(p, e.tld, h), V(p, e.utld, h), G(d, Z, h));
          const m = G(c, Nt);
          (G(m, Nt, m),
            V(m, e.domain, c),
            V(h, e.domain, c),
            G(h, Ot, p),
            G(h, Nt, m));
          const A = G(h, wt);
          V(A, e.numeric, ce);
          const g = G(i, Nt),
            E = G(i, Ot);
          (G(g, Nt, g), V(g, e.domain, i), V(E, r, o), V(E, e.domain, i));
          const C = Ae(me);
          (V(E, e.tld, C),
            V(E, e.utld, C),
            V(C, e.domain, i),
            V(C, r, o),
            G(C, Ot, E),
            G(C, Nt, g),
            G(C, Lt, d));
          const F = G(C, wt),
            k = Ae(me);
          V(F, e.numeric, k);
          const f = Ae(me),
            y = Ae();
          (V(f, u, f),
            V(f, n, y),
            V(y, u, f),
            V(y, n, y),
            G(C, Vt, f),
            G(k, Vt, f));
          const b = G(a, wt),
            B = G(l, wt),
            L = G(B, Vt),
            T = G(L, Vt);
          (V(a, e.domain, i),
            G(a, Ot, E),
            G(a, Nt, g),
            V(l, e.domain, i),
            G(l, Ot, E),
            G(l, Nt, g),
            V(b, e.domain, f),
            G(b, Vt, f),
            G(b, zt, f),
            V(T, e.domain, f),
            V(T, u, f),
            G(T, Vt, f));
          const M = [
            [it, at],
            [lt, dt],
            [Dt, ct],
            [pt, ht],
            [mt, At],
            [gt, Et],
            [Ct, Ft],
            [kt, ft],
          ];
          for (let v = 0; v < M.length; v++) {
            const [t, e] = M[v],
              r = G(f, t);
            (G(y, t, r), G(r, e, f));
            const s = Ae(me);
            V(r, u, s);
            const o = Ae();
            (V(r, n),
              V(s, u, s),
              V(s, n, o),
              V(o, u, s),
              V(o, n, o),
              G(s, e, f),
              G(o, e, f));
          }
          return (G(s, Z, C), G(s, ot, he), { start: s, tokens: Yt });
        })(Fe.scanner.tokens);
        for (let t = 0; t < Fe.pluginQueue.length; t++)
          Fe.pluginQueue[t][1]({ scanner: Fe.scanner, parser: Fe.parser });
        return ((Fe.initialized = !0), Fe);
      }
      function ye(t) {
        return (
          Fe.initialized || fe(),
          (function (t, e, u) {
            let n = u.length,
              r = 0,
              s = [],
              o = [];
            for (; r < n; ) {
              let i = t,
                a = null,
                l = null,
                d = 0,
                D = null,
                c = -1;
              for (; r < n && !(a = i.go(u[r].t)); ) o.push(u[r++]);
              for (; r < n && (l = a || i.go(u[r].t)); )
                ((a = null),
                  (i = l),
                  i.accepts() ? ((c = 0), (D = i)) : c >= 0 && c++,
                  r++,
                  d++);
              if (c < 0) ((r -= d), r < n && (o.push(u[r]), r++));
              else {
                (o.length > 0 && (s.push(ge(pe, e, o)), (o = [])),
                  (r -= c),
                  (d -= c));
                const t = D.t,
                  n = u.slice(r - d, r);
                s.push(ge(t, e, n));
              }
            }
            return (o.length > 0 && s.push(ge(pe, e, o)), s);
          })(Fe.parser.start, t, re(Fe.scanner.start, t))
        );
      }
      function be(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          u =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        if (e && "object" === typeof e) {
          if (u)
            throw Error(
              "linkifyjs: Invalid link type ".concat(e, "; must be a string"),
            );
          ((u = e), (e = null));
        }
        const n = new ae(u),
          r = ye(t),
          s = [];
        for (let o = 0; o < r.length; o++) {
          const t = r[o];
          !t.isLink ||
            (e && t.t !== e) ||
            !n.check(t) ||
            s.push(t.toFormattedObject(n));
        }
        return s;
      }
      ye.scan = re;
      var Be = "[\0- \xa0\u1680\u180e\u2000-\u2029\u205f\u3000]",
        Le = new RegExp(Be),
        Te = new RegExp("".concat(Be, "$")),
        Me = new RegExp(Be, "g");
      function ve(t, e) {
        const u = [
          "http",
          "https",
          "ftp",
          "ftps",
          "mailto",
          "tel",
          "callto",
          "sms",
          "cid",
          "xmpp",
        ];
        return (
          e &&
            e.forEach((t) => {
              const e = "string" === typeof t ? t : t.scheme;
              e && u.push(e);
            }),
          !t ||
            t
              .replace(Me, "")
              .match(
                new RegExp(
                  "^(?:(?:".concat(
                    u.join("|"),
                    "):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))",
                  ),
                  "i",
                ),
              )
        );
      }
      var we = r.CU.create({
        name: "link",
        priority: 1e3,
        keepOnSplit: !1,
        exitable: !0,
        onCreate() {
          (this.options.validate &&
            !this.options.shouldAutoLink &&
            ((this.options.shouldAutoLink = this.options.validate),
            console.warn(
              "The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.",
            )),
            this.options.protocols.forEach((t) => {
              "string" !== typeof t ? ke(t.scheme, t.optionalSlashes) : ke(t);
            }));
        },
        onDestroy() {
          (($.groups = {}),
            (Fe.scanner = null),
            (Fe.parser = null),
            (Fe.tokenQueue = []),
            (Fe.pluginQueue = []),
            (Fe.customSchemes = []),
            (Fe.initialized = !1));
        },
        inclusive() {
          return this.options.autolink;
        },
        addOptions: () => ({
          openOnClick: !0,
          enableClickSelection: !1,
          linkOnPaste: !0,
          autolink: !0,
          protocols: [],
          defaultProtocol: "http",
          HTMLAttributes: {
            target: "_blank",
            rel: "noopener noreferrer nofollow",
            class: null,
          },
          isAllowedUri: (t, e) => !!ve(t, e.protocols),
          validate: (t) => !!t,
          shouldAutoLink: (t) => {
            const e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t),
              u = /^[a-z][a-z0-9+.-]*:/i.test(t);
            if (e || (u && !t.includes("@"))) return !0;
            const n = (t.includes("@") ? t.split("@").pop() : t).split(
              /[/?#:]/,
            )[0];
            return !/^\d{1,3}(\.\d{1,3}){3}$/.test(n) && !!/\./.test(n);
          },
        }),
        addAttributes() {
          return {
            href: { default: null, parseHTML: (t) => t.getAttribute("href") },
            target: { default: this.options.HTMLAttributes.target },
            rel: { default: this.options.HTMLAttributes.rel },
            class: { default: this.options.HTMLAttributes.class },
            title: { default: null },
          };
        },
        parseHTML() {
          return [
            {
              tag: "a[href]",
              getAttrs: (t) => {
                const e = t.getAttribute("href");
                return (
                  !(
                    !e ||
                    !this.options.isAllowedUri(e, {
                      defaultValidate: (t) => !!ve(t, this.options.protocols),
                      protocols: this.options.protocols,
                      defaultProtocol: this.options.defaultProtocol,
                    })
                  ) && null
                );
              },
            },
          ];
        },
        renderHTML(t) {
          let { HTMLAttributes: e } = t;
          return this.options.isAllowedUri(e.href, {
            defaultValidate: (t) => !!ve(t, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol,
          })
            ? ["a", (0, r.KV)(this.options.HTMLAttributes, e), 0]
            : [
                "a",
                (0, r.KV)(
                  this.options.HTMLAttributes,
                  (0, s.A)((0, s.A)({}, e), {}, { href: "" }),
                ),
                0,
              ];
        },
        markdownTokenName: "link",
        parseMarkdown: (t, e) =>
          e.applyMark("link", e.parseInline(t.tokens || []), {
            href: t.href,
            title: t.title || null,
          }),
        renderMarkdown: (t, e) => {
          var u, n, r, s;
          const o =
              null != (n = null == (u = t.attrs) ? void 0 : u.href) ? n : "",
            i = null != (s = null == (r = t.attrs) ? void 0 : r.title) ? s : "",
            a = e.renderChildren(t);
          return i
            ? "[".concat(a, "](").concat(o, ' "').concat(i, '")')
            : "[".concat(a, "](").concat(o, ")");
        },
        addCommands() {
          return {
            setLink: (t) => (e) => {
              let { chain: u } = e;
              const { href: n } = t;
              return (
                !!this.options.isAllowedUri(n, {
                  defaultValidate: (t) => !!ve(t, this.options.protocols),
                  protocols: this.options.protocols,
                  defaultProtocol: this.options.defaultProtocol,
                }) &&
                u().setMark(this.name, t).setMeta("preventAutolink", !0).run()
              );
            },
            toggleLink: (t) => (e) => {
              let { chain: u } = e;
              const { href: n } = t || {};
              return (
                !(
                  n &&
                  !this.options.isAllowedUri(n, {
                    defaultValidate: (t) => !!ve(t, this.options.protocols),
                    protocols: this.options.protocols,
                    defaultProtocol: this.options.defaultProtocol,
                  })
                ) &&
                u()
                  .toggleMark(this.name, t, { extendEmptyMarkRange: !0 })
                  .setMeta("preventAutolink", !0)
                  .run()
              );
            },
            unsetLink: () => (t) => {
              let { chain: e } = t;
              return e()
                .unsetMark(this.name, { extendEmptyMarkRange: !0 })
                .setMeta("preventAutolink", !0)
                .run();
            },
          };
        },
        addPasteRules() {
          return [
            (0, r.Zc)({
              find: (t) => {
                const e = [];
                if (t) {
                  const { protocols: u, defaultProtocol: n } = this.options,
                    r = be(t).filter(
                      (t) =>
                        t.isLink &&
                        this.options.isAllowedUri(t.value, {
                          defaultValidate: (t) => !!ve(t, u),
                          protocols: u,
                          defaultProtocol: n,
                        }),
                    );
                  r.length &&
                    r.forEach((t) => {
                      this.options.shouldAutoLink(t.value) &&
                        e.push({
                          text: t.value,
                          data: { href: t.href },
                          index: t.start,
                        });
                    });
                }
                return e;
              },
              type: this.type,
              getAttributes: (t) => {
                var e;
                return { href: null == (e = t.data) ? void 0 : e.href };
              },
            }),
          ];
        },
        addProseMirrorPlugins() {
          const t = [],
            { protocols: e, defaultProtocol: u } = this.options;
          return (
            this.options.autolink &&
              t.push(
                (function (t) {
                  return new C.k_({
                    key: new C.hs("autolink"),
                    appendTransaction: (e, u, n) => {
                      const o = e.some((t) => t.docChanged) && !u.doc.eq(n.doc),
                        i = e.some((t) => t.getMeta("preventAutolink"));
                      if (!o || i) return;
                      const { tr: a } = n,
                        l = (0, r.T7)(u.doc, [...e]);
                      return (
                        (0, r.FF)(l).forEach((e) => {
                          let { newRange: u } = e;
                          const o = (0, r.Nx)(n.doc, u, (t) => t.isTextblock);
                          let i, l;
                          if (o.length > 1)
                            ((i = o[0]),
                              (l = n.doc.textBetween(
                                i.pos,
                                i.pos + i.node.nodeSize,
                                void 0,
                                " ",
                              )));
                          else if (o.length) {
                            const t = n.doc.textBetween(u.from, u.to, " ", " ");
                            if (!Te.test(t)) return;
                            ((i = o[0]),
                              (l = n.doc.textBetween(
                                i.pos,
                                u.to,
                                void 0,
                                " ",
                              )));
                          }
                          if (i && l) {
                            const e = l.split(Le).filter(Boolean);
                            if (e.length <= 0) return !1;
                            const u = e[e.length - 1],
                              o = i.pos + l.lastIndexOf(u);
                            if (!u) return !1;
                            const D = ye(u).map((e) =>
                              e.toObject(t.defaultProtocol),
                            );
                            if (
                              !(1 === (d = D).length
                                ? d[0].isLink
                                : 3 === d.length &&
                                  d[1].isLink &&
                                  ["()", "[]"].includes(
                                    d[0].value + d[2].value,
                                  ))
                            )
                              return !1;
                            D.filter((t) => t.isLink)
                              .map((t) =>
                                (0, s.A)(
                                  (0, s.A)({}, t),
                                  {},
                                  { from: o + t.start + 1, to: o + t.end + 1 },
                                ),
                              )
                              .filter(
                                (t) =>
                                  !n.schema.marks.code ||
                                  !n.doc.rangeHasMark(
                                    t.from,
                                    t.to,
                                    n.schema.marks.code,
                                  ),
                              )
                              .filter((e) => t.validate(e.value))
                              .filter((e) => t.shouldAutoLink(e.value))
                              .forEach((e) => {
                                (0, r.hO)(e.from, e.to, n.doc).some(
                                  (e) => e.mark.type === t.type,
                                ) ||
                                  a.addMark(
                                    e.from,
                                    e.to,
                                    t.type.create({ href: e.href }),
                                  );
                              });
                          }
                          var d;
                        }),
                        a.steps.length ? a : void 0
                      );
                    },
                  });
                })({
                  type: this.type,
                  defaultProtocol: this.options.defaultProtocol,
                  validate: (t) =>
                    this.options.isAllowedUri(t, {
                      defaultValidate: (t) => !!ve(t, e),
                      protocols: e,
                      defaultProtocol: u,
                    }),
                  shouldAutoLink: this.options.shouldAutoLink,
                }),
              ),
            t.push(
              (function (t) {
                return new C.k_({
                  key: new C.hs("handleClickLink"),
                  props: {
                    handleClick: (e, u, n) => {
                      var s, o;
                      if (0 !== n.button) return !1;
                      if (!e.editable) return !1;
                      let i = null;
                      if (n.target instanceof HTMLAnchorElement) i = n.target;
                      else {
                        const e = n.target;
                        if (!e) return !1;
                        const u = t.editor.view.dom;
                        ((i = e.closest("a")),
                          i && !u.contains(i) && (i = null));
                      }
                      if (!i) return !1;
                      let a = !1;
                      if (
                        (t.enableClickSelection &&
                          (a = t.editor.commands.extendMarkRange(t.type.name)),
                        t.openOnClick)
                      ) {
                        const u = (0, r.gu)(e.state, t.type.name),
                          n = null != (s = i.href) ? s : u.href,
                          l = null != (o = i.target) ? o : u.target;
                        n && (window.open(n, l), (a = !0));
                      }
                      return a;
                    },
                  },
                });
              })({
                type: this.type,
                editor: this.editor,
                openOnClick:
                  "whenNotEditable" === this.options.openOnClick ||
                  this.options.openOnClick,
                enableClickSelection: this.options.enableClickSelection,
              }),
            ),
            this.options.linkOnPaste &&
              t.push(
                (function (t) {
                  return new C.k_({
                    key: new C.hs("handlePasteLink"),
                    props: {
                      handlePaste: (e, u, n) => {
                        const { shouldAutoLink: r } = t,
                          { state: s } = e,
                          { selection: o } = s,
                          { empty: i } = o;
                        if (i) return !1;
                        let a = "";
                        n.content.forEach((t) => {
                          a += t.textContent;
                        });
                        const l = be(a, {
                          defaultProtocol: t.defaultProtocol,
                        }).find((t) => t.isLink && t.value === a);
                        return (
                          !(!a || !l || (void 0 !== r && !r(l.value))) &&
                          t.editor.commands.setMark(t.type, { href: l.href })
                        );
                      },
                    },
                  });
                })({
                  editor: this.editor,
                  defaultProtocol: this.options.defaultProtocol,
                  type: this.type,
                  shouldAutoLink: this.options.shouldAutoLink,
                }),
              ),
            t
          );
        },
      });
      const xe = ["start"];
      var He = Object.defineProperty,
        Oe = "textStyle",
        Se = /^\s*([-+*])\s$/,
        Ie = r.bP.create({
          name: "bulletList",
          addOptions: () => ({
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: !1,
            keepAttributes: !1,
          }),
          group: "block list",
          content() {
            return "".concat(this.options.itemTypeName, "+");
          },
          parseHTML: () => [{ tag: "ul" }],
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return ["ul", (0, r.KV)(this.options.HTMLAttributes, e), 0];
          },
          markdownTokenName: "list",
          parseMarkdown: (t, e) =>
            "list" !== t.type || t.ordered
              ? []
              : {
                  type: "bulletList",
                  content: t.items ? e.parseChildren(t.items) : [],
                },
          renderMarkdown: (t, e) =>
            t.content ? e.renderChildren(t.content, "\n") : "",
          markdownOptions: { indentsContent: !0 },
          addCommands() {
            return {
              toggleBulletList: () => (t) => {
                let { commands: e, chain: u } = t;
                return this.options.keepAttributes
                  ? u()
                      .toggleList(
                        this.name,
                        this.options.itemTypeName,
                        this.options.keepMarks,
                      )
                      .updateAttributes(
                        "listItem",
                        this.editor.getAttributes(Oe),
                      )
                      .run()
                  : e.toggleList(
                      this.name,
                      this.options.itemTypeName,
                      this.options.keepMarks,
                    );
              },
            };
          },
          addKeyboardShortcuts() {
            return {
              "Mod-Shift-8": () => this.editor.commands.toggleBulletList(),
            };
          },
          addInputRules() {
            let t = (0, r.tG)({ find: Se, type: this.type });
            return (
              (this.options.keepMarks || this.options.keepAttributes) &&
                (t = (0, r.tG)({
                  find: Se,
                  type: this.type,
                  keepMarks: this.options.keepMarks,
                  keepAttributes: this.options.keepAttributes,
                  getAttributes: () => this.editor.getAttributes(Oe),
                  editor: this.editor,
                })),
              [t]
            );
          },
        }),
        Ne = r.bP.create({
          name: "listItem",
          addOptions: () => ({
            HTMLAttributes: {},
            bulletListTypeName: "bulletList",
            orderedListTypeName: "orderedList",
          }),
          content: "paragraph block*",
          defining: !0,
          parseHTML: () => [{ tag: "li" }],
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return ["li", (0, r.KV)(this.options.HTMLAttributes, e), 0];
          },
          markdownTokenName: "list_item",
          parseMarkdown: (t, e) => {
            if ("list_item" !== t.type) return [];
            let u = [];
            if (t.tokens && t.tokens.length > 0) {
              if (t.tokens.some((t) => "paragraph" === t.type))
                u = e.parseChildren(t.tokens);
              else {
                const n = t.tokens[0];
                if (n && "text" === n.type && n.tokens && n.tokens.length > 0) {
                  if (
                    ((u = [
                      { type: "paragraph", content: e.parseInline(n.tokens) },
                    ]),
                    t.tokens.length > 1)
                  ) {
                    const n = t.tokens.slice(1),
                      r = e.parseChildren(n);
                    u.push(...r);
                  }
                } else u = e.parseChildren(t.tokens);
              }
            }
            return (
              0 === u.length && (u = [{ type: "paragraph", content: [] }]),
              { type: "listItem", content: u }
            );
          },
          renderMarkdown: (t, e, u) =>
            (0, r.kj)(
              t,
              e,
              (t) => {
                var e, u;
                if ("bulletList" === t.parentType) return "- ";
                if ("orderedList" === t.parentType) {
                  const n =
                    (null == (u = null == (e = t.meta) ? void 0 : e.parentAttrs)
                      ? void 0
                      : u.start) || 1;
                  return "".concat(n + t.index, ". ");
                }
                return "- ";
              },
              u,
            ),
          addKeyboardShortcuts() {
            return {
              Enter: () => this.editor.commands.splitListItem(this.name),
              Tab: () => this.editor.commands.sinkListItem(this.name),
              "Shift-Tab": () => this.editor.commands.liftListItem(this.name),
            };
          },
        });
      ((t, e) => {
        for (var u in e) He(t, u, { get: e[u], enumerable: !0 });
      })(
        {},
        {
          findListItemPos: () => Re,
          getNextListDepth: () => Pe,
          handleBackspace: () => Ue,
          handleDelete: () => Ve,
          hasListBefore: () => je,
          hasListItemAfter: () => We,
          hasListItemBefore: () => Ke,
          listItemHasSubList: () => ze,
          nextListIsDeeper: () => _e,
          nextListIsHigher: () => $e,
        },
      );
      var Re = (t, e) => {
          const { $from: u } = e.selection,
            n = (0, r.Pg)(t, e.schema);
          let s = null,
            o = u.depth,
            i = u.pos,
            a = null;
          for (; o > 0 && null === a; )
            ((s = u.node(o)), s.type === n ? (a = o) : ((o -= 1), (i -= 1)));
          return null === a ? null : { $pos: e.doc.resolve(i), depth: a };
        },
        Pe = (t, e) => {
          const u = Re(t, e);
          if (!u) return !1;
          const [, n] = (0, r.fl)(e, t, u.$pos.pos + 4);
          return n;
        },
        je = (t, e, u) => {
          const { $anchor: n } = t.selection,
            r = Math.max(0, n.pos - 2),
            s = t.doc.resolve(r).node();
          return !(!s || !u.includes(s.type.name));
        },
        Ke = (t, e) => {
          var u;
          const { $anchor: n } = e.selection,
            r = e.doc.resolve(n.pos - 2);
          return (
            0 !== r.index() &&
            (null == (u = r.nodeBefore) ? void 0 : u.type.name) === t
          );
        },
        ze = (t, e, u) => {
          if (!u) return !1;
          const n = (0, r.Pg)(t, e.schema);
          let s = !1;
          return (
            u.descendants((t) => {
              t.type === n && (s = !0);
            }),
            s
          );
        },
        Ue = (t, e, u) => {
          if (t.commands.undoInputRule()) return !0;
          if (t.state.selection.from !== t.state.selection.to) return !1;
          if (!(0, r.rU)(t.state, e) && je(t.state, e, u)) {
            const { $anchor: u } = t.state.selection,
              n = t.state.doc.resolve(u.before() - 1),
              r = [];
            n.node().descendants((t, u) => {
              t.type.name === e && r.push({ node: t, pos: u });
            });
            const s = r.at(-1);
            if (!s) return !1;
            const o = t.state.doc.resolve(n.start() + s.pos + 1);
            return t
              .chain()
              .cut({ from: u.start() - 1, to: u.end() + 1 }, o.end())
              .joinForward()
              .run();
          }
          if (!(0, r.rU)(t.state, e)) return !1;
          if (!(0, r.J_)(t.state)) return !1;
          const n = Re(e, t.state);
          if (!n) return !1;
          const s = t.state.doc.resolve(n.$pos.pos - 2).node(n.depth),
            o = ze(e, t.state, s);
          return Ke(e, t.state) && !o
            ? t.commands.joinItemBackward()
            : t.chain().liftListItem(e).run();
        },
        _e = (t, e) => {
          const u = Pe(t, e),
            n = Re(t, e);
          return !(!n || !u) && u > n.depth;
        },
        $e = (t, e) => {
          const u = Pe(t, e),
            n = Re(t, e);
          return !(!n || !u) && u < n.depth;
        },
        Ve = (t, e) => {
          if (!(0, r.rU)(t.state, e)) return !1;
          if (!(0, r.QN)(t.state, e)) return !1;
          const { selection: u } = t.state,
            { $from: n, $to: s } = u;
          return (
            !(!u.empty && n.sameParent(s)) &&
            (_e(e, t.state)
              ? t
                  .chain()
                  .focus(t.state.selection.from + 4)
                  .lift(e)
                  .joinBackward()
                  .run()
              : $e(e, t.state)
                ? t.chain().joinForward().joinBackward().run()
                : t.commands.joinItemForward())
          );
        },
        We = (t, e) => {
          var u;
          const { $anchor: n } = e.selection,
            r = e.doc.resolve(n.pos - n.parentOffset - 2);
          return (
            r.index() !== r.parent.childCount - 1 &&
            (null == (u = r.nodeAfter) ? void 0 : u.type.name) === t
          );
        },
        qe = r.YY.create({
          name: "listKeymap",
          addOptions: () => ({
            listTypes: [
              {
                itemName: "listItem",
                wrapperNames: ["bulletList", "orderedList"],
              },
              { itemName: "taskItem", wrapperNames: ["taskList"] },
            ],
          }),
          addKeyboardShortcuts() {
            return {
              Delete: (t) => {
                let { editor: e } = t,
                  u = !1;
                return (
                  this.options.listTypes.forEach((t) => {
                    let { itemName: n } = t;
                    void 0 !== e.state.schema.nodes[n] && Ve(e, n) && (u = !0);
                  }),
                  u
                );
              },
              "Mod-Delete": (t) => {
                let { editor: e } = t,
                  u = !1;
                return (
                  this.options.listTypes.forEach((t) => {
                    let { itemName: n } = t;
                    void 0 !== e.state.schema.nodes[n] && Ve(e, n) && (u = !0);
                  }),
                  u
                );
              },
              Backspace: (t) => {
                let { editor: e } = t,
                  u = !1;
                return (
                  this.options.listTypes.forEach((t) => {
                    let { itemName: n, wrapperNames: r } = t;
                    void 0 !== e.state.schema.nodes[n] &&
                      Ue(e, n, r) &&
                      (u = !0);
                  }),
                  u
                );
              },
              "Mod-Backspace": (t) => {
                let { editor: e } = t,
                  u = !1;
                return (
                  this.options.listTypes.forEach((t) => {
                    let { itemName: n, wrapperNames: r } = t;
                    void 0 !== e.state.schema.nodes[n] &&
                      Ue(e, n, r) &&
                      (u = !0);
                  }),
                  u
                );
              },
            };
          },
        }),
        Ge = /^(\s*)(\d+)\.\s+(.*)$/,
        Qe = /^\s/;
      function Ye(t, e, u) {
        var n;
        const r = [];
        let s = 0;
        for (; s < t.length; ) {
          const o = t[s];
          if (o.indent === e) {
            const i = o.content.split("\n"),
              a = (null == (n = i[0]) ? void 0 : n.trim()) || "",
              l = [];
            a &&
              l.push({ type: "paragraph", raw: a, tokens: u.inlineTokens(a) });
            const d = i.slice(1).join("\n").trim();
            if (d) {
              const t = u.blockTokens(d);
              l.push(...t);
            }
            let D = s + 1;
            const c = [];
            for (; D < t.length && t[D].indent > e; ) (c.push(t[D]), (D += 1));
            if (c.length > 0) {
              const t = Math.min(...c.map((t) => t.indent)),
                e = Ye(c, t, u);
              l.push({
                type: "list",
                ordered: !0,
                start: c[0].number,
                items: e,
                raw: c.map((t) => t.raw).join("\n"),
              });
            }
            (r.push({ type: "list_item", raw: o.raw, tokens: l }), (s = D));
          } else s += 1;
        }
        return r;
      }
      var Xe = "textStyle",
        Je = /^(\d+)\.\s$/,
        Ze = r.bP.create({
          name: "orderedList",
          addOptions: () => ({
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: !1,
            keepAttributes: !1,
          }),
          group: "block list",
          content() {
            return "".concat(this.options.itemTypeName, "+");
          },
          addAttributes: () => ({
            start: {
              default: 1,
              parseHTML: (t) =>
                t.hasAttribute("start")
                  ? parseInt(t.getAttribute("start") || "", 10)
                  : 1,
            },
            type: { default: null, parseHTML: (t) => t.getAttribute("type") },
          }),
          parseHTML: () => [{ tag: "ol" }],
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            const { start: u } = e,
              n = (0, o.A)(e, xe);
            return 1 === u
              ? ["ol", (0, r.KV)(this.options.HTMLAttributes, n), 0]
              : ["ol", (0, r.KV)(this.options.HTMLAttributes, e), 0];
          },
          markdownTokenName: "list",
          parseMarkdown: (t, e) => {
            if ("list" !== t.type || !t.ordered) return [];
            const u = t.start || 1,
              n = t.items
                ? (function (t, e) {
                    return t.map((t) => {
                      if ("list_item" !== t.type)
                        return e.parseChildren([t])[0];
                      const u = [];
                      return (
                        t.tokens &&
                          t.tokens.length > 0 &&
                          t.tokens.forEach((t) => {
                            if (
                              "paragraph" === t.type ||
                              "list" === t.type ||
                              "blockquote" === t.type ||
                              "code" === t.type
                            )
                              u.push(...e.parseChildren([t]));
                            else if ("text" === t.type && t.tokens) {
                              const n = e.parseChildren([t]);
                              u.push({ type: "paragraph", content: n });
                            } else {
                              const n = e.parseChildren([t]);
                              n.length > 0 && u.push(...n);
                            }
                          }),
                        { type: "listItem", content: u }
                      );
                    });
                  })(t.items, e)
                : [];
            return 1 !== u
              ? { type: "orderedList", attrs: { start: u }, content: n }
              : { type: "orderedList", content: n };
          },
          renderMarkdown: (t, e) =>
            t.content ? e.renderChildren(t.content, "\n") : "",
          markdownTokenizer: {
            name: "orderedList",
            level: "block",
            start: (t) => {
              const e = t.match(/^(\s*)(\d+)\.\s+/),
                u = null == e ? void 0 : e.index;
              return void 0 !== u ? u : -1;
            },
            tokenize: (t, e, u) => {
              var n;
              const r = t.split("\n"),
                [s, o] = (function (t) {
                  const e = [];
                  let u = 0,
                    n = 0;
                  for (; u < t.length; ) {
                    const r = t[u],
                      s = r.match(Ge);
                    if (!s) break;
                    const [, o, i, a] = s,
                      l = o.length;
                    let d = a,
                      D = u + 1;
                    const c = [r];
                    for (; D < t.length; ) {
                      const e = t[D];
                      if (e.match(Ge)) break;
                      if ("" === e.trim()) (c.push(e), (d += "\n"), (D += 1));
                      else {
                        if (!e.match(Qe)) break;
                        (c.push(e),
                          (d += "\n".concat(e.slice(l + 2))),
                          (D += 1));
                      }
                    }
                    (e.push({
                      indent: l,
                      number: parseInt(i, 10),
                      content: d.trim(),
                      raw: c.join("\n"),
                    }),
                      (n = D),
                      (u = D));
                  }
                  return [e, n];
                })(r);
              if (0 === s.length) return;
              const i = Ye(s, 0, u);
              if (0 === i.length) return;
              return {
                type: "list",
                ordered: !0,
                start: (null == (n = s[0]) ? void 0 : n.number) || 1,
                items: i,
                raw: r.slice(0, o).join("\n"),
              };
            },
          },
          markdownOptions: { indentsContent: !0 },
          addCommands() {
            return {
              toggleOrderedList: () => (t) => {
                let { commands: e, chain: u } = t;
                return this.options.keepAttributes
                  ? u()
                      .toggleList(
                        this.name,
                        this.options.itemTypeName,
                        this.options.keepMarks,
                      )
                      .updateAttributes(
                        "listItem",
                        this.editor.getAttributes(Xe),
                      )
                      .run()
                  : e.toggleList(
                      this.name,
                      this.options.itemTypeName,
                      this.options.keepMarks,
                    );
              },
            };
          },
          addKeyboardShortcuts() {
            return {
              "Mod-Shift-7": () => this.editor.commands.toggleOrderedList(),
            };
          },
          addInputRules() {
            let t = (0, r.tG)({
              find: Je,
              type: this.type,
              getAttributes: (t) => ({ start: +t[1] }),
              joinPredicate: (t, e) => e.childCount + e.attrs.start === +t[1],
            });
            return (
              (this.options.keepMarks || this.options.keepAttributes) &&
                (t = (0, r.tG)({
                  find: Je,
                  type: this.type,
                  keepMarks: this.options.keepMarks,
                  keepAttributes: this.options.keepAttributes,
                  getAttributes: (t) =>
                    (0, s.A)({ start: +t[1] }, this.editor.getAttributes(Xe)),
                  joinPredicate: (t, e) =>
                    e.childCount + e.attrs.start === +t[1],
                  editor: this.editor,
                })),
              [t]
            );
          },
        }),
        tu = /^\s*(\[([( |x])?\])\s$/,
        eu = r.bP.create({
          name: "taskItem",
          addOptions: () => ({
            nested: !1,
            HTMLAttributes: {},
            taskListTypeName: "taskList",
            a11y: void 0,
          }),
          content() {
            return this.options.nested ? "paragraph block*" : "paragraph+";
          },
          defining: !0,
          addAttributes: () => ({
            checked: {
              default: !1,
              keepOnSplit: !1,
              parseHTML: (t) => {
                const e = t.getAttribute("data-checked");
                return "" === e || "true" === e;
              },
              renderHTML: (t) => ({ "data-checked": t.checked }),
            },
          }),
          parseHTML() {
            return [
              { tag: 'li[data-type="'.concat(this.name, '"]'), priority: 51 },
            ];
          },
          renderHTML(t) {
            let { node: e, HTMLAttributes: u } = t;
            return [
              "li",
              (0, r.KV)(this.options.HTMLAttributes, u, {
                "data-type": this.name,
              }),
              [
                "label",
                [
                  "input",
                  {
                    type: "checkbox",
                    checked: e.attrs.checked ? "checked" : null,
                  },
                ],
                ["span"],
              ],
              ["div", 0],
            ];
          },
          parseMarkdown: (t, e) => {
            const u = [];
            if (
              (t.tokens && t.tokens.length > 0
                ? u.push(e.createNode("paragraph", {}, e.parseInline(t.tokens)))
                : t.text
                  ? u.push(
                      e.createNode("paragraph", {}, [
                        e.createNode("text", { text: t.text }),
                      ]),
                    )
                  : u.push(e.createNode("paragraph", {}, [])),
              t.nestedTokens && t.nestedTokens.length > 0)
            ) {
              const n = e.parseChildren(t.nestedTokens);
              u.push(...n);
            }
            return e.createNode("taskItem", { checked: t.checked || !1 }, u);
          },
          renderMarkdown: (t, e) => {
            var u;
            const n = (null == (u = t.attrs) ? void 0 : u.checked) ? "x" : " ",
              s = "- [".concat(n, "] ");
            return (0, r.kj)(t, e, s);
          },
          addKeyboardShortcuts() {
            const t = {
              Enter: () => this.editor.commands.splitListItem(this.name),
              "Shift-Tab": () => this.editor.commands.liftListItem(this.name),
            };
            return this.options.nested
              ? (0, s.A)(
                  (0, s.A)({}, t),
                  {},
                  { Tab: () => this.editor.commands.sinkListItem(this.name) },
                )
              : t;
          },
          addNodeView() {
            return (t) => {
              let { node: e, HTMLAttributes: u, getPos: n, editor: o } = t;
              const i = document.createElement("li"),
                a = document.createElement("label"),
                l = document.createElement("span"),
                d = document.createElement("input"),
                D = document.createElement("div"),
                c = (t) => {
                  var e, u;
                  d.ariaLabel =
                    (null ==
                    (u =
                      null == (e = this.options.a11y)
                        ? void 0
                        : e.checkboxLabel)
                      ? void 0
                      : u.call(e, t, d.checked)) ||
                    "Task item checkbox for ".concat(
                      t.textContent || "empty task item",
                    );
                };
              (c(e),
                (a.contentEditable = "false"),
                (d.type = "checkbox"),
                d.addEventListener("mousedown", (t) => t.preventDefault()),
                d.addEventListener("change", (t) => {
                  if (!o.isEditable && !this.options.onReadOnlyChecked)
                    return void (d.checked = !d.checked);
                  const { checked: u } = t.target;
                  (o.isEditable &&
                    "function" === typeof n &&
                    o
                      .chain()
                      .focus(void 0, { scrollIntoView: !1 })
                      .command((t) => {
                        let { tr: e } = t;
                        const r = n();
                        if ("number" !== typeof r) return !1;
                        const o = e.doc.nodeAt(r);
                        return (
                          e.setNodeMarkup(
                            r,
                            void 0,
                            (0, s.A)(
                              (0, s.A)({}, null == o ? void 0 : o.attrs),
                              {},
                              { checked: u },
                            ),
                          ),
                          !0
                        );
                      })
                      .run(),
                    !o.isEditable &&
                      this.options.onReadOnlyChecked &&
                      (this.options.onReadOnlyChecked(e, u) ||
                        (d.checked = !d.checked)));
                }),
                Object.entries(this.options.HTMLAttributes).forEach((t) => {
                  let [e, u] = t;
                  i.setAttribute(e, u);
                }),
                (i.dataset.checked = e.attrs.checked),
                (d.checked = e.attrs.checked),
                a.append(d, l),
                i.append(a, D),
                Object.entries(u).forEach((t) => {
                  let [e, u] = t;
                  i.setAttribute(e, u);
                }));
              let p = new Set(Object.keys(u));
              return {
                dom: i,
                contentDOM: D,
                update: (t) => {
                  if (t.type !== this.type) return !1;
                  ((i.dataset.checked = t.attrs.checked),
                    (d.checked = t.attrs.checked),
                    c(t));
                  const e = o.extensionManager.attributes,
                    u = (0, r.zU)(t, e),
                    n = new Set(Object.keys(u)),
                    s = this.options.HTMLAttributes;
                  return (
                    p.forEach((t) => {
                      n.has(t) ||
                        (t in s
                          ? i.setAttribute(t, s[t])
                          : i.removeAttribute(t));
                    }),
                    Object.entries(u).forEach((t) => {
                      let [e, u] = t;
                      null === u || void 0 === u
                        ? e in s
                          ? i.setAttribute(e, s[e])
                          : i.removeAttribute(e)
                        : i.setAttribute(e, u);
                    }),
                    (p = n),
                    !0
                  );
                },
              };
            };
          },
          addInputRules() {
            return [
              (0, r.tG)({
                find: tu,
                type: this.type,
                getAttributes: (t) => ({ checked: "x" === t[t.length - 1] }),
              }),
            ];
          },
        }),
        uu = r.bP.create({
          name: "taskList",
          addOptions: () => ({ itemTypeName: "taskItem", HTMLAttributes: {} }),
          group: "block list",
          content() {
            return "".concat(this.options.itemTypeName, "+");
          },
          parseHTML() {
            return [
              { tag: 'ul[data-type="'.concat(this.name, '"]'), priority: 51 },
            ];
          },
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return [
              "ul",
              (0, r.KV)(this.options.HTMLAttributes, e, {
                "data-type": this.name,
              }),
              0,
            ];
          },
          parseMarkdown: (t, e) =>
            e.createNode("taskList", {}, e.parseChildren(t.items || [])),
          renderMarkdown: (t, e) =>
            t.content ? e.renderChildren(t.content, "\n") : "",
          markdownTokenizer: {
            name: "taskList",
            level: "block",
            start(t) {
              var e;
              const u =
                null == (e = t.match(/^\s*[-+*]\s+\[([ xX])\]\s+/))
                  ? void 0
                  : e.index;
              return void 0 !== u ? u : -1;
            },
            tokenize(t, e, u) {
              const n = (t) => {
                  const e = (0, r.Dd)(
                    t,
                    {
                      itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
                      extractItemData: (t) => ({
                        indentLevel: t[1].length,
                        mainContent: t[4],
                        checked: "x" === t[3].toLowerCase(),
                      }),
                      createToken: (t, e) => ({
                        type: "taskItem",
                        raw: "",
                        mainContent: t.mainContent,
                        indentLevel: t.indentLevel,
                        checked: t.checked,
                        text: t.mainContent,
                        tokens: u.inlineTokens(t.mainContent),
                        nestedTokens: e,
                      }),
                      customNestedParser: n,
                    },
                    u,
                  );
                  return e
                    ? [{ type: "taskList", raw: e.raw, items: e.items }]
                    : u.blockTokens(t);
                },
                s = (0, r.Dd)(
                  t,
                  {
                    itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
                    extractItemData: (t) => ({
                      indentLevel: t[1].length,
                      mainContent: t[4],
                      checked: "x" === t[3].toLowerCase(),
                    }),
                    createToken: (t, e) => ({
                      type: "taskItem",
                      raw: "",
                      mainContent: t.mainContent,
                      indentLevel: t.indentLevel,
                      checked: t.checked,
                      text: t.mainContent,
                      tokens: u.inlineTokens(t.mainContent),
                      nestedTokens: e,
                    }),
                    customNestedParser: n,
                  },
                  u,
                );
              if (s) return { type: "taskList", raw: s.raw, items: s.items };
            },
          },
          markdownOptions: { indentsContent: !0 },
          addCommands() {
            return {
              toggleTaskList: () => (t) => {
                let { commands: e } = t;
                return e.toggleList(this.name, this.options.itemTypeName);
              },
            };
          },
          addKeyboardShortcuts() {
            return {
              "Mod-Shift-9": () => this.editor.commands.toggleTaskList(),
            };
          },
        }),
        nu =
          (r.YY.create({
            name: "listKit",
            addExtensions() {
              const t = [];
              return (
                !1 !== this.options.bulletList &&
                  t.push(Ie.configure(this.options.bulletList)),
                !1 !== this.options.listItem &&
                  t.push(Ne.configure(this.options.listItem)),
                !1 !== this.options.listKeymap &&
                  t.push(qe.configure(this.options.listKeymap)),
                !1 !== this.options.orderedList &&
                  t.push(Ze.configure(this.options.orderedList)),
                !1 !== this.options.taskItem &&
                  t.push(eu.configure(this.options.taskItem)),
                !1 !== this.options.taskList &&
                  t.push(uu.configure(this.options.taskList)),
                t
              );
            },
          }),
          "&nbsp;"),
        ru = r.bP.create({
          name: "paragraph",
          priority: 1e3,
          addOptions: () => ({ HTMLAttributes: {} }),
          group: "block",
          content: "inline*",
          parseHTML: () => [{ tag: "p" }],
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return ["p", (0, r.KV)(this.options.HTMLAttributes, e), 0];
          },
          parseMarkdown: (t, e) => {
            const u = t.tokens || [];
            if (1 === u.length && "image" === u[0].type)
              return e.parseChildren([u[0]]);
            const n = e.parseInline(u);
            return 1 !== n.length ||
              "text" !== n[0].type ||
              (n[0].text !== nu && "\xa0" !== n[0].text)
              ? e.createNode("paragraph", void 0, n)
              : e.createNode("paragraph", void 0, []);
          },
          renderMarkdown: (t, e) => {
            if (!t) return "";
            const u = Array.isArray(t.content) ? t.content : [];
            return 0 === u.length ? nu : e.renderChildren(u);
          },
          addCommands() {
            return {
              setParagraph: () => (t) => {
                let { commands: e } = t;
                return e.setNode(this.name);
              },
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
          },
        }),
        su = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/,
        ou = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g,
        iu = r.CU.create({
          name: "strike",
          addOptions: () => ({ HTMLAttributes: {} }),
          parseHTML: () => [
            { tag: "s" },
            { tag: "del" },
            { tag: "strike" },
            {
              style: "text-decoration",
              consuming: !1,
              getAttrs: (t) => !!t.includes("line-through") && {},
            },
          ],
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return ["s", (0, r.KV)(this.options.HTMLAttributes, e), 0];
          },
          markdownTokenName: "del",
          parseMarkdown: (t, e) =>
            e.applyMark("strike", e.parseInline(t.tokens || [])),
          renderMarkdown: (t, e) => "~~".concat(e.renderChildren(t), "~~"),
          addCommands() {
            return {
              setStrike: () => (t) => {
                let { commands: e } = t;
                return e.setMark(this.name);
              },
              toggleStrike: () => (t) => {
                let { commands: e } = t;
                return e.toggleMark(this.name);
              },
              unsetStrike: () => (t) => {
                let { commands: e } = t;
                return e.unsetMark(this.name);
              },
            };
          },
          addKeyboardShortcuts() {
            return { "Mod-Shift-s": () => this.editor.commands.toggleStrike() };
          },
          addInputRules() {
            return [(0, r.OX)({ find: su, type: this.type })];
          },
          addPasteRules() {
            return [(0, r.Zc)({ find: ou, type: this.type })];
          },
        }),
        au = r.bP.create({
          name: "text",
          group: "inline",
          parseMarkdown: (t) => ({ type: "text", text: t.text || "" }),
          renderMarkdown: (t) => t.text || "",
        }),
        lu = r.YY.create({
          name: "textAlign",
          addOptions: () => ({
            types: [],
            alignments: ["left", "center", "right", "justify"],
            defaultAlignment: null,
          }),
          addGlobalAttributes() {
            return [
              {
                types: this.options.types,
                attributes: {
                  textAlign: {
                    default: this.options.defaultAlignment,
                    parseHTML: (t) => {
                      const e = t.style.textAlign;
                      return this.options.alignments.includes(e)
                        ? e
                        : this.options.defaultAlignment;
                    },
                    renderHTML: (t) =>
                      t.textAlign
                        ? { style: "text-align: ".concat(t.textAlign) }
                        : {},
                  },
                },
              },
            ];
          },
          addCommands() {
            return {
              setTextAlign: (t) => (e) => {
                let { commands: u } = e;
                return (
                  !!this.options.alignments.includes(t) &&
                  this.options.types
                    .map((e) => u.updateAttributes(e, { textAlign: t }))
                    .some((t) => t)
                );
              },
              unsetTextAlign: () => (t) => {
                let { commands: e } = t;
                return this.options.types
                  .map((t) => e.resetAttributes(t, "textAlign"))
                  .some((t) => t);
              },
              toggleTextAlign: (t) => (e) => {
                let { editor: u, commands: n } = e;
                return (
                  !!this.options.alignments.includes(t) &&
                  (u.isActive({ textAlign: t })
                    ? n.unsetTextAlign()
                    : n.setTextAlign(t))
                );
              },
            };
          },
          addKeyboardShortcuts() {
            return {
              "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
              "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
              "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
              "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify"),
            };
          },
        }),
        du = r.CU.create({
          name: "underline",
          addOptions: () => ({ HTMLAttributes: {} }),
          parseHTML: () => [
            { tag: "u" },
            {
              style: "text-decoration",
              consuming: !1,
              getAttrs: (t) => !!t.includes("underline") && {},
            },
          ],
          renderHTML(t) {
            let { HTMLAttributes: e } = t;
            return ["u", (0, r.KV)(this.options.HTMLAttributes, e), 0];
          },
          parseMarkdown(t, e) {
            return e.applyMark(
              this.name || "underline",
              e.parseInline(t.tokens || []),
            );
          },
          renderMarkdown: (t, e) => "++".concat(e.renderChildren(t), "++"),
          markdownTokenizer: {
            name: "underline",
            level: "inline",
            start: (t) => t.indexOf("++"),
            tokenize(t, e, u) {
              const n = /^(\+\+)([\s\S]+?)(\+\+)/.exec(t);
              if (!n) return;
              const r = n[2].trim();
              return {
                type: "underline",
                raw: n[0],
                text: r,
                tokens: u.inlineTokens(r),
              };
            },
          },
          addCommands() {
            return {
              setUnderline: () => (t) => {
                let { commands: e } = t;
                return e.setMark(this.name);
              },
              toggleUnderline: () => (t) => {
                let { commands: e } = t;
                return e.toggleMark(this.name);
              },
              unsetUnderline: () => (t) => {
                let { commands: e } = t;
                return e.unsetMark(this.name);
              },
            };
          },
          addKeyboardShortcuts() {
            return {
              "Mod-u": () => this.editor.commands.toggleUnderline(),
              "Mod-U": () => this.editor.commands.toggleUnderline(),
            };
          },
        });
      (0, n.hY)();
      var Du = { textAlign: { types: ["heading", "paragraph"] } },
        cu = r.YY.create({
          name: "puckRichText",
          addExtensions() {
            const t = [],
              e = (0, n.IA)((0, n.IA)({}, this.options), Du);
            return (
              !1 !== e.bold && t.push(m.configure(e.bold)),
              !1 !== e.blockquote && t.push(d.configure(e.blockquote)),
              !1 !== e.code && t.push(E.configure(e.code)),
              !1 !== e.codeBlock && t.push(f.configure(e.codeBlock)),
              !1 !== e.document && t.push(y.configure(e.document)),
              !1 !== e.hardBreak && t.push(b.configure(e.hardBreak)),
              !1 !== e.heading && t.push(B.configure(e.heading)),
              !1 !== e.horizontalRule && t.push(L.configure(e.horizontalRule)),
              !1 !== e.italic && t.push(x.configure(e.italic)),
              !1 !== e.listItem &&
                (t.push(Ne.configure(e.listItem)),
                !1 !== e.bulletList && t.push(Ie.configure(e.bulletList)),
                !1 !== e.orderedList && t.push(Ze.configure(e.orderedList))),
              !1 !== e.listKeymap &&
                t.push(qe.configure(null == e ? void 0 : e.listKeymap)),
              !1 !== e.link &&
                t.push(we.configure(null == e ? void 0 : e.link)),
              !1 !== e.paragraph && t.push(ru.configure(e.paragraph)),
              !1 !== e.strike && t.push(iu.configure(e.strike)),
              !1 !== e.text && t.push(au.configure(e.text)),
              !1 !== e.textAlign && t.push(lu.configure(e.textAlign)),
              !1 !== e.underline &&
                t.push(du.configure(null == e ? void 0 : e.underline)),
              t
            );
          },
        });
    },
  },
]);
//# sourceMappingURL=644.73aa0879.chunk.js.map
