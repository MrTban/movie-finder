import './App.css'

import { useMovies } from './hooks/useMovies'

import { Movies } from './components/Movies'

function App() {
	const { movies } = useMovies()
	return (
		<div className='flex flex-col justify-center items-center'>
			<header>
				<h1 className='text-center'>Movie finder</h1>
				<form className='flex items-center justify-center'>
					<input placeholder='Avengers, Star Wars, Fast & Furious...' />
					<button type='submit'>Search</button>
				</form>
			</header>

			<main className='flex justify-center'>
				<Movies movies={movies} />
			</main>
		</div>
	)
}

export default App
