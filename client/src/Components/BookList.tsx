import Book from "./Book";
import { getBooksQuery } from "../Queries/Queries";
import { useQuery } from "@apollo/client";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div
      id="book-list-base"
      className="w-full h-full flex flex-row flex-wrap items-center justify-center"
    >
      {data.books.map((book: any, index: number) => {
        return (
          <div key={book.id}>
            <Book book={book} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
