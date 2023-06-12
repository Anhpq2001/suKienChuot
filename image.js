// khai bao bien
let imgObj = null;
imgObj = document.getElementById("myImage");
// tao ham init de khoi tao imgObj
function init(){
    imgObj = document.getElementById("myImage");
    imgObj.style.position = "relative";
    imgObj.style.left = "0px";
}
// tao ham moveRight() de tang khoang cach trai 10px
function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}
// tao su kien onload
window.onload = init();
