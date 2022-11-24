var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,


	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
<<<<<<< HEAD
		slidesPerView: 1,
		spaceBetween: 40,
	  },
	  780: {
=======
>>>>>>> main
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
<<<<<<< HEAD
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
=======
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 3,
>>>>>>> main
		spaceBetween: 50,
	  },
	} 
    });