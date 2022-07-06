const MDB_API_KEY = process.env.MDB_API_KEY;

// All requests to MDB API
const requests = [
  `https://api.themoviedb.org/3/trending/all/week${MDB_API_KEY}`,
  `https://api.themoviedb.org/3/movie/top_rated${MDB_API_KEY}`,
  `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=28`,
  `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=35`,
  `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=27`,
  `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=10749`,
  `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=9648`,
  `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=878`,
  `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=37`,
  `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=16`,
  `https://api.themoviedb.org/3/discover/movie${MDB_API_KEY}&with_genres=10770`,
];

export default requests;
