// DOM 객체
const submitButton = document.querySelector('.submit');
const controlDiv = document.querySelector('.control'); // Renamed variable
const inputField = document.querySelector('#user-input'); // Updated ID
const statusField = document.querySelector('#status');
const leftCountField = document.querySelector('#left-count'); // Updated ID
const replayButton = document.querySelector('.replay'); // Updated class

// 게임 상황 변수
let randomNumber;
let attemptsLeft;
const MAX_ATTEMPTS = 10;

// 게임 초기화
function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = MAX_ATTEMPTS;  
    replayButton.hidden = true;
    submitButton.disabled = true;
    updateAttemptsDisplay();
    inputField.focus();
}

// 남은 기회 표시 업데이트
function updateAttemptsDisplay() {
    leftCountField.textContent = `남은 기회: ${attemptsLeft}`;
}

// 숫자 맞추기 진행
function handleGuess() {
    const userInputText = inputField.value.trim();
    const userInput = parseInt(userInputText, 10);

    if (isNaN(userInput) || userInputText === '') {
        return;
    }

    statusField.style.color = 'rgb(12, 12, 12)';

    if (userInput < 0 || userInput > 100) {
        statusField.textContent = '0에서 100 사이의 숫자를 입력해주세요.';
        statusField.style.color = '#dc3545';
        inputField.value = '';
        return;
    }


    attemptsLeft--;
    let msg = '';
    let solved = false;

    // 정답일때
    if (userInput === randomNumber) {
        msg = `🎉 정답입니다! ${randomNumber}였습니다! 🎉`;
        statusField.style.color = 'dodgerblue';
        leftCountField.textContent = '🥳 성공! 🥳';
        solved = true;
    
    // 기회 초과과
    } else if (attemptsLeft === 0) {
        msg = `😭 게임 오버! 정답은 ${randomNumber}였습니다. 😭`;
        statusField.style.color = '#861c1c';
        leftCountField.textContent = '😿 아쉽네요 😿';
        solved = true;
    
    // down
    } else if (userInput < randomNumber) {
        msg = `⬆️ ${userInput}보다 큽니다!`;
        updateAttemptsDisplay();
    
    // up
    } else {
        msg = `⬇️ ${userInput}보다 작습니다!`;
        updateAttemptsDisplay();
    }

    statusField.textContent = msg;

    if (solved) {
        controlDiv.style.display = 'none';
        replayButton.hidden = false;        
        // 대략 .5초 있다가 재시작 버튼 포커스
        setTimeout(() => {
            replayButton.focus();
        }, 500);
    } else {
        inputField.value = '';
        inputField.focus();        
    }

    submitButton.disabled = true;
}

// 입력값 검증
function validateInput() {
    const value = inputField.value.trim();
    submitButton.disabled = value === '' || isNaN(parseInt(value, 10));
}


// --- 이벤트 리스너 ---

// 맞추기 버튼 클릭
submitButton.addEventListener('click', handleGuess);

// 입력칸 엔터 입력
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !submitButton.disabled) {
        handleGuess();
    }
});

// 입력칸 숫자 검증
inputField.addEventListener('input', validateInput);


// 게임 시작
initializeGame();