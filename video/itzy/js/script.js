function main(){
	let thumbs = [
		"<li id='zndvqTc4P9I'><img src='images/thumbs/ICY.jpg'><p>ITZY(있지) ICY ... <br>2019.07.29</p></li>",
		"<li id='pNfTK39k55U'><img src='images/thumbs/달라달라.jpg'><p>ITZY(있지) 달라달라(... <br>2019.02.12</p></li>",
	];
	var flag = 1;
	setList(flag, thumbs);


	$('#list').find('li').click(function(){
		setVideo($(this).attr('id'));
	});

	$('#list-nav-Btn').children().click(function(){
		$('#list').empty();
		setList($(this).text(), thumbs);	
		$('#list-nav-Btn').children().find('a').attr('class', 'list-nav-off');
		($(this).find('a').attr('class', 'list-nav-on'));
	});

}
function setList(flag, thumbs){
	if(flag == 1){
		cnt = 0;
	}else if(flag == 2){
		cnt = 3;
	}else if(flag == 3){
		cnt = 6;
	}

	while(true){ 
		$('#list').append(thumbs[cnt]);
		$('#list').children().on('click', function(){
			setVideo($(this).attr('id'));
		});
		cnt++;
		if(cnt%3 == 0 || thumbs[cnt] == null){
			break;
		} 
	}
}
function setVideo(addr){
	$('.movie').empty();
	$('.movie').append("<iframe allowfullscreen='' frameborder='0' height='360' src='//www.youtube.com/embed/" +
	addr + "' width='640'></iframe>");
}
