// (이메일 조건: 최소 @, . 포함 / 비밀번호 조건: 8자 이상)
const loginBtn = document.querySelector('button');
const form = document.querySelector('form');
const container = document.querySelector('.container');

function checkUserId(event) {
    event.preventDefault();
    const userId = event.target[0].value;
    const userPassword = event.target[1].value;

    if (!emailCheck(userId)) {
        alert('올바른 이메일 형식을 입력해주세요');
        return;
    }

    if (!passwordCheck(userPassword)) {
        alert('비밀번호는 8자이상 입력해주세요');
        return;
    }
    loginSuccess(userId)
}

form.addEventListener('submit', checkUserId)

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
    container.appendChild(loginSuccess);
    loginSuccess.innerText = `${userId}님로그인에 성공하셨습니다!`
}
