var head=document.getElementById("result-header")
var body =document.getElementById("result-body")

function reset(){
    location.href="./index.html"
}

var points = sessionStorage.getItem("points")

if(points>=5){
    head.innerText="That's nice! You have got "+ points +" out of 6 right"
    body.innerText="You worked hard and it paid off! You figured out these tough questions, you earned it budddy!!"
}
else{
    head.innerText="Oops! You've got only "+ points +" out of 6 right"
    body.innerText="Marvel has created more avengers that even the geekiest of geeks could remember, but that doesn't mean you shouldn't try!"
}