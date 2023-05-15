const ListOfMovies = ({ movies }) => {
	return (
		<ul>
			{movies.map((movie) => (
				<li key={movie.id}>
					<h3>{movie.title}</h3>
					<h3>{movie.year}</h3>
					<img src={movie.poster} alt={movie.title} />
				</li>
			))}
		</ul>
	)
}

const NoMoviesResults = () => {
	return <p>No movies found</p>
}

export const Movies = ({ movies }) => {
	const hasMovies = movies?.length > 0

	return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}
