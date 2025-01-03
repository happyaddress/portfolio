// JavaScript Document
var typed = new Typed('.element', {
strings: ["người hỗ trợ.", "người đồng hành.","người trợ giúp."],
typeSpeed:50,
backSpeed:50,
loop:true,
});
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
// JavaScript Document
$('#slide').owlCarousel({
	loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
})
$('.owl-menu-item').owlCarousel({
		items:4,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
responsive:{
0:{
items:1
 },
600:{
items:2
},
900:{
items:4
}
}
})

 $(function() {
            var selectedClass = "";
            $("p").click(function(){
            selectedClass = $(this).attr("data-rel");
            $("#portfolio").fadeTo(50, 0.1);
                $("#portfolio div").not("."+selectedClass).fadeOut();
            setTimeout(function() {
              $("."+selectedClass).fadeIn();
              $("#portfolio").fadeTo(50, 1);
            }, 500);
                
            });
        });

