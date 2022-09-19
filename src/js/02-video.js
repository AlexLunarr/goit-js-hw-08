import Player from "@vimeo/player";
import throttle from "lodash.throttle";

 const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

const onTime = function(timeupdate) {
	let timePause = timeupdate.seconds;
	localStorage.setItem('videoplayer-current-time', timePause);
	console.log(timePause);
};

player.on('timeupdate', throttle(onTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
