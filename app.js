
	
	// SHOW ME THE MONEY!
	//DRY --> Don't Repeat Yourself.... // keep it simple.
	//KISS --> Keep It Simple Stupid  // Don't overcomplicate it.
	// ALWAYS ALWAYS SAVE, EVEN THE SMALL THINGS.
	
// --> parameters in JS	a + b = c
	
	// define main variables, they are the one's that can be used WHEREVER in the js file.
	// i.e global variable.
	
	
	
	// make a variable && target the class of .items
	
	
$(function () {	

	// var form = $('form');
	// var input = $('input');
	var content = $('.items');
	// <input type="checkbox" name="" value="">
	
	$('form').submit(function (elof) {
		elof.preventDefault();
		var info = $('input#add').val();
		// content.append(info + '<br>' )
		$('ul.list').append("<li>" + '<input type="checkbox" name="checkbox" class="check-box" value="">' + info + "</li>");
		$('input').change(function(){
			if($(this).is(':checked')){
				$(this).parent().addClass('strike');
			}
			else {
				$(this).parent().removeClass('strike');
			};
		});
	});
	$('#clearIt').click(function(){
		$('ul.list').empty()
	});

	
	});

//End Jquery.