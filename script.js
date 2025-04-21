document.addEventListener('DOMContentLoaded', () => {
    // --- JS Constants/Variables ---
    const TICKER_LIST = ["MMM", "AOS", "ABT", "ABBV", "ACN", "ADBE", "AMD", "AES", "AFL", "A", "APD", "ABNB", "AKAM", "ALB", "ARE", "ALGN", "ALLE", "LNT", "ALL", "GOOGL", "GOOG", "MO", "AMZN", "AMCR", "AEE", "AEP", "AXP", "AIG", "AMT", "AWK", "AMP", "AME", "AMGN", "APH", "ADI", "ANSS", "AON", "APA", "APO", "AAPL", "AMAT", "APTV", "ACGL", "ADM", "ANET", "AJG", "AIZ", "T", "ATO", "ADSK", "ADP", "AZO", "AVB", "AVY", "AXON", "BKR", "BALL", "BAC", "BAX", "BDX", "BRK.B", "BBY", "TECH", "BIIB", "BLK", "BX", "BK", "BA", "BKNG", "BWA", "BSX", "BMY", "AVGO", "BR", "BRO", "BF.B", "BLDR", "BG", "BXP", "CHRW", "CDNS", "CZR", "CPT", "CPB", "COF", "CAH", "KMX", "CCL", "CARR", "CAT", "CBOE", "CBRE", "CDW", "CE", "COR", "CNC", "CNP", "CF", "CRL", "SCHW", "CHTR", "CVX", "CMG", "CB", "CHD", "CI", "CINF", "CTAS", "CSCO", "C", "CFG", "CLX", "CME", "CMS", "KO", "CTSH", "CL", "CMCSA", "CAG", "COP", "ED", "STZ", "CEG", "COO", "CPRT", "GLW", "CPAY", "CTVA", "CSGP", "COST", "CTRA", "CRWD", "CCI", "CSX", "CMI", "CVS", "DHR", "DRI", "DVA", "DAY", "DECK", "DE", "DELL", "DAL", "DVN", "DXCM", "FANG", "DLR", "DFS", "DG", "DLTR", "D", "DPZ", "DOV", "DOW", "DHI", "DTE", "DUK", "DD", "EMN", "ETN", "EBAY", "ECL", "EIX", "EW", "EA", "ELV", "EMR", "ENPH", "ETR", "EOG", "EPAM", "EQT", "EFX", "EQIX", "EQR", "ERIE", "ESS", "EL", "EG", "EVRG", "ES", "EXC", "EXPE", "EXPD", "EXR", "XOM", "FFIV", "FDS", "FICO", "FAST", "FRT", "FDX", "FIS", "FITB", "FSLR", "FE", "FI", "FMC", "F", "FTNT", "FTV", "FOXA", "FOX", "BEN", "FCX", "GRMN", "IT", "GE", "GEHC", "GEV", "GEN", "GNRC", "GD", "GIS", "GM", "GPC", "GILD", "GPN", "GL", "GDDY", "GS", "HAL", "HIG", "HAS", "HCA", "DOC", "HSIC", "HSY", "HES", "HPE", "HLT", "HOLX", "HD", "HON", "HRL", "HST", "HWM", "HPQ", "HUBB", "HUM", "HBAN", "HII", "IBM", "IEX", "IDXX", "ITW", "INCY", "IR", "PODD", "INTC", "ICE", "IFF", "IP", "IPG", "INTU", "ISRG", "IVZ", "INVH", "IQV", "IRM", "JBHT", "JBL", "JKHY", "J", "JNJ", "JCI", "JPM", "JNPR", "K", "KVUE", "KDP", "KEY", "KEYS", "KMB", "KIM", "KMI", "KKR", "KLAC", "KHC", "KR", "LHX", "LH", "LRCX", "LW", "LVS", "LDOS", "LEN", "LII", "LLY", "LIN", "LYV", "LKQ", "LMT", "L", "LOW", "LULU", "LYB", "MTB", "MPC", "MKTX", "MAR", "MMC", "MLM", "MAS", "MA", "MTCH", "MKC", "MCD", "MCK", "MDT", "MRK", "META", "MET", "MTD", "MGM", "MCHP", "MU", "MSFT", "MAA", "MRNA", "MHK", "MOH", "TAP", "MDLZ", "MPWR", "MNST", "MCO", "MS", "MOS", "MSI", "MSCI", "NDAQ", "NTAP", "NFLX", "NEM", "NWSA", "NWS", "NEE", "NKE", "NI", "NDSN", "NSC", "NTRS", "NOC", "NCLH", "NRG", "NUE", "NVDA", "NVR", "NXPI", "ORLY", "OXY", "ODFL", "OMC", "ON", "OKE", "ORCL", "OTIS", "PCAR", "PKG", "PLTR", "PANW", "PARA", "PH", "PAYX", "PAYC", "PYPL", "PNR", "PEP", "PFE", "PCG", "PM", "PSX", "PNW", "PNC", "POOL", "PPG", "PPL", "PFG", "PG", "PGR", "PLD", "PRU", "PEG", "PTC", "PSA", "PHM", "PWR", "QCOM", "DGX", "RL", "RJF", "RTX", "O", "REG", "REGN", "RF", "RSG", "RMD", "RVTY", "ROK", "ROL", "ROP", "ROST", "RCL", "SPGI", "CRM", "SBAC", "SLB", "STX", "SRE", "NOW", "SHW", "SPG", "SWKS", "SJM", "SW", "SNA", "SOLV", "SO", "LUV", "SWK", "SBUX", "STT", "STLD", "STE", "SYK", "SMCI", "SYF", "SNPS", "SYY", "TMUS", "TROW", "TTWO", "TPR", "TRGP", "TGT", "TEL", "TDY", "TFX", "TER", "TSLA", "TXN", "TPL", "TXT", "TMO", "TJX", "TSCO", "TT", "TDG", "TRV", "TRMB", "TFC", "TYL", "TSN", "USB", "UBER", "UDR", "ULTA", "UNP", "UAL", "UPS", "URI", "UNH", "UHS", "VLO", "VTR", "VLTO", "VRSN", "VRSK", "VZ", "VRTX", "VTRS", "VICI", "V", "VST", "VMC", "WRB", "GWW", "WAB", "WBA", "WMT", "DIS", "WBD", "WM", "WAT", "WEC", "WFC", "WELL", "WST", "WDC", "WY", "WMB", "WTW", "WDAY", "WYNN", "XEL", "XYL", "YUM", "ZBRA", "ZBH", "ZTS"];
    const MAX_GUESSES = 6;
    const KEYBOARD_LAYOUT = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"] // Use unicode backspace symbol
    ];
    const STATS_STORAGE_KEY = 'stockleStats';
    const THEME_STORAGE_KEY = 'stockleTheme';

    // DOM Elements
    const guessGrid = document.getElementById('guess-grid');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const freebieButton = document.getElementById('freebie-button');
    const messageArea = document.getElementById('message-area');
    const chartContainer = document.getElementById('chart-container');
    const playAgainButton = document.getElementById('play-again-button');
    const keyboardArea = document.getElementById('keyboard-area');
    const gameTitle = document.getElementById('game-title');
    const gameSubtitle = document.getElementById('game-subtitle');
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const infoButton = document.getElementById('info-btn');
    const statsButton = document.getElementById('stats-btn');
    const infoModal = document.getElementById('info-modal');
    const statsModal = document.getElementById('stats-modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Game State Variables
    let targetTicker = '';
    let currentGameLength = 0;
    let currentRowIndex = 0;
    let currentGuess = '';
    let gameOver = false;
    let freebieUsed = false;
    let tradingViewWidget = null;
    let letterStatus = {}; // { 'A': 'correct', 'B': 'present', 'C': 'absent' }
    let gameStats = { played: 0, wins: 0, currentStreak: 0, maxStreak: 0 };

    // --- Theme, Stats, Modal Logic ---
    function applyTheme(theme) {
        const sunIcon = themeToggleButton.querySelector('.icon-sun');
        const moonIcon = themeToggleButton.querySelector('.icon-moon');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'inline-block';
        } else {
            document.body.classList.remove('dark-mode');
            if (sunIcon) sunIcon.style.display = 'inline-block';
            if (moonIcon) moonIcon.style.display = 'none';
        }
        // Reload chart with new theme IF a chart exists and game is not over
        if (tradingViewWidget && !gameOver && targetTicker) {
            console.log("Reloading chart for theme change.");
            loadTradingViewChart(targetTicker);
        } else if (tradingViewWidget && gameOver) {
             // Attempt to change theme of existing widget if game over (may not work reliably)
             try {
                 const chartTheme = theme === 'dark' ? 'dark' : 'light';
                 // Note: TradingView doesn't have a reliable public API to change theme post-init
                 console.warn("Cannot reliably change chart theme after game over. Reloading chart instead.");
                 loadTradingViewChart(targetTicker); // Reload might be better
             } catch (e) {
                 console.warn("Could not change theme on existing widget:", e);
             }
        }
    }

    function toggleTheme() {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }

    function loadStats() {
        const statsString = localStorage.getItem(STATS_STORAGE_KEY);
        if (statsString) {
            try {
                gameStats = JSON.parse(statsString);
                // Basic validation
                if (typeof gameStats.played !== 'number' || typeof gameStats.wins !== 'number' ||
                    typeof gameStats.currentStreak !== 'number' || typeof gameStats.maxStreak !== 'number') {
                    throw new Error("Invalid stats format");
                }
            } catch (e) {
                console.error("Failed to parse stats, resetting.", e);
                gameStats = { played: 0, wins: 0, currentStreak: 0, maxStreak: 0 };
                localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(gameStats));
            }
        } else {
            // Initialize if no stats found
            gameStats = { played: 0, wins: 0, currentStreak: 0, maxStreak: 0 };
            localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(gameStats));
        }
    }

    function saveStats() {
        localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(gameStats));
    }

    function updateStats(isWin) {
        gameStats.played += 1;
        if (isWin) {
            gameStats.wins += 1;
            gameStats.currentStreak += 1;
            if (gameStats.currentStreak > gameStats.maxStreak) {
                gameStats.maxStreak = gameStats.currentStreak;
            }
        } else {
            gameStats.currentStreak = 0;
        }
        saveStats();
    }

    function displayStats() {
        document.getElementById('stats-played').textContent = gameStats.played;
        const winPercentage = gameStats.played > 0 ? Math.round((gameStats.wins / gameStats.played) * 100) : 0;
        document.getElementById('stats-win-pct').textContent = winPercentage;
        document.getElementById('stats-current-streak').textContent = gameStats.currentStreak;
        document.getElementById('stats-max-streak').textContent = gameStats.maxStreak;
    }

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            if (modalId === 'stats-modal') {
                displayStats(); // Update stats just before showing
            }
            modal.classList.add('visible');
        }
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('visible');
    }

     function closeAllModals() {
        document.querySelectorAll('.modal.visible').forEach(modal => {
            modal.classList.remove('visible');
        });
    }


    // --- Core Game Logic ---
    function selectTargetTicker() {
        // Filter list for potential lengths? For now, just pick random.
        const index = Math.floor(Math.random() * TICKER_LIST.length);
        return TICKER_LIST[index].toUpperCase(); // Ensure uppercase
    }

    function createGrid() {
        guessGrid.innerHTML = ''; // Clear previous grid
        const tileSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--tile-size'));
        const tileGap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--tile-gap'));

        // Calculate required width and set it
        const gridWidth = (currentGameLength * tileSize) + ((currentGameLength - 1) * tileGap);
        guessGrid.style.width = `${gridWidth}px`;

        for (let i = 0; i < MAX_GUESSES; i++) {
            const row = document.createElement('div');
            row.className = 'grid-row';
            row.id = `row-${i}`;
            row.style.gridTemplateColumns = `repeat(${currentGameLength}, var(--tile-size))`; // Set columns based on length
            for (let j = 0; j < currentGameLength; j++) {
                const tile = document.createElement('div');
                tile.className = 'tile';
                tile.id = `tile-<span class="math-inline">\{i\}\-</span>{j}`;
                row.appendChild(tile);
            }
            guessGrid.appendChild(row);
        }
        console.log(`Grid created for length: ${currentGameLength}`);
    }


    function createKeyboard() {
        keyboardArea.innerHTML = ''; // Clear previous keyboard
        letterStatus = {}; // Reset letter statuses

        KEYBOARD_LAYOUT.forEach(rowKeys => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'keyboard-row';
            rowKeys.forEach(keyText => {
                const keyButton = document.createElement('button');
                keyButton.className = 'key';
                keyButton.textContent = keyText;
                // Use dataset for easier key identification, handle Backspace symbol
                const dataKeyValue = (keyText === '⌫') ? 'BACKSPACE' : keyText;
                keyButton.dataset.key = dataKeyValue;
                if (keyText === "ENTER" || keyText === "⌫") {
                    keyButton.classList.add('wide');
                }
                keyButton.addEventListener('click', handleKeyPress);
                rowDiv.appendChild(keyButton);
            });
            keyboardArea.appendChild(rowDiv);
        });
         console.log("Keyboard created.");
    }

    function loadTradingViewChart(ticker) {
        // Remove previous widget instance if it exists
        if (tradingViewWidget && typeof tradingViewWidget.remove === 'function') {
             try {
                tradingViewWidget.remove();
                console.log("Previous TradingView widget removed.");
            } catch(e) {
                console.warn("Could not remove previous TradingView widget:", e);
                // Force clear container as fallback
                chartContainer.innerHTML = '';
            }
        }
         // Ensure container is empty before loading new chart
         chartContainer.innerHTML = '';

        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';

        // Use setTimeout to ensure DOM is ready after potential innerHTML clear
        setTimeout(() => {
            try {
                 if (typeof TradingView === 'undefined' || !TradingView || !TradingView.widget) {
                     throw new Error("TradingView library not loaded or ready.");
                 }
                tradingViewWidget = new TradingView.widget({
                    "container_id": "chart-container",
                    "width": "100%",
                    "height": "100%",
                    "symbol": ticker, // Use the provided ticker
                    "interval": "D", // Daily interval
                    "timezone": "Etc/UTC",
                    "theme": currentTheme,
                    "style": "1", // Candlesticks
                    "locale": "en",
                    "toolbar_bg": "#f1f3f6", // Standard toolbar background (widget adapts)
                    "enable_publishing": false, // Disable social features
                    "hide_top_toolbar": true, // Hide symbol search, interval etc.
                    "hide_legend": true, // Hide OHLC legend
                    "hide_side_toolbar": true, // Hide drawing tools
                    "save_image": false,
                    "allow_symbol_change": false, // Prevent user changing symbol in chart
                    "studies": [], // No default indicators
                    "autosize": true // Let it fill container
                });
                console.log(`TradingView chart loaded: ${ticker}, Theme: ${currentTheme}`);
            } catch (error) {
                console.error("Error initializing TradingView Widget:", error);
                chartContainer.innerHTML = `<p style="text-align:center; padding: 20px; color: red;">Error loading chart for ${ticker}.</p>`;
                 tradingViewWidget = null; // Reset widget variable on error
            }
        }, 50); // Small delay seems to help robustness
    }

    function displayMessage(msg, type = 'info') {
        messageArea.textContent = msg;
        messageArea.className = 'message-area'; // Reset classes
        if (type === 'win') {
            messageArea.classList.add('win');
        } else if (type === 'info') {
            messageArea.classList.add('info');
        } else if (type === 'error') {
            // Uses default red color
        } else {
             messageArea.classList.add(type); // Allow custom classes?
        }
         // Optionally clear message after a delay
         // setTimeout(clearMessage, 3000);
    }

    function clearMessage() {
        messageArea.textContent = '';
        messageArea.className = 'message-area';
    }

     function handleKeyPress(event) {
        if (gameOver) return;

        // Check if triggered by button click or keyboard event
        let key;
        if (event.type === 'click' && event.target && event.target.dataset.key) {
             key = event.target.dataset.key;
        } else if (event.type === 'keydown') {
            // Handle physical keyboard
             if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
                 key = event.key.toUpperCase();
             } else if (event.key === 'Enter') {
                 key = 'ENTER';
             } else if (
