import style from './styles.module.scss';

export default ({ black }) => {
  return (
    <header className={black && style.black}>
      <div className={style.logo}>
        <a href='/'>
          <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Logo Netflix" />
        </a>
      </div>

      <div className={style.avatarUser}>
        <a href='/'>
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Avatar do usuário logado" />
        </a>
      </div>
    </header>
  );
}