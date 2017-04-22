/*   Смена классов    */
$(function() {
	$("#side").click(function() {
		$('.left_bar ul li').removeClass('active');
	})
});
$(function() {
    $("ul.sort li").click(function() {
        $("ul.sort li").removeClass("active");
        $(this).toggleClass("active");
    })
});

/*Запрет перетаскивания картинок*/
setInterval(function(){    
	$('img').attr({
		"ondrag":"return false",
		"ondragdrop":"return false",
		"ondragstart":"return false"
	})
}, 300)
/*Запрет перетаскивания ссылок*/
setInterval(function(){    
	$('a').attr({
		"ondrag":"return false",
		"ondragdrop":"return false",
		"ondragstart":"return false"
	})
}, 300)

/* ==== Галерея =====*/

var prev = document.querySelector('.gallery button.prev');
var next = document.querySelector('.gallery button.next');
var images = document.querySelectorAll('.gallery .photos img');
var i = 0;

if (next) {
next.onclick = function () {
	images[i].style.opacity = '0';
	i++;
	if (i >= images.length) {
		i = 0;
	}
	images[i].style.opacity = '1';
}}


if (prev) {
prev.onclick = function () {
	images[i].style.opacity = '0';
	i--;
	if (i < 0) {
		i = images.length - 1;
	}
	images[i].style.opacity = '1';
}}


$(function() {
	$(".gallery .small_galery div").click(function() {
		i = $(this).attr('data-num');
		$(".gallery .photos img").css("opacity","0");
		images[i].style.opacity = '1';
	})
});

/* =========*/




/*   Календарь   */


if (document.querySelector('input[name^="date"]')) {

$(function() {
$('input[name="daterange"]').daterangepicker({
"buttonClasses": "btn btn-md",
"applyClass": "btn-primary",
"autoApply": false,
 "locale": {
        "format": "DD.MM.YY",
        "separator": " - ",
        "applyLabel": "Применить",
        "cancelLabel": "Отмена",
        "fromLabel": "От",
        "toLabel": "До",
        "customRangeLabel": "Свой",
        "daysOfWeek": [
            "Вс",
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб"
        ],
        "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        "firstDay": 1
    }
});});

$(function() {
$('input[name="date"]').daterangepicker({
	"singleDatePicker": true,
	"showDropdowns": true,
	"startDate": "01. 01. 2000",
	 "locale": {
	        "format": "DD. MM. YYYY",
	        "separator": " - ",
	        "applyLabel": "Применить",
	        "cancelLabel": "Отмена",
	        "fromLabel": "От",
	        "toLabel": "До",
	        "customRangeLabel": "Свой",
	        "daysOfWeek": [
	            "Вс",
	            "Пн",
	            "Вт",
	            "Ср",
	            "Чт",
	            "Пт",
	            "Сб"
	        ],
	        "monthNames": [
	            "Январь",
	            "Февраль",
	            "Март",
	            "Апрель",
	            "Май",
	            "Июнь",
	            "Июль",
	            "Август",
	            "Сентябрь",
	            "Октябрь",
	            "Ноябрь",
	            "Декабрь"
	        ],
	        "firstDay": 1
	    }
});});
};
