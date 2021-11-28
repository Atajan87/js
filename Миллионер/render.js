let renderer = {
    // Сюда запишем все что надо отобразить.
    question: "",
    answers: [],
    totalResult: "",
    /**
     * Отображает игру в консоли.
     */
    render() {
        this.totalResult = "";
        let numEnter = "";
        let result = true;
        console.clear();
        // Цикл перебирает все строки, которые надо отобразить.
        questions.forEach(element => {
            if (!result) {
                return;
            }
            if (!Array.isArray(element)) {
                this.question = element + "\n\n";
                //Собирает обший результат
                this.totalResult += "\n" + element + "\n\n";
            } else {
                let b = 0;
                let a = [];
                for (let i = 0; a.length < element.length; i++) {
                    b = Math.floor(Math.random() * 4);
                    if (!a.includes(b)) {
                        a[i] = b;
                        this.answers[i] = element[b];
                    } else {
                        i--;
                        continue;
                    }
                }
                //Отрисовка вопроса
                console.log('\n ? ' + this.question);
                for (let i = 0; i < this.answers.length; i++) {
                    console.log((i + 1) + ': ' + this.answers[i]);
                    //Собирает обший результат
                    this.totalResult += (i + 1) + ': ' + this.answers[i] + '\n';
                }
                result = getAnswer.answerUser();
                console.clear();
                if (result === 'false' || result === 'null') {
                    result = false;
                }
                if (this.answers[(parseInt(result) - 1)] === element[0]) {
                    console.log('Верно: ' + this.answers[(parseInt(result) - 1)]);
                    console.log('\nСледуюший вопрос:');
                    //Собирает обший результат
                    this.totalResult += '--Ваш ответ! Верно: ' + this.answers[(parseInt(result) - 1)] + '\n\n';
                } else {
                    console.log('Не верно');
                    console.log('Ваш ответ: ' + this.answers[(parseInt(result) - 1)]);
                    //Собирает обший результат
                    this.totalResult += '--Ваш ответ! Не верно: ' + this.answers[(parseInt(result) - 1)] + ' ';
                    console.log('Правильный ответ: ' + element[0]);
                    //Собирает обший результат
                    this.totalResult += '\n Правильный ответ: ' + element[0] + '\n\n';
                    console.log('\nСледуюший вопрос:');
                }
                numEnter += result + ", ";
                console.log(numEnter);                
                this.question = "";
                this.answers = [];
            }

        });
        console.clear();
        console.log( numEnter);
        //Выводит обший результат в конце игры
        console.log('Результаты теста');
        console.log(this.totalResult);
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    },
};

