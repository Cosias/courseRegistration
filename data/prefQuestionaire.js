 
  $(".previousbutton").change(function() {
    if(this.checked){$("#form_sub_container2").show();}
    else{
    $(".form_sub").hide();
    }})

    $("#nextbutton").click(function() {
    $("#form_container").find(":hidden").show().next();
  //  $("#form_sub_container1").hide();
})


