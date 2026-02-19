# 🎰 Browser-Based JavaScript Slot Machine

## 📜 Description

This is a fully interactive, web-based Slot Machine game built with HTML, CSS, and Vanilla JavaScript. Originally inspired by a terminal-based Node.js tutorial, this project has been completely rebuilt to run directly in the browser using DOM manipulation and event listeners.

Players can deposit virtual money, choose how many lines to bet on, and spin a randomized 3x3 grid to win payouts based on symbol scarcity .

## ✨ Features

- **Interactive UI:** Replaced traditional command-line prompts with HTML inputs and clickable buttons .
- **Real-time Balance Tracking:** The game actively validates your funds, preventing you from betting more money than you have deposited .
- **Matrix Math Logic:** Uses complex JavaScript array manipulation (transposing vertical columns into horizontal rows) to calculate winning combinations .
- **Weighted Probabilities:** Not all symbols are equal! The spin mechanics use a mathematically accurate pool of symbols, meaning higher-paying symbols appear less frequently .

## 🎮 How to Play
1. **Deposit Money:** Enter an amount in the deposit box and click "Deposit" to add funds to your balance .
2. **Select Lines:** Choose how many horizontal rows you want to bet on (1, 2, or 3) .
3. **Place Your Bet:** Enter how much money you want to bet *per line*. *(Note: If you bet $10 on 3 lines, your total bet will be $30).*
4. **Spin!:** Click the "SPIN" button to generate the board . 
5. **Win:** If you match 3 identical symbols across a single horizontal row, you win a payout multiplied by that symbol's value !

## 💎 Symbol Values & Scarcity
The slot machine consists of a 3x3 grid . The game uses four different symbols, each with its own payout multiplier and rarity inside the reel pool:

* **A** - Multiplier: **5x** | Count in Pool: **2** (Rarest) 
* **B** - Multiplier: **4x** | Count in Pool: **4** 
* **C** - Multiplier: **3x** | Count in Pool: **6** 
* **D** - Multiplier: **2x** | Count in Pool: **8** (Most Common) 

## 🛠️ Technologies Used
* **HTML5:** Structures the game interface, input fields, and the 3x3 reel grid.
* **CSS3:** Styles the machine using Flexbox/Grid for a clean, side-by-side layout.
* **JavaScript (ES6):** Handles all game logic, including `Math.random()` generation, array splicing, and DOM updates (`document.getElementById`) .

## 🚀 How to Run Locally
Because this project does not use Node.js or external dependencies, running it is incredibly simple:
1. Download or clone the repository to your local machine.
2. Ensure `index.html`, `style.css` (or your `<style>` tags), and `project.js` are in the same folder.
3. Double-click the `index.html` file to open it in any modern web browser (Chrome, Firefox, Edge, Safari).
4. Start playing!

## 💡 Acknowledgements
The core logic and math arrays for this project were learned from the "Learn JavaScript With This ONE Project!" tutorial by Tech With Tim, which was then expanded from a terminal application into a graphical browser game.