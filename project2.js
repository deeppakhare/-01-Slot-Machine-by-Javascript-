// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again


const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

let balance = 0;


const deposit = () => {
    const depositInput = document.getElementById("deposit-input");
    const messageDisplay = document.getElementById("message");
    const balanceDisplay = document.getElementById("balance");

    const depositAmount = parseFloat(depositInput.value);

    if (isNaN(depositAmount) || depositAmount <= 0) {
        messageDisplay.innerText = "Invalid deposit amoount! ";
        messageDisplay.style.color = "red";
        return;
    }
    balance += depositAmount;

    balanceDisplay.innerText = balance;
    messageDisplay.innerText = "Deposit successful!";
    messageDisplay.style.color= "white";

    depositInput.value = "";
}




const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
}

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([])
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }
    return rows;
}



const getWinning = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]]
        }
    }
    return winnings;
}

const spinGame = () => {
    const messageDisplay = document.getElementById("message");
    const balanceDisplay = document.getElementById("balance");

    const linesInput = document.getElementById("lines-input");
    const betInput = document.getElementById("bet-input");

    const lines = parseFloat(linesInput.value);
    const bet = parseFloat(betInput.value);

    if (isNaN(lines) || lines <= 0 || lines > 3) {
        messageDisplay.innerText = "Invalid Number of Liner!";
        messageDisplay.style.color = "red";
        return;
    }

    if (isNaN(bet) || bet <= 0) {
        messageDisplay.innerText = "Invalid Bet!";
        messageDisplay.style.color = "red";
        return; 
    }

    const totalBet = bet * lines;

    if (balance < totalBet) {
        messageDisplay.innerText = "Not enough money! You need $" + totalBet;
        return;
    }

    balance -= totalBet;
    balanceDisplay.innerText = balance;

    const reels = spin();

    const rows = transpose(reels);

    for (let i = 0; i < COLS; i++ ) {
        const reelContainer = document.getElementById(`reel${i + 1}`);

        const slots = reelContainer.children;

        for (let j = 0; j < ROWS; j++) {
            slots[j].innerText = reels[i][j];

            slots[j].classList.remove("winner");
        }
    }

    const winnings = getWinning(rows, bet, lines);

    balance += winnings;
    balanceDisplay.innerText = balance;

    if (winnings > 0) {
        messageDisplay.innerText = `YOU WON $${winnings}!`;
        messageDisplay.style.color = "#FFD700";
    } else {
        messageDisplay.innerText = "You lost! Try again.";
        messageDisplay.style.color = "white";
    }

    if (balance <= 0) {
        messageDisplay.innerText = "Game Over! Please deposit more money.";
    }
};

document.getElementById("deposit-button").addEventListener("click", deposit);
document.getElementById("spin-btn").addEventListener("click", spinGame);