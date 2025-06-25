import completeImage from "../assets/quiz-complete.png";
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter(answer => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

  const skippedShare = Math.round((skippedAnswers.length / userAnswers.length) * 100 );
  const correctShare = Math.round((correctAnswers.length / userAnswers.length) * 100 );

  return (
    <div id="summary">
      <img src={completeImage} alt="Trophy icon" />
      <h2>Quiz is complete!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedShare}%</span>
          <div className="text">skipped</div>
        </p>
        <p>
          <span className="number">{correctShare}%</span>
          <div className="text">answered correct</div>
        </p>
        <p>
          <span className="number">{100 - skippedShare - correctShare + '%'}</span>
          <div className="text">answered wrong</div>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}