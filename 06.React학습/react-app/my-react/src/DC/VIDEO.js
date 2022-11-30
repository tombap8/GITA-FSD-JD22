// DC 비디오 페이지 JS
import React from "react";
import isrc from "./ImgSrc";

const VIDEO = () => {
    return(
        <>
            <h2>VIDEO 페이지</h2>
            <iframe src={isrc.video} />
        </>
    );
};

export default VIDEO;