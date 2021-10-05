import { useEffect, useState } from 'react'
import api from './service/api'

import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';

import style from './style/app.module.scss';

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //pagar a lista total
      let list = await api.getHomeList();
      setMovieList(list);

      //pegar um filme em destaque
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  return (
    <div className={style.page}>

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className={style.lists}>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}