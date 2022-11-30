// DC 로고 컴포넌트 
import React from "react";
import isrc from "./ImgSrc";

const Logo = () => {
    return(
        <>
            <h1>
                <img src={isrc.logo} />
            </h1>
        </>
    );
};

// 내보내기 필수
export default Logo;
