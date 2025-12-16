var bt = Object.defineProperty;
var kt = (C, u, S) => u in C ? bt(C, u, { enumerable: !0, configurable: !0, writable: !0, value: S }) : C[u] = S;
var ie = (C, u, S) => (kt(C, typeof u != "symbol" ? u + "" : u, S), S);
(function() {
  var C, u, S, x, le, ce, se, ae, q, G, Z, B = {}, ue = [], je = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, D = Array.isArray;
  function A(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function J(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function K(e, t, n) {
    var _, o, r, l = {};
    for (r in t)
      r == "key" ? _ = t[r] : r == "ref" ? o = t[r] : l[r] = t[r];
    if (arguments.length > 2 && (l.children = arguments.length > 3 ? C.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
      for (r in e.defaultProps)
        l[r] === void 0 && (l[r] = e.defaultProps[r]);
    return L(e, l, _, o, null);
  }
  function L(e, t, n, _, o) {
    var r = { type: e, props: t, key: n, ref: _, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++S, __i: -1, __u: 0 };
    return o == null && u.vnode != null && u.vnode(r), r;
  }
  function N(e) {
    return e.children;
  }
  function P(e, t) {
    this.props = e, this.context = t;
  }
  function M(e, t) {
    if (t == null)
      return e.__ ? M(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null)
        return n.__e;
    return typeof e.type == "function" ? M(e) : null;
  }
  function fe(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return fe(e);
    }
  }
  function pe(e) {
    (!e.__d && (e.__d = !0) && x.push(e) && !R.__r++ || le != u.debounceRendering) && ((le = u.debounceRendering) || ce)(R);
  }
  function R() {
    for (var e, t, n, _, o, r, l, s = 1; x.length; )
      x.length > s && x.sort(se), e = x.shift(), s = x.length, e.__d && (n = void 0, _ = void 0, o = (_ = (t = e).__v).__e, r = [], l = [], t.__P && ((n = A({}, _)).__v = _.__v + 1, u.vnode && u.vnode(n), Q(t.__P, n, _, t.__n, t.__P.namespaceURI, 32 & _.__u ? [o] : null, r, o ?? M(_), !!(32 & _.__u), l), n.__v = _.__v, n.__.__k[n.__i] = n, ye(r, n, l), _.__e = _.__ = null, n.__e != o && fe(n)));
    R.__r = 0;
  }
  function de(e, t, n, _, o, r, l, s, a, c, p) {
    var i, d, f, g, w, k, h, m = _ && _.__k || ue, E = t.length;
    for (a = qe(n, t, m, a, E), i = 0; i < E; i++)
      (f = n.__k[i]) != null && (d = f.__i == -1 ? B : m[f.__i] || B, f.__i = i, k = Q(e, f, d, o, r, l, s, a, c, p), g = f.__e, f.ref && d.ref != f.ref && (d.ref && Y(d.ref, null, f), p.push(f.ref, f.__c || g, f)), w == null && g != null && (w = g), (h = !!(4 & f.__u)) || d.__k === f.__k ? a = me(f, a, e, h) : typeof f.type == "function" && k !== void 0 ? a = k : g && (a = g.nextSibling), f.__u &= -7);
    return n.__e = w, a;
  }
  function qe(e, t, n, _, o) {
    var r, l, s, a, c, p = n.length, i = p, d = 0;
    for (e.__k = new Array(o), r = 0; r < o; r++)
      (l = t[r]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = e.__k[r] = L(null, l, null, null, null) : D(l) ? l = e.__k[r] = L(N, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? l = e.__k[r] = L(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : e.__k[r] = l, a = r + d, l.__ = e, l.__b = e.__b + 1, (c = l.__i = Ge(l, n, a, i)) != -1 && (i--, (s = n[c]) && (s.__u |= 2)), s == null || s.__v == null ? (c == -1 && (o > p ? d-- : o < p && d++), typeof l.type != "function" && (l.__u |= 4)) : c != a && (c == a - 1 ? d-- : c == a + 1 ? d++ : (c > a ? d-- : d++, l.__u |= 4))) : e.__k[r] = null;
    if (i)
      for (r = 0; r < p; r++)
        (s = n[r]) != null && !(2 & s.__u) && (s.__e == _ && (_ = M(s)), be(s, s));
    return _;
  }
  function me(e, t, n, _) {
    var o, r;
    if (typeof e.type == "function") {
      for (o = e.__k, r = 0; o && r < o.length; r++)
        o[r] && (o[r].__ = e, t = me(o[r], t, n, _));
      return t;
    }
    e.__e != t && (_ && (t && e.type && !t.parentNode && (t = M(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
    do
      t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function O(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (D(e) ? e.some(function(n) {
      O(n, t);
    }) : t.push(e)), t;
  }
  function Ge(e, t, n, _) {
    var o, r, l, s = e.key, a = e.type, c = t[n], p = c != null && (2 & c.__u) == 0;
    if (c === null && s == null || p && s == c.key && a == c.type)
      return n;
    if (_ > (p ? 1 : 0)) {
      for (o = n - 1, r = n + 1; o >= 0 || r < t.length; )
        if ((c = t[l = o >= 0 ? o-- : r++]) != null && !(2 & c.__u) && s == c.key && a == c.type)
          return l;
    }
    return -1;
  }
  function he(e, t, n) {
    t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || je.test(t) ? n : n + "px";
  }
  function F(e, t, n, _, o) {
    var r, l;
    e:
      if (t == "style")
        if (typeof n == "string")
          e.style.cssText = n;
        else {
          if (typeof _ == "string" && (e.style.cssText = _ = ""), _)
            for (t in _)
              n && t in n || he(e.style, t, "");
          if (n)
            for (t in n)
              _ && n[t] == _[t] || he(e.style, t, n[t]);
        }
      else if (t[0] == "o" && t[1] == "n")
        r = t != (t = t.replace(ae, "$1")), l = t.toLowerCase(), t = l in e || t == "onFocusOut" || t == "onFocusIn" ? l.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? _ ? n.u = _.u : (n.u = q, e.addEventListener(t, r ? Z : G, r)) : e.removeEventListener(t, r ? Z : G, r);
      else {
        if (o == "http://www.w3.org/2000/svg")
          t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e)
          try {
            e[t] = n ?? "";
            break e;
          } catch {
          }
        typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
      }
  }
  function ve(e) {
    return function(t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t.t == null)
          t.t = q++;
        else if (t.t < n.u)
          return;
        return n(u.event ? u.event(t) : t);
      }
    };
  }
  function Q(e, t, n, _, o, r, l, s, a, c) {
    var p, i, d, f, g, w, k, h, m, E, I, V, U, Ve, j, T, re, $ = t.type;
    if (t.constructor != null)
      return null;
    128 & n.__u && (a = !!(32 & n.__u), r = [s = t.__e = n.__e]), (p = u.__b) && p(t);
    e:
      if (typeof $ == "function")
        try {
          if (h = t.props, m = "prototype" in $ && $.prototype.render, E = (p = $.contextType) && _[p.__c], I = p ? E ? E.props.value : p.__ : _, n.__c ? k = (i = t.__c = n.__c).__ = i.__E : (m ? t.__c = i = new $(h, I) : (t.__c = i = new P(h, I), i.constructor = $, i.render = Je), E && E.sub(i), i.state || (i.state = {}), i.__n = _, d = i.__d = !0, i.__h = [], i._sb = []), m && i.__s == null && (i.__s = i.state), m && $.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = A({}, i.__s)), A(i.__s, $.getDerivedStateFromProps(h, i.__s))), f = i.props, g = i.state, i.__v = t, d)
            m && $.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), m && i.componentDidMount != null && i.__h.push(i.componentDidMount);
          else {
            if (m && $.getDerivedStateFromProps == null && h !== f && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, I), t.__v == n.__v || !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, I) === !1) {
              for (t.__v != n.__v && (i.props = h, i.state = i.__s, i.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(H) {
                H && (H.__ = t);
              }), V = 0; V < i._sb.length; V++)
                i.__h.push(i._sb[V]);
              i._sb = [], i.__h.length && l.push(i);
              break e;
            }
            i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, I), m && i.componentDidUpdate != null && i.__h.push(function() {
              i.componentDidUpdate(f, g, w);
            });
          }
          if (i.context = I, i.props = h, i.__P = e, i.__e = !1, U = u.__r, Ve = 0, m) {
            for (i.state = i.__s, i.__d = !1, U && U(t), p = i.render(i.props, i.state, i.context), j = 0; j < i._sb.length; j++)
              i.__h.push(i._sb[j]);
            i._sb = [];
          } else
            do
              i.__d = !1, U && U(t), p = i.render(i.props, i.state, i.context), i.state = i.__s;
            while (i.__d && ++Ve < 25);
          i.state = i.__s, i.getChildContext != null && (_ = A(A({}, _), i.getChildContext())), m && !d && i.getSnapshotBeforeUpdate != null && (w = i.getSnapshotBeforeUpdate(f, g)), T = p, p != null && p.type === N && p.key == null && (T = ge(p.props.children)), s = de(e, D(T) ? T : [T], t, n, _, o, r, l, s, a, c), i.base = t.__e, t.__u &= -161, i.__h.length && l.push(i), k && (i.__E = i.__ = null);
        } catch (H) {
          if (t.__v = null, a || r != null)
            if (H.then) {
              for (t.__u |= a ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; )
                s = s.nextSibling;
              r[r.indexOf(s)] = null, t.__e = s;
            } else {
              for (re = r.length; re--; )
                J(r[re]);
              X(t);
            }
          else
            t.__e = n.__e, t.__k = n.__k, H.then || X(t);
          u.__e(H, t, n);
        }
      else
        r == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = Ze(n.__e, t, n, _, o, r, l, a, c);
    return (p = u.diffed) && p(t), 128 & t.__u ? void 0 : s;
  }
  function X(e) {
    e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(X);
  }
  function ye(e, t, n) {
    for (var _ = 0; _ < n.length; _++)
      Y(n[_], n[++_], n[++_]);
    u.__c && u.__c(t, e), e.some(function(o) {
      try {
        e = o.__h, o.__h = [], e.some(function(r) {
          r.call(o);
        });
      } catch (r) {
        u.__e(r, o.__v);
      }
    });
  }
  function ge(e) {
    return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : D(e) ? e.map(ge) : A({}, e);
  }
  function Ze(e, t, n, _, o, r, l, s, a) {
    var c, p, i, d, f, g, w, k = n.props || B, h = t.props, m = t.type;
    if (m == "svg" ? o = "http://www.w3.org/2000/svg" : m == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
      for (c = 0; c < r.length; c++)
        if ((f = r[c]) && "setAttribute" in f == !!m && (m ? f.localName == m : f.nodeType == 3)) {
          e = f, r[c] = null;
          break;
        }
    }
    if (e == null) {
      if (m == null)
        return document.createTextNode(h);
      e = document.createElementNS(o, m, h.is && h), s && (u.__m && u.__m(t, r), s = !1), r = null;
    }
    if (m == null)
      k === h || s && e.data == h || (e.data = h);
    else {
      if (r = r && C.call(e.childNodes), !s && r != null)
        for (k = {}, c = 0; c < e.attributes.length; c++)
          k[(f = e.attributes[c]).name] = f.value;
      for (c in k)
        if (f = k[c], c != "children") {
          if (c == "dangerouslySetInnerHTML")
            i = f;
          else if (!(c in h)) {
            if (c == "value" && "defaultValue" in h || c == "checked" && "defaultChecked" in h)
              continue;
            F(e, c, null, f, o);
          }
        }
      for (c in h)
        f = h[c], c == "children" ? d = f : c == "dangerouslySetInnerHTML" ? p = f : c == "value" ? g = f : c == "checked" ? w = f : s && typeof f != "function" || k[c] === f || F(e, c, f, k[c], o);
      if (p)
        s || i && (p.__html == i.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];
      else if (i && (e.innerHTML = ""), de(t.type == "template" ? e.content : e, D(d) ? d : [d], t, n, _, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, l, r ? r[0] : n.__k && M(n, 0), s, a), r != null)
        for (c = r.length; c--; )
          J(r[c]);
      s || (c = "value", m == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[c] || m == "progress" && !g || m == "option" && g != k[c]) && F(e, c, g, k[c], o), c = "checked", w != null && w != e[c] && F(e, c, w, k[c], o));
    }
    return e;
  }
  function Y(e, t, n) {
    try {
      if (typeof e == "function") {
        var _ = typeof e.__u == "function";
        _ && e.__u(), _ && t == null || (e.__u = e(t));
      } else
        e.current = t;
    } catch (o) {
      u.__e(o, n);
    }
  }
  function be(e, t, n) {
    var _, o;
    if (u.unmount && u.unmount(e), (_ = e.ref) && (_.current && _.current != e.__e || Y(_, null, t)), (_ = e.__c) != null) {
      if (_.componentWillUnmount)
        try {
          _.componentWillUnmount();
        } catch (r) {
          u.__e(r, t);
        }
      _.base = _.__P = null;
    }
    if (_ = e.__k)
      for (o = 0; o < _.length; o++)
        _[o] && be(_[o], t, n || typeof e.type != "function");
    n || J(e.__e), e.__c = e.__ = e.__e = void 0;
  }
  function Je(e, t, n) {
    return this.constructor(e, n);
  }
  function Ke(e, t, n) {
    var _, o, r, l;
    t == document && (t = document.documentElement), u.__ && u.__(e, t), o = (_ = typeof n == "function") ? null : n && n.__k || t.__k, r = [], l = [], Q(t, e = (!_ && n || t).__k = K(N, null, [e]), o || B, B, t.namespaceURI, !_ && n ? [n] : o ? null : t.firstChild ? C.call(t.childNodes) : null, r, !_ && n ? n : o ? o.__e : t.firstChild, _, l), ye(r, e, l);
  }
  C = ue.slice, u = { __e: function(e, t, n, _) {
    for (var o, r, l; t = t.__; )
      if ((o = t.__c) && !o.__)
        try {
          if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, _ || {}), l = o.__d), l)
            return o.__E = o;
        } catch (s) {
          e = s;
        }
    throw e;
  } }, S = 0, P.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = A({}, this.state), typeof e == "function" && (e = e(A({}, n), this.props)), e && A(n, e), e != null && this.__v && (t && this._sb.push(t), pe(this));
  }, P.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), pe(this));
  }, P.prototype.render = N, x = [], ce = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, se = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, R.__r = 0, ae = /(PointerCapture)$|Capture$/i, q = 0, G = ve(!1), Z = ve(!0);
  var Qe = 0;
  function b(e, t, n, _, o, r) {
    t || (t = {});
    var l, s, a = t;
    if ("ref" in a)
      for (s in a = {}, t)
        s == "ref" ? l = t[s] : a[s] = t[s];
    var c = { type: e, props: a, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Qe, __i: -1, __u: 0, __source: o, __self: r };
    if (typeof e == "function" && (l = e.defaultProps))
      for (s in l)
        a[s] === void 0 && (a[s] = l[s]);
    return u.vnode && u.vnode(c), c;
  }
  var ee, v, te, ke, ne = 0, we = [], y = u, Ce = y.__b, $e = y.__r, Ae = y.diffed, Pe = y.__c, Se = y.unmount, Ee = y.__;
  function Xe(e, t) {
    y.__h && y.__h(v, e, ne || t), ne = 0;
    var n = v.__H || (v.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function Ye(e) {
    return ne = 1, et(Ne, e);
  }
  function et(e, t, n) {
    var _ = Xe(ee++, 2);
    if (_.t = e, !_.__c && (_.__ = [n ? n(t) : Ne(void 0, t), function(s) {
      var a = _.__N ? _.__N[0] : _.__[0], c = _.t(a, s);
      a !== c && (_.__N = [c, _.__[1]], _.__c.setState({}));
    }], _.__c = v, !v.__f)) {
      var o = function(s, a, c) {
        if (!_.__c.__H)
          return !0;
        var p = _.__c.__H.__.filter(function(d) {
          return !!d.__c;
        });
        if (p.every(function(d) {
          return !d.__N;
        }))
          return !r || r.call(this, s, a, c);
        var i = _.__c.props !== s;
        return p.forEach(function(d) {
          if (d.__N) {
            var f = d.__[0];
            d.__ = d.__N, d.__N = void 0, f !== d.__[0] && (i = !0);
          }
        }), r && r.call(this, s, a, c) || i;
      };
      v.__f = !0;
      var r = v.shouldComponentUpdate, l = v.componentWillUpdate;
      v.componentWillUpdate = function(s, a, c) {
        if (this.__e) {
          var p = r;
          r = void 0, o(s, a, c), r = p;
        }
        l && l.call(this, s, a, c);
      }, v.shouldComponentUpdate = o;
    }
    return _.__N || _.__;
  }
  function tt() {
    for (var e; e = we.shift(); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(W), e.__H.__h.forEach(_e), e.__H.__h = [];
        } catch (t) {
          e.__H.__h = [], y.__e(t, e.__v);
        }
  }
  y.__b = function(e) {
    v = null, Ce && Ce(e);
  }, y.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ee && Ee(e, t);
  }, y.__r = function(e) {
    $e && $e(e), ee = 0;
    var t = (v = e.__c).__H;
    t && (te === v ? (t.__h = [], v.__h = [], t.__.forEach(function(n) {
      n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (t.__h.forEach(W), t.__h.forEach(_e), t.__h = [], ee = 0)), te = v;
  }, y.diffed = function(e) {
    Ae && Ae(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (we.push(t) !== 1 && ke === y.requestAnimationFrame || ((ke = y.requestAnimationFrame) || nt)(tt)), t.__H.__.forEach(function(n) {
      n.u && (n.__H = n.u), n.u = void 0;
    })), te = v = null;
  }, y.__c = function(e, t) {
    t.some(function(n) {
      try {
        n.__h.forEach(W), n.__h = n.__h.filter(function(_) {
          return !_.__ || _e(_);
        });
      } catch (_) {
        t.some(function(o) {
          o.__h && (o.__h = []);
        }), t = [], y.__e(_, n.__v);
      }
    }), Pe && Pe(e, t);
  }, y.unmount = function(e) {
    Se && Se(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function(_) {
      try {
        W(_);
      } catch (o) {
        t = o;
      }
    }), n.__H = void 0, t && y.__e(t, n.__v));
  };
  var xe = typeof requestAnimationFrame == "function";
  function nt(e) {
    var t, n = function() {
      clearTimeout(_), xe && cancelAnimationFrame(t), setTimeout(e);
    }, _ = setTimeout(n, 35);
    xe && (t = requestAnimationFrame(n));
  }
  function W(e) {
    var t = v, n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), v = t;
  }
  function _e(e) {
    var t = v;
    e.__c = e.__(), v = t;
  }
  function Ne(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function _t(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function Ie(e, t) {
    for (var n in e)
      if (n !== "__source" && !(n in t))
        return !0;
    for (var _ in t)
      if (_ !== "__source" && e[_] !== t[_])
        return !0;
    return !1;
  }
  function Me(e, t) {
    this.props = e, this.context = t;
  }
  (Me.prototype = new P()).isPureReactComponent = !0, Me.prototype.shouldComponentUpdate = function(e, t) {
    return Ie(this.props, e) || Ie(this.state, t);
  };
  var He = u.__b;
  u.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), He && He(e);
  };
  var ot = u.__e;
  u.__e = function(e, t, n, _) {
    if (e.then) {
      for (var o, r = t; r = r.__; )
        if ((o = r.__c) && o.__c)
          return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
    }
    ot(e, t, n, _);
  };
  var Be = u.unmount;
  function De(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(_) {
      typeof _.__c == "function" && _.__c();
    }), e.__c.__H = null), (e = _t({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(_) {
      return De(_, t, n);
    })), e;
  }
  function Ue(e, t, n) {
    return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(_) {
      return Ue(_, t, n);
    }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
  }
  function oe() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Te(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function z() {
    this.i = null, this.l = null;
  }
  u.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Be && Be(e);
  }, (oe.prototype = new P()).__c = function(e, t) {
    var n = t.__c, _ = this;
    _.o == null && (_.o = []), _.o.push(n);
    var o = Te(_.__v), r = !1, l = function() {
      r || (r = !0, n.__R = null, o ? o(s) : s());
    };
    n.__R = l;
    var s = function() {
      if (!--_.__u) {
        if (_.state.__a) {
          var a = _.state.__a;
          _.__v.__k[0] = Ue(a, a.__c.__P, a.__c.__O);
        }
        var c;
        for (_.setState({ __a: _.__b = null }); c = _.o.pop(); )
          c.forceUpdate();
      }
    };
    _.__u++ || 32 & t.__u || _.setState({ __a: _.__b = _.__v.__k[0] }), e.then(l, l);
  }, oe.prototype.componentWillUnmount = function() {
    this.o = [];
  }, oe.prototype.render = function(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), _ = this.__v.__k[0].__c;
        this.__v.__k[0] = De(this.__b, n, _.__O = _.__P);
      }
      this.__b = null;
    }
    var o = t.__a && K(N, null, e.fallback);
    return o && (o.__u &= -33), [K(N, null, t.__a ? null : e.children), o];
  };
  var Le = function(e, t, n) {
    if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
      for (n = e.i; n; ) {
        for (; n.length > 3; )
          n.pop()();
        if (n[1] < n[0])
          break;
        e.i = n = n[2];
      }
  };
  (z.prototype = new P()).__a = function(e) {
    var t = this, n = Te(t.__v), _ = t.l.get(e);
    return _[0]++, function(o) {
      var r = function() {
        t.props.revealOrder ? (_.push(o), Le(t, e, _)) : o();
      };
      n ? n(r) : r();
    };
  }, z.prototype.render = function(e) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t = O(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; )
      this.l.set(t[n], this.i = [1, 0, this.i]);
    return e.children;
  }, z.prototype.componentDidUpdate = z.prototype.componentDidMount = function() {
    var e = this;
    this.l.forEach(function(t, n) {
      Le(e, n, t);
    });
  };
  var rt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, it = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, lt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ct = /[A-Z0-9]/g, st = typeof document < "u", at = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  function Re(e, t, n) {
    return t.__k == null && (t.textContent = ""), Ke(e, t), typeof n == "function" && n(), e ? e.__c : null;
  }
  P.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(P.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(t) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
    } });
  });
  var Oe = u.event;
  function ut() {
  }
  function ft() {
    return this.cancelBubble;
  }
  function pt() {
    return this.defaultPrevented;
  }
  u.event = function(e) {
    return Oe && (e = Oe(e)), e.persist = ut, e.isPropagationStopped = ft, e.isDefaultPrevented = pt, e.nativeEvent = e;
  };
  var dt = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, Fe = u.vnode;
  u.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var n = t.props, _ = t.type, o = {}, r = _.indexOf("-") === -1;
      for (var l in n) {
        var s = n[l];
        if (!(l === "value" && "defaultValue" in n && s == null || st && l === "children" && _ === "noscript" || l === "class" || l === "className")) {
          var a = l.toLowerCase();
          l === "defaultValue" && "value" in n && n.value == null ? l = "value" : l === "download" && s === !0 ? s = "" : a === "translate" && s === "no" ? s = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? l = "ondblclick" : a !== "onchange" || _ !== "input" && _ !== "textarea" || at(n.type) ? a === "onfocus" ? l = "onfocusin" : a === "onblur" ? l = "onfocusout" : lt.test(l) && (l = a) : a = l = "oninput" : r && it.test(l) ? l = l.replace(ct, "-$&").toLowerCase() : s === null && (s = void 0), a === "oninput" && o[l = a] && (l = "oninputCapture"), o[l] = s;
        }
      }
      _ == "select" && o.multiple && Array.isArray(o.value) && (o.value = O(n.children).forEach(function(c) {
        c.props.selected = o.value.indexOf(c.props.value) != -1;
      })), _ == "select" && o.defaultValue != null && (o.value = O(n.children).forEach(function(c) {
        c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
      })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", dt)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
    }(e), e.$$typeof = rt, Fe && Fe(e);
  };
  var We = u.__r;
  u.__r = function(e) {
    We && We(e), e.__c;
  };
  var ze = u.diffed;
  u.diffed = function(e) {
    ze && ze(e);
    var t = e.props, n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
  };
  function mt() {
    Ye(0);
    const e = window.Blinko.i18n;
    return /* @__PURE__ */ b(N, { children: [
      /* @__PURE__ */ b("h1", { children: e.t("title") }),
      /* @__PURE__ */ b("div", { class: "card", children: [
        /* @__PURE__ */ b("p", { children: "AI评论插件已安装并启用" }),
        /* @__PURE__ */ b("p", { children: "右键点击任意闪念即可使用AI评论功能" })
      ] })
    ] });
  }
  function ht() {
    const e = window.Blinko.i18n;
    return /* @__PURE__ */ b("div", { className: "max-w-2xl mx-auto p-2 rounded-lg", children: [
      /* @__PURE__ */ b("h2", { className: "text-lg font-semibold mb-4", children: e.t("title") }),
      /* @__PURE__ */ b("div", { className: "space-y-4", children: [
        /* @__PURE__ */ b("p", { children: e.t("pluginDescription") }),
        /* @__PURE__ */ b("div", { className: "bg-gray-100 p-3 rounded", children: [
          /* @__PURE__ */ b("h3", { className: "font-medium mb-2", children: "使用说明" }),
          /* @__PURE__ */ b("ul", { className: "list-disc list-inside space-y-1 text-sm", children: [
            /* @__PURE__ */ b("li", { children: "右键点击任意闪念" }),
            /* @__PURE__ */ b("li", { children: '选择"AI评论"选项' }),
            /* @__PURE__ */ b("li", { children: "等待AI生成评论" })
          ] })
        ] })
      ] })
    ] });
  }
  const vt = {
    name: "ai-comment",
    author: "blinko-offical",
    url: "https://github.com/blinko-space/blinko-plugin-template",
    version: "0.0.4",
    minAppVersion: "0.0.0",
    displayName: {
      default: "AI Comment",
      zh: "AI评论"
    },
    description: {
      default: "Add AI comment to individual notes from right-click menu",
      zh: "从右键菜单为单个闪念添加AI评论"
    },
    readme: {
      default: "README.md",
      zh: "README_zh.md"
    }
  }, yt = {
    title: "AI Comment",
    countLabel: "Count is {{count}}",
    successMessage: "Success!",
    aiCommentMenu: "AI Comment",
    aiCommentProcessing: "Processing AI comment...",
    aiCommentSuccess: "AI comment added successfully!",
    aiCommentError: "Failed to add AI comment.",
    pluginDescription: "Add AI comments to individual notes from right-click menu. This plugin utilizes Blinko's AI capabilities to generate intelligent comments based on note content."
  }, gt = {
    title: "AI评论",
    countLabel: "计数为 {{count}}",
    successMessage: "成功！",
    aiCommentMenu: "AI评论",
    aiCommentProcessing: "正在生成AI评论...",
    aiCommentSuccess: "AI评论添加成功！",
    aiCommentError: "添加AI评论失败。",
    pluginDescription: "从右键菜单为单个闪念添加AI评论。此插件利用Blinko的AI功能，根据闪念内容生成智能评论。"
  };
  System.register([], (e) => ({
    execute: () => {
      e("default", class {
        constructor() {
          // Flag indicating this plugin has a settings panel
          ie(this, "withSettingPanel", !0);
          /**
           * Renders the settings panel UI
           * @returns {HTMLElement} Container element with rendered settings component
           */
          ie(this, "renderSettingPanel", () => {
            const n = document.createElement("div");
            return Re(/* @__PURE__ */ b(ht, {}), n), n;
          });
          Object.assign(this, vt);
        }
        /**
         * Initializes the plugin
         * Sets up toolbar icons, right-click menus, and AI write prompts
         */
        async init() {
          this.initI18n(), window.Blinko.addToolBarIcon({
            name: "test",
            icon: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-file'><path d='M13 3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'/><polyline points='14 3 14 9 19 9'/></svg>",
            placement: "top",
            tooltip: "testtootip",
            content: () => {
              const n = document.createElement("div");
              return n.setAttribute("data-plugin", "my-note-plugin"), Re(/* @__PURE__ */ b(mt, {}), n), n;
            }
          }), window.Blinko.addRightClickMenu({
            name: "ai-comment",
            label: window.Blinko.i18n.t("aiCommentMenu"),
            icon: "material-symbols:comment",
            onClick: async (n) => {
              try {
                const { toast: _, api: o, i18n: r } = window.Blinko, l = _.loading(r.t("aiCommentProcessing"));
                await o.ai.AIComment.mutate({
                  content: n.content,
                  noteId: n.id
                }), _.dismiss(l), _.success(r.t("aiCommentSuccess")), window.Blinko.globalRefresh();
              } catch (_) {
                console.error("Error adding AI comment:", _), window.Blinko.toast.dismiss(), window.Blinko.toast.error(window.Blinko.i18n.t("aiCommentError"));
              }
            }
          }), window.Blinko.addAiWritePrompt(
            "Translate Content",
            "Please translate the following content into English:",
            "material-symbols:translate"
          );
        }
        /**
         * Initializes internationalization resources
         * Adds English and Chinese translation bundles
         */
        initI18n() {
          window.Blinko.i18n.addResourceBundle("en", "translation", yt), window.Blinko.i18n.addResourceBundle("zh", "translation", gt);
        }
        /**
         * Cleanup function called when plugin is disabled
         */
        destroy() {
          console.log("Plugin destroyed");
        }
      });
    }
  }));
})();
