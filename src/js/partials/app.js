console.log("in app.js")
$(".mob__nav").on('click',function(){
      if($(".nav__header").hasClass('show__nav__header')){
        $(".nav__header").removeClass('show__nav__header');
      }else{
        $(".nav__header").addClass('show__nav__header');
      }
    });