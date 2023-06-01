// 배너 컴포넌트 - Ban.js
// 배너CSS
import "./css/ban.css";
// 배너 데이터
import ban_data from "./data/banner";
import $ from "jquery";

$(()=>{


    let prot = 0;
    $(".abtn").click(function(){
        if(prot) return;
        prot=1;
        setTimeout(()=>prot=0,400);

        let isB = $(this).is(".rb");
        console.log(isB);

        let tg = $(this).siblings(".slider");

        if(isB){
            tg.animate({left:"-100%"},400,
            function(){
                $(this).append($(this).find("li").first()).css({left:"0"});
            })
        }
        else{
            tg
            .prepend(tg.find("li").last()).css({left:"-100%"})
            .animate({left:"0"},400);
        }


        $(".indic li").eq(tg.find("li").eq(isB).attr("data-seq")).addClass("on")
        .siblings().removeClass("on");
    })
});

// 반복리스트 코드 생성용 컴포넌트 ///////
function MakeList(props) { 
    // rec - 개별레코드값(객체형식)
    return (
        <li data-seq={props.idx}>
            <img className="banimg" src={props.rec["src"]} alt="배너" />
            <section className="bantit">
                <h3>{props.rec["tit1"]}</h3>
                <h2>{props.rec["tit2"]}</h2>
                <p>{props.rec["cont"]}</p>
                <button>{props.rec["btn"]}</button>
            </section>
        </li>
    );
} //////////// MakeList //////////////////

// 배너출력용 컴포넌트 /////////
function Ban(props) {
    // props.cat 은 배너데이터 구분속성명
    const sel_data = ban_data[props.cat];
    // sel_data에 담긴값은 data/banner.js의 객체의 배열값

    return (
        <div className="banner">
            <ul className="slider">
                {
                    sel_data.map((x,i)=> 
                    <MakeList rec={x} key={i} idx={i} />)
                }
            </ul>
            {
                sel_data.length != 1 &&
                <>
                    <button className="abtn lb">＜</button>
                    <button className="abtn rb">＞</button>
                    <ol className="indic">
                        {
                            sel_data.map((x,i)=>
                            <li className={i==0?'on':''} key={i}></li>)
                        }
                    </ol>
                </>
            }
        </div>
    );
} /////////// Ban 컴포넌트 /////////////

export default Ban;
