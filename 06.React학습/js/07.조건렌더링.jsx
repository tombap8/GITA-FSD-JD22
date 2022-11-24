// 07.조건렌더링 JSX

// 리액트에서는 조건부로 구성요소를 랜더링 할 수 있다!

function MakeDev(){
    return <h1>나는 개발자야!</h1>;
}

function LostDev(){
    return <h1>개발자가 뭐지?</h1>;
}

// 메인 컴포넌트에서 위의 2가지 중 조건부로 컴포넌트 선택로딩
function Developer(props){ // 호출시 전달되는 속성명 isDev
    const isNow = props.isDev; // true / false
    // 조건문
    if(isNow){
        return <MakeDev />;
    }
    // else문이 없어도 if문에 들어가면
    // return문 때문에 함수를 나간다!
    return <LostDev />;

} //////// Developer 컴포넌트 //////

// 컴포넌트 호출출력
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Developer isDev={true} />);

// 컴포넌트 호출출력
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<Developer isDev={false} />);