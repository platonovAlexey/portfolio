console.log("in app.js")
$(".mob__nav").on('click',function(){
      if($(".nav__header").hasClass('show__nav__header')){
        $(".nav__header").removeClass('show__nav__header');
      }else{
        $(".nav__header").addClass('show__nav__header');
      }
    });

$("#add__new__item").on('click', function(){
	$('#new__project__popup').bPopup({
		speed: 650,
		transition: 'slideDown'
	})
});
