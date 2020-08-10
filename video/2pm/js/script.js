function main(){
	let thumbs = [
		"<li id='yNe39XGY9YU'><img src='images/thumbs/Lucky Charm.jpg'><p>2PM NICHKHUN (닉... <br>2019.02.18</p></li>",
		"<li id='7iJ292hvGdg'><img src='images/thumbs/뚝.jpg'><p>뚝 M/V... <br>2018.01.15</p></li>",
		"<li id='gohfAGDlYaM'><img src='images/thumbs/이사하는날.jpg'><p>이사하는 날 M/V... <br>2017.11.27</p></li>",
		"<li id='S1sHxeWzT5s'><img src='images/thumbs/똑같지뭐.jpg'><p>우영 - 똑같지 뭐... <br>2017.10.12</p></li>",
		"<li id='ExoVy0Mx4Tc'><img src='images/thumbs/CANVAS.jpg'><p>준호 -  CANVAS... <br>2017.09.11</p></li>",
		"<li id='SvkPiv85W_k'><img src='images/thumbs/no shadow.jpg'><p>JUN. K - 77-1X3... <br>2017.01.12</p></li>",
		"<li id='ykLspPsNYtY'><img src='images/thumbs/your wedding.jpg'><p>JUN. K 결혼식 M/... <br>2017.01.04</p></li>",
		"<li id='dfEyn_LikFU'><img src='images/thumbs/promise.jpg'><p>[M/V] J.Y. Park... <br>2009.11.29</p></li>",
		"<li id='bzPdxpqP5z4'><img src='images/thumbs/young forever.jpg'><p>YOUNG FOREVER... <br>2016.08.10</p></li>",
		
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
