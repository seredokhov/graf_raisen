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