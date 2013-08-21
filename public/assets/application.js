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
function log(e) {
    window.console && showLog && console.log(e)
}
function css_browser_selector(e) {
    function t() {
        var e = window.outerWidth || b.clientWidth, t = window.outerHeight || b.clientHeight;
        i.orientation = t > e ? "portrait" : "landscape", b.className = b.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "");
        for (var a = s - 1; a >= 0; a--)if (e >= n[a]) {
            i.maxw = n[a];
            break
        }
        widthClasses = "";
        for (var r in i)widthClasses += " " + r + "_" + i[r];
        return b.className = b.className + widthClasses, widthClasses
    }

    var i = {}, n = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560], s = n.length, a = e.toLowerCase(), r = function (e) {
        return RegExp(e, "i").test(a)
    }, o = function (e, t) {
        t = t.replace(".", "_");
        for (var i = t.indexOf("_"), n = ""; i > 0;)n += " " + e + t.substring(0, i), i = t.indexOf("_", i + 1);
        return n += " " + e + t
    }, l = "gecko", c = "webkit", h = "chrome", u = "firefox", d = "safari", p = "opera", f = "mobile", g = "android", m = "blackberry", v = "lang_", _ = "device_", b = document.documentElement, y = [!/opera|webtv/i.test(a) && /msie\s(\d+)/.test(a) ? "ie ie" + (/trident\/4\.0/.test(a) ? "8" : RegExp.$1) : r("firefox/") ? l + " " + u + (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(a) ? " " + u + RegExp.$2 + " " + u + RegExp.$2 + "_" + RegExp.$4 : "") : r("gecko/") ? l : r("opera") ? p + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(a) ? " " + p + RegExp.$2 + " " + p + RegExp.$2 + "_" + RegExp.$4 : /opera(\s|\/)(\d+)\.(\d+)/.test(a) ? " " + p + RegExp.$2 + " " + p + RegExp.$2 + "_" + RegExp.$3 : "") : r("konqueror") ? "konqueror" : r("blackberry") ? m + (/Version\/(\d+)(\.(\d+)+)/i.test(a) ? " " + m + RegExp.$1 + " " + m + RegExp.$1 + RegExp.$2.replace(".", "_") : /Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(a) ? " " + m + RegExp.$2 + (RegExp.$3 ? " " + m + RegExp.$2 + RegExp.$3 : "") : "") : r("android") ? g + (/Version\/(\d+)(\.(\d+))+/i.test(a) ? " " + g + RegExp.$1 + " " + g + RegExp.$1 + RegExp.$2.replace(".", "_") : "") + (/Android (.+); (.+) Build/i.test(a) ? " " + _ + RegExp.$2.replace(/ /g, "_").replace(/-/g, "_") : "") : r("chrome") ? c + " " + h + (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(a) ? " " + h + RegExp.$2 + (RegExp.$4 > 0 ? " " + h + RegExp.$2 + "_" + RegExp.$4 : "") : "") : r("iron") ? c + " iron" : r("applewebkit/") ? c + " " + d + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(a) ? " " + d + RegExp.$2 + " " + d + RegExp.$2 + RegExp.$3.replace(".", "_") : / Safari\/(\d+)/i.test(a) ? "419" == RegExp.$1 || "417" == RegExp.$1 || "416" == RegExp.$1 || "412" == RegExp.$1 ? " " + d + "2_0" : "312" == RegExp.$1 ? " " + d + "1_3" : "125" == RegExp.$1 ? " " + d + "1_2" : "85" == RegExp.$1 ? " " + d + "1_0" : "" : "") : r("mozilla/") ? l : "", r("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk") ? f : "", r("j2me") ? "j2me" : r("ipad|ipod|iphone") ? (/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(a) ? "ios" + o("ios", RegExp.$2) : "") + " " + (/(ip(ad|od|hone))/gi.test(a) ? RegExp.$1 : "") : r("playbook") ? "playbook" : r("kindle|silk") ? "kindle" : r("playbook") ? "playbook" : r("mac") ? "mac" + (/mac os x ((\d+)[.|_](\d+))/.test(a) ? " mac" + RegExp.$2 + " mac" + RegExp.$1.replace(".", "_") : "") : r("win") ? "win" + (r("windows nt 6.2") ? " win8" : r("windows nt 6.1") ? " win7" : r("windows nt 6.0") ? " vista" : r("windows nt 5.2") || r("windows nt 5.1") ? " win_xp" : r("windows nt 5.0") ? " win_2k" : r("windows nt 4.0") || r("WinNT4.0") ? " win_nt" : "") : r("freebsd") ? "freebsd" : r("x11|linux") ? "linux" : "", /[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(a) ? (v + RegExp.$2).replace("-", "_") + ("" != RegExp.$3 ? (" " + v + RegExp.$1).replace("-", "_") : "") : "", r("ipad|iphone|ipod") && !r("safari") ? "ipad_app" : ""];
    window.onresize = t, t();
    var x = y.join(" ") + " js ";
    return b.className = (x + b.className.replace(/\b(no[-|_]?)?js\b/g, "")).replace(/^ /, "").replace(/ +/g, " "), x
}
function cleanTaxons(e) {
    var t = $.map(e.taxons, function (e) {
        return e
    });
    return t
}
!function (e, t) {
    function i(e) {
        var t = e.length, i = lt.type(e);
        return lt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || "function" !== i && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function n(e) {
        var t = kt[e] = {};
        return lt.each(e.match(ht) || [], function (e, i) {
            t[i] = !0
        }), t
    }

    function s(e, i, n, s) {
        if (lt.acceptData(e)) {
            var a, r, o = lt.expando, l = "string" == typeof i, c = e.nodeType, h = c ? lt.cache : e, u = c ? e[o] : e[o] && o;
            if (u && h[u] && (s || h[u].data) || !l || n !== t)return u || (c ? e[o] = u = Z.pop() || lt.guid++ : u = o), h[u] || (h[u] = {}, c || (h[u].toJSON = lt.noop)), ("object" == typeof i || "function" == typeof i) && (s ? h[u] = lt.extend(h[u], i) : h[u].data = lt.extend(h[u].data, i)), a = h[u], s || (a.data || (a.data = {}), a = a.data), n !== t && (a[lt.camelCase(i)] = n), l ? (r = a[i], null == r && (r = a[lt.camelCase(i)])) : r = a, r
        }
    }

    function a(e, t, i) {
        if (lt.acceptData(e)) {
            var n, s, a, r = e.nodeType, l = r ? lt.cache : e, c = r ? e[lt.expando] : lt.expando;
            if (l[c]) {
                if (t && (a = i ? l[c] : l[c].data)) {
                    lt.isArray(t) ? t = t.concat(lt.map(t, lt.camelCase)) : t in a ? t = [t] : (t = lt.camelCase(t), t = t in a ? [t] : t.split(" "));
                    for (n = 0, s = t.length; s > n; n++)delete a[t[n]];
                    if (!(i ? o : lt.isEmptyObject)(a))return
                }
                (i || (delete l[c].data, o(l[c]))) && (r ? lt.cleanData([e], !0) : lt.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
            }
        }
    }

    function r(e, i, n) {
        if (n === t && 1 === e.nodeType) {
            var s = "data-" + i.replace(jt, "-$1").toLowerCase();
            if (n = e.getAttribute(s), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? lt.parseJSON(n) : n
                } catch (a) {
                }
                lt.data(e, i, n)
            } else n = t
        }
        return n
    }

    function o(e) {
        var t;
        for (t in e)if (("data" !== t || !lt.isEmptyObject(e[t])) && "toJSON" !== t)return!1;
        return!0
    }

    function l() {
        return!0
    }

    function c() {
        return!1
    }

    function h(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function u(e, t, i) {
        if (t = t || 0, lt.isFunction(t))return lt.grep(e, function (e, n) {
            var s = !!t.call(e, n, e);
            return s === i
        });
        if (t.nodeType)return lt.grep(e, function (e) {
            return e === t === i
        });
        if ("string" == typeof t) {
            var n = lt.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (qt.test(t))return lt.filter(t, n, !i);
            t = lt.filter(t, n)
        }
        return lt.grep(e, function (e) {
            return lt.inArray(e, t) >= 0 === i
        })
    }

    function d(e) {
        var t = Yt.split("|"), i = e.createDocumentFragment();
        if (i.createElement)for (; t.length;)i.createElement(t.pop());
        return i
    }

    function p(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function f(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function g(e) {
        var t = si.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++)lt._data(i, "globalEval", !t || lt._data(t[n], "globalEval"))
    }

    function v(e, t) {
        if (1 === t.nodeType && lt.hasData(e)) {
            var i, n, s, a = lt._data(e), r = lt._data(t, a), o = a.events;
            if (o) {
                delete r.handle, r.events = {};
                for (i in o)for (n = 0, s = o[i].length; s > n; n++)lt.event.add(t, i, o[i][n])
            }
            r.data && (r.data = lt.extend({}, r.data))
        }
    }

    function _(e, t) {
        var i, n, s;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !lt.support.noCloneEvent && t[lt.expando]) {
                s = lt._data(t);
                for (n in s.events)lt.removeEvent(t, n, s.handle);
                t.removeAttribute(lt.expando)
            }
            "script" === i && t.text !== e.text ? (f(t).text = e.text, g(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), lt.support.html5Clone && e.innerHTML && !lt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && ti.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, i) {
        var n, s, a = 0, r = typeof e.getElementsByTagName !== Q ? e.getElementsByTagName(i || "*") : typeof e.querySelectorAll !== Q ? e.querySelectorAll(i || "*") : t;
        if (!r)for (r = [], n = e.childNodes || e; null != (s = n[a]); a++)!i || lt.nodeName(s, i) ? r.push(s) : lt.merge(r, b(s, i));
        return i === t || i && lt.nodeName(e, i) ? lt.merge([e], r) : r
    }

    function y(e) {
        ti.test(e.type) && (e.defaultChecked = e.checked)
    }

    function x(e, t) {
        if (t in e)return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, s = Ci.length; s--;)if (t = Ci[s] + i, t in e)return t;
        return n
    }

    function w(e, t) {
        return e = t || e, "none" === lt.css(e, "display") || !lt.contains(e.ownerDocument, e)
    }

    function k(e, t) {
        for (var i, n, s, a = [], r = 0, o = e.length; o > r; r++)n = e[r], n.style && (a[r] = lt._data(n, "olddisplay"), i = n.style.display, t ? (a[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && w(n) && (a[r] = lt._data(n, "olddisplay", T(n.nodeName)))) : a[r] || (s = w(n), (i && "none" !== i || !s) && lt._data(n, "olddisplay", s ? i : lt.css(n, "display"))));
        for (r = 0; o > r; r++)n = e[r], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? a[r] || "" : "none"));
        return e
    }

    function C(e, t, i) {
        var n = vi.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function j(e, t, i, n, s) {
        for (var a = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > a; a += 2)"margin" === i && (r += lt.css(e, i + ki[a], !0, s)), n ? ("content" === i && (r -= lt.css(e, "padding" + ki[a], !0, s)), "margin" !== i && (r -= lt.css(e, "border" + ki[a] + "Width", !0, s))) : (r += lt.css(e, "padding" + ki[a], !0, s), "padding" !== i && (r += lt.css(e, "border" + ki[a] + "Width", !0, s)));
        return r
    }

    function S(e, t, i) {
        var n = !0, s = "width" === t ? e.offsetWidth : e.offsetHeight, a = hi(e), r = lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, a);
        if (0 >= s || null == s) {
            if (s = ui(e, t, a), (0 > s || null == s) && (s = e.style[t]), _i.test(s))return s;
            n = r && (lt.support.boxSizingReliable || s === e.style[t]), s = parseFloat(s) || 0
        }
        return s + j(e, t, i || (r ? "border" : "content"), n, a) + "px"
    }

    function T(e) {
        var t = V, i = yi[e];
        return i || (i = D(e, t), "none" !== i && i || (ci = (ci || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ci[0].contentWindow || ci[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), i = D(e, t), ci.detach()), yi[e] = i), i
    }

    function D(e, t) {
        var i = lt(t.createElement(e)).appendTo(t.body), n = lt.css(i[0], "display");
        return i.remove(), n
    }

    function E(e, t, i, n) {
        var s;
        if (lt.isArray(t))lt.each(t, function (t, s) {
            i || Si.test(e) ? n(e, s) : E(e + "[" + ("object" == typeof s ? t : "") + "]", s, i, n)
        }); else if (i || "object" !== lt.type(t))n(e, t); else for (s in t)E(e + "[" + s + "]", t[s], i, n)
    }

    function $(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, s = 0, a = t.toLowerCase().match(ht) || [];
            if (lt.isFunction(i))for (; n = a[s++];)"+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function A(e, t, i, n) {
        function s(o) {
            var l;
            return a[o] = !0, lt.each(e[o] || [], function (e, o) {
                var c = o(t, i, n);
                return"string" != typeof c || r || a[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }

        var a = {}, r = e === qi;
        return s(t.dataTypes[0]) || !a["*"] && s("*")
    }

    function P(e, i) {
        var n, s, a = lt.ajaxSettings.flatOptions || {};
        for (s in i)i[s] !== t && ((a[s] ? e : n || (n = {}))[s] = i[s]);
        return n && lt.extend(!0, e, n), e
    }

    function N(e, i, n) {
        var s, a, r, o, l = e.contents, c = e.dataTypes, h = e.responseFields;
        for (o in h)o in n && (i[h[o]] = n[o]);
        for (; "*" === c[0];)c.shift(), a === t && (a = e.mimeType || i.getResponseHeader("Content-Type"));
        if (a)for (o in l)if (l[o] && l[o].test(a)) {
            c.unshift(o);
            break
        }
        if (c[0]in n)r = c[0]; else {
            for (o in n) {
                if (!c[0] || e.converters[o + " " + c[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== c[0] && c.unshift(r), n[r]) : void 0
    }

    function I(e, t) {
        var i, n, s, a, r = {}, o = 0, l = e.dataTypes.slice(), c = l[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1])for (s in e.converters)r[s.toLowerCase()] = e.converters[s];
        for (; n = l[++o];)if ("*" !== n) {
            if ("*" !== c && c !== n) {
                if (s = r[c + " " + n] || r["* " + n], !s)for (i in r)if (a = i.split(" "), a[1] === n && (s = r[c + " " + a[0]] || r["* " + a[0]])) {
                    s === !0 ? s = r[i] : r[i] !== !0 && (n = a[0], l.splice(o--, 0, n));
                    break
                }
                if (s !== !0)if (s && e["throws"])t = s(t); else try {
                    t = s(t)
                } catch (h) {
                    return{state: "parsererror", error: s ? h : "No conversion from " + c + " to " + n}
                }
            }
            c = n
        }
        return{state: "success", data: t}
    }

    function M() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function H() {
        return setTimeout(function () {
            Ji = t
        }), Ji = lt.now()
    }

    function O(e, t) {
        lt.each(t, function (t, i) {
            for (var n = (an[t] || []).concat(an["*"]), s = 0, a = n.length; a > s; s++)if (n[s].call(e, t, i))return
        })
    }

    function z(e, t, i) {
        var n, s, a = 0, r = sn.length, o = lt.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s)return!1;
            for (var t = Ji || H(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, a = 1 - n, r = 0, l = c.tweens.length; l > r; r++)c.tweens[r].run(a);
            return o.notifyWith(e, [c, a, i]), 1 > a && l ? i : (o.resolveWith(e, [c]), !1)
        }, c = o.promise({elem: e, props: lt.extend({}, t), opts: lt.extend(!0, {specialEasing: {}}, i), originalProperties: t, originalOptions: i, startTime: Ji || H(), duration: i.duration, tweens: [], createTween: function (t, i) {
            var n = lt.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(n), n
        }, stop: function (t) {
            var i = 0, n = t ? c.tweens.length : 0;
            if (s)return this;
            for (s = !0; n > i; i++)c.tweens[i].run(1);
            return t ? o.resolveWith(e, [c, t]) : o.rejectWith(e, [c, t]), this
        }}), h = c.props;
        for (L(h, c.opts.specialEasing); r > a; a++)if (n = sn[a].call(c, e, h, c.opts))return n;
        return O(c, h), lt.isFunction(c.opts.start) && c.opts.start.call(e, c), lt.fx.timer(lt.extend(l, {elem: e, anim: c, queue: c.opts.queue})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function L(e, t) {
        var i, n, s, a, r;
        for (s in e)if (n = lt.camelCase(s), a = t[n], i = e[s], lt.isArray(i) && (a = i[1], i = e[s] = i[0]), s !== n && (e[n] = i, delete e[s]), r = lt.cssHooks[n], r && "expand"in r) {
            i = r.expand(i), delete e[n];
            for (s in i)s in e || (e[s] = i[s], t[s] = a)
        } else t[n] = a
    }

    function R(e, t, i) {
        var n, s, a, r, o, l, c, h, u, d = this, p = e.style, f = {}, g = [], m = e.nodeType && w(e);
        i.queue || (h = lt._queueHooks(e, "fx"), null == h.unqueued && (h.unqueued = 0, u = h.empty.fire, h.empty.fire = function () {
            h.unqueued || u()
        }), h.unqueued++, d.always(function () {
            d.always(function () {
                h.unqueued--, lt.queue(e, "fx").length || h.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === lt.css(e, "display") && "none" === lt.css(e, "float") && (lt.support.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", lt.support.shrinkWrapBlocks || d.always(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (s in t)if (r = t[s], en.exec(r)) {
            if (delete t[s], l = l || "toggle" === r, r === (m ? "hide" : "show"))continue;
            g.push(s)
        }
        if (a = g.length) {
            o = lt._data(e, "fxshow") || lt._data(e, "fxshow", {}), "hidden"in o && (m = o.hidden), l && (o.hidden = !m), m ? lt(e).show() : d.done(function () {
                lt(e).hide()
            }), d.done(function () {
                var t;
                lt._removeData(e, "fxshow");
                for (t in f)lt.style(e, t, f[t])
            });
            for (s = 0; a > s; s++)n = g[s], c = d.createTween(n, m ? o[n] : 0), f[n] = o[n] || lt.style(e, n), n in o || (o[n] = c.start, m && (c.end = c.start, c.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function W(e, t, i, n, s) {
        return new W.prototype.init(e, t, i, n, s)
    }

    function q(e, t) {
        var i, n = {height: e}, s = 0;
        for (t = t ? 1 : 0; 4 > s; s += 2 - t)i = ki[s], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function B(e) {
        return lt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var U, Y, Q = typeof t, V = e.document, K = e.location, X = e.jQuery, G = e.$, J = {}, Z = [], et = "1.9.1", tt = Z.concat, it = Z.push, nt = Z.slice, st = Z.indexOf, at = J.toString, rt = J.hasOwnProperty, ot = et.trim, lt = function (e, t) {
        return new lt.fn.init(e, t, Y)
    }, ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ht = /\S+/g, ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, dt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ft = /^[\],:{}\s]*$/, gt = /(?:^|:|,)(?:\s*\[)+/g, mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, _t = /^-ms-/, bt = /-([\da-z])/gi, yt = function (e, t) {
        return t.toUpperCase()
    }, xt = function (e) {
        (V.addEventListener || "load" === e.type || "complete" === V.readyState) && (wt(), lt.ready())
    }, wt = function () {
        V.addEventListener ? (V.removeEventListener("DOMContentLoaded", xt, !1), e.removeEventListener("load", xt, !1)) : (V.detachEvent("onreadystatechange", xt), e.detachEvent("onload", xt))
    };
    lt.fn = lt.prototype = {jquery: et, constructor: lt, init: function (e, i, n) {
        var s, a;
        if (!e)return this;
        if ("string" == typeof e) {
            if (s = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : dt.exec(e), !s || !s[1] && i)return!i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
            if (s[1]) {
                if (i = i instanceof lt ? i[0] : i, lt.merge(this, lt.parseHTML(s[1], i && i.nodeType ? i.ownerDocument || i : V, !0)), pt.test(s[1]) && lt.isPlainObject(i))for (s in i)lt.isFunction(this[s]) ? this[s](i[s]) : this.attr(s, i[s]);
                return this
            }
            if (a = V.getElementById(s[2]), a && a.parentNode) {
                if (a.id !== s[2])return n.find(e);
                this.length = 1, this[0] = a
            }
            return this.context = V, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : lt.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), lt.makeArray(e, this))
    }, selector: "", length: 0, size: function () {
        return this.length
    }, toArray: function () {
        return nt.call(this)
    }, get: function (e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    }, pushStack: function (e) {
        var t = lt.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
        return lt.each(this, e, t)
    }, ready: function (e) {
        return lt.ready.promise().done(e), this
    }, slice: function () {
        return this.pushStack(nt.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (e) {
        var t = this.length, i = +e + (0 > e ? t : 0);
        return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
    }, map: function (e) {
        return this.pushStack(lt.map(this, function (t, i) {
            return e.call(t, i, t)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: it, sort: [].sort, splice: [].splice}, lt.fn.init.prototype = lt.fn, lt.extend = lt.fn.extend = function () {
        var e, i, n, s, a, r, o = arguments[0] || {}, l = 1, c = arguments.length, h = !1;
        for ("boolean" == typeof o && (h = o, o = arguments[1] || {}, l = 2), "object" == typeof o || lt.isFunction(o) || (o = {}), c === l && (o = this, --l); c > l; l++)if (null != (a = arguments[l]))for (s in a)e = o[s], n = a[s], o !== n && (h && n && (lt.isPlainObject(n) || (i = lt.isArray(n))) ? (i ? (i = !1, r = e && lt.isArray(e) ? e : []) : r = e && lt.isPlainObject(e) ? e : {}, o[s] = lt.extend(h, r, n)) : n !== t && (o[s] = n));
        return o
    }, lt.extend({noConflict: function (t) {
        return e.$ === lt && (e.$ = G), t && e.jQuery === lt && (e.jQuery = X), lt
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? lt.readyWait++ : lt.ready(!0)
    }, ready: function (e) {
        if (e === !0 ? !--lt.readyWait : !lt.isReady) {
            if (!V.body)return setTimeout(lt.ready);
            lt.isReady = !0, e !== !0 && --lt.readyWait > 0 || (U.resolveWith(V, [lt]), lt.fn.trigger && lt(V).trigger("ready").off("ready"))
        }
    }, isFunction: function (e) {
        return"function" === lt.type(e)
    }, isArray: Array.isArray || function (e) {
        return"array" === lt.type(e)
    }, isWindow: function (e) {
        return null != e && e == e.window
    }, isNumeric: function (e) {
        return!isNaN(parseFloat(e)) && isFinite(e)
    }, type: function (e) {
        return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? J[at.call(e)] || "object" : typeof e
    }, isPlainObject: function (e) {
        if (!e || "object" !== lt.type(e) || e.nodeType || lt.isWindow(e))return!1;
        try {
            if (e.constructor && !rt.call(e, "constructor") && !rt.call(e.constructor.prototype, "isPrototypeOf"))return!1
        } catch (i) {
            return!1
        }
        var n;
        for (n in e);
        return n === t || rt.call(e, n)
    }, isEmptyObject: function (e) {
        var t;
        for (t in e)return!1;
        return!0
    }, error: function (e) {
        throw new Error(e)
    }, parseHTML: function (e, t, i) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || V;
        var n = pt.exec(e), s = !i && [];
        return n ? [t.createElement(n[1])] : (n = lt.buildFragment([e], t, s), s && lt(s).remove(), lt.merge([], n.childNodes))
    }, parseJSON: function (t) {
        return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = lt.trim(t), t && ft.test(t.replace(mt, "@").replace(vt, "]").replace(gt, ""))) ? new Function("return " + t)() : (lt.error("Invalid JSON: " + t), void 0)
    }, parseXML: function (i) {
        var n, s;
        if (!i || "string" != typeof i)return null;
        try {
            e.DOMParser ? (s = new DOMParser, n = s.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
        } catch (a) {
            n = t
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + i), n
    }, noop: function () {
    }, globalEval: function (t) {
        t && lt.trim(t) && (e.execScript || function (t) {
            e.eval.call(e, t)
        })(t)
    }, camelCase: function (e) {
        return e.replace(_t, "ms-").replace(bt, yt)
    }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, n) {
        var s, a = 0, r = e.length, o = i(e);
        if (n) {
            if (o)for (; r > a && (s = t.apply(e[a], n), s !== !1); a++); else for (a in e)if (s = t.apply(e[a], n), s === !1)break
        } else if (o)for (; r > a && (s = t.call(e[a], a, e[a]), s !== !1); a++); else for (a in e)if (s = t.call(e[a], a, e[a]), s === !1)break;
        return e
    }, trim: ot && !ot.call("﻿ ") ? function (e) {
        return null == e ? "" : ot.call(e)
    } : function (e) {
        return null == e ? "" : (e + "").replace(ut, "")
    }, makeArray: function (e, t) {
        var n = t || [];
        return null != e && (i(Object(e)) ? lt.merge(n, "string" == typeof e ? [e] : e) : it.call(n, e)), n
    }, inArray: function (e, t, i) {
        var n;
        if (t) {
            if (st)return st.call(t, e, i);
            for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)if (i in t && t[i] === e)return i
        }
        return-1
    }, merge: function (e, i) {
        var n = i.length, s = e.length, a = 0;
        if ("number" == typeof n)for (; n > a; a++)e[s++] = i[a]; else for (; i[a] !== t;)e[s++] = i[a++];
        return e.length = s, e
    }, grep: function (e, t, i) {
        var n, s = [], a = 0, r = e.length;
        for (i = !!i; r > a; a++)n = !!t(e[a], a), i !== n && s.push(e[a]);
        return s
    }, map: function (e, t, n) {
        var s, a = 0, r = e.length, o = i(e), l = [];
        if (o)for (; r > a; a++)s = t(e[a], a, n), null != s && (l[l.length] = s); else for (a in e)s = t(e[a], a, n), null != s && (l[l.length] = s);
        return tt.apply([], l)
    }, guid: 1, proxy: function (e, i) {
        var n, s, a;
        return"string" == typeof i && (a = e[i], i = e, e = a), lt.isFunction(e) ? (n = nt.call(arguments, 2), s = function () {
            return e.apply(i || this, n.concat(nt.call(arguments)))
        }, s.guid = e.guid = e.guid || lt.guid++, s) : t
    }, access: function (e, i, n, s, a, r, o) {
        var l = 0, c = e.length, h = null == n;
        if ("object" === lt.type(n)) {
            a = !0;
            for (l in n)lt.access(e, i, l, n[l], !0, r, o)
        } else if (s !== t && (a = !0, lt.isFunction(s) || (o = !0), h && (o ? (i.call(e, s), i = null) : (h = i, i = function (e, t, i) {
            return h.call(lt(e), i)
        })), i))for (; c > l; l++)i(e[l], n, o ? s : s.call(e[l], l, i(e[l], n)));
        return a ? e : h ? i.call(e) : c ? i(e[0], n) : r
    }, now: function () {
        return(new Date).getTime()
    }}), lt.ready.promise = function (t) {
        if (!U)if (U = lt.Deferred(), "complete" === V.readyState)setTimeout(lt.ready); else if (V.addEventListener)V.addEventListener("DOMContentLoaded", xt, !1), e.addEventListener("load", xt, !1); else {
            V.attachEvent("onreadystatechange", xt), e.attachEvent("onload", xt);
            var i = !1;
            try {
                i = null == e.frameElement && V.documentElement
            } catch (n) {
            }
            i && i.doScroll && function s() {
                if (!lt.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return setTimeout(s, 50)
                    }
                    wt(), lt.ready()
                }
            }()
        }
        return U.promise(t)
    }, lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        J["[object " + t + "]"] = t.toLowerCase()
    }), Y = lt(V);
    var kt = {};
    lt.Callbacks = function (e) {
        e = "string" == typeof e ? kt[e] || n(e) : lt.extend({}, e);
        var i, s, a, r, o, l, c = [], h = !e.once && [], u = function (t) {
            for (s = e.memory && t, a = !0, o = l || 0, l = 0, r = c.length, i = !0; c && r > o; o++)if (c[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                s = !1;
                break
            }
            i = !1, c && (h ? h.length && u(h.shift()) : s ? c = [] : d.disable())
        }, d = {add: function () {
            if (c) {
                var t = c.length;
                !function n(t) {
                    lt.each(t, function (t, i) {
                        var s = lt.type(i);
                        "function" === s ? e.unique && d.has(i) || c.push(i) : i && i.length && "string" !== s && n(i)
                    })
                }(arguments), i ? r = c.length : s && (l = t, u(s))
            }
            return this
        }, remove: function () {
            return c && lt.each(arguments, function (e, t) {
                for (var n; (n = lt.inArray(t, c, n)) > -1;)c.splice(n, 1), i && (r >= n && r--, o >= n && o--)
            }), this
        }, has: function (e) {
            return e ? lt.inArray(e, c) > -1 : !(!c || !c.length)
        }, empty: function () {
            return c = [], this
        }, disable: function () {
            return c = h = s = t, this
        }, disabled: function () {
            return!c
        }, lock: function () {
            return h = t, s || d.disable(), this
        }, locked: function () {
            return!h
        }, fireWith: function (e, t) {
            return t = t || [], t = [e, t.slice ? t.slice() : t], !c || a && !h || (i ? h.push(t) : u(t)), this
        }, fire: function () {
            return d.fireWith(this, arguments), this
        }, fired: function () {
            return!!a
        }};
        return d
    }, lt.extend({Deferred: function (e) {
        var t = [
            ["resolve", "done", lt.Callbacks("once memory"), "resolved"],
            ["reject", "fail", lt.Callbacks("once memory"), "rejected"],
            ["notify", "progress", lt.Callbacks("memory")]
        ], i = "pending", n = {state: function () {
            return i
        }, always: function () {
            return s.done(arguments).fail(arguments), this
        }, then: function () {
            var e = arguments;
            return lt.Deferred(function (i) {
                lt.each(t, function (t, a) {
                    var r = a[0], o = lt.isFunction(e[t]) && e[t];
                    s[a[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && lt.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r + "With"](this === n ? i.promise() : this, o ? [e] : arguments)
                    })
                }), e = null
            }).promise()
        }, promise: function (e) {
            return null != e ? lt.extend(e, n) : n
        }}, s = {};
        return n.pipe = n.then, lt.each(t, function (e, a) {
            var r = a[2], o = a[3];
            n[a[1]] = r.add, o && r.add(function () {
                i = o
            }, t[1 ^ e][2].disable, t[2][2].lock), s[a[0]] = function () {
                return s[a[0] + "With"](this === s ? n : this, arguments), this
            }, s[a[0] + "With"] = r.fireWith
        }), n.promise(s), e && e.call(s, s), s
    }, when: function (e) {
        var t, i, n, s = 0, a = nt.call(arguments), r = a.length, o = 1 !== r || e && lt.isFunction(e.promise) ? r : 0, l = 1 === o ? e : lt.Deferred(), c = function (e, i, n) {
            return function (s) {
                i[e] = this, n[e] = arguments.length > 1 ? nt.call(arguments) : s, n === t ? l.notifyWith(i, n) : --o || l.resolveWith(i, n)
            }
        };
        if (r > 1)for (t = new Array(r), i = new Array(r), n = new Array(r); r > s; s++)a[s] && lt.isFunction(a[s].promise) ? a[s].promise().done(c(s, n, a)).fail(l.reject).progress(c(s, i, t)) : --o;
        return o || l.resolveWith(n, a), l.promise()
    }}), lt.support = function () {
        var t, i, n, s, a, r, o, l, c, h, u = V.createElement("div");
        if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = u.getElementsByTagName("*"), n = u.getElementsByTagName("a")[0], !i || !n || !i.length)return{};
        a = V.createElement("select"), o = a.appendChild(V.createElement("option")), s = u.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", t = {getSetAttribute: "t" !== u.className, leadingWhitespace: 3 === u.firstChild.nodeType, tbody: !u.getElementsByTagName("tbody").length, htmlSerialize: !!u.getElementsByTagName("link").length, style: /top/.test(n.getAttribute("style")), hrefNormalized: "/a" === n.getAttribute("href"), opacity: /^0.5/.test(n.style.opacity), cssFloat: !!n.style.cssFloat, checkOn: !!s.value, optSelected: o.selected, enctype: !!V.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === V.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1}, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, a.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete u.test
        } catch (d) {
            t.deleteExpando = !1
        }
        s = V.createElement("input"), s.setAttribute("value", ""), t.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), r = V.createDocumentFragment(), r.appendChild(s), t.appendChecked = s.checked, t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, u.attachEvent && (u.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), u.cloneNode(!0).click());
        for (h in{submit: !0, change: !0, focusin: !0})u.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || u.attributes[l].expando === !1;
        return u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === u.style.backgroundClip, lt(function () {
            var i, n, s, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", r = V.getElementsByTagName("body")[0];
            r && (i = V.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(i).appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = u.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === s[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === u.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== r.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(u, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(u, null) || {width: "4px"}).width, n = u.appendChild(V.createElement("div")), n.style.cssText = u.style.cssText = a, n.style.marginRight = n.style.width = "0", u.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight)), typeof u.style.zoom !== Q && (u.innerHTML = "", u.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div></div>", u.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== u.offsetWidth, t.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(i), i = u = s = n = null)
        }), i = a = r = o = n = s = null, t
    }();
    var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, jt = /([A-Z])/g;
    lt.extend({cache: {}, expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (e) {
        return e = e.nodeType ? lt.cache[e[lt.expando]] : e[lt.expando], !!e && !o(e)
    }, data: function (e, t, i) {
        return s(e, t, i)
    }, removeData: function (e, t) {
        return a(e, t)
    }, _data: function (e, t, i) {
        return s(e, t, i, !0)
    }, _removeData: function (e, t) {
        return a(e, t, !0)
    }, acceptData: function (e) {
        if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return!1;
        var t = e.nodeName && lt.noData[e.nodeName.toLowerCase()];
        return!t || t !== !0 && e.getAttribute("classid") === t
    }}), lt.fn.extend({data: function (e, i) {
        var n, s, a = this[0], o = 0, l = null;
        if (e === t) {
            if (this.length && (l = lt.data(a), 1 === a.nodeType && !lt._data(a, "parsedAttrs"))) {
                for (n = a.attributes; o < n.length; o++)s = n[o].name, s.indexOf("data-") || (s = lt.camelCase(s.slice(5)), r(a, s, l[s]));
                lt._data(a, "parsedAttrs", !0)
            }
            return l
        }
        return"object" == typeof e ? this.each(function () {
            lt.data(this, e)
        }) : lt.access(this, function (i) {
            return i === t ? a ? r(a, e, lt.data(a, e)) : null : (this.each(function () {
                lt.data(this, e, i)
            }), void 0)
        }, null, i, arguments.length > 1, null, !0)
    }, removeData: function (e) {
        return this.each(function () {
            lt.removeData(this, e)
        })
    }}), lt.extend({queue: function (e, t, i) {
        var n;
        return e ? (t = (t || "fx") + "queue", n = lt._data(e, t), i && (!n || lt.isArray(i) ? n = lt._data(e, t, lt.makeArray(i)) : n.push(i)), n || []) : void 0
    }, dequeue: function (e, t) {
        t = t || "fx";
        var i = lt.queue(e, t), n = i.length, s = i.shift(), a = lt._queueHooks(e, t), r = function () {
            lt.dequeue(e, t)
        };
        "inprogress" === s && (s = i.shift(), n--), a.cur = s, s && ("fx" === t && i.unshift("inprogress"), delete a.stop, s.call(e, r, a)), !n && a && a.empty.fire()
    }, _queueHooks: function (e, t) {
        var i = t + "queueHooks";
        return lt._data(e, i) || lt._data(e, i, {empty: lt.Callbacks("once memory").add(function () {
            lt._removeData(e, t + "queue"), lt._removeData(e, i)
        })})
    }}), lt.fn.extend({queue: function (e, i) {
        var n = 2;
        return"string" != typeof e && (i = e, e = "fx", n--), arguments.length < n ? lt.queue(this[0], e) : i === t ? this : this.each(function () {
            var t = lt.queue(this, e, i);
            lt._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && lt.dequeue(this, e)
        })
    }, dequeue: function (e) {
        return this.each(function () {
            lt.dequeue(this, e)
        })
    }, delay: function (e, t) {
        return e = lt.fx ? lt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
            var n = setTimeout(t, e);
            i.stop = function () {
                clearTimeout(n)
            }
        })
    }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
    }, promise: function (e, i) {
        var n, s = 1, a = lt.Deferred(), r = this, o = this.length, l = function () {
            --s || a.resolveWith(r, [r])
        };
        for ("string" != typeof e && (i = e, e = t), e = e || "fx"; o--;)n = lt._data(r[o], e + "queueHooks"), n && n.empty && (s++, n.empty.add(l));
        return l(), a.promise(i)
    }});
    var St, Tt, Dt = /[\t\r\n]/g, Et = /\r/g, $t = /^(?:input|select|textarea|button|object)$/i, At = /^(?:a|area)$/i, Pt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Nt = /^(?:checked|selected)$/i, It = lt.support.getSetAttribute, Mt = lt.support.input;
    lt.fn.extend({attr: function (e, t) {
        return lt.access(this, lt.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
        return this.each(function () {
            lt.removeAttr(this, e)
        })
    }, prop: function (e, t) {
        return lt.access(this, lt.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
        return e = lt.propFix[e] || e, this.each(function () {
            try {
                this[e] = t, delete this[e]
            } catch (i) {
            }
        })
    }, addClass: function (e) {
        var t, i, n, s, a, r = 0, o = this.length, l = "string" == typeof e && e;
        if (lt.isFunction(e))return this.each(function (t) {
            lt(this).addClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(ht) || []; o > r; r++)if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Dt, " ") : " ")) {
            for (a = 0; s = t[a++];)n.indexOf(" " + s + " ") < 0 && (n += s + " ");
            i.className = lt.trim(n)
        }
        return this
    }, removeClass: function (e) {
        var t, i, n, s, a, r = 0, o = this.length, l = 0 === arguments.length || "string" == typeof e && e;
        if (lt.isFunction(e))return this.each(function (t) {
            lt(this).removeClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(ht) || []; o > r; r++)if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Dt, " ") : "")) {
            for (a = 0; s = t[a++];)for (; n.indexOf(" " + s + " ") >= 0;)n = n.replace(" " + s + " ", " ");
            i.className = e ? lt.trim(n) : ""
        }
        return this
    }, toggleClass: function (e, t) {
        var i = typeof e, n = "boolean" == typeof t;
        return lt.isFunction(e) ? this.each(function (i) {
            lt(this).toggleClass(e.call(this, i, this.className, t), t)
        }) : this.each(function () {
            if ("string" === i)for (var s, a = 0, r = lt(this), o = t, l = e.match(ht) || []; s = l[a++];)o = n ? o : !r.hasClass(s), r[o ? "addClass" : "removeClass"](s); else(i === Q || "boolean" === i) && (this.className && lt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : lt._data(this, "__className__") || "")
        })
    }, hasClass: function (e) {
        for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Dt, " ").indexOf(t) >= 0)return!0;
        return!1
    }, val: function (e) {
        var i, n, s, a = this[0];
        {
            if (arguments.length)return s = lt.isFunction(e), this.each(function (i) {
                var a, r = lt(this);
                1 === this.nodeType && (a = s ? e.call(this, i, r.val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : lt.isArray(a) && (a = lt.map(a, function (e) {
                    return null == e ? "" : e + ""
                })), n = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], n && "set"in n && n.set(this, a, "value") !== t || (this.value = a))
            });
            if (a)return n = lt.valHooks[a.type] || lt.valHooks[a.nodeName.toLowerCase()], n && "get"in n && (i = n.get(a, "value")) !== t ? i : (i = a.value, "string" == typeof i ? i.replace(Et, "") : null == i ? "" : i)
        }
    }}), lt.extend({valHooks: {option: {get: function (e) {
        var t = e.attributes.value;
        return!t || t.specified ? e.value : e.text
    }}, select: {get: function (e) {
        for (var t, i, n = e.options, s = e.selectedIndex, a = "select-one" === e.type || 0 > s, r = a ? null : [], o = a ? s + 1 : n.length, l = 0 > s ? o : a ? s : 0; o > l; l++)if (i = n[l], !(!i.selected && l !== s || (lt.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && lt.nodeName(i.parentNode, "optgroup"))) {
            if (t = lt(i).val(), a)return t;
            r.push(t)
        }
        return r
    }, set: function (e, t) {
        var i = lt.makeArray(t);
        return lt(e).find("option").each(function () {
            this.selected = lt.inArray(lt(this).val(), i) >= 0
        }), i.length || (e.selectedIndex = -1), i
    }}}, attr: function (e, i, n) {
        var s, a, r, o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === Q ? lt.prop(e, i, n) : (a = 1 !== o || !lt.isXMLDoc(e), a && (i = i.toLowerCase(), s = lt.attrHooks[i] || (Pt.test(i) ? Tt : St)), n === t ? s && a && "get"in s && null !== (r = s.get(e, i)) ? r : (typeof e.getAttribute !== Q && (r = e.getAttribute(i)), null == r ? t : r) : null !== n ? s && a && "set"in s && (r = s.set(e, n, i)) !== t ? r : (e.setAttribute(i, n + ""), n) : (lt.removeAttr(e, i), void 0))
    }, removeAttr: function (e, t) {
        var i, n, s = 0, a = t && t.match(ht);
        if (a && 1 === e.nodeType)for (; i = a[s++];)n = lt.propFix[i] || i, Pt.test(i) ? !It && Nt.test(i) ? e[lt.camelCase("default-" + i)] = e[n] = !1 : e[n] = !1 : lt.attr(e, i, ""), e.removeAttribute(It ? i : n)
    }, attrHooks: {type: {set: function (e, t) {
        if (!lt.support.radioValue && "radio" === t && lt.nodeName(e, "input")) {
            var i = e.value;
            return e.setAttribute("type", t), i && (e.value = i), t
        }
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (e, i, n) {
        var s, a, r, o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)return r = 1 !== o || !lt.isXMLDoc(e), r && (i = lt.propFix[i] || i, a = lt.propHooks[i]), n !== t ? a && "set"in a && (s = a.set(e, n, i)) !== t ? s : e[i] = n : a && "get"in a && null !== (s = a.get(e, i)) ? s : e[i]
    }, propHooks: {tabIndex: {get: function (e) {
        var i = e.getAttributeNode("tabindex");
        return i && i.specified ? parseInt(i.value, 10) : $t.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : t
    }}}}), Tt = {get: function (e, i) {
        var n = lt.prop(e, i), s = "boolean" == typeof n && e.getAttribute(i), a = "boolean" == typeof n ? Mt && It ? null != s : Nt.test(i) ? e[lt.camelCase("default-" + i)] : !!s : e.getAttributeNode(i);
        return a && a.value !== !1 ? i.toLowerCase() : t
    }, set: function (e, t, i) {
        return t === !1 ? lt.removeAttr(e, i) : Mt && It || !Nt.test(i) ? e.setAttribute(!It && lt.propFix[i] || i, i) : e[lt.camelCase("default-" + i)] = e[i] = !0, i
    }}, Mt && It || (lt.attrHooks.value = {get: function (e, i) {
        var n = e.getAttributeNode(i);
        return lt.nodeName(e, "input") ? e.defaultValue : n && n.specified ? n.value : t
    }, set: function (e, t, i) {
        return lt.nodeName(e, "input") ? (e.defaultValue = t, void 0) : St && St.set(e, t, i)
    }}), It || (St = lt.valHooks.button = {get: function (e, i) {
        var n = e.getAttributeNode(i);
        return n && ("id" === i || "name" === i || "coords" === i ? "" !== n.value : n.specified) ? n.value : t
    }, set: function (e, i, n) {
        var s = e.getAttributeNode(n);
        return s || e.setAttributeNode(s = e.ownerDocument.createAttribute(n)), s.value = i += "", "value" === n || i === e.getAttribute(n) ? i : t
    }}, lt.attrHooks.contenteditable = {get: St.get, set: function (e, t, i) {
        St.set(e, "" === t ? !1 : t, i)
    }}, lt.each(["width", "height"], function (e, t) {
        lt.attrHooks[t] = lt.extend(lt.attrHooks[t], {set: function (e, i) {
            return"" === i ? (e.setAttribute(t, "auto"), i) : void 0
        }})
    })), lt.support.hrefNormalized || (lt.each(["href", "src", "width", "height"], function (e, i) {
        lt.attrHooks[i] = lt.extend(lt.attrHooks[i], {get: function (e) {
            var n = e.getAttribute(i, 2);
            return null == n ? t : n
        }})
    }), lt.each(["href", "src"], function (e, t) {
        lt.propHooks[t] = {get: function (e) {
            return e.getAttribute(t, 4)
        }}
    })), lt.support.style || (lt.attrHooks.style = {get: function (e) {
        return e.style.cssText || t
    }, set: function (e, t) {
        return e.style.cssText = t + ""
    }}), lt.support.optSelected || (lt.propHooks.selected = lt.extend(lt.propHooks.selected, {get: function (e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }})), lt.support.enctype || (lt.propFix.enctype = "encoding"), lt.support.checkOn || lt.each(["radio", "checkbox"], function () {
        lt.valHooks[this] = {get: function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }}
    }), lt.each(["radio", "checkbox"], function () {
        lt.valHooks[this] = lt.extend(lt.valHooks[this], {set: function (e, t) {
            return lt.isArray(t) ? e.checked = lt.inArray(lt(e).val(), t) >= 0 : void 0
        }})
    });
    var Ft = /^(?:input|select|textarea)$/i, Ht = /^key/, Ot = /^(?:mouse|contextmenu)|click/, zt = /^(?:focusinfocus|focusoutblur)$/, Lt = /^([^.]*)(?:\.(.+)|)$/;
    lt.event = {global: {}, add: function (e, i, n, s, a) {
        var r, o, l, c, h, u, d, p, f, g, m, v = lt._data(e);
        if (v) {
            for (n.handler && (c = n, n = c.handler, a = c.selector), n.guid || (n.guid = lt.guid++), (o = v.events) || (o = v.events = {}), (u = v.handle) || (u = v.handle = function (e) {
                return typeof lt === Q || e && lt.event.triggered === e.type ? t : lt.event.dispatch.apply(u.elem, arguments)
            }, u.elem = e), i = (i || "").match(ht) || [""], l = i.length; l--;)r = Lt.exec(i[l]) || [], f = m = r[1], g = (r[2] || "").split(".").sort(), h = lt.event.special[f] || {}, f = (a ? h.delegateType : h.bindType) || f, h = lt.event.special[f] || {}, d = lt.extend({type: f, origType: m, data: s, handler: n, guid: n.guid, selector: a, needsContext: a && lt.expr.match.needsContext.test(a), namespace: g.join(".")}, c), (p = o[f]) || (p = o[f] = [], p.delegateCount = 0, h.setup && h.setup.call(e, s, g, u) !== !1 || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), h.add && (h.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), a ? p.splice(p.delegateCount++, 0, d) : p.push(d), lt.event.global[f] = !0;
            e = null
        }
    }, remove: function (e, t, i, n, s) {
        var a, r, o, l, c, h, u, d, p, f, g, m = lt.hasData(e) && lt._data(e);
        if (m && (h = m.events)) {
            for (t = (t || "").match(ht) || [""], c = t.length; c--;)if (o = Lt.exec(t[c]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p) {
                for (u = lt.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = h[p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = d.length; a--;)r = d[a], !s && g !== r.origType || i && i.guid !== r.guid || o && !o.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (d.splice(a, 1), r.selector && d.delegateCount--, u.remove && u.remove.call(e, r));
                l && !d.length && (u.teardown && u.teardown.call(e, f, m.handle) !== !1 || lt.removeEvent(e, p, m.handle), delete h[p])
            } else for (p in h)lt.event.remove(e, p + t[c], i, n, !0);
            lt.isEmptyObject(h) && (delete m.handle, lt._removeData(e, "events"))
        }
    }, trigger: function (i, n, s, a) {
        var r, o, l, c, h, u, d, p = [s || V], f = rt.call(i, "type") ? i.type : i, g = rt.call(i, "namespace") ? i.namespace.split(".") : [];
        if (l = u = s = s || V, 3 !== s.nodeType && 8 !== s.nodeType && !zt.test(f + lt.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), o = f.indexOf(":") < 0 && "on" + f, i = i[lt.expando] ? i : new lt.Event(f, "object" == typeof i && i), i.isTrigger = !0, i.namespace = g.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = t, i.target || (i.target = s), n = null == n ? [i] : lt.makeArray(n, [i]), h = lt.event.special[f] || {}, a || !h.trigger || h.trigger.apply(s, n) !== !1)) {
            if (!a && !h.noBubble && !lt.isWindow(s)) {
                for (c = h.delegateType || f, zt.test(c + f) || (l = l.parentNode); l; l = l.parentNode)p.push(l), u = l;
                u === (s.ownerDocument || V) && p.push(u.defaultView || u.parentWindow || e)
            }
            for (d = 0; (l = p[d++]) && !i.isPropagationStopped();)i.type = d > 1 ? c : h.bindType || f, r = (lt._data(l, "events") || {})[i.type] && lt._data(l, "handle"), r && r.apply(l, n), r = o && l[o], r && lt.acceptData(l) && r.apply && r.apply(l, n) === !1 && i.preventDefault();
            if (i.type = f, !(a || i.isDefaultPrevented() || h._default && h._default.apply(s.ownerDocument, n) !== !1 || "click" === f && lt.nodeName(s, "a") || !lt.acceptData(s) || !o || !s[f] || lt.isWindow(s))) {
                u = s[o], u && (s[o] = null), lt.event.triggered = f;
                try {
                    s[f]()
                } catch (m) {
                }
                lt.event.triggered = t, u && (s[o] = u)
            }
            return i.result
        }
    }, dispatch: function (e) {
        e = lt.event.fix(e);
        var i, n, s, a, r, o = [], l = nt.call(arguments), c = (lt._data(this, "events") || {})[e.type] || [], h = lt.event.special[e.type] || {};
        if (l[0] = e, e.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, e) !== !1) {
            for (o = lt.event.handlers.call(this, e, c), i = 0; (a = o[i++]) && !e.isPropagationStopped();)for (e.currentTarget = a.elem, r = 0; (s = a.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, n = ((lt.event.special[s.origType] || {}).handle || s.handler).apply(a.elem, l), n !== t && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
            return h.postDispatch && h.postDispatch.call(this, e), e.result
        }
    }, handlers: function (e, i) {
        var n, s, a, r, o = [], l = i.delegateCount, c = e.target;
        if (l && c.nodeType && (!e.button || "click" !== e.type))for (; c != this; c = c.parentNode || this)if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
            for (a = [], r = 0; l > r; r++)s = i[r], n = s.selector + " ", a[n] === t && (a[n] = s.needsContext ? lt(n, this).index(c) >= 0 : lt.find(n, this, null, [c]).length), a[n] && a.push(s);
            a.length && o.push({elem: c, handlers: a})
        }
        return l < i.length && o.push({elem: this, handlers: i.slice(l)}), o
    }, fix: function (e) {
        if (e[lt.expando])return e;
        var t, i, n, s = e.type, a = e, r = this.fixHooks[s];
        for (r || (this.fixHooks[s] = r = Ot.test(s) ? this.mouseHooks : Ht.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new lt.Event(a), t = n.length; t--;)i = n[t], e[i] = a[i];
        return e.target || (e.target = a.srcElement || V), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, a) : e
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, i) {
        var n, s, a, r = i.button, o = i.fromElement;
        return null == e.pageX && null != i.clientX && (s = e.target.ownerDocument || V, a = s.documentElement, n = s.body, e.pageX = i.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0), e.pageY = i.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? i.toElement : o), e.which || r === t || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
    }}, special: {load: {noBubble: !0}, click: {trigger: function () {
        return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
    }}, focus: {trigger: function () {
        if (this !== V.activeElement && this.focus)try {
            return this.focus(), !1
        } catch (e) {
        }
    }, delegateType: "focusin"}, blur: {trigger: function () {
        return this === V.activeElement && this.blur ? (this.blur(), !1) : void 0
    }, delegateType: "focusout"}, beforeunload: {postDispatch: function (e) {
        e.result !== t && (e.originalEvent.returnValue = e.result)
    }}}, simulate: function (e, t, i, n) {
        var s = lt.extend(new lt.Event, i, {type: e, isSimulated: !0, originalEvent: {}});
        n ? lt.event.trigger(s, null, t) : lt.event.dispatch.call(t, s), s.isDefaultPrevented() && i.preventDefault()
    }}, lt.removeEvent = V.removeEventListener ? function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function (e, t, i) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === Q && (e[n] = null), e.detachEvent(n, i))
    }, lt.Event = function (e, t) {
        return this instanceof lt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, t && lt.extend(this, t), this.timeStamp = e && e.timeStamp || lt.now(), this[lt.expando] = !0, void 0) : new lt.Event(e, t)
    }, lt.Event.prototype = {isDefaultPrevented: c, isPropagationStopped: c, isImmediatePropagationStopped: c, preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    }, stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = l, this.stopPropagation()
    }}, lt.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        lt.event.special[e] = {delegateType: t, bindType: t, handle: function (e) {
            var i, n = this, s = e.relatedTarget, a = e.handleObj;
            return(!s || s !== n && !lt.contains(n, s)) && (e.type = a.origType, i = a.handler.apply(this, arguments), e.type = t), i
        }}
    }), lt.support.submitBubbles || (lt.event.special.submit = {setup: function () {
        return lt.nodeName(this, "form") ? !1 : (lt.event.add(this, "click._submit keypress._submit", function (e) {
            var i = e.target, n = lt.nodeName(i, "input") || lt.nodeName(i, "button") ? i.form : t;
            n && !lt._data(n, "submitBubbles") && (lt.event.add(n, "submit._submit", function (e) {
                e._submit_bubble = !0
            }), lt._data(n, "submitBubbles", !0))
        }), void 0)
    }, postDispatch: function (e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && lt.event.simulate("submit", this.parentNode, e, !0))
    }, teardown: function () {
        return lt.nodeName(this, "form") ? !1 : (lt.event.remove(this, "._submit"), void 0)
    }}), lt.support.changeBubbles || (lt.event.special.change = {setup: function () {
        return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (lt.event.add(this, "propertychange._change", function (e) {
            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), lt.event.add(this, "click._change", function (e) {
            this._just_changed && !e.isTrigger && (this._just_changed = !1), lt.event.simulate("change", this, e, !0)
        })), !1) : (lt.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            Ft.test(t.nodeName) && !lt._data(t, "changeBubbles") && (lt.event.add(t, "change._change", function (e) {
                !this.parentNode || e.isSimulated || e.isTrigger || lt.event.simulate("change", this.parentNode, e, !0)
            }), lt._data(t, "changeBubbles", !0))
        }), void 0)
    }, handle: function (e) {
        var t = e.target;
        return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
    }, teardown: function () {
        return lt.event.remove(this, "._change"), !Ft.test(this.nodeName)
    }}), lt.support.focusinBubbles || lt.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var i = 0, n = function (e) {
            lt.event.simulate(t, e.target, lt.event.fix(e), !0)
        };
        lt.event.special[t] = {setup: function () {
            0 === i++ && V.addEventListener(e, n, !0)
        }, teardown: function () {
            0 === --i && V.removeEventListener(e, n, !0)
        }}
    }), lt.fn.extend({on: function (e, i, n, s, a) {
        var r, o;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = t);
            for (r in e)this.on(r, i, n, e[r], a);
            return this
        }
        if (null == n && null == s ? (s = i, n = i = t) : null == s && ("string" == typeof i ? (s = n, n = t) : (s = n, n = i, i = t)), s === !1)s = c; else if (!s)return this;
        return 1 === a && (o = s, s = function (e) {
            return lt().off(e), o.apply(this, arguments)
        }, s.guid = o.guid || (o.guid = lt.guid++)), this.each(function () {
            lt.event.add(this, e, s, n, i)
        })
    }, one: function (e, t, i, n) {
        return this.on(e, t, i, n, 1)
    }, off: function (e, i, n) {
        var s, a;
        if (e && e.preventDefault && e.handleObj)return s = e.handleObj, lt(e.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
        if ("object" == typeof e) {
            for (a in e)this.off(a, i, e[a]);
            return this
        }
        return(i === !1 || "function" == typeof i) && (n = i, i = t), n === !1 && (n = c), this.each(function () {
            lt.event.remove(this, e, n, i)
        })
    }, bind: function (e, t, i) {
        return this.on(e, null, t, i)
    }, unbind: function (e, t) {
        return this.off(e, null, t)
    }, delegate: function (e, t, i, n) {
        return this.on(t, e, i, n)
    }, undelegate: function (e, t, i) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
    }, trigger: function (e, t) {
        return this.each(function () {
            lt.event.trigger(e, t, this)
        })
    }, triggerHandler: function (e, t) {
        var i = this[0];
        return i ? lt.event.trigger(e, t, i, !0) : void 0
    }}), /*!
     * Sizzle CSS Selector Engine
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license
     * http://sizzlejs.com/
     */
        function (e, t) {
            function i(e) {
                return ft.test(e + "")
            }

            function n() {
                var e, t = [];
                return e = function (i, n) {
                    return t.push(i += " ") > C.cacheLength && delete e[t.shift()], e[i] = n
                }
            }

            function s(e) {
                return e[z] = !0, e
            }

            function a(e) {
                var t = A.createElement("div");
                try {
                    return e(t)
                } catch (i) {
                    return!1
                } finally {
                    t = null
                }
            }

            function r(e, t, i, n) {
                var s, a, r, o, l, c, h, p, f, g;
                if ((t ? t.ownerDocument || t : L) !== A && $(t), t = t || A, i = i || [], !e || "string" != typeof e)return i;
                if (1 !== (o = t.nodeType) && 9 !== o)return[];
                if (!N && !n) {
                    if (s = gt.exec(e))if (r = s[1]) {
                        if (9 === o) {
                            if (a = t.getElementById(r), !a || !a.parentNode)return i;
                            if (a.id === r)return i.push(a), i
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(r)) && H(t, a) && a.id === r)return i.push(a), i
                    } else {
                        if (s[2])return G.apply(i, J.call(t.getElementsByTagName(e), 0)), i;
                        if ((r = s[3]) && R.getByClassName && t.getElementsByClassName)return G.apply(i, J.call(t.getElementsByClassName(r), 0)), i
                    }
                    if (R.qsa && !I.test(e)) {
                        if (h = !0, p = z, f = t, g = 9 === o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
                            for (c = u(e), (h = t.getAttribute("id")) ? p = h.replace(_t, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;)c[l] = p + d(c[l]);
                            f = pt.test(e) && t.parentNode || t, g = c.join(",")
                        }
                        if (g)try {
                            return G.apply(i, J.call(f.querySelectorAll(g), 0)), i
                        } catch (m) {
                        } finally {
                            h || t.removeAttribute("id")
                        }
                    }
                }
                return y(e.replace(rt, "$1"), t, i, n)
            }

            function o(e, t) {
                var i = t && e, n = i && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                if (n)return n;
                if (i)for (; i = i.nextSibling;)if (i === t)return-1;
                return e ? 1 : -1
            }

            function l(e) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return"input" === i && t.type === e
                }
            }

            function c(e) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return("input" === i || "button" === i) && t.type === e
                }
            }

            function h(e) {
                return s(function (t) {
                    return t = +t, s(function (i, n) {
                        for (var s, a = e([], i.length, t), r = a.length; r--;)i[s = a[r]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function u(e, t) {
                var i, n, s, a, o, l, c, h = U[e + " "];
                if (h)return t ? 0 : h.slice(0);
                for (o = e, l = [], c = C.preFilter; o;) {
                    (!i || (n = ot.exec(o))) && (n && (o = o.slice(n[0].length) || o), l.push(s = [])), i = !1, (n = ct.exec(o)) && (i = n.shift(), s.push({value: i, type: n[0].replace(rt, " ")}), o = o.slice(i.length));
                    for (a in C.filter)!(n = dt[a].exec(o)) || c[a] && !(n = c[a](n)) || (i = n.shift(), s.push({value: i, type: a, matches: n}), o = o.slice(i.length));
                    if (!i)break
                }
                return t ? o.length : o ? r.error(e) : U(e, l).slice(0)
            }

            function d(e) {
                for (var t = 0, i = e.length, n = ""; i > t; t++)n += e[t].value;
                return n
            }

            function p(e, t, i) {
                var n = t.dir, s = i && "parentNode" === n, a = q++;
                return t.first ? function (t, i, a) {
                    for (; t = t[n];)if (1 === t.nodeType || s)return e(t, i, a)
                } : function (t, i, r) {
                    var o, l, c, h = W + " " + a;
                    if (r) {
                        for (; t = t[n];)if ((1 === t.nodeType || s) && e(t, i, r))return!0
                    } else for (; t = t[n];)if (1 === t.nodeType || s)if (c = t[z] || (t[z] = {}), (l = c[n]) && l[0] === h) {
                        if ((o = l[1]) === !0 || o === k)return o === !0
                    } else if (l = c[n] = [h], l[1] = e(t, i, r) || k, l[1] === !0)return!0
                }
            }

            function f(e) {
                return e.length > 1 ? function (t, i, n) {
                    for (var s = e.length; s--;)if (!e[s](t, i, n))return!1;
                    return!0
                } : e[0]
            }

            function g(e, t, i, n, s) {
                for (var a, r = [], o = 0, l = e.length, c = null != t; l > o; o++)(a = e[o]) && (!i || i(a, n, s)) && (r.push(a), c && t.push(o));
                return r
            }

            function m(e, t, i, n, a, r) {
                return n && !n[z] && (n = m(n)), a && !a[z] && (a = m(a, r)), s(function (s, r, o, l) {
                    var c, h, u, d = [], p = [], f = r.length, m = s || b(t || "*", o.nodeType ? [o] : o, []), v = !e || !s && t ? m : g(m, d, e, o, l), _ = i ? a || (s ? e : f || n) ? [] : r : v;
                    if (i && i(v, _, o, l), n)for (c = g(_, p), n(c, [], o, l), h = c.length; h--;)(u = c[h]) && (_[p[h]] = !(v[p[h]] = u));
                    if (s) {
                        if (a || e) {
                            if (a) {
                                for (c = [], h = _.length; h--;)(u = _[h]) && c.push(v[h] = u);
                                a(null, _ = [], c, l)
                            }
                            for (h = _.length; h--;)(u = _[h]) && (c = a ? Z.call(s, u) : d[h]) > -1 && (s[c] = !(r[c] = u))
                        }
                    } else _ = g(_ === r ? _.splice(f, _.length) : _), a ? a(null, r, _, l) : G.apply(r, _)
                })
            }

            function v(e) {
                for (var t, i, n, s = e.length, a = C.relative[e[0].type], r = a || C.relative[" "], o = a ? 1 : 0, l = p(function (e) {
                    return e === t
                }, r, !0), c = p(function (e) {
                    return Z.call(t, e) > -1
                }, r, !0), h = [function (e, i, n) {
                    return!a && (n || i !== E) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n))
                }]; s > o; o++)if (i = C.relative[e[o].type])h = [p(f(h), i)]; else {
                    if (i = C.filter[e[o].type].apply(null, e[o].matches), i[z]) {
                        for (n = ++o; s > n && !C.relative[e[n].type]; n++);
                        return m(o > 1 && f(h), o > 1 && d(e.slice(0, o - 1)).replace(rt, "$1"), i, n > o && v(e.slice(o, n)), s > n && v(e = e.slice(n)), s > n && d(e))
                    }
                    h.push(i)
                }
                return f(h)
            }

            function _(e, t) {
                var i = 0, n = t.length > 0, a = e.length > 0, o = function (s, o, l, c, h) {
                    var u, d, p, f = [], m = 0, v = "0", _ = s && [], b = null != h, y = E, x = s || a && C.find.TAG("*", h && o.parentNode || o), w = W += null == y ? 1 : Math.random() || .1;
                    for (b && (E = o !== A && o, k = i); null != (u = x[v]); v++) {
                        if (a && u) {
                            for (d = 0; p = e[d++];)if (p(u, o, l)) {
                                c.push(u);
                                break
                            }
                            b && (W = w, k = ++i)
                        }
                        n && ((u = !p && u) && m--, s && _.push(u))
                    }
                    if (m += v, n && v !== m) {
                        for (d = 0; p = t[d++];)p(_, f, o, l);
                        if (s) {
                            if (m > 0)for (; v--;)_[v] || f[v] || (f[v] = X.call(c));
                            f = g(f)
                        }
                        G.apply(c, f), b && !s && f.length > 0 && m + t.length > 1 && r.uniqueSort(c)
                    }
                    return b && (W = w, E = y), _
                };
                return n ? s(o) : o
            }

            function b(e, t, i) {
                for (var n = 0, s = t.length; s > n; n++)r(e, t[n], i);
                return i
            }

            function y(e, t, i, n) {
                var s, a, r, o, l, c = u(e);
                if (!n && 1 === c.length) {
                    if (a = c[0] = c[0].slice(0), a.length > 2 && "ID" === (r = a[0]).type && 9 === t.nodeType && !N && C.relative[a[1].type]) {
                        if (t = C.find.ID(r.matches[0].replace(yt, xt), t)[0], !t)return i;
                        e = e.slice(a.shift().value.length)
                    }
                    for (s = dt.needsContext.test(e) ? 0 : a.length; s-- && (r = a[s], !C.relative[o = r.type]);)if ((l = C.find[o]) && (n = l(r.matches[0].replace(yt, xt), pt.test(a[0].type) && t.parentNode || t))) {
                        if (a.splice(s, 1), e = n.length && d(a), !e)return G.apply(i, J.call(n, 0)), i;
                        break
                    }
                }
                return T(e, c)(n, t, N, i, pt.test(e)), i
            }

            function x() {
            }

            var w, k, C, j, S, T, D, E, $, A, P, N, I, M, F, H, O, z = "sizzle" + -new Date, L = e.document, R = {}, W = 0, q = 0, B = n(), U = n(), Y = n(), Q = typeof t, V = 1 << 31, K = [], X = K.pop, G = K.push, J = K.slice, Z = K.indexOf || function (e) {
                for (var t = 0, i = this.length; i > t; t++)if (this[t] === e)return t;
                return-1
            }, et = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = tt.replace("w", "w#"), nt = "([*^$|!~]?=)", st = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + nt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + it + ")|)|)" + et + "*\\]", at = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)", rt = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), ot = new RegExp("^" + et + "*," + et + "*"), ct = new RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"), ht = new RegExp(at), ut = new RegExp("^" + it + "$"), dt = {ID: new RegExp("^#(" + tt + ")"), CLASS: new RegExp("^\\.(" + tt + ")"), NAME: new RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"), TAG: new RegExp("^(" + tt.replace("w", "w*") + ")"), ATTR: new RegExp("^" + st), PSEUDO: new RegExp("^" + at), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"), needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")}, pt = /[\x20\t\r\n\f]*[+~]/, ft = /^[^{]+\{\s*\[native code/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /^(?:input|select|textarea|button)$/i, vt = /^h\d$/i, _t = /'|\\/g, bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, yt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, xt = function (e, t) {
                var i = "0x" + t - 65536;
                return i !== i ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
            };
            try {
                J.call(L.documentElement.childNodes, 0)[0].nodeType
            } catch (wt) {
                J = function (e) {
                    for (var t, i = []; t = this[e++];)i.push(t);
                    return i
                }
            }
            S = r.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, $ = r.setDocument = function (e) {
                var n = e ? e.ownerDocument || e : L;
                return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, P = n.documentElement, N = S(n), R.tagNameNoComments = a(function (e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), R.attributes = a(function (e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return"boolean" !== t && "string" !== t
                }), R.getByClassName = a(function (e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }), R.getByName = a(function (e) {
                    e.id = z + 0, e.innerHTML = "<a name='" + z + "'></a><div name='" + z + "'></div>", P.insertBefore(e, P.firstChild);
                    var t = n.getElementsByName && n.getElementsByName(z).length === 2 + n.getElementsByName(z + 0).length;
                    return R.getIdNotName = !n.getElementById(z), P.removeChild(e), t
                }), C.attrHandle = a(function (e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== Q && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }}, R.getIdNotName ? (C.find.ID = function (e, t) {
                    if (typeof t.getElementById !== Q && !N) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : []
                    }
                }, C.filter.ID = function (e) {
                    var t = e.replace(yt, xt);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (C.find.ID = function (e, i) {
                    if (typeof i.getElementById !== Q && !N) {
                        var n = i.getElementById(e);
                        return n ? n.id === e || typeof n.getAttributeNode !== Q && n.getAttributeNode("id").value === e ? [n] : t : []
                    }
                }, C.filter.ID = function (e) {
                    var t = e.replace(yt, xt);
                    return function (e) {
                        var i = typeof e.getAttributeNode !== Q && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), C.find.TAG = R.tagNameNoComments ? function (e, t) {
                    return typeof t.getElementsByTagName !== Q ? t.getElementsByTagName(e) : void 0
                } : function (e, t) {
                    var i, n = [], s = 0, a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = a[s++];)1 === i.nodeType && n.push(i);
                        return n
                    }
                    return a
                }, C.find.NAME = R.getByName && function (e, t) {
                    return typeof t.getElementsByName !== Q ? t.getElementsByName(name) : void 0
                }, C.find.CLASS = R.getByClassName && function (e, t) {
                    return typeof t.getElementsByClassName === Q || N ? void 0 : t.getElementsByClassName(e)
                }, M = [], I = [":focus"], (R.qsa = i(n.querySelectorAll)) && (a(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || I.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || I.push(":checked")
                }), a(function (e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && I.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                })), (R.matchesSelector = i(F = P.matchesSelector || P.mozMatchesSelector || P.webkitMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && a(function (e) {
                    R.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), M.push("!=", at)
                }), I = new RegExp(I.join("|")), M = new RegExp(M.join("|")), H = i(P.contains) || P.compareDocumentPosition ? function (e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function (e, t) {
                    if (t)for (; t = t.parentNode;)if (t === e)return!0;
                    return!1
                }, O = P.compareDocumentPosition ? function (e, t) {
                    var i;
                    return e === t ? (D = !0, 0) : (i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & i || e.parentNode && 11 === e.parentNode.nodeType ? e === n || H(L, e) ? -1 : t === n || H(L, t) ? 1 : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function (e, t) {
                    var i, s = 0, a = e.parentNode, r = t.parentNode, l = [e], c = [t];
                    if (e === t)return D = !0, 0;
                    if (!a || !r)return e === n ? -1 : t === n ? 1 : a ? -1 : r ? 1 : 0;
                    if (a === r)return o(e, t);
                    for (i = e; i = i.parentNode;)l.unshift(i);
                    for (i = t; i = i.parentNode;)c.unshift(i);
                    for (; l[s] === c[s];)s++;
                    return s ? o(l[s], c[s]) : l[s] === L ? -1 : c[s] === L ? 1 : 0
                }, D = !1, [0, 0].sort(O), R.detectDuplicates = D, A) : A
            }, r.matches = function (e, t) {
                return r(e, null, null, t)
            }, r.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== A && $(e), t = t.replace(bt, "='$1']"), !(!R.matchesSelector || N || M && M.test(t) || I.test(t)))try {
                    var i = F.call(e, t);
                    if (i || R.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
                } catch (n) {
                }
                return r(t, A, null, [e]).length > 0
            }, r.contains = function (e, t) {
                return(e.ownerDocument || e) !== A && $(e), H(e, t)
            }, r.attr = function (e, t) {
                var i;
                return(e.ownerDocument || e) !== A && $(e), N || (t = t.toLowerCase()), (i = C.attrHandle[t]) ? i(e) : N || R.attributes ? e.getAttribute(t) : ((i = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : i && i.specified ? i.value : null
            }, r.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, r.uniqueSort = function (e) {
                var t, i = [], n = 1, s = 0;
                if (D = !R.detectDuplicates, e.sort(O), D) {
                    for (; t = e[n]; n++)t === e[n - 1] && (s = i.push(n));
                    for (; s--;)e.splice(i[s], 1)
                }
                return e
            }, j = r.getText = function (e) {
                var t, i = "", n = 0, s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent)return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)i += j(e)
                    } else if (3 === s || 4 === s)return e.nodeValue
                } else for (; t = e[n]; n++)i += j(t);
                return i
            }, C = r.selectors = {cacheLength: 50, createPseudo: s, match: dt, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (e) {
                return e[1] = e[1].replace(yt, xt), e[3] = (e[4] || e[5] || "").replace(yt, xt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            }, CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || r.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && r.error(e[0]), e
            }, PSEUDO: function (e) {
                var t, i = !e[5] && e[2];
                return dt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : i && ht.test(i) && (t = u(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
            }}, filter: {TAG: function (e) {
                return"*" === e ? function () {
                    return!0
                } : (e = e.replace(yt, xt).toLowerCase(), function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e
                })
            }, CLASS: function (e) {
                var t = B[e + " "];
                return t || (t = new RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && B(e, function (e) {
                    return t.test(e.className || typeof e.getAttribute !== Q && e.getAttribute("class") || "")
                })
            }, ATTR: function (e, t, i) {
                return function (n) {
                    var s = r.attr(n, e);
                    return null == s ? "!=" === t : t ? (s += "", "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? (" " + s + " ").indexOf(i) > -1 : "|=" === t ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
                }
            }, CHILD: function (e, t, i, n, s) {
                var a = "nth" !== e.slice(0, 3), r = "last" !== e.slice(-4), o = "of-type" === t;
                return 1 === n && 0 === s ? function (e) {
                    return!!e.parentNode
                } : function (t, i, l) {
                    var c, h, u, d, p, f, g = a !== r ? "nextSibling" : "previousSibling", m = t.parentNode, v = o && t.nodeName.toLowerCase(), _ = !l && !o;
                    if (m) {
                        if (a) {
                            for (; g;) {
                                for (u = t; u = u[g];)if (o ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)return!1;
                                f = g = "only" === e && !f && "nextSibling"
                            }
                            return!0
                        }
                        if (f = [r ? m.firstChild : m.lastChild], r && _) {
                            for (h = m[z] || (m[z] = {}), c = h[e] || [], p = c[0] === W && c[1], d = c[0] === W && c[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (d = p = 0) || f.pop();)if (1 === u.nodeType && ++d && u === t) {
                                h[e] = [W, p, d];
                                break
                            }
                        } else if (_ && (c = (t[z] || (t[z] = {}))[e]) && c[0] === W)d = c[1]; else for (; (u = ++p && u && u[g] || (d = p = 0) || f.pop()) && ((o ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (_ && ((u[z] || (u[z] = {}))[e] = [W, d]), u !== t)););
                        return d -= s, d === n || 0 === d % n && d / n >= 0
                    }
                }
            }, PSEUDO: function (e, t) {
                var i, n = C.pseudos[e] || C.setFilters[e.toLowerCase()] || r.error("unsupported pseudo: " + e);
                return n[z] ? n(t) : n.length > 1 ? (i = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? s(function (e, i) {
                    for (var s, a = n(e, t), r = a.length; r--;)s = Z.call(e, a[r]), e[s] = !(i[s] = a[r])
                }) : function (e) {
                    return n(e, 0, i)
                }) : n
            }}, pseudos: {not: s(function (e) {
                var t = [], i = [], n = T(e.replace(rt, "$1"));
                return n[z] ? s(function (e, t, i, s) {
                    for (var a, r = n(e, null, s, []), o = e.length; o--;)(a = r[o]) && (e[o] = !(t[o] = a))
                }) : function (e, s, a) {
                    return t[0] = e, n(t, null, a, i), !i.pop()
                }
            }), has: s(function (e) {
                return function (t) {
                    return r(e, t).length > 0
                }
            }), contains: s(function (e) {
                return function (t) {
                    return(t.textContent || t.innerText || j(t)).indexOf(e) > -1
                }
            }), lang: s(function (e) {
                return ut.test(e || "") || r.error("unsupported lang: " + e), e = e.replace(yt, xt).toLowerCase(), function (t) {
                    var i;
                    do if (i = N ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                    return!1
                }
            }), target: function (t) {
                var i = e.location && e.location.hash;
                return i && i.slice(1) === t.id
            }, root: function (e) {
                return e === P
            }, focus: function (e) {
                return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                return!C.pseudos.empty(e)
            }, header: function (e) {
                return vt.test(e.nodeName)
            }, input: function (e) {
                return mt.test(e.nodeName)
            }, button: function (e) {
                var t = e.nodeName.toLowerCase();
                return"input" === t && "button" === e.type || "button" === t
            }, text: function (e) {
                var t;
                return"input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
            }, first: h(function () {
                return[0]
            }), last: h(function (e, t) {
                return[t - 1]
            }), eq: h(function (e, t, i) {
                return[0 > i ? i + t : i]
            }), even: h(function (e, t) {
                for (var i = 0; t > i; i += 2)e.push(i);
                return e
            }), odd: h(function (e, t) {
                for (var i = 1; t > i; i += 2)e.push(i);
                return e
            }), lt: h(function (e, t, i) {
                for (var n = 0 > i ? i + t : i; --n >= 0;)e.push(n);
                return e
            }), gt: h(function (e, t, i) {
                for (var n = 0 > i ? i + t : i; ++n < t;)e.push(n);
                return e
            })}};
            for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[w] = l(w);
            for (w in{submit: !0, reset: !0})C.pseudos[w] = c(w);
            T = r.compile = function (e, t) {
                var i, n = [], s = [], a = Y[e + " "];
                if (!a) {
                    for (t || (t = u(e)), i = t.length; i--;)a = v(t[i]), a[z] ? n.push(a) : s.push(a);
                    a = Y(e, _(s, n))
                }
                return a
            }, C.pseudos.nth = C.pseudos.eq, C.filters = x.prototype = C.pseudos, C.setFilters = new x, $(), r.attr = lt.attr, lt.find = r, lt.expr = r.selectors, lt.expr[":"] = lt.expr.pseudos, lt.unique = r.uniqueSort, lt.text = r.getText, lt.isXMLDoc = r.isXML, lt.contains = r.contains
        }(e);
    var Rt = /Until$/, Wt = /^(?:parents|prev(?:Until|All))/, qt = /^.[^:#\[\.,]*$/, Bt = lt.expr.match.needsContext, Ut = {children: !0, contents: !0, next: !0, prev: !0};
    lt.fn.extend({find: function (e) {
        var t, i, n, s = this.length;
        if ("string" != typeof e)return n = this, this.pushStack(lt(e).filter(function () {
            for (t = 0; s > t; t++)if (lt.contains(n[t], this))return!0
        }));
        for (i = [], t = 0; s > t; t++)lt.find(e, this[t], i);
        return i = this.pushStack(s > 1 ? lt.unique(i) : i), i.selector = (this.selector ? this.selector + " " : "") + e, i
    }, has: function (e) {
        var t, i = lt(e, this), n = i.length;
        return this.filter(function () {
            for (t = 0; n > t; t++)if (lt.contains(this, i[t]))return!0
        })
    }, not: function (e) {
        return this.pushStack(u(this, e, !1))
    }, filter: function (e) {
        return this.pushStack(u(this, e, !0))
    }, is: function (e) {
        return!!e && ("string" == typeof e ? Bt.test(e) ? lt(e, this.context).index(this[0]) >= 0 : lt.filter(e, this).length > 0 : this.filter(e).length > 0)
    }, closest: function (e, t) {
        for (var i, n = 0, s = this.length, a = [], r = Bt.test(e) || "string" != typeof e ? lt(e, t || this.context) : 0; s > n; n++)for (i = this[n]; i && i.ownerDocument && i !== t && 11 !== i.nodeType;) {
            if (r ? r.index(i) > -1 : lt.find.matchesSelector(i, e)) {
                a.push(i);
                break
            }
            i = i.parentNode
        }
        return this.pushStack(a.length > 1 ? lt.unique(a) : a)
    }, index: function (e) {
        return e ? "string" == typeof e ? lt.inArray(this[0], lt(e)) : lt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
        var i = "string" == typeof e ? lt(e, t) : lt.makeArray(e && e.nodeType ? [e] : e), n = lt.merge(this.get(), i);
        return this.pushStack(lt.unique(n))
    }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }}), lt.fn.andSelf = lt.fn.addBack, lt.each({parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
        return lt.dir(e, "parentNode")
    }, parentsUntil: function (e, t, i) {
        return lt.dir(e, "parentNode", i)
    }, next: function (e) {
        return h(e, "nextSibling")
    }, prev: function (e) {
        return h(e, "previousSibling")
    }, nextAll: function (e) {
        return lt.dir(e, "nextSibling")
    }, prevAll: function (e) {
        return lt.dir(e, "previousSibling")
    }, nextUntil: function (e, t, i) {
        return lt.dir(e, "nextSibling", i)
    }, prevUntil: function (e, t, i) {
        return lt.dir(e, "previousSibling", i)
    }, siblings: function (e) {
        return lt.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
        return lt.sibling(e.firstChild)
    }, contents: function (e) {
        return lt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : lt.merge([], e.childNodes)
    }}, function (e, t) {
        lt.fn[e] = function (i, n) {
            var s = lt.map(this, t, i);
            return Rt.test(e) || (n = i), n && "string" == typeof n && (s = lt.filter(n, s)), s = this.length > 1 && !Ut[e] ? lt.unique(s) : s, this.length > 1 && Wt.test(e) && (s = s.reverse()), this.pushStack(s)
        }
    }), lt.extend({filter: function (e, t, i) {
        return i && (e = ":not(" + e + ")"), 1 === t.length ? lt.find.matchesSelector(t[0], e) ? [t[0]] : [] : lt.find.matches(e, t)
    }, dir: function (e, i, n) {
        for (var s = [], a = e[i]; a && 9 !== a.nodeType && (n === t || 1 !== a.nodeType || !lt(a).is(n));)1 === a.nodeType && s.push(a), a = a[i];
        return s
    }, sibling: function (e, t) {
        for (var i = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && i.push(e);
        return i
    }});
    var Yt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Qt = / jQuery\d+="(?:null|\d+)"/g, Vt = new RegExp("<(?:" + Yt + ")[\\s/>]", "i"), Kt = /^\s+/, Xt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Gt = /<([\w:]+)/, Jt = /<tbody/i, Zt = /<|&#?\w+;/, ei = /<(?:script|style|link)/i, ti = /^(?:checkbox|radio)$/i, ii = /checked\s*(?:[^=]|=\s*.checked.)/i, ni = /^$|\/(?:java|ecma)script/i, si = /^true\/(.*)/, ai = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ri = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: lt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, oi = d(V), li = oi.appendChild(V.createElement("div"));
    ri.optgroup = ri.option, ri.tbody = ri.tfoot = ri.colgroup = ri.caption = ri.thead, ri.th = ri.td, lt.fn.extend({text: function (e) {
        return lt.access(this, function (e) {
            return e === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
        }, null, e, arguments.length)
    }, wrapAll: function (e) {
        if (lt.isFunction(e))return this.each(function (t) {
            lt(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
            var t = lt(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                return e
            }).append(this)
        }
        return this
    }, wrapInner: function (e) {
        return lt.isFunction(e) ? this.each(function (t) {
            lt(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
            var t = lt(this), i = t.contents();
            i.length ? i.wrapAll(e) : t.append(e)
        })
    }, wrap: function (e) {
        var t = lt.isFunction(e);
        return this.each(function (i) {
            lt(this).wrapAll(t ? e.call(this, i) : e)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
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
        for (var i, n = 0; null != (i = this[n]); n++)(!e || lt.filter(e, [i]).length > 0) && (t || 1 !== i.nodeType || lt.cleanData(b(i)), i.parentNode && (t && lt.contains(i.ownerDocument, i) && m(b(i, "script")), i.parentNode.removeChild(i)));
        return this
    }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
            for (1 === e.nodeType && lt.cleanData(b(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
            e.options && lt.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
    }, clone: function (e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
            return lt.clone(this, e, t)
        })
    }, html: function (e) {
        return lt.access(this, function (e) {
            var i = this[0] || {}, n = 0, s = this.length;
            if (e === t)return 1 === i.nodeType ? i.innerHTML.replace(Qt, "") : t;
            if (!("string" != typeof e || ei.test(e) || !lt.support.htmlSerialize && Vt.test(e) || !lt.support.leadingWhitespace && Kt.test(e) || ri[(Gt.exec(e) || ["", ""])[1].toLowerCase()])) {
                e = e.replace(Xt, "<$1></$2>");
                try {
                    for (; s > n; n++)i = this[n] || {}, 1 === i.nodeType && (lt.cleanData(b(i, !1)), i.innerHTML = e);
                    i = 0
                } catch (a) {
                }
            }
            i && this.empty().append(e)
        }, null, e, arguments.length)
    }, replaceWith: function (e) {
        var t = lt.isFunction(e);
        return t || "string" == typeof e || (e = lt(e).not(this).detach()), this.domManip([e], !0, function (e) {
            var t = this.nextSibling, i = this.parentNode;
            i && (lt(this).remove(), i.insertBefore(e, t))
        })
    }, detach: function (e) {
        return this.remove(e, !0)
    }, domManip: function (e, i, n) {
        e = tt.apply([], e);
        var s, a, r, o, l, c, h = 0, u = this.length, d = this, m = u - 1, v = e[0], _ = lt.isFunction(v);
        if (_ || !(1 >= u || "string" != typeof v || lt.support.checkClone) && ii.test(v))return this.each(function (s) {
            var a = d.eq(s);
            _ && (e[0] = v.call(this, s, i ? a.html() : t)), a.domManip(e, i, n)
        });
        if (u && (c = lt.buildFragment(e, this[0].ownerDocument, !1, this), s = c.firstChild, 1 === c.childNodes.length && (c = s), s)) {
            for (i = i && lt.nodeName(s, "tr"), o = lt.map(b(c, "script"), f), r = o.length; u > h; h++)a = c, h !== m && (a = lt.clone(a, !0, !0), r && lt.merge(o, b(a, "script"))), n.call(i && lt.nodeName(this[h], "table") ? p(this[h], "tbody") : this[h], a, h);
            if (r)for (l = o[o.length - 1].ownerDocument, lt.map(o, g), h = 0; r > h; h++)a = o[h], ni.test(a.type || "") && !lt._data(a, "globalEval") && lt.contains(l, a) && (a.src ? lt.ajax({url: a.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0}) : lt.globalEval((a.text || a.textContent || a.innerHTML || "").replace(ai, "")));
            c = s = null
        }
        return this
    }}), lt.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
        lt.fn[e] = function (e) {
            for (var i, n = 0, s = [], a = lt(e), r = a.length - 1; r >= n; n++)i = n === r ? this : this.clone(!0), lt(a[n])[t](i), it.apply(s, i.get());
            return this.pushStack(s)
        }
    }), lt.extend({clone: function (e, t, i) {
        var n, s, a, r, o, l = lt.contains(e.ownerDocument, e);
        if (lt.support.html5Clone || lt.isXMLDoc(e) || !Vt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (li.innerHTML = e.outerHTML, li.removeChild(a = li.firstChild)), !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || lt.isXMLDoc(e)))for (n = b(a), o = b(e), r = 0; null != (s = o[r]); ++r)n[r] && _(s, n[r]);
        if (t)if (i)for (o = o || b(e), n = n || b(a), r = 0; null != (s = o[r]); r++)v(s, n[r]); else v(e, a);
        return n = b(a, "script"), n.length > 0 && m(n, !l && b(e, "script")), n = o = s = null, a
    }, buildFragment: function (e, t, i, n) {
        for (var s, a, r, o, l, c, h, u = e.length, p = d(t), f = [], g = 0; u > g; g++)if (a = e[g], a || 0 === a)if ("object" === lt.type(a))lt.merge(f, a.nodeType ? [a] : a); else if (Zt.test(a)) {
            for (o = o || p.appendChild(t.createElement("div")), l = (Gt.exec(a) || ["", ""])[1].toLowerCase(), h = ri[l] || ri._default, o.innerHTML = h[1] + a.replace(Xt, "<$1></$2>") + h[2], s = h[0]; s--;)o = o.lastChild;
            if (!lt.support.leadingWhitespace && Kt.test(a) && f.push(t.createTextNode(Kt.exec(a)[0])), !lt.support.tbody)for (a = "table" !== l || Jt.test(a) ? "<table>" !== h[1] || Jt.test(a) ? 0 : o : o.firstChild, s = a && a.childNodes.length; s--;)lt.nodeName(c = a.childNodes[s], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (lt.merge(f, o.childNodes), o.textContent = ""; o.firstChild;)o.removeChild(o.firstChild);
            o = p.lastChild
        } else f.push(t.createTextNode(a));
        for (o && p.removeChild(o), lt.support.appendChecked || lt.grep(b(f, "input"), y), g = 0; a = f[g++];)if ((!n || -1 === lt.inArray(a, n)) && (r = lt.contains(a.ownerDocument, a), o = b(p.appendChild(a), "script"), r && m(o), i))for (s = 0; a = o[s++];)ni.test(a.type || "") && i.push(a);
        return o = null, p
    }, cleanData: function (e, t) {
        for (var i, n, s, a, r = 0, o = lt.expando, l = lt.cache, c = lt.support.deleteExpando, h = lt.event.special; null != (i = e[r]); r++)if ((t || lt.acceptData(i)) && (s = i[o], a = s && l[s])) {
            if (a.events)for (n in a.events)h[n] ? lt.event.remove(i, n) : lt.removeEvent(i, n, a.handle);
            l[s] && (delete l[s], c ? delete i[o] : typeof i.removeAttribute !== Q ? i.removeAttribute(o) : i[o] = null, Z.push(s))
        }
    }});
    var ci, hi, ui, di = /alpha\([^)]*\)/i, pi = /opacity\s*=\s*([^)]*)/, fi = /^(top|right|bottom|left)$/, gi = /^(none|table(?!-c[ea]).+)/, mi = /^margin/, vi = new RegExp("^(" + ct + ")(.*)$", "i"), _i = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"), bi = new RegExp("^([+-])=(" + ct + ")", "i"), yi = {BODY: "block"}, xi = {position: "absolute", visibility: "hidden", display: "block"}, wi = {letterSpacing: 0, fontWeight: 400}, ki = ["Top", "Right", "Bottom", "Left"], Ci = ["Webkit", "O", "Moz", "ms"];
    lt.fn.extend({css: function (e, i) {
        return lt.access(this, function (e, i, n) {
            var s, a, r = {}, o = 0;
            if (lt.isArray(i)) {
                for (a = hi(e), s = i.length; s > o; o++)r[i[o]] = lt.css(e, i[o], !1, a);
                return r
            }
            return n !== t ? lt.style(e, i, n) : lt.css(e, i)
        }, e, i, arguments.length > 1)
    }, show: function () {
        return k(this, !0)
    }, hide: function () {
        return k(this)
    }, toggle: function (e) {
        var t = "boolean" == typeof e;
        return this.each(function () {
            (t ? e : w(this)) ? lt(this).show() : lt(this).hide()
        })
    }}), lt.extend({cssHooks: {opacity: {get: function (e, t) {
        if (t) {
            var i = ui(e, "opacity");
            return"" === i ? "1" : i
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": lt.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (e, i, n, s) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var a, r, o, l = lt.camelCase(i), c = e.style;
            if (i = lt.cssProps[l] || (lt.cssProps[l] = x(c, l)), o = lt.cssHooks[i] || lt.cssHooks[l], n === t)return o && "get"in o && (a = o.get(e, !1, s)) !== t ? a : c[i];
            if (r = typeof n, "string" === r && (a = bi.exec(n)) && (n = (a[1] + 1) * a[2] + parseFloat(lt.css(e, i)), r = "number"), !(null == n || "number" === r && isNaN(n) || ("number" !== r || lt.cssNumber[l] || (n += "px"), lt.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (c[i] = "inherit"), o && "set"in o && (n = o.set(e, n, s)) === t)))try {
                c[i] = n
            } catch (h) {
            }
        }
    }, css: function (e, i, n, s) {
        var a, r, o, l = lt.camelCase(i);
        return i = lt.cssProps[l] || (lt.cssProps[l] = x(e.style, l)), o = lt.cssHooks[i] || lt.cssHooks[l], o && "get"in o && (r = o.get(e, !0, n)), r === t && (r = ui(e, i, s)), "normal" === r && i in wi && (r = wi[i]), "" === n || n ? (a = parseFloat(r), n === !0 || lt.isNumeric(a) ? a || 0 : r) : r
    }, swap: function (e, t, i, n) {
        var s, a, r = {};
        for (a in t)r[a] = e.style[a], e.style[a] = t[a];
        s = i.apply(e, n || []);
        for (a in t)e.style[a] = r[a];
        return s
    }}), e.getComputedStyle ? (hi = function (t) {
        return e.getComputedStyle(t, null)
    }, ui = function (e, i, n) {
        var s, a, r, o = n || hi(e), l = o ? o.getPropertyValue(i) || o[i] : t, c = e.style;
        return o && ("" !== l || lt.contains(e.ownerDocument, e) || (l = lt.style(e, i)), _i.test(l) && mi.test(i) && (s = c.width, a = c.minWidth, r = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = o.width, c.width = s, c.minWidth = a, c.maxWidth = r)), l
    }) : V.documentElement.currentStyle && (hi = function (e) {
        return e.currentStyle
    }, ui = function (e, i, n) {
        var s, a, r, o = n || hi(e), l = o ? o[i] : t, c = e.style;
        return null == l && c && c[i] && (l = c[i]), _i.test(l) && !fi.test(i) && (s = c.left, a = e.runtimeStyle, r = a && a.left, r && (a.left = e.currentStyle.left), c.left = "fontSize" === i ? "1em" : l, l = c.pixelLeft + "px", c.left = s, r && (a.left = r)), "" === l ? "auto" : l
    }), lt.each(["height", "width"], function (e, t) {
        lt.cssHooks[t] = {get: function (e, i, n) {
            return i ? 0 === e.offsetWidth && gi.test(lt.css(e, "display")) ? lt.swap(e, xi, function () {
                return S(e, t, n)
            }) : S(e, t, n) : void 0
        }, set: function (e, i, n) {
            var s = n && hi(e);
            return C(e, i, n ? j(e, t, n, lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, s), s) : 0)
        }}
    }), lt.support.opacity || (lt.cssHooks.opacity = {get: function (e, t) {
        return pi.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    }, set: function (e, t) {
        var i = e.style, n = e.currentStyle, s = lt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", a = n && n.filter || i.filter || "";
        i.zoom = 1, (t >= 1 || "" === t) && "" === lt.trim(a.replace(di, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = di.test(a) ? a.replace(di, s) : a + " " + s)
    }}), lt(function () {
        lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {get: function (e, t) {
            return t ? lt.swap(e, {display: "inline-block"}, ui, [e, "marginRight"]) : void 0
        }}), !lt.support.pixelPosition && lt.fn.position && lt.each(["top", "left"], function (e, t) {
            lt.cssHooks[t] = {get: function (e, i) {
                return i ? (i = ui(e, t), _i.test(i) ? lt(e).position()[t] + "px" : i) : void 0
            }}
        })
    }), lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !lt.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || lt.css(e, "display"))
    }, lt.expr.filters.visible = function (e) {
        return!lt.expr.filters.hidden(e)
    }), lt.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        lt.cssHooks[e + t] = {expand: function (i) {
            for (var n = 0, s = {}, a = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)s[e + ki[n] + t] = a[n] || a[n - 2] || a[0];
            return s
        }}, mi.test(e) || (lt.cssHooks[e + t].set = C)
    });
    var ji = /%20/g, Si = /\[\]$/, Ti = /\r?\n/g, Di = /^(?:submit|button|image|reset|file)$/i, Ei = /^(?:input|select|textarea|keygen)/i;
    lt.fn.extend({serialize: function () {
        return lt.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var e = lt.prop(this, "elements");
            return e ? lt.makeArray(e) : this
        }).filter(function () {
            var e = this.type;
            return this.name && !lt(this).is(":disabled") && Ei.test(this.nodeName) && !Di.test(e) && (this.checked || !ti.test(e))
        }).map(function (e, t) {
            var i = lt(this).val();
            return null == i ? null : lt.isArray(i) ? lt.map(i, function (e) {
                return{name: t.name, value: e.replace(Ti, "\r\n")}
            }) : {name: t.name, value: i.replace(Ti, "\r\n")}
        }).get()
    }}), lt.param = function (e, i) {
        var n, s = [], a = function (e, t) {
            t = lt.isFunction(t) ? t() : null == t ? "" : t, s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (i === t && (i = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(e) || e.jquery && !lt.isPlainObject(e))lt.each(e, function () {
            a(this.name, this.value)
        }); else for (n in e)E(n, e[n], i, a);
        return s.join("&").replace(ji, "+")
    }, lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        lt.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), lt.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var $i, Ai, Pi = lt.now(), Ni = /\?/, Ii = /#.*$/, Mi = /([?&])_=[^&]*/, Fi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Hi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Oi = /^(?:GET|HEAD)$/, zi = /^\/\//, Li = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Ri = lt.fn.load, Wi = {}, qi = {}, Bi = "*/".concat("*");
    try {
        Ai = K.href
    } catch (Ui) {
        Ai = V.createElement("a"), Ai.href = "", Ai = Ai.href
    }
    $i = Li.exec(Ai.toLowerCase()) || [], lt.fn.load = function (e, i, n) {
        if ("string" != typeof e && Ri)return Ri.apply(this, arguments);
        var s, a, r, o = this, l = e.indexOf(" ");
        return l >= 0 && (s = e.slice(l, e.length), e = e.slice(0, l)), lt.isFunction(i) ? (n = i, i = t) : i && "object" == typeof i && (r = "POST"), o.length > 0 && lt.ajax({url: e, type: r, dataType: "html", data: i}).done(function (e) {
            a = arguments, o.html(s ? lt("<div>").append(lt.parseHTML(e)).find(s) : e)
        }).complete(n && function (e, t) {
            o.each(n, a || [e.responseText, t, e])
        }), this
    }, lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        lt.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), lt.each(["get", "post"], function (e, i) {
        lt[i] = function (e, n, s, a) {
            return lt.isFunction(n) && (a = a || s, s = n, n = t), lt.ajax({url: e, type: i, dataType: a, data: n, success: s})
        }
    }), lt.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Ai, type: "GET", isLocal: Hi.test($i[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Bi, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": e.String, "text html": !0, "text json": lt.parseJSON, "text xml": lt.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (e, t) {
        return t ? P(P(e, lt.ajaxSettings), t) : P(lt.ajaxSettings, e)
    }, ajaxPrefilter: $(Wi), ajaxTransport: $(qi), ajax: function (e, i) {
        function n(e, i, n, s) {
            var a, u, _, b, x, k = i;
            2 !== y && (y = 2, l && clearTimeout(l), h = t, o = s || "", w.readyState = e > 0 ? 4 : 0, n && (b = N(d, w, n)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (lt.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (lt.etag[r] = x)), 204 === e ? (a = !0, k = "nocontent") : 304 === e ? (a = !0, k = "notmodified") : (a = I(d, b), k = a.state, u = a.data, _ = a.error, a = !_)) : (_ = k, (e || !k) && (k = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (i || k) + "", a ? g.resolveWith(p, [u, k, w]) : g.rejectWith(p, [w, k, _]), w.statusCode(v), v = t, c && f.trigger(a ? "ajaxSuccess" : "ajaxError", [w, d, a ? u : _]), m.fireWith(p, [w, k]), c && (f.trigger("ajaxComplete", [w, d]), --lt.active || lt.event.trigger("ajaxStop")))
        }

        "object" == typeof e && (i = e, e = t), i = i || {};
        var s, a, r, o, l, c, h, u, d = lt.ajaxSetup({}, i), p = d.context || d, f = d.context && (p.nodeType || p.jquery) ? lt(p) : lt.event, g = lt.Deferred(), m = lt.Callbacks("once memory"), v = d.statusCode || {}, _ = {}, b = {}, y = 0, x = "canceled", w = {readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === y) {
                if (!u)for (u = {}; t = Fi.exec(o);)u[t[1].toLowerCase()] = t[2];
                t = u[e.toLowerCase()]
            }
            return null == t ? null : t
        }, getAllResponseHeaders: function () {
            return 2 === y ? o : null
        }, setRequestHeader: function (e, t) {
            var i = e.toLowerCase();
            return y || (e = b[i] = b[i] || e, _[e] = t), this
        }, overrideMimeType: function (e) {
            return y || (d.mimeType = e), this
        }, statusCode: function (e) {
            var t;
            if (e)if (2 > y)for (t in e)v[t] = [v[t], e[t]]; else w.always(e[w.status]);
            return this
        }, abort: function (e) {
            var t = e || x;
            return h && h.abort(t), n(0, t), this
        }};
        if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Ai) + "").replace(Ii, "").replace(zi, $i[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = lt.trim(d.dataType || "*").toLowerCase().match(ht) || [""], null == d.crossDomain && (s = Li.exec(d.url.toLowerCase()), d.crossDomain = !(!s || s[1] === $i[1] && s[2] === $i[2] && (s[3] || ("http:" === s[1] ? 80 : 443)) == ($i[3] || ("http:" === $i[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = lt.param(d.data, d.traditional)), A(Wi, d, i, w), 2 === y)return w;
        c = d.global, c && 0 === lt.active++ && lt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Oi.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (Ni.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mi.test(r) ? r.replace(Mi, "$1_=" + Pi++) : r + (Ni.test(r) ? "&" : "?") + "_=" + Pi++)), d.ifModified && (lt.lastModified[r] && w.setRequestHeader("If-Modified-Since", lt.lastModified[r]), lt.etag[r] && w.setRequestHeader("If-None-Match", lt.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Bi + "; q=0.01" : "") : d.accepts["*"]);
        for (a in d.headers)w.setRequestHeader(a, d.headers[a]);
        if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === y))return w.abort();
        x = "abort";
        for (a in{success: 1, error: 1, complete: 1})w[a](d[a]);
        if (h = A(qi, d, i, w)) {
            w.readyState = 1, c && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                w.abort("timeout")
            }, d.timeout));
            try {
                y = 1, h.send(_, n)
            } catch (k) {
                if (!(2 > y))throw k;
                n(-1, k)
            }
        } else n(-1, "No Transport");
        return w
    }, getScript: function (e, i) {
        return lt.get(e, t, i, "script")
    }, getJSON: function (e, t, i) {
        return lt.get(e, t, i, "json")
    }}), lt.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (e) {
        return lt.globalEval(e), e
    }}}), lt.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), lt.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var i, n = V.head || lt("head")[0] || V.documentElement;
            return{send: function (t, s) {
                i = V.createElement("script"), i.async = !0, e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function (e, t) {
                    (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || s(200, "success"))
                }, n.insertBefore(i, n.firstChild)
            }, abort: function () {
                i && i.onload(t, !0)
            }}
        }
    });
    var Yi = [], Qi = /(=)\?(?=&|$)|\?\?/;
    lt.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var e = Yi.pop() || lt.expando + "_" + Pi++;
        return this[e] = !0, e
    }}), lt.ajaxPrefilter("json jsonp", function (i, n, s) {
        var a, r, o, l = i.jsonp !== !1 && (Qi.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Qi.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (a = i.jsonpCallback = lt.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Qi, "$1" + a) : i.jsonp !== !1 && (i.url += (Ni.test(i.url) ? "&" : "?") + i.jsonp + "=" + a), i.converters["script json"] = function () {
            return o || lt.error(a + " was not called"), o[0]
        }, i.dataTypes[0] = "json", r = e[a], e[a] = function () {
            o = arguments
        }, s.always(function () {
            e[a] = r, i[a] && (i.jsonpCallback = n.jsonpCallback, Yi.push(a)), o && lt.isFunction(r) && r(o[0]), o = r = t
        }), "script") : void 0
    });
    var Vi, Ki, Xi = 0, Gi = e.ActiveXObject && function () {
        var e;
        for (e in Vi)Vi[e](t, !0)
    };
    lt.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return!this.isLocal && M() || F()
    } : M, Ki = lt.ajaxSettings.xhr(), lt.support.cors = !!Ki && "withCredentials"in Ki, Ki = lt.support.ajax = !!Ki, Ki && lt.ajaxTransport(function (i) {
        if (!i.crossDomain || lt.support.cors) {
            var n;
            return{send: function (s, a) {
                var r, o, l = i.xhr();
                if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)for (o in i.xhrFields)l[o] = i.xhrFields[o];
                i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (o in s)l.setRequestHeader(o, s[o])
                } catch (c) {
                }
                l.send(i.hasContent && i.data || null), n = function (e, s) {
                    var o, c, h, u;
                    try {
                        if (n && (s || 4 === l.readyState))if (n = t, r && (l.onreadystatechange = lt.noop, Gi && delete Vi[r]), s)4 !== l.readyState && l.abort(); else {
                            u = {}, o = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (u.text = l.responseText);
                            try {
                                h = l.statusText
                            } catch (d) {
                                h = ""
                            }
                            o || !i.isLocal || i.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                        }
                    } catch (p) {
                        s || a(-1, p)
                    }
                    u && a(o, h, u, c)
                }, i.async ? 4 === l.readyState ? setTimeout(n) : (r = ++Xi, Gi && (Vi || (Vi = {}, lt(e).unload(Gi)), Vi[r] = n), l.onreadystatechange = n) : n()
            }, abort: function () {
                n && n(t, !0)
            }}
        }
    });
    var Ji, Zi, en = /^(?:toggle|show|hide)$/, tn = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"), nn = /queueHooks$/, sn = [R], an = {"*": [function (e, t) {
        var i, n, s = this.createTween(e, t), a = tn.exec(t), r = s.cur(), o = +r || 0, l = 1, c = 20;
        if (a) {
            if (i = +a[2], n = a[3] || (lt.cssNumber[e] ? "" : "px"), "px" !== n && o) {
                o = lt.css(s.elem, e, !0) || i || 1;
                do l = l || ".5", o /= l, lt.style(s.elem, e, o + n); while (l !== (l = s.cur() / r) && 1 !== l && --c)
            }
            s.unit = n, s.start = o, s.end = a[1] ? o + (a[1] + 1) * i : i
        }
        return s
    }]};
    lt.Animation = lt.extend(z, {tweener: function (e, t) {
        lt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var i, n = 0, s = e.length; s > n; n++)i = e[n], an[i] = an[i] || [], an[i].unshift(t)
    }, prefilter: function (e, t) {
        t ? sn.unshift(e) : sn.push(e)
    }}), lt.Tween = W, W.prototype = {constructor: W, init: function (e, t, i, n, s, a) {
        this.elem = e, this.prop = i, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (lt.cssNumber[i] ? "" : "px")
    }, cur: function () {
        var e = W.propHooks[this.prop];
        return e && e.get ? e.get(this) : W.propHooks._default.get(this)
    }, run: function (e) {
        var t, i = W.propHooks[this.prop];
        return this.pos = t = this.options.duration ? lt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : W.propHooks._default.set(this), this
    }}, W.prototype.init.prototype = W.prototype, W.propHooks = {_default: {get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = lt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
    }, set: function (e) {
        lt.fx.step[e.prop] ? lt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[lt.cssProps[e.prop]] || lt.cssHooks[e.prop]) ? lt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
    }}}, W.propHooks.scrollTop = W.propHooks.scrollLeft = {set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }}, lt.each(["toggle", "show", "hide"], function (e, t) {
        var i = lt.fn[t];
        lt.fn[t] = function (e, n, s) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(q(t, !0), e, n, s)
        }
    }), lt.fn.extend({fadeTo: function (e, t, i, n) {
        return this.filter(w).css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
    }, animate: function (e, t, i, n) {
        var s = lt.isEmptyObject(e), a = lt.speed(t, i, n), r = function () {
            var t = z(this, lt.extend({}, e), a);
            r.finish = function () {
                t.stop(!0)
            }, (s || lt._data(this, "finish")) && t.stop(!0)
        };
        return r.finish = r, s || a.queue === !1 ? this.each(r) : this.queue(a.queue, r)
    }, stop: function (e, i, n) {
        var s = function (e) {
            var t = e.stop;
            delete e.stop, t(n)
        };
        return"string" != typeof e && (n = i, i = e, e = t), i && e !== !1 && this.queue(e || "fx", []), this.each(function () {
            var t = !0, i = null != e && e + "queueHooks", a = lt.timers, r = lt._data(this);
            if (i)r[i] && r[i].stop && s(r[i]); else for (i in r)r[i] && r[i].stop && nn.test(i) && s(r[i]);
            for (i = a.length; i--;)a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
            (t || !n) && lt.dequeue(this, e)
        })
    }, finish: function (e) {
        return e !== !1 && (e = e || "fx"), this.each(function () {
            var t, i = lt._data(this), n = i[e + "queue"], s = i[e + "queueHooks"], a = lt.timers, r = n ? n.length : 0;
            for (i.finish = !0, lt.queue(this, e, []), s && s.cur && s.cur.finish && s.cur.finish.call(this), t = a.length; t--;)a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; r > t; t++)n[t] && n[t].finish && n[t].finish.call(this);
            delete i.finish
        })
    }}), lt.each({slideDown: q("show"), slideUp: q("hide"), slideToggle: q("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
        lt.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), lt.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? lt.extend({}, e) : {complete: i || !i && t || lt.isFunction(e) && e, duration: e, easing: i && t || t && !lt.isFunction(t) && t};
        return n.duration = lt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in lt.fx.speeds ? lt.fx.speeds[n.duration] : lt.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            lt.isFunction(n.old) && n.old.call(this), n.queue && lt.dequeue(this, n.queue)
        }, n
    }, lt.easing = {linear: function (e) {
        return e
    }, swing: function (e) {
        return.5 - Math.cos(e * Math.PI) / 2
    }}, lt.timers = [], lt.fx = W.prototype.init, lt.fx.tick = function () {
        var e, i = lt.timers, n = 0;
        for (Ji = lt.now(); n < i.length; n++)e = i[n], e() || i[n] !== e || i.splice(n--, 1);
        i.length || lt.fx.stop(), Ji = t
    }, lt.fx.timer = function (e) {
        e() && lt.timers.push(e) && lt.fx.start()
    }, lt.fx.interval = 13, lt.fx.start = function () {
        Zi || (Zi = setInterval(lt.fx.tick, lt.fx.interval))
    }, lt.fx.stop = function () {
        clearInterval(Zi), Zi = null
    }, lt.fx.speeds = {slow: 600, fast: 200, _default: 400}, lt.fx.step = {}, lt.expr && lt.expr.filters && (lt.expr.filters.animated = function (e) {
        return lt.grep(lt.timers,function (t) {
            return e === t.elem
        }).length
    }), lt.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            lt.offset.setOffset(this, e, t)
        });
        var i, n, s = {top: 0, left: 0}, a = this[0], r = a && a.ownerDocument;
        if (r)return i = r.documentElement, lt.contains(i, a) ? (typeof a.getBoundingClientRect !== Q && (s = a.getBoundingClientRect()), n = B(r), {top: s.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0), left: s.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)}) : s
    }, lt.offset = {setOffset: function (e, t, i) {
        var n = lt.css(e, "position");
        "static" === n && (e.style.position = "relative");
        var s, a, r = lt(e), o = r.offset(), l = lt.css(e, "top"), c = lt.css(e, "left"), h = ("absolute" === n || "fixed" === n) && lt.inArray("auto", [l, c]) > -1, u = {}, d = {};
        h ? (d = r.position(), s = d.top, a = d.left) : (s = parseFloat(l) || 0, a = parseFloat(c) || 0), lt.isFunction(t) && (t = t.call(e, i, o)), null != t.top && (u.top = t.top - o.top + s), null != t.left && (u.left = t.left - o.left + a), "using"in t ? t.using.call(e, u) : r.css(u)
    }}, lt.fn.extend({position: function () {
        if (this[0]) {
            var e, t, i = {top: 0, left: 0}, n = this[0];
            return"fixed" === lt.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), lt.nodeName(e[0], "html") || (i = e.offset()), i.top += lt.css(e[0], "borderTopWidth", !0), i.left += lt.css(e[0], "borderLeftWidth", !0)), {top: t.top - i.top - lt.css(n, "marginTop", !0), left: t.left - i.left - lt.css(n, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var e = this.offsetParent || V.documentElement; e && !lt.nodeName(e, "html") && "static" === lt.css(e, "position");)e = e.offsetParent;
            return e || V.documentElement
        })
    }}), lt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, i) {
        var n = /Y/.test(i);
        lt.fn[e] = function (s) {
            return lt.access(this, function (e, s, a) {
                var r = B(e);
                return a === t ? r ? i in r ? r[i] : r.document.documentElement[s] : e[s] : (r ? r.scrollTo(n ? lt(r).scrollLeft() : a, n ? a : lt(r).scrollTop()) : e[s] = a, void 0)
            }, e, s, arguments.length, null)
        }
    }), lt.each({Height: "height", Width: "width"}, function (e, i) {
        lt.each({padding: "inner" + e, content: i, "": "outer" + e}, function (n, s) {
            lt.fn[s] = function (s, a) {
                var r = arguments.length && (n || "boolean" != typeof s), o = n || (s === !0 || a === !0 ? "margin" : "border");
                return lt.access(this, function (i, n, s) {
                    var a;
                    return lt.isWindow(i) ? i.document.documentElement["client" + e] : 9 === i.nodeType ? (a = i.documentElement, Math.max(i.body["scroll" + e], a["scroll" + e], i.body["offset" + e], a["offset" + e], a["client" + e])) : s === t ? lt.css(i, n, o) : lt.style(i, n, s, o)
                }, i, r ? s : t, r, null)
            }
        })
    }), e.jQuery = e.$ = lt, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return lt
    })
}(window), function (e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var i;
    e.rails = i = {linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]", buttonClickSelector: "button[data-remote]", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])", disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled", requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])", fileInputSelector: "input[type=file]", linkDisableSelector: "a[data-disable-with]", CSRFProtection: function (t) {
        var i = e('meta[name="csrf-token"]').attr("content");
        i && t.setRequestHeader("X-CSRF-Token", i)
    }, fire: function (t, i, n) {
        var s = e.Event(i);
        return t.trigger(s, n), s.result !== !1
    }, confirm: function (e) {
        return confirm(e)
    }, ajax: function (t) {
        return e.ajax(t)
    }, href: function (e) {
        return e.attr("href")
    }, handleRemote: function (n) {
        var s, a, r, o, l, c, h, u;
        if (i.fire(n, "ajax:before")) {
            if (o = n.data("cross-domain"), l = o === t ? null : o, c = n.data("with-credentials") || null, h = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, n.is("form")) {
                s = n.attr("method"), a = n.attr("action"), r = n.serializeArray();
                var d = n.data("ujs:submit-button");
                d && (r.push(d), n.data("ujs:submit-button", null))
            } else n.is(i.inputChangeSelector) ? (s = n.data("method"), a = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", a = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : (s = n.data("method"), a = i.href(n), r = n.data("params") || null);
            u = {type: s || "GET", data: r, dataType: h, beforeSend: function (e, s) {
                return s.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [e, s])
            }, success: function (e, t, i) {
                n.trigger("ajax:success", [e, t, i])
            }, complete: function (e, t) {
                n.trigger("ajax:complete", [e, t])
            }, error: function (e, t, i) {
                n.trigger("ajax:error", [e, t, i])
            }, crossDomain: l}, c && (u.xhrFields = {withCredentials: c}), a && (u.url = a);
            var p = i.ajax(u);
            return n.trigger("ajax:send", p), p
        }
        return!1
    }, handleMethod: function (n) {
        var s = i.href(n), a = n.data("method"), r = n.attr("target"), o = e("meta[name=csrf-token]").attr("content"), l = e("meta[name=csrf-param]").attr("content"), c = e('<form method="post" action="' + s + '"></form>'), h = '<input name="_method" value="' + a + '" type="hidden" />';
        l !== t && o !== t && (h += '<input name="' + l + '" value="' + o + '" type="hidden" />'), r && c.attr("target", r), c.hide().append(h).appendTo("body"), c.submit()
    }, disableFormElements: function (t) {
        t.find(i.disableSelector).each(function () {
            var t = e(this), i = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with", t[i]()), t[i](t.data("disable-with")), t.prop("disabled", !0)
        })
    }, enableFormElements: function (t) {
        t.find(i.enableSelector).each(function () {
            var t = e(this), i = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[i](t.data("ujs:enable-with")), t.prop("disabled", !1)
        })
    }, allowAction: function (e) {
        var t, n = e.data("confirm"), s = !1;
        return n ? (i.fire(e, "confirm") && (s = i.confirm(n), t = i.fire(e, "confirm:complete", [s])), s && t) : !0
    }, blankInputs: function (t, i, n) {
        var s, a, r = e(), o = i || "input,textarea", l = t.find(o);
        return l.each(function () {
            if (s = e(this), a = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !a == !n) {
                if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length)return!0;
                r = r.add(s)
            }
        }), r.length ? r : !1
    }, nonBlankInputs: function (e, t) {
        return i.blankInputs(e, t, !0)
    }, stopEverything: function (t) {
        return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
    }, disableElement: function (e) {
        e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
            return i.stopEverything(e)
        })
    }, enableElement: function (e) {
        e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
    }}, i.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || i.CSRFProtection(n)
    }), e(document).delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(e(this))
    }), e(document).delegate(i.linkClickSelector, "click.rails", function (n) {
        var s = e(this), a = s.data("method"), r = s.data("params");
        if (!i.allowAction(s))return i.stopEverything(n);
        if (s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== t) {
            if (!(!n.metaKey && !n.ctrlKey || a && "GET" !== a || r))return!0;
            var o = i.handleRemote(s);
            return o === !1 ? i.enableElement(s) : o.error(function () {
                i.enableElement(s)
            }), !1
        }
        return s.data("method") ? (i.handleMethod(s), !1) : void 0
    }), e(document).delegate(i.buttonClickSelector, "click.rails", function (t) {
        var n = e(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(t)
    }), e(document).delegate(i.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(t)
    }), e(document).delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var s = e(this), a = s.data("remote") !== t, r = i.blankInputs(s, i.requiredInputSelector), o = i.nonBlankInputs(s, i.fileInputSelector);
        if (!i.allowAction(s))return i.stopEverything(n);
        if (r && s.attr("novalidate") == t && i.fire(s, "ajax:aborted:required", [r]))return i.stopEverything(n);
        if (a) {
            if (o) {
                setTimeout(function () {
                    i.disableFormElements(s)
                }, 13);
                var l = i.fire(s, "ajax:aborted:file", [o]);
                return l || setTimeout(function () {
                    i.enableFormElements(s)
                }, 13), l
            }
            return i.handleRemote(s), !1
        }
        setTimeout(function () {
            i.disableFormElements(s)
        }, 13)
    }), e(document).delegate(i.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!i.allowAction(n))return i.stopEverything(t);
        var s = n.attr("name"), a = s ? {name: s, value: n.val()} : null;
        n.closest("form").data("ujs:submit-button", a)
    }), e(document).delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && i.disableFormElements(e(this))
    }), e(document).delegate(i.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && i.enableFormElements(e(this))
    }), e(function () {
        var t = e("meta[name=csrf-token]").attr("content"), i = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + i + '"]').val(t)
    }))
}(jQuery), /*!
 * jQuery Migrate - v1.0.0 - 2013-01-14
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
    function (e, t, i) {
        "use strict";
        function n(i) {
            a[i] || (a[i] = !0, e.migrateWarnings.push(i), t.console && console.warn && !e.migrateMute && console.warn("JQMIGRATE: " + i))
        }

        function s(t, i, s, a) {
            if (Object.defineProperty)try {
                return Object.defineProperty(t, i, {configurable: !0, enumerable: !0, get: function () {
                    return n(a), s
                }, set: function (e) {
                    n(a), s = e
                }}), void 0
            } catch (r) {
            }
            e._definePropertyBroken = !0, t[i] = s
        }

        var a = {};
        e.migrateWarnings = [], e.migrateReset = function () {
            a = {}, e.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
        var r = {}, o = e.attr, l = e.attrHooks.value && e.attrHooks.value.get || function () {
            return null
        }, c = e.attrHooks.value && e.attrHooks.value.set || function () {
            return i
        }, h = /^(?:input|button)$/i, u = /^[238]$/, d = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, p = /^(?:checked|selected)$/i;
        s(e, "attrFn", r, "jQuery.attrFn is deprecated"), e.attr = function (t, s, a, r) {
            var l = s.toLowerCase(), c = t && t.nodeType;
            return r && (n("jQuery.fn.attr( props, pass ) is deprecated"), t && !u.test(c) && e.isFunction(e.fn[s])) ? e(t)[s](a) : ("type" === s && a !== i && h.test(t.nodeName) && n("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[l] && d.test(l) && (e.attrHooks[l] = {get: function (t, n) {
                var s, a = e.prop(t, n);
                return a === !0 || "boolean" != typeof a && (s = t.getAttributeNode(n)) && s.nodeValue !== !1 ? n.toLowerCase() : i
            }, set: function (t, i, n) {
                var s;
                return i === !1 ? e.removeAttr(t, n) : (s = e.propFix[n] || n, s in t && (t[s] = !0), t.setAttribute(n, n.toLowerCase())), n
            }}, p.test(l) && n("jQuery.fn.attr(" + l + ") may use property instead of attribute")), o.call(e, t, s, a))
        }, e.attrHooks.value = {get: function (e, t) {
            var i = (e.nodeName || "").toLowerCase();
            return"button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && n("property-based jQuery.fn.attr('value') is deprecated"), t in e ? e.value : null)
        }, set: function (e, t) {
            var i = (e.nodeName || "").toLowerCase();
            return"button" === i ? c.apply(this, arguments) : ("input" !== i && "option" !== i && n("property-based jQuery.fn.attr('value', val) is deprecated"), e.value = t, void 0)
        }};
        var f, g, m = e.fn.init, v = /^(?:.*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;
        e.fn.init = function (t, i, s) {
            var a;
            return t && "string" == typeof t && !e.isPlainObject(i) && (a = v.exec(t)) && a[1] && ("<" !== t.charAt(0) && n("$(html) HTML strings must start with '<' character"), i && i.context && (i = i.context), e.parseHTML) ? m.call(this, e.parseHTML(e.trim(t), i, !0), i, s) : m.apply(this, arguments)
        }, e.fn.init.prototype = e.fn, e.uaMatch = function (e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return{browser: t[1] || "", version: t[2] || "0"}
        }, f = e.uaMatch(navigator.userAgent), g = {}, f.browser && (g[f.browser] = !0, g.version = f.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), e.browser = g, s(e, "browser", g, "jQuery.browser is deprecated"), e.sub = function () {
            function t(e, i) {
                return new t.fn.init(e, i)
            }

            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function (n, s) {
                return s && s instanceof e && !(s instanceof t) && (s = t(s)), e.fn.init.call(this, n, s, i)
            }, t.fn.init.prototype = t.fn;
            var i = t(document);
            return n("jQuery.sub() is deprecated"), t
        };
        var _ = e.fn.data;
        e.fn.data = function (t) {
            var s, a, r = this[0];
            return!r || "events" !== t || 1 !== arguments.length || (s = e.data(r, t), a = e._data(r, t), s !== i && s !== a || a === i) ? _.apply(this, arguments) : (n("Use of jQuery.fn.data('events') is deprecated"), a)
        };
        var b = /\/(java|ecma)script/i, y = e.fn.andSelf || e.fn.addBack, x = e.buildFragment;
        e.fn.andSelf = function () {
            return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), y.apply(this, arguments)
        }, e.clean || (e.clean = function (t, i, s, a) {
            i = i || document, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, n("jQuery.clean() is deprecated");
            var r, o, l, c, h = [];
            if (e.merge(h, e.buildFragment(t, i).childNodes), s)for (l = function (e) {
                return!e.type || b.test(e.type) ? a ? a.push(e.parentNode ? e.parentNode.removeChild(e) : e) : s.appendChild(e) : void 0
            }, r = 0; null != (o = h[r]); r++)e.nodeName(o, "script") && l(o) || (s.appendChild(o), "undefined" != typeof o.getElementsByTagName && (c = e.grep(e.merge([], o.getElementsByTagName("script")), l), h.splice.apply(h, [r + 1, 0].concat(c)), r += c.length));
            return h
        }), e.buildFragment = function (t, i, a, r) {
            var o, l = "jQuery.buildFragment() is deprecated";
            i = i || document, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i;
            try {
                o = x.call(e, t, i, a, r)
            } catch (c) {
                o = x.call(e, t, i.nodeType ? [i] : i[0], a, r), n(l)
            }
            return o.fragment || (s(o, "fragment", o, l), s(o, "cacheable", !1, l)), o
        };
        var w = e.event.add, k = e.event.remove, C = e.event.trigger, j = e.fn.toggle, S = e.fn.live, T = e.fn.die, D = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", E = new RegExp("\\b(?:" + D + ")\\b"), $ = /(?:^|\s)hover(\.\S+|)\b/, A = function (t) {
            return"string" != typeof t || e.event.special.hover ? t : ($.test(t) && n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace($, "mouseenter$1 mouseleave$1"))
        };
        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), s(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function (e, t, i, s, a) {
            e !== document && E.test(t) && n("AJAX events should be attached to document: " + t), w.call(this, e, A(t || ""), i, s, a)
        }, e.event.remove = function (e, t, i, n, s) {
            k.call(this, e, A(t) || "", i, n, s)
        }, e.fn.error = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return n("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
        }, e.fn.toggle = function (t, i) {
            if (!e.isFunction(t) || !e.isFunction(i))return j.apply(this, arguments);
            n("jQuery.fn.toggle(handler, handler...) is deprecated");
            var s = arguments, a = t.guid || e.guid++, r = 0, o = function (i) {
                var n = (e._data(this, "lastToggle" + t.guid) || 0) % r;
                return e._data(this, "lastToggle" + t.guid, n + 1), i.preventDefault(), s[n].apply(this, arguments) || !1
            };
            for (o.guid = a; r < s.length;)s[r++].guid = a;
            return this.click(o)
        }, e.fn.live = function (t, i, s) {
            return n("jQuery.fn.live() is deprecated"), S ? S.apply(this, arguments) : (e(this.context).on(t, this.selector, i, s), this)
        }, e.fn.die = function (t, i) {
            return n("jQuery.fn.die() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", i), this)
        }, e.event.trigger = function (e, t, i, s) {
            return!i & !E.test(e) && n("Global events are undocumented and deprecated"), C.call(this, e, t, i || document, s)
        }, e.each(D.split("|"), function (t, i) {
            e.event.special[i] = {setup: function () {
                var t = this;
                return t !== document && (e.event.add(document, i + "." + e.guid, function () {
                    e.event.trigger(i, null, t, !0)
                }), e._data(this, i, e.guid++)), !1
            }, teardown: function () {
                return this !== document && e.event.remove(document, i + "." + e._data(this, i)), !1
            }}
        })
    }(jQuery, window), /*! jQuery UI - v1.9.2 - 2012-11-23
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
    function (e, t) {
        function i(t, i) {
            var s, a, r, o = t.nodeName.toLowerCase();
            return"area" === o ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (r = e("img[usemap=#" + a + "]")[0], !!r && n(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && n(t)
        }

        function n(t) {
            return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function () {
                return"hidden" === e.css(this, "visibility")
            }).length
        }

        var s = 0, a = /^ui-id-\d+$/;
        e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {version: "1.9.2", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}}), e.fn.extend({_focus: e.fn.focus, focus: function (t, i) {
            return"number" == typeof t ? this.each(function () {
                var n = this;
                setTimeout(function () {
                    e(n).focus(), i && i.call(n)
                }, t)
            }) : this._focus.apply(this, arguments)
        }, scrollParent: function () {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return/(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return/(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        }, zIndex: function (i) {
            if (i !== t)return this.css("zIndex", i);
            if (this.length)for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
                if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s))return s;
                a = a.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++s)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                a.test(this.id) && e(this).removeAttr("id")
            })
        }}), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return!!e.data(i, t)
            }
        }) : function (t, i, n) {
            return!!e.data(t, n[3])
        }, focusable: function (t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        }, tabbable: function (t) {
            var n = e.attr(t, "tabindex"), s = isNaN(n);
            return(s || n >= 0) && i(t, !s)
        }}), e(function () {
            var t = document.body, i = t.appendChild(i = document.createElement("div"));
            i.offsetHeight, e.extend(i.style, {minHeight: "100px", height: "auto", padding: 0, borderWidth: 0}), e.support.minHeight = 100 === i.offsetHeight, e.support.selectstart = "onselectstart"in i, t.removeChild(i).style.display = "none"
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, n) {
            function s(t, i, n, s) {
                return e.each(a, function () {
                    i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), i
            }

            var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], r = n.toLowerCase(), o = {innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight};
            e.fn["inner" + n] = function (i) {
                return i === t ? o["inner" + n].call(this) : this.each(function () {
                    e(this).css(r, s(this, i) + "px")
                })
            }, e.fn["outer" + n] = function (t, i) {
                return"number" != typeof t ? o["outer" + n].call(this, t) : this.each(function () {
                    e(this).css(r, s(this, t, !0, i) + "px")
                })
            }
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
            return function (i) {
                return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
            }
        }(e.fn.removeData)), function () {
            var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
            e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = 6 === parseFloat(t[1], 10)
        }(), e.fn.extend({disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }}), e.extend(e.ui, {plugin: {add: function (t, i, n) {
            var s, a = e.ui[t].prototype;
            for (s in n)a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
        }, call: function (e, t, i) {
            var n, s = e.plugins[t];
            if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)for (n = 0; n < s.length; n++)e.options[s[n][0]] && s[n][1].apply(e.element, i)
        }}, contains: e.contains, hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow"))return!1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
        }, isOverAxis: function (e, t, i) {
            return e > t && t + i > e
        }, isOver: function (t, i, n, s, a, r) {
            return e.ui.isOverAxis(t, n, a) && e.ui.isOverAxis(i, s, r)
        }}))
    }(jQuery), function (e, t) {
    var i = 0, n = Array.prototype.slice, s = e.cleanData;
    e.cleanData = function (t) {
        for (var i, n = 0; null != (i = t[n]); n++)try {
            e(i).triggerHandler("remove")
        } catch (a) {
        }
        s(t)
    }, e.widget = function (t, i, n) {
        var s, a, r, o, l = t.split(".")[0];
        t = t.split(".")[1], s = l + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][s.toLowerCase()] = function (t) {
            return!!e.data(t, s)
        }, e[l] = e[l] || {}, a = e[l][t], r = e[l][t] = function (e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new r(e, t)
        }, e.extend(r, a, {version: n.version, _proto: e.extend({}, n), _childConstructors: []}), o = new i, o.options = e.widget.extend({}, o.options), e.each(n, function (t, s) {
            e.isFunction(s) && (n[t] = function () {
                var e = function () {
                    return i.prototype[t].apply(this, arguments)
                }, n = function (e) {
                    return i.prototype[t].apply(this, e)
                };
                return function () {
                    var t, i = this._super, a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }())
        }), r.prototype = e.widget.extend(o, {widgetEventPrefix: a ? o.widgetEventPrefix : t}, n, {constructor: r, namespace: l, widgetName: t, widgetBaseClass: s, widgetFullName: s}), a ? (e.each(a._childConstructors, function (t, i) {
            var n = i.prototype;
            e.widget(n.namespace + "." + n.widgetName, r, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(r), e.widget.bridge(t, r)
    }, e.widget.extend = function (i) {
        for (var s, a, r = n.call(arguments, 1), o = 0, l = r.length; l > o; o++)for (s in r[o])a = r[o][s], r[o].hasOwnProperty(s) && a !== t && (i[s] = e.isPlainObject(a) ? e.isPlainObject(i[s]) ? e.widget.extend({}, i[s], a) : e.widget.extend({}, a) : a);
        return i
    }, e.widget.bridge = function (i, s) {
        var a = s.prototype.widgetFullName || i;
        e.fn[i] = function (r) {
            var o = "string" == typeof r, l = n.call(arguments, 1), c = this;
            return r = !o && l.length ? e.widget.extend.apply(null, [r].concat(l)) : r, o ? this.each(function () {
                var n, s = e.data(this, a);
                return s ? e.isFunction(s[r]) && "_" !== r.charAt(0) ? (n = s[r].apply(s, l), n !== s && n !== t ? (c = n && n.jquery ? c.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function () {
                var t = e.data(this, a);
                t ? t.option(r || {})._init() : e.data(this, a, new s(r, this))
            }), c
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function (t, n) {
        n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetName, this), e.data(n, this.widgetFullName, this), this._on(!0, this.element, {remove: function (e) {
            e.target === n && this.destroy()
        }}), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function () {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    }, _destroy: e.noop, widget: function () {
        return this.element
    }, option: function (i, n) {
        var s, a, r, o = i;
        if (0 === arguments.length)return e.widget.extend({}, this.options);
        if ("string" == typeof i)if (o = {}, s = i.split("."), i = s.shift(), s.length) {
            for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; r < s.length - 1; r++)a[s[r]] = a[s[r]] || {}, a = a[s[r]];
            if (i = s.pop(), n === t)return a[i] === t ? null : a[i];
            a[i] = n
        } else {
            if (n === t)return this.options[i] === t ? null : this.options[i];
            o[i] = n
        }
        return this._setOptions(o), this
    }, _setOptions: function (e) {
        var t;
        for (t in e)this._setOption(t, e[t]);
        return this
    }, _setOption: function (e, t) {
        return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
    }, enable: function () {
        return this._setOption("disabled", !1)
    }, disable: function () {
        return this._setOption("disabled", !0)
    }, _on: function (t, i, n) {
        var s, a = this;
        "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), e.each(n, function (n, r) {
            function o() {
                return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : void 0
            }

            "string" != typeof r && (o.guid = r.guid = r.guid || o.guid || e.guid++);
            var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + a.eventNamespace, h = l[2];
            h ? s.delegate(h, c, o) : i.bind(c, o)
        })
    }, _off: function (e, t) {
        t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
    }, _delay: function (e, t) {
        function i() {
            return("string" == typeof e ? n[e] : e).apply(n, arguments)
        }

        var n = this;
        return setTimeout(i, t || 0)
    }, _hoverable: function (t) {
        this.hoverable = this.hoverable.add(t), this._on(t, {mouseenter: function (t) {
            e(t.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (t) {
            e(t.currentTarget).removeClass("ui-state-hover")
        }})
    }, _focusable: function (t) {
        this.focusable = this.focusable.add(t), this._on(t, {focusin: function (t) {
            e(t.currentTarget).addClass("ui-state-focus")
        }, focusout: function (t) {
            e(t.currentTarget).removeClass("ui-state-focus")
        }})
    }, _trigger: function (t, i, n) {
        var s, a, r = this.options[t];
        if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)for (s in a)s in i || (i[s] = a[s]);
        return this.element.trigger(i, n), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
    }}, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
        e.Widget.prototype["_" + t] = function (n, s, a) {
            "string" == typeof s && (s = {effect: s});
            var r, o = s ? s === !0 || "number" == typeof s ? i : s.effect || i : t;
            s = s || {}, "number" == typeof s && (s = {duration: s}), r = !e.isEmptyObject(s), s.complete = a, s.delay && n.delay(s.delay), r && e.effects && (e.effects.effect[o] || e.uiBackCompat !== !1 && e.effects[o]) ? n[t](s) : o !== t && n[o] ? n[o](s.duration, s.easing, a) : n.queue(function (i) {
                e(this)[t](), a && a.call(n[0]), i()
            })
        }
    }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function () {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    })
}(jQuery), function (e) {
    var t = !1;
    e(document).mouseup(function () {
        t = !1
    }), e.widget("ui.mouse", {version: "1.9.2", options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function () {
        var t = this;
        this.element.bind("mousedown." + this.widgetName,function (e) {
            return t._mouseDown(e)
        }).bind("click." + this.widgetName, function (i) {
            return!0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
        }), this.started = !1
    }, _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    }, _mouseDown: function (i) {
        if (!t) {
            this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
            var n = this, s = 1 === i.which, a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
            return s && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                n.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                return n._mouseMove(e)
            }, this._mouseUpDelegate = function (e) {
                return n._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
        }
    }, _mouseMove: function (t) {
        return!e.ui.ie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
    }, _mouseUp: function (t) {
        return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
    }, _mouseDistanceMet: function (e) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    }, _mouseDelayMet: function () {
        return this.mouseDelayMet
    }, _mouseStart: function () {
    }, _mouseDrag: function () {
    }, _mouseStop: function () {
    }, _mouseCapture: function () {
        return!0
    }})
}(jQuery), function (e) {
    e.widget("ui.draggable", e.ui.mouse, {version: "1.9.2", widgetEventPrefix: "drag", options: {addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1}, _create: function () {
        "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
    }, _destroy: function () {
        this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
    }, _mouseCapture: function (t) {
        var i = this.options;
        return this.helper || i.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
            e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3}).css(e(this).offset()).appendTo("body")
        }), !0) : !1)
    }, _mouseStart: function (t) {
        var i = this.options;
        return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, e.extend(this.offset, {click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
    }, _mouseDrag: function (t, i) {
        if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
            var n = this._uiHash();
            if (this._trigger("drag", t, n) === !1)return this._mouseUp({}), !1;
            this.position = n.position
        }
        return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
    }, _mouseStop: function (t) {
        var i = !1;
        e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1);
        for (var n = this.element[0], s = !1; n && (n = n.parentNode);)n == document && (s = !0);
        if (!s && "original" === this.options.helper)return!1;
        if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
            var a = this;
            e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                a._trigger("stop", t) !== !1 && a._clear()
            })
        } else this._trigger("stop", t) !== !1 && this._clear();
        return!1
    }, _mouseUp: function (t) {
        return e("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this)
        }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
    }, cancel: function () {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    }, _getHandle: function (t) {
        var i = this.options.handle && e(this.options.handle, this.element).length ? !1 : !0;
        return e(this.options.handle, this.element).find("*").andSelf().each(function () {
            this == t.target && (i = !0)
        }), i
    }, _createHelper: function (t) {
        var i = this.options, n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
        return n.parents("body").length || n.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), n[0] == this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
    }, _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {left: +t[0], top: +t[1] || 0}), "left"in t && (this.offset.click.left = t.left + this.margins.left), "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top"in t && (this.offset.click.top = t.top + this.margins.top), "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return"absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {top: 0, left: 0}), {top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" == this.cssPosition) {
            var e = this.element.position();
            return{top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var t = this.options;
        if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = ["document" == t.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == t.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == t.containment ? 0 : e(window).scrollLeft()) + e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == t.containment ? 0 : e(window).scrollTop()) + (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(t.containment) || t.containment.constructor == Array)t.containment.constructor == Array && (this.containment = t.containment); else {
            var i = e(t.containment), n = i[0];
            if (!n)return;
            i.offset();
            var s = "hidden" != e(n).css("overflow");
            this.containment = [(parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0), (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0), (s ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
        }
    }, _convertPositionTo: function (t, i) {
        i || (i = this.position);
        var n = "absolute" == t ? 1 : -1, s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent), a = /(html|body)/i.test(s[0].tagName);
        return{top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : s.scrollTop()) * n, left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : s.scrollLeft()) * n}
    }, _generatePosition: function (t) {
        var i = this.options, n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, s = /(html|body)/i.test(n[0].tagName), a = t.pageX, r = t.pageY;
        if (this.originalPosition) {
            var o;
            if (this.containment) {
                if (this.relative_container) {
                    var l = this.relative_container.offset();
                    o = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                } else o = this.containment;
                t.pageX - this.offset.click.left < o[0] && (a = o[0] + this.offset.click.left), t.pageY - this.offset.click.top < o[1] && (r = o[1] + this.offset.click.top), t.pageX - this.offset.click.left > o[2] && (a = o[2] + this.offset.click.left), t.pageY - this.offset.click.top > o[3] && (r = o[3] + this.offset.click.top)
            }
            if (i.grid) {
                var c = i.grid[1] ? this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
                r = o ? c - this.offset.click.top < o[1] || c - this.offset.click.top > o[3] ? c - this.offset.click.top < o[1] ? c + i.grid[1] : c - i.grid[1] : c : c;
                var h = i.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
                a = o ? h - this.offset.click.left < o[0] || h - this.offset.click.left > o[2] ? h - this.offset.click.left < o[0] ? h + i.grid[0] : h - i.grid[0] : h : h
            }
        }
        return{top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()), left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())}
    }, _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
    }, _trigger: function (t, i, n) {
        return n = n || this._uiHash(), e.ui.plugin.call(this, t, [i, n]), "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, n)
    }, plugins: {}, _uiHash: function () {
        return{helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
    }}), e.ui.plugin.add("draggable", "connectToSortable", {start: function (t, i) {
        var n = e(this).data("draggable"), s = n.options, a = e.extend({}, i, {item: n.element});
        n.sortables = [], e(s.connectToSortable).each(function () {
            var i = e.data(this, "sortable");
            i && !i.options.disabled && (n.sortables.push({instance: i, shouldRevert: i.options.revert}), i.refreshPositions(), i._trigger("activate", t, a))
        })
    }, stop: function (t, i) {
        var n = e(this).data("draggable"), s = e.extend({}, i, {item: n.element});
        e.each(n.sortables, function () {
            this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" == n.options.helper && this.instance.currentItem.css({top: "auto", left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, s))
        })
    }, drag: function (t, i) {
        var n = e(this).data("draggable"), s = this;
        e.each(n.sortables, function () {
            var a = !1, r = this;
            this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(n.sortables, function () {
                return this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this != r && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(r.instance.element[0], this.instance.element[0]) && (a = !1), a
            })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(s).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                return i.helper[0]
            }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", t), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", t), n.dropped = !1)
        })
    }}), e.ui.plugin.add("draggable", "cursor", {start: function () {
        var t = e("body"), i = e(this).data("draggable").options;
        t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
    }, stop: function () {
        var t = e(this).data("draggable").options;
        t._cursor && e("body").css("cursor", t._cursor)
    }}), e.ui.plugin.add("draggable", "opacity", {start: function (t, i) {
        var n = e(i.helper), s = e(this).data("draggable").options;
        n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
    }, stop: function (t, i) {
        var n = e(this).data("draggable").options;
        n._opacity && e(i.helper).css("opacity", n._opacity)
    }}), e.ui.plugin.add("draggable", "scroll", {start: function () {
        var t = e(this).data("draggable");
        t.scrollParent[0] != document && "HTML" != t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
    }, drag: function (t) {
        var i = e(this).data("draggable"), n = i.options, s = !1;
        i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (n.axis && "x" == n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" == n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" == n.axis || (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed))), n.axis && "y" == n.axis || (t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed)))), s !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
    }}), e.ui.plugin.add("draggable", "snap", {start: function () {
        var t = e(this).data("draggable"), i = t.options;
        t.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function () {
            var i = e(this), n = i.offset();
            this != t.element[0] && t.snapElements.push({item: this, width: i.outerWidth(), height: i.outerHeight(), top: n.top, left: n.left})
        })
    }, drag: function (t, i) {
        for (var n = e(this).data("draggable"), s = n.options, a = s.snapTolerance, r = i.offset.left, o = r + n.helperProportions.width, l = i.offset.top, c = l + n.helperProportions.height, h = n.snapElements.length - 1; h >= 0; h--) {
            var u = n.snapElements[h].left, d = u + n.snapElements[h].width, p = n.snapElements[h].top, f = p + n.snapElements[h].height;
            if (r > u - a && d + a > r && l > p - a && f + a > l || r > u - a && d + a > r && c > p - a && f + a > c || o > u - a && d + a > o && l > p - a && f + a > l || o > u - a && d + a > o && c > p - a && f + a > c) {
                if ("inner" != s.snapMode) {
                    var g = Math.abs(p - c) <= a, m = Math.abs(f - l) <= a, v = Math.abs(u - o) <= a, _ = Math.abs(d - r) <= a;
                    g && (i.position.top = n._convertPositionTo("relative", {top: p - n.helperProportions.height, left: 0}).top - n.margins.top), m && (i.position.top = n._convertPositionTo("relative", {top: f, left: 0}).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {top: 0, left: u - n.helperProportions.width}).left - n.margins.left), _ && (i.position.left = n._convertPositionTo("relative", {top: 0, left: d}).left - n.margins.left)
                }
                var b = g || m || v || _;
                if ("outer" != s.snapMode) {
                    var g = Math.abs(p - l) <= a, m = Math.abs(f - c) <= a, v = Math.abs(u - r) <= a, _ = Math.abs(d - o) <= a;
                    g && (i.position.top = n._convertPositionTo("relative", {top: p, left: 0}).top - n.margins.top), m && (i.position.top = n._convertPositionTo("relative", {top: f - n.helperProportions.height, left: 0}).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {top: 0, left: u}).left - n.margins.left), _ && (i.position.left = n._convertPositionTo("relative", {top: 0, left: d - n.helperProportions.width}).left - n.margins.left)
                }
                !n.snapElements[h].snapping && (g || m || v || _ || b) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {snapItem: n.snapElements[h].item})), n.snapElements[h].snapping = g || m || v || _ || b
            } else n.snapElements[h].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {snapItem: n.snapElements[h].item})), n.snapElements[h].snapping = !1
        }
    }}), e.ui.plugin.add("draggable", "stack", {start: function () {
        var t = e(this).data("draggable").options, i = e.makeArray(e(t.stack)).sort(function (t, i) {
            return(parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
        });
        if (i.length) {
            var n = parseInt(i[0].style.zIndex) || 0;
            e(i).each(function (e) {
                this.style.zIndex = n + e
            }), this[0].style.zIndex = n + i.length
        }
    }}), e.ui.plugin.add("draggable", "zIndex", {start: function (t, i) {
        var n = e(i.helper), s = e(this).data("draggable").options;
        n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
    }, stop: function (t, i) {
        var n = e(this).data("draggable").options;
        n._zIndex && e(i.helper).css("zIndex", n._zIndex)
    }})
}(jQuery), function (e) {
    e.widget("ui.droppable", {version: "1.9.2", widgetEventPrefix: "drop", options: {accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect"}, _create: function () {
        var t = this.options, i = t.accept;
        this.isover = 0, this.isout = 1, this.accept = e.isFunction(i) ? i : function (e) {
            return e.is(i)
        }, this.proportions = {width: this.element[0].offsetWidth, height: this.element[0].offsetHeight}, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
    }, _destroy: function () {
        for (var t = e.ui.ddmanager.droppables[this.options.scope], i = 0; i < t.length; i++)t[i] == this && t.splice(i, 1);
        this.element.removeClass("ui-droppable ui-droppable-disabled")
    }, _setOption: function (t, i) {
        "accept" == t && (this.accept = e.isFunction(i) ? i : function (e) {
            return e.is(i)
        }), e.Widget.prototype._setOption.apply(this, arguments)
    }, _activate: function (t) {
        var i = e.ui.ddmanager.current;
        this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
    }, _deactivate: function (t) {
        var i = e.ui.ddmanager.current;
        this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
    }, _over: function (t) {
        var i = e.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
    }, _out: function (t) {
        var i = e.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
    }, _drop: function (t, i) {
        var n = i || e.ui.ddmanager.current;
        if (!n || (n.currentItem || n.element)[0] == this.element[0])return!1;
        var s = !1;
        return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
            var t = e.data(this, "droppable");
            return t.options.greedy && !t.options.disabled && t.options.scope == n.options.scope && t.accept.call(t.element[0], n.currentItem || n.element) && e.ui.intersect(n, e.extend(t, {offset: t.element.offset()}), t.options.tolerance) ? (s = !0, !1) : void 0
        }), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(n)), this.element) : !1
    }, ui: function (e) {
        return{draggable: e.currentItem || e.element, helper: e.helper, position: e.position, offset: e.positionAbs}
    }}), e.ui.intersect = function (t, i, n) {
        if (!i.offset)return!1;
        var s = (t.positionAbs || t.position.absolute).left, a = s + t.helperProportions.width, r = (t.positionAbs || t.position.absolute).top, o = r + t.helperProportions.height, l = i.offset.left, c = l + i.proportions.width, h = i.offset.top, u = h + i.proportions.height;
        switch (n) {
            case"fit":
                return s >= l && c >= a && r >= h && u >= o;
            case"intersect":
                return l < s + t.helperProportions.width / 2 && a - t.helperProportions.width / 2 < c && h < r + t.helperProportions.height / 2 && o - t.helperProportions.height / 2 < u;
            case"pointer":
                var d = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, p = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, f = e.ui.isOver(p, d, h, l, i.proportions.height, i.proportions.width);
                return f;
            case"touch":
                return(r >= h && u >= r || o >= h && u >= o || h > r && o > u) && (s >= l && c >= s || a >= l && c >= a || l > s && a > c);
            default:
                return!1
        }
    }, e.ui.ddmanager = {current: null, droppables: {"default": []}, prepareOffsets: function (t, i) {
        var n = e.ui.ddmanager.droppables[t.options.scope] || [], s = i ? i.type : null, a = (t.currentItem || t.element).find(":data(droppable)").andSelf();
        e:for (var r = 0; r < n.length; r++)if (!(n[r].options.disabled || t && !n[r].accept.call(n[r].element[0], t.currentItem || t.element))) {
            for (var o = 0; o < a.length; o++)if (a[o] == n[r].element[0]) {
                n[r].proportions.height = 0;
                continue e
            }
            n[r].visible = "none" != n[r].element.css("display"), n[r].visible && ("mousedown" == s && n[r]._activate.call(n[r], i), n[r].offset = n[r].element.offset(), n[r].proportions = {width: n[r].element[0].offsetWidth, height: n[r].element[0].offsetHeight})
        }
    }, drop: function (t, i) {
        var n = !1;
        return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
            this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
        }), n
    }, dragStart: function (t, i) {
        t.element.parentsUntil("body").bind("scroll.droppable", function () {
            t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        })
    }, drag: function (t, i) {
        t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
                var n = e.ui.intersect(t, this, this.options.tolerance), s = n || 1 != this.isover ? n && 0 == this.isover ? "isover" : null : "isout";
                if (s) {
                    var a;
                    if (this.options.greedy) {
                        var r = this.options.scope, o = this.element.parents(":data(droppable)").filter(function () {
                            return e.data(this, "droppable").options.scope === r
                        });
                        o.length && (a = e.data(o[0], "droppable"), a.greedyChild = "isover" == s ? 1 : 0)
                    }
                    a && "isover" == s && (a.isover = 0, a.isout = 1, a._out.call(a, i)), this[s] = 1, this["isout" == s ? "isover" : "isout"] = 0, this["isover" == s ? "_over" : "_out"].call(this, i), a && "isout" == s && (a.isout = 0, a.isover = 1, a._over.call(a, i))
                }
            }
        })
    }, dragStop: function (t, i) {
        t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
    }}
}(jQuery), function (e) {
    e.widget("ui.resizable", e.ui.mouse, {version: "1.9.2", widgetEventPrefix: "resize", options: {alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 1e3}, _create: function () {
        var t = this, i = this.options;
        if (this.element.addClass("ui-resizable"), e.extend(this, {_aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left")})), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static", zoom: 1, display: "block"})), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = i.handles || (e(".ui-resizable-handle", this.element).length ? {n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw"} : "e,s,se"), this.handles.constructor == String) {
            "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
            var n = this.handles.split(",");
            this.handles = {};
            for (var s = 0; s < n.length; s++) {
                var a = e.trim(n[s]), r = "ui-resizable-" + a, o = e('<div class="ui-resizable-handle ' + r + '"></div>');
                o.css({zIndex: i.zIndex}), "se" == a && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[a] = ".ui-resizable-" + a, this.element.append(o)
            }
        }
        this._renderAxis = function (t) {
            t = t || this.element;
            for (var i in this.handles) {
                if (this.handles[i].constructor == String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                    var n = e(this.handles[i], this.element), s = 0;
                    s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth();
                    var a = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                    t.css(a, s), this._proportionallyResize()
                }
                e(this.handles[i]).length
            }
        }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
            if (!t.resizing) {
                if (this.className)var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                t.axis = e && e[1] ? e[1] : "se"
            }
        }), i.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
            i.disabled || (e(this).removeClass("ui-resizable-autohide"), t._handles.show())
        }).mouseleave(function () {
            i.disabled || t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
        })), this._mouseInit()
    }, _destroy: function () {
        this._mouseDestroy();
        var t = function (t) {
            e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
        };
        if (this.elementIsWrapper) {
            t(this.element);
            var i = this.element;
            this.originalElement.css({position: i.css("position"), width: i.outerWidth(), height: i.outerHeight(), top: i.css("top"), left: i.css("left")}).insertAfter(i), i.remove()
        }
        return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
    }, _mouseCapture: function (t) {
        var i = !1;
        for (var n in this.handles)e(this.handles[n])[0] == t.target && (i = !0);
        return!this.options.disabled && i
    }, _mouseStart: function (i) {
        var n = this.options, s = this.element.position(), a = this.element;
        this.resizing = !0, this.documentScroll = {top: e(document).scrollTop(), left: e(document).scrollLeft()}, (a.is(".ui-draggable") || /absolute/.test(a.css("position"))) && a.css({position: "absolute", top: s.top, left: s.left}), this._renderProxy();
        var r = t(this.helper.css("left")), o = t(this.helper.css("top"));
        n.containment && (r += e(n.containment).scrollLeft() || 0, o += e(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left: r, top: o}, this.size = this._helper ? {width: a.outerWidth(), height: a.outerHeight()} : {width: a.width(), height: a.height()}, this.originalSize = this._helper ? {width: a.outerWidth(), height: a.outerHeight()} : {width: a.width(), height: a.height()}, this.originalPosition = {left: r, top: o}, this.sizeDiff = {width: a.outerWidth() - a.width(), height: a.outerHeight() - a.height()}, this.originalMousePosition = {left: i.pageX, top: i.pageY}, this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
        var l = e(".ui-resizable-" + this.axis).css("cursor");
        return e("body").css("cursor", "auto" == l ? this.axis + "-resize" : l), a.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
    }, _mouseDrag: function (e) {
        var t = this.helper, i = (this.options, this.originalMousePosition), n = this.axis, s = e.pageX - i.left || 0, a = e.pageY - i.top || 0, r = this._change[n];
        if (!r)return!1;
        var o = r.apply(this, [e, s, a]);
        return this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (o = this._updateRatio(o, e)), o = this._respectSize(o, e), this._propagate("resize", e), t.css({top: this.position.top + "px", left: this.position.left + "px", width: this.size.width + "px", height: this.size.height + "px"}), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(o), this._trigger("resize", e, this.ui()), !1
    }, _mouseStop: function (t) {
        this.resizing = !1;
        var i = this.options, n = this;
        if (this._helper) {
            var s = this._proportionallyResizeElements, a = s.length && /textarea/i.test(s[0].nodeName), r = a && e.ui.hasScroll(s[0], "left") ? 0 : n.sizeDiff.height, o = a ? 0 : n.sizeDiff.width, l = {width: n.helper.width() - o, height: n.helper.height() - r}, c = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null, h = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
            i.animate || this.element.css(e.extend(l, {top: h, left: c})), n.helper.height(n.size.height), n.helper.width(n.size.width), this._helper && !i.animate && this._proportionallyResize()
        }
        return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
    }, _updateVirtualBoundaries: function (e) {
        var t, n, s, a, r, o = this.options;
        r = {minWidth: i(o.minWidth) ? o.minWidth : 0, maxWidth: i(o.maxWidth) ? o.maxWidth : 1 / 0, minHeight: i(o.minHeight) ? o.minHeight : 0, maxHeight: i(o.maxHeight) ? o.maxHeight : 1 / 0}, (this._aspectRatio || e) && (t = r.minHeight * this.aspectRatio, s = r.minWidth / this.aspectRatio, n = r.maxHeight * this.aspectRatio, a = r.maxWidth / this.aspectRatio, t > r.minWidth && (r.minWidth = t), s > r.minHeight && (r.minHeight = s), n < r.maxWidth && (r.maxWidth = n), a < r.maxHeight && (r.maxHeight = a)), this._vBoundaries = r
    }, _updateCache: function (e) {
        this.options, this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
    }, _updateRatio: function (e) {
        var t = (this.options, this.position), n = this.size, s = this.axis;
        return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" == s && (e.left = t.left + (n.width - e.width), e.top = null), "nw" == s && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
    }, _respectSize: function (e, t) {
        var n = (this.helper, this._vBoundaries), s = (this._aspectRatio || t.shiftKey, this.axis), a = i(e.width) && n.maxWidth && n.maxWidth < e.width, r = i(e.height) && n.maxHeight && n.maxHeight < e.height, o = i(e.width) && n.minWidth && n.minWidth > e.width, l = i(e.height) && n.minHeight && n.minHeight > e.height;
        o && (e.width = n.minWidth), l && (e.height = n.minHeight), a && (e.width = n.maxWidth), r && (e.height = n.maxHeight);
        var c = this.originalPosition.left + this.originalSize.width, h = this.position.top + this.size.height, u = /sw|nw|w/.test(s), d = /nw|ne|n/.test(s);
        o && u && (e.left = c - n.minWidth), a && u && (e.left = c - n.maxWidth), l && d && (e.top = h - n.minHeight), r && d && (e.top = h - n.maxHeight);
        var p = !e.width && !e.height;
        return p && !e.left && e.top ? e.top = null : p && !e.top && e.left && (e.left = null), e
    }, _proportionallyResize: function () {
        if (this.options, this._proportionallyResizeElements.length)for (var t = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
            var n = this._proportionallyResizeElements[i];
            if (!this.borderDif) {
                var s = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], a = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")];
                this.borderDif = e.map(s, function (e, t) {
                    var i = parseInt(e, 10) || 0, n = parseInt(a[t], 10) || 0;
                    return i + n
                })
            }
            n.css({height: t.height() - this.borderDif[0] - this.borderDif[2] || 0, width: t.width() - this.borderDif[1] - this.borderDif[3] || 0})
        }
    }, _renderProxy: function () {
        var t = this.element, i = this.options;
        if (this.elementOffset = t.offset(), this._helper) {
            this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
            var n = e.ui.ie6 ? 1 : 0, s = e.ui.ie6 ? 2 : -1;
            this.helper.addClass(this._helper).css({width: this.element.outerWidth() + s, height: this.element.outerHeight() + s, position: "absolute", left: this.elementOffset.left - n + "px", top: this.elementOffset.top - n + "px", zIndex: ++i.zIndex}), this.helper.appendTo("body").disableSelection()
        } else this.helper = this.element
    }, _change: {e: function (e, t) {
        return{width: this.originalSize.width + t}
    }, w: function (e, t) {
        var i = (this.options, this.originalSize), n = this.originalPosition;
        return{left: n.left + t, width: i.width - t}
    }, n: function (e, t, i) {
        var n = (this.options, this.originalSize), s = this.originalPosition;
        return{top: s.top + i, height: n.height - i}
    }, s: function (e, t, i) {
        return{height: this.originalSize.height + i}
    }, se: function (t, i, n) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
    }, sw: function (t, i, n) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
    }, ne: function (t, i, n) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
    }, nw: function (t, i, n) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
    }}, _propagate: function (t, i) {
        e.ui.plugin.call(this, t, [i, this.ui()]), "resize" != t && this._trigger(t, i, this.ui())
    }, plugins: {}, ui: function () {
        return{originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition}
    }}), e.ui.plugin.add("resizable", "alsoResize", {start: function () {
        var t = e(this).data("resizable"), i = t.options, n = function (t) {
            e(t).each(function () {
                var t = e(this);
                t.data("resizable-alsoresize", {width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10)})
            })
        };
        "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : e.each(i.alsoResize, function (e) {
            n(e)
        })
    }, resize: function (t, i) {
        var n = e(this).data("resizable"), s = n.options, a = n.originalSize, r = n.originalPosition, o = {height: n.size.height - a.height || 0, width: n.size.width - a.width || 0, top: n.position.top - r.top || 0, left: n.position.left - r.left || 0}, l = function (t, n) {
            e(t).each(function () {
                var t = e(this), s = e(this).data("resizable-alsoresize"), a = {}, r = n && n.length ? n : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                e.each(r, function (e, t) {
                    var i = (s[t] || 0) + (o[t] || 0);
                    i && i >= 0 && (a[t] = i || null)
                }), t.css(a)
            })
        };
        "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : e.each(s.alsoResize, function (e, t) {
            l(e, t)
        })
    }, stop: function () {
        e(this).removeData("resizable-alsoresize")
    }}), e.ui.plugin.add("resizable", "animate", {stop: function (t) {
        var i = e(this).data("resizable"), n = i.options, s = i._proportionallyResizeElements, a = s.length && /textarea/i.test(s[0].nodeName), r = a && e.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height, o = a ? 0 : i.sizeDiff.width, l = {width: i.size.width - o, height: i.size.height - r}, c = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
        i.element.animate(e.extend(l, h && c ? {top: h, left: c} : {}), {duration: n.animateDuration, easing: n.animateEasing, step: function () {
            var n = {width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10)};
            s && s.length && e(s[0]).css({width: n.width, height: n.height}), i._updateCache(n), i._propagate("resize", t)
        }})
    }}), e.ui.plugin.add("resizable", "containment", {start: function () {
        var i = e(this).data("resizable"), n = i.options, s = i.element, a = n.containment, r = a instanceof e ? a.get(0) : /parent/.test(a) ? s.parent().get(0) : a;
        if (r)if (i.containerElement = e(r), /document/.test(a) || a == document)i.containerOffset = {left: 0, top: 0}, i.containerPosition = {left: 0, top: 0}, i.parentData = {element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight}; else {
            var o = e(r), l = [];
            e(["Top", "Right", "Left", "Bottom"]).each(function (e, i) {
                l[e] = t(o.css("padding" + i))
            }), i.containerOffset = o.offset(), i.containerPosition = o.position(), i.containerSize = {height: o.innerHeight() - l[3], width: o.innerWidth() - l[1]};
            var c = i.containerOffset, h = i.containerSize.height, u = i.containerSize.width, d = e.ui.hasScroll(r, "left") ? r.scrollWidth : u, p = e.ui.hasScroll(r) ? r.scrollHeight : h;
            i.parentData = {element: r, left: c.left, top: c.top, width: d, height: p}
        }
    }, resize: function (t) {
        var i = e(this).data("resizable"), n = i.options, s = (i.containerSize, i.containerOffset), a = (i.size, i.position), r = i._aspectRatio || t.shiftKey, o = {top: 0, left: 0}, l = i.containerElement;
        l[0] != document && /static/.test(l.css("position")) && (o = s), a.left < (i._helper ? s.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - s.left : i.position.left - o.left), r && (i.size.height = i.size.width / i.aspectRatio), i.position.left = n.helper ? s.left : 0), a.top < (i._helper ? s.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - s.top : i.position.top), r && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? s.top : 0), i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top;
        var c = Math.abs((i._helper ? i.offset.left - o.left : i.offset.left - o.left) + i.sizeDiff.width), h = Math.abs((i._helper ? i.offset.top - o.top : i.offset.top - s.top) + i.sizeDiff.height), u = i.containerElement.get(0) == i.element.parent().get(0), d = /relative|absolute/.test(i.containerElement.css("position"));
        u && d && (c -= i.parentData.left), c + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - c, r && (i.size.height = i.size.width / i.aspectRatio)), h + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - h, r && (i.size.width = i.size.height * i.aspectRatio))
    }, stop: function () {
        var t = e(this).data("resizable"), i = t.options, n = (t.position, t.containerOffset), s = t.containerPosition, a = t.containerElement, r = e(t.helper), o = r.offset(), l = r.outerWidth() - t.sizeDiff.width, c = r.outerHeight() - t.sizeDiff.height;
        t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({left: o.left - s.left - n.left, width: l, height: c}), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({left: o.left - s.left - n.left, width: l, height: c})
    }}), e.ui.plugin.add("resizable", "ghost", {start: function () {
        var t = e(this).data("resizable"), i = t.options, n = t.size;
        t.ghost = t.originalElement.clone(), t.ghost.css({opacity: .25, display: "block", position: "relative", height: n.height, width: n.width, margin: 0, left: 0, top: 0}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
    }, resize: function () {
        var t = e(this).data("resizable");
        t.options, t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
    }, stop: function () {
        var t = e(this).data("resizable");
        t.options, t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
    }}), e.ui.plugin.add("resizable", "grid", {resize: function (t) {
        var i = e(this).data("resizable"), n = i.options, s = i.size, a = i.originalSize, r = i.originalPosition, o = i.axis;
        n._aspectRatio || t.shiftKey, n.grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid;
        var l = Math.round((s.width - a.width) / (n.grid[0] || 1)) * (n.grid[0] || 1), c = Math.round((s.height - a.height) / (n.grid[1] || 1)) * (n.grid[1] || 1);
        /^(se|s|e)$/.test(o) ? (i.size.width = a.width + l, i.size.height = a.height + c) : /^(ne)$/.test(o) ? (i.size.width = a.width + l, i.size.height = a.height + c, i.position.top = r.top - c) : /^(sw)$/.test(o) ? (i.size.width = a.width + l, i.size.height = a.height + c, i.position.left = r.left - l) : (i.size.width = a.width + l, i.size.height = a.height + c, i.position.top = r.top - c, i.position.left = r.left - l)
    }});
    var t = function (e) {
        return parseInt(e, 10) || 0
    }, i = function (e) {
        return!isNaN(parseInt(e, 10))
    }
}(jQuery), function (e) {
    e.widget("ui.selectable", e.ui.mouse, {version: "1.9.2", options: {appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch"}, _create: function () {
        var t = this;
        this.element.addClass("ui-selectable"), this.dragged = !1;
        var i;
        this.refresh = function () {
            i = e(t.options.filter, t.element[0]), i.addClass("ui-selectee"), i.each(function () {
                var t = e(this), i = t.offset();
                e.data(this, "selectable-item", {element: this, $element: t, left: i.left, top: i.top, right: i.left + t.outerWidth(), bottom: i.top + t.outerHeight(), startselected: !1, selected: t.hasClass("ui-selected"), selecting: t.hasClass("ui-selecting"), unselecting: t.hasClass("ui-unselecting")})
            })
        }, this.refresh(), this.selectees = i.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
    }, _destroy: function () {
        this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
    }, _mouseStart: function (t) {
        var i = this;
        if (this.opos = [t.pageX, t.pageY], !this.options.disabled) {
            var n = this.options;
            this.selectees = e(n.filter, this.element[0]), this._trigger("start", t), e(n.appendTo).append(this.helper), this.helper.css({left: t.clientX, top: t.clientY, width: 0, height: 0}), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var n = e.data(this, "selectable-item");
                n.startselected = !0, t.metaKey || t.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", t, {unselecting: n.element}))
            }), e(t.target).parents().andSelf().each(function () {
                var n = e.data(this, "selectable-item");
                if (n) {
                    var s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected");
                    return n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {selecting: n.element}) : i._trigger("unselecting", t, {unselecting: n.element}), !1
                }
            })
        }
    }, _mouseDrag: function (t) {
        var i = this;
        if (this.dragged = !0, !this.options.disabled) {
            var n = this.options, s = this.opos[0], a = this.opos[1], r = t.pageX, o = t.pageY;
            if (s > r) {
                var l = r;
                r = s, s = l
            }
            if (a > o) {
                var l = o;
                o = a, a = l
            }
            return this.helper.css({left: s, top: a, width: r - s, height: o - a}), this.selectees.each(function () {
                var l = e.data(this, "selectable-item");
                if (l && l.element != i.element[0]) {
                    var c = !1;
                    "touch" == n.tolerance ? c = !(l.left > r || l.right < s || l.top > o || l.bottom < a) : "fit" == n.tolerance && (c = l.left > s && l.right < r && l.top > a && l.bottom < o), c ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", t, {selecting: l.element}))) : (l.selecting && ((t.metaKey || t.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", t, {unselecting: l.element}))), l.selected && (t.metaKey || t.ctrlKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", t, {unselecting: l.element}))))
                }
            }), !1
        }
    }, _mouseStop: function (t) {
        var i = this;
        return this.dragged = !1, this.options, e(".ui-unselecting", this.element[0]).each(function () {
            var n = e.data(this, "selectable-item");
            n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", t, {unselected: n.element})
        }), e(".ui-selecting", this.element[0]).each(function () {
            var n = e.data(this, "selectable-item");
            n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", t, {selected: n.element})
        }), this._trigger("stop", t), this.helper.remove(), !1
    }})
}(jQuery), function (e) {
    e.widget("ui.sortable", e.ui.mouse, {version: "1.9.2", widgetEventPrefix: "sort", ready: !1, options: {appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3}, _create: function () {
        var e = this.options;
        this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
    }, _destroy: function () {
        this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
        for (var e = this.items.length - 1; e >= 0; e--)this.items[e].item.removeData(this.widgetName + "-item");
        return this
    }, _setOption: function (t, i) {
        "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : e.Widget.prototype._setOption.apply(this, arguments)
    }, _mouseCapture: function (t, i) {
        var n = this;
        if (this.reverting)return!1;
        if (this.options.disabled || "static" == this.options.type)return!1;
        this._refreshItems(t);
        var s = null;
        if (e(t.target).parents().each(function () {
            return e.data(this, n.widgetName + "-item") == n ? (s = e(this), !1) : void 0
        }), e.data(t.target, n.widgetName + "-item") == n && (s = e(t.target)), !s)return!1;
        if (this.options.handle && !i) {
            var a = !1;
            if (e(this.options.handle, s).find("*").andSelf().each(function () {
                this == t.target && (a = !0)
            }), !a)return!1
        }
        return this.currentItem = s, this._removeCurrentsFromItems(), !0
    }, _mouseStart: function (t, i, n) {
        var s = this.options;
        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, e.extend(this.offset, {click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]}, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", s.cursor)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)for (var a = this.containers.length - 1; a >= 0; a--)this.containers[a]._trigger("activate", t, this._uiHash(this));
        return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
    }, _mouseDrag: function (t) {
        if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
            var i = this.options, n = !1;
            this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed)), t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))), n !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
        }
        this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
        for (var s = this.items.length - 1; s >= 0; s--) {
            var a = this.items[s], r = a.item[0], o = this._intersectsWithPointer(a);
            if (o && a.instance === this.currentContainer && r != this.currentItem[0] && this.placeholder[1 == o ? "next" : "prev"]()[0] != r && !e.contains(this.placeholder[0], r) && ("semi-dynamic" == this.options.type ? !e.contains(this.element[0], r) : !0)) {
                if (this.direction = 1 == o ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(a))break;
                this._rearrange(t, a), this._trigger("change", t, this._uiHash());
                break
            }
        }
        return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    }, _mouseStop: function (t, i) {
        if (t) {
            if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                var n = this, s = this.placeholder.offset();
                this.reverting = !0, e(this.helper).animate({left: s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft), top: s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)}, parseInt(this.options.revert, 10) || 500, function () {
                    n._clear(t)
                })
            } else this._clear(t, i);
            return!1
        }
    }, cancel: function () {
        if (this.dragging) {
            this._mouseUp({target: null}), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
            for (var t = this.containers.length - 1; t >= 0; t--)this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
        }
        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {helper: null, dragging: !1, reverting: !1, _noFinalSort: null}), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
    }, serialize: function (t) {
        var i = this._getItemsAsjQuery(t && t.connected), n = [];
        return t = t || {}, e(i).each(function () {
            var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
            i && n.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
        }), !n.length && t.key && n.push(t.key + "="), n.join("&")
    }, toArray: function (t) {
        var i = this._getItemsAsjQuery(t && t.connected), n = [];
        return t = t || {}, i.each(function () {
            n.push(e(t.item || this).attr(t.attribute || "id") || "")
        }), n
    }, _intersectsWith: function (e) {
        var t = this.positionAbs.left, i = t + this.helperProportions.width, n = this.positionAbs.top, s = n + this.helperProportions.height, a = e.left, r = a + e.width, o = e.top, l = o + e.height, c = this.offset.click.top, h = this.offset.click.left, u = n + c > o && l > n + c && t + h > a && r > t + h;
        return"pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? u : a < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && o < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
    }, _intersectsWithPointer: function (t) {
        var i = "x" === this.options.axis || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), s = i && n, a = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
        return s ? this.floating ? r && "right" == r || "down" == a ? 2 : 1 : a && ("down" == a ? 2 : 1) : !1
    }, _intersectsWithSides: function (t) {
        var i = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), n = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), s = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
        return this.floating && a ? "right" == a && n || "left" == a && !n : s && ("down" == s && i || "up" == s && !i)
    }, _getDragVerticalDirection: function () {
        var e = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 != e && (e > 0 ? "down" : "up")
    }, _getDragHorizontalDirection: function () {
        var e = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 != e && (e > 0 ? "right" : "left")
    }, refresh: function (e) {
        return this._refreshItems(e), this.refreshPositions(), this
    }, _connectWith: function () {
        var e = this.options;
        return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
    }, _getItemsAsjQuery: function (t) {
        var i = [], n = [], s = this._connectWith();
        if (s && t)for (var a = s.length - 1; a >= 0; a--)for (var r = e(s[a]), o = r.length - 1; o >= 0; o--) {
            var l = e.data(r[o], this.widgetName);
            l && l != this && !l.options.disabled && n.push([e.isFunction(l.options.items) ? l.options.items.call(l.element) : e(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
        }
        n.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options, item: this.currentItem}) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
        for (var a = n.length - 1; a >= 0; a--)n[a][0].each(function () {
            i.push(this)
        });
        return e(i)
    }, _removeCurrentsFromItems: function () {
        var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = e.grep(this.items, function (e) {
            for (var i = 0; i < t.length; i++)if (t[i] == e.item[0])return!1;
            return!0
        })
    }, _refreshItems: function (t) {
        this.items = [], this.containers = [this];
        var i = this.items, n = [
            [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {item: this.currentItem}) : e(this.options.items, this.element), this]
        ], s = this._connectWith();
        if (s && this.ready)for (var a = s.length - 1; a >= 0; a--)for (var r = e(s[a]), o = r.length - 1; o >= 0; o--) {
            var l = e.data(r[o], this.widgetName);
            l && l != this && !l.options.disabled && (n.push([e.isFunction(l.options.items) ? l.options.items.call(l.element[0], t, {item: this.currentItem}) : e(l.options.items, l.element), l]), this.containers.push(l))
        }
        for (var a = n.length - 1; a >= 0; a--)for (var c = n[a][1], h = n[a][0], o = 0, u = h.length; u > o; o++) {
            var d = e(h[o]);
            d.data(this.widgetName + "-item", c), i.push({item: d, instance: c, width: 0, height: 0, left: 0, top: 0})
        }
    }, refreshPositions: function (t) {
        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        for (var i = this.items.length - 1; i >= 0; i--) {
            var n = this.items[i];
            if (n.instance == this.currentContainer || !this.currentContainer || n.item[0] == this.currentItem[0]) {
                var s = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item;
                t || (n.width = s.outerWidth(), n.height = s.outerHeight());
                var a = s.offset();
                n.left = a.left, n.top = a.top
            }
        }
        if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (var i = this.containers.length - 1; i >= 0; i--) {
            var a = this.containers[i].element.offset();
            this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
        }
        return this
    }, _createPlaceholder: function (t) {
        t = t || this;
        var i = t.options;
        if (!i.placeholder || i.placeholder.constructor == String) {
            var n = i.placeholder;
            i.placeholder = {element: function () {
                var i = e(document.createElement(t.currentItem[0].nodeName)).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                return n || (i.style.visibility = "hidden"), i
            }, update: function (e, s) {
                (!n || i.forcePlaceholderSize) && (s.height() || s.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
            }}
        }
        t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
    }, _contactContainers: function (t) {
        for (var i = null, n = null, s = this.containers.length - 1; s >= 0; s--)if (!e.contains(this.currentItem[0], this.containers[s].element[0]))if (this._intersectsWith(this.containers[s].containerCache)) {
            if (i && e.contains(this.containers[s].element[0], i.element[0]))continue;
            i = this.containers[s], n = s
        } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", t, this._uiHash(this)), this.containers[s].containerCache.over = 0);
        if (i)if (1 === this.containers.length)this.containers[n]._trigger("over", t, this._uiHash(this)), this.containers[n].containerCache.over = 1; else {
            for (var a = 1e4, r = null, o = this.containers[n].floating ? "left" : "top", l = this.containers[n].floating ? "width" : "height", c = this.positionAbs[o] + this.offset.click[o], h = this.items.length - 1; h >= 0; h--)if (e.contains(this.containers[n].element[0], this.items[h].item[0]) && this.items[h].item[0] != this.currentItem[0]) {
                var u = this.items[h].item.offset()[o], d = !1;
                Math.abs(u - c) > Math.abs(u + this.items[h][l] - c) && (d = !0, u += this.items[h][l]), Math.abs(u - c) < a && (a = Math.abs(u - c), r = this.items[h], this.direction = d ? "up" : "down")
            }
            if (!r && !this.options.dropOnEmpty)return;
            this.currentContainer = this.containers[n], r ? this._rearrange(t, r, null, !0) : this._rearrange(t, null, this.containers[n].element, !0), this._trigger("change", t, this._uiHash()), this.containers[n]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", t, this._uiHash(this)), this.containers[n].containerCache.over = 1
        }
    }, _createHelper: function (t) {
        var i = this.options, n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
        return n.parents("body").length || e("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] == this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left")}), ("" == n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), ("" == n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
    }, _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {left: +t[0], top: +t[1] || 0}), "left"in t && (this.offset.click.left = t.left + this.margins.left), "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top"in t && (this.offset.click.top = t.top + this.margins.top), "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return"absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {top: 0, left: 0}), {top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" == this.cssPosition) {
            var e = this.currentItem.position();
            return{top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var t = this.options;
        if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(t.containment)) {
            var i = e(t.containment)[0], n = e(t.containment).offset(), s = "hidden" != e(i).css("overflow");
            this.containment = [n.left + (parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
        }
    }, _convertPositionTo: function (t, i) {
        i || (i = this.position);
        var n = "absolute" == t ? 1 : -1, s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent), a = /(html|body)/i.test(s[0].tagName);
        return{top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : s.scrollTop()) * n, left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : s.scrollLeft()) * n}
    }, _generatePosition: function (t) {
        var i = this.options, n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, s = /(html|body)/i.test(n[0].tagName);
        "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
        var a = t.pageX, r = t.pageY;
        if (this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), i.grid)) {
            var o = this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1];
            r = this.containment ? o - this.offset.click.top < this.containment[1] || o - this.offset.click.top > this.containment[3] ? o - this.offset.click.top < this.containment[1] ? o + i.grid[1] : o - i.grid[1] : o : o;
            var l = this.originalPageX + Math.round((a - this.originalPageX) / i.grid[0]) * i.grid[0];
            a = this.containment ? l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2] ? l - this.offset.click.left < this.containment[0] ? l + i.grid[0] : l - i.grid[0] : l : l
        }
        return{top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()), left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())}
    }, _rearrange: function (e, t, i, n) {
        i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
        var s = this.counter;
        this._delay(function () {
            s == this.counter && this.refreshPositions(!n)
        })
    }, _clear: function (t, i) {
        this.reverting = !1;
        var n = [];
        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
            for (var s in this._storedCSS)("auto" == this._storedCSS[s] || "static" == this._storedCSS[s]) && (this._storedCSS[s] = "");
            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
        } else this.currentItem.show();
        this.fromOutside && !i && n.push(function (e) {
            this._trigger("receive", e, this._uiHash(this.fromOutside))
        }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || n.push(function (e) {
            this._trigger("update", e, this._uiHash())
        }), this !== this.currentContainer && (i || (n.push(function (e) {
            this._trigger("remove", e, this._uiHash())
        }), n.push(function (e) {
            return function (t) {
                e._trigger("receive", t, this._uiHash(this))
            }
        }.call(this, this.currentContainer)), n.push(function (e) {
            return function (t) {
                e._trigger("update", t, this._uiHash(this))
            }
        }.call(this, this.currentContainer))));
        for (var s = this.containers.length - 1; s >= 0; s--)i || n.push(function (e) {
            return function (t) {
                e._trigger("deactivate", t, this._uiHash(this))
            }
        }.call(this, this.containers[s])), this.containers[s].containerCache.over && (n.push(function (e) {
            return function (t) {
                e._trigger("out", t, this._uiHash(this))
            }
        }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
        if (this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
            if (!i) {
                this._trigger("beforeStop", t, this._uiHash());
                for (var s = 0; s < n.length; s++)n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !1
        }
        if (i || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
            for (var s = 0; s < n.length; s++)n[s].call(this, t);
            this._trigger("stop", t, this._uiHash())
        }
        return this.fromOutside = !1, !0
    }, _trigger: function () {
        e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    }, _uiHash: function (t) {
        var i = t || this;
        return{helper: i.helper, placeholder: i.placeholder || e([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: t ? t.element : null}
    }})
}(jQuery), jQuery.effects || function (e, t) {
    var i = e.uiBackCompat !== !1, n = "ui-effects-";
    e.effects = {effect: {}}, /*!
     * jQuery Color Animations v2.0.0
     * http://jquery.com/
     *
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Mon Aug 13 13:41:02 2012 -0500
     */
        function (t, i) {
            function n(e, t, i) {
                var n = d[t.type] || {};
                return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : n.max < e ? n.max : e)
            }

            function s(e) {
                var i = h(), n = i._rgba = [];
                return e = e.toLowerCase(), g(c, function (t, s) {
                    var a, r = s.re.exec(e), o = r && s.parse(r), l = s.space || "rgba";
                    return o ? (a = i[l](o), i[u[l].cache] = a[u[l].cache], n = i._rgba = a._rgba, !1) : void 0
                }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, r.transparent), i) : r[e]
            }

            function a(e, t, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
            }

            var r, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), l = /^([\-+])=\s*(\d+\.?\d*)/, c = [
                {re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, parse: function (e) {
                    return[e[1], e[2], e[3], e[4]]
                }},
                {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, parse: function (e) {
                    return[2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                }},
                {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (e) {
                    return[parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }},
                {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (e) {
                    return[parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }},
                {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (e) {
                    return[e[1], e[2] / 100, e[3] / 100, e[4]]
                }}
            ], h = t.Color = function (e, i, n, s) {
                return new t.Color.fn.parse(e, i, n, s)
            }, u = {rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}}, hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}}, d = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, p = h.support = {}, f = t("<p>")[0], g = t.each;
            f.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = f.style.backgroundColor.indexOf("rgba") > -1, g(u, function (e, t) {
                t.cache = "_" + e, t.props.alpha = {idx: 3, type: "percent", def: 1}
            }), h.fn = t.extend(h.prototype, {parse: function (a, o, l, c) {
                if (a === i)return this._rgba = [null, null, null, null], this;
                (a.jquery || a.nodeType) && (a = t(a).css(o), o = i);
                var d = this, p = t.type(a), f = this._rgba = [];
                return o !== i && (a = [a, o, l, c], p = "array"), "string" === p ? this.parse(s(a) || r._default) : "array" === p ? (g(u.rgba.props, function (e, t) {
                    f[t.idx] = n(a[t.idx], t)
                }), this) : "object" === p ? (a instanceof h ? g(u, function (e, t) {
                    a[t.cache] && (d[t.cache] = a[t.cache].slice())
                }) : g(u, function (t, i) {
                    var s = i.cache;
                    g(i.props, function (e, t) {
                        if (!d[s] && i.to) {
                            if ("alpha" === e || null == a[e])return;
                            d[s] = i.to(d._rgba)
                        }
                        d[s][t.idx] = n(a[e], t, !0)
                    }), d[s] && e.inArray(null, d[s].slice(0, 3)) < 0 && (d[s][3] = 1, i.from && (d._rgba = i.from(d[s])))
                }), this) : void 0
            }, is: function (e) {
                var t = h(e), i = !0, n = this;
                return g(u, function (e, s) {
                    var a, r = t[s.cache];
                    return r && (a = n[s.cache] || s.to && s.to(n._rgba) || [], g(s.props, function (e, t) {
                        return null != r[t.idx] ? i = r[t.idx] === a[t.idx] : void 0
                    })), i
                }), i
            }, _space: function () {
                var e = [], t = this;
                return g(u, function (i, n) {
                    t[n.cache] && e.push(i)
                }), e.pop()
            }, transition: function (e, t) {
                var i = h(e), s = i._space(), a = u[s], r = 0 === this.alpha() ? h("transparent") : this, o = r[a.cache] || a.to(r._rgba), l = o.slice();
                return i = i[a.cache], g(a.props, function (e, s) {
                    var a = s.idx, r = o[a], c = i[a], h = d[s.type] || {};
                    null !== c && (null === r ? l[a] = c : (h.mod && (c - r > h.mod / 2 ? r += h.mod : r - c > h.mod / 2 && (r -= h.mod)), l[a] = n((c - r) * t + r, s)))
                }), this[s](l)
            }, blend: function (e) {
                if (1 === this._rgba[3])return this;
                var i = this._rgba.slice(), n = i.pop(), s = h(e)._rgba;
                return h(t.map(i, function (e, t) {
                    return(1 - n) * s[t] + n * e
                }))
            }, toRgbaString: function () {
                var e = "rgba(", i = t.map(this._rgba, function (e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
            }, toHslaString: function () {
                var e = "hsla(", i = t.map(this.hsla(), function (e, t) {
                    return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
            }, toHexString: function (e) {
                var i = this._rgba.slice(), n = i.pop();
                return e && i.push(~~(255 * n)), "#" + t.map(i,function (e) {
                    return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }}), h.fn.parse.prototype = h.fn, u.hsla.to = function (e) {
                if (null == e[0] || null == e[1] || null == e[2])return[null, null, null, e[3]];
                var t, i, n = e[0] / 255, s = e[1] / 255, a = e[2] / 255, r = e[3], o = Math.max(n, s, a), l = Math.min(n, s, a), c = o - l, h = o + l, u = .5 * h;
                return t = l === o ? 0 : n === o ? 60 * (s - a) / c + 360 : s === o ? 60 * (a - n) / c + 120 : 60 * (n - s) / c + 240, i = 0 === u || 1 === u ? u : .5 >= u ? c / h : c / (2 - h), [Math.round(t) % 360, i, u, null == r ? 1 : r]
            }, u.hsla.from = function (e) {
                if (null == e[0] || null == e[1] || null == e[2])return[null, null, null, e[3]];
                var t = e[0] / 360, i = e[1], n = e[2], s = e[3], r = .5 >= n ? n * (1 + i) : n + i - n * i, o = 2 * n - r;
                return[Math.round(255 * a(o, r, t + 1 / 3)), Math.round(255 * a(o, r, t)), Math.round(255 * a(o, r, t - 1 / 3)), s]
            }, g(u, function (e, s) {
                var a = s.props, r = s.cache, o = s.to, c = s.from;
                h.fn[e] = function (e) {
                    if (o && !this[r] && (this[r] = o(this._rgba)), e === i)return this[r].slice();
                    var s, l = t.type(e), u = "array" === l || "object" === l ? e : arguments, d = this[r].slice();
                    return g(a, function (e, t) {
                        var i = u["object" === l ? e : t.idx];
                        null == i && (i = d[t.idx]), d[t.idx] = n(i, t)
                    }), c ? (s = h(c(d)), s[r] = d, s) : h(d)
                }, g(a, function (i, n) {
                    h.fn[i] || (h.fn[i] = function (s) {
                        var a, r = t.type(s), o = "alpha" === i ? this._hsla ? "hsla" : "rgba" : e, c = this[o](), h = c[n.idx];
                        return"undefined" === r ? h : ("function" === r && (s = s.call(this, h), r = t.type(s)), null == s && n.empty ? this : ("string" === r && (a = l.exec(s), a && (s = h + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), c[n.idx] = s, this[o](c)))
                    })
                })
            }), g(o, function (e, i) {
                t.cssHooks[i] = {set: function (e, n) {
                    var a, r, o = "";
                    if ("string" !== t.type(n) || (a = s(n))) {
                        if (n = h(a || n), !p.rgba && 1 !== n._rgba[3]) {
                            for (r = "backgroundColor" === i ? e.parentNode : e; ("" === o || "transparent" === o) && r && r.style;)try {
                                o = t.css(r, "backgroundColor"), r = r.parentNode
                            } catch (l) {
                            }
                            n = n.blend(o && "transparent" !== o ? o : "_default")
                        }
                        n = n.toRgbaString()
                    }
                    try {
                        e.style[i] = n
                    } catch (c) {
                    }
                }}, t.fx.step[i] = function (e) {
                    e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            }), t.cssHooks.borderColor = {expand: function (e) {
                var t = {};
                return g(["Top", "Right", "Bottom", "Left"], function (i, n) {
                    t["border" + n + "Color"] = e
                }), t
            }}, r = t.Color.names = {aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff"}
        }(jQuery), function () {
        function i() {
            var t, i, n = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle, s = {};
            if (n && n.length && n[0] && n[n[0]])for (i = n.length; i--;)t = n[i], "string" == typeof n[t] && (s[e.camelCase(t)] = n[t]); else for (t in n)"string" == typeof n[t] && (s[t] = n[t]);
            return s
        }

        function n(t, i) {
            var n, s, r = {};
            for (n in i)s = i[n], t[n] !== s && (a[n] || (e.fx.step[n] || !isNaN(parseFloat(s))) && (r[n] = s));
            return r
        }

        var s = ["add", "remove", "toggle"], a = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
            e.fx.step[i] = function (e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, i, e.end), e.setAttr = !0)
            }
        }), e.effects.animateClass = function (t, a, r, o) {
            var l = e.speed(a, r, o);
            return this.queue(function () {
                var a, r = e(this), o = r.attr("class") || "", c = l.children ? r.find("*").andSelf() : r;
                c = c.map(function () {
                    var t = e(this);
                    return{el: t, start: i.call(this)}
                }), a = function () {
                    e.each(s, function (e, i) {
                        t[i] && r[i + "Class"](t[i])
                    })
                }, a(), c = c.map(function () {
                    return this.end = i.call(this.el[0]), this.diff = n(this.start, this.end), this
                }), r.attr("class", o), c = c.map(function () {
                    var t = this, i = e.Deferred(), n = jQuery.extend({}, l, {queue: !1, complete: function () {
                        i.resolve(t)
                    }});
                    return this.el.animate(this.diff, n), i.promise()
                }), e.when.apply(e, c.get()).done(function () {
                    a(), e.each(arguments, function () {
                        var t = this.el;
                        e.each(this.diff, function (e) {
                            t.css(e, "")
                        })
                    }), l.complete.call(r[0])
                })
            })
        }, e.fn.extend({_addClass: e.fn.addClass, addClass: function (t, i, n, s) {
            return i ? e.effects.animateClass.call(this, {add: t}, i, n, s) : this._addClass(t)
        }, _removeClass: e.fn.removeClass, removeClass: function (t, i, n, s) {
            return i ? e.effects.animateClass.call(this, {remove: t}, i, n, s) : this._removeClass(t)
        }, _toggleClass: e.fn.toggleClass, toggleClass: function (i, n, s, a, r) {
            return"boolean" == typeof n || n === t ? s ? e.effects.animateClass.call(this, n ? {add: i} : {remove: i}, s, a, r) : this._toggleClass(i, n) : e.effects.animateClass.call(this, {toggle: i}, n, s, a)
        }, switchClass: function (t, i, n, s, a) {
            return e.effects.animateClass.call(this, {add: i, remove: t}, n, s, a)
        }})
    }(), function () {
        function s(t, i, n, s) {
            return e.isPlainObject(t) && (i = t, t = t.effect), t = {effect: t}, null == i && (i = {}), e.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (s = n, n = i, i = {}), e.isFunction(n) && (s = n, n = null), i && e.extend(t, i), n = n || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof n ? n : n in e.fx.speeds ? e.fx.speeds[n] : e.fx.speeds._default, t.complete = s || i.complete, t
        }

        function a(t) {
            return!t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? !1 : i && e.effects[t] ? !1 : !0
        }

        e.extend(e.effects, {version: "1.9.2", save: function (e, t) {
            for (var i = 0; i < t.length; i++)null !== t[i] && e.data(n + t[i], e[0].style[t[i]])
        }, restore: function (e, i) {
            var s, a;
            for (a = 0; a < i.length; a++)null !== i[a] && (s = e.data(n + i[a]), s === t && (s = ""), e.css(i[a], s))
        }, setMode: function (e, t) {
            return"toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
        }, getBaseline: function (e, t) {
            var i, n;
            switch (e[0]) {
                case"top":
                    i = 0;
                    break;
                case"middle":
                    i = .5;
                    break;
                case"bottom":
                    i = 1;
                    break;
                default:
                    i = e[0] / t.height
            }
            switch (e[1]) {
                case"left":
                    n = 0;
                    break;
                case"center":
                    n = .5;
                    break;
                case"right":
                    n = 1;
                    break;
                default:
                    n = e[1] / t.width
            }
            return{x: n, y: i}
        }, createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper"))return t.parent();
            var i = {width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float")}, n = e("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), s = {width: t.width(), height: t.height()}, a = document.activeElement;
            try {
                a.id
            } catch (r) {
                a = document.body
            }
            return t.wrap(n), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), n = t.parent(), "static" === t.css("position") ? (n.css({position: "relative"}), t.css({position: "relative"})) : (e.extend(i, {position: t.css("position"), zIndex: t.css("z-index")}), e.each(["top", "left", "bottom", "right"], function (e, n) {
                i[n] = t.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
            }), t.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), t.css(s), n.css(i).show()
        }, removeWrapper: function (t) {
            var i = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
        }, setTransition: function (t, i, n, s) {
            return s = s || {}, e.each(i, function (e, i) {
                var a = t.cssUnit(i);
                a[0] > 0 && (s[i] = a[0] * n + a[1])
            }), s
        }}), e.fn.extend({effect: function () {
            function t(t) {
                function i() {
                    e.isFunction(a) && a.call(s[0]), e.isFunction(t) && t()
                }

                var s = e(this), a = n.complete, r = n.mode;
                (s.is(":hidden") ? "hide" === r : "show" === r) ? i() : o.call(s[0], n, i)
            }

            var n = s.apply(this, arguments), a = n.mode, r = n.queue, o = e.effects.effect[n.effect], l = !o && i && e.effects[n.effect];
            return e.fx.off || !o && !l ? a ? this[a](n.duration, n.complete) : this.each(function () {
                n.complete && n.complete.call(this)
            }) : o ? r === !1 ? this.each(t) : this.queue(r || "fx", t) : l.call(this, {options: n, duration: n.duration, callback: n.complete, mode: n.mode})
        }, _show: e.fn.show, show: function (e) {
            if (a(e))return this._show.apply(this, arguments);
            var t = s.apply(this, arguments);
            return t.mode = "show", this.effect.call(this, t)
        }, _hide: e.fn.hide, hide: function (e) {
            if (a(e))return this._hide.apply(this, arguments);
            var t = s.apply(this, arguments);
            return t.mode = "hide", this.effect.call(this, t)
        }, __toggle: e.fn.toggle, toggle: function (t) {
            if (a(t) || "boolean" == typeof t || e.isFunction(t))return this.__toggle.apply(this, arguments);
            var i = s.apply(this, arguments);
            return i.mode = "toggle", this.effect.call(this, i)
        }, cssUnit: function (t) {
            var i = this.css(t), n = [];
            return e.each(["em", "px", "%", "pt"], function (e, t) {
                i.indexOf(t) > 0 && (n = [parseFloat(i), t])
            }), n
        }})
    }(), function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
            t[i] = function (t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {Sine: function (e) {
            return 1 - Math.cos(e * Math.PI / 2)
        }, Circ: function (e) {
            return 1 - Math.sqrt(1 - e * e)
        }, Elastic: function (e) {
            return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
        }, Back: function (e) {
            return e * e * (3 * e - 2)
        }, Bounce: function (e) {
            for (var t, i = 4; e < ((t = Math.pow(2, --i)) - 1) / 11;);
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
        }}), e.each(t, function (t, i) {
            e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
                return 1 - i(1 - e)
            }, e.easing["easeInOut" + t] = function (e) {
                return.5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
            }
        })
    }()
}(jQuery), function (e) {
    var t = 0, i = {}, n = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "show", e.widget("ui.accordion", {version: "1.9.2", options: {active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"}, activate: null, beforeActivate: null}, _create: function () {
        var i = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t), n = this.options;
        this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(n.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), n.collapsible || n.active !== !1 && null != n.active || (n.active = 0), n.active < 0 && (n.active += this.headers.length), this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function (t) {
            var n = e(this), s = n.attr("id"), a = n.next(), r = a.attr("id");
            s || (s = i + "-header-" + t, n.attr("id", s)), r || (r = i + "-panel-" + t, a.attr("id", r)), n.attr("aria-controls", r), a.attr("aria-labelledby", s)
        }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({"aria-selected": "false", tabIndex: -1}).next().attr({"aria-expanded": "false", "aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({"aria-selected": "true", tabIndex: 0}).next().attr({"aria-expanded": "true", "aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {keydown: "_keydown"}), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._setupEvents(n.event)
    }, _getCreateEventData: function () {
        return{header: this.active, content: this.active.length ? this.active.next() : e()}
    }, _createIcons: function () {
        var t = this.options.icons;
        t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
    }, _destroyIcons: function () {
        this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
    }, _destroy: function () {
        var e;
        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
            /^ui-accordion/.test(this.id) && this.removeAttribute("id")
        }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
            /^ui-accordion/.test(this.id) && this.removeAttribute("id")
        }), "content" !== this.options.heightStyle && e.css("height", "")
    }, _setOption: function (e, t) {
        return"active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t), void 0)
    }, _keydown: function (t) {
        if (!t.altKey && !t.ctrlKey) {
            var i = e.ui.keyCode, n = this.headers.length, s = this.headers.index(t.target), a = !1;
            switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    a = this.headers[(s + 1) % n];
                    break;
                case i.LEFT:
                case i.UP:
                    a = this.headers[(s - 1 + n) % n];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(t);
                    break;
                case i.HOME:
                    a = this.headers[0];
                    break;
                case i.END:
                    a = this.headers[n - 1]
            }
            a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault())
        }
    }, _panelKeyDown: function (t) {
        t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
    }, refresh: function () {
        var t, i, n = this.options.heightStyle, s = this.element.parent();
        "fill" === n ? (e.support.minHeight || (i = s.css("overflow"), s.css("overflow", "hidden")), t = s.height(), this.element.siblings(":visible").each(function () {
            var i = e(this), n = i.css("position");
            "absolute" !== n && "fixed" !== n && (t -= i.outerHeight(!0))
        }), i && s.css("overflow", i), this.headers.each(function () {
            t -= e(this).outerHeight(!0)
        }), this.headers.next().each(function () {
            e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
        }).css("overflow", "auto")) : "auto" === n && (t = 0, this.headers.next().each(function () {
            t = Math.max(t, e(this).css("height", "").height())
        }).height(t))
    }, _activate: function (t) {
        var i = this._findActive(t)[0];
        i !== this.active[0] && (i = i || this.active[0], this._eventHandler({target: i, currentTarget: i, preventDefault: e.noop}))
    }, _findActive: function (t) {
        return"number" == typeof t ? this.headers.eq(t) : e()
    }, _setupEvents: function (t) {
        var i = {};
        t && (e.each(t.split(" "), function (e, t) {
            i[t] = "_eventHandler"
        }), this._on(this.headers, i))
    }, _eventHandler: function (t) {
        var i = this.options, n = this.active, s = e(t.currentTarget), a = s[0] === n[0], r = a && i.collapsible, o = r ? e() : s.next(), l = n.next(), c = {oldHeader: n, oldPanel: l, newHeader: r ? e() : s, newPanel: o};
        t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, c) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = a ? e() : s, this._toggle(c), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
    }, _toggle: function (t) {
        var i = t.newPanel, n = this.prevShow.length ? this.prevShow : t.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, t) : (n.hide(), i.show(), this._toggleComplete(t)), n.attr({"aria-expanded": "false", "aria-hidden": "true"}), n.prev().attr("aria-selected", "false"), i.length && n.length ? n.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function () {
            return 0 === e(this).attr("tabIndex")
        }).attr("tabIndex", -1), i.attr({"aria-expanded": "true", "aria-hidden": "false"}).prev().attr({"aria-selected": "true", tabIndex: 0})
    }, _animate: function (e, t, s) {
        var a, r, o, l = this, c = 0, h = e.length && (!t.length || e.index() < t.index()), u = this.options.animate || {}, d = h && u.down || u, p = function () {
            l._toggleComplete(s)
        };
        return"number" == typeof d && (o = d), "string" == typeof d && (r = d), r = r || d.easing || u.easing, o = o || d.duration || u.duration, t.length ? e.length ? (a = e.show().outerHeight(), t.animate(i, {duration: o, easing: r, step: function (e, t) {
            t.now = Math.round(e)
        }}), e.hide().animate(n, {duration: o, easing: r, complete: p, step: function (e, i) {
            i.now = Math.round(e), "height" !== i.prop ? c += i.now : "content" !== l.options.heightStyle && (i.now = Math.round(a - t.outerHeight() - c), c = 0)
        }}), void 0) : t.animate(i, o, r, p) : e.animate(n, o, r, p)
    }, _toggleComplete: function (e) {
        var t = e.oldPanel;
        t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
    }}), e.uiBackCompat !== !1 && (function (e, t) {
        e.extend(t.options, {navigation: !1, navigationFilter: function () {
            return this.href.toLowerCase() === location.href.toLowerCase()
        }});
        var i = t._create;
        t._create = function () {
            if (this.options.navigation) {
                var t = this, n = this.element.find(this.options.header), s = n.next(), a = n.add(s).find("a").filter(this.options.navigationFilter)[0];
                a && n.add(s).each(function (i) {
                    return e.contains(this, a) ? (t.options.active = Math.floor(i / 2), !1) : void 0
                })
            }
            i.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        e.extend(t.options, {heightStyle: null, autoHeight: !0, clearStyle: !1, fillSpace: !1});
        var i = t._create, n = t._setOption;
        e.extend(t, {_create: function () {
            this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), i.call(this)
        }, _setOption: function (e) {
            ("autoHeight" === e || "clearStyle" === e || "fillSpace" === e) && (this.options.heightStyle = this._mergeHeightStyle()), n.apply(this, arguments)
        }, _mergeHeightStyle: function () {
            var e = this.options;
            return e.fillSpace ? "fill" : e.clearStyle ? "content" : e.autoHeight ? "auto" : void 0
        }})
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        e.extend(t.options.icons, {activeHeader: null, headerSelected: "ui-icon-triangle-1-s"});
        var i = t._createIcons;
        t._createIcons = function () {
            this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), i.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        t.activate = t._activate;
        var i = t._findActive;
        t._findActive = function (e) {
            return-1 === e && (e = !1), e && "number" != typeof e && (e = this.headers.index(this.headers.filter(e)), -1 === e && (e = !1)), i.call(this, e)
        }
    }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function (e, t) {
        e.extend(t.options, {change: null, changestart: null});
        var i = t._trigger;
        t._trigger = function (e, t, n) {
            var s = i.apply(this, arguments);
            return s ? ("beforeActivate" === e ? s = i.call(this, "changestart", t, {oldHeader: n.oldHeader, oldContent: n.oldPanel, newHeader: n.newHeader, newContent: n.newPanel}) : "activate" === e && (s = i.call(this, "change", t, {oldHeader: n.oldHeader, oldContent: n.oldPanel, newHeader: n.newHeader, newContent: n.newPanel})), s) : !1
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
        e.extend(t.options, {animate: null, animated: "slide"});
        var i = t._create;
        t._create = function () {
            var e = this.options;
            null === e.animate && (e.animate = e.animated ? "slide" === e.animated ? 300 : "bounceslide" === e.animated ? {duration: 200, down: {easing: "easeOutBounce", duration: 1e3}} : e.animated : !1), i.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype))
}(jQuery), function (e) {
    var t = 0;
    e.widget("ui.autocomplete", {version: "1.9.2", defaultElement: "<input>", options: {appendTo: "body", autoFocus: !1, delay: 300, minLength: 1, position: {my: "left top", at: "left bottom", collision: "none"}, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null}, pending: 0, _create: function () {
        var t, i, n;
        this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {keydown: function (s) {
            if (this.element.prop("readOnly"))return t = !0, n = !0, i = !0, void 0;
            t = !1, n = !1, i = !1;
            var a = e.ui.keyCode;
            switch (s.keyCode) {
                case a.PAGE_UP:
                    t = !0, this._move("previousPage", s);
                    break;
                case a.PAGE_DOWN:
                    t = !0, this._move("nextPage", s);
                    break;
                case a.UP:
                    t = !0, this._keyEvent("previous", s);
                    break;
                case a.DOWN:
                    t = !0, this._keyEvent("next", s);
                    break;
                case a.ENTER:
                case a.NUMPAD_ENTER:
                    this.menu.active && (t = !0, s.preventDefault(), this.menu.select(s));
                    break;
                case a.TAB:
                    this.menu.active && this.menu.select(s);
                    break;
                case a.ESCAPE:
                    this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
                    break;
                default:
                    i = !0, this._searchTimeout(s)
            }
        }, keypress: function (n) {
            if (t)return t = !1, n.preventDefault(), void 0;
            if (!i) {
                var s = e.ui.keyCode;
                switch (n.keyCode) {
                    case s.PAGE_UP:
                        this._move("previousPage", n);
                        break;
                    case s.PAGE_DOWN:
                        this._move("nextPage", n);
                        break;
                    case s.UP:
                        this._keyEvent("previous", n);
                        break;
                    case s.DOWN:
                        this._keyEvent("next", n)
                }
            }
        }, input: function (e) {
            return n ? (n = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0)
        }, focus: function () {
            this.selectedItem = null, this.previous = this._value()
        }, blur: function (e) {
            return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
        }}), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({input: e(), role: null}).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {mousedown: function (t) {
            t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                delete this.cancelBlur
            });
            var i = this.menu.element[0];
            e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                var t = this;
                this.document.one("mousedown", function (n) {
                    n.target === t.element[0] || n.target === i || e.contains(i, n.target) || t.close()
                })
            })
        }, menufocus: function (t, i) {
            if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)))return this.menu.blur(), this.document.one("mousemove", function () {
                e(t.target).trigger(t.originalEvent)
            }), void 0;
            var n = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete");
            !1 !== this._trigger("focus", t, {item: n}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
        }, menuselect: function (e, t) {
            var i = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"), n = this.previous;
            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function () {
                this.previous = n, this.selectedItem = i
            })), !1 !== this._trigger("select", e, {item: i}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
        }}), this.liveRegion = e("<span>", {role: "status", "aria-live": "polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element), e.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {beforeunload: function () {
            this.element.removeAttr("autocomplete")
        }})
    }, _destroy: function () {
        clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    }, _setOption: function (e, t) {
        this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this.document.find(t || "body")[0]), "disabled" === e && t && this.xhr && this.xhr.abort()
    }, _isMultiLine: function () {
        return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
    }, _initSource: function () {
        var t, i, n = this;
        e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, n) {
            n(e.ui.autocomplete.filter(t, i.term))
        }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, s) {
            n.xhr && n.xhr.abort(), n.xhr = e.ajax({url: i, data: t, dataType: "json", success: function (e) {
                s(e)
            }, error: function () {
                s([])
            }})
        }) : this.source = this.options.source
    }, _searchTimeout: function (e) {
        clearTimeout(this.searching), this.searching = this._delay(function () {
            this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
        }, this.options.delay)
    }, search: function (e, t) {
        return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
    }, _search: function (e) {
        this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: e}, this._response())
    }, _response: function () {
        var e = this, i = ++t;
        return function (n) {
            i === t && e.__response(n), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
        }
    }, __response: function (e) {
        e && (e = this._normalize(e)), this._trigger("response", null, {content: e}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
    }, close: function (e) {
        this.cancelSearch = !0, this._close(e)
    }, _close: function (e) {
        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
    }, _change: function (e) {
        this.previous !== this._value() && this._trigger("change", e, {item: this.selectedItem})
    }, _normalize: function (t) {
        return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
            return"string" == typeof t ? {label: t, value: t} : e.extend({label: t.label || t.value, value: t.value || t.label}, t)
        })
    }, _suggest: function (t) {
        var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
        this._renderMenu(i, t), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
    }, _resizeMenu: function () {
        var e = this.menu.element;
        e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
    }, _renderMenu: function (t, i) {
        var n = this;
        e.each(i, function (e, i) {
            n._renderItemData(t, i)
        })
    }, _renderItemData: function (e, t) {
        return this._renderItem(e, t).data("ui-autocomplete-item", t)
    }, _renderItem: function (t, i) {
        return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
    }, _move: function (e, t) {
        return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
    }, widget: function () {
        return this.menu.element
    }, _value: function () {
        return this.valueMethod.apply(this.element, arguments)
    }, _keyEvent: function (e, t) {
        (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
    }}), e.extend(e.ui.autocomplete, {escapeRegex: function (e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }, filter: function (t, i) {
        var n = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
        return e.grep(t, function (e) {
            return n.test(e.label || e.value || e)
        })
    }}), e.widget("ui.autocomplete", e.ui.autocomplete, {options: {messages: {noResults: "No search results.", results: function (e) {
        return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
    }}}, __response: function (e) {
        var t;
        this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
    }})
}(jQuery), function (e) {
    var t, i, n, s, a = "ui-button ui-widget ui-state-default ui-corner-all", r = "ui-state-hover ui-state-active ", o = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", l = function () {
        var t = e(this).find(":ui-button");
        setTimeout(function () {
            t.button("refresh")
        }, 1)
    }, c = function (t) {
        var i = t.name, n = t.form, s = e([]);
        return i && (s = n ? e(n).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function () {
            return!this.form
        })), s
    };
    e.widget("ui.button", {version: "1.9.2", defaultElement: "<button>", options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}}, _create: function () {
        this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
        var r = this, o = this.options, h = "checkbox" === this.type || "radio" === this.type, u = h ? "" : "ui-state-active", d = "ui-state-focus";
        null === o.label && (o.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace,function () {
            o.disabled || this === t && e(this).addClass("ui-state-active")
        }).bind("mouseleave" + this.eventNamespace,function () {
            o.disabled || e(this).removeClass(u)
        }).bind("click" + this.eventNamespace, function (e) {
            o.disabled && (e.preventDefault(), e.stopImmediatePropagation())
        }), this.element.bind("focus" + this.eventNamespace,function () {
            r.buttonElement.addClass(d)
        }).bind("blur" + this.eventNamespace, function () {
            r.buttonElement.removeClass(d)
        }), h && (this.element.bind("change" + this.eventNamespace, function () {
            s || r.refresh()
        }), this.buttonElement.bind("mousedown" + this.eventNamespace,function (e) {
            o.disabled || (s = !1, i = e.pageX, n = e.pageY)
        }).bind("mouseup" + this.eventNamespace, function (e) {
            o.disabled || (i !== e.pageX || n !== e.pageY) && (s = !0)
        })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
            return o.disabled || s ? !1 : (e(this).toggleClass("ui-state-active"), r.buttonElement.attr("aria-pressed", r.element[0].checked), void 0)
        }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
            if (o.disabled || s)return!1;
            e(this).addClass("ui-state-active"), r.buttonElement.attr("aria-pressed", "true");
            var t = r.element[0];
            c(t).not(t).map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-state-active").attr("aria-pressed", "false")
        }) : (this.buttonElement.bind("mousedown" + this.eventNamespace,function () {
            return o.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, r.document.one("mouseup", function () {
                t = null
            }), void 0)
        }).bind("mouseup" + this.eventNamespace,function () {
            return o.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0)
        }).bind("keydown" + this.eventNamespace,function (t) {
            return o.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0)
        }).bind("keyup" + this.eventNamespace, function () {
            e(this).removeClass("ui-state-active")
        }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
            t.keyCode === e.ui.keyCode.SPACE && e(this).click()
        })), this._setOption("disabled", o.disabled), this._resetButton()
    }, _determineButtonType: function () {
        var e, t, i;
        this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
    }, widget: function () {
        return this.buttonElement
    }, _destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(a + " " + r + " " + o).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
    }, _setOption: function (e, t) {
        return this._super(e, t), "disabled" === e ? (t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), void 0) : (this._resetButton(), void 0)
    }, refresh: function () {
        var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
        t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? c(this.element[0]).each(function () {
            e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
        }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
    }, _resetButton: function () {
        if ("input" === this.type)return this.options.label && this.element.val(this.options.label), void 0;
        var t = this.buttonElement.removeClass(o), i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(), n = this.options.icons, s = n.primary && n.secondary, a = [];
        n.primary || n.secondary ? (this.options.text && a.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (a.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "))
    }}), e.widget("ui.buttonset", {version: "1.9.2", options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"}, _create: function () {
        this.element.addClass("ui-buttonset")
    }, _init: function () {
        this.refresh()
    }, _setOption: function (e, t) {
        "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
    }, refresh: function () {
        var t = "rtl" === this.element.css("direction");
        this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
            return e(this).button("widget")[0]
        }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
    }, _destroy: function () {
        this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
            return e(this).button("widget")[0]
        }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
    }})
}(jQuery), function ($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}, this._defaults = {showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1}, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }

    function bindHover(e) {
        var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(t, "mouseout",function () {
            $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
        }).delegate(t, "mouseover", function () {
            $.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function extendRemove(e, t) {
        $.extend(e, t);
        for (var i in t)(null == t[i] || t[i] == undefined) && (e[i] = t[i]);
        return e
    }

    $.extend($.ui, {datepicker: {version: "1.9.2"}});
    var PROP_NAME = "datepicker", dpuuid = (new Date).getTime(), instActive;
    $.extend(Datepicker.prototype, {markerClassName: "hasDatepicker", maxRows: 4, log: function () {
        this.debug && console.log.apply("", arguments)
    }, _widgetDatepicker: function () {
        return this.dpDiv
    }, setDefaults: function (e) {
        return extendRemove(this._defaults, e || {}), this
    }, _attachDatepicker: function (target, settings) {
        var inlineSettings = null;
        for (var attrName in this._defaults) {
            var attrValue = target.getAttribute("date:" + attrName);
            if (attrValue) {
                inlineSettings = inlineSettings || {};
                try {
                    inlineSettings[attrName] = eval(attrValue)
                } catch (err) {
                    inlineSettings[attrName] = attrValue
                }
            }
        }
        var nodeName = target.nodeName.toLowerCase(), inline = "div" == nodeName || "span" == nodeName;
        target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
        var inst = this._newInst($(target), inline);
        inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
    }, _newInst: function (e, t) {
        var i = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
        return{id: i, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: t, dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv}
    }, _connectDatepicker: function (e, t) {
        var i = $(e);
        t.append = $([]), t.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, t), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function (e, i, n) {
            t.settings[i] = n
        }).bind("getData.datepicker", function (e, i) {
            return this._get(t, i)
        }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e))
    }, _attachments: function (e, t) {
        var i = this._get(t, "appendText"), n = this._get(t, "isRTL");
        t.append && t.append.remove(), i && (t.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), e[n ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
        var s = this._get(t, "showOn");
        if (("focus" == s || "both" == s) && e.focus(this._showDatepicker), "button" == s || "both" == s) {
            var a = this._get(t, "buttonText"), r = this._get(t, "buttonImage");
            t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({src: r, alt: a, title: a}) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == r ? a : $("<img/>").attr({src: r, alt: a, title: a}))), e[n ? "before" : "after"](t.trigger), t.trigger.click(function () {
                return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
            })
        }
    }, _autoSize: function (e) {
        if (this._get(e, "autoSize") && !e.inline) {
            var t = new Date(2009, 11, 20), i = this._get(e, "dateFormat");
            if (i.match(/[DM]/)) {
                var n = function (e) {
                    for (var t = 0, i = 0, n = 0; n < e.length; n++)e[n].length > t && (t = e[n].length, i = n);
                    return i
                };
                t.setMonth(n(this._get(e, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(n(this._get(e, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
            }
            e.input.attr("size", this._formatDate(e, t).length)
        }
    }, _inlineDatepicker: function (e, t) {
        var i = $(e);
        i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker",function (e, i, n) {
            t.settings[i] = n
        }).bind("getData.datepicker", function (e, i) {
            return this._get(t, i)
        }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
    }, _dialogDatepicker: function (e, t, i, n, s) {
        var a = this._dialogInst;
        if (!a) {
            this.uuid += 1;
            var r = "dp" + this.uuid;
            this._dialogInput = $('<input type="text" id="' + r + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), a = this._dialogInst = this._newInst(this._dialogInput, !1), a.settings = {}, $.data(this._dialogInput[0], PROP_NAME, a)
        }
        if (extendRemove(a.settings, n || {}), t = t && t.constructor == Date ? this._formatDate(a, t) : t, this._dialogInput.val(t), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, !this._pos) {
            var o = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop;
            this._pos = [o / 2 - 100 + c, l / 2 - 150 + h]
        }
        return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), a.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, a), this
    }, _destroyDatepicker: function (e) {
        var t = $(e), i = $.data(e, PROP_NAME);
        if (t.hasClass(this.markerClassName)) {
            var n = e.nodeName.toLowerCase();
            $.removeData(e, PROP_NAME), "input" == n ? (i.append.remove(), i.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == n || "span" == n) && t.removeClass(this.markerClassName).empty()
        }
    }, _enableDatepicker: function (e) {
        var t = $(e), i = $.data(e, PROP_NAME);
        if (t.hasClass(this.markerClassName)) {
            var n = e.nodeName.toLowerCase();
            if ("input" == n)e.disabled = !1, i.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({opacity: "1.0", cursor: ""}); else if ("div" == n || "span" == n) {
                var s = t.children("." + this._inlineClass);
                s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
            }
            this._disabledInputs = $.map(this._disabledInputs, function (t) {
                return t == e ? null : t
            })
        }
    }, _disableDatepicker: function (e) {
        var t = $(e), i = $.data(e, PROP_NAME);
        if (t.hasClass(this.markerClassName)) {
            var n = e.nodeName.toLowerCase();
            if ("input" == n)e.disabled = !0, i.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({opacity: "0.5", cursor: "default"}); else if ("div" == n || "span" == n) {
                var s = t.children("." + this._inlineClass);
                s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
            }
            this._disabledInputs = $.map(this._disabledInputs, function (t) {
                return t == e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e
        }
    }, _isDisabledDatepicker: function (e) {
        if (!e)return!1;
        for (var t = 0; t < this._disabledInputs.length; t++)if (this._disabledInputs[t] == e)return!0;
        return!1
    }, _getInst: function (e) {
        try {
            return $.data(e, PROP_NAME)
        } catch (t) {
            throw"Missing instance data for this datepicker"
        }
    }, _optionDatepicker: function (e, t, i) {
        var n = this._getInst(e);
        if (2 == arguments.length && "string" == typeof t)return"defaults" == t ? $.extend({}, $.datepicker._defaults) : n ? "all" == t ? $.extend({}, n.settings) : this._get(n, t) : null;
        var s = t || {};
        if ("string" == typeof t && (s = {}, s[t] = i), n) {
            this._curInst == n && this._hideDatepicker();
            var a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(n, "min"), o = this._getMinMaxDate(n, "max");
            extendRemove(n.settings, s), null !== r && s.dateFormat !== undefined && s.minDate === undefined && (n.settings.minDate = this._formatDate(n, r)), null !== o && s.dateFormat !== undefined && s.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, o)), this._attachments($(e), n), this._autoSize(n), this._setDate(n, a), this._updateAlternate(n), this._updateDatepicker(n)
        }
    }, _changeDatepicker: function (e, t, i) {
        this._optionDatepicker(e, t, i)
    }, _refreshDatepicker: function (e) {
        var t = this._getInst(e);
        t && this._updateDatepicker(t)
    }, _setDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
    }, _getDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
    }, _doKeyDown: function (e) {
        var t = $.datepicker._getInst(e.target), i = !0, n = t.dpDiv.is(".ui-datepicker-rtl");
        if (t._keyEvent = !0, $.datepicker._datepickerShowing)switch (e.keyCode) {
            case 9:
                $.datepicker._hideDatepicker(), i = !1;
                break;
            case 13:
                var s = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                s[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, s[0]);
                var a = $.datepicker._get(t, "onSelect");
                if (a) {
                    var r = $.datepicker._formatDate(t);
                    a.apply(t.input ? t.input[0] : null, [r, t])
                } else $.datepicker._hideDatepicker();
                return!1;
            case 27:
                $.datepicker._hideDatepicker();
                break;
            case 33:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 34:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 35:
                (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), i = e.ctrlKey || e.metaKey;
                break;
            case 36:
                (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), i = e.ctrlKey || e.metaKey;
                break;
            case 37:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? 1 : -1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 38:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), i = e.ctrlKey || e.metaKey;
                break;
            case 39:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? -1 : 1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 40:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), i = e.ctrlKey || e.metaKey;
                break;
            default:
                i = !1
        } else 36 == e.keyCode && e.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
        i && (e.preventDefault(), e.stopPropagation())
    }, _doKeyPress: function (e) {
        var t = $.datepicker._getInst(e.target);
        if ($.datepicker._get(t, "constrainInput")) {
            var i = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")), n = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
            return e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1
        }
    }, _doKeyUp: function (e) {
        var t = $.datepicker._getInst(e.target);
        if (t.input.val() != t.lastVal)try {
            var i = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
            i && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
        } catch (n) {
            $.datepicker.log(n)
        }
        return!0
    }, _showDatepicker: function (e) {
        if (e = e.target || e, "input" != e.nodeName.toLowerCase() && (e = $("input", e.parentNode)[0]), !$.datepicker._isDisabledDatepicker(e) && $.datepicker._lastInput != e) {
            var t = $.datepicker._getInst(e);
            $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
            var i = $.datepicker._get(t, "beforeShow"), n = i ? i.apply(e, [e, t]) : {};
            if (n !== !1) {
                extendRemove(t.settings, n), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
                var s = !1;
                $(e).parents().each(function () {
                    return s |= "fixed" == $(this).css("position"), !s
                });
                var a = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
                if ($.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({position: "absolute", display: "block", top: "-1000px"}), $.datepicker._updateDatepicker(t), a = $.datepicker._checkOffset(t, a, s), t.dpDiv.css({position: $.datepicker._inDialog && $.blockUI ? "static" : s ? "fixed" : "absolute", display: "none", left: a.left + "px", top: a.top + "px"}), !t.inline) {
                    var r = $.datepicker._get(t, "showAnim"), o = $.datepicker._get(t, "duration"), l = function () {
                        var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                        if (e.length) {
                            var i = $.datepicker._getBorders(t.dpDiv);
                            e.css({left: -i[0], top: -i[1], width: t.dpDiv.outerWidth(), height: t.dpDiv.outerHeight()})
                        }
                    };
                    t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[r] || $.effects[r]) ? t.dpDiv.show(r, $.datepicker._get(t, "showOptions"), o, l) : t.dpDiv[r || "show"](r ? o : null, l), r && o || l(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
                }
            }
        }
    }, _updateDatepicker: function (e) {
        this.maxRows = 4;
        var t = $.datepicker._getBorders(e.dpDiv);
        instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
        var i = e.dpDiv.find("iframe.ui-datepicker-cover");
        i.length && i.css({left: -t[0], top: -t[1], width: e.dpDiv.outerWidth(), height: e.dpDiv.outerHeight()}), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        var n = this._getNumberOfMonths(e), s = n[1], a = 17;
        if (e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", a * s + "em"), e.dpDiv[(1 != n[0] || 1 != n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus(), e.yearshtml) {
            var r = e.yearshtml;
            setTimeout(function () {
                r === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), r = e.yearshtml = null
            }, 0)
        }
    }, _getBorders: function (e) {
        var t = function (e) {
            return{thin: 1, medium: 2, thick: 3}[e] || e
        };
        return[parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
    }, _checkOffset: function (e, t, i) {
        var n = e.dpDiv.outerWidth(), s = e.dpDiv.outerHeight(), a = e.input ? e.input.outerWidth() : 0, r = e.input ? e.input.outerHeight() : 0, o = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()), l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
        return t.left -= this._get(e, "isRTL") ? n - a : 0, t.left -= i && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= i && t.top == e.input.offset().top + r ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + n > o && o > n ? Math.abs(t.left + n - o) : 0), t.top -= Math.min(t.top, t.top + s > l && l > s ? Math.abs(s + r) : 0), t
    }, _findPos: function (e) {
        for (var t = this._getInst(e), i = this._get(t, "isRTL"); e && ("hidden" == e.type || 1 != e.nodeType || $.expr.filters.hidden(e));)e = e[i ? "previousSibling" : "nextSibling"];
        var n = $(e).offset();
        return[n.left, n.top]
    }, _hideDatepicker: function (e) {
        var t = this._curInst;
        if (t && (!e || t == $.data(e, PROP_NAME)) && this._datepickerShowing) {
            var i = this._get(t, "showAnim"), n = this._get(t, "duration"), s = function () {
                $.datepicker._tidyDialog(t)
            };
            $.effects && ($.effects.effect[i] || $.effects[i]) ? t.dpDiv.hide(i, $.datepicker._get(t, "showOptions"), n, s) : t.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1;
            var a = this._get(t, "onClose");
            a && a.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position: "absolute", left: "0", top: "-100px"}), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
        }
    }, _tidyDialog: function (e) {
        e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    }, _checkExternalClick: function (e) {
        if ($.datepicker._curInst) {
            var t = $(e.target), i = $.datepicker._getInst(t[0]);
            (t[0].id != $.datepicker._mainDivId && 0 == t.parents("#" + $.datepicker._mainDivId).length && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
        }
    }, _adjustDate: function (e, t, i) {
        var n = $(e), s = this._getInst(n[0]);
        this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, t + ("M" == i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
    }, _gotoToday: function (e) {
        var t = $(e), i = this._getInst(t[0]);
        if (this._get(i, "gotoCurrent") && i.currentDay)i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear; else {
            var n = new Date;
            i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()
        }
        this._notifyChange(i), this._adjustDate(t)
    }, _selectMonthYear: function (e, t, i) {
        var n = $(e), s = this._getInst(n[0]);
        s["selected" + ("M" == i ? "Month" : "Year")] = s["draw" + ("M" == i ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(n)
    }, _selectDay: function (e, t, i, n) {
        var s = $(e);
        if (!$(n).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(s[0])) {
            var a = this._getInst(s[0]);
            a.selectedDay = a.currentDay = $("a", n).html(), a.selectedMonth = a.currentMonth = t, a.selectedYear = a.currentYear = i, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear))
        }
    }, _clearDate: function (e) {
        var t = $(e);
        this._getInst(t[0]), this._selectDate(t, "")
    }, _selectDate: function (e, t) {
        var i = $(e), n = this._getInst(i[0]);
        t = null != t ? t : this._formatDate(n), n.input && n.input.val(t), this._updateAlternate(n);
        var s = this._get(n, "onSelect");
        s ? s.apply(n.input ? n.input[0] : null, [t, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
    }, _updateAlternate: function (e) {
        var t = this._get(e, "altField");
        if (t) {
            var i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e));
            $(t).each(function () {
                $(this).val(s)
            })
        }
    }, noWeekends: function (e) {
        var t = e.getDay();
        return[t > 0 && 6 > t, ""]
    }, iso8601Week: function (e) {
        var t = new Date(e.getTime());
        t.setDate(t.getDate() + 4 - (t.getDay() || 7));
        var i = t.getTime();
        return t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
    }, parseDate: function (e, t, i) {
        if (null == e || null == t)throw"Invalid arguments";
        if (t = "object" == typeof t ? t.toString() : t + "", "" == t)return null;
        var n = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
        n = "string" != typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10);
        for (var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, c = -1, h = -1, u = -1, d = !1, p = function (t) {
            var i = _ + 1 < e.length && e.charAt(_ + 1) == t;
            return i && _++, i
        }, f = function (e) {
            var i = p(e), n = "@" == e ? 14 : "!" == e ? 20 : "y" == e && i ? 4 : "o" == e ? 3 : 2, s = new RegExp("^\\d{1," + n + "}"), a = t.substring(v).match(s);
            if (!a)throw"Missing number at position " + v;
            return v += a[0].length, parseInt(a[0], 10)
        }, g = function (e, i, n) {
            var s = $.map(p(e) ? n : i,function (e, t) {
                return[
                    [t, e]
                ]
            }).sort(function (e, t) {
                return-(e[1].length - t[1].length)
            }), a = -1;
            if ($.each(s, function (e, i) {
                var n = i[1];
                return t.substr(v, n.length).toLowerCase() == n.toLowerCase() ? (a = i[0], v += n.length, !1) : void 0
            }), -1 != a)return a + 1;
            throw"Unknown name at position " + v
        }, m = function () {
            if (t.charAt(v) != e.charAt(_))throw"Unexpected literal at position " + v;
            v++
        }, v = 0, _ = 0; _ < e.length; _++)if (d)"'" != e.charAt(_) || p("'") ? m() : d = !1; else switch (e.charAt(_)) {
            case"d":
                h = f("d");
                break;
            case"D":
                g("D", s, a);
                break;
            case"o":
                u = f("o");
                break;
            case"m":
                c = f("m");
                break;
            case"M":
                c = g("M", r, o);
                break;
            case"y":
                l = f("y");
                break;
            case"@":
                var b = new Date(f("@"));
                l = b.getFullYear(), c = b.getMonth() + 1, h = b.getDate();
                break;
            case"!":
                var b = new Date((f("!") - this._ticksTo1970) / 1e4);
                l = b.getFullYear(), c = b.getMonth() + 1, h = b.getDate();
                break;
            case"'":
                p("'") ? m() : d = !0;
                break;
            default:
                m()
        }
        if (v < t.length) {
            var y = t.substr(v);
            if (!/^\s+/.test(y))throw"Extra/unparsed characters found in date: " + y
        }
        if (-1 == l ? l = (new Date).getFullYear() : 100 > l && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (n >= l ? 0 : -100)), u > -1)for (c = 1, h = u; ;) {
            var x = this._getDaysInMonth(l, c - 1);
            if (x >= h)break;
            c++, h -= x
        }
        var b = this._daylightSavingAdjust(new Date(l, c - 1, h));
        if (b.getFullYear() != l || b.getMonth() + 1 != c || b.getDate() != h)throw"Invalid date";
        return b
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (e, t, i) {
        if (!t)return"";
        var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, s = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, o = function (t) {
            var i = d + 1 < e.length && e.charAt(d + 1) == t;
            return i && d++, i
        }, l = function (e, t, i) {
            var n = "" + t;
            if (o(e))for (; n.length < i;)n = "0" + n;
            return n
        }, c = function (e, t, i, n) {
            return o(e) ? n[t] : i[t]
        }, h = "", u = !1;
        if (t)for (var d = 0; d < e.length; d++)if (u)"'" != e.charAt(d) || o("'") ? h += e.charAt(d) : u = !1; else switch (e.charAt(d)) {
            case"d":
                h += l("d", t.getDate(), 2);
                break;
            case"D":
                h += c("D", t.getDay(), n, s);
                break;
            case"o":
                h += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
            case"m":
                h += l("m", t.getMonth() + 1, 2);
                break;
            case"M":
                h += c("M", t.getMonth(), a, r);
                break;
            case"y":
                h += o("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                break;
            case"@":
                h += t.getTime();
                break;
            case"!":
                h += 1e4 * t.getTime() + this._ticksTo1970;
                break;
            case"'":
                o("'") ? h += "'" : u = !0;
                break;
            default:
                h += e.charAt(d)
        }
        return h
    }, _possibleChars: function (e) {
        for (var t = "", i = !1, n = function (t) {
            var i = s + 1 < e.length && e.charAt(s + 1) == t;
            return i && s++, i
        }, s = 0; s < e.length; s++)if (i)"'" != e.charAt(s) || n("'") ? t += e.charAt(s) : i = !1; else switch (e.charAt(s)) {
            case"d":
            case"m":
            case"y":
            case"@":
                t += "0123456789";
                break;
            case"D":
            case"M":
                return null;
            case"'":
                n("'") ? t += "'" : i = !0;
                break;
            default:
                t += e.charAt(s)
        }
        return t
    }, _get: function (e, t) {
        return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
    }, _setDateFromField: function (e, t) {
        if (e.input.val() != e.lastVal) {
            var i, n, s = this._get(e, "dateFormat"), a = e.lastVal = e.input ? e.input.val() : null;
            i = n = this._getDefaultDate(e);
            var r = this._getFormatConfig(e);
            try {
                i = this.parseDate(s, a, r) || n
            } catch (o) {
                this.log(o), a = t ? "" : a
            }
            e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = a ? i.getDate() : 0, e.currentMonth = a ? i.getMonth() : 0, e.currentYear = a ? i.getFullYear() : 0, this._adjustInstDate(e)
        }
    }, _getDefaultDate: function (e) {
        return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
    }, _determineDate: function (e, t, i) {
        var n = function (e) {
            var t = new Date;
            return t.setDate(t.getDate() + e), t
        }, s = function (t) {
            try {
                return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
            } catch (i) {
            }
            for (var n = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), a = n.getMonth(), r = n.getDate(), o = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = o.exec(t); l;) {
                switch (l[2] || "d") {
                    case"d":
                    case"D":
                        r += parseInt(l[1], 10);
                        break;
                    case"w":
                    case"W":
                        r += 7 * parseInt(l[1], 10);
                        break;
                    case"m":
                    case"M":
                        a += parseInt(l[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(s, a));
                        break;
                    case"y":
                    case"Y":
                        s += parseInt(l[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(s, a))
                }
                l = o.exec(t)
            }
            return new Date(s, a, r)
        }, a = null == t || "" === t ? i : "string" == typeof t ? s(t) : "number" == typeof t ? isNaN(t) ? i : n(t) : new Date(t.getTime());
        return a = a && "Invalid Date" == a.toString() ? i : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
    }, _daylightSavingAdjust: function (e) {
        return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
    }, _setDate: function (e, t, i) {
        var n = !t, s = e.selectedMonth, a = e.selectedYear, r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
        e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s == e.selectedMonth && a == e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
    }, _getDate: function (e) {
        var t = !e.currentYear || e.input && "" == e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return t
    }, _attachHandlers: function (e) {
        var t = this._get(e, "stepMonths"), i = "#" + e.id.replace(/\\\\/g, "\\");
        e.dpDiv.find("[data-handler]").map(function () {
            var e = {prev: function () {
                window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -t, "M")
            }, next: function () {
                window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +t, "M")
            }, hide: function () {
                window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
            }, today: function () {
                window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
            }, selectDay: function () {
                return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            }, selectMonth: function () {
                return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
            }, selectYear: function () {
                return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
            }};
            $(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
        })
    }, _generateHTML: function (e) {
        var t = new Date;
        t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
        var i = this._get(e, "isRTL"), n = this._get(e, "showButtonPanel"), s = this._get(e, "hideIfNoPrevNext"), a = this._get(e, "navigationAsDateFormat"), r = this._getNumberOfMonths(e), o = this._get(e, "showCurrentAtPos"), l = this._get(e, "stepMonths"), c = 1 != r[0] || 1 != r[1], h = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), u = this._getMinMaxDate(e, "min"), d = this._getMinMaxDate(e, "max"), p = e.drawMonth - o, f = e.drawYear;
        if (0 > p && (p += 12, f--), d) {
            var g = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - r[0] * r[1] + 1, d.getDate()));
            for (g = u && u > g ? u : g; this._daylightSavingAdjust(new Date(f, p, 1)) > g;)p--, 0 > p && (p = 11, f--)
        }
        e.drawMonth = p, e.drawYear = f;
        var m = this._get(e, "prevText");
        m = a ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(e)) : m;
        var v = this._canAdjustMonth(e, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>" : s ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>", _ = this._get(e, "nextText");
        _ = a ? this.formatDate(_, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(e)) : _;
        var b = this._canAdjustMonth(e, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + _ + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + _ + "</span></a>" : s ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + _ + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + _ + "</span></a>", y = this._get(e, "currentText"), x = this._get(e, "gotoCurrent") && e.currentDay ? h : t;
        y = a ? this.formatDate(y, x, this._getFormatConfig(e)) : y;
        var w = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>", k = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? w : "") + (this._isInRange(e, x) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + y + "</button>" : "") + (i ? "" : w) + "</div>" : "", C = parseInt(this._get(e, "firstDay"), 10);
        C = isNaN(C) ? 0 : C;
        var j = this._get(e, "showWeek"), S = this._get(e, "dayNames");
        this._get(e, "dayNamesShort");
        var T = this._get(e, "dayNamesMin"), D = this._get(e, "monthNames"), E = this._get(e, "monthNamesShort"), A = this._get(e, "beforeShowDay"), P = this._get(e, "showOtherMonths"), N = this._get(e, "selectOtherMonths");
        this._get(e, "calculateWeek") || this.iso8601Week;
        for (var I = this._getDefaultDate(e), M = "", F = 0; F < r[0]; F++) {
            var H = "";
            this.maxRows = 4;
            for (var O = 0; O < r[1]; O++) {
                var z = this._daylightSavingAdjust(new Date(f, p, e.selectedDay)), L = " ui-corner-all", R = "";
                if (c) {
                    if (R += '<div class="ui-datepicker-group', r[1] > 1)switch (O) {
                        case 0:
                            R += " ui-datepicker-group-first", L = " ui-corner-" + (i ? "right" : "left");
                            break;
                        case r[1] - 1:
                            R += " ui-datepicker-group-last", L = " ui-corner-" + (i ? "left" : "right");
                            break;
                        default:
                            R += " ui-datepicker-group-middle", L = ""
                    }
                    R += '">'
                }
                R += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + L + '">' + (/all|left/.test(L) && 0 == F ? i ? b : v : "") + (/all|right/.test(L) && 0 == F ? i ? v : b : "") + this._generateMonthYearHeader(e, p, f, u, d, F > 0 || O > 0, D, E) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                for (var W = j ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "", q = 0; 7 > q; q++) {
                    var B = (q + C) % 7;
                    W += "<th" + ((q + C + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + S[B] + '">' + T[B] + "</span></th>"
                }
                R += W + "</tr></thead><tbody>";
                var U = this._getDaysInMonth(f, p);
                f == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, U));
                var Y = (this._getFirstDayOfMonth(f, p) - C + 7) % 7, Q = Math.ceil((Y + U) / 7), V = c ? this.maxRows > Q ? this.maxRows : Q : Q;
                this.maxRows = V;
                for (var K = this._daylightSavingAdjust(new Date(f, p, 1 - Y)), X = 0; V > X; X++) {
                    R += "<tr>";
                    for (var G = j ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(K) + "</td>" : "", q = 0; 7 > q; q++) {
                        var J = A ? A.apply(e.input ? e.input[0] : null, [K]) : [!0, ""], Z = K.getMonth() != p, et = Z && !N || !J[0] || u && u > K || d && K > d;
                        G += '<td class="' + ((q + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (K.getTime() == z.getTime() && p == e.selectedMonth && e._keyEvent || I.getTime() == K.getTime() && I.getTime() == z.getTime() ? " " + this._dayOverClass : "") + (et ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !P ? "" : " " + J[1] + (K.getTime() == h.getTime() ? " " + this._currentClass : "") + (K.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !P || !J[2] ? "" : ' title="' + J[2] + '"') + (et ? "" : ' data-handler="selectDay" data-event="click" data-month="' + K.getMonth() + '" data-year="' + K.getFullYear() + '"') + ">" + (Z && !P ? "&#xa0;" : et ? '<span class="ui-state-default">' + K.getDate() + "</span>" : '<a class="ui-state-default' + (K.getTime() == t.getTime() ? " ui-state-highlight" : "") + (K.getTime() == h.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + K.getDate() + "</a>") + "</td>", K.setDate(K.getDate() + 1), K = this._daylightSavingAdjust(K)
                    }
                    R += G + "</tr>"
                }
                p++, p > 11 && (p = 0, f++), R += "</tbody></table>" + (c ? "</div>" + (r[0] > 0 && O == r[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), H += R
            }
            M += H
        }
        return M += k + ($.ui.ie6 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, M
    }, _generateMonthYearHeader: function (e, t, i, n, s, a, r, o) {
        var l = this._get(e, "changeMonth"), c = this._get(e, "changeYear"), h = this._get(e, "showMonthAfterYear"), u = '<div class="ui-datepicker-title">', d = "";
        if (a || !l)d += '<span class="ui-datepicker-month">' + r[t] + "</span>"; else {
            var p = n && n.getFullYear() == i, f = s && s.getFullYear() == i;
            d += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
            for (var g = 0; 12 > g; g++)(!p || g >= n.getMonth()) && (!f || g <= s.getMonth()) && (d += '<option value="' + g + '"' + (g == t ? ' selected="selected"' : "") + ">" + o[g] + "</option>");
            d += "</select>"
        }
        if (h || (u += d + (!a && l && c ? "" : "&#xa0;")), !e.yearshtml)if (e.yearshtml = "", a || !c)u += '<span class="ui-datepicker-year">' + i + "</span>"; else {
            var m = this._get(e, "yearRange").split(":"), v = (new Date).getFullYear(), _ = function (e) {
                var t = e.match(/c[+-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? v + parseInt(e, 10) : parseInt(e, 10);
                return isNaN(t) ? v : t
            }, b = _(m[0]), y = Math.max(b, _(m[1] || ""));
            for (b = n ? Math.max(b, n.getFullYear()) : b, y = s ? Math.min(y, s.getFullYear()) : y, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; y >= b; b++)e.yearshtml += '<option value="' + b + '"' + (b == i ? ' selected="selected"' : "") + ">" + b + "</option>";
            e.yearshtml += "</select>", u += e.yearshtml, e.yearshtml = null
        }
        return u += this._get(e, "yearSuffix"), h && (u += (!a && l && c ? "" : "&#xa0;") + d), u += "</div>"
    }, _adjustInstDate: function (e, t, i) {
        var n = e.drawYear + ("Y" == i ? t : 0), s = e.drawMonth + ("M" == i ? t : 0), a = Math.min(e.selectedDay, this._getDaysInMonth(n, s)) + ("D" == i ? t : 0), r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, s, a)));
        e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(e)
    }, _restrictMinMax: function (e, t) {
        var i = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max"), s = i && i > t ? i : t;
        return s = n && s > n ? n : s
    }, _notifyChange: function (e) {
        var t = this._get(e, "onChangeMonthYear");
        t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
    }, _getNumberOfMonths: function (e) {
        var t = this._get(e, "numberOfMonths");
        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
    }, _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null)
    }, _getDaysInMonth: function (e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
    }, _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay()
    }, _canAdjustMonth: function (e, t, i, n) {
        var s = this._getNumberOfMonths(e), a = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : s[0] * s[1]), 1));
        return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
    }, _isInRange: function (e, t) {
        var i = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max");
        return(!i || t.getTime() >= i.getTime()) && (!n || t.getTime() <= n.getTime())
    }, _getFormatConfig: function (e) {
        var t = this._get(e, "shortYearCutoff");
        return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames")}
    }, _formatDate: function (e, t, i, n) {
        t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
        var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
    }}), $.fn.datepicker = function (e) {
        if (!this.length)return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return"string" != typeof e || "isDisabled" != e && "getDate" != e && "widget" != e ? "option" == e && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function () {
            "string" == typeof e ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
        }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
}(jQuery), function (e, t) {
    var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ", n = {buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0}, s = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0};
    e.widget("ui.dialog", {version: "1.9.2", options: {autoOpen: !0, buttons: {}, closeOnEscape: !0, closeText: "close", dialogClass: "", draggable: !0, hide: null, height: "auto", maxHeight: !1, maxWidth: !1, minHeight: 150, minWidth: 150, modal: !1, position: {my: "center", at: "center", of: window, collision: "fit", using: function (t) {
        var i = e(this).css(t).offset().top;
        0 > i && e(this).css("top", t.top - i)
    }}, resizable: !0, show: null, stack: !0, title: "", width: 300, zIndex: 1e3}, _create: function () {
        this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.oldPosition = {parent: this.element.parent(), index: this.element.parent().children().index(this.element)}, this.options.title = this.options.title || this.originalTitle;
        var t, n, s, a, r, o = this, l = this.options, c = l.title || "&#160;";
        t = (this.uiDialog = e("<div>")).addClass(i + l.dialogClass).css({display: "none", outline: 0, zIndex: l.zIndex}).attr("tabIndex", -1).keydown(function (t) {
            l.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE && (o.close(t), t.preventDefault())
        }).mousedown(function (e) {
            o.moveToTop(!1, e)
        }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(t), n = (this.uiDialogTitlebar = e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",function () {
            t.focus()
        }).prependTo(t), s = e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function (e) {
            e.preventDefault(), o.close(e)
        }).appendTo(n), (this.uiDialogTitlebarCloseText = e("<span>")).addClass("ui-icon ui-icon-closethick").text(l.closeText).appendTo(s), a = e("<span>").uniqueId().addClass("ui-dialog-title").html(c).prependTo(n), r = (this.uiDialogButtonPane = e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = e("<div>")).addClass("ui-dialog-buttonset").appendTo(r), t.attr({role: "dialog", "aria-labelledby": a.attr("id")}), n.find("*").add(n).disableSelection(), this._hoverable(s), this._focusable(s), l.draggable && e.fn.draggable && this._makeDraggable(), l.resizable && e.fn.resizable && this._makeResizable(), this._createButtons(l.buttons), this._isOpen = !1, e.fn.bgiframe && t.bgiframe(), this._on(t, {keydown: function (i) {
            if (l.modal && i.keyCode === e.ui.keyCode.TAB) {
                var n = e(":tabbable", t), s = n.filter(":first"), a = n.filter(":last");
                return i.target !== a[0] || i.shiftKey ? i.target === s[0] && i.shiftKey ? (a.focus(1), !1) : void 0 : (s.focus(1), !1)
            }
        }})
    }, _init: function () {
        this.options.autoOpen && this.open()
    }, _destroy: function () {
        var e, t = this.oldPosition;
        this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
    }, widget: function () {
        return this.uiDialog
    }, close: function (t) {
        var i, n, s = this;
        if (this._isOpen && !1 !== this._trigger("beforeClose", t))return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function () {
            s._trigger("close", t)
        }) : (this.uiDialog.hide(), this._trigger("close", t)), e.ui.dialog.overlay.resize(), this.options.modal && (i = 0, e(".ui-dialog").each(function () {
            this !== s.uiDialog[0] && (n = e(this).css("z-index"), isNaN(n) || (i = Math.max(i, n)))
        }), e.ui.dialog.maxZ = i), this
    }, isOpen: function () {
        return this._isOpen
    }, moveToTop: function (t, i) {
        var n, s = this.options;
        return s.modal && !t || !s.stack && !s.modal ? this._trigger("focus", i) : (s.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = s.zIndex), this.overlay && (e.ui.dialog.maxZ += 1, e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ, this.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ)), n = {scrollTop: this.element.scrollTop(), scrollLeft: this.element.scrollLeft()}, e.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", e.ui.dialog.maxZ), this.element.attr(n), this._trigger("focus", i), this)
    }, open: function () {
        if (!this._isOpen) {
            var t, i = this.options, n = this.uiDialog;
            return this._size(), this._position(i.position), n.show(i.show), this.overlay = i.modal ? new e.ui.dialog.overlay(this) : null, this.moveToTop(!0), t = this.element.find(":tabbable"), t.length || (t = this.uiDialogButtonPane.find(":tabbable"), t.length || (t = n)), t.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
        }
    }, _createButtons: function (t) {
        var i = this, n = !1;
        this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), "object" == typeof t && null !== t && e.each(t, function () {
            return!(n = !0)
        }), n ? (e.each(t, function (t, n) {
            var s, a;
            n = e.isFunction(n) ? {click: n, text: t} : n, n = e.extend({type: "button"}, n), a = n.click, n.click = function () {
                a.apply(i.element[0], arguments)
            }, s = e("<button></button>", n).appendTo(i.uiButtonSet), e.fn.button && s.button()
        }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
    }, _makeDraggable: function () {
        function t(e) {
            return{position: e.position, offset: e.offset}
        }

        var i = this, n = this.options;
        this.uiDialog.draggable({cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (n, s) {
            e(this).addClass("ui-dialog-dragging"), i._trigger("dragStart", n, t(s))
        }, drag: function (e, n) {
            i._trigger("drag", e, t(n))
        }, stop: function (s, a) {
            n.position = [a.position.left - i.document.scrollLeft(), a.position.top - i.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), i._trigger("dragStop", s, t(a)), e.ui.dialog.overlay.resize()
        }})
    }, _makeResizable: function (i) {
        function n(e) {
            return{originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size}
        }

        i = i === t ? this.options.resizable : i;
        var s = this, a = this.options, r = this.uiDialog.css("position"), o = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
        this.uiDialog.resizable({cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: a.maxWidth, maxHeight: a.maxHeight, minWidth: a.minWidth, minHeight: this._minHeight(), handles: o, start: function (t, i) {
            e(this).addClass("ui-dialog-resizing"), s._trigger("resizeStart", t, n(i))
        }, resize: function (e, t) {
            s._trigger("resize", e, n(t))
        }, stop: function (t, i) {
            e(this).removeClass("ui-dialog-resizing"), a.height = e(this).height(), a.width = e(this).width(), s._trigger("resizeStop", t, n(i)), e.ui.dialog.overlay.resize()
        }}).css("position", r).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
    }, _minHeight: function () {
        var e = this.options;
        return"auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
    }, _position: function (t) {
        var i, n = [], s = [0, 0];
        t ? (("string" == typeof t || "object" == typeof t && "0"in t) && (n = t.split ? t.split(" ") : [t[0], t[1]], 1 === n.length && (n[1] = n[0]), e.each(["left", "top"], function (e, t) {
            +n[e] === n[e] && (s[e] = n[e], n[e] = t)
        }), t = {my: n[0] + (s[0] < 0 ? s[0] : "+" + s[0]) + " " + n[1] + (s[1] < 0 ? s[1] : "+" + s[1]), at: n.join(" ")}), t = e.extend({}, e.ui.dialog.prototype.options.position, t)) : t = e.ui.dialog.prototype.options.position, i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(t), i || this.uiDialog.hide()
    }, _setOptions: function (t) {
        var i = this, a = {}, r = !1;
        e.each(t, function (e, t) {
            i._setOption(e, t), e in n && (r = !0), e in s && (a[e] = t)
        }), r && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", a)
    }, _setOption: function (t, n) {
        var s, a, r = this.uiDialog;
        switch (t) {
            case"buttons":
                this._createButtons(n);
                break;
            case"closeText":
                this.uiDialogTitlebarCloseText.text("" + n);
                break;
            case"dialogClass":
                r.removeClass(this.options.dialogClass).addClass(i + n);
                break;
            case"disabled":
                n ? r.addClass("ui-dialog-disabled") : r.removeClass("ui-dialog-disabled");
                break;
            case"draggable":
                s = r.is(":data(draggable)"), s && !n && r.draggable("destroy"), !s && n && this._makeDraggable();
                break;
            case"position":
                this._position(n);
                break;
            case"resizable":
                a = r.is(":data(resizable)"), a && !n && r.resizable("destroy"), a && "string" == typeof n && r.resizable("option", "handles", n), a || n === !1 || this._makeResizable(n);
                break;
            case"title":
                e(".ui-dialog-title", this.uiDialogTitlebar).html("" + (n || "&#160;"))
        }
        this._super(t, n)
    }, _size: function () {
        var t, i, n, s = this.options, a = this.uiDialog.is(":visible");
        this.element.show().css({width: "auto", minHeight: 0, height: 0}), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({height: "auto", width: s.width}).outerHeight(), i = Math.max(0, s.minHeight - t), "auto" === s.height ? e.support.minHeight ? this.element.css({minHeight: i, height: "auto"}) : (this.uiDialog.show(), n = this.element.css("height", "auto").height(), a || this.uiDialog.hide(), this.element.height(Math.max(n, i))) : this.element.height(Math.max(s.height - t, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
    }}), e.extend(e.ui.dialog, {uuid: 0, maxZ: 0, getTitleId: function (e) {
        var t = e.attr("id");
        return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
    }, overlay: function (t) {
        this.$el = e.ui.dialog.overlay.create(t)
    }}), e.extend(e.ui.dialog.overlay, {instances: [], oldInstances: [], maxZ: 0, events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function (e) {
        return e + ".dialog-overlay"
    }).join(" "), create: function (t) {
        0 === this.instances.length && (setTimeout(function () {
            e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function (t) {
                return e(t.target).zIndex() < e.ui.dialog.overlay.maxZ ? !1 : void 0
            })
        }, 1), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
        var i = this.oldInstances.pop() || e("<div>").addClass("ui-widget-overlay");
        return e(document).bind("keydown.dialog-overlay", function (n) {
            var s = e.ui.dialog.overlay.instances;
            0 !== s.length && s[s.length - 1] === i && t.options.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
        }), i.appendTo(document.body).css({width: this.width(), height: this.height()}), e.fn.bgiframe && i.bgiframe(), this.instances.push(i), i
    }, destroy: function (t) {
        var i = e.inArray(t, this.instances), n = 0;
        -1 !== i && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && e([document, window]).unbind(".dialog-overlay"), t.height(0).width(0).remove(), e.each(this.instances, function () {
            n = Math.max(n, this.css("z-index"))
        }), this.maxZ = n
    }, height: function () {
        var t, i;
        return e.ui.ie ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), i > t ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
    }, width: function () {
        var t, i;
        return e.ui.ie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), i > t ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
    }, resize: function () {
        var t = e([]);
        e.each(e.ui.dialog.overlay.instances, function () {
            t = t.add(this)
        }), t.css({width: 0, height: 0}).css({width: e.ui.dialog.overlay.width(), height: e.ui.dialog.overlay.height()})
    }}), e.extend(e.ui.dialog.overlay.prototype, {destroy: function () {
        e.ui.dialog.overlay.destroy(this.$el)
    }})
}(jQuery), function (e) {
    var t = /up|down|vertical/, i = /up|left|vertical|horizontal/;
    e.effects.effect.blind = function (n, s) {
        var a, r, o, l = e(this), c = ["position", "top", "bottom", "left", "right", "height", "width"], h = e.effects.setMode(l, n.mode || "hide"), u = n.direction || "up", d = t.test(u), p = d ? "height" : "width", f = d ? "top" : "left", g = i.test(u), m = {}, v = "show" === h;
        l.parent().is(".ui-effects-wrapper") ? e.effects.save(l.parent(), c) : e.effects.save(l, c), l.show(), a = e.effects.createWrapper(l).css({overflow: "hidden"}), r = a[p](), o = parseFloat(a.css(f)) || 0, m[p] = v ? r : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({position: "absolute"}), m[f] = v ? o : r + o), v && (a.css(p, 0), g || a.css(f, o + r)), a.animate(m, {duration: n.duration, easing: n.easing, queue: !1, complete: function () {
            "hide" === h && l.hide(), e.effects.restore(l, c), e.effects.removeWrapper(l), s()
        }})
    }
}(jQuery), function (e) {
    e.effects.effect.bounce = function (t, i) {
        var n, s, a, r = e(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], l = e.effects.setMode(r, t.mode || "effect"), c = "hide" === l, h = "show" === l, u = t.direction || "up", d = t.distance, p = t.times || 5, f = 2 * p + (h || c ? 1 : 0), g = t.duration / f, m = t.easing, v = "up" === u || "down" === u ? "top" : "left", _ = "up" === u || "left" === u, b = r.queue(), y = b.length;
        for ((h || c) && o.push("opacity"), e.effects.save(r, o), r.show(), e.effects.createWrapper(r), d || (d = r["top" === v ? "outerHeight" : "outerWidth"]() / 3), h && (a = {opacity: 1}, a[v] = 0, r.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, g, m)), c && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, n = 0; p > n; n++)s = {}, s[v] = (_ ? "-=" : "+=") + d, r.animate(s, g, m).animate(a, g, m), d = c ? 2 * d : d / 2;
        c && (s = {opacity: 0}, s[v] = (_ ? "-=" : "+=") + d, r.animate(s, g, m)), r.queue(function () {
            c && r.hide(), e.effects.restore(r, o), e.effects.removeWrapper(r), i()
        }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), r.dequeue()
    }
}(jQuery), function (e) {
    e.effects.effect.clip = function (t, i) {
        var n, s, a, r = e(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], l = e.effects.setMode(r, t.mode || "hide"), c = "show" === l, h = t.direction || "vertical", u = "vertical" === h, d = u ? "height" : "width", p = u ? "top" : "left", f = {};
        e.effects.save(r, o), r.show(), n = e.effects.createWrapper(r).css({overflow: "hidden"}), s = "IMG" === r[0].tagName ? n : r, a = s[d](), c && (s.css(d, 0), s.css(p, a / 2)), f[d] = c ? a : 0, f[p] = c ? 0 : a / 2, s.animate(f, {queue: !1, duration: t.duration, easing: t.easing, complete: function () {
            c || r.hide(), e.effects.restore(r, o), e.effects.removeWrapper(r), i()
        }})
    }
}(jQuery), function (e) {
    e.effects.effect.drop = function (t, i) {
        var n, s = e(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], r = e.effects.setMode(s, t.mode || "hide"), o = "show" === r, l = t.direction || "left", c = "up" === l || "down" === l ? "top" : "left", h = "up" === l || "left" === l ? "pos" : "neg", u = {opacity: o ? 1 : 0};
        e.effects.save(s, a), s.show(), e.effects.createWrapper(s), n = t.distance || s["top" === c ? "outerHeight" : "outerWidth"](!0) / 2, o && s.css("opacity", 0).css(c, "pos" === h ? -n : n), u[c] = (o ? "pos" === h ? "+=" : "-=" : "pos" === h ? "-=" : "+=") + n, s.animate(u, {queue: !1, duration: t.duration, easing: t.easing, complete: function () {
            "hide" === r && s.hide(), e.effects.restore(s, a), e.effects.removeWrapper(s), i()
        }})
    }
}(jQuery), function (e) {
    e.effects.effect.explode = function (t, i) {
        function n() {
            b.push(this), b.length === u * d && s()
        }

        function s() {
            p.css({visibility: "visible"}), e(b).remove(), g || p.hide(), i()
        }

        var a, r, o, l, c, h, u = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, d = u, p = e(this), f = e.effects.setMode(p, t.mode || "hide"), g = "show" === f, m = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / d), _ = Math.ceil(p.outerHeight() / u), b = [];
        for (a = 0; u > a; a++)for (l = m.top + a * _, h = a - (u - 1) / 2, r = 0; d > r; r++)o = m.left + r * v, c = r - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({position: "absolute", visibility: "visible", left: -r * v, top: -a * _}).parent().addClass("ui-effects-explode").css({position: "absolute", overflow: "hidden", width: v, height: _, left: o + (g ? c * v : 0), top: l + (g ? h * _ : 0), opacity: g ? 0 : 1}).animate({left: o + (g ? 0 : c * v), top: l + (g ? 0 : h * _), opacity: g ? 1 : 0}, t.duration || 500, t.easing, n)
    }
}(jQuery), function (e) {
    e.effects.effect.fade = function (t, i) {
        var n = e(this), s = e.effects.setMode(n, t.mode || "toggle");
        n.animate({opacity: s}, {queue: !1, duration: t.duration, easing: t.easing, complete: i})
    }
}(jQuery), function (e) {
    e.effects.effect.fold = function (t, i) {
        var n, s, a = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], o = e.effects.setMode(a, t.mode || "hide"), l = "show" === o, c = "hide" === o, h = t.size || 15, u = /([0-9]+)%/.exec(h), d = !!t.horizFirst, p = l !== d, f = p ? ["width", "height"] : ["height", "width"], g = t.duration / 2, m = {}, v = {};
        e.effects.save(a, r), a.show(), n = e.effects.createWrapper(a).css({overflow: "hidden"}), s = p ? [n.width(), n.height()] : [n.height(), n.width()], u && (h = parseInt(u[1], 10) / 100 * s[c ? 0 : 1]), l && n.css(d ? {height: 0, width: h} : {height: h, width: 0}), m[f[0]] = l ? s[0] : h, v[f[1]] = l ? s[1] : 0, n.animate(m, g, t.easing).animate(v, g, t.easing, function () {
            c && a.hide(), e.effects.restore(a, r), e.effects.removeWrapper(a), i()
        })
    }
}(jQuery), function (e) {
    e.effects.effect.highlight = function (t, i) {
        var n = e(this), s = ["backgroundImage", "backgroundColor", "opacity"], a = e.effects.setMode(n, t.mode || "show"), r = {backgroundColor: n.css("backgroundColor")};
        "hide" === a && (r.opacity = 0), e.effects.save(n, s), n.show().css({backgroundImage: "none", backgroundColor: t.color || "#ffff99"}).animate(r, {queue: !1, duration: t.duration, easing: t.easing, complete: function () {
            "hide" === a && n.hide(), e.effects.restore(n, s), i()
        }})
    }
}(jQuery), function (e) {
    e.effects.effect.pulsate = function (t, i) {
        var n, s = e(this), a = e.effects.setMode(s, t.mode || "show"), r = "show" === a, o = "hide" === a, l = r || "hide" === a, c = 2 * (t.times || 5) + (l ? 1 : 0), h = t.duration / c, u = 0, d = s.queue(), p = d.length;
        for ((r || !s.is(":visible")) && (s.css("opacity", 0).show(), u = 1), n = 1; c > n; n++)s.animate({opacity: u}, h, t.easing), u = 1 - u;
        s.animate({opacity: u}, h, t.easing), s.queue(function () {
            o && s.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, c + 1))), s.dequeue()
    }
}(jQuery), function (e) {
    e.effects.effect.puff = function (t, i) {
        var n = e(this), s = e.effects.setMode(n, t.mode || "hide"), a = "hide" === s, r = parseInt(t.percent, 10) || 150, o = r / 100, l = {height: n.height(), width: n.width(), outerHeight: n.outerHeight(), outerWidth: n.outerWidth()};
        e.extend(t, {effect: "scale", queue: !1, fade: !0, mode: s, complete: i, percent: a ? r : 100, from: a ? l : {height: l.height * o, width: l.width * o, outerHeight: l.outerHeight * o, outerWidth: l.outerWidth * o}}), n.effect(t)
    }, e.effects.effect.scale = function (t, i) {
        var n = e(this), s = e.extend(!0, {}, t), a = e.effects.setMode(n, t.mode || "effect"), r = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100), o = t.direction || "both", l = t.origin, c = {height: n.height(), width: n.width(), outerHeight: n.outerHeight(), outerWidth: n.outerWidth()}, h = {y: "horizontal" !== o ? r / 100 : 1, x: "vertical" !== o ? r / 100 : 1};
        s.effect = "size", s.queue = !1, s.complete = i, "effect" !== a && (s.origin = l || ["middle", "center"], s.restore = !0), s.from = t.from || ("show" === a ? {height: 0, width: 0, outerHeight: 0, outerWidth: 0} : c), s.to = {height: c.height * h.y, width: c.width * h.x, outerHeight: c.outerHeight * h.y, outerWidth: c.outerWidth * h.x}, s.fade && ("show" === a && (s.from.opacity = 0, s.to.opacity = 1), "hide" === a && (s.from.opacity = 1, s.to.opacity = 0)), n.effect(s)
    }, e.effects.effect.size = function (t, i) {
        var n, s, a, r = e(this), o = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], c = ["width", "height", "overflow"], h = ["fontSize"], u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = e.effects.setMode(r, t.mode || "effect"), f = t.restore || "effect" !== p, g = t.scale || "both", m = t.origin || ["middle", "center"], v = r.css("position"), _ = f ? o : l, b = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
        "show" === p && r.show(), n = {height: r.height(), width: r.width(), outerHeight: r.outerHeight(), outerWidth: r.outerWidth()}, "toggle" === t.mode && "show" === p ? (r.from = t.to || b, r.to = t.from || n) : (r.from = t.from || ("show" === p ? b : n), r.to = t.to || ("hide" === p ? b : n)), a = {from: {y: r.from.height / n.height, x: r.from.width / n.width}, to: {y: r.to.height / n.height, x: r.to.width / n.width}}, ("box" === g || "both" === g) && (a.from.y !== a.to.y && (_ = _.concat(u), r.from = e.effects.setTransition(r, u, a.from.y, r.from), r.to = e.effects.setTransition(r, u, a.to.y, r.to)), a.from.x !== a.to.x && (_ = _.concat(d), r.from = e.effects.setTransition(r, d, a.from.x, r.from), r.to = e.effects.setTransition(r, d, a.to.x, r.to))), ("content" === g || "both" === g) && a.from.y !== a.to.y && (_ = _.concat(h).concat(c), r.from = e.effects.setTransition(r, h, a.from.y, r.from), r.to = e.effects.setTransition(r, h, a.to.y, r.to)), e.effects.save(r, _), r.show(), e.effects.createWrapper(r), r.css("overflow", "hidden").css(r.from), m && (s = e.effects.getBaseline(m, n), r.from.top = (n.outerHeight - r.outerHeight()) * s.y, r.from.left = (n.outerWidth - r.outerWidth()) * s.x, r.to.top = (n.outerHeight - r.to.outerHeight) * s.y, r.to.left = (n.outerWidth - r.to.outerWidth) * s.x), r.css(r.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(h), d = d.concat(["marginLeft", "marginRight"]), c = o.concat(u).concat(d), r.find("*[width]").each(function () {
            var i = e(this), n = {height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth()};
            f && e.effects.save(i, c), i.from = {height: n.height * a.from.y, width: n.width * a.from.x, outerHeight: n.outerHeight * a.from.y, outerWidth: n.outerWidth * a.from.x}, i.to = {height: n.height * a.to.y, width: n.width * a.to.x, outerHeight: n.height * a.to.y, outerWidth: n.width * a.to.x}, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, u, a.from.y, i.from), i.to = e.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, d, a.from.x, i.from), i.to = e.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function () {
                f && e.effects.restore(i, c)
            })
        })), r.animate(r.to, {queue: !1, duration: t.duration, easing: t.easing, complete: function () {
            0 === r.to.opacity && r.css("opacity", r.from.opacity), "hide" === p && r.hide(), e.effects.restore(r, _), f || ("static" === v ? r.css({position: "relative", top: r.to.top, left: r.to.left}) : e.each(["top", "left"], function (e, t) {
                r.css(t, function (t, i) {
                    var n = parseInt(i, 10), s = e ? r.to.left : r.to.top;
                    return"auto" === i ? s + "px" : n + s + "px"
                })
            })), e.effects.removeWrapper(r), i()
        }})
    }
}(jQuery), function (e) {
    e.effects.effect.shake = function (t, i) {
        var n, s = e(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], r = e.effects.setMode(s, t.mode || "effect"), o = t.direction || "left", l = t.distance || 20, c = t.times || 3, h = 2 * c + 1, u = Math.round(t.duration / h), d = "up" === o || "down" === o ? "top" : "left", p = "up" === o || "left" === o, f = {}, g = {}, m = {}, v = s.queue(), _ = v.length;
        for (e.effects.save(s, a), s.show(), e.effects.createWrapper(s), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, s.animate(f, u, t.easing), n = 1; c > n; n++)s.animate(g, u, t.easing).animate(m, u, t.easing);
        s.animate(g, u, t.easing).animate(f, u / 2, t.easing).queue(function () {
            "hide" === r && s.hide(), e.effects.restore(s, a), e.effects.removeWrapper(s), i()
        }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, h + 1))), s.dequeue()
    }
}(jQuery), function (e) {
    e.effects.effect.slide = function (t, i) {
        var n, s = e(this), a = ["position", "top", "bottom", "left", "right", "width", "height"], r = e.effects.setMode(s, t.mode || "show"), o = "show" === r, l = t.direction || "left", c = "up" === l || "down" === l ? "top" : "left", h = "up" === l || "left" === l, u = {};
        e.effects.save(s, a), s.show(), n = t.distance || s["top" === c ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(s).css({overflow: "hidden"}), o && s.css(c, h ? isNaN(n) ? "-" + n : -n : n), u[c] = (o ? h ? "+=" : "-=" : h ? "-=" : "+=") + n, s.animate(u, {queue: !1, duration: t.duration, easing: t.easing, complete: function () {
            "hide" === r && s.hide(), e.effects.restore(s, a), e.effects.removeWrapper(s), i()
        }})
    }
}(jQuery), function (e) {
    e.effects.effect.transfer = function (t, i) {
        var n = e(this), s = e(t.to), a = "fixed" === s.css("position"), r = e("body"), o = a ? r.scrollTop() : 0, l = a ? r.scrollLeft() : 0, c = s.offset(), h = {top: c.top - o, left: c.left - l, height: s.innerHeight(), width: s.innerWidth()}, u = n.offset(), d = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({top: u.top - o, left: u.left - l, height: n.innerHeight(), width: n.innerWidth(), position: a ? "fixed" : "absolute"}).animate(h, t.duration, t.easing, function () {
            d.remove(), i()
        })
    }
}(jQuery), function (e) {
    var t = !1;
    e.widget("ui.menu", {version: "1.9.2", defaultElement: "<ul>", delay: 300, options: {icons: {submenu: "ui-icon-carat-1-e"}, menus: "ul", position: {my: "left top", at: "right top"}, role: "menu", blur: null, focus: null, select: null}, _create: function () {
        this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role: this.options.role, tabIndex: 0}).bind("click" + this.eventNamespace, e.proxy(function (e) {
            this.options.disabled && e.preventDefault()
        }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({"mousedown .ui-menu-item > a": function (e) {
            e.preventDefault()
        }, "click .ui-state-disabled > a": function (e) {
            e.preventDefault()
        }, "click .ui-menu-item:has(a)": function (i) {
            var n = e(i.target).closest(".ui-menu-item");
            !t && n.not(".ui-state-disabled").length && (t = !0, this.select(i), n.has(".ui-menu").length ? this.expand(i) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
        }, "mouseenter .ui-menu-item": function (t) {
            var i = e(t.currentTarget);
            i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (e, t) {
            var i = this.active || this.element.children(".ui-menu-item").eq(0);
            t || this.focus(e, i)
        }, blur: function (t) {
            this._delay(function () {
                e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
            })
        }, keydown: "_keydown"}), this.refresh(), this._on(this.document, {click: function (i) {
            e(i.target).closest(".ui-menu").length || this.collapseAll(i), t = !1
        }})
    }, _destroy: function () {
        this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
            var t = e(this);
            t.data("ui-menu-submenu-carat") && t.remove()
        }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
    }, _keydown: function (t) {
        function i(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        var n, s, a, r, o, l = !0;
        switch (t.keyCode) {
            case e.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case e.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case e.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case e.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case e.ui.keyCode.UP:
                this.previous(t);
                break;
            case e.ui.keyCode.DOWN:
                this.next(t);
                break;
            case e.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case e.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case e.ui.keyCode.ENTER:
            case e.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case e.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                l = !1, s = this.previousFilter || "", a = String.fromCharCode(t.keyCode), r = !1, clearTimeout(this.filterTimer), a === s ? r = !0 : a = s + a, o = new RegExp("^" + i(a), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return o.test(e(this).children("a").text())
                }), n = r && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n, n.length || (a = String.fromCharCode(t.keyCode), o = new RegExp("^" + i(a), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return o.test(e(this).children("a").text())
                })), n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function () {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
        }
        l && t.preventDefault()
    }, _activate: function (e) {
        this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
    }, refresh: function () {
        var t, i = this.options.icons.submenu, n = this.element.find(this.options.menus);
        n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role: this.options.role, "aria-hidden": "true", "aria-expanded": "false"}).each(function () {
            var t = e(this), n = t.prev("a"), s = e("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
            n.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", n.attr("id"))
        }), t = n.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex: -1, role: this._itemRole()}), t.children(":not(.ui-menu-item)").each(function () {
            var t = e(this);
            /[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
        }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
    }, _itemRole: function () {
        return{menu: "menuitem", listbox: "option"}[this.options.role]
    }, focus: function (e, t) {
        var i, n;
        this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
            this._close()
        }, this.delay), i = t.children(".ui-menu"), i.length && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {item: t})
    }, _scrollIntoView: function (t) {
        var i, n, s, a, r, o;
        this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - i - n, a = this.activeMenu.scrollTop(), r = this.activeMenu.height(), o = t.height(), 0 > s ? this.activeMenu.scrollTop(a + s) : s + o > r && this.activeMenu.scrollTop(a + s - r + o))
    }, blur: function (e, t) {
        t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {item: this.active}))
    }, _startOpening: function (e) {
        clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
            this._close(), this._open(e)
        }, this.delay))
    }, _open: function (t) {
        var i = e.extend({of: this.active}, this.options.position);
        clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
    }, collapseAll: function (t, i) {
        clearTimeout(this.timer), this.timer = this._delay(function () {
            var n = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
            n.length || (n = this.element), this._close(n), this.blur(t), this.activeMenu = n
        }, this.delay)
    }, _close: function (e) {
        e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
    }, collapse: function (e) {
        var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        t && t.length && (this._close(), this.focus(e, t))
    }, expand: function (e) {
        var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
        t && t.length && (this._open(t.parent()), this._delay(function () {
            this.focus(e, t)
        }))
    }, next: function (e) {
        this._move("next", "first", e)
    }, previous: function (e) {
        this._move("prev", "last", e)
    }, isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length
    }, isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length
    }, _move: function (e, t, i) {
        var n;
        this.active && (n = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[t]()), this.focus(i, n)
    }, nextPage: function (t) {
        var i, n, s;
        return this.active ? (this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
            return i = e(this), i.offset().top - n - s < 0
        }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
    }, previousPage: function (t) {
        var i, n, s;
        return this.active ? (this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
            return i = e(this), i.offset().top - n + s > 0
        }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())), void 0) : (this.next(t), void 0)
    }, _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight")
    }, select: function (t) {
        this.active = this.active || e(t.target).closest(".ui-menu-item");
        var i = {item: this.active};
        this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
    }})
}(jQuery), function (e, t) {
    function i(e, t, i) {
        return[parseInt(e[0], 10) * (d.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (d.test(e[1]) ? i / 100 : 1)]
    }

    function n(t, i) {
        return parseInt(e.css(t, i), 10) || 0
    }

    e.ui = e.ui || {};
    var s, a = Math.max, r = Math.abs, o = Math.round, l = /left|center|right/, c = /top|center|bottom/, h = /[\+\-]\d+%?/, u = /^\w+/, d = /%$/, p = e.fn.position;
    e.position = {scrollbarWidth: function () {
        if (s !== t)return s;
        var i, n, a = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), r = a.children()[0];
        return e("body").append(a), i = r.offsetWidth, a.css("overflow", "scroll"), n = r.offsetWidth, i === n && (n = a[0].clientWidth), a.remove(), s = i - n
    }, getScrollInfo: function (t) {
        var i = t.isWindow ? "" : t.element.css("overflow-x"), n = t.isWindow ? "" : t.element.css("overflow-y"), s = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth, a = "scroll" === n || "auto" === n && t.height < t.element[0].scrollHeight;
        return{width: s ? e.position.scrollbarWidth() : 0, height: a ? e.position.scrollbarWidth() : 0}
    }, getWithinInfo: function (t) {
        var i = e(t || window), n = e.isWindow(i[0]);
        return{element: i, isWindow: n, offset: i.offset() || {left: 0, top: 0}, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: n ? i.width() : i.outerWidth(), height: n ? i.height() : i.outerHeight()}
    }}, e.fn.position = function (t) {
        if (!t || !t.of)return p.apply(this, arguments);
        t = e.extend({}, t);
        var s, d, f, g, m, v = e(t.of), _ = e.position.getWithinInfo(t.within), b = e.position.getScrollInfo(_), y = v[0], x = (t.collision || "flip").split(" "), w = {};
        return 9 === y.nodeType ? (d = v.width(), f = v.height(), g = {top: 0, left: 0}) : e.isWindow(y) ? (d = v.width(), f = v.height(), g = {top: v.scrollTop(), left: v.scrollLeft()}) : y.preventDefault ? (t.at = "left top", d = f = 0, g = {top: y.pageY, left: y.pageX}) : (d = v.outerWidth(), f = v.outerHeight(), g = v.offset()), m = e.extend({}, g), e.each(["my", "at"], function () {
            var e, i, n = (t[this] || "").split(" ");
            1 === n.length && (n = l.test(n[0]) ? n.concat(["center"]) : c.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = l.test(n[0]) ? n[0] : "center", n[1] = c.test(n[1]) ? n[1] : "center", e = h.exec(n[0]), i = h.exec(n[1]), w[this] = [e ? e[0] : 0, i ? i[0] : 0], t[this] = [u.exec(n[0])[0], u.exec(n[1])[0]]
        }), 1 === x.length && (x[1] = x[0]), "right" === t.at[0] ? m.left += d : "center" === t.at[0] && (m.left += d / 2), "bottom" === t.at[1] ? m.top += f : "center" === t.at[1] && (m.top += f / 2), s = i(w.at, d, f), m.left += s[0], m.top += s[1], this.each(function () {
            var l, c, h = e(this), u = h.outerWidth(), p = h.outerHeight(), y = n(this, "marginLeft"), k = n(this, "marginTop"), C = u + y + n(this, "marginRight") + b.width, j = p + k + n(this, "marginBottom") + b.height, S = e.extend({}, m), T = i(w.my, h.outerWidth(), h.outerHeight());
            "right" === t.my[0] ? S.left -= u : "center" === t.my[0] && (S.left -= u / 2), "bottom" === t.my[1] ? S.top -= p : "center" === t.my[1] && (S.top -= p / 2), S.left += T[0], S.top += T[1], e.support.offsetFractions || (S.left = o(S.left), S.top = o(S.top)), l = {marginLeft: y, marginTop: k}, e.each(["left", "top"], function (i, n) {
                e.ui.position[x[i]] && e.ui.position[x[i]][n](S, {targetWidth: d, targetHeight: f, elemWidth: u, elemHeight: p, collisionPosition: l, collisionWidth: C, collisionHeight: j, offset: [s[0] + T[0], s[1] + T[1]], my: t.my, at: t.at, within: _, elem: h})
            }), e.fn.bgiframe && h.bgiframe(), t.using && (c = function (e) {
                var i = g.left - S.left, n = i + d - u, s = g.top - S.top, o = s + f - p, l = {target: {element: v, left: g.left, top: g.top, width: d, height: f}, element: {element: h, left: S.left, top: S.top, width: u, height: p}, horizontal: 0 > n ? "left" : i > 0 ? "right" : "center", vertical: 0 > o ? "top" : s > 0 ? "bottom" : "middle"};
                u > d && r(i + n) < d && (l.horizontal = "center"), p > f && r(s + o) < f && (l.vertical = "middle"), l.important = a(r(i), r(n)) > a(r(s), r(o)) ? "horizontal" : "vertical", t.using.call(this, e, l)
            }), h.offset(e.extend(S, {using: c}))
        })
    }, e.ui.position = {fit: {left: function (e, t) {
        var i, n = t.within, s = n.isWindow ? n.scrollLeft : n.offset.left, r = n.width, o = e.left - t.collisionPosition.marginLeft, l = s - o, c = o + t.collisionWidth - r - s;
        t.collisionWidth > r ? l > 0 && 0 >= c ? (i = e.left + l + t.collisionWidth - r - s, e.left += l - i) : e.left = c > 0 && 0 >= l ? s : l > c ? s + r - t.collisionWidth : s : l > 0 ? e.left += l : c > 0 ? e.left -= c : e.left = a(e.left - o, e.left)
    }, top: function (e, t) {
        var i, n = t.within, s = n.isWindow ? n.scrollTop : n.offset.top, r = t.within.height, o = e.top - t.collisionPosition.marginTop, l = s - o, c = o + t.collisionHeight - r - s;
        t.collisionHeight > r ? l > 0 && 0 >= c ? (i = e.top + l + t.collisionHeight - r - s, e.top += l - i) : e.top = c > 0 && 0 >= l ? s : l > c ? s + r - t.collisionHeight : s : l > 0 ? e.top += l : c > 0 ? e.top -= c : e.top = a(e.top - o, e.top)
    }}, flip: {left: function (e, t) {
        var i, n, s = t.within, a = s.offset.left + s.scrollLeft, o = s.width, l = s.isWindow ? s.scrollLeft : s.offset.left, c = e.left - t.collisionPosition.marginLeft, h = c - l, u = c + t.collisionWidth - o - l, d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, f = -2 * t.offset[0];
        0 > h ? (i = e.left + d + p + f + t.collisionWidth - o - a, (0 > i || i < r(h)) && (e.left += d + p + f)) : u > 0 && (n = e.left - t.collisionPosition.marginLeft + d + p + f - l, (n > 0 || r(n) < u) && (e.left += d + p + f))
    }, top: function (e, t) {
        var i, n, s = t.within, a = s.offset.top + s.scrollTop, o = s.height, l = s.isWindow ? s.scrollTop : s.offset.top, c = e.top - t.collisionPosition.marginTop, h = c - l, u = c + t.collisionHeight - o - l, d = "top" === t.my[1], p = d ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, g = -2 * t.offset[1];
        0 > h ? (n = e.top + p + f + g + t.collisionHeight - o - a, e.top + p + f + g > h && (0 > n || n < r(h)) && (e.top += p + f + g)) : u > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + g - l, e.top + p + f + g > u && (i > 0 || r(i) < u) && (e.top += p + f + g))
    }}, flipfit: {left: function () {
        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
    }, top: function () {
        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
    }}}, function () {
        var t, i, n, s, a, r = document.getElementsByTagName("body")[0], o = document.createElement("div");
        t = document.createElement(r ? "div" : "body"), n = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"}, r && e.extend(n, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (a in n)t.style[a] = n[a];
        t.appendChild(o), i = r || document.documentElement, i.insertBefore(t, i.firstChild), o.style.cssText = "position: absolute; left: 10.7432222px;", s = e(o).offset().left, e.support.offsetFractions = s > 10 && 11 > s, t.innerHTML = "", i.removeChild(t)
    }(), e.uiBackCompat !== !1 && function (e) {
        var i = e.fn.position;
        e.fn.position = function (n) {
            if (!n || !n.offset)return i.call(this, n);
            var s = n.offset.split(" "), a = n.at.split(" ");
            return 1 === s.length && (s[1] = s[0]), /^\d/.test(s[0]) && (s[0] = "+" + s[0]), /^\d/.test(s[1]) && (s[1] = "+" + s[1]), 1 === a.length && (/left|center|right/.test(a[0]) ? a[1] = "center" : (a[1] = a[0], a[0] = "center")), i.call(this, e.extend(n, {at: a[0] + s[0] + " " + a[1] + s[1], offset: t}))
        }
    }(jQuery)
}(jQuery), function (e, t) {
    e.widget("ui.progressbar", {version: "1.9.2", options: {value: 0, max: 100}, min: 0, _create: function () {
        this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role: "progressbar", "aria-valuemin": this.min, "aria-valuemax": this.options.max, "aria-valuenow": this._value()}), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
    }, _destroy: function () {
        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
    }, value: function (e) {
        return e === t ? this._value() : (this._setOption("value", e), this)
    }, _setOption: function (e, t) {
        "value" === e && (this.options.value = t, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(e, t)
    }, _value: function () {
        var e = this.options.value;
        return"number" != typeof e && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
    }, _percentage: function () {
        return 100 * this._value() / this.options.max
    }, _refreshValue: function () {
        var e = this.value(), t = this._percentage();
        this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
    }})
}(jQuery), function (e) {
    var t = 5;
    e.widget("ui.slider", e.ui.mouse, {version: "1.9.2", widgetEventPrefix: "slide", options: {animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null}, _create: function () {
        var i, n, s = this.options, a = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), r = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = [];
        for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (s.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), s.range && (s.range === !0 && (s.values || (s.values = [this._valueMin(), this._valueMin()]), s.values.length && 2 !== s.values.length && (s.values = [s.values[0], s.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === s.range || "max" === s.range ? " ui-slider-range-" + s.range : ""))), n = s.values && s.values.length || 1, i = a.length; n > i; i++)o.push(r);
        this.handles = a.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) {
            e.preventDefault()
        }).mouseenter(function () {
            s.disabled || e(this).addClass("ui-state-hover")
        }).mouseleave(function () {
            e(this).removeClass("ui-state-hover")
        }).focus(function () {
            s.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
        }).blur(function () {
            e(this).removeClass("ui-state-focus")
        }), this.handles.each(function (t) {
            e(this).data("ui-slider-handle-index", t)
        }), this._on(this.handles, {keydown: function (i) {
            var n, s, a, r, o = e(i.target).data("ui-slider-handle-index");
            switch (i.keyCode) {
                case e.ui.keyCode.HOME:
                case e.ui.keyCode.END:
                case e.ui.keyCode.PAGE_UP:
                case e.ui.keyCode.PAGE_DOWN:
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, e(i.target).addClass("ui-state-active"), n = this._start(i, o), n === !1))return
            }
            switch (r = this.options.step, s = a = this.options.values && this.options.values.length ? this.values(o) : this.value(), i.keyCode) {
                case e.ui.keyCode.HOME:
                    a = this._valueMin();
                    break;
                case e.ui.keyCode.END:
                    a = this._valueMax();
                    break;
                case e.ui.keyCode.PAGE_UP:
                    a = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / t);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    a = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / t);
                    break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.RIGHT:
                    if (s === this._valueMax())return;
                    a = this._trimAlignValue(s + r);
                    break;
                case e.ui.keyCode.DOWN:
                case e.ui.keyCode.LEFT:
                    if (s === this._valueMin())return;
                    a = this._trimAlignValue(s - r)
            }
            this._slide(i, o, a)
        }, keyup: function (t) {
            var i = e(t.target).data("ui-slider-handle-index");
            this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
        }}), this._refreshValue(), this._animateOff = !1
    }, _destroy: function () {
        this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
    }, _mouseCapture: function (t) {
        var i, n, s, a, r, o, l, c, h = this, u = this.options;
        return u.disabled ? !1 : (this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()}, this.elementOffset = this.element.offset(), i = {x: t.pageX, y: t.pageY}, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
            var i = Math.abs(n - h.values(t));
            s > i && (s = i, a = e(this), r = t)
        }), u.range === !0 && this.values(1) === u.min && (r += 1, a = e(this.handles[r])), o = this._start(t, r), o === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, a.addClass("ui-state-active").focus(), l = a.offset(), c = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = c ? {left: 0, top: 0} : {left: t.pageX - l.left - a.width() / 2, top: t.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || this._slide(t, r, n), this._animateOff = !0, !0))
    }, _mouseStart: function () {
        return!0
    }, _mouseDrag: function (e) {
        var t = {x: e.pageX, y: e.pageY}, i = this._normValueFromMouse(t);
        return this._slide(e, this._handleIndex, i), !1
    }, _mouseStop: function (e) {
        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    }, _detectOrientation: function () {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    }, _normValueFromMouse: function (e) {
        var t, i, n, s, a;
        return"horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / t, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), a = this._valueMin() + n * s, this._trimAlignValue(a)
    }, _start: function (e, t) {
        var i = {handle: this.handles[t], value: this.value()};
        return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
    }, _slide: function (e, t, i) {
        var n, s, a;
        this.options.values && this.options.values.length ? (n = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > n || 1 === t && n > i) && (i = n), i !== this.values(t) && (s = this.values(), s[t] = i, a = this._trigger("slide", e, {handle: this.handles[t], value: i, values: s}), n = this.values(t ? 0 : 1), a !== !1 && this.values(t, i, !0))) : i !== this.value() && (a = this._trigger("slide", e, {handle: this.handles[t], value: i}), a !== !1 && this.value(i))
    }, _stop: function (e, t) {
        var i = {handle: this.handles[t], value: this.value()};
        this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
    }, _change: function (e, t) {
        if (!this._keySliding && !this._mouseSliding) {
            var i = {handle: this.handles[t], value: this.value()};
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("change", e, i)
        }
    }, value: function (e) {
        return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
    }, values: function (t, i) {
        var n, s, a;
        if (arguments.length > 1)return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
        if (!arguments.length)return this._values();
        if (!e.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(t) : this.value();
        for (n = this.options.values, s = arguments[0], a = 0; a < n.length; a += 1)n[a] = this._trimAlignValue(s[a]), this._change(null, a);
        this._refreshValue()
    }, _setOption: function (t, i) {
        var n, s = 0;
        switch (e.isArray(this.options.values) && (s = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
            case"disabled":
                i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                break;
            case"orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case"value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case"values":
                for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1)this._change(null, n);
                this._animateOff = !1;
                break;
            case"min":
            case"max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1
        }
    }, _value: function () {
        var e = this.options.value;
        return e = this._trimAlignValue(e)
    }, _values: function (e) {
        var t, i, n;
        if (arguments.length)return t = this.options.values[e], t = this._trimAlignValue(t);
        for (i = this.options.values.slice(), n = 0; n < i.length; n += 1)i[n] = this._trimAlignValue(i[n]);
        return i
    }, _trimAlignValue: function (e) {
        if (e <= this._valueMin())return this._valueMin();
        if (e >= this._valueMax())return this._valueMax();
        var t = this.options.step > 0 ? this.options.step : 1, i = (e - this._valueMin()) % t, n = e - i;
        return 2 * Math.abs(i) >= t && (n += i > 0 ? t : -t), parseFloat(n.toFixed(5))
    }, _valueMin: function () {
        return this.options.min
    }, _valueMax: function () {
        return this.options.max
    }, _refreshValue: function () {
        var t, i, n, s, a, r = this.options.range, o = this.options, l = this, c = this._animateOff ? !1 : o.animate, h = {};
        this.options.values && this.options.values.length ? this.handles.each(function (n) {
            i = 100 * ((l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin())), h["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[c ? "animate" : "css"](h, o.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({left: i + "%"}, o.animate), 1 === n && l.range[c ? "animate" : "css"]({width: i - t + "%"}, {queue: !1, duration: o.animate})) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({bottom: i + "%"}, o.animate), 1 === n && l.range[c ? "animate" : "css"]({height: i - t + "%"}, {queue: !1, duration: o.animate}))), t = i
        }) : (n = this.value(), s = this._valueMin(), a = this._valueMax(), i = a !== s ? 100 * ((n - s) / (a - s)) : 0, h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](h, o.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({width: i + "%"}, o.animate), "max" === r && "horizontal" === this.orientation && this.range[c ? "animate" : "css"]({width: 100 - i + "%"}, {queue: !1, duration: o.animate}), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({height: i + "%"}, o.animate), "max" === r && "vertical" === this.orientation && this.range[c ? "animate" : "css"]({height: 100 - i + "%"}, {queue: !1, duration: o.animate}))
    }})
}(jQuery), function (e) {
    function t(e) {
        return function () {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }

    e.widget("ui.spinner", {version: "1.9.2", defaultElement: "<input>", widgetEventPrefix: "spin", options: {culture: null, icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"}, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null}, _create: function () {
        this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {beforeunload: function () {
            this.element.removeAttr("autocomplete")
        }})
    }, _getCreateOptions: function () {
        var t = {}, i = this.element;
        return e.each(["min", "max", "step"], function (e, n) {
            var s = i.attr(n);
            void 0 !== s && s.length && (t[n] = s)
        }), t
    }, _events: {keydown: function (e) {
        this._start(e) && this._keydown(e) && e.preventDefault()
    }, keyup: "_stop", focus: function () {
        this.previous = this.element.val()
    }, blur: function (e) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0)
    }, mousewheel: function (e, t) {
        if (t) {
            if (!this.spinning && !this._start(e))return!1;
            this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(e)
            }, 100), e.preventDefault()
        }
    }, "mousedown .ui-spinner-button": function (t) {
        function i() {
            var e = this.element[0] === this.document[0].activeElement;
            e || (this.element.focus(), this.previous = n, this._delay(function () {
                this.previous = n
            }))
        }

        var n;
        n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur, i.call(this)
        }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
    }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) {
        return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0
    }, "mouseleave .ui-spinner-button": "_stop"}, _draw: function () {
        var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
    }, _keydown: function (t) {
        var i = this.options, n = e.ui.keyCode;
        switch (t.keyCode) {
            case n.UP:
                return this._repeat(null, 1, t), !0;
            case n.DOWN:
                return this._repeat(null, -1, t), !0;
            case n.PAGE_UP:
                return this._repeat(null, i.page, t), !0;
            case n.PAGE_DOWN:
                return this._repeat(null, -i.page, t), !0
        }
        return!1
    }, _uiSpinnerHtml: function () {
        return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
    }, _buttonHtml: function () {
        return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
    }, _start: function (e) {
        return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
    }, _repeat: function (e, t, i) {
        e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
            this._repeat(40, t, i)
        }, e), this._spin(t * this.options.step, i)
    }, _spin: function (e, t) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {value: i}) === !1 || (this._value(i), this.counter++)
    }, _increment: function (t) {
        var i = this.options.incremental;
        return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
    }, _precision: function () {
        var e = this._precisionOf(this.options.step);
        return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
    }, _precisionOf: function (e) {
        var t = e.toString(), i = t.indexOf(".");
        return-1 === i ? 0 : t.length - i - 1
    }, _adjustValue: function (e) {
        var t, i, n = this.options;
        return t = null !== n.min ? n.min : 0, i = e - t, i = Math.round(i / n.step) * n.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== n.max && e > n.max ? n.max : null !== n.min && e < n.min ? n.min : e
    }, _stop: function (e) {
        this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
    }, _setOption: function (e, t) {
        if ("culture" === e || "numberFormat" === e) {
            var i = this._parse(this.element.val());
            return this.options[e] = t, this.element.val(this._format(i)), void 0
        }
        ("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), this._super(e, t), "disabled" === e && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
    }, _setOptions: t(function (e) {
        this._super(e), this._value(this.element.val())
    }), _parse: function (e) {
        return"string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
    }, _format: function (e) {
        return"" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
    }, _refresh: function () {
        this.element.attr({"aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val())})
    }, _value: function (e, t) {
        var i;
        "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh()
    }, _destroy: function () {
        this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
    }, stepUp: t(function (e) {
        this._stepUp(e)
    }), _stepUp: function (e) {
        this._spin((e || 1) * this.options.step)
    }, stepDown: t(function (e) {
        this._stepDown(e)
    }), _stepDown: function (e) {
        this._spin((e || 1) * -this.options.step)
    }, pageUp: t(function (e) {
        this._stepUp((e || 1) * this.options.page)
    }), pageDown: t(function (e) {
        this._stepDown((e || 1) * this.options.page)
    }), value: function (e) {
        return arguments.length ? (t(this._value).call(this, e), void 0) : this._parse(this.element.val())
    }, widget: function () {
        return this.uiSpinner
    }})
}(jQuery), function (e, t) {
    function i() {
        return++s
    }

    function n(e) {
        return e.hash.length > 1 && e.href.replace(a, "") === location.href.replace(a, "").replace(/\s/g, "%20")
    }

    var s = 0, a = /#.*$/;
    e.widget("ui.tabs", {version: "1.9.2", delay: 300, options: {active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null}, _create: function () {
        var t = this, i = this.options, n = i.active, s = location.hash.substring(1);
        this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace,function (t) {
            e(this).is(".ui-state-disabled") && t.preventDefault()
        }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), null === n && (s && this.tabs.each(function (t, i) {
            return e(i).attr("aria-controls") === s ? (n = t, !1) : void 0
        }), null === n && (n = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === n || -1 === n) && (n = this.tabs.length ? 0 : !1)), n !== !1 && (n = this.tabs.index(this.tabs.eq(n)), -1 === n && (n = i.collapsible ? !1 : 0)), i.active = n, !i.collapsible && i.active === !1 && this.anchors.length && (i.active = 0), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
            return t.tabs.index(e)
        }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(this.options.active) : e(), this._refresh(), this.active.length && this.load(i.active)
    }, _getCreateEventData: function () {
        return{tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e()}
    }, _tabKeydown: function (t) {
        var i = e(this.document[0].activeElement).closest("li"), n = this.tabs.index(i), s = !0;
        if (!this._handlePageNav(t)) {
            switch (t.keyCode) {
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                    n++;
                    break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.LEFT:
                    s = !1, n--;
                    break;
                case e.ui.keyCode.END:
                    n = this.anchors.length - 1;
                    break;
                case e.ui.keyCode.HOME:
                    n = 0;
                    break;
                case e.ui.keyCode.SPACE:
                    return t.preventDefault(), clearTimeout(this.activating), this._activate(n), void 0;
                case e.ui.keyCode.ENTER:
                    return t.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), void 0;
                default:
                    return
            }
            t.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), t.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                this.option("active", n)
            }, this.delay))
        }
    }, _panelKeydown: function (t) {
        this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
    }, _handlePageNav: function (t) {
        return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
    }, _findNextTab: function (t, i) {
        function n() {
            return t > s && (t = 0), 0 > t && (t = s), t
        }

        for (var s = this.tabs.length - 1; -1 !== e.inArray(n(), this.options.disabled);)t = i ? t + 1 : t - 1;
        return t
    }, _focusNextTab: function (e, t) {
        return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
    }, _setOption: function (e, t) {
        return"active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0)
    }, _tabId: function (e) {
        return e.attr("aria-controls") || "ui-tabs-" + i()
    }, _sanitizeSelector: function (e) {
        return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
    }, refresh: function () {
        var t = this.options, i = this.tablist.children(":has(a[href])");
        t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) {
            return i.index(e)
        }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
    }, _refresh: function () {
        this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({"aria-selected": "false", tabIndex: -1}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded": "false", "aria-hidden": "true"}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected": "true", tabIndex: 0}), this._getPanelForTab(this.active).show().attr({"aria-expanded": "true", "aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
    }, _processTabs: function () {
        var t = this;
        this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role: "tab", tabIndex: -1}), this.anchors = this.tabs.map(function () {
            return e("a", this)[0]
        }).addClass("ui-tabs-anchor").attr({role: "presentation", tabIndex: -1}), this.panels = e(), this.anchors.each(function (i, s) {
            var a, r, o, l = e(s).uniqueId().attr("id"), c = e(s).closest("li"), h = c.attr("aria-controls");
            n(s) ? (a = s.hash, r = t.element.find(t._sanitizeSelector(a))) : (o = t._tabId(c), a = "#" + o, r = t.element.find(a), r.length || (r = t._createPanel(o), r.insertAfter(t.panels[i - 1] || t.tablist)), r.attr("aria-live", "polite")), r.length && (t.panels = t.panels.add(r)), h && c.data("ui-tabs-aria-controls", h), c.attr({"aria-controls": a.substring(1), "aria-labelledby": l}), r.attr("aria-labelledby", l)
        }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
    }, _getList: function () {
        return this.element.find("ol,ul").eq(0)
    }, _createPanel: function (t) {
        return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
    }, _setupDisabled: function (t) {
        e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
        for (var i, n = 0; i = this.tabs[n]; n++)t === !0 || -1 !== e.inArray(n, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
        this.options.disabled = t
    }, _setupEvents: function (t) {
        var i = {click: function (e) {
            e.preventDefault()
        }};
        t && e.each(t.split(" "), function (e, t) {
            i[t] = "_eventHandler"
        }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
    }, _setupHeightStyle: function (t) {
        var i, n, s = this.element.parent();
        "fill" === t ? (e.support.minHeight || (n = s.css("overflow"), s.css("overflow", "hidden")), i = s.height(), this.element.siblings(":visible").each(function () {
            var t = e(this), n = t.css("position");
            "absolute" !== n && "fixed" !== n && (i -= t.outerHeight(!0))
        }), n && s.css("overflow", n), this.element.children().not(this.panels).each(function () {
            i -= e(this).outerHeight(!0)
        }), this.panels.each(function () {
            e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
        }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
            i = Math.max(i, e(this).height("").height())
        }).height(i))
    }, _eventHandler: function (t) {
        var i = this.options, n = this.active, s = e(t.currentTarget), a = s.closest("li"), r = a[0] === n[0], o = r && i.collapsible, l = o ? e() : this._getPanelForTab(a), c = n.length ? this._getPanelForTab(n) : e(), h = {oldTab: n, oldPanel: c, newTab: o ? e() : a, newPanel: l};
        t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || this._trigger("beforeActivate", t, h) === !1 || (i.active = o ? !1 : this.tabs.index(a), this.active = r ? e() : a, this.xhr && this.xhr.abort(), c.length || l.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(a), t), this._toggle(t, h))
    }, _toggle: function (t, i) {
        function n() {
            a.running = !1, a._trigger("activate", t, i)
        }

        function s() {
            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && a.options.show ? a._show(r, a.options.show, n) : (r.show(), n())
        }

        var a = this, r = i.newPanel, o = i.oldPanel;
        this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, function () {
            i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s()
        }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o.hide(), s()), o.attr({"aria-expanded": "false", "aria-hidden": "true"}), i.oldTab.attr("aria-selected", "false"), r.length && o.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function () {
            return 0 === e(this).attr("tabIndex")
        }).attr("tabIndex", -1), r.attr({"aria-expanded": "true", "aria-hidden": "false"}), i.newTab.attr({"aria-selected": "true", tabIndex: 0})
    }, _activate: function (t) {
        var i, n = this._findActive(t);
        n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({target: i, currentTarget: i, preventDefault: e.noop}))
    }, _findActive: function (t) {
        return t === !1 ? e() : this.tabs.eq(t)
    }, _getIndex: function (e) {
        return"string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
    }, _destroy: function () {
        this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function () {
            e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
        }), this.tabs.each(function () {
            var t = e(this), i = t.data("ui-tabs-aria-controls");
            i ? t.attr("aria-controls", i) : t.removeAttr("aria-controls")
        }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
    }, enable: function (i) {
        var n = this.options.disabled;
        n !== !1 && (i === t ? n = !1 : (i = this._getIndex(i), n = e.isArray(n) ? e.map(n, function (e) {
            return e !== i ? e : null
        }) : e.map(this.tabs, function (e, t) {
            return t !== i ? t : null
        })), this._setupDisabled(n))
    }, disable: function (i) {
        var n = this.options.disabled;
        if (n !== !0) {
            if (i === t)n = !0; else {
                if (i = this._getIndex(i), -1 !== e.inArray(i, n))return;
                n = e.isArray(n) ? e.merge([i], n).sort() : [i]
            }
            this._setupDisabled(n)
        }
    }, load: function (t, i) {
        t = this._getIndex(t);
        var s = this, a = this.tabs.eq(t), r = a.find(".ui-tabs-anchor"), o = this._getPanelForTab(a), l = {tab: a, panel: o};
        n(r[0]) || (this.xhr = e.ajax(this._ajaxSettings(r, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.success(function (e) {
            setTimeout(function () {
                o.html(e), s._trigger("load", i, l)
            }, 1)
        }).complete(function (e, t) {
            setTimeout(function () {
                "abort" === t && s.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr
            }, 1)
        })))
    }, _ajaxSettings: function (t, i, n) {
        var s = this;
        return{url: t.attr("href"), beforeSend: function (t, a) {
            return s._trigger("beforeLoad", i, e.extend({jqXHR: t, ajaxSettings: a}, n))
        }}
    }, _getPanelForTab: function (t) {
        var i = e(t).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + i))
    }}), e.uiBackCompat !== !1 && (e.ui.tabs.prototype._ui = function (e, t) {
        return{tab: e, panel: t, index: this.anchors.index(e)}
    }, e.widget("ui.tabs", e.ui.tabs, {url: function (e, t) {
        this.anchors.eq(e).attr("href", t)
    }}), e.widget("ui.tabs", e.ui.tabs, {options: {ajaxOptions: null, cache: !1}, _create: function () {
        this._super();
        var t = this;
        this._on({tabsbeforeload: function (i, n) {
            return e.data(n.tab[0], "cache.tabs") ? (i.preventDefault(), void 0) : (n.jqXHR.success(function () {
                t.options.cache && e.data(n.tab[0], "cache.tabs", !0)
            }), void 0)
        }})
    }, _ajaxSettings: function (t, i, n) {
        var s = this.options.ajaxOptions;
        return e.extend({}, s, {error: function (e, t) {
            try {
                s.error(e, t, n.tab.closest("li").index(), n.tab[0])
            } catch (i) {
            }
        }}, this._superApply(arguments))
    }, _setOption: function (e, t) {
        "cache" === e && t === !1 && this.anchors.removeData("cache.tabs"), this._super(e, t)
    }, _destroy: function () {
        this.anchors.removeData("cache.tabs"), this._super()
    }, url: function (e) {
        this.anchors.eq(e).removeData("cache.tabs"), this._superApply(arguments)
    }}), e.widget("ui.tabs", e.ui.tabs, {abort: function () {
        this.xhr && this.xhr.abort()
    }}), e.widget("ui.tabs", e.ui.tabs, {options: {spinner: "<em>Loading&#8230;</em>"}, _create: function () {
        this._super(), this._on({tabsbeforeload: function (e, t) {
            if (e.target === this.element[0] && this.options.spinner) {
                var i = t.tab.find("span"), n = i.html();
                i.html(this.options.spinner), t.jqXHR.complete(function () {
                    i.html(n)
                })
            }
        }})
    }}), e.widget("ui.tabs", e.ui.tabs, {options: {enable: null, disable: null}, enable: function (t) {
        var i, n = this.options;
        (t && n.disabled === !0 || e.isArray(n.disabled) && -1 !== e.inArray(t, n.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t]))
    }, disable: function (t) {
        var i, n = this.options;
        (t && n.disabled === !1 || e.isArray(n.disabled) && -1 === e.inArray(t, n.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("disable", null, this._ui(this.anchors[t], this.panels[t]))
    }}), e.widget("ui.tabs", e.ui.tabs, {options: {add: null, remove: null, tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"}, add: function (i, n, s) {
        s === t && (s = this.anchors.length);
        var a, r, o = this.options, l = e(o.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, n)), c = i.indexOf("#") ? this._tabId(l) : i.replace("#", "");
        return l.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), l.attr("aria-controls", c), a = s >= this.tabs.length, r = this.element.find("#" + c), r.length || (r = this._createPanel(c), a ? s > 0 ? r.insertAfter(this.panels.eq(-1)) : r.appendTo(this.element) : r.insertBefore(this.panels[s])), r.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), a ? l.appendTo(this.tablist) : l.insertBefore(this.tabs[s]), o.disabled = e.map(o.disabled, function (e) {
            return e >= s ? ++e : e
        }), this.refresh(), 1 === this.tabs.length && o.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[s], this.panels[s])), this
    }, remove: function (t) {
        t = this._getIndex(t);
        var i = this.options, n = this.tabs.eq(t).remove(), s = this._getPanelForTab(n).remove();
        return n.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(t + (t + 1 < this.anchors.length ? 1 : -1)), i.disabled = e.map(e.grep(i.disabled, function (e) {
            return e !== t
        }), function (e) {
            return e >= t ? --e : e
        }), this.refresh(), this._trigger("remove", null, this._ui(n.find("a")[0], s[0])), this
    }}), e.widget("ui.tabs", e.ui.tabs, {length: function () {
        return this.anchors.length
    }}), e.widget("ui.tabs", e.ui.tabs, {options: {idPrefix: "ui-tabs-"}, _tabId: function (t) {
        var n = t.is("li") ? t.find("a[href]") : t;
        return n = n[0], e(n).closest("li").attr("aria-controls") || n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i()
    }}), e.widget("ui.tabs", e.ui.tabs, {options: {panelTemplate: "<div></div>"}, _createPanel: function (t) {
        return e(this.options.panelTemplate).attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
    }}), e.widget("ui.tabs", e.ui.tabs, {_create: function () {
        var e = this.options;
        null === e.active && e.selected !== t && (e.active = -1 === e.selected ? !1 : e.selected), this._super(), e.selected = e.active, e.selected === !1 && (e.selected = -1)
    }, _setOption: function (e, t) {
        if ("selected" !== e)return this._super(e, t);
        var i = this.options;
        this._super("active", -1 === t ? !1 : t), i.selected = i.active, i.selected === !1 && (i.selected = -1)
    }, _eventHandler: function () {
        this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1)
    }}), e.widget("ui.tabs", e.ui.tabs, {options: {show: null, select: null}, _create: function () {
        this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
    }, _trigger: function (e, t, i) {
        var n, s, a = this._superApply(arguments);
        return a ? ("beforeActivate" === e ? (n = i.newTab.length ? i.newTab : i.oldTab, s = i.newPanel.length ? i.newPanel : i.oldPanel, a = this._super("select", t, {tab: n.find(".ui-tabs-anchor")[0], panel: s[0], index: n.closest("li").index()})) : "activate" === e && i.newTab.length && (a = this._super("show", t, {tab: i.newTab.find(".ui-tabs-anchor")[0], panel: i.newPanel[0], index: i.newTab.closest("li").index()})), a) : !1
    }}), e.widget("ui.tabs", e.ui.tabs, {select: function (e) {
        if (e = this._getIndex(e), -1 === e) {
            if (!this.options.collapsible || -1 === this.options.selected)return;
            e = this.options.selected
        }
        this.anchors.eq(e).trigger(this.options.event + this.eventNamespace)
    }}), function () {
        var t = 0;
        e.widget("ui.tabs", e.ui.tabs, {options: {cookie: null}, _create: function () {
            var e, t = this.options;
            null == t.active && t.cookie && (e = parseInt(this._cookie(), 10), -1 === e && (e = !1), t.active = e), this._super()
        }, _cookie: function (i) {
            var n = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++t)];
            return arguments.length && (n.push(i === !1 ? -1 : i), n.push(this.options.cookie)), e.cookie.apply(null, n)
        }, _refresh: function () {
            this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
        }, _eventHandler: function () {
            this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
        }, _destroy: function () {
            this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
        }})
    }(), e.widget("ui.tabs", e.ui.tabs, {_trigger: function (t, i, n) {
        var s = e.extend({}, n);
        return"load" === t && (s.panel = s.panel[0], s.tab = s.tab.find(".ui-tabs-anchor")[0]), this._super(t, i, s)
    }}), e.widget("ui.tabs", e.ui.tabs, {options: {fx: null}, _getFx: function () {
        var t, i, n = this.options.fx;
        return n && (e.isArray(n) ? (t = n[0], i = n[1]) : t = i = n), n ? {show: i, hide: t} : null
    }, _toggle: function (e, t) {
        function i() {
            s.running = !1, s._trigger("activate", e, t)
        }

        function n() {
            t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && o.show ? a.animate(o.show, o.show.duration, function () {
                i()
            }) : (a.show(), i())
        }

        var s = this, a = t.newPanel, r = t.oldPanel, o = this._getFx();
        return o ? (s.running = !0, r.length && o.hide ? r.animate(o.hide, o.hide.duration, function () {
            t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
        }) : (t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), void 0) : this._super(e, t)
    }}))
}(jQuery), function (e) {
    function t(t, i) {
        var n = (t.attr("aria-describedby") || "").split(/\s+/);
        n.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(n.join(" ")))
    }

    function i(t) {
        var i = t.data("ui-tooltip-id"), n = (t.attr("aria-describedby") || "").split(/\s+/), s = e.inArray(i, n);
        -1 !== s && n.splice(s, 1), t.removeData("ui-tooltip-id"), n = e.trim(n.join(" ")), n ? t.attr("aria-describedby", n) : t.removeAttr("aria-describedby")
    }

    var n = 0;
    e.widget("ui.tooltip", {version: "1.9.2", options: {content: function () {
        return e(this).attr("title")
    }, hide: !0, items: "[title]:not([disabled])", position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"}, show: !0, tooltipClass: null, track: !1, close: null, open: null}, _create: function () {
        this._on({mouseover: "open", focusin: "open"}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
    }, _setOption: function (t, i) {
        var n = this;
        return"disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && e.each(this.tooltips, function (e, t) {
            n._updateContent(t)
        }), void 0)
    }, _disable: function () {
        var t = this;
        e.each(this.tooltips, function (i, n) {
            var s = e.Event("blur");
            s.target = s.currentTarget = n[0], t.close(s, !0)
        }), this.element.find(this.options.items).andSelf().each(function () {
            var t = e(this);
            t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
        })
    }, _enable: function () {
        this.element.find(this.options.items).andSelf().each(function () {
            var t = e(this);
            t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
        })
    }, open: function (t) {
        var i = this, n = e(t ? t.target : this.element).closest(this.options.items);
        n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), t && "mouseover" === t.type && n.parents().each(function () {
            var t, n = e(this);
            n.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {element: this, title: n.attr("title")}, n.attr("title", ""))
        }), this._updateContent(n, t))
    }, _updateContent: function (e, t) {
        var i, n = this.options.content, s = this, a = t ? t.type : null;
        return"string" == typeof n ? this._open(t, e, n) : (i = n.call(e[0], function (i) {
            e.data("ui-tooltip-open") && s._delay(function () {
                t && (t.type = a), this._open(t, e, i)
            })
        }), i && this._open(t, e, i), void 0)
    }, _open: function (i, n, s) {
        function a(e) {
            c.of = e, r.is(":hidden") || r.position(c)
        }

        var r, o, l, c = e.extend({}, this.options.position);
        if (s) {
            if (r = this._find(n), r.length)return r.find(".ui-tooltip-content").html(s), void 0;
            n.is("[title]") && (i && "mouseover" === i.type ? n.attr("title", "") : n.removeAttr("title")), r = this._tooltip(n), t(n, r.attr("id")), r.find(".ui-tooltip-content").html(s), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {mousemove: a}), a(i)) : r.position(e.extend({of: n}, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.show && this.options.show.delay && (l = setInterval(function () {
                r.is(":visible") && (a(c.of), clearInterval(l))
            }, e.fx.interval)), this._trigger("open", i, {tooltip: r}), o = {keyup: function (t) {
                if (t.keyCode === e.ui.keyCode.ESCAPE) {
                    var i = e.Event(t);
                    i.currentTarget = n[0], this.close(i, !0)
                }
            }, remove: function () {
                this._removeTooltip(r)
            }}, i && "mouseover" !== i.type || (o.mouseleave = "close"), i && "focusin" !== i.type || (o.focusout = "close"), this._on(!0, n, o)
        }
    }, close: function (t) {
        var n = this, s = e(t ? t.currentTarget : this.element), a = this._find(s);
        this.closing || (s.data("ui-tooltip-title") && s.attr("title", s.data("ui-tooltip-title")), i(s), a.stop(!0), this._hide(a, this.options.hide, function () {
            n._removeTooltip(e(this))
        }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, i) {
            e(i.element).attr("title", i.title), delete n.parents[t]
        }), this.closing = !0, this._trigger("close", t, {tooltip: a}), this.closing = !1)
    }, _tooltip: function (t) {
        var i = "ui-tooltip-" + n++, s = e("<div>").attr({id: i, role: "tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
        return e("<div>").addClass("ui-tooltip-content").appendTo(s), s.appendTo(this.document[0].body), e.fn.bgiframe && s.bgiframe(), this.tooltips[i] = t, s
    }, _find: function (t) {
        var i = t.data("ui-tooltip-id");
        return i ? e("#" + i) : e()
    }, _removeTooltip: function (e) {
        e.remove(), delete this.tooltips[e.attr("id")]
    }, _destroy: function () {
        var t = this;
        e.each(this.tooltips, function (i, n) {
            var s = e.Event("blur");
            s.target = s.currentTarget = n[0], t.close(s, !0), e("#" + i).remove(), n.data("ui-tooltip-title") && (n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
        })
    }})
}(jQuery), window.Modernizr = function (e, t, i) {
    function n(e) {
        f.cssText = e
    }

    function s(e, t) {
        return typeof e === t
    }

    var a, r, o, l = "2.6.2", c = {}, h = !0, u = t.documentElement, d = "modernizr", p = t.createElement(d), f = p.style, g = ({}.toString, {}), m = [], v = m.slice, _ = {}.hasOwnProperty;
    o = s(_, "undefined") || s(_.call, "undefined") ? function (e, t) {
        return t in e && s(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return _.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t)throw new TypeError;
        var i = v.call(arguments, 1), n = function () {
            if (this instanceof n) {
                var s = function () {
                };
                s.prototype = t.prototype;
                var a = new s, r = t.apply(a, i.concat(v.call(arguments)));
                return Object(r) === r ? r : a
            }
            return t.apply(e, i.concat(v.call(arguments)))
        };
        return n
    });
    for (var b in g)o(g, b) && (r = b.toLowerCase(), c[r] = g[b](), m.push((c[r] ? "" : "no-") + r));
    return c.addTest = function (e, t) {
        if ("object" == typeof e)for (var n in e)o(e, n) && c.addTest(n, e[n]); else {
            if (e = e.toLowerCase(), c[e] !== i)return c;
            t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (u.className += " " + (t ? "" : "no-") + e), c[e] = t
        }
        return c
    }, n(""), p = a = null, function (e, t) {
        function i(e, t) {
            var i = e.createElement("p"), n = e.getElementsByTagName("head")[0] || e.documentElement;
            return i.innerHTML = "x<style>" + t + "</style>", n.insertBefore(i.lastChild, n.firstChild)
        }

        function n() {
            var e = v.elements;
            return"string" == typeof e ? e.split(" ") : e
        }

        function s(e) {
            var t = m[e[f]];
            return t || (t = {}, g++, e[f] = g, m[g] = t), t
        }

        function a(e, i, n) {
            if (i || (i = t), h)return i.createElement(e);
            n || (n = s(i));
            var a;
            return a = n.cache[e] ? n.cache[e].cloneNode() : p.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e), a.canHaveChildren && !d.test(e) ? n.frag.appendChild(a) : a
        }

        function r(e, i) {
            if (e || (e = t), h)return e.createDocumentFragment();
            i = i || s(e);
            for (var a = i.frag.cloneNode(), r = 0, o = n(), l = o.length; l > r; r++)a.createElement(o[r]);
            return a
        }

        function o(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (i) {
                return v.shivMethods ? a(i, e, t) : t.createElem(i)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(v, t.frag)
        }

        function l(e) {
            e || (e = t);
            var n = s(e);
            return v.shivCSS && !c && !n.hasCSS && (n.hasCSS = !!i(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), h || o(e, n), e
        }

        var c, h, u = e.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f = "_html5shiv", g = 0, m = {};
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden"in e, h = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return"undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (i) {
                c = !0, h = !0
            }
        }();
        var v = {elements: u.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: u.shivCSS !== !1, supportsUnknownElements: h, shivMethods: u.shivMethods !== !1, type: "default", shivDocument: l, createElement: a, createDocumentFragment: r};
        e.html5 = v, l(t)
    }(this, t), c._version = l, u.className = u.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + m.join(" ") : ""), c
}(this, this.document), function (e, t, i) {
    function n(e) {
        return"[object Function]" == m.call(e)
    }

    function s(e) {
        return"string" == typeof e
    }

    function a() {
    }

    function r(e) {
        return!e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function o() {
        var e = v.shift();
        _ = 1, e ? e.t ? f(function () {
            ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), o()) : _ = 0
    }

    function l(e, i, n, s, a, l, c) {
        function h(t) {
            if (!p && r(u.readyState) && (b.r = p = 1, !_ && o(), u.onload = u.onreadystatechange = null, t)) {
                "img" != e && f(function () {
                    x.removeChild(u)
                }, 50);
                for (var n in S[i])S[i].hasOwnProperty(n) && S[i][n].onload()
            }
        }

        var c = c || d.errorTimeout, u = t.createElement(e), p = 0, m = 0, b = {t: n, s: i, e: a, a: l, x: c};
        1 === S[i] && (m = 1, S[i] = []), "object" == e ? u.data = i : (u.src = i, u.type = e), u.width = u.height = "0", u.onerror = u.onload = u.onreadystatechange = function () {
            h.call(this, m)
        }, v.splice(s, 0, b), "img" != e && (m || 2 === S[i] ? (x.insertBefore(u, y ? null : g), f(h, c)) : S[i].push(u))
    }

    function c(e, t, i, n, a) {
        return _ = 0, t = t || "j", s(e) ? l("c" == t ? k : w, e, t, this.i++, i, n, a) : (v.splice(this.i++, 0, e), 1 == v.length && o()), this
    }

    function h() {
        var e = d;
        return e.loader = {load: c, i: 0}, e
    }

    var u, d, p = t.documentElement, f = e.setTimeout, g = t.getElementsByTagName("script")[0], m = {}.toString, v = [], _ = 0, b = "MozAppearance"in p.style, y = b && !!t.createRange().compareNode, x = y ? p : g.parentNode, p = e.opera && "[object Opera]" == m.call(e.opera), p = !!t.attachEvent && !p, w = b ? "object" : p ? "script" : "img", k = p ? "script" : w, C = Array.isArray || function (e) {
        return"[object Array]" == m.call(e)
    }, j = [], S = {}, T = {timeout: function (e, t) {
        return t.length && (e.timeout = t[0]), e
    }};
    d = function (e) {
        function t(e) {
            var t, i, n, e = e.split("!"), s = j.length, a = e.pop(), r = e.length, a = {url: a, origUrl: a, prefixes: e};
            for (i = 0; r > i; i++)n = e[i].split("="), (t = T[n.shift()]) && (a = t(a, n));
            for (i = 0; s > i; i++)a = j[i](a);
            return a
        }

        function r(e, s, a, r, o) {
            var l = t(e), c = l.autoCallback;
            l.url.split(".").pop().split("?").shift(), l.bypass || (s && (s = n(s) ? s : s[e] || s[r] || s[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, s, a, r, o) : (S[l.url] ? l.noexec = !0 : S[l.url] = 1, a.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(s) || n(c)) && a.load(function () {
                h(), s && s(l.origUrl, o, r), c && c(l.origUrl, o, r), S[l.url] = 2
            })))
        }

        function o(e, t) {
            function i(e, i) {
                if (e) {
                    if (s(e))i || (u = function () {
                        var e = [].slice.call(arguments);
                        d.apply(this, e), p()
                    }), r(e, u, t, 0, c); else if (Object(e) === e)for (l in o = function () {
                        var t, i = 0;
                        for (t in e)e.hasOwnProperty(t) && i++;
                        return i
                    }(), e)e.hasOwnProperty(l) && (!i && !--o && (n(u) ? u = function () {
                        var e = [].slice.call(arguments);
                        d.apply(this, e), p()
                    } : u[l] = function (e) {
                        return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), p()
                        }
                    }(d[l])), r(e[l], u, t, l, c))
                } else!i && p()
            }

            var o, l, c = !!e.test, h = e.load || e.both, u = e.callback || a, d = u, p = e.complete || a;
            i(c ? e.yep : e.nope, !!h), h && i(h)
        }

        var l, c, u = this.yepnope.loader;
        if (s(e))r(e, 0, u, 0); else if (C(e))for (l = 0; l < e.length; l++)c = e[l], s(c) ? r(c, 0, u, 0) : C(c) ? d(c) : Object(c) === c && o(c, u); else Object(e) === e && o(e, u)
    }, d.addPrefix = function (e, t) {
        T[e] = t
    }, d.addFilter = function (e) {
        j.push(e)
    }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", u = function () {
        t.removeEventListener("DOMContentLoaded", u, 0), t.readyState = "complete"
    }, 0)), e.yepnope = h(), e.yepnope.executeStack = o, e.yepnope.injectJs = function (e, i, n, s, l, c) {
        var h, u, p = t.createElement("script"), s = s || d.errorTimeout;
        p.src = e;
        for (u in n)p.setAttribute(u, n[u]);
        i = c ? o : i || a, p.onreadystatechange = p.onload = function () {
            !h && r(p.readyState) && (h = 1, i(), p.onload = p.onreadystatechange = null)
        }, f(function () {
            h || (h = 1, i(1))
        }, s), l ? p.onload() : g.parentNode.insertBefore(p, g)
    }, e.yepnope.injectCss = function (e, i, n, s, r, l) {
        var c, s = t.createElement("link"), i = l ? o : i || a;
        s.href = e, s.rel = "stylesheet", s.type = "text/css";
        for (c in n)s.setAttribute(c, n[c]);
        r || (g.parentNode.insertBefore(s, g), f(i, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, /**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
    jQuery.cookie = function (e, t, i) {
        if (arguments.length > 1 && "[object Object]" !== String(t)) {
            if (i = jQuery.extend({}, i), (null === t || void 0 === t) && (i.expires = -1), "number" == typeof i.expires) {
                var n = i.expires, s = i.expires = new Date;
                s.setDate(s.getDate() + n)
            }
            return t = String(t), document.cookie = [encodeURIComponent(e), "=", i.raw ? t : encodeURIComponent(t), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        i = t || {};
        var a, r = i.raw ? function (e) {
            return e
        } : decodeURIComponent;
        return(a = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? r(a[1]) : null
    }, function (e) {
    e.extend(e.fn, {delayedObserver: function (t, i, n) {
        return this.each(function () {
            var s = e(this), a = n || {};
            s.data("oldval", s.val()).data("delay", i || .5).data("condition", a.condition || function () {
                return e(this).data("oldval") == e(this).val()
            }).data("callback", t)[a.event || "keyup"](function () {
                s.data("condition").apply(s) || (s.data("timer") && clearTimeout(s.data("timer")), s.data("timer", setTimeout(function () {
                    s.data("callback").apply(s)
                }, 1e3 * s.data("delay"))), s.data("oldval", s.val()))
            })
        })
    }})
}(jQuery), function () {
    if (!jQuery || !jQuery.jstree) {
        var e = !1, t = !1, i = !1;
        !function (n) {
            n.vakata = {}, n.vakata.css = {get_css: function (e, t, i) {
                e = e.toLowerCase();
                var n = i.cssRules || i.rules, s = 0;
                do {
                    if (n.length && s > n.length + 5)return!1;
                    if (n[s].selectorText && n[s].selectorText.toLowerCase() == e)return t === !0 ? (i.removeRule && i.removeRule(s), i.deleteRule && i.deleteRule(s), !0) : n[s]
                } while (n[++s]);
                return!1
            }, add_css: function (e, t) {
                return n.jstree.css.get_css(e, !1, t) ? !1 : (t.insertRule ? t.insertRule(e + " { }", 0) : t.addRule(e, null, 0), n.vakata.css.get_css(e))
            }, remove_css: function (e, t) {
                return n.vakata.css.get_css(e, !0, t)
            }, add_sheet: function (e) {
                var t = !1, i = !0;
                if (e.str)return e.title && (t = n("style[id='" + e.title + "-stylesheet']")[0]), t ? i = !1 : (t = document.createElement("style"), t.setAttribute("type", "text/css"), e.title && t.setAttribute("id", e.title + "-stylesheet")), t.styleSheet ? i ? (document.getElementsByTagName("head")[0].appendChild(t), t.styleSheet.cssText = e.str) : t.styleSheet.cssText = t.styleSheet.cssText + " " + e.str : (t.appendChild(document.createTextNode(e.str)), document.getElementsByTagName("head")[0].appendChild(t)), t.sheet || t.styleSheet;
                if (e.url) {
                    if (!document.createStyleSheet)return t = document.createElement("link"), t.rel = "stylesheet", t.type = "text/css", t.media = "all", t.href = e.url, document.getElementsByTagName("head")[0].appendChild(t), t.styleSheet;
                    try {
                        t = document.createStyleSheet(e.url)
                    } catch (s) {
                    }
                }
            }};
            var s = [], a = -1, r = {}, o = {};
            n.fn.jstree = function (e) {
                var t = "string" == typeof e, i = Array.prototype.slice.call(arguments, 1), a = this;
                if (t) {
                    if ("_" == e.substring(0, 1))return a;
                    this.each(function () {
                        var t = s[n.data(this, "jstree-instance-id")], r = t && n.isFunction(t[e]) ? t[e].apply(t, i) : t;
                        return"undefined" != typeof r && (0 === e.indexOf("is_") || r !== !0 && r !== !1) ? (a = r, !1) : void 0
                    })
                } else this.each(function () {
                    var t = n.data(this, "jstree-instance-id"), a = [], o = e ? n.extend({}, !0, e) : {}, l = n(this), c = !1, h = [];
                    a = a.concat(i), l.data("jstree") && a.push(l.data("jstree")), o = a.length ? n.extend.apply(null, [!0, o].concat(a)) : o, "undefined" != typeof t && s[t] && s[t].destroy(), t = parseInt(s.push({}), 10) - 1, n.data(this, "jstree-instance-id", t), o.plugins = n.isArray(o.plugins) ? o.plugins : n.jstree.defaults.plugins.slice(), o.plugins.unshift("core"), o.plugins = o.plugins.sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g, "$1$2$4").replace(/,,+/g, ",").replace(/,$/, "").split(","), c = n.extend(!0, {}, n.jstree.defaults, o), c.plugins = o.plugins, n.each(r, function (e) {
                        -1 === n.inArray(e, c.plugins) ? (c[e] = null, delete c[e]) : h.push(e)
                    }), c.plugins = h, s[t] = new n.jstree._instance(t, n(this).addClass("jstree jstree-" + t), c), n.each(s[t]._get_settings().plugins, function (e, i) {
                        s[t].data[i] = {}
                    }), n.each(s[t]._get_settings().plugins, function (e, i) {
                        r[i] && r[i].__init.apply(s[t])
                    }), setTimeout(function () {
                        s[t].init()
                    }, 0)
                });
                return a
            }, n.jstree = {defaults: {plugins: []}, _focused: function () {
                return s[a] || null
            }, _reference: function (e) {
                if (s[e])return s[e];
                var t = n(e);
                return t.length || "string" != typeof e || (t = n("#" + e)), t.length ? s[t.closest(".jstree").data("jstree-instance-id")] || null : null
            }, _instance: function (e, t, i) {
                this.data = {core: {}}, this.get_settings = function () {
                    return n.extend(!0, {}, i)
                }, this._get_settings = function () {
                    return i
                }, this.get_index = function () {
                    return e
                }, this.get_container = function () {
                    return t
                }, this.get_container_ul = function () {
                    return t.children("ul:eq(0)")
                }, this._set_settings = function (e) {
                    i = n.extend(!0, {}, i, e)
                }
            }, _fn: {}, plugin: function (e, t) {
                t = n.extend({}, {__init: n.noop, __destroy: n.noop, _fn: {}, defaults: !1}, t), r[e] = t, n.jstree.defaults[e] = t.defaults, n.each(t._fn, function (t, i) {
                    i.plugin = e, i.old = n.jstree._fn[t], n.jstree._fn[t] = function () {
                        var e, s = i, a = Array.prototype.slice.call(arguments), r = new n.Event("before.jstree"), o = !1;
                        if (this.data.core.locked !== !0 || "unlock" === t || "is_locked" === t) {
                            do {
                                if (s && s.plugin && -1 !== n.inArray(s.plugin, this._get_settings().plugins))break;
                                s = s.old
                            } while (s);
                            if (s) {
                                if (0 === t.indexOf("_"))e = s.apply(this, a); else {
                                    if (e = this.get_container().triggerHandler(r, {func: t, inst: this, args: a, plugin: s.plugin}), e === !1)return;
                                    "undefined" != typeof e && (a = e), e = s.apply(n.extend({}, this, {__callback: function (e) {
                                        this.get_container().triggerHandler(t + ".jstree", {inst: this, args: a, rslt: e, rlbk: o})
                                    }, __rollback: function () {
                                        return o = this.get_rollback()
                                    }, __call_old: function (e) {
                                        return s.old.apply(this, e ? Array.prototype.slice.call(arguments, 1) : a)
                                    }}), a)
                                }
                                return e
                            }
                        }
                    }, n.jstree._fn[t].old = i.old, n.jstree._fn[t].plugin = e
                })
            }, rollback: function (e) {
                e && (n.isArray(e) || (e = [e]), n.each(e, function (e, t) {
                    s[t.i].set_rollback(t.h, t.d)
                }))
            }}, n.jstree._fn = n.jstree._instance.prototype = {}, n(function () {
                var s = navigator.userAgent.toLowerCase(), a = (s.match(/.+?(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1], r = ".jstree ul, .jstree li { display:block; margin:0 0 0 0; padding:0 0 0 0; list-style-type:none; } .jstree li { display:block; min-height:18px; line-height:18px; white-space:nowrap; margin-left:18px; min-width:18px; } .jstree-rtl li { margin-left:0; margin-right:18px; } .jstree > ul > li { margin-left:0px; } .jstree-rtl > ul > li { margin-right:0px; } .jstree ins { display:inline-block; text-decoration:none; width:18px; height:18px; margin:0 0 0 0; padding:0; } .jstree a { display:inline-block; line-height:16px; height:16px; color:black; white-space:nowrap; text-decoration:none; padding:1px 2px; margin:0; } .jstree a:focus { outline: none; } .jstree a > ins { height:16px; width:16px; } .jstree a > .jstree-icon { margin-right:3px; } .jstree-rtl a > .jstree-icon { margin-left:3px; margin-right:0; } li.jstree-open > ul { display:block; } li.jstree-closed > ul { display:none; } ";
                if (/msie/.test(s) && 6 == parseInt(a, 10)) {
                    e = !0;
                    try {
                        document.execCommand("BackgroundImageCache", !1, !0)
                    } catch (o) {
                    }
                    r += ".jstree li { height:18px; margin-left:0; margin-right:0; } .jstree li li { margin-left:18px; } .jstree-rtl li li { margin-left:0px; margin-right:18px; } li.jstree-open ul { display:block; } li.jstree-closed ul { display:none !important; } .jstree li a { display:inline; border-width:0 !important; padding:0px 2px !important; } .jstree li a ins { height:16px; width:16px; margin-right:3px; } .jstree-rtl li a ins { margin-right:0px; margin-left:3px; } "
                }
                /msie/.test(s) && 7 == parseInt(a, 10) && (t = !0, r += ".jstree li a { border-width:0 !important; padding:0px 2px !important; } "), !/compatible/.test(s) && /mozilla/.test(s) && parseFloat(a, 10) < 1.9 && (i = !0, r += ".jstree ins { display:-moz-inline-box; } .jstree li { line-height:12px; } .jstree a { display:-moz-inline-box; } .jstree .jstree-no-icons .jstree-checkbox { display:-moz-inline-stack !important; } "), n.vakata.css.add_sheet({str: r, title: "jstree"})
            }), n.jstree.plugin("core", {__init: function () {
                this.data.core.locked = !1, this.data.core.to_open = this.get_settings().core.initially_open, this.data.core.to_load = this.get_settings().core.initially_load
            }, defaults: {html_titles: !1, animation: 500, initially_open: [], initially_load: [], open_parents: !0, notify_plugins: !0, rtl: !1, load_open: !1, strings: {loading: "Loading ...", new_node: "New node", multiple_selection: "Multiple selection"}}, _fn: {init: function () {
                this.set_focus(), this._get_settings().core.rtl && this.get_container().addClass("jstree-rtl").css("direction", "rtl"), this.get_container().html("<ul><li class='jstree-last jstree-leaf'><ins>&#160;</ins><a class='jstree-loading' href='#'><ins class='jstree-icon'>&#160;</ins>" + this._get_string("loading") + "</a></li></ul>"), this.data.core.li_height = this.get_container_ul().find("li.jstree-closed, li.jstree-leaf").eq(0).height() || 18, this.get_container().delegate("li > ins", "click.jstree", n.proxy(function (e) {
                    var t = n(e.target);
                    t.is("ins") && e.pageY - t.offset().top < this.data.core.li_height && this.toggle_node(t)
                }, this)).bind("mousedown.jstree", n.proxy(function () {
                    this.set_focus()
                }, this)).bind("dblclick.jstree", function () {
                    var e;
                    if (document.selection && document.selection.empty)document.selection.empty(); else if (window.getSelection) {
                        e = window.getSelection();
                        try {
                            e.removeAllRanges(), e.collapse()
                        } catch (t) {
                        }
                    }
                }), this._get_settings().core.notify_plugins && this.get_container().bind("load_node.jstree", n.proxy(function (e, t) {
                    var i = this._get_node(t.rslt.obj), s = this;
                    -1 === i && (i = this.get_container_ul()), i.length && i.find("li").each(function () {
                        var e = n(this);
                        e.data("jstree") && n.each(e.data("jstree"), function (t, i) {
                            s.data[t] && n.isFunction(s["_" + t + "_notify"]) && s["_" + t + "_notify"].call(s, e, i)
                        })
                    })
                }, this)), this._get_settings().core.load_open && this.get_container().bind("load_node.jstree", n.proxy(function (e, t) {
                    var i = this._get_node(t.rslt.obj), s = this;
                    -1 === i && (i = this.get_container_ul()), i.length && i.find("li.jstree-open:not(:has(ul))").each(function () {
                        s.load_node(this, n.noop, n.noop)
                    })
                }, this)), this.__callback(), this.load_node(-1, function () {
                    this.loaded(), this.reload_nodes()
                })
            }, destroy: function () {
                var e, t = this.get_index(), i = this._get_settings(), o = this;
                if (n.each(i.plugins, function (e, t) {
                    try {
                        r[t].__destroy.apply(o)
                    } catch (i) {
                    }
                }), this.__callback(), this.is_focused())for (e in s)if (s.hasOwnProperty(e) && e != t) {
                    s[e].set_focus();
                    break
                }
                t === a && (a = -1), this.get_container().unbind(".jstree").undelegate(".jstree").removeData("jstree-instance-id").find("[class^='jstree']").andSelf().attr("class", function () {
                    return this.className.replace(/jstree[^ ]*|$/gi, "")
                }), n(document).unbind(".jstree-" + t).undelegate(".jstree-" + t), s[t] = null, delete s[t]
            }, _core_notify: function (e, t) {
                t.opened && this.open_node(e, !1, !0)
            }, lock: function () {
                this.data.core.locked = !0, this.get_container().children("ul").addClass("jstree-locked").css("opacity", "0.7"), this.__callback({})
            }, unlock: function () {
                this.data.core.locked = !1, this.get_container().children("ul").removeClass("jstree-locked").css("opacity", "1"), this.__callback({})
            }, is_locked: function () {
                return this.data.core.locked
            }, save_opened: function () {
                var e = this;
                this.data.core.to_open = [], this.get_container_ul().find("li.jstree-open").each(function () {
                    this.id && e.data.core.to_open.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"))
                }), this.__callback(e.data.core.to_open)
            }, save_loaded: function () {
            }, reload_nodes: function (e) {
                var t = this, i = !0, s = [], a = [];
                e || (this.data.core.reopen = !1, this.data.core.refreshing = !0, this.data.core.to_open = n.map(n.makeArray(this.data.core.to_open), function (e) {
                    return"#" + e.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
                }), this.data.core.to_load = n.map(n.makeArray(this.data.core.to_load), function (e) {
                    return"#" + e.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
                }), this.data.core.to_open.length && (this.data.core.to_load = this.data.core.to_load.concat(this.data.core.to_open))), this.data.core.to_load.length && (n.each(this.data.core.to_load, function (e, t) {
                    return"#" == t ? !0 : (n(t).length ? s.push(t) : a.push(t), void 0)
                }), s.length && (this.data.core.to_load = a, n.each(s, function (e, n) {
                    t._is_loaded(n) || (t.load_node(n, function () {
                        t.reload_nodes(!0)
                    }, function () {
                        t.reload_nodes(!0)
                    }), i = !1)
                }))), this.data.core.to_open.length && n.each(this.data.core.to_open, function (e, i) {
                    t.open_node(i, !1, !0)
                }), i && (this.data.core.reopen && clearTimeout(this.data.core.reopen), this.data.core.reopen = setTimeout(function () {
                    t.__callback({}, t)
                }, 50), this.data.core.refreshing = !1, this.reopen())
            }, reopen: function () {
                var e = this;
                this.data.core.to_open.length && n.each(this.data.core.to_open, function (t, i) {
                    e.open_node(i, !1, !0)
                }), this.__callback({})
            }, refresh: function (e) {
                var t = this;
                this.save_opened(), e || (e = -1), e = this._get_node(e), e || (e = -1), -1 !== e ? e.children("UL").remove() : this.get_container_ul().empty(), this.load_node(e, function () {
                    t.__callback({obj: e}), t.reload_nodes()
                })
            }, loaded: function () {
                this.__callback()
            }, set_focus: function () {
                if (!this.is_focused()) {
                    var e = n.jstree._focused();
                    e && e.unset_focus(), this.get_container().addClass("jstree-focused"), a = this.get_index(), this.__callback()
                }
            }, is_focused: function () {
                return a == this.get_index()
            }, unset_focus: function () {
                this.is_focused() && (this.get_container().removeClass("jstree-focused"), a = -1), this.__callback()
            }, _get_node: function (e) {
                var t = n(e, this.get_container());
                return t.is(".jstree") || -1 == e ? -1 : (t = t.closest("li", this.get_container()), t.length ? t : !1)
            }, _get_next: function (e, t) {
                return e = this._get_node(e), -1 === e ? this.get_container().find("> ul > li:first-child") : e.length ? t ? e.nextAll("li").size() > 0 ? e.nextAll("li:eq(0)") : !1 : e.hasClass("jstree-open") ? e.find("li:eq(0)") : e.nextAll("li").size() > 0 ? e.nextAll("li:eq(0)") : e.parentsUntil(".jstree", "li").next("li").eq(0) : !1
            }, _get_prev: function (e, t) {
                if (e = this._get_node(e), -1 === e)return this.get_container().find("> ul > li:last-child");
                if (!e.length)return!1;
                if (t)return e.prevAll("li").length > 0 ? e.prevAll("li:eq(0)") : !1;
                if (e.prev("li").length) {
                    for (e = e.prev("li").eq(0); e.hasClass("jstree-open");)e = e.children("ul:eq(0)").children("li:last");
                    return e
                }
                var i = e.parentsUntil(".jstree", "li:eq(0)");
                return i.length ? i : !1
            }, _get_parent: function (e) {
                if (e = this._get_node(e), -1 == e || !e.length)return!1;
                var t = e.parentsUntil(".jstree", "li:eq(0)");
                return t.length ? t : -1
            }, _get_children: function (e) {
                return e = this._get_node(e), -1 === e ? this.get_container().children("ul:eq(0)").children("li") : e.length ? e.children("ul:eq(0)").children("li") : !1
            }, get_path: function (e, t) {
                var i = [], n = this;
                return e = this._get_node(e), -1 !== e && e && e.length ? (e.parentsUntil(".jstree", "li").each(function () {
                    i.push(t ? this.id : n.get_text(this))
                }), i.reverse(), i.push(t ? e.attr("id") : this.get_text(e)), i) : !1
            }, _get_string: function (e) {
                return this._get_settings().core.strings[e] || e
            }, is_open: function (e) {
                return e = this._get_node(e), e && -1 !== e && e.hasClass("jstree-open")
            }, is_closed: function (e) {
                return e = this._get_node(e), e && -1 !== e && e.hasClass("jstree-closed")
            }, is_leaf: function (e) {
                return e = this._get_node(e), e && -1 !== e && e.hasClass("jstree-leaf")
            }, correct_state: function (e) {
                return e = this._get_node(e), e && -1 !== e ? (e.removeClass("jstree-closed jstree-open").addClass("jstree-leaf").children("ul").remove(), this.__callback({obj: e}), void 0) : !1
            }, open_node: function (t, i, n) {
                if (t = this._get_node(t), !t.length)return!1;
                if (!t.hasClass("jstree-closed"))return i && i.call(), !1;
                var s = n || e ? 0 : this._get_settings().core.animation, a = this;
                this._is_loaded(t) ? (this._get_settings().core.open_parents && t.parentsUntil(".jstree", ".jstree-closed").each(function () {
                    a.open_node(this, !1, !0)
                }), s && t.children("ul").css("display", "none"), t.removeClass("jstree-closed").addClass("jstree-open").children("a").removeClass("jstree-loading"), s ? t.children("ul").stop(!0, !0).slideDown(s, function () {
                    this.style.display = "", a.after_open(t)
                }) : a.after_open(t), this.__callback({obj: t}), i && i.call()) : (t.children("a").addClass("jstree-loading"), this.load_node(t, function () {
                    a.open_node(t, i, n)
                }, i))
            }, after_open: function (e) {
                this.__callback({obj: e})
            }, close_node: function (t, i) {
                t = this._get_node(t);
                var n = i || e ? 0 : this._get_settings().core.animation, s = this;
                return t.length && t.hasClass("jstree-open") ? (n && t.children("ul").attr("style", "display:block !important"), t.removeClass("jstree-open").addClass("jstree-closed"), n ? t.children("ul").stop(!0, !0).slideUp(n, function () {
                    this.style.display = "", s.after_close(t)
                }) : s.after_close(t), this.__callback({obj: t}), void 0) : !1
            }, after_close: function (e) {
                this.__callback({obj: e})
            }, toggle_node: function (e) {
                return e = this._get_node(e), e.hasClass("jstree-closed") ? this.open_node(e) : e.hasClass("jstree-open") ? this.close_node(e) : void 0
            }, open_all: function (e, t, i) {
                e = e ? this._get_node(e) : -1, e && -1 !== e || (e = this.get_container_ul()), i ? e = e.find("li.jstree-closed") : (i = e, e = e.is(".jstree-closed") ? e.find("li.jstree-closed").andSelf() : e.find("li.jstree-closed"));
                var n = this;
                e.each(function () {
                    var e = this;
                    n._is_loaded(this) ? n.open_node(this, !1, !t) : n.open_node(this, function () {
                        n.open_all(e, t, i)
                    }, !t)
                }), 0 === i.find("li.jstree-closed").length && this.__callback({obj: i})
            }, close_all: function (e, t) {
                var i = this;
                e = e ? this._get_node(e) : this.get_container(), e && -1 !== e || (e = this.get_container_ul()), e.find("li.jstree-open").andSelf().each(function () {
                    i.close_node(this, !t)
                }), this.__callback({obj: e})
            }, clean_node: function (e) {
                e = e && -1 != e ? n(e) : this.get_container_ul(), e = e.is("li") ? e.find("li").andSelf() : e.find("li"), e.removeClass("jstree-last").filter("li:last-child").addClass("jstree-last").end().filter(":has(li)").not(".jstree-open").removeClass("jstree-leaf").addClass("jstree-closed"), e.not(".jstree-open, .jstree-closed").addClass("jstree-leaf").children("ul").remove(), this.__callback({obj: e})
            }, get_rollback: function () {
                return this.__callback(), {i: this.get_index(), h: this.get_container().children("ul").clone(!0), d: this.data}
            }, set_rollback: function (e, t) {
                this.get_container().empty().append(e), this.data = t, this.__callback()
            }, load_node: function (e) {
                this.__callback({obj: e})
            }, _is_loaded: function () {
                return!0
            }, create_node: function (e, t, i, s, a) {
                e = this._get_node(e), t = "undefined" == typeof t ? "last" : t;
                var r, o = n("<li />"), l = this._get_settings().core;
                if (-1 !== e && !e.length)return!1;
                if (!a && !this._is_loaded(e))return this.load_node(e, function () {
                    this.create_node(e, t, i, s, !0)
                }), !1;
                switch (this.__rollback(), "string" == typeof i && (i = {data: i}), i || (i = {}), i.attr && o.attr(i.attr), i.metadata && o.data(i.metadata), i.state && o.addClass("jstree-" + i.state), i.data || (i.data = this._get_string("new_node")), n.isArray(i.data) || (r = i.data, i.data = [], i.data.push(r)), n.each(i.data, function (e, t) {
                    r = n("<a />"), n.isFunction(t) && (t = t.call(this, i)), "string" == typeof t ? r.attr("href", "#")[l.html_titles ? "html" : "text"](t) : (t.attr || (t.attr = {}), t.attr.href || (t.attr.href = "#"), r.attr(t.attr)[l.html_titles ? "html" : "text"](t.title), t.language && r.addClass(t.language)), r.prepend("<ins class='jstree-icon'>&#160;</ins>"), t.icon && (-1 === t.icon.indexOf("/") ? r.children("ins").addClass(t.icon) : r.children("ins").css("background", "url('" + t.icon + "') center center no-repeat")), o.append(r)
                }), o.prepend("<ins class='jstree-icon'>&#160;</ins>"), -1 === e && (e = this.get_container(), "before" === t && (t = "first"), "after" === t && (t = "last")), t) {
                    case"before":
                        e.before(o), r = this._get_parent(e);
                        break;
                    case"after":
                        e.after(o), r = this._get_parent(e);
                        break;
                    case"inside":
                    case"first":
                        e.children("ul").length || e.append("<ul />"), e.children("ul").prepend(o), r = e;
                        break;
                    case"last":
                        e.children("ul").length || e.append("<ul />"), e.children("ul").append(o), r = e;
                        break;
                    default:
                        e.children("ul").length || e.append("<ul />"), t || (t = 0), r = e.children("ul").children("li").eq(t), r.length ? r.before(o) : e.children("ul").append(o), r = e
                }
                return(-1 === r || r.get(0) === this.get_container().get(0)) && (r = -1), this.clean_node(r), this.__callback({obj: o, parent: r}), s && s.call(this, o), o
            }, get_text: function (e) {
                if (e = this._get_node(e), !e.length)return!1;
                var t = this._get_settings().core.html_titles;
                return e = e.children("a:eq(0)"), t ? (e = e.clone(), e.children("INS").remove(), e.html()) : (e = e.contents().filter(function () {
                    return 3 == this.nodeType
                })[0], e.nodeValue)
            }, set_text: function (e, t) {
                if (e = this._get_node(e), !e.length)return!1;
                if (e = e.children("a:eq(0)"), this._get_settings().core.html_titles) {
                    var i = e.children("INS").clone();
                    return e.html(t).prepend(i), this.__callback({obj: e, name: t}), !0
                }
                return e = e.contents().filter(function () {
                    return 3 == this.nodeType
                })[0], this.__callback({obj: e, name: t}), e.nodeValue = t
            }, rename_node: function (e, t) {
                e = this._get_node(e), this.__rollback(), e && e.length && this.set_text.apply(this, Array.prototype.slice.call(arguments)) && this.__callback({obj: e, name: t})
            }, delete_node: function (e) {
                if (e = this._get_node(e), !e.length)return!1;
                this.__rollback();
                var t = this._get_parent(e), i = n([]), s = this;
                return e.each(function () {
                    i = i.add(s._get_prev(this))
                }), e = e.detach(), -1 !== t && 0 === t.find("> ul > li").length && t.removeClass("jstree-open jstree-closed").addClass("jstree-leaf"), this.clean_node(t), this.__callback({obj: e, prev: i, parent: t}), e
            }, prepare_move: function (e, t, i, s, a) {
                var r = {};
                if (r.ot = n.jstree._reference(e) || this, r.o = r.ot._get_node(e), r.r = -1 === t ? -1 : this._get_node(t), r.p = "undefined" == typeof i || i === !1 ? "last" : i, !a && o.o && o.o[0] === r.o[0] && o.r[0] === r.r[0] && o.p === r.p)return this.__callback(o), s && s.call(this, o), void 0;
                if (r.ot = n.jstree._reference(r.o) || this, r.rt = n.jstree._reference(r.r) || this, -1 !== r.r && r.r) {
                    if (!/^(before|after)$/.test(r.p) && !this._is_loaded(r.r))return this.load_node(r.r, function () {
                        this.prepare_move(e, t, i, s, !0)
                    });
                    switch (r.p) {
                        case"before":
                            r.cp = r.r.index(), r.cr = r.rt._get_parent(r.r);
                            break;
                        case"after":
                            r.cp = r.r.index() + 1, r.cr = r.rt._get_parent(r.r);
                            break;
                        case"inside":
                        case"first":
                            r.cp = 0, r.cr = r.r;
                            break;
                        case"last":
                            r.cp = r.r.find(" > ul > li").length, r.cr = r.r;
                            break;
                        default:
                            r.cp = r.p, r.cr = r.r
                    }
                } else switch (r.cr = -1, r.p) {
                    case"first":
                    case"before":
                    case"inside":
                        r.cp = 0;
                        break;
                    case"after":
                    case"last":
                        r.cp = r.rt.get_container().find(" > ul > li").length;
                        break;
                    default:
                        r.cp = r.p
                }
                r.np = -1 == r.cr ? r.rt.get_container() : r.cr, r.op = r.ot._get_parent(r.o), r.cop = r.o.index(), -1 === r.op && (r.op = r.ot ? r.ot.get_container() : this.get_container()), !/^(before|after)$/.test(r.p) && r.op && r.np && r.op[0] === r.np[0] && r.o.index() < r.cp && r.cp++, r.or = r.np.find(" > ul > li:nth-child(" + (r.cp + 1) + ")"), o = r, this.__callback(o), s && s.call(this, o)
            }, check_move: function () {
                var e = o, t = !0, i = -1 === e.r ? this.get_container() : e.r;
                return e && e.o && e.or[0] !== e.o[0] ? e.op && e.np && e.op[0] === e.np[0] && e.cp - 1 === e.o.index() ? !1 : (e.o.each(function () {
                    return-1 !== i.parentsUntil(".jstree", "li").andSelf().index(this) ? (t = !1, !1) : void 0
                }), t) : !1
            }, move_node: function (e, t, i, s, a, r) {
                if (!a)return this.prepare_move(e, t, i, function (e) {
                    this.move_node(e, !1, !1, s, !0, r)
                });
                if (s && (o.cy = !0), !r && !this.check_move())return!1;
                this.__rollback();
                var l = !1;
                s ? (l = e.o.clone(!0), l.find("*[id]").andSelf().each(function () {
                    this.id && (this.id = "copy_" + this.id)
                })) : l = e.o, e.or.length ? e.or.before(l) : (e.np.children("ul").length || n("<ul />").appendTo(e.np), e.np.children("ul:eq(0)").append(l));
                try {
                    e.ot.clean_node(e.op), e.rt.clean_node(e.np), e.op.find("> ul > li").length || e.op.removeClass("jstree-open jstree-closed").addClass("jstree-leaf").children("ul").remove()
                } catch (c) {
                }
                return s && (o.cy = !0, o.oc = l), this.__callback(o), o
            }, _get_move: function () {
                return o
            }}})
        }(jQuery), function (e) {
            var t, i, n;
            e(function () {
                /msie/.test(navigator.userAgent.toLowerCase()) ? (i = e('<textarea cols="10" rows="2"></textarea>').css({position: "absolute", top: -1e3, left: 0}).appendTo("body"), n = e('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({position: "absolute", top: -1e3, left: 0}).appendTo("body"), t = i.width() - n.width(), i.add(n).remove()) : (i = e("<div />").css({width: 100, height: 100, overflow: "auto", position: "absolute", top: -1e3, left: 0}).prependTo("body").append("<div />").find("div").css({width: "100%", height: 200}), t = 100 - i.width(), i.parent().remove())
            }), e.jstree.plugin("ui", {__init: function () {
                this.data.ui.selected = e(), this.data.ui.last_selected = !1, this.data.ui.hovered = null, this.data.ui.to_select = this.get_settings().ui.initially_select, this.get_container().delegate("a", "click.jstree", e.proxy(function (t) {
                    t.preventDefault(), t.currentTarget.blur(), e(t.currentTarget).hasClass("jstree-loading") || this.select_node(t.currentTarget, !0, t)
                }, this)).delegate("a", "mouseenter.jstree", e.proxy(function (t) {
                    e(t.currentTarget).hasClass("jstree-loading") || this.hover_node(t.target)
                }, this)).delegate("a", "mouseleave.jstree", e.proxy(function (t) {
                    e(t.currentTarget).hasClass("jstree-loading") || this.dehover_node(t.target)
                }, this)).bind("reopen.jstree", e.proxy(function () {
                    this.reselect()
                }, this)).bind("get_rollback.jstree", e.proxy(function () {
                    this.dehover_node(), this.save_selected()
                }, this)).bind("set_rollback.jstree", e.proxy(function () {
                    this.reselect()
                }, this)).bind("close_node.jstree", e.proxy(function (t, i) {
                    var n = this._get_settings().ui, s = this._get_node(i.rslt.obj), a = s && s.length ? s.children("ul").find("a.jstree-clicked") : e(), r = this;
                    n.selected_parent_close !== !1 && a.length && a.each(function () {
                        r.deselect_node(this), "select_parent" === n.selected_parent_close && r.select_node(s)
                    })
                }, this)).bind("delete_node.jstree", e.proxy(function (e, t) {
                    var i = this._get_settings().ui.select_prev_on_delete, n = this._get_node(t.rslt.obj), s = n && n.length ? n.find("a.jstree-clicked") : [], a = this;
                    s.each(function () {
                        a.deselect_node(this)
                    }), i && s.length && t.rslt.prev.each(function () {
                        return this.parentNode ? (a.select_node(this), !1) : void 0
                    })
                }, this)).bind("move_node.jstree", e.proxy(function (e, t) {
                    t.rslt.cy && t.rslt.oc.find("a.jstree-clicked").removeClass("jstree-clicked")
                }, this))
            }, defaults: {select_limit: -1, select_multiple_modifier: "ctrl", select_range_modifier: "shift", selected_parent_close: "select_parent", selected_parent_open: !0, select_prev_on_delete: !0, disable_selecting_children: !1, initially_select: []}, _fn: {_get_node: function (t, i) {
                if ("undefined" == typeof t || null === t)return i ? this.data.ui.selected : this.data.ui.last_selected;
                var n = e(t, this.get_container());
                return n.is(".jstree") || -1 == t ? -1 : (n = n.closest("li", this.get_container()), n.length ? n : !1)
            }, _ui_notify: function (e, t) {
                t.selected && this.select_node(e, !1)
            }, save_selected: function () {
                var e = this;
                this.data.ui.to_select = [], this.data.ui.selected.each(function () {
                    this.id && e.data.ui.to_select.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"))
                }), this.__callback(this.data.ui.to_select)
            }, reselect: function () {
                var t = this, i = this.data.ui.to_select;
                i = e.map(e.makeArray(i), function (e) {
                    return"#" + e.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
                }), e.each(i, function (e, i) {
                    i && "#" !== i && t.select_node(i)
                }), this.data.ui.selected = this.data.ui.selected.filter(function () {
                    return this.parentNode
                }), this.__callback()
            }, refresh: function () {
                return this.save_selected(), this.__call_old()
            }, hover_node: function (e) {
                return e = this._get_node(e), e.length ? (e.hasClass("jstree-hovered") || this.dehover_node(), this.data.ui.hovered = e.children("a").addClass("jstree-hovered").parent(), this._fix_scroll(e), this.__callback({obj: e}), void 0) : !1
            }, dehover_node: function () {
                var e, t = this.data.ui.hovered;
                return t && t.length ? (e = t.children("a").removeClass("jstree-hovered").parent(), this.data.ui.hovered[0] === e[0] && (this.data.ui.hovered = null), this.__callback({obj: t}), void 0) : !1
            }, select_node: function (e, t, i) {
                if (e = this._get_node(e), -1 == e || !e || !e.length)return!1;
                var n = this._get_settings().ui, s = "on" == n.select_multiple_modifier || n.select_multiple_modifier !== !1 && i && i[n.select_multiple_modifier + "Key"], a = n.select_range_modifier !== !1 && i && i[n.select_range_modifier + "Key"] && this.data.ui.last_selected && this.data.ui.last_selected[0] !== e[0] && this.data.ui.last_selected.parent()[0] === e.parent()[0], r = this.is_selected(e), o = !0, l = this;
                if (t) {
                    if (n.disable_selecting_children && s && (e.parentsUntil(".jstree", "li").children("a.jstree-clicked").length || e.children("ul").find("a.jstree-clicked:eq(0)").length))return!1;
                    switch (o = !1, !0) {
                        case a:
                            this.data.ui.last_selected.addClass("jstree-last-selected"), e = e[e.index() < this.data.ui.last_selected.index() ? "nextUntil" : "prevUntil"](".jstree-last-selected").andSelf(), -1 == n.select_limit || e.length < n.select_limit ? (this.data.ui.last_selected.removeClass("jstree-last-selected"), this.data.ui.selected.each(function () {
                                this !== l.data.ui.last_selected[0] && l.deselect_node(this)
                            }), r = !1, o = !0) : o = !1;
                            break;
                        case r && !s:
                            this.deselect_all(), r = !1, o = !0;
                            break;
                        case!r && !s:
                            (-1 == n.select_limit || n.select_limit > 0) && (this.deselect_all(), o = !0);
                            break;
                        case r && s:
                            this.deselect_node(e);
                            break;
                        case!r && s:
                            (-1 == n.select_limit || this.data.ui.selected.length + 1 <= n.select_limit) && (o = !0)
                    }
                }
                o && !r && (a || (this.data.ui.last_selected = e), e.children("a").addClass("jstree-clicked"), n.selected_parent_open && e.parents(".jstree-closed").each(function () {
                    l.open_node(this, !1, !0)
                }), this.data.ui.selected = this.data.ui.selected.add(e), this._fix_scroll(e.eq(0)), this.__callback({obj: e, e: i}))
            }, _fix_scroll: function (e) {
                var i, n = this.get_container()[0];
                if (n.scrollHeight > n.offsetHeight) {
                    if (e = this._get_node(e), !e || -1 === e || !e.length || !e.is(":visible"))return;
                    i = e.offset().top - this.get_container().offset().top, 0 > i && (n.scrollTop = n.scrollTop + i - 1), i + this.data.core.li_height + (n.scrollWidth > n.offsetWidth ? t : 0) > n.offsetHeight && (n.scrollTop = n.scrollTop + (i - n.offsetHeight + this.data.core.li_height + 1 + (n.scrollWidth > n.offsetWidth ? t : 0)))
                }
            }, deselect_node: function (e) {
                return e = this._get_node(e), e.length ? (this.is_selected(e) && (e.children("a").removeClass("jstree-clicked"), this.data.ui.selected = this.data.ui.selected.not(e), this.data.ui.last_selected.get(0) === e.get(0) && (this.data.ui.last_selected = this.data.ui.selected.eq(0)), this.__callback({obj: e})), void 0) : !1
            }, toggle_select: function (e) {
                return e = this._get_node(e), e.length ? (this.is_selected(e) ? this.deselect_node(e) : this.select_node(e), void 0) : !1
            }, is_selected: function (e) {
                return this.data.ui.selected.index(this._get_node(e)) >= 0
            }, get_selected: function (t) {
                return t ? e(t).find("a.jstree-clicked").parent() : this.data.ui.selected
            }, deselect_all: function (t) {
                var i = t ? e(t).find("a.jstree-clicked").parent() : this.get_container().find("a.jstree-clicked").parent();
                i.children("a.jstree-clicked").removeClass("jstree-clicked"), this.data.ui.selected = e([]), this.data.ui.last_selected = !1, this.__callback({obj: i})
            }}}), e.jstree.defaults.plugins.push("ui")
        }(jQuery), function (e) {
            e.jstree.plugin("crrm", {__init: function () {
                this.get_container().bind("move_node.jstree", e.proxy(function (e, t) {
                    if (this._get_settings().crrm.move.open_onmove) {
                        var i = this;
                        t.rslt.np.parentsUntil(".jstree").andSelf().filter(".jstree-closed").each(function () {
                            i.open_node(this, !1, !0)
                        })
                    }
                }, this))
            }, defaults: {input_width_limit: 200, move: {always_copy: !1, open_onmove: !0, default_position: "last", check_move: function () {
                return!0
            }}}, _fn: {_show_input: function (t, i) {
                t = this._get_node(t);
                var n = this._get_settings().core.rtl, s = this._get_settings().crrm.input_width_limit, a = t.children("ins").width(), r = t.find("> a:visible > ins").width() * t.find("> a:visible > ins").length, o = this.get_text(t), l = e("<div />", {css: {position: "absolute", top: "-200px", left: n ? "0px" : "-1000px", visibility: "hidden"}}).appendTo("body"), c = t.css("position", "relative").append(e("<input />", {value: o, "class": "jstree-rename-input", css: {padding: "0", border: "1px solid silver", position: "absolute", left: n ? "auto" : a + r + 4 + "px", right: n ? a + r + 4 + "px" : "auto", top: "0px", height: this.data.core.li_height - 2 + "px", lineHeight: this.data.core.li_height - 2 + "px", width: "150px"}, blur: e.proxy(function () {
                    var e = t.children(".jstree-rename-input"), n = e.val();
                    "" === n && (n = o), l.remove(), e.remove(), this.set_text(t, o), this.rename_node(t, n), i.call(this, t, n, o), t.css("position", "")
                }, this), keyup: function (e) {
                    var t = e.keyCode || e.which;
                    return 27 == t ? (this.value = o, this.blur(), void 0) : 13 == t ? (this.blur(), void 0) : (c.width(Math.min(l.text("pW" + this.value).width(), s)), void 0)
                }, keypress: function (e) {
                    var t = e.keyCode || e.which;
                    return 13 == t ? !1 : void 0
                }})).children(".jstree-rename-input");
                this.set_text(t, ""), l.css({fontFamily: c.css("fontFamily") || "", fontSize: c.css("fontSize") || "", fontWeight: c.css("fontWeight") || "", fontStyle: c.css("fontStyle") || "", fontStretch: c.css("fontStretch") || "", fontVariant: c.css("fontVariant") || "", letterSpacing: c.css("letterSpacing") || "", wordSpacing: c.css("wordSpacing") || ""}), c.width(Math.min(l.text("pW" + c[0].value).width(), s))[0].select()
            }, rename: function (e) {
                e = this._get_node(e), this.__rollback();
                var t = this.__callback;
                this._show_input(e, function (e, i, n) {
                    t.call(this, {obj: e, new_name: i, old_name: n})
                })
            }, create: function (t, i, n, s, a) {
                var r, o = this;
                return t = this._get_node(t), t || (t = -1), this.__rollback(), r = this.create_node(t, i, n, function (t) {
                    var i = this._get_parent(t), n = e(t).index();
                    s && s.call(this, t), i.length && i.hasClass("jstree-closed") && this.open_node(i, !1, !0), a ? o.__callback({obj: t, name: this.get_text(t), parent: i, position: n}) : this._show_input(t, function (e, t) {
                        o.__callback({obj: e, name: t, parent: i, position: n})
                    })
                })
            }, remove: function (e) {
                e = this._get_node(e, !0);
                var t = this._get_parent(e), i = this._get_prev(e);
                this.__rollback(), e = this.delete_node(e), e !== !1 && this.__callback({obj: e, prev: i, parent: t})
            }, check_move: function () {
                if (!this.__call_old())return!1;
                var e = this._get_settings().crrm.move;
                return e.check_move.call(this, this._get_move()) ? !0 : !1
            }, move_node: function (e, t, i, n, s, a) {
                var r = this._get_settings().crrm.move;
                return s ? ((r.always_copy === !0 || "multitree" === r.always_copy && e.rt.get_index() !== e.ot.get_index()) && (n = !0), this.__call_old(!0, e, t, i, n, !0, a), void 0) : ("undefined" == typeof i && (i = r.default_position), "inside" !== i || r.default_position.match(/^(before|after)$/) || (i = r.default_position), this.__call_old(!0, e, t, i, n, !1, a))
            }, cut: function (e) {
                return e = this._get_node(e, !0), e && e.length ? (this.data.crrm.cp_nodes = !1, this.data.crrm.ct_nodes = e, this.__callback({obj: e}), void 0) : !1
            }, copy: function (e) {
                return e = this._get_node(e, !0), e && e.length ? (this.data.crrm.ct_nodes = !1, this.data.crrm.cp_nodes = e, this.__callback({obj: e}), void 0) : !1
            }, paste: function (e) {
                if (e = this._get_node(e), !e || !e.length)return!1;
                var t = this.data.crrm.ct_nodes ? this.data.crrm.ct_nodes : this.data.crrm.cp_nodes;
                return this.data.crrm.ct_nodes || this.data.crrm.cp_nodes ? (this.data.crrm.ct_nodes && (this.move_node(this.data.crrm.ct_nodes, e), this.data.crrm.ct_nodes = !1), this.data.crrm.cp_nodes && this.move_node(this.data.crrm.cp_nodes, e, !1, !0), this.__callback({obj: e, nodes: t}), void 0) : !1
            }}})
        }(jQuery), function (e) {
            var t = [];
            e.jstree._themes = !1, e.jstree.plugin("themes", {__init: function () {
                this.get_container().bind("init.jstree", e.proxy(function () {
                    var e = this._get_settings().themes;
                    this.data.themes.dots = e.dots, this.data.themes.icons = e.icons, this.set_theme(e.theme, e.url)
                }, this)).bind("loaded.jstree", e.proxy(function () {
                    this.data.themes.dots ? this.show_dots() : this.hide_dots(), this.data.themes.icons ? this.show_icons() : this.hide_icons()
                }, this))
            }, defaults: {theme: "default", url: !1, dots: !0, icons: !0}, _fn: {set_theme: function (i, n) {
                return i ? (n || (n = e.jstree._themes + i + "/style.css"), -1 == e.inArray(n, t) && (e.vakata.css.add_sheet({url: n}), t.push(n)), this.data.themes.theme != i && (this.get_container().removeClass("jstree-" + this.data.themes.theme), this.data.themes.theme = i), this.get_container().addClass("jstree-" + i), this.data.themes.dots ? this.show_dots() : this.hide_dots(), this.data.themes.icons ? this.show_icons() : this.hide_icons(), this.__callback(), void 0) : !1
            }, get_theme: function () {
                return this.data.themes.theme
            }, show_dots: function () {
                this.data.themes.dots = !0, this.get_container().children("ul").removeClass("jstree-no-dots")
            }, hide_dots: function () {
                this.data.themes.dots = !1, this.get_container().children("ul").addClass("jstree-no-dots")
            }, toggle_dots: function () {
                this.data.themes.dots ? this.hide_dots() : this.show_dots()
            }, show_icons: function () {
                this.data.themes.icons = !0, this.get_container().children("ul").removeClass("jstree-no-icons")
            }, hide_icons: function () {
                this.data.themes.icons = !1, this.get_container().children("ul").addClass("jstree-no-icons")
            }, toggle_icons: function () {
                this.data.themes.icons ? this.hide_icons() : this.show_icons()
            }}}), e(function () {
                e.jstree._themes === !1 && e("script").each(function () {
                    return this.src.toString().match(/jquery\.jstree[^\/]*?\.js(\?.*)?$/) ? (e.jstree._themes = this.src.toString().replace(/jquery\.jstree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1) : void 0
                }), e.jstree._themes === !1 && (e.jstree._themes = "themes/")
            }), e.jstree.defaults.plugins.push("themes")
        }(jQuery), function (e) {
            function t(t, i) {
                var n, s = e.jstree._focused();
                return s && s.data && s.data.hotkeys && s.data.hotkeys.enabled && (n = s._get_settings().hotkeys[t]) ? n.call(s, i) : void 0
            }

            var i = [];
            e.jstree.plugin("hotkeys", {__init: function () {
                if ("undefined" == typeof e.hotkeys)throw"jsTree hotkeys: jQuery hotkeys plugin not included.";
                if (!this.data.ui)throw"jsTree hotkeys: jsTree UI plugin not included.";
                e.each(this._get_settings().hotkeys, function (n, s) {
                    s !== !1 && -1 == e.inArray(n, i) && (e(document).bind("keydown", n, function (e) {
                        return t(n, e)
                    }), i.push(n))
                }), this.get_container().bind("lock.jstree", e.proxy(function () {
                    this.data.hotkeys.enabled && (this.data.hotkeys.enabled = !1, this.data.hotkeys.revert = !0)
                }, this)).bind("unlock.jstree", e.proxy(function () {
                    this.data.hotkeys.revert && (this.data.hotkeys.enabled = !0)
                }, this)), this.enable_hotkeys()
            }, defaults: {up: function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected || -1;
                return this.hover_node(this._get_prev(e)), !1
            }, "ctrl+up": function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected || -1;
                return this.hover_node(this._get_prev(e)), !1
            }, "shift+up": function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected || -1;
                return this.hover_node(this._get_prev(e)), !1
            }, down: function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected || -1;
                return this.hover_node(this._get_next(e)), !1
            }, "ctrl+down": function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected || -1;
                return this.hover_node(this._get_next(e)), !1
            }, "shift+down": function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected || -1;
                return this.hover_node(this._get_next(e)), !1
            }, left: function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected;
                return e && (e.hasClass("jstree-open") ? this.close_node(e) : this.hover_node(this._get_prev(e))), !1
            }, "ctrl+left": function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected;
                return e && (e.hasClass("jstree-open") ? this.close_node(e) : this.hover_node(this._get_prev(e))), !1
            }, "shift+left": function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected;
                return e && (e.hasClass("jstree-open") ? this.close_node(e) : this.hover_node(this._get_prev(e))), !1
            }, right: function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected;
                return e && e.length && (e.hasClass("jstree-closed") ? this.open_node(e) : this.hover_node(this._get_next(e))), !1
            }, "ctrl+right": function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected;
                return e && e.length && (e.hasClass("jstree-closed") ? this.open_node(e) : this.hover_node(this._get_next(e))), !1
            }, "shift+right": function () {
                var e = this.data.ui.hovered || this.data.ui.last_selected;
                return e && e.length && (e.hasClass("jstree-closed") ? this.open_node(e) : this.hover_node(this._get_next(e))), !1
            }, space: function () {
                return this.data.ui.hovered && this.data.ui.hovered.children("a:eq(0)").click(), !1
            }, "ctrl+space": function (e) {
                return e.type = "click", this.data.ui.hovered && this.data.ui.hovered.children("a:eq(0)").trigger(e), !1
            }, "shift+space": function (e) {
                return e.type = "click", this.data.ui.hovered && this.data.ui.hovered.children("a:eq(0)").trigger(e), !1
            }, f2: function () {
                this.rename(this.data.ui.hovered || this.data.ui.last_selected)
            }, del: function () {
                this.remove(this.data.ui.hovered || this._get_node(null))
            }}, _fn: {enable_hotkeys: function () {
                this.data.hotkeys.enabled = !0
            }, disable_hotkeys: function () {
                this.data.hotkeys.enabled = !1
            }}})
        }(jQuery), function (e) {
            e.jstree.plugin("json_data", {__init: function () {
                var e = this._get_settings().json_data;
                e.progressive_unload && this.get_container().bind("after_close.jstree", function (e, t) {
                    t.rslt.obj.children("ul").remove()
                })
            }, defaults: {data: !1, ajax: !1, correct_state: !0, progressive_render: !1, progressive_unload: !1}, _fn: {load_node: function (e, t, i) {
                var n = this;
                this.load_node_json(e, function () {
                    n.__callback({obj: n._get_node(e)}), t.call(this)
                }, i)
            }, _is_loaded: function (t) {
                var i = this._get_settings().json_data;
                return t = this._get_node(t), -1 == t || !t || !i.ajax && !i.progressive_render && !e.isFunction(i.data) || t.is(".jstree-open, .jstree-leaf") || t.children("ul").children("li").length > 0
            }, refresh: function (t) {
                t = this._get_node(t);
                var i = this._get_settings().json_data;
                return t && -1 !== t && i.progressive_unload && (e.isFunction(i.data) || i.ajax) && t.removeData("jstree-children"), this.__call_old()
            }, load_node_json: function (t, i, n) {
                var s, a = this.get_settings().json_data, r = function () {
                }, o = function () {
                };
                if (t = this._get_node(t), t && -1 !== t && (a.progressive_render || a.progressive_unload) && !t.is(".jstree-open, .jstree-leaf") && 0 === t.children("ul").children("li").length && t.data("jstree-children"))return s = this._parse_json(t.data("jstree-children"), t), s && (t.append(s), a.progressive_unload || t.removeData("jstree-children")), this.clean_node(t), i && i.call(this), void 0;
                if (t && -1 !== t) {
                    if (t.data("jstree-is-loading"))return;
                    t.data("jstree-is-loading", !0)
                }
                switch (!0) {
                    case!a.data && !a.ajax:
                        throw"Neither data nor ajax settings supplied.";
                    case e.isFunction(a.data):
                        a.data.call(this, t, e.proxy(function (e) {
                            e = this._parse_json(e, t), e ? (-1 !== t && t ? (t.append(e).children("a.jstree-loading").removeClass("jstree-loading"), t.removeData("jstree-is-loading")) : this.get_container().children("ul").empty().append(e.children()), this.clean_node(t), i && i.call(this)) : (-1 !== t && t ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.removeData("jstree-is-loading"), a.correct_state && this.correct_state(t)) : a.correct_state && this.get_container().children("ul").empty(), n && n.call(this))
                        }, this));
                        break;
                    case!!a.data && !a.ajax || !!a.data && !!a.ajax && (!t || -1 === t):
                        t && -1 != t || (s = this._parse_json(a.data, t), s ? (this.get_container().children("ul").empty().append(s.children()), this.clean_node()) : a.correct_state && this.get_container().children("ul").empty()), i && i.call(this);
                        break;
                    case!a.data && !!a.ajax || !!a.data && !!a.ajax && t && -1 !== t:
                        r = function (e, i, s) {
                            var r = this.get_settings().json_data.ajax.error;
                            r && r.call(this, e, i, s), -1 != t && t.length ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.removeData("jstree-is-loading"), "success" === i && a.correct_state && this.correct_state(t)) : "success" === i && a.correct_state && this.get_container().children("ul").empty(), n && n.call(this)
                        }, o = function (n, s, o) {
                            var l = this.get_settings().json_data.ajax.success;
                            return l && (n = l.call(this, n, s, o) || n), "" === n || n && n.toString && "" === n.toString().replace(/^[\s\n]+$/, "") || !e.isArray(n) && !e.isPlainObject(n) ? r.call(this, o, s, "") : (n = this._parse_json(n, t), n ? (-1 !== t && t ? (t.append(n).children("a.jstree-loading").removeClass("jstree-loading"), t.removeData("jstree-is-loading")) : this.get_container().children("ul").empty().append(n.children()), this.clean_node(t), i && i.call(this)) : -1 !== t && t ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.removeData("jstree-is-loading"), a.correct_state && (this.correct_state(t), i && i.call(this))) : a.correct_state && (this.get_container().children("ul").empty(), i && i.call(this)), void 0)
                        }, a.ajax.context = this, a.ajax.error = r, a.ajax.success = o, a.ajax.dataType || (a.ajax.dataType = "json"), e.isFunction(a.ajax.url) && (a.ajax.url = a.ajax.url.call(this, t)), e.isFunction(a.ajax.data) && (a.ajax.data = a.ajax.data.call(this, t)), e.ajax(a.ajax)
                }
            }, _parse_json: function (t, i, n) {
                var s, a, r, o, l, c = !1, h = this._get_settings(), u = h.json_data, d = h.core.html_titles;
                if (!t)return c;
                if (u.progressive_unload && i && -1 !== i && i.data("jstree-children", c), e.isArray(t)) {
                    if (c = e("<ul>"), !t.length)return!1;
                    for (a = 0, r = t.length; r > a; a++)s = this._parse_json(t[a], i, !0), s.length && (c = c.append(s));
                    c = c.children()
                } else {
                    if ("string" == typeof t && (t = {data: t}), !t.data && "" !== t.data)return c;
                    c = e("<li />"), t.attr && c.attr(t.attr), t.metadata && c.data(t.metadata), t.state && c.addClass("jstree-" + t.state), e.isArray(t.data) || (s = t.data, t.data = [], t.data.push(s)), e.each(t.data, function (i, n) {
                        s = e("<a />"), e.isFunction(n) && (n = n.call(this, t)), "string" == typeof n ? s.attr("href", "#")[d ? "html" : "text"](n) : (n.attr || (n.attr = {}), n.attr.href || (n.attr.href = "#"), s.attr(n.attr)[d ? "html" : "text"](n.title), n.language && s.addClass(n.language)), s.prepend("<ins class='jstree-icon'>&#160;</ins>"), !n.icon && t.icon && (n.icon = t.icon), n.icon && (-1 === n.icon.indexOf("/") ? s.children("ins").addClass(n.icon) : s.children("ins").css("background", "url('" + n.icon + "') center center no-repeat")), c.append(s)
                    }), c.prepend("<ins class='jstree-icon'>&#160;</ins>"), t.children && (u.progressive_render && "open" !== t.state ? c.addClass("jstree-closed").data("jstree-children", t.children) : (u.progressive_unload && c.data("jstree-children", t.children), e.isArray(t.children) && t.children.length && (s = this._parse_json(t.children, i, !0), s.length && (l = e("<ul />"), l.append(s), c.append(l)))))
                }
                return n || (o = e("<ul />"), o.append(c), c = o), c
            }, get_json: function (t, i, n, s) {
                var a, r, o, l, c, h, u = [], d = this._get_settings(), p = this;
                return t = this._get_node(t), t && -1 !== t || (t = this.get_container().find("> ul > li")), i = e.isArray(i) ? i : ["id", "class"], !s && this.data.types && i.push(d.types.type_attr), n = e.isArray(n) ? n : [], t.each(function () {
                    o = e(this), a = {data: []}, i.length && (a.attr = {}), e.each(i, function (e, t) {
                        r = o.attr(t), r && r.length && r.replace(/jstree[^ ]*/gi, "").length && (a.attr[t] = (" " + r).replace(/ jstree[^ ]*/gi, "").replace(/\s+$/gi, " ").replace(/^ /, "").replace(/ $/, ""))
                    }), o.hasClass("jstree-open") && (a.state = "open"), o.hasClass("jstree-closed") && (a.state = "closed"), o.data() && (a.metadata = o.data()), l = o.children("a"), l.each(function () {
                        c = e(this), n.length || -1 !== e.inArray("languages", d.plugins) || c.children("ins").get(0).style.backgroundImage.length || c.children("ins").get(0).className && c.children("ins").get(0).className.replace(/jstree[^ ]*|$/gi, "").length ? (h = !1, -1 !== e.inArray("languages", d.plugins) && e.isArray(d.languages) && d.languages.length && e.each(d.languages, function (e, t) {
                            return c.hasClass(t) ? (h = t, !1) : void 0
                        }), r = {attr: {}, title: p.get_text(c, h)}, e.each(n, function (e, t) {
                            r.attr[t] = (" " + (c.attr(t) || "")).replace(/ jstree[^ ]*/gi, "").replace(/\s+$/gi, " ").replace(/^ /, "").replace(/ $/, "")
                        }), -1 !== e.inArray("languages", d.plugins) && e.isArray(d.languages) && d.languages.length && e.each(d.languages, function (e, t) {
                            return c.hasClass(t) ? (r.language = t, !0) : void 0
                        }), c.children("ins").get(0).className.replace(/jstree[^ ]*|$/gi, "").replace(/^\s+$/gi, "").length && (r.icon = c.children("ins").get(0).className.replace(/jstree[^ ]*|$/gi, "").replace(/\s+$/gi, " ").replace(/^ /, "").replace(/ $/, "")), c.children("ins").get(0).style.backgroundImage.length && (r.icon = c.children("ins").get(0).style.backgroundImage.replace("url(", "").replace(")", ""))) : r = p.get_text(c), l.length > 1 ? a.data.push(r) : a.data = r
                    }), o = o.find("> ul > li"), o.length && (a.children = p.get_json(o, i, n, !0)), u.push(a)
                }), u
            }}})
        }(jQuery), function (e) {
            e.jstree.plugin("languages", {__init: function () {
                this._load_css()
            }, defaults: [], _fn: {set_lang: function (t) {
                var i = this._get_settings().languages, n = !1, s = ".jstree-" + this.get_index() + " a";
                if (!e.isArray(i) || 0 === i.length)return!1;
                if (-1 == e.inArray(t, i)) {
                    if (!i[t])return!1;
                    t = i[t]
                }
                return t == this.data.languages.current_language ? !0 : (n = e.vakata.css.get_css(s + "." + this.data.languages.current_language, !1, this.data.languages.language_css), n !== !1 && (n.style.display = "none"), n = e.vakata.css.get_css(s + "." + t, !1, this.data.languages.language_css), n !== !1 && (n.style.display = ""), this.data.languages.current_language = t, this.__callback(t), !0)
            }, get_lang: function () {
                return this.data.languages.current_language
            }, _get_string: function (t, i) {
                var n = this._get_settings().languages, s = this._get_settings().core.strings;
                return e.isArray(n) && n.length && (i = i && -1 != e.inArray(i, n) ? i : this.data.languages.current_language), s[i] && s[i][t] ? s[i][t] : s[t] ? s[t] : t
            }, get_text: function (t, i) {
                if (t = this._get_node(t) || this.data.ui.last_selected, !t.size())return!1;
                var n = this._get_settings().languages, s = this._get_settings().core.html_titles;
                return e.isArray(n) && n.length ? (i = i && -1 != e.inArray(i, n) ? i : this.data.languages.current_language, t = t.children("a." + i)) : t = t.children("a:eq(0)"), s ? (t = t.clone(), t.children("INS").remove(), t.html()) : (t = t.contents().filter(function () {
                    return 3 == this.nodeType
                })[0], t.nodeValue)
            }, set_text: function (t, i, n) {
                if (t = this._get_node(t) || this.data.ui.last_selected, !t.size())return!1;
                var s, a = this._get_settings().languages, r = this._get_settings().core.html_titles;
                return e.isArray(a) && a.length ? (n = n && -1 != e.inArray(n, a) ? n : this.data.languages.current_language, t = t.children("a." + n)) : t = t.children("a:eq(0)"), r ? (s = t.children("INS").clone(), t.html(i).prepend(s), this.__callback({obj: t, name: i, lang: n}), !0) : (t = t.contents().filter(function () {
                    return 3 == this.nodeType
                })[0], this.__callback({obj: t, name: i, lang: n}), t.nodeValue = i)
            }, _load_css: function () {
                var t, i = this._get_settings().languages, n = "/* languages css */", s = ".jstree-" + this.get_index() + " a";
                if (e.isArray(i) && i.length) {
                    for (this.data.languages.current_language = i[0], t = 0; t < i.length; t++)n += s + "." + i[t] + " {", i[t] != this.data.languages.current_language && (n += " display:none; "), n += " } ";
                    this.data.languages.language_css = e.vakata.css.add_sheet({str: n, title: "jstree-languages"})
                }
            }, create_node: function (t, i, n, s) {
                var a = this.__call_old(!0, t, i, n, function (t) {
                    var i, n = this._get_settings().languages, a = t.children("a");
                    if (e.isArray(n) && n.length) {
                        for (i = 0; i < n.length; i++)a.is("." + n[i]) || t.append(a.eq(0).clone().removeClass(n.join(" ")).addClass(n[i]));
                        a.not("." + n.join(", .")).remove()
                    }
                    s && s.call(this, t)
                });
                return a
            }}})
        }(jQuery), function (e) {
            e.jstree.plugin("cookies", {__init: function () {
                if ("undefined" == typeof e.cookie)throw"jsTree cookie: jQuery cookie plugin not included.";
                var t, i = this._get_settings().cookies;
                i.save_loaded && (t = e.cookie(i.save_loaded), t && t.length && (this.data.core.to_load = t.split(","))), i.save_opened && (t = e.cookie(i.save_opened), t && t.length && (this.data.core.to_open = t.split(","))), i.save_selected && (t = e.cookie(i.save_selected), t && t.length && this.data.ui && (this.data.ui.to_select = t.split(","))), this.get_container().one((this.data.ui ? "reselect" : "reopen") + ".jstree", e.proxy(function () {
                    this.get_container().bind("open_node.jstree close_node.jstree select_node.jstree deselect_node.jstree", e.proxy(function (e) {
                        this._get_settings().cookies.auto_save && this.save_cookie((e.handleObj.namespace + e.handleObj.type).replace("jstree", ""))
                    }, this))
                }, this))
            }, defaults: {save_loaded: "jstree_load", save_opened: "jstree_open", save_selected: "jstree_select", auto_save: !0, cookie_options: {}}, _fn: {save_cookie: function (t) {
                if (!this.data.core.refreshing) {
                    var i = this._get_settings().cookies;
                    if (!t)return i.save_loaded && (this.save_loaded(), e.cookie(i.save_loaded, this.data.core.to_load.join(","), i.cookie_options)), i.save_opened && (this.save_opened(), e.cookie(i.save_opened, this.data.core.to_open.join(","), i.cookie_options)), i.save_selected && this.data.ui && (this.save_selected(), e.cookie(i.save_selected, this.data.ui.to_select.join(","), i.cookie_options)), void 0;
                    switch (t) {
                        case"open_node":
                        case"close_node":
                            i.save_opened && (this.save_opened(), e.cookie(i.save_opened, this.data.core.to_open.join(","), i.cookie_options)), i.save_loaded && (this.save_loaded(), e.cookie(i.save_loaded, this.data.core.to_load.join(","), i.cookie_options));
                            break;
                        case"select_node":
                        case"deselect_node":
                            i.save_selected && this.data.ui && (this.save_selected(), e.cookie(i.save_selected, this.data.ui.to_select.join(","), i.cookie_options))
                    }
                }
            }}})
        }(jQuery), function (e) {
            e.jstree.plugin("sort", {__init: function () {
                this.get_container().bind("load_node.jstree", e.proxy(function (e, t) {
                    var i = this._get_node(t.rslt.obj);
                    i = -1 === i ? this.get_container().children("ul") : i.children("ul"), this.sort(i)
                }, this)).bind("rename_node.jstree create_node.jstree create.jstree", e.proxy(function (e, t) {
                    this.sort(t.rslt.obj.parent())
                }, this)).bind("move_node.jstree", e.proxy(function (e, t) {
                    var i = -1 == t.rslt.np ? this.get_container() : t.rslt.np;
                    this.sort(i.children("ul"))
                }, this))
            }, defaults: function (e, t) {
                return this.get_text(e) > this.get_text(t) ? 1 : -1
            }, _fn: {sort: function (t) {
                var i = this._get_settings().sort, n = this;
                t.append(e.makeArray(t.children("li")).sort(e.proxy(i, n))), t.find("> li > ul").each(function () {
                    n.sort(e(this))
                }), this.clean_node(t)
            }}})
        }(jQuery), function (e) {
            var t = !1, i = !1, n = !1, s = !1, a = !1, r = !1, o = !1, l = !1, c = !1;
            e.vakata.dnd = {is_down: !1, is_drag: !1, helper: !1, scroll_spd: 10, init_x: 0, init_y: 0, threshold: 5, helper_left: 5, helper_top: 10, user_data: {}, drag_start: function (t, i, n) {
                e.vakata.dnd.is_drag && e.vakata.drag_stop({});
                try {
                    t.currentTarget.unselectable = "on", t.currentTarget.onselectstart = function () {
                        return!1
                    }, t.currentTarget.style && (t.currentTarget.style.MozUserSelect = "none")
                } catch (s) {
                }
                return e.vakata.dnd.init_x = t.pageX, e.vakata.dnd.init_y = t.pageY, e.vakata.dnd.user_data = i, e.vakata.dnd.is_down = !0, e.vakata.dnd.helper = e("<div id='vakata-dragged' />").html(n), e(document).bind("mousemove", e.vakata.dnd.drag), e(document).bind("mouseup", e.vakata.dnd.drag_stop), !1
            }, drag: function (t) {
                if (e.vakata.dnd.is_down) {
                    if (!e.vakata.dnd.is_drag) {
                        if (!(Math.abs(t.pageX - e.vakata.dnd.init_x) > 5 || Math.abs(t.pageY - e.vakata.dnd.init_y) > 5))return;
                        e.vakata.dnd.helper.appendTo("body"), e.vakata.dnd.is_drag = !0, e(document).triggerHandler("drag_start.vakata", {event: t, data: e.vakata.dnd.user_data})
                    }
                    if ("mousemove" === t.type) {
                        var i = e(document), n = i.scrollTop(), s = i.scrollLeft();
                        t.pageY - n < 20 ? (r && "down" === o && (clearInterval(r), r = !1), r || (o = "up", r = setInterval(function () {
                            e(document).scrollTop(e(document).scrollTop() - e.vakata.dnd.scroll_spd)
                        }, 150))) : r && "up" === o && (clearInterval(r), r = !1), e(window).height() - (t.pageY - n) < 20 ? (r && "up" === o && (clearInterval(r), r = !1), r || (o = "down", r = setInterval(function () {
                            e(document).scrollTop(e(document).scrollTop() + e.vakata.dnd.scroll_spd)
                        }, 150))) : r && "down" === o && (clearInterval(r), r = !1), t.pageX - s < 20 ? (a && "right" === l && (clearInterval(a), a = !1), a || (l = "left", a = setInterval(function () {
                            e(document).scrollLeft(e(document).scrollLeft() - e.vakata.dnd.scroll_spd)
                        }, 150))) : a && "left" === l && (clearInterval(a), a = !1), e(window).width() - (t.pageX - s) < 20 ? (a && "left" === l && (clearInterval(a), a = !1), a || (l = "right", a = setInterval(function () {
                            e(document).scrollLeft(e(document).scrollLeft() + e.vakata.dnd.scroll_spd)
                        }, 150))) : a && "right" === l && (clearInterval(a), a = !1)
                    }
                    e.vakata.dnd.helper.css({left: t.pageX + e.vakata.dnd.helper_left + "px", top: t.pageY + e.vakata.dnd.helper_top + "px"}), e(document).triggerHandler("drag.vakata", {event: t, data: e.vakata.dnd.user_data})
                }
            }, drag_stop: function (t) {
                a && clearInterval(a), r && clearInterval(r), e(document).unbind("mousemove", e.vakata.dnd.drag), e(document).unbind("mouseup", e.vakata.dnd.drag_stop), e(document).triggerHandler("drag_stop.vakata", {event: t, data: e.vakata.dnd.user_data}), e.vakata.dnd.helper.remove(), e.vakata.dnd.init_x = 0, e.vakata.dnd.init_y = 0, e.vakata.dnd.user_data = {}, e.vakata.dnd.is_down = !1, e.vakata.dnd.is_drag = !1
            }}, e(function () {
                var t = "#vakata-dragged { display:block; margin:0 0 0 0; padding:4px 4px 4px 24px; position:absolute; top:-2000px; line-height:16px; z-index:10000; } ";
                e.vakata.css.add_sheet({str: t, title: "vakata"})
            }), e.jstree.plugin("dnd", {__init: function () {
                this.data.dnd = {active: !1, after: !1, inside: !1, before: !1, off: !1, prepared: !1, w: 0, to1: !1, to2: !1, cof: !1, cw: !1, ch: !1, i1: !1, i2: !1, mto: !1}, this.get_container().bind("mouseenter.jstree", e.proxy(function (i) {
                    if (e.vakata.dnd.is_drag && e.vakata.dnd.user_data.jstree && (this.data.themes && (n.attr("class", "jstree-" + this.data.themes.theme), s && s.attr("class", "jstree-" + this.data.themes.theme), e.vakata.dnd.helper.attr("class", "jstree-dnd-helper jstree-" + this.data.themes.theme)), i.currentTarget === i.target && e.vakata.dnd.user_data.obj && e(e.vakata.dnd.user_data.obj).length && e(e.vakata.dnd.user_data.obj).parents(".jstree:eq(0)")[0] !== i.target)) {
                        var a, r = e.jstree._reference(i.target);
                        r.data.dnd.foreign ? (a = r._get_settings().dnd.drag_check.call(this, {o: t, r: r.get_container(), is_root: !0}), (a === !0 || a.inside === !0 || a.before === !0 || a.after === !0) && e.vakata.dnd.helper.children("ins").attr("class", "jstree-ok")) : (r.prepare_move(t, r.get_container(), "last"), r.check_move() && e.vakata.dnd.helper.children("ins").attr("class", "jstree-ok"))
                    }
                }, this)).bind("mouseup.jstree", e.proxy(function (i) {
                    if (e.vakata.dnd.is_drag && e.vakata.dnd.user_data.jstree && i.currentTarget === i.target && e.vakata.dnd.user_data.obj && e(e.vakata.dnd.user_data.obj).length && e(e.vakata.dnd.user_data.obj).parents(".jstree:eq(0)")[0] !== i.target) {
                        var n, s = e.jstree._reference(i.currentTarget);
                        s.data.dnd.foreign ? (n = s._get_settings().dnd.drag_check.call(this, {o: t, r: s.get_container(), is_root: !0}), (n === !0 || n.inside === !0 || n.before === !0 || n.after === !0) && s._get_settings().dnd.drag_finish.call(this, {o: t, r: s.get_container(), is_root: !0})) : s.move_node(t, s.get_container(), "last", i[s._get_settings().dnd.copy_modifier + "Key"])
                    }
                }, this)).bind("mouseleave.jstree", e.proxy(function (t) {
                    return t.relatedTarget && t.relatedTarget.id && "jstree-marker-line" === t.relatedTarget.id ? !1 : (e.vakata.dnd.is_drag && e.vakata.dnd.user_data.jstree && (this.data.dnd.i1 && clearInterval(this.data.dnd.i1), this.data.dnd.i2 && clearInterval(this.data.dnd.i2), this.data.dnd.to1 && clearTimeout(this.data.dnd.to1), this.data.dnd.to2 && clearTimeout(this.data.dnd.to2), e.vakata.dnd.helper.children("ins").hasClass("jstree-ok") && e.vakata.dnd.helper.children("ins").attr("class", "jstree-invalid")), void 0)
                }, this)).bind("mousemove.jstree", e.proxy(function (t) {
                    if (e.vakata.dnd.is_drag && e.vakata.dnd.user_data.jstree) {
                        var i = this.get_container()[0];
                        t.pageX + 24 > this.data.dnd.cof.left + this.data.dnd.cw ? (this.data.dnd.i1 && clearInterval(this.data.dnd.i1), this.data.dnd.i1 = setInterval(e.proxy(function () {
                            this.scrollLeft += e.vakata.dnd.scroll_spd
                        }, i), 100)) : t.pageX - 24 < this.data.dnd.cof.left ? (this.data.dnd.i1 && clearInterval(this.data.dnd.i1), this.data.dnd.i1 = setInterval(e.proxy(function () {
                            this.scrollLeft -= e.vakata.dnd.scroll_spd
                        }, i), 100)) : this.data.dnd.i1 && clearInterval(this.data.dnd.i1), t.pageY + 24 > this.data.dnd.cof.top + this.data.dnd.ch ? (this.data.dnd.i2 && clearInterval(this.data.dnd.i2), this.data.dnd.i2 = setInterval(e.proxy(function () {
                            this.scrollTop += e.vakata.dnd.scroll_spd
                        }, i), 100)) : t.pageY - 24 < this.data.dnd.cof.top ? (this.data.dnd.i2 && clearInterval(this.data.dnd.i2), this.data.dnd.i2 = setInterval(e.proxy(function () {
                            this.scrollTop -= e.vakata.dnd.scroll_spd
                        }, i), 100)) : this.data.dnd.i2 && clearInterval(this.data.dnd.i2)
                    }
                }, this)).bind("scroll.jstree", e.proxy(function () {
                    e.vakata.dnd.is_drag && e.vakata.dnd.user_data.jstree && n && s && (n.hide(), s.hide())
                }, this)).delegate("a", "mousedown.jstree", e.proxy(function (e) {
                    return 1 === e.which ? (this.start_drag(e.currentTarget, e), !1) : void 0
                }, this)).delegate("a", "mouseenter.jstree", e.proxy(function (t) {
                    e.vakata.dnd.is_drag && e.vakata.dnd.user_data.jstree && this.dnd_enter(t.currentTarget)
                }, this)).delegate("a", "mousemove.jstree", e.proxy(function (t) {
                    e.vakata.dnd.is_drag && e.vakata.dnd.user_data.jstree && (i && i.length && i.children("a")[0] === t.currentTarget || this.dnd_enter(t.currentTarget), "undefined" == typeof this.data.dnd.off.top && (this.data.dnd.off = e(t.target).offset()), this.data.dnd.w = (t.pageY - (this.data.dnd.off.top || 0)) % this.data.core.li_height, this.data.dnd.w < 0 && (this.data.dnd.w += this.data.core.li_height), this.dnd_show())
                }, this)).delegate("a", "mouseleave.jstree", e.proxy(function (t) {
                    if (e.vakata.dnd.is_drag && e.vakata.dnd.user_data.jstree) {
                        if (t.relatedTarget && t.relatedTarget.id && "jstree-marker-line" === t.relatedTarget.id)return!1;
                        n && n.hide(), s && s.hide(), this.data.dnd.mto = setTimeout(function (e) {
                            return function () {
                                e.dnd_leave(t)
                            }
                        }(this), 0)
                    }
                }, this)).delegate("a", "mouseup.jstree", e.proxy(function (t) {
                    e.vakata.dnd.is_drag && e.vakata.dnd.user_data.jstree && this.dnd_finish(t)
                }, this)), e(document).bind("drag_stop.vakata", e.proxy(function () {
                    this.data.dnd.to1 && clearTimeout(this.data.dnd.to1), this.data.dnd.to2 && clearTimeout(this.data.dnd.to2), this.data.dnd.i1 && clearInterval(this.data.dnd.i1), this.data.dnd.i2 && clearInterval(this.data.dnd.i2), this.data.dnd.after = !1, this.data.dnd.before = !1, this.data.dnd.inside = !1, this.data.dnd.off = !1, this.data.dnd.prepared = !1, this.data.dnd.w = !1, this.data.dnd.to1 = !1, this.data.dnd.to2 = !1, this.data.dnd.i1 = !1, this.data.dnd.i2 = !1, this.data.dnd.active = !1, this.data.dnd.foreign = !1, n && n.css({top: "-2000px"}), s && s.css({top: "-2000px"})
                }, this)).bind("drag_start.vakata", e.proxy(function (t, i) {
                    if (i.data.jstree) {
                        var n = e(i.event.target);
                        n.closest(".jstree").hasClass("jstree-" + this.get_index()) && this.dnd_enter(n)
                    }
                }, this));
                var a = this._get_settings().dnd;
                a.drag_target && e(document).delegate(a.drag_target, "mousedown.jstree-" + this.get_index(), e.proxy(function (i) {
                    t = i.target, e.vakata.dnd.drag_start(i, {jstree: !0, obj: i.target}, "<ins class='jstree-icon'></ins>" + e(i.target).text()), this.data.themes && (n && n.attr("class", "jstree-" + this.data.themes.theme), s && s.attr("class", "jstree-" + this.data.themes.theme), e.vakata.dnd.helper.attr("class", "jstree-dnd-helper jstree-" + this.data.themes.theme)), e.vakata.dnd.helper.children("ins").attr("class", "jstree-invalid");
                    var a = this.get_container();
                    this.data.dnd.cof = a.offset(), this.data.dnd.cw = parseInt(a.width(), 10), this.data.dnd.ch = parseInt(a.height(), 10), this.data.dnd.foreign = !0, i.preventDefault()
                }, this)), a.drop_target && e(document).delegate(a.drop_target, "mouseenter.jstree-" + this.get_index(), e.proxy(function (i) {
                    this.data.dnd.active && this._get_settings().dnd.drop_check.call(this, {o: t, r: e(i.target), e: i}) && e.vakata.dnd.helper.children("ins").attr("class", "jstree-ok")
                }, this)).delegate(a.drop_target, "mouseleave.jstree-" + this.get_index(), e.proxy(function () {
                    this.data.dnd.active && e.vakata.dnd.helper.children("ins").attr("class", "jstree-invalid")
                }, this)).delegate(a.drop_target, "mouseup.jstree-" + this.get_index(), e.proxy(function (i) {
                    this.data.dnd.active && e.vakata.dnd.helper.children("ins").hasClass("jstree-ok") && this._get_settings().dnd.drop_finish.call(this, {o: t, r: e(i.target), e: i})
                }, this))
            }, defaults: {copy_modifier: "ctrl", check_timeout: 100, open_timeout: 500, drop_target: ".jstree-drop", drop_check: function () {
                return!0
            }, drop_finish: e.noop, drag_target: ".jstree-draggable", drag_finish: e.noop, drag_check: function () {
                return{after: !1, before: !1, inside: !0}
            }}, _fn: {dnd_prepare: function () {
                if (i && i.length) {
                    if (this.data.dnd.off = i.offset(), this._get_settings().core.rtl && (this.data.dnd.off.right = this.data.dnd.off.left + i.width()), this.data.dnd.foreign) {
                        var e = this._get_settings().dnd.drag_check.call(this, {o: t, r: i});
                        return this.data.dnd.after = e.after, this.data.dnd.before = e.before, this.data.dnd.inside = e.inside, this.data.dnd.prepared = !0, this.dnd_show()
                    }
                    return this.prepare_move(t, i, "before"), this.data.dnd.before = this.check_move(), this.prepare_move(t, i, "after"), this.data.dnd.after = this.check_move(), this._is_loaded(i) ? (this.prepare_move(t, i, "inside"), this.data.dnd.inside = this.check_move()) : this.data.dnd.inside = !1, this.data.dnd.prepared = !0, this.dnd_show()
                }
            }, dnd_show: function () {
                if (this.data.dnd.prepared) {
                    var t, i = ["before", "inside", "after"], a = !1, r = this._get_settings().core.rtl;
                    switch (i = this.data.dnd.w < this.data.core.li_height / 3 ? ["before", "inside", "after"] : this.data.dnd.w <= 2 * this.data.core.li_height / 3 ? this.data.dnd.w < this.data.core.li_height / 2 ? ["inside", "before", "after"] : ["inside", "after", "before"] : ["after", "inside", "before"], e.each(i, e.proxy(function (t, i) {
                        return this.data.dnd[i] ? (e.vakata.dnd.helper.children("ins").attr("class", "jstree-ok"), a = i, !1) : void 0
                    }, this)), a === !1 && e.vakata.dnd.helper.children("ins").attr("class", "jstree-invalid"), t = r ? this.data.dnd.off.right - 18 : this.data.dnd.off.left + 10, a) {
                        case"before":
                            n.css({left: t + "px", top: this.data.dnd.off.top - 6 + "px"}).show(), s && s.css({left: t + 8 + "px", top: this.data.dnd.off.top - 1 + "px"}).show();
                            break;
                        case"after":
                            n.css({left: t + "px", top: this.data.dnd.off.top + this.data.core.li_height - 6 + "px"}).show(), s && s.css({left: t + 8 + "px", top: this.data.dnd.off.top + this.data.core.li_height - 1 + "px"}).show();
                            break;
                        case"inside":
                            n.css({left: t + (r ? -4 : 4) + "px", top: this.data.dnd.off.top + this.data.core.li_height / 2 - 5 + "px"}).show(), s && s.hide();
                            break;
                        default:
                            n.hide(), s && s.hide()
                    }
                    return c = a, a
                }
            }, dnd_open: function () {
                this.data.dnd.to2 = !1, this.open_node(i, e.proxy(this.dnd_prepare, this), !0)
            }, dnd_finish: function (e) {
                this.data.dnd.foreign ? (this.data.dnd.after || this.data.dnd.before || this.data.dnd.inside) && this._get_settings().dnd.drag_finish.call(this, {o: t, r: i, p: c}) : (this.dnd_prepare(), this.move_node(t, i, c, e[this._get_settings().dnd.copy_modifier + "Key"])), t = !1, i = !1, n.hide(), s && s.hide()
            }, dnd_enter: function (t) {
                this.data.dnd.mto && (clearTimeout(this.data.dnd.mto), this.data.dnd.mto = !1);
                var n = this._get_settings().dnd;
                this.data.dnd.prepared = !1, i = this._get_node(t), n.check_timeout ? (this.data.dnd.to1 && clearTimeout(this.data.dnd.to1), this.data.dnd.to1 = setTimeout(e.proxy(this.dnd_prepare, this), n.check_timeout)) : this.dnd_prepare(), n.open_timeout ? (this.data.dnd.to2 && clearTimeout(this.data.dnd.to2), i && i.length && i.hasClass("jstree-closed") && (this.data.dnd.to2 = setTimeout(e.proxy(this.dnd_open, this), n.open_timeout))) : i && i.length && i.hasClass("jstree-closed") && this.dnd_open()
            }, dnd_leave: function (t) {
                this.data.dnd.after = !1, this.data.dnd.before = !1, this.data.dnd.inside = !1, e.vakata.dnd.helper.children("ins").attr("class", "jstree-invalid"), n.hide(), s && s.hide(), i && i[0] === t.target.parentNode && (this.data.dnd.to1 && (clearTimeout(this.data.dnd.to1), this.data.dnd.to1 = !1), this.data.dnd.to2 && (clearTimeout(this.data.dnd.to2), this.data.dnd.to2 = !1))
            }, start_drag: function (i, a) {
                t = this._get_node(i), this.data.ui && this.is_selected(t) && (t = this._get_node(null, !0));
                var r = t.length > 1 ? this._get_string("multiple_selection") : this.get_text(t), o = this.get_container();
                this._get_settings().core.html_titles || (r = r.replace(/</gi, "&lt;").replace(/>/gi, "&gt;")), e.vakata.dnd.drag_start(a, {jstree: !0, obj: t}, "<ins class='jstree-icon'></ins>" + r), this.data.themes && (n && n.attr("class", "jstree-" + this.data.themes.theme), s && s.attr("class", "jstree-" + this.data.themes.theme), e.vakata.dnd.helper.attr("class", "jstree-dnd-helper jstree-" + this.data.themes.theme)), this.data.dnd.cof = o.offset(), this.data.dnd.cw = parseInt(o.width(), 10), this.data.dnd.ch = parseInt(o.height(), 10), this.data.dnd.active = !0
            }}}), e(function () {
                var t = "#vakata-dragged ins { display:block; text-decoration:none; width:16px; height:16px; margin:0 0 0 0; padding:0; position:absolute; top:4px; left:4px;  -moz-border-radius:4px; border-radius:4px; -webkit-border-radius:4px; } #vakata-dragged .jstree-ok { background:green; } #vakata-dragged .jstree-invalid { background:red; } #jstree-marker { padding:0; margin:0; font-size:12px; overflow:hidden; height:12px; width:8px; position:absolute; top:-30px; z-index:10001; background-repeat:no-repeat; display:none; background-color:transparent; text-shadow:1px 1px 1px white; color:black; line-height:10px; } #jstree-marker-line { padding:0; margin:0; line-height:0%; font-size:1px; overflow:hidden; height:1px; width:100px; position:absolute; top:-30px; z-index:10000; background-repeat:no-repeat; display:none; background-color:#456c43;  cursor:pointer; border:1px solid #eeeeee; border-left:0; -moz-box-shadow: 0px 0px 2px #666; -webkit-box-shadow: 0px 0px 2px #666; box-shadow: 0px 0px 2px #666;  -moz-border-radius:1px; border-radius:1px; -webkit-border-radius:1px; }";
                e.vakata.css.add_sheet({str: t, title: "jstree"}), n = e("<div />").attr({id: "jstree-marker"}).hide().html("&raquo;").bind("mouseleave mouseenter",function (e) {
                    return n.hide(), s.hide(), e.preventDefault(), e.stopImmediatePropagation(), !1
                }).appendTo("body"), s = e("<div />").attr({id: "jstree-marker-line"}).hide().bind("mouseup",function (e) {
                    return i && i.length ? (i.children("a").trigger(e), e.preventDefault(), e.stopImmediatePropagation(), !1) : void 0
                }).bind("mouseleave",function (t) {
                    var a = e(t.relatedTarget);
                    return(a.is(".jstree") || 0 === a.closest(".jstree").length) && i && i.length ? (i.children("a").trigger(t), n.hide(), s.hide(), t.preventDefault(), t.stopImmediatePropagation(), !1) : void 0
                }).appendTo("body"), e(document).bind("drag_start.vakata", function (e, t) {
                    t.data.jstree && (n.show(), s && s.show())
                }), e(document).bind("drag_stop.vakata", function (e, t) {
                    t.data.jstree && (n.hide(), s && s.hide())
                })
            })
        }(jQuery), function (e) {
            e.jstree.plugin("checkbox", {__init: function () {
                this.data.checkbox.noui = this._get_settings().checkbox.override_ui, this.data.ui && this.data.checkbox.noui && (this.select_node = this.deselect_node = this.deselect_all = e.noop, this.get_selected = this.get_checked), this.get_container().bind("open_node.jstree create_node.jstree clean_node.jstree refresh.jstree", e.proxy(function (e, t) {
                    this._prepare_checkboxes(t.rslt.obj)
                }, this)).bind("loaded.jstree", e.proxy(function () {
                    this._prepare_checkboxes()
                }, this)).delegate(this.data.ui && this.data.checkbox.noui ? "a" : "ins.jstree-checkbox", "click.jstree", e.proxy(function (e) {
                    return e.preventDefault(), this._get_node(e.target).hasClass("jstree-checked") ? this.uncheck_node(e.target) : this.check_node(e.target), this.data.ui && this.data.checkbox.noui ? (this.save_selected(), this.data.cookies && this.save_cookie("select_node"), void 0) : (e.stopImmediatePropagation(), !1)
                }, this))
            }, defaults: {override_ui: !1, two_state: !1, real_checkboxes: !1, checked_parent_open: !0, real_checkboxes_names: function (e) {
                return["check_" + (e[0].id || Math.ceil(1e4 * Math.random())), 1]
            }}, __destroy: function () {
                this.get_container().find("input.jstree-real-checkbox").removeClass("jstree-real-checkbox").end().find("ins.jstree-checkbox").remove()
            }, _fn: {_checkbox_notify: function (e, t) {
                t.checked && this.check_node(e, !1)
            }, _prepare_checkboxes: function (t) {
                if (t = t && -1 != t ? this._get_node(t) : this.get_container().find("> ul > li"), t !== !1) {
                    var i, n, s = this, a = this._get_settings().checkbox.two_state, r = this._get_settings().checkbox.real_checkboxes, o = this._get_settings().checkbox.real_checkboxes_names;
                    t.each(function () {
                        n = e(this), i = n.is("li") && (n.hasClass("jstree-checked") || r && n.children(":checked").length) ? "jstree-checked" : "jstree-unchecked", n.find("li").andSelf().each(function () {
                            var t, n = e(this);
                            n.children("a" + (s.data.languages ? "" : ":eq(0)")).not(":has(.jstree-checkbox)").prepend("<ins class='jstree-checkbox'>&#160;</ins>").parent().not(".jstree-checked, .jstree-unchecked").addClass(a ? "jstree-unchecked" : i), r && (n.children(":checkbox").length ? n.children(":checkbox").addClass("jstree-real-checkbox") : (t = o.call(s, n), n.prepend("<input type='checkbox' class='jstree-real-checkbox' id='" + t[0] + "' name='" + t[0] + "' value='" + t[1] + "' />")), "jstree-checked" === i && n.children(":checkbox").attr("checked", "checked")), "jstree-checked" !== i || a || n.find("li").addClass("jstree-checked")
                        })
                    }), a || (1 === t.length && t.is("li") && this._repair_state(t), t.is("li") ? t.each(function () {
                        s._repair_state(this)
                    }) : t.find("> ul > li").each(function () {
                        s._repair_state(this)
                    }), t.find(".jstree-checked").parent().parent().each(function () {
                        s._repair_state(this)
                    }))
                }
            }, change_state: function (t, i) {
                t = this._get_node(t);
                var n = !1, s = this._get_settings().checkbox.real_checkboxes;
                if (!t || -1 === t)return!1;
                if (i = i === !1 || i === !0 ? i : t.hasClass("jstree-checked"), this._get_settings().checkbox.two_state)i ? (t.removeClass("jstree-checked").addClass("jstree-unchecked"), s && t.children(":checkbox").removeAttr("checked")) : (t.removeClass("jstree-unchecked").addClass("jstree-checked"), s && t.children(":checkbox").attr("checked", "checked")); else {
                    if (i) {
                        if (n = t.find("li").andSelf(), !n.filter(".jstree-checked, .jstree-undetermined").length)return!1;
                        n.removeClass("jstree-checked jstree-undetermined").addClass("jstree-unchecked"), s && n.children(":checkbox").removeAttr("checked")
                    } else {
                        if (n = t.find("li").andSelf(), !n.filter(".jstree-unchecked, .jstree-undetermined").length)return!1;
                        n.removeClass("jstree-unchecked jstree-undetermined").addClass("jstree-checked"), s && n.children(":checkbox").attr("checked", "checked"), this.data.ui && (this.data.ui.last_selected = t), this.data.checkbox.last_selected = t
                    }
                    t.parentsUntil(".jstree", "li").each(function () {
                        var t = e(this);
                        if (i) {
                            if (t.children("ul").children("li.jstree-checked, li.jstree-undetermined").length)return t.parentsUntil(".jstree", "li").andSelf().removeClass("jstree-checked jstree-unchecked").addClass("jstree-undetermined"), s && t.parentsUntil(".jstree", "li").andSelf().children(":checkbox").removeAttr("checked"), !1;
                            t.removeClass("jstree-checked jstree-undetermined").addClass("jstree-unchecked"), s && t.children(":checkbox").removeAttr("checked")
                        } else {
                            if (t.children("ul").children("li.jstree-unchecked, li.jstree-undetermined").length)return t.parentsUntil(".jstree", "li").andSelf().removeClass("jstree-checked jstree-unchecked").addClass("jstree-undetermined"), s && t.parentsUntil(".jstree", "li").andSelf().children(":checkbox").removeAttr("checked"), !1;
                            t.removeClass("jstree-unchecked jstree-undetermined").addClass("jstree-checked"), s && t.children(":checkbox").attr("checked", "checked")
                        }
                    })
                }
                return this.data.ui && this.data.checkbox.noui && (this.data.ui.selected = this.get_checked()), this.__callback(t), !0
            }, check_node: function (e) {
                if (this.change_state(e, !1)) {
                    if (e = this._get_node(e), this._get_settings().checkbox.checked_parent_open) {
                        var t = this;
                        e.parents(".jstree-closed").each(function () {
                            t.open_node(this, !1, !0)
                        })
                    }
                    this.__callback({obj: e})
                }
            }, uncheck_node: function (e) {
                this.change_state(e, !0) && this.__callback({obj: this._get_node(e)})
            }, check_all: function () {
                var e = this, t = this._get_settings().checkbox.two_state ? this.get_container_ul().find("li") : this.get_container_ul().children("li");
                t.each(function () {
                    e.change_state(this, !1)
                }), this.__callback()
            }, uncheck_all: function () {
                var e = this, t = this._get_settings().checkbox.two_state ? this.get_container_ul().find("li") : this.get_container_ul().children("li");
                t.each(function () {
                    e.change_state(this, !0)
                }), this.__callback()
            }, is_checked: function (e) {
                return e = this._get_node(e), e.length ? e.is(".jstree-checked") : !1
            }, get_checked: function (e, t) {
                return e = e && -1 !== e ? this._get_node(e) : this.get_container(), t || this._get_settings().checkbox.two_state ? e.find(".jstree-checked") : e.find("> ul > .jstree-checked, .jstree-undetermined > ul > .jstree-checked")
            }, get_unchecked: function (e, t) {
                return e = e && -1 !== e ? this._get_node(e) : this.get_container(), t || this._get_settings().checkbox.two_state ? e.find(".jstree-unchecked") : e.find("> ul > .jstree-unchecked, .jstree-undetermined > ul > .jstree-unchecked")
            }, show_checkboxes: function () {
                this.get_container().children("ul").removeClass("jstree-no-checkboxes")
            }, hide_checkboxes: function () {
                this.get_container().children("ul").addClass("jstree-no-checkboxes")
            }, _repair_state: function (e) {
                if (e = this._get_node(e), e.length) {
                    var t = this._get_settings().checkbox.real_checkboxes, i = e.find("> ul > .jstree-checked").length, n = e.find("> ul > .jstree-undetermined").length, s = e.find("> ul > li").length;
                    0 === s ? e.hasClass("jstree-undetermined") && this.change_state(e, !1) : 0 === i && 0 === n ? this.change_state(e, !0) : i === s ? this.change_state(e, !1) : (e.parentsUntil(".jstree", "li").andSelf().removeClass("jstree-checked jstree-unchecked").addClass("jstree-undetermined"), t && e.parentsUntil(".jstree", "li").andSelf().children(":checkbox").removeAttr("checked"))
                }
            }, reselect: function () {
                if (this.data.ui && this.data.checkbox.noui) {
                    var t = this, i = this.data.ui.to_select;
                    i = e.map(e.makeArray(i), function (e) {
                        return"#" + e.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:")
                    }), this.deselect_all(), e.each(i, function (e, i) {
                        t.check_node(i)
                    }), this.__callback()
                } else this.__call_old()
            }, save_loaded: function () {
                var e = this;
                this.data.core.to_load = [], this.get_container_ul().find("li.jstree-closed.jstree-undetermined").each(function () {
                    this.id && e.data.core.to_load.push("#" + this.id)
                })
            }}}), e(function () {
                var t = ".jstree .jstree-real-checkbox { display:none; } ";
                e.vakata.css.add_sheet({str: t, title: "jstree"})
            })
        }(jQuery), function (e) {
            e.vakata.xslt = function (t, i, n) {
                var s, a, r, o, l = "";
                return document.recalc ? (s = document.createElement("xml"), a = document.createElement("xml"), s.innerHTML = t, a.innerHTML = i, e("body").append(s).append(a), setTimeout(function (t, i, n) {
                    return function () {
                        n.call(null, t.transformNode(i.XMLDocument)), setTimeout(function (t, i) {
                            return function () {
                                e(t).remove(), e(i).remove()
                            }
                        }(t, i), 200)
                    }
                }(s, a, n), 100), !0) : ("undefined" != typeof window.DOMParser && "undefined" != typeof window.XMLHttpRequest && "undefined" == typeof window.XSLTProcessor && (t = (new DOMParser).parseFromString(t, "text/xml"), i = (new DOMParser).parseFromString(i, "text/xml")), "undefined" != typeof window.DOMParser && "undefined" != typeof window.XMLHttpRequest && "undefined" != typeof window.XSLTProcessor ? (r = new XSLTProcessor, (o = e.isFunction(r.transformDocument) ? "undefined" != typeof window.XMLSerializer : !0) ? (t = (new DOMParser).parseFromString(t, "text/xml"), i = (new DOMParser).parseFromString(i, "text/xml"), e.isFunction(r.transformDocument) ? (l = document.implementation.createDocument("", "", null), r.transformDocument(t, i, l, null), n.call(null, (new XMLSerializer).serializeToString(l)), !0) : (r.importStylesheet(i), l = r.transformToFragment(t, document), n.call(null, e("<div />").append(l).html()), !0)) : !1) : !1)
            };
            var t = {nest: '<?xml version="1.0" encoding="utf-8" ?><xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" ><xsl:output method="html" encoding="utf-8" omit-xml-declaration="yes" standalone="no" indent="no" media-type="text/html" /><xsl:template match="/">	<xsl:call-template name="nodes">		<xsl:with-param name="node" select="/root" />	</xsl:call-template></xsl:template><xsl:template name="nodes">	<xsl:param name="node" />	<ul>	<xsl:for-each select="$node/item">		<xsl:variable name="children" select="count(./item) &gt; 0" />		<li>			<xsl:attribute name="class">				<xsl:if test="position() = last()">jstree-last </xsl:if>				<xsl:choose>					<xsl:when test="@state = \'open\'">jstree-open </xsl:when>					<xsl:when test="$children or @hasChildren or @state = \'closed\'">jstree-closed </xsl:when>					<xsl:otherwise>jstree-leaf </xsl:otherwise>				</xsl:choose>				<xsl:value-of select="@class" />			</xsl:attribute>			<xsl:for-each select="@*">				<xsl:if test="name() != \'class\' and name() != \'state\' and name() != \'hasChildren\'">					<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>				</xsl:if>			</xsl:for-each>	<ins class="jstree-icon"><xsl:text>&#xa0;</xsl:text></ins>			<xsl:for-each select="content/name">				<a>				<xsl:attribute name="href">					<xsl:choose>					<xsl:when test="@href"><xsl:value-of select="@href" /></xsl:when>					<xsl:otherwise>#</xsl:otherwise>					</xsl:choose>				</xsl:attribute>				<xsl:attribute name="class"><xsl:value-of select="@lang" /> <xsl:value-of select="@class" /></xsl:attribute>				<xsl:attribute name="style"><xsl:value-of select="@style" /></xsl:attribute>				<xsl:for-each select="@*">					<xsl:if test="name() != \'style\' and name() != \'class\' and name() != \'href\'">						<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>					</xsl:if>				</xsl:for-each>					<ins>						<xsl:attribute name="class">jstree-icon 							<xsl:if test="string-length(attribute::icon) > 0 and not(contains(@icon,\'/\'))"><xsl:value-of select="@icon" /></xsl:if>						</xsl:attribute>						<xsl:if test="string-length(attribute::icon) > 0 and contains(@icon,\'/\')"><xsl:attribute name="style">background:url(<xsl:value-of select="@icon" />) center center no-repeat;</xsl:attribute></xsl:if>						<xsl:text>&#xa0;</xsl:text>					</ins>					<xsl:copy-of select="./child::node()" />				</a>			</xsl:for-each>			<xsl:if test="$children or @hasChildren"><xsl:call-template name="nodes"><xsl:with-param name="node" select="current()" /></xsl:call-template></xsl:if>		</li>	</xsl:for-each>	</ul></xsl:template></xsl:stylesheet>', flat: '<?xml version="1.0" encoding="utf-8" ?><xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" ><xsl:output method="html" encoding="utf-8" omit-xml-declaration="yes" standalone="no" indent="no" media-type="text/xml" /><xsl:template match="/">	<ul>	<xsl:for-each select="//item[not(@parent_id) or @parent_id=0 or not(@parent_id = //item/@id)]">		<xsl:call-template name="nodes">			<xsl:with-param name="node" select="." />			<xsl:with-param name="is_last" select="number(position() = last())" />		</xsl:call-template>	</xsl:for-each>	</ul></xsl:template><xsl:template name="nodes">	<xsl:param name="node" />	<xsl:param name="is_last" />	<xsl:variable name="children" select="count(//item[@parent_id=$node/attribute::id]) &gt; 0" />	<li>	<xsl:attribute name="class">		<xsl:if test="$is_last = true()">jstree-last </xsl:if>		<xsl:choose>			<xsl:when test="@state = \'open\'">jstree-open </xsl:when>			<xsl:when test="$children or @hasChildren or @state = \'closed\'">jstree-closed </xsl:when>			<xsl:otherwise>jstree-leaf </xsl:otherwise>		</xsl:choose>		<xsl:value-of select="@class" />	</xsl:attribute>	<xsl:for-each select="@*">		<xsl:if test="name() != \'parent_id\' and name() != \'hasChildren\' and name() != \'class\' and name() != \'state\'">		<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>		</xsl:if>	</xsl:for-each>	<ins class="jstree-icon"><xsl:text>&#xa0;</xsl:text></ins>	<xsl:for-each select="content/name">		<a>		<xsl:attribute name="href">			<xsl:choose>			<xsl:when test="@href"><xsl:value-of select="@href" /></xsl:when>			<xsl:otherwise>#</xsl:otherwise>			</xsl:choose>		</xsl:attribute>		<xsl:attribute name="class"><xsl:value-of select="@lang" /> <xsl:value-of select="@class" /></xsl:attribute>		<xsl:attribute name="style"><xsl:value-of select="@style" /></xsl:attribute>		<xsl:for-each select="@*">			<xsl:if test="name() != \'style\' and name() != \'class\' and name() != \'href\'">				<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>			</xsl:if>		</xsl:for-each>			<ins>				<xsl:attribute name="class">jstree-icon 					<xsl:if test="string-length(attribute::icon) > 0 and not(contains(@icon,\'/\'))"><xsl:value-of select="@icon" /></xsl:if>				</xsl:attribute>				<xsl:if test="string-length(attribute::icon) > 0 and contains(@icon,\'/\')"><xsl:attribute name="style">background:url(<xsl:value-of select="@icon" />) center center no-repeat;</xsl:attribute></xsl:if>				<xsl:text>&#xa0;</xsl:text>			</ins>			<xsl:copy-of select="./child::node()" />		</a>	</xsl:for-each>	<xsl:if test="$children">		<ul>		<xsl:for-each select="//item[@parent_id=$node/attribute::id]">			<xsl:call-template name="nodes">				<xsl:with-param name="node" select="." />				<xsl:with-param name="is_last" select="number(position() = last())" />			</xsl:call-template>		</xsl:for-each>		</ul>	</xsl:if>	</li></xsl:template></xsl:stylesheet>'}, i = function (e) {
                return e.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
            };
            e.jstree.plugin("xml_data", {defaults: {data: !1, ajax: !1, xsl: "flat", clean_node: !1, correct_state: !0, get_skip_empty: !1, get_include_preamble: !0}, _fn: {load_node: function (e, t, i) {
                var n = this;
                this.load_node_xml(e, function () {
                    n.__callback({obj: n._get_node(e)}), t.call(this)
                }, i)
            }, _is_loaded: function (t) {
                var i = this._get_settings().xml_data;
                return t = this._get_node(t), -1 == t || !t || !i.ajax && !e.isFunction(i.data) || t.is(".jstree-open, .jstree-leaf") || t.children("ul").children("li").size() > 0
            }, load_node_xml: function (t, i, n) {
                var s = this.get_settings().xml_data, a = function () {
                }, r = function () {
                };
                if (t = this._get_node(t), t && -1 !== t) {
                    if (t.data("jstree-is-loading"))return;
                    t.data("jstree-is-loading", !0)
                }
                switch (!0) {
                    case!s.data && !s.ajax:
                        throw"Neither data nor ajax settings supplied.";
                    case e.isFunction(s.data):
                        s.data.call(this, t, e.proxy(function (n) {
                            this.parse_xml(n, e.proxy(function (n) {
                                n && (n = n.replace(/ ?xmlns="[^"]*"/gi, ""), n.length > 10 ? (n = e(n), -1 !== t && t ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.append(n), t.removeData("jstree-is-loading")) : this.get_container().children("ul").empty().append(n.children()), s.clean_node && this.clean_node(t), i && i.call(this)) : t && -1 !== t ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.removeData("jstree-is-loading"), s.correct_state && (this.correct_state(t), i && i.call(this))) : s.correct_state && (this.get_container().children("ul").empty(), i && i.call(this)))
                            }, this))
                        }, this));
                        break;
                    case!!s.data && !s.ajax || !!s.data && !!s.ajax && (!t || -1 === t):
                        t && -1 != t || this.parse_xml(s.data, e.proxy(function (n) {
                            n ? (n = n.replace(/ ?xmlns="[^"]*"/gi, ""), n.length > 10 && (n = e(n), this.get_container().children("ul").empty().append(n.children()), s.clean_node && this.clean_node(t), i && i.call(this))) : s.correct_state && (this.get_container().children("ul").empty(), i && i.call(this))
                        }, this));
                        break;
                    case!s.data && !!s.ajax || !!s.data && !!s.ajax && t && -1 !== t:
                        a = function (e, i, a) {
                            var r = this.get_settings().xml_data.ajax.error;
                            r && r.call(this, e, i, a), -1 !== t && t.length ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.removeData("jstree-is-loading"), "success" === i && s.correct_state && this.correct_state(t)) : "success" === i && s.correct_state && this.get_container().children("ul").empty(), n && n.call(this)
                        }, r = function (n, r, o) {
                            n = o.responseText;
                            var l = this.get_settings().xml_data.ajax.success;
                            return l && (n = l.call(this, n, r, o) || n), "" === n || n && n.toString && "" === n.toString().replace(/^[\s\n]+$/, "") ? a.call(this, o, r, "") : (this.parse_xml(n, e.proxy(function (n) {
                                n && (n = n.replace(/ ?xmlns="[^"]*"/gi, ""), n.length > 10 ? (n = e(n), -1 !== t && t ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.append(n), t.removeData("jstree-is-loading")) : this.get_container().children("ul").empty().append(n.children()), s.clean_node && this.clean_node(t), i && i.call(this)) : t && -1 !== t ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.removeData("jstree-is-loading"), s.correct_state && (this.correct_state(t), i && i.call(this))) : s.correct_state && (this.get_container().children("ul").empty(), i && i.call(this)))
                            }, this)), void 0)
                        }, s.ajax.context = this, s.ajax.error = a, s.ajax.success = r, s.ajax.dataType || (s.ajax.dataType = "xml"), e.isFunction(s.ajax.url) && (s.ajax.url = s.ajax.url.call(this, t)), e.isFunction(s.ajax.data) && (s.ajax.data = s.ajax.data.call(this, t)), e.ajax(s.ajax)
                }
            }, parse_xml: function (i, n) {
                var s = this._get_settings().xml_data;
                e.vakata.xslt(i, t[s.xsl], n)
            }, get_xml: function (t, n, s, a, r) {
                var o, l, c, h, u, d = "", p = this._get_settings(), f = this;
                return t || (t = "flat"), r || (r = 0), n = this._get_node(n), n && -1 !== n || (n = this.get_container().find("> ul > li")), s = e.isArray(s) ? s : ["id", "class"], !r && this.data.types && -1 === e.inArray(p.types.type_attr, s) && s.push(p.types.type_attr), a = e.isArray(a) ? a : [], r || (p.xml_data.get_include_preamble && (d += '<?xml version="1.0" encoding="UTF-8"?>'), d += "<root>"), n.each(function () {
                    d += "<item", c = e(this), e.each(s, function (e, t) {
                        var n = c.attr(t);
                        p.xml_data.get_skip_empty && "undefined" == typeof n || (d += " " + t + '="' + i((" " + (n || "")).replace(/ jstree[^ ]*/gi, "").replace(/\s+$/gi, " ").replace(/^ /, "").replace(/ $/, "")) + '"')
                    }), c.hasClass("jstree-open") && (d += ' state="open"'), c.hasClass("jstree-closed") && (d += ' state="closed"'), "flat" === t && (d += ' parent_id="' + i(r) + '"'), d += ">", d += "<content>", h = c.children("a"), h.each(function () {
                        o = e(this), u = !1, d += "<name", -1 !== e.inArray("languages", p.plugins) && e.each(p.languages, function (e, t) {
                            return o.hasClass(t) ? (d += ' lang="' + i(t) + '"', u = t, !1) : void 0
                        }), a.length && e.each(a, function (e, t) {
                            var n = o.attr(t);
                            p.xml_data.get_skip_empty && "undefined" == typeof n || (d += " " + t + '="' + i((" " + n || "").replace(/ jstree[^ ]*/gi, "").replace(/\s+$/gi, " ").replace(/^ /, "").replace(/ $/, "")) + '"')
                        }), o.children("ins").get(0).className.replace(/jstree[^ ]*|$/gi, "").replace(/^\s+$/gi, "").length && (d += ' icon="' + i(o.children("ins").get(0).className.replace(/jstree[^ ]*|$/gi, "").replace(/\s+$/gi, " ").replace(/^ /, "").replace(/ $/, "")) + '"'), o.children("ins").get(0).style.backgroundImage.length && (d += ' icon="' + i(o.children("ins").get(0).style.backgroundImage.replace("url(", "").replace(")", "").replace(/'/gi, "").replace(/"/gi, "")) + '"'), d += ">", d += "<![CDATA[" + f.get_text(o, u) + "]]>", d += "</name>"
                    }), d += "</content>", l = c[0].id || !0, c = c.find("> ul > li"), l = c.length ? f.get_xml(t, c, s, a, l) : "", "nest" == t && (d += l), d += "</item>", "flat" == t && (d += l)
                }), r || (d += "</root>"), d
            }}})
        }(jQuery), function (e) {
            e.expr[":"].jstree_contains = function (e, t, i) {
                return(e.textContent || e.innerText || "").toLowerCase().indexOf(i[3].toLowerCase()) >= 0
            }, e.expr[":"].jstree_title_contains = function (e, t, i) {
                return(e.getAttribute("title") || "").toLowerCase().indexOf(i[3].toLowerCase()) >= 0
            }, e.jstree.plugin("search", {__init: function () {
                this.data.search.str = "", this.data.search.result = e(), this._get_settings().search.show_only_matches && this.get_container().bind("search.jstree",function (t, i) {
                    e(this).children("ul").find("li").hide().removeClass("jstree-last"), i.rslt.nodes.parentsUntil(".jstree").andSelf().show().filter("ul").each(function () {
                        e(this).children("li:visible").eq(-1).addClass("jstree-last")
                    })
                }).bind("clear_search.jstree", function () {
                    e(this).children("ul").find("li").css("display", "").end().end().jstree("clean_node", -1)
                })
            }, defaults: {ajax: !1, search_method: "jstree_contains", show_only_matches: !1}, _fn: {search: function (t, i) {
                if ("" === e.trim(t))return this.clear_search(), void 0;
                var n = this.get_settings().search, s = this, a = function () {
                }, r = function () {
                };
                return this.data.search.str = t, !i && n.ajax !== !1 && this.get_container_ul().find("li.jstree-closed:not(:has(ul)):eq(0)").length > 0 ? (this.search.supress_callback = !0, a = function () {
                }, r = function (e, t, i) {
                    var n = this.get_settings().search.ajax.success;
                    n && (e = n.call(this, e, t, i) || e), this.data.search.to_open = e, this._search_open()
                }, n.ajax.context = this, n.ajax.error = a, n.ajax.success = r, e.isFunction(n.ajax.url) && (n.ajax.url = n.ajax.url.call(this, t)), e.isFunction(n.ajax.data) && (n.ajax.data = n.ajax.data.call(this, t)), n.ajax.data || (n.ajax.data = {search_string: t}), (!n.ajax.dataType || /^json/.exec(n.ajax.dataType)) && (n.ajax.dataType = "json"), e.ajax(n.ajax), void 0) : (this.data.search.result.length && this.clear_search(), this.data.search.result = this.get_container().find("a" + (this.data.languages ? "." + this.get_lang() : "") + ":" + n.search_method + "(" + this.data.search.str + ")"), this.data.search.result.addClass("jstree-search").parent().parents(".jstree-closed").each(function () {
                    s.open_node(this, !1, !0)
                }), this.__callback({nodes: this.data.search.result, str: t}), void 0)
            }, clear_search: function () {
                this.data.search.result.removeClass("jstree-search"), this.__callback(this.data.search.result), this.data.search.result = e()
            }, _search_open: function () {
                var t = this, i = !0, n = [], s = [];
                this.data.search.to_open.length && (e.each(this.data.search.to_open, function (t, i) {
                    return"#" == i ? !0 : (e(i).length && e(i).is(".jstree-closed") ? n.push(i) : s.push(i), void 0)
                }), n.length && (this.data.search.to_open = s, e.each(n, function (e, i) {
                    t.open_node(i, function () {
                        t._search_open(!0)
                    })
                }), i = !1)), i && this.search(this.data.search.str, !0)
            }}})
        }(jQuery), function (e) {
            e.vakata.context = {hide_on_mouseleave: !1, cnt: e("<div id='vakata-contextmenu' />"), vis: !1, tgt: !1, par: !1, func: !1, data: !1, rtl: !1, show: function (t, i, n, s, a, r, o) {
                e.vakata.context.rtl = !!o;
                var l, c, h = e.vakata.context.parse(t);
                h && (e.vakata.context.vis = !0, e.vakata.context.tgt = i, e.vakata.context.par = r || i || null, e.vakata.context.data = a || null, e.vakata.context.cnt.html(h).css({visibility: "hidden", display: "block", left: 0, top: 0}), e.vakata.context.hide_on_mouseleave && e.vakata.context.cnt.one("mouseleave", function () {
                    e.vakata.context.hide()
                }), l = e.vakata.context.cnt.height(), c = e.vakata.context.cnt.width(), n + c > e(document).width() && (n = e(document).width() - (c + 5), e.vakata.context.cnt.find("li > ul").addClass("right")), s + l > e(document).height() && (s -= l + i[0].offsetHeight, e.vakata.context.cnt.find("li > ul").addClass("bottom")), e.vakata.context.cnt.css({left: n, top: s}).find("li:has(ul)").bind("mouseenter",function () {
                    var t = e(document).width(), i = e(document).height(), n = e(this).children("ul").show();
                    t !== e(document).width() && n.toggleClass("right"), i !== e(document).height() && n.toggleClass("bottom")
                }).bind("mouseleave",function () {
                    e(this).children("ul").hide()
                }).end().css({visibility: "visible"}).show(), e(document).triggerHandler("context_show.vakata"))
            }, hide: function () {
                e.vakata.context.vis = !1, e.vakata.context.cnt.attr("class", "").css({visibility: "hidden"}), e(document).triggerHandler("context_hide.vakata")
            }, parse: function (t, i) {
                if (!t)return!1;
                var n = "", s = !1, a = !0;
                return i || (e.vakata.context.func = {}), n += "<ul>", e.each(t, function (t, i) {
                    return i ? (e.vakata.context.func[t] = i.action, !a && i.separator_before && (n += "<li class='vakata-separator vakata-separator-before'></li>"), a = !1, n += "<li class='" + (i._class || "") + (i._disabled ? " jstree-contextmenu-disabled " : "") + "'><ins ", i.icon && -1 === i.icon.indexOf("/") && (n += " class='" + i.icon + "' "), i.icon && -1 !== i.icon.indexOf("/") && (n += " style='background:url(" + i.icon + ") center center no-repeat;' "), n += ">&#160;</ins><a href='#' rel='" + t + "'>", i.submenu && (n += "<span style='float:" + (e.vakata.context.rtl ? "left" : "right") + ";'>&raquo;</span>"), n += i.label + "</a>", i.submenu && (s = e.vakata.context.parse(i.submenu, !0), s && (n += s)), n += "</li>", i.separator_after && (n += "<li class='vakata-separator vakata-separator-after'></li>", a = !0), void 0) : !0
                }), n = n.replace(/<li class\='vakata-separator vakata-separator-after'\><\/li\>$/, ""), n += "</ul>", e(document).triggerHandler("context_parse.vakata"), n.length > 10 ? n : !1
            }, exec: function (t) {
                return e.isFunction(e.vakata.context.func[t]) ? (e.vakata.context.func[t].call(e.vakata.context.data, e.vakata.context.par), !0) : !1
            }}, e(function () {
                var t = "#vakata-contextmenu { display:block; visibility:hidden; left:0; top:-200px; position:absolute; margin:0; padding:0; min-width:180px; background:#ebebeb; border:1px solid silver; z-index:10000; *width:180px; } #vakata-contextmenu ul { min-width:180px; *width:180px; } #vakata-contextmenu ul, #vakata-contextmenu li { margin:0; padding:0; list-style-type:none; display:block; } #vakata-contextmenu li { line-height:20px; min-height:20px; position:relative; padding:0px; } #vakata-contextmenu li a { padding:1px 6px; line-height:17px; display:block; text-decoration:none; margin:1px 1px 0 1px; } #vakata-contextmenu li ins { float:left; width:16px; height:16px; text-decoration:none; margin-right:2px; } #vakata-contextmenu li a:hover, #vakata-contextmenu li.vakata-hover > a { background:gray; color:white; } #vakata-contextmenu li ul { display:none; position:absolute; top:-2px; left:100%; background:#ebebeb; border:1px solid gray; } #vakata-contextmenu .right { right:100%; left:auto; } #vakata-contextmenu .bottom { bottom:-1px; top:auto; } #vakata-contextmenu li.vakata-separator { min-height:0; height:1px; line-height:1px; font-size:1px; overflow:hidden; margin:0 2px; background:silver; /* border-top:1px solid #fefefe; */ padding:0; } ";
                e.vakata.css.add_sheet({str: t, title: "vakata"}), e.vakata.context.cnt.delegate("a", "click",function (e) {
                    e.preventDefault()
                }).delegate("a", "mouseup",function () {
                    !e(this).parent().hasClass("jstree-contextmenu-disabled") && e.vakata.context.exec(e(this).attr("rel")) ? e.vakata.context.hide() : e(this).blur()
                }).delegate("a", "mouseover",function () {
                    e.vakata.context.cnt.find(".vakata-hover").removeClass("vakata-hover")
                }).appendTo("body"), e(document).bind("mousedown", function (t) {
                    e.vakata.context.vis && !e.contains(e.vakata.context.cnt[0], t.target) && e.vakata.context.hide()
                }), "undefined" != typeof e.hotkeys && e(document).bind("keydown", "up",function (t) {
                    if (e.vakata.context.vis) {
                        var i = e.vakata.context.cnt.find("ul:visible").last().children(".vakata-hover").removeClass("vakata-hover").prevAll("li:not(.vakata-separator)").first();
                        i.length || (i = e.vakata.context.cnt.find("ul:visible").last().children("li:not(.vakata-separator)").last()), i.addClass("vakata-hover"), t.stopImmediatePropagation(), t.preventDefault()
                    }
                }).bind("keydown", "down",function (t) {
                    if (e.vakata.context.vis) {
                        var i = e.vakata.context.cnt.find("ul:visible").last().children(".vakata-hover").removeClass("vakata-hover").nextAll("li:not(.vakata-separator)").first();
                        i.length || (i = e.vakata.context.cnt.find("ul:visible").last().children("li:not(.vakata-separator)").first()), i.addClass("vakata-hover"), t.stopImmediatePropagation(), t.preventDefault()
                    }
                }).bind("keydown", "right",function (t) {
                    e.vakata.context.vis && (e.vakata.context.cnt.find(".vakata-hover").children("ul").show().children("li:not(.vakata-separator)").removeClass("vakata-hover").first().addClass("vakata-hover"), t.stopImmediatePropagation(), t.preventDefault())
                }).bind("keydown", "left",function (t) {
                    e.vakata.context.vis && (e.vakata.context.cnt.find(".vakata-hover").children("ul").hide().children(".vakata-separator").removeClass("vakata-hover"), t.stopImmediatePropagation(), t.preventDefault())
                }).bind("keydown", "esc",function (t) {
                    e.vakata.context.hide(), t.preventDefault()
                }).bind("keydown", "space", function (t) {
                    e.vakata.context.cnt.find(".vakata-hover").last().children("a").click(), t.preventDefault()
                })
            }), e.jstree.plugin("contextmenu", {__init: function () {
                this.get_container().delegate("a", "contextmenu.jstree", e.proxy(function (t) {
                    t.preventDefault(), e(t.currentTarget).hasClass("jstree-loading") || this.show_contextmenu(t.currentTarget, t.pageX, t.pageY)
                }, this)).delegate("a", "click.jstree", e.proxy(function () {
                    this.data.contextmenu && e.vakata.context.hide()
                }, this)).bind("destroy.jstree", e.proxy(function () {
                    this.data.contextmenu && e.vakata.context.hide()
                }, this)), e(document).bind("context_hide.vakata", e.proxy(function () {
                    this.data.contextmenu = !1
                }, this))
            }, defaults: {select_node: !1, show_at_node: !0, items: {create: {separator_before: !1, separator_after: !0, label: "Create", action: function (e) {
                this.create(e)
            }}, rename: {separator_before: !1, separator_after: !1, label: "Rename", action: function (e) {
                this.rename(e)
            }}, remove: {separator_before: !1, icon: !1, separator_after: !1, label: "Delete", action: function (e) {
                this.is_selected(e) ? this.remove() : this.remove(e)
            }}, ccp: {separator_before: !0, icon: !1, separator_after: !1, label: "Edit", action: !1, submenu: {cut: {separator_before: !1, separator_after: !1, label: "Cut", action: function (e) {
                this.cut(e)
            }}, copy: {separator_before: !1, icon: !1, separator_after: !1, label: "Copy", action: function (e) {
                this.copy(e)
            }}, paste: {separator_before: !1, icon: !1, separator_after: !1, label: "Paste", action: function (e) {
                this.paste(e)
            }}}}}}, _fn: {show_contextmenu: function (t, i, n) {
                t = this._get_node(t);
                var s = this.get_settings().contextmenu, a = t.children("a:visible:eq(0)"), r = !1, o = !1;
                s.select_node && this.data.ui && !this.is_selected(t) && (this.deselect_all(), this.select_node(t, !0)), (s.show_at_node || "undefined" == typeof i || "undefined" == typeof n) && (r = a.offset(), i = r.left, n = r.top + this.data.core.li_height), o = t.data("jstree") && t.data("jstree").contextmenu ? t.data("jstree").contextmenu : s.items, e.isFunction(o) && (o = o.call(this, t)), this.data.contextmenu = !0, e.vakata.context.show(o, a, i, n, this, t, this._get_settings().core.rtl), this.data.themes && e.vakata.context.cnt.attr("class", "jstree-" + this.data.themes.theme + "-context")
            }}})
        }(jQuery), function (t) {
            t.jstree.plugin("types", {__init: function () {
                var i = this._get_settings().types;
                this.data.types.attach_to = [], this.get_container().bind("init.jstree", t.proxy(function () {
                    var e = i.types, n = i.type_attr, s = "", a = this;
                    t.each(e, function (e, i) {
                        return t.each(i, function (e) {
                            /^(max_depth|max_children|icon|valid_children)$/.test(e) || a.data.types.attach_to.push(e)
                        }), i.icon ? ((i.icon.image || i.icon.position) && (s += "default" == e ? ".jstree-" + a.get_index() + " a > .jstree-icon { " : ".jstree-" + a.get_index() + " li[" + n + '="' + e + '"] > a > .jstree-icon { ', i.icon.image && (s += " background-image:url(" + i.icon.image + "); "), s += i.icon.position ? " background-position:" + i.icon.position + "; " : " background-position:0 0; ", s += "} "), void 0) : !0
                    }), "" !== s && t.vakata.css.add_sheet({str: s, title: "jstree-types"})
                }, this)).bind("before.jstree", t.proxy(function (e, i) {
                    var n, s, a = this._get_settings().types.use_data ? this._get_node(i.args[0]) : !1, r = a && -1 !== a && a.length ? a.data("jstree") : !1;
                    if (r && r.types && r.types[i.func] === !1)return e.stopImmediatePropagation(), !1;
                    if (-1 !== t.inArray(i.func, this.data.types.attach_to)) {
                        if (!i.args[0] || !i.args[0].tagName && !i.args[0].jquery)return;
                        if (n = this._get_settings().types.types, s = this._get_type(i.args[0]), (n[s] && "undefined" != typeof n[s][i.func] || n["default"] && "undefined" != typeof n["default"][i.func]) && this._check(i.func, i.args[0]) === !1)return e.stopImmediatePropagation(), !1
                    }
                }, this)), e && this.get_container().bind("load_node.jstree set_type.jstree", t.proxy(function (e, i) {
                    var n = i && i.rslt && i.rslt.obj && -1 !== i.rslt.obj ? this._get_node(i.rslt.obj).parent() : this.get_container_ul(), s = !1, a = this._get_settings().types;
                    t.each(a.types, function (e, t) {
                        t.icon && (t.icon.image || t.icon.position) && (s = "default" === e ? n.find("li > a > .jstree-icon") : n.find("li[" + a.type_attr + "='" + e + "'] > a > .jstree-icon"), t.icon.image && s.css("backgroundImage", "url(" + t.icon.image + ")"), s.css("backgroundPosition", t.icon.position || "0 0"))
                    })
                }, this))
            }, defaults: {max_children: -1, max_depth: -1, valid_children: "all", use_data: !1, type_attr: "rel", types: {"default": {max_children: -1, max_depth: -1, valid_children: "all"}}}, _fn: {_types_notify: function (e, t) {
                t.type && this._get_settings().types.use_data && this.set_type(t.type, e)
            }, _get_type: function (e) {
                return e = this._get_node(e), e && e.length ? e.attr(this._get_settings().types.type_attr) || "default" : !1
            }, set_type: function (e, t) {
                t = this._get_node(t);
                var i = t.length && e ? t.attr(this._get_settings().types.type_attr, e) : !1;
                return i && this.__callback({obj: t, type: e}), i
            }, _check: function (e, i, n) {
                i = this._get_node(i);
                var s = !1, a = this._get_type(i), r = 0, o = this, l = this._get_settings().types, c = !1;
                if (-1 === i) {
                    if (!l[e])return;
                    s = l[e]
                } else {
                    if (a === !1)return;
                    c = l.use_data ? i.data("jstree") : !1, c && c.types && "undefined" != typeof c.types[e] ? s = c.types[e] : l.types[a] && "undefined" != typeof l.types[a][e] ? s = l.types[a][e] : l.types["default"] && "undefined" != typeof l.types["default"][e] && (s = l.types["default"][e])
                }
                return t.isFunction(s) && (s = s.call(this, i)), "max_depth" === e && -1 !== i && n !== !1 && -2 !== l.max_depth && 0 !== s && i.children("a:eq(0)").parentsUntil(".jstree", "li").each(function (t) {
                    return-1 !== l.max_depth && l.max_depth - (t + 1) <= 0 ? (s = 0, !1) : (r = 0 === t ? s : o._check(e, this, !1), -1 !== r && 0 >= r - (t + 1) ? (s = 0, !1) : (r >= 0 && (s > r - (t + 1) || 0 > s) && (s = r - (t + 1)), l.max_depth >= 0 && (l.max_depth - (t + 1) < s || 0 > s) && (s = l.max_depth - (t + 1)), void 0))
                }), s
            }, check_move: function () {
                if (!this.__call_old())return!1;
                var e, i = this._get_move(), n = i.rt._get_settings().types, s = i.rt._check("max_children", i.cr), a = i.rt._check("max_depth", i.cr), r = i.rt._check("valid_children", i.cr), o = 0, l = 1;
                if ("none" === r)return!1;
                if (t.isArray(r) && i.ot && i.ot._get_type && (i.o.each(function () {
                    return-1 === t.inArray(i.ot._get_type(this), r) ? (l = !1, !1) : void 0
                }), l === !1))return!1;
                if (-2 !== n.max_children && -1 !== s && (o = -1 === i.cr ? this.get_container().find("> ul > li").not(i.o).length : i.cr.find("> ul > li").not(i.o).length, o + i.o.length > s))return!1;
                if (-2 !== n.max_depth && -1 !== a) {
                    if (l = 0, 0 === a)return!1;
                    if ("undefined" == typeof i.o.d) {
                        for (e = i.o; e.length > 0;)e = e.find("> ul > li"), l++;
                        i.o.d = l
                    }
                    if (a - i.o.d < 0)return!1
                }
                return!0
            }, create_node: function (e, i, n, s, a, r) {
                if (!r && (a || this._is_loaded(e))) {
                    var o, l = "string" == typeof i && i.match(/^before|after$/i) && -1 !== e ? this._get_parent(e) : this._get_node(e), c = this._get_settings().types, h = this._check("max_children", l), u = this._check("max_depth", l), d = this._check("valid_children", l);
                    if ("string" == typeof n && (n = {data: n}), n || (n = {}), "none" === d)return!1;
                    if (t.isArray(d))if (n.attr && n.attr[c.type_attr]) {
                        if (-1 === t.inArray(n.attr[c.type_attr], d))return!1
                    } else n.attr || (n.attr = {}), n.attr[c.type_attr] = d[0];
                    if (-2 !== c.max_children && -1 !== h && (o = -1 === l ? this.get_container().find("> ul > li").length : l.find("> ul > li").length, o + 1 > h))return!1;
                    if (-2 !== c.max_depth && -1 !== u && 0 > u - 1)return!1
                }
                return this.__call_old(!0, e, i, n, s, a, r)
            }}})
        }(jQuery), function (e) {
            e.jstree.plugin("html_data", {__init: function () {
                this.data.html_data.original_container_html = this.get_container().find(" > ul > li").clone(!0), this.data.html_data.original_container_html.find("li").andSelf().contents().filter(function () {
                    return 3 == this.nodeType
                }).remove()
            }, defaults: {data: !1, ajax: !1, correct_state: !0}, _fn: {load_node: function (e, t, i) {
                var n = this;
                this.load_node_html(e, function () {
                    n.__callback({obj: n._get_node(e)}), t.call(this)
                }, i)
            }, _is_loaded: function (t) {
                return t = this._get_node(t), -1 == t || !t || !this._get_settings().html_data.ajax && !e.isFunction(this._get_settings().html_data.data) || t.is(".jstree-open, .jstree-leaf") || t.children("ul").children("li").size() > 0
            }, load_node_html: function (t, i, n) {
                var s, a = this.get_settings().html_data, r = function () {
                }, o = function () {
                };
                if (t = this._get_node(t), t && -1 !== t) {
                    if (t.data("jstree-is-loading"))return;
                    t.data("jstree-is-loading", !0)
                }
                switch (!0) {
                    case e.isFunction(a.data):
                        a.data.call(this, t, e.proxy(function (n) {
                            n && "" !== n && n.toString && "" !== n.toString().replace(/^[\s\n]+$/, "") ? (n = e(n), n.is("ul") || (n = e("<ul />").append(n)), -1 != t && t ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.append(n).children("ul").find("li, a").filter(function () {
                                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
                            }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"), t.removeData("jstree-is-loading")) : this.get_container().children("ul").empty().append(n.children()).find("li, a").filter(function () {
                                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
                            }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"), this.clean_node(t), i && i.call(this)) : t && -1 !== t ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.removeData("jstree-is-loading"), a.correct_state && (this.correct_state(t), i && i.call(this))) : a.correct_state && (this.get_container().children("ul").empty(), i && i.call(this))
                        }, this));
                        break;
                    case!a.data && !a.ajax:
                        t && -1 != t || (this.get_container().children("ul").empty().append(this.data.html_data.original_container_html).find("li, a").filter(function () {
                            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
                        }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"), this.clean_node()), i && i.call(this);
                        break;
                    case!!a.data && !a.ajax || !!a.data && !!a.ajax && (!t || -1 === t):
                        t && -1 != t || (s = e(a.data), s.is("ul") || (s = e("<ul />").append(s)), this.get_container().children("ul").empty().append(s.children()).find("li, a").filter(function () {
                            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
                        }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"), this.clean_node()), i && i.call(this);
                        break;
                    case!a.data && !!a.ajax || !!a.data && !!a.ajax && t && -1 !== t:
                        t = this._get_node(t), r = function (e, i, s) {
                            var r = this.get_settings().html_data.ajax.error;
                            r && r.call(this, e, i, s), -1 != t && t.length ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.removeData("jstree-is-loading"), "success" === i && a.correct_state && this.correct_state(t)) : "success" === i && a.correct_state && this.get_container().children("ul").empty(), n && n.call(this)
                        }, o = function (n, s, o) {
                            var l = this.get_settings().html_data.ajax.success;
                            return l && (n = l.call(this, n, s, o) || n), "" === n || n && n.toString && "" === n.toString().replace(/^[\s\n]+$/, "") ? r.call(this, o, s, "") : (n ? (n = e(n), n.is("ul") || (n = e("<ul />").append(n)), -1 != t && t ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.append(n).children("ul").find("li, a").filter(function () {
                                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
                            }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"), t.removeData("jstree-is-loading")) : this.get_container().children("ul").empty().append(n.children()).find("li, a").filter(function () {
                                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName
                            }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"), this.clean_node(t), i && i.call(this)) : t && -1 !== t ? (t.children("a.jstree-loading").removeClass("jstree-loading"), t.removeData("jstree-is-loading"), a.correct_state && (this.correct_state(t), i && i.call(this))) : a.correct_state && (this.get_container().children("ul").empty(), i && i.call(this)), void 0)
                        }, a.ajax.context = this, a.ajax.error = r, a.ajax.success = o, a.ajax.dataType || (a.ajax.dataType = "html"), e.isFunction(a.ajax.url) && (a.ajax.url = a.ajax.url.call(this, t)), e.isFunction(a.ajax.data) && (a.ajax.data = a.ajax.data.call(this, t)), e.ajax(a.ajax)
                }
            }}}), e.jstree.defaults.plugins.push("html_data")
        }(jQuery), function (e) {
            e.jstree.plugin("themeroller", {__init: function () {
                var t = this._get_settings().themeroller;
                this.get_container().addClass("ui-widget-content").addClass("jstree-themeroller").delegate("a", "mouseenter.jstree",function (i) {
                    e(i.currentTarget).hasClass("jstree-loading") || e(this).addClass(t.item_h)
                }).delegate("a", "mouseleave.jstree",function () {
                    e(this).removeClass(t.item_h)
                }).bind("init.jstree", e.proxy(function (e, t) {
                    t.inst.get_container().find("> ul > li > .jstree-loading > ins").addClass("ui-icon-refresh"), this._themeroller(t.inst.get_container().find("> ul > li"))
                }, this)).bind("open_node.jstree create_node.jstree", e.proxy(function (e, t) {
                    this._themeroller(t.rslt.obj)
                }, this)).bind("loaded.jstree refresh.jstree", e.proxy(function () {
                    this._themeroller()
                }, this)).bind("close_node.jstree", e.proxy(function (e, t) {
                    this._themeroller(t.rslt.obj)
                }, this)).bind("delete_node.jstree", e.proxy(function (e, t) {
                    this._themeroller(t.rslt.parent)
                }, this)).bind("correct_state.jstree", e.proxy(function (e, i) {
                    i.rslt.obj.children("ins.jstree-icon").removeClass(t.opened + " " + t.closed + " ui-icon").end().find("> a > ins.ui-icon").filter(function () {
                        return-1 === this.className.toString().replace(t.item_clsd, "").replace(t.item_open, "").replace(t.item_leaf, "").indexOf("ui-icon-")
                    }).removeClass(t.item_open + " " + t.item_clsd).addClass(t.item_leaf || "jstree-no-icon")
                }, this)).bind("select_node.jstree", e.proxy(function (e, i) {
                    i.rslt.obj.children("a").addClass(t.item_a)
                }, this)).bind("deselect_node.jstree deselect_all.jstree", e.proxy(function () {
                    this.get_container().find("a." + t.item_a).removeClass(t.item_a).end().find("a.jstree-clicked").addClass(t.item_a)
                }, this)).bind("dehover_node.jstree", e.proxy(function (e, i) {
                    i.rslt.obj.children("a").removeClass(t.item_h)
                }, this)).bind("hover_node.jstree", e.proxy(function (e, i) {
                    this.get_container().find("a." + t.item_h).not(i.rslt.obj).removeClass(t.item_h), i.rslt.obj.children("a").addClass(t.item_h)
                }, this)).bind("move_node.jstree", e.proxy(function (e, t) {
                    this._themeroller(t.rslt.o), this._themeroller(t.rslt.op)
                }, this))
            }, __destroy: function () {
                var t = this._get_settings().themeroller, i = ["ui-icon"];
                e.each(t, function (e, t) {
                    t = t.split(" "), t.length && (i = i.concat(t))
                }), this.get_container().removeClass("ui-widget-content").find("." + i.join(", .")).removeClass(i.join(" "))
            }, _fn: {_themeroller: function (e) {
                var t = this._get_settings().themeroller;
                e = e && -1 != e ? this._get_node(e).parent() : this.get_container_ul(), e.find("li.jstree-closed").children("ins.jstree-icon").removeClass(t.opened).addClass("ui-icon " + t.closed).end().children("a").addClass(t.item).children("ins.jstree-icon").addClass("ui-icon").filter(function () {
                    return-1 === this.className.toString().replace(t.item_clsd, "").replace(t.item_open, "").replace(t.item_leaf, "").indexOf("ui-icon-")
                }).removeClass(t.item_leaf + " " + t.item_open).addClass(t.item_clsd || "jstree-no-icon").end().end().end().end().find("li.jstree-open").children("ins.jstree-icon").removeClass(t.closed).addClass("ui-icon " + t.opened).end().children("a").addClass(t.item).children("ins.jstree-icon").addClass("ui-icon").filter(function () {
                    return-1 === this.className.toString().replace(t.item_clsd, "").replace(t.item_open, "").replace(t.item_leaf, "").indexOf("ui-icon-")
                }).removeClass(t.item_leaf + " " + t.item_clsd).addClass(t.item_open || "jstree-no-icon").end().end().end().end().find("li.jstree-leaf").children("ins.jstree-icon").removeClass(t.closed + " ui-icon " + t.opened).end().children("a").addClass(t.item).children("ins.jstree-icon").addClass("ui-icon").filter(function () {
                    return-1 === this.className.toString().replace(t.item_clsd, "").replace(t.item_open, "").replace(t.item_leaf, "").indexOf("ui-icon-")
                }).removeClass(t.item_clsd + " " + t.item_open).addClass(t.item_leaf || "jstree-no-icon")
            }}, defaults: {opened: "ui-icon-triangle-1-se", closed: "ui-icon-triangle-1-e", item: "ui-state-default", item_h: "ui-state-hover", item_a: "ui-state-active", item_open: "ui-icon-folder-open", item_clsd: "ui-icon-folder-collapsed", item_leaf: "ui-icon-document"}}), e(function () {
                var t = ".jstree-themeroller .ui-icon { overflow:visible; } .jstree-themeroller a { padding:0 2px; } .jstree-themeroller .jstree-no-icon { display:none; }";
                e.vakata.css.add_sheet({str: t, title: "jstree"})
            })
        }(jQuery), function (e) {
            e.jstree.plugin("unique", {__init: function () {
                this.get_container().bind("before.jstree", e.proxy(function (t, i) {
                    var n, s, a = [], r = !0;
                    return"move_node" == i.func && i.args[4] === !0 && i.args[0].o && i.args[0].o.length && (i.args[0].o.children("a").each(function () {
                        a.push(e(this).text().replace(/^\s+/g, ""))
                    }), r = this._check_unique(a, i.args[0].np.find("> ul > li").not(i.args[0].o), "move_node")), "create_node" == i.func && (i.args[4] || this._is_loaded(i.args[0])) && (n = this._get_node(i.args[0]), !i.args[1] || "before" !== i.args[1] && "after" !== i.args[1] || (n = this._get_parent(i.args[0]), n && -1 !== n || (n = this.get_container())), "string" == typeof i.args[2] ? a.push(i.args[2]) : i.args[2] && i.args[2].data ? a.push(i.args[2].data) : a.push(this._get_string("new_node")), r = this._check_unique(a, n.find("> ul > li"), "create_node")), "rename_node" == i.func && (a.push(i.args[1]), s = this._get_node(i.args[0]), n = this._get_parent(s), n && -1 !== n || (n = this.get_container()), r = this._check_unique(a, n.find("> ul > li").not(s), "rename_node")), r ? void 0 : (t.stopPropagation(), !1)
                }, this))
            }, defaults: {error_callback: e.noop}, _fn: {_check_unique: function (t, i, n) {
                var s = [];
                return i.children("a").each(function () {
                    s.push(e(this).text().replace(/^\s+/g, ""))
                }), s.length && t.length ? (s = s.sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g, "$1$2$4").replace(/,,+/g, ",").replace(/,$/, "").split(","), s.length + t.length != s.concat(t).sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g, "$1$2$4").replace(/,,+/g, ",").replace(/,$/, "").split(",").length ? (this._get_settings().unique.error_callback.call(null, t, i, n), !1) : !0) : !0
            }, check_move: function () {
                if (!this.__call_old())return!1;
                var t = this._get_move(), i = [];
                return t.o && t.o.length ? (t.o.children("a").each(function () {
                    i.push(e(this).text().replace(/^\s+/g, ""))
                }), this._check_unique(i, t.np.find("> ul > li").not(t.o), "check_move")) : !0
            }}})
        }(jQuery), function (n) {
            n.jstree.plugin("wholerow", {__init: function () {
                if (!this.data.ui)throw"jsTree wholerow: jsTree UI plugin not included.";
                this.data.wholerow.html = !1, this.data.wholerow.to = !1, this.get_container().bind("init.jstree", n.proxy(function () {
                    this._get_settings().core.animation = 0
                }, this)).bind("open_node.jstree create_node.jstree clean_node.jstree loaded.jstree", n.proxy(function (e, t) {
                    this._prepare_wholerow_span(t && t.rslt && t.rslt.obj ? t.rslt.obj : -1)
                }, this)).bind("search.jstree clear_search.jstree reopen.jstree after_open.jstree after_close.jstree create_node.jstree delete_node.jstree clean_node.jstree", n.proxy(function (e, t) {
                    this.data.to && clearTimeout(this.data.to), this.data.to = setTimeout(function (e, t) {
                        return function () {
                            e._prepare_wholerow_ul(t)
                        }
                    }(this, t && t.rslt && t.rslt.obj ? t.rslt.obj : -1), 0)
                }, this)).bind("deselect_all.jstree", n.proxy(function () {
                    this.get_container().find(" > .jstree-wholerow .jstree-clicked").removeClass("jstree-clicked " + (this.data.themeroller ? this._get_settings().themeroller.item_a : ""))
                }, this)).bind("select_node.jstree deselect_node.jstree ", n.proxy(function (e, t) {
                    t.rslt.obj.each(function () {
                        var e = t.inst.get_container().find(" > .jstree-wholerow li:visible:eq(" + parseInt((n(this).offset().top - t.inst.get_container().offset().top + t.inst.get_container()[0].scrollTop) / t.inst.data.core.li_height, 10) + ")");
                        e.children("a").attr("class", t.rslt.obj.children("a").attr("class"))
                    })
                }, this)).bind("hover_node.jstree dehover_node.jstree", n.proxy(function (e, t) {
                    if (this.get_container().find(" > .jstree-wholerow .jstree-hovered").removeClass("jstree-hovered " + (this.data.themeroller ? this._get_settings().themeroller.item_h : "")), "hover_node" === e.type) {
                        var i = this.get_container().find(" > .jstree-wholerow li:visible:eq(" + parseInt((t.rslt.obj.offset().top - this.get_container().offset().top + this.get_container()[0].scrollTop) / this.data.core.li_height, 10) + ")");
                        i.children("a").attr("class", t.rslt.obj.children(".jstree-hovered").attr("class"))
                    }
                }, this)).delegate(".jstree-wholerow-span, ins.jstree-icon, li", "click.jstree",function (e) {
                    var t = n(e.currentTarget);
                    "A" === e.target.tagName || "INS" === e.target.tagName && t.closest("li").is(".jstree-open, .jstree-closed") || (t.closest("li").children("a:visible:eq(0)").click(), e.stopImmediatePropagation())
                }).delegate("li", "mouseover.jstree", n.proxy(function (e) {
                    return e.stopImmediatePropagation(), n(e.currentTarget).children(".jstree-hovered, .jstree-clicked").length ? !1 : (this.hover_node(e.currentTarget), !1)
                }, this)).delegate("li", "mouseleave.jstree", n.proxy(function (e) {
                    n(e.currentTarget).children("a").hasClass("jstree-hovered").length || this.dehover_node(e.currentTarget)
                }, this)), (t || e) && n.vakata.css.add_sheet({str: ".jstree-" + this.get_index() + " { position:relative; } ", title: "jstree"})
            }, defaults: {}, __destroy: function () {
                this.get_container().children(".jstree-wholerow").remove(), this.get_container().find(".jstree-wholerow-span").remove()
            }, _fn: {_prepare_wholerow_span: function (e) {
                e = e && -1 != e ? this._get_node(e) : this.get_container().find("> ul > li"), e !== !1 && e.each(function () {
                    n(this).find("li").andSelf().each(function () {
                        var e = n(this);
                        return e.children(".jstree-wholerow-span").length ? !0 : (e.prepend("<span class='jstree-wholerow-span' style='width:" + 18 * e.parentsUntil(".jstree", "li").length + "px;'>&#160;</span>"), void 0)
                    })
                })
            }, _prepare_wholerow_ul: function () {
                var e = this.get_container().children("ul").eq(0), i = e.html();
                e.addClass("jstree-wholerow-real"), this.data.wholerow.last_html !== i && (this.data.wholerow.last_html = i, this.get_container().children(".jstree-wholerow").remove(), this.get_container().append(e.clone().removeClass("jstree-wholerow-real").wrapAll("<div class='jstree-wholerow' />").parent().width(e.parent()[0].scrollWidth).css("top", -1 * (e.height() + (t ? 5 : 0))).find("li[id]").each(function () {
                    this.removeAttribute("id")
                }).end()))
            }}}), n(function () {
                var s = ".jstree .jstree-wholerow-real { position:relative; z-index:1; } .jstree .jstree-wholerow-real li { cursor:pointer; } .jstree .jstree-wholerow-real a { border-left-color:transparent !important; border-right-color:transparent !important; } .jstree .jstree-wholerow { position:relative; z-index:0; height:0; } .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li { width:100%; } .jstree .jstree-wholerow, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li, .jstree .jstree-wholerow a { margin:0 !important; padding:0 !important; } .jstree .jstree-wholerow, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li { background:transparent !important; }.jstree .jstree-wholerow ins, .jstree .jstree-wholerow span, .jstree .jstree-wholerow input { display:none !important; }.jstree .jstree-wholerow a, .jstree .jstree-wholerow a:hover { text-indent:-9999px; !important; width:100%; padding:0 !important; border-right-width:0px !important; border-left-width:0px !important; } .jstree .jstree-wholerow-span { position:absolute; left:0; margin:0px; padding:0; height:18px; border-width:0; padding:0; z-index:0; }";
                i && (s += ".jstree .jstree-wholerow a { display:block; height:18px; margin:0; padding:0; border:0; } .jstree .jstree-wholerow-real a { border-color:transparent !important; } "), (t || e) && (s += ".jstree .jstree-wholerow, .jstree .jstree-wholerow li, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow a { margin:0; padding:0; line-height:18px; } .jstree .jstree-wholerow a { display:block; height:18px; line-height:18px; overflow:hidden; } "), n.vakata.css.add_sheet({str: s, title: "jstree"})
            })
        }(jQuery), function (e) {
            var t = ["getChildren", "getChildrenCount", "getAttr", "getName", "getProps"], i = function (t, i) {
                var n = !0;
                return t = t || {}, i = [].concat(i), e.each(i, function (i, s) {
                    return e.isFunction(t[s]) ? void 0 : (n = !1, !1)
                }), n
            };
            e.jstree.plugin("model", {__init: function () {
                if (!this.data.json_data)throw"jsTree model: jsTree json_data plugin not included.";
                this._get_settings().json_data.data = function (n, s) {
                    var a = -1 == n ? this._get_settings().model.object : n.data("jstree_model");
                    return i(a, t) ? (this._get_settings().model.async ? a.getChildren(e.proxy(function (e) {
                        this.model_done(e, s)
                    }, this)) : this.model_done(a.getChildren(), s), void 0) : s.call(null, !1)
                }
            }, defaults: {object: !1, id_prefix: !1, async: !1}, _fn: {model_done: function (t, i) {
                var n = [], s = this._get_settings(), a = this;
                e.isArray(t) || (t = [t]), e.each(t, function (t, i) {
                    var r = i.getProps() || {};
                    r.attr = i.getAttr() || {}, i.getChildrenCount() && (r.state = "closed"), r.data = i.getName(), e.isArray(r.data) || (r.data = [r.data]), a.data.types && e.isFunction(i.getType) && (r.attr[s.types.type_attr] = i.getType()), r.attr.id && s.model.id_prefix && (r.attr.id = s.model.id_prefix + r.attr.id), r.metadata || (r.metadata = {}), r.metadata.jstree_model = i, n.push(r)
                }), i.call(null, n)
            }}})
        }(jQuery)
    }
}(),// is copyright 2008 A Beautiful Site, LLC. 
    function (e) {
        e.alerts = {verticalOffset: -75, horizontalOffset: 0, repositionOnResize: !0, overlayOpacity: .01, overlayColor: "#FFF", draggable: !0, okButton: "&nbsp;OK&nbsp;", cancelButton: "&nbsp;Cancel&nbsp;", dialogClass: null, alert: function (t, i, n) {
            null == i && (i = "Alert"), e.alerts._show(i, t, null, "alert", function (e) {
                n && n(e)
            })
        }, confirm: function (t, i, n) {
            null == i && (i = "Confirm"), e.alerts._show(i, t, null, "confirm", function (e) {
                n && n(e)
            })
        }, prompt: function (t, i, n, s) {
            null == n && (n = "Prompt"), e.alerts._show(n, t, i, "prompt", function (e) {
                s && s(e)
            })
        }, _show: function (t, i, n, s, a) {
            e.alerts._hide(), e.alerts._overlay("show"), e("BODY").append('<div id="popup_container"><h1 id="popup_title"></h1><div id="popup_content"><div id="popup_message"></div></div></div>'), e.alerts.dialogClass && e("#popup_container").addClass(e.alerts.dialogClass);
            var r = e.browser.msie && parseInt(e.browser.version) <= 6 ? "absolute" : "fixed";
            switch (e("#popup_container").css({position: r, zIndex: 99999, padding: 0, margin: 0}), e("#popup_title").text(t), e("#popup_content").addClass(s), e("#popup_message").text(i), e("#popup_message").html(e("#popup_message").text().replace(/\n/g, "<br />")), e("#popup_container").css({minWidth: e("#popup_container").outerWidth(), maxWidth: e("#popup_container").outerWidth()}), e.alerts._reposition(), e.alerts._maintainPosition(!0), s) {
                case"alert":
                    e("#popup_message").after('<div id="popup_panel"><input type="button" value="' + e.alerts.okButton + '" id="popup_ok" /></div>'), e("#popup_ok").click(function () {
                        e.alerts._hide(), a(!0)
                    }), e("#popup_ok").focus().keypress(function (t) {
                        (13 == t.keyCode || 27 == t.keyCode) && e("#popup_ok").trigger("click")
                    });
                    break;
                case"confirm":
                    e("#popup_message").after('<div id="popup_panel"><input type="button" value="' + e.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + e.alerts.cancelButton + '" id="popup_cancel" /></div>'), e("#popup_ok").click(function () {
                        e.alerts._hide(), a && a(!0)
                    }), e("#popup_cancel").click(function () {
                        e.alerts._hide(), a && a(!1)
                    }), e("#popup_ok").focus(), e("#popup_ok, #popup_cancel").keypress(function (t) {
                        13 == t.keyCode && e("#popup_ok").trigger("click"), 27 == t.keyCode && e("#popup_cancel").trigger("click")
                    });
                    break;
                case"prompt":
                    e("#popup_message").append('<br /><input type="text" size="30" id="popup_prompt" />').after('<div id="popup_panel"><input type="button" value="' + e.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + e.alerts.cancelButton + '" id="popup_cancel" /></div>'), e("#popup_prompt").width(e("#popup_message").width()), e("#popup_ok").click(function () {
                        var t = e("#popup_prompt").val();
                        e.alerts._hide(), a && a(t)
                    }), e("#popup_cancel").click(function () {
                        e.alerts._hide(), a && a(null)
                    }), e("#popup_prompt, #popup_ok, #popup_cancel").keypress(function (t) {
                        13 == t.keyCode && e("#popup_ok").trigger("click"), 27 == t.keyCode && e("#popup_cancel").trigger("click")
                    }), n && e("#popup_prompt").val(n), e("#popup_prompt").focus().select()
            }
            if (e.alerts.draggable)try {
                e("#popup_container").draggable({handle: e("#popup_title")}), e("#popup_title").css({cursor: "move"})
            } catch (o) {
            }
        }, _hide: function () {
            e("#popup_container").remove(), e.alerts._overlay("hide"), e.alerts._maintainPosition(!1)
        }, _overlay: function (t) {
            switch (t) {
                case"show":
                    e.alerts._overlay("hide"), e("BODY").append('<div id="popup_overlay"></div>'), e("#popup_overlay").css({position: "absolute", zIndex: 99998, top: "0px", left: "0px", width: "100%", height: e(document).height(), background: e.alerts.overlayColor, opacity: e.alerts.overlayOpacity});
                    break;
                case"hide":
                    e("#popup_overlay").remove()
            }
        }, _reposition: function () {
            var t = e(window).height() / 2 - e("#popup_container").outerHeight() / 2 + e.alerts.verticalOffset, i = e(window).width() / 2 - e("#popup_container").outerWidth() / 2 + e.alerts.horizontalOffset;
            0 > t && (t = 0), 0 > i && (i = 0), e.browser.msie && parseInt(e.browser.version) <= 6 && (t += e(window).scrollTop()), e("#popup_container").css({top: t + "px", left: i + "px"}), e("#popup_overlay").height(e(document).height())
        }, _maintainPosition: function (t) {
            if (e.alerts.repositionOnResize)switch (t) {
                case!0:
                    e(window).bind("resize", e.alerts._reposition);
                    break;
                case!1:
                    e(window).unbind("resize", e.alerts._reposition)
            }
        }}, jAlert = function (t, i, n) {
            e.alerts.alert(t, i, n)
        }, jConfirm = function (t, i, n) {
            e.alerts.confirm(t, i, n)
        }, jPrompt = function (t, i, n, s) {
            e.alerts.prompt(t, i, n, s)
        }
    }(jQuery), /**
 * PowerTip
 *
 * @fileoverview  jQuery plugin that creates hover tooltips.
 * @link          http://stevenbenner.github.com/jquery-powertip/
 * @author        Steven Benner (http://stevenbenner.com/)
 * @version       1.1.0
 * @requires      jQuery 1.7+
 *
 * @license jQuery PowerTip Plugin v1.1.0
 * http://stevenbenner.github.com/jquery-powertip/
 * Copyright 2012 Steven Benner (http://stevenbenner.com/)
 * Released under the MIT license.
 * <https://raw.github.com/stevenbenner/jquery-powertip/master/LICENSE.txt>
 */
    function (e) {
        "use strict";
        function t(e, t, i) {
            function n(n, s) {
                r(), e.data("hasActiveHover") || (n ? (s && e.data("forcedOpen", !0), i.showTip(e)) : (h.popOpenImminent = !0, o = setTimeout(function () {
                    o = null, a(e)
                }, t.intentPollInterval)))
            }

            function s(n) {
                r(), e.data("hasActiveHover") && (h.popOpenImminent = !1, e.data("forcedOpen", !1), n ? i.hideTip(e) : o = setTimeout(function () {
                    o = null, i.hideTip(e)
                }, t.closeDelay))
            }

            function a() {
                var s = Math.abs(h.previousX - h.currentX), a = Math.abs(h.previousY - h.currentY), r = s + a;
                r < t.intentSensitivity ? i.showTip(e) : (h.previousX = h.currentX, h.previousY = h.currentY, n())
            }

            function r() {
                o = clearTimeout(o)
            }

            var o = null;
            return{show: n, hide: s, cancel: r}
        }

        function i(t) {
            function i(e) {
                e.data("hasActiveHover", !0), m.queue(function (t) {
                    n(e), t()
                })
            }

            function n(i) {
                if (i.data("hasActiveHover")) {
                    if (h.isPopOpen)return h.isClosing || s(h.activeHover), m.delay(100).queue(function (e) {
                        n(i), e()
                    }), void 0;
                    i.trigger("powerTipPreRender");
                    var a = i.data("powertip"), r = i.data("powertiptarget"), l = i.data("powertipjq"), c = r ? e("#" + r) : [];
                    if (a)m.html(a); else if (l && l.length > 0)m.empty(), l.clone(!0, !0).appendTo(m); else {
                        if (!(c && c.length > 0))return;
                        m.html(e("#" + r).html())
                    }
                    i.trigger("powerTipRender"), o.on("closePowerTip", function () {
                        i.data("displayController").hide(!0)
                    }), h.activeHover = i, h.isPopOpen = !0, m.data("followMouse", t.followMouse), m.data("mouseOnToPopup", t.mouseOnToPopup), t.followMouse ? d() : (p(i), h.isFixedPopOpen = !0), m.fadeIn(t.fadeInTime, function () {
                        h.desyncTimeout || (h.desyncTimeout = setInterval(u, 500)), i.trigger("powerTipOpen")
                    })
                }
            }

            function s(e) {
                h.isClosing = !0, e.data("hasActiveHover", !1), e.data("forcedOpen", !1), h.activeHover = null, h.isPopOpen = !1, h.desyncTimeout = clearInterval(h.desyncTimeout), o.off("closePowerTip"), m.fadeOut(t.fadeOutTime, function () {
                    h.isClosing = !1, h.isFixedPopOpen = !1, m.removeClass(), g(h.currentX + t.offset, h.currentY + t.offset), e.trigger("powerTipClose")
                })
            }

            function u() {
                if (h.isPopOpen && !h.isClosing) {
                    var e = !1;
                    h.activeHover.data("hasActiveHover") === !1 ? e = !0 : a(h.activeHover) || h.activeHover.is(":focus") || h.activeHover.data("forcedOpen") || (m.data("mouseOnToPopup") ? a(m) || (e = !0) : e = !0), e && s(h.activeHover)
                }
            }

            function d() {
                if (h.isPopOpen && !h.isFixedPopOpen || h.popOpenImminent && !h.isFixedPopOpen && m.data("hasMouseMove")) {
                    var e = l.scrollTop(), i = l.width(), n = l.height(), s = m.outerWidth(), a = m.outerHeight(), r = 0, o = 0;
                    r = s + h.currentX + t.offset < i ? h.currentX + t.offset : i - s, o = a + h.currentY + t.offset < e + n ? h.currentY + t.offset : e + n - a, g(r, o)
                }
            }

            function p(i) {
                var n, s, a, o, l = m.outerWidth(), c = m.outerHeight();
                t.smartPlacement ? (n = e.fn.powerTip.smartPlacementLists[t.placement], e.each(n, function (e, t) {
                    return s = f(i, t, l, c), a = t, o = r(s, l, c), 0 === o.length ? !1 : void 0
                })) : (s = f(i, t.placement, l, c), a = t.placement), m.addClass(a), g(s.x, s.y)
            }

            function f(e, i, n, s) {
                var a = e.offset(), r = e.outerWidth(), o = e.outerHeight(), l = 0, c = 0;
                switch (i) {
                    case"n":
                        l = a.left + r / 2 - n / 2, c = a.top - s - t.offset;
                        break;
                    case"e":
                        l = a.left + r + t.offset, c = a.top + o / 2 - s / 2;
                        break;
                    case"s":
                        l = a.left + r / 2 - n / 2, c = a.top + o + t.offset;
                        break;
                    case"w":
                        l = a.left - n - t.offset, c = a.top + o / 2 - s / 2;
                        break;
                    case"nw":
                        l = a.left - n + 20, c = a.top - s - t.offset;
                        break;
                    case"ne":
                        l = a.left + r - 20, c = a.top - s - t.offset;
                        break;
                    case"sw":
                        l = a.left - n + 20, c = a.top + o + t.offset;
                        break;
                    case"se":
                        l = a.left + r - 20, c = a.top + o + t.offset
                }
                return{x: Math.round(l), y: Math.round(c)}
            }

            function g(e, t) {
                m.css("left", e + "px"), m.css("top", t + "px")
            }

            var m = e("#" + t.popupId);
            return 0 === m.length && (m = e("<div></div>", {id: t.popupId}), 0 === c.length && (c = e("body")), c.append(m)), t.followMouse && (m.data("hasMouseMove") || o.on({mousemove: d, scroll: d}), m.data("hasMouseMove", !0)), (t.followMouse || t.mouseOnToPopup) && m.on({mouseenter: function () {
                (m.data("followMouse") || m.data("mouseOnToPopup")) && h.activeHover && h.activeHover.data("displayController").cancel()
            }, mouseleave: function () {
                m.data("mouseOnToPopup") && h.activeHover && h.activeHover.data("displayController").hide()
            }}), {showTip: i, hideTip: s}
        }

        function n() {
            var t = 0, i = 0;
            h.mouseTrackingActive || (h.mouseTrackingActive = !0, e(function () {
                t = o.scrollLeft(), i = o.scrollTop()
            }), o.on({mousemove: s, scroll: function () {
                var e = o.scrollLeft(), n = o.scrollTop();
                e !== t && (h.currentX += e - t, t = e), n !== i && (h.currentY += n - i, i = n)
            }}))
        }

        function s(e) {
            h.currentX = e.pageX, h.currentY = e.pageY
        }

        function a(e) {
            var t = e.offset();
            return h.currentX >= t.left && h.currentX <= t.left + e.outerWidth() && h.currentY >= t.top && h.currentY <= t.top + e.outerHeight()
        }

        function r(e, t, i) {
            var n = l.scrollLeft(), s = l.scrollTop(), a = l.width(), r = l.height(), o = [];
            return e.y < s && o.push("top"), e.y + i > s + r && o.push("bottom"), e.x < n && o.push("left"), e.x + t > n + a && o.push("right"), o
        }

        var o = e(document), l = e(window), c = e("body"), h = {isPopOpen: !1, isFixedPopOpen: !1, isClosing: !1, popOpenImminent: !1, activeHover: null, currentX: 0, currentY: 0, previousX: 0, previousY: 0, desyncTimeout: null, mouseTrackingActive: !1};
        e.fn.powerTip = function (r) {
            if (!this.length)return this;
            var o = e.extend({}, e.fn.powerTip.defaults, r), l = new i(o);
            return n(), this.each(function () {
                var i = e(this), n = i.data("powertip"), s = i.data("powertipjq"), a = i.data("powertiptarget"), r = i.attr("title");
                n || a || s || !r || (i.data("powertip", r), i.removeAttr("title")), i.data("displayController", new t(i, o, l))
            }), this.on({mouseenter: function (t) {
                s(t), h.previousX = t.pageX, h.previousY = t.pageY, e(this).data("displayController").show()
            }, mouseleave: function () {
                e(this).data("displayController").hide()
            }, focus: function () {
                var t = e(this);
                a(t) || t.data("displayController").show(!0)
            }, blur: function () {
                e(this).data("displayController").hide(!0)
            }})
        }, e.fn.powerTip.defaults = {fadeInTime: 200, fadeOutTime: 100, followMouse: !1, popupId: "powerTip", intentSensitivity: 7, intentPollInterval: 100, closeDelay: 100, placement: "n", smartPlacement: !1, offset: 10, mouseOnToPopup: !1}, e.fn.powerTip.smartPlacementLists = {n: ["n", "ne", "nw", "s"], e: ["e", "ne", "se", "w", "nw", "sw", "n", "s", "e"], s: ["s", "se", "sw", "n"], w: ["w", "nw", "sw", "e", "ne", "se", "n", "s", "w"], nw: ["nw", "w", "sw", "n", "s", "se", "nw"], ne: ["ne", "e", "se", "n", "s", "sw", "ne"], sw: ["sw", "w", "nw", "s", "n", "ne", "sw"], se: ["se", "e", "ne", "s", "n", "nw", "se"]}, e.powerTip = {showTip: function (t) {
            e.powerTip.closeTip(), t = t.first(), a(t) || t.data("displayController").show(!0, !0)
        }, closeTip: function () {
            o.triggerHandler("closePowerTip")
        }}
    }(jQuery), function (e) {
    e.fn.vAlign = function () {
        return this.each(function () {
            var t = e(this).height(), i = e(this).parent().height(), n = Math.ceil((i - t) / 2);
            e(this).css("margin-top", n)
        })
    }
}(jQuery), showLog = !0, css_browser_selector(navigator.userAgent), !function (e, t, i) {
    function n(e, i) {
        var n, s = t.createElement(e || "div");
        for (n in i)s[n] = i[n];
        return s
    }

    function s(e) {
        for (var t = 1, i = arguments.length; i > t; t++)e.appendChild(arguments[t]);
        return e
    }

    function a(e, t, i, n) {
        var s = ["opacity", t, ~~(100 * e), i, n].join("-"), a = .01 + 100 * (i / n), r = Math.max(1 - (1 - e) / t * (100 - a), e), o = h.substring(0, h.indexOf("Animation")).toLowerCase(), l = o && "-" + o + "-" || "";
        return d[s] || (p.insertRule("@" + l + "keyframes " + s + "{" + "0%{opacity:" + r + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + t) % 100 + "%{opacity:" + e + "}" + "100%{opacity:" + r + "}" + "}", p.cssRules.length), d[s] = 1), s
    }

    function r(e, t) {
        var n, s, a = e.style;
        if (a[t] !== i)return t;
        for (t = t.charAt(0).toUpperCase() + t.slice(1), s = 0; s < u.length; s++)if (n = u[s] + t, a[n] !== i)return n
    }

    function o(e, t) {
        for (var i in t)e.style[r(e, i) || i] = t[i];
        return e
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var s in n)e[s] === i && (e[s] = n[s])
        }
        return e
    }

    function c(e) {
        for (var t = {x: e.offsetLeft, y: e.offsetTop}; e = e.offsetParent;)t.x += e.offsetLeft, t.y += e.offsetTop;
        return t
    }

    /**
     * Copyright (c) 2011 Felix Gnass [fgnass at neteye dot de]
     * Licensed under the MIT license
     */
    var h, u = ["webkit", "Moz", "ms", "O"], d = {}, p = function () {
        var e = n("style", {type: "text/css"});
        return s(t.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
    }(), f = {lines: 12, length: 7, width: 5, radius: 10, rotate: 0, corners: 1, color: "#000", speed: 1, trail: 100, opacity: .25, fps: 20, zIndex: 2e9, className: "spinner", top: "auto", left: "auto"}, g = function m(e) {
        return this.spin ? (this.opts = l(e || {}, m.defaults, f), void 0) : new m(e)
    };
    g.defaults = {}, l(g.prototype, {spin: function (e) {
        this.stop();
        var t, i, s = this, a = s.opts, r = s.el = o(n(0, {className: a.className}), {position: "relative", width: 0, zIndex: a.zIndex}), l = a.radius + a.length + a.width;
        if (e && (e.insertBefore(r, e.firstChild || null), i = c(e), t = c(r), o(r, {left: ("auto" == a.left ? i.x - t.x + (e.offsetWidth >> 1) : parseInt(a.left, 10) + l) + "px", top: ("auto" == a.top ? i.y - t.y + (e.offsetHeight >> 1) : parseInt(a.top, 10) + l) + "px"})), r.setAttribute("aria-role", "progressbar"), s.lines(r, s.opts), !h) {
            var u = 0, d = a.fps, p = d / a.speed, f = (1 - a.opacity) / (p * a.trail / 100), g = p / a.lines;
            !function m() {
                u++;
                for (var e = a.lines; e; e--) {
                    var t = Math.max(1 - (u + e * g) % p * f, a.opacity);
                    s.opacity(r, a.lines - e, t, a)
                }
                s.timeout = s.el && setTimeout(m, ~~(1e3 / d))
            }()
        }
        return s
    }, stop: function () {
        var e = this.el;
        return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = i), this
    }, lines: function (e, t) {
        function i(e, i) {
            return o(n(), {position: "absolute", width: t.length + t.width + "px", height: t.width + "px", background: e, boxShadow: i, transformOrigin: "left", transform: "rotate(" + ~~(360 / t.lines * l + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)", borderRadius: (t.corners * t.width >> 1) + "px"})
        }

        for (var r, l = 0; l < t.lines; l++)r = o(n(), {position: "absolute", top: 1 + ~(t.width / 2) + "px", transform: t.hwaccel ? "translate3d(0,0,0)" : "", opacity: t.opacity, animation: h && a(t.opacity, t.trail, l, t.lines) + " " + 1 / t.speed + "s linear infinite"}), t.shadow && s(r, o(i("#000", "0 0 4px #000"), {top: "2px"})), s(e, s(r, i(t.color, "0 0 1px rgba(0,0,0,.1)")));
        return e
    }, opacity: function (e, t, i) {
        t < e.childNodes.length && (e.childNodes[t].style.opacity = i)
    }}), function () {
        function e(e, t) {
            return n("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
        }

        var t = o(n("group"), {behavior: "url(#default#VML)"});
        !r(t, "transform") && t.adj ? (p.addRule(".spin-vml", "behavior:url(#default#VML)"), g.prototype.lines = function (t, i) {
            function n() {
                return o(e("group", {coordsize: c + " " + c, coordorigin: -l + " " + -l}), {width: c, height: c})
            }

            function a(t, a, r) {
                s(u, s(o(n(), {rotation: 360 / i.lines * t + "deg", left: ~~a}), s(o(e("roundrect", {arcsize: i.corners}), {width: l, height: i.width, left: i.radius, top: -i.width >> 1, filter: r}), e("fill", {color: i.color, opacity: i.opacity}), e("stroke", {opacity: 0}))))
            }

            var r, l = i.length + i.width, c = 2 * l, h = 2 * -(i.width + i.length) + "px", u = o(n(), {position: "absolute", top: h, left: h});
            if (i.shadow)for (r = 1; r <= i.lines; r++)a(r, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (r = 1; r <= i.lines; r++)a(r);
            return s(t, u)
        }, g.prototype.opacity = function (e, t, i, n) {
            var s = e.firstChild;
            n = n.shadow && n.lines || 0, s && t + n < s.childNodes.length && (s = s.childNodes[t + n], s = s && s.firstChild, s = s && s.firstChild, s && (s.opacity = i))
        }) : h = r(t, "animation")
    }(), "function" == typeof define && define.amd ? define(function () {
        return g
    }) : e.Spinner = g
}(window, document), /**!
 * trunk8 v1.2.3
 * https://github.com/rviscomi/trunk8
 *
 * Copyright 2012 Rick Viscomi
 * Released under the MIT License.
 *
 * Date: September 9, 2012
 */
    function (e) {
        function t() {
            var t, i, s, o, l = r.width, c = r.side, h = r.fill, u = n.getLineHeight(this) * r.lines, d = this.data("trunk8") || this.text(), p = d.length, f = "";
            if (this.html(d).data("trunk8", d), l === a.auto) {
                if (this.height() <= u)return;
                for (t = 0, i = p - 1; i >= t;)s = t + (i - t >> 1), o = n.eatStr(d, c, p - s, h), this.html(o), this.height() > u ? i = s - 1 : (t = s + 1, f = f.length > o.length ? f : o);
                this.html(""), this.html(f), r.tooltip && this.attr("title", d)
            } else isNaN(l) ? e.error('Invalid width "' + l + '".') : (s = p - l, o = n.eatStr(d, c, s, h), this.html(o), r.tooltip && this.attr("title", d))
        }

        var i, n, s = {center: "center", left: "left", right: "right"}, a = {auto: "auto"}, r = {fill: "&hellip;", lines: 1, side: s.right, tooltip: !0, width: a.auto};
        i = {init: function (i) {
            return r = e.extend(r, i), this.each(function () {
                t.call(e(this))
            })
        }, update: function (i) {
            return this.each(function () {
                i && e(this).data("trunk8", i), t.call(e(this))
            })
        }, revert: function () {
            return this.each(function () {
                var t = e(this).data("trunk8");
                e(this).html(t)
            })
        }, getSettings: function () {
            return r
        }}, n = {eatStr: function (t, i, a, r) {
            var o, l, c = t.length, h = n.eatStr.generateKey.apply(null, arguments);
            if (n.eatStr.cache[h])return n.eatStr.cache[h];
            if (("string" != typeof t || 0 === c) && e.error('Invalid source string "' + t + '".'), 0 > a || a > c)e.error('Invalid bite size "' + a + '".'); else if (0 === a)return t;
            switch ("string" != typeof(r + "") && e.error("Fill unable to be converted to a string."), i) {
                case s.right:
                    return n.eatStr.cache[h] = e.trim(t.substr(0, c - a)) + r;
                case s.left:
                    return n.eatStr.cache[h] = r + e.trim(t.substr(a));
                case s.center:
                    return o = c >> 1, l = a >> 1, n.eatStr.cache[h] = e.trim(n.eatStr(t.substr(0, c - o), s.right, a - l, "")) + r + e.trim(n.eatStr(t.substr(c - o), s.left, l, ""));
                default:
                    e.error('Invalid side "' + i + '".')
            }
        }, getLineHeight: function (t) {
            var i, n = e(t).html(), s = "line-height-test";
            return e(t).html("i").wrap('<div id="' + s + '" />'), i = e("#" + s).innerHeight(), e(t).html(n).unwrap(), i
        }}, n.eatStr.cache = {}, n.eatStr.generateKey = function () {
            return Array.prototype.join.call(arguments, "")
        }, e.fn.trunk8 = function (t) {
            return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.trunk8"), void 0) : i.init.apply(this, arguments)
        }
    }(jQuery), jQuery.fn.AdaptiveMenu = function (e) {
    var e = jQuery.extend({text: "More...", accuracy: 70, "class": null, classLinckMore: null}, e), t = this, i = $(t).find("li"), n = 0, s = [];
    $.each(i, function (e, t) {
        n += $(t).width(), s.push(n)
    });
    var a = function (n) {
        for (var n = n - e.accuracy, a = 0; a < s.length; a++)s[a] > n ? $(i[a]).hide() : $(i[a]).show();
        $(t).find("#more").remove();
        var r = $(i).filter(":not(:visible)"), o = $(i).filter(":visible").last();
        if (r.length > 0) {
            var l = $("<li>").css({display: "inline-block", "white-space": "nowrap"}).addClass(e.classLinckMore).attr({id: "more"}).html(e.text).click(function () {
                $(this).find("li").toggle()
            }), c = $("<ul>").css({position: "absolute"}).addClass(e.klass).html(r.clone()).prepend(o.clone().hide());
            l.append(c), o.hide().before(l)
        }
    };
    jQuery(window).resize(function () {
        a(jQuery(window).width())
    }), jQuery(window).ready(function () {
        a(jQuery(window).width())
    })
}, /**
 * equalize.js
 * Author & copyright (c) 2012: Tim Svensen
 * Dual MIT & GPL license
 *
 * Page: http://tsvensen.github.com/equalize.js
 * Repo: https://github.com/tsvensen/equalize.js/
 *
 * The jQuery plugin for equalizing the height or width of elements.
 *
 * Equalize will accept any of the jQuery Dimension methods:
 *   height, outerHeight, innerHeight,
 *   width, outerWidth, innerWidth.
 *
 * EXAMPLE
 * $('.parent').equalize(); // defaults to 'height'
 * $('.parent').equalize('width'); // equalize the widths
 */
    function (e) {
        e.fn.equalize = function (t) {
            var i = this, t = t || "height", n = t.indexOf("eight") > 0 ? "height" : "width";
            return e.isFunction(e.fn[t]) ? i.each(function () {
                var i = e(this).children(), s = 0;
                i.each(function () {
                    var i = e(this)[t]();
                    i > s && (s = i)
                }), i.css(n, s + "px")
            }) : !1
        }
    }(jQuery, window, document), $(document).ready(function () {
    function e(e) {
        e.wrap("<div class='table-wrapper' />");
        var t = e.clone();
        t.find("td:not(:first-child), th:not(:first-child)").css("display", "none"), t.removeClass("responsive"), e.closest(".table-wrapper").append(t), t.wrap("<div class='pinned' />"), e.wrap("<div class='scrollable' />")
    }

    function t(e) {
        e.closest(".table-wrapper").find(".pinned").remove(), e.unwrap(), e.unwrap()
    }

    var i = !1, n = function () {
        return $(window).width() < 767 && !i ? (i = !0, $("table.responsive").each(function (t, i) {
            e($(i))
        }), !0) : (i && $(window).width() > 767 && (i = !1, $("table.responsive").each(function (e, i) {
            t($(i))
        })), void 0)
    };
    $(window).load(n), $(window).bind("resize", n)
}), /**
 * jQuery Horizontal Navigation 1.0
 * https://github.com/sebnitu/horizontalNav
 *
 * By Sebastian Nitu - Copyright 2012 - All rights reserved
 * Author URL: http://sebnitu.com
 */
    function (e) {
        e.fn.horizontalNav = function (t) {
            var i = e.extend({}, e.fn.horizontalNav.defaults, t);
            return this.each(function () {
                function t(e) {
                    return e.innerWidth() - (parseInt(e.css("padding-left")) + parseInt(e.css("padding-right")))
                }

                function n(t, i) {
                    i = i || 100;
                    var n;
                    e(window).resize(function () {
                        clearTimeout(n), n = setTimeout(function () {
                            t()
                        }, i)
                    })
                }

                function s() {
                    if (1 != r.tableDisplay || e.browser.msie && parseInt(e.browser.version, 10) <= 7) {
                        l.css({"float": "left"}), c.css({"float": "left", width: "auto"}), d.css({"padding-left": 0, "padding-right": 0});
                        var i = t(l), n = l.outerWidth(!0), s = n - i, a = t(o), p = a - s - i, f = Math.floor(p / u);
                        c.each(function () {
                            var i = t(e(this));
                            e(this).css({width: i + f + "px"})
                        });
                        var g = t(h) + (a - s - t(l));
                        (e.browser.mozilla || e.browser.msie) && (g -= 1), h.css({width: g + "px"})
                    } else l.css({display: "table", "float": "none", width: "100%"}), c.css({display: "table-cell", "float": "none"})
                }

                var a = e(this), r = e.meta ? e.extend({}, i, a.data()) : i;
                if (a.is("ul"))var o = a.parent(); else var o = a;
                o.css({zoom: "1"}).append('<div class="clearHorizontalNav">'), e(".clearHorizontalNav").css({display: "block", overflow: "hidden", visibility: "hidden", width: 0, height: 0, clear: "both"});
                var l = a.is("ul") ? a : o.find("> ul"), c = l.find("> li"), h = c.last(), u = c.size(), d = c.find("> a");
                r.responsive === !0 && (1 != r.tableDisplay || e.browser.msie && parseInt(e.browser.version, 10) <= 7) && n(s, r.responsiveDelay), s()
            })
        }, e.fn.horizontalNav.defaults = {responsive: !0, responsiveDelay: 100, tableDisplay: !0}
    }(jQuery);
var Query = function (e) {
    "use strict";
    var t = function (e) {
        var t, i, n, s, a = [];
        if ("undefined" == typeof e || null === e || "" === e)return a;
        for (0 === e.indexOf("?") && (e = e.substring(1)), i = e.toString().split(/[&;]/), t = 0; t < i.length; t++)n = i[t], s = n.split("="), a.push([s[0], s[1]]);
        return a
    }, i = t(e), n = function () {
        var e, t, n = "";
        for (e = 0; e < i.length; e++)t = i[e], n.length > 0 && (n += "&"), n += t.join("=");
        return n.length > 0 ? "?" + n : n
    }, s = function (e) {
        return e = decodeURIComponent(e), e = e.replace("+", " ")
    }, a = function (e) {
        var t, n;
        for (n = 0; n < i.length; n++)if (t = i[n], s(e) === s(t[0]))return t[1]
    }, r = function (e) {
        var t, n, a = [];
        for (t = 0; t < i.length; t++)n = i[t], s(e) === s(n[0]) && a.push(n[1]);
        return a
    }, o = function (e, t) {
        var n, a, r, o, l = [];
        for (n = 0; n < i.length; n++)a = i[n], r = s(a[0]) === s(e), o = s(a[1]) === s(t), (1 === arguments.length && !r || 2 === arguments.length && !r && !o) && l.push(a);
        return i = l, this
    }, l = function (e, t, n) {
        return 3 === arguments.length && -1 !== n ? (n = Math.min(n, i.length), i.splice(n, 0, [e, t])) : arguments.length > 0 && i.push([e, t]), this
    }, c = function (e, t, n) {
        var a, r, c = -1;
        if (3 === arguments.length) {
            for (a = 0; a < i.length; a++)if (r = i[a], s(r[0]) === s(e) && decodeURIComponent(r[1]) === s(n)) {
                c = a;
                break
            }
            o(e, n).addParam(e, t, c)
        } else {
            for (a = 0; a < i.length; a++)if (r = i[a], s(r[0]) === s(e)) {
                c = a;
                break
            }
            o(e), l(e, t, c)
        }
        return this
    };
    return{getParamValue: a, getParamValues: r, deleteParam: o, addParam: l, replaceParam: c, toString: n}
}, Uri = function (e) {
    "use strict";
    var t = !1, i = function (e) {
        for (var i = {strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/, loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}, n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], s = {name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g}, a = i[t ? "strict" : "loose"].exec(e), r = {}, o = 14; o--;)r[n[o]] = a[o] || "";
        return r[s.name] = {}, r[n[12]].replace(s.parser, function (e, t, i) {
            t && (r[s.name][t] = i)
        }), r
    }, n = i(e || ""), s = new Query(n.query), a = function (e) {
        return"undefined" != typeof e && (n.protocol = e), n.protocol
    }, r = null, o = function (e) {
        return"undefined" != typeof e && (r = e), null === r ? -1 !== n.source.indexOf("//") : r
    }, l = function (e) {
        return"undefined" != typeof e && (n.userInfo = e), n.userInfo
    }, c = function (e) {
        return"undefined" != typeof e && (n.host = e), n.host
    }, h = function (e) {
        return"undefined" != typeof e && (n.port = e), n.port
    }, u = function (e) {
        return"undefined" != typeof e && (n.path = e), n.path
    }, d = function (e) {
        return"undefined" != typeof e && (s = new Query(e)), s
    }, p = function (e) {
        return"undefined" != typeof e && (n.anchor = e), n.anchor
    }, f = function (e) {
        return a(e), this
    }, g = function (e) {
        return o(e), this
    }, m = function (e) {
        return l(e), this
    }, v = function (e) {
        return c(e), this
    }, _ = function (e) {
        return h(e), this
    }, b = function (e) {
        return u(e), this
    }, y = function (e) {
        return d(e), this
    }, x = function (e) {
        return p(e), this
    }, w = function (e) {
        return d().getParamValue(e)
    }, k = function (e) {
        return d().getParamValues(e)
    }, C = function (e, t) {
        return 2 === arguments.length ? d().deleteParam(e, t) : d().deleteParam(e), this
    }, j = function (e, t, i) {
        return 3 === arguments.length ? d().addParam(e, t, i) : d().addParam(e, t), this
    }, S = function (e, t, i) {
        return 3 === arguments.length ? d().replaceParam(e, t, i) : d().replaceParam(e, t), this
    }, T = function () {
        var e = "", t = function (e) {
            return null !== e && "" !== e
        };
        return t(a()) ? (e += a(), a().indexOf(":") !== a().length - 1 && (e += ":"), e += "//") : o() && t(c()) && (e += "//"), t(l()) && t(c()) && (e += l(), l().indexOf("@") !== l().length - 1 && (e += "@")), t(c()) && (e += c(), t(h()) && (e += ":" + h())), t(u()) ? e += u() : t(c()) && (t(d().toString()) || t(p())) && (e += "/"), t(d().toString()) && (0 !== d().toString().indexOf("?") && (e += "?"), e += d().toString()), t(p()) && (0 !== p().indexOf("#") && (e += "#"), e += p()), e
    }, D = function () {
        return new Uri(T())
    };
    return{protocol: a, hasAuthorityPrefix: o, userInfo: l, host: c, port: h, path: u, query: d, anchor: p, setProtocol: f, setHasAuthorityPrefix: g, setUserInfo: m, setHost: v, setPort: _, setPath: b, setQuery: y, setAnchor: x, getQueryParamValue: w, getQueryParamValues: k, deleteQueryParam: C, addQueryParam: j, replaceQueryParam: S, toString: T, clone: D}
}, jsUri = Uri, update_state = function (e) {
    var t = $("span#" + e + "country .select2").select2("val"), i = state_mapper[t], n = $("span#" + e + "state select.select2"), s = $("span#" + e + "state input");
    if (i) {
        n.html("");
        var a = [
            ["", ""]
        ].concat(i);
        $.each(a, function (e, t) {
            var i = $(document.createElement("option")).attr("value", t[0]).html(t[1]);
            n.append(i)
        }), n.prop("disabled", !1).show(), n.select2(), s.hide().prop("disabled", !0)
    } else s.prop("disabled", !1).show(), n.select2("destroy").hide()
};
jQuery(function (e) {
    e(".fullwidth-menu").horizontalNav({tableDisplay: !1, responsiveDelay: 0}), e(".field.checkbox label").vAlign(), Spree.translations && e(".main-menu-wrapper ul").AdaptiveMenu({text: "<a href='#'><i class='icon-chevron-down'></i> " + Spree.translations.more + "</a>", klass: "dropdown"}), e(".with-tip").powerTip({smartPlacement: !0, fadeInTime: 50, fadeOutTime: 50, intentPollInterval: 300}), e(".with-tip").on({powerTipPreRender: function () {
        e("#powerTip").addClass(e(this).attr("data-action")), e("#powerTip").addClass(e(this).attr("data-tip-color"))
    }, powerTipClose: function () {
        e("#powerTip").removeClass(e(this).attr("data-action"))
    }}), setTimeout('$(".flash").fadeOut()', 5e3), e("table tbody tr td.actions a").hover(function () {
        var t = e(this).closest("tr"), i = "highlight action-" + e(this).attr("data-action");
        t.addClass(i), t.prev().addClass("before-" + i)
    }, function () {
        var t = e(this).closest("tr"), i = "highlight action-" + e(this).attr("data-action");
        t.removeClass(i), t.prev().removeClass("before-" + i)
    });
    var t = e(".truncate");
    t.each(function () {
        e(this).trunk8()
    }), e(window).resize(function () {
        t.each(function () {
            e(this).trunk8()
        })
    }), e("dl").equalize("outerHeight")
}), $.fn.visible = function (e) {
    this[e ? "show" : "hide"]()
}, show_flash_error = function (e) {
    error_div = $(".flash.error"), error_div.length > 0 ? (error_div.html(e), error_div.show()) : $("#content .toolbar").length > 0 ? $("#content .toolbar").before('<div class="flash error">' + e + "</div>") : $("#content h1").before('<div class="flash error">' + e + "</div>")
}, $.fn.radioControlsVisibilityOfElement = function (e) {
    this.get(0) && (showValue = this.get(0).value, radioGroup = $("input[name='" + this.get(0).name + "']"), radioGroup.each(function () {
        $(this).click(function () {
            $(e).visible(this.checked && this.value == showValue)
        }), this.checked && this.click()
    }))
}, handle_date_picker_fields = function () {
    Spree.translations && $(".datepicker").datepicker({dateFormat: Spree.translations.date_picker, dayNames: Spree.translations.abbr_day_names, dayNamesMin: Spree.translations.abbr_day_names, monthNames: Spree.translations.month_names, prevText: Spree.translations.previous, nextText: Spree.translations.next, showOn: "focus"}), $(".date-range-filter .datepicker-from").datepicker("option", "onSelect", function (e) {
        $(".date-range-filter .datepicker-to").datepicker("option", "minDate", e)
    }), $(".date-range-filter .datepicker-to").datepicker("option", "onSelect", function (e) {
        $(".date-range-filter .datepicker-from").datepicker("option", "maxDate", e)
    })
}, $(document).ready(function () {
    handle_date_picker_fields(), $(".observe_field").on("change", function () {
        target = $(this).attr("data-update"), ajax_indicator = $(this).attr("data-ajax-indicator") || "#busy_indicator", $(target).hide(), $(ajax_indicator).show(), $.ajax({dataType: "html", url: $(this).attr("data-base-url") + encodeURIComponent($(this).val()), type: "get", success: function (e) {
            $(target).html(e), $(ajax_indicator).hide(), $(target).show()
        }})
    }), $(".add_fields").click(function () {
        var e = $(this).data("target"), t = $(e + " tr:visible:last").clone(), i = (new Date).getTime();
        t.find("input, select").each(function () {
            var e = $(this);
            e.val(""), "undefined" != typeof e.attr("id") && e.attr("id", e.attr("id").replace(/\d+/, i)), "undefined" != typeof e.attr("name") && e.attr("name", e.attr("name").replace(/\d+/, i))
        }), t.find("a").each(function () {
            var e = $(this);
            e.attr("href", "#")
        }), $(e).prepend(t)
    }), $("body").on("click", ".delete-resource", function () {
        var e = $(this);
        return confirm(e.data("confirm")) && $.ajax({type: "POST", url: $(this).attr("href"), data: {_method: "delete", authenticity_token: AUTH_TOKEN}, dataType: "script", success: function () {
            e.parents("tr").fadeOut("hide")
        }, error: function (e) {
            show_flash_error(e.responseText)
        }}), !1
    }), $("body").on("click", "a.remove_fields", function () {
        return el = $(this), el.prev("input[type=hidden]").val("1"), el.closest(".fields").hide(), "#" == el.attr("href") ? el.parents("tr").fadeOut("hide") : el.attr("href") && $.ajax({type: "POST", url: el.attr("href"), data: {_method: "delete", authenticity_token: AUTH_TOKEN}, success: function () {
            el.parents("tr").fadeOut("hide")
        }, error: function (e) {
            show_flash_error(e.responseText)
        }}), !1
    }), $("body").on("click", ".select_properties_from_prototype", function () {
        $("#busy_indicator").show();
        var e = $(this);
        return $.ajax({dataType: "script", url: e.attr("href"), type: "get", success: function () {
            e.parent("td").parent("tr").hide(), $("#busy_indicator").hide()
        }}), !1
    });
    var e = function (e, t) {
        return t.children().each(function () {
            $(this).width($(this).width())
        }), t
    };
    $("table.sortable").ready(function () {
        var t = $(this).find("tbody tr:first-child td").length;
        $("table.sortable tbody").sortable({handle: ".handle", helper: e, placeholder: "ui-sortable-placeholder", update: function (e, t) {
            $("#progress").show(), positions = {}, $.each($("table.sortable tbody tr"), function (e, t) {
                reg = /spree_(\w+_?)+_(\d+)/, parts = reg.exec($(t).attr("id")), parts && (positions["positions[" + parts[2] + "]"] = e)
            }), $.ajax({type: "POST", dataType: "script", url: $(t.item).closest("table.sortable").data("sortable-link"), data: positions, success: function () {
                $("#progress").hide()
            }})
        }, start: function (e, i) {
            i.placeholder.height(i.item.height()), i.placeholder.html("<td colspan='" + (t - 1) + "'></td><td class='actions'></td>")
        }, stop: function () {
            $("table.sortable tr:even").removeClass("odd even").addClass("even"), $("table.sortable tr:odd").removeClass("odd even").addClass("odd")
        }})
    }), $("a.dismiss").click(function () {
        $(this).parent().fadeOut()
    })
}), function () {
    window.Spree = function () {
        function e() {
        }

        return e.url = function (t, i) {
            return void 0 === t.path && (t = new Uri(t)), i && $.each(i, function (e, i) {
                return t.addQueryParam(e, i)
            }), e.api_key && t.addQueryParam("token", e.api_key), t
        }, e.uri = function (e, t) {
            return url(e, t)
        }, e.ajax = function (t, i) {
            var n;
            return"string" == typeof t ? $.ajax(e.url(t).toString(), i) : (n = t.url, delete t.url, $.ajax(e.url(n).toString(), t))
        }, e
    }()
}.call(this), this.Handlebars = {}, function (e) {
    e.VERSION = "1.0.rc.1", e.helpers = {}, e.partials = {}, e.registerHelper = function (e, t, i) {
        i && (t.not = i), this.helpers[e] = t
    }, e.registerPartial = function (e, t) {
        this.partials[e] = t
    }, e.registerHelper("helperMissing", function (e) {
        if (2 === arguments.length)return void 0;
        throw new Error("Could not find property '" + e + "'")
    });
    var t = Object.prototype.toString, i = "[object Function]";
    e.registerHelper("blockHelperMissing", function (n, s) {
        var a = s.inverse || function () {
        }, r = s.fn, o = t.call(n);
        return o === i && (n = n.call(this)), n === !0 ? r(this) : n === !1 || null == n ? a(this) : "[object Array]" === o ? n.length > 0 ? e.helpers.each(n, s) : a(this) : r(n)
    }), e.K = function () {
    }, e.createFrame = Object.create || function (t) {
        e.K.prototype = t;
        var i = new e.K;
        return e.K.prototype = null, i
    }, e.registerHelper("each", function (t, i) {
        var n, s = i.fn, a = i.inverse, r = "";
        if (i.data && (n = e.createFrame(i.data)), t && t.length > 0)for (var o = 0, l = t.length; l > o; o++)n && (n.index = o), r += s(t[o], {data: n}); else r = a(this);
        return r
    }), e.registerHelper("if", function (n, s) {
        var a = t.call(n);
        return a === i && (n = n.call(this)), !n || e.Utils.isEmpty(n) ? s.inverse(this) : s.fn(this)
    }), e.registerHelper("unless", function (t, i) {
        var n = i.fn, s = i.inverse;
        return i.fn = s, i.inverse = n, e.helpers["if"].call(this, t, i)
    }), e.registerHelper("with", function (e, t) {
        return t.fn(e)
    }), e.registerHelper("log", function (t) {
        e.log(t)
    })
}(this.Handlebars);
var handlebars = function () {
    function e() {
        this.yy = {}
    }

    var t = {trace: function () {
    }, yy: {}, symbols_: {error: 2, root: 3, program: 4, EOF: 5, statements: 6, simpleInverse: 7, statement: 8, openInverse: 9, closeBlock: 10, openBlock: 11, mustache: 12, partial: 13, CONTENT: 14, COMMENT: 15, OPEN_BLOCK: 16, inMustache: 17, CLOSE: 18, OPEN_INVERSE: 19, OPEN_ENDBLOCK: 20, path: 21, OPEN: 22, OPEN_UNESCAPED: 23, OPEN_PARTIAL: 24, params: 25, hash: 26, DATA: 27, param: 28, STRING: 29, INTEGER: 30, BOOLEAN: 31, hashSegments: 32, hashSegment: 33, ID: 34, EQUALS: 35, pathSegments: 36, SEP: 37, $accept: 0, $end: 1}, terminals_: {2: "error", 5: "EOF", 14: "CONTENT", 15: "COMMENT", 16: "OPEN_BLOCK", 18: "CLOSE", 19: "OPEN_INVERSE", 20: "OPEN_ENDBLOCK", 22: "OPEN", 23: "OPEN_UNESCAPED", 24: "OPEN_PARTIAL", 27: "DATA", 29: "STRING", 30: "INTEGER", 31: "BOOLEAN", 34: "ID", 35: "EQUALS", 37: "SEP"}, productions_: [0, [3, 2], [4, 3], [4, 1], [4, 0], [6, 1], [6, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 3], [13, 4], [7, 2], [17, 3], [17, 2], [17, 2], [17, 1], [17, 1], [25, 2], [25, 1], [28, 1], [28, 1], [28, 1], [28, 1], [28, 1], [26, 1], [32, 2], [32, 1], [33, 3], [33, 3], [33, 3], [33, 3], [33, 3], [21, 1], [36, 3], [36, 1]], performAction: function (e, t, i, n, s, a) {
        var r = a.length - 1;
        switch (s) {
            case 1:
                return a[r - 1];
            case 2:
                this.$ = new n.ProgramNode(a[r - 2], a[r]);
                break;
            case 3:
                this.$ = new n.ProgramNode(a[r]);
                break;
            case 4:
                this.$ = new n.ProgramNode([]);
                break;
            case 5:
                this.$ = [a[r]];
                break;
            case 6:
                a[r - 1].push(a[r]), this.$ = a[r - 1];
                break;
            case 7:
                this.$ = new n.BlockNode(a[r - 2], a[r - 1].inverse, a[r - 1], a[r]);
                break;
            case 8:
                this.$ = new n.BlockNode(a[r - 2], a[r - 1], a[r - 1].inverse, a[r]);
                break;
            case 9:
                this.$ = a[r];
                break;
            case 10:
                this.$ = a[r];
                break;
            case 11:
                this.$ = new n.ContentNode(a[r]);
                break;
            case 12:
                this.$ = new n.CommentNode(a[r]);
                break;
            case 13:
                this.$ = new n.MustacheNode(a[r - 1][0], a[r - 1][1]);
                break;
            case 14:
                this.$ = new n.MustacheNode(a[r - 1][0], a[r - 1][1]);
                break;
            case 15:
                this.$ = a[r - 1];
                break;
            case 16:
                this.$ = new n.MustacheNode(a[r - 1][0], a[r - 1][1]);
                break;
            case 17:
                this.$ = new n.MustacheNode(a[r - 1][0], a[r - 1][1], !0);
                break;
            case 18:
                this.$ = new n.PartialNode(a[r - 1]);
                break;
            case 19:
                this.$ = new n.PartialNode(a[r - 2], a[r - 1]);
                break;
            case 20:
                break;
            case 21:
                this.$ = [[a[r - 2]].concat(a[r - 1]), a[r]];
                break;
            case 22:
                this.$ = [[a[r - 1]].concat(a[r]), null];
                break;
            case 23:
                this.$ = [
                    [a[r - 1]],
                    a[r]
                ];
                break;
            case 24:
                this.$ = [
                    [a[r]],
                    null
                ];
                break;
            case 25:
                this.$ = [
                    [new n.DataNode(a[r])],
                    null
                ];
                break;
            case 26:
                a[r - 1].push(a[r]), this.$ = a[r - 1];
                break;
            case 27:
                this.$ = [a[r]];
                break;
            case 28:
                this.$ = a[r];
                break;
            case 29:
                this.$ = new n.StringNode(a[r]);
                break;
            case 30:
                this.$ = new n.IntegerNode(a[r]);
                break;
            case 31:
                this.$ = new n.BooleanNode(a[r]);
                break;
            case 32:
                this.$ = new n.DataNode(a[r]);
                break;
            case 33:
                this.$ = new n.HashNode(a[r]);
                break;
            case 34:
                a[r - 1].push(a[r]), this.$ = a[r - 1];
                break;
            case 35:
                this.$ = [a[r]];
                break;
            case 36:
                this.$ = [a[r - 2], a[r]];
                break;
            case 37:
                this.$ = [a[r - 2], new n.StringNode(a[r])];
                break;
            case 38:
                this.$ = [a[r - 2], new n.IntegerNode(a[r])];
                break;
            case 39:
                this.$ = [a[r - 2], new n.BooleanNode(a[r])];
                break;
            case 40:
                this.$ = [a[r - 2], new n.DataNode(a[r])];
                break;
            case 41:
                this.$ = new n.IdNode(a[r]);
                break;
            case 42:
                a[r - 2].push(a[r]), this.$ = a[r - 2];
                break;
            case 43:
                this.$ = [a[r]]
        }
    }, table: [
        {3: 1, 4: 2, 5: [2, 4], 6: 3, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {1: [3]},
        {5: [1, 16]},
        {5: [2, 3], 7: 17, 8: 18, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 19], 20: [2, 3], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {5: [2, 5], 14: [2, 5], 15: [2, 5], 16: [2, 5], 19: [2, 5], 20: [2, 5], 22: [2, 5], 23: [2, 5], 24: [2, 5]},
        {4: 20, 6: 3, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 4], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {4: 21, 6: 3, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 4], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {5: [2, 9], 14: [2, 9], 15: [2, 9], 16: [2, 9], 19: [2, 9], 20: [2, 9], 22: [2, 9], 23: [2, 9], 24: [2, 9]},
        {5: [2, 10], 14: [2, 10], 15: [2, 10], 16: [2, 10], 19: [2, 10], 20: [2, 10], 22: [2, 10], 23: [2, 10], 24: [2, 10]},
        {5: [2, 11], 14: [2, 11], 15: [2, 11], 16: [2, 11], 19: [2, 11], 20: [2, 11], 22: [2, 11], 23: [2, 11], 24: [2, 11]},
        {5: [2, 12], 14: [2, 12], 15: [2, 12], 16: [2, 12], 19: [2, 12], 20: [2, 12], 22: [2, 12], 23: [2, 12], 24: [2, 12]},
        {17: 22, 21: 23, 27: [1, 24], 34: [1, 26], 36: 25},
        {17: 27, 21: 23, 27: [1, 24], 34: [1, 26], 36: 25},
        {17: 28, 21: 23, 27: [1, 24], 34: [1, 26], 36: 25},
        {17: 29, 21: 23, 27: [1, 24], 34: [1, 26], 36: 25},
        {21: 30, 34: [1, 26], 36: 25},
        {1: [2, 1]},
        {6: 31, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {5: [2, 6], 14: [2, 6], 15: [2, 6], 16: [2, 6], 19: [2, 6], 20: [2, 6], 22: [2, 6], 23: [2, 6], 24: [2, 6]},
        {17: 22, 18: [1, 32], 21: 23, 27: [1, 24], 34: [1, 26], 36: 25},
        {10: 33, 20: [1, 34]},
        {10: 35, 20: [1, 34]},
        {18: [1, 36]},
        {18: [2, 24], 21: 41, 25: 37, 26: 38, 27: [1, 45], 28: 39, 29: [1, 42], 30: [1, 43], 31: [1, 44], 32: 40, 33: 46, 34: [1, 47], 36: 25},
        {18: [2, 25]},
        {18: [2, 41], 27: [2, 41], 29: [2, 41], 30: [2, 41], 31: [2, 41], 34: [2, 41], 37: [1, 48]},
        {18: [2, 43], 27: [2, 43], 29: [2, 43], 30: [2, 43], 31: [2, 43], 34: [2, 43], 37: [2, 43]},
        {18: [1, 49]},
        {18: [1, 50]},
        {18: [1, 51]},
        {18: [1, 52], 21: 53, 34: [1, 26], 36: 25},
        {5: [2, 2], 8: 18, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 2], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {14: [2, 20], 15: [2, 20], 16: [2, 20], 19: [2, 20], 22: [2, 20], 23: [2, 20], 24: [2, 20]},
        {5: [2, 7], 14: [2, 7], 15: [2, 7], 16: [2, 7], 19: [2, 7], 20: [2, 7], 22: [2, 7], 23: [2, 7], 24: [2, 7]},
        {21: 54, 34: [1, 26], 36: 25},
        {5: [2, 8], 14: [2, 8], 15: [2, 8], 16: [2, 8], 19: [2, 8], 20: [2, 8], 22: [2, 8], 23: [2, 8], 24: [2, 8]},
        {14: [2, 14], 15: [2, 14], 16: [2, 14], 19: [2, 14], 20: [2, 14], 22: [2, 14], 23: [2, 14], 24: [2, 14]},
        {18: [2, 22], 21: 41, 26: 55, 27: [1, 45], 28: 56, 29: [1, 42], 30: [1, 43], 31: [1, 44], 32: 40, 33: 46, 34: [1, 47], 36: 25},
        {18: [2, 23]},
        {18: [2, 27], 27: [2, 27], 29: [2, 27], 30: [2, 27], 31: [2, 27], 34: [2, 27]},
        {18: [2, 33], 33: 57, 34: [1, 58]},
        {18: [2, 28], 27: [2, 28], 29: [2, 28], 30: [2, 28], 31: [2, 28], 34: [2, 28]},
        {18: [2, 29], 27: [2, 29], 29: [2, 29], 30: [2, 29], 31: [2, 29], 34: [2, 29]},
        {18: [2, 30], 27: [2, 30], 29: [2, 30], 30: [2, 30], 31: [2, 30], 34: [2, 30]},
        {18: [2, 31], 27: [2, 31], 29: [2, 31], 30: [2, 31], 31: [2, 31], 34: [2, 31]},
        {18: [2, 32], 27: [2, 32], 29: [2, 32], 30: [2, 32], 31: [2, 32], 34: [2, 32]},
        {18: [2, 35], 34: [2, 35]},
        {18: [2, 43], 27: [2, 43], 29: [2, 43], 30: [2, 43], 31: [2, 43], 34: [2, 43], 35: [1, 59], 37: [2, 43]},
        {34: [1, 60]},
        {14: [2, 13], 15: [2, 13], 16: [2, 13], 19: [2, 13], 20: [2, 13], 22: [2, 13], 23: [2, 13], 24: [2, 13]},
        {5: [2, 16], 14: [2, 16], 15: [2, 16], 16: [2, 16], 19: [2, 16], 20: [2, 16], 22: [2, 16], 23: [2, 16], 24: [2, 16]},
        {5: [2, 17], 14: [2, 17], 15: [2, 17], 16: [2, 17], 19: [2, 17], 20: [2, 17], 22: [2, 17], 23: [2, 17], 24: [2, 17]},
        {5: [2, 18], 14: [2, 18], 15: [2, 18], 16: [2, 18], 19: [2, 18], 20: [2, 18], 22: [2, 18], 23: [2, 18], 24: [2, 18]},
        {18: [1, 61]},
        {18: [1, 62]},
        {18: [2, 21]},
        {18: [2, 26], 27: [2, 26], 29: [2, 26], 30: [2, 26], 31: [2, 26], 34: [2, 26]},
        {18: [2, 34], 34: [2, 34]},
        {35: [1, 59]},
        {21: 63, 27: [1, 67], 29: [1, 64], 30: [1, 65], 31: [1, 66], 34: [1, 26], 36: 25},
        {18: [2, 42], 27: [2, 42], 29: [2, 42], 30: [2, 42], 31: [2, 42], 34: [2, 42], 37: [2, 42]},
        {5: [2, 19], 14: [2, 19], 15: [2, 19], 16: [2, 19], 19: [2, 19], 20: [2, 19], 22: [2, 19], 23: [2, 19], 24: [2, 19]},
        {5: [2, 15], 14: [2, 15], 15: [2, 15], 16: [2, 15], 19: [2, 15], 20: [2, 15], 22: [2, 15], 23: [2, 15], 24: [2, 15]},
        {18: [2, 36], 34: [2, 36]},
        {18: [2, 37], 34: [2, 37]},
        {18: [2, 38], 34: [2, 38]},
        {18: [2, 39], 34: [2, 39]},
        {18: [2, 40], 34: [2, 40]}
    ], defaultActions: {16: [2, 1], 24: [2, 25], 38: [2, 23], 55: [2, 21]}, parseError: function (e) {
        throw new Error(e)
    }, parse: function (e) {
        function t() {
            var e;
            return e = i.lexer.lex() || 1, "number" != typeof e && (e = i.symbols_[e] || e), e
        }

        var i = this, n = [0], s = [null], a = [], r = this.table, o = "", l = 0, c = 0, h = 0;
        this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
        var u = this.lexer.yylloc;
        a.push(u);
        var d = this.lexer.options && this.lexer.options.ranges;
        "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
        for (var p, f, g, m, v, _, b, y, x, w = {}; ;) {
            if (g = n[n.length - 1], this.defaultActions[g] ? m = this.defaultActions[g] : ((null === p || "undefined" == typeof p) && (p = t()), m = r[g] && r[g][p]), "undefined" == typeof m || !m.length || !m[0]) {
                var k = "";
                if (!h) {
                    x = [];
                    for (_ in r[g])this.terminals_[_] && _ > 2 && x.push("'" + this.terminals_[_] + "'");
                    k = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + x.join(", ") + ", got '" + (this.terminals_[p] || p) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == p ? "end of input" : "'" + (this.terminals_[p] || p) + "'"), this.parseError(k, {text: this.lexer.match, token: this.terminals_[p] || p, line: this.lexer.yylineno, loc: u, expected: x})
                }
            }
            if (m[0]instanceof Array && m.length > 1)throw new Error("Parse Error: multiple actions possible at state: " + g + ", token: " + p);
            switch (m[0]) {
                case 1:
                    n.push(p), s.push(this.lexer.yytext), a.push(this.lexer.yylloc), n.push(m[1]), p = null, f ? (p = f, f = null) : (c = this.lexer.yyleng, o = this.lexer.yytext, l = this.lexer.yylineno, u = this.lexer.yylloc, h > 0 && h--);
                    break;
                case 2:
                    if (b = this.productions_[m[1]][1], w.$ = s[s.length - b], w._$ = {first_line: a[a.length - (b || 1)].first_line, last_line: a[a.length - 1].last_line, first_column: a[a.length - (b || 1)].first_column, last_column: a[a.length - 1].last_column}, d && (w._$.range = [a[a.length - (b || 1)].range[0], a[a.length - 1].range[1]]), v = this.performAction.call(w, o, c, l, this.yy, m[1], s, a), "undefined" != typeof v)return v;
                    b && (n = n.slice(0, 2 * -1 * b), s = s.slice(0, -1 * b), a = a.slice(0, -1 * b)), n.push(this.productions_[m[1]][0]), s.push(w.$), a.push(w._$), y = r[n[n.length - 2]][n[n.length - 1]], n.push(y);
                    break;
                case 3:
                    return!0
            }
        }
        return!0
    }}, i = function () {
        var e = {EOF: 1, parseError: function (e, t) {
            if (!this.yy.parser)throw new Error(e);
            this.yy.parser.parseError(e, t)
        }, setInput: function (e) {
            return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {first_line: 1, first_column: 0, last_line: 1, last_column: 0}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
        }, input: function () {
            var e = this._input[0];
            this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
            var t = e.match(/(?:\r\n?|\n).*/g);
            return t ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
        }, unput: function (e) {
            var t = e.length, i = e.split(/(?:\r\n?|\n)/g);
            this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
            var n = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), i.length - 1 && (this.yylineno -= i.length - 1);
            var s = this.yylloc.range;
            return this.yylloc = {first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: i ? (i.length === n.length ? this.yylloc.first_column : 0) + n[n.length - i.length].length - i[0].length : this.yylloc.first_column - t}, this.options.ranges && (this.yylloc.range = [s[0], s[0] + this.yyleng - t]), this
        }, more: function () {
            return this._more = !0, this
        }, less: function (e) {
            this.unput(this.match.slice(e))
        }, pastInput: function () {
            var e = this.matched.substr(0, this.matched.length - this.match.length);
            return(e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
        }, upcomingInput: function () {
            var e = this.match;
            return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
        }, showPosition: function () {
            var e = this.pastInput(), t = new Array(e.length + 1).join("-");
            return e + this.upcomingInput() + "\n" + t + "^"
        }, next: function () {
            if (this.done)return this.EOF;
            this._input || (this.done = !0);
            var e, t, i, n, s;
            this._more || (this.yytext = "", this.match = "");
            for (var a = this._currentRules(), r = 0; r < a.length && (i = this._input.match(this.rules[a[r]]), !i || t && !(i[0].length > t[0].length) || (t = i, n = r, this.options.flex)); r++);
            return t ? (s = t[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, a[n], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), e ? e : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {text: "", token: null, line: this.yylineno})
        }, lex: function () {
            var e = this.next();
            return"undefined" != typeof e ? e : this.lex()
        }, begin: function (e) {
            this.conditionStack.push(e)
        }, popState: function () {
            return this.conditionStack.pop()
        }, _currentRules: function () {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
        }, topState: function () {
            return this.conditionStack[this.conditionStack.length - 2]
        }, pushState: function (e) {
            this.begin(e)
        }};
        return e.options = {}, e.performAction = function (e, t, i, n) {
            switch (i) {
                case 0:
                    if ("\\" !== t.yytext.slice(-1) && this.begin("mu"), "\\" === t.yytext.slice(-1) && (t.yytext = t.yytext.substr(0, t.yyleng - 1), this.begin("emu")), t.yytext)return 14;
                    break;
                case 1:
                    return 14;
                case 2:
                    return"\\" !== t.yytext.slice(-1) && this.popState(), "\\" === t.yytext.slice(-1) && (t.yytext = t.yytext.substr(0, t.yyleng - 1)), 14;
                case 3:
                    return 24;
                case 4:
                    return 16;
                case 5:
                    return 20;
                case 6:
                    return 19;
                case 7:
                    return 19;
                case 8:
                    return 23;
                case 9:
                    return 23;
                case 10:
                    return t.yytext = t.yytext.substr(3, t.yyleng - 5), this.popState(), 15;
                case 11:
                    return 22;
                case 12:
                    return 35;
                case 13:
                    return 34;
                case 14:
                    return 34;
                case 15:
                    return 37;
                case 16:
                    break;
                case 17:
                    return this.popState(), 18;
                case 18:
                    return this.popState(), 18;
                case 19:
                    return t.yytext = t.yytext.substr(1, t.yyleng - 2).replace(/\\"/g, '"'), 29;
                case 20:
                    return t.yytext = t.yytext.substr(1, t.yyleng - 2).replace(/\\"/g, '"'), 29;
                case 21:
                    return t.yytext = t.yytext.substr(1), 27;
                case 22:
                    return 31;
                case 23:
                    return 31;
                case 24:
                    return 30;
                case 25:
                    return 34;
                case 26:
                    return t.yytext = t.yytext.substr(1, t.yyleng - 2), 34;
                case 27:
                    return"INVALID";
                case 28:
                    return 5
            }
        }, e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[} ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@[a-zA-Z]+)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:[0-9]+(?=[}\s]))/, /^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], e.conditions = {mu: {rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], inclusive: !1}, emu: {rules: [2], inclusive: !1}, INITIAL: {rules: [0, 1, 28], inclusive: !0}}, e
    }();
    return t.lexer = i, e.prototype = t, t.Parser = e, new e
}();
"undefined" != typeof require && "undefined" != typeof exports && (exports.parser = handlebars, exports.Parser = handlebars.Parser, exports.parse = function () {
    return handlebars.parse.apply(handlebars, arguments)
}, exports.main = function (e) {
    if (!e[1])throw new Error("Usage: " + e[0] + " FILE");
    var t;
    return t = "undefined" != typeof process ? require("fs").readFileSync(require("path").resolve(e[1]), "utf8") : require("file").path(require("file").cwd()).join(e[1]).read({charset: "utf-8"}), exports.parser.parse(t)
}, "undefined" != typeof module && require.main === module && exports.main("undefined" != typeof process ? process.argv.slice(1) : require("system").args)), Handlebars.Parser = handlebars, Handlebars.parse = function (e) {
    return Handlebars.Parser.yy = Handlebars.AST, Handlebars.Parser.parse(e)
}, Handlebars.print = function (e) {
    return(new Handlebars.PrintVisitor).accept(e)
}, Handlebars.logger = {DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3, log: function () {
}}, Handlebars.log = function (e, t) {
    Handlebars.logger.log(e, t)
}, function () {
    Handlebars.AST = {}, Handlebars.AST.ProgramNode = function (e, t) {
        this.type = "program", this.statements = e, t && (this.inverse = new Handlebars.AST.ProgramNode(t))
    }, Handlebars.AST.MustacheNode = function (e, t, i) {
        this.type = "mustache", this.escaped = !i, this.hash = t;
        var n = this.id = e[0], s = this.params = e.slice(1), a = this.eligibleHelper = n.isSimple;
        this.isHelper = a && (s.length || t)
    }, Handlebars.AST.PartialNode = function (e, t) {
        this.type = "partial", this.id = e, this.context = t
    };
    var e = function (e, t) {
        if (e.original !== t.original)throw new Handlebars.Exception(e.original + " doesn't match " + t.original)
    };
    Handlebars.AST.BlockNode = function (t, i, n, s) {
        e(t.id, s), this.type = "block", this.mustache = t, this.program = i, this.inverse = n, this.inverse && !this.program && (this.isInverse = !0)
    }, Handlebars.AST.ContentNode = function (e) {
        this.type = "content", this.string = e
    }, Handlebars.AST.HashNode = function (e) {
        this.type = "hash", this.pairs = e
    }, Handlebars.AST.IdNode = function (e) {
        this.type = "ID", this.original = e.join(".");
        for (var t = [], i = 0, n = 0, s = e.length; s > n; n++) {
            var a = e[n];
            ".." === a ? i++ : "." === a || "this" === a ? this.isScoped = !0 : t.push(a)
        }
        this.parts = t, this.string = t.join("."), this.depth = i, this.isSimple = 1 === e.length && !this.isScoped && 0 === i
    }, Handlebars.AST.DataNode = function (e) {
        this.type = "DATA", this.id = e
    }, Handlebars.AST.StringNode = function (e) {
        this.type = "STRING", this.string = e
    }, Handlebars.AST.IntegerNode = function (e) {
        this.type = "INTEGER", this.integer = e
    }, Handlebars.AST.BooleanNode = function (e) {
        this.type = "BOOLEAN", this.bool = e
    }, Handlebars.AST.CommentNode = function (e) {
        this.type = "comment", this.comment = e
    }
}(), Handlebars.Exception = function () {
    var e = Error.prototype.constructor.apply(this, arguments);
    for (var t in e)e.hasOwnProperty(t) && (this[t] = e[t]);
    this.message = e.message
}, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function (e) {
    this.string = e
}, Handlebars.SafeString.prototype.toString = function () {
    return this.string.toString()
}, function () {
    var e = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, t = /[&<>"'`]/g, i = /[&<>"'`]/, n = function (t) {
        return e[t] || "&amp;"
    };
    Handlebars.Utils = {escapeExpression: function (e) {
        return e instanceof Handlebars.SafeString ? e.toString() : null == e || e === !1 ? "" : i.test(e) ? e.replace(t, n) : e
    }, isEmpty: function (e) {
        return"undefined" == typeof e ? !0 : null === e ? !0 : e === !1 ? !0 : "[object Array]" === Object.prototype.toString.call(e) && 0 === e.length ? !0 : !1
    }}
}(), Handlebars.Compiler = function () {
}, Handlebars.JavaScriptCompiler = function () {
}, function (e, t) {
    e.prototype = {compiler: e, disassemble: function () {
        for (var e, t, i, n = this.opcodes, s = [], a = 0, r = n.length; r > a; a++)if (e = n[a], "DECLARE" === e.opcode)s.push("DECLARE " + e.name + "=" + e.value); else {
            t = [];
            for (var o = 0; o < e.args.length; o++)i = e.args[o], "string" == typeof i && (i = '"' + i.replace("\n", "\\n") + '"'), t.push(i);
            s.push(e.opcode + " " + t.join(" "))
        }
        return s.join("\n")
    }, guid: 0, compile: function (e, t) {
        this.children = [], this.depths = {list: []}, this.options = t;
        var i = this.options.knownHelpers;
        if (this.options.knownHelpers = {helperMissing: !0, blockHelperMissing: !0, each: !0, "if": !0, unless: !0, "with": !0, log: !0}, i)for (var n in i)this.options.knownHelpers[n] = i[n];
        return this.program(e)
    }, accept: function (e) {
        return this[e.type](e)
    }, program: function (e) {
        var t, i = e.statements;
        this.opcodes = [];
        for (var n = 0, s = i.length; s > n; n++)t = i[n], this[t.type](t);
        return this.isSimple = 1 === s, this.depths.list = this.depths.list.sort(function (e, t) {
            return e - t
        }), this
    }, compileProgram: function (e) {
        var t, i = (new this.compiler).compile(e, this.options), n = this.guid++;
        this.usePartial = this.usePartial || i.usePartial, this.children[n] = i;
        for (var s = 0, a = i.depths.list.length; a > s; s++)t = i.depths.list[s], 2 > t || this.addDepth(t - 1);
        return n
    }, block: function (e) {
        var t = e.mustache, i = e.program, n = e.inverse;
        i && (i = this.compileProgram(i)), n && (n = this.compileProgram(n));
        var s = this.classifyMustache(t);
        "helper" === s ? this.helperMustache(t, i, n) : "simple" === s ? (this.simpleMustache(t), this.opcode("pushProgram", i), this.opcode("pushProgram", n), this.opcode("pushLiteral", "{}"), this.opcode("blockValue")) : (this.ambiguousMustache(t, i, n), this.opcode("pushProgram", i), this.opcode("pushProgram", n), this.opcode("pushLiteral", "{}"), this.opcode("ambiguousBlockValue")), this.opcode("append")
    }, hash: function (e) {
        var t, i, n = e.pairs;
        this.opcode("push", "{}");
        for (var s = 0, a = n.length; a > s; s++)t = n[s], i = t[1], this.accept(i), this.opcode("assignToHash", t[0])
    }, partial: function (e) {
        var t = e.id;
        this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.original), this.opcode("append")
    }, content: function (e) {
        this.opcode("appendContent", e.string)
    }, mustache: function (e) {
        var t = this.options, i = this.classifyMustache(e);
        "simple" === i ? this.simpleMustache(e) : "helper" === i ? this.helperMustache(e) : this.ambiguousMustache(e), e.escaped && !t.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
    }, ambiguousMustache: function (e, t, i) {
        var n = e.id, s = n.parts[0];
        this.opcode("getContext", n.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", i), this.opcode("invokeAmbiguous", s)
    }, simpleMustache: function (e) {
        var t = e.id;
        "DATA" === t.type ? this.DATA(t) : t.parts.length ? this.ID(t) : (this.addDepth(t.depth), this.opcode("getContext", t.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
    }, helperMustache: function (e, t, i) {
        var n = this.setupFullMustacheParams(e, t, i), s = e.id.parts[0];
        if (this.options.knownHelpers[s])this.opcode("invokeKnownHelper", n.length, s); else {
            if (this.knownHelpersOnly)throw new Error("You specified knownHelpersOnly, but used the unknown helper " + s);
            this.opcode("invokeHelper", n.length, s)
        }
    }, ID: function (e) {
        this.addDepth(e.depth), this.opcode("getContext", e.depth);
        var t = e.parts[0];
        t ? this.opcode("lookupOnContext", e.parts[0]) : this.opcode("pushContext");
        for (var i = 1, n = e.parts.length; n > i; i++)this.opcode("lookup", e.parts[i])
    }, DATA: function (e) {
        this.options.data = !0, this.opcode("lookupData", e.id)
    }, STRING: function (e) {
        this.opcode("pushString", e.string)
    }, INTEGER: function (e) {
        this.opcode("pushLiteral", e.integer)
    }, BOOLEAN: function (e) {
        this.opcode("pushLiteral", e.bool)
    }, comment: function () {
    }, opcode: function (e) {
        this.opcodes.push({opcode: e, args: [].slice.call(arguments, 1)})
    }, declare: function (e, t) {
        this.opcodes.push({opcode: "DECLARE", name: e, value: t})
    }, addDepth: function (e) {
        if (isNaN(e))throw new Error("EWOT");
        0 !== e && (this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e)))
    }, classifyMustache: function (e) {
        var t = e.isHelper, i = e.eligibleHelper, n = this.options;
        if (i && !t) {
            var s = e.id.parts[0];
            n.knownHelpers[s] ? t = !0 : n.knownHelpersOnly && (i = !1)
        }
        return t ? "helper" : i ? "ambiguous" : "simple"
    }, pushParams: function (e) {
        for (var t, i = e.length; i--;)t = e[i], this.options.stringParams ? (t.depth && this.addDepth(t.depth), this.opcode("getContext", t.depth || 0), this.opcode("pushStringParam", t.string)) : this[t.type](t)
    }, setupMustacheParams: function (e) {
        var t = e.params;
        return this.pushParams(t), e.hash ? this.hash(e.hash) : this.opcode("pushLiteral", "{}"), t
    }, setupFullMustacheParams: function (e, t, i) {
        var n = e.params;
        return this.pushParams(n), this.opcode("pushProgram", t), this.opcode("pushProgram", i), e.hash ? this.hash(e.hash) : this.opcode("pushLiteral", "{}"), n
    }};
    var i = function (e) {
        this.value = e
    };
    t.prototype = {nameLookup: function (e, i) {
        return/^[0-9]+$/.test(i) ? e + "[" + i + "]" : t.isValidJavaScriptVariableName(i) ? e + "." + i : e + "['" + i + "']"
    }, appendToBuffer: function (e) {
        return this.environment.isSimple ? "return " + e + ";" : "buffer += " + e + ";"
    }, initializeBuffer: function () {
        return this.quotedString("")
    }, namespace: "Handlebars", compile: function (e, t, i, n) {
        this.environment = e, this.options = t || {}, Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!i, this.context = i || {programs: [], aliases: {}}, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {list: []}, this.compileStack = [], this.compileChildren(e, t);
        var s, a = e.opcodes;
        for (this.i = 0, r = a.length; this.i < r; this.i++)s = a[this.i], "DECLARE" === s.opcode ? this[s.name] = s.value : this[s.opcode].apply(this, s.args);
        return this.createFunctionContext(n)
    }, nextOpcode: function () {
        var e = this.environment.opcodes;
        return e[this.i + 1], e[this.i + 1]
    }, eat: function () {
        this.i = this.i + 1
    }, preamble: function () {
        var e = [];
        if (this.isChild)e.push(""); else {
            var t = this.namespace, i = "helpers = helpers || " + t + ".helpers;";
            this.environment.usePartial && (i = i + " partials = partials || " + t + ".partials;"), this.options.data && (i += " data = data || {};"), e.push(i)
        }
        this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
    }, createFunctionContext: function (e) {
        var t = this.stackVars.concat(this.registers.list);
        if (t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", ")), !this.isChild)for (var i in this.context.aliases)this.source[1] = this.source[1] + ", " + i + "=" + this.context.aliases[i];
        this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
        for (var n = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], s = 0, a = this.environment.depths.list.length; a > s; s++)n.push("depth" + this.environment.depths.list[s]);
        if (e)return n.push(this.source.join("\n  ")), Function.apply(this, n);
        var r = "function " + (this.name || "") + "(" + n.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
        return Handlebars.log(Handlebars.logger.DEBUG, r + "\n\n"), r
    }, blockValue: function () {
        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
        var e = ["depth0"];
        this.setupParams(0, e), this.replaceStack(function (t) {
            return e.splice(1, 0, t), t + " = blockHelperMissing.call(" + e.join(", ") + ")"
        })
    }, ambiguousBlockValue: function () {
        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
        var e = ["depth0"];
        this.setupParams(0, e);
        var t = this.topStack();
        e.splice(1, 0, t), this.source.push("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
    }, appendContent: function (e) {
        this.source.push(this.appendToBuffer(this.quotedString(e)))
    }, append: function () {
        var e = this.popStack();
        this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
    }, appendEscaped: function () {
        var e = this.nextOpcode(), t = "";
        this.context.aliases.escapeExpression = "this.escapeExpression", e && "appendContent" === e.opcode && (t = " + " + this.quotedString(e.args[0]), this.eat(e)), this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + t))
    }, getContext: function (e) {
        this.lastContext !== e && (this.lastContext = e)
    }, lookupOnContext: function (e) {
        this.pushStack(this.nameLookup("depth" + this.lastContext, e, "context"))
    }, pushContext: function () {
        this.pushStackLiteral("depth" + this.lastContext)
    }, resolvePossibleLambda: function () {
        this.context.aliases.functionType = '"function"', this.replaceStack(function (e) {
            return"typeof " + e + " === functionType ? " + e + "() : " + e
        })
    }, lookup: function (e) {
        this.replaceStack(function (t) {
            return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
        })
    }, lookupData: function (e) {
        this.pushStack(this.nameLookup("data", e, "data"))
    }, pushStringParam: function (e) {
        this.pushStackLiteral("depth" + this.lastContext), this.pushString(e)
    }, pushString: function (e) {
        this.pushStackLiteral(this.quotedString(e))
    }, push: function (e) {
        this.pushStack(e)
    }, pushLiteral: function (e) {
        this.pushStackLiteral(e)
    }, pushProgram: function (e) {
        null != e ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
    }, invokeHelper: function (e, t) {
        this.context.aliases.helperMissing = "helpers.helperMissing";
        var i = this.lastHelper = this.setupHelper(e, t);
        this.register("foundHelper", i.name), this.pushStack("foundHelper ? foundHelper.call(" + i.callParams + ") " + ": helperMissing.call(" + i.helperMissingParams + ")")
    }, invokeKnownHelper: function (e, t) {
        var i = this.setupHelper(e, t);
        this.pushStack(i.name + ".call(" + i.callParams + ")")
    }, invokeAmbiguous: function (e) {
        this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
        var t = this.setupHelper(0, e), i = this.lastHelper = this.nameLookup("helpers", e, "helper");
        this.register("foundHelper", i);
        var n = this.nameLookup("depth" + this.lastContext, e, "context"), s = this.nextStack();
        this.source.push("if (foundHelper) { " + s + " = foundHelper.call(" + t.callParams + "); }"), this.source.push("else { " + s + " = " + n + "; " + s + " = typeof " + s + " === functionType ? " + s + "() : " + s + "; }")
    }, invokePartial: function (e) {
        var t = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"];
        this.options.data && t.push("data"), this.context.aliases.self = "this", this.pushStack("self.invokePartial(" + t.join(", ") + ");")
    }, assignToHash: function (e) {
        var t = this.popStack(), i = this.topStack();
        this.source.push(i + "['" + e + "'] = " + t + ";")
    }, compiler: t, compileChildren: function (e, t) {
        for (var i, n, s = e.children, a = 0, r = s.length; r > a; a++) {
            i = s[a], n = new this.compiler, this.context.programs.push("");
            var o = this.context.programs.length;
            i.index = o, i.name = "program" + o, this.context.programs[o] = n.compile(i, t, this.context)
        }
    }, programExpression: function (e) {
        if (this.context.aliases.self = "this", null == e)return"self.noop";
        for (var t, i = this.environment.children[e], n = i.depths.list, s = [i.index, i.name, "data"], a = 0, r = n.length; r > a; a++)t = n[a], 1 === t ? s.push("depth0") : s.push("depth" + (t - 1));
        return 0 === n.length ? "self.program(" + s.join(", ") + ")" : (s.shift(), "self.programWithDepth(" + s.join(", ") + ")")
    }, register: function (e, t) {
        this.useRegister(e), this.source.push(e + " = " + t + ";")
    }, useRegister: function (e) {
        this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e))
    }, pushStackLiteral: function (e) {
        return this.compileStack.push(new i(e)), e
    }, pushStack: function (e) {
        return this.source.push(this.incrStack() + " = " + e + ";"), this.compileStack.push("stack" + this.stackSlot), "stack" + this.stackSlot
    }, replaceStack: function (e) {
        var t = e.call(this, this.topStack());
        return this.source.push(this.topStack() + " = " + t + ";"), "stack" + this.stackSlot
    }, nextStack: function () {
        var e = this.incrStack();
        return this.compileStack.push("stack" + this.stackSlot), e
    }, incrStack: function () {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), "stack" + this.stackSlot
    }, popStack: function () {
        var e = this.compileStack.pop();
        return e instanceof i ? e.value : (this.stackSlot--, e)
    }, topStack: function () {
        var e = this.compileStack[this.compileStack.length - 1];
        return e instanceof i ? e.value : e
    }, quotedString: function (e) {
        return'"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'
    }, setupHelper: function (e, t) {
        var i = [];
        this.setupParams(e, i);
        var n = this.nameLookup("helpers", t, "helper");
        return{params: i, name: n, callParams: ["depth0"].concat(i).join(", "), helperMissingParams: ["depth0", this.quotedString(t)].concat(i).join(", ")}
    }, setupParams: function (e, t) {
        var i, n, s, a = [], r = [];
        a.push("hash:" + this.popStack()), n = this.popStack(), s = this.popStack(), (s || n) && (s || (this.context.aliases.self = "this", s = "self.noop"), n || (this.context.aliases.self = "this", n = "self.noop"), a.push("inverse:" + n), a.push("fn:" + s));
        for (var o = 0; e > o; o++)i = this.popStack(), t.push(i), this.options.stringParams && r.push(this.popStack());
        return this.options.stringParams && a.push("contexts:[" + r.join(",") + "]"), this.options.data && a.push("data:data"), t.push("{" + a.join(",") + "}"), t.join(", ")
    }};
    for (var n = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), s = t.RESERVED_WORDS = {}, a = 0, r = n.length; r > a; a++)s[n[a]] = !0;
    t.isValidJavaScriptVariableName = function (e) {
        return!t.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1
    }
}(Handlebars.Compiler, Handlebars.JavaScriptCompiler), Handlebars.precompile = function (e, t) {
    t = t || {};
    var i = Handlebars.parse(e), n = (new Handlebars.Compiler).compile(i, t);
    return(new Handlebars.JavaScriptCompiler).compile(n, t)
}, Handlebars.compile = function (e, t) {
    function i() {
        var i = Handlebars.parse(e), n = (new Handlebars.Compiler).compile(i, t), s = (new Handlebars.JavaScriptCompiler).compile(n, t, void 0, !0);
        return Handlebars.template(s)
    }

    t = t || {};
    var n;
    return function (e, t) {
        return n || (n = i()), n.call(this, e, t)
    }
}, Handlebars.VM = {template: function (e) {
    var t = {escapeExpression: Handlebars.Utils.escapeExpression, invokePartial: Handlebars.VM.invokePartial, programs: [], program: function (e, t, i) {
        var n = this.programs[e];
        return i ? Handlebars.VM.program(t, i) : n ? n : n = this.programs[e] = Handlebars.VM.program(t)
    }, programWithDepth: Handlebars.VM.programWithDepth, noop: Handlebars.VM.noop};
    return function (i, n) {
        return n = n || {}, e.call(t, Handlebars, i, n.helpers, n.partials, n.data)
    }
}, programWithDepth: function (e, t) {
    var i = Array.prototype.slice.call(arguments, 2);
    return function (n, s) {
        return s = s || {}, e.apply(this, [n, s.data || t].concat(i))
    }
}, program: function (e, t) {
    return function (i, n) {
        return n = n || {}, e(i, n.data || t)
    }
}, noop: function () {
    return""
}, invokePartial: function (e, t, i, n, s, a) {
    var r = {helpers: n, partials: s, data: a};
    if (void 0 === e)throw new Handlebars.Exception("The partial " + t + " could not be found");
    if (e instanceof Function)return e(i, r);
    if (Handlebars.compile)return s[t] = Handlebars.compile(e, {data: void 0 !== a}), s[t](i, r);
    throw new Handlebars.Exception("The partial " + t + " could not be compiled when running in runtime-only mode")
}}, Handlebars.template = Handlebars.VM.template, Handlebars.registerHelper("t", function (e) {
    return Spree.translations[e] ? Spree.translations[e] : (console.error("No translation found for " + e + ". Does it exist within spree/admin/shared/_translations.html.erb?"), void 0)
}), $(document).ready(function () {
    $("#variant_autocomplete_template").length > 0 && (window.variantTemplate = Handlebars.compile($("#variant_autocomplete_template").text()))
}), formatVariantResult = function (e) {
    return void 0 != e.images[0] && void 0 != e.images[0].image && (e.image = e.images[0].image.mini_url), variantTemplate({variant: e})
}, $.fn.variantAutocomplete = function () {
    Spree.routes && (this.parent().children(".options_placeholder").attr("id", this.parent().data("index")), this.select2({placeholder: "Select a variant", minimumInputLength: 3, ajax: {url: Spree.routes.variants_search, datatype: "json", data: function (e) {
        return{q: e}
    }, results: function (e) {
        return{results: e}
    }}, formatResult: formatVariantResult, formatSelection: function (e) {
        return $(this.element).parent().children(".options_placeholder").html(e.options_text), e.name
    }}))
}, $(document).ready(function () {
    $("#product_taxon_ids").length > 0 && $("#product_taxon_ids").select2({placeholder: Spree.translations.taxon_placeholder, multiple: !0, initSelection: function (e, t) {
        return url = Spree.url(Spree.routes.taxon_search, {ids: e.val()}), $.getJSON(url, null, function (e) {
            return t(self.cleanTaxons(e))
        })
    }, ajax: {url: Spree.routes.taxon_search, datatype: "json", data: function (e) {
        return{q: e}
    }, results: function (e) {
        return{results: self.cleanTaxons(e)}
    }}, formatResult: function (e) {
        return e.pretty_name
    }, formatSelection: function (e) {
        return e.pretty_name
    }})
}), /*
 Copyright 2012 Igor Vaynberg

 Version: 3.2 Timestamp: Mon Sep 10 10:38:04 PDT 2012

 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in
 compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software distributed under the License is
 distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and limitations under the License.
 */
    function (e) {
        "undefined" == typeof e.fn.each2 && e.fn.extend({each2: function (t) {
            for (var i = e([0]), n = -1, s = this.length; ++n < s && (i.context = i[0] = this[n]) && t.call(i[0], n, i) !== !1;);
            return this
        }})
    }(jQuery), function (e, t) {
    "use strict";
    function i(e, t) {
        var i, n = 0, s = t.length;
        if ("undefined" == typeof e)return-1;
        if (e.constructor === String) {
            for (; s > n; n += 1)if (0 === e.localeCompare(t[n]))return n
        } else for (; s > n; n += 1)if (i = t[n], i.constructor === String) {
            if (0 === i.localeCompare(e))return n
        } else if (i === e)return n;
        return-1
    }

    function n(e, i) {
        return e === i ? !0 : e === t || i === t ? !1 : null === e || null === i ? !1 : e.constructor === String ? 0 === e.localeCompare(i) : i.constructor === String ? 0 === i.localeCompare(e) : !1
    }

    function s(t, i) {
        var n, s, a;
        if (null === t || t.length < 1)return[];
        for (n = t.split(i), s = 0, a = n.length; a > s; s += 1)n[s] = e.trim(n[s]);
        return n
    }

    function a(e) {
        return e.outerWidth() - e.width()
    }

    function r(i) {
        var n = "keyup-change-value";
        i.bind("keydown", function () {
            e.data(i, n) === t && e.data(i, n, i.val())
        }), i.bind("keyup", function () {
            var s = e.data(i, n);
            s !== t && i.val() !== s && (e.removeData(i, n), i.trigger("keyup-change"))
        })
    }

    function o(i) {
        i.bind("mousemove", function (i) {
            var n = e.data(document, "select2-lastpos");
            (n === t || n.x !== i.pageX || n.y !== i.pageY) && e(i.target).trigger("mousemove-filtered", i)
        })
    }

    function l(e, i, n) {
        n = n || t;
        var s;
        return function () {
            var t = arguments;
            window.clearTimeout(s), s = window.setTimeout(function () {
                i.apply(n, t)
            }, e)
        }
    }

    function c(e) {
        var t, i = !1;
        return function () {
            return i === !1 && (t = e(), i = !0), t
        }
    }

    function h(e, t) {
        var n = l(e, function (e) {
            t.trigger("scroll-debounced", e)
        });
        t.bind("scroll", function (e) {
            i(e.target, t.get()) >= 0 && n(e)
        })
    }

    function u(e) {
        e.preventDefault(), e.stopPropagation()
    }

    function d(t) {
        if (!T) {
            var i = t[0].currentStyle || window.getComputedStyle(t[0], null);
            T = e("<div></div>").css({position: "absolute", left: "-10000px", top: "-10000px", display: "none", fontSize: i.fontSize, fontFamily: i.fontFamily, fontStyle: i.fontStyle, fontWeight: i.fontWeight, letterSpacing: i.letterSpacing, textTransform: i.textTransform, whiteSpace: "nowrap"}), e("body").append(T)
        }
        return T.text(t.val()), T.width()
    }

    function p(e, t, i) {
        var n = e.toUpperCase().indexOf(t.toUpperCase()), s = t.length;
        return 0 > n ? (i.push(e), void 0) : (i.push(e.substring(0, n)), i.push("<span class='select2-match'>"), i.push(e.substring(n, n + s)), i.push("</span>"), i.push(e.substring(n + s, e.length)), void 0)
    }

    function f(t) {
        var i, n = 0, s = null, a = t.quietMillis || 100;
        return function (r) {
            window.clearTimeout(i), i = window.setTimeout(function () {
                n += 1;
                var i = n, a = t.data, o = t.transport || e.ajax, l = t.traditional || !1, c = t.type || "GET";
                a = a.call(this, r.term, r.page, r.context), null !== s && s.abort(), s = o.call(null, {url: t.url, dataType: t.dataType, data: a, type: c, traditional: l, success: function (e) {
                    if (!(n > i)) {
                        var s = t.results(e, r.page);
                        r.callback(s)
                    }
                }})
            }, a)
        }
    }

    function g(t) {
        var i, n = t, s = function (e) {
            return"" + e.text
        };
        return e.isArray(n) || (s = n.text, e.isFunction(s) || (i = n.text, s = function (e) {
            return e[i]
        }), n = n.results), function (t) {
            var i, a = t.term, r = {results: []};
            return"" === a ? (t.callback({results: n}), void 0) : (i = function (n, r) {
                var o, l;
                if (n = n[0], n.children) {
                    o = {};
                    for (l in n)n.hasOwnProperty(l) && (o[l] = n[l]);
                    o.children = [], e(n.children).each2(function (e, t) {
                        i(t, o.children)
                    }), o.children.length && r.push(o)
                } else t.matcher(a, s(n)) && r.push(n)
            }, e(n).each2(function (e, t) {
                i(t, r.results)
            }), t.callback(r), void 0)
        }
    }

    function m(i) {
        return e.isFunction(i) ? i : function (n) {
            var s = n.term, a = {results: []};
            e(i).each(function () {
                var e = this.text !== t, i = e ? this.text : this;
                ("" === s || n.matcher(s, i)) && a.results.push(e ? this : {id: this, text: this})
            }), n.callback(a)
        }
    }

    function v(t) {
        if (e.isFunction(t))return!0;
        if (!t)return!1;
        throw new Error("formatterName must be a function or a falsy value")
    }

    function _(t) {
        return e.isFunction(t) ? t() : t
    }

    function b(t) {
        var i = 0;
        return e.each(t, function (e, t) {
            t.children ? i += b(t.children) : i++
        }), i
    }

    function y(e, i, s, a) {
        var r, o, l, c, h, u = e, d = !1;
        if (!a.createSearchChoice || !a.tokenSeparators || a.tokenSeparators.length < 1)return t;
        for (; ;) {
            for (o = -1, l = 0, c = a.tokenSeparators.length; c > l && (h = a.tokenSeparators[l], o = e.indexOf(h), !(o >= 0)); l++);
            if (0 > o)break;
            if (r = e.substring(0, o), e = e.substring(o + h.length), r.length > 0 && (r = a.createSearchChoice(r, i), r !== t && null !== r && a.id(r) !== t && null !== a.id(r))) {
                for (d = !1, l = 0, c = i.length; c > l; l++)if (n(a.id(r), a.id(i[l]))) {
                    d = !0;
                    break
                }
                d || s(r)
            }
        }
        return 0 != u.localeCompare(e) ? e : void 0
    }

    function x(t, i) {
        var n = function () {
        };
        return n.prototype = new t, n.prototype.constructor = n, n.prototype.parent = t.prototype, n.prototype = e.extend(n.prototype, i), n
    }

    if (window.Select2 === t) {
        var w, k, C, j, S, T;
        w = {TAB: 9, ENTER: 13, ESC: 27, SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SHIFT: 16, CTRL: 17, ALT: 18, PAGE_UP: 33, PAGE_DOWN: 34, HOME: 36, END: 35, BACKSPACE: 8, DELETE: 46, isArrow: function (e) {
            switch (e = e.which ? e.which : e) {
                case w.LEFT:
                case w.RIGHT:
                case w.UP:
                case w.DOWN:
                    return!0
            }
            return!1
        }, isControl: function (e) {
            var t = e.which;
            switch (t) {
                case w.SHIFT:
                case w.CTRL:
                case w.ALT:
                    return!0
            }
            return e.metaKey ? !0 : !1
        }, isFunctionKey: function (e) {
            return e = e.which ? e.which : e, e >= 112 && 123 >= e
        }}, S = function () {
            var e = 1;
            return function () {
                return e++
            }
        }(), e(document).delegate("body", "mousemove", function (t) {
            e.data(document, "select2-lastpos", {x: t.pageX, y: t.pageY})
        }), e(document).ready(function () {
            e(document).delegate("body", "mousedown touchend", function (i) {
                var n, s = e(i.target).closest("div.select2-container").get(0);
                s ? e(document).find("div.select2-container-active").each(function () {
                    this !== s && e(this).data("select2").blur()
                }) : (s = e(i.target).closest("div.select2-drop").get(0), e(document).find("div.select2-drop-active").each(function () {
                    this !== s && e(this).data("select2").blur()
                })), s = e(i.target), n = s.attr("for"), "LABEL" === i.target.tagName && n && n.length > 0 && (s = e("#" + n), s = s.data("select2"), s !== t && (s.focus(), i.preventDefault()))
            })
        }), k = x(Object, {bind: function (e) {
            var t = this;
            return function () {
                e.apply(t, arguments)
            }
        }, init: function (i) {
            var n, s, a = ".select2-results";
            this.opts = i = this.prepareOpts(i), this.id = i.id, i.element.data("select2") !== t && null !== i.element.data("select2") && this.destroy(), this.enabled = !0, this.container = this.createContainer(), this.containerId = "s2id_" + (i.element.attr("id") || "autogen" + S()), this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.body = c(function () {
                return i.element.closest("body")
            }), i.element.attr("class") !== t && this.container.addClass(i.element.attr("class").replace(/validate\[[\S ]+] ?/, "")), this.container.css(_(i.containerCss)), this.container.addClass(_(i.containerCssClass)), this.opts.element.data("select2", this).hide().before(this.container), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), this.dropdown.addClass(_(i.dropdownCssClass)), this.dropdown.data("select2", this), this.results = n = this.container.find(a), this.search = s = this.container.find("input.select2-input"), s.attr("tabIndex", this.opts.element.attr("tabIndex")), this.resultsPage = 0, this.context = null, this.initContainer(), this.initContainerWidth(), o(this.results), this.dropdown.delegate(a, "mousemove-filtered", this.bind(this.highlightUnderEvent)), h(80, this.results), this.dropdown.delegate(a, "scroll-debounced", this.bind(this.loadMoreIfNeeded)), e.fn.mousewheel && n.mousewheel(function (e, t, i, s) {
                var a = n.scrollTop();
                s > 0 && 0 >= a - s ? (n.scrollTop(0), u(e)) : 0 > s && n.get(0).scrollHeight - n.scrollTop() + s <= n.height() && (n.scrollTop(n.get(0).scrollHeight - n.height()), u(e))
            }), r(s), s.bind("keyup-change", this.bind(this.updateResults)), s.bind("focus", function () {
                s.addClass("select2-focused"), " " === s.val() && s.val("")
            }), s.bind("blur", function () {
                s.removeClass("select2-focused")
            }), this.dropdown.delegate(a, "mouseup", this.bind(function (t) {
                e(t.target).closest(".select2-result-selectable:not(.select2-disabled)").length > 0 ? (this.highlightUnderEvent(t), this.selectHighlighted(t)) : this.focusSearch(), u(t)
            })), this.dropdown.bind("click mouseup mousedown", function (e) {
                e.stopPropagation()
            }), e.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), (i.element.is(":disabled") || i.element.is("[readonly='readonly']")) && this.disable()
        }, destroy: function () {
            var e = this.opts.element.data("select2");
            e !== t && (e.container.remove(), e.dropdown.remove(), e.opts.element.removeData("select2").unbind(".select2").show())
        }, prepareOpts: function (i) {
            var a, r, o, l;
            if (a = i.element, "select" === a.get(0).tagName.toLowerCase() && (this.select = r = i.element), r && e.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                if (this in i)throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
            }), i = e.extend({}, {populateResults: function (n, s, a) {
                var r, o = this.opts.id, l = this;
                r = function (n, s, c) {
                    var h, u, d, p, f, g, m, v, _;
                    for (h = 0, u = n.length; u > h; h += 1)d = n[h], p = o(d) !== t, f = d.children && d.children.length > 0, g = e("<li></li>"), g.addClass("select2-results-dept-" + c), g.addClass("select2-result"), g.addClass(p ? "select2-result-selectable" : "select2-result-unselectable"), f && g.addClass("select2-result-with-children"), g.addClass(l.opts.formatResultCssClass(d)), m = e("<div></div>"), m.addClass("select2-result-label"), _ = i.formatResult(d, m, a), _ !== t && m.html(l.opts.escapeMarkup(_)), g.append(m), f && (v = e("<ul></ul>"), v.addClass("select2-result-sub"), r(d.children, v, c + 1), g.append(v)), g.data("select2-data", d), s.append(g)
                }, r(s, n, 0)
            }}, e.fn.select2.defaults, i), "function" != typeof i.id && (o = i.id, i.id = function (e) {
                return e[o]
            }), r ? (i.query = this.bind(function (i) {
                var n, s, r, o = {results: [], more: !1}, l = i.term;
                r = function (e, t) {
                    var n;
                    e.is("option") ? i.matcher(l, e.text(), e) && t.push({id: e.attr("value"), text: e.text(), element: e.get(), css: e.attr("class")}) : e.is("optgroup") && (n = {text: e.attr("label"), children: [], element: e.get(), css: e.attr("class")}, e.children().each2(function (e, t) {
                        r(t, n.children)
                    }), n.children.length > 0 && t.push(n))
                }, n = a.children(), this.getPlaceholder() !== t && n.length > 0 && (s = n[0], "" === e(s).text() && (n = n.not(s))), n.each2(function (e, t) {
                    r(t, o.results)
                }), i.callback(o)
            }), i.id = function (e) {
                return e.id
            }, i.formatResultCssClass = function (e) {
                return e.css
            }) : "query"in i || ("ajax"in i ? (l = i.element.data("ajax-url"), l && l.length > 0 && (i.ajax.url = l), i.query = f(i.ajax)) : "data"in i ? i.query = g(i.data) : "tags"in i && (i.query = m(i.tags), i.createSearchChoice = function (e) {
                return{id: e, text: e}
            }, i.initSelection = function (t, a) {
                var r = [];
                e(s(t.val(), i.separator)).each(function () {
                    var t = this, s = this, a = i.tags;
                    e.isFunction(a) && (a = a()), e(a).each(function () {
                        return n(this.id, t) ? (s = this.text, !1) : void 0
                    }), r.push({id: t, text: s})
                }), a(r)
            })), "function" != typeof i.query)throw"query function not defined for Select2 " + i.element.attr("id");
            return i
        }, monitorSource: function () {
            this.opts.element.bind("change.select2", this.bind(function () {
                this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
            }))
        }, triggerChange: function (t) {
            t = t || {}, t = e.extend({}, t, {type: "change", val: this.val()}), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(t), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
        }, enable: function () {
            this.enabled || (this.enabled = !0, this.container.removeClass("select2-container-disabled"))
        }, disable: function () {
            this.enabled && (this.close(), this.enabled = !1, this.container.addClass("select2-container-disabled"))
        }, opened: function () {
            return this.container.hasClass("select2-dropdown-open")
        }, positionDropdown: function () {
            var t, i, n, s = this.container.offset(), a = this.container.outerHeight(), r = this.container.outerWidth(), o = this.dropdown.outerHeight(), l = e(window).scrollTop() + document.documentElement.clientHeight, c = s.top + a, h = s.left, u = l >= c + o, d = s.top - o >= this.body().scrollTop(), p = this.dropdown.hasClass("select2-drop-above");
            "static" !== this.body().css("position") && (t = this.body().offset(), c -= t.top, h -= t.left), p ? (i = !0, !d && u && (i = !1)) : (i = !1, !u && d && (i = !0)), i ? (c = s.top - o, this.container.addClass("select2-drop-above"), this.dropdown.addClass("select2-drop-above")) : (this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")), n = e.extend({top: c, left: h, width: r}, _(this.opts.dropdownCss)), this.dropdown.css(n)
        }, shouldOpen: function () {
            var t;
            return this.opened() ? !1 : (t = e.Event("open"), this.opts.element.trigger(t), !t.isDefaultPrevented())
        }, clearDropdownAlignmentPreference: function () {
            this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
        }, open: function () {
            return this.shouldOpen() ? (window.setTimeout(this.bind(this.opening), 1), !0) : !1
        }, opening: function () {
            var t = this.containerId, i = this.containerSelector, n = "scroll." + t, s = "resize." + t;
            this.container.parents().each(function () {
                e(this).bind(n, function () {
                    var t = e(i);
                    0 == t.length && e(this).unbind(n), t.select2("close")
                })
            }), e(window).bind(s, function () {
                var t = e(i);
                0 == t.length && e(window).unbind(s), t.select2("close")
            }), this.clearDropdownAlignmentPreference(), " " === this.search.val() && this.search.val(""), this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.updateResults(!0), this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active"), this.ensureHighlightVisible(), this.focusSearch()
        }, close: function () {
            if (this.opened()) {
                var t = this;
                this.container.parents().each(function () {
                    e(this).unbind("scroll." + t.containerId)
                }), e(window).unbind("resize." + this.containerId), this.clearDropdownAlignmentPreference(), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), this.clearSearch(), this.opts.element.trigger(e.Event("close"))
            }
        }, clearSearch: function () {
        }, ensureHighlightVisible: function () {
            var t, i, n, s, a, r, o, l = this.results;
            if (i = this.highlight(), !(0 > i)) {
                if (0 == i)return l.scrollTop(0), void 0;
                t = l.find(".select2-result-selectable"), n = e(t[i]), s = n.offset().top + n.outerHeight(), i === t.length - 1 && (o = l.find("li.select2-more-results"), o.length > 0 && (s = o.offset().top + o.outerHeight())), a = l.offset().top + l.outerHeight(), s > a && l.scrollTop(l.scrollTop() + (s - a)), r = n.offset().top - l.offset().top, 0 > r && l.scrollTop(l.scrollTop() + r)
            }
        }, moveHighlight: function (t) {
            for (var i = this.results.find(".select2-result-selectable"), n = this.highlight(); n > -1 && n < i.length;) {
                n += t;
                var s = e(i[n]);
                if (s.hasClass("select2-result-selectable") && !s.hasClass("select2-disabled")) {
                    this.highlight(n);
                    break
                }
            }
        }, highlight: function (t) {
            var n = this.results.find(".select2-result-selectable").not(".select2-disabled");
            return 0 === arguments.length ? i(n.filter(".select2-highlighted")[0], n.get()) : (t >= n.length && (t = n.length - 1), 0 > t && (t = 0), n.removeClass("select2-highlighted"), e(n[t]).addClass("select2-highlighted"), this.ensureHighlightVisible(), void 0)
        }, countSelectableResults: function () {
            return this.results.find(".select2-result-selectable").not(".select2-disabled").length
        }, highlightUnderEvent: function (t) {
            var i = e(t.target).closest(".select2-result-selectable");
            if (i.length > 0 && !i.is(".select2-highlighted")) {
                var n = this.results.find(".select2-result-selectable");
                this.highlight(n.index(i))
            } else 0 == i.length && this.results.find(".select2-highlighted").removeClass("select2-highlighted")
        }, loadMoreIfNeeded: function () {
            var e, t = this.results, i = t.find("li.select2-more-results"), n = this.resultsPage + 1, s = this, a = this.search.val(), r = this.context;
            0 !== i.length && (e = i.offset().top - t.offset().top - t.height(), 0 >= e && (i.addClass("select2-active"), this.opts.query({term: a, page: n, context: r, matcher: this.opts.matcher, callback: this.bind(function (e) {
                s.opened() && (s.opts.populateResults.call(this, t, e.results, {term: a, page: n, context: r}), e.more === !0 ? (i.detach().appendTo(t).text(s.opts.formatLoadMore(n + 1)), window.setTimeout(function () {
                    s.loadMoreIfNeeded()
                }, 10)) : i.remove(), s.positionDropdown(), s.resultsPage = n)
            })})))
        }, tokenize: function () {
        }, updateResults: function (i) {
            function s() {
                c.scrollTop(0), l.removeClass("select2-active"), u.positionDropdown()
            }

            function a(e) {
                c.html(u.opts.escapeMarkup(e)), s()
            }

            var r, o, l = this.search, c = this.results, h = this.opts, u = this;
            if (i === !0 || this.showSearchInput !== !1 && this.opened()) {
                if (l.addClass("select2-active"), h.maximumSelectionSize >= 1 && (r = this.data(), e.isArray(r) && r.length >= h.maximumSelectionSize && v(h.formatSelectionTooBig, "formatSelectionTooBig")))return a("<li class='select2-selection-limit'>" + h.formatSelectionTooBig(h.maximumSelectionSize) + "</li>"), void 0;
                if (l.val().length < h.minimumInputLength && v(h.formatInputTooShort, "formatInputTooShort"))return a("<li class='select2-no-results'>" + h.formatInputTooShort(l.val(), h.minimumInputLength) + "</li>"), void 0;
                a("<li class='select2-searching'>" + h.formatSearching() + "</li>"), o = this.tokenize(), o != t && null != o && l.val(o), this.resultsPage = 1, h.query({term: l.val(), page: this.resultsPage, context: null, matcher: h.matcher, callback: this.bind(function (r) {
                    var o;
                    if (this.opened()) {
                        if (this.context = r.context === t ? null : r.context, this.opts.createSearchChoice && "" !== l.val() && (o = this.opts.createSearchChoice.call(null, l.val(), r.results), o !== t && null !== o && u.id(o) !== t && null !== u.id(o) && 0 === e(r.results).filter(function () {
                            return n(u.id(this), u.id(o))
                        }).length && r.results.unshift(o)), 0 === r.results.length && v(h.formatNoMatches, "formatNoMatches"))return a("<li class='select2-no-results'>" + h.formatNoMatches(l.val()) + "</li>"), void 0;
                        c.empty(), u.opts.populateResults.call(this, c, r.results, {term: l.val(), page: this.resultsPage, context: null}), r.more === !0 && v(h.formatLoadMore, "formatLoadMore") && (c.append("<li class='select2-more-results'>" + u.opts.escapeMarkup(h.formatLoadMore(this.resultsPage)) + "</li>"), window.setTimeout(function () {
                            u.loadMoreIfNeeded()
                        }, 10)), this.postprocessResults(r, i), s()
                    }
                })})
            }
        }, cancel: function () {
            this.close()
        }, blur: function () {
            this.close(), this.container.removeClass("select2-container-active"), this.dropdown.removeClass("select2-drop-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
        }, focusSearch: function () {
            this.search.show(), this.search.focus(), window.setTimeout(this.bind(function () {
                this.search.show(), this.search.focus(), this.search.val(this.search.val())
            }), 10)
        }, selectHighlighted: function () {
            var e = this.highlight(), t = this.results.find(".select2-highlighted").not(".select2-disabled"), i = t.closest(".select2-result-selectable").data("select2-data");
            i && (t.addClass("select2-disabled"), this.highlight(e), this.onSelect(i))
        }, getPlaceholder: function () {
            return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder
        }, initContainerWidth: function () {
            function i() {
                var i, n, s, a, r;
                if ("off" === this.opts.width)return null;
                if ("element" === this.opts.width)return 0 === this.opts.element.outerWidth() ? "auto" : this.opts.element.outerWidth() + "px";
                if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                    if (i = this.opts.element.attr("style"), i !== t)for (n = i.split(";"), a = 0, r = n.length; r > a; a += 1)if (s = n[a].replace(/\s/g, "").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/), null !== s && s.length >= 1)return s[1];
                    return"resolve" === this.opts.width ? (i = this.opts.element.css("width"), i.indexOf("%") > 0 ? i : 0 === this.opts.element.outerWidth() ? "auto" : this.opts.element.outerWidth() + "px") : null
                }
                return e.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
            }

            var n = i.call(this);
            null !== n && this.container.attr("style", "width: " + n)
        }}), C = x(k, {createContainer: function () {
            var t = e("<div></div>", {"class": "select2-container"}).html(["    <a href='#' onclick='return false;' class='select2-choice'>", "   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>", "   <div><b></b></div>", "</a>", "    <div class='select2-drop select2-offscreen'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
            return t
        }, opening: function () {
            this.search.show(), this.parent.opening.apply(this, arguments), this.dropdown.removeClass("select2-offscreen")
        }, close: function () {
            this.opened() && (this.parent.close.apply(this, arguments), this.dropdown.removeAttr("style").addClass("select2-offscreen").insertAfter(this.selection).show())
        }, focus: function () {
            this.close(), this.selection.focus()
        }, isFocused: function () {
            return this.selection[0] === document.activeElement
        }, cancel: function () {
            this.parent.cancel.apply(this, arguments), this.selection.focus()
        }, initContainer: function () {
            var e, t = this.container, i = this.dropdown, n = !1;
            this.selection = e = t.find(".select2-choice"), this.search.bind("keydown", this.bind(function (e) {
                if (this.enabled) {
                    if (e.which === w.PAGE_UP || e.which === w.PAGE_DOWN)return u(e), void 0;
                    if (this.opened())switch (e.which) {
                        case w.UP:
                        case w.DOWN:
                            return this.moveHighlight(e.which === w.UP ? -1 : 1), u(e), void 0;
                        case w.TAB:
                        case w.ENTER:
                            return this.selectHighlighted(), u(e), void 0;
                        case w.ESC:
                            return this.cancel(e), u(e), void 0
                    } else {
                        if (e.which === w.TAB || w.isControl(e) || w.isFunctionKey(e) || e.which === w.ESC)return;
                        if (this.opts.openOnEnter === !1 && e.which === w.ENTER)return;
                        if (this.open(), e.which === w.ENTER)return
                    }
                }
            })), this.search.bind("focus", this.bind(function () {
                this.selection.attr("tabIndex", "-1")
            })), this.search.bind("blur", this.bind(function () {
                this.opened() || this.container.removeClass("select2-container-active"), window.setTimeout(this.bind(function () {
                    this.selection.attr("tabIndex", this.opts.element.attr("tabIndex"))
                }), 10)
            })), e.bind("mousedown", this.bind(function () {
                n = !0, this.opened() ? (this.close(), this.selection.focus()) : this.enabled && this.open(), n = !1
            })), i.bind("mousedown", this.bind(function () {
                this.search.focus()
            })), e.bind("focus", this.bind(function () {
                this.container.addClass("select2-container-active"), this.search.attr("tabIndex", "-1")
            })), e.bind("blur", this.bind(function () {
                this.opened() || this.container.removeClass("select2-container-active"), window.setTimeout(this.bind(function () {
                    this.search.attr("tabIndex", this.opts.element.attr("tabIndex"))
                }), 10)
            })), e.bind("keydown", this.bind(function (e) {
                if (this.enabled) {
                    if (e.which === w.PAGE_UP || e.which === w.PAGE_DOWN)return u(e), void 0;
                    if (!(e.which === w.TAB || w.isControl(e) || w.isFunctionKey(e) || e.which === w.ESC || this.opts.openOnEnter === !1 && e.which === w.ENTER)) {
                        if (e.which == w.DELETE)return this.opts.allowClear && this.clear(), void 0;
                        if (this.open(), e.which === w.ENTER)return u(e), void 0;
                        if (e.which < 48)return u(e), void 0;
                        var t = String.fromCharCode(e.which).toLowerCase();
                        e.shiftKey && (t = t.toUpperCase()), this.search.focus(), this.search.val(t), u(e)
                    }
                }
            })), e.delegate("abbr", "mousedown", this.bind(function (e) {
                this.enabled && (this.clear(), u(e), this.close(), this.triggerChange(), this.selection.focus())
            })), this.setPlaceholder(), this.search.bind("focus", this.bind(function () {
                this.container.addClass("select2-container-active")
            }))
        }, clear: function () {
            this.opts.element.val(""), this.selection.find("span").empty(), this.selection.removeData("select2-data"), this.setPlaceholder()
        }, initSelection: function () {
            if ("" === this.opts.element.val())this.close(), this.setPlaceholder(); else {
                var e = this;
                this.opts.initSelection.call(null, this.opts.element, function (i) {
                    i !== t && null !== i && (e.updateSelection(i), e.close(), e.setPlaceholder())
                })
            }
        }, prepareOpts: function () {
            var t = this.parent.prepareOpts.apply(this, arguments);
            return"select" === t.element.get(0).tagName.toLowerCase() && (t.initSelection = function (t, i) {
                var n = t.find(":selected");
                e.isFunction(i) && i({id: n.attr("value"), text: n.text()})
            }), t
        }, setPlaceholder: function () {
            var e = this.getPlaceholder();
            if ("" === this.opts.element.val() && e !== t) {
                if (this.select && "" !== this.select.find("option:first").text())return;
                this.selection.find("span").html(this.opts.escapeMarkup(e)), this.selection.addClass("select2-default"), this.selection.find("abbr").hide()
            }
        }, postprocessResults: function (t, i) {
            var s = 0, a = this, r = !0;
            this.results.find(".select2-result-selectable").each2(function (e, t) {
                return n(a.id(t.data("select2-data")), a.opts.element.val()) ? (s = e, !1) : void 0
            }), this.highlight(s), i === !0 && (r = this.showSearchInput = b(t.results) >= this.opts.minimumResultsForSearch, this.dropdown.find(".select2-search")[r ? "removeClass" : "addClass"]("select2-search-hidden"), e(this.dropdown, this.container)[r ? "addClass" : "removeClass"]("select2-with-searchbox"))
        }, onSelect: function (e) {
            var t = this.opts.element.val();
            this.opts.element.val(this.id(e)), this.updateSelection(e), this.close(), this.selection.focus(), n(t, this.id(e)) || this.triggerChange()
        }, updateSelection: function (e) {
            var i, n = this.selection.find("span");
            this.selection.data("select2-data", e), n.empty(), i = this.opts.formatSelection(e, n), i !== t && n.append(this.opts.escapeMarkup(i)), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== t && this.selection.find("abbr").show()
        }, val: function () {
            var e, i = null, n = this;
            if (0 === arguments.length)return this.opts.element.val();
            if (e = arguments[0], this.select)this.select.val(e).find(":selected").each2(function (e, t) {
                return i = {id: t.attr("value"), text: t.text()}, !1
            }), this.updateSelection(i), this.setPlaceholder(); else {
                if (this.opts.initSelection === t)throw new Error("cannot call val() if initSelection() is not defined");
                if (!e)return this.clear(), void 0;
                this.opts.element.val(e), this.opts.initSelection(this.opts.element, function (e) {
                    n.opts.element.val(e ? n.id(e) : ""), n.updateSelection(e), n.setPlaceholder()
                })
            }
        }, clearSearch: function () {
            this.search.val("")
        }, data: function (e) {
            var i;
            return 0 === arguments.length ? (i = this.selection.data("select2-data"), i == t && (i = null), i) : (e && "" !== e ? (this.opts.element.val(e ? this.id(e) : ""), this.updateSelection(e)) : this.clear(), void 0)
        }}), j = x(k, {createContainer: function () {
            var t = e("<div></div>", {"class": "select2-container select2-container-multi"}).html(["    <ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi' style='display:none;'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
            return t
        }, prepareOpts: function () {
            var t = this.parent.prepareOpts.apply(this, arguments);
            return"select" === t.element.get(0).tagName.toLowerCase() && (t.initSelection = function (t, i) {
                var n = [];
                t.find(":selected").each2(function (e, t) {
                    n.push({id: t.attr("value"), text: t.text()})
                }), e.isFunction(i) && i(n)
            }), t
        }, initContainer: function () {
            var t, i = ".select2-choices";
            this.searchContainer = this.container.find(".select2-search-field"), this.selection = t = this.container.find(i), this.search.bind("keydown", this.bind(function (e) {
                if (this.enabled) {
                    if (e.which === w.BACKSPACE && "" === this.search.val()) {
                        this.close();
                        var i, n = t.find(".select2-search-choice-focus");
                        if (n.length > 0)return this.unselect(n.first()), this.search.width(10), u(e), void 0;
                        i = t.find(".select2-search-choice"), i.length > 0 && i.last().addClass("select2-search-choice-focus")
                    } else t.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
                    if (this.opened())switch (e.which) {
                        case w.UP:
                        case w.DOWN:
                            return this.moveHighlight(e.which === w.UP ? -1 : 1), u(e), void 0;
                        case w.ENTER:
                        case w.TAB:
                            return this.selectHighlighted(), u(e), void 0;
                        case w.ESC:
                            return this.cancel(e), u(e), void 0
                    }
                    e.which === w.TAB || w.isControl(e) || w.isFunctionKey(e) || e.which === w.BACKSPACE || e.which === w.ESC || (this.opts.openOnEnter !== !1 || e.which !== w.ENTER) && (this.open(), (e.which === w.PAGE_UP || e.which === w.PAGE_DOWN) && u(e))
                }
            })), this.search.bind("keyup", this.bind(this.resizeSearch)), this.search.bind("blur", this.bind(function (e) {
                this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.clearSearch(), e.stopImmediatePropagation()
            })), this.container.delegate(i, "mousedown", this.bind(function (t) {
                this.enabled && (e(t.target).closest(".select2-search-choice").length > 0 || (this.clearPlaceholder(), this.open(), this.focusSearch(), t.preventDefault()))
            })), this.container.delegate(i, "focus", this.bind(function () {
                this.enabled && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
            })), this.clearSearch()
        }, enable: function () {
            this.enabled || (this.parent.enable.apply(this, arguments), this.search.removeAttr("disabled"))
        }, disable: function () {
            this.enabled && (this.parent.disable.apply(this, arguments), this.search.attr("disabled", !0))
        }, initSelection: function () {
            if ("" === this.opts.element.val() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                var e = this;
                this.opts.initSelection.call(null, this.opts.element, function (i) {
                    i !== t && null !== i && (e.updateSelection(i), e.close(), e.clearSearch())
                })
            }
        }, clearSearch: function () {
            var e = this.getPlaceholder();
            e !== t && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(e).addClass("select2-default"), this.resizeSearch()) : this.search.val(" ").width(10)
        }, clearPlaceholder: function () {
            this.search.hasClass("select2-default") ? this.search.val("").removeClass("select2-default") : " " === this.search.val() && this.search.val("")
        }, opening: function () {
            this.parent.opening.apply(this, arguments), this.clearPlaceholder(), this.resizeSearch(), this.focusSearch()
        }, close: function () {
            this.opened() && this.parent.close.apply(this, arguments)
        }, focus: function () {
            this.close(), this.search.focus()
        }, isFocused: function () {
            return this.search.hasClass("select2-focused")
        }, updateSelection: function (t) {
            var n = [], s = [], a = this;
            e(t).each(function () {
                i(a.id(this), n) < 0 && (n.push(a.id(this)), s.push(this))
            }), t = s, this.selection.find(".select2-search-choice").remove(), e(t).each(function () {
                a.addSelectedChoice(this)
            }), a.postprocessResults()
        }, tokenize: function () {
            var e = this.search.val();
            e = this.opts.tokenizer(e, this.data(), this.bind(this.onSelect), this.opts), null != e && e != t && (this.search.val(e), e.length > 0 && this.open())
        }, onSelect: function (e) {
            this.addSelectedChoice(e), this.select && this.postprocessResults(), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.positionDropdown()) : this.close(), this.triggerChange({added: e}), this.focusSearch()
        }, cancel: function () {
            this.close(), this.focusSearch()
        }, addSelectedChoice: function (t) {
            var i, n = e("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"), s = this.id(t), a = this.getVal();
            i = this.opts.formatSelection(t, n), n.find("div").replaceWith("<div>" + this.opts.escapeMarkup(i) + "</div>"), n.find(".select2-search-choice-close").bind("mousedown", u).bind("click dblclick", this.bind(function (t) {
                this.enabled && (e(t.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function () {
                    this.unselect(e(t.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.close(), this.focusSearch()
                })).dequeue(), u(t))
            })).bind("focus", this.bind(function () {
                this.enabled && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
            })), n.data("select2-data", t), n.insertBefore(this.searchContainer), a.push(s), this.setVal(a)
        }, unselect: function (e) {
            var t, n, s = this.getVal();
            if (e = e.closest(".select2-search-choice"), 0 === e.length)throw"Invalid argument: " + e + ". Must be .select2-search-choice";
            t = e.data("select2-data"), n = i(this.id(t), s), n >= 0 && (s.splice(n, 1), this.setVal(s), this.select && this.postprocessResults()), e.remove(), this.triggerChange({removed: t})
        }, postprocessResults: function () {
            var e = this.getVal(), t = this.results.find(".select2-result-selectable"), n = this.results.find(".select2-result-with-children"), s = this;
            t.each2(function (t, n) {
                var a = s.id(n.data("select2-data"));
                i(a, e) >= 0 ? n.addClass("select2-disabled").removeClass("select2-result-selectable") : n.removeClass("select2-disabled").addClass("select2-result-selectable")
            }), n.each2(function (e, t) {
                0 == t.find(".select2-result-selectable").length ? t.addClass("select2-disabled") : t.removeClass("select2-disabled")
            }), t.each2(function (e, t) {
                return!t.hasClass("select2-disabled") && t.hasClass("select2-result-selectable") ? (s.highlight(0), !1) : void 0
            })
        }, resizeSearch: function () {
            var e, t, i, n, s, r = a(this.search);
            e = d(this.search) + 10, t = this.search.offset().left, i = this.selection.width(), n = this.selection.offset().left, s = i - (t - n) - r, e > s && (s = i - r), 40 > s && (s = i - r), this.search.width(s)
        }, getVal: function () {
            var e;
            return this.select ? (e = this.select.val(), null === e ? [] : e) : (e = this.opts.element.val(), s(e, this.opts.separator))
        }, setVal: function (t) {
            var n;
            this.select ? this.select.val(t) : (n = [], e(t).each(function () {
                i(this, n) < 0 && n.push(this)
            }), this.opts.element.val(0 === n.length ? "" : n.join(this.opts.separator)))
        }, val: function () {
            var i, n = [], s = this;
            if (0 === arguments.length)return this.getVal();
            if (i = arguments[0], !i)return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void 0;
            if (this.setVal(i), this.select)this.select.find(":selected").each(function () {
                n.push({id: e(this).attr("value"), text: e(this).text()})
            }), this.updateSelection(n); else {
                if (this.opts.initSelection === t)throw new Error("val() cannot be called if initSelection() is not defined");
                this.opts.initSelection(this.opts.element, function (t) {
                    var i = e(t).map(s.id);
                    s.setVal(i), s.updateSelection(t), s.clearSearch()
                })
            }
            this.clearSearch()
        }, onSortStart: function () {
            if (this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
            this.search.width(0), this.searchContainer.hide()
        }, onSortEnd: function () {
            var t = [], i = this;
            this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function () {
                t.push(i.opts.id(e(this).data("select2-data")))
            }), this.setVal(t), this.triggerChange()
        }, data: function (t) {
            var i, n = this;
            return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function () {
                return e(this).data("select2-data")
            }).get() : (t || (t = []), i = e.map(t, function (e) {
                return n.opts.id(e)
            }), this.setVal(i), this.updateSelection(t), this.clearSearch(), void 0)
        }}), e.fn.select2 = function () {
            var n, s, a, r, o = Array.prototype.slice.call(arguments, 0), l = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "onSortStart", "onSortEnd", "enable", "disable", "positionDropdown", "data"];
            return this.each(function () {
                if (0 === o.length || "object" == typeof o[0])n = 0 === o.length ? {} : e.extend({}, o[0]), n.element = e(this), "select" === n.element.get(0).tagName.toLowerCase() ? r = n.element.attr("multiple") : (r = n.multiple || !1, "tags"in n && (n.multiple = r = !0)), s = r ? new j : new C, s.init(n); else {
                    if ("string" != typeof o[0])throw"Invalid arguments to select2 plugin: " + o;
                    if (i(o[0], l) < 0)throw"Unknown method: " + o[0];
                    if (a = t, s = e(this).data("select2"), s === t)return;
                    if (a = "container" === o[0] ? s.container : s[o[0]].apply(s, o.slice(1)), a !== t)return!1
                }
            }), a === t ? this : a
        }, e.fn.select2.defaults = {width: "copy", closeOnSelect: !0, openOnEnter: !0, containerCss: {}, dropdownCss: {}, containerCssClass: "", dropdownCssClass: "", formatResult: function (e, t, i) {
            var n = [];
            return p(e.text, i.term, n), n.join("")
        }, formatSelection: function (e) {
            return e ? e.text : t
        }, formatResultCssClass: function () {
            return t
        }, formatNoMatches: function () {
            return"No matches found"
        }, formatInputTooShort: function (e, t) {
            return"Please enter " + (t - e.length) + " more characters"
        }, formatSelectionTooBig: function (e) {
            return"You can only select " + e + " item" + (1 == e ? "" : "s")
        }, formatLoadMore: function () {
            return"Loading more results..."
        }, formatSearching: function () {
            return"Searching..."
        }, minimumResultsForSearch: 0, minimumInputLength: 0, maximumSelectionSize: 0, id: function (e) {
            return e.id
        }, matcher: function (e, t) {
            return t.toUpperCase().indexOf(e.toUpperCase()) >= 0
        }, separator: ",", tokenSeparators: [], tokenizer: y, escapeMarkup: function (e) {
            return e && "string" == typeof e ? e.replace(/&/g, "&amp;") : e
        }, blurOnChange: !1}, window.Select2 = {query: {ajax: f, local: g, tags: m}, util: {debounce: l, markMatch: p}, "class": {"abstract": k, single: C, multi: j}}
    }
}(jQuery), jQuery(function (e) {
    e("select.select2").select2({allowClear: !0}), e("#product_taxon_ids").on({change: function () {
        e(".select2-search-choice .with-tip").powerTip({smartPlacement: !0, fadeInTime: 50, fadeOutTime: 50})
    }})
}), $(function () {
    var e = $("select#calc_type"), t = e.attr("value");
    $("div#calculator-settings-warning").hide(), e.change(function () {
        e.attr("value") == t ? ($("div.calculator-settings").show(), $("div#calculator-settings-warning").hide(), $(".calculator-settings").find("input,textarea").prop("disabled", !1)) : ($("div.calculator-settings").hide(), $("div#calculator-settings-warning").show(), $(".calculator-settings").find("input,textarea").prop("disabled", !0))
    })
}), $(document).ready(function () {
    $("#customer_autocomplete_template").length > 0 && (window.customerTemplate = Handlebars.compile($("#customer_autocomplete_template").text())), formatCustomerResult = function (e) {
        return customerTemplate({customer: e, bill_address: e.bill_address, ship_address: e.ship_address})
    }, $("#customer_search").length > 0 && $("#customer_search").select2({placeholder: Spree.translations.choose_a_customer, ajax: {url: Spree.routes.user_search, datatype: "json", data: function (e) {
        return{q: e}
    }, results: function (e) {
        return{results: e}
    }}, dropdownCssClass: "customer_search", formatResult: formatCustomerResult, formatSelection: function (e) {
        return _.each(["bill_address", "ship_address"], function (t) {
            var i = e[t];
            address_parts = ["firstname", "lastname", "company", "address1", "address2", "city", "zipcode", "phone"];
            var n = "#order_" + t + "_attributes_";
            void 0 != i ? (_.each(address_parts, function (e) {
                $(n + e).val(i[e])
            }), $(n + "state_id").select2("val", i.state_id), $(n + "country_id").select2("val", i.country_id)) : (_.each(address_parts, function (e) {
                $(n + e).val("")
            }), $(n + "state_id").select2("val", ""), $(n + "country_id").select2("val", ""))
        }), $("#order_email").val(e.email), $("#user_id").val(e.id), $("#guest_checkout_true").prop("checked", !1), $("#guest_checkout_false").prop("checked", !0), $("#guest_checkout_false").prop("disabled", !1), e.email
    }}), $("input#order_use_billing").click(function () {
        $(this).is(":checked") ? ($("#shipping").hide(), $("#shipping input").prop("disabled", !0), $("#shipping select").prop("disabled", !0)) : ($("#shipping").show(), $("#shipping input").prop("disabled", !1), $("#shipping select").prop("disabled", !1))
    }), $("#guest_checkout_true").change(function () {
        $("#customer_search").val(""), $("#user_id").val(""), $("#checkout_email").val("");
        var e = ["firstname", "lastname", "company", "address1", "address2", "city", "zipcode", "state_id", "country_id", "phone"];
        $.each(e, function (e, t) {
            $("#order_bill_address_attributes" + t).val(""), $("#order_ship_address_attributes" + t).val("")
        })
    })
}), $(function () {
    var e = $("#gtwy-type").attr("value");
    $("div#gateway-settings-warning").hide(), $("#gtwy-type").change(function () {
        $("#gtwy-type").attr("value") == e ? ($("div.gateway-settings").show(), $("div#gateway-settings-warning").hide()) : ($("div.gateway-settings").hide(), $("div#gateway-settings-warning").show())
    })
}), $(document).ready(function () {
    $('input#preferences_use_s3[type="checkbox"]:checked').length > 0 && $("#s3_settings, #s3_headers").show(), $('input#preferences_use_s3[type="checkbox"]').click(function () {
        $("#s3_settings, #s3_headers").toggle()
    }), $(document).on("click", ".destroy_style", function (e) {
        e.preventDefault(), $(this).parent().remove()
    }), $(document).on("click", ".destroy_new_attachment_styles", function (e) {
        e.preventDefault(), $(this).closest(".new_attachment_styles").remove()
    }), $(document).on("click", ".destroy_new_s3_headers", function (e) {
        e.preventDefault(), $(this).closest(".new_s3_headers").remove()
    });
    var e = 1;
    $(document).on("click", ".add_new_style", function (t) {
        t.preventDefault(), $("#new-styles").append(generate_html_for_hash("new_attachment_styles", e))
    });
    var t = 1;
    $(document).on("click", ".add_header", function (e) {
        e.preventDefault(), $("#headers_list").append(generate_html_for_hash("new_s3_headers", t))
    }), generate_html_for_hash = function (e, t) {
        var i = '<div class="' + e + ' row"><div class="field">';
        return i += '<div class="five columns">', i += '<label for="' + e + "_" + t + '_name">', i += Spree.translations.name + "</label>", i += '<input id="' + e + "_" + t + '_name" name="' + e + "[" + t + '][name]" type="text" class="fullwidth"><br>', i += '</div><div class="five columns">', i += '<label for="' + e + "_" + t + '_value">', i += Spree.translations.value + "</label>", i += '<input id="' + e + "_" + t + '_value" name="' + e + "[" + t + '][value]" type="text" class="fullwidth">', i += '</div><div class="two columns">', i += '<a href="#" title="' + Spree.translations.destroy + '" class="destroy_' + e + ' with-tip button" style="margin-top: 19px;"><i class="icon-trash"></i> &nbsp; ' + Spree.translations.destroy + "</a>", i += "</div></div></div>", t += 1, i
    }
}), function () {
    $(function () {
        return $("#new_image_link").click(function (e) {
            return e.preventDefault(), $(".no-objects-found").hide(), $(this).hide(), $.ajax({type: "GET", url: this.href, data: {authenticity_token: AUTH_TOKEN}, success: function (e) {
                return $("#images").html(e)
            }})
        })
    })
}.call(this), function () {
    $("#cancel_link").click(function (e) {
        return e.preventDefault(), $(".no-objects-found").show(), $("#new_image_link").show(), $("#images").html("")
    })
}.call(this), replace_ids = function (e) {
    var t = (new Date).getTime();
    return e.replace(/NEW_RECORD/g, t)
}, $(function () {
    $("a[id*=nested]").click(function () {
        var template = $(this).attr("href").replace(/.*#/, "");
        html = replace_ids(eval(template)), $("#ul-" + $(this).attr("id")).append(html), update_remove_links()
    }), update_remove_links()
});
var update_remove_links = function () {
    $(".remove").click(function () {
        return $(this).prevAll(":first").val(1), $(this).parent().hide(), !1
    })
};
$(document).ready(function () {
    $("#add_line_item_to_order").on("click", function () {
        return"" == $("#add_variant_id").val() ? !1 : (update_target = $(this).attr("data-update"), $.ajax({dataType: "script", url: this.href, type: "POST", data: {"line_item[variant_id]": $("#add_variant_id").val(), "line_item[quantity]": $("#add_quantity").val()}}), !1)
    }), $('[data-hook="add_product_name"]').find(".variant_autocomplete").variantAutocomplete()
}), $(document).ready(function () {
    $.each($("td.qty input"), function (e, t) {
        $(t).on("change", function () {
            var e = "#" + $(this).attr("id").replace("_quantity", "_id");
            jQuery.post("/admin/orders/" + $("input#order_number").val() + "/line_items/" + $(e).val(), {_method: "put", "line_item[quantity]": $(this).val()}, function (e) {
                $("#order-form-wrapper").html(e.responseText)
            })
        })
    })
}), $(document).ready(function () {
    $("#card_new").radioControlsVisibilityOfElement("#card_form"), $("select.jump_menu").change(function () {
        window.location = this.options[this.selectedIndex].value
    }), $("#cvv_link").click(function (e) {
        window_name = "cvv_info", window_options = "left=20,top=20,width=500,height=500,toolbar=0,resizable=0,scrollbars=1", window.open($(this).attr("href"), window_name, window_options), e.preventDefault()
    })
}), function () {
    $(document).ready(function () {
        var e, t;
        return e = {lines: 11, length: 2, width: 3, radius: 9, corners: 1, rotate: 0, color: "#fff", speed: .8, trail: 48, shadow: !1, hwaccel: !0, className: "spinner", zIndex: 2e9, top: "auto", left: "auto"}, t = document.getElementById("spinner"), $(document).ajaxStart(function () {
            var i;
            return $("#progress").fadeIn(), i = new Spinner(e).spin(t)
        }), $(document).ajaxStop(function () {
            return $("#progress").fadeOut()
        })
    })
}.call(this), function () {
    $(function () {
        var e;
        return $(".categories input:checked").length > 0 && $("fieldset.categories input[type=checkbox]:not(:checked)").attr("disabled", !0), e = ".categories input[type=checkbox]", $(e).change(function () {
            return $(this).is(":checked") ? ($(e + ":not(:checked)").attr("disabled", !0), $(this).removeAttr("disabled")) : $("input[type=checkbox]").removeAttr("disabled")
        })
    })
}.call(this), $(document).ready(function () {
    $("#country").change(function () {
        var e = $("#new_state_link a").attr("href"), t = $("#country option:selected").attr("value"), i = e.replace(/countries\/(\d+)/, "countries/" + t);
        $("#new_state_link a").attr("href", i)
    })
});
var handle_ajax_error = function () {
    $.jstree.rollback(last_rollback), $("#ajax_error").show().html("<strong>" + server_error + "</strong><br />" + taxonomy_tree_error)
}, handle_move = function (e, t) {
    last_rollback = t.rlbk;
    var i = t.rslt.cp, n = t.rslt.o, s = t.rslt.np;
    return $.ajax({type: "POST", dataType: "json", url: base_url + n.attr("id"), data: {_method: "put", "taxon[parent_id]": s.attr("id"), "taxon[position]": i, authenticity_token: AUTH_TOKEN}, error: handle_ajax_error}), !0
}, handle_create = function (e, t) {
    last_rollback = t.rlbk;
    var i = t.rslt.obj, n = t.rslt.name, s = t.rslt.position, a = t.rslt.parent;
    $.ajax({type: "POST", dataType: "json", url: base_url, data: {"taxon[name]": n, "taxon[parent_id]": a.attr("id"), "taxon[position]": s, authenticity_token: AUTH_TOKEN}, error: handle_ajax_error, success: function (e) {
        i.attr("id", e.taxon.id)
    }})
}, handle_rename = function (e, t) {
    last_rollback = t.rlbk;
    var i = t.rslt.obj, n = t.rslt.new_name;
    $.ajax({type: "POST", dataType: "json", url: base_url + i.attr("id"), data: {_method: "put", "taxon[name]": n, authenticity_token: AUTH_TOKEN}, error: handle_ajax_error})
}, handle_delete = function (e, t) {
    last_rollback = t.rlbk;
    var i = t.rslt.obj;
    jConfirm(Spree.translations.are_you_sure_delete, Spree.translations.confirm_delete, function (e) {
        e ? $.ajax({type: "POST", dataType: "json", url: base_url + i.attr("id"), data: {_method: "delete", authenticity_token: AUTH_TOKEN}, error: handle_ajax_error}) : ($.jstree.rollback(last_rollback), last_rollback = null)
    })
}, taxonomy_id;
$(document).ready(function () {
    if (void 0 != taxonomy_id) {
        base_url = $("#taxonomy_tree").data("url").split("?")[0] + "/", child_url = base_url.replace("/taxons", "/get_children.json"), is_cut = !1, last_rollback = null;
        var e = {json_data: {data: initial, ajax: {url: child_url, data: function (e) {
            return{parent_id: e.attr ? e.attr("id") : 0}
        }}}, themes: {theme: "apple", url: "/assets/jquery.jstree/themes/apple/style.css"}, strings: {new_node: new_taxon, loading: Spree.translations.loading + "..."}, crrm: {move: {check_move: function (e) {
            var t = e.cp, i = e.o, n = e.np;
            return n ? "root" == i.attr("rel") ? !1 : "taxonomy_tree" == n.attr("id") && 0 == t ? !1 : !0 : !1
        }}}, contextmenu: {items: function (e) {
            e.attr("id");
            var t = e.attr("rel"), i = {};
            return i = "root" == t ? {create: {label: "<i class='icon-plus'></i> " + Spree.translations.add, action: function (e) {
                this.create(e)
            }}, paste: {separator_before: !0, label: "<i class='icon-paste'></i> " + Spree.translations.paste, action: function (e) {
                is_cut = !1, this.paste(e)
            }, _disabled: 0 == is_cut}, edit: {separator_before: !0, label: "<i class='icon-edit'></i> " + Spree.translations.edit, action: function (e) {
                window.location = base_url + e.attr("id") + "/edit/"
            }}} : {create: {label: "<i class='icon-plus'></i> " + Spree.translations.add, action: function (e) {
                this.create(e)
            }}, rename: {label: "<i class='icon-pencil'></i> " + Spree.translations.rename, action: function (e) {
                this.rename(e)
            }}, remove: {label: "<i class='icon-trash'></i> " + Spree.translations.remove, action: function (e) {
                this.remove(e)
            }}, cut: {separator_before: !0, label: "<i class='icon-cut'></i> " + Spree.translations.cut, action: function (e) {
                is_cut = !0, this.cut(e)
            }}, paste: {label: "<i class='icon-paste'></i> " + Spree.translations.paste, action: function (e) {
                is_cut = !1, this.paste(e)
            }, _disabled: 0 == is_cut}, edit: {separator_before: !0, label: "<i class='icon-edit'></i> " + Spree.translations.edit, action: function (e) {
                window.location = base_url + e.attr("id") + "/edit/"
            }}}
        }}, plugins: ["themes", "json_data", "dnd", "crrm", "contextmenu"]};
        $("#taxonomy_tree").jstree(e).bind("move_node.jstree", handle_move).bind("remove.jstree", handle_delete).bind("create.jstree", handle_create).bind("rename.jstree", handle_rename), $("#taxonomy_tree a").on("dblclick", function () {
            $("#taxonomy_tree").jstree("rename", this)
        }), $(document).keypress(function (e) {
            13 == e.keyCode && e.preventDefault()
        })
    }
}), function () {
    var e = this, t = e._, i = {}, n = Array.prototype, s = Object.prototype, a = n.slice, r = n.unshift, o = s.toString, l = s.hasOwnProperty, c = n.forEach, h = n.map, u = n.reduce, d = n.reduceRight, p = n.filter, f = n.every, g = n.some, m = n.indexOf, v = n.lastIndexOf;
    s = Array.isArray;
    var _ = Object.keys, b = Function.prototype.bind, y = function (e) {
        return new j(e)
    };
    "undefined" != typeof module && module.exports ? (module.exports = y, y._ = y) : e._ = y, y.VERSION = "1.1.6";
    var x = y.each = y.forEach = function (e, t, n) {
        if (null != e)if (c && e.forEach === c)e.forEach(t, n); else if (y.isNumber(e.length))for (var s = 0, a = e.length; a > s && t.call(n, e[s], s, e) !== i; s++); else for (s in e)if (l.call(e, s) && t.call(n, e[s], s, e) === i)break
    };
    y.map = function (e, t, i) {
        var n = [];
        return null == e ? n : h && e.map === h ? e.map(t, i) : (x(e, function (e, s, a) {
            n[n.length] = t.call(i, e, s, a)
        }), n)
    }, y.reduce = y.foldl = y.inject = function (e, t, i, n) {
        var s = void 0 !== i;
        if (null == e && (e = []), u && e.reduce === u)return n && (t = y.bind(t, n)), s ? e.reduce(t, i) : e.reduce(t);
        if (x(e, function (e, a, r) {
            s || 0 !== a ? i = t.call(n, i, e, a, r) : (i = e, s = !0)
        }), !s)throw new TypeError("Reduce of empty array with no initial value");
        return i
    }, y.reduceRight = y.foldr = function (e, t, i, n) {
        return null == e && (e = []), d && e.reduceRight === d ? (n && (t = y.bind(t, n)), void 0 !== i ? e.reduceRight(t, i) : e.reduceRight(t)) : (e = (y.isArray(e) ? e.slice() : y.toArray(e)).reverse(), y.reduce(e, t, i, n))
    }, y.find = y.detect = function (e, t, i) {
        var n;
        return w(e, function (e, s, a) {
            return t.call(i, e, s, a) ? (n = e, !0) : void 0
        }), n
    }, y.filter = y.select = function (e, t, i) {
        var n = [];
        return null == e ? n : p && e.filter === p ? e.filter(t, i) : (x(e, function (e, s, a) {
            t.call(i, e, s, a) && (n[n.length] = e)
        }), n)
    }, y.reject = function (e, t, i) {
        var n = [];
        return null == e ? n : (x(e, function (e, s, a) {
            t.call(i, e, s, a) || (n[n.length] = e)
        }), n)
    }, y.every = y.all = function (e, t, n) {
        var s = !0;
        return null == e ? s : f && e.every === f ? e.every(t, n) : (x(e, function (e, a, r) {
            return(s = s && t.call(n, e, a, r)) ? void 0 : i
        }), s)
    };
    var w = y.some = y.any = function (e, t, n) {
        t || (t = y.identity);
        var s = !1;
        return null == e ? s : g && e.some === g ? e.some(t, n) : (x(e, function (e, a, r) {
            return(s = t.call(n, e, a, r)) ? i : void 0
        }), s)
    };
    y.include = y.contains = function (e, t) {
        var i = !1;
        return null == e ? i : m && e.indexOf === m ? -1 != e.indexOf(t) : (w(e, function (e) {
            return(i = e === t) ? !0 : void 0
        }), i)
    }, y.invoke = function (e, t) {
        var i = a.call(arguments, 2);
        return y.map(e, function (e) {
            return(t.call ? t || e : e[t]).apply(e, i)
        })
    }, y.pluck = function (e, t) {
        return y.map(e, function (e) {
            return e[t]
        })
    }, y.max = function (e, t, i) {
        if (!t && y.isArray(e))return Math.max.apply(Math, e);
        var n = {computed: -1 / 0};
        return x(e, function (e, s, a) {
            s = t ? t.call(i, e, s, a) : e, s >= n.computed && (n = {value: e, computed: s})
        }), n.value
    }, y.min = function (e, t, i) {
        if (!t && y.isArray(e))return Math.min.apply(Math, e);
        var n = {computed: 1 / 0};
        return x(e, function (e, s, a) {
            s = t ? t.call(i, e, s, a) : e, s < n.computed && (n = {value: e, computed: s})
        }), n.value
    }, y.sortBy = function (e, t, i) {
        return y.pluck(y.map(e,function (e, n, s) {
            return{value: e, criteria: t.call(i, e, n, s)}
        }).sort(function (e, t) {
            var i = e.criteria, n = t.criteria;
            return n > i ? -1 : i > n ? 1 : 0
        }), "value")
    }, y.sortedIndex = function (e, t, i) {
        i || (i = y.identity);
        for (var n = 0, s = e.length; s > n;) {
            var a = n + s >> 1;
            i(e[a]) < i(t) ? n = a + 1 : s = a
        }
        return n
    }, y.toArray = function (e) {
        return e ? e.toArray ? e.toArray() : y.isArray(e) ? e : y.isArguments(e) ? a.call(e) : y.values(e) : []
    }, y.size = function (e) {
        return y.toArray(e).length
    }, y.first = y.head = function (e, t, i) {
        return null == t || i ? e[0] : a.call(e, 0, t)
    }, y.rest = y.tail = function (e, t, i) {
        return a.call(e, null == t || i ? 1 : t)
    }, y.last = function (e) {
        return e[e.length - 1]
    }, y.compact = function (e) {
        return y.filter(e, function (e) {
            return!!e
        })
    }, y.flatten = function (e) {
        return y.reduce(e, function (e, t) {
            return y.isArray(t) ? e.concat(y.flatten(t)) : (e[e.length] = t, e)
        }, [])
    }, y.without = function (e) {
        var t = a.call(arguments, 1);
        return y.filter(e, function (e) {
            return!y.include(t, e)
        })
    }, y.uniq = y.unique = function (e, t) {
        return y.reduce(e, function (e, i, n) {
            return 0 != n && (t === !0 ? y.last(e) == i : y.include(e, i)) || (e[e.length] = i), e
        }, [])
    }, y.intersect = function (e) {
        var t = a.call(arguments, 1);
        return y.filter(y.uniq(e), function (e) {
            return y.every(t, function (t) {
                return y.indexOf(t, e) >= 0
            })
        })
    }, y.zip = function () {
        for (var e = a.call(arguments), t = y.max(y.pluck(e, "length")), i = Array(t), n = 0; t > n; n++)i[n] = y.pluck(e, "" + n);
        return i
    }, y.indexOf = function (e, t, i) {
        if (null == e)return-1;
        var n;
        if (i)return i = y.sortedIndex(e, t), e[i] === t ? i : -1;
        if (m && e.indexOf === m)return e.indexOf(t);
        for (i = 0, n = e.length; n > i; i++)if (e[i] === t)return i;
        return-1
    }, y.lastIndexOf = function (e, t) {
        if (null == e)return-1;
        if (v && e.lastIndexOf === v)return e.lastIndexOf(t);
        for (var i = e.length; i--;)if (e[i] === t)return i;
        return-1
    }, y.range = function (e, t, i) {
        arguments.length <= 1 && (t = e || 0, e = 0), i = arguments[2] || 1;
        for (var n = Math.max(Math.ceil((t - e) / i), 0), s = 0, a = Array(n); n > s;)a[s++] = e, e += i;
        return a
    }, y.bind = function (e, t) {
        if (e.bind === b && b)return b.apply(e, a.call(arguments, 1));
        var i = a.call(arguments, 2);
        return function () {
            return e.apply(t, i.concat(a.call(arguments)))
        }
    }, y.bindAll = function (e) {
        var t = a.call(arguments, 1);
        return 0 == t.length && (t = y.functions(e)), x(t, function (t) {
            e[t] = y.bind(e[t], e)
        }), e
    }, y.memoize = function (e, t) {
        var i = {};
        return t || (t = y.identity), function () {
            var n = t.apply(this, arguments);
            return l.call(i, n) ? i[n] : i[n] = e.apply(this, arguments)
        }
    }, y.delay = function (e, t) {
        var i = a.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(e, i)
        }, t)
    }, y.defer = function (e) {
        return y.delay.apply(y, [e, 1].concat(a.call(arguments, 1)))
    };
    var k = function (e, t, i) {
        var n;
        return function () {
            var s = this, a = arguments, r = function () {
                n = null, e.apply(s, a)
            };
            i && clearTimeout(n), (i || !n) && (n = setTimeout(r, t))
        }
    };
    y.throttle = function (e, t) {
        return k(e, t, !1)
    }, y.debounce = function (e, t) {
        return k(e, t, !0)
    }, y.once = function (e) {
        var t, i = !1;
        return function () {
            return i ? t : (i = !0, t = e.apply(this, arguments))
        }
    }, y.wrap = function (e, t) {
        return function () {
            var i = [e].concat(a.call(arguments));
            return t.apply(this, i)
        }
    }, y.compose = function () {
        var e = a.call(arguments);
        return function () {
            for (var t = a.call(arguments), i = e.length - 1; i >= 0; i--)t = [e[i].apply(this, t)];
            return t[0]
        }
    }, y.after = function (e, t) {
        return function () {
            return--e < 1 ? t.apply(this, arguments) : void 0
        }
    }, y.keys = _ || function (e) {
        if (e !== Object(e))throw new TypeError("Invalid object");
        var t, i = [];
        for (t in e)l.call(e, t) && (i[i.length] = t);
        return i
    }, y.values = function (e) {
        return y.map(e, y.identity)
    }, y.functions = y.methods = function (e) {
        return y.filter(y.keys(e),function (t) {
            return y.isFunction(e[t])
        }).sort()
    }, y.extend = function (e) {
        return x(a.call(arguments, 1), function (t) {
            for (var i in t)void 0 !== t[i] && (e[i] = t[i])
        }), e
    }, y.defaults = function (e) {
        return x(a.call(arguments, 1), function (t) {
            for (var i in t)null == e[i] && (e[i] = t[i])
        }), e
    }, y.clone = function (e) {
        return y.isArray(e) ? e.slice() : y.extend({}, e)
    }, y.tap = function (e, t) {
        return t(e), e
    }, y.isEqual = function (e, t) {
        if (e === t)return!0;
        var i = typeof e;
        if (i != typeof t)return!1;
        if (e == t)return!0;
        if (!e && t || e && !t)return!1;
        if (e._chain && (e = e._wrapped), t._chain && (t = t._wrapped), e.isEqual)return e.isEqual(t);
        if (y.isDate(e) && y.isDate(t))return e.getTime() === t.getTime();
        if (y.isNaN(e) && y.isNaN(t))return!1;
        if (y.isRegExp(e) && y.isRegExp(t))return e.source === t.source && e.global === t.global && e.ignoreCase === t.ignoreCase && e.multiline === t.multiline;
        if ("object" !== i)return!1;
        if (e.length && e.length !== t.length)return!1;
        i = y.keys(e);
        var n = y.keys(t);
        if (i.length != n.length)return!1;
        for (var s in e)if (!(s in t && y.isEqual(e[s], t[s])))return!1;
        return!0
    }, y.isEmpty = function (e) {
        if (y.isArray(e) || y.isString(e))return 0 === e.length;
        for (var t in e)if (l.call(e, t))return!1;
        return!0
    }, y.isElement = function (e) {
        return!(!e || 1 != e.nodeType)
    }, y.isArray = s || function (e) {
        return"[object Array]" === o.call(e)
    }, y.isArguments = function (e) {
        return!(!e || !l.call(e, "callee"))
    }, y.isFunction = function (e) {
        return!!(e && e.constructor && e.call && e.apply)
    }, y.isString = function (e) {
        return!!("" === e || e && e.charCodeAt && e.substr)
    }, y.isNumber = function (e) {
        return!!(0 === e || e && e.toExponential && e.toFixed)
    }, y.isNaN = function (e) {
        return e !== e
    }, y.isBoolean = function (e) {
        return e === !0 || e === !1
    }, y.isDate = function (e) {
        return!(!e || !e.getTimezoneOffset || !e.setUTCFullYear)
    }, y.isRegExp = function (e) {
        return!(!e || !e.test || !e.exec || !e.ignoreCase && e.ignoreCase !== !1)
    }, y.isNull = function (e) {
        return null === e
    }, y.isUndefined = function (e) {
        return void 0 === e
    }, y.noConflict = function () {
        return e._ = t, this
    }, y.identity = function (e) {
        return e
    }, y.times = function (e, t, i) {
        for (var n = 0; e > n; n++)t.call(i, n)
    }, y.mixin = function (e) {
        x(y.functions(e), function (t) {
            T(t, y[t] = e[t])
        })
    };
    var C = 0;
    y.uniqueId = function (e) {
        var t = C++;
        return e ? e + t : t
    }, y.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g}, y.template = function (e, t) {
        var i = y.templateSettings;
        return i = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(i.interpolate,function (e, t) {
            return"'," + t.replace(/\\'/g, "'") + ",'"
        }).replace(i.evaluate || null,function (e, t) {
            return"');" + t.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "__p.push('"
        }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');", i = new Function("obj", i), t ? i(t) : i
    };
    var j = function (e) {
        this._wrapped = e
    };
    y.prototype = j.prototype;
    var S = function (e, t) {
        return t ? y(e).chain() : e
    }, T = function (e, t) {
        j.prototype[e] = function () {
            var e = a.call(arguments);
            return r.call(e, this._wrapped), S(t.apply(y, e), this._chain)
        }
    };
    y.mixin(y), x(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = n[e];
        j.prototype[e] = function () {
            return t.apply(this._wrapped, arguments), S(this._wrapped, this._chain)
        }
    }), x(["concat", "join", "slice"], function (e) {
        var t = n[e];
        j.prototype[e] = function () {
            return S(t.apply(this._wrapped, arguments), this._chain)
        }
    }), j.prototype.chain = function () {
        return this._chain = !0, this
    }, j.prototype.value = function () {
        return this._wrapped
    }
}(), function () {
    var e, t;
    $(function () {
        return $("#country_based").is(":checked") ? e() : t(), $("#country_based").click(function () {
            return e()
        }), $("#state_based").click(function () {
            return t()
        })
    }), e = function () {
        return $("#state_members :input").each(function () {
            return $(this).prop("disabled", !0)
        }), $("#state_members").hide(), $("#zone_members :input").each(function () {
            return $(this).prop("disabled", !0)
        }), $("#zone_members").hide(), $("#country_members :input").each(function () {
            return $(this).prop("disabled", !1)
        }), $("#country_members").show()
    }, t = function () {
        return $("#country_members :input").each(function () {
            return $(this).prop("disabled", !0)
        }), $("#country_members").hide(), $("#zone_members :input").each(function () {
            return $(this).prop("disabled", !0)
        }), $("#zone_members").hide(), $("#state_members :input").each(function () {
            return $(this).prop("disabled", !1)
        }), $("#state_members").show()
    }
}.call(this);
var Spree = {url: function (e, t) {
    var e = new Uri(e);
    return $.each(t, function (t, i) {
        e.addQueryParam(t, i)
    }), e
}};
$.fn.userAutocomplete = function () {
    Spree.routes && this.select2({minimumInputLength: 1, multiple: !0, initSelection: function (e, t) {
        $.get(Spree.routes.user_search, {ids: e.val()}, function (e) {
            t(e)
        })
    }, ajax: {url: Spree.routes.user_search, datatype: "json", data: function (e) {
        return{q: e}
    }, results: function (e) {
        return{results: e}
    }}, formatResult: function (e) {
        return e.email
    }, formatSelection: function (e) {
        return e.email
    }})
}, $(document).ready(function () {
    $(".user_picker").userAutocomplete()
}), $.fn.productAutocomplete = function () {
    Spree.routes && this.select2({minimumInputLength: 1, multiple: !0, initSelection: function (e, t) {
        $.get(Spree.routes.product_search, {ids: e.val()}, function (e) {
            t(e)
        })
    }, ajax: {url: Spree.routes.product_search, datatype: "json", data: function (e) {
        return{q: e}
    }, results: function (e) {
        return{results: e}
    }}, formatResult: function (e) {
        return e.name
    }, formatSelection: function (e) {
        return e.name
    }})
}, $(document).ready(function () {
    $(".product_picker").productAutocomplete()
});
var initProductActions = function () {
    $(document).on("mouseover mouseout", "a.delete", function (e) {
        "mouseover" == e.type ? $(this).parent().addClass("action-remove") : $(this).parent().removeClass("action-remove")
    }), $("#promotion-filters").find(".variant_autocomplete").variantAutocomplete(), $(".calculator-fields").each(function () {
        var e = $(this), t = e.find(".type-select"), i = e.find(".settings"), n = e.find(".warning"), s = t.val();
        n.hide(), t.change(function () {
            $(this).val() == s ? (n.hide(), i.show(), i.find("input").removeAttr("disabled")) : (n.show(), i.hide(), i.find("input").attr("disabled", "disabled"))
        })
    }), function () {
        var e = function () {
            $(".promotion_action table").each(function () {
                0 == $(this).find("td").length ? $(this).hide() : $(this).show()
            })
        };
        e();
        var t = function () {
            $(".remove_promotion_line_item").click(function () {
                line_items_el = $($(".line_items_string")[0]), finder = RegExp($(this).data("variant-id") + "x\\d+"), line_items_el.val(line_items_el.val().replace(finder, "")), $(this).parents("tr").remove(), e()
            })
        };
        t(), $(".promotion_action.create_line_items button.add").unbind("click").click(function () {
            var i = $(this).parents(".promotion_action"), n = i.find("input[name='add_product_name']").val(), s = i.find("input[name='add_variant_id']").val(), a = i.find("input[name='add_quantity']").val();
            if (s) {
                var r = "<tr><td>" + n + "</td><td>" + a + "</td><td><img src='/assets/admin/icons/cross.png' /></td></tr>";
                i.find("table").append(r);
                var o = i.find(".line_items_string");
                o.val(o.val() + "," + s + "x" + a), t(), e()
            }
            return!1
        })
    }()
};
$(document).ready(function () {
    initProductActions(), $("#promotion_event_name").change(function () {
        $("#promotion_code_field").toggle("spree.checkout.coupon_code_added" == $("#promotion_event_name").val()), $("#promotion_path_field").toggle("spree.content.visited" == $("#promotion_event_name").val())
    }), $("#promotion_event_name").change()
}), /*!
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
            var i = e.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new e.validator(t, this[0]), e.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
                i.settings.submitHandler && (i.submitButton = t.target), e(t.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function (t) {
                function n() {
                    var n;
                    return i.settings.submitHandler ? (i.submitButton && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && n.remove(), !1) : !0
                }

                return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
            })), i)
        }, valid: function () {
            if (e(this[0]).is("form"))return this.validate().form();
            var t = !0, i = e(this[0].form).validate();
            return this.each(function () {
                t = t && i.element(this)
            }), t
        }, removeAttrs: function (t) {
            var i = {}, n = this;
            return e.each(t.split(/\s/), function (e, t) {
                i[t] = n.attr(t), n.removeAttr(t)
            }), i
        }, rules: function (t, i) {
            var n = this[0];
            if (t) {
                var s = e.data(n.form, "validator").settings, a = s.rules, r = e.validator.staticRules(n);
                switch (t) {
                    case"add":
                        e.extend(r, e.validator.normalizeRule(i)), delete r.messages, a[n.name] = r, i.messages && (s.messages[n.name] = e.extend(s.messages[n.name], i.messages));
                        break;
                    case"remove":
                        if (!i)return delete a[n.name], r;
                        var o = {};
                        return e.each(i.split(/\s/), function (e, t) {
                            o[t] = r[t], delete r[t]
                        }), o
                }
            }
            var l = e.validator.normalizeRules(e.extend({}, e.validator.classRules(n), e.validator.attributeRules(n), e.validator.dataRules(n), e.validator.staticRules(n)), n);
            if (l.required) {
                var c = l.required;
                delete l.required, l = e.extend({required: c}, l)
            }
            return l
        }}), e.extend(e.expr[":"], {blank: function (t) {
            return!e.trim("" + e(t).val())
        }, filled: function (t) {
            return!!e.trim("" + e(t).val())
        }, unchecked: function (t) {
            return!e(t).prop("checked")
        }}), e.validator = function (t, i) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = i, this.init()
        }, e.validator.format = function (t, i) {
            return 1 === arguments.length ? function () {
                var i = e.makeArray(arguments);
                return i.unshift(t), e.validator.format.apply(this, i)
            } : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), e.each(i, function (e, i) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                    return i
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
        }, highlight: function (t, i, n) {
            "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
        }, unhighlight: function (t, i, n) {
            "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
        }}, setDefaults: function (t) {
            e.extend(e.validator.defaults, t)
        }, messages: {required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges: !1, prototype: {init: function () {
            function t(t) {
                var i = e.data(this[0].form, "validator"), n = "on" + t.type.replace(/^validate/, "");
                i.settings[n] && i.settings[n].call(i, this[0], t)
            }

            this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
            var i = this.groups = {};
            e.each(this.settings.groups, function (t, n) {
                "string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
                    i[n] = t
                })
            });
            var n = this.settings.rules;
            e.each(n, function (t, i) {
                n[t] = e.validator.normalizeRule(i)
            }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
        }, form: function () {
            return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        }, checkForm: function () {
            this.prepareForm();
            for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)this.check(t[e]);
            return this.valid()
        }, element: function (t) {
            t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
            var i = this.check(t) !== !1;
            return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
        }, showErrors: function (t) {
            if (t) {
                e.extend(this.errorMap, t), this.errorList = [];
                for (var i in t)this.errorList.push({message: t[i], element: this.findByName(i)[0]});
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
            for (var i in e)t++;
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
            var t = this, i = {};
            return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                return!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(e(this).rules()) ? !1 : (i[this.name] = !0, !0)
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
            var i = e(t).attr("type"), n = e(t).val();
            return"radio" === i || "checkbox" === i ? e("input[name='" + e(t).attr("name") + "']:checked").val() : "string" == typeof n ? n.replace(/\r/g, "") : n
        }, check: function (t) {
            t = this.validationTargetFor(this.clean(t));
            var i, n = e(t).rules(), s = !1, a = this.elementValue(t);
            for (var r in n) {
                var o = {method: r, parameters: n[r]};
                try {
                    if (i = e.validator.methods[r].call(this, a, t, o.parameters), "dependency-mismatch" === i) {
                        s = !0;
                        continue
                    }
                    if (s = !1, "pending" === i)return this.toHide = this.toHide.not(this.errorsFor(t)), void 0;
                    if (!i)return this.formatAndAdd(t, o), !1
                } catch (l) {
                    throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method.", l), l
                }
            }
            return s ? void 0 : (this.objectLength(n) && this.successList.push(t), !0)
        }, customDataMessage: function (t, i) {
            return e(t).data("msg-" + i.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + i.toLowerCase())
        }, customMessage: function (e, t) {
            var i = this.settings.messages[e];
            return i && (i.constructor === String ? i : i[t])
        }, findDefined: function () {
            for (var e = 0; e < arguments.length; e++)if (void 0 !== arguments[e])return arguments[e];
            return void 0
        }, defaultMessage: function (t, i) {
            return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "</strong>")
        }, formatAndAdd: function (t, i) {
            var n = this.defaultMessage(t, i.method), s = /\$?\{(\d+)\}/g;
            "function" == typeof n ? n = n.call(this, i.parameters, t) : s.test(n) && (n = e.validator.format(n.replace(s, "{$1}"), i.parameters)), this.errorList.push({message: n, element: t}), this.errorMap[t.name] = n, this.submitted[t.name] = n
        }, addWrapper: function (e) {
            return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
        }, defaultShowErrors: function () {
            var e, t;
            for (e = 0; this.errorList[e]; e++) {
                var i = this.errorList[e];
                this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
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
        }, showLabel: function (t, i) {
            var n = this.errorsFor(t);
            n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(i)) : (n = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, e(t)) : n.insertAfter(t))), !i && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, t)), this.toShow = this.toShow.add(n)
        }, errorsFor: function (t) {
            var i = this.idOrName(t);
            return this.errors().filter(function () {
                return e(this).attr("for") === i
            })
        }, idOrName: function (e) {
            return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
        }, validationTargetFor: function (e) {
            return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
        }, checkable: function (e) {
            return/radio|checkbox/i.test(e.type)
        }, findByName: function (t) {
            return e(this.currentForm).find("[name='" + t + "']")
        }, getLength: function (t, i) {
            switch (i.nodeName.toLowerCase()) {
                case"select":
                    return e("option:selected", i).length;
                case"input":
                    if (this.checkable(i))return this.findByName(i.name).filter(":checked").length
            }
            return t.length
        }, depend: function (e, t) {
            return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
        }, dependTypes: {"boolean": function (e) {
            return e
        }, string: function (t, i) {
            return!!e(t, i.form).length
        }, "function": function (e, t) {
            return e(t)
        }}, optional: function (t) {
            var i = this.elementValue(t);
            return!e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
        }, startRequest: function (e) {
            this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
        }, stopRequest: function (t, i) {
            this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        }, previousValue: function (t) {
            return e.data(t, "previousValue") || e.data(t, "previousValue", {old: null, valid: !0, message: this.defaultMessage(t, "remote")})
        }}, classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}}, addClassRules: function (t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
        }, classRules: function (t) {
            var i = {}, n = e(t).attr("class");
            return n && e.each(n.split(" "), function () {
                this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
            }), i
        }, attributeRules: function (t) {
            var i = {}, n = e(t), s = n[0].getAttribute("type");
            for (var a in e.validator.methods) {
                var r;
                "required" === a ? (r = n.get(0).getAttribute(a), "" === r && (r = !0), r = !!r) : r = n.attr(a), /min|max/.test(a) && (null === s || /number|range|text/.test(s)) && (r = Number(r)), r ? i[a] = r : s === a && "range" !== s && (i[a] = !0)
            }
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        }, dataRules: function (t) {
            var i, n, s = {}, a = e(t);
            for (i in e.validator.methods)n = a.data("rule-" + i.toLowerCase()), void 0 !== n && (s[i] = n);
            return s
        }, staticRules: function (t) {
            var i = {}, n = e.data(t.form, "validator");
            return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}), i
        }, normalizeRules: function (t, i) {
            return e.each(t, function (n, s) {
                if (s === !1)return delete t[n], void 0;
                if (s.param || s.depends) {
                    var a = !0;
                    switch (typeof s.depends) {
                        case"string":
                            a = !!e(s.depends, i.form).length;
                            break;
                        case"function":
                            a = s.depends.call(i, i)
                    }
                    a ? t[n] = void 0 !== s.param ? s.param : !0 : delete t[n]
                }
            }), e.each(t, function (n, s) {
                t[n] = e.isFunction(s) ? s(i) : s
            }), e.each(["minlength", "maxlength"], function () {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function () {
                var i;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        }, normalizeRule: function (t) {
            if ("string" == typeof t) {
                var i = {};
                e.each(t.split(/\s/), function () {
                    i[this] = !0
                }), t = i
            }
            return t
        }, addMethod: function (t, i, n) {
            e.validator.methods[t] = i, e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t], i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        }, methods: {required: function (t, i, n) {
            if (!this.depend(n, i))return"dependency-mismatch";
            if ("select" === i.nodeName.toLowerCase()) {
                var s = e(i).val();
                return s && s.length > 0
            }
            return this.checkable(i) ? this.getLength(t, i) > 0 : e.trim(t).length > 0
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
            var i = 0, n = 0, s = !1;
            e = e.replace(/\D/g, "");
            for (var a = e.length - 1; a >= 0; a--) {
                var r = e.charAt(a);
                n = parseInt(r, 10), s && (n *= 2) > 9 && (n -= 9), i += n, s = !s
            }
            return 0 === i % 10
        }, minlength: function (t, i, n) {
            var s = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
            return this.optional(i) || s >= n
        }, maxlength: function (t, i, n) {
            var s = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
            return this.optional(i) || n >= s
        }, rangelength: function (t, i, n) {
            var s = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
            return this.optional(i) || s >= n[0] && s <= n[1]
        }, min: function (e, t, i) {
            return this.optional(t) || e >= i
        }, max: function (e, t, i) {
            return this.optional(t) || i >= e
        }, range: function (e, t, i) {
            return this.optional(t) || e >= i[0] && e <= i[1]
        }, equalTo: function (t, i, n) {
            var s = e(n);
            return this.settings.onfocusout && s.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                e(i).valid()
            }), t === s.val()
        }, remote: function (t, i, n) {
            if (this.optional(i))return"dependency-mismatch";
            var s = this.previousValue(i);
            if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), s.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = s.message, n = "string" == typeof n && {url: n} || n, s.old === t)return s.valid;
            s.old = t;
            var a = this;
            this.startRequest(i);
            var r = {};
            return r[i.name] = t, e.ajax(e.extend(!0, {url: n, mode: "abort", port: "validate" + i.name, dataType: "json", data: r, success: function (n) {
                a.settings.messages[i.name].remote = s.originalMessage;
                var r = n === !0 || "true" === n;
                if (r) {
                    var o = a.formSubmitted;
                    a.prepareElement(i), a.formSubmitted = o, a.successList.push(i), delete a.invalid[i.name], a.showErrors()
                } else {
                    var l = {}, c = n || a.defaultMessage(i, "remote");
                    l[i.name] = s.message = e.isFunction(c) ? c(t) : c, a.invalid[i.name] = !0, a.showErrors(l)
                }
                s.valid = r, a.stopRequest(i, r)
            }}, n)), "pending"
        }}}), e.format = e.validator.format
    }(jQuery), !function (e) {
    var t = {};
    if (e.ajaxPrefilter)e.ajaxPrefilter(function (e, i, n) {
        var s = e.port;
        "abort" === e.mode && (t[s] && t[s].abort(), t[s] = n)
    }); else {
        var i = e.ajax;
        e.ajax = function (n) {
            var s = ("mode"in n ? n : e.ajaxSettings).mode, a = ("port"in n ? n : e.ajaxSettings).port;
            return"abort" === s ? (t[a] && t[a].abort(), t[a] = i.apply(this, arguments), t[a]) : i.apply(this, arguments)
        }
    }
}(jQuery), !function (e) {
    e.extend(e.fn, {validateDelegate: function (t, i, n) {
        return this.bind(i, function (i) {
            var s = e(i.target);
            return s.is(t) ? n.apply(s, arguments) : void 0
        })
    }})
}(jQuery), function () {
    this.disableSaveOnClick = function () {
        return $("form.edit_order").submit(function () {
            return $(this).find(":submit, :image").attr("disabled", !0).removeClass("primary").addClass("disabled")
        })
    }, $(function () {
        var e, t, i, n;
        return $("#checkout_form_address").is("*") && ($("#checkout_form_address").validate(), e = function (e) {
            return $("p#" + e + "country" + " span#" + e + "country-selection :only-child").val()
        }, t = function (t) {
            return state_mapper[e(t)]
        }, i = function (t) {
            return states_required_mapper[e(t)]
        }, n = function (e) {
            var n, s, a, r, o, l, c, h;
            return l = t(e), c = i(e), a = $("p#" + e + "state"), r = a.find("select"), s = a.find("input"), o = a.find("state-required"), l ? (n = parseInt(r.val()), r.html(""), h = [
                ["", ""]
            ].concat(l), $.each(h, function (e, t) {
                var i;
                return i = $(document.createElement("option")).attr("value", t[0]).html(t[1]), n === t[0] && i.prop("selected", !0), r.append(i)
            }), r.prop("disabled", !1).show(), s.hide().prop("disabled", !0), a.show(), o.show()) : (r.hide().prop("disabled", !0), s.show(), c ? o.show() : (s.val(""), o.hide()), a.toggle(!!c), s.prop("disabled", !c))
        }, $("p#bcountry select").change(function () {
            return n("b")
        }), $("p#scountry select").change(function () {
            return n("s")
        }), n("b"), n("s"), $("input#order_use_billing").click(function () {
            return $(this).is(":checked") ? ($("#shipping .inner").hide(), $("#shipping .inner input, #shipping .inner select").prop("disabled", !0)) : ($("#shipping .inner").show(), $("#shipping .inner input, #shipping .inner select").prop("disabled", !1), t("s") ? $("span#sstate input").hide().prop("disabled", !0) : $("span#sstate select").hide().prop("disabled", !0))
        }).triggerHandler("click")), $("#checkout_form_payment").is("*") ? ($('input[type="radio"][name="order[payments_attributes][][payment_method_id]"]').click(function () {
            return $("#payment-methods li").hide(), this.checked ? $("#payment_method_" + this.value).show() : void 0
        }), $(document).on("click", "#cvv_link", function (e) {
            var t, i;
            return t = "cvv_info", i = "left=20,top=20,width=500,height=500,toolbar=0,resizable=0,scrollbars=1", window.open($(this).attr("href"), t, i), e.preventDefault()
        }), $('input[type="radio"]:checked').click()) : void 0
    })
}.call(this), function () {
    var e, t, i;
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
        var t, i, n;
        return $("li.vtmb").hide(), $("li.tmb-" + e).show(), t = $("#" + $("#main-image").data("selectedThumbId")), t.hasClass("vtmb-" + e) ? void 0 : (n = $($("ul.thumbnails li:visible.vtmb").eq(0)), n.length > 0 || (n = $($("ul.thumbnails li:visible").eq(0))), i = n.find("a").attr("href"), $("ul.thumbnails li").removeClass("selected"), n.addClass("selected"), $("#main-image img").attr("src", i), $("#main-image").data("selectedThumb", i), $("#main-image").data("selectedThumbId", n.attr("id")))
    }, i = function (e) {
        var t;
        return t = e.data("price"), t ? $(".price.selling").text(t) : void 0
    }, $(function () {
        var n;
        return n = $('#product-variants input[type="radio"]'), e(), n.length > 0 && (t(n.eq(0).attr("value")), i(n.first())), $('#product-variants input[type="radio"]').click(function () {
            return t(this.value), i($(this))
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