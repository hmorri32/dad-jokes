import { Link } from 'react-router-dom';
import './Joke.css';

interface JokeProps {
  joke: {
    joke: string;
    id: string;
  };
}

export const JokeListItem = ({ joke }: JokeProps) => {
  return (
    <Link
      to={`/joke/${joke.id}`}
      className="joke-container"
      key={joke.id}
      state={joke}
    >
      <p key={joke.id}>{joke.joke}</p>
    </Link>
  );
};
