import style from './styles.module.scss';

export default ({ item }) => {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section className={style.featuredContainer} style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>

      <div className={style.degradeVertical}>
        <div className={style.degradeHorizontal}>
          <h1 className={style.title}> {item.name}</h1>
          <div className={style.info}>
            <span className={style.points}>
              {item.vote_average} pontos
            </span>
            <span className={style.year}>
              {firstDate.getFullYear()}
            </span>
            <span className={style.seasons}>
              {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
            </span>
          </div>

          <div className={style.description}>
            {item.overview}
          </div>

          <div className={style.buttons}>
            <button type="button" className={style.btnWatch}>▶ Assistir</button>
            <button type="button" className={style.btnMyList}>+ Minha Lista</button>
          </div>

          <div className={style.genres}>
            <strong>Gêneros: </strong>
            {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
}