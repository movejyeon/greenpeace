// 비쥬얼 fade이벤트
let i = 0;
let total = $(".visual_bg").length;

setTimeout(function () {
  $(".visual_bg").eq(0).children(".visual_title").addClass("on");
}, 300);

setInterval(fade, 5000);

function fade() {
  if (i == total - 1) {
    i = 0;
  } else {
    i++;
  }
  $(".visual_bg").fadeOut();
  $(".visual_bg").eq(i).fadeIn();
  $(".visual_bg .visual_title").removeClass("on");
  setTimeout(function () {
    $(".visual_bg").eq(i).children(".visual_title").addClass("on");
  }, 300);
}

// 스크롤이벤트
let con1 = document.querySelector(".con1"),
  con2 = document.querySelector(".con2"),
  con3 = document.querySelector(".con3"),
  con4 = document.querySelector(".con4"),
  con5 = document.querySelector(".con5");
let baseLine = 500;

window.addEventListener("scroll", function () {
  // 컨테이너 1번 스크롤 이벤트
  if (this.scrollY >= con1.offsetTop - baseLine) {
    $(".con1_title").addClass("on");
    setTimeout(function () {
      for (let i = 0; i < $(".con1_content ul li").length; i++) {
        setTimeout(function () {
          $(".con1_content ul li").eq(i).addClass("up");
        }, i * 200);
      }
    }, 500);
  }

  // 컨테이너 2번 스크롤 이벤트
  if (this.scrollY >= con2.offsetTop - baseLine) {
    $(".con2_title").addClass("on");
    $(".con2_line").addClass("on");
    for (let i = 0; i < $(".con2_content ul li").length; i++) {
      setTimeout(function () {
        $(".con2_content ul li").eq(i).addClass("on");
      }, i * 200);
    }
  }

  // 컨테이너 3번 스크롤 이벤트
  if (this.scrollY >= con3.offsetTop - baseLine) {
    $(".con3_bg").addClass("on");
    $(".con3_content").addClass("on");
  }

  // 컨테이너 4번 스크롤 이벤트
  if (this.scrollY >= con4.offsetTop - baseLine) {
    $(".con4_title").addClass("on");
    setTimeout(function () {
      for (let i = 0; i < $(".con4_content_wrap ul li").length; i++) {
        setTimeout(function () {
          $(".con4_content_wrap ul li").eq(i).addClass("on");
        }, i * 150);
      }
    }, 300);
  }

  // 컨테이너 5번 스크롤 이벤트
  if (this.scrollY >= con5.offsetTop - baseLine) {
    $(".con5_bg").addClass("on");
    $(".con5_content").addClass("on");
  }
});

//마우스오버/아웃 이벤트

// 컨테이너 1번 마우스 이벤트
$(".con1_news").mouseover(function () {
  $(".con1_news").removeClass("on");
  $(this).addClass("on");
});

// 컨테이너 4번 마우스 이벤트
$(".con4_text span").mouseover(function () {
  $(this)
    .closest(".con4_content ul li")
    .children(".line1")
    .stop()
    .animate({ width: "100%" }, function () {
      $(this)
        .next(".line2")
        .stop()
        .animate({ height: "100%" }, function () {
          $(this)
            .next(".line3")
            .stop()
            .animate({ width: "100%" }, function () {
              $(this).next(".line4").stop().animate({ height: "100%" });
            });
        });
    });
});

$(".con4_text span").mouseout(function () {
  $(this)
    .closest(".con4_content ul li")
    .children(".line1")
    .stop()
    .animate({ width: "0%" }, function () {
      $(this)
        .next(".line2")
        .stop()
        .animate({ height: "0%" }, function () {
          $(this)
            .next(".line3")
            .stop()
            .animate({ width: "0%" }, function () {
              $(this).next(".line4").stop().animate({ height: "0%" });
            });
        });
    });
});

// 컨테이너 4번 슬라이드 이벤트

// 자동 슬라이드
let autoSlide = setInterval(next, 5000);

// 다음버튼 슬라이드
$(".next").click(function () {
  clearInterval(autoSlide);
  next();
  autoSlide = setInterval(next, 5000);
});

function next() {
  $(".con4_content_wrap ul")
    .stop()
    .animate({ marginLeft: `-100%` }, function () {
      $(".con4_content_wrap ul li").first().appendTo(".con4_content_wrap ul");
      $(".con4_content_wrap ul").css({ marginLeft: `0%` });
    });
}

// 이전버튼 슬라이드
$(".prev").click(function () {
  clearInterval(autoSlide);
  prev();
  autoSlide = setInterval(next, 5000);
});

function prev() {
  $(".con4_content_wrap ul li").last().prependTo(".con4_content_wrap ul");
  $(".con4_content_wrap ul").css({ marginLeft: "-100%" });
  $(".con4_content_wrap ul").stop().animate({ marginLeft: "0%" });
}

// 슬라이드 드래그 터치 이벤트(반응형)
let start_x, end_x;
let con4Slide = document.querySelector(".con4_content_wrap ul");

// 드레그 이벤트

// 드레그 시작하는 순간
con4Slide.addEventListener("mousedown", function (e) {
  clearInterval(autoSlide);
  start_x = e.pageX;
});

// 드레그 끝나는 순간
con4Slide.addEventListener("mouseup", function (e) {
  end_x = e.pageX;

  if (start_x < end_x && start_x !== end_x && end_x - start_x >= 50) {
    prev();
  } //이전으로 가는 것

  if (start_x > end_x && start_x !== end_x && start_x - end_x >= 50) {
    next();
  } //다음으로 가는 것

  autoSlide = setInterval(next, 5000);
});

// 터치 이벤트

// 터치 시작 순간
con4Slide.addEventListener("touchstart", function (e) {
  clearInterval(autoSlide);
  start_x = e.touches[0].pageX; // 첫 손가락 터치가 시작 된 순간
});

// 터치 끝나는 순간
con4Slide.addEventListener("touchend", function (e) {
  end_x = e.changedTouches[0].pageX; // 마지막 손가락 터치가 끝나는 순간

  if (start_x < end_x && start_x !== end_x && end_x - start_x >= 50) {
    prev();
  }
  if (start_x > end_x && start_x !== end_x && start_x - end_x >= 50) {
    next();
  }

  autoSlide = setInterval(next, 5000);
});

// 컨테이너 5번 클릭 이벤트
$("label a").click(function () {
  $(".privacy").css({ display: "flex" });
});
$(".privacy").click(function () {
  $(".privacy").css({ display: "none" });
});
