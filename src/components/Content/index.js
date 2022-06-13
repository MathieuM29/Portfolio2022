// == Import
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './styles.scss';
import Presentation from './Presentation';
import About from './About';
import Resume from './Resume';
import Works from './Works';
import Contact from './Contact';

// == Composant
const Content = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
    queryMax: '(max-width: 1920px)',
  });

  return (

  <section className="content">
    <Routes>
      {!isDesktop && <Route path="/" element={<Presentation />} />}
      {!isDesktop && <Route path="/about" element={<About />} />}
      {isDesktop && <Route path="/" element={<About />} />}
      {/* <Route path="/" element={<About />} /> */}
      <Route path="/resume" element={<Resume />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </section>
  );
};

// == Export
export default Content;
