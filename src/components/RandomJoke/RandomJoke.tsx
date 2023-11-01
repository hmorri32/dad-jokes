import { useEffect, useState } from 'react';
import { IJoke } from '../../shared';
import { JokeListItem } from '../JokeListItem/JokeListItem';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import './RandomQuote.css';
import { useFetch } from '../../hooks/useFetch';
// export const RandomJoke = () => {
//   const [loading, setLoading] = useState<boolean | null>(null);
//   const [randomJoke, setRandomJoke] = useState<IJoke | null>({
//     id: '',
//     joke: '',
//     status: 200,
//   });

//   const fetchRandomJoke = async () => {
//     setRandomJoke(null);
//     setLoading(true);

//     try {
//       const result = await fetch('https://icanhazdadjoke.com/', {
//         headers: {
//           Accept: 'application/json',
//         },
//       });

//       if (!result.ok) {
//         throw new Error('No dad joke 4 u');
//       }

//       const data = await result.json();

//       setRandomJoke(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching random joke:', error);
//     }
//   };

//   useEffect(() => {
//     fetchRandomJoke();

//     return () => {};
//   }, []);

//   return (
//     <div className="jokes-container">
//       <button onClick={fetchRandomJoke}>Another one</button>
//       {loading ? (
//         <p className="joke-container">Loading...</p>
//       ) : (
//         randomJoke && <JokeListItem joke={randomJoke} />
//       )}
//     </div>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import { useCopyToClipboard } from './path-to-your-custom-hook';

// export const RandomJoke = () => {
//   const [loading, setLoading] = useState(false);
//   const [joke, setJoke] = useState(null);
//   const [mode, setMode] = useState('default'); // 'default' or 'slack'
//   const [copiedText, copy] = useCopyToClipboard();
//   const [copied, setCopied] = useState(false);

//   const fetchJoke = async () => {
//     const url = mode === 'slack' ? 'https://icanhazdadjoke.com/slack' : 'https://icanhazdadjoke.com/';
//     setLoading(true);
//     setJoke(null);

//     try {
//       const response = await fetch(url, {
//         headers: {
//           Accept: 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch the joke');
//       }

//       const data = await response.json();
//       setJoke(data);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJoke();
//   }, [mode]);

//   const handleCopy = () => {
//     if (joke) {
//       copy(JSON.stringify(joke));
//       setCopied(true);
//     }
//   };

//   return (
//     <div className="jokes-container">
//       <button onClick={() => setMode('default')}>Default Joke</button>
//       <button onClick={() => setMode('slack')}>Slack Joke</button>
//       <button onClick={fetchJoke}>Another one</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : mode === 'slack' ? (
//         <pre className="slack-json">
//           <button onClick={handleCopy}>{copied ? 'Copied!' : 'Copy to clipboard'}</button>
//           {JSON.stringify(joke, null, 2)}
//         </pre>
//       ) : (
//         joke && <JokeListItem joke={joke} />
//       )}
//     </div>
//   );
// };

// // export default CombinedJokeComponent;

// import React, { useState, useEffect } from 'react';
// import { useCopyToClipboard } from './path-to-your-custom-hook';

export const RandomJoke = () => {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState(null);
  const [isSlackMode, setIsSlackMode] = useState(false);
  const [_, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    setJoke(null);

    const url = isSlackMode
      ? 'https://icanhazdadjoke.com/slack'
      : 'https://icanhazdadjoke.com/';

    try {
      const response = await fetch(url, {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('No jokes 4 u');
      }

      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, [isSlackMode]);

  const handleCopy = () => {
    if (joke) {
      copy(JSON.stringify(joke));
      setCopied(true);
    }
  };

  return (
    <div className="jokes-container">
      <div>
        <label style={{ marginRight: '5px' }}>
          For Slack?
          <input
            type="checkbox"
            checked={isSlackMode}
            onChange={(e) => setIsSlackMode(e.target.checked)}
          />
        </label>
        <button onClick={fetchJoke}>Another One</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : isSlackMode ? (
        <pre style={{ textAlign: 'start' }}>
          <button onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy to clipboard'}
          </button>
          {JSON.stringify(joke, null, 2)}
        </pre>
      ) : (
        joke && <JokeListItem joke={joke} />
      )}
    </div>
  );
};

// export default CombinedJokeComponent;
