$(() => {
    startSS();

    const qs = (x) => document.querySelector(x);
    const qsa = (x) => document.querySelectorAll(x);
    const retVal = (x) => x.getBoundingClientRect().top;
    const winH = window.innerHeight;
    const setH1 = 200;
    const setH2 = 100;
    console.log("winH:", winH);

    const tg = qsa(".imbx");
    const tg2 = qsa(".icon");
    const tg3 = qsa(".txt");

    const moveEle = (pos,ele,setH) => {
        if (pos < winH && pos > 0) {
            let move = setH - (setH * pos) / winH;
            console.log(-move);
            ele.style.cssText = `
                transform:translateY(${-move}px)`;
        }
    }; //////////// moveEle /////////////

    // winH:pos = setH:x
    // x = setH*pos/winH

    $(window).scroll(() => {
        tg2.forEach((ele)=>moveEle(retVal(ele),ele,setH1));
        tg3.forEach((ele)=>moveEle(retVal(ele),ele,setH2));
    });
});
