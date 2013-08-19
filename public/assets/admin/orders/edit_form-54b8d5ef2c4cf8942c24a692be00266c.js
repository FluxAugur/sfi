$(document).ready(function () {
    $.each($("td.qty input"), function (t, e) {
        $(e).on("change", function () {
            var t = "#" + $(this).attr("id").replace("_quantity", "_id");
            jQuery.post("/admin/orders/" + $("input#order_number").val() + "/line_items/" + $(t).val(), {_method: "put", "line_item[quantity]": $(this).val()}, function (t) {
                $("#order-form-wrapper").html(t.responseText)
            })
        })
    })
});