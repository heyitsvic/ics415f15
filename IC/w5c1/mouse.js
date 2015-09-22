/**
 * Created by Victor on 9/22/2015.
 */
$("#one").mouseenter(function(){
  $(this).css("color", "red");
});

$("#one").mouseleave(function(){
  changeColor(this, "black");
});

function changeColor(elem, color) {
  elem.style.color = color;
}

function changeShadow(elem, color) {
  elem.style.color = color;
}