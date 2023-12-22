class Game {
  constructor(word) {
    this.word = word;
    this.limit = this.word.length;
    this.attempt = 1;
    this.maxAttempt = 8;
    this.wordInput = document.querySelector('.word_input');
  }

  nextWord(res) {
    let historic = JSON.parse(localStorage.getItem('historic')) || [];
    historic.push({ word: this.word, attempts: this.attempt, result: res });
    localStorage.setItem('historic', JSON.stringify(historic));

    setTimeout(() => {
      location.reload();
    }, 3000);
  }

  validWord() {
    const guessedWord = this.wordInput.length;
    if (this.word === guessedWord) {
      nextWord('victory');
    }else if(this.attempt >= this.maxAttempt) {
      nextWord('defeat');
    }else {
      let correctLetters = 0;
      let incorrectLetters = 0;

      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === guessedWord[i]) {
          correctLetters++;
        } else if (guessedWord.includes(this.word[i])) {
          incorrectLetters++;
        }
      }

      // Lógica para mostrar as letras corretas e incorretas
      console.log(`Letras corretas na posição correta: ${correctLetters}`);
      console.log(`Letras corretas na posição incorreta: ${incorrectLetters}`);
    }
  }

  start() {
    const letterBoard = document.querySelectorAll('.game_bottom__board--letter');
    const enviarButton = document.querySelector('.enviar_button');

    this.wordInput.addEventListener('input', () => {
      const maxLength = this.limit;
      if (this.wordInput.value.length > maxLength) {
        this.wordInput.value = this.wordInput.value.slice(0, maxLength);
      }
    });

    letterBoard.forEach((letter) => {
      const column = letter.getAttribute("term-col");
      if (column <=this.limit) {
        letter.classList.remove('game_bottom__board--letter');
      }
    });

    enviarButton.addEventListener('click', () => {
      this.validWord();
    });

    this.wordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.validWord();
      }
    });
  }
}
