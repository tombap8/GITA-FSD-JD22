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
const root1 = ReactDOM.createRoot(document.querySelectorAll("#root div")[0]);
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
const myele2 = React.createElement("h1", {}, "나는 JSX를 쓰지 않아!");
// createElement(요소명,{JS코드작성},요소내용)

// 리액트 루트생성하기 : createRoot() 메서드 사용!
const root2 = ReactDOM.createRoot(document.querySelectorAll("#root div")[1]);
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

let num1 = 1000;
let num2 = 7;

// 3. JSX 표현식 사용하기
const myele3 = <h1>리액트는 {num1 * num2} 번 사용해도 좋다!</h1>;
const root3 = ReactDOM.createRoot(document.querySelectorAll("#root div")[2]);
root3.render(myele3);

/*********************************************************** 
    [ JSX 태그요소 작성시 여러줄일 경우 ]
    1. 최상위를 하나 만들고 여러요소를 작성한다!
    2. 소괄호로 전체를 싸준다!

    - 지원되는 스타일:
    1) <>태그들</>
    2) <Fragment>태그들</Fragment>
    3) <기존태그>태그들</기존태그>

    -> 1),2)번은 CDN방식에서는 지원안함!(설치형SPA지원!)
    -> 2)번 CDN에서 사용하려면 아래와 같이 사용한다!
        <React.Fragment></React.Fragment>
    -> 1),2)번을 사용하는 이유는 쓸때 없는 태그삽입을 막는데있다!
    -> 기존태그는 <div>,<section> 등 원래있는 html태그를 말함
        (단점, 원하는 않는 태그가 삽입됨!!!)

***********************************************************/
const myele4 = (
    <React.Fragment>
        <h2>[ 다수의 HTML요소 블록 삽입 ]</h2>
        <ul>
            <li>프론트앤드개발</li>
            <li>리액드사용개발</li>
            <li>백앤드개발</li>
        </ul>
    </React.Fragment>
);
const root4 = ReactDOM.createRoot(document.querySelectorAll("#root div")[3]);
root4.render(myele4);

//// 5번에는 내가 원하는 태그요소를 출력해 본다!

const myele5 = (
    <React.Fragment>
        <h2>나의 리액트 JSX출력!</h2>
        <ul>
            <li>리액트 메뉴1</li>
            <li>리액트 메뉴2</li>
            <li>리액트 메뉴3</li>
            <li>리액트 메뉴4</li>
        </ul>
    </React.Fragment>
);
const root5 = ReactDOM.createRoot(document.querySelectorAll("#root div")[4]);
root5.render(myele5);

/***************************************************** 
    [ JSX는 홀로태그이더라도 끝에 닫기해줘야함! ]
    예) <br> -> <br />
        <input type="text"> -> <input type="text" />
*****************************************************/
const myele6 = <input type="text" value="홀로태그는 스스로 닫아라!" />;
const root6 = ReactDOM.createRoot(document.querySelectorAll("#root div")[5]);
root6.render(myele6);
/**************************************************** 
    [ JSX에서 속성클래스는 className 으로 표기한다! ]
    <태그 class="클래스명">
    class는 JS에서 키워드이므로 사용못함! 대신...
    <태그 className="클래스명">
****************************************************/
const myele7 = <h1 className="myclass">className속성으로 클래스셋팅!!!</h1>;
const root7 = ReactDOM.createRoot(document.querySelectorAll("#root div")[6]);
root7.render(myele7);

/********************************************************** 
    [ JSX에서 조건문 사용하기 - if문 ]
    리액트는 if명령문을 지원하지만
    JSX내부에서는 지원하지 않는다!

    JSX에서 조건문을 사용하려면?
    JSX 외부에서 if문을 사용하거나
    아니면 내부에서 삼항연산자를 사용할 수 있다!
**********************************************************/
// JSX외부에서 if문 사용하기
const x = 1000;
let txt = "이 돈으로는 충분히 살 수 있어!";
if (x < 10000) {
    txt = "돈이 부족해서 살 수 없어!";
} /////// if ///////

const myele8 = <h1>{txt}</h1>;
const root8 = ReactDOM.createRoot(document.querySelectorAll("#root div")[7]);
root8.render(myele8);

// JSX 표현식에 삼항연산자 사용하기

let time = 8;

const myele9 =( 
    <React.Fragment>
        <h1>지금 몇시지? {time}시야!</h1>
        <h1>{time > 9 ? "지금 집에 들어와!" : "더 놀다와~!"}</h1>
    </React.Fragment>
);
const root9 = ReactDOM.createRoot(
    document.querySelectorAll("#root div")[8]);
root9.render(myele9);
