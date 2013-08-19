/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
!function (e, t) {
    function n(e) {
        var t = e.length, n = ut.type(e);
        return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e) {
        var t = Ct[e] = {};
        return ut.each(e.match(ct) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (ut.acceptData(e)) {
            var a, o, s = ut.expando, u = "string" == typeof n, l = e.nodeType, c = l ? ut.cache : e, d = l ? e[s] : e[s] && s;
            if (d && c[d] && (i || c[d].data) || !u || r !== t)return d || (l ? e[s] = d = Z.pop() || ut.guid++ : d = s), c[d] || (c[d] = {}, l || (c[d].toJSON = ut.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[d] = ut.extend(c[d], n) : c[d].data = ut.extend(c[d].data, n)), a = c[d], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ut.camelCase(n)] = r), u ? (o = a[n], null == o && (o = a[ut.camelCase(n)])) : o = a, o
        }
    }

    function a(e, t, n) {
        if (ut.acceptData(e)) {
            var r, i, a, o = e.nodeType, u = o ? ut.cache : e, l = o ? e[ut.expando] : ut.expando;
            if (u[l]) {
                if (t && (a = n ? u[l] : u[l].data)) {
                    ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in a ? t = [t] : (t = ut.camelCase(t), t = t in a ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++)delete a[t[r]];
                    if (!(n ? s : ut.isEmptyObject)(a))return
                }
                (n || (delete u[l].data, s(u[l]))) && (o ? ut.cleanData([e], !0) : ut.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }

    function o(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(kt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Tt.test(r) ? ut.parseJSON(r) : r
                } catch (a) {
                }
                ut.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e)if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t)return!1;
        return!0
    }

    function u() {
        return!0
    }

    function l() {
        return!1
    }

    function c(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function d(e, t, n) {
        if (t = t || 0, ut.isFunction(t))return ut.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType)return ut.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = ut.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (zt.test(t))return ut.filter(t, r, !n);
            t = ut.filter(t, r)
        }
        return ut.grep(e, function (e) {
            return ut.inArray(e, t) >= 0 === n
        })
    }

    function f(e) {
        var t = Vt.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    function p(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function m(e) {
        var t = an.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"))
    }

    function v(e, t) {
        if (1 === t.nodeType && ut.hasData(e)) {
            var n, r, i, a = ut._data(e), o = ut._data(t, a), s = a.events;
            if (s) {
                delete o.handle, o.events = {};
                for (n in s)for (r = 0, i = s[n].length; i > r; r++)ut.event.add(t, n, s[n][r])
            }
            o.data && (o.data = ut.extend({}, o.data))
        }
    }

    function y(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                i = ut._data(t);
                for (r in i.events)ut.removeEvent(t, r, i.handle);
                t.removeAttribute(ut.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, n) {
        var r, i, a = 0, o = typeof e.getElementsByTagName !== U ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== U ? e.querySelectorAll(n || "*") : t;
        if (!o)for (o = [], r = e.childNodes || e; null != (i = r[a]); a++)!n || ut.nodeName(i, n) ? o.push(i) : ut.merge(o, b(i, n));
        return n === t || n && ut.nodeName(e, n) ? ut.merge([e], o) : o
    }

    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }

    function F(e, t) {
        if (t in e)return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = kn.length; i--;)if (t = kn[i] + n, t in e)return t;
        return r
    }

    function w(e, t) {
        return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
    }

    function C(e, t) {
        for (var n, r, i, a = [], o = 0, s = e.length; s > o; o++)r = e[o], r.style && (a[o] = ut._data(r, "olddisplay"), n = r.style.display, t ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && w(r) && (a[o] = ut._data(r, "olddisplay", N(r.nodeName)))) : a[o] || (i = w(r), (n && "none" !== n || !i) && ut._data(r, "olddisplay", i ? n : ut.css(r, "display"))));
        for (o = 0; s > o; o++)r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "" : "none"));
        return e
    }

    function T(e, t, n) {
        var r = yn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2)"margin" === n && (o += ut.css(e, n + Tn[a], !0, i)), r ? ("content" === n && (o -= ut.css(e, "padding" + Tn[a], !0, i)), "margin" !== n && (o -= ut.css(e, "border" + Tn[a] + "Width", !0, i))) : (o += ut.css(e, "padding" + Tn[a], !0, i), "padding" !== n && (o += ut.css(e, "border" + Tn[a] + "Width", !0, i)));
        return o
    }

    function E(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, a = dn(e), o = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, a);
        if (0 >= i || null == i) {
            if (i = fn(e, t, a), (0 > i || null == i) && (i = e.style[t]), bn.test(i))return i;
            r = o && (ut.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (o ? "border" : "content"), r, a) + "px"
    }

    function N(e) {
        var t = Q, n = Fn[e];
        return n || (n = S(e, t), "none" !== n && n || (cn = (cn || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = S(e, t), cn.detach()), Fn[e] = n), n
    }

    function S(e, t) {
        var n = ut(t.createElement(e)).appendTo(t.body), r = ut.css(n[0], "display");
        return n.remove(), r
    }

    function D(e, t, n, r) {
        var i;
        if (ut.isArray(t))ut.each(t, function (t, i) {
            n || Nn.test(e) ? r(e, i) : D(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== ut.type(t))r(e, t); else for (i in t)D(e + "[" + i + "]", t[i], n, r)
    }

    function A(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, a = t.toLowerCase().match(ct) || [];
            if (ut.isFunction(n))for (; r = a[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function j(e, t, n, r) {
        function i(s) {
            var u;
            return a[s] = !0, ut.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return"string" != typeof l || o || a[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var a = {}, o = e === Wn;
        return i(t.dataTypes[0]) || !a["*"] && i("*")
    }

    function L(e, n) {
        var r, i, a = ut.ajaxSettings.flatOptions || {};
        for (i in n)n[i] !== t && ((a[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ut.extend(!0, e, r), e
    }

    function q(e, n, r) {
        var i, a, o, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
        for (s in c)s in r && (n[c[s]] = r[s]);
        for (; "*" === l[0];)l.shift(), a === t && (a = e.mimeType || n.getResponseHeader("Content-Type"));
        if (a)for (s in u)if (u[s] && u[s].test(a)) {
            l.unshift(s);
            break
        }
        if (l[0]in r)o = l[0]; else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), r[o]) : void 0
    }

    function H(e, t) {
        var n, r, i, a, o = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])for (i in e.converters)o[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];)if ("*" !== r) {
            if ("*" !== l && l !== r) {
                if (i = o[l + " " + r] || o["* " + r], !i)for (n in o)if (a = n.split(" "), a[1] === r && (i = o[l + " " + a[0]] || o["* " + a[0]])) {
                    i === !0 ? i = o[n] : o[n] !== !0 && (r = a[0], u.splice(s--, 0, r));
                    break
                }
                if (i !== !0)if (i && e["throws"])t = i(t); else try {
                    t = i(t)
                } catch (c) {
                    return{state: "parsererror", error: i ? c : "No conversion from " + l + " to " + r}
                }
            }
            l = r
        }
        return{state: "success", data: t}
    }

    function $() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function _() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function R() {
        return setTimeout(function () {
            Zn = t
        }), Zn = ut.now()
    }

    function P(e, t) {
        ut.each(t, function (t, n) {
            for (var r = (ar[t] || []).concat(ar["*"]), i = 0, a = r.length; a > i; i++)if (r[i].call(e, t, n))return
        })
    }

    function M(e, t, n) {
        var r, i, a = 0, o = ir.length, s = ut.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i)return!1;
            for (var t = Zn || R(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, a = 1 - r, o = 0, u = l.tweens.length; u > o; o++)l.tweens[o].run(a);
            return s.notifyWith(e, [l, a, n]), 1 > a && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({elem: e, props: ut.extend({}, t), opts: ut.extend(!0, {specialEasing: {}}, n), originalProperties: t, originalOptions: n, startTime: Zn || R(), duration: n.duration, tweens: [], createTween: function (t, n) {
            var r = ut.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
            return l.tweens.push(r), r
        }, stop: function (t) {
            var n = 0, r = t ? l.tweens.length : 0;
            if (i)return this;
            for (i = !0; r > n; n++)l.tweens[n].run(1);
            return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
        }}), c = l.props;
        for (O(c, l.opts.specialEasing); o > a; a++)if (r = ir[a].call(l, e, c, l.opts))return r;
        return P(l, c), ut.isFunction(l.opts.start) && l.opts.start.call(e, l), ut.fx.timer(ut.extend(u, {elem: e, anim: l, queue: l.opts.queue})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function O(e, t) {
        var n, r, i, a, o;
        for (i in e)if (r = ut.camelCase(i), a = t[r], n = e[i], ut.isArray(n) && (a = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), o = ut.cssHooks[r], o && "expand"in o) {
            n = o.expand(n), delete e[r];
            for (i in n)i in e || (e[i] = n[i], t[i] = a)
        } else t[r] = a
    }

    function B(e, t, n) {
        var r, i, a, o, s, u, l, c, d, f = this, p = e.style, h = {}, m = [], g = e.nodeType && w(e);
        n.queue || (c = ut._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, d = c.empty.fire, c.empty.fire = function () {
            c.unqueued || d()
        }), c.unqueued++, f.always(function () {
            f.always(function () {
                c.unqueued--, ut.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ut.support.shrinkWrapBlocks || f.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)if (o = t[i], tr.exec(o)) {
            if (delete t[i], u = u || "toggle" === o, o === (g ? "hide" : "show"))continue;
            m.push(i)
        }
        if (a = m.length) {
            s = ut._data(e, "fxshow") || ut._data(e, "fxshow", {}), "hidden"in s && (g = s.hidden), u && (s.hidden = !g), g ? ut(e).show() : f.done(function () {
                ut(e).hide()
            }), f.done(function () {
                var t;
                ut._removeData(e, "fxshow");
                for (t in h)ut.style(e, t, h[t])
            });
            for (i = 0; a > i; i++)r = m[i], l = f.createTween(r, g ? s[r] : 0), h[r] = s[r] || ut.style(e, r), r in s || (s[r] = l.start, g && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function I(e, t, n, r, i) {
        return new I.prototype.init(e, t, n, r, i)
    }

    function z(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Tn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function W(e) {
        return ut.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var X, V, U = typeof t, Q = e.document, Y = e.location, G = e.jQuery, J = e.$, K = {}, Z = [], et = "1.9.1", tt = Z.concat, nt = Z.push, rt = Z.slice, it = Z.indexOf, at = K.toString, ot = K.hasOwnProperty, st = et.trim, ut = function (e, t) {
        return new ut.fn.init(e, t, V)
    }, lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ct = /\S+/g, dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ft = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ht = /^[\],:{}\s]*$/, mt = /(?:^|:|,)(?:\s*\[)+/g, gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, yt = /^-ms-/, bt = /-([\da-z])/gi, xt = function (e, t) {
        return t.toUpperCase()
    }, Ft = function (e) {
        (Q.addEventListener || "load" === e.type || "complete" === Q.readyState) && (wt(), ut.ready())
    }, wt = function () {
        Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", Ft, !1), e.removeEventListener("load", Ft, !1)) : (Q.detachEvent("onreadystatechange", Ft), e.detachEvent("onload", Ft))
    };
    ut.fn = ut.prototype = {jquery: et, constructor: ut, init: function (e, n, r) {
        var i, a;
        if (!e)return this;
        if ("string" == typeof e) {
            if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !i || !i[1] && n)return!n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
            if (i[1]) {
                if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : Q, !0)), pt.test(i[1]) && ut.isPlainObject(n))for (i in n)ut.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                return this
            }
            if (a = Q.getElementById(i[2]), a && a.parentNode) {
                if (a.id !== i[2])return r.find(e);
                this.length = 1, this[0] = a
            }
            return this.context = Q, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
    }, selector: "", length: 0, size: function () {
        return this.length
    }, toArray: function () {
        return rt.call(this)
    }, get: function (e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    }, pushStack: function (e) {
        var t = ut.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
        return ut.each(this, e, t)
    }, ready: function (e) {
        return ut.ready.promise().done(e), this
    }, slice: function () {
        return this.pushStack(rt.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (e) {
        var t = this.length, n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, map: function (e) {
        return this.pushStack(ut.map(this, function (t, n) {
            return e.call(t, n, t)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: nt, sort: [].sort, splice: [].splice}, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function () {
        var e, n, r, i, a, o, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)if (null != (a = arguments[u]))for (i in a)e = s[i], r = a[i], s !== r && (c && r && (ut.isPlainObject(r) || (n = ut.isArray(r))) ? (n ? (n = !1, o = e && ut.isArray(e) ? e : []) : o = e && ut.isPlainObject(e) ? e : {}, s[i] = ut.extend(c, o, r)) : r !== t && (s[i] = r));
        return s
    }, ut.extend({noConflict: function (t) {
        return e.$ === ut && (e.$ = J), t && e.jQuery === ut && (e.jQuery = G), ut
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? ut.readyWait++ : ut.ready(!0)
    }, ready: function (e) {
        if (e === !0 ? !--ut.readyWait : !ut.isReady) {
            if (!Q.body)return setTimeout(ut.ready);
            ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (X.resolveWith(Q, [ut]), ut.fn.trigger && ut(Q).trigger("ready").off("ready"))
        }
    }, isFunction: function (e) {
        return"function" === ut.type(e)
    }, isArray: Array.isArray || function (e) {
        return"array" === ut.type(e)
    }, isWindow: function (e) {
        return null != e && e == e.window
    }, isNumeric: function (e) {
        return!isNaN(parseFloat(e)) && isFinite(e)
    }, type: function (e) {
        return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? K[at.call(e)] || "object" : typeof e
    }, isPlainObject: function (e) {
        if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e))return!1;
        try {
            if (e.constructor && !ot.call(e, "constructor") && !ot.call(e.constructor.prototype, "isPrototypeOf"))return!1
        } catch (n) {
            return!1
        }
        var r;
        for (r in e);
        return r === t || ot.call(e, r)
    }, isEmptyObject: function (e) {
        var t;
        for (t in e)return!1;
        return!0
    }, error: function (e) {
        throw new Error(e)
    }, parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Q;
        var r = pt.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ut.buildFragment([e], t, i), i && ut(i).remove(), ut.merge([], r.childNodes))
    }, parseJSON: function (t) {
        return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ut.trim(t), t && ht.test(t.replace(gt, "@").replace(vt, "]").replace(mt, ""))) ? new Function("return " + t)() : (ut.error("Invalid JSON: " + t), void 0)
    }, parseXML: function (n) {
        var r, i;
        if (!n || "string" != typeof n)return null;
        try {
            e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
        } catch (a) {
            r = t
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), r
    }, noop: function () {
    }, globalEval: function (t) {
        t && ut.trim(t) && (e.execScript || function (t) {
            e.eval.call(e, t)
        })(t)
    }, camelCase: function (e) {
        return e.replace(yt, "ms-").replace(bt, xt)
    }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, r) {
        var i, a = 0, o = e.length, s = n(e);
        if (r) {
            if (s)for (; o > a && (i = t.apply(e[a], r), i !== !1); a++); else for (a in e)if (i = t.apply(e[a], r), i === !1)break
        } else if (s)for (; o > a && (i = t.call(e[a], a, e[a]), i !== !1); a++); else for (a in e)if (i = t.call(e[a], a, e[a]), i === !1)break;
        return e
    }, trim: st && !st.call("﻿ ") ? function (e) {
        return null == e ? "" : st.call(e)
    } : function (e) {
        return null == e ? "" : (e + "").replace(dt, "")
    }, makeArray: function (e, t) {
        var r = t || [];
        return null != e && (n(Object(e)) ? ut.merge(r, "string" == typeof e ? [e] : e) : nt.call(r, e)), r
    }, inArray: function (e, t, n) {
        var r;
        if (t) {
            if (it)return it.call(t, e, n);
            for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
        }
        return-1
    }, merge: function (e, n) {
        var r = n.length, i = e.length, a = 0;
        if ("number" == typeof r)for (; r > a; a++)e[i++] = n[a]; else for (; n[a] !== t;)e[i++] = n[a++];
        return e.length = i, e
    }, grep: function (e, t, n) {
        var r, i = [], a = 0, o = e.length;
        for (n = !!n; o > a; a++)r = !!t(e[a], a), n !== r && i.push(e[a]);
        return i
    }, map: function (e, t, r) {
        var i, a = 0, o = e.length, s = n(e), u = [];
        if (s)for (; o > a; a++)i = t(e[a], a, r), null != i && (u[u.length] = i); else for (a in e)i = t(e[a], a, r), null != i && (u[u.length] = i);
        return tt.apply([], u)
    }, guid: 1, proxy: function (e, n) {
        var r, i, a;
        return"string" == typeof n && (a = e[n], n = e, e = a), ut.isFunction(e) ? (r = rt.call(arguments, 2), i = function () {
            return e.apply(n || this, r.concat(rt.call(arguments)))
        }, i.guid = e.guid = e.guid || ut.guid++, i) : t
    }, access: function (e, n, r, i, a, o, s) {
        var u = 0, l = e.length, c = null == r;
        if ("object" === ut.type(r)) {
            a = !0;
            for (u in r)ut.access(e, n, u, r[u], !0, o, s)
        } else if (i !== t && (a = !0, ut.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
            return c.call(ut(e), n)
        })), n))for (; l > u; u++)n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
        return a ? e : c ? n.call(e) : l ? n(e[0], r) : o
    }, now: function () {
        return(new Date).getTime()
    }}), ut.ready.promise = function (t) {
        if (!X)if (X = ut.Deferred(), "complete" === Q.readyState)setTimeout(ut.ready); else if (Q.addEventListener)Q.addEventListener("DOMContentLoaded", Ft, !1), e.addEventListener("load", Ft, !1); else {
            Q.attachEvent("onreadystatechange", Ft), e.attachEvent("onload", Ft);
            var n = !1;
            try {
                n = null == e.frameElement && Q.documentElement
            } catch (r) {
            }
            n && n.doScroll && function i() {
                if (!ut.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    wt(), ut.ready()
                }
            }()
        }
        return X.promise(t)
    }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    }), V = ut(Q);
    var Ct = {};
    ut.Callbacks = function (e) {
        e = "string" == typeof e ? Ct[e] || r(e) : ut.extend({}, e);
        var n, i, a, o, s, u, l = [], c = !e.once && [], d = function (t) {
            for (i = e.memory && t, a = !0, s = u || 0, u = 0, o = l.length, n = !0; l && o > s; s++)if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            n = !1, l && (c ? c.length && d(c.shift()) : i ? l = [] : f.disable())
        }, f = {add: function () {
            if (l) {
                var t = l.length;
                !function r(t) {
                    ut.each(t, function (t, n) {
                        var i = ut.type(n);
                        "function" === i ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                    })
                }(arguments), n ? o = l.length : i && (u = t, d(i))
            }
            return this
        }, remove: function () {
            return l && ut.each(arguments, function (e, t) {
                for (var r; (r = ut.inArray(t, l, r)) > -1;)l.splice(r, 1), n && (o >= r && o--, s >= r && s--)
            }), this
        }, has: function (e) {
            return e ? ut.inArray(e, l) > -1 : !(!l || !l.length)
        }, empty: function () {
            return l = [], this
        }, disable: function () {
            return l = c = i = t, this
        }, disabled: function () {
            return!l
        }, lock: function () {
            return c = t, i || f.disable(), this
        }, locked: function () {
            return!c
        }, fireWith: function (e, t) {
            return t = t || [], t = [e, t.slice ? t.slice() : t], !l || a && !c || (n ? c.push(t) : d(t)), this
        }, fire: function () {
            return f.fireWith(this, arguments), this
        }, fired: function () {
            return!!a
        }};
        return f
    }, ut.extend({Deferred: function (e) {
        var t = [
            ["resolve", "done", ut.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ut.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ut.Callbacks("memory")]
        ], n = "pending", r = {state: function () {
            return n
        }, always: function () {
            return i.done(arguments).fail(arguments), this
        }, then: function () {
            var e = arguments;
            return ut.Deferred(function (n) {
                ut.each(t, function (t, a) {
                    var o = a[0], s = ut.isFunction(e[t]) && e[t];
                    i[a[1]](function () {
                        var e = s && s.apply(this, arguments);
                        e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                    })
                }), e = null
            }).promise()
        }, promise: function (e) {
            return null != e ? ut.extend(e, r) : r
        }}, i = {};
        return r.pipe = r.then, ut.each(t, function (e, a) {
            var o = a[2], s = a[3];
            r[a[1]] = o.add, s && o.add(function () {
                n = s
            }, t[1 ^ e][2].disable, t[2][2].lock), i[a[0]] = function () {
                return i[a[0] + "With"](this === i ? r : this, arguments), this
            }, i[a[0] + "With"] = o.fireWith
        }), r.promise(i), e && e.call(i, i), i
    }, when: function (e) {
        var t, n, r, i = 0, a = rt.call(arguments), o = a.length, s = 1 !== o || e && ut.isFunction(e.promise) ? o : 0, u = 1 === s ? e : ut.Deferred(), l = function (e, n, r) {
            return function (i) {
                n[e] = this, r[e] = arguments.length > 1 ? rt.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
            }
        };
        if (o > 1)for (t = new Array(o), n = new Array(o), r = new Array(o); o > i; i++)a[i] && ut.isFunction(a[i].promise) ? a[i].promise().done(l(i, r, a)).fail(u.reject).progress(l(i, n, t)) : --s;
        return s || u.resolveWith(r, a), u.promise()
    }}), ut.support = function () {
        var t, n, r, i, a, o, s, u, l, c, d = Q.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length)return{};
        a = Q.createElement("select"), s = a.appendChild(Q.createElement("option")), i = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {getSetAttribute: "t" !== d.className, leadingWhitespace: 3 === d.firstChild.nodeType, tbody: !d.getElementsByTagName("tbody").length, htmlSerialize: !!d.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: "/a" === r.getAttribute("href"), opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: !!i.value, optSelected: s.selected, enctype: !!Q.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === Q.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1}, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, a.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete d.test
        } catch (f) {
            t.deleteExpando = !1
        }
        i = Q.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), o = Q.createDocumentFragment(), o.appendChild(i), t.appendChecked = i.checked, t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (c in{submit: !0, change: !0, focusin: !0})d.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || d.attributes[u].expando === !1;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, ut(function () {
            var n, r, i, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", o = Q.getElementsByTagName("body")[0];
            o && (n = Q.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = d.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(Q.createElement("div")), r.style.cssText = d.style.cssText = a, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== U && (d.innerHTML = "", d.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(n), n = d = i = r = null)
        }), n = a = o = s = r = i = null, t
    }();
    var Tt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, kt = /([A-Z])/g;
    ut.extend({cache: {}, expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (e) {
        return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !!e && !s(e)
    }, data: function (e, t, n) {
        return i(e, t, n)
    }, removeData: function (e, t) {
        return a(e, t)
    }, _data: function (e, t, n) {
        return i(e, t, n, !0)
    }, _removeData: function (e, t) {
        return a(e, t, !0)
    }, acceptData: function (e) {
        if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return!1;
        var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
        return!t || t !== !0 && e.getAttribute("classid") === t
    }}), ut.fn.extend({data: function (e, n) {
        var r, i, a = this[0], s = 0, u = null;
        if (e === t) {
            if (this.length && (u = ut.data(a), 1 === a.nodeType && !ut._data(a, "parsedAttrs"))) {
                for (r = a.attributes; s < r.length; s++)i = r[s].name, i.indexOf("data-") || (i = ut.camelCase(i.slice(5)), o(a, i, u[i]));
                ut._data(a, "parsedAttrs", !0)
            }
            return u
        }
        return"object" == typeof e ? this.each(function () {
            ut.data(this, e)
        }) : ut.access(this, function (n) {
            return n === t ? a ? o(a, e, ut.data(a, e)) : null : (this.each(function () {
                ut.data(this, e, n)
            }), void 0)
        }, null, n, arguments.length > 1, null, !0)
    }, removeData: function (e) {
        return this.each(function () {
            ut.removeData(this, e)
        })
    }}), ut.extend({queue: function (e, t, n) {
        var r;
        return e ? (t = (t || "fx") + "queue", r = ut._data(e, t), n && (!r || ut.isArray(n) ? r = ut._data(e, t, ut.makeArray(n)) : r.push(n)), r || []) : void 0
    }, dequeue: function (e, t) {
        t = t || "fx";
        var n = ut.queue(e, t), r = n.length, i = n.shift(), a = ut._queueHooks(e, t), o = function () {
            ut.dequeue(e, t)
        };
        "inprogress" === i && (i = n.shift(), r--), a.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)), !r && a && a.empty.fire()
    }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return ut._data(e, n) || ut._data(e, n, {empty: ut.Callbacks("once memory").add(function () {
            ut._removeData(e, t + "queue"), ut._removeData(e, n)
        })})
    }}), ut.fn.extend({queue: function (e, n) {
        var r = 2;
        return"string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ut.queue(this[0], e) : n === t ? this : this.each(function () {
            var t = ut.queue(this, e, n);
            ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
        })
    }, dequeue: function (e) {
        return this.each(function () {
            ut.dequeue(this, e)
        })
    }, delay: function (e, t) {
        return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
    }, promise: function (e, n) {
        var r, i = 1, a = ut.Deferred(), o = this, s = this.length, u = function () {
            --i || a.resolveWith(o, [o])
        };
        for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)r = ut._data(o[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
        return u(), a.promise(n)
    }});
    var Et, Nt, St = /[\t\r\n]/g, Dt = /\r/g, At = /^(?:input|select|textarea|button|object)$/i, jt = /^(?:a|area)$/i, Lt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, qt = /^(?:checked|selected)$/i, Ht = ut.support.getSetAttribute, $t = ut.support.input;
    ut.fn.extend({attr: function (e, t) {
        return ut.access(this, ut.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
        return this.each(function () {
            ut.removeAttr(this, e)
        })
    }, prop: function (e, t) {
        return ut.access(this, ut.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
        return e = ut.propFix[e] || e, this.each(function () {
            try {
                this[e] = t, delete this[e]
            } catch (n) {
            }
        })
    }, addClass: function (e) {
        var t, n, r, i, a, o = 0, s = this.length, u = "string" == typeof e && e;
        if (ut.isFunction(e))return this.each(function (t) {
            ut(this).addClass(e.call(this, t, this.className))
        });
        if (u)for (t = (e || "").match(ct) || []; s > o; o++)if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : " ")) {
            for (a = 0; i = t[a++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            n.className = ut.trim(r)
        }
        return this
    }, removeClass: function (e) {
        var t, n, r, i, a, o = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
        if (ut.isFunction(e))return this.each(function (t) {
            ut(this).removeClass(e.call(this, t, this.className))
        });
        if (u)for (t = (e || "").match(ct) || []; s > o; o++)if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : "")) {
            for (a = 0; i = t[a++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
            n.className = e ? ut.trim(r) : ""
        }
        return this
    }, toggleClass: function (e, t) {
        var n = typeof e, r = "boolean" == typeof t;
        return ut.isFunction(e) ? this.each(function (n) {
            ut(this).toggleClass(e.call(this, n, this.className, t), t)
        }) : this.each(function () {
            if ("string" === n)for (var i, a = 0, o = ut(this), s = t, u = e.match(ct) || []; i = u[a++];)s = r ? s : !o.hasClass(i), o[s ? "addClass" : "removeClass"](i); else(n === U || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "")
        })
    }, hasClass: function (e) {
        for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(St, " ").indexOf(t) >= 0)return!0;
        return!1
    }, val: function (e) {
        var n, r, i, a = this[0];
        {
            if (arguments.length)return i = ut.isFunction(e), this.each(function (n) {
                var a, o = ut(this);
                1 === this.nodeType && (a = i ? e.call(this, n, o.val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : ut.isArray(a) && (a = ut.map(a, function (e) {
                    return null == e ? "" : e + ""
                })), r = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], r && "set"in r && r.set(this, a, "value") !== t || (this.value = a))
            });
            if (a)return r = ut.valHooks[a.type] || ut.valHooks[a.nodeName.toLowerCase()], r && "get"in r && (n = r.get(a, "value")) !== t ? n : (n = a.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)
        }
    }}), ut.extend({valHooks: {option: {get: function (e) {
        var t = e.attributes.value;
        return!t || t.specified ? e.value : e.text
    }}, select: {get: function (e) {
        for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || 0 > i, o = a ? null : [], s = a ? i + 1 : r.length, u = 0 > i ? s : a ? i : 0; s > u; u++)if (n = r[u], !(!n.selected && u !== i || (ut.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
            if (t = ut(n).val(), a)return t;
            o.push(t)
        }
        return o
    }, set: function (e, t) {
        var n = ut.makeArray(t);
        return ut(e).find("option").each(function () {
            this.selected = ut.inArray(ut(this).val(), n) >= 0
        }), n.length || (e.selectedIndex = -1), n
    }}}, attr: function (e, n, r) {
        var i, a, o, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return typeof e.getAttribute === U ? ut.prop(e, n, r) : (a = 1 !== s || !ut.isXMLDoc(e), a && (n = n.toLowerCase(), i = ut.attrHooks[n] || (Lt.test(n) ? Nt : Et)), r === t ? i && a && "get"in i && null !== (o = i.get(e, n)) ? o : (typeof e.getAttribute !== U && (o = e.getAttribute(n)), null == o ? t : o) : null !== r ? i && a && "set"in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ut.removeAttr(e, n), void 0))
    }, removeAttr: function (e, t) {
        var n, r, i = 0, a = t && t.match(ct);
        if (a && 1 === e.nodeType)for (; n = a[i++];)r = ut.propFix[n] || n, Lt.test(n) ? !Ht && qt.test(n) ? e[ut.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ut.attr(e, n, ""), e.removeAttribute(Ht ? n : r)
    }, attrHooks: {type: {set: function (e, t) {
        if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
        }
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (e, n, r) {
        var i, a, o, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return o = 1 !== s || !ut.isXMLDoc(e), o && (n = ut.propFix[n] || n, a = ut.propHooks[n]), r !== t ? a && "set"in a && (i = a.set(e, r, n)) !== t ? i : e[n] = r : a && "get"in a && null !== (i = a.get(e, n)) ? i : e[n]
    }, propHooks: {tabIndex: {get: function (e) {
        var n = e.getAttributeNode("tabindex");
        return n && n.specified ? parseInt(n.value, 10) : At.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : t
    }}}}), Nt = {get: function (e, n) {
        var r = ut.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), a = "boolean" == typeof r ? $t && Ht ? null != i : qt.test(n) ? e[ut.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
        return a && a.value !== !1 ? n.toLowerCase() : t
    }, set: function (e, t, n) {
        return t === !1 ? ut.removeAttr(e, n) : $t && Ht || !qt.test(n) ? e.setAttribute(!Ht && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0, n
    }}, $t && Ht || (ut.attrHooks.value = {get: function (e, n) {
        var r = e.getAttributeNode(n);
        return ut.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
    }, set: function (e, t, n) {
        return ut.nodeName(e, "input") ? (e.defaultValue = t, void 0) : Et && Et.set(e, t, n)
    }}), Ht || (Et = ut.valHooks.button = {get: function (e, n) {
        var r = e.getAttributeNode(n);
        return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
    }, set: function (e, n, r) {
        var i = e.getAttributeNode(r);
        return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
    }}, ut.attrHooks.contenteditable = {get: Et.get, set: function (e, t, n) {
        Et.set(e, "" === t ? !1 : t, n)
    }}, ut.each(["width", "height"], function (e, t) {
        ut.attrHooks[t] = ut.extend(ut.attrHooks[t], {set: function (e, n) {
            return"" === n ? (e.setAttribute(t, "auto"), n) : void 0
        }})
    })), ut.support.hrefNormalized || (ut.each(["href", "src", "width", "height"], function (e, n) {
        ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {get: function (e) {
            var r = e.getAttribute(n, 2);
            return null == r ? t : r
        }})
    }), ut.each(["href", "src"], function (e, t) {
        ut.propHooks[t] = {get: function (e) {
            return e.getAttribute(t, 4)
        }}
    })), ut.support.style || (ut.attrHooks.style = {get: function (e) {
        return e.style.cssText || t
    }, set: function (e, t) {
        return e.style.cssText = t + ""
    }}), ut.support.optSelected || (ut.propHooks.selected = ut.extend(ut.propHooks.selected, {get: function (e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }})), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.support.checkOn || ut.each(["radio", "checkbox"], function () {
        ut.valHooks[this] = {get: function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }}
    }), ut.each(["radio", "checkbox"], function () {
        ut.valHooks[this] = ut.extend(ut.valHooks[this], {set: function (e, t) {
            return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 : void 0
        }})
    });
    var _t = /^(?:input|select|textarea)$/i, Rt = /^key/, Pt = /^(?:mouse|contextmenu)|click/, Mt = /^(?:focusinfocus|focusoutblur)$/, Ot = /^([^.]*)(?:\.(.+)|)$/;
    ut.event = {global: {}, add: function (e, n, r, i, a) {
        var o, s, u, l, c, d, f, p, h, m, g, v = ut._data(e);
        if (v) {
            for (r.handler && (l = r, r = l.handler, a = l.selector), r.guid || (r.guid = ut.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function (e) {
                return typeof ut === U || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(d.elem, arguments)
            }, d.elem = e), n = (n || "").match(ct) || [""], u = n.length; u--;)o = Ot.exec(n[u]) || [], h = g = o[1], m = (o[2] || "").split(".").sort(), c = ut.event.special[h] || {}, h = (a ? c.delegateType : c.bindType) || h, c = ut.event.special[h] || {}, f = ut.extend({type: h, origType: g, data: i, handler: r, guid: r.guid, selector: a, needsContext: a && ut.expr.match.needsContext.test(a), namespace: m.join(".")}, l), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, m, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), a ? p.splice(p.delegateCount++, 0, f) : p.push(f), ut.event.global[h] = !0;
            e = null
        }
    }, remove: function (e, t, n, r, i) {
        var a, o, s, u, l, c, d, f, p, h, m, g = ut.hasData(e) && ut._data(e);
        if (g && (c = g.events)) {
            for (t = (t || "").match(ct) || [""], l = t.length; l--;)if (s = Ot.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                for (d = ut.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = a = f.length; a--;)o = f[a], !i && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (f.splice(a, 1), o.selector && f.delegateCount--, d.remove && d.remove.call(e, o));
                u && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ut.removeEvent(e, p, g.handle), delete c[p])
            } else for (p in c)ut.event.remove(e, p + t[l], n, r, !0);
            ut.isEmptyObject(c) && (delete g.handle, ut._removeData(e, "events"))
        }
    }, trigger: function (n, r, i, a) {
        var o, s, u, l, c, d, f, p = [i || Q], h = ot.call(n, "type") ? n.type : n, m = ot.call(n, "namespace") ? n.namespace.split(".") : [];
        if (u = d = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !Mt.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[ut.expando] ? n : new ut.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ut.makeArray(r, [n]), c = ut.event.special[h] || {}, a || !c.trigger || c.trigger.apply(i, r) !== !1)) {
            if (!a && !c.noBubble && !ut.isWindow(i)) {
                for (l = c.delegateType || h, Mt.test(l + h) || (u = u.parentNode); u; u = u.parentNode)p.push(u), d = u;
                d === (i.ownerDocument || Q) && p.push(d.defaultView || d.parentWindow || e)
            }
            for (f = 0; (u = p[f++]) && !n.isPropagationStopped();)n.type = f > 1 ? l : c.bindType || h, o = (ut._data(u, "events") || {})[n.type] && ut._data(u, "handle"), o && o.apply(u, r), o = s && u[s], o && ut.acceptData(u) && o.apply && o.apply(u, r) === !1 && n.preventDefault();
            if (n.type = h, !(a || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === h && ut.nodeName(i, "a") || !ut.acceptData(i) || !s || !i[h] || ut.isWindow(i))) {
                d = i[s], d && (i[s] = null), ut.event.triggered = h;
                try {
                    i[h]()
                } catch (g) {
                }
                ut.event.triggered = t, d && (i[s] = d)
            }
            return n.result
        }
    }, dispatch: function (e) {
        e = ut.event.fix(e);
        var n, r, i, a, o, s = [], u = rt.call(arguments), l = (ut._data(this, "events") || {})[e.type] || [], c = ut.event.special[e.type] || {};
        if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
            for (s = ut.event.handlers.call(this, e, l), n = 0; (a = s[n++]) && !e.isPropagationStopped();)for (e.currentTarget = a.elem, o = 0; (i = a.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
    }, handlers: function (e, n) {
        var r, i, a, o, s = [], u = n.delegateCount, l = e.target;
        if (u && l.nodeType && (!e.button || "click" !== e.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
            for (a = [], o = 0; u > o; o++)i = n[o], r = i.selector + " ", a[r] === t && (a[r] = i.needsContext ? ut(r, this).index(l) >= 0 : ut.find(r, this, null, [l]).length), a[r] && a.push(i);
            a.length && s.push({elem: l, handlers: a})
        }
        return u < n.length && s.push({elem: this, handlers: n.slice(u)}), s
    }, fix: function (e) {
        if (e[ut.expando])return e;
        var t, n, r, i = e.type, a = e, o = this.fixHooks[i];
        for (o || (this.fixHooks[i] = o = Pt.test(i) ? this.mouseHooks : Rt.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new ut.Event(a), t = r.length; t--;)n = r[t], e[n] = a[n];
        return e.target || (e.target = a.srcElement || Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) {
        var r, i, a, o = n.button, s = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Q, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
    }}, special: {load: {noBubble: !0}, click: {trigger: function () {
        return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
    }}, focus: {trigger: function () {
        if (this !== Q.activeElement && this.focus)try {
            return this.focus(), !1
        } catch (e) {
        }
    }, delegateType: "focusin"}, blur: {trigger: function () {
        return this === Q.activeElement && this.blur ? (this.blur(), !1) : void 0
    }, delegateType: "focusout"}, beforeunload: {postDispatch: function (e) {
        e.result !== t && (e.originalEvent.returnValue = e.result)
    }}}, simulate: function (e, t, n, r) {
        var i = ut.extend(new ut.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
        r ? ut.event.trigger(i, null, t) : ut.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }}, ut.removeEvent = Q.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === U && (e[r] = null), e.detachEvent(r, n))
    }, ut.Event = function (e, t) {
        return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, void 0) : new ut.Event(e, t)
    }, ut.Event.prototype = {isDefaultPrevented: l, isPropagationStopped: l, isImmediatePropagationStopped: l, preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    }, stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = u, this.stopPropagation()
    }}, ut.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        ut.event.special[e] = {delegateType: t, bindType: t, handle: function (e) {
            var n, r = this, i = e.relatedTarget, a = e.handleObj;
            return(!i || i !== r && !ut.contains(r, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
        }}
    }), ut.support.submitBubbles || (ut.event.special.submit = {setup: function () {
        return ut.nodeName(this, "form") ? !1 : (ut.event.add(this, "click._submit keypress._submit", function (e) {
            var n = e.target, r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
            r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit", function (e) {
                e._submit_bubble = !0
            }), ut._data(r, "submitBubbles", !0))
        }), void 0)
    }, postDispatch: function (e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
    }, teardown: function () {
        return ut.nodeName(this, "form") ? !1 : (ut.event.remove(this, "._submit"), void 0)
    }}), ut.support.changeBubbles || (ut.event.special.change = {setup: function () {
        return _t.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function (e) {
            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), ut.event.add(this, "click._change", function (e) {
            this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0)
        })), !1) : (ut.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            _t.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function (e) {
                !this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
            }), ut._data(t, "changeBubbles", !0))
        }), void 0)
    }, handle: function (e) {
        var t = e.target;
        return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
    }, teardown: function () {
        return ut.event.remove(this, "._change"), !_t.test(this.nodeName)
    }}), ut.support.focusinBubbles || ut.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            ut.event.simulate(t, e.target, ut.event.fix(e), !0)
        };
        ut.event.special[t] = {setup: function () {
            0 === n++ && Q.addEventListener(e, r, !0)
        }, teardown: function () {
            0 === --n && Q.removeEventListener(e, r, !0)
        }}
    }), ut.fn.extend({on: function (e, n, r, i, a) {
        var o, s;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = t);
            for (o in e)this.on(o, n, r, e[o], a);
            return this
        }
        if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)i = l; else if (!i)return this;
        return 1 === a && (s = i, i = function (e) {
            return ut().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = ut.guid++)), this.each(function () {
            ut.event.add(this, e, i, r, n)
        })
    }, one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1)
    }, off: function (e, n, r) {
        var i, a;
        if (e && e.preventDefault && e.handleObj)return i = e.handleObj, ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
            for (a in e)this.off(a, n, e[a]);
            return this
        }
        return(n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = l), this.each(function () {
            ut.event.remove(this, e, r, n)
        })
    }, bind: function (e, t, n) {
        return this.on(e, null, t, n)
    }, unbind: function (e, t) {
        return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }, trigger: function (e, t) {
        return this.each(function () {
            ut.event.trigger(e, t, this)
        })
    }, triggerHandler: function (e, t) {
        var n = this[0];
        return n ? ut.event.trigger(e, t, n, !0) : void 0
    }}), /*!
     * Sizzle CSS Selector Engine
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license
     * http://sizzlejs.com/
     */
        function (e, t) {
            function n(e) {
                return ht.test(e + "")
            }

            function r() {
                var e, t = [];
                return e = function (n, r) {
                    return t.push(n += " ") > T.cacheLength && delete e[t.shift()], e[n] = r
                }
            }

            function i(e) {
                return e[M] = !0, e
            }

            function a(e) {
                var t = j.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return!1
                } finally {
                    t = null
                }
            }

            function o(e, t, n, r) {
                var i, a, o, s, u, l, c, p, h, m;
                if ((t ? t.ownerDocument || t : O) !== j && A(t), t = t || j, n = n || [], !e || "string" != typeof e)return n;
                if (1 !== (s = t.nodeType) && 9 !== s)return[];
                if (!q && !r) {
                    if (i = mt.exec(e))if (o = i[1]) {
                        if (9 === s) {
                            if (a = t.getElementById(o), !a || !a.parentNode)return n;
                            if (a.id === o)return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && R(t, a) && a.id === o)return n.push(a), n
                    } else {
                        if (i[2])return J.apply(n, K.call(t.getElementsByTagName(e), 0)), n;
                        if ((o = i[3]) && B.getByClassName && t.getElementsByClassName)return J.apply(n, K.call(t.getElementsByClassName(o), 0)), n
                    }
                    if (B.qsa && !H.test(e)) {
                        if (c = !0, p = M, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = d(e), (c = t.getAttribute("id")) ? p = c.replace(yt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;)l[u] = p + f(l[u]);
                            h = pt.test(e) && t.parentNode || t, m = l.join(",")
                        }
                        if (m)try {
                            return J.apply(n, K.call(h.querySelectorAll(m), 0)), n
                        } catch (g) {
                        } finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return x(e.replace(ot, "$1"), t, n, r)
            }

            function s(e, t) {
                var n = t && e, r = n && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                if (r)return r;
                if (n)for (; n = n.nextSibling;)if (n === t)return-1;
                return e ? 1 : -1
            }

            function u(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return"input" === n && t.type === e
                }
            }

            function l(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return i(function (t) {
                    return t = +t, i(function (n, r) {
                        for (var i, a = e([], n.length, t), o = a.length; o--;)n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function d(e, t) {
                var n, r, i, a, s, u, l, c = X[e + " "];
                if (c)return t ? 0 : c.slice(0);
                for (s = e, u = [], l = T.preFilter; s;) {
                    (!n || (r = st.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = lt.exec(s)) && (n = r.shift(), i.push({value: n, type: r[0].replace(ot, " ")}), s = s.slice(n.length));
                    for (a in T.filter)!(r = ft[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), i.push({value: n, type: a, matches: r}), s = s.slice(n.length));
                    if (!n)break
                }
                return t ? s.length : s ? o.error(e) : X(e, u).slice(0)
            }

            function f(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
                return r
            }

            function p(e, t, n) {
                var r = t.dir, i = n && "parentNode" === r, a = z++;
                return t.first ? function (t, n, a) {
                    for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, a)
                } : function (t, n, o) {
                    var s, u, l, c = I + " " + a;
                    if (o) {
                        for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, o))return!0
                    } else for (; t = t[r];)if (1 === t.nodeType || i)if (l = t[M] || (t[M] = {}), (u = l[r]) && u[0] === c) {
                        if ((s = u[1]) === !0 || s === C)return s === !0
                    } else if (u = l[r] = [c], u[1] = e(t, n, o) || C, u[1] === !0)return!0
                }
            }

            function h(e) {
                return e.length > 1 ? function (t, n, r) {
                    for (var i = e.length; i--;)if (!e[i](t, n, r))return!1;
                    return!0
                } : e[0]
            }

            function m(e, t, n, r, i) {
                for (var a, o = [], s = 0, u = e.length, l = null != t; u > s; s++)(a = e[s]) && (!n || n(a, r, i)) && (o.push(a), l && t.push(s));
                return o
            }

            function g(e, t, n, r, a, o) {
                return r && !r[M] && (r = g(r)), a && !a[M] && (a = g(a, o)), i(function (i, o, s, u) {
                    var l, c, d, f = [], p = [], h = o.length, g = i || b(t || "*", s.nodeType ? [s] : s, []), v = !e || !i && t ? g : m(g, f, e, s, u), y = n ? a || (i ? e : h || r) ? [] : o : v;
                    if (n && n(v, y, s, u), r)for (l = m(y, p), r(l, [], s, u), c = l.length; c--;)(d = l[c]) && (y[p[c]] = !(v[p[c]] = d));
                    if (i) {
                        if (a || e) {
                            if (a) {
                                for (l = [], c = y.length; c--;)(d = y[c]) && l.push(v[c] = d);
                                a(null, y = [], l, u)
                            }
                            for (c = y.length; c--;)(d = y[c]) && (l = a ? Z.call(i, d) : f[c]) > -1 && (i[l] = !(o[l] = d))
                        }
                    } else y = m(y === o ? y.splice(h, y.length) : y), a ? a(null, o, y, u) : J.apply(o, y)
                })
            }

            function v(e) {
                for (var t, n, r, i = e.length, a = T.relative[e[0].type], o = a || T.relative[" "], s = a ? 1 : 0, u = p(function (e) {
                    return e === t
                }, o, !0), l = p(function (e) {
                    return Z.call(t, e) > -1
                }, o, !0), c = [function (e, n, r) {
                    return!a && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }]; i > s; s++)if (n = T.relative[e[s].type])c = [p(h(c), n)]; else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[M]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                        return g(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1)).replace(ot, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && f(e))
                    }
                    c.push(n)
                }
                return h(c)
            }

            function y(e, t) {
                var n = 0, r = t.length > 0, a = e.length > 0, s = function (i, s, u, l, c) {
                    var d, f, p, h = [], g = 0, v = "0", y = i && [], b = null != c, x = D, F = i || a && T.find.TAG("*", c && s.parentNode || s), w = I += null == x ? 1 : Math.random() || .1;
                    for (b && (D = s !== j && s, C = n); null != (d = F[v]); v++) {
                        if (a && d) {
                            for (f = 0; p = e[f++];)if (p(d, s, u)) {
                                l.push(d);
                                break
                            }
                            b && (I = w, C = ++n)
                        }
                        r && ((d = !p && d) && g--, i && y.push(d))
                    }
                    if (g += v, r && v !== g) {
                        for (f = 0; p = t[f++];)p(y, h, s, u);
                        if (i) {
                            if (g > 0)for (; v--;)y[v] || h[v] || (h[v] = G.call(l));
                            h = m(h)
                        }
                        J.apply(l, h), b && !i && h.length > 0 && g + t.length > 1 && o.uniqueSort(l)
                    }
                    return b && (I = w, D = x), y
                };
                return r ? i(s) : s
            }

            function b(e, t, n) {
                for (var r = 0, i = t.length; i > r; r++)o(e, t[r], n);
                return n
            }

            function x(e, t, n, r) {
                var i, a, o, s, u, l = d(e);
                if (!r && 1 === l.length) {
                    if (a = l[0] = l[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && 9 === t.nodeType && !q && T.relative[a[1].type]) {
                        if (t = T.find.ID(o.matches[0].replace(xt, Ft), t)[0], !t)return n;
                        e = e.slice(a.shift().value.length)
                    }
                    for (i = ft.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !T.relative[s = o.type]);)if ((u = T.find[s]) && (r = u(o.matches[0].replace(xt, Ft), pt.test(a[0].type) && t.parentNode || t))) {
                        if (a.splice(i, 1), e = r.length && f(a), !e)return J.apply(n, K.call(r, 0)), n;
                        break
                    }
                }
                return N(e, l)(r, t, q, n, pt.test(e)), n
            }

            function F() {
            }

            var w, C, T, k, E, N, S, D, A, j, L, q, H, $, _, R, P, M = "sizzle" + -new Date, O = e.document, B = {}, I = 0, z = 0, W = r(), X = r(), V = r(), U = typeof t, Q = 1 << 31, Y = [], G = Y.pop, J = Y.push, K = Y.slice, Z = Y.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
                return-1
            }, et = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = tt.replace("w", "w#"), rt = "([*^$|!~]?=)", it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]", at = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)", ot = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), st = new RegExp("^" + et + "*," + et + "*"), lt = new RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"), ct = new RegExp(at), dt = new RegExp("^" + nt + "$"), ft = {ID: new RegExp("^#(" + tt + ")"), CLASS: new RegExp("^\\.(" + tt + ")"), NAME: new RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"), TAG: new RegExp("^(" + tt.replace("w", "w*") + ")"), ATTR: new RegExp("^" + it), PSEUDO: new RegExp("^" + at), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"), needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")}, pt = /[\x20\t\r\n\f]*[+~]/, ht = /^[^{]+\{\s*\[native code/, mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /^(?:input|select|textarea|button)$/i, vt = /^h\d$/i, yt = /'|\\/g, bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, Ft = function (e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
            try {
                K.call(O.documentElement.childNodes, 0)[0].nodeType
            } catch (wt) {
                K = function (e) {
                    for (var t, n = []; t = this[e++];)n.push(t);
                    return n
                }
            }
            E = o.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, A = o.setDocument = function (e) {
                var r = e ? e.ownerDocument || e : O;
                return r !== j && 9 === r.nodeType && r.documentElement ? (j = r, L = r.documentElement, q = E(r), B.tagNameNoComments = a(function (e) {
                    return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                }), B.attributes = a(function (e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return"boolean" !== t && "string" !== t
                }), B.getByClassName = a(function (e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }), B.getByName = a(function (e) {
                    e.id = M + 0, e.innerHTML = "<a name='" + M + "'></a><div name='" + M + "'></div>", L.insertBefore(e, L.firstChild);
                    var t = r.getElementsByName && r.getElementsByName(M).length === 2 + r.getElementsByName(M + 0).length;
                    return B.getIdNotName = !r.getElementById(M), L.removeChild(e), t
                }), T.attrHandle = a(function (e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== U && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }}, B.getIdNotName ? (T.find.ID = function (e, t) {
                    if (typeof t.getElementById !== U && !q) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function (e) {
                    var t = e.replace(xt, Ft);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (T.find.ID = function (e, n) {
                    if (typeof n.getElementById !== U && !q) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== U && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                }, T.filter.ID = function (e) {
                    var t = e.replace(xt, Ft);
                    return function (e) {
                        var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = B.tagNameNoComments ? function (e, t) {
                    return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
                } : function (e, t) {
                    var n, r = [], i = 0, a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[i++];)1 === n.nodeType && r.push(n);
                        return r
                    }
                    return a
                }, T.find.NAME = B.getByName && function (e, t) {
                    return typeof t.getElementsByName !== U ? t.getElementsByName(name) : void 0
                }, T.find.CLASS = B.getByClassName && function (e, t) {
                    return typeof t.getElementsByClassName === U || q ? void 0 : t.getElementsByClassName(e)
                }, $ = [], H = [":focus"], (B.qsa = n(r.querySelectorAll)) && (a(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || H.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || H.push(":checked")
                }), a(function (e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && H.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
                })), (B.matchesSelector = n(_ = L.matchesSelector || L.mozMatchesSelector || L.webkitMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && a(function (e) {
                    B.disconnectedMatch = _.call(e, "div"), _.call(e, "[s!='']:x"), $.push("!=", at)
                }), H = new RegExp(H.join("|")), $ = new RegExp($.join("|")), R = n(L.contains) || L.compareDocumentPosition ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)for (; t = t.parentNode;)if (t === e)return!0;
                    return!1
                }, P = L.compareDocumentPosition ? function (e, t) {
                    var n;
                    return e === t ? (S = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || R(O, e) ? -1 : t === r || R(O, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function (e, t) {
                    var n, i = 0, a = e.parentNode, o = t.parentNode, u = [e], l = [t];
                    if (e === t)return S = !0, 0;
                    if (!a || !o)return e === r ? -1 : t === r ? 1 : a ? -1 : o ? 1 : 0;
                    if (a === o)return s(e, t);
                    for (n = e; n = n.parentNode;)u.unshift(n);
                    for (n = t; n = n.parentNode;)l.unshift(n);
                    for (; u[i] === l[i];)i++;
                    return i ? s(u[i], l[i]) : u[i] === O ? -1 : l[i] === O ? 1 : 0
                }, S = !1, [0, 0].sort(P), B.detectDuplicates = S, j) : j
            }, o.matches = function (e, t) {
                return o(e, null, null, t)
            }, o.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== j && A(e), t = t.replace(bt, "='$1']"), !(!B.matchesSelector || q || $ && $.test(t) || H.test(t)))try {
                    var n = _.call(e, t);
                    if (n || B.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
                } catch (r) {
                }
                return o(t, j, null, [e]).length > 0
            }, o.contains = function (e, t) {
                return(e.ownerDocument || e) !== j && A(e), R(e, t)
            }, o.attr = function (e, t) {
                var n;
                return(e.ownerDocument || e) !== j && A(e), q || (t = t.toLowerCase()), (n = T.attrHandle[t]) ? n(e) : q || B.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, o.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, o.uniqueSort = function (e) {
                var t, n = [], r = 1, i = 0;
                if (S = !B.detectDuplicates, e.sort(P), S) {
                    for (; t = e[r]; r++)t === e[r - 1] && (i = n.push(r));
                    for (; i--;)e.splice(n[i], 1)
                }
                return e
            }, k = o.getText = function (e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)n += k(e)
                    } else if (3 === i || 4 === i)return e.nodeValue
                } else for (; t = e[r]; r++)n += k(t);
                return n
            }, T = o.selectors = {cacheLength: 50, createPseudo: i, match: ft, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (e) {
                return e[1] = e[1].replace(xt, Ft), e[3] = (e[4] || e[5] || "").replace(xt, Ft), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            }, CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]), e
            }, PSEUDO: function (e) {
                var t, n = !e[5] && e[2];
                return ft.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }}, filter: {TAG: function (e) {
                return"*" === e ? function () {
                    return!0
                } : (e = e.replace(xt, Ft).toLowerCase(), function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e
                })
            }, CLASS: function (e) {
                var t = W[e + " "];
                return t || (t = new RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && W(e, function (e) {
                    return t.test(e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                })
            }, ATTR: function (e, t, n) {
                return function (r) {
                    var i = o.attr(r, e);
                    return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                }
            }, CHILD: function (e, t, n, r, i) {
                var a = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
                return 1 === r && 0 === i ? function (e) {
                    return!!e.parentNode
                } : function (t, n, u) {
                    var l, c, d, f, p, h, m = a !== o ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s;
                    if (g) {
                        if (a) {
                            for (; m;) {
                                for (d = t; d = d[m];)if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return!1;
                                h = m = "only" === e && !h && "nextSibling"
                            }
                            return!0
                        }
                        if (h = [o ? g.firstChild : g.lastChild], o && y) {
                            for (c = g[M] || (g[M] = {}), l = c[e] || [], p = l[0] === I && l[1], f = l[0] === I && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)if (1 === d.nodeType && ++f && d === t) {
                                c[e] = [I, p, f];
                                break
                            }
                        } else if (y && (l = (t[M] || (t[M] = {}))[e]) && l[0] === I)f = l[1]; else for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[M] || (d[M] = {}))[e] = [I, f]), d !== t)););
                        return f -= i, f === r || 0 === f % r && f / r >= 0
                    }
                }
            }, PSEUDO: function (e, t) {
                var n, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
                return r[M] ? r(t) : r.length > 1 ? (n = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                    for (var i, a = r(e, t), o = a.length; o--;)i = Z.call(e, a[o]), e[i] = !(n[i] = a[o])
                }) : function (e) {
                    return r(e, 0, n)
                }) : r
            }}, pseudos: {not: i(function (e) {
                var t = [], n = [], r = N(e.replace(ot, "$1"));
                return r[M] ? i(function (e, t, n, i) {
                    for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                }) : function (e, i, a) {
                    return t[0] = e, r(t, null, a, n), !n.pop()
                }
            }), has: i(function (e) {
                return function (t) {
                    return o(e, t).length > 0
                }
            }), contains: i(function (e) {
                return function (t) {
                    return(t.textContent || t.innerText || k(t)).indexOf(e) > -1
                }
            }), lang: i(function (e) {
                return dt.test(e || "") || o.error("unsupported lang: " + e), e = e.replace(xt, Ft).toLowerCase(), function (t) {
                    var n;
                    do if (n = q ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                    return!1
                }
            }), target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id
            }, root: function (e) {
                return e === L
            }, focus: function (e) {
                return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            }, enabled: function (e) {
                return e.disabled === !1
            }, disabled: function (e) {
                return e.disabled === !0
            }, checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return"input" === t && !!e.checked || "option" === t && !!e.selected
            }, selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
            }, empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return!1;
                return!0
            }, parent: function (e) {
                return!T.pseudos.empty(e)
            }, header: function (e) {
                return vt.test(e.nodeName)
            }, input: function (e) {
                return gt.test(e.nodeName)
            }, button: function (e) {
                var t = e.nodeName.toLowerCase();
                return"input" === t && "button" === e.type || "button" === t
            }, text: function (e) {
                var t;
                return"input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
            }, first: c(function () {
                return[0]
            }), last: c(function (e, t) {
                return[t - 1]
            }), eq: c(function (e, t, n) {
                return[0 > n ? n + t : n]
            }), even: c(function (e, t) {
                for (var n = 0; t > n; n += 2)e.push(n);
                return e
            }), odd: c(function (e, t) {
                for (var n = 1; t > n; n += 2)e.push(n);
                return e
            }), lt: c(function (e, t, n) {
                for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                return e
            }), gt: c(function (e, t, n) {
                for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                return e
            })}};
            for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[w] = u(w);
            for (w in{submit: !0, reset: !0})T.pseudos[w] = l(w);
            N = o.compile = function (e, t) {
                var n, r = [], i = [], a = V[e + " "];
                if (!a) {
                    for (t || (t = d(e)), n = t.length; n--;)a = v(t[n]), a[M] ? r.push(a) : i.push(a);
                    a = V(e, y(i, r))
                }
                return a
            }, T.pseudos.nth = T.pseudos.eq, T.filters = F.prototype = T.pseudos, T.setFilters = new F, A(), o.attr = ut.attr, ut.find = o, ut.expr = o.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = o.uniqueSort, ut.text = o.getText, ut.isXMLDoc = o.isXML, ut.contains = o.contains
        }(e);
    var Bt = /Until$/, It = /^(?:parents|prev(?:Until|All))/, zt = /^.[^:#\[\.,]*$/, Wt = ut.expr.match.needsContext, Xt = {children: !0, contents: !0, next: !0, prev: !0};
    ut.fn.extend({find: function (e) {
        var t, n, r, i = this.length;
        if ("string" != typeof e)return r = this, this.pushStack(ut(e).filter(function () {
            for (t = 0; i > t; t++)if (ut.contains(r[t], this))return!0
        }));
        for (n = [], t = 0; i > t; t++)ut.find(e, this[t], n);
        return n = this.pushStack(i > 1 ? ut.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
    }, has: function (e) {
        var t, n = ut(e, this), r = n.length;
        return this.filter(function () {
            for (t = 0; r > t; t++)if (ut.contains(this, n[t]))return!0
        })
    }, not: function (e) {
        return this.pushStack(d(this, e, !1))
    }, filter: function (e) {
        return this.pushStack(d(this, e, !0))
    }, is: function (e) {
        return!!e && ("string" == typeof e ? Wt.test(e) ? ut(e, this.context).index(this[0]) >= 0 : ut.filter(e, this).length > 0 : this.filter(e).length > 0)
    }, closest: function (e, t) {
        for (var n, r = 0, i = this.length, a = [], o = Wt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
            if (o ? o.index(n) > -1 : ut.find.matchesSelector(n, e)) {
                a.push(n);
                break
            }
            n = n.parentNode
        }
        return this.pushStack(a.length > 1 ? ut.unique(a) : a)
    }, index: function (e) {
        return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
        var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e), r = ut.merge(this.get(), n);
        return this.pushStack(ut.unique(r))
    }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }}), ut.fn.andSelf = ut.fn.addBack, ut.each({parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
        return ut.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
        return ut.dir(e, "parentNode", n)
    }, next: function (e) {
        return c(e, "nextSibling")
    }, prev: function (e) {
        return c(e, "previousSibling")
    }, nextAll: function (e) {
        return ut.dir(e, "nextSibling")
    }, prevAll: function (e) {
        return ut.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
        return ut.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
        return ut.dir(e, "previousSibling", n)
    }, siblings: function (e) {
        return ut.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
        return ut.sibling(e.firstChild)
    }, contents: function (e) {
        return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
    }}, function (e, t) {
        ut.fn[e] = function (n, r) {
            var i = ut.map(this, t, n);
            return Bt.test(e) || (r = n), r && "string" == typeof r && (i = ut.filter(r, i)), i = this.length > 1 && !Xt[e] ? ut.unique(i) : i, this.length > 1 && It.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), ut.extend({filter: function (e, t, n) {
        return n && (e = ":not(" + e + ")"), 1 === t.length ? ut.find.matchesSelector(t[0], e) ? [t[0]] : [] : ut.find.matches(e, t)
    }, dir: function (e, n, r) {
        for (var i = [], a = e[n]; a && 9 !== a.nodeType && (r === t || 1 !== a.nodeType || !ut(a).is(r));)1 === a.nodeType && i.push(a), a = a[n];
        return i
    }, sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }});
    var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ut = / jQuery\d+="(?:null|\d+)"/g, Qt = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"), Yt = /^\s+/, Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Jt = /<([\w:]+)/, Kt = /<tbody/i, Zt = /<|&#?\w+;/, en = /<(?:script|style|link)/i, tn = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, rn = /^$|\/(?:java|ecma)script/i, an = /^true\/(.*)/, on = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sn = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, un = f(Q), ln = un.appendChild(Q.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ut.fn.extend({text: function (e) {
        return ut.access(this, function (e) {
            return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(e))
        }, null, e, arguments.length)
    }, wrapAll: function (e) {
        if (ut.isFunction(e))return this.each(function (t) {
            ut(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
            var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                return e
            }).append(this)
        }
        return this
    }, wrapInner: function (e) {
        return ut.isFunction(e) ? this.each(function (t) {
            ut(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
            var t = ut(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
        })
    }, wrap: function (e) {
        var t = ut.isFunction(e);
        return this.each(function (n) {
            ut(this).wrapAll(t ? e.call(this, n) : e)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
        }).end()
    }, append: function () {
        return this.domManip(arguments, !0, function (e) {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
        })
    }, prepend: function () {
        return this.domManip(arguments, !0, function (e) {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
        })
    }, before: function () {
        return this.domManip(arguments, !1, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
        })
    }, after: function () {
        return this.domManip(arguments, !1, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    }, remove: function (e, t) {
        for (var n, r = 0; null != (n = this[r]); r++)(!e || ut.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ut.cleanData(b(n)), n.parentNode && (t && ut.contains(n.ownerDocument, n) && g(b(n, "script")), n.parentNode.removeChild(n)));
        return this
    }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
            for (1 === e.nodeType && ut.cleanData(b(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
            e.options && ut.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
    }, clone: function (e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
            return ut.clone(this, e, t)
        })
    }, html: function (e) {
        return ut.access(this, function (e) {
            var n = this[0] || {}, r = 0, i = this.length;
            if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(Ut, "") : t;
            if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Qt.test(e) || !ut.support.leadingWhitespace && Yt.test(e) || sn[(Jt.exec(e) || ["", ""])[1].toLowerCase()])) {
                e = e.replace(Gt, "<$1></$2>");
                try {
                    for (; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (ut.cleanData(b(n, !1)), n.innerHTML = e);
                    n = 0
                } catch (a) {
                }
            }
            n && this.empty().append(e)
        }, null, e, arguments.length)
    }, replaceWith: function (e) {
        var t = ut.isFunction(e);
        return t || "string" == typeof e || (e = ut(e).not(this).detach()), this.domManip([e], !0, function (e) {
            var t = this.nextSibling, n = this.parentNode;
            n && (ut(this).remove(), n.insertBefore(e, t))
        })
    }, detach: function (e) {
        return this.remove(e, !0)
    }, domManip: function (e, n, r) {
        e = tt.apply([], e);
        var i, a, o, s, u, l, c = 0, d = this.length, f = this, g = d - 1, v = e[0], y = ut.isFunction(v);
        if (y || !(1 >= d || "string" != typeof v || ut.support.checkClone) && nn.test(v))return this.each(function (i) {
            var a = f.eq(i);
            y && (e[0] = v.call(this, i, n ? a.html() : t)), a.domManip(e, n, r)
        });
        if (d && (l = ut.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
            for (n = n && ut.nodeName(i, "tr"), s = ut.map(b(l, "script"), h), o = s.length; d > c; c++)a = l, c !== g && (a = ut.clone(a, !0, !0), o && ut.merge(s, b(a, "script"))), r.call(n && ut.nodeName(this[c], "table") ? p(this[c], "tbody") : this[c], a, c);
            if (o)for (u = s[s.length - 1].ownerDocument, ut.map(s, m), c = 0; o > c; c++)a = s[c], rn.test(a.type || "") && !ut._data(a, "globalEval") && ut.contains(u, a) && (a.src ? ut.ajax({url: a.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0}) : ut.globalEval((a.text || a.textContent || a.innerHTML || "").replace(on, "")));
            l = i = null
        }
        return this
    }}), ut.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
        ut.fn[e] = function (e) {
            for (var n, r = 0, i = [], a = ut(e), o = a.length - 1; o >= r; r++)n = r === o ? this : this.clone(!0), ut(a[r])[t](n), nt.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ut.extend({clone: function (e, t, n) {
        var r, i, a, o, s, u = ut.contains(e.ownerDocument, e);
        if (ut.support.html5Clone || ut.isXMLDoc(e) || !Qt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(a = ln.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e)))for (r = b(a), s = b(e), o = 0; null != (i = s[o]); ++o)r[o] && y(i, r[o]);
        if (t)if (n)for (s = s || b(e), r = r || b(a), o = 0; null != (i = s[o]); o++)v(i, r[o]); else v(e, a);
        return r = b(a, "script"), r.length > 0 && g(r, !u && b(e, "script")), r = s = i = null, a
    }, buildFragment: function (e, t, n, r) {
        for (var i, a, o, s, u, l, c, d = e.length, p = f(t), h = [], m = 0; d > m; m++)if (a = e[m], a || 0 === a)if ("object" === ut.type(a))ut.merge(h, a.nodeType ? [a] : a); else if (Zt.test(a)) {
            for (s = s || p.appendChild(t.createElement("div")), u = (Jt.exec(a) || ["", ""])[1].toLowerCase(), c = sn[u] || sn._default, s.innerHTML = c[1] + a.replace(Gt, "<$1></$2>") + c[2], i = c[0]; i--;)s = s.lastChild;
            if (!ut.support.leadingWhitespace && Yt.test(a) && h.push(t.createTextNode(Yt.exec(a)[0])), !ut.support.tbody)for (a = "table" !== u || Kt.test(a) ? "<table>" !== c[1] || Kt.test(a) ? 0 : s : s.firstChild, i = a && a.childNodes.length; i--;)ut.nodeName(l = a.childNodes[i], "tbody") && !l.childNodes.length && a.removeChild(l);
            for (ut.merge(h, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
            s = p.lastChild
        } else h.push(t.createTextNode(a));
        for (s && p.removeChild(s), ut.support.appendChecked || ut.grep(b(h, "input"), x), m = 0; a = h[m++];)if ((!r || -1 === ut.inArray(a, r)) && (o = ut.contains(a.ownerDocument, a), s = b(p.appendChild(a), "script"), o && g(s), n))for (i = 0; a = s[i++];)rn.test(a.type || "") && n.push(a);
        return s = null, p
    }, cleanData: function (e, t) {
        for (var n, r, i, a, o = 0, s = ut.expando, u = ut.cache, l = ut.support.deleteExpando, c = ut.event.special; null != (n = e[o]); o++)if ((t || ut.acceptData(n)) && (i = n[s], a = i && u[i])) {
            if (a.events)for (r in a.events)c[r] ? ut.event.remove(n, r) : ut.removeEvent(n, r, a.handle);
            u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== U ? n.removeAttribute(s) : n[s] = null, Z.push(i))
        }
    }});
    var cn, dn, fn, pn = /alpha\([^)]*\)/i, hn = /opacity\s*=\s*([^)]*)/, mn = /^(top|right|bottom|left)$/, gn = /^(none|table(?!-c[ea]).+)/, vn = /^margin/, yn = new RegExp("^(" + lt + ")(.*)$", "i"), bn = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"), xn = new RegExp("^([+-])=(" + lt + ")", "i"), Fn = {BODY: "block"}, wn = {position: "absolute", visibility: "hidden", display: "block"}, Cn = {letterSpacing: 0, fontWeight: 400}, Tn = ["Top", "Right", "Bottom", "Left"], kn = ["Webkit", "O", "Moz", "ms"];
    ut.fn.extend({css: function (e, n) {
        return ut.access(this, function (e, n, r) {
            var i, a, o = {}, s = 0;
            if (ut.isArray(n)) {
                for (a = dn(e), i = n.length; i > s; s++)o[n[s]] = ut.css(e, n[s], !1, a);
                return o
            }
            return r !== t ? ut.style(e, n, r) : ut.css(e, n)
        }, e, n, arguments.length > 1)
    }, show: function () {
        return C(this, !0)
    }, hide: function () {
        return C(this)
    }, toggle: function (e) {
        var t = "boolean" == typeof e;
        return this.each(function () {
            (t ? e : w(this)) ? ut(this).show() : ut(this).hide()
        })
    }}), ut.extend({cssHooks: {opacity: {get: function (e, t) {
        if (t) {
            var n = fn(e, "opacity");
            return"" === n ? "1" : n
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": ut.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (e, n, r, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var a, o, s, u = ut.camelCase(n), l = e.style;
            if (n = ut.cssProps[u] || (ut.cssProps[u] = F(l, u)), s = ut.cssHooks[n] || ut.cssHooks[u], r === t)return s && "get"in s && (a = s.get(e, !1, i)) !== t ? a : l[n];
            if (o = typeof r, "string" === o && (a = xn.exec(r)) && (r = (a[1] + 1) * a[2] + parseFloat(ut.css(e, n)), o = "number"), !(null == r || "number" === o && isNaN(r) || ("number" !== o || ut.cssNumber[u] || (r += "px"), ut.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set"in s && (r = s.set(e, r, i)) === t)))try {
                l[n] = r
            } catch (c) {
            }
        }
    }, css: function (e, n, r, i) {
        var a, o, s, u = ut.camelCase(n);
        return n = ut.cssProps[u] || (ut.cssProps[u] = F(e.style, u)), s = ut.cssHooks[n] || ut.cssHooks[u], s && "get"in s && (o = s.get(e, !0, r)), o === t && (o = fn(e, n, i)), "normal" === o && n in Cn && (o = Cn[n]), "" === r || r ? (a = parseFloat(o), r === !0 || ut.isNumeric(a) ? a || 0 : o) : o
    }, swap: function (e, t, n, r) {
        var i, a, o = {};
        for (a in t)o[a] = e.style[a], e.style[a] = t[a];
        i = n.apply(e, r || []);
        for (a in t)e.style[a] = o[a];
        return i
    }}), e.getComputedStyle ? (dn = function (t) {
        return e.getComputedStyle(t, null)
    }, fn = function (e, n, r) {
        var i, a, o, s = r || dn(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
        return s && ("" !== u || ut.contains(e.ownerDocument, e) || (u = ut.style(e, n)), bn.test(u) && vn.test(n) && (i = l.width, a = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = a, l.maxWidth = o)), u
    }) : Q.documentElement.currentStyle && (dn = function (e) {
        return e.currentStyle
    }, fn = function (e, n, r) {
        var i, a, o, s = r || dn(e), u = s ? s[n] : t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), bn.test(u) && !mn.test(n) && (i = l.left, a = e.runtimeStyle, o = a && a.left, o && (a.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, o && (a.left = o)), "" === u ? "auto" : u
    }), ut.each(["height", "width"], function (e, t) {
        ut.cssHooks[t] = {get: function (e, n, r) {
            return n ? 0 === e.offsetWidth && gn.test(ut.css(e, "display")) ? ut.swap(e, wn, function () {
                return E(e, t, r)
            }) : E(e, t, r) : void 0
        }, set: function (e, n, r) {
            var i = r && dn(e);
            return T(e, n, r ? k(e, t, r, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i), i) : 0)
        }}
    }), ut.support.opacity || (ut.cssHooks.opacity = {get: function (e, t) {
        return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    }, set: function (e, t) {
        var n = e.style, r = e.currentStyle, i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", a = r && r.filter || n.filter || "";
        n.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(a.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = pn.test(a) ? a.replace(pn, i) : a + " " + i)
    }}), ut(function () {
        ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {get: function (e, t) {
            return t ? ut.swap(e, {display: "inline-block"}, fn, [e, "marginRight"]) : void 0
        }}), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function (e, t) {
            ut.cssHooks[t] = {get: function (e, n) {
                return n ? (n = fn(e, t), bn.test(n) ? ut(e).position()[t] + "px" : n) : void 0
            }}
        })
    }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
    }, ut.expr.filters.visible = function (e) {
        return!ut.expr.filters.hidden(e)
    }), ut.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        ut.cssHooks[e + t] = {expand: function (n) {
            for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + Tn[r] + t] = a[r] || a[r - 2] || a[0];
            return i
        }}, vn.test(e) || (ut.cssHooks[e + t].set = T)
    });
    var En = /%20/g, Nn = /\[\]$/, Sn = /\r?\n/g, Dn = /^(?:submit|button|image|reset|file)$/i, An = /^(?:input|select|textarea|keygen)/i;
    ut.fn.extend({serialize: function () {
        return ut.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var e = ut.prop(this, "elements");
            return e ? ut.makeArray(e) : this
        }).filter(function () {
            var e = this.type;
            return this.name && !ut(this).is(":disabled") && An.test(this.nodeName) && !Dn.test(e) && (this.checked || !tn.test(e))
        }).map(function (e, t) {
            var n = ut(this).val();
            return null == n ? null : ut.isArray(n) ? ut.map(n, function (e) {
                return{name: t.name, value: e.replace(Sn, "\r\n")}
            }) : {name: t.name, value: n.replace(Sn, "\r\n")}
        }).get()
    }}), ut.param = function (e, n) {
        var r, i = [], a = function (e, t) {
            t = ut.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e))ut.each(e, function () {
            a(this.name, this.value)
        }); else for (r in e)D(r, e[r], n, a);
        return i.join("&").replace(En, "+")
    }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ut.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ut.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var jn, Ln, qn = ut.now(), Hn = /\?/, $n = /#.*$/, _n = /([?&])_=[^&]*/, Rn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Pn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mn = /^(?:GET|HEAD)$/, On = /^\/\//, Bn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, In = ut.fn.load, zn = {}, Wn = {}, Xn = "*/".concat("*");
    try {
        Ln = Y.href
    } catch (Vn) {
        Ln = Q.createElement("a"), Ln.href = "", Ln = Ln.href
    }
    jn = Bn.exec(Ln.toLowerCase()) || [], ut.fn.load = function (e, n, r) {
        if ("string" != typeof e && In)return In.apply(this, arguments);
        var i, a, o, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ut.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), s.length > 0 && ut.ajax({url: e, type: o, dataType: "html", data: n}).done(function (e) {
            a = arguments, s.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, a || [e.responseText, t, e])
        }), this
    }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ut.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ut.each(["get", "post"], function (e, n) {
        ut[n] = function (e, r, i, a) {
            return ut.isFunction(r) && (a = a || i, i = r, r = t), ut.ajax({url: e, type: n, dataType: a, data: r, success: i})
        }
    }), ut.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Ln, type: "GET", isLocal: Pn.test(jn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Xn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": e.String, "text html": !0, "text json": ut.parseJSON, "text xml": ut.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (e, t) {
        return t ? L(L(e, ut.ajaxSettings), t) : L(ut.ajaxSettings, e)
    }, ajaxPrefilter: A(zn), ajaxTransport: A(Wn), ajax: function (e, n) {
        function r(e, n, r, i) {
            var a, d, y, b, F, C = n;
            2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", w.readyState = e > 0 ? 4 : 0, r && (b = q(f, w, r)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && (F = w.getResponseHeader("Last-Modified"), F && (ut.lastModified[o] = F), F = w.getResponseHeader("etag"), F && (ut.etag[o] = F)), 204 === e ? (a = !0, C = "nocontent") : 304 === e ? (a = !0, C = "notmodified") : (a = H(f, b), C = a.state, d = a.data, y = a.error, a = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || C) + "", a ? m.resolveWith(p, [d, C, w]) : m.rejectWith(p, [w, C, y]), w.statusCode(v), v = t, l && h.trigger(a ? "ajaxSuccess" : "ajaxError", [w, f, a ? d : y]), g.fireWith(p, [w, C]), l && (h.trigger("ajaxComplete", [w, f]), --ut.active || ut.event.trigger("ajaxStop")))
        }

        "object" == typeof e && (n = e, e = t), n = n || {};
        var i, a, o, s, u, l, c, d, f = ut.ajaxSetup({}, n), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? ut(p) : ut.event, m = ut.Deferred(), g = ut.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, F = "canceled", w = {readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === x) {
                if (!d)for (d = {}; t = Rn.exec(s);)d[t[1].toLowerCase()] = t[2];
                t = d[e.toLowerCase()]
            }
            return null == t ? null : t
        }, getAllResponseHeaders: function () {
            return 2 === x ? s : null
        }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return x || (e = b[n] = b[n] || e, y[e] = t), this
        }, overrideMimeType: function (e) {
            return x || (f.mimeType = e), this
        }, statusCode: function (e) {
            var t;
            if (e)if (2 > x)for (t in e)v[t] = [v[t], e[t]]; else w.always(e[w.status]);
            return this
        }, abort: function (e) {
            var t = e || F;
            return c && c.abort(t), r(0, t), this
        }};
        if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || Ln) + "").replace($n, "").replace(On, jn[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ut.trim(f.dataType || "*").toLowerCase().match(ct) || [""], null == f.crossDomain && (i = Bn.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === jn[1] && i[2] === jn[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (jn[3] || ("http:" === jn[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = ut.param(f.data, f.traditional)), j(zn, f, n, w), 2 === x)return w;
        l = f.global, l && 0 === ut.active++ && ut.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Mn.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (Hn.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = _n.test(o) ? o.replace(_n, "$1_=" + qn++) : o + (Hn.test(o) ? "&" : "?") + "_=" + qn++)), f.ifModified && (ut.lastModified[o] && w.setRequestHeader("If-Modified-Since", ut.lastModified[o]), ut.etag[o] && w.setRequestHeader("If-None-Match", ut.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : f.accepts["*"]);
        for (a in f.headers)w.setRequestHeader(a, f.headers[a]);
        if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x))return w.abort();
        F = "abort";
        for (a in{success: 1, error: 1, complete: 1})w[a](f[a]);
        if (c = j(Wn, f, n, w)) {
            w.readyState = 1, l && h.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (u = setTimeout(function () {
                w.abort("timeout")
            }, f.timeout));
            try {
                x = 1, c.send(y, r)
            } catch (C) {
                if (!(2 > x))throw C;
                r(-1, C)
            }
        } else r(-1, "No Transport");
        return w
    }, getScript: function (e, n) {
        return ut.get(e, t, n, "script")
    }, getJSON: function (e, t, n) {
        return ut.get(e, t, n, "json")
    }}), ut.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (e) {
        return ut.globalEval(e), e
    }}}), ut.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ut.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = Q.head || ut("head")[0] || Q.documentElement;
            return{send: function (t, i) {
                n = Q.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                    (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                }, r.insertBefore(n, r.firstChild)
            }, abort: function () {
                n && n.onload(t, !0)
            }}
        }
    });
    var Un = [], Qn = /(=)\?(?=&|$)|\?\?/;
    ut.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var e = Un.pop() || ut.expando + "_" + qn++;
        return this[e] = !0, e
    }}), ut.ajaxPrefilter("json jsonp", function (n, r, i) {
        var a, o, s, u = n.jsonp !== !1 && (Qn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Qn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (a = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Qn, "$1" + a) : n.jsonp !== !1 && (n.url += (Hn.test(n.url) ? "&" : "?") + n.jsonp + "=" + a), n.converters["script json"] = function () {
            return s || ut.error(a + " was not called"), s[0]
        }, n.dataTypes[0] = "json", o = e[a], e[a] = function () {
            s = arguments
        }, i.always(function () {
            e[a] = o, n[a] && (n.jsonpCallback = r.jsonpCallback, Un.push(a)), s && ut.isFunction(o) && o(s[0]), s = o = t
        }), "script") : void 0
    });
    var Yn, Gn, Jn = 0, Kn = e.ActiveXObject && function () {
        var e;
        for (e in Yn)Yn[e](t, !0)
    };
    ut.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return!this.isLocal && $() || _()
    } : $, Gn = ut.ajaxSettings.xhr(), ut.support.cors = !!Gn && "withCredentials"in Gn, Gn = ut.support.ajax = !!Gn, Gn && ut.ajaxTransport(function (n) {
        if (!n.crossDomain || ut.support.cors) {
            var r;
            return{send: function (i, a) {
                var o, s, u = n.xhr();
                if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)u[s] = n.xhrFields[s];
                n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (s in i)u.setRequestHeader(s, i[s])
                } catch (l) {
                }
                u.send(n.hasContent && n.data || null), r = function (e, i) {
                    var s, l, c, d;
                    try {
                        if (r && (i || 4 === u.readyState))if (r = t, o && (u.onreadystatechange = ut.noop, Kn && delete Yn[o]), i)4 !== u.readyState && u.abort(); else {
                            d = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (d.text = u.responseText);
                            try {
                                c = u.statusText
                            } catch (f) {
                                c = ""
                            }
                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                        }
                    } catch (p) {
                        i || a(-1, p)
                    }
                    d && a(s, c, d, l)
                }, n.async ? 4 === u.readyState ? setTimeout(r) : (o = ++Jn, Kn && (Yn || (Yn = {}, ut(e).unload(Kn)), Yn[o] = r), u.onreadystatechange = r) : r()
            }, abort: function () {
                r && r(t, !0)
            }}
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/, nr = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"), rr = /queueHooks$/, ir = [B], ar = {"*": [function (e, t) {
        var n, r, i = this.createTween(e, t), a = nr.exec(t), o = i.cur(), s = +o || 0, u = 1, l = 20;
        if (a) {
            if (n = +a[2], r = a[3] || (ut.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                s = ut.css(i.elem, e, !0) || n || 1;
                do u = u || ".5", s /= u, ut.style(i.elem, e, s + r); while (u !== (u = i.cur() / o) && 1 !== u && --l)
            }
            i.unit = r, i.start = s, i.end = a[1] ? s + (a[1] + 1) * n : n
        }
        return i
    }]};
    ut.Animation = ut.extend(M, {tweener: function (e, t) {
        ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var n, r = 0, i = e.length; i > r; r++)n = e[r], ar[n] = ar[n] || [], ar[n].unshift(t)
    }, prefilter: function (e, t) {
        t ? ir.unshift(e) : ir.push(e)
    }}), ut.Tween = I, I.prototype = {constructor: I, init: function (e, t, n, r, i, a) {
        this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (ut.cssNumber[n] ? "" : "px")
    }, cur: function () {
        var e = I.propHooks[this.prop];
        return e && e.get ? e.get(this) : I.propHooks._default.get(this)
    }, run: function (e) {
        var t, n = I.propHooks[this.prop];
        return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
    }}, I.prototype.init.prototype = I.prototype, I.propHooks = {_default: {get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
    }, set: function (e) {
        ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
    }}}, I.propHooks.scrollTop = I.propHooks.scrollLeft = {set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }}, ut.each(["toggle", "show", "hide"], function (e, t) {
        var n = ut.fn[t];
        ut.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, r, i)
        }
    }), ut.fn.extend({fadeTo: function (e, t, n, r) {
        return this.filter(w).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate: function (e, t, n, r) {
        var i = ut.isEmptyObject(e), a = ut.speed(t, n, r), o = function () {
            var t = M(this, ut.extend({}, e), a);
            o.finish = function () {
                t.stop(!0)
            }, (i || ut._data(this, "finish")) && t.stop(!0)
        };
        return o.finish = o, i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
    }, stop: function (e, n, r) {
        var i = function (e) {
            var t = e.stop;
            delete e.stop, t(r)
        };
        return"string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
            var t = !0, n = null != e && e + "queueHooks", a = ut.timers, o = ut._data(this);
            if (n)o[n] && o[n].stop && i(o[n]); else for (n in o)o[n] && o[n].stop && rr.test(n) && i(o[n]);
            for (n = a.length; n--;)a[n].elem !== this || null != e && a[n].queue !== e || (a[n].anim.stop(r), t = !1, a.splice(n, 1));
            (t || !r) && ut.dequeue(this, e)
        })
    }, finish: function (e) {
        return e !== !1 && (e = e || "fx"), this.each(function () {
            var t, n = ut._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], a = ut.timers, o = r ? r.length : 0;
            for (n.finish = !0, ut.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = a.length; t--;)a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; o > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
        })
    }}), ut.each({slideDown: z("show"), slideUp: z("hide"), slideToggle: z("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
        ut.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ut.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ut.extend({}, e) : {complete: n || !n && t || ut.isFunction(e) && e, duration: e, easing: n && t || t && !ut.isFunction(t) && t};
        return r.duration = ut.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] : ut.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ut.isFunction(r.old) && r.old.call(this), r.queue && ut.dequeue(this, r.queue)
        }, r
    }, ut.easing = {linear: function (e) {
        return e
    }, swing: function (e) {
        return.5 - Math.cos(e * Math.PI) / 2
    }}, ut.timers = [], ut.fx = I.prototype.init, ut.fx.tick = function () {
        var e, n = ut.timers, r = 0;
        for (Zn = ut.now(); r < n.length; r++)e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ut.fx.stop(), Zn = t
    }, ut.fx.timer = function (e) {
        e() && ut.timers.push(e) && ut.fx.start()
    }, ut.fx.interval = 13, ut.fx.start = function () {
        er || (er = setInterval(ut.fx.tick, ut.fx.interval))
    }, ut.fx.stop = function () {
        clearInterval(er), er = null
    }, ut.fx.speeds = {slow: 600, fast: 200, _default: 400}, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function (e) {
        return ut.grep(ut.timers,function (t) {
            return e === t.elem
        }).length
    }), ut.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            ut.offset.setOffset(this, e, t)
        });
        var n, r, i = {top: 0, left: 0}, a = this[0], o = a && a.ownerDocument;
        if (o)return n = o.documentElement, ut.contains(n, a) ? (typeof a.getBoundingClientRect !== U && (i = a.getBoundingClientRect()), r = W(o), {top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : i
    }, ut.offset = {setOffset: function (e, t, n) {
        var r = ut.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i, a, o = ut(e), s = o.offset(), u = ut.css(e, "top"), l = ut.css(e, "left"), c = ("absolute" === r || "fixed" === r) && ut.inArray("auto", [u, l]) > -1, d = {}, f = {};
        c ? (f = o.position(), i = f.top, a = f.left) : (i = parseFloat(u) || 0, a = parseFloat(l) || 0), ut.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + a), "using"in t ? t.using.call(e, d) : o.css(d)
    }}, ut.fn.extend({position: function () {
        if (this[0]) {
            var e, t, n = {top: 0, left: 0}, r = this[0];
            return"fixed" === ut.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - ut.css(r, "marginTop", !0), left: t.left - n.left - ut.css(r, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var e = this.offsetParent || Q.documentElement; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");)e = e.offsetParent;
            return e || Q.documentElement
        })
    }}), ut.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        ut.fn[e] = function (i) {
            return ut.access(this, function (e, i, a) {
                var o = W(e);
                return a === t ? o ? n in o ? o[n] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(r ? ut(o).scrollLeft() : a, r ? a : ut(o).scrollTop()) : e[i] = a, void 0)
            }, e, i, arguments.length, null)
        }
    }), ut.each({Height: "height", Width: "width"}, function (e, n) {
        ut.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            ut.fn[i] = function (i, a) {
                var o = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || a === !0 ? "margin" : "border");
                return ut.access(this, function (n, r, i) {
                    var a;
                    return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (a = n.documentElement, Math.max(n.body["scroll" + e], a["scroll" + e], n.body["offset" + e], a["offset" + e], a["client" + e])) : i === t ? ut.css(n, r, s) : ut.style(n, r, i, s)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return ut
    })
}(window), function (e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n;
    e.rails = n = {linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]", buttonClickSelector: "button[data-remote]", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])", disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled", requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])", fileInputSelector: "input[type=file]", linkDisableSelector: "a[data-disable-with]", CSRFProtection: function (t) {
        var n = e('meta[name="csrf-token"]').attr("content");
        n && t.setRequestHeader("X-CSRF-Token", n)
    }, fire: function (t, n, r) {
        var i = e.Event(n);
        return t.trigger(i, r), i.result !== !1
    }, confirm: function (e) {
        return confirm(e)
    }, ajax: function (t) {
        return e.ajax(t)
    }, href: function (e) {
        return e.attr("href")
    }, handleRemote: function (r) {
        var i, a, o, s, u, l, c, d;
        if (n.fire(r, "ajax:before")) {
            if (s = r.data("cross-domain"), u = s === t ? null : s, l = r.data("with-credentials") || null, c = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, r.is("form")) {
                i = r.attr("method"), a = r.attr("action"), o = r.serializeArray();
                var f = r.data("ujs:submit-button");
                f && (o.push(f), r.data("ujs:submit-button", null))
            } else r.is(n.inputChangeSelector) ? (i = r.data("method"), a = r.data("url"), o = r.serialize(), r.data("params") && (o = o + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", a = r.data("url"), o = r.serialize(), r.data("params") && (o = o + "&" + r.data("params"))) : (i = r.data("method"), a = n.href(r), o = r.data("params") || null);
            d = {type: i || "GET", data: o, dataType: c, beforeSend: function (e, i) {
                return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), n.fire(r, "ajax:beforeSend", [e, i])
            }, success: function (e, t, n) {
                r.trigger("ajax:success", [e, t, n])
            }, complete: function (e, t) {
                r.trigger("ajax:complete", [e, t])
            }, error: function (e, t, n) {
                r.trigger("ajax:error", [e, t, n])
            }, crossDomain: u}, l && (d.xhrFields = {withCredentials: l}), a && (d.url = a);
            var p = n.ajax(d);
            return r.trigger("ajax:send", p), p
        }
        return!1
    }, handleMethod: function (r) {
        var i = n.href(r), a = r.data("method"), o = r.attr("target"), s = e("meta[name=csrf-token]").attr("content"), u = e("meta[name=csrf-param]").attr("content"), l = e('<form method="post" action="' + i + '"></form>'), c = '<input name="_method" value="' + a + '" type="hidden" />';
        u !== t && s !== t && (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'), o && l.attr("target", o), l.hide().append(c).appendTo("body"), l.submit()
    }, disableFormElements: function (t) {
        t.find(n.disableSelector).each(function () {
            var t = e(this), n = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
        })
    }, enableFormElements: function (t) {
        t.find(n.enableSelector).each(function () {
            var t = e(this), n = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
        })
    }, allowAction: function (e) {
        var t, r = e.data("confirm"), i = !1;
        return r ? (n.fire(e, "confirm") && (i = n.confirm(r), t = n.fire(e, "confirm:complete", [i])), i && t) : !0
    }, blankInputs: function (t, n, r) {
        var i, a, o = e(), s = n || "input,textarea", u = t.find(s);
        return u.each(function () {
            if (i = e(this), a = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : i.val(), !a == !r) {
                if (i.is("input[type=radio]") && u.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length)return!0;
                o = o.add(i)
            }
        }), o.length ? o : !1
    }, nonBlankInputs: function (e, t) {
        return n.blankInputs(e, t, !0)
    }, stopEverything: function (t) {
        return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
    }, disableElement: function (e) {
        e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
            return n.stopEverything(e)
        })
    }, enableElement: function (e) {
        e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
    }}, n.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, r) {
        e.crossDomain || n.CSRFProtection(r)
    }), e(document).delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(e(this))
    }), e(document).delegate(n.linkClickSelector, "click.rails", function (r) {
        var i = e(this), a = i.data("method"), o = i.data("params");
        if (!n.allowAction(i))return n.stopEverything(r);
        if (i.is(n.linkDisableSelector) && n.disableElement(i), i.data("remote") !== t) {
            if (!(!r.metaKey && !r.ctrlKey || a && "GET" !== a || o))return!0;
            var s = n.handleRemote(i);
            return s === !1 ? n.enableElement(i) : s.error(function () {
                n.enableElement(i)
            }), !1
        }
        return i.data("method") ? (n.handleMethod(i), !1) : void 0
    }), e(document).delegate(n.buttonClickSelector, "click.rails", function (t) {
        var r = e(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), e(document).delegate(n.inputChangeSelector, "change.rails", function (t) {
        var r = e(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), e(document).delegate(n.formSubmitSelector, "submit.rails", function (r) {
        var i = e(this), a = i.data("remote") !== t, o = n.blankInputs(i, n.requiredInputSelector), s = n.nonBlankInputs(i, n.fileInputSelector);
        if (!n.allowAction(i))return n.stopEverything(r);
        if (o && i.attr("novalidate") == t && n.fire(i, "ajax:aborted:required", [o]))return n.stopEverything(r);
        if (a) {
            if (s) {
                setTimeout(function () {
                    n.disableFormElements(i)
                }, 13);
                var u = n.fire(i, "ajax:aborted:file", [s]);
                return u || setTimeout(function () {
                    n.enableFormElements(i)
                }, 13), u
            }
            return n.handleRemote(i), !1
        }
        setTimeout(function () {
            n.disableFormElements(i)
        }, 13)
    }), e(document).delegate(n.formInputClickSelector, "click.rails", function (t) {
        var r = e(this);
        if (!n.allowAction(r))return n.stopEverything(t);
        var i = r.attr("name"), a = i ? {name: i, value: r.val()} : null;
        r.closest("form").data("ujs:submit-button", a)
    }), e(document).delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && n.disableFormElements(e(this))
    }), e(document).delegate(n.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function () {
        var t = e("meta[name=csrf-token]").attr("content"), n = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + n + '"]').val(t)
    }))
}(jQuery), /*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
    !function (e) {
        e.extend(e.fn, {validate: function (t) {
            if (!this.length)return t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
            var n = e.data(this[0], "validator");
            return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
                n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
            }), this.submit(function (t) {
                function r() {
                    var r;
                    return n.settings.submitHandler ? (n.submitButton && (r = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && r.remove(), !1) : !0
                }

                return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, r()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : r() : (n.focusInvalid(), !1)
            })), n)
        }, valid: function () {
            if (e(this[0]).is("form"))return this.validate().form();
            var t = !0, n = e(this[0].form).validate();
            return this.each(function () {
                t = t && n.element(this)
            }), t
        }, removeAttrs: function (t) {
            var n = {}, r = this;
            return e.each(t.split(/\s/), function (e, t) {
                n[t] = r.attr(t), r.removeAttr(t)
            }), n
        }, rules: function (t, n) {
            var r = this[0];
            if (t) {
                var i = e.data(r.form, "validator").settings, a = i.rules, o = e.validator.staticRules(r);
                switch (t) {
                    case"add":
                        e.extend(o, e.validator.normalizeRule(n)), delete o.messages, a[r.name] = o, n.messages && (i.messages[r.name] = e.extend(i.messages[r.name], n.messages));
                        break;
                    case"remove":
                        if (!n)return delete a[r.name], o;
                        var s = {};
                        return e.each(n.split(/\s/), function (e, t) {
                            s[t] = o[t], delete o[t]
                        }), s
                }
            }
            var u = e.validator.normalizeRules(e.extend({}, e.validator.classRules(r), e.validator.attributeRules(r), e.validator.dataRules(r), e.validator.staticRules(r)), r);
            if (u.required) {
                var l = u.required;
                delete u.required, u = e.extend({required: l}, u)
            }
            return u
        }}), e.extend(e.expr[":"], {blank: function (t) {
            return!e.trim("" + e(t).val())
        }, filled: function (t) {
            return!!e.trim("" + e(t).val())
        }, unchecked: function (t) {
            return!e(t).prop("checked")
        }}), e.validator = function (t, n) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
        }, e.validator.format = function (t, n) {
            return 1 === arguments.length ? function () {
                var n = e.makeArray(arguments);
                return n.unshift(t), e.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                    return n
                })
            }), t)
        }, e.extend(e.validator, {defaults: {messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function (e) {
            this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
        }, onfocusout: function (e) {
            this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
        }, onkeyup: function (e, t) {
            (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
        }, onclick: function (e) {
            e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
        }, highlight: function (t, n, r) {
            "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(r) : e(t).addClass(n).removeClass(r)
        }, unhighlight: function (t, n, r) {
            "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(r) : e(t).removeClass(n).addClass(r)
        }}, setDefaults: function (t) {
            e.extend(e.validator.defaults, t)
        }, messages: {required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges: !1, prototype: {init: function () {
            function t(t) {
                var n = e.data(this[0].form, "validator"), r = "on" + t.type.replace(/^validate/, "");
                n.settings[r] && n.settings[r].call(n, this[0], t)
            }

            this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
            var n = this.groups = {};
            e.each(this.settings.groups, function (t, r) {
                "string" == typeof r && (r = r.split(/\s/)), e.each(r, function (e, r) {
                    n[r] = t
                })
            });
            var r = this.settings.rules;
            e.each(r, function (t, n) {
                r[t] = e.validator.normalizeRule(n)
            }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
        }, form: function () {
            return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        }, checkForm: function () {
            this.prepareForm();
            for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)this.check(t[e]);
            return this.valid()
        }, element: function (t) {
            t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
            var n = this.check(t) !== !1;
            return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
        }, showErrors: function (t) {
            if (t) {
                e.extend(this.errorMap, t), this.errorList = [];
                for (var n in t)this.errorList.push({message: t[n], element: this.findByName(n)[0]});
                this.successList = e.grep(this.successList, function (e) {
                    return!(e.name in t)
                })
            }
            this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
        }, resetForm: function () {
            e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
        }, numberOfInvalids: function () {
            return this.objectLength(this.invalid)
        }, objectLength: function (e) {
            var t = 0;
            for (var n in e)t++;
            return t
        }, hideErrors: function () {
            this.addWrapper(this.toHide).hide()
        }, valid: function () {
            return 0 === this.size()
        }, size: function () {
            return this.errorList.length
        }, focusInvalid: function () {
            if (this.settings.focusInvalid)try {
                e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
            } catch (t) {
            }
        }, findLastActive: function () {
            var t = this.lastActive;
            return t && 1 === e.grep(this.errorList,function (e) {
                return e.element.name === t.name
            }).length && t
        }, elements: function () {
            var t = this, n = {};
            return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                return!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0)
            })
        }, clean: function (t) {
            return e(t)[0]
        }, errors: function () {
            var t = this.settings.errorClass.replace(" ", ".");
            return e(this.settings.errorElement + "." + t, this.errorContext)
        }, reset: function () {
            this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
        }, prepareForm: function () {
            this.reset(), this.toHide = this.errors().add(this.containers)
        }, prepareElement: function (e) {
            this.reset(), this.toHide = this.errorsFor(e)
        }, elementValue: function (t) {
            var n = e(t).attr("type"), r = e(t).val();
            return"radio" === n || "checkbox" === n ? e("input[name='" + e(t).attr("name") + "']:checked").val() : "string" == typeof r ? r.replace(/\r/g, "") : r
        }, check: function (t) {
            t = this.validationTargetFor(this.clean(t));
            var n, r = e(t).rules(), i = !1, a = this.elementValue(t);
            for (var o in r) {
                var s = {method: o, parameters: r[o]};
                try {
                    if (n = e.validator.methods[o].call(this, a, t, s.parameters), "dependency-mismatch" === n) {
                        i = !0;
                        continue
                    }
                    if (i = !1, "pending" === n)return this.toHide = this.toHide.not(this.errorsFor(t)), void 0;
                    if (!n)return this.formatAndAdd(t, s), !1
                } catch (u) {
                    throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method.", u), u
                }
            }
            return i ? void 0 : (this.objectLength(r) && this.successList.push(t), !0)
        }, customDataMessage: function (t, n) {
            return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase())
        }, customMessage: function (e, t) {
            var n = this.settings.messages[e];
            return n && (n.constructor === String ? n : n[t])
        }, findDefined: function () {
            for (var e = 0; e < arguments.length; e++)if (void 0 !== arguments[e])return arguments[e];
            return void 0
        }, defaultMessage: function (t, n) {
            return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
        }, formatAndAdd: function (t, n) {
            var r = this.defaultMessage(t, n.method), i = /\$?\{(\d+)\}/g;
            "function" == typeof r ? r = r.call(this, n.parameters, t) : i.test(r) && (r = e.validator.format(r.replace(i, "{$1}"), n.parameters)), this.errorList.push({message: r, element: t}), this.errorMap[t.name] = r, this.submitted[t.name] = r
        }, addWrapper: function (e) {
            return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
        }, defaultShowErrors: function () {
            var e, t;
            for (e = 0; this.errorList[e]; e++) {
                var n = this.errorList[e];
                this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
            }
            if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (e = 0; this.successList[e]; e++)this.showLabel(this.successList[e]);
            if (this.settings.unhighlight)for (e = 0, t = this.validElements(); t[e]; e++)this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
            this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
        }, validElements: function () {
            return this.currentElements.not(this.invalidElements())
        }, invalidElements: function () {
            return e(this.errorList).map(function () {
                return this.element
            })
        }, showLabel: function (t, n) {
            var r = this.errorsFor(t);
            r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(n)) : (r = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, e(t)) : r.insertAfter(t))), !n && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
        }, errorsFor: function (t) {
            var n = this.idOrName(t);
            return this.errors().filter(function () {
                return e(this).attr("for") === n
            })
        }, idOrName: function (e) {
            return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
        }, validationTargetFor: function (e) {
            return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
        }, checkable: function (e) {
            return/radio|checkbox/i.test(e.type)
        }, findByName: function (t) {
            return e(this.currentForm).find("[name='" + t + "']")
        }, getLength: function (t, n) {
            switch (n.nodeName.toLowerCase()) {
                case"select":
                    return e("option:selected", n).length;
                case"input":
                    if (this.checkable(n))return this.findByName(n.name).filter(":checked").length
            }
            return t.length
        }, depend: function (e, t) {
            return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
        }, dependTypes: {"boolean": function (e) {
            return e
        }, string: function (t, n) {
            return!!e(t, n.form).length
        }, "function": function (e, t) {
            return e(t)
        }}, optional: function (t) {
            var n = this.elementValue(t);
            return!e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
        }, startRequest: function (e) {
            this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
        }, stopRequest: function (t, n) {
            this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        }, previousValue: function (t) {
            return e.data(t, "previousValue") || e.data(t, "previousValue", {old: null, valid: !0, message: this.defaultMessage(t, "remote")})
        }}, classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}}, addClassRules: function (t, n) {
            t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
        }, classRules: function (t) {
            var n = {}, r = e(t).attr("class");
            return r && e.each(r.split(" "), function () {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
            }), n
        }, attributeRules: function (t) {
            var n = {}, r = e(t), i = r[0].getAttribute("type");
            for (var a in e.validator.methods) {
                var o;
                "required" === a ? (o = r.get(0).getAttribute(a), "" === o && (o = !0), o = !!o) : o = r.attr(a), /min|max/.test(a) && (null === i || /number|range|text/.test(i)) && (o = Number(o)), o ? n[a] = o : i === a && "range" !== i && (n[a] = !0)
            }
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
        }, dataRules: function (t) {
            var n, r, i = {}, a = e(t);
            for (n in e.validator.methods)r = a.data("rule-" + n.toLowerCase()), void 0 !== r && (i[n] = r);
            return i
        }, staticRules: function (t) {
            var n = {}, r = e.data(t.form, "validator");
            return r.settings.rules && (n = e.validator.normalizeRule(r.settings.rules[t.name]) || {}), n
        }, normalizeRules: function (t, n) {
            return e.each(t, function (r, i) {
                if (i === !1)return delete t[r], void 0;
                if (i.param || i.depends) {
                    var a = !0;
                    switch (typeof i.depends) {
                        case"string":
                            a = !!e(i.depends, n.form).length;
                            break;
                        case"function":
                            a = i.depends.call(n, n)
                    }
                    a ? t[r] = void 0 !== i.param ? i.param : !0 : delete t[r]
                }
            }), e.each(t, function (r, i) {
                t[r] = e.isFunction(i) ? i(n) : i
            }), e.each(["minlength", "maxlength"], function () {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function () {
                var n;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
            }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        }, normalizeRule: function (t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), function () {
                    n[this] = !0
                }), t = n
            }
            return t
        }, addMethod: function (t, n, r) {
            e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== r ? r : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        }, methods: {required: function (t, n, r) {
            if (!this.depend(r, n))return"dependency-mismatch";
            if ("select" === n.nodeName.toLowerCase()) {
                var i = e(n).val();
                return i && i.length > 0
            }
            return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
        }, email: function (e, t) {
            return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
        }, url: function (e, t) {
            return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
        }, date: function (e, t) {
            return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
        }, dateISO: function (e, t) {
            return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
        }, number: function (e, t) {
            return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
        }, digits: function (e, t) {
            return this.optional(t) || /^\d+$/.test(e)
        }, creditcard: function (e, t) {
            if (this.optional(t))return"dependency-mismatch";
            if (/[^0-9 \-]+/.test(e))return!1;
            var n = 0, r = 0, i = !1;
            e = e.replace(/\D/g, "");
            for (var a = e.length - 1; a >= 0; a--) {
                var o = e.charAt(a);
                r = parseInt(o, 10), i && (r *= 2) > 9 && (r -= 9), n += r, i = !i
            }
            return 0 === n % 10
        }, minlength: function (t, n, r) {
            var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
            return this.optional(n) || i >= r
        }, maxlength: function (t, n, r) {
            var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
            return this.optional(n) || r >= i
        }, rangelength: function (t, n, r) {
            var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
            return this.optional(n) || i >= r[0] && i <= r[1]
        }, min: function (e, t, n) {
            return this.optional(t) || e >= n
        }, max: function (e, t, n) {
            return this.optional(t) || n >= e
        }, range: function (e, t, n) {
            return this.optional(t) || e >= n[0] && e <= n[1]
        }, equalTo: function (t, n, r) {
            var i = e(r);
            return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                e(n).valid()
            }), t === i.val()
        }, remote: function (t, n, r) {
            if (this.optional(n))return"dependency-mismatch";
            var i = this.previousValue(n);
            if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), i.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = i.message, r = "string" == typeof r && {url: r} || r, i.old === t)return i.valid;
            i.old = t;
            var a = this;
            this.startRequest(n);
            var o = {};
            return o[n.name] = t, e.ajax(e.extend(!0, {url: r, mode: "abort", port: "validate" + n.name, dataType: "json", data: o, success: function (r) {
                a.settings.messages[n.name].remote = i.originalMessage;
                var o = r === !0 || "true" === r;
                if (o) {
                    var s = a.formSubmitted;
                    a.prepareElement(n), a.formSubmitted = s, a.successList.push(n), delete a.invalid[n.name], a.showErrors()
                } else {
                    var u = {}, l = r || a.defaultMessage(n, "remote");
                    u[n.name] = i.message = e.isFunction(l) ? l(t) : l, a.invalid[n.name] = !0, a.showErrors(u)
                }
                i.valid = o, a.stopRequest(n, o)
            }}, r)), "pending"
        }}}), e.format = e.validator.format
    }(jQuery), !function (e) {
    var t = {};
    if (e.ajaxPrefilter)e.ajaxPrefilter(function (e, n, r) {
        var i = e.port;
        "abort" === e.mode && (t[i] && t[i].abort(), t[i] = r)
    }); else {
        var n = e.ajax;
        e.ajax = function (r) {
            var i = ("mode"in r ? r : e.ajaxSettings).mode, a = ("port"in r ? r : e.ajaxSettings).port;
            return"abort" === i ? (t[a] && t[a].abort(), t[a] = n.apply(this, arguments), t[a]) : n.apply(this, arguments)
        }
    }
}(jQuery), !function (e) {
    e.extend(e.fn, {validateDelegate: function (t, n, r) {
        return this.bind(n, function (n) {
            var i = e(n.target);
            return i.is(t) ? r.apply(i, arguments) : void 0
        })
    }})
}(jQuery);
var Query = function (e) {
    "use strict";
    var t = function (e) {
        var t, n, r, i, a = [];
        if ("undefined" == typeof e || null === e || "" === e)return a;
        for (0 === e.indexOf("?") && (e = e.substring(1)), n = e.toString().split(/[&;]/), t = 0; t < n.length; t++)r = n[t], i = r.split("="), a.push([i[0], i[1]]);
        return a
    }, n = t(e), r = function () {
        var e, t, r = "";
        for (e = 0; e < n.length; e++)t = n[e], r.length > 0 && (r += "&"), r += t.join("=");
        return r.length > 0 ? "?" + r : r
    }, i = function (e) {
        return e = decodeURIComponent(e), e = e.replace("+", " ")
    }, a = function (e) {
        var t, r;
        for (r = 0; r < n.length; r++)if (t = n[r], i(e) === i(t[0]))return t[1]
    }, o = function (e) {
        var t, r, a = [];
        for (t = 0; t < n.length; t++)r = n[t], i(e) === i(r[0]) && a.push(r[1]);
        return a
    }, s = function (e, t) {
        var r, a, o, s, u = [];
        for (r = 0; r < n.length; r++)a = n[r], o = i(a[0]) === i(e), s = i(a[1]) === i(t), (1 === arguments.length && !o || 2 === arguments.length && !o && !s) && u.push(a);
        return n = u, this
    }, u = function (e, t, r) {
        return 3 === arguments.length && -1 !== r ? (r = Math.min(r, n.length), n.splice(r, 0, [e, t])) : arguments.length > 0 && n.push([e, t]), this
    }, l = function (e, t, r) {
        var a, o, l = -1;
        if (3 === arguments.length) {
            for (a = 0; a < n.length; a++)if (o = n[a], i(o[0]) === i(e) && decodeURIComponent(o[1]) === i(r)) {
                l = a;
                break
            }
            s(e, r).addParam(e, t, l)
        } else {
            for (a = 0; a < n.length; a++)if (o = n[a], i(o[0]) === i(e)) {
                l = a;
                break
            }
            s(e), u(e, t, l)
        }
        return this
    };
    return{getParamValue: a, getParamValues: o, deleteParam: s, addParam: u, replaceParam: l, toString: r}
}, Uri = function (e) {
    "use strict";
    var t = !1, n = function (e) {
        for (var n = {strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/, loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}, r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], i = {name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g}, a = n[t ? "strict" : "loose"].exec(e), o = {}, s = 14; s--;)o[r[s]] = a[s] || "";
        return o[i.name] = {}, o[r[12]].replace(i.parser, function (e, t, n) {
            t && (o[i.name][t] = n)
        }), o
    }, r = n(e || ""), i = new Query(r.query), a = function (e) {
        return"undefined" != typeof e && (r.protocol = e), r.protocol
    }, o = null, s = function (e) {
        return"undefined" != typeof e && (o = e), null === o ? -1 !== r.source.indexOf("//") : o
    }, u = function (e) {
        return"undefined" != typeof e && (r.userInfo = e), r.userInfo
    }, l = function (e) {
        return"undefined" != typeof e && (r.host = e), r.host
    }, c = function (e) {
        return"undefined" != typeof e && (r.port = e), r.port
    }, d = function (e) {
        return"undefined" != typeof e && (r.path = e), r.path
    }, f = function (e) {
        return"undefined" != typeof e && (i = new Query(e)), i
    }, p = function (e) {
        return"undefined" != typeof e && (r.anchor = e), r.anchor
    }, h = function (e) {
        return a(e), this
    }, m = function (e) {
        return s(e), this
    }, g = function (e) {
        return u(e), this
    }, v = function (e) {
        return l(e), this
    }, y = function (e) {
        return c(e), this
    }, b = function (e) {
        return d(e), this
    }, x = function (e) {
        return f(e), this
    }, F = function (e) {
        return p(e), this
    }, w = function (e) {
        return f().getParamValue(e)
    }, C = function (e) {
        return f().getParamValues(e)
    }, T = function (e, t) {
        return 2 === arguments.length ? f().deleteParam(e, t) : f().deleteParam(e), this
    }, k = function (e, t, n) {
        return 3 === arguments.length ? f().addParam(e, t, n) : f().addParam(e, t), this
    }, E = function (e, t, n) {
        return 3 === arguments.length ? f().replaceParam(e, t, n) : f().replaceParam(e, t), this
    }, N = function () {
        var e = "", t = function (e) {
            return null !== e && "" !== e
        };
        return t(a()) ? (e += a(), a().indexOf(":") !== a().length - 1 && (e += ":"), e += "//") : s() && t(l()) && (e += "//"), t(u()) && t(l()) && (e += u(), u().indexOf("@") !== u().length - 1 && (e += "@")), t(l()) && (e += l(), t(c()) && (e += ":" + c())), t(d()) ? e += d() : t(l()) && (t(f().toString()) || t(p())) && (e += "/"), t(f().toString()) && (0 !== f().toString().indexOf("?") && (e += "?"), e += f().toString()), t(p()) && (0 !== p().indexOf("#") && (e += "#"), e += p()), e
    }, S = function () {
        return new Uri(N())
    };
    return{protocol: a, hasAuthorityPrefix: s, userInfo: u, host: l, port: c, path: d, query: f, anchor: p, setProtocol: h, setHasAuthorityPrefix: m, setUserInfo: g, setHost: v, setPort: y, setPath: b, setQuery: x, setAnchor: F, getQueryParamValue: w, getQueryParamValues: C, deleteQueryParam: T, addQueryParam: k, replaceQueryParam: E, toString: N, clone: S}
}, jsUri = Uri;
!function () {
    window.Spree = function () {
        function e() {
        }

        return e.url = function (t, n) {
            return void 0 === t.path && (t = new Uri(t)), n && $.each(n, function (e, n) {
                return t.addQueryParam(e, n)
            }), e.api_key && t.addQueryParam("token", e.api_key), t
        }, e.uri = function (e, t) {
            return url(e, t)
        }, e.ajax = function (t, n) {
            var r;
            return"string" == typeof t ? $.ajax(e.url(t).toString(), n) : (r = t.url, delete t.url, $.ajax(e.url(r).toString(), t))
        }, e
    }()
}.call(this), function () {
    this.disableSaveOnClick = function () {
        return $("form.edit_order").submit(function () {
            return $(this).find(":submit, :image").attr("disabled", !0).removeClass("primary").addClass("disabled")
        })
    }, $(function () {
        var e, t, n, r;
        return $("#checkout_form_address").is("*") && ($("#checkout_form_address").validate(), e = function (e) {
            return $("p#" + e + "country" + " span#" + e + "country-selection :only-child").val()
        }, t = function (t) {
            return state_mapper[e(t)]
        }, n = function (t) {
            return states_required_mapper[e(t)]
        }, r = function (e) {
            var r, i, a, o, s, u, l, c;
            return u = t(e), l = n(e), a = $("p#" + e + "state"), o = a.find("select"), i = a.find("input"), s = a.find("state-required"), u ? (r = parseInt(o.val()), o.html(""), c = [
                ["", ""]
            ].concat(u), $.each(c, function (e, t) {
                var n;
                return n = $(document.createElement("option")).attr("value", t[0]).html(t[1]), r === t[0] && n.prop("selected", !0), o.append(n)
            }), o.prop("disabled", !1).show(), i.hide().prop("disabled", !0), a.show(), s.show()) : (o.hide().prop("disabled", !0), i.show(), l ? s.show() : (i.val(""), s.hide()), a.toggle(!!l), i.prop("disabled", !l))
        }, $("p#bcountry select").change(function () {
            return r("b")
        }), $("p#scountry select").change(function () {
            return r("s")
        }), r("b"), r("s"), $("input#order_use_billing").click(function () {
            return $(this).is(":checked") ? ($("#shipping .inner").hide(), $("#shipping .inner input, #shipping .inner select").prop("disabled", !0)) : ($("#shipping .inner").show(), $("#shipping .inner input, #shipping .inner select").prop("disabled", !1), t("s") ? $("span#sstate input").hide().prop("disabled", !0) : $("span#sstate select").hide().prop("disabled", !0))
        }).triggerHandler("click")), $("#checkout_form_payment").is("*") ? ($('input[type="radio"][name="order[payments_attributes][][payment_method_id]"]').click(function () {
            return $("#payment-methods li").hide(), this.checked ? $("#payment_method_" + this.value).show() : void 0
        }), $(document).on("click", "#cvv_link", function (e) {
            var t, n;
            return t = "cvv_info", n = "left=20,top=20,width=500,height=500,toolbar=0,resizable=0,scrollbars=1", window.open($(this).attr("href"), t, n), e.preventDefault()
        }), $('input[type="radio"]:checked').click()) : void 0
    })
}.call(this), function () {
    var e, t, n;
    e = function () {
        var e;
        return e = $("#product-images ul.thumbnails"), $("#main-image").data("selectedThumb", $("#main-image img").attr("src")), e.find("li").eq(0).addClass("selected"), e.find("a").on("click", function (t) {
            return $("#main-image").data("selectedThumb", $(t.currentTarget).attr("href")), $("#main-image").data("selectedThumbId", $(t.currentTarget).parent().attr("id")), $(this).mouseout(function () {
                return e.find("li").removeClass("selected"), $(t.currentTarget).parent("li").addClass("selected")
            }), !1
        }), e.find("li").on("mouseenter", function (e) {
            return $("#main-image img").attr("src", $(e.currentTarget).find("a").attr("href"))
        }), e.find("li").on("mouseleave", function () {
            return $("#main-image img").attr("src", $("#main-image").data("selectedThumb"))
        })
    }, t = function (e) {
        var t, n, r;
        return $("li.vtmb").hide(), $("li.tmb-" + e).show(), t = $("#" + $("#main-image").data("selectedThumbId")), t.hasClass("vtmb-" + e) ? void 0 : (r = $($("ul.thumbnails li:visible.vtmb").eq(0)), r.length > 0 || (r = $($("ul.thumbnails li:visible").eq(0))), n = r.find("a").attr("href"), $("ul.thumbnails li").removeClass("selected"), r.addClass("selected"), $("#main-image img").attr("src", n), $("#main-image").data("selectedThumb", n), $("#main-image").data("selectedThumbId", r.attr("id")))
    }, n = function (e) {
        var t;
        return t = e.data("price"), t ? $(".price.selling").text(t) : void 0
    }, $(function () {
        var r;
        return r = $('#product-variants input[type="radio"]'), e(), r.length > 0 && (t(r.eq(0).attr("value")), n(r.first())), $('#product-variants input[type="radio"]').click(function () {
            return t(this.value), n($(this))
        })
    })
}.call(this), function () {
    $(function () {
        return $("form#update-cart").is("*") && $("form#update-cart a.delete").show().one("click", function () {
            return $(this).parents(".line-item").first().find("input.line_item_quantity").val(0), $(this).parents("form").first().submit(), !1
        }), $("form#update-cart").submit(function () {
            return $("form#update-cart #update-button").attr("disabled", !0)
        })
    })
}.call(this);