import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Search.css';

interface SearchProps {
  searchTerm: string;
  handleSearchChange: (searchTerm: string) => void;
}

export const Search = ({ searchTerm, handleSearchChange }: SearchProps) => {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          name="searchTerm"
          className="searchTerm"
          placeholder="Search Dad Jokes"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <div className="searchButton">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  );
};
