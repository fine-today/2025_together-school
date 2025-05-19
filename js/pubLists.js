var ICONS = {
  LOADING: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="currentColor" stroke="currentColor" stroke-width="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="currentColor" stroke="currentColor" stroke-width="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="currentColor" stroke="currentColor" stroke-width="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>`,
  COMPLETE: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg>`,
  EMPTY: `<svg stroke="#999999" fill="#999999" stroke-width="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"></path></svg>`,
  FOLDER: {
    OPEN: `<svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>`,
    CLOSE: `<svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>`,
  },
};

var PubLists = [
  {
    category: "guide",
    title: "가이드",
    elem: [
      {
        id: "guide",
        name: "기본정책",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "./pages/guide/policy.html",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "guide",
        name: "컴포넌트",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "./pages/guide/guide.html",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "popGuide",
        name: "팝업 유형",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "./pages/guide/guide-popup.html",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
    ],
  },
  {
    category: "common",
    title: "공통/메인",
    elem: [
      {
        id: "main",
        name: "메인",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        pub: "대기", //"대기 | 진행중 | 완료"
        address: "./pages/main.html",
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "sub",
        name: "서브 레이아웃",
        type: "layout",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        pub: "대기", //"대기 | 진행중 | 완료"
        address: "./pages/sub.html",
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "guide",
        name: "가이드5",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "/",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "guide",
        name: "가이드1",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "/",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
        etc: ["223455", "aslfkjsalfk", "wqipreqwflskamdjl"],
        depth: [
          {
            id: "3i45u03",
            name: "namename1",
            type: "page",
            design: "없음", //"대기 | 진행중 | 완료 | designAnchor: "",
            address: "./pages/main.html",
            pub: "대기", //"대기 | 진행중 | 완료"
            completeDate: "2025-01-00",
            etc: [""],
          },
          {
            id: "3i45u03",
            name: "namename2",
            type: "page",
            design: "없음", //"대기 | 진행중 | 완료 | designAnchor: "",
            address: "./pages/main.html",
            pub: "대기", //"대기 | 진행중 | 완료"
            completeDate: "2025-01-00",
            etc: [""],
          },
        ],
      },
      {
        id: "main",
        name: "메인",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "./pages/main.html",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
        depth: [
          {
            id: "3i45u03",
            name: "namename",
            type: "page",
            design: "없음", //"대기 | 진행중 | 완료 | designAnchor: "",
            address: "./pages/main.html",
            pub: "진행중", //"대기 | 진행중 | 완료"
            completeDate: "2025-01-00",
            etc: [""],
            depth: [
              {
                id: "guide",
                name: "화면 가이드",
                type: "page",
                design: "없음", //"대기 | 진행중 | 완료 | 없음"
                address: "/",
                pub: "대기", //"대기 | 진행중 | 완료"
                completeDate: "2025-01-00",
                etc: [""],
              },
            ],
          },
        ],
      },
    ],
  },
];

$(function () {
  var $header = $("#header");
  PubLists.forEach(function (list, i) {
    // header 설정
    /* if (list.elem.length > 0) {
      $header.find(".btn-wrap").append(`
          <button type="button" class="btn type3" data-href="${list.category}">${list.title}</button>
        `);
      // header btn click
      $(document).on("click", "#header .btn", function () {
        var $this = $(this),
          thisHref = $this.attr("data-href");
        var elemTop = $("body")
          .find("#" + thisHref)
          .offset().top;
        $("html,body").animate({ scrollTop: elemTop - 100 }, 300);
      });
    }*/

    // variation 설정
    var $guideWrap = $(".guide-wrap"),
      $guideIcons = $(".guide-icons"),
      $guideListWrap = $guideWrap.find(".guide-list-wrap"),
      $guideViewWrap = $guideWrap.find(".guide-view-wrap"),
      $viewInfo = $guideViewWrap.find(".view-info"),
      $viewList = $guideViewWrap.find(".view-list"),
      $guideViewer = $guideViewWrap.find(".viewer");

    // guide-icon 설명 부분
    $guideIcons.find(".icon-item").each(function () {
      var $this = $(this),
        $thisIconElem = $this.find("i"),
        thisStatus = $this.attr("data-status");
      if (thisStatus === "folder-open") {
        $thisIconElem.html(ICONS.FOLDER.OPEN);
      } else if (thisStatus === "folder-close") {
        $thisIconElem.html(ICONS.FOLDER.CLOSE);
      } else if (thisStatus === "empty") {
        $thisIconElem.html(ICONS.EMPTY);
      } else if (thisStatus === "loading") {
        $thisIconElem.html(ICONS.LOADING);
      } else if (thisStatus === "colmplete") {
        $thisIconElem.html(ICONS.COMPLETE);
      }
    });

    var $menuName = $viewInfo.find(".menu-name"),
      $menuType = $viewInfo.find(".menu-type"),
      $menuComment = $viewInfo.find(".menu-comment");

    var $section = $(
      `<section id=${list.category}>
        <h2>${list.title}</h2>
        <div class="guide-list"></div>
      </section>`
    );

    $viewList.find(".view-btn").on("click", function () {
      var $this = $(this),
        thisWidth = $this.attr("data-width"),
        thisHeight = $this.attr("data-height");
      $guideViewer
        .find("iframe#pub-viewer")
        .css({ width: thisWidth + "px", height: thisHeight + "px" });
      $this.addClass("active").siblings().removeClass("active");
    });

    // list 설정
    if (list.elem.length > 0) {
      list.elem.forEach(function (listElem, listIndex) {
        var { id, name, type, address, design, pub, etc, completeDate, depth } =
          listElem;
        var $depth1Item = $(`
          <div class="depth-item depth1-item ${depth ? "has" : ""}">
            <button type="button" class="depth-anchor depth1-anchor">
              <i></i>${name}
            </button>
          </div>
          `);
        var comment = etc.join("&&");
        $depth1Item.attr({
          "data-href": address,
          "data-id": id,
          "data-design": design,
          "data-pub": pub,
          "data-type": type,
          "data-complete": completeDate,
          "data-comment": comment,
        });
        if (depth) {
          //depth2
          $depth1Item.addClass("has");
          var $depth2List = $('<div class="depth-list depth2-list"></div>');
          depth.forEach(function (depth2Elem, depth2Index) {
            var {
              id,
              name,
              type,
              design,
              address,
              pub,
              etc,
              completeDate,
              depth,
            } = depth2Elem;

            var $depth2Item = $(`
                <div class="depth-item depth2-item">
                  <button type="button" class="depth-anchor depth2-anchor" data-href="${address}"><i></i>${name}</button>
                </div>
              `);
            var comment = etc.join("&&");
            $depth2Item.attr({
              "data-href": address,
              "data-id": id,
              "data-design": design,
              "data-pub": pub,
              "data-type": type,
              "data-complete": completeDate,
              "data-comment": comment,
            });
            if (depth) {
              // depth3.. 하위 메뉴가 있는 경우,
              $depth2Item.addClass("has");
              var $depth3List = $('<div class="depth-list depth3-list"></div>');
              depth.forEach(function (depth3Elem, depth3Index) {
                var {
                  id,
                  name,
                  type,
                  design,
                  address,
                  pub,
                  etc,
                  completeDate,
                  depth,
                } = depth3Elem;
                var $depth3Item = $(`
                  <div class="depth-item depth3-item">
                    <button type="button" class="depth-anchor depth3-anchor" data-href="${address}"><i></i>${name}</button>
                  </div>
                `);
                var comment = etc.join("&&");
                $depth3Item.attr({
                  "data-href": address,
                  "data-id": id,
                  "data-design": design,
                  "data-pub": pub,
                  "data-type": type,
                  "data-complete": completeDate,
                  "data-comment": comment,
                });
                if (depth) {
                }
                $depth3List.append($depth3Item);
              });
              $depth2Item.append($depth3List);
            }
            $depth2List.append($depth2Item);
          });
          $depth1Item.append($depth2List);
        }
        $section.find(".guide-list").append($depth1Item);
      });
      $guideListWrap.append($section);

      //상태 ICON 추가
      $(".depth-item").each(function () {
        var $this = $(this),
          $thisAnchor = $this.find(">.depth-anchor"),
          $thisItemElem = $thisAnchor.find(">i"),
          thisDesign = $this.attr("data-design"),
          thisPub = $this.attr("data-pub");
        if (!$this.hasClass("has")) {
          if (thisPub === "완료") {
            $thisItemElem.html(ICONS.COMPLETE);
          } else if (thisPub === "진행중") {
            $thisItemElem.html(ICONS.LOADING);
          } else {
            $thisItemElem.html(ICONS.EMPTY);
            console.log($thisItemElem.length);
          }
        } else {
          if ($this.hasClass("active")) {
            $thisItemElem.html(ICONS.FOLDER.OPEN);
          } else {
            $thisItemElem.html(ICONS.FOLDER.CLOSE);
          }
        }
      });

      // tree 오픈 toggle-btn
      $guideWrap
        .find('.tree-ctrl .tree-btn[data-status="close"] i')
        .html(ICONS.FOLDER.CLOSE);
      $guideWrap
        .find('.tree-ctrl .tree-btn[data-status="open"]')
        .click()
        .find("i")
        .html(ICONS.FOLDER.OPEN);
      $guideWrap.find(".tree-ctrl .tree-btn").on("click", function () {
        var $this = $(this),
          thisStatus = $this.attr("data-status");
        $this.addClass("active").siblings().removeClass("active");
        $(".depth-item").each(function () {
          if ($(this).hasClass("has")) {
            if (thisStatus === "open") {
              $(this).addClass("active");
              $(".depth-list").slideDown(100);
            } else if (thisStatus === "close") {
              $(this).removeClass("active");
              $(".depth-list").slideUp(100);
            }
          }
        });
      });

      //event
      $(".depth-anchor").on("click", function (e) {
        var $this = $(this),
          $thisParent = $this.closest(".depth-item"),
          thisDesign = $thisParent.attr("data-design"),
          thisPub = $thisParent.attr("data-pub"),
          thisName = $thisParent.text(),
          thisId = $thisParent.attr("data-id"),
          thisHref = $thisParent.attr("data-href"),
          thisType = $thisParent.attr("data-type"),
          thisComment = $thisParent.attr("data-comment");
        if ($thisParent.hasClass("has")) {
          // 하위가 있을 때
          if ($thisParent.hasClass("active")) {
            $thisParent.removeClass("active");
          } else {
            $thisParent.addClass("active");
          }

          $(".depth-item").each(function () {
            var $thisItem = $(this),
              $thisDepthList = $thisItem.find(">.depth-list"),
              $thisIcon = $thisItem.find(">.depth-anchor > i");
            if ($thisItem.hasClass("has")) {
              if ($thisItem.hasClass("active")) {
                $thisDepthList.slideDown(100);
                $thisIcon.html(ICONS.FOLDER.OPEN);
              } else {
                $thisDepthList.slideUp(100);
                $thisIcon.html(ICONS.FOLDER.CLOSE);
              }
            }
          });
        } else if (!$thisParent.hasClass("has")) {
          // 하위가 없을 때
          //design complete type
          $(".depth-item").each(function () {
            if (!$(this).hasClass("has")) {
              $(this).removeClass("active");
            }
          });
          $thisParent.addClass("active");

          var designType = $(
            '<button type="button" class="btn">디자인</button>'
          );
          var pubType = $(
            '<button type="button" class="btn" data-complete="date">퍼블</button>'
          );
          function setDesignCompleteType(design) {
            if (design == "대기") {
              designType.addClass("type3").text("디자인 대기");
            } else if (design == "진행중") {
              designType.text("디자인 진행중");
            } else if (design == "완료") {
              designType.addClass("type2").text("디자인 완료");
            } else if (design == "없음") {
              designType.text("디자인 없음");
            }
          }

          //pub complete type
          function setcompleteType(pub) {
            if (pub == "대기") {
              pubType.addClass("type3").text("퍼블 대기");
            } else if (pub == "진행중") {
              pubType.text("퍼블 진행중");
            } else if (pub == "완료") {
              pubType.addClass("type2").text("퍼블 완료");
            }
          }
          setDesignCompleteType(thisDesign);
          setcompleteType(thisPub);
          var $menuNameElem = $(
            `<div class="name-wrap"><span class="title">${thisName}</span></div>`
          );
          var comment = thisComment.split("&&").join("\n");
          $menuNameElem.append(designType);
          $menuNameElem.append(pubType);
          $menuName.html("");
          $menuName.append($menuNameElem);
          $menuType.text(thisType);
          $menuComment.css("white-space", "pre").text(comment);
          $guideViewer.find("iframe#pub-viewer").attr("src", thisHref);
        }
      });
    }
  });
});
