// 06.Event JSX

/************************************************************* 
    [ 리액트 이벤트 ]
    1. 일반 HTML DOM 이벤트와 마찬가지로 사용자이벤트 사용가능함
    2. 이벤트 종류: click, change, mouseover 등 일반이벤트
    3. 이벤트 표기법: 캐믈케이스 - 첫글자소문자 단어마다 대문자
    예) onclick -> onClick
    4. 이벤트 핸들러 : 중괄호 안에 작성(중괄호는 JSX표현식영역)
    예) onclick="shoot()" => onClick={shoot}
*************************************************************/

// 전체 이벤트를 적용할 컴포넌트 구성하기 ////
// 1. 슛날리기하면 글자출력
// 2. 다시 슛날리기하면 공이미지 출력
// -> 공을 클릭하면 일반 함수 기능 호출! -> 다른함수로 구현
// 3. 소원을 빌면 알라딘 이미지 출력 메서드
// 4. 이벤트 적용할 버튼들이 출력됨
// 컴포넌트명: EventShow()
function EventShow(){

    // 1. 슛날리기하면 글자출력
    const shoot = ()=>{
        alert("멋진 슛이야~~!");
    }; /////////// shoot 메서드 ////////

    // 2.다시 슛날리기하면 공이미지 출력
    const shoot2 = (ss) => {
        alert("공은 어디있는겨?"+ss);

        const ball = ReactDOM.createRoot(document.getElementById("ball"));
        // Ball컴포넌트 호출함!
        ball.render(<Ball isrc={ss} />);

    }; /////////// shoot2 메서드 ////////

    // 3.소원을 빌면 알라딘 이미지 출력 메서드
    const aladin = (lamp) => {
        alert("소원이 무엇입니까?"+lamp);

        const hope = ReactDOM.createRoot(document.getElementById("ala"));
        // 외부 AlaLamp 컴포넌트 호출
        hope.render(<AlaLamp isrc={lamp} />);
    }; ////////// aladin 메서드 /////////

    // 4. 이벤트 적용할 버튼들이 출력됨
    return(
        <React.Fragment>
            {/* 소원을 말해봐 이미지 출력 : onmousover 이벤트 적용! */}
            <img src="./images/logoM.png" 
            onMouseOver={()=>{aladin("./images/ala4.jpg")}} />
            {/* 첫번째 슛 버튼 : onclick 이벤트 적용! */}
            <button onClick={shoot}>골을 팡~!하고 차봐!</button>
            {/* 두번째 슛 버튼 : onclick 이벤트 적용!(메서드 전달값 있음) */}
            <button onClick={()=>{shoot2("./images/ball.jpg")}}>
                골을 팡~!하고 또차봐!
            </button>

        </React.Fragment>
    );

} //////////////// EventShow 컴포넌트 ////////////

// 알라딘 램프 이미지 출력 컴포넌트
function AlaLamp(props){
    return <img src={props.isrc} alt="알라딘 램프" />;
} /////// AlaLamp 컴포넌트 ///////////

// 축구공 이미지 출력 컴포넌트
function Ball(props){
    return <img id="bb" src={props.isrc} alt="축구공" title="클릭하시면 공이 날아가요!" onClick={move} />;
    // 리액트 이벤트 설정시 일반함수도 연결가능함!
} /////// AlaLamp 컴포넌트 ///////////

// 일반 함수로 구현! 공움직이기! ////////////
function move(){
    let bb = document.getElementById("bb");
    bb.style.transform = "translateX(200%) rotate(720deg)";
    bb.style.transition = "2s ease-in-out";
} ///////////// move함수 ///////////////////



/// 최초 출력 호출하기 /////////
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EventShow />);