(function () {

	function MoviesListView() { }

	MoviesListView.prototype = {

		renderMoviesList: function (movies) {
			this.container = document.querySelector(".movies-container");

			var pageNumber = document.querySelector(".pagination-controls__page-number");
			var prevPageButton = document.getElementById("prev-page");
			var nextPageButton = document.getElementById("next-page");
			var currentPage = 1;
			var moviesPerPage = 5;
			var pagesLimit = Math.ceil(movies.length / moviesPerPage);

			pageNumber.textContent = currentPage;

			function displayMoviesList() {
				var wrap = document.createDocumentFragment();
				var start = moviesPerPage * (currentPage - 1);
				var end = start + moviesPerPage;
				var paginatedMovies = movies.slice(start, end);

				this.container.innerHTML = "";

				if (this.container.classList.contains("hidden")) {
					this.container.classList.remove("hidden");
				}

				var paginationControls = document.querySelector(".pagination-controls");
				if (paginationControls && paginationControls.classList.contains("hidden")) {
					paginationControls.classList.remove("hidden");
				}
				var addMovieBlock = document.querySelector(".add-movie-block");
				if (addMovieBlock && addMovieBlock.classList.contains("hidden")) {
					addMovieBlock.classList.remove("hidden");
				}
				var addMovieButton = document.querySelector(".add-movie-button");
				if (addMovieButton && addMovieButton.classList.contains("hidden")) {
					addMovieButton.classList.remove("hidden");
				}
				var toTopButton = document.querySelector(".to-top-button");
				if (toTopButton && toTopButton.classList.contains("hidden")) {
					toTopButton.classList.remove("hidden");
				}
				var movieCreateForm = document.querySelector(".movie-create-form");
				if (movieCreateForm && !movieCreateForm.classList.contains("hidden")) {
					movieCreateForm.classList.add("hidden");
				}

				paginatedMovies.forEach(function (movie) {
					window.movieView = new MovieView(movie);
					wrap.append(movieView.getElement());
					movieView.renderMoviePreview(movie);

					function showMovieDetails(event) {
						var movieSection = document.querySelectorAll(".movie-section");
						for (var i = 0; i < movieSection.length; i++) {
							if (movieSection[i] != event.target.closest(".movie-section")) {
								movieSection[i].classList.add("hidden");
							}
						}
						event.target.closest(".movie-section-preview").classList.add("hidden");
						if (paginationControls) {
							paginationControls.classList.add("hidden");
						}
						if (addMovieBlock) {
							addMovieBlock.classList.add("hidden");
						}
						if (toTopButton) {
							toTopButton.classList.add("hidden");
						}
						window.movieDetailsView = new MovieDetailsView(movie);
						event.target.closest(".movie-section").append(movieDetailsView.getElement());
						movieDetailsView.renderMovieDetails(movie);
						window.scrollTo(0, 490);

						function goBack(e) {
							var detailsDiv = e.target.closest(".movie-section-details");
							detailsDiv.previousElementSibling.classList.remove("hidden");
							detailsDiv.parentNode.removeChild(detailsDiv);
							for (var i = 0; i < movieSection.length; i++) {
								movieSection[i].classList.remove("hidden");
							}
							if (paginationControls) {
								paginationControls.classList.remove("hidden");
							}
							if (addMovieBlock) {
								addMovieBlock.classList.remove("hidden");
							}
							if (toTopButton) {
								toTopButton.classList.remove("hidden");
							}
							window.scrollTo(0, event.pageY - 370);
						}

						movieDetailsView.backButton.addEventListener('click', goBack);

						function showMovieEditForm(event) {
							event.target.closest(".movie-section-details").classList.add("hidden");
							window.movieEditView = new MovieEditView(movie);
							event.target.closest(".movie-section").append(movieEditView.getElement());
							movieEditView.renderMovieEditForm(movie);
							window.scrollTo(0, 490);

							function submitChanges(e) {
								e.preventDefault();
								var movieId = e.target.closest(".movie-section").getAttribute('data-id');
								window.moviesListService.editMovieById(movieId, {
									ID: movieEditView.id.value,
									Title: movieEditView.title.value,
									TitleAlt: movieEditView.originalTitle.value,
									srcImage: movieEditView.posterUrl.value,
									RatingCount: +movieEditView.rating.value,
									OpeningDate: movieEditView.releaseDate.value,
									Genred: movieEditView.genre.value,
									GenreId: movieEditView.genreId.value,
									RunTime: +movieEditView.duration.value,
									Description: movieEditView.synopsis.value,
									Actors: movieEditView.actorsList.value.split(','),
								});
								window.moviesListService.getMoviesList(window.moviesListView.renderMoviesList);
								window.scrollTo(0, 0);
							}
							movieEditView.editForm.addEventListener('submit', submitChanges);

							function resetChanges(e) {
								e.preventDefault();
								var editDiv = e.target.closest(".movie-section-edit");
								editDiv.previousElementSibling.classList.remove("hidden");
								editDiv.parentNode.removeChild(editDiv);
								window.scrollTo(0, 490);
							}
							movieEditView.editForm.addEventListener('reset', resetChanges);
						}

						movieDetailsView.editButton.addEventListener('click', showMovieEditForm);

						function deleteMovie(e) {
							var modalWindow = document.querySelector(".confirm-modal");
							var confirmButton = document.getElementById("submit-button");
							var resetButton = document.getElementById("cancel-button");
							modalWindow.style.display = 'block';

							confirmButton.addEventListener('click', function () {
								modalWindow.style.display = 'none';
								var id = e.target.closest(".movie-section").getAttribute('data-id');
								window.moviesListService.deleteMovieById(id);
								window.moviesListService.getMoviesList(window.moviesListView.renderMoviesList);
								window.scrollTo(0, 0);
							});

							resetButton.addEventListener('click', function () {
								modalWindow.style.display = 'none';
							});
						}

						movieDetailsView.deleteButton.addEventListener('click', deleteMovie);
					}

					movieView.moviePreview.addEventListener('click', showMovieDetails);
				});

				this.container.append(wrap);
			}

			prevPageButton.addEventListener('click', function () {
				currentPage > 1 ? currentPage -= 1 : currentPage = pagesLimit;
				pageNumber.textContent = currentPage;
				displayMoviesList();
			});

			nextPageButton.addEventListener('click', function () {
				currentPage < pagesLimit ? currentPage += 1 : currentPage = 1;
				pageNumber.textContent = currentPage;
				displayMoviesList();
			});

			displayMoviesList();
		},
	}

	window.moviesListView = new MoviesListView();

}());
