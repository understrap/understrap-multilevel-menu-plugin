// Add your JS customizations here
;(function($, document, window){
	'use strict';
	$(document).ready(function () {
		
		$('.navbar .dropdown').on('click', function (e) {
			var $el = $(this).children('.dropdown-toggle');
			var $parent = $el.offsetParent(".dropdown-menu");
			$(this).parent("li").toggleClass('open');
	
			if (!$parent.parent().hasClass('navbar-nav')) {
				if ($parent.hasClass('show')) {
					$parent.removeClass('show');
					$el.next().removeClass('show');
					$el.next().css({"top": -999, "left": -999});
					if ( $el.next().is(':off-right') ) {
						$el.next().css({"top": '-11px', "left": -$el.next().outerWidth()});
					}

					if ( $el.next().is(':off-left') ) {
						$el.next().css({"top": $parent.outerHeight(), "left": 0});
					}
				} else {
					$parent.parent().find('.show').removeClass('show');
					$parent.addClass('show');
					$el.next().addClass('show');
					$el.next().css({"top": '-11px', "left": $parent.outerWidth()});
					if ( $el.next().is(':off-right') ) {
						$el.next().css({"top": '-11px', "left": -$el.next().outerWidth()});
					}

					if ( $el.next().is(':off-left') ) {
						$el.next().css({"top": $parent.outerHeight(), "left": 0});
					}
				}
				e.stopPropagation();
			}
		});
	
		$('.navbar .dropdown').on('hidden.bs.dropdown', function () {
			$(this).find('li.dropdown').removeClass('show open');
			$(this).find('ul.dropdown-menu').removeClass('show open');
		});
	});


	$.extend($.expr[':'], {
		'off-top': function(el) {
			return $(el).offset().top < $(window).scrollTop();
		},
		'off-right': function(el) {
			return $(el).offset().left + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
		},
		'off-bottom': function(el) {
			return $(el).offset().top + $(el).outerHeight() - $(window).scrollTop() > $(window).height();
		},
		'off-left': function(el) {
			return $(el).offset().left < $(window).scrollLeft();
		},
		'off-screen': function(el) {
			return $(el).is(':off-top, :off-right, :off-bottom, :off-left');
		}
	});


})(jQuery, document, window);

