"use strict";

var SCREEN = {
  TABLET: 1280,
  MOBILE: 768,
};

var events = {
  tab: {
    init: function ($tabBtn) {
      this.setTab($tabBtn);
    },
    setTab: function ($tabBtn) {
      $($tabBtn)
        .on("click", function () {
          var $this = $(this),
            thisId = $this.attr("data-tabid"),
            $thisTabBox = $this.closest(".tabs"),
            $thisConBox = $thisTabBox.find(">.tab-con-box"),
            $thisCon = $thisConBox.find(`.tab-con[data-tabid="${thisId}"]`);
          $this.attr({ title: "열림" }).addClass("active");
          $this.siblings(".tab-btn").removeAttr("title").removeClass("active");
          $thisCon.attr({ title: $this.text() + " 열림" }).addClass("active");
          $thisCon
            .siblings(".tab-con")
            .removeAttr("title")
            .removeClass("active");
        })
        .triggerHandler("click");
    },
  },
  quick: {
    init: function () {
      this.$quickMenu = $(".quick-menu");
      this.$quickFoldBtn = this.$quickMenu.find(".fold-btn");
      this.$quickList = this.$quickMenu.find(".quick-list");
      this.$topBtn = this.$quickMenu.find(".top-btn");

      this.foldQuickMenu(this.$quickFoldBtn, this.$quickMenu, this.$quickList);
      this.setTopBtn(this.$topBtn);
      this.setWinScrollPosition(this.$quickMenu);
    },
    foldQuickMenu: function ($quickFoldBtn, $quickMenu, $quickList) {
      $quickFoldBtn
        .on("click", function () {
          $quickMenu.toggleClass("active");
          if ($quickMenu.hasClass("active")) {
            $quickFoldBtn.attr("title", "퀵링크 메뉴 숨김");
            $quickList.slideDown(150).attr("title", "퀵링크 메뉴 열림");
          } else {
            $quickFoldBtn.attr("title", "퀵링크 메뉴 펼침");
            $quickList.slideUp(150).attr("title", "퀵링크 메뉴 닫힘");
          }
        })
        .triggerHandler("click");
    },
    setTopBtn: function ($topBtn) {
      $topBtn.on("click", function () {
        $("html,body").animate({ scrollTop: 0 }, 100);
      });
    },
    setWinScrollPosition: function ($quickMenu) {
      var winTop = $(window).scrollTop();
      if (winTop <= 0) {
        $quickMenu.attr("data-top", "top");
      } else {
        $quickMenu.attr("data-top", "content");
      }
      $(window).on("scroll", function () {
        winTop = $(window).scrollTop();
        if (winTop <= 0) {
          $quickMenu.attr("data-top", "top");
        } else {
          $quickMenu.attr("data-top", "content");
        }
      });
    },
  },
};
$(function () {});
