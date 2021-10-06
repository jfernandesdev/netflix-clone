import React, { useState } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import style from './styles.module.scss';

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;

    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }

  return (
    <div className={style.listContainer}>
      <h2>{title}</h2>

      <div className={style.arrowLeft} onClick={handleLeftArrow}>
        <FaChevronLeft size={30} color="#FFF" />
      </div>

      <div className={style.listRow}>
        <div className={style.list} style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div className={style.item} key={key}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>

      <div className={style.arrowRight} onClick={handleRightArrow}>
        <FaChevronRight size={30} color="#FFF" />
      </div>
    </div>
  );
}
