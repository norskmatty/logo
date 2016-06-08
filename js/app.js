$('#button').on('click', function() {
	var program = $('#program').children('option:selected').val();
	var school = $('#school').children('option:selected').val();
	console.log(program);
	console.log(school);

	if((program == "Select") && (school == "Select")) {
		$('.wrapper1 .logo img').attr('src', 'images/acicolor.png');
		$('.wrapper2 .logo img').attr('src', 'images/acmcolor.png');
		$('.wrapper3 .logo img').attr('src', 'images/afecolor.png');
	}
	else if(program == "scholarship") {
		if(school == "Select")  { 
			$('.wrapper1 .s img').attr('src', 'images/acicolor.png');
			$('.wrapper1 .l img').attr('src', 'images/aci.png');
			$('.wrapper2 .s img').attr('src', 'images/acmcolor.png');
			$('.wrapper2 .l img').attr('src', 'images/acm.png');
			$('.wrapper3 .s img').attr('src', 'images/afecolor.png');
			$('.wrapper3 .l img').attr('src', 'images/afe.png');
			}
		else if(school == "kindergarten") {
			$('.wrapper1 .sk img').attr('src', 'images/acicolor.png');
			$('.wrapper1 .sh img').attr('src', 'images/aci.png');
			$('.wrapper1 .lk img').attr('src', 'images/aci.png');
			$('.wrapper2 .sk img').attr('src', 'images/acmcolor.png');
			$('.wrapper2 .sh img').attr('src', 'images/acm.png');
			$('.wrapper2 .lk img').attr('src', 'images/acm.png');
			$('.wrapper3 .afe img').attr('src', 'images/afe.png');
		}
		else if(school == "highschool") {
			$('.wrapper1 .sh img').attr('src', 'images/acicolor.png');
			$('.wrapper1 .sk img').attr('src', 'images/aci.png');
			$('.wrapper1 .lk img').attr('src', 'images/aci.png');
			$('.wrapper2 .sh img').attr('src', 'images/acmcolor.png');
			$('.wrapper2 .sk img').attr('src', 'images/acm.png');
			$('.wrapper2 .lk img').attr('src', 'images/acm.png');
			$('.wrapper3 .sh img').attr('src', 'images/afecolor.png');
			$('.wrapper3 .lk img').attr('src', 'images/afe.png');
			$('.wrapper3 .lh img').attr('src', 'images/afe.png');
		}
	}
	else if(program == "loanprogram") {
		if(school == "Select") {
			$('.wrapper1 .l img').attr('src', 'images/acicolor.png');
			$('.wrapper1 .s img').attr('src', 'images/aci.png');
			$('.wrapper2 .l img').attr('src', 'images/acmcolor.png');
			$('.wrapper2 .s img').attr('src', 'images/acm.png');
			$('.wrapper3 .l img').attr('src', 'images/afecolor.png');
			$('.wrapper3 .s img').attr('src', 'images/afe.png');
		}
		else if (school == "kindergarten") {
			$('.wrapper1 .lk img').attr('src', 'images/acicolor.png');
			$('.wrapper1 .sh img').attr('src', 'images/aci.png');
			$('.wrapper1 .sk img').attr('src', 'images/aci.png');
			$('.wrapper2 .lk img').attr('src', 'images/acmcolor.png');
			$('.wrapper2 .sh img').attr('src', 'images/acm.png');
			$('.wrapper2 .sk img').attr('src', 'images/acm.png');
			$('.wrapper3 .lk img').attr('src', 'images/afecolor.png');
			$('.wrapper3 .sh img').attr('src', 'images/afe.png');
			$('.wrapper3 .lh img').attr('src', 'images/afe.png');
		}
		else if (school == "highschool") {
			$('.wrapper1 .aci img').attr('src', 'images/aci.png');
			$('.wrapper2 .acm img').attr('src', 'images/aci.png');
			$('.wrapper3 .lh img').attr('src', 'images/afecolor.png');
			$('.wrapper3 .sh img').attr('src', 'images/afe.png');
			$('.wrapper3 .lk img').attr('src', 'images/afe.png');
		}
	}
	else if (program == "Select") {
		if(school == "kindergarten") {
			$('.wrapper1 .k img').attr('src', 'images/acicolor.png');
			$('.wrapper1 .h img').attr('src', 'images/aci.png');
			$('.wrapper2 .k img').attr('src', 'images/acmcolor.png');
			$('.wrapper2 .h img').attr('src', 'images/acm.png');
			$('.wrapper3 .k img').attr('src', 'images/afecolor.png');
			$('.wrapper3 .h img').attr('src', 'images/afe.png');
		}
		else if (school == "highschool") {
			$('.wrapper1 .h img').attr('src', 'images/acicolor.png');
			$('.wrapper1 .k img').attr('src', 'images/aci.png');
			$('.wrapper2 .h img').attr('src', 'images/acmcolor.png');
			$('.wrapper2 .k img').attr('src', 'images/acm.png');
			$('.wrapper3 .h img').attr('src', 'images/afecolor.png');
			$('.wrapper3 .k img').attr('src', 'images/afe.png');
		}
	}


	return false;
})