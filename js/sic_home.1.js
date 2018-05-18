$(document).ready(function () {
  $('.tabs').tabs();
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip();
  $('.sidenav').sideNav();

  /* OCULTAR LOS DIVS DEL SIDE-NAV */
  for (var i = 2; i < 9; i++) {
    $("#nivel" + i).hide();
  }

  $('#pdf1').on('click', function () {
    $('#content-viewer')
      .empty()
      .html('<embed src="pdf/4-Cuidado-Territorios_sostenibles.pdf" type="application/pdf" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">');
  });

});