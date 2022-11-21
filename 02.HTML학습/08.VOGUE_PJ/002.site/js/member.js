// 보그 PJ 회원가입 페이지 JS - member.js

////////// 제이쿼리 코드블록 /////////////
$(()=>{

    // 로딩완료
    console.log("로딩완료!");

    /********************************************* 
        [ 사용자 입력폼 유효성 검사 ]
        - 이벤트종류 : blur(포커스가 빠질때 발생)
        - 제이쿼리 이벤트 메서드 : blur()
        - 이벤트 대상:
        -> id가 'email2'가 아니고 class가 'search'가 
        아닌 type이 'text'인 입력요소 input
        과 함께 type이 'password'인 입력요소 input

        ->>>> 제이쿼리 선택표현법:
        input[type=text][id!=email2][class!=search],
        input[type=password]
        >>> 대괄호는 속성선택자(CSS원래문법) 
        != 같지않다(제이쿼리전용)

    *********************************************/
   $(`input[type=text][id!=email2][class!=search],
   input[type=password]`).blur(function(){
       
       // 1. 방금 블러가 발생한 요소의 id는?
       let cid = $(this).attr("id");
       // cid는 current id 즉, 현재아이디라는 뜻으로 작명!

       // 2. 블러가 발생한 요소의 입력값은?
       let cv = $(this).val();
       // cv는 current value 즉, 현재값이라는 뜻으로 작명!
       
       console.log("블러발생!", cid, "/", cv);

       /**************************************** 
            3. 빈값 여부 체크하기
       ****************************************/
      if(cv === ""){
        // 메시지 출력
        $(this).siblings(".msg").text("필수입력!")
        // siblings(요소) - 다른형제요소 중 특정요소선택
        // siblings() - 아무값도 안쓰면 다른형제요소 모두선택

      } /////////// if : 빈값체크 ///////////

      //////////// 만약 통과시 메시지 지우기 //////////
      else{
        // 메지시 지우기
        $(this).siblings(".msg").empty();
        // empty() 내용지우기 메서드

      } /////// else : 통과시 /////////////

   }); //////////// blur //////////////


}); ///////////// jQB //////////////////