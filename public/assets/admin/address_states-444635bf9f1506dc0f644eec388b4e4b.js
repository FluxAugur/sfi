var update_state = function (e) {
    var t = $("span#" + e + "country .select2").select2("val"), a = state_mapper[t], s = $("span#" + e + "state select.select2"), p = $("span#" + e + "state input");
    if (a) {
        s.html("");
        var l = [
            ["", ""]
        ].concat(a);
        $.each(l, function (e, t) {
            var a = $(document.createElement("option")).attr("value", t[0]).html(t[1]);
            s.append(a)
        }), s.prop("disabled", !1).show(), s.select2(), p.hide().prop("disabled", !0)
    } else p.prop("disabled", !1).show(), s.select2("destroy").hide()
};