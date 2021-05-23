// check comment start

let comentSubmitBtn = document.querySelectorAll('.js_comment_submit');

[].forEach.call(comentSubmitBtn, function (e) {
	e.addEventListener('click', checkValue, false)
});

function checkValue() {

	if (this.previousElementSibling.children[0].value !== '') {
		this.previousElementSibling.style.borderColor = '#959595';
		this.previousElementSibling.children[0].value = '';
	} else {
		this.previousElementSibling.style.borderColor = 'red';
	}

}

// add comment start

let addBtnComment = document.querySelectorAll('.js_add_comment');

[].forEach.call(addBtnComment, function (e) {
	e.addEventListener('click', addComment, false)
});

function addComment() {
	this.nextElementSibling.classList.toggle('_active');
}

// add comment end

// check comment end


// validation form start


let formSubmitBtn = document.querySelectorAll('.js_submit_form');


[].forEach.call(formSubmitBtn, function (e) {
	e.addEventListener('click', validationForm, false)
});

function validationForm() {
	let form = this.closest('form');
	let name = form.querySelector('.js_validation_name');
	let email = form.querySelector('.js_validation_email');
	let password = form.querySelector('.js_validation_password');
	let textarea = form.querySelector('.js_validation_textarea');

	if (name !== null) {

		if (name.value !== '') {
			let nameValue = email.value;
			validateName(nameValue);
			name.parentElement.classList.remove('invalid')
		} else {
			name.parentElement.classList.add('invalid')
		}
	}
	if (email !== null) {
		if (email.value !== '') {
			let emailValue = email.value;
			validateEmail(emailValue);
			console.log(email.parentElement)
			email.parentElement.classList.remove('invalid')
		} else {
			email.parentElement.classList.add('invalid')
		}
	}

	if (password !== null) {
		if (password.value !== '') {
			let passwordValue = password.value;
			validatePassword(passwordValue);
			password.parentElement.classList.remove('invalid')
		} else {
			password.parentElement.classList.add('invalid')
		}
	}

	if (textarea !== null) {
		if (textarea.value !== '') {
			let textareaValue = textarea.value;
			validateTextarea(textareaValue);
			textarea.classList.remove('invalid')
		} else {
			textarea.classList.add('invalid')
			console.log(textarea)
		}
	}

}

function validateName(name) {
	const re = (/[.*+?^${}()|[\]\\]/g, '\\$&');
	return re.test(name);
}

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validatePassword(password) {
	// const re = (/[.*+?^${}()|[\]\\]/g, '\\$&');
	// return re.test(password);
}

function validateTextarea(textarea) {
	// const re
	// return re.test(textarea);
}


// validation form end