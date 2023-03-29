function MakeDallyeog() {
    this.curr_date = new Date();
    this.today = new Date();
    this.yearTit = document.querySelector(".yearTit");
    this.monthTit = document.querySelector(".monthTit");
    this.dates = document.querySelector(".dates");

    this.initDalleok = () => {
        // getMonth() 정보는 항상 현재달 숫자보다 1작음(배열순번으로 리턴함!)
        // 1. 전달 마지막날짜(옵션:0)
        const prevLast = new Date(this.curr_date.getFullYear(), this.curr_date.getMonth(), 0);
        // 2. 현재달 첫째날짜(옵션:1->전달로해야 이번달첫날짜 나옴!)
        const thisFirst = new Date(this.curr_date.getFullYear(), this.curr_date.getMonth(), 1);
        // 3. 현재달 마지막날짜(옵션:0)
        const thisLast = new Date(this.curr_date.getFullYear(), this.curr_date.getMonth() + 1, 0);

        // 4. 년도표시하기
        this.yearTit.innerHTML = this.curr_date.getFullYear();
        // 5. 월표시하기
        this.monthTit.innerHTML = this.curr_date.getMonth() + 1;
        // 6. 날짜넣을 배열 셋팅하기
        const dates = [];
        // 전달 나머지 칸 삽입하기
        if (thisFirst.getDay() != 0) {
            for (let i = 0; i < thisFirst.getDay(); i++) {
                dates.unshift(`<span style="color:#ccc" class="bm">${prevLast.getDate() - i}</span>`);
            }
        }
        // 현재월 삽입
        for (let i = 1; i <= thisLast.getDate(); i++) {
            dates.push(i);
        }
        // 다음달 나머지 칸 삽입하기
        for (let i = 1; i <= 14; i++) {
            dates.push(`<span style="color:#ccc" class="am">${i}</span>`);
        }
        let htmlDates = "";
        for (let i = 0; i < 42; i++) {
            if (this.today.getDate() == dates[i] && this.today.getMonth() == this.curr_date.getMonth() && this.today.getFullYear() == this.curr_date.getFullYear()) {
                htmlDates += `
                <div class="date today">${dates[i]}</div>`;
            } else {
                htmlDates += `
                <div class="date">${dates[i]}</div>`;
            }
        }
        this.dates.innerHTML = htmlDates;

        // 링크설정
        document.querySelectorAll(".date")
        .forEach(ele=>{
            ele.onclick = () => {

                let cyear = this.yearTit.innerText;
                let cmonth = this.monthTit.innerText;
                let cdate = ele.innerText;

                let isSpan = ele.querySelector("span");
                if(isSpan){
                    let cls = isSpan.getAttribute("class");
                    console.log(cls);
                    if(cls==="bm"){
                        cmonth = Number(cmonth) - 1;
                        if(cmonth==0){
                            cmonth=12;
                            cyear = Number(cyear)-1;
                        }
                    }
                    else if(cls==="am"){
                        cmonth = Number(cmonth) + 1;
                        if(cmonth==13){
                            cmonth=1;
                            cyear = Number(cyear)+1;
                        }

                    }
                } ///////////// if /////////////

                // 10미만처리
                cmonth = this.addZero(cmonth);
                cdate = this.addZero(cdate);

                let info = cyear + "-" + cmonth + "-" + cdate;

                console.log(info);
                console.log("[2023-09-12/2023-90-14]기간구하기:",
                this.getDateDiff("2023-09-12", "2023-09-14"));
            }
        })
    }; ///////// initDalleok /////////////

    // 0자리 만들기
    this.addZero = (x) => (x < 10 ? "0" + x : x);

    // 날짜기간계산하기
    this.getDateDiff = (dt1, dt2) => {
        const date1 = new Date(dt1);
        const date2 = new Date(dt2);
        
        // getTime() - UTC 시간을 millisecond로 리턴
        // Universal Time Coordinated (UTC) - 세계협정시
        const diffDate = date1.getTime() - date2.getTime();
        return Math.abs(diffDate / (1000 * 60 * 60 * 24)); 
        // 밀리세컨 * 초 * 분 * 시 = 일
      }

    // 이전달력출력하기
    this.prevCal = () => {
        this.curr_date.setMonth(this.curr_date.getMonth() - 1);
        this.initDalleok();
    };

    // 다음달력출력하기
    this.nextCal = () => {
        this.curr_date.setMonth(this.curr_date.getMonth() + 1);
        this.initDalleok();
    };
} /////////////// MakeDallyeog //////////////////

export default MakeDallyeog;
