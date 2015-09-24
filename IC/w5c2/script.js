/**
 * Created by Victor on 9/24/2015.
 */
$(document).ready(function(){
  $("#header").mouseenter(function(){
    $("#header").hide();
  });
  $("#footer").click(function(){
    $("#header").show();
  });
  $("#copy").click(function(){
    $("#here").load("animations.html #copy");
  });
  $("button").click(function(){
    $.get("animations.html", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
  $("#home").click(function(){
    $("#here").load("http://courses.ics.hawaii.edu/ics415f15/modules/module-javascript/");
  });
});