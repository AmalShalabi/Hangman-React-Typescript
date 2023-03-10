import { useState } from "react";
import HangmanDrwaing from "./components/HangmanDrwaing";
import HangmanWord from "./components/HangmanWord";
import KeyWord from "./components/KeyWord";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessLetters] = useState<string[]>([]);
  console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrwaing />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <KeyWord />
      </div>
    </div>
  );
}

export default App;
