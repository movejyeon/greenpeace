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

  //   컨테이너 2번 스크롤 이벤트
  if (this.scrollY >= con2.offsetTop - baseLine) {
    $(".con2_content").addClass("on");
    for (let i = 0; i < $(".report_btn").length; i++) {
      setTimeout(function () {
        $(".report_btn").eq(i).addClass("on");
      }, i * 100);
    }
    $(".book").addClass("on");
  }

  //   컨테이너 3번 스크롤 이벤트
  if (this.scrollY >= con3.offsetTop - baseLine) {
    $(".con3_bg").addClass("on");
    $(".con3_content iframe").addClass("on");
    $(".con3_content ul").addClass("on");
  }

  //   컨테이너 4번 스크롤 이벤트
  if (this.scrollY >= con4.offsetTop - baseLine) {
    for (let i = 0; i < $(".line").length; i++) {
      setTimeout(function () {
        $(".line").eq(i).addClass("on");
      }, i * 200);
    }
    $(".con4_btn").addClass("on");
  }
});
