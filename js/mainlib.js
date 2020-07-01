var menubtn = document.querySelectorAll(".menubtn");
var poem = document.querySelectorAll(".poema");
var butvoti = document.getElementsByClassName("voti");
var ri = document.getElementsByTagName("i");
var tf = document.getElementsByClassName("tf");
var b =  document.querySelectorAll("b");
for(var i = 0; i < tf.length; i++){
    tf[i].addEventListener("click", onpages);
}
for(var i = 0; i < ri.length; i++){
    ri[i].addEventListener("click", onpages);
}
for(var i = 0; i < menubtn.length; i++ ){
    menubtn[i].addEventListener("click", onpages);
}
for(var i = 0; i < poem.length; i++){
    poem[i].addEventListener("click", onpages)
}
for(var i = 0; i < poem.length; i++){
    b[i].addEventListener("click", onpages)
}
for(var i = 0; i < butvoti.length; i++){
    butvoti[i].addEventListener("click", voti);
}
function onpages(e){
    var url = e.target.getAttribute("page");
    document.location.href = url;
}
function voti(){
    var login = document.getElementById("loginBox");
    var loginText = login.value;
    var password = document.getElementById("passwordBox");
    var passText = password.value;
    if(loginText == "The_best_mom" && passText == "durdona$1987"){
        window.location.href = "index.html";
    }
    else{
        alert("Если вы не знаете пароля не пробуйте!")
    }
}
// }document.location.replace("index.html");
