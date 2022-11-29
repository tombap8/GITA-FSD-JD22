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
                        <Link to="/CHARACTERS">CHARACTERS</Link>
                    </li>
                    <li>
                        <Link to="/COMICS">COMICS</Link>
                    </li>
                    <li>
                        <Link to="/MOVIES">MOVIES</Link>
                    </li>
                    <li>
                        <Link to="/GAMES">GAMES</Link>
                    </li>
                    <li>
                        <Link to="/VIDEO">VIDEO</Link>
                    </li>
                    <li>
                        <Link to="/NEWS">NEWS</Link>
                    </li>
                </ul>
            </nav>
            {/* 출력파트 : 각 페이지가 표시됨 */}
            <Outlet />
        </>
    );
};