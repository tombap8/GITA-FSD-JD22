// 포폴연결사이트 메인 JS
$(function () {
    // jQB /////////////////

    // 메인타이틀 클릭시
    $(".mainTit").click(function () {
        $(".mtit").css({
            top: "50%",
            transform: "translateY(-50%) scale(1)",
        }); /// css ///
        $(".s1").css({
            left: "100%",
        }); /// css ///
    });

    // 링크 클릭시 //
    $(".desc a").click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        // a링크의 href값
        const tgsrc = $(this).attr("href");

        window.open().location.href = tgsrc;
    }); //// click ///////

    $("#dpbox>span").click(function () {
        // 숨기기
        $("#dpbox").fadeOut(300);
    }); //// click ///////

    $("body").append('<button class="back">처음으로</button>');
    $(".back")
        .css({
            position: "fixed",
            bottom: "5px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "cyan",
            fontSize: "3vh",
            lineHeight: "5vh",
            borderRadius: "5px",
        })
        .click(function () {
            location.href = "index.html";
        });
}); ///////// jQB /////////////////////
/////////////////////////////////////

window.addEventListener("DOMContentLoaded", function () {
    var tg = document.getElementsByClassName("mtit");
    var tg2 = document.getElementsByClassName("sbox");
    tg[0].addEventListener("click", function () {
        //                alert("하하");
        this.style.top = "15%";
        this.style.transform = "translateY(-50%) scale(.4)";
        this.style.transition = "all .5s ease-in-out";

        tg2[0].style.left = "50%";
        tg2[0].style.transition = "all .5s ease-in-out";
    }); ///// click //////////////////////////////
});
