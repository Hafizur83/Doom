//SCROLL TO TOP
	function topFunction(){
			window.scrollTo({top: 0, behavior:"smooth"});
		}


jQuery(document).ready(function () {
		//STICKY MENU
		var topbutton = document.getElementById("topbtn");
		window.onscroll = function(){scrollFunction()};
		function scrollFunction(){
			if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
				$("nav").addClass("sticky");
				topbutton.style.display = "block";
				
			}else{
				$("nav").removeClass("sticky");
				topbutton.style.display = "none";
			}
		}
		//  Video
		$('.video_icon').click(function () {
			$('video')[0].play();
		});
		$('.close').click(function () {
			$('video')[0].pause();
		});
		$('body').on('hidden.bs.modal', '.modal', function () {
			$('video').trigger('pause');
		});


	//  Counter JS
		$('.count').each(function () {
				$(this).prop('Counter', 0).animate({
					Counter: $(this).text()
				}, {
					duration: 8000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
	// Skill JS
		$(".progress-bar").each(function(){
		var $this = $(this);
		var per = $this.attr("per");
			$this.css('width',per+'%');
	});
});



