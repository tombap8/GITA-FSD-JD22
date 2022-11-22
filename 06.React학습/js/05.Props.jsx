// 05.Props JSX

/********************************************************** 
    [ 리액트 Props ]
    1. 리액트 구성요소에 전달되는 인수다!(전달변수)
    2. HTML 속성을 통해서 구성요소에 전달된다
    3. props는 속성이다.
    4. JS 함수에 셋팅되는 전달변수와 HTML속성과 동일함
    5. 컴포넌트로 보내기 위해서는 HTML속성과 동일한 구문사용
**********************************************************/

//// 자기차를 소개하는 컴포넌트1 ////////
function Car(props){
    // 일반함수에서는 전달변수를 여러개 썼으나
    // 컴포넌트에 전달하는 props는 하나로 여러개사용 가능!
    // 사용법: props.속성명
    return(
        <React.Fragment>
            <h2>나의 차는 {props.brand}입니다!</h2>
        </React.Fragment>
    );

} ////////// Car 컴포넌트 /////////////////

//// 자기차를 소개하는 컴포넌트2 ////////
function Car2(props){
    // 일반함수에서는 전달변수를 여러개 썼으나
    // 컴포넌트에 전달하는 props는 하나로 여러개사용 가능!
    // 사용법: props.속성명
    return(
        <React.Fragment>
            <h2>모델명은 {props}이고 차색은 {props}입니다!</h2>
            <img src="./images/ray.png" alt="레이" />
        </React.Fragment>
    );

} ////////// Car 컴포넌트 /////////////////

///// 차종류를 물어보는 컴포넌트 - Car컴포넌트 호출 ////
function Brand(){
    return(
        <React.Fragment>
            <h1>당신의 차는 무슨차죠?</h1>
            <Car brand="기아레이" />
            {/* 컴포넌트 호출시 속성셋팅함 */}
        </React.Fragment>
    );
} //////// Brand 컴포넌트 //////////////

// 출력하기 //////
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<div><Brand /></div>)

