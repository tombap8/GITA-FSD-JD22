// 06.Event JSX

/************************************************************* 
    [ 리액트 이벤트 ]
    1. 일반 HTML DOM 이벤트와 마찬가지로 사용자이벤트 사용가능함
    2. 이벤트 종류: click, change, mouseover 등 일반이벤트
    3. 이벤트 표기법: 캐믈케이스 - 첫글자소문자 단어마다 대문자
    예) onclick -> onClick
    4. 이벤트 핸들러 : 중괄호 안에 작성(중괄호는 JSX표현식영역)
    예) onclick="getIt()" => onClick={getIt}
*************************************************************/

// 전체 이벤트를 적용할 컴포넌트 구성하기 ////
// 1. 슛날리기하면 글자출력
// 2. 다시 슛날리기하면 공이미지 출력
// -> 공을 클릭하면 일반 함수 기능 호출! -> 다른함수로 구현
// 3. 소원을 빌면 알라딘 이미지 출력 메서드
// 4. 이벤트 적용할 버튼들이 출력됨
// 컴포넌트명: EventShow()
function EventShow() {
    // 1. 슛날리기하면 글자출력
    const getIt = () => {
        let lamp =
        document.querySelector(".lamp");

        lamp.innerHTML = `
            <img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3168457870/B.png" alt="램프" />
        `;

        lamp.querySelector("img").style.cssText = `
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            border-radius: 50%;
            transition: 2s;
        `;

        setTimeout(()=>{
            lamp.querySelector("img").style.cssText = `
            position: absolute;
            top: 310px;
            right: calc(50% - 100px);
            width: 200px;
            border-radius: 50%;
            transform: rotate(720deg);
            transition: 2s ,right 1s 2s;
        `;

        },500);
        setTimeout(()=>{
            document.querySelectorAll("button")[1].style.display="inline-block";
        },3000);


    }; /////////// getIt 메서드 ////////

    // 2.다시 슛날리기하면 공이미지 출력
    const getIt2 = (ss) => {
        // alert("공은 어디있는겨?" + ss);

        const ferrari = ReactDOM.createRoot(document.getElementById("ferrari"));
        // Ferrari컴포넌트 호출함!
        ferrari.render(<Ferrari isrc={ss} />);
    }; /////////// getIt2 메서드 ////////

    // 3.소원을 빌면 알라딘 이미지 출력 메서드
    const aladin = (lamp) => {
        // alert("소원이 무엇입니까?"+lamp);
        document.querySelector("#wrap").innerHTML += `
            <h1 class="tit">소원이 무엇이냐?</h1>
        `;

        let tit = document.querySelector(".tit");
        tit.style.cssText = `
            width: 50%;
            padding: 50px 0;
            margin: 0 auto;
            border: 2px solid red;
            transition: all 2s 1s;
            opacity: 0;
        `;
        setTimeout(() => {
            tit.style.cssText = `
            width: 50%;
            padding: 50px 0;
            margin: 0 auto;
            border: 2px solid red;
            transition: all 2s 1s;
            opacity: 1;

            border-radius: 50%;
            transform: translateY(-200px);
            font-size: 40px;
            color: white;
            background-color: rgba(0,0,0,.5);
        `;
        }, 500);
        setTimeout(()=>{
            document.querySelectorAll("button")[0].style.display="inline-block";
        },3000);

        const hope = ReactDOM.createRoot(document.getElementById("ala"));
        // 외부 AlaLamp 컴포넌트 호출
        hope.render(<AlaLamp isrc={lamp} />);
    }; ////////// aladin 메서드 /////////

    // 4. 이벤트 적용할 버튼들이 출력됨
    return (
        <React.Fragment>
            <div style={{ textAlign: "center" }} id="wrap">
                {/* 소원을 말해봐 이미지 출력 : onmousover 이벤트 적용! */}
                <img
                    src="https://images.chosun.com/resizer/SFIqPKffr3HQHoHFOxKvnN-L2YU=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NVMCI5M33KHBCY4JVHDPWRCBYY.jpg"
                    onMouseOver={() => {
                        aladin("./images/ala4.jpg");
                    }}  
                />
                {/* 첫번째 슛 버튼 : onclick 이벤트 적용! */}
            </div>
            <div className="lamp"></div>
            <button onClick={getIt}>램프가져오기~!</button> <br />
            {/* 두번째 슛 버튼 : onclick 이벤트 적용!(메서드 전달값 있음) */}
            <button
                onClick={() => {
                    getIt2("https://www.pngplay.com/wp-content/uploads/13/Ferrari-458-Transparent-PNG.png");
                }}>
                소원빌기~!!! 페라리주세요~!!!
            </button>
        </React.Fragment>
    );
} //////////////// EventShow 컴포넌트 ////////////

// 알라딘 램프 이미지 출력 컴포넌트
function AlaLamp(props) {
    return <img src={props.isrc} alt="알라딘 램프" />;
} /////// AlaLamp 컴포넌트 ///////////

// 축구공 이미지 출력 컴포넌트
function Ferrari(props) {
    return (
        <img
            id="car"
            src={props.isrc}
            alt="페라리"
            title="클릭하면 시운전해요!"

            onClick={move}
        />
    );
    // 리액트 이벤트 설정시 일반함수도 연결가능함!
} /////// AlaLamp 컴포넌트 ///////////

// 일반 함수로 구현! 공움직이기! ////////////
let one = 1;
function move() {console.log(one);
    let car = document.getElementById("car");
    car.style.transform = one?"translateX(150%) scale(2)":"translateX(0) scale(1)";
    car.style.transition = "2s ease-in-out";

    one?one=0:one=1;
} ///////////// move함수 ///////////////////

/// 최초 출력 호출하기 /////////
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EventShow />);
