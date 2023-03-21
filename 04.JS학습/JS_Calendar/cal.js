// 모듈 JS

let han_dayName = new Array("일", "월", "화", "수", "목", "금", "토");

function MyCal(yy, mm) {
    // Calendar 객체에 속한 함수 등록
		this.setDates = setDates;		// 해당월의 데이터 배열 생성
        this.myYear=yy;					// 조회할 년
		this.myMonth=mm;					// 조회할 월(month:0~11)
		this.myDate;					// 조회할 일
    console.log(this.myYear, this.myMonth);
    console.log(han_dayName[getFirstDay(yy, mm)]);
    console.log(setDates);
}

/* 4. 날짜 관련된 함수 구현  */

// 조회 년월의 일수 구함
function getDaysOfMonth(year, month) {
    "use strict";
    /* 
			Check for leap year .. 
			1.Years evenly divisible by four are normally leap years, except for... 
			2.Years also evenly divisible by 100 are not leap years, except for... 
			3.Years also evenly divisible by 400 are leap years. 
			*/
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            return DOMonth[month];
        }
        return lDOMonth[month];
    } else {
        return DOMonth[month];
    }
} /////// getDaysOfMonth함수 ///////////////////////
/////////////////////////////////////////////////////

// 첫번째 요일 구하기
function getFirstDay(year, month) {
    let tmpDate = new Date();
    tmpDate.setDate(1);
    tmpDate.setMonth(month);
    tmpDate.setFullYear(year);

    return tmpDate.getDay();
}

// 마지막 요일 구하기
function getLastDay(year, month) {
    let tmpDate = new Date();
    tmpDate.setDate(getDaysOfMonth(year, month));
    tmpDate.setMonth(month);
    tmpDate.setFullYear(year);

    return tmpDate.getDay();
}

// 해당월의 데이터 배열 생성
function setDates() {
    let dates = new Array(); // dates = { '&npsp;', '', 1, 2, 3, 4, ...27,.. '&npsp;' };
    let firstDay = getFirstDay(this.myYear, this.myMonth); // 첫번째 요일의 숫자값
    let lastDay = getLastDay(this.myYear, this.myMonth); // 마지막 요일의 숫자값
    let daysOfMonth = getDaysOfMonth(this.myYear, this.myMonth); // 28, 29, 30, 31 중 하나
    let firstDate = 1;

    for (let i = 0; i < firstDay; i++) dates[i] = "";
    for (let i = firstDay; i < daysOfMonth + firstDay; i++) {
        dates[i] = firstDate;
        firstDate++;
    }

    let len = dates.length;
    for (let i = 0; i < 6 - lastDay; i++) {
        dates[len + i] = "";
    }
    return dates;
}


// 조회된 년
function getYear() {
    return this.myYear;
}

function getMonth() {
    return (this.myMonth + 1);
}