// 메인 레이아웃 컴포넌트
import Logo from "./Logo";
import "./css/layout.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { gnb_data, bmenu } from "./data/common";
import $ from 'jquery';

/* 폰트어썸 임포트 */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import ScrollTop from "./common/ScrollTop";
/******************************************************* 
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    1. <Link to="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명"> 과 일치함!

    2. <Outlet />
    -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*******************************************************/

const Layout = () => {

    // 라우터 이동메서드 셋팅!
    const goNav = useNavigate();   


    // 자식컴포넌트 값 전달 테스트 함수
    const callMe = (x) => {
        console.log("누구?", x);
    }; ////////// callMe /////////////

    // 로그인 상태  Hook변수 : 로컬쓰 "minfo" 초기할당!
    const [logSts, setLogSts] = useState(localStorage.getItem("minfo"));
    // 로그인 환영메시지 Hook변수
    const [logMsg, setLogMsg] = useState("");
    // 로그인 환영메시지 스타일
    const logstyle = {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
    }; //////// logstyle ///////////

    // 로그인 셋팅 함수 //////////
    // -> ScrollTop.js 의 useEffect 함수구역에서 호출!
    const setLogin = () => {
        // 1. 로그인 Hook변수 업데이트하기
        setLogSts(localStorage.getItem("minfo"));

        // 2. 로컬쓰값이 null이 아니면 메시지 뿌리기
        if (localStorage.getItem("minfo")) {
            // 메시지 셋팅하기 : 객체안의 "unm"속성이 사용자이름!
            setLogMsg("Welcome " + JSON.parse(localStorage.getItem("minfo"))["unm"]);
        } ////////////// if ///////////////
    }; ///////// setLogin ////////////

    // 로그아웃 함수 ///////////////////
    // -> LOGOUT 버튼에서 호출함!
    const logout = () => {
        // 1. 로컬쓰 "minfo" 삭제하기
        localStorage.removeItem("minfo");
        // 2. 로그인상태 Hook 변수 업데이트하기
        setLogSts(null);
        console.log("로그아웃됨!", logSts);
    }; ////////////// logout ///////////

    // 검색창 보이기 함수 ///////
    const showSearch = () => {
        // 1. a요소숨기기
        document.querySelector(".searchingGnb+a")
        .style.opacity = "0";

        // 2. 검색창 보이기
        let tg =
        document.querySelector(".searchingGnb");
        tg.style.display = "block";
        tg.querySelector("input").focus();

    }; ////////// showSearch /////////////

    // 입력창에서 엔터키를 누르면 검색함수 호출!
    const enterKey = (e) => {
        if (e.key === "Enter") goSearch();
    }; //////////// enterKey 함수 ////////////

    // 검색페이지로 검색어와 함께 이동하기 //////
    const goSearch = () => {
        // 검색어 읽어오기
        let kw = document.querySelector(".searchingGnb input").value;
        console.log("검색어:",kw);
        // 라우터 이동하기 : 전달값 가져가기(검색어)
        goNav('/res',{state:{keyword:kw}})
    }; ///////////// goSearch ////////////////

    ///////// 상단메뉴 변경 함수 ///////////////
    // .top.on 이면 메뉴가 나타남!
    const chgMenu = () => $(".top").toggleClass('on');

    // 메뉴클릭시 닫기 부가기능 함수!
    const rmCls = () => $(".top").removeClass('on');


    return (
        <>
            {/* 라우터 갱신될때 스크롤 상단이동 모듈작동함!
            + 로그인셋팅함수 호출전달하기! 자식에게 setLogin함수전달 */}
            <ScrollTop sfn={setLogin} />
            {/* 1.상단영역 */}
            <header className="top">
                {/* 로그인 환영메시지 : 조건-logSts값이 null이 아니면 */}
                {logSts !== null && (
                    <div className="logmsg" style={logstyle}>
                        {logMsg}
                    </div>
                )}

                {/* 네비게이션 파트 */}
                <nav className="gnb">
                    <ul>
                        <li>
                            <Link to="/main">
                                <Logo gb="top" tt={callMe} />
                            </Link>
                        </li>
                        {gnb_data.map((v, i) => (
                            <li key={i} onClick={rmCls}>
                                <Link to={v.link}>{v.txt}</Link>
                                {/* {console.log(v.sub)} */}
                                {/* v.sub가 없으면 undefined */}
                                {
                                    // 조건식 && 출력코드
                                    // 조건: sub데이터가 없지 않으면
                                    // undefined - 정의되지 않은값
                                    // null - 빈값
                                    // 위의 두가지는 데이터가 없다는 값임!
                                    v.sub != undefined && (
                                        <div className="smenu">
                                            <ol>
                                                {v.sub.map((v, i) => (
                                                    <li key={i}>
                                                        <Link to={v.link}>{v.txt}</Link>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    )
                                }
                            </li>
                        ))}

                        <li style={{ marginLeft: "auto" }}>
                            {/* 검색입력박스 */}
                            <div className="searchingGnb">
                                {/* 검색버튼 돋보기아이콘 */}
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="schbtnGnb"
                                    title="Open search"
                                    onClick={goSearch}
                                />
                                {/* 입력창 */}
                                <input
                                    id="schinGnb"
                                    type="text"
                                    placeholder="Filter by Keyword"
                                    onKeyUp={enterKey}
                                />
                            </div>
                            {/* 검색기능링크 - 클릭시 검색창보이기! */}
                            <a href="#" onClick={showSearch}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        {
                            /* 회원가입,로그인은 로그인아닌 상태일때만 */
                            logSts === null && (
                                <>
                                    <li onClick={rmCls}>
                                        <Link to="/mem">Join Us</Link>
                                    </li>
                                    <li onClick={rmCls}>
                                        <Link to="/login">LOGIN</Link>
                                    </li>
                                </>
                            )
                        }

                        {
                            /* 로그아웃버튼은 로인인상태일때만 */
                            logSts !== null && (
                                <li onClick={rmCls}>
                                    <a href="#" onClick={logout}>
                                        LOGOUT
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                    {/* 햄버거버튼 */}
                    <button className="hambtn" onClick={chgMenu}></button>
                </nav>
            </header>
            {/* 2. 메인영역 */}
            <main className="cont">
                {/* 출력파트 : 각 페이지의 컴포넌트가 출력됨 */}
                <Outlet />
            </main>
            {/* 3.하단영역 */}
            <footer className="info">
                <ul>
                    <li>
                        <Logo gb="bottom" tt={callMe} />
                    </li>
                    <li>
                        <ol className="bmenu">
                            {bmenu.map((v, i) => (
                                <li key={i}>
                                    <a href={v.link} target="_blank">
                                        {v.txt.toUpperCase()}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </li>
                    <li>© & ™ DC. ALL RIGHTS RESERVED</li>
                </ul>
            </footer>
        </>
    );
}; ////////// Layout 컴포넌트 ///////

// 내보내기
export default Layout;
