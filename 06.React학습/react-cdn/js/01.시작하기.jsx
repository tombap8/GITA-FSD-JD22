// 01.시작하기 리액트 JS
// html태그와 JS문법을 따옴표 없이 사용하는 JSX문법을 쓴다!
// JSX(Javascript XML) 문법을 쓰는 파일은 .js 대신 .jsx 확장자를씀
// return (jsx문법적용 태그->따옴표없이 바로 사용)
// 홀로태그는 꼭 닫기문법적용(xml문법) -> 예) <br />

// 함수명은 첫글자가 반드시 반드시 반드시!!! 대문자로 시작!
// 아니면 안나옴! (원래는 클래스 기반에서 구현된것이므로 클래스가
// 원래 첫글자가 대문자로 시작된다!!!)
function MyFirstReact() {
    return (
        <div>
            <h1>잘해보자! 리액트!!!</h1>
            <h2>
                [ 리액트란? ] <br /><br />
                # 프론트엔드 JS 라이브러리다!
                # 사용자 UI의
                구성요소를 빌드하기 위한도구 <br />
                [ 작동원리 ] <br /><br />
                # 가상돔(Virtual
                DOM)을 사용하여 최소의 html리소스를 사용함으로 <br />
                빠르고 쉽게 UI화면의 구성한다! <br />
                # 가상돔은 실제DOM을 변경하기전에
                메모리상에서 구성하는 가짜 DOM이다! <br />
                # 변경사항을 한번에 구성하여
                반영하기 위한도구다!<br />
                # 리액트는 변경하고자 하는 부분만 업데이트
                가능함!<br />
            </h2>
        </div>
    );
} //////// MyFirstReact 함수 ///////////

// 리액트로 html요소 페이지 요소에 삽입하기!
// 가상돔을 셋팅하는 리액트 객체를 부른다! -> ReactDOM
// render() -> 요소를 변경하는 메서드
// ReactDOM.render(요소를 리턴하는 함수명으로된 홀로태그를씀,넣을요소)
// 요소를 리턴하는 함수명으로된 홀로태그를씀 -> MyFirstReact함수이므로
// ->>> <MyFirstReact />
// JSX문법이므로 따옴표로 안싼다!!!
// 넣을요소 -> 01.시작하기.html 페이지의 div.mydiv요소를 선택함!
// document.querySelector(".mydiv")
ReactDOM.render(<MyFirstReact />,document.querySelector(".mydiv"));
