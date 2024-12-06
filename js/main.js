$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'#ffffff','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	  updateCount();
   });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});

});
// Interactivity for Sub-Brands Section
document.querySelectorAll('#subbrands .brand a').forEach(link => {
    link.addEventListener('click', event => {
        alert('You clicked on a sub-brand: ' + event.target.innerText);
    });
});
  
  // Event listener for clicking 'About' link or 'Read More' button
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll("a[href='#about'], a[href='javascript:void(0)'][onclick='loadAboutUsFromScript()']").forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('About Us link clicked');
        loadAboutUsFromScript();
      });
    });
  });
  $(window).on('load scroll', function() {
    const header = $('.header');
    if ($(window).scrollTop() > 35) {
        header.removeClass('transparent').addClass('scrolled');
    } else {
        header.removeClass('scrolled').addClass('transparent');
    }
});

function showPDF(element) {
  const modal = document.getElementById('pdfModal');
  const iframe = document.getElementById('pdfIframe');
  const pdfPath = element.getAttribute('data-pdf');
  iframe.src = pdfPath;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // 禁止滚动
}

function closePDF() {
  const modal = document.getElementById('pdfModal');
  const iframe = document.getElementById('pdfIframe');
  modal.style.display = 'none';
  iframe.src = ''; // 清空路径
  document.body.style.overflow = 'auto'; // 恢复滚动
}

function openExternalLink() {
  window.open('http://www.jkcnz.com/#/', '_blank'); // '_blank' 在新标签页打开
}

// 仅在 Gogo Mobile 中绑定 Hover 效果
$(document).ready(function () {
  $(".gogo-mobile").hover(
    function () {
      $(this).find("h6").text("Coming Soon").css("color", "white");
      $(this).find("p").text("").css("color", "gray");
    },
    function () {
      $(this).find("h6").text("Gogo Mobile").css("color", "");
      $(this).find("p")
        .text("Reusable global data SIM cards supporting multi-country connectivity.")
        .css("color", "");
    }
  );
});






  
  
  
  
  
  
  