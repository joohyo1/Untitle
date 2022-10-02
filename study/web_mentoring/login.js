// (이메일 조건: 최소 @, . 포함 / 비밀번호 조건: 8자 이상)
const emailInput = document.querySelector('.emailInput');
const passwordInput = document.querySelector(".passwordInput")
const loginBtn = document.querySelector('button');
const form = document.querySelector('form');
const body = document.querySelector('body');


function checkUserId(event) {
    const userId = emailInput.value;
    const userPassword = passwordInput.value;
    event.preventDefault();
    console.log(passwordCheck(userPassword), userPassword);

    if (emailCheck(userId) == true && passwordCheck(userPassword) == true) {
        loginSuccess(userId)
    } else if (emailCheck(userId) == false) {
        alert('올바른 이메일 형식을 입력해주세요');
    }
    else if (passwordCheck(userPassword) == false) {
        alert('비밀번호는 8자이상 입력해주세요');
    }


}
loginBtn.addEventListener('click', checkUserId)




function emailCheck(email) {
    if (email.includes("@") && email.includes(".")) return true;
    return false;
}

function passwordCheck(password) {
    if (password.length >= 8) return true
    return false
}

function loginSuccess(userId) {
    form.classList.add('hidden')
    const loginSuccess = document.createElement('h2');
    body.appendChild(loginSuccess);
    loginSuccess.innerText = `${userId}님로그인에 성공하셨습니다!`
}
