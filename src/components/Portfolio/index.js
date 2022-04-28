// == Import
import './styles.scss';
import { useEffect } from 'react';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import data from 'src/data/projects.js';


// == Composant
const Portfolio = () => {

  return (

  <main className="portfolio">
    <Header />
    <Content />
    <Footer />
  </main>
  );
};

// == Export
export default Portfolio;
