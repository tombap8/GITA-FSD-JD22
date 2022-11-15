// 03.JSX.js 

/******************************************************* 
    [ JSX란 무엇인가? ]
    - Javascript XML을 나타냄
    - 리액트에서 HTML을 쉽게 작성할 수 있다.
    - appendChild() 메서드 없이 DOM에 요소넣기 가능하다!
*******************************************************/

// [ JSX를 사용한 것과 사용안한 것을 비교 ] ///

// 1. JSX를 사용한 예 ///////////////////
// 넣을 요소
const myele1 = <h1>나는 JSX를 사용하고 있어!</h1>;
// 리액트 루트생성하기 : createRoot() 메서드 사용!
const root1 =  ReactDOM.createRoot(
    document.querySelectorAll("#root div")[0]);
// 적용하기 : 생성된 루트에 render()메서드를 붙여서 쓸 수 있다!
root1.render(myele1);

/********************************************* 
    [ 출력방식 정리! ]
    1. 한꺼번에 쓰기
    ReactDOM.render(출력할요소,출력요소)

    2. 따로쓰기
    1) 변수 = ReactDOM.createRoot(출력요소)
    2) 변수.render(출력할요소)
*********************************************/

// 2. JSX 를 사용하지 않한 예 //////////////////

// 넣을 요소를 createElement()메서드로 생성함(JSX쓰지않고...)
const myele2 = 
React.createElement("h1",{},"나는 JSX를 쓰지 않아!");
// createElement(요소명,{JS코드작성},요소내용)

// 리액트 루트생성하기 : createRoot() 메서드 사용!
const root2 = ReactDOM.createRoot(
    document.querySelectorAll("#root div")[1]);
// 적용하기 : 생성된 루트에 render()메서드를 붙여서 쓸 수 있다!
root2.render(myele2);

/********************************************* 
    위 두가지 방식 
    즉, JSX를 사용하거나 안쓸 수 있다!

    JSX는 ES6 기반의 자바스크립트 언어의 확장이며
    런타임 시에 일반 자바스크립트로 변환된다!

    __________________________________________

    [ JSX 표현식 ]
    JSX를 사용하면 중괄호에 표현식을 작성할 수 있음
    {...... 표현식 ......}

    표현식이란 React변수, 속성, JS문법 등의 내용임

*********************************************/

// 3. JSX 표현식 사용하기
