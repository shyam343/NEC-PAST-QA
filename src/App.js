import React, { useState } from 'react';
import './App.css';
import questions from './qadata/qadatas'; // Importing questions from the data folder

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedAnswer(isCorrect);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null); // Reset answer for the next question
    } else {
      setShowScore(true); // Show score when the quiz ends
    }
  };

  const handlePreviousQuestion = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
      setSelectedAnswer(null); // Reset answer when moving back
    }
  };

  // Function to reload the page and start a new quiz
  const handleStartNewQuiz = () => {
    window.location.reload(); // Reloads the page
  };

  return (
    <div className="app">
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            <br />
            <button className="nav-button" onClick={handleStartNewQuiz}>
              Start New Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedAnswer !== null
                      ? option.isCorrect
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  }`}
                  onClick={() => handleAnswerOptionClick(option.isCorrect)}
                  disabled={selectedAnswer !== null} // Disable after selecting
                >
                  {option.answerText}
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
              <button
                onClick={handlePreviousQuestion}
                className="nav-button"
                disabled={currentQuestion === 0} // Disable "Previous" on the first question
              >
                Previous
              </button>
              <button
                onClick={handleNextQuestion}
                className="nav-button"
                disabled={selectedAnswer === null} // Enable only if an answer is selected
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
