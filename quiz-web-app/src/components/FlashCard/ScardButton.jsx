import { useState } from 'react';
// import Flashcard from '../FlashCard/flashcard';
import next from "../../assets/front.png";
import back from "../../assets/back.png";
import refresh from "../../assets/refresh.png";
import fullscreen from "../../assets/fullscreen.png";
// import Navigation from '../Navigation';

export default function ScardButton() {
    const [questions, setQuestions] = useState([
        { front: 'Question 1', back: 'Answer 1' },
        { front: 'Question 2', back: 'Answer 2' },
        // Add more questions here
      ]);
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextQuestion = () => {
        setCurrentIndex(currentIndex === questions.length - 1 ? 0 : currentIndex + 1);
      };
    
      const previousQuestion = () => {
        setCurrentIndex(currentIndex === 0 ? questions.length - 1 : currentIndex - 1);
      };
    
      const renderQuestion = (index) => {
        setCurrentIndex(index);
      };
    
      const toggleFullScreen = () => {
        // Implement full-screen functionality
      };
    
      const refreshQuestions = () => {
        // Implement refresh questions functionality
      };

  return (
    <div className="flex md:flex-row mt-4 w-full md:w-2/4 justify-between items-center  ">
    <img className="w-8 h-8 " src={refresh} alt="refresh" onClick={refreshQuestions} />
    <div className="flex items-center justify-center lg:flex-grow ">
      <img className="lg:w-10 lg:h-10 w-8 h-8 mr-2" src={back} alt="previous" onClick={previousQuestion} />
      <span className="text-xl font-semibold text-gray-500">{currentIndex + 1}/{questions.length}</span>
      <img className="lg:w-10 lg:h-10 w-8 h-8 ml-2" src={next} alt="next" onClick={nextQuestion} />
    </div>
    <img className="w-8 h-8 " src={fullscreen} alt="fullscreen" onClick={toggleFullScreen} />
  </div>
  )
}
