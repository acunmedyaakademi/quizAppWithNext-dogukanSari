export default function QuizSelections({ handleQuizSelection }) {
  return(
    <div className="quizSelections">
      <button onClick={() => handleQuizSelection('HTML')}> <img src="img/html.svg" alt="html imgesi" /> HTML</button>
      <button onClick={() => handleQuizSelection('CSS')}> <img src="img/css.svg" alt="css imgesi" /> CSS</button>
      <button onClick={() => handleQuizSelection('JAVASCRİPT')}> <img src="img/javaScript.svg" alt="javaScript imgesi" /> Javascript</button>
      <button onClick={() => handleQuizSelection('ACCESSİBİLİTY')}> <img src="img/Accessibility.svg" alt="Accessibility imgesi" /> Accessibility</button>
    </div>
  )
}