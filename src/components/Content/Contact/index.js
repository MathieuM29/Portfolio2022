// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changeInputValue, checkIfEmpty, checkIfSucces } from 'src/actions';
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

  const classnames = isEmpty ? 'contact__form__label--input--empty' : 'contact__form__label--input';
  
  const handleInputChange = (e) => {
    dispatch(changeInputValue(e.target.value, e.target.name));
    console.log(e.target.value, e.target.name);
  };

  // const checkInput = () => {
  //   if (!nameForm || !subjectForm || !mailForm || !messageForm) {
  //     dispatch(checkIfEmpty());
  //   } 
    // else if (nameForm || subjectForm || mailForm || messageForm) {
    //   dispatch(checkIfSucces());
    //   console.log('done');

    //   setTimeout(() => {
    //     dispatch(checkIfSucces());
    //   }, 3000);
    // }
  // };

  const validate = () => {

    // let subjectError = '';
    // let nameError = '';
    // let mailError = '';
    // let messageError = '';

    // if (!mailForm) {

    //   mailError = 'invalid email';
    //   return mailError;
    // }
      dispatch(checkIfSucces());
      console.log('done');

      setTimeout(() => {
        dispatch(checkIfSucces());
      }, 3000);
    ;

  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_portfolio', e.target, 'UG9tgDVMjnAuQEz2G')
      .then((result) => {
        // validate();
        console.log('Envoi', result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

    console.log('submit', subjectForm, nameForm, mailForm, messageForm);
    // checkInput();
    validate();
    // const isValid = validate();

    // if (isValid) {

    //   console.log('validé');
    // }
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
      <form className="contact__form" onSubmit={sendEmail}>
        {/* {isEmpty && <Error />} */}
        {/* {subjectError ? (<div className="contact__form--error">{subjectError}</div>) : null} */}
        <label className="contact__form__label" htmlFor="subject">
          Sujet
          <input className={classnames} type="text" value={subjectForm} id="subject" name="subject" onChange={handleInputChange} />
        </label>
        
        {/* {isEmpty && <Error />} */}
        {/* {nameError ? (<div className="contact__form--error">{nameError}</div>) : null} */}
        <label className="contact__form__label" htmlFor="name">
          Nom complet
          <input className={classnames} type="text" value={nameForm} id="name" name="name" onChange={handleInputChange} />
        </label>
        
        {/* {isEmpty && <Error />} */}
        {/* {mailError ? (<div className="contact__form--error">{mailError}</div>) : null} */}
        <label className="contact__form__label" htmlFor="mail">
          Adresse email
          <input className={classnames} type="text" value={mailForm} id="mail" name="mail" onChange={handleInputChange} />
        </label>
        
        {/* {isEmpty && <Error />} */}
        {/* {messageError ? (<div className="contact__form--error">{messageError}</div>) : null} */}
        <label className="contact__form__label" htmlFor="message">
          Message
          <input className={classnames} type="text" value={messageForm} id="message" name="message" onChange={handleInputChange} />
        </label>
        <button className="contact__form--btn" type="submit">Envoyer</button>
      </form>
      {isSucces && <Succes />}
    </section>
  );
};

// == Export
export default Contact;
