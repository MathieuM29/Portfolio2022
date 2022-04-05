// == Import
import './styles.scss';
import About from './About';
import Resume from './Resume';
import Works from './Works';
import Contact from './Contact';

// == Composant
const Content = () => {

  return (

  <div className="content">
    <About />
    <Resume />
    <Works />
    <Contact />
  </div>
  );
};

// == Export
export default Content;
