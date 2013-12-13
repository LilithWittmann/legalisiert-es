(function (document, $) {

	$("ul.link li").on('click', function(e){         

		$("ul li").each(function(index, value){
			$("#"+$(value).attr("id")).css("display", "none");
		});

		$("#"+$(this).attr("id")).css("display", "block");

	});

})(document, jQuery);