!function () {
    $("#cancel_link").click(function (n) {
        return n.preventDefault(), $(".no-objects-found").show(), $("#new_image_link").show(), $("#images").html("")
    })
}.call(this);