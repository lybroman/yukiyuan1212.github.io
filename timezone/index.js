$(document).ready(function(){
	var zh_time_str = '';
	var year = '';
	var month = '';
	var day = '';
	var hour = '';
	var minute = '';
	
	var snippet = ['Asia/Shanghai'];
	var current_city = moment().tz('Asia/Shanghai');

	$('#date-selection').change(function(){
		zh_time_str = $('#date-selection').val()
		//2016-01-12T01:24
		//year = zh_time_str.split('T')[0].split('-')[0]
		//month = zh_time_str.split('T')[0].split('-')[1]
		//day = zh_time_str.split('T')[0].split('-')[2]
		//hour = zh_time_str.split('T')[1].split(':')[0]
		//minute = zh_time_str.split('T')[1].split(':')[1]
		
		//calculate each time zone
		/*
		var shanghai    = moment.tz(zh_time_str.replace(/T/, ' '), "Asia/Shanghai");
		var losAngeles = shanghai.clone().tz("America/Los_Angeles");
		var london     = shanghai.clone().tz("Europe/London");

		shanghai.format();    
		losAngeles.format();
		london.format();
		alert(london.format())
		*/
		current_city = moment.tz(zh_time_str.replace(/T/, ' '), "Asia/Shanghai");

		for(var i = 0; i < snippet.length; i++)
		{
			var selected_city = current_city.clone().tz(snippet[i])
			$('span[data-src=\'' + snippet[i] + '\']').html(selected_city.format())
		}
		
	})
	
	$("#add").click(function(){
		var time_str = current_city.clone().tz($("#autocomplete").val()).format()
		
		$("#country-list span:last").after('<br><br><span>' + $("#autocomplete").val() + '</span><span> : </span><span data-src="' + $("#autocomplete").val() + '">' +  time_str + '</span>')
		snippet.push($("#autocomplete").val())
	})
})