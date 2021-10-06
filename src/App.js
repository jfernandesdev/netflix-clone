import { useEffect, useState } from 'react'
import api from './service/api'

import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';

import style from './style/app.module.scss';

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 15) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className={style.page}>

      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className={style.lists}>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <small>Feito com <span role="img" aria-label="coração e café">❤ e ☕</span> por Jeferson Fernandes</ small>
        <small>Direitos de imagem para Netflix</small>
        <small>Dados pegos do site themoviedb.org</small>
      </footer>

      {movieList.length <= 0 &&
        <div className={style.loading}>
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando..." />
        </div>
      }
    </div>
  );
}