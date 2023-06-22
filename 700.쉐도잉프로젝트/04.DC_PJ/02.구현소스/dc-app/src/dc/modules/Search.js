///  검색 모듈 - Search.js
import $, { event } from 'jquery';
import { useState } from 'react';
import cat_data from '../data/cat';
import "../css/search.css";
import CatList from './CatList';

/* 폰트어썸 임포트 */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function Search(){

    // 데이터 선택하기 : Hook 데이터 구성하기
    let [sdt,setSdt] = useState(cat_data);
    let [tot,setTot] = useState(sdt.length);

    const schList = () => {
        let inp = document.querySelector('#schin');
        let keyword = inp.value;
        if(keyword.trim()=='') {
            alert('input your keyword!');
            inp.focus();
            return;
        }
        console.log("검색:",keyword);

        let newList = cat_data.filter(v=>{
            if(v.cname.toLowerCase().indexOf(keyword)!==-1) return true;
        });

        console.log(newList);

        if(newList) {
            setSdt(newList);
            setTot(newList.length);
        }
        else console.log("no data");
    }; ///////////// schList /////////////////

    const enterKey = e => {
        if(e.key === 'Enter') {
            schList();
        }
      }


    return(
        <>
        {/* 모듈코드 */}
        <section className='schbx'>
            {/* 1. 옵션선택박스 */}
            <div className='schopt'>
                <div className='searching'>
                    <FontAwesomeIcon icon={faSearch} className='schbtn' onClick={schList} />
                    <input id='schin' type='text' placeholder='Filter by Keywords' onKeyDown={enterKey} />
                </div>
            </div>
            {/* 2. 결과리스트박스 */}
            <div className='listbx'>
                {/* 결과타이틀 */}
                <h2 className='restit'>
                    BROWSE CHARACTERS({tot})
                </h2>
                {/* 정렬선택박스 */}
                <aside className='sortbx'>

                </aside>
                {/* 캐릭터 리스트 컴포넌트 
                전달속성 dt - 리스트 데이터 */}
                <CatList dt={sdt} />
            </div>
        </section>
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Search;