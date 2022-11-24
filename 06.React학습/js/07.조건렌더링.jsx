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

/////////////////////////////////////////////
// if문이 아닌 조건 표현하기
// -> (조건식) && JSX표현식
// 조건이 true일때만 && 뒤의 JSX표현식이 출력됨!
//////////////////////////////////////////////


// 리스트 반복찍기를 위한 컴포넌트
function CarList(props){ // 전달되는 속성명은 name
    return <li>나는 {props.name}입니다!</li>;
}

// 리스트를 출력하는 컴포넌트
// 내가 사고싶은 자동차 리스트
function WishList(props){ // 전달되는 속성명은 wlist
    const mycars = props.wlist;
    return(
        <React.Fragment>
            <h1>[ 자동차 위시리스트 ]</h1>
            {/* 자동차 리스트가 0보다 클때만 아래출력 */}
            {
                mycars.length > 0 &&  
                <div>
                    <h2>
                        내가 사고 싶은 자동차는 모두 {mycars.length}대입니다.
                    </h2> 
                    <ul>{
                        // 배열변수.map() 메서드로 배열을 자동순회한다!
                        // map((변수)=>{표현식})
                        // map(변수=>표현식)
                        // 변수는 화살표함수 안으로 배열값을 전달함
                        // CarList 컴포넌트에 전달되는 속성명은 name
                        mycars.map(x => <CarList name={x} />)
                    }</ul>
                </div>
            }
            
        </React.Fragment>
    );

} /////////////// WishList 컴포넌트 /////////////////////

const cars = ["제네시스","그랜져","롤스로이스","렉서스"];
// const cars = [];
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(<WishList wlist={cars} />);


///////// 조금 더 복잡한 속성을 전달하여 반복하는 위시리스트2 /////////

// 리스트 반복찍기를 위한 컴포넌트
function CarList2(props){ // 전달되는 속성명은 name
    return <li>{props.속성명} {props.name}입니다!</li>;
}

// 리스트를 출력하는 컴포넌트
// 내가 사고싶은 자동차 리스트
function WishList2(props){ // 전달되는 속성명은 wlist
    const mycars = props.wlist;
    return(
        <React.Fragment>
            <h1>[ 자동차 위시리스트 ]</h1>
            {/* 자동차 리스트가 0보다 클때만 아래출력 */}
            {
                mycars.length > 0 &&  
                <div>
                    <h2>
                        내가 사고 싶은 자동차는 모두 {mycars.length}대입니다.
                    </h2> 
                    <ul>{
                        // 배열변수.map() 메서드로 배열을 자동순회한다!
                        // map((변수)=>{표현식})
                        // map(변수=>표현식)
                        // 변수는 화살표함수 안으로 배열값을 전달함
                        // CarList 컴포넌트에 전달되는 속성명은 name
                        mycars.map(x => <CarList name={x} />)
                    }</ul>
                </div>
            }
            
        </React.Fragment>
    );

} /////////////// WishList 컴포넌트 /////////////////////

// 전달할 배열변수 할당하기 ///
// 배열안에 객체가 같은 구조로 들어감!
const cars2 = [
    {id:"첫번째", name:"레이"},
    {id:"두번째", name:"캐스퍼"},
    {id:"세번째", name:"티코"}
];
// 출력하기 ///
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(<WishList2 wlist={cars2} />);