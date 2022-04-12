// == Import
import './styles.scss';

// == Composant
const Resume = () => {

  return (
  <div className="resume">

    <div className="resume__xp">
      <div className="resume__xp__title">
        <h2 className="resume__xp__title--text"><span>Expériences</span> et formation</h2>
      </div> 
      <div className="resume__xp__subTitle">
        <i class="fa-solid fa-briefcase resume__xp__subTitle--icon"></i>
        <h3 className="resume__xp__subTitle--text">Expérience</h3>
      </div>
      <div className="resume__xp">
        <div className="resume__xp__infos__card">
          <p className="resume__xp__infos__card--year">2022</p>
          <p className="resume__xp__infos__card--post">Développeur web en formation</p>
          <p className="resume__xp__infos__card--company">Apothéose - Ecole O'clock</p>
          <p className="resume__xp__infos__card--desc">Projet réalisé en groupe en fin de formation.</p>
          <p className="resume__xp__infos__card--subDesc">Création d'un site web : <br /><span>(voir détails à la page Works)</span></p>
          <div className="resume__xp__infos__card__projects">
            <a className="resume__xp__infos__card__projects--link" href="https://playtogether.surge.sh/">PlayTogether</a>
          </div>
        </div>
        <div className="resume__xp__infos__card">
          <p className="resume__xp__infos__card--year">2019</p>
          <p className="resume__xp__infos__card--post">Intégrateur web</p>
          <p className="resume__xp__infos__card--company">Eskem studio</p>
          <p className="resume__xp__infos__card--desc">Stage de 2 mois réalisé dans le cadre de la formation "Développeur d'applications multimédias" a l'école Web Digital School.</p>
          <p className="resume__xp__infos__card--subDesc">Création de deux projets de sites web : <br /><span>(voir détails à la page Works)</span></p>
          <div className="resume__xp__infos__card__projects">
            <a className="resume__xp__infos__card__projects--link" href="https://www.cours-photo-brest.fr/">Cours photos Brest</a>
            <a className="resume__xp__infos__card__projects--link" href="https://www.aod-ouessant.fr/">L'Aod Ouessant</a>
          </div>
        </div>
      </div>
    </div>

    <div className="resume__school">
      <div className="resume__school__subTitle">
        <i class="fa-solid fa-graduation-cap resume__school__subTitle--icon"></i>
        <h3 className="resume__school__subTitle--text">Formation</h3>
      </div>
      <div className="resume__school">
        <div className="resume__school__infos__card">
          <p className="resume__school__infos__card--year">2022 - en cours</p>
          <p className="resume__school__infos__card--post">Certification "Maîtrise de la qualité en projet web"</p>
          <p className="resume__xp__infos__card--company">OPQUAST</p>
          <p className="resume__school__infos__card--desc">Apprentissage des règles et recommandations des bonnes pratiques du web et familiarisation des différents métiers.</p>
          <div className="resume__school__infos__card__projects">
            <a className="resume__school__infos__card__projects--link" href="https://www.opquast.com/">OPQUAST</a>
          </div>
        </div>
        <div className="resume__school__infos__card">
          <p className="resume__school__infos__card--year">2021 - 2022</p>
          <p className="resume__school__infos__card--post">Développeur JavaScript fullstack</p>
          <p className="resume__xp__infos__card--company">Ecole O'clock</p>
          <div className="resume__school__infos__card__desc">
            <p className="resume__school__infos__card__desc--text">Formation intensive de 5 mois sur la technologie JavaScript et ses frameworks. Projet de fin de formation réalisé en groupe avec démonstration en live sur Youtube.</p>
            <div className="resume__school__infos__card__desc__front">
              <h3 className="resume__school__infos__card__desc__front--title">Front-end</h3>
              <ul className="resume__school__infos__card__desc__front__list">
                <li className="resume__school__infos__card__desc__front__list--item">HTML5</li>
                <li className="resume__school__infos__card__desc__front__list--item">CSS3</li>
                <li className="resume__school__infos__card__desc__front__list--item">Scss</li>
                <li className="resume__school__infos__card__desc__front__list--item">JavaScript</li>
                <li className="resume__school__infos__card__desc__front__list--item">ES6</li>
                <li className="resume__school__infos__card__desc__front__list--item">ReactJs</li>
                <li className="resume__school__infos__card__desc__front__list--item">React-redux</li>
                <li className="resume__school__infos__card__desc__front__list--item">Webpack</li>
                <li className="resume__school__infos__card__desc__front__list--item">Responsive</li>
                <li className="resume__school__infos__card__desc__front__list--item">Mobil-first</li>
                <li className="resume__school__infos__card__desc__front__list--item">Wireframing</li>
                <li className="resume__school__infos__card__desc__front__list--item">Maquettage</li>
              </ul>
            </div>
            <div className="resume__school__infos__card__desc__back">
              <h3 className="resume__school__infos__card__desc__back--title">Back-end</h3>
              <ul className="resume__school__infos__card__desc__back__list">
                <li className="resume__school__infos__card__desc__back__list--item">Node.Js</li>
                <li className="resume__school__infos__card__desc__back__list--item">Express</li>
                <li className="resume__school__infos__card__desc__back__list--item">EJS</li>
                <li className="resume__school__infos__card__desc__back__list--item">HTTP</li>
                <li className="resume__school__infos__card__desc__back__list--item">Middlewares</li>
                <li className="resume__school__infos__card__desc__back__list--item">Requêtes GET/POST</li>
                <li className="resume__school__infos__card__desc__back__list--item">SGBD</li>
                <li className="resume__school__infos__card__desc__back__list--item">PostgreSql</li>
                <li className="resume__school__infos__card__desc__back__list--item">Sessions</li>
                <li className="resume__school__infos__card__desc__back__list--item">SQL</li>
                <li className="resume__school__infos__card__desc__back__list--item">Agregats</li>
                <li className="resume__school__infos__card__desc__back__list--item">Sequelize</li>
                <li className="resume__school__infos__card__desc__back__list--item">MVC</li>
                <li className="resume__school__infos__card__desc__back__list--item">POO</li>
                <li className="resume__school__infos__card__desc__back__list--item">API</li>
                <li className="resume__school__infos__card__desc__back__list--item">Axios</li>
              </ul>
            </div>
            <div className="resume__school__infos__card__desc__trans">
              <h3 className="resume__school__infos__card__desc__trans--title">Transversales</h3>
              <ul className="resume__school__infos__card__desc__trans__list">
                <li className="resume__school__infos__card__desc__trans__list--item">Git</li>
                <li className="resume__school__infos__card__desc__trans__list--item">Terminal Linux</li>
                <li className="resume__school__infos__card__desc__trans__list--item">GitHub</li>
                <li className="resume__school__infos__card__desc__trans__list--item">BEM</li>
                <li className="resume__school__infos__card__desc__trans__list--item">Surge</li>
                <li className="resume__school__infos__card__desc__trans__list--item">AWS</li>              
              </ul>
            </div>

          </div>
        </div>
        <div className="resume__school__infos__card">
          <p className="resume__school__infos__card--year">2018 - 2019</p>
          <p className="resume__school__infos__card--post">Titre professionnel "Développeur d'applications multimédia"</p>
          <p className="resume__xp__infos__card--company">Web Digital School</p>
          <div className="resume__school__infos__card__desc">
            <p className="resume__school__infos__card__desc--text">Formation de 10 mois sur le développement web et le design avec un stage de 2 mois réalisé chez Eskem Studio.</p>
            <div className="resume__school__infos__card__desc__front">
              <h3 className="resume__school__infos__card__desc__front--title">Front-end</h3>
              <ul className="resume__school__infos__card__desc__front__list">
                <li className="resume__school__infos__card__desc__front__list--item">HTML5</li>
                <li className="resume__school__infos__card__desc__front__list--item">CSS3</li>
                <li className="resume__school__infos__card__desc__front__list--item">JavaScript</li>
                <li className="resume__school__infos__card__desc__front__list--item">Responsive</li>
                <li className="resume__school__infos__card__desc__front__list--item">Wireframing</li>
                <li className="resume__school__infos__card__desc__front__list--item">Maquettage</li>
                <li className="resume__school__infos__card__desc__back__list--item">WordPress</li>
              </ul>
            </div>
            <div className="resume__school__infos__card__desc__back">
              <h3 className="resume__school__infos__card__desc__back--title">Back-end</h3>
              <ul className="resume__school__infos__card__desc__back__list">
                <li className="resume__school__infos__card__desc__back__list--item">PHP</li>
                <li className="resume__school__infos__card__desc__back__list--item">Laravel</li>
                <li className="resume__school__infos__card__desc__back__list--item">MySql</li>
                <li className="resume__school__infos__card__desc__back__list--item">Modx</li>
              </ul>
            </div>
            <div className="resume__school__infos__card__desc__design">
              <h3 className="resume__school__infos__card__desc__design--title">Design</h3>
              <ul className="resume__school__infos__card__desc__design__list">
                <li className="resume__school__infos__card__desc__design__list--item">Photoshop</li>
                <li className="resume__school__infos__card__desc__design__list--item">InDesign</li>
                <li className="resume__school__infos__card__desc__design__list--item">Adobe xD</li>
                <li className="resume__school__infos__card__desc__design__list--item">Illustrator</li>              
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="resume__skills">
      <div className="resume__skills__title">
        <h2 className="resume__skills__title--text"><span>Mes</span> compétences</h2>
      </div> 
      <div className="resume__skills__subTitle">
        <i className="fa-solid fa-code resume__skills__subTitle--icon"></i>
        <h3 className="resume__skills__subTitle--text">Développement / intégration</h3>
      </div>
      <div className="resume__skills__content">
        <div className="resume__skills__content__item">
          <i className="fa-brands fa-html5 resume__skills__content__item--icon"></i>
          <p className="resume__skills__content__item--title">HTML5</p>
        </div>
        <div className="resume__skills__content__item">
          <i className="fa-brands fa-css3-alt resume__skills__content__item--icon"></i>
          <p className="resume__skills__content__item--title">CSS3</p>
        </div>
        <div className="resume__skills__content__item">
          <i className="fa-brands fa-js-square resume__skills__content__item--icon"></i>
          <p className="resume__skills__content__item--title">JavaScript</p>
        </div>
        <div className="resume__skills__content__item">
          <i className="fa-brands fa-bootstrap resume__skills__content__item--icon"></i>
          <p className="resume__skills__content__item--title">Bootstrap</p>
        </div>
        <div className="resume__skills__content__item">
          <i className="fa-brands fa-react resume__skills__content__item--icon"></i>
          <p className="resume__skills__content__item--title">React</p>
        </div>
        <div className="resume__skills__content__item">
          <i className="fa-brands fa-node resume__skills__content__item--icon"></i>
          <p className="resume__skills__content__item--title">Node.js</p>
        </div>
        <div className="resume__skills__content__item">
          <i className="fa-solid fa-window-maximize resume__skills__content__item--icon"></i>
          <p className="resume__skills__content__item--title">Responsive</p>
        </div>
        <div className="resume__skills__content__item">
          <i className="fa-solid fa-database resume__skills__content__item--icon"></i>
          <p className="resume__skills__content__item--title">PostgreSql</p>
        </div>
        <div className="resume__skills__content__item">
          <i className="fa-solid fa-server resume__skills__content__item--icon"></i>
          <p className="resume__skills__content__item--title">API</p>
        </div>


      </div>

    </div>

    <div className="resume__design">
      <div className="resume__design__subTitle">
        <i className="fa-solid fa-wand-magic resume__design__subTitle--icon"></i>
        <h3 className="resume__design__subTitle--text">Design</h3>
      </div>
    </div>

    <div className="resume__langage">
      <div className="resume__langage__subTitle">
        <i className="fa-solid fa-earth-europe resume__langage__subTitle--icon"></i>
        <h3 className="resume__langage__subTitle--text">Langues</h3>
      </div>
    </div>
    







    
  </div>
  );
};

// == Export
export default Resume;
