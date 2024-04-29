import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png'; // Import the home image
import createflash from '../assets/createflsh.png'

function CreateFlashCard() {
  return (
    <div id="header" className="py-4 mt-8">
      <div className="container mx-auto flex items-center justify-between ">
        <Link to="/">
          <img src={logo2} alt="Logo" className="logo lg:w-48 w-28 justify-start ml-2 " />
        </Link>
        <div className="flex items-center">
        <img src={createflash} alt="Logo" className="logo lg:w-48 w-40 justify-start ml-2 mr-2 md:justify-start"  />
        </div>
      </div>
    </div>
  );
}

export default CreateFlashCard;
