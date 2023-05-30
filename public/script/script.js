$(window).on('scroll', function() {
  var scroll = $(window).scrollTop();
  if (scroll>=80) {
    $('.scroll-header').css('display', 'flex');  
  } else {
    $('.scroll-header').css('display', 'none');  
  }
});

$('.scroll-search-icon').click(()=>{
  $('.search').focus();
})