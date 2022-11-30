// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./DC/Layout";
import CHARACTERS from "./DC/CHARACTERS";
import COMICS from "./DC/COMICS";
import GAMES from "./DC/GAMES";
import MOVIES from "./DC/MOVIES";
import NEWS from "./DC/NEWS";
import VIDEO from "./DC/VIDEO";

/* 
    [ 리액트 라우터 ]
    -> 컴포넌트 연결하여 특정 이벤트에 모듈을 변경해주는 중계역할을함
    1. <BrowserRouter> - 라우터 Root
    2. <Routes> - 개별 라우터를 묶어주는 역할
    3. <Route> - 개별 라우터
        속성 -> path : 경로를 지정함(Link의 to속성 경로와 일치함!)
            -> element : 연결할 컴포넌트지정
        -> Root역할을 하는 <Route>는 
        다른 하위 <Route>를 가질 수 있다! -> Layout 컴포넌트
        예) 
        <Route path="/">
            <Route />
            <Route />
        </Route>
*/

// 라우터를 이용한 컴포넌트 구성하기!
// 컴포넌트 내보내기 해야함! export default
export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                {/* 레이아웃 컴포넌트를 루트로 잡아준다! */}
                <Route path="/" element={<Layout />} >
                    {/* path대신 index만 쓰면 첫페이지임! */}
                    <Route index element={<MOVIES />} />
                    <Route path="ct" element={<CHARACTERS />} />
                    <Route path="co" element={<COMICS />} />
                    <Route path="gm" element={<GAMES />} />
                    <Route path="mv" element={<MOVIES />} />
                    <Route path="nw" element={<NEWS />} />
                    <Route path="vd" element={<VIDEO />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


// index.html의 div#root에 <App /> 컴포넌트 출력 지정하기!
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
