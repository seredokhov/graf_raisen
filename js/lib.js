/*  Слайдер   */

$(function() {
	$("#owl-demo").owlCarousel({
		navigation : true,
		navigationText : ["",""],
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
});

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




/*  Галерея  */

function Gallery(target) {
  this.target = $(target);
  this.images = $('.photos img', this.target);
  this.index = 0;
}

Gallery.prototype.init = function() {
  var self = this;
  $('button.next', this.target).click(function() {
    self.images.eq(self.index).css('opacity',  0);
    self.index++;
    if (self.index >= self.images.length) {
      self.index = 0;
    }
    self.images.eq(self.index).css('opacity', 1);
    $(this).parents('div[class*="gallery"]').find(".small_galery div").removeClass("showed");
    $(this).parents('div[class*="gallery"]').find(".small_galery img[data-num ="+self.index+"]").parent().addClass("showed");
  });
  $('button.prev', this.target).click(function() {
    self.images.eq(self.index).css('opacity',  0);
    self.index--;
    if (self.index < 0) {
      self.index = self.images.length - 1;
    }
    self.images.eq(self.index).css('opacity', 1);
    $(this).parents('div[class*="gallery"]').find(".small_galery div").removeClass("showed");
    $(this).parents('div[class*="gallery"]').find(".small_galery img[data-num ="+self.index+"]").parent().addClass("showed");
  });
  $('.small_galery img', this.target).click(function() {
    self.index = $(this).attr('data-num');
    self.images.css('opacity', 0);
    self.images.eq(self.index).css('opacity', 1);
    $(this).parents('div[class*="gallery"]').find(".small_galery div").removeClass("showed");
    $(this).parent().addClass("showed");
  });
};

$(function() {
  $('.gallery').each(function() {
    new Gallery(this).init();
  });
});



/* ====  Количество человек (выпадающее меню)  ====*/

$(document).on(
	'click.bs.dropdown.data-api', 
	'[class*="fix"]',
	function (e) { e.stopPropagation() }
);

$(function() {
	$(".fix .range_inputs .applyBtn").click(function() {
		$(this).parents('.open').removeClass("open");

	})
	$(".fix .range_inputs .cancelBtn").click(function() {
		$('#human').val( 1);
		$(".fix input[type='radio']").removeAttr("checked");
		$(".fix input[name='man']:first").prop("checked", true);
		$(this).parents('.open').removeClass("open");
	})
});


/* Чекбоксы выпадающего меню  (добавить клонирование селектов) */

$(function() {
  var bornBlock = $('.children_born_block');
  var target = $('#human')
    , men = $('.fix input[name="man"]')
    , children = $('.fix input[name="child"]');
  children.click(function() {
    if ('on' === $(this).data('state')) {  
      $(this).data('state', 'off').removeAttr('checked');
      bornBlock.hide();
      bornBlock.find('.child_data_born').not('.child_data_born:eq(0)').remove();
    }
    else {
      children.data('state', 'off');
      $(this).data('state', 'on').attr('checked', 'checked');
      var coin = $(this).data('coin');
      bornBlock.show();
      bornBlock.find('.child_data_born').not('.child_data_born:eq(0)').remove();
      var num = 1;
      for (i = 0; i < coin-1; i++) {
        bornBlock.find('.child_data_born:eq(0)').clone().appendTo(bornBlock).attr("id", "child-" + ++num);
      }
    }
  });
  men.add(children).click(function() {
    target.val((men.filter(':checked').val() || '')
      + (children.filter(':checked').val() || ''));
  });
});


/*   Добавление количества человек в форму booking   */

$(function() {
	var changeHumans = $('#change_humans');
	var humans = $('#humans');
	var form = humans.find('.clearfix:eq(0)');

	changeHumans.change(function(){
		var num = +changeHumans.val();
		var clearf = humans.find('.clearfix');

		clearf.not('.clearfix:eq(0)').remove();
		$('input[name = "date_born"]').val('');

		for (i  = 1; i < num; i++) {
			var count = i;
			form.clone().appendTo(humans).attr("id", "human-" + ++count);
		}

		$(function(){
			$('input[name = "date_born"]').mask("99/99/9999");
		});
	});

	var changeChildrens = $('#change_childrens');
	var childrens = $('#childrens');

	changeChildrens.change(function(){
		var num = +changeChildrens.val();
		var clearf = childrens.find('.clearfix');
		childrens.css('display', 'block');

		if (num === 0) {
			childrens.css('display', 'none');
		}

		clearf.remove();
		$('input[name = "date_born"]').val('');

		for (i  = 1; i <= num; i++) {
			var count = i;
			form.clone().appendTo(childrens).attr("id", "child-" + count);
		}

		$(function(){
			$('input[name = "date_born"]').mask("99/99/9999");
		});
	});
});


//   Маска даты
$(function() {
	if ($('.add_people')) {
		$(function(){
			$('input[name = "date_born"]').mask("99/99/9999");
		});
	}
});

//   Уточнение адреса 
$(function() {
	$('#humans, #childrens').on('change','.extract input' , function(e){
		$(this).parent().parent().siblings('.extract_location').toggleClass('hidden');
	})
})


//	Акордион
$(function() {
	var acord = $('.left_bar.slide');
	acord.click(function(){
		acord.not(this).children('div').slideUp();
		$(this).children('div').slideDown();
	})
});


// Значение поля выбора даты filter1 по умолчанию (если нужно)
// @param {string} x - значение
/*
$(function(){
	$('.free_time').find('input').val(x);
})
*/


/*   Календари   */

var calendarData = {
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
	}

if (document.querySelector('input[name="daterange"]')) {
	$(function() {
		var data = calendarData;
		data.buttonClasses = "btn btn-md";
		data.applyClass = "btn-primary";
		data.applyClass = "apply_btn";
		data.locale.format = "DD. MM. YY";
	$('input[name="daterange"]').daterangepicker(data);});
}
if (document.querySelector('input[name="custom_daterange"]')) {
	$(function() {
		var data = calendarData;
		data.buttonClasses = "btn btn-md";
		data.applyClass = "btn-primary";
		data.applyClass = "apply_btn";
		data.opens = "left";
		data.locale.format = "DD. MM. YYYY";
	$('input[name="custom_daterange"]').daterangepicker(data);});
}

if (document.querySelector('input[name="date"]')) {
	$(function() {
		var data = calendarData;
		data.singleDatePicker = true;
		data.showDropdowns = true;
		data.autoApply = true;
		data.startDate = "01. 01. 2000";
		$('input[name="date"]').daterangepicker(data);});
};

if (document.querySelector('input[name^="date-time"]')) {
	$(function() {
		var data = calendarData;
		data.singleDatePicker = true;
		data.showDropdowns = true;
		data.timePicker = true;
		data.applyClass = "apply_btn";
		data.timePicker24Hour = true;
		$('input[name^="date-time"]').daterangepicker(data);});
};
