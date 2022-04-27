// == Import
import './styles.scss';

// == Composant
const About = () => {

  return (
  <section className="about">
    <div className="about__title">
      <h2 className="about__title--text"><span>A propos</span> de moi</h2>
    </div>    
    <p className="about--desc">Salut a toi ! je m'appelle Mathieu Marc, je suis développeur front-end / fullstack. En effet, je travail autant sur la partie front-end que sur le back-end mais avec une petite préférence pour l'intégration et le développement côté navigateur.</p>
    <div className="about__infos">
      <div className="about__infos__container">
        <p className="about__infos__container--text">Age</p>
        <p className="about__infos__container--data">29</p>
      </div>
      <div className="about__infos__container">
        <p className="about__infos__container--text">Habitation</p>
        <p className="about__infos__container--data">France</p>
      </div>
      <div className="about__infos__container">
        <p className="about__infos__container--text">GitHub</p>
        <p className="about__infos__container--data">MathieuM29</p>
      </div>
      <div className="about__infos__container">
        <p className="about__infos__container--text">Twitter</p>
        <p className="about__infos__container--data">marcmathieu29</p>
      </div>
    </div>
  </section>
  );
};

// == Export
export default About;
