import Image from 'next/image';

export default function QuizSelections({ handleQuizSelection }) {
  return(
    <div className="quizSelections">
      <button onClick={() => handleQuizSelection('HTML')}>
        <Image
          src="/images/html.svg"
          alt='html simgesi'
          width={158}
          height={28}
        />
        HTML
      </button>

      <button onClick={() => handleQuizSelection('CSS')}>
        <Image
          src="/images/css.svg"
          alt='CSS simgesi'
          width={158}
          height={28}
        /> 
        CSS
      </button>

      <button onClick={() => handleQuizSelection('JAVASCRİPT')}>
        <Image
          src="/images/javaScript.svg"
          alt='JavaScript simgesi'
          width={158}
          height={28}
        />
        Javascript
      </button>

      <button onClick={() => handleQuizSelection('ACCESSİBİLİTY')}>
        <Image
          src="/images/Accessibility.svg"
          alt='Accessibility simgesi'
          width={158}
          height={28}
        /> 
        Accessibility
      </button>
    </div>
  )
}