// == Import
import './styles.scss';
import SubHeader from './SubHeader';
import Menu from './Menu';

// == Composant
const Header = () => {

  return (

  <div className="header">
    <SubHeader />
    <Menu />
  </div>
  );
};

// == Export
export default Header;
