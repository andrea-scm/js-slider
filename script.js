//icona per img successiva
$('.fa-chevron-right').click(function () {
  //immagine e pallino corrente
  var current_img = $('.img-active');
  var current_dot = $('.current-dot');
  //img e pallino successiva a quella corrente
  var next_img = $(current_img).next('img');
  var next_dot = $(current_dot).next('i');

  //console.log(next_img);

  //se orev_img ha length = 1 ovvero ha un contenuto,rimuovo la classe a quella corrente e la metto alla successiva
  //altrimenti aggiungo la classe al primo tag img del div slider-content e la rimuovo a quella corrente
  //così genero uno slider loop
  if (next_img.length > 0) {
    current_img.removeClass('img-active');
    current_dot.removeClass('current-dot');
    next_img.addClass('img-active');
    next_dot.addClass('current-dot');
  }else {
    $('.slider-content > img').first().addClass('img-active');
    $('.dot-img > i').first().addClass('current-dot');
    current_img.removeClass('img-active');
    current_dot.removeClass('current-dot');
  }

});

//icona per img precendete
$('.fa-chevron-left').click(function () {
  //immagine e pallino corrente
  var current_img = $('.img-active');
  var current_dot = $('.current-dot');
  //img e pallino precendete a quella corrente
  var prev_img = $(current_img).prev('img');
  var prev_dot = $(current_dot).prev('i');


  //se orev_img ha length = 1 ovvero ha un contenuto,rimuovo la classe a quella corrente e la metto alla precendete
  //altrimenti aggiungo la classe all'ultimo tag img del div slider-content e la rimuovo a quella corrente
  //così genero uno slider loop
  if (prev_img.length > 0) {
    current_img.removeClass('img-active');
    current_dot.removeClass('current-dot');
    prev_img.addClass('img-active');
    prev_dot.addClass('current-dot');
  }else {
    $('.slider-content > img').last().addClass('img-active');
    $('.dot-img > i').last().addClass('current-dot');
    current_img.removeClass('img-active');
    current_dot.removeClass('current-dot');
  }
});

for (var i = 0; i < $('.slider-content').children().length - 1; i++) {
  $('.dot-img').append('<i class="fas fa-circle"></i>')
};
