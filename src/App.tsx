import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { JokeDetail } from './JokeDetail';
import { JokeOfTheDay } from './JokeOfTheDay';
import { RandomJoke } from './components/RandomJoke/RandomJoke';
import { Search } from './components/Search/Search';

import './App.css';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/random">Random Joke</Link>
          <Link to="/joke-of-the-day">Joke of the Day</Link>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/random" element={<RandomJoke />} />
          <Route path="/joke-of-the-day" element={<JokeOfTheDay />} />
          <Route path="/joke/:id" element={<JokeDetail />} />
        </Routes>
      </main>

      <footer className="jokes-footer">
        <p>© Can I Haz Dad Joke?</p>
      </footer>
    </Router>
  );
}

export default App;
