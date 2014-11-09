$(document).on("ready", function() {
  $(document).on("click", "#scroller a", function() {
    var target = $(this).data("target")
    var section = $(target)
    console.log(section.parent())
    console.log($("#scroller .active").parent())

    $("#scroller .active").removeClass("active")
    section.parent().addClass("active")
  })
})
