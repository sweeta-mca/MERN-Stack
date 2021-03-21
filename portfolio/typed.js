var ele = document.querySelector('#typed');
var info_link = document.querySelector("#info_link");
var qualified_link = document.querySelector("#qualification_link");
var download_cv = document.querySelector("#download_cv");


var info_container = document.querySelector(".info-container");
var qualification_container = document.querySelector(".qualification-container");
var cv_container = document.querySelector(".cv-container");

info_link.addEventListener("click" , ()=>{
    qualification_container.style ="display:none;";
    cv_container.style = "display:none;" ;
    info_container.style = "display:block;"

});

qualified_link.addEventListener('click',function(){
    info_container.style ="display : none;"
    cv_container.style="display:none";
    qualification_container.style = "display : block;"
});

download_cv.addEventListener("click" , ()=>{
    info_container.style = "display:none;"
    qualification_container.style ="display:none;";      
    cv_container.style = "display:block;" ;
});


var start = "";
var end = "Lourdu Paulet Sweeta";

var idx = 1;
var pointer = 0;

setInterval(() => {
    if(pointer == end.length || pointer == -1)
    {
        idx = idx * -1;
    }
    start = end.substring(0,pointer)
    ele.textContent = start;
    pointer = pointer+idx;
}, 100);

