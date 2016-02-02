$(document).ready(function(){
console.log("in app.js");

$('#add__new__item').on('click', _showModal);
$(".mob__nav").on('click', _adaptiveMenu);
$('#fake__project__image').on('click', _fakeInput);
$('#fake__input__file').on('click', _fakeInputFile);
$('#feedback__buttons__clean').on('click', _clearForm);


 $('#feedback__form, #form__auth,#add__new__project').validate({
		rules: {
			name : {
				required : true,
				minlength : 2,
			},
			email : {
				required : true,
				email : true
			},
			comment : {
				required : true
			},
			captcha : {
				required : true
			},
			password : {
				required : true,
				minlength : 6
			},
			name__project : {
				required : true,
				minlength : 3,
			},
			image__project : {
				required: true
			},
			url : {
				required: true
			},
			description : {
				required: true
			}
		},
		messages: {
			name: {
				required: "Пожалуйста введите ваше имя",
				minlength: "Ваше имя должно быть больше 2 символов"
			},
			email: {
				required: "Пожалуйста введите ваш Email",
				email: "Введите корректный email"
			},
			comment: {
				required : "Пожалуйста введите сообщение"
			},
			captcha : {
				required : "Пожалуйста введите код с картинки"
			},
			password : {
				required : "Пожалуйста введите пароль",
				minlength: "Ваш пароль должен быть больше 6 символов"
			},
			name__project : {
				required: 'Пожалуйста введите название проекта',
				minlength: 'Название не может состоять меньше чем из 3 букв'
			},
			image__project : {
				required: 'Пожалуйста загрузите изображение'
			},
			url : {
				required: 'Пожалуйства введите адрес проекта'
			},
			description : {
				required: 'Пожалуйства введите описание проекта.'
			}
		}
});


});

/*Очистка инпутов и лейблов*/
var _clearForm = function(){
	console.log('donee');

	$(".form").find('.error').removeClass('error');
	$("label[id]").empty().css('display','none');


	/*if ($('.form').find(".error")){
		$('.form').removeClass('error');
	};*/

	/*if ($('.form__input').hasClass('error')){
		$('.form__input').removeClass('error');
	};*/
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



