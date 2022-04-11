// == Import
import { Routes, Route } from 'react-router-dom';
import './styles.scss';
import Presentation from './Presentation';
import About from './About';
import Resume from './Resume';
import Works from './Works';
import Contact from './Contact';

// == Composant
const Content = () => {

  return (

  <div className="content">
    <Routes>
      <Route path="/" element={<Presentation />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
  );
};

// == Export
export default Content;
