const MDB_API_KEY = process.env.MDB_API_KEY;

// All requests to MDB API
export default {
  TrendingMovies: {
    title: "Trending",
    url: `https://api.themoviedb.org/3/trending/all/week${MDB_API_KEY}`,
  },
  TopRatedMovies: {
    title: "Top Rated",
    url: `https://api.themoviedb.org/3/movie/top_rated${MDB_API_KEY}`,
  },
  ActionMovies: {
    title: "Action",
    url: `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=28`,
  },
  ComedyMovies: {
    title: "Comedy",
    url: `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=35`,
  },
  HorrorMovies: {
    title: "Horror",
    url: `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=27`,
  },
  RomanceMovies: {
    title: "Romance",
    url: `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=10749`,
  },
  MysteryMovies: {
    title: "Mystery",
    url: `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=9648`,
  },
  SciFiMovies: {
    title: "SciFi",
    url: `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=878`,
  },
  WesternMovies: {
    title: "Western",
    url: `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=37`,
  },
  AnimationMovies: {
    title: "Animation",
    url: `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=16`,
  },
  TvMovies: {
    title: "TV Movie",
    url: `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=10770`,
  },
};
