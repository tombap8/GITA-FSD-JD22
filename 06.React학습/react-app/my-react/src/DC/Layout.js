import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return(
        <>
        {/* 네비게이션 파트 */}
            <nav>
                <ul>
                    <li>
                        로고
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
            {/* 출력파트 : 각 페이지가 표시됨 */}
            <Outlet />
        </>
    );
};

// 내보내기 필수!
export default Layout;