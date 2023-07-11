import { useRouter } from 'next/router';
import { BiChevronLeft, BiChevronRight } from "@heroicons/react/solid";
import Link from "next/link";

const PaginationButton = ({ startIndex }) => {
  const router = useRouter()

  return (
    <div>
      {startIndex >= 10 && (
        <Link href={`/search?term = ${router.query.term}& start =${startIndex - 10}`}>
          <div>
            <BiChevronLeft size={40} />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term = ${router.query.term}& start =${startIndex + 10}`}>
        <div>
          <BiChevronRight size={40} />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButton
