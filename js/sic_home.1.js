$(document).ready(function () {
  $('.tabs').tabs();
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip();
  $('.sidenav').sideNav();


  /* OCULTAR LOS DIVS DEL SIDE-NAV */
  for(var i=1; i < 9; i++){
    $("#nivel"+i).hide();
  }
  
});