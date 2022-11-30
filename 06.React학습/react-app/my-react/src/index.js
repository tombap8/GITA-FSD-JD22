// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
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
        속성 -> path : 경로를 지정함
            -> element : 연결할 컴포넌트지정
*/

// 라우터를 이용한 컴포넌트 구성하기!
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={} ></Route>
            </Routes>
        </BrowserRouter>
    );
}
