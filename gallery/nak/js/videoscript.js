function main(){
	let thumbs = [
		"<li id='kOHB85vDuow'><img src='images/videothumb/fancy.jpg'><p>FANCY M/V... <br>2019.04.22</p></li>",
		"<li id='CfUGjK6gGgs'><img src='images/videothumb/TheBestthingieverdid.jpg'><p>올해 제일 잘한 일(The ... <br>2018.12.12</p></li>",
		"<li id='mAKsZ26SabQ'><img src='images/videothumb/YesorYes.jpg'><p>TWICE - YES or YE... <br>2018.11.05</p></li>",
		"<li id='Fm5iP0S1z9w'><img src='images/videothumb/DanceTheNightAway.jpg'><p>TWICE - Summer Ni... <br>2018.07.09</p></li>",
		"<li id='i0p1bmr0EmE'><img src='images/videothumb/WhatIsLove.jpg'><p>TWICE - What is... <br>2018.04.09</p></li>",
		"<li id='rRzxEiBLQCA'><img src='images/videothumb/HeartShaker.jpg'><p>TWICE - Heart S... <br>2017.12.11</p></li>",
		"<li id='V2hlQkVJZhE'><img src='images/videothumb/Likey.jpg'><p>TWICE - LIKEY M... <br>2017.10.30</p></li>",
		"<li id='VQtonf1fv_s'><img src='images/videothumb/Signal.jpg'><p>TWICE - SIGNAL... <br>2017.05.15</p></li>",
		"<li id='8A2t_tAjMz8'><img src='images/videothumb/KnockKnock.jpg'><p>TWICE - KN... <br>2017.02.20</p></li>"
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
