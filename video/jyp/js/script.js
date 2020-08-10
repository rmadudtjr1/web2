function main(){
	let thumbs = [
		"<li id='IePbjLAUvf0'><img src='images/thumbs/Fever.jpg'><p>박진영 (J.Y. Park)... <br>2019.11.30</p></li>",
		"<li id='X2mqrzKHb3w'><img src='images/thumbs/Fire.jpg'><p>J.Y. Park Fire... <br>2016.04.10</p></li>",
		"<li id='pJc2ypdWvEI'><img src='images/thumbs/Still Alive.jpg'><p>박진영(J.Y. Park) ... <br>2016.04.09</p></li>",
		"<li id='kUGQ7Tz4os0'><img src='images/thumbs/mama.jpg'><p>박진영(J.Y. Park) ... <br>2015.04.12</p></li>",
		"<li id='h-GhkCWuihA'><img src='images/thumbs/Had enough parties.jpg'><p>박진영(J.Y. Park)_... <br>2013.09.08</p></li>",
		"<li id='vxX5LsmjcfE'><img src='images/thumbs/theone.jpg'><p>[M/V] J.Y. Park... <br>2012.05.03</p></li>",
		"<li id='FRQ1LjL_Xzk'><img src='images/thumbs/Someone else.jpg'><p>[M/V] J.Y. Park... <br>2012.04.21</p></li>",
		"<li id='O2y6i11LO1c'><img src='images/thumbs/No love No more.jpg'><p>[M/V] J.Y. Park... <br>2009.11.29</p></li>",
		"<li id='E2BCCqPFvjs'><img src='images/thumbs/Your house.jpg'><p>[M/V] J.Y.Park ... <br>2008.12.12</p></li>",
		
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
