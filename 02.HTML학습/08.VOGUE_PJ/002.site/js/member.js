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
        >>> 대괄호는 속성선택자, != 같지않다(제이쿼리전용)
        
    *********************************************/
   $(`input[type=text][id!=email2][class!=search],
   input[type=password]`).blur(function(){
        console.log("블러발생!");
   }); //////////// blur //////////////


}); ///////////// jQB //////////////////