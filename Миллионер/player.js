let getAnswer = {
    userAnswer: 0,
    availableAnswers: [1, 2, 3, 4],
    answerUser() {
        this.userAnswer = parseInt(+prompt("Введите номер ответа (1, 2, 3, 4)\n для выхода нажмите отмену или все кроме предложенного"));
        if (isNaN(this.userAnswer)) {
            return null;
        }
        if (this.availableAnswers.includes(this.userAnswer)) {
            return this.userAnswer;
        } else {
            return false;
        }
    },
    //getAnswer.answerUser();
    checkAnswer(userAnswer) {
        switch (userAnswer) {
            case 1:
                correctAnswers++;
                console.log(correctAnswers);
                break;
            case 2, 3, 4:
                wrongAnswers++;
                console.log(wrongAnswers);
                break;
        }
    }
}

