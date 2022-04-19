// == Import
import './styles.scss';
import { useState } from 'react';
import datas from 'src/data/projects';
import Work from './Work';

// == Composant
const Works = () => {

  const [results, setResults] = useState(datas.items);

  const arrayFiltered = (e) => {

    const result = datas.items.filter((data) => e.target.value === data.category);
    return result;
  };

  const handleClick = (e) => {

    if (e.target.value === "all")
    {
      setResults(datas.items);
    }
    else
    {
      setResults(arrayFiltered(e));
    };
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
      
      {results.map((data) => (<Work key={data.id} {...data} />))}
      
    </div>
  </div>
  );
};

// == Export
export default Works;
