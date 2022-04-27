// == Import
import './styles.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { saveOffset } from 'src/actions';
import datas from 'src/data/projects';
import Work from './Work';
import Modale from './Modale';

// == Composant
const Works = () => {

  const [results, setResults] = useState(datas.items);
  const { isVisible, currentId } = useSelector((state) => state);

  const currentIdDatas = datas.items.filter((data) => currentId === data.id);

  // console.log(currentIdDatas);

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
    }
  };

  return (

  <section className="works">
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
          <input className="works__filter__btn--input" type="radio" name="btn_radio" value="integration" onClick={handleClick}/>
          Intégration
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

    {isVisible && <Modale key={currentId} {...currentIdDatas[0]} />}
  
  </section>
  );
};

// == Export
export default Works;
