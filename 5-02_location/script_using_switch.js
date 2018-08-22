var lang = document.querySelector('html').lang;

var opt;
switch(lang){
	case 'ko':
		opt = document.querySelector('option[value="index-kr_main.html"]');
		break;
	case 'en':
		opt = document.querySelector('option[value="index-en.html"]');
		break;
	case 'ja':
		opt = document.querySelector('option[value="index-jp.html"]');
		break;
}
opt.selected = true;

document.getElementById('form').select.onchange = function(){
	location.href = document.getElementById('form').select.value;
}
