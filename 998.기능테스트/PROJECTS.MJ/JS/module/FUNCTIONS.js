import albnum from "./DBconnect.js";
import { mtc } from "../main.js";
import {
  tfrxry1,
  tfrxry2,
  main_album_track_FOR50,
  hb,
  MTC,
  mtb,
  lpnum,
  moff,
  mon,
  GTASP,
  SUB_PMJ_album_track_For50,
  Cl,
  BWP,
} from "./variable.js";
let GAG = JSON.parse(JSON.stringify(PMJjsonDATA));
//////////////////////////////////////////////////
// 함수 구역 -------------------------------------
//////////////////////////////////////////////////

function LoadFor() {
  for (let i = 0; i < 50; i++) {
    MTC.append(main_album_track_FOR50);
  }
  let album = $(".album");
  let track = $(".track");

  album.each((i1, e1) => {
    // 변수 셋팅
    let ei = track.eq(i1);
    let sns = ei.find("a");
    let gpais = GAG["PMJ" + albnum[i1]]["SNS주소"];
    // 인스타그램 아이콘
    sns.eq(0).attr("href", gpais[0]);
    // 유튜브 아이콘
    sns.eq(1).attr("href", gpais[1]);
    // 트위터 아이콘
    sns.eq(2).attr("href", gpais[3]);
    // 페이스북 아이콘
    sns.eq(3).attr("href", gpais[4]);

    ei.find(".AUDIO").attr(
      "src",
      "images/MUSIC/" +
        albnum[i1] +
        "." +
        GAG["PMJ" + albnum[i1]]["노래"] +
        ".mp3"
    );
    $(e1)
      .find("span")
      // 한번더 each
      .each((i2, e2) => {
        $(e2).css({
          background: `url(images/trackalbum/track${albnum[i1]}-span${
            i2 + 1
          }.jpg)no-repeat center/100% 100%`,
        });
      }); ////// each ///////
  }); /////// each ///////
} //////// LoadFor ///////////////////////////
//-------------------------------------------//
////// Widbb -- 상단 햄버거버튼 클릭 ///////////
function Widbb() {
  $(".noise").toggleClass("on");
  $(".wrapp").toggleClass("on");
  $(".coralwrapp").toggleClass("on");
  $(".whitewrapp").toggleClass("on");
  $(".hamul").toggleClass("on");
} ////// Widbb ////////////////////////////////

/************************************************* 
  [ tmzmfhftl 이치문 돌기 MAINPJ  ]
*************************************************/

// ----------------------------------------//
///// 음소거 버튼 ----------------------//////
function MuteBtn() {
  mtb.toggleClass("on");
  //  클래스 on이있으면 음소거 해제
  if (mtb.hasClass("on")) {
    $(".AUDIO").prop("muted", false);
  } else {
    // 아니라면 음소거
    $(".AUDIO").prop("muted", true);
  }
}
/* *******[ 서브 페이지 함수 ]****** */
function PMJ_SUB_FOR_AL() {
  for (let i = 0; i < 50; i++) {
    GTASP.append(SUB_PMJ_album_track_For50);
  }
  let albumsub = $(".albumsub");
  // 이미지 뿌리기
  albumsub.each((i1, e1) => {
    // 음원 뿌리기
    $(i1)
      .find(".AUDIO")
      .attr(
        "src",
        "images/MUSIC/" +
          albnum[i1] +
          "." +
          GAG["PMJ" + albnum[i1]]["노래"] +
          ".mp3"
      );
    $(e1)
      .children("span")
      .each((i2, e2) => {
        $(e2).css({
          background: `url(images/trackalbum/track${albnum[i1]}-span${
            i2 + 1
          }.jpg)no-repeat center/100% 100%`,
        });
      }); ////// each
  }); /////// each ///////
  Cl("이미지뿌리장!");
}
/********************************************* 
  [ 유효성 검사 구역 ]
*********************************************/
function VALIDATION() {}
function VALITest(val, Bid) {
  let reg;
  switch (Bid) {
    case "mid": // 아이디
      reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
      // 영문자로 시작하는 6~20글자 영문자/숫자
      // /^[a-z]{1} 첫글자는 영문자로 체크!
      // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
      // 최소 5글자에서 최대 19글자를 유효범위로 체크!
      // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
      break;
    case "mpw": // 비밀번호
      reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
      // 특수문자,문자,숫자포함 형태의 5~15자리
      // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
      // (?=.*\d) 숫자 사용체크!
      // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
      // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
      break;
    case "eml": // 이메일
      reg =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
      // 이메일 형식에 맞는지 검사하는 정규식
      break;
  } //////////// switch case문 //////////////////

  // //console.log("정규식:"+reg);

  // 정규식 검사를 위한 JS메서드
  // -> 정규식.test(검사할값) : 결과 true/false
  return reg.test(val); //호출한 곳으로 검사결과리턴!
}
export {
  LoadFor,
  Widbb,
  MuteBtn,
  PMJ_SUB_FOR_AL,
  VALIDATION,
  VALITest,

};
