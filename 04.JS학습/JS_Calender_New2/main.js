// 2023캘린더
import MakeDalleok from "./calendar.js";

const mbtn = document.querySelectorAll(".mbtn");
const mDal = new MakeDalleok();
mDal.initDalleok();

mbtn[0].addEventListener("click",mDal.prevCal);
mbtn[1].addEventListener("click",mDal.nextCal);
