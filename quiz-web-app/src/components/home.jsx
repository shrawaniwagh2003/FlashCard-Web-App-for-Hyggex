// import { AiOutlineHome } from 'react-icons/ai'; // Import the home icon from react-icons
// import next from "../assets/back.png"
import hint from '../assets/hint.png';
import homeimg from '../assets/HOME.png'
export default function Home() {
  return (
    <div > 
 <div className='lg:ml-24 mb-16 lg:mt-32 ml-8 mt-20'>
      <img src={homeimg} alt="faq img" />
    </div>
<img src={hint} alt="hint" className="logo" />

    </div>
  )
}
