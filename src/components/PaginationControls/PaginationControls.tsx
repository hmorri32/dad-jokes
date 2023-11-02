interface PaginationControlsProps {
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  totalPages: number;
}

export const PaginationControls = ({
  currentPage,
  nextPage,
  prevPage,
  totalPages,
}: PaginationControlsProps) => {
  return (
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
  );
};
