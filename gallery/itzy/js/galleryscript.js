function main(){
	let images = [];
	var flag = 1;
	for(i = 0; i < 87; i++){
		images.push("<li><a class='fancybox-effects-a' href='images/photo/" + (i+1) 
		+ ".jpg' data-fancybox-group='gallery'><img src='images/photo/thumb/" + (i+1) + ".jpg' alt=''/></a></li>");								
	}; 

	setList(flag, images);

	$('#list-nav-Btn').children().click(function(){
		$('#clearfix').empty();
		setList($(this).text(), images);	
		$('#list-nav-Btn').children().find('a').attr('class', 'list-nav-off');
		($(this).find('a').attr('class', 'list-nav-on'));
	});
}
function setList(flag, images){
	if(flag == 1){
		cnt = 0;
	}else if(flag == 2){
		cnt = 40;
	}else if(flag == 3){
		cnt = 80;
	}

	while(true){ 
		$("#clearfix").append(images[cnt]);
							
		cnt++;
		if(cnt%40 == 0 || images[cnt] == null){
			break;
		} 
	}
}