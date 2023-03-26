// 달력 생성자함수 /////

// 호출
// MakeDallyeok();

function MakeDallyeok(obj) {
    // 선택함수 //////
    this.qs = (x) => document.querySelector(x);
    this.qsa = (x) => document.querySelectorAll(x);
    // 메시지 /////
    this.cg = (x) => console.log(x);

    // 0. 최초 달력코드 넣기
    this.qs(obj).innerHTML = insertHcode();

    // 1. 변수셋팅 /////////////

    // (1) 변경할 현재날짜 객체
    this.curr_date = new Date();
    // (2) 오늘날짜 객체
    this.today = new Date();
    // (3) 년도요소 : .yearTit
    this.yearTit = this.qs(obj+" .yearTit");
    // (4) 월요소 : .monthTit
    this.monthTit = this.qs(obj+" .monthTit");
    // (5) 날짜요소 : .dates
    this.dates = this.qs(obj+" .dates");

    this.cg(this.dates);

    // 2. 함수 만들기 /////////////////
    // (1) 달력 초기화구성 함수 ////////
    this.initDallyeok = () => {
        // getMonth() 정보는 항상 현재달 숫자보다 1작음(배열순번임!)

        // 1. 전달 마지막 날짜(옵션:0) -> 달력 전달끝쪽 날짜표시
        this.prevLast = new Date(this.curr_date.getFullYear(), this.curr_date.getMonth(), 0);
        // cg(prevLast);

        // 2. 현재달 첫째날짜(옵션:1-> 전달로 셋팅)
        // -> 달력 전달셋팅을 위한 요일 구하기 위해!
        this.thisFirst = new Date(this.curr_date.getFullYear(), this.curr_date.getMonth(), 1);
        // cg(thisFirst);

        // 3. 현재달 마지막날짜(옵션:0)
        // -> 현재달력 날짜셋팅위해!
        this.thisLast = new Date(this.curr_date.getFullYear(), this.curr_date.getMonth() + 1, 0);
        // cg(thisLast);

        // 4. 년도표시하기
        this.yearTit.innerHTML = this.curr_date.getFullYear();

        // 5. 월표시하기 : 현재달 숫자는 getMonth()+1
        this.monthTit.innerHTML = this.curr_date.getMonth() + 1;

        // 6. 날짜넣을 배열변수 만들기
        this.dset = [];

        // 7. 전달 날짜 앞쪽 채우기
        // 조건: 현재달첫날짜 요일이 0이 아니면 내용있음!
        // cg(thisFirst.getDay());
        if (this.thisFirst.getDay() !== 0) {
            // for문 셋팅 : 몇바뀌돌리나? 요일순번보다 작을때까지++
            for (let i = 0; i < this.thisFirst.getDay(); i++) {
                // cg(i);
                // 반복횟수 만큼 배열 앞쪽에 추가한다!
                // 전달 마지막 날짜부터! -> prevLast.getDate()
                this.dset.unshift(`
                <span style="color:#ccc" class="bdt">
                    ${this.prevLast.getDate() - i}
                </span>`);
                // 마지막날짜 - i증가변수 = 1씩작아지는 숫자추가됨
                // unshift() 배열 앞에 값을 추가하는 메서드
            } ///////// for /////////////
        } //////////// if //////////////

        // 2. 현재월 삽입하기 ///////////////////
        // 반복문 구성: 현재월 1일부터 마지막날짜까지 반복 배열추가
        // 현재월마지막날짜 : thisLast.getDate()
        for (let i = 1; i <= this.thisLast.getDate(); i++) {
            this.dset.push(i);
        } /////////////// for ///////////////////

        // 3. 다음달 나머지 칸 삽입하기
        // 반복구성: 1부터 2주분량정도 넣는다!
        for (let i = 1; i < 14; i++) {
            this.dset.push(`
            <span style="color:#ccc" class="bdt">${i}</span>`);
        } /////////// for /////////////////

        // cg(this.dset);

        // 화면에 뿌릴 html변수
        let hcode = "";

        // 4. 날짜만큼 배열정보로 셋팅하기 //////
        // 7일 * 6주 = 42개
        for (let i = 0; i < 42; i++) {
            // 오늘날짜 표시
            if (
                // 년,월,일이 모두 일치하는 오늘만 표시(클래스 today)
                this.today.getDate() == this.dset[i] &&
                this.today.getMonth() == this.curr_date.getMonth() &&
                this.today.getFullYear() == this.curr_date.getFullYear()
            ) {
                hcode += `<div class="date today">${this.dset[i]}</div>`;
            } else {
                hcode += `<div class="date">${this.dset[i]}</div>`;
            }
        } ////////// for /////////////////

        // 5. 코드 화면에 넣기 //////
        // 대상: .dates -> dates변수
        this.dates.innerHTML = hcode;

        // 각 날짜 .date 요소에 링크설정하기
        this.qsa(obj+" .date").forEach(
            (ele) =>
                (ele.onclick = () => {
                    // 년
                    let cyear = this.yearTit.innerText;
                    // 월
                    let cmonth = this.monthTit.innerText;
                    // 일
                    let cdate = ele.innerText;

                    // 최종날짜 데이터
                    let comp = cyear + "-" + this.addZero(cmonth) + "-" + this.addZero(cdate);

                    this.cg(comp);
                    this.qs(obj+" .calender").style.display = "none";
                    this.qs(obj+" .calender").parentElement.previousElementSibling.value = comp;
                })
        );
    }; ///////// initDallyeok 함수 //////

    // 0자릿수 만들기 함수 ////////
    this.addZero = (x) => (x < 10 ? "0" + x : x);
    // 보낸숫자가 10보다 작으면 앞에 "0"을 더해서 리턴함!

    // this.initDallyeok(); /// 최초호출!

    // (2) 이전달력 출력하기 함수 //////////////
    this.prevCal = () => {
        // 이전월로 변경하여 initDallyeok()함수호출
        // getMonth() 월가져오기 / setMonth() 월 셋팅하기!
        this.curr_date.setMonth(this.curr_date.getMonth() - 1);
        this.initDallyeok();
    }; ////////////// prevCal함수 //////////////

    // (3) 다음달력 출력하기 함수 //////////////
    this.nextCal = () => {
        // 다음월로 변경하여 initDallyeok()함수호출
        // getMonth() 월가져오기 / setMonth() 월 셋팅하기!
        this.curr_date.setMonth(this.curr_date.getMonth() + 1);
        this.initDallyeok();
    }; ////////////// prevCal함수 //////////////

    // (4) 달력HTML코드 넣기 함수 /////////////
    function insertHcode(){
        return `
        <!-- 달력전체박스 -->
        <div class="calender">
          <!-- 달력상단:해당년/월표시 -->
          <header class="header">      
            <!-- 달력이동버튼:이전 -->
            <button class="mbtn btnL">〈</button>
            <div class="title">
              <div class="yearTit"></div>
              <div class="monthTit"></div>
            </div>
            <!-- 달력이동버튼:다음 -->
            <button class="mbtn btnR">〉</button>
          </header>
          <!-- 달력날짜표시박스 -->
          <section class="main">
            <!-- 주단위 구분박스 -->
            <div class="week">
              <div class="day">Sun</div>
              <div class="day">Mon</div>
              <div class="day">Tue</div>
              <div class="day">Wed</div>
              <div class="day">Thu</div>
              <div class="day">Fri</div>
              <div class="day">Sat</div>
            </div>
            <!-- 해당월의 달력날짜 구성박스 -->
            <div class="dates"></div>
          </section>
        </div>
        `;

    } ///////////// insertHcode 함수 /////////

    // 버튼에 클릭설정하기 ///
    this.qs(obj+" .btnL").onclick = this.prevCal;
    this.qs(obj+" .btnR").onclick = this.nextCal;
} //////////// MakeDallyeok //////////////

// 생성자함수 내보내기 /////
export default MakeDallyeok;