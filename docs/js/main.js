$(function () {
  events.tab.init(".tab-btn");
  var $popupSlide = $(".popup .slide-list");
  $popupSlide.slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipe: false,
    draggable: false,
    prevArrow: $(".popup-ctrl .prev"),
    nextArrow: $(".popup-ctrl .next"),
    //추가 기능
    autoArrow: $(".popup-ctrl .auto"),
    isRunOnLowIE: false,
    pauseOnArrowClick: true,
    pauseOnDirectionKeyPush: true,
    pauseOnSwipe: true,
    pauseOnDotsClick: true,
    pauseText: "정지",
    playText: "재생",
    total: $(".popup-ctrl .count .total"),
    current: $(".popup-ctrl .count .current"),
    dots: true,
    appendDots: $(".popup-ctrl .dots"),
    dotsClass: "slick-dots",
    customPaging: function (slider, i) {
      //var thumb = $(slider.$slides[i]).attr("data-thum");
      return (
        '<button type="button"><span>' +
        (i + 1) +
        "번 비주얼 사진 보기</span></button>"
      );
    },
    responsive: [
      {
        breakpoint: SCREEN.TABLET,
        settings: {
          swipe: true,
          draggable: true,
        },
      },
    ],
  });
});
