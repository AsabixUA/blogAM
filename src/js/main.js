window.onload = function () {

	//disable scroll body start

	let body = document.querySelector('body');
	let disableScrollClass = 'disable-scroll';

	//disable scroll body end

	// menu mobile start

	let btnMenuOpen = document.querySelector('.menu-open');
	let btnMenuClose = document.querySelector('.close-menu-btn');
	let mobileMenu = document.querySelector('.mobile-menu');

	btnMenuOpen.onclick = () => {
		body.classList.add(disableScrollClass)
		mobileMenu.classList.toggle('_active');
	}


	btnMenuClose.onclick = () => {
		body.classList.remove(disableScrollClass);
		mobileMenu.classList.toggle('_active');
	}

	// menu mobile end


	// lang list mobile start

	let langMobileBtnOpen = document.querySelector('.js_lang_mobile_btn');
	let langMobileBtnClose = document.querySelector('.js_close-lang-btn');
	let langMobileList = document.querySelector('.js_lang_mobile_list');

	langMobileBtnOpen.onclick = () => {
		body.classList.add(disableScrollClass)
		langMobileList.classList.toggle('_active');
	}
	langMobileBtnClose.onclick = () => {
		body.classList.remove(disableScrollClass);
		langMobileList.classList.toggle('_active');
	}

	// lang list mobile end


	// search start

	if (pageClass.classList.contains('homepage') ||
			pageClass.classList.contains('aboutpage') ||
			pageClass.classList.contains('articlespage') ||
			pageClass.classList.contains('videopage')) {

		let searchPopup = document.querySelector('.js_search_list');
		let searchHeaderOpenBtn = document.querySelector('.header__search');
		let searchMobileOpenBtn = document.querySelector('.js_search_mobile_btn');
		let searchMobileCloseBtn = document.querySelector('.js_close-search-btn');

		searchMobileOpenBtn.onclick = () => searchPopup.classList.toggle('_active');
		searchHeaderOpenBtn.onclick = () => searchPopup.classList.toggle('_active');
		searchMobileCloseBtn.onclick = () => searchPopup.classList.toggle('_active');

	}

	// search end

	// filter input start

	if (pageClass.classList.contains('articlespage') ||
			pageClass.classList.contains('videopage')) {


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
	}

	// filter input end


	// mobile filter start

	if (pageClass.classList.contains('articlespage') ||
			pageClass.classList.contains('videopage')){

		let filterBtnOpen = document.querySelector('.filter-icon');
		let filterBtnSection = document.querySelector('.section__filter-btn--mobile');
		let closeFilterMobile = document.querySelector('.section__filter-close--mobile');
		let filterMobile = document.querySelector('.section__filter-wrapper--mobile');

		filterBtnOpen.onclick = () => {
			filterMobile.classList.add('_active');
			body.classList.add(disableScrollClass);
		}

		closeFilterMobile.onclick = () => {
			filterMobile.classList.remove('_active');
			body.classList.remove(disableScrollClass);
		}


		let filterTagsOpenBtnMobile = document.querySelector('.js_filter_tags_btn_mobile');
		let filterTagsItemListMobile = document.querySelector('.js_filter_tags_list_mobile');
		let filterTagsPlusIco = document.querySelector('.js_filter_plus--tags');
		let filterTagsMinusIco = document.querySelector('.js_filter_minus--tags');

		filterTagsOpenBtnMobile.onclick = function () {
			filterBtnSection.classList.toggle('_active');
			filterTagsPlusIco.classList.toggle('_active');
			filterTagsMinusIco.classList.toggle('_active');
			filterTagsItemListMobile.classList.toggle('_active');
		}


		let yearsOpenBtnMobile = document.querySelector('.js_filter_years_btn_mobile');
		let yearsItemListMobile = document.querySelector('.js_filter_years_list_mobile');
		let filterYearsPlusIco = document.querySelector('.js_filter_plus--years');
		let filterYearsMinusIco = document.querySelector('.js_filter_minus--years');

		yearsOpenBtnMobile.onclick = function () {
			filterBtnSection.classList.toggle('_active');
			filterYearsPlusIco.classList.toggle('_active');
			filterYearsMinusIco.classList.toggle('_active');
			yearsItemListMobile.classList.toggle('_active');
		}


		let filterTypesOpenBtnMobile = document.querySelector('.js_filter_types_btn_mobile');
		let filterTypesItemListMobile = document.querySelector('.js_filter_types_list_mobile');
		let filterTypesPlusIco = document.querySelector('.js_filter_plus--types');
		let filterTypesMinusIco = document.querySelector('.js_filter_minus--types');

		filterTypesOpenBtnMobile.onclick = function () {
			filterBtnSection.classList.toggle('_active');
			filterTypesPlusIco.classList.toggle('_active');
			filterTypesMinusIco.classList.toggle('_active');
			filterTypesItemListMobile.classList.toggle('_active');
		}
	}

	// mobile filter end

	//slider main page start

	if (pageClass.classList.contains('homepage')) {
		const swiper = new Swiper('.swiper-container', {
			pagination: {
				el: '.swiper-pagination',
			},
		});
	}
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
	}

	//move to top start

	let moveUpBtn = document.querySelector('.move-up-btn');

	moveUpBtn.onclick = () => scrollTo({
		top: 0,
		behavior: "smooth",
	})

	//move to top end

	// footer end

}
