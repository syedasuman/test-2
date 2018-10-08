// write your JS code here

function show_alert() {
            alert("Your Mesge has be sent!");
        }
        $(function(){
	let $write = $('#write'),
		shift = false,
		capslock = false;
	
	$('#keyboard .abc').click(function(){
		let $this = $(this),
			character = $this.html();
		
		
		// Add the character
		$write.html($write.html() + character);

	});
});