# Stockle - Guess the Ticker 📈

Stockle is a Wordle-inspired puzzle game where players try to guess a secret stock ticker symbol within six attempts. Use letter feedback and the provided TradingView price chart as clues!

**➡️ Play Stockle here:** [Link to your deployed Stockle site] ## ✨ Features

* **Wordle Mechanics for Stocks:** Guess a randomly selected stock ticker symbol (length indicated in the title).
* **Color-Coded Feedback:** Get immediate feedback on your guess:
    * 🟩 Green: Correct letter in the correct position.
    * 🟨 Yellow: Correct letter in the wrong position.
    * ⬜ / ⬛ Gray: Letter is not in the ticker symbol.
* **TradingView Chart Clue:** A historical price chart of the target stock is displayed (without revealing the name) to provide a visual hint.
* **Limited Attempts:** You have six tries to guess the correct ticker.
* **Virtual Keyboard:** An on-screen keyboard allows input and reflects the status (correct, present, absent) of guessed letters.
* **Freebie Hint:** Use the "Freebie" button once per game to reveal one correct letter in its correct position.
* **Statistics Tracking:** Tracks your games played, win percentage, current streak, and max streak using your browser's LocalStorage.
* **Theme Toggle:** Switch between light and dark modes for comfortable viewing. Your preference is saved.
* **Responsive Design:** Playable on both desktop and mobile devices.

## 🛠️ Technology Stack

* **HTML5:** Structure of the game interface.
* **CSS3:** Styling, layout (Flexbox, Grid), animations, theme switching (CSS Variables).
* **Vanilla JavaScript (ES6+):** Core game logic, DOM manipulation, event handling, TradingView widget integration, LocalStorage management.
* **[TradingView Advanced Chart Widget](https://www.tradingview.com/widget/advanced-chart/):** Displays the stock chart clue.
* **Browser LocalStorage:** Saves game statistics and theme preference locally.

## 🚀 Setup & How to Play

**Setup (Local)**

This is a static web application and requires no special build steps.

1.  Clone or download this repository.
2.  Open the `index.html` file in your web browser.

**How to Play**

1.  Look at the **game title** to see the required length for the ticker guess.
2.  Observe the **TradingView chart** for clues about the stock's price history.
3.  Use the **virtual keyboard** (or your physical keyboard) to enter a ticker guess of the correct length.
4.  Press **Enter** or click the **"Guess"** button.
5.  Analyze the **color feedback** on the tiles and the keyboard to refine your next guess.
6.  You have **6 attempts** in total.
7.  If you get stuck, use the **"Freebie"** button once per game for a hint.
8.  After the game ends (win or lose), click **"Play Again"** to start a new round with a different ticker.
9.  Click the **☀️/🌙 icon** to toggle the theme.
10. Click the **'i' icon** for these instructions or the **chart icon** for your stats.

## 📝 Ticker List

The list of possible stock tickers used in the game is currently hardcoded within the `script.js` file (based on components like the S&P 500).

## 🙏 Acknowledgments

* Inspired by the popular word game **Wordle**.
* Charts provided by **[TradingView](https://www.tradingview.com/)**.
