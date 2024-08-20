import React from 'react';
import './samplequestion.css';
import Navbar from './navbar';

const sampleQuestions = {
    numericalAbility: [
        { id: 1, question: "What is 25% of 200?" },
        { id: 2, question: "If 3x + 7 = 22, what is the value of x?" },
        { id: 3, question: "Simplify: 15 + (6 × 2) - 9" },
        { id: 4, question: "What is the square root of 144?" },
        { id: 5, question: "A car travels 150 km in 3 hours. What is its speed?" }
    ],
    reasoning: [
        { id: 1, question: "Which number comes next in the series: 2, 6, 12, 20, 30, ?" },
        { id: 2, question: "Identify the odd one out: Apple, Banana, Carrot, Mango" },
        { id: 3, question: "If A is B’s sister, C is B’s mother, and D is C’s mother, how is A related to D?" },
        { id: 4, question: "Find the missing number: 7, 14, 28, 56, ?" },
        { id: 5, question: "Which shape is different from the others: Square, Triangle, Circle, Rectangle" }
    ],
    english: [
        { id: 1, question: "Choose the correct spelling: Recieve, Receive, Receve, Recieve" },
        { id: 2, question: "Identify the synonym of 'Happy': Sad, Joyful, Angry, Crying" },
        { id: 3, question: "Fill in the blank: She __ to the market every day. (go, goes, going, gone)" },
        { id: 4, question: "Identify the antonym of 'Brave': Cowardly, Bold, Heroic, Daring" },
        { id: 5, question: "Which sentence is correct: He are going to school, He is going to school, He am going to school, He going to school" }
    ],
    computerFundamentals: [
        { id: 1, question: "What does CPU stand for?" },
        { id: 2, question: "Which of the following is a programming language? Python, HTML, CSS, SQL" },
        { id: 3, question: "Which key is used to refresh a webpage? F1, F5, F7, F12" },
        { id: 4, question: "What is the primary function of an operating system?" },
        { id: 5, question: "Which of the following is not an input device? Keyboard, Mouse, Monitor, Scanner" }
    ]
};

const SampleQuestions = () => {

    return (
        <>
        <Navbar/>
        <div className="sample-questions-container">
            <h2 className="sample-questions-title" style={{color:"white"}}>Sample Questions</h2>

            {Object.keys(sampleQuestions).map((section) => (
                <div key={section} className="sample-questions-section">
                    <h3 className="sample-questions-section-title">
                        {section.split(/(?=[A-Z])/).join(' ')}
                    </h3>
                    <ul className="sample-questions-list">
                        {sampleQuestions[section].map((question) => (
                            <li key={question.id} className="sample-questions-item">
                                {question.id}. {question.question}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        </>
    );
};

export default SampleQuestions;