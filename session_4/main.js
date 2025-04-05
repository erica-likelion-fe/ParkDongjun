/*

let A_score = {
    name: 'Jennifer',
    english: 80,
    math: 90,
    science: 85,
    korean: 95
}

let B_score = {
    name: 'Alex',
    english: 70,
    math: 85,
    science: 80,
    korean: 90
}


function print_grades(score) {
    const {name, english, math, science, korean} = score;
    console.log(`${name}의 성적:\n영어: ${english}\n수학: ${math}\n과학: ${science}\n국어: ${korean}`);
    console.log(`평균: ${(english + math + science + korean) / 4}`);
}

print_grades(A_score);

let num 

do {
    num = prompt('숫자를 입력하세요!');
} while (isNaN(num) || num.trim() == '')

if (num % 2) {
    console.log('홀수입니다');        
} else {
    console.log('짝수입니다');
}

for (i=0; i<10; i++) {
    console.log(`hello! count: ${i}`);
}

const numbers = [1,2,3,4,5,6,7,8,9]
let even_numbers = []

for (let n of numbers) {
    if (!(n % 2)) {
        even_numbers.push(n); // 맨 앞에 넣으려면 (역순) -> unshift
    }
}

console.log(even_numbers);

let some_list = [1,2,3,4,5];

some_list.unshift(0);
console.log(some_list);

some_list.splice(4,0,3.5);
console.log(some_list);

const gugu = () => {
    for (let i = 1; i <= 9; i++) {
        let line = '';
        for (let j = 1; j <= 9; j++) {
            line += (`${i}x${j}=${i*j}\t`);
        }
        console.log(line);
    }
}

gugu();


const isPrime = (n) => {
    if (n < 2) return false;

    for (let i=2; i<n; i++) {
        if (n % i == 0) return false;
    }

    return true;
}

const num = prompt('숫자를 입력하세요');
console.log(isPrime(num) ? '소수입니다':'소수가 아닙니다');

*/

const lion = {
    name : '사자'
}

const bravelion = {
    ...lion,
    attribute : 'brave'
}

const bravelikelion = {
    ...bravelion,
    color : 'yellow'
}

console.log(bravelikelion)

const {color:some_new_color, ...others} = bravelikelion;
console.log(some_new_color);
console.log(others);