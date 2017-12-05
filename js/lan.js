/* 获取 cookie */
var current_lan = $.cookie('lan');


// if (current_lan == 'EN' || 'en' || 'US' || 'us' || 'en-us'){
if (current_lan == 'EN' ){
  $(".lan-en").css("display","");
  $(".lan-zh").css("display","none");

}
else {
  $(".lan-en").css("display","none");
  $(".lan-zh").css("display","");

}
