// == Import
import './styles.scss';
import profil_picture from 'src/assets/images/profil_picture.jpg';
// == Composant
const Presentation = () => {

  return (

  <div className="presentation">

    <div className="presentation__picture">
      <img className="presentation__picture--img" src={profil_picture} alt="my porfil picture"/>
    </div>

    <div className="presentation__infos">
      <h1 className="presentation__infos--title">Mathieu Marc</h1>
      <h2 className="presentation__infos--job">Développeur web</h2>
    </div>

    <div className="presentation__social">
      <a href="https://github.com/MathieuM29"><i className="fa-brands fa-github presentation__social--github"></i></a>
      <a href="https://twitter.com/marcmathieu29"><i className="fa-brands fa-twitter presentation__social--twitter"></i></a>
    </div>

    <div className="presentation__contact">
      <div className="presentation__contact__btn">
        <a className="presentation__contact--cv" href="/src/assets/cv2022.pdf" download target="_blank">Télecharger mon cv</a>
      </div>
      <div className="presentation__contact__btn">
        <a className="presentation__contact--contact" href="#contact">Contactez-moi</a>
      </div>    
    </div>
  </div>
  );
};

// == Export
export default Presentation;
