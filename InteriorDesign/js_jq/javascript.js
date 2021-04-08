$(document).ready(function(){
	var window_width = $(window).width();
	
	var i = 3;
	var b = 3;
	var f = 2;
	$('.title_animate').css('left',window_width+"px");
	$(window).load(function(){
		$('.title_animate').addClass('animate_blocks');
	})
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 500){
			var animate = setInterval(function(){
				if(i == 0){
					clearInterval(animate);
				}
				$(".inside_block").eq(i).addClass('animate_blocks');
					
				i--;
			},200)
		}
		if(scrollTop >= 900){
			var animate2 = setInterval(function(){
				if(b == 0){
					clearInterval(animate2);
				}
				$(".about").eq(b).addClass('animate_blocks');
				b--;
			},200)
		}
		if(scrollTop >= 1300){
			var animate3 = setInterval(function(){
				if(f == 0){
					clearInterval(animate3);
				}
				$(".our_news_cont_animate").eq(f).addClass('animate_blocks');
				f--;
			},200)
			$(".post_animate_content").addClass('animate_blocks');
			$(".whats_new").addClass('animate_blocks');
		}
		if(scrollTop >= 1600){
				$(".beautifying_cont_animate").addClass('animate_blocks');
		}
		if(scrollTop >= 200){
				$("header").addClass('header_new_class');
				$(".main_li").addClass('li_new_class');
		}
		if(scrollTop <= 200){
					$("header").removeClass('header_new_class');
					$(".main_li").removeClass('li_new_class');
				}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})