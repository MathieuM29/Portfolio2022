// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { displayModale } from 'src/actions';

// == Composant
const Work = ({ id, name, cover, label }) => {

  const dispatch = useDispatch();

  

  const handleModale = () => {
    const action = displayModale(id);
    dispatch(action);
  };


  return (
  <div className="work" onClick={handleModale}>
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
