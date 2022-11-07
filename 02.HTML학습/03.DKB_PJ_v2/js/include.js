// 상단, 하단영역 넣기
window.addEventListener("DOMContentLoaded",()=>{
    // 제이슨파일에 hcode변수에 할당함
    // 제이슨 파싱하여 할당하기
    let myjson = JSON.parse(JSON.stringify(hcode));
    console.log(myjson);

    // 데이터 넣을 대상
    // 1. 상단영역
    let topPart = document.querySelector("#top");
    // 2. 하단영역
    let bottomPart = document.querySelector("#info");
    // 3. 각 영역에 제이슨 데이터 넣기
    topPart.innerHTML = myjson["상단영역"];
    bottomPart.innerHTML = myjson["하단영역"];
}); //////////// 로딩구역 ////////////////