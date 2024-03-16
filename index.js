// const oroz = ["камень", "ножницы", "бумаг"];
// const kagaz = ["камень", "ножницы", "бумаг"];
// let oroz1 = 0;
// let computerScore = 0;

// function getRandomChoice() {
//     const randomIndex = Math.floor(Math.random() * oroz.length);
//     return oroz[randomIndex];
// }

// function playRound(userChoice) {
//     const computerChoice = getRandomChoice();
//     console.log(`Вы выбрали: ${userChoice}`);
//     console.log(`Компьютер выбрал: ${computerChoice}`);

//     if (userChoice === computerChoice) {
//         console.log("Ничья!");
//     } else if (kagaz[oroz.indexOf(userChoice)] === computerChoice) {
//         console.log("Вы выиграли!");
//         oroz1++;
//     } else {
//         console.log("Компьютер выиграл!");
//         computerScore++;
//     }

//     console.log(`Текущий счет: Вы ${oroz1}, Компьютер ${computerScore}`);
// }

// function playGame() {
//     console.log("Игра началась! Для выхода введите 'отмена'.");
    
//     function askUser() {
//         const userChoice = prompt(`"Выберите: камень, ножницы, бумаг?"`);
//         if (userChoice === "отмена") {
//             console.log("Игра окончена.");
//             return;
//         }
//         if (!oroz.includes(userChoice)) {
//             console.log("Неверный ввод. Попробуйте снова: камень, ножницы, бумаг? (для выхода введите 'отмена')");
//             askUser();
//             return;
//         }
//         playRound(userChoice);
//         askUser();
//     }

//     askUser();
// }






const words = ["avto", "book", "cat", "home", "schoole"];
let satiworld = '';
let worldlega = '';
let leftlega = 6;
let sedlega = [];

function chooseWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    satiworld = words[randomIndex];
}

function initializeGame() {
    worldlega = '_'.repeat(satiworld.length);
    leftlega = 6;
    sedlega = [];
}

function displayGameStatus() {
    console.log("Слово: " + worldlega);
    console.log("Оставшиеся попытки: " + leftlega);
    console.log("Уже введенные буквы: " + sedlega.join(', '));
}

function getUserGuess() {
    let guess = prompt("Введите букву:");
    if (guess === null) {
        return null;
    }
    guess = guess.toLowerCase();
    if (!/[a-z]/.test(guess) || guess.length !== 1) {
        console.log("Пожалуйста, введите одну букву от a до z.");
        return getUserGuess();
    }
    return guess;
}

function updateworldlega(guess) {
    let newworldlega = '';
    for (let i = 0; i < satiworld.length; i++) {
        if (satiworld[i] === guess) {
            newworldlega += guess;
        } else {
            newworldlega += worldlega[i];
        }
    }
    worldlega = newworldlega;
}

function game() {
    chooseWord();
    initializeGame();

    while (true) {
        displayGameStatus();
        let guess = getUserGuess();
        if (guess === null) {
            console.log("Игра завершена.");
            break;
        }

        if (sedlega.includes(guess)) {
            console.log("Вы уже вводили эту букву.");
            continue;
        }

        sedlega.push(guess);

        if (satiworld.includes(guess)) {
            updateworldlega(guess);
            if (worldlega === satiworld) {
                console.log("Поздравляем! Вы угадали слово: " + satiworld);
                break;
            }
        } else {
            leftlega--;
            console.log("Такой буквы нет в слове.");
            if (leftlega === 0) {
                console.log("Вы проиграли. Было загадано слово: " + satiworld);
                break;
            }
        }
    }
}

game();
