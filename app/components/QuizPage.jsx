"use client"
import { useEffect, useState } from "react";
import Toggle from "./Toggle";

export default function QuizPage({ questions, handleToggle, theEndQuizPage, currentPage, setCurrentPage, quizType }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const comingQuestion = questions[questionIndex];
  const [showNextButton, setShowNextButton] = useState(false); //cevap göndere bastıktan sonra sonmraki soru butonu çıkıyor
  const [selectedOption, setSelectedOption] = useState(null); //kullanıcı hangi optionu seçti
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0); 
  const [data, setData] = useState({});

  useEffect(() => {
    localStorage.data ?
    setData(JSON.parse(localStorage.data)):
    setData({
      theme: 'light',
    });
  }, []);

  function save() {
   localStorage.data = JSON.stringify(data);
  }

  useEffect(() => {
      save();
  }, [data]);

  function handleClick(index) {
    setSelectedOption(index); // tıkladığımız butonun indexini kaydedio
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    const isAnswerCorrect = comingQuestion.options[selectedOption] === comingQuestion.correctAnswer;
    
    if (isAnswerCorrect) { 
      setScore(score + 1);
    }

    if (selectedOption === null) {
      alert("Lütfen bir şık seçiniz!");
      return;
    }

    setIsCorrect(isAnswerCorrect); 
    setShowNextButton(true); 
    setData([...data, dataObj]);
    save();

  }

  function deleteData() {
    localStorage.removeItem('data');
    theEndQuizPage();
  }

  function handleNextQuestion() {
    if (questionIndex < questions.length - 1) { //-1 yapmamızın nedeni dizinin 0dan başlaması 
      setQuestionIndex(questionIndex + 1); //indexi 1 arttırarak soru değiştriyorum
      setSelectedOption(null);
      setShowNextButton(false);
      setIsCorrect(null); //diğer sayfada cevap sıfırlansın yoksa bacgroundlar karışıyor
    } else {
      setCurrentPage('score');
    }
  }

  return (
    <div className="quizPage">
      <div className='quizPageHeader'>
      <h1>{quizType}</h1>
      <Toggle handleToggle={handleToggle} />
      </div>
      {currentPage === 'quiz' ? (
        comingQuestion && (
          <div className='activeQuestionPart'>
            <div className='quizPageQuestions'>
            <p>Soru {questionIndex + 1} / {questions.length}</p>
            <h1>{comingQuestion.question}</h1>
            </div>
            <div className="quizPageBtns">
              {comingQuestion.options.map((x, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(i)}
                  style={{
                    backgroundColor: selectedOption === i
                      ? isCorrect === null
                        ? '#d9b6ef'
                        : isCorrect
                          ? 'green'
                          : 'red'
                      : comingQuestion.options[i] === comingQuestion.correctAnswer && isCorrect === false
                        ? 'green'
                        : ''
                  }}
                  className={selectedOption === i ? 'selected' : ''}
                     disabled={showNextButton}>
                  {x}
                </button>
              ))}
              {showNextButton ? (
                <button className='submitBtn' onClick={handleNextQuestion} disabled={selectedOption === null}>
                  SONRAKİ SORU
                </button>
              ) : (
                <button className='submitBtn' onClick={handleSubmit}>
                  CEVABI GÖNDER
                </button>
              )}
            </div>
          </div>
        )
      ) : (
        <div className="scorePage">
          <div className='scoreCompletedPart'>
          <h1>Quiz Tamamlandı!</h1>
          </div>
          <div className='scoreInformContainer'>
          <div className='scoreInformPart'>
          <h1>{quizType}</h1>
          <p className='score'>{score} </p>
          <p className='scoreLenght'>{questions.length} üzerinden </p>
          </div>
          <div className='theEndQuizPage'>
          <button onClick={deleteData}>Ana Sayfaya Dön</button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}