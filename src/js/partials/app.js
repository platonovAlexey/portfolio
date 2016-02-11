$(document).ready(function(){
console.log("in app.js");

$('#feedback__form, #form__auth, #add__new__project').validate({
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
				minlength : 5
			},
			name__project : {
				required : true,
				minlength : 3,
			},
			image__project : {
				required: true,
				accept: "images/*"
			},
			url : {
				required: true,
				url: true
			},
			description : {
				required: true,
				minlength : 6
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
				required: 'Пожалуйста загрузите изображение',
				accept:'Пожалуйста загрузите в формате jpg'
			},
			url : {
				required: 'Пожалуйста введите адрес проекта',
				url: 'Пожалуйста вводите адрес через http'
			},
			description : {
				required: 'Пожалуйста введите описание проекта.',
				minlength: 'Пожалуйста опишите проект'
			}
		}
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

/*нажатие на фейковый инпут - открывает окно*/
var _fakeInput = function(){
	$('#project__image').trigger('click');
};

/*нажатие на кнопку с облаком - открывает окно*/
var _fakeInputFile = function(){
	$('#project__image').trigger('click');
};

/*Открытие модального окна*/
var _showModal = function(e){
		e.preventDefault();

var divPopup = $('#new__project__popup');
		form = divPopup.find ('.form');

		divPopup.bPopup({
		speed: 650,
		transition: 'slideDown',
		onClose:function(){
			divPopup.find('.server-mes').text(' ').hide();
			divPopup.find('.error').removeClass('error');
			$("label[id]").empty().css('display','none');
		}
	})
};

/*Добавление проекта*/
var _addProject = function(e){
	console.log('добавление проекта');
	e.preventDefault();


//объявляем переменные
	var form = $(this),
			url = 'add_project.php',
			myServerGiveMeAnAnswer = _ajaxForm(form, url);


	console.log(data);

//запрос на сервер

	myServerGiveMeAnAnswer.done(function(ans){
		console.log(ans);

		var successBox = form.find('.success-mes'),
				errorBox = form.find('.error-mes');

		if(ans.status === 'OK'){
			console.log(ans.text);
			errorBox.hide();
			successBox.text(ans.text).show();
		}else{
			console.log(ans.text);
			successBox.hide();
			errorBox.text(ans.text).show();
		}
	})

};

/*Универсальная функция
Для ее работы используется
@form - форма
@url - адрес php файла, к которому мы обращаемся
1. собирает данные из формы
2. проверет форму
3. делает запрос на сервер и возвращает ответ

*/
var _ajaxForm = function(form, url){

	//if(!valid) return false;

	data = form.serialize();

	var result = $.ajax({
		url: url,
		type: 'POST',
		dataType: 'json',
		data: data,
	}).fail(function(ans){
		console.log('Проблемы в PHP');
		form.find('.error-mes').text('На сервере произошла ошибка').show();
	});

	return result;

};

// /*Универсальный PHP скрипт обратной связи*/
var _feedForm = function(e){
	e.preventDefault();
	console.log('Отправка!');
	var feedForm = $('#feedback__form'),
			feedInput = feedForm.find('.form__input');

	if((feedInput).val() == ''){
		console.log("Заполните поля!");
	}else{
		var th = $(this);
	$.ajax({
		type:'POST',
			url:'mail.php',
			data:th.serialize(),
		}).done(function(){
				console.log('Отправка формы');
				setTimeout(function(){
				th.trigger('reset');
				},2000);
				});
	};
	return false;
};

$('#add__new__item').on('click', _showModal);
$(".mob__nav").on('click', _adaptiveMenu);
$('#fake__project__image').on('click', _fakeInput);
$('#fake__input__file').on('click', _fakeInputFile);
$('#feedback__buttons__clean').on('click', _clearForm);
$('#add__new__project').on('submit', _addProject);
$('#feedback__form').on('submit', _feedForm);

});
