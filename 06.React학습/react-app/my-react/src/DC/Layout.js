import {Outlet, Link} from "react-router-dom";
import Logo from "./Logo";
import "./Layout.css";
/* 
    [ 리엑트 스타일링 기법 3가지 ]
    1. 일반 CSS파일을 컴포넌트 JS파일에 import하여 사용
    예) import "CSS경로";

    2. 객체를 만들어서 적용하는 방법
    예)
    const mystyle = {color:"red",fontSize:"30px"};
    <h1 style={mystyle}>하하하</h1>

    3. 직접 중괄호 표현식에 중괄호를 하나 더 하여 표현
    -> 중괄호 하나는 표현식, 안에 중괄호는 객체(CSS용)
    예)
    <h1 style={{color:"red"}}>하하하</h1>
*/

const Layout = () => {
    return(
        <>
        {/* 1.상단영역 */}
        <header className="top">
        {/* 네비게이션 파트 */}
            <nav className="gnb">
                <ul>
                    <li>
                        <Logo />
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/ct">CHARACTERS</Link>
                    </li>
                    <li>
                        <Link to="/co">COMICS</Link>
                    </li>
                    <li>
                        <Link to="/mv">MOVIES</Link>
                    </li>
                    <li>
                        <Link to="/gm">GAMES</Link>
                    </li>
                    <li>
                        <Link to="/vd">VIDEO</Link>
                    </li>
                    <li>
                        <Link to="/nw">NEWS</Link>
                    </li>
                </ul>
            </nav>
        </header>
        {/* 2.메인영역 */}
        <main className="cont">         
            {/* 출력파트 : 각 페이지가 표시됨 */}
            <Outlet />
        </main>
        {/* 3.하단영역 */}
        <footer className="info">
            All Site Content © &amp; TM DC, unless otherwise noted here.
            <br /> 
            All rights reserved. 
        </footer>
           
        </>
    );
};

// 내보내기 필수!
export default Layout;