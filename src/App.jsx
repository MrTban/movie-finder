import './App.css'

function App() {
	return (
		<div>
			<header>
				<h1>Movie Finder</h1>
				<form className='form'>
					<input placeholder='Avengers, Star Wars, Fast & Furious...' />
					<button type='submit'>Search</button>
				</form>
			</header>

			<main>Aquí irán los resultados</main>
		</div>
	)
}

export default App
