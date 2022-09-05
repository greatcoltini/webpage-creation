var el = document.getElementById("cover");
const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 20

function daytime_cover() {
	var width = document.getElementById("cover").clientWidth;
	if (isDayTime == false && width < 800) {
		el.style.background = "url(assets/cover_small_dark.jpg)";
		el.className = "d-flex h-100 text-center text-bg-dark bd-placeholder-img";
		el.style.backgroundSize = "100%";
	}
	else if (isDayTime && width < 800) {
		el.style.background = "url(assets/cover_small.jpg)";
		
	}
	else {
		el.style.background = "url(colton_cover.png)";
	}
	el.className = "d-flex h-100 text-center text-bg-dark bd-placeholder-img";
	el.style.backgroundSize = "100%";
	el.style.backgroundRepeat = "no-repeat";
	el.style.backgroundPosition = "center";
}

setInterval(function(){
        daytime_cover();
    }, 100);