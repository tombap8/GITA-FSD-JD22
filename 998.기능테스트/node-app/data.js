import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000; // 포트번호

////////// totalPage, brands, categories, list?page=? json 셋팅 //////////
const url = ["totalPage", "brands", "categories"]; // 링크 배열
let response; // json을 불러올 url
let page; // 불러온 json 파일
let totalPage; // totalPage json 파일
let brands; // brands json 파일
let categories; // categories json 파일
let list = []; // list json 파일

// totalPage, brands, categories의 json 가져오기
for (const i of url) {
    response = await fetch(`http://prod-env.jentestore.xyz:3000/${i}`);
    page = await response.json();
    if(i == "totalPage"){
        totalPage = page;
    }
    else if(i == "brands"){
        brands = page;
    }
    else if(i == "categories"){
        categories = page;
    }
    else{
        console.log("error");
    }
}

// list?page=?의 json 가져오기
for (let x = 1 ; x <=  totalPage.total_page ; x++) {
    response = await fetch(`http://prod-env.jentestore.xyz:3000/list?page=${x}`);
    page = await response.json();
    
    for (const y of page) {
        list.push(y);
    }
}
////////// totalPage, brands, categories, list?page=? json 셋팅 //////////



////////////////////////////// json 데이터 가공 //////////////////////////////
let kosi = "kosi / is / happy";
const krsil = [];

for (const i of kosi) {
    if(i == "/") continue;
    krsil.push(i);
}

////////////////////////////// json 데이터 가공 //////////////////////////////



app.get('/result', (req, res)=>{

    res.send(krsil);
})

app.listen(port, ()=>{
    console.log("start");
})

// 오류)
// !!문자열을 자르면 숫자로 나온다!!
// !!객체 변경이 안된다!!