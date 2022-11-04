// 영화정보 클래스 JS - mvInfo.js

class MovieInfo {
    // 생성자 메서드 : 주로 속성만 셋팅함!
    constructor(tit, sum, dir, act, des) {
        this.제목 = tit;
        this.개요 = sum;
        this.감독 = dir;
        this.출연 = act;
        this.문구 = des;
    } ////// constructor ///////

    // 내가 만들고자 하는 메서드는 아래에 따로생성한다!
    메서드(msg) {
        // msg 응원메시지 전달변수
        return `영화 ${this.제목}의 
                감독님 이름은 ${this.감독},
                나의 응원은 ${msg}`;
    }
} ////////// class /////////////////

// 클래스 내보내기
export default MovieInfo
// 선언적 함수나 클래스는 뒤에 세미콜론이 없으므로
// 내보낼때도 뒤에 세미콜론 쓰지말것을 JS에선 권고함!