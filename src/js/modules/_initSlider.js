'use strict';
import Swiper, {Navigation, Pagination, Autoplay, FreeMode, Lazy} from 'swiper';
export function initSlider() {
	const catalog = document.querySelector('.swiper');
	if (catalog) {
		const port = new Swiper('.mySwiper', {
			modules:[Navigation, Pagination, Autoplay, FreeMode, Lazy],
			lazy: true,
			loop: true,
			speed: 800,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true
			},
			autoplay: {
				delay: 5000,
			}
		});
	}
}