import { Link } from 'react-router-dom';
import homeImage from '../assets/logo.png'; // Import the home image

function Header() {
  return (
    <div id="header" className="py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={homeImage} alt="Logo" className="logo w-48 justify-start ml-16" />
        </Link>
        <div className="flex items-center">
          <ul id="sidemenue" className="hidden md:flex space-x-6">
            <li><Link to="/home" className="text-black">Home</Link></li>
            <li><Link to="/flashcard" className="text-black">Flashcard</Link></li>
            <li><Link to="/contact" className="text-black">Contact</Link></li>
            <li><Link to="/faq" className="text-black">FAQ</Link></li>
          </ul>
          <Link to="/login">
          <Link to="/login">
  <button className="hidden md:inline-block m-5 w-32 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 bg-gradient-to-b from-[#06286e] to-[#0a58a2]">Login</button>
</Link>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
