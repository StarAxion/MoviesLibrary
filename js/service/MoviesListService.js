(function () {

	const FILMS_URL = 'http://localhost:3000/films/';

	function MoviesListService() { }

	MoviesListService.prototype = {

		getMoviesList: function (onSuccess) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.addEventListener('load', function () {
				onSuccess(JSON.parse(xhr.response).list);
			});
			xhr.send();
		},

		editMovieById: function (movieId, newData) {
			let xhr = new XMLHttpRequest();
			xhr.open('PUT', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(JSON.stringify({ id: movieId, options: newData }));
		},

		deleteMovieById: function (id) {
			let xhr = new XMLHttpRequest();
			xhr.open('DELETE', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(JSON.stringify({ id }));
		},

		addMovie: function (data) {
			let xhr = new XMLHttpRequest();
			xhr.open('POST', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(JSON.stringify({ movie: data }));
		},

		searchMovie: function (search, onSuccess) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.addEventListener('load', function () {
				onSuccess(JSON.parse(xhr.response).list.filter(function (movie) {
					if (movie.Title && !movie.TitleAlt) {
						return movie.Title.toLowerCase().includes(search);
					} else if (movie.TitleAlt && !movie.Title) {
						return movie.TitleAlt.toLowerCase().includes(search);
					} else {
						return movie.Title.toLowerCase().includes(search) || movie.TitleAlt.toLowerCase().includes(search);
					}
				}));
			});
			xhr.send();
		},

		sortByTitle: function (onSuccess) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.addEventListener('load', function () {
				onSuccess(JSON.parse(xhr.response).list.sort(function (a, b) {
					if (a.Title && b.Title) {
						return a.Title.toLowerCase().localeCompare(b.Title.toLowerCase());
					}
				}));
			});
			xhr.send();
		},

		sortByTitleReversed: function (onSuccess) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.addEventListener('load', function () {
				onSuccess(JSON.parse(xhr.response).list.sort(function (a, b) {
					if (a.Title && b.Title) {
						return b.Title.toLowerCase().localeCompare(a.Title.toLowerCase());
					}
				}));
			});
			xhr.send();
		},

		sortByRating: function (onSuccess) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.addEventListener('load', function () {
				onSuccess(JSON.parse(xhr.response).list.sort((a, b) => a.RatingCount < b.RatingCount ? 1 : -1));
			});
			xhr.send();
		},

		sortByRatingReversed: function (onSuccess) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.addEventListener('load', function () {
				onSuccess(JSON.parse(xhr.response).list.sort((a, b) => a.RatingCount < b.RatingCount ? -1 : 1));
			});
			xhr.send();
		},

		sortByReleaseDate: function (onSuccess) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.addEventListener('load', function () {
				onSuccess(JSON.parse(xhr.response).list.sort((a, b) => a.OpeningDate < b.OpeningDate ? 1 : -1));
			});
			xhr.send();
		},

		sortByReleaseDateReversed: function (onSuccess) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.addEventListener('load', function () {
				onSuccess(JSON.parse(xhr.response).list.sort((a, b) => a.OpeningDate < b.OpeningDate ? -1 : 1));
			});
			xhr.send();
		},

		filterMoviesByGenre: function (genre, onSuccess) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', FILMS_URL);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.addEventListener('load', function () {
				onSuccess(JSON.parse(xhr.response).list.filter(function (movie) {
					if (movie.Genred) {
						return movie.Genred.toLowerCase() == genre;
					}
				}));
			});
			xhr.send();
		},
	}

	window.moviesListService = new MoviesListService();

}());
