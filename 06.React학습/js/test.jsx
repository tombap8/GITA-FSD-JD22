// 06.Event JSX

/****************************************************** 
    [ 리액트 이벤트 ]
    1. 일반 HTML DOM 이벤트와 마찬가지로 사용자 이벤트 
    사용 가능함
    2. 이벤트 종류: click, change, mouseover 등 일반 이벤트
    3. 이벤트 표기볍: 캐물케이스 - 첫글자 소문자 단어마다 대문자
        -> 예) onclick -> onClick
    4. 이벤트 핸들러 : 중괄호 안에 작성(중괄호는 JSX표현식영역)
        -> 예)onclick="shoot()" => onClick={shoot}
******************************************************/

// 전체 이벤트를 적용할 컴포넌트 구성하기 //
// 1. 슛날리기하면 글자출력
// 2. 다시 슛날리기를 하면 공이미지 출력
// 3. 공을 클릭하면 일반 함수기능 호출
// -. 소원을 빌면 알라딘 이미지 출력 메서드 -> 다른함수로 구현
// 4. 이벤트 적용할 버튼들이 출력됨
// 컴포넌트명 : EventShow
function EventShow() {
    // 1. 슛날리면 글자출력
    const shoot = () => {
      alert("멋진슛이야~~~!");
    }; //// show 메서드 ////
  
    // 2. 다시 슛날리기하면 공이미지 출력
    const shoot2 = (ss) => {
      alert("공은 어디있는겨?" + ss);
  
      const ball = ReactDOM.createRoot(document.getElementById("ball"));
      ball.render(<Ball isrc={ss} />);
      // Ball 컴포넌트 호출함!
    }; //// shoot2메소드 /////
  
    // 3 . 소원을 빌면 알라딘 이미지 출력 메서드
    const aladin = (lamp) => {
      alert("소원이 무엇이냐!!!!!" + lamp);
  
      // 외부 alaLamp 컴포넌트 호출
      const hope = ReactDOM.createRoot(document.getElementById("ala"));
      hope.render(<AlaLamp isrc={lamp} />);
    }; // 알라딘 메서드 //
  
    // 4. 이벤트를 적용할 버튼들이 출력됨
    return (
      <React.Fragment>
        <img
          src="./images/logoM.png"
          onMouseOver={() => {
            aladin("./images/ala4.jpg");
          }}
        />
        {/* 첫번쨰 슛버튼 */}
        <button onClick={shoot}>골을 퉁 차봐!</button>
        {/* 두번째 슛버튼 onClick 이벤트 적용! (메서드 전달값 있음)*/}
        <button
          onClick={() => {
            shoot2("./images/ball.jpg");
          }}
        >
          기합이 작다! 다시 차도록!!!!!!!!!!!!!!
        </button>
      </React.Fragment>
    );
  } // EventShow 컴포넌트 //
  
  // 알라딘 이미지 출력 컴포넌트
  function AlaLamp(props) {
    return <img src={props.isrc} alt="알라딘램프" />;
  } // ala램프 컴포넌트
  
  //// 최초 출력 호출하기 ////
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<EventShow />);