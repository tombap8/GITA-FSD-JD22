// CGV 인트로 페이지 JS - intro.js

////////////////// 로딩구역 /////////////////////
window.addEventListener("DOMContentLoaded", () => {

    /////////////////////////////////////////
    // 동영상이 끝나면 메인 페이지로 이동하기 //
    /////////////////////////////////////////

    // 대상: #myvid
    const myvid =
        document.getElementById("myvid");
    // console.log(myvid);

    // 이벤트 : timeupdate
    // -> 동영상이 재생중일때 발생하는 이벤트
    // -> html이벤트 속성명 : ontimeupdate
    myvid.ontimeupdate = () => {
        // 비디오가 멈췄는가? -> myvid.paused
        // paused 속성 : 
        //  비디오멈춤상태면 true (아니면 false)
        // console.log(myvid.paused);

        // 멈춤상태가 true일때 페이지이동함!
        if (myvid.paused)
            location.href = "main.html";
        // location.href = 이동주소 
        // -> 페이지 이동함!

    }; //////////// timeupdate ////////////

    ///////////////////////////////////////////
    /// 들어가기 버튼 클릭시 첫페이지 이동하기 ///
    ///////////////////////////////////////////
    // 대상: #enter a
    const enter =
        document.querySelector("#enter a");

    // 클릭시 페이지 이동하기
    enter.onclick =
        () => location.href = "main.html";



}); ///////////// 로딩구역 //////////////////////