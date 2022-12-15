let highletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowLetters = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let answer = "56";
function generateNumber() {
    document.querySelector('#answer').value = "";
    answer = "";
    for(let i = 0; i < document.querySelector('#inputLength').value; i++) {
        let random = Math.floor(Math.random() * 3);
        switch (random) {
            case 0: {
                if (document.querySelector('#bigLetters').checked) {
                     answer += highletters.charAt(Math.floor(Math.random() * highletters.length));
                     break;
                } else {
                    i--;
                    break;
                }
            }
            case 1: {
                if (document.querySelector('#lowLetters').checked) {
                     answer += lowLetters.charAt(Math.floor(Math.random() * lowLetters.length));
                     break;
                } else {
                    i--;
                    break;
                }
            }
            case 2: {
                if (document.querySelector('#numbers').checked) {
                     answer += numbers.charAt(Math.floor(Math.random() * numbers.length));
                     break;
                } else {
                    i--;
                    break;
                }
            }
        }
    }
    document.querySelector("#answer").value = answer;
}