window.onload = function () {

	// menu mobile start

	let btnMenuOpen = document.querySelector('.menu-open');
	let btnMenuClose = document.querySelector('.close-menu-btn');
	let mobileMenu = document.querySelector('.mobile-menu');

	btnMenuOpen.onclick = () => {
		mobileMenu.classList.toggle('_active');
	}

	btnMenuClose.onclick = () => {
		mobileMenu.classList.toggle('_active');
	}

	// menu mobile end

	// video filter input start

	let filterYearsOpenBtn = document.querySelector('.js_filter_years_btn')
	let filterYearsItemList = document.querySelector('.js_filter_years_list')

	filterYearsOpenBtn.onclick = function () {
		this.classList.toggle('_active')
		filterYearsItemList.classList.toggle('_active');
	}

	let filterTagsOpenBtn = document.querySelector('.js_filter_tags_btn')
	let filterTagsItemList = document.querySelector('.js_filter_tags_list')

	filterTagsOpenBtn.onclick = function () {
		this.classList.toggle('_active')
		filterTagsItemList.classList.toggle('_active');
	}

	// video filter input end


	//slider main page start

	const swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
		},
	});

	//slider main page end

	// footer start
	let footer = document.querySelector('footer')
	let footerMenuPlusBtn = document.querySelector('.js_footer-menu-btn');
	let footerInfoPlusBtn = document.querySelector('.js_footer-info-btn');
	let footerPartnerPlusBtn = document.querySelector('.js_footer-partner-btn');

	footerMenuPlusBtn.onclick = function () {
		this.nextElementSibling.classList.toggle('_active');
	}
	footerInfoPlusBtn.onclick = function () {
		this.nextElementSibling.classList.toggle('_active');
	}
	footerPartnerPlusBtn.onclick = function () {
		this.nextElementSibling.classList.toggle('_active');
		console.log(this)
	}


	// footer end

}