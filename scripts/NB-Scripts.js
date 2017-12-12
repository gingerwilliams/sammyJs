function accordian(){
	var acc = document.getElementsByClassName("accordion_trigger");
	var i;
	
	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function(){
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		}
	}
}

function togglePassword() {
	//Place this plugin snippet into another file in your application
	$.toggleShowPassword = function (options) {

		var settings = $.extend({
			field: "#password",
			control: "#toggle_show_password",
		}, options);

		var control = $(settings.control);
		var field = $(settings.field)

		control.bind('click', function () {
			if (control.is(':checked')) {
				field.attr('type', 'text');
			} else {
				field.attr('type', 'password');
			}
		})
	};

	//Here how to call above plugin from everywhere in your application document body
	$.toggleShowPassword({
		field: '#test1',
		control: '#test2'
	});
}

$(document).ready(function(){
	prettyPrint();
	togglePassword();
	accordian();
});


