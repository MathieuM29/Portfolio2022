// == Import
import './styles.scss';
import datas from 'src/data/projects';
import Work from './Work';

// == Composant
const Works = () => {

  console.log(datas.items);

  const handleClick = (e) => {

    console.log('click', e.target.value);

  };

  return (

  <div className="works">
    <div className="works__title">
      <h2 className="works__title--text"><span>Mes</span> projets</h2>
    </div> 
    <div className="works__filter">
      <div className="works__filter__btn">
        <label className="works__filter__btn--label">
          <input className="works__filter__btn--input" type="radio" name="btn_radio" value="all" onClick={handleClick}/>
          Tout
        </label>
      </div>
      <div className="works__filter__btn">
        <label className="works__filter__btn--label" >
          <input className="works__filter__btn--input" type="radio" name="btn_radio" value="websites" onClick={handleClick} />
          Sites web
        </label>
      </div>
      <div className="works__filter__btn">
        <label className="works__filter__btn--label">
          <input className="works__filter__btn--input" type="radio" name="btn_radio" value="design" onClick={handleClick}/>
          Design
        </label>
      </div>
      <div className="works__filter__btn">
        <label className="works__filter__btn--label">
          <input className="works__filter__btn--input" type="radio" name="btn_radio" value="component" onClick={handleClick}/>
          Composants
        </label>
      </div>
    </div>
    <div className="works__content">
      
      {datas.items.map((data) => (<Work key={data.id} {...data} />))}
      
    </div>
  </div>
  );
};

// == Export
export default Works;
