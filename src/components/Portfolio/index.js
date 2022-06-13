// == Import
import './styles.scss';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import Presentation from '../Content/Presentation';
import data from 'src/data/projects.js';


// == Composant
const Portfolio = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
    queryMax: '(max-width: 1920px)',
  });

  return (

  <main className="portfolio">
    <Header />
    {isDesktop && <Presentation />}
    <Content />
    <Footer />
  </main>
  );
};

// == Export
export default Portfolio;
