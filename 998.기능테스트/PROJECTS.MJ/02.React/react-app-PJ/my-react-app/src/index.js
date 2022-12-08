// index.js는 상단 public/index.html에 적용되는 컴포넌트다.
// 리액트 돔에 클리이언트를 실행해주는 코드
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 상단 라우터를 이용해서 컴포넌트를 움직일수 있게 임포트한것!
import Layout from "./PMJ-bold/LAYOUT";
/********************************************************************** 
        [ 리액트 라우터 ]

        -> 컴포넌트를 연결하여 특정 이벤트에 모듈을 변경해주는 중계역할을함

        1. <BrowserRouter> - 라우터 Root 
        2. <Routes> - 개별 라우터를 묶어주는 역할
        3. <Route> - 개별 라우터
            속성 -> path : 경로를 지정함(LInk의 to속성 경로와 일치함!)
                -> element : 연결할 컴포넌트지정
            -> Root역할을 하는 <Route>는
            다른 하위 <Route>를 가질 수 있다! -> Layout 컴포넌트
            예) 
            <Route path="/">
                <Route />
                <Route />
            </Route>
***********************************************************************/
// 라우터를 이용한 컴포넌트 구성하기!
// 컴포넌트 내보내기 해야함! export default
function PMJ_APP() {
    /// root0에 뿌릴 가로의 앨범 집약 슬라이드임!!!!!!
    return (
        // 라우터 Root
        <BrowserRouter>
            {/* <Routes> - 개별 라우터를 묶어주는 역할 */}
            <Routes>
                {/* <Route> - 개별 라우터 - 이부분은 레이아웃(가로부분에) */}
                <Route path="/" element={<Layout />} />
            </Routes>
        </BrowserRouter>
    ); ///////// return ///////////
} /////////////// PMJ_APP /////////////////////

const root0 = ReactDOM.createRoot(document.getElementById("root0"));
root0.render(<PMJ_APP />);
