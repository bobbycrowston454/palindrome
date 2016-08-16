$(function(){
  $("form").submit(function(event){
    var word = $("#word").val();
    var back = word.split(" ").reverse().join().split("").reverse().join("");
    alert(back);
    $("#wordOut").children().remove();
    $("#wordOut").append("<li>" + word +"</li>");
    $("#wordOut").append("<li>" + back +"</li>");
    event.preventDefault();
  });
});
