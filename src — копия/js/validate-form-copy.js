// let pageClass = document.querySelector('body');
//
// // if (pageClass.classList.contains('homepage')) {
//
// var newsMail = document.querySelector('.js_validate_email_1');
// var newsMailSubmitBtn = document.querySelector('.section-news-mailing__form-submit');
//
//
// let emailElements = document.querySelectorAll('.js_validation_email');
// let submitBtn = document.querySelectorAll('.js_submit');
//
//
// [].forEach.call(submitBtn, function (e) {
// 	e.addEventListener('click', validate, false)
// });
//
//
//
// // function validateEmail(email) {
// // 	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// // 	return re.test(email);
// // }
// //
// // function validate() {
// // 	const email = newsMail.value;
// //
// // 	if (validateEmail(email)) {
// // 		newsMail.style.color = '#000';
// // 		newsMail.value = '';
// // 		newsMail.style.borderColor = '#000';
// // 	} else {
// // 		newsMail.style.color = 'red';
// // 		newsMail.style.borderColor = 'red';
// // 	}
// // 	return false;
// // }
// //
// // newsMailSubmitBtn.onclick = () => validate();
//
//
//
//
// // newsMailSubmitBtn.onclick = () => validate();
//
//
// function validate() {
// 	console.log(this.previousElementSibling.children[0])
// 	// let contex = this.parent(form);
//
// 	// form for if email field length > 0 = > ?
//
// 	let emailValue;
// 	let emailEl;
//
// 	// for (let i = 0; i < emailElements.length; i++) {
// 	// 	console.log(emailElements[i])
// 	// 	emailEl = emailElements[i];
// 	// 	emailValue = emailEl.value;
// 	// }
//
// 	if (validateEmail(emailValue)) {
// 		console.log(emailEl.value)
// 		// emailEl.style.color = '#000';
// 		// emailEl.value = '';
// 		// emailEl.style.borderColor = '#000';
// 	} else {
// 		// emailEl.style.color = 'red';
// 		// emailEl.style.borderColor = 'red';
// 	}
//
// 	return false;
// }
//
// function validateEmail(email) {
// 	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return re.test(email);
// }
//
//
//
//
//
//
// // check comment start
//
// let comentSubmitBtn = document.querySelectorAll('.js_comment_submit');
//
// [].forEach.call(comentSubmitBtn, function (e) {
// 	e.addEventListener('click', checkValue, false)
// });
//
// function checkValue() {
//
// 	if (this.previousElementSibling.children[0].value !== '') {
// 		this.previousElementSibling.style.borderColor = '#959595';
// 		this.previousElementSibling.children[0].value = '';
// 	} else {
// 		this.previousElementSibling.style.borderColor = 'red';
// 	}
//
// }
//
// // add comment start
//
// let addBtnComment = document.querySelectorAll('.js_add_comment');
//
// [].forEach.call(addBtnComment, function (e) {
// 	e.addEventListener('click', addComment, false)
// });
//
// function addComment() {
// 	this.nextElementSibling.classList.toggle('_active');
// }
//
// // add comment end
//
// // check comment end