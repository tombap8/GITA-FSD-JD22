// 로컬스토리지 관련 함수

// 로컬스토리지 생성
function initLocStg(){
    // localStorage.clear();

    // 만약 로컬스 "mem-data"가 null이면 만들어준다!
    if (localStorage.getItem("mem-data") === null) {
        localStorage.setItem(
            "mem-data",
            `
            [
                {
                    "idx": "1",
                    "uid":"tomtom",
                    "pwd":"1111",
                    "unm":"Tom",
                    "eml":"tom@gmail.com"
                }
            ]
        `
        );
    }

} //////////// initLocStg //////////////////

export {initLocStg};