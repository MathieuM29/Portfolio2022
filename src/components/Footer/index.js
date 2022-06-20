// == Import
import './styles.scss';

// == Composant
const Footer = () => {

  return (
  <footer className="footer">
    <div className="footer__sitemap">
      <ul className="footer__sitemap__main">
        <li><a href="https://mathieumarc.surge.sh/" title="Accueil">Accueil</a>
        <ul className="children">
          <li><a href="https://mathieumarc.surge.sh/about" title="A propos de moi">A propos de moi</a></li>
          <li><a href="https://mathieumarc.surge.sh/resume" title="Mon cv">Mon CV</a></li>
          <li><a href="https://mathieumarc.surge.sh/works" title="Mes projets">Mes projets</a></li>
          <li><a href="https://mathieumarc.surge.sh/contact" title="Me contacter">Me contacter</a></li> 
        </ul> 
        </li>
      </ul>
    </div>
  </footer>
  );
};

// == Export
export default Footer;
