var PubLists = [
  {
    category: "user",
    title: "사용자",
    elem: [
      {
        id: "main",
        name: "user > main",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "./main/main.html",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
        depth: [
          {
            id: "3i45u03",
            name: "namename",
            type: "page",
            design: "없음", //"대기 | 진행중 | 완료 | designAnchor: "",
            address: "./main/main.html",
            pub: "대기", //"대기 | 진행중 | 완료"
            completeDate: "2025-01-00",
          },
        ],
      },
      {
        id: "guide",
        name: "가이드1",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "/",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: ["223455"],
      },
      {
        id: "guide",
        name: "가이드",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "/",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "guide",
        name: "가이드",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "/",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "guide",
        name: "가이드",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "/",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "guide",
        name: "가이드",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        address: "/",
        pub: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
    ],
  },
];

$(function () {
  var $header = $("#header");
  PubLists.forEach(function (list, i) {
    // header 설정
    if (list.elem.length > 0) {
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
    }

    // section 설정
    var $guideWrap = $(".guide-wrap"),
      $guideListWrap = $guideWrap.find(".guide-list-wrap"),
      $guideViewWrap = $guideWrap.find(".guide-view-wrap"),
      $viewInfo = $guideViewWrap.find(".view-info"),
      $viewList = $guideViewWrap.find(".view-list"),
      $guideViewer = $guideViewWrap.find(".viewer");

    var $menuName = $viewInfo.find(".menu-name"),
      $menuType = $viewInfo.find(".menu-type"),
      $menuDesign = $viewInfo.find(".menu-design"),
      $menuPub = $viewInfo.find(".menu-pub"),
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
        .css({ width: thisWidth + "px", height: thisHeight + "px" })
        .attr({ src: "./guide.html" });
      $this.addClass("active").siblings().removeClass("active");
    });

    // list 설정
    if (list.elem.length > 0) {
      list.elem.forEach(function (listElem, listIndex) {
        var { id, name, type, address, design, pub, etc, completeDate, depth } =
          listElem;

        var comment = etc.join("\n");
        var designCompleteType = null;

        //design complete type
        function setDesignCompleteType() {
          if (design == "대기") {
            designCompleteType =
              '<button type="button" class="btn type3">디자인 대기</button>';
          } else if (design == "진행중") {
            designCompleteType = `<button type="button" class="btn">디자인 진행중</button>`;
          } else if (design == "완료") {
            designCompleteType = `<a href="${designAnchor}" class="btn type2">디자인 완료</a>`;
          } else if (design == "없음") {
            designCompleteType = `<button type="button" class="btn" disabled>디자인 없음</button>`;
          }
        }

        //pub complete type
        var completeType = null;
        function setcompleteType() {
          if (pub == "대기") {
            pubType =
              '<button type="button" class="btn type3">퍼블 대기</button>';
          } else if (pub == "진행중") {
            pubType = '<button type="button" class="btn">퍼블 진행중</button>';
          } else if (pub == "완료") {
            pubType =
              '<button type="button" class="btn type2">퍼블 완료</button>';
          }
        }
        setDesignCompleteType();
        setcompleteType();

        if (!depth) {
          //depth1 하위 메뉴가 없을 때,
          var $depth1Item = $(`
          <div class="depth-item depth1-item">
            <button type="button data-href="${address}" class="depth-anchor depth1-anchor">
              ${name}
            </button>
          </div>
          `);
          $depth1Item.on("click", function () {
            var depthAnchor = $(this).find("");
            $menuName.text(name);
            $menuType.text(type);
            $menuDesign.text(design);
            $menuPub.text(pub);
            $menuComment.text(comment);
          });
        } else {
          //depth1 하위 메뉴가 있는 경우,
          var $depth1Item = $(`
          <div class="depth-item depth1-item">
            <div class="depth-anchor depth1-anchor">
              ${name}
            </div>
          </div>
          `);
          //depth2
          var $depth2List = $('<div class="depth-list depth2-list"></div>');
          depth.forEach(function (depth2Elem, depth2Index) {
            var { id, name, type, design, address, pub, completeDate, depth } =
              depth2Elem;

            if (!depth) {
              // depth2.. 하위 없을 경우,
              var $depth2Item = $(`
                <div class="depth-item depth2-item">
                  <button type="button" class="depth-anchor depth2-anchor" data-href="${address}">${name}</button>
                </div>
              `);
            } else {
              // depth2.. 하위 메뉴가 있는 경우,
              var $depth2Item = $(`
                <div class="depth-item depth2-item">
                  <div class="depth-anchor depth2-anchor" data-href="${address}">${name}</div>
                </div>
              `);
              depth.forEach(function (depth3Elem, depth3Index) {
                var {
                  id,
                  name,
                  type,
                  design,
                  address,
                  pub,
                  completeDate,
                  depth,
                } = depth3Elem;
                if (!depth) {
                } else {
                }
              });
            }
            $depth2List.append($depth2Item);
          });
        }
        $section.find(".guide-list").append($depth1Item);
      });
      $guideListWrap.append($section);
    }

    //
  });

  $(document).on("change", "#check1", function () {
    if ($(this).prop("checked")) {
      $(".design-date").addClass("active");
    } else {
      $(".design-date").removeClass("active");
    }
  });
  $(document).on("change", "#check2", function () {
    if ($(this).prop("checked")) {
      $(".dev-address").addClass("active");
    } else {
      $(".dev-address").removeClass("active");
    }
  });
  $(document).on("change", "#check3", function () {
    if ($(this).prop("checked")) {
      $(".pub-date").addClass("active");
    } else {
      $(".pub-date").removeClass("active");
    }
  });
});
