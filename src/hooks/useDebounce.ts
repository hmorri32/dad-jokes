// useDebounce.js
import { useState, useEffect } from 'react';

interface useDebounceProps {
  value: string;
  delay: number;
}

export function useDebounce({ value, delay }: useDebounceProps) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
