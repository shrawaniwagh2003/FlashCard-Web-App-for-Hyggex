import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import hint from '../../assets/hint.png';
import audio from '../../assets/audio.png';

function Flashcard({ front, back, audioUrl }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAudioClickfront = (event) => {
    event.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(front); // front is the content of the card
    window.speechSynthesis.speak(utterance);
  };
  const handleAudioClickback = (event) => {
    event.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(back); // front is the content of the card
    window.speechSynthesis.speak(utterance);
  };

  const handleHintClick = (event) => {
    event.stopPropagation();
    // Show hint logic goes here
  };

  return (
    <div className="my-9 lg:w-2/4 w-80 h-80 rounded-xl justify-center" onClick={handleClick}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="absolute inset-0 bg-blue-800 h-80 text-white font-semibold rounded-xl shadow-md px-4 py-2 flex items-center justify-center">
          {front}
          <button onClick={handleAudioClickfront} className="absolute top-2 right-2 bg-transparent hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none">
            <img src={audio} alt="audio" className="w-6 h-6" />
          </button>
          <button onClick={handleHintClick} className="absolute top-2 left-2 bg-transparent hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none">
            <img src={hint} alt="hint" className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute inset-0 h-80 bg-blue-400 text-black rounded-xl shadow-md px-4 py-2 flex items-center justify-center">
          {back}
          <button onClick={handleAudioClickback} className="absolute top-2 right-2 bg-transparent hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none">
            <img src={audio} alt="audio" className="w-6 h-6" />
          </button>
          <button onClick={handleHintClick} className="absolute top-2 left-2 bg-transparent hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none">
            <img src={hint} alt="hint" className="w-6 h-6" />
          </button>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Flashcard;
