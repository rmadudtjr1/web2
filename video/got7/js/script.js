function main(){
	let thumbs = [
		"<li id='ladClnnJhqg'><img src='images/thumbs/Not by the moon.jpg'><p>GOT7 NOT BY TH... <br>2020.04.20</p></li>",
		"<li id='xQI9oZEY-B0'><img src='images/thumbs/니가 부르는 나의 이름.jpg'><p>GOT7 니가 부르는 나의... <br>2019.11.04</p></li>",
		"<li id='6tl-MG38-0E'><img src='images/thumbs/eclipse.jpg'><p>GOT7 ECLIPSE ... <br>2019.05.20</p></li>",
		"<li id='RtRtLf84I2M'><img src='images/thumbs/miracle.jpg'><p>GOT7 Miracle ... <br>2018.12.03</p></li>",
		"<li id='9RUeTYiJCyA'><img src='images/thumbs/Lullaby.jpg'><p>GOT7 Lullaby ... <br>2018.09.17</p></li>",
		"<li id='sS0LCjOiIhc'><img src='images/thumbs/Look.jpg'><p>GOT7 Look M/V... <br>2018.03.12</p></li>",
		"<li id='ktc8XDBq93k'><img src='images/thumbs/you are.jpg'><p>GOT7 You Are ... <br>2017.10.10</p></li>",
		"<li id='KMDfR_PJ7ss'><img src='images/thumbs/my swagger.jpg'><p>GOT7 MY SWAGGE... <br>2017.05.22</p></li>",
		"<li id='qwxrFmmMDd0'><img src='images/thumbs/never ever.jpg'><p>GOT7 Never Eve... <br>2017.03.19</p></li>",
		
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
