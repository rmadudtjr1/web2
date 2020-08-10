function main(){
	let thumbs = [
		"<li id='33TNED9LZeY'><img src='images/thumbs/blame.jpg'><p>낙준 - 탓... <br>2017.06.28</p></li>",
		"<li id='1_0_O6_Zbck'><img src='images/thumbs/with you.jpg'><p>버나드 박, 혜림(원더걸스)... <br>2016.04.03</p></li>",
		"<li id='B4eYSwNjdNk'><img src='images/thumbs/before the rain.jpg'><p>버나드 박(Bernard P... <br>2014.10.13</p></li>",
		"<li id='-TpbcrXz4UY'><img src='images/thumbs/im.jpg'><p>버나드 박(Bernard P... <br>2014.10.05</p></li>",	
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
