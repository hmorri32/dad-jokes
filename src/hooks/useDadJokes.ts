// useDadJokes.ts
import { useState, useEffect } from 'react';

interface Joke {
  id: string;
  joke: string;
}

interface SearchResponse {
  results: Joke[];
  current_page: number;
  total_pages: number;
}

export const useDadJokes = (searchTerm: string, currentPage: number) => {
  const [error, setError] = useState<Error | null>(null);
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchDadJokes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://icanhazdadjoke.com/search?term=${searchTerm}&page=${currentPage}`,
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: SearchResponse = await response.json();
        setJokes(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Error fetching jokes:', error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchDadJokes();
  }, [searchTerm, currentPage]);

  return { jokes, loading, totalPages, error };
};
