// 스크롤 이벤트
let con1 = document.querySelector(".con1");
let relative = document.querySelectorAll(".bg_relative");
let baseLine = 500;

window.addEventListener("scroll", function () {
  //첫번째 컨테이너 스크롤 이벤트
  if (this.scrollY >= con1.offsetTop - baseLine) {
    $(".con1_title").addClass("on");
  }

  //   두번째 컨테이너 스크롤 이벤트
  for (let i = 0; i < relative.length; i++) {
    // 홀수번째 이벤트 그러나 js에서는 순번이 0부터 시작되기때문에 홀수번이 짝수로 됨
    if (i % 2 == 0) {
      if (this.scrollY >= relative[i].offsetTop - baseLine) {
        $(".bg_relative").eq(i).children(".con2_content").addClass("on");
        setTimeout(function () {
          for (let l = 0; l < $(".odd .sub_campaign li").length; l++) {
            setTimeout(function () {
              $(".bg_relative")
                .eq(i)
                .find(".odd .sub_campaign li")
                .eq(l)
                .addClass("on");
            }, l * 200);
          }
        }, 1300);
      }
    }

    // 짝수번째 이벤트 설명은 위와 같음
    if (i % 2 !== 0) {
      if (this.scrollY >= relative[i].offsetTop - baseLine) {
        $(".bg_relative").eq(i).children(".con2_content").addClass("on");
        setTimeout(function () {
          for (let l = $(".even .sub_campaign li").length - 1; l >= 0; l--) {
            setTimeout(function () {
              $(".bg_relative")
                .eq(i)
                .find(".even .sub_campaign li")
                .eq(l)
                .addClass("on");
            }, ($(".even .sub_campaign li").length - l) * 200);
          }
        }, 0);
      }
    }
  }
});
