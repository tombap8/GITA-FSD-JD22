///  어떤 모듈 - 어떤.js
import $ from 'jquery';
import "../css/catlist.css";
import cat_data from '../data/cat';

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function CatList(){
    const sdt = cat_data;
    return(
        <>
        {/* 모듈코드 */}
        <ul>
            {
                sdt.map((v,i)=>
                    <li key={i}>
                        <img src={v.tmsrc} alt={v.cname} />
                    </li>
                )
            }
        </ul>
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default CatList;