let $start = document.querySelector('#start');
let $game = document.querySelector('#game');
let $timeHeader = document.querySelector('#time-header');
let $time = document.querySelector('#time');
let $resultHeader = document.querySelector('#result-header');
let $result = document.querySelector('#result');
let $gameTime = document.querySelector('#game-time');

let colors = ['#F1F2B5', '#135058', '#D1913C', '#FFD194', 'linear-gradient(to right, #7b4397, #dc2430)', 'linear-gradient(to right, #8e9eab, #eef2f3)'];
let score = 0;
let isGameStarted = false;

let show = ($el) => {
    $el.classList.remove('hide');
};

let hide = ($el) => {
    $el.classList.add('hide');
};

let getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

let endGame = () => {
    $game.innerHTML = '';
    $gameTime.removeAttribute('disabled');
    setGameScore();
    show($start);
    hide($timeHeader);
    show($resultHeader);
    $game.style.backgroundColor = '#135058';
};

let setGameTime = () => {
    hide($resultHeader);
    show($timeHeader);
    $time.textContent = parseInt($gameTime.value).toFixed(1);
};

let setGameScore = () => {
    $result.textContent = score.toString();
};

let startGame = () => {
    score = 0;
    $gameTime.setAttribute('disabled', 'true');
    setGameTime();
    isGameStarted = true;
    hide($start);
    hide($resultHeader);
    show($timeHeader);
    $game.style.backgroundColor = '#fff';

    let interval = setInterval(() => {
        let time = parseFloat($time.textContent);

        if (time <= 0) {
            clearInterval(interval);

            endGame();
        }
        else {
            $time.textContent = (time - 0.1).toFixed(1);
        }
    }, 100);

    boxRender();
};

let boxRender = () => {
    $game.innerHTML = '';
    let box = document.createElement('div');
    let boxColor = getRandom(0, colors.length);
    let gameSize = $game.getBoundingClientRect();
    let getSize = getRandom(30, 100);
    let maxLeft = gameSize.width - getSize;
    let maxTop = gameSize.height - getSize;

    box.style.width = box.style.height = `${getSize}px`;
    box.style.animation = 'poof .2s linear';
    box.style.position = 'absolute';
    box.style.left = `${getRandom(0, maxLeft)}px`;
    box.style.top = `${getRandom(0, maxTop)}px`;
    box.style.background = `${colors[boxColor]}`;
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');

    $game.insertAdjacentElement('afterbegin', box);
};

let clickOnBox = (event) => {
    if (!isGameStarted) {
        return;
    }

    if (event.target.dataset.box) {
        document.querySelector('#clickSound').play();
        score++;
        boxRender();
    }
};

// Начало игры при нажатии на кнопку "Начать" //
$start.addEventListener('click', startGame);

// Кликаем на квадрат в окне игры //
$game.addEventListener('click', clickOnBox);

// Динамически изменяем время игры при изменении input //
document.addEventListener('input', setGameTime);