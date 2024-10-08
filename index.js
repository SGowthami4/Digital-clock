document.addEventListener("DOMContentLoaded",function(){
const date=document.getElementById("date")
const month=document.getElementById("month")
const year=document.getElementById("year")

const hour=document.getElementById("hour")
const minute=document.getElementById("minute")
const second=document.getElementById("second")

//days
const daysList=["SUN","MON","TUE","WED","THU","FRI","SAT"]
const day=document.getElementById("day")


let today=new Date();
date.innerText=today.getDate();
month.innerText=((today.getMonth()+1)<10?"0":"")+(today.getMonth()+1)
year.innerText=(today.getFullYear())%2000

setInterval(()=>{
    let today=new Date();
    hour.innerText=(today.getHours()<10?"0":"")+today.getHours()+":";
    minute.innerText=(today.getMinutes()<10?"0":"")+today.getMinutes()+":";
    second.innerText=(today.getSeconds()<10?"0":"")+today.getSeconds();
},1000)

function days(){
    day.innerText=daysList[today.getDay()]

}
days();
})
