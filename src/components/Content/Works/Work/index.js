// == Import
import './styles.scss';

// == Composant
const Work = ({ id, name, technos, description, git_url, site_url, cover, category, label }) => {

  return (

  <div className="work">
    <div className="work__picture">
      <img className="work__picture--img" src={cover} />
    </div>
    <p className="work__name">{name}</p>
    <p className="work__category">{label}</p>
    
  </div>
  );
};

// == Export
export default Work;
