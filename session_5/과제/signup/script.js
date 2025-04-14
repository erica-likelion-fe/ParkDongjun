// js 폼 검증

const form = document.querySelector('form');
const id = document.querySelector('#id');
const pw = document.querySelector('#pw');
const mail = document.querySelector('#mail');
const role = document.querySelector('#role');

form.addEventListener('submit', (e) => {

    let pass = true; // 통과 여부

    if (id.value === '') {
        alert('아이디를 입력해주세요.');
        pass = false;
    } else if (pw.value === '') {
        alert('비밀번호를 입력해주세요.');
        pass = false;
    } else if (mail.value === '') {
        alert('메일을 입력해주세요.');
        pass = false;
    } else if (role.value === '') {
        alert('역할을 선택해주세요.');
        pass = false;
    }

    // 비밀번호 검증 (최소 8자, 숫자 영문 조합)
    else if (pw.value.length < 8) {
        alert('비밀번호는 최소 8자 이상이어야 합니다.');
        pass = false;
    } else if (!/[0-9]/.test(pw.value) || !/[a-zA-Z]/.test(pw.value)) {
        alert('비밀번호는 숫자와 영문자를 조합해야 합니다.');
        pass = false;
    }

    if (!pass) {
        e.preventDefault(); // form submit 막기
    }
});