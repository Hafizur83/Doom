//   Smooth Scroll Script
    $('#header a').smoothScroll();

// jQuery preloader
    $(window).on('load', function(){
        $('#preloader').fadeOut(2000)
    })

//STICKY MENU
		var topbutton = document.getElementById("topbtn");
		window.onscroll = function(){scrollFunction()};
		function scrollFunction(){
			if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
				$("#header").addClass("sticky");
				topbutton.style.display = "block";
				
			}else{
				$("#header").removeClass("sticky");
				topbutton.style.display = "none";
			}
		}

// Scroll to Menu ACtive Script
     const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('#main_nav li, .mobile_mav li');
    
    window.addEventListener('scroll', ()=> {
        let current = '';
    
    sections.forEach( section => {
        const id= section.attributes.id;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(pageYOffset >= (sectionTop - sectionHeight/3)){
            current = section.getAttribute('id')
            
        }  
    })
        navLi.forEach( li => {
            li.classList.remove('active');
            if(li.classList.contains(current)){
               li.classList.add('active')
               }
        })
})

//  Mobile Menu
   $(document).on('click','.navbar-btn , .mobile-menu li a',function(){
       if($('#header').hasClass("mobile-nav-active")){
            $('#header').removeClass('mobile-nav-active')
       }else{
           $('#header').addClass('mobile-nav-active')
       }
    });
//  Video Script
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
					duration: 2000,
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

//SCROLL TO TOP
	function topFunction(){
			window.scrollTo({top: 0, behavior:"smooth"});
		}
