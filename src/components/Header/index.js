// == Import
import './styles.scss';
import SubHeader from './SubHeader';
import Menu from './Menu';

// == Composant
const Header = () => {

  return (

  <header className="header">
    <SubHeader />
    <Menu />
  </header>
  );
};

// == Export
export default Header;
