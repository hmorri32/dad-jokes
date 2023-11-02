import { useState } from 'react';
import { JokeListItem } from '../JokeListItem/JokeListItem';
import { Search } from '../Search/Search';
import { PaginationControls } from '../PaginationControls/PaginationControls';

import { useDadJokes } from '../../hooks/useDadJokes';
import { useDebounce } from '../../hooks/useDebounce';

import './Home.css';

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce({ value: searchTerm, delay: 500 });

  const { jokes, loading, totalPages } = useDadJokes(
    debouncedSearchTerm,
    currentPage,
  );

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className="jokes-container">
      <h2>All the dad jokes</h2>
      <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      {loading && <p className="loading">Loading...</p>}
      {jokes.length ? (
        jokes.map((joke) => <JokeListItem joke={joke} key={joke.id} />)
      ) : (
        <p>No Jokes Found!</p>
      )}

      <PaginationControls
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        totalPages={totalPages}
      />
    </div>
  );
};
