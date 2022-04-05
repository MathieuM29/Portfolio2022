// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';
import about from 'src/assets/images/about.png';
import aboutFocus from 'src/assets/images/about_focus.png';
import resume from 'src/assets/images/resume.png';
import works from 'src/assets/images/works.png';
import contact from 'src/assets/images/contact.png';

// == Composant
const Menu = () => {


  return (

  <div className="menu">
    <NavLink className="menu__item" to="/about"><img className="menu__item--icon" src={about}/>About</NavLink>
    <NavLink className="menu__item" to="/resume"><img className="menu__item--icon" src={resume}/>Resume</NavLink>
    <NavLink className="menu__item" to="/works"><img className="menu__item--icon" src={works}/>Works</NavLink>
    <NavLink className="menu__item" to="/contact"><img className="menu__item--icon" src={contact}/>Contact</NavLink>
  </div>
  );
};

// == Export
export default Menu;
