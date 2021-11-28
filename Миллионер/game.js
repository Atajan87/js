let correctAnswers = 0;
let wrongAnswers = 0;
let game = {
    /**
     * Запускает игру.
     */
    run() {
        // Бесконечный цикл
        renderer.render();
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        // Отображаем нашу игру.
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();



