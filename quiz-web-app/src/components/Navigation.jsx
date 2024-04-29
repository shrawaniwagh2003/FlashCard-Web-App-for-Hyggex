import { useState, useEffect } from 'react';
import FlashcardApp from './FlashCard/FlashCardApp';
import rmimg from '../assets/relation.png'

export default function Navigation() {
  const [currentComponent, setCurrentComponent] = useState(<FlashcardApp />);
  const [activeNavItem, setActiveNavItem] = useState("Study");

  const handleClick = (navItem) => {
    setActiveNavItem(navItem);
  };

 

  return (<>
      <div className='lg:ml-16 m-12 mb-16 mt-12'>
      <img src={rmimg} alt="rm img" />
    </div>
  <div className="flex flex-col items-center justify-center mr-6 ml-6 mt-6 mb-0">
      <nav className="mb-4">
        <ul className="flex justify-between">
          <li className={`lg:mr-8 lg:ml-8 lg:text-xl mr-4 font-semibold cursor-pointer hover:border-b-2 hover:border-blue-500 ${activeNavItem === "Study" ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleClick("Study")}>Study</li>
          <li className={`lg:mr-8 lg:ml-8 lg:text-xl mr-4 font-semibold cursor-pointer hover:border-b-2 hover:border-blue-500 ${activeNavItem === "Quiz" ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleClick("Quiz")}>Quiz</li>
          <li className={`lg:mr-8 lg:ml-8 lg:text-xl mr-4 font-semibold cursor-pointer hover:border-b-2 hover:border-blue-500 ${activeNavItem === "Test" ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleClick("Test")}>Test</li>
          <li className={`lg:mr-8 lg:ml-8 lg:text-xl mr-4 font-semibold cursor-pointer hover:border-b-2 hover:border-blue-500 ${activeNavItem === "Game" ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleClick("Game")}>Game</li>
          <li className={`lg:mr-8 lg:ml-8 lg:text-xl mr-4 font-semibold cursor-pointer hover:border-b-2 hover:border-blue-500 ${activeNavItem === "Others" ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleClick("Others")}>Others</li>
        </ul>
      </nav>
      {currentComponent}
    </div>
  </>
  );
}
