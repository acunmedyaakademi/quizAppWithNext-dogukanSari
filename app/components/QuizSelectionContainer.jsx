import QuizSelections from '@/app/components/QuizSelections'
export default function QuizSelectionContainer({ handleQuizSelection }) {
  return(
    <div className="quizSelectionContainer">
      <div className="title">
        <h1>Frontend Quiz Uygulamasına Başlayın!</h1>
        <p>Başlamak için bir konu seçin.</p>
      </div>
      <QuizSelections handleQuizSelection={handleQuizSelection} />
    </div>
  )
}