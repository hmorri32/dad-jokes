import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const JokeDetail = () => {
  const {
    state: { joke, id },
  } = useLocation();

  const [isCopied, setIsCopied] = useState(false);

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(joke);
      console.log(`Content: // ${joke} // copied to clipboard`);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="joke-detail">
      <h2>Joke detail for joke {id}!</h2>
      <span>
        <p>{joke}</p>
        <button onClick={copyContent}>
          <span>{isCopied ? 'Copied!' : 'Copy joke to clipboard'}</span>
        </button>
      </span>
    </div>
  );
};
