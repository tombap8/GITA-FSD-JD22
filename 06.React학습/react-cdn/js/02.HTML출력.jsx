// HTML출력 JSX

// 변수에 태그를 jsx문법으로 작성하여 할당한다!
// JSX는 최상위 부모가 하나여야한다!(기본XML문법과 동일!)

const data = [
    {이름:"전소민",전화번호:"010-222-3333",생일:"90.3.4"},
    {이름:"김혁수",전화번호:"010-555-7777",생일:"02.5.8"},
    {이름:"이상화",전화번호:"010-8888-2222",생일:"00.7.8"},
];

const list = data.map(val=>
    <tr>
        <td>{val.이름}</td>
        <td>{val.전화번호}</td>
        <td>{val.생일}</td>
    </tr>
);

const myelement = (
    <div>
        <h1>♣ 나의 친구 리스트</h1>
        <table>
            <tr>
                <th>이름</th>
                <th>전화번호</th>
                <th>생일</th>
            </tr>
            {list}
        </table>
    </div>
);

// 화면출력
// ReactDOM.render(출력할요소,출력요소)
ReactDOM.render(myelement, document.getElementById("root"));
