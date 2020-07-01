var pods = document.getElementById("podstav");
var counter = 0;
var imgslide = document.querySelector(".slide");
var nav = document.querySelector(".nav");
var tup = document.querySelector(".tup");
var photos =[
    {size:[550, 400], text:"Детство", transform: "rotate(0deg)"},
    {size:[500, 450], text:"Молодость", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Мама, Маршалл и Саидахмад", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Мы в самолёте летим. И быстрее добраться хотим!", transform: "rotate(0deg)"},
    {size:[450, 550], text:"Башни-близнецы", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Башни-близнецы ночью", transform: "rotate(0deg)"},
    {size:[650, 450], text:"Разделим всё радость, горе и мороженое.", transform: "rotate(0deg)"},
    {size:[500, 600], text:"Джунгли над головой", transform: "rotate(0deg)"},
    {size:[450, 550], text:"Китайский храм", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Новый год, новый год<br> Гирлянда висит", transform: "rotate(0deg)"},
    {size:[450, 550], text:"Сколько народу...", transform: "rotate(0deg)"},
    {size:[450, 500], text:"Мы в пути и сзади экскурсовод", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Мама, Мумтоза, я и сзади статуя привидения", transform: "rotate(0deg)"},
    {size:[450, 600], text:"Ватикан, Ватикан", transform: "rotate(0deg)"},
    {size:[500, 650], text:"Экскурсия в науниках. Вещь ненадёжная. Помню Султан потерялся.", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Мама красива и на фоне дождя.", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Красивое озеро", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Это был вкусный ужин", transform: "rotate(0deg)"},
    {size:[550, 450], text:"Экскурсия к Коллизею меня разочаровала. Если бы не дождь.", transform: "rotate(0deg)"},
    {size:[450, 650], text:"Со стороны мы были похожи на цыганский табор.", transform: "rotate(0deg)"},
    {size:[500, 650], text:"Он будет сниться мне в кошмарах.", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Я был за рулем", transform: "rotate(0deg)"},
    {size:[450, 600], text:"Мумтоза хотела искупаться в том фонтане.", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Мамы", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Саграда Фамилия. Эти бездельники всё не достроят её.", transform: "rotate(0deg)"},
    {size:[500, 650], text:"Мама так любит селфи.", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Что это в небе?", transform: "rotate(0deg)"},
    {size:[550, 400], text:"Наш цыганский табор в Диснейленде", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Микки, Минни и мама", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Микки-волшебник", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Брат и мама почему-то корчатся, а я не врубаюсь. Мумтоза", transform: "rotate(0deg)"},
    {size:[450, 600], text:"Крутая машина на нашем фоне", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Как красиво. Но облака всё испортили", transform: "rotate(0deg)"},
    {size:[350, 500], text:"Вход в Диснейленд.", transform: "rotate(0deg)"},
    {size:[450, 550], text:"Лувр. Огромные залы, статуи и картины. И мама", transform: "rotate(0deg)"},
    {size:[450, 600], text:"На фотографии можно увидеть  женщину древности и нашу маму. Посудите сами кто красивее. Ответ: Наша мама", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Пирамида Лувра очень хорошо смотрится рядом с Мамой.", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Эйфелева башня в тумане. Очень красиво", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Дом инвалидов. Но их там не было", transform: "rotate(0deg)"},
    {size:[650, 450], text:"Мама, львёнок. Стоп, а где черепаха?", transform: "rotate(0deg)"},
    {size:[650, 500], text:"Это моя семья, но больше половины я не знаю", transform: "rotate(0deg)"},
    {size:[400, 550], text:"Побывать за кулисами-сделано", transform: "rotate(0deg)"},
    {size:[450, 550], text:"Ветер в моих волосах", transform: "rotate(0deg)"},
    {size:[450, 550], text:"Мама села на скамейку. И... Дальше рифму не придумал", transform: "rotate(0deg)"},
    {size:[600, 450], text:"Какие красивые мальчик с мамой. Ну и фонтан.", transform: "rotate(0deg)"},
    {size:[500, 500], text:"Ахмедушка", transform: "rotate(0deg)"},
    {size:[450, 650], text:"Мама и Малика", transform: "rotate(0deg)"},
    {size:[450, 650], text:"Мама на парковке", transform: "rotate(0deg)"},
    {size:[650, 450], text:"Мама на скамейке", transform: "rotate(0deg)"},
    {size:[550, 650], text:"Мама у реки", transform: "rotate(0deg)"}
];
var strr = document.querySelector(".strr");
strr.addEventListener("click", next);
var strl = document.querySelector(".strl");
strl.addEventListener("click", prev);
function next(){
    if(counter == 49){
        imgslide.setAttribute("src", "img/0.jpg");
        imgslide.style.width = photos[0].size[0] + "px";
        imgslide.style.height = photos[0].size[1] + "px";
        tup.textContent = photos[0].text;
        tup.style.color = photos[0].color;
        counter=0;
        imgslide.style.transform = photos[0].transform;
        pods.textContent = counter+1;
        imgslide.addEventListener("click", bolshe);
    }else{
        counter++;
        imgslide.setAttribute("src", "img/" + counter+ ".jpg");
        console.log(counter);
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        tup.textContent = photos[counter].text;
        tup.style.color = photos[counter].color;
        imgslide.style.transform = photos[counter].transform;
        pods.textContent = counter+1;
        imgslide.addEventListener("click", bolshe);
}
}
function prev(){
    if(counter == 0){
        counter = photos.length;
        imgslide.setAttribute("src", "img/" + counter +".jpg");
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        tup.textContent = photos[photos.length].text;
        tup.style.color = photos[photos.length].color;
        imgslide.style.transform = photos[photos.length].transform;
        pods.textContent = counter;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
    }else{
        counter--;
        imgslide.setAttribute("src", "img/" + counter +".jpg");
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        pods.textContent = counter+1;
        imgslide.style.transform = photos[counter].transform;
        tup.textContent = photos[counter].text;
        tup.style.color = photos[counter].color;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
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