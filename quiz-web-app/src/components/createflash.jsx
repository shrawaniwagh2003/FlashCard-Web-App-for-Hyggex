import { useState } from 'react';
import plus from '../assets/+.png'

function CreateFlash() {
  const [frontContent, setFrontContent] = useState('');
  const [backContent, setBackContent] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleFrontInputChange = (e) => {
    setFrontContent(e.target.value);
  };

  const handleBackInputChange = (e) => {
    setBackContent(e.target.value);
  };

  const handleCreateFlashCard = () => {
    console.log('Front Content:', frontContent);
    console.log('Back Content:', backContent);
    setFrontContent('');
    setBackContent('');
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="create-flash h-80">
      <button className="btn btn-2 mb-2" onClick={toggleForm}>Create Flash Card</button>
      {showForm && (
        <div className="contact fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="contact-form bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Create Flash Card</h1>
            <form>
              <input type="text" name="frontContent" placeholder="Front Content" value={frontContent} onChange={handleFrontInputChange} className="input mb-4" required />
              <input type="text" name="backContent" placeholder="Back Content" value={backContent} onChange={handleBackInputChange} className="input mb-4 ml-2" required />
              <img src={plus} alt="create flash card" className="w-6 h-6" onClick={handleCreateFlashCard} />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateFlash;
