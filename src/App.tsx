
import { letters } from './assets/Helpers/letters';
import './App.css'
import { HangImage } from './components/HangImage';
import { useEffect, useState } from 'react';
import { getWord } from './assets/Helpers/getWord';

function App() {
  // El useState sirve para que actualice segun cambios
  const [word, setWord] = useState(getWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  // Determinar si la persona perdió
  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  // Determinar si la persona ganó
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord])



  const checkLetter = (letter: string) => {
    if (lose) return;
    if (won) return;

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9))
      return;
    }

    const hideWordArray = hiddenWord.split(' ')

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hideWordArray[i] = letter;
      }
    }

    setHiddenWord(hideWordArray.join(' '));
  }

  const newGame = () => {
      const newWord = getWord();

    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length) );
    setAttempts(0);
    setLose(false);
    setWon(false);
  };

  return (
    <div className="App">
      {/* Imágenes */}
      <HangImage imageNumber={attempts} />

      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>

      {/* Mensaje si perdió*/}
      {
        (lose)
          ? <h2>Has cagado</h2>
          : ''
      }

      {/* Mensaje si ganó*/}
      {
        (won)
          ? <h2>Bien hecho mi pana</h2>
          : ''
      }

      {/* Intentos restantes */}
      <h3>Intentos: {attempts} </h3>

      {/* Boton letras */}
      {
        letters.map((letter) => (


          <button
            onClick={() => checkLetter(letter)}
            key={letter}>
            {letter}
          </button>
        ))
      }

      <br /> <br />
      <button onClick ={newGame} > ¿Empezamos de nuevo?
      </button>

    </div>
  )

}

export default App
