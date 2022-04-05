// == Import
import './styles.scss';
import Header from '../Header';
import Presentation from '../Presentation';
import Content from '../Content';

// == Composant
const Portfolio = () => {

  return (

  <div className="portfolio">
    <Header />
    <Presentation />
    <Content />
  </div>
  );
};

// == Export
export default Portfolio;
