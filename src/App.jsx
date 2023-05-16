import './App.css'

import { useState, useEffect, useRef } from 'react'
import { useMovies } from './hooks/useMovies'

import { Movies } from './components/Movies'

import debounce from 'just-debounce-it'
import { useCallback } from 'react'

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
	const [sort, setSort] = useState(false)

	const { search, updateSearch, error } = useSearch()

	const { movies, getMovies, loading } = useMovies({ search, sort })

	const debouncedGetMovies = useCallback(
		debounce((search) => {
			getMovies({ search })
		}, 500),
		[]
	)

	const handleSubmit = (e) => {
		e.preventDefault()
		getMovies({ search })
	}

	const handleSort = () => {
		setSort(!sort)
	}

	const handleChange = (e) => {
		const newSearch = e.target.value
		updateSearch(newSearch)
		debouncedGetMovies({ search: newSearch })
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
					<input type='checkbox' onChange={handleSort} checked={sort} />
					<button type='submit' className='bg-[#161f27]'>
						Search
					</button>
				</form>
				{error && <p className='text-red-600'>{error}</p>}
			</header>
			<main className='flex justify-center w-full mt-8'>
				{loading ? <p>Loading...</p> : <Movies movies={movies} />}
			</main>
		</div>
	)
}

export default App
