import { useEffect, useState } from 'react'
import api from './service/api'


export default function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //get list all
      let list = await api.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <h1>Hello World!</h1>
  );
}