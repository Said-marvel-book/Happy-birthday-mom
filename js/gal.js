var pods = document.getElementById("podstav");
var counter = 0;
var imgslide = document.querySelector(".slide");
var nav = document.querySelector(".nav");
var tup = document.querySelector(".tup");
var photos =[
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Детство", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Детство", transform: "rotate(0deg)"}
];
var strr = document.querySelector(".strr");
strr.addEventListener("click", next);
var strl = document.querySelector(".strl");
strl.addEventListener("click", prev);
function next(){
    if(counter == 47){
        imgslide.setAttribute("src", "img/0.jpg");
        imgslide.style.width = photos[0].size[0] + "px";
        imgslide.style.height = photos[0].size[1] + "px";
        tup.textContent = photos[0].text;
        tup.style.color = photos[0].color;
        counter=0;
        imgslide.style.transform = photos[0].transform;
        pods.textContent = counter+1;
        imgslide.addEventListener("click", bolshe);
        imgslide.addEventListener("contextmenu", menshe);
        imgslide.addEventListener("mouseover", pokaz);
    }else{
        counter++;
        imgslide.setAttribute("src", "img/" + counter+ ".jpg");
        console.log(counter);
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        tup.textContent = photos[counter].text;
        tup.style.color = photos[counter].color;
        imgslide.style.transform = photos[counter].transform;
        pods.textContent = counter;
        imgslide.addEventListener("click", bolshe);
        imgslide.addEventListener("contextmenu", menshe);
        imgslide.addEventListener("mouseover", pokaz);
}
}
function prev(){
    if(counter == 0){
        imgslide.setAttribute("src", "img/" + photos[photos.length-1]+".jpg");
        counter = photos.length-1;
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        tup.textContent = photos[photos.length-1].text;
        tup.style.color = photos[photos.length-1].color;
        imgslide.style.transform = photos[photos.length-1].transform;
        pods.textContent = photos.length;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
        imgslide.addEventListener("contextmenu", menshe);
        imgslide.addEventListener("mouseover", pokaz);
    }else{
        imgslide.setAttribute("src", photos[counter-1].img);
        counter--;
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        pods.textContent = counter+1;
        imgslide.style.transform = photos[counter].transform;
        tup.textContent = photos[counter].text;
        tup.style.color = photos[counter].color;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
        imgslide.addEventListener("contextmenu", menshe);
        imgslide.addEventListener("mouseover", pokaz);
    }
}
function bolshe(){
    imgslide.style.height = photos[counter].size[1] + 10 + "px";
    imgslide.style.width = photos[counter].size[0] + 10 + "px";
    photos[counter].size[0] += 10;
    photos[counter].size[1] += 10;
    imgslide.addEventListener("click", bolshe);
    imgslide.addEventListener("contextmenu", menshe);
}
function menshe(){
    if(photos[counter].size[0] < 30 || photos[counter].size[1] < 30){
        
    }else{
    imgslide.style.height = photos[counter].size[1] - 10 + "px";
    imgslide.style.width = photos[counter].size[0] - 10 + "px";
    photos[counter].size[0] -= 10;
    photos[counter].size[1] -= 10;
    imgslide.addEventListener("click", bolshe);
    imgslide.addEventListener("contextmenu", menshe);
    }
}