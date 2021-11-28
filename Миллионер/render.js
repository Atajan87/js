//let numUser = "";
let renderer = {
    // Сюда запишем все что надо отобразить.
    question: "",
    answers: [],
    /**
     * Отображает игру в консоли.
     */
    render() {
        let numEnter = "";
        let result = true;
        console.clear();
        // Цикл перебирает все строки, которые надо отобразить.
        questions.forEach(element => {
            if (!result) {
                return;
            }
            if (!Array.isArray(element)) {
                this.question = "\n" + element + "\n\n";
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
                console.log(this.question);
                for (let i = 0; i < this.answers.length; i++) {
                    console.log((i +1) + ': ' + this.answers[i]);               
                }
                result = getAnswer.answerUser();
                console.clear();
                if (result === 'false' || result === 'null') {
                    result = false;
                }
                if (this.answers[(parseInt(result) - 1)] === element[0]) {
                    console.log('Верно: ' + this.answers[(parseInt(result) - 1)]);                    
                    console.log('Следуюший вопрос:'); 
                }else {
                    console.log('Не верно'); 
                    console.log('Ваш ответ: ' + this.answers[(parseInt(result) - 1)]);
                    console.log('Правильный ответ: ' + element[0]);
                    console.log('Следуюший вопрос:'); 
                }
                numEnter += result + ", ";
                //console.log(numEnter);
                this.question = "";
                this.answers = [];
            }
            
        });
        console.clear();
    },
};

