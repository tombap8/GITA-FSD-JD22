// DC 뉴스 페이지 JS
import React from "react";
import isrc from "./ImgSrc";

const NEWS = () => {
    return(
        <>
            <h2>NEWS 페이지</h2>
            <img src={isrc.news} />
        </>
    );
};

export default NEWS;