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



/*   Календарь   */

if (document.querySelector('input[name="daterange"]')) {
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
}

if (document.querySelector('input[name="date"]')) {
	$(function() {
	$('input[name="date"]').daterangepicker({
		"singleDatePicker": true,
		"showDropdowns": true,
		 "autoApply": true,
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

if (document.querySelector('input[name^="date-time"]')) {
	$(function() {
	$('input[name^="date-time"]').daterangepicker({
		"singleDatePicker": true,
		"showDropdowns": true,
		 "timePicker": true,
		 "timePicker24Hour": true,
		 "locale": {
		        "format": "DD. MM. YYYY  -  HH:mm ",
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