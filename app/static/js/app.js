$(document).ready(function() {
	$('#datepicker').datepicker({
	    format: "dd/mm/yyyy",
	    defaultDate: new Date(),
	    todayHighlight: true,
	    todayBtn: "linked",
	    toggleActive: true
	});
	$('#datepicker').datepicker('update', new Date());
	$('#my_hidden_input').val(
	        $('#datepicker').datepicker('getFormattedDate')
    );
	$('#datepicker').on('changeDate', function() {
	    $('#my_hidden_input').val(
	        $('#datepicker').datepicker('getFormattedDate')
    	);
    });
})