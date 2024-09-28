import React, { useState } from 'react';
import "../App.css";
import QustionList from './qustionList';

const Qustion = () => {
    const questions = [
        {
            question: 'What is React?',
            options: ['CSS Framework', 'React Library', 'React Framework', 'Teaching Tool'],
            answer: 'React Library',
        },
        {
            question: 'What is 2 + 2?',
            options: ['3', '5', '4', '7'],
            answer: '4',
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentAns, setCurrentAns] = useState(null);
    const [score, setScore] = useState(0);
    const [quizEnded, setQuizEnded] = useState(false);

    const handleClick = (option) => {
        setCurrentAns(option);
    };

    const handleNextQuestion = () => {
        // Check if the current answer is correct
        if (currentAns === questions[currentIndex].answer) {
            setScore(score + 1);
        }

        // Move to the next question or end the quiz
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setCurrentAns(null); // Reset answer for the next question
        } else {
            setQuizEnded(true); // End the quiz
        }
    };

    return (
        <div>
            {quizEnded ? (
                <div>
                    <h2>Your Score: {score} out of {questions.length}</h2>
                </div>
            ) : (
                <div>
                    <QustionList 
                        question={questions[currentIndex].question}
                        options={questions[currentIndex].options} 
                        handleClick={handleClick} 
                        currentAns={currentAns} 
                    />
                    <button onClick={handleNextQuestion}>Next Question</button>
                </div>
            )}
        </div>
    );
}

export default Qustion;
