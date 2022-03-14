//$(document).ready(function(){
   // $("#development-image").click(function(){
    //  $("#development-image").slideDown('1500').hide('1000');
    //  $("#development").show('1500');
  //  });
    //$("#development").click(function(){
      //$("#development").slideUp('1500');
     // $("#development-image").slideDown('1500');
    //});
  //});
  
 $(document).ready(function(){
    $("#image1").click(function(){
      $(".design-text").show('1500');
      $("#image1").hide();
    });
    $(".design-text").click(function(){
      $("#image1").show('1500');
      $(".design-text").hide();
  });
});
  
  //$(document).ready(function(){
  //  $("#product-image").click(function(){
    //  $("#product-image").slideDown('1500').hide('1000');
  //    $("#product").show('1500');
    //});
  //  $("#product").click(function(){
     // $("#product").slideUp('1500');
    //  $("#product-image").slideDown('1500');
    //});
 // });//