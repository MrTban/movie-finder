import './App.css'

import { useState, useEffect, useRef } from 'react'
import { useMovies } from './hooks/useMovies'

import { Movies } from './components/Movies'

function useSearch() {
	const [search, updateSearch] = useState('')
	const [error, setError] = useState(null)
	const isFristInput = useRef(true)

	useEffect(() => {
		if (isFristInput.current) {
			isFristInput.current = search === ''
			return
		}

		if (search === '') {
			setError(`Can't search for a movie`)
			return
		}

		if (search.match(/^\d+$/)) {
			setError(`Can't search for a movie with a number`)
			return
		}

		if (search.length < 3) {
			setError('The search must have at least 3 characters')
			return
		}

		setError(null)
	}, [search])

	return { search, updateSearch, error }
}

function App() {
	const { search, updateSearch, error } = useSearch()

	const { movies, getMovies } = useMovies({ search })

	const handleSubmit = (e) => {
		e.preventDefault()
		getMovies()
	}

	const handleChange = (e) => {
		updateSearch(e.target.value)
	}

	return (
		<div className='flex flex-col justify-center items-center w-full max-w-[800px]'>
			<header>
				<h1 className='text-center'>Movie finder</h1>
				<form onSubmit={handleSubmit} className='flex items-center justify-center'>
					<input
						onChange={handleChange}
						value={search}
						name='query'
						placeholder='Avengers, Star Wars, Fast & Furious...'
					/>
					<button type='submit'>Search</button>
				</form>
				{error && <p className='text-red-600'>{error}</p>}
			</header>

			<main className='flex justify-center w-full'>
				<Movies movies={movies} />
			</main>
		</div>
	)
}

export default App
