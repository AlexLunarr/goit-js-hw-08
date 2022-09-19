import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeUpdate', throttle(onPlay, 1000));

function onPlay({ timeUpdate }) {
	let pause = timeUpdate.seconds;
	localStorage.setItem('videoplayer-current-time', pause);
	console.log(pause);
};
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
	