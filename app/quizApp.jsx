"use client"
import Toggle from './components/Toggle';
import QuizPage from './components/QuizPage';
import QuizSelectionContainer from './components/QuizSelectionContainer';
import { useEffect, useState } from 'react';
import HTMLQuestions from '../data/html-questions.json'
import CSSQuestions from '../data/css-questions.json'
import JavaScriptQuestions from '../data/javascript-questions.json'
import AccessibilityQuestions from '../data/accessibility-questions.json'

export default function Home() {
  const [theme, setTheme] = useState(localStorage.theme ? localStorage.theme : 'light'); //theme statei
  const [currentPage, setCurrentPage] = useState('home'); //anasayfa değişiyor
  const [selectedQuestions, setSelectedQuestions] = useState([]); //seçilen sorular stateti
  const [quizType, setQuizType] = useState(null); // hangi quize girecek onu belirleyeceğiz

  function handleToggle() {
   setTheme(theme == 'light' ? 'dark' : 'light');
  }
  
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.theme = (theme == 'light' ? 'light' : 'dark');
  }, [theme]);

  useEffect(() => {
    let questions;
    if (quizType === 'HTML') {
      questions = HTMLQuestions;
    } else if (quizType === 'CSS') {
      questions = CSSQuestions;
    } else if (quizType === 'JAVASCRİPT') {
      questions = JavaScriptQuestions;
    } else if (quizType === 'ACCESSİBİLİTY') {
      questions = AccessibilityQuestions;
    } else {
      questions = [];
    }
    setSelectedQuestions(questions);
  }, [quizType]);

  function handleQuizSelection(type) {
    setQuizType(type);
    setCurrentPage('quiz');
  }

  function theEndQuizPage() {
    setCurrentPage('home');
    setQuizType(null);
  }

  return (
    <div className="container">
      {currentPage === 'home' ? (
        <>
          <Toggle handleToggle={handleToggle} theme={theme} />
          <QuizSelectionContainer handleToggle={handleToggle} handleQuizSelection={handleQuizSelection} />
        </>
      ) : (
        <QuizPage
          questions={selectedQuestions}
          handleToggle={handleToggle}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          theEndQuizPage={theEndQuizPage}
          quizType={quizType}
        />
      )}
    </div>
  );
}  