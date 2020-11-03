(function () {

	function MovieDetailsView(movie) {
		this.element = document.createElement('div');
		this.element.classList.add("movie-section-details");
	}

	MovieDetailsView.prototype = {

		getElement: function () {
			return this.element;
		},

		renderMovieDetails: function (movie) {
			this.backButton = document.createElement('button');
			this.backButton.classList.add("movie-controls__button", "control-button", "back-button");
			this.element.append(this.backButton);

			var backButtonIcon = document.createElement('i');
			backButtonIcon.classList.add("fas", "fa-arrow-circle-left");
			this.backButton.append(backButtonIcon);

			var backButtonName = document.createElement('span');
			backButtonName.classList.add("control-button-name");
			backButtonName.textContent = 'Назад';
			this.backButton.append(backButtonName);

			this.title = document.createElement('h1');
			this.title.classList.add("movie-section__title");
			this.title.textContent = movie.Title;
			this.element.append(this.title);

			this.originalTitle = document.createElement('h2');
			this.originalTitle.classList.add("movie-section__original-title");
			this.originalTitle.textContent = movie.TitleAlt;
			this.element.append(this.originalTitle);

			var movieDescription = document.createElement('div');
			movieDescription.classList.add("movie-section__description");
			this.element.append(movieDescription);

			this.poster = document.createElement('img');
			this.poster.classList.add("movie-section__poster");
			if (movie.srcImage != "") {
				this.poster.setAttribute('src', movie.srcImage);
			} else {
				this.poster.setAttribute('src', "img/movie-poster.jpg");
			}
			this.poster.setAttribute('alt', "movie-poster");
			movieDescription.append(this.poster);

			var movieInfo = document.createElement('div');
			movieInfo.classList.add("movie-section__info");
			movieDescription.append(movieInfo);

			var infoTable = document.createElement('div');
			infoTable.classList.add("info-table");
			movieInfo.append(infoTable);

			var infoTableRow = document.createElement('div');
			infoTableRow.classList.add("info-table__row");
			infoTable.append(infoTableRow);

			var infoTableCell = document.createElement('div');
			infoTableCell.classList.add("info-table__cell");
			infoTableCell.textContent = 'Рейтинг';
			infoTableRow.append(infoTableCell);

			var infoTableCell = document.createElement('div');
			infoTableCell.classList.add("info-table__cell");
			infoTableRow.append(infoTableCell);

			this.rating = document.createElement('span');
			this.rating.classList.add("movie-rating");
			this.rating.textContent = movie.RatingCount;
			infoTableCell.append(this.rating);

			var ratingIcon = document.createElement('i');
			ratingIcon.classList.add("fas", "fa-star");
			infoTableCell.append(ratingIcon);

			var infoTableRow = document.createElement('div');
			infoTableRow.classList.add("info-table__row");
			infoTable.append(infoTableRow);

			var infoTableCell = document.createElement('div');
			infoTableCell.classList.add("info-table__cell");
			infoTableCell.textContent = 'Дата виходу';
			infoTableRow.append(infoTableCell);

			this.releaseDate = document.createElement('div');
			this.releaseDate.classList.add("info-table__cell", "movie-release-year");
			if (movie.OpeningDate) {
				this.releaseDate.textContent = movie.OpeningDate.slice(0, 10);
			}
			infoTableRow.append(this.releaseDate);

			var infoTableRow = document.createElement('div');
			infoTableRow.classList.add("info-table__row");
			infoTable.append(infoTableRow);

			var infoTableCell = document.createElement('div');
			infoTableCell.classList.add("info-table__cell");
			infoTableCell.textContent = 'Жанр';
			infoTableRow.append(infoTableCell);

			this.genre = document.createElement('div');
			this.genre.classList.add("info-table__cell", "movie-genre");
			this.genre.textContent = movie.Genred;
			infoTableRow.append(this.genre);

			var infoTableRow = document.createElement('div');
			infoTableRow.classList.add("info-table__row");
			infoTable.append(infoTableRow);

			var infoTableCell = document.createElement('div');
			infoTableCell.classList.add("info-table__cell");
			infoTableCell.textContent = 'Тривалість';
			infoTableRow.append(infoTableCell);

			var infoTableCell = document.createElement('div');
			infoTableCell.classList.add("info-table__cell");
			infoTableCell.textContent = 'хвилин';
			infoTableRow.append(infoTableCell);

			this.duration = document.createElement('span');
			this.duration.classList.add("movie-duration");
			this.duration.textContent = movie.RunTime;
			infoTableCell.prepend(this.duration);


			this.synopsis = document.createElement('p');
			this.synopsis.classList.add("movie-section__synopsis");
			this.synopsis.textContent = movie.Description;
			this.element.append(this.synopsis);

			var movieTeam = document.createElement('div');
			movieTeam.classList.add("movie-section__team");
			this.element.append(movieTeam);

			if (movie.Actors && movie.Actors != "") {
				var movieSectionHeadline = document.createElement('h4');
				movieSectionHeadline.classList.add("movie-section__headline");
				movieSectionHeadline.textContent = 'У головних ролях:';
				movieTeam.append(movieSectionHeadline);

				this.actorsList = document.createElement('ul');
				this.actorsList.classList.add("movie-section__actors-list");
				var wrap = document.createDocumentFragment();
				movie.Actors.forEach(function (name) {
					var actor = document.createElement('li');
					actor.classList.add("movie-section__actor-name");
					actor.textContent = name;
					wrap.append(actor);
				});
				this.actorsList.append(wrap);
				movieTeam.append(this.actorsList);
			}

			var movieTrailer = document.createElement('div');
			movieTrailer.classList.add("movie-section__trailer");
			this.element.append(movieTrailer);

			var movieSectionHeadline = document.createElement('h4');
			movieSectionHeadline.classList.add("movie-section__headline", "movie-section__headline_special");
			movieSectionHeadline.textContent = 'Трейлер';
			movieTrailer.append(movieSectionHeadline);

			var movieTrailerLink = document.createElement('a');
			movieTrailerLink.classList.add("movie-section__trailer-link");
			movieTrailerLink.setAttribute('href', "https://youtu.be/dQw4w9WgXcQ");
			movieTrailerLink.setAttribute('target', "_blank");
			movieTrailerLink.textContent = 'Подивитися на YouTube';
			movieTrailer.append(movieTrailerLink);

			var movieTrailerIcon = document.createElement('i');
			movieTrailerIcon.classList.add("fab", "fa-youtube", "movie-section__trailer-icon");
			movieTrailerLink.append(movieTrailerIcon);

			this.editButton = document.createElement('button');
			this.editButton.classList.add("movie-controls__button", "control-button", "edit-movie-button");
			this.element.append(this.editButton);

			var editButtonIcon = document.createElement('i');
			editButtonIcon.classList.add("far", "fa-edit");
			this.editButton.append(editButtonIcon);

			var editButtonName = document.createElement('span');
			editButtonName.classList.add("control-button-name");
			editButtonName.textContent = 'Редагувати фільм';
			this.editButton.append(editButtonName);

			this.deleteButton = document.createElement('button');
			this.deleteButton.classList.add("movie-controls__button", "control-button", "delete-movie-button");
			this.element.append(this.deleteButton);

			var deleteButtonIcon = document.createElement('i');
			deleteButtonIcon.classList.add("fas", "fa-trash");
			this.deleteButton.append(deleteButtonIcon);

			var deleteButtonName = document.createElement('span');
			deleteButtonName.classList.add("control-button-name");
			deleteButtonName.textContent = 'Видалити фільм';
			this.deleteButton.append(deleteButtonName);
		},
	}

	window.MovieDetailsView = MovieDetailsView;

}());
