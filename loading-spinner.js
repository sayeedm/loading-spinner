(function($) {
    $.fn.loadingSpinner = function(options) {
	options = $.extend({
            loader: null
        }, options);

	var index = $(this).attr('id') ;
	var spinnerId = 'overlay-' + index;
		
        $('<div class="overlay-container" id="' + spinnerId + '"><div class="loader"></div></div>').appendTo('body');

	

	$("#" + spinnerId).css({  
  		opacity: 0.5,
  		top: $(this).offset().top,
  		width: $(this).outerWidth(),
  		height: $(this).outerHeight()
	});

	$(".loader").css({
		top:  ($(this).offset().top) + $(this).width() / 4,
		left: ($(this).offset().left) + $(this).height() / 4,
		width: $(this).width() / 2,
		height: $(this).height() /2 
	});


	function show(){
		$("#" + spinnerId).fadeIn();
	}

	function hide(){
		$("#" + spinnerId).fadeOut();
	}

	this.data('loadingSpinner', {
        	show: show,
		hide: hide
        });

        return this;
    }
})(jQuery);
