window.onload = function () {
	let pageClass = document.querySelector('body');
	//disable scroll body start

	// active page start

	let pageURL = window.location.href;
	let lastURLSegment = './' + pageURL.substr(pageURL.lastIndexOf('/') + 1);

	let links = document.querySelectorAll('.js_nav-item');

	[].forEach.call(links, function (e) {
		let linkPage = e.querySelector('a').getAttribute('href');
		if (lastURLSegment == linkPage) {
			e.classList.add('_active')
		}
	})

	// active page end

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

	let searchPopup = document.querySelector('.js_search_list');
	let searchHeaderOpenBtn = document.querySelector('.header__search');
	let searchMobileOpenBtn = document.querySelector('.js_search_mobile_btn');
	let searchMobileCloseBtn = document.querySelector('.js_close-search-btn');

	searchMobileOpenBtn.onclick = () => searchPopup.classList.toggle('_active');
	searchHeaderOpenBtn.onclick = () => searchPopup.classList.toggle('_active');
	searchMobileCloseBtn.onclick = () => searchPopup.classList.toggle('_active');


	// search end

	// filter input start

	if (pageClass.classList.contains('articlespage') ||
			pageClass.classList.contains('photopage') ||
			pageClass.classList.contains('searchpage') ||
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

	if (pageClass.classList.contains('searchpage')) {

		let filterTypesOpenBtn = document.querySelector('.js_filter_types_btn')
		let filterTypesItemList = document.querySelector('.js_filter_types_list')

		filterTypesOpenBtn.onclick = function () {
			this.classList.toggle('_active')
			filterTypesItemList.classList.toggle('_active');
		}
	}

	// filter input end


	// mobile filter start

	if (pageClass.classList.contains('articlespage') ||
			pageClass.classList.contains('videopage') ||
			pageClass.classList.contains('searchpage') ||
			pageClass.classList.contains('photopage')) {

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
				clickable: true,
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


	// search page filter start


	if (pageClass.classList.contains('searchpage')) {
		let filterTypes = document.querySelector('.js_filter_types_search_page');
		filterTypes.classList.add('_active');
	}

	// search page filter end


	// popup authorization start

	let popupAuthorization = document.querySelector('.popup-authorization');
	let authorizationBtnOpen = document.querySelectorAll('.js_authorization_open');

	[].forEach.call(authorizationBtnOpen, function (e) {
		e.addEventListener('click', openAuthorizPopup, false)
	});

	function openAuthorizPopup() {
		popupAuthorization.classList.add('open')
	}

	// popup authorization end

	// popup contact start

	let contactOpenBtn = document.querySelectorAll('.js__popup_contact_open');
	let contactPopup = document.querySelector('.popup-contact');

	[].forEach.call(contactOpenBtn, function (e) {
		e.addEventListener('click', openContactPopup, false)
	});

	function openContactPopup() {
		contactPopup.classList.add('open');
	}

	// popup contact end

	// popup login start

	let loginOpenBtn = document.querySelectorAll('.js__popup_login_open');
	let loginPopup = document.querySelector('.popup-login');

	[].forEach.call(loginOpenBtn, function (e) {
		e.addEventListener('click', openLoginPopup, false)
	});

	function openLoginPopup() {
		loginPopup.classList.add('open');
	}

	// popup login end

	// popup register start

	let registerOpenBtn = document.querySelectorAll('.js__popup_register_open');
	let registerPopup = document.querySelector('.popup-register');

	[].forEach.call(registerOpenBtn, function (e) {
		e.addEventListener('click', openRegisterPopup, false)
	});

	function openRegisterPopup() {
		registerPopup.classList.add('open');
	}

	// popup register end

	// popup mail start

	let emailOpenBtn = document.querySelectorAll('.js__popup_email_open');
	let emailPopup = document.querySelector('.popup-email');

	[].forEach.call(emailOpenBtn, function (e) {
		e.addEventListener('click', openEmailPopup, false)
	});

	function openEmailPopup() {
		emailPopup.classList.add('open');
	}

	// popup mail end

	//popup reset start

	let resetOpenBtn = document.querySelectorAll('.js_reset_popup');
	let resetPopup = document.querySelector('.popup-reset');

	[].forEach.call(resetOpenBtn, function (e) {
		e.addEventListener('click', openResetPopup, false)
	});

	function openResetPopup() {
		resetPopup.classList.add('open');
	}


	//popup reset end


	// popup close start

	let popupBtnClose = document.querySelectorAll('.js_popup_button_close');

	[].forEach.call(popupBtnClose, function (e) {
		e.addEventListener('click', closePopup, false)
	});

	function closePopup() {
		this.closest('.js__popup').classList.remove('open');
	}

	// popup close end

	// password show start

	let showPasswordBtn = document.querySelectorAll('.popup__input-ico--show');
	let hiddenPasswordBtn = document.querySelectorAll('.popup__input-ico--hidden');

	[].forEach.call(showPasswordBtn, function (e) {
		e.addEventListener('click', showPassword, false);
	});

	[].forEach.call(hiddenPasswordBtn, function (e) {
		e.addEventListener('click', hiddenPassword, false);
	});


	function showPassword() {
		this.closest('.popup__input').querySelector('input').setAttribute('type', 'password')
		this.previousElementSibling.classList.add('_active')
		this.classList.toggle('_active')
	}

	function hiddenPassword() {
		this.closest('.popup__input').querySelector('input').setAttribute('type', 'text')
		this.nextElementSibling.classList.add('_active')
		this.classList.toggle('_active')
	}

	// password show end


	// input focus start

	let inputs = document.querySelectorAll('input[class]');

	if (inputs.length) {
		[].forEach.call(inputs, function (e) {
			e.addEventListener('click', moveTitleUp, false)
		});

		[].forEach.call(inputs, function (e) {
			e.addEventListener('blur', moveTitleDown, false)
		});

		function moveTitleUp() {
			if (this.closest('.popup__input')) {
				this.closest('.popup__input').querySelector('.popup__input-title').classList.add('js_title_to_top');

				if (this.closest('.popup__input').querySelector('input[type="password"]') !== null
						&& this.closest('.popup__input').querySelector('input[type="password"]').classList.contains('js_validation_password')) {

					if (this.closest('.popup__body').querySelector('.popup__steps') !== null) {
						this.closest('.popup__body').querySelector('.popup__steps').classList.add('_active');
					}
				}
			}
		}

		function moveTitleDown() {
			if (this.value == '') {
				if (this.closest('.popup__input')) {
					this.closest('.popup__input').querySelector('.popup__input-title').classList.remove('js_title_to_top');
				}
			}
		}
	}

// input focus end


	// password rules show-hidden start

	let inputsPassword = document.querySelectorAll("input[type = 'password']");

	[].forEach.call(inputsPassword, function (e) {
		e.addEventListener('blur', hiddenRules, false);
	})

	function hiddenRules() {
		if (this.closest('.popup__body').querySelector('.popup__steps') !== null) {
			this.closest('.popup__body').querySelector('.popup__steps').classList.remove('_active');
		}
	}

	// password rules show-hidden end

	// lightgallery start

	lightGallery(document.getElementById('lightgallery'), {
		plugins: [lgZoom, lgThumbnail, lgShare],
		speed: 500,
		showZoomInOutIcons: true,
		actualSize: false,
		thumbnail: true,
	});

	lightGallery(document.getElementById('static-thumbnails'), {
		animateThumb: false,
		zoomFromOrigin: false,
		allowMediaOverlap: true,
		toggleThumb: true,
	});

	lightGallery(document.getElementById('gallery-hash-demo'), {
		customSlideName: true,
	});


	// lightgallery  end

	//video player start
	let videoPlayers = document.querySelectorAll('#video_player')

	if (videoPlayers.length) {
		const players = Array.from(videoPlayers).map(p => new Plyr(p));
	}
	//video player end

}
