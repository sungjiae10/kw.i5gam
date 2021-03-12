// JavaScript Document


//tab
$(function(){
	/*
	$(".tabmenu li a").click(function(e) {
	e.preventDefault();
	});

	$( '.tab-container .tab-content:not(:first)' ).hide();

	$('.tabmenu li a').on("click focusin", function(e) {
		$('.tab-content').hide();
		$('.tabmenu .current').removeClass("current");
		$(this).parent("li").addClass('current');
		var clicked = $(this).attr('href');
		$('.tab-container ' + clicked).show();
	})
	*/
	
	$('.tab-container').children().css('display', 'none');
    $('.tab-container > div:first-child').css('display', 'block');
    $('.tabmenu li:first-child').addClass('current');
    //$('.tab-sub').delegate('.tabmenu>li', 'click', function() {
	$('.tabmenu li a').on("click", function(e) {
		e.preventDefault();
		var aa = $(this).parent();
        var index = $(aa).parent().children().index(aa);
        $(aa).siblings().removeClass("current");
        $(aa).addClass('current');
        $(aa).parent().next('.tab-container').children().hide().eq(index).show();
    });
	
});


//tool_tip 이벤트
window.onload = function init_toolTip_event() {
	$(".tool_tip").children(".open").click(function () {
		$(".tool_tip").children(".tip_con").hide();
		$(".tool_tip").css("z-index","0");
		$(this).next(".tip_con").show();
		$(this).parent(".tool_tip").css("z-index","10000");
	});

	$(".tip_con").children(".close").click(function () {
		$(this).parent(".tip_con").hide();
		$(this).parent(".tip_con").parent(".tool_tip").css("z-index","0");
	});
}


/*accordion*/
$(document).ready(function() {
	var Accordion = function(el, multiple ) {
			this.el = el || {};
			this.multiple = multiple || false;

			var links = this.el.find('.article-title');
			links.on('click', {
					el: this.el,
					multiple: this.multiple
			}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
			var $el = e.data.el;
			$this = $(this),
					$next = $this.next();
			$next.slideToggle();
			$this.parent().toggleClass('current');
			var isdropdown = false;
			var target_class = $(e.target).attr("class");
			if(typeof target_class !== "undefined"){
				if(target_class.indexOf("dropdownon") > -1){
					isdropdown = true;
				}
			}

			if (!e.data.multiple && isdropdown) {
					$el.find('.accordion-content').not($next).slideUp().parent().removeClass('current');
			};
	}
	var accordion = new Accordion($('.__com-accordion'), false);
	var accordion = new Accordion($('.__gw-info-user'), false);
	var accordion = new Accordion($('.__gw-docu-tool-user'), false);
	var accordion = new Accordion($('.__won-accordion'), false);
	var accordion = new Accordion($('.__set-accordion'), false);
});

/*Dropdown toggle*/
$(function() {

	$('.dropdown-toggle').click(function(){
	  $(this).next('.dropdown').slideToggle("fast");
	});

	$(document).on('click', function (e) {
		if(!$(".dropdown-toggle").is(e.target) && !$(".dropdown-toggle").has(e.target).length){
			$('.dropdown').slideUp("fast");
			
			$('.dropdown-toggle').removeClass("current")
		}                       
	});
	
	$(".dropdown-toggle").click(function(){
	  $(this).toggleClass("current");
	});

});