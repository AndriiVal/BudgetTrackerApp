$(document).ready(function() {

	$('#datepicker').datepicker({
	    format: "yyyy-mm-dd",
	    defaultDate: new Date(),
	    todayHighlight: true,
	    todayBtn: "linked",
	    toggleActive: true
	});

	$('#datepicker').datepicker('update', new Date());

	$('#input_date').val(
	        $('#datepicker').datepicker('getFormattedDate')
    );

	$('.'+ $('#input_date').val()).show();

	$('#datepicker').on('changeDate', function() {
	    $('#input_date').val(
	        $('#datepicker').datepicker('getFormattedDate')
    	);
    $('.collapse').hide();
    $('.'+ $('#input_date').val()).show();
    });

})