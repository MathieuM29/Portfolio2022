// == Import
import './styles.scss';

// == Composant
const Error = () => {

  return (
  <div className="error">
    <p className="error--text">Les champs ne doivent pas être vides !<i className="fa-solid fa-triangle-exclamation error--icon"></i></p>
  </div>
  );
};

// == Export
export default Error;
