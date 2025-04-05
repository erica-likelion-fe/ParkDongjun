// 멋사 과제: 업다운 게임

const randomNumber = Math.floor(Math.random() * 100) + 1;   // 1~100 사이의 랜덤 숫자
const maxAttempts = 10;                                     // 최대 시도 횟수 

let attempts = 0;   // 시도 횟수 카운트
let solved = false; // 문제 해결 여부
let n = 0;          // 입력한 숫자

// 정답 확인 함수
// -2: 숫자 아님, -1: 입력한 숫자보다 큼, 1: 입력한 숫자보다 작음, 0: 정답
const checkAnswer = (n) => {
    if (isNaN(n)) return -2;
    if (n < randomNumber) return -1;
    if (n > randomNumber) return 1;
    return 0;
}

// 게임 시작
while (!solved) {
    n = parseInt(prompt(`1~100 사이의 숫자를 입력하세요.\n남은 기회: ${maxAttempts - attempts}`));

    attempts++;
    if (attempts >= maxAttempts) {
        alert(`최대 횟수 (${maxAttempts})를 초과했습니다. 정답은 ${randomNumber} 였습니다.`);
        break;
    }

    const result = checkAnswer(n);
    let message = '';
    if (result === -1) {
        message = `${n} 보다 큽니다.`;
    } else if (result === 1) {
        message = `${n} 보다 작습니다.`;
    } else if (result === -2) {
        message = `숫자를 입력하세요!`;
        attempts--;
    } else {
        message = `${n}이 정답입니다! ${attempts}번 만에 맞추셨습니다.`;
        solved = true;
    }

    alert(message);    
    if (solved) break;
}