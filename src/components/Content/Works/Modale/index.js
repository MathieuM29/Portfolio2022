// == Import
import './styles.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { displayModale } from 'src/actions';

// == Composant
const Modale = ({name, description, cover, git_url, label, site_url, technos}) => {

  const dispatch = useDispatch();

  const handleModale = () => {
    const action = displayModale();
    dispatch(action);
  };

  const modaleRef = useRef();

  useEffect(() => {
    modaleRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  

  return (
    <div className="modale" ref={modaleRef}> 
      <div className="modale__picture">
        <i className="fa-solid fa-xmark modale__picture--cross" onClick={handleModale} ></i>
        <img className="modale__picture--img" src={cover}/>
      </div>
      <div className="modale__desc">
        <p className="modale__desc--title">{name}</p>
        <p className="modale__desc--subTitle">{label}</p>
        <p className="modale__desc--text">{description}</p>
        <ul className="modale__desc__listTechnos">
          {technos.map((techno) => <li key={techno} className="modale__desc__listTechnos--item">{techno}</li>)}
        </ul>
        <div className="modale__desc__btns">
          <a className="modale__desc__btns--link" href={site_url}>Voir projet</a>
          <a className="modale__desc__btns--link" href={git_url}>Voir gitHub</a>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Modale;
