// 메뉴 호버시 슬라이드 내려오기

$("nav").on("mouseenter", function () {
  $("header").addClass("on");
  $("header").addClass("down");
  $(".menu_bar span").addClass("on");
  $(".snb").addClass("on");
  // if (window.scrollY == 0) {
  //   $("header").addClass("on");
  //   $(".menu_bar span").addClass("on");
  // }
});

$("nav").on("mouseleave", function () {
  $(".snb").removeClass("on");
  $("header").removeClass("down");
  if (window.scrollY == 0) {
    $("header").removeClass("on");
    $(".menu_bar span").removeClass("on");
  }
});

//스크롤 헤더 이벤트
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (this.scrollY > 0) {
    header.classList.add("on");
    $(".menu_bar span").addClass("on");
  } else {
    // header.classList.remove("on");
    // $(".menu_bar span").removeClass("on");

    if ($("header").hasClass("down") == true) {
      console.log("클래스 있음");
      header.classList.add("on");
      $(".menu_bar span").addClass("on");
    } else {
      header.classList.remove("on");
      $(".menu_bar span").removeClass("on");
    }

    // $("header").on("mouseleave", function(){
    //   $("header").removeClass("on")
    //   $(".menu_bar span").removeClass("on")
    // })
  }
});

// 모바일 메뉴창 이벤트
$(".menu_bar").click(function () {
  $(".mo_menu").stop().animate({ top: "0" });
});

$(".mo_close").click(function () {
  $(".mo_menu").stop().animate({ top: "-100%" });
  $(".mo_snb").stop().slideUp();
});

// 모바일 메뉴창 슬라이드 이벤트
$(".mo_gnb").click(function () {
  $(".mo_snb").stop().slideUp();
  $(this).find(".mo_snb").stop().slideDown();
  $(".size").removeClass("on");
  $(this).find(".size").addClass("on");
});
