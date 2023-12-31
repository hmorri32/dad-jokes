import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { JokeDetail } from './components/JokeDetail/JokeDetail';
import { JokeForSlack } from './components/JokeForSlack/JokeForSlack';
import { NotFound } from './components/NotFound/NotFound';
import { RandomJoke } from './components/RandomJoke/RandomJoke';

import './App.css';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Search</Link>
          <Link to="/random">Random Joke</Link>
          <Link to="/joke-for-slack">A Joke for Slack</Link>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<RandomJoke />} />
          <Route path="/joke-for-slack" element={<JokeForSlack />} />
          <Route path="/joke/:id" element={<JokeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="jokes-footer">
        <p>©icanhazdadjoke</p>
      </footer>
    </Router>
  );
}

export default App;
