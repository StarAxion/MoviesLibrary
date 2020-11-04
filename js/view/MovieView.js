(function () {

	function MovieView(movie) {
		this.element = document.createElement('div');
		this.element.classList.add("movie-section");
		this.element.setAttribute('data-id', movie.ID);
	}

	MovieView.prototype = {

		getElement: function () {
			return this.element;
		},

		renderMoviePreview: function (movie) {
			this.moviePreview = document.createElement('div');
			this.moviePreview.classList.add("movie-section-preview");
			this.element.append(this.moviePreview);

			var titlesBlockResponsive = document.createElement('div');
			titlesBlockResponsive.classList.add("movie-section-preview__titles-block_responsive");
			this.moviePreview.append(titlesBlockResponsive);

			this.title = document.createElement('h1');
			this.title.classList.add("movie-section-preview__title");
			this.title.textContent = movie.Title;
			titlesBlockResponsive.append(this.title);

			this.originalTitle = document.createElement('h2');
			this.originalTitle.classList.add("movie-section-preview__original-title");
			this.originalTitle.textContent = movie.TitleAlt;
			titlesBlockResponsive.append(this.originalTitle);

			this.poster = document.createElement('img');
			this.poster.classList.add("movie-section__poster");
			if (movie.srcImage != "") {
				this.poster.setAttribute('src', movie.srcImage);
			} else {
				this.poster.setAttribute('src', "img/movie-poster.jpg");
			}
			this.poster.setAttribute('alt', "movie-poster");
			this.moviePreview.append(this.poster);

			var movieInfo = document.createElement('div');
			movieInfo.classList.add("movie-section__info");
			this.moviePreview.append(movieInfo);

			var titlesBlock = document.createElement('div');
			titlesBlock.classList.add("movie-section-preview__titles-block");
			movieInfo.append(titlesBlock);

			this.title = document.createElement('h1');
			this.title.classList.add("movie-section-preview__title");
			this.title.textContent = movie.Title;
			titlesBlock.append(this.title);

			this.originalTitle = document.createElement('h2');
			this.originalTitle.classList.add("movie-section-preview__original-title");
			this.originalTitle.textContent = movie.TitleAlt;
			titlesBlock.append(this.originalTitle);

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
		},
	}

	window.MovieView = MovieView;

}());
