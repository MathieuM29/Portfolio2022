// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeInputValue } from 'src/actions'; 

// == Composant
const Contact = () => {
  const dispatch = useDispatch();
  const { nameForm, mailForm, messageForm } = useSelector((state) => state);

  const handleInputChange = (e) => {

    dispatch(changeInputValue(e.target.value, e.target.name));
    console.log(e.target.value, e.target.name);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('submit',nameForm, mailForm, messageForm)

  };

  return (
    <div className="contact">
      <div className="contact__title">
        <h2 className="contact__title--text"><span>Rester</span> en contact</h2>
      </div> 
      <div className="contact__map">
        <iframe className="contact__map--style" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84752.0159028797!2d-4.569625666029843!3d48.40853490195864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816bbe1d9925b93%3A0xc6488358179c30ab!2sBrest!5e0!3m2!1sfr!2sfr!4v1650453330021!5m2!1sfr!2sfr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact__infos">
        <div className="contact__infos__container">
          <p className="contact__infos__container--text">Adresse</p>
          <p className="contact__infos__container--data">Brest 29200, France</p>
        </div>
        <div className="contact__infos__container">
          <p className="contact__infos__container--text">Email</p>
          <p className="contact__infos__container--data">marcmathieu29@gmail.com</p>
        </div>
        <div className="contact__infos__container">
          <p className="contact__infos__container--text">Téléphone</p>
          <p className="contact__infos__container--data">06.64.31.60.56</p>
        </div>
        <div className="contact__infos__container">
          <p className="contact__infos__container--text">Disponibilité</p>
          <p className="contact__infos__container--data">Disponible</p>
        </div>
      </div>
      <div className="contact__title--border">
        <h2 className="contact__title--text"><span>Contactez</span> moi</h2>
      </div>
      <form className="contact__form" onSubmit={handleSubmit}>
        <input className="contact__form--input" type="text" value={nameForm} name="nameForm" placeholder="Nom complet" onChange={handleInputChange} />
        <input className="contact__form--input" type="text" value={mailForm} name="mailForm" placeholder="Adresse e-mail" onChange={handleInputChange} />
        <input className="contact__form--input" type="textarea" value={messageForm} name="messageForm" placeholder="Votre message" onChange={handleInputChange} />
        <button className="contact__form--btn" type="submit">Envoyer</button>
      </form>
    </div>
  );
};

// == Export
export default Contact;
