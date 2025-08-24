new Swiper('.image-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: false,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageDown: true,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".image-slider"
	}
});