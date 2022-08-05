$(document).ready(function(){

    $(".show").click(function(){
      $("#side").fadeIn();
      $(".show").hide();
      $(".hide").show();
    });

    $(".hide").click(function(){
      $("#side").fadeOut();
      $(".hide").hide();
      $(".show").show();
    });


  });
