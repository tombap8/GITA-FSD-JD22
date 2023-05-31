// DC 캐릭터 페이지 JS
import React from "react";
import isrc from "./ImgSrc";
import $ from "jquery";


const CHARACTERS = () => {

    const chg = () =>{
        console.log("하하하");
        $("#myimg").animate({marginLeft:"200px"},1000)
    }

    return(
        <>
            <h2>CHARACTERS 페이지</h2>
            <img id="myimg" src={isrc.character} onClick={chg} />
        </>
    );
};

export default CHARACTERS;
