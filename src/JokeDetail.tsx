import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCopyToClipboard } from './hooks/useCopyToClipboard';

export const JokeDetail = () => {
  const {
    state: { joke },
  } = useLocation();
  const [_, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    copy(joke);
    setIsCopied(true);
  };

  return (
    <div className="joke-detail">
      <span>
        <button onClick={handleCopy}>
          <span>{isCopied ? 'Copied!' : 'Copy joke to clipboard'}</span>
        </button>
        <p>{joke}</p>
      </span>
    </div>
  );
};
