import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PaginationProps {
  pageNo: number;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ pageNo, setPageNo, isLoading }) => {
  const handleNextPage = () => {
    setPageNo((prevPageNo) => prevPageNo + 1);
  };

  const handlePrevPage = () => {
    setPageNo((prevPageNo) => Math.max(prevPageNo - 1, 1));
  };

  if (isLoading) return null;

  return (
    <div className="mt-4 flex justify-center gap-4">
      <button
        onClick={handlePrevPage}
        disabled={pageNo === 1}
        className="px-4 py-2 bg-[#00b050] text-white rounded-md"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={handleNextPage}
        className="px-4 py-2 bg-[#00b050] text-white rounded-md"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
