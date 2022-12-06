import React, {useState} from "react";

/* 
    [ 후크 : Hook - 왜 필요한가? ]
    1. 목적 - 어떤 특정 데이터가 변경될때
    다른 것을 매칭하여 실시간으로 변경할 필요가 있을 경우
    간단하고 효과적으로 이것을 구현해주는 방법이다!
    2. 구현방법
        1) 상단에 후크를 import 한다 -> useState
        2) useState() 메서드를 사용한다
        코드법: 
            배열변수 = useState(초기값)
        일반형:
            const [변수명,set변수명] = useState(초기값)
            -> set변수명 작성시 변수명 첫글자는 대문자로처리!
        3) 작동원리
            - useState에 쓴 초기값이 배열변수 첫번째에 할당된다
            - 코드에서 set변수명 에 값을 할당하면
            useState가 이것을 체크하여 다른 변경을 
            하도록 메서드를 실행한다!
*/

function Join(){

    // 요구사항 : 각 입력항목에 맞는 유효성검사를 입력하는 순간
    //          실시간으로 체크하여 결과를 화면에 리턴한다!

    // [후크 useState 메서드 셋팅하기]
    // 1. 아이디변수
    const [userId,setUserId] = useState("");

    // 2. 에러상태값변수 : 초기값은 에러 아님(false)
    const [userIdError,setUserIdError] = useState(false);

    // [ 유효성 검사 메서드 ]
    // 1. 아이디 유효성 검사
    const onChangeUserId = (e) => { // e - 이벤트전달변수
        // 아이디 유효성 검사식(주의:따옴표싸지말것!)
        const valid = /^[A-Za-z0-9+]{5,}$/;

        // 입력값 확인 : e.target -> 이벤트가 발생한 요소자신
        console.log(e.target.value);

        // 에러아님상태 if문 
        // 조건1: 
        // !e.target.value 입력값이 없으면 false인데 true로 변경(!연산자)
        // 조건2: 유효성 검사결과가 true인가?
        // 
        if((!e.target.value))

        // 실제 userId 변수값은 setUserId를 업데이트 해야함!
        setUserId(e.target.value)

    }; //////////// onChangeUserId //////////

    // [ 에러 상태 처리 메서드 ]


    return(
        <>
            <form>
                <div>
                    <label> 아이디를 입력하세요
                        <input type="text" maxLength="20" placeholder="아이디를 입력" value={userId} onChange={onChangeUserId} />
                    {/* 
                    -> value={userId} 는 setUserId를 통해 셋팅해야만
                    변경된 값이 실제 화면에 반영된다!
                    -> onChange={onChangeUserId} change이벤트 발생시
                    onChangeUserId 함수가 호출된다!

                    ※ 유효성검사 기준:
                    사용자 아이디는 5자이상 문자 또는 숫자를 포함해야합니다! */}
                    </label>
                </div>
            </form>
        </>
    );

} //////// Join 컴포넌트 /////////////

// 컴포넌트 출력
export default Join;