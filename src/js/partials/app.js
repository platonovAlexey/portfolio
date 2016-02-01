$(document).ready(function(){
console.log("in app.js");

$('#add__new__item').on('click', _showModal);
$(".mob__nav").on('click', _adaptiveMenu);
$('#fake__project__image').on('click', _fakeInput);
$('#fake__input__file').on('click', _fakeInputFile);
$('#feedback__buttons__clean').on('click', _clearForm);


 $('#feedback__form').validate({
		rules: {
			name : {
				required : true,
				minlength : 2,
			},
			email : {
				required : true,
				minlength : 5,
				email : true
			},
			comment : {
				required : true
			},
			captcha : {
				required : true
			}
		},
		messages: {
			name: {
				required: "Пожалуйста введите ваше имя",
				minlength: "Ваше имя должно быть больше 2 символов"
			},
			email: {
				required: "Пожалуйста введите ваш Email",
				minlength: "Ваш email должен быть больше 5 символов",
				email: "Введите корректный email"
			},
			comment: {
				required : "Пожалуйста введите сообщение"
			},
			captcha : {
				required : "Пожалуйста введите код с картинки"
			}
		}
});


});

/*Очистка инпутов и лейблов*/
var _clearForm = function(){
	console.log('donee');
	if ($('.form__input').hasClass('error')){
		$('.form__input').removeClass('error');
	};
}

/*Адаптивное меню*/
var _adaptiveMenu = function(){
	if($(".nav__header").hasClass('show__nav__header')){
	$(".nav__header").removeClass('show__nav__header');
		}else{
	$(".nav__header").addClass('show__nav__header');
	}
};

/*Открытие модального окна*/
var _showModal = function(){
	$('#new__project__popup').bPopup({
		speed: 650,
		transition: 'slideDown'
	})
};

/*нажатие на фейковый инпут - открывает окно*/
var _fakeInput = function(){
	$('#project__image').trigger('click');
};

/*нажатие на кнопку с облаком - открывает окно*/
var _fakeInputFile = function(){
	$('#project__image').trigger('click');
};



