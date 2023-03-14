const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const create = (x) => document.createElement(x);

// DOM 요소 선택
const datepicker = qs("#datepicker");
const calendarBg = qs(".calendar_bg");
const calendar = qs(".calendar");
const showMonth = qs(".calendar-nav .date .month");
const showYear = qs(".calendar-nav .date .year");
const showDate = qs(".calendar-grid");

let temp = "";

// Date 객체 생성
let currentDate = new Date();
let weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let currentMonth = currentDate.getMonth();
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentYear = currentDate.getFullYear();

// 두자릿수 표시함수
const twoDigit = (x) => (x < 10 ? "0" + x : x);
// 이동버튼 클릭상태값(1-버튼클릭/0-아님)
let mvBtnSts = 0;

// Calendar 함수
function Calendar() {
    let firstData;
    let secondData;
    console.log("temp:",temp," | 버튼클릭상태:",mvBtnSts," | 현재월:",currentMonth);
    // 월, 년도 표시
    if ((temp === "" && !mvBtnSts) || mvBtnSts) {
        console.log("첫번째조건");
        firstData = `${monthArray[currentMonth]}`;
        secondData = `${currentYear}`;
    } else {
      console.log("두번째조건");
        firstData = `${monthArray[parseInt(temp.split("-")[1])-1]}`;
        secondData = `${temp.split("-")[0]}`;
        // 해당월로 업데이트!
        currentMonth = parseInt(temp.split("-")[1])-1;
        // 해당년도 업데이트!
        currentYear = temp.split("-")[0];
    }



    showMonth.textContent = firstData;
    showYear.textContent = secondData;

    showDate.innerHTML = "";


    
    console.log("현재년:",currentYear);
    console.log("현재월:",currentMonth);


    // 주 표시
    for (let i = 1; i <= 7; i++) {
        const cell = create("div");
        cell.classList.add("grid-cell", "week");
        showDate.appendChild(cell);

        const span = create("span");
        span.textContent = weekDays[i - 1];
        cell.appendChild(span);
    }

    // 해당 월의 첫 번째 날과 마지막 날 구하기
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0);

    // 이전 월 날짜 넣기
    for (let i = 1; i < firstDay.getDay() + 1; i++) {
        const cell = create("div");
        cell.classList.add("grid-cell", "date", "blur", "prevMonth");
        showDate.appendChild(cell);

        const span = create("span");
        span.textContent = prevMonthLastDay.getDate() - firstDay.getDay() + i;
        cell.appendChild(span);
        span.setAttribute("data-d", `${firstDay.getFullYear()}-${twoDigit(firstDay.getMonth())}-${twoDigit(span.textContent)}`);
    }

    // 해당 월 날짜 넣기
    for (let i = 1; i < lastDay.getDate() + 1; i++) {
        const cell = create("div");
        cell.classList.add("grid-cell", "date");
        showDate.appendChild(cell);

        // console.log("요기", temp);

        const span = create("span");
        span.textContent = i;
        cell.appendChild(span);
        span.setAttribute("data-d", `${lastDay.getFullYear()}-${twoDigit(lastDay.getMonth() + 1)}-${twoDigit(i)}`);

        if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
            cell.classList.add("today");
        }
    }

    // 다음 월 날짜 넣기
    let gridCell = qsa(".grid-cell").length;

    for (let i = 1; i <= 7 - (gridCell % 7); i++) {
        if (7 - (gridCell % 7) !== 7) {
            const cell = create("div");
            cell.classList.add("grid-cell", "date", "blur", "nextMonth");
            showDate.appendChild(cell);

            const span = create("span");
            span.textContent = i;
            cell.appendChild(span);
            span.setAttribute("data-d", `${lastDay.getFullYear()}-${twoDigit(lastDay.getMonth() + 2)}-${twoDigit(i)}`);
        }
    }
}

Calendar();

// 달 이동 버튼
const prevMonthButton = qs(".calendar-nav .btn.arrow.left");
const nextMonthButton = qs(".calendar-nav .btn.arrow.right");

function clickFn() {
    prevMonthButton.onclick = () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        console.log(currentMonth);
        // 이동버튼 상태값 변경
        mvBtnSts = 1;
        Calendar();
        clickFn();
        if (temp !== "") chkDate(temp);
    };

    nextMonthButton.onclick = () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        console.log(currentMonth);
        // 이동버튼 상태값 변경
        mvBtnSts = 1;
        Calendar();
        clickFn();
        if (temp !== "") chkDate(temp);
    };

    // 클릭한 경우 날짜표시 셋팅체크함수
    const chkDate = (d) => {
        let nowTg = showDate.querySelectorAll(".date");

        for (let x of nowTg) {
            let dtg = x.querySelector("span").getAttribute("data-d");
            // console.log("이거야!", d, dtg);
            if (dtg === d) x.classList.add("on");
            else x.classList.remove("on");
        }
    }; ///////// chkDate함수 //////////////////

    // datepicker을 클릭할 때
    datepicker.onclick = () => {
      
      // 이동버튼 상태값 변경
      mvBtnSts = 0;
      Calendar();
      clickFn();

        if (temp !== "") chkDate(temp);
        calendarBg.classList.add("block");
        calendar.classList.add("block");
    };

    // calendarBg를 클릭할 때
    calendarBg.onclick = () => {

      // 바깥쪽 클릭시 년,월 초기화!
      currentMonth = currentDate.getMonth();
      currentYear = currentDate.getFullYear();
      
        calendarBg.classList.remove("block");
        calendar.classList.remove("block");
    };

    // 날짜를 클릭할 때
    let dates = qsa(".calendar-grid .grid-cell.date");
    dates.forEach(function (date) {
        // console.log(333);
        date.onclick = function () {
            // let year = qs(".calendar-nav .contents_con .date .year").textContent;
            // let month = monthArray.indexOf(qs(".calendar-nav .contents_con .date .month").textContent) + 1;
            // let clickedDate = this.textContent;

            // if (month < 10) {
            //     month = "0" + month;
            // }

            // if (clickedDate < 10) {
            //     clickedDate = "0" + clickedDate;
            // }
            // console.log(this);
            
            // 이동버튼 상태값 변경
            mvBtnSts = 0;

            datepicker.value = this.querySelector("span").getAttribute("data-d");
            calendarBg.classList.remove("block");
            calendar.classList.remove("block");

            temp = datepicker.value;

            //   Calendar();

            console.log("달력날짜클릭:",temp);
        };
    });
} /////////// clickFn 함수 ///////////////////////////

// 최초 클릭이벤트 설정함수 호출
clickFn();
