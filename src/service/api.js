const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE = 'https://api.themoviedb.org/3';
const FILTER_URL = 'language=pt-BR&api_key=' + API_KEY;


const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&${FILTER_URL}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?${FILTER_URL}`)
      },
      {
        slug: 'top-rated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?${FILTER_URL}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&${FILTER_URL}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&${FILTER_URL}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&${FILTER_URL}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&${FILTER_URL}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&${FILTER_URL}`)
      }
    ]
  }
}