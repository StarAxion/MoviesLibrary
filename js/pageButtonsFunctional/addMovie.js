(function () {

	var moviesContainer = document.querySelector(".movies-container");
	var addMovieButton = document.querySelector(".add-movie-button");
	var toTopButton = document.querySelector(".to-top-button");
	var movieCreateForm = document.querySelector(".movie-create-form");
	var movieId = document.querySelector(".create-form__movie-id");
	var movieTitle = document.querySelector(".create-form__movie-title");
	var movieOriginalTitle = document.querySelector(".create-form__movie-original-title");
	var moviePosterUrl = document.querySelector(".create-form__movie-poster-url");
	var movieRating = document.querySelector(".create-form__movie-rating");
	var movieReleaseDate = document.querySelector(".create-form__movie-release-date");
	var movieGenre = document.querySelector(".create-form__movie-genre");
	var movieGenreId = document.querySelector(".create-form__movie-genre-id");
	var movieDuration = document.querySelector(".create-form__movie-duration");
	var movieSynopsis = document.querySelector(".create-form__movie-synopsis");
	var movieActorsList = document.querySelector(".create-form__movie-actors-list");

	if (addMovieButton && movieCreateForm) {
		function addMovie() {
			moviesContainer.classList.add("hidden");
			addMovieButton.classList.add("hidden");
			if (toTopButton) {
				toTopButton.classList.add("hidden");
			}
			movieCreateForm.classList.remove("hidden");
			movieId.value = "";
			movieTitle.value = "";
			movieOriginalTitle.value = "";
			moviePosterUrl.value = "";
			movieRating.value = "";
			movieReleaseDate.value = "";
			movieGenre.value = "";
			movieGenreId.value = "";
			movieDuration.value = "";
			movieSynopsis = "";
			movieActorsList.value = "";
			window.scrollTo(0, 490);
		}
		addMovieButton.addEventListener('click', addMovie);

		function submitData(e) {
			e.preventDefault();
			window.moviesListService.addMovie({
				ID: movieId.value,
				Title: movieTitle.value,
				TitleAlt: movieOriginalTitle.value,
				srcImage: moviePosterUrl.value,
				RatingCount: +movieRating.value,
				OpeningDate: movieReleaseDate.value,
				Genred: movieGenre.value,
				GenreId: movieGenreId.value,
				RunTime: +movieDuration.value,
				Description: movieSynopsis.value,
				Actors: movieActorsList.value.split(','),
			});
			window.moviesListService.getMoviesList(window.moviesListView.renderMoviesList);
			window.scrollTo(0, 0);
		}
		movieCreateForm.addEventListener('submit', submitData);

		function resetData(e) {
			e.preventDefault();
			moviesContainer.classList.remove("hidden");
			addMovieButton.classList.remove("hidden");
			if (toTopButton) {
				toTopButton.classList.remove("hidden");
			}
			movieCreateForm.classList.add("hidden");
			window.scrollTo(0, 0);
		}
		movieCreateForm.addEventListener('reset', resetData);
	}

}());
