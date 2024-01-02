class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

const movies = [
  new Movie("The Aviator", "Warner Bros", "PG-13"),
  new Movie("The Lion King", "Disney", "G"),
  new Movie("Beauty and the Beast", "Disney"),
  new Movie("Spirited Away", "Disney", "PG"),
];
const PGratingmovies = Movie.getPG(movies);

console.log(casinoRoyale);
console.log(PGratingmovies);
