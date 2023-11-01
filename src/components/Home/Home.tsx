import { useEffect, useState } from 'react';
import { JokeListItem } from '../JokeListItem/JokeListItem';
import { IJoke, SearchResponse } from '../../shared';

import './Home.css';

export const Home = () => {
  const [jokes, setJokes] = useState<IJoke[] | null>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDadJokes = async (page: number) => {
    try {
      const response = await fetch(
        `https://icanhazdadjoke.com/search?page=${page}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error('No dad jokes 4 u');
      }

      const data = (await response.json()) as SearchResponse;

      console.log(data);
      setJokes(data.results);
      setCurrentPage(data.current_page);
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  useEffect(() => {
    fetchDadJokes(1);
  }, []);

  const nextPage = () => {
    fetchDadJokes(currentPage + 1);
  };

  const prevPage = () => {
    fetchDadJokes(currentPage - 1);
  };

  return (
    <div className="jokes-container">
      <h2>All the dad jokes</h2>
      {loading && <p className="loading">Loading...</p>}
      {jokes?.map((joke) => (
        <JokeListItem joke={joke} key={joke.id} />
      ))}

      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};
