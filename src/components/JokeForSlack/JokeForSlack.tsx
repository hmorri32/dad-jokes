import { useEffect, useState } from 'react';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import './JokeForSlack.css';

export const JokeForSlack = () => {
  const [_, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchSlackJoke = async () => {
      try {
        const response = await fetch('https://icanhazdadjoke.com/slack');

        if (!response.ok) {
          throw new Error('No dad joke 4 u');
        }

        const json = await response.json();

        setJoke(json);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching random joke:', error);
      }
    };

    fetchSlackJoke();
  }, []);

  const handleCopy = () => {
    if (joke) {
      copy(JSON.stringify(joke));
      setCopied(true);
    }
  };

  return (
    <div className="jokes-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>
          <button onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy to clipboard'}
          </button>
          {JSON.stringify(joke, null, 2)}
        </pre>
      )}
    </div>
  );
};
