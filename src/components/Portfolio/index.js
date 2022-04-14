// == Import
import './styles.scss';
import { useEffect } from 'react';
import Header from '../Header';
import Content from '../Content';
import data from 'src/data/projects.js';


// == Composant
const Portfolio = () => {

  return (

  <div className="portfolio">
    <Header />
    <Content />
  </div>
  );
};

// == Export
export default Portfolio;
