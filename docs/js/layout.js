$(function () {
  var $document = $(document);
  var $window = $(window);
  var $html = $("html");
  var $body = $("body");

  $("#menu").load("./includes/menu.html");
  const menu = {
    init: function () {
      this.$menu = $("#menu");
      this.$menuList = this.$menu.find(".depth1-list");
      this.$depth1 = this.$menu.find(".depth1");
      this.$depthItem = this.$depth1.find(".depth-item");
      this.$dpeth2Item = this.$menu.find(".depth2");

      // pc 메뉴
      this.menuOverEvent();
      this.depthOverEvent();
      this.menuLeaveEvent();
      this.menuScrollEvent();

      // mobile 메뉴
    },
    setMenuOpen: function (open, screen) {
      if (open === "open") {
        $html.attr("data-menu-open", "true");
      } else if (open === "close") {
        $html.attr("data-menu-open", "false");
      }
    },

    menuOverEvent: function () {
      this.$menu.on("mouseover focusin", function () {
        if ($window.outerWidth() > SCREEN.TABLET) {
          menu.setMenuOpen("open");
          var depth2Height = 0;
          menu.$dpeth2Item.each(function () {
            var $this = $(this);
            var thisHeight = $this.outerHeight();
            if (depth2Height < thisHeight) {
              depth2Height = thisHeight;
            }
          });
          var headerHeight = $(".header").outerHeight();
          $(".header .menu-wrap").height(headerHeight + depth2Height + 20);
        }
      });
    },
    depthOverEvent: function () {
      if ($window.outerWidth() > SCREEN.TABLET) {
        var $this = $(this);
        menu.$dpeth2Item.removeAttr("style");
        menu.$depth1.find(".actived > .depth-anchor").removeAttr("title");
        $this.addClass("active");
        $this.parents(".depth-item").addClass("active");
        $this.siblings().removeClass("active");
        menu.$depthItem.each(function (i, item) {
          var $item = $(item),
            $thisItemList = $item.find(">.depth-list");
          if ($item.hasClass("has") && $item.hasClass("active")) {
            // $thisItemList.css("display", "flex");
            $item.find(">.depth-anchor").attr("title", "열림");
          } else {
            $thisItemList.removeAttr("title");
          }
        });
      }
    },
    menuLeaveEvent: function () {
      if ($window.outerWidth() > SCREEN.TABLET) {
        menu.setMenuOpen("close");
        var headerHeight = $(".header").outerHeight();
        $(".header .menu-wrap").height(headerHeight);
      }
    },
    menuScrollEvent: function () {
      $window.on("mousewheel DOMMouseScroll", function (e) {
        var delta = e.originalEvent.deltaY;
        $(".lang").removeClass("active");
        $(".lang .lang-wrap").slideUp(100);
        if ($window.scrollTop() > 10) {
          $(".header").addClass("scroll");
        } else {
          $(".header").removeClass("scroll");
        }
        if (delta < 0) {
          $(".header").attr("data-scroll-direction", "top");
        } else {
          $(".header").attr("data-scroll-direction", "bottom");
        }
      });
    },
    mobileMenuOpenEvent: function () {
      var $menuBtn = $(".header .menu-btn");
      $menuBtn.on("click", function () {
        var $this = $(this);
        var $closeIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2377_130779)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1169 11.6727L3.82324 17.9664L5.23745 19.3806L11.5311 13.0869L17.9653 19.5212L19.3796 18.107L12.9453 11.6727L19.3796 5.23843L17.9653 3.82422L11.5311 10.2585L5.23745 3.96484L3.82324 5.37906L10.1169 11.6727Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_2377_130779">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>`;
        var $openIcon = `<svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2006_83360)">
                <rect width="20" height="2" transform="translate(2 6)" fill="black" />
                <rect width="20" height="2" transform="translate(2 16)" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_2006_83360">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>`;
        $this.toggleClass("active");
        if ($this.hasClass("active")) {
          $html.attr("data-menu-open", "true");
          $this.attr("title", "메뉴 열림");
          $this.find("i").html($closeIcon);
          $menu.addClass("delay");
          $(".menu-wrap").outerHeight($window.height());
          setTimeout(() => {
            $menu.removeClass("delay");
          }, 300);
        } else {
          $html.attr("data-menu-open", "false");
          $this.removeAttr("title");
          $this.find("i").html($openIcon);
        }
        var openFlag = false;
        $("#menu .depth-item").each(function () {
          if ($(this).hasClass("active")) {
            openFlag = true;
          }
          if (openFlag) {
            $menu.removeClass("all-close");
          } else {
            $menu.addClass("all-close");
          }
        });
      });
    },
    mobileClickEvent: function () {
      $("#menu .depth-anchor").on("click", function (e) {
        var $this = $(this),
          $thisItem = $this.closest(".depth-item"),
          $thisDepth1Item = $this.closest(".depth1-item"),
          $thisList = $this.closest(".depth-list"),
          $slblingItem = $thisList.find(">.depth-item"),
          openFlag = false;
        if ($window.outerWidth() < 1201) {
          if ($thisItem.hasClass("has")) {
            e.preventDefault();
            if ($thisDepth1Item.hasClass("active")) {
              $("#menu .depth-item").removeClass("active actived");
            } else {
              $("#menu .depth-item").removeClass("active actived");
              $thisItem.toggleClass("active");
            }
            $thisDepth1Item.siblings().removeClass("active actived");
          }
          $slblingItem.each(function () {
            if ($(this).hasClass("active")) {
              $(this).find(">.depth").slideDown(200);
              openFlag = true;
            } else {
              $(this).find(">.depth").slideUp(200);
            }
          });
          if (openFlag) {
            $menu.removeClass("all-close");
          } else {
            $menu.addClass("all-close");
          }
        }
      });
    },
  };

  menu.init();
  events.quick.init();
});
