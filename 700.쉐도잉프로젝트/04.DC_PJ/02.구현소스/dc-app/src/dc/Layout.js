// 메인 레이아웃 컴포넌트
import Logo from "./Logo";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";

/* 폰트어썸 임포트 */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bmenu, gnb_data } from "./data/common";
import ScrollTop from "./common/ScrollTop";
import { useState } from "react";
/******************************************************* 
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    1. <Link to="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명"> 과 일치함!

    2. <Outlet />
    -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*******************************************************/


const Layout = () => {
    
    const [logSts,setLogSts] = useState(localStorage.getItem("minfo"));
    const [logMsg,setLogMsg] = useState("");
    
    const myFn = (x) => {
        console.log("누구?",x)
    }

    const setFn = () => {
        setLogSts(localStorage.getItem("minfo"));
        
        if(localStorage.getItem("minfo")){
            setLogMsg("Welcome "+
            JSON.parse(localStorage.getItem("minfo"))["unm"]);
        }

        
    }
    
    const logout = () => {
        localStorage.removeItem("minfo");
        setLogSts(null);
        console.log("로그아웃됨!",logSts);
    }


    return (
        <>
        
            {/* 라우터 갱신될때 스크롤 상단이동 모듈작동함! */}
            <ScrollTop sfn={setFn} />
            {/* 1.상단영역 */}
            <header className="top">
                {
                    logSts !== null &&
                    <div className="logmsg" 
                    style={{position:"absolute",left:"50%",transform:"translateX(-50%))"}}>
                        {logMsg}
                    </div>
                }
                {/* 네비게이션 파트 */}
                <nav className="gnb">
                    <ul>
                        <li>
                            <Link to="/main">
                                <Logo gb="top" tt={myFn} />
                            </Link>
                        </li>
                        {gnb_data.map((v, i) => (
                            <li key={i}>
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
                            <FontAwesomeIcon icon={faSearch} />
                        </li>
                        <li>
                            <Link to="/mem">Join Us</Link>
                        </li>

                        {
                            logSts === null &&
                            <li>
                                <Link to="/login">LOG IN</Link>
                            </li>

                        }
                        {
                            logSts !== null &&
                            <li>
                                <a href="#" onClick={logout}>LOG OUT</a>
                            </li>

                        }
                    </ul>
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
                        <Logo gb="bottom" />
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
