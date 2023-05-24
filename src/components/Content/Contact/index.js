// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changeInputSubjectValue, changeInputNameValue, changeInputMailValue, changeInputMessageValue, clearInputsForm, checkIfEmpty, checkIfSucces } from 'src/actions';
import emailjs from 'emailjs-com';
import Succes from './Succes';
import Error from './Error';

// == Composant
const Contact = () => {
  const dispatch = useDispatch();

  const { nameForm,
    mailForm,
    messageForm,
    subjectForm,
    isEmpty,
    isSucces,
    subjectError,
    nameError,
    mailError,
    messageError } = useSelector((state) => state);

    

  const classnames = isEmpty ? 'contact__form__label--input--empty' : 'contact__form__label--input' && isSucces ? 'contact__form__label--input--succes' : 'contact__form__label--input';

  // const handleInputChange = (e) => {
  //   dispatch(changeInputValue(e.target.value, e.target.name));
  //   console.log(e.target.value, e.target.name);
  //   console.log(subjectForm);
  // };

  const handleInputSubjectChange = (e) => {
    dispatch(changeInputSubjectValue(e.target.value, e.target.name));
    console.log(e.target.value, e.target.name);
  };

  const handleInputNameChange = (e) => {
    dispatch(changeInputNameValue(e.target.value, e.target.name));
    console.log(e.target.value, e.target.name);
  };

  const handleInputMailChange = (e) => {
    dispatch(changeInputMailValue(e.target.value, e.target.name));
    console.log(e.target.value, e.target.name);
  };

  const handleInputMessageChange = (e) => {
    dispatch(changeInputMessageValue(e.target.value, e.target.name));
    console.log(e.target.value, e.target.name);
  };

  console.log('sujet :', subjectForm, 'nom :', nameForm, 'mail: ', mailForm, 'message: ', messageForm);

 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_portfolio', e.target, 'UG9tgDVMjnAuQEz2G')
      .then((result) => {
        console.log('Envoi', result.text);
        console.log(e.target);
      }, (error) => {
          console.log(error.text);
      });
      // validate();
      e.target.reset();
  };

  const validate = (e) => {

    if(subjectForm, nameForm, mailForm, messageForm) {
      sendEmail(e);
      e.preventDefault();
      dispatch(checkIfSucces());
      console.log('done');
      dispatch(clearInputsForm());

      setTimeout(() => {
        dispatch(checkIfSucces());
      }, 3000);
    }

    else{
      e.preventDefault();
      dispatch(checkIfEmpty());
      console.log('inputs are empty !');

      setTimeout(() => {
        dispatch(checkIfEmpty());
      }, 3000);
    }
  };

  return (
    <section className="contact">
      <div className="contact__title">
        <h2 className="contact__title--text"><span>Rester</span> en contact</h2>
      </div> 
      <div className="contact__map">
        <iframe className="contact__map--style" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84752.0159028797!2d-4.569625666029843!3d48.40853490195864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816bbe1d9925b93%3A0xc6488358179c30ab!2sBrest!5e0!3m2!1sfr!2sfr!4v1650453330021!5m2!1sfr!2sfr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact__infos">
        <div className="contact__infos__container">
          <p className="contact__infos__container--text">Adresse</p>
          <address className="contact__infos__container--data">Brest 29200, France</address>
        </div>
        <div className="contact__infos__container">
          <p className="contact__infos__container--text">Email</p>
          <a href="mailto:marcmathieu29@gmail.com?subject=Demande de renseignements" className="contact__infos__container--data">marcmathieu29@gmail.com</a>
        </div>
        <div className="contact__infos__container">
          <p className="contact__infos__container--text">Téléphone</p>
          <a href="tel:+33664316056" className="contact__infos__container--data" title="Mon numéro de téléphone">06.64.31.60.56</a>
        </div>
        <div className="contact__infos__container">
          <p className="contact__infos__container--text">Disponibilité</p>
          <p className="contact__infos__container--data">Disponible</p>
        </div>
      </div>
      <div className="contact__title--border">
        <h2 className="contact__title--text"><span>Contactez</span> moi</h2>
      </div>
      <form className="contact__form" onSubmit={validate}>
        <label className="contact__form__label" htmlFor="subject">
          Sujet
          <input className={classnames} type="text" value={subjectForm} id="subject" name="subject" onChange={handleInputSubjectChange} />
        </label>
        
        <label className="contact__form__label" htmlFor="name">
          Nom complet
          <input className={classnames} type="text" value={nameForm} id="name" name="name" onChange={handleInputNameChange} />
        </label>

        <label className="contact__form__label" htmlFor="mail">
          Adresse email
          <input className={classnames} type="text" value={mailForm} id="mail" name="mail" onChange={handleInputMailChange} />
        </label>

        <label className="contact__form__label" htmlFor="message">
          Message
          <input className={classnames} type="text" value={messageForm} id="message" name="message" onChange={handleInputMessageChange} />
        </label>
        <button className="contact__form--btn" type="submit">Envoyer</button>
      </form>
      {isSucces && <Succes />}
      {isEmpty && <Error />}
    </section>
  );
};

// == Export
export default Contact;
