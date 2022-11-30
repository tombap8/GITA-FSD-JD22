// DC 코믹스 페이지 JS
import React from "react";
import isrc from "./ImgSrc";

const COMICS = () => {
    return(
        <>
            <h2>COMICS 페이지</h2>
            <img src={isrc.comics} />
        </>
    );
};

export default COMICS;