import { useEffect, useState } from 'react';
import { IJoke } from '../../shared';
import { JokeListItem } from '../JokeListItem/JokeListItem';

export const RandomJoke = () => {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [randomJoke, setRandomJoke] = useState<IJoke | null>({
    id: '',
    joke: '',
    status: 200,
  });

  const fetchRandomJoke = async () => {
    setRandomJoke(null);
    setLoading(true);

    try {
      const result = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!result.ok) {
        throw new Error('No dad joke 4 u');
      }

      const data = await result.json();

      setRandomJoke(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching random joke:', error);
    }
  };

  useEffect(() => {
    fetchRandomJoke();

    return () => {};
  }, []);

  return (
    <div className='jokes-container'>
      <button onClick={fetchRandomJoke}>New random joke</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        randomJoke && <JokeListItem joke={randomJoke} />
      )}
    </div>
  );
};
