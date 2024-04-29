import Header from './components/header';
import Home from './components/home'; // Import the Home component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BreadCrumb from './components/breadcrumb';
// import FlashcardApp from './components/FlashCard/FlashCardApp';
import Navigation from './components/Navigation';
import CreateFlashCard from './components/CreateFlashCard';
import FAQ from './components/FaqSection';
import FAQimg from "./assets/FAQ.png"
import Contact from './components/contact';
// import CreateFlash from './components/createflash';

function App() {
  return (
    <Router>
      <Header />
      <BreadCrumb /> {/* Render the Breadcrumb component */}
      <Routes>
        <Route path="/" element={<Navigation />} /> 
        <Route path="/home" element={<Navigation />} /> 
        <Route path="/flashcard" element={<Navigation />} /> 
        <Route path="/contact" element={<Navigation />} /> 
        <Route path="/faq" element={<Navigation />} /> 
      </Routes>
      <CreateFlashCard />
      <div className='mt-2 mb-4'>
    
    <div className='lg:ml-24 mb-16 lg:mt-32 ml-8 mt-20'>
      <img src={FAQimg} alt="faq img" />
    </div>
      <div>
      <FAQ/>
      </div>
      </div>
    </Router>
    
  );
}

export default App;
