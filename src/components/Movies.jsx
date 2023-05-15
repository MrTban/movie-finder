const ListOfMovies = ({ movies }) => {
	return (
		<ul className='grid w-full grid-cols-auto list-none m-0 p-0 gap-8'>
			{movies.map((movie) => (
				<li key={movie.id} className='text-center'>
					<h3 className='m-0'>{movie.title}</h3>
					<p className='m-0'>{movie.year}</p>
					<img className='rounded-lg my-4' src={movie.poster} alt={movie.title} />
				</li>
			))}
		</ul>
	)
}

const NoMoviesResults = () => {
	return <h2>No movies found</h2>
}

export const Movies = ({ movies }) => {
	const hasMovies = movies?.length > 0

	return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}
