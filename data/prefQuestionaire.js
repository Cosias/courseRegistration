

$(".monday").change(function() {
    if(this.checked){
    $(".monday_form").show();
    } else if(!this.checked){
    $(".monday_form").hide();
    $(".monday_form").children().attr('checked',false);
    }})

    $("#nextbutton").click(function() {
    $("#form_container").find(":hidden").show().next();
  //  $("#form_sub_container1").hide();
})

$(".tuesday").change(function() {
    if(this.checked){
    $(".tuesday_form").show();
    } else if(!this.checked){
    $(".tuesday_form").hide();
    $(".tuesday_form").children().attr('checked',false);
    }})

$(".wednesday").change(function() {
    if(this.checked){
    $(".wednesday_form").show();
    } else if(!this.checked){
    $(".wednesday_form").hide();
    $(".wednesday_form").children().attr('checked',false);
    }})
    
$(".thursday").change(function() {
    if(this.checked){
    $(".thursday_form").show();
    } else if(!this.checked){
    $(".thursday_form").hide();
    $(".thursday_form").children().attr('checked',false);
    }})
    
$(".friday").change(function() {
    if(this.checked){
    $(".friday_form").show();
    } else if(!this.checked){
    $(".friday_form").hide();
    $(".friday_form").children().attr('checked',false);
    }})
    
$(".saturday").change(function() {
    if(this.checked){
    $(".saturday_form").show();
    } else if(!this.checked){
    $(".saturday_form").hide();
    $(".saturday_form").children().attr('checked',false);
    }})
