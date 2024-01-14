// 스크롤이벤트
let con1 = document.querySelector(".con1"),
  con2 = document.querySelector(".con2"),
  con3 = document.querySelector(".con3"),
  con4 = document.querySelector(".con4");
let baseLine = 500;

window.addEventListener("scroll", function () {
  // 컨테이너 1번 스크롤 이벤트
  if (this.scrollY >= con1.offsetTop - baseLine) {
    $(".con1_title i").addClass("height");
    setTimeout(function () {
      $(".con1_title i").addClass("on");
    }, 300);
    setTimeout(function () {
      $(".con1_title").addClass("on");
    }, 700);
  }

  // 컨테이너 2번 스크롤 이벤트
  if (this.scrollY >= con2.offsetTop - baseLine) {
    $(".con2_title").addClass("on");
    setTimeout(function () {
      for (let i = 0; i < $(".tab_menu li").length; i++) {
        setTimeout(function () {
          $(".tab_menu li").eq(i).addClass("active");
        }, i * 200);
      }
    }, 600);
    setTimeout(function () {
      $(".con2_text ul").eq(0).addClass("on");
    }, 1300);
  }

  // 컨테이너 3번 스크롤 이벤트
  if (this.scrollY >= con3.offsetTop - baseLine) {
    $(".con3_title").addClass("on");
    $(".con3_content ul").addClass("on");
  }

  // 컨테이너 4번 스크롤 이벤트
  if (this.scrollY >= con4.offsetTop - baseLine) {
    $(".con4_title").addClass("on");
    $(".con4_content ul li").addClass("on");
  }
});

// 클릭이벤트 (컨테이너 2번 탭버튼)
$(".tab_menu li").click(function () {
  $(".tab_menu li").removeClass("on");
  $(this).addClass("on");
  let i = $(this).index();

  $(".con2_text ul").css({ display: "none" });
  $(".con2_text ul").eq(i).css({ display: "flex" });
  $(".con2_text ul").removeClass("on");
  setTimeout(function () {
    $(".con2_text ul").eq(i).addClass("on");
  }, 200);
});
