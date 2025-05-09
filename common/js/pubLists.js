var PubLists = [
  {
    category: "user",
    title: "사용자",
    elem: [
      {
        id: "main",
        breadcrumb: "user > main",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "",
        designAnchor: "",
        address: "./main/main.html",
        pubAddress: "./main/main.html",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "guide",
        breadcrumb: "가이드",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/guide.html",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "guide",
        breadcrumb: "가이드",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/guide.html",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "guide",
        breadcrumb: "가이드",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/guide.html",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "guide",
        breadcrumb: "가이드",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/guide.html",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "guide",
        breadcrumb: "가이드",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/guide.html",
        complete: "대기", //"대기 | 진행중 | 완료"
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

    // table 설정
    var $guideWrap = $(".guide-wrap");
    var $table = $(
      `<section id=${list.category}>
          <h2>${list.title}</h2>
          <div class="guide-list"></div>
        </section>`
    );

    // tr 설정
    if (list.elem.length > 0) {
      list.elem.forEach(function (listElem, listIndex) {
        var {
          id,
          breadcrumb,
          title,
          address,
          pubAddress,
          complete,
          etc,
          design,
          designDate,
          designAnchor,
          completeDate,
          type,
        } = listElem;

        var comment = etc.join("\n");
        var designCompleteType = null;

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
        var completeType = null;
        function setcompleteType() {
          if (complete == "대기") {
            completeType =
              '<button type="button" class="btn type3">퍼블 대기</button>';
          } else if (complete == "진행중") {
            completeType =
              '<button type="button" class="btn">퍼블 진행중</button>';
          } else if (complete == "완료") {
            completeType =
              '<button type="button" class="btn type2">퍼블 완료</button>';
          }
        }
        setDesignCompleteType();
        setcompleteType();
        var $tr = $(`
        <div class="list">
          <div class="item">${breadcrumb}</div>
          <div class="item" title="화면주소">
            <a target="_blank" href=${pubAddress}>${pubAddress}</a>
          </div>
            <div class="item dev-address">
            <strong>개발주소 : </strong>
              <a target="-blank" href=${address}>${address}</a>
            </div>
          <div class="item" title="타입"><strong>화면타입 : </strong>${type}</div>
          <div class="item complete" title="완료상태">            
            <div class="pub-date"><strong>퍼블 완료일 : </strong>${completeDate}</div>
          </div>
          <div class="item" title="완료상태">
              <span>${designCompleteType}</span>
              <span>${completeType}</span>
            <div class="design-date">${designDate}</div>
          </div>
          <div class="item" style="white-space: pre-line" title="비고">${comment}</div>
        </div>
        `);
        $table.find(".guide-list").append($tr);
      });
      $guideWrap.append($table);
    }
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
