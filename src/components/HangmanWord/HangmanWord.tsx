type HangmanWordProps={
  guessedLetters:string[]
  wordToGuess:string
  reveal?:boolean
}
const HangmanWord = ({guessedLetters,wordToGuess,reveal=false}:HangmanWordProps) => {

  return (
    <div
      style={{
        display: "flex",
        gap: ".45em",
        fontSize: "3rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        marginTop:"3rem"
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)||reveal
                ? "visible"
                : "hidden",
                color: 
                !guessedLetters.includes(letter) && reveal ?"red": "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
