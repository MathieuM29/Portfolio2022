// == Import
import './styles.scss';
import profil_picture from 'src/assets/images/profil_picture.jpg';
// == Composant
const Presentation = () => {

  return (
  <section className="presentation">
    <div className="presentation__picture">
      <img className="presentation__picture--img" src={profil_picture} alt=""/>
    </div>

    <div className="presentation__infos">
      <h1 className="presentation__infos--title">Mathieu Marc</h1>
      <h2 className="presentation__infos--job">Développeur web</h2>
    </div>

    <div className="presentation__social">
      <a href="https://github.com/MathieuM29" title="Lien vers mon profil GitHub" target="_blank"><i className="fa-brands fa-github presentation__social--github"></i></a>
      <a href="https://twitter.com/marcmathieu29" title="Lien vers mon profil Twitter" target="_blank"><i className="fa-brands fa-twitter presentation__social--twitter"></i></a>
    </div>

    <div className="presentation__contact">
      <div className="presentation__contact__btn">
        <a className="presentation__contact--cv" href="cv2022.pdf" title="Lien pour télécharger mon cv" download target="_blank">Télecharger mon cv</a>
      </div>   
    </div>
  </section>
  );
};

// == Export
export default Presentation;
