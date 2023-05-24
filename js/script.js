var FullImgBox = document.getElementById("FullImgBox");
var fullImg = document.getElementById("FullImg");

function openFullImg(pic) {
    FullImgBox.style.display = "flex";
    FullImg.src = pic;

}
function closeFullImg() {
    FullImg.style.display = "none";

}