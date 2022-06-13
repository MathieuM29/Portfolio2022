// == Import
import './styles.scss';
import { useMediaQuery } from 'react-responsive';
import SubHeader from './SubHeader';
import Menu from './Menu';

// == Composant
const Header = () => {

  const isTablet = useMediaQuery({
    query: '(min-width: 421px)',
    queryMax: '(max-width: 1024px)',
  });

  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
    queryMax: '(max-width: 1920px)',
  });

  return (

  <header className="header">
    {(!isTablet && !isDesktop) && <SubHeader />}
    <Menu />
  </header>
  );
};

// == Export
export default Header;
