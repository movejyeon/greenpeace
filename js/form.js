// 클릭 이벤트

// 후원 주기 클릭 이벤트
$(".support li").on("click", function () {
  $(".support li").removeClass("on");
  $(this).addClass("on");
});

// 후원금 클릭 이벤트
$(".amount li").on("click", function () {
  $(".amount li").removeClass("on");
  $(this).addClass("on");
});

// 개인정보 동의 클릭 이벤트
$(".guide_link1").click(function () {
  $(".guide1").css({ display: "flex" });
});
$(".guide1 span").click(function () {
  $(".guide1").css({ display: "none" });
});

$(".guide_link2").click(function () {
  $(".guide2").css({ display: "flex" });
});
$(".guide2 span").click(function () {
  $(".guide2").css({ display: "none" });
});

//스크롤 이벤트
if (window.scrollY >= 0) {
  $(".main").addClass("on");
}

// 출생연월 이벤트

// 옵션이 생길 select를 가져옴
let year = document.querySelector("#year");
let month = document.querySelector("#month");
let day = document.querySelector("#day");

// 옵션 목록이 생겼는지 안생겼는지 확인할 변수
let show1 = false;

// 년 이벤트
year.addEventListener("focus", function () {
  if (!show1) {
    show1 = true;
    for (let i = 1940; i <= 2023; i++) {
      // 옵션을 새로 생성하겠다
      let yearOption = document.createElement("option");
      //   생성된 옵션 값을 변수 i로 채우겠다
      yearOption.setAttribute("value", i);
      //   보여지는 옵션 안 내용을 i로 채우겠다
      yearOption.innerText = i;
      // 이벤트 발생 된 애한테 자식요소를 추가하겠다
      this.appendChild(yearOption);
    }
  }
});

// 월 이벤트
let show2 = false;
month.addEventListener("focus", function () {
  if (!show2) {
    show2 = true;
    for (let i = 1; i <= 12; i++) {
      let monthOption = document.createElement("option");
      monthOption.setAttribute("value", i);
      monthOption.innerText = i;
      this.appendChild(monthOption);
    }
  }
});

// 일 이벤트
let show3 = false;
day.addEventListener("focus", function () {
  if (!show3) {
    show3 = true;
    for (let i = 1; i <= 31; i++) {
      let dayOption = document.createElement("option");
      dayOption.setAttribute("value", i);
      dayOption.innerText = i;
      this.appendChild(dayOption);
    }
  }
});
