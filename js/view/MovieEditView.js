(function () {

	function MovieEditView(movie) {
		this.element = document.createElement('div');
		this.element.classList.add("movie-section-edit");
	}

	MovieEditView.prototype = {

		getElement: function () {
			return this.element;
		},

		renderMovieEditForm: function (movie) {
			this.editForm = document.createElement('form');
			this.editForm.setAttribute('action', "/");
			this.editForm.setAttribute('method', "post");
			this.editForm.setAttribute('name', "movie-edit-form");
			this.editForm.classList.add("movie-form", "movie-edit-form");
			this.element.append(this.editForm);

			var fieldName = document.createElement('label');
			fieldName.classList.add("movie-form__field-name");
			fieldName.setAttribute('for', "movie-id");
			fieldName.textContent = 'ID:'
			this.editForm.append(fieldName);

			this.id = document.createElement('input');
			this.id.classList.add("movie-form__input", "edit-form__movie-id");
			this.id.setAttribute('type', "text");
			this.id.setAttribute('id', "movie-id");
			this.id.setAttribute('name', "edit-form__movie-id");
			this.id.required = true;
			this.id.value = movie.ID;
			this.editForm.append(this.id);

			var fieldName = document.createElement('label');
			fieldName.classList.add("movie-form__field-name");
			fieldName.setAttribute('for', "movie-title");
			fieldName.textContent = 'Назва:'
			this.editForm.append(fieldName);

			this.title = document.createElement('input');
			this.title.classList.add("movie-form__input", "edit-form__movie-title");
			this.title.setAttribute('type', "text");
			this.title.setAttribute('id', "movie-title");
			this.title.setAttribute('name', "edit-form__movie-title");
			this.title.required = true;
			this.title.value = movie.Title;
			this.editForm.append(this.title);

			var fieldName = document.createElement('label');
			fieldName.classList.add("movie-form__field-name");
			fieldName.setAttribute('for', "movie-original-title");
			fieldName.textContent = 'Оригінальна назва:'
			this.editForm.append(fieldName);

			this.originalTitle = document.createElement('input');
			this.originalTitle.classList.add("movie-form__input", "edit-form__movie-original-title");
			this.originalTitle.setAttribute('type', "text");
			this.originalTitle.setAttribute('id', "movie-original-title");
			this.originalTitle.setAttribute('name', "edit-form__movie-original-title");
			this.originalTitle.required = true;
			this.originalTitle.value = movie.TitleAlt;
			this.editForm.append(this.originalTitle);

			var fieldName = document.createElement('label');
			fieldName.classList.add("movie-form__field-name");
			fieldName.setAttribute('for', "movie-poster-url");
			fieldName.textContent = 'Посилання на постер:'
			this.editForm.append(fieldName);

			this.posterUrl = document.createElement('input');
			this.posterUrl.classList.add("movie-form__input", "edit-form__movie-poster-url");
			this.posterUrl.setAttribute('type', "text");
			this.posterUrl.setAttribute('id', "movie-poster-url");
			this.posterUrl.setAttribute('name', "edit-form__movie-poster-url");
			this.posterUrl.value = movie.srcImage;
			this.editForm.append(this.posterUrl);

			var fieldName = document.createElement('label');
			fieldName.classList.add("movie-form__field-name");
			fieldName.setAttribute('for', "movie-rating");
			fieldName.textContent = 'Рейтинг:'
			this.editForm.append(fieldName);

			this.rating = document.createElement('input');
			this.rating.classList.add("movie-form__input", "edit-form__movie-rating");
			this.rating.setAttribute('type', "number");
			this.rating.setAttribute('id', "movie-rating");
			this.rating.setAttribute('name', "edit-form__movie-rating");
			this.rating.value = movie.RatingCount;
			this.editForm.append(this.rating);

			var fieldName = document.createElement('label');
			fieldName.classList.add("movie-form__field-name");
			fieldName.setAttribute('for', "movie-release-date");
			fieldName.textContent = 'Дата виходу:'
			this.editForm.append(fieldName);

			this.releaseDate = document.createElement('input');
			this.releaseDate.classList.add("movie-form__input", "edit-form__movie-release-date");
			this.releaseDate.setAttribute('type', "text");
			this.releaseDate.setAttribute('id', "movie-release-date");
			this.releaseDate.setAttribute('name', "edit-form__movie-release-date");
			this.releaseDate.required = true;
			this.releaseDate.value = movie.OpeningDate;
			this.editForm.append(this.releaseDate);

			var fieldName = document.createElement('label');
			fieldName.classList.add("movie-form__field-name");
			fieldName.setAttribute('for', "movie-genre");
			fieldName.textContent = 'Жанр:'
			this.editForm.append(fieldName);

			this.genre = document.createElement('input');
			this.genre.classList.add("movie-form__input", "edit-form__movie-genre");
			this.genre.setAttribute('type', "text");
			this.genre.setAttribute('id', "movie-genre");
			this.genre.setAttribute('name', "edit-form__movie-genre");
			this.genre.required = true;
			this.genre.value = movie.Genred;
			this.editForm.append(this.genre);

			var fieldName = document.createElement('label');
			fieldName.classList.add("movie-form__field-name");
			fieldName.setAttribute('for', "movie-genre-id");
			fieldName.textContent = 'Id жанру:'
			this.editForm.append(fieldName);

			this.genreId = document.createElement('input');
			this.genreId.classList.add("movie-form__input", "edit-form__movie-genre-id");
			this.genreId.setAttribute('type', "text");
			this.genreId.setAttribute('id', "movie-genre-id");
			this.genreId.setAttribute('name', "edit-form__movie-genre-id");
			this.genreId.required = true;
			this.genreId.value = movie.GenreId;
			this.editForm.append(this.genreId);

			var fieldName = document.createElement('label');
			fieldName.classList.add("movie-form__field-name");
			fieldName.setAttribute('for', "movie-duration");
			fieldName.textContent = 'Тривалість (у хвилинах):'
			this.editForm.append(fieldName);

			this.duration = document.createElement('input');
			this.duration.classList.add("movie-form__input", "edit-form__movie-duration");
			this.duration.setAttribute('type', "number");
			this.duration.setAttribute('id', "movie-duration");
			this.duration.setAttribute('name', "edit-form__movie-duration");
			this.duration.required = true;
			this.duration.value = movie.RunTime;
			this.editForm.append(this.duration);

			var fieldName = document.createElement('label');
			fieldName.classList.add("movie-form__field-name");
			fieldName.setAttribute('for', "movie-synopsis");
			fieldName.textContent = 'Короткий огляд:'
			this.editForm.append(fieldName);

			this.synopsis = document.createElement('textarea');
			this.synopsis.classList.add("movie-form__textarea", "movie-form__big-textarea", "edit-form__movie-synopsis");
			this.synopsis.setAttribute('name', "edit-form__movie-synopsis");
			this.synopsis.setAttribute('id', "movie-synopsis");
			this.synopsis.required = true;
			this.synopsis.value = movie.Description;
			this.editForm.append(this.synopsis);

			var fieldName = document.createElement('label');
			fieldName.classList.add("movie-form__field-name");
			fieldName.setAttribute('for', "movie-actors-list");
			fieldName.textContent = 'У головних ролях:'
			this.editForm.append(fieldName);

			this.actorsList = document.createElement('textarea');
			this.actorsList.classList.add("movie-form__textarea", "movie-form__small-textarea", "edit-form__movie-actors-list");
			this.actorsList.setAttribute('id', "movie-actors-list");
			this.actorsList.setAttribute('name', "edit-form__movie-actors-list");
			if (movie.Actors) {
				this.actorsList.value = movie.Actors.join(',');
			}
			this.editForm.append(this.actorsList);

			var formButtons = document.createElement('div');
			formButtons.classList.add("movie-form__buttons-block");
			this.editForm.append(formButtons);

			var submitButton = document.createElement('button');
			submitButton.classList.add("movie-form__button", "edit-form__submit-button");
			submitButton.setAttribute('type', "submit");
			submitButton.textContent = 'Зберегти';
			formButtons.append(submitButton);

			var resetButton = document.createElement('button');
			resetButton.classList.add("movie-form__button", "edit-form__cancel-button");
			resetButton.setAttribute('type', "reset");
			resetButton.textContent = 'Скасувати';
			formButtons.append(resetButton);
		},
	}

	window.MovieEditView = MovieEditView;

}());
