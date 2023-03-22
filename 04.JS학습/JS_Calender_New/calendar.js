// 2023캘린더
const mbtn = document.querySelectorAll(".mbtn");
const mDal = new MakeDalleok();
mDal.initDalleok();

mbtn[0].addEventListener("click",mDal.prevCal);
mbtn[1].addEventListener("click",mDal.nextCal);

function MakeDalleok(){
    this.curr_date = new Date();
    this.today = new Date();
    
    this.initDalleok = () => {
        const prevLast = new Date(this.curr_date.getFullYear(), this.curr_date.getMonth(), 0);
        const thisFirst = new Date(this.curr_date.getFullYear(), this.curr_date.getMonth(), 1);
        const thisLast = new Date(this.curr_date.getFullYear(), this.curr_date.getMonth() + 1, 0);
        document.querySelector(".yearTitle").innerHTML = this.curr_date.getFullYear();
        document.querySelector(".monthTitle").innerHTML = this.curr_date.getMonth() + 1;
        const dates = [];
        // 전달 나머지 칸 삽입하기
        if(thisFirst.getDay()!=0){
            for(let i = 0; i < thisFirst.getDay(); i++){
                dates.unshift(`<span style="color:#ccc">${prevLast.getDate()-i}</span>`);
            }
        }
        // 현재월 삽입
        for(let i = 1; i <= thisLast.getDate(); i++){
            dates.push(i);
        }
        // 다음달 나머지 칸 삽입하기
        for(let i = 1; i <= 13 - thisLast.getDay(); i++){
            dates.push(`<span style="color:#ccc">${i}</span>`);
        }
        let htmlDates = '';
        for(let i = 0; i < 42; i++){
            if(this.today.getDate()==dates[i] && 
            this.today.getMonth()==this.curr_date.getMonth() && 
            this.today.getFullYear()==this.curr_date.getFullYear()){
                htmlDates += `<div class="date today">${dates[i]}</div>`;
            }
            else{
                htmlDates += `<div class="date">${dates[i]}</div>`;
            }
        }
        document.querySelector(".dates").innerHTML = htmlDates;
    };
    
    this.prevCal = () => {
        this.curr_date.setMonth(this.curr_date.getMonth()-1);
        this.initDalleok();
    };
    
    this.nextCal = () => {
        this.curr_date.setMonth(this.curr_date.getMonth()+1);
        this.initDalleok();
    };

} /////////////// MakeDalleok //////////////////