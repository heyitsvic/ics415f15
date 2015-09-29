/**
 * Created by Victor on 9/24/2015.
 */
$(document).ready(function(){
  //hide all answers by default.
  $("#a1").hide();
  $("#a2").hide();
  $("#a3").hide();
  $("#a4").hide();
  $("#a5").hide();

  //hide the '-' signs so only the '+' signs are visible.
  $("#q1minus").hide();
  $("#q2minus").hide();
  $("#q3minus").hide();
  $("#q4minus").hide();
  $("#q5minus").hide();

  //clicking on the question displays or hides the answer.
  $("#q1").click(function() {
    if($("#a1").is(":visible")) {
      $("#a1").hide();
      $("#q1plus").show();
      $("#q1minus").hide();
    }
    else {
      $("#a1").show();
      $("#q1plus").hide();
      $("#q1minus").show();
    }
  });
  $("#q2").click(function() {
    if($("#a2").is(":visible")) {
      $("#a2").hide();
      $("#q2plus").show();
      $("#q2minus").hide();
    }
    else {
      $("#a2").show();
      $("#q2plus").hide();
      $("#q2minus").show();
    }
  });
  $("#q3").click(function() {
    if($("#a3").is(":visible")) {
      $("#a3").hide();
      $("#q3plus").show();
      $("#q3minus").hide();
    }
    else {
      $("#a3").show();
      $("#q3plus").hide();
      $("#q3minus").show();
    }
  });
  $("#q4").click(function() {
    if($("#a4").is(":visible")) {
      $("#a4").hide();
      $("#q4plus").show();
      $("#q4minus").hide();
    }
    else {
      $("#a4").show();
      $("#q4plus").hide();
      $("#q4minus").show();
    }
  });
  $("#q5").click(function() {
    if($("#a5").is(":visible")) {
      $("#a5").hide();
      $("#q5plus").show();
      $("#q5minus").hide();
    }
    else {
      $("#a5").show();
      $("#q5plus").hide();
      $("#q5minus").show();
    }
  })

  //counts the number of links from the url specified in the form when the form is submitted.
  $("form").submit(function() {
    var url = $("#url").val();
    $.get(url, function(data){
      var numOfLinks = data.match(/a href=/g).length;
      $("#results").text("There are " + numOfLinks + "links in the given url.");
    });
  });
});

