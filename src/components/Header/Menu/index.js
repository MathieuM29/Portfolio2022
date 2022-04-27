// == Import
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { isItemActive } from 'src/actions';
import './styles.scss';

// == Composant
const Menu = () => {

  const dispatch = useDispatch();
  // const { isActive } = useSelector((state) => state);

  const handleActiveItem = () => {
    const action = isItemActive();
    dispatch(action);
  };

  return (

  <nav className="menu">
    <NavLink className="menu__item" to="/" title="Page d'accueil" onClick={handleActiveItem}><i className="fa-solid fa-house-chimney menu__item--icon"></i>Accueil</NavLink>
    <NavLink className="menu__item" to="/about" title="Page à propos" onClick={handleActiveItem}><i className="fa-solid fa-user menu__item--icon"></i>À propos</NavLink>
    <NavLink className="menu__item" to="/resume" title="Page du CV" onClick={handleActiveItem}><i className="fa-solid fa-file menu__item--icon"></i>CV</NavLink>
    <NavLink className="menu__item" to="/works" title="Page des projets réalisés" onClick={handleActiveItem}><i className="fa-solid fa-person-digging menu__item--icon"></i>Projets</NavLink>
    <NavLink className="menu__item" to="/contact" title="Page de contact" onClick={handleActiveItem}><i className="fa-solid fa-at menu__item--icon"></i>Contact</NavLink>
  </nav>
  );
};

// == Export
export default Menu;
