// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';

// == Composant
const Menu = () => {



  return (

  <div className="menu">
    <NavLink className="menu__item" to="/home"><i className="fa-solid fa-house-chimney menu__item--icon"></i>Home</NavLink>
    <NavLink className="menu__item" to="/about"><i className="fa-solid fa-user menu__item--icon"></i>About</NavLink>
    <NavLink className="menu__item" to="/resume"><i className="fa-solid fa-file menu__item--icon"></i>Resume</NavLink>
    <NavLink className="menu__item" to="/works"><i className="fa-solid fa-person-digging menu__item--icon"></i>Works</NavLink>
    <NavLink className="menu__item" to="/contact"><i className="fa-solid fa-at menu__item--icon"></i>Contact</NavLink>
  </div>
  );
};

// == Export
export default Menu;
