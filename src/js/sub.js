"use strict";

$(function () {
  $("[data-pop]").on("click", function () {
    var $this = $(this),
      thisPop = $this.attr("data-pop"),
      $thisPanel = $(`[data-panel="${thisPop}"]`);
    var slideNode = thisPop === "breadcumb" || thisPop === "search-detail";
    $this.toggleClass("active");
    if ($this.hasClass("active")) {
      $thisPanel.addClass("active");
      if (slideNode) {
        console.log(1);
        $thisPanel.slideDown(100);
      }
    } else {
      $thisPanel.removeClass("active");
      if (slideNode) {
        $thisPanel.slideUp(100);
      }
    }
  });
});
