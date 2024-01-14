// 스크롤 이벤트
let con1 = document.querySelector(".con1"),
  con2 = document.querySelector(".con2"),
  con3 = document.querySelector(".con3");
let baseLine = 500;

window.addEventListener("scroll", function () {
  // 컨테이너 1번 스크롤
  if (this.scrollY >= con1.offsetTop - baseLine) {
    $(".con1_title").addClass("on");
    $(".con1_text").addClass("on");
  }

  // 컨테이너 2번 스크롤
  if (this.scrollY >= con2.offsetTop - baseLine) {
    $(".con2_content1").addClass("on");
    setTimeout(function () {
      $(".con2_content2 ul li").addClass("active");
    }, 500);
  }

  // 컨테이너 3번 스크롤
  if (this.scrollY >= con3.offsetTop - baseLine) {
    $(".con3_title").addClass("on");
    setTimeout(function () {
      for (let i = 0; i < $(".history_date li").length; i++) {
        setTimeout(function () {
          $(".history_date li").eq(i).addClass("active");
        }, i * 100);
      }
    }, 200);
    $(".history_slide").addClass("on");
  }
});

// 컨테이너 2번 클릭 이벤트
$(".con2_content2 ul li").click(function () {
  $(".con2_content2 ul li").removeClass("on");
  $(this).addClass("on");
});

// 컨테이너 3번 클릭 이벤트
$(".history_date li").click(function () {
  $(".history_date li").removeClass("on");
  $(this).addClass("on");
  let a = $(this).index();
  $(".history_slide ul")
    .stop()
    .animate({ marginLeft: `${-100 * a}%` });
  $(".history_slide ul li").removeClass("on");
  $(".history_slide ul li").eq(a).addClass("on");
  i = a;
});

// 컨테이너 3번 슬라이드 이벤트
let i = 0;
let total = $(".history_slide ul li").length;

// 다음버튼
$(".next").click(function () {
  next();
});

function next() {
  if (i !== total - 1) {
    i++;
  }
  $(".history_slide ul")
    .stop()
    .animate({ marginLeft: `${-100 * i}%` });
  $(".history_slide ul li").removeClass("on");
  $(".history_slide ul li").eq(i).addClass("on");
  $(".history_date li").removeClass("on");
  $(".history_date li").eq(i).addClass("on");
}

// 이전버튼
$(".prev").click(function () {
  prev();
});

function prev() {
  if (i !== 0) {
    i--;
  }
  $(".history_slide ul")
    .stop()
    .animate({ marginLeft: `${-100 * i}%` });
  $(".history_slide ul li").removeClass("on");
  $(".history_slide ul li").eq(i).addClass("on");
  $(".history_date li").removeClass("on");
  $(".history_date li").eq(i).addClass("on");
}

// 슬라이드 드래그 터치 이벤트(반응형)
let start_x, end_x;
let history_slide = document.querySelector(".history_slide ul");

// 드레그 이벤트

// 드레그 시작하는 순간
history_slide.addEventListener("mousedown", function (e) {
  start_x = e.pageX;
});

// 드레그 끝나는 순간
history_slide.addEventListener("mouseup", function (e) {
  end_x = e.pageX;

  if (start_x < end_x && start_x !== end_x && end_x - start_x >= 50) {
    prev();
  } //이전으로 가는 것

  if (start_x > end_x && start_x !== end_x && start_x - end_x >= 50) {
    next();
  } //다음으로 가는 것
});

// 터치 이벤트

// 터치 시작 순간
history_slide.addEventListener("touchstart", function (e) {
  start_x = e.touches[0].pageX; // 첫 손가락 터치가 시작 된 순간
});

// 터치 끝나는 순간
history_slide.addEventListener("touchend", function (e) {
  end_x = e.changedTouches[0].pageX; // 마지막 손가락 터치가 끝나는 순간

  if (start_x < end_x && start_x !== end_x && end_x - start_x >= 50) {
    prev();
  }
  if (start_x > end_x && start_x !== end_x && start_x - end_x >= 50) {
    next();
  }
});
