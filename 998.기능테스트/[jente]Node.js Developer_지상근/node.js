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
    if(i === "totalPage"){
        totalPage = page;
    }
    else if(i === "brands"){
        brands = page;
    }
    else if(i === "categories"){
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

const data = []; // /result에 보낼 데이터 

for (const z of list) {
    let member = {}; // data배열에 들어갈 객체 

    /////////////////// brand_code ///////////////////
    for (const k of brands) {
        if(k.code === z.brand_code || k.code === z.MARCA_CODICE || k.code === z.BRAND_CODE){
            member.brand_code = k.code;
            break;
        }
    }
    /////////////////// brand_code ///////////////////


    /////////////////// category_code ///////////////////
    for (const q of categories) {
        if(q.code === z.category_code || q.code === z.CATEGORY_CODE || q.code === z.CATEGORIA_CODICE){
            member.category_code = q.code;
            break;
        }
    }
    /////////////////// category_code ///////////////////


    ///////////////////// color /////////////////////
    if(z.COLORE != undefined){
        member.color = z.COLORE;
    }
    else if(z.color != undefined){
        member.color = z.color;
    }
    else if(z.COLOR != undefined){
        member.color = z.COLOR;
    }
    ///////////////////// color /////////////////////


    ///////////////////// gender /////////////////////
    let gen; // list gender 저장 변수

    if(z.GENERE != undefined){
        gen = z.GENERE;
    }
    else if(z.GENDER != undefined){
        gen = z.GENDER;
    }
    else if(z.gender != undefined){
        gen = z.gender;
    }

    if(gen === "uomo" || gen === "man" || gen === "men"){
        member.gender = "MEN";
    }
    else if(gen === "woman" || gen === "women" || gen === "donna"){
        member.gender = "WOMEN";
    }
    else if(gen === "unisex"){
        member.gender = "UNISEX";
    }
    ///////////////////// gender /////////////////////


    /////////////////// season ///////////////////
    let it = ""; // list season 문자열 저장 변수
    let it2 = []; // list season 문자 당 배열nod
    let v1 = 0; // [0][1] 저장을 위한 조건 변수
    let v2 = 1; // [2] 저장을 위한 조건 변수
    let v3 = 0; // [3] 저장을 위한 조건 변수

    if(z.STAGIONE != undefined){
        it = z.STAGIONE;
    }
    else if(z.season != undefined){
        it = z.season;
    }
    else if(z.SEASON != undefined){
        it = z.SEASON;
    }

    for (const t of it) {
        // [0][1] 저장
        if(v1<2){
            it2.push(t);
            v1++;
            continue;
        }
        // [2] 저장
        if(t == " "){
            continue;
        }
        else if(v2){
            it2.push(t);
            v2--;
            continue;
        }
        // [3] 저장
        it2.push(t);
        
        if(it2[3] && t == "/"){
            v3++;
            continue;
        }
        if(v3){
            it2[3] = t;
            break;
        }
    }

    member.season = it2[2].toUpperCase() + it2[3].toUpperCase() + it2[0] + it2[1];
    /////////////////// season ///////////////////


    ///////////////////// brand_name /////////////////////
    for (const b of brands) {
        if(b.code === z.brand_code || b.code === z.MARCA_CODICE || b.code === z.BRAND_CODE){
            member.brand_name = b.name;
            break;
        }
    }
    ///////////////////// brand_name /////////////////////


    //////////////////// category_name ////////////////////
    for (const n of categories) {
        if(n.code === z.category_code || n.code === z.CATEGORY_CODE || n.code === z.CATEGORIA_CODICE){
            member.category_name = n.name;
            break;
        }
    }

    ///////////////////////// name /////////////////////////
    member.name = member.brand_name + " " + member.color + " " + member.category_name;
    ///////////////////////// name /////////////////////////

    data.push(member);
}
////////////////////////////// json 데이터 가공 //////////////////////////////



app.get('/result', (req, res)=>{
    res.send(data);
})

app.listen(port, ()=>{
    console.log("start");
})