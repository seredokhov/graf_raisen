$(function() {
	$("#dom").click(function() {
		$('.left_bar ul li').removeClass('active');
	})
});
$(function() {
    $("ul.sort li").click(function() {
        $("ul.sort li").removeClass("active");
        $(this).toggleClass("active");
    })
});