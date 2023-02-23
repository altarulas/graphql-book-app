import AlertDialog from "./Dialog";
import Button from "@mui/material/Button";
import { useState } from "react";

interface BookProps {
  book: {
    name: string;
  };
  index: number;
}

const Book: React.FC<BookProps> = ({ book, index }) => {
  const [info, setInfo] = useState(false);

  const displayDetail = () => {
    setInfo(true);
  };

  return (
    <div id="book-base" className="px-4">
      <Button
        sx={{ height: "75px", width: "150px" }}
        variant="contained"
        color="secondary"
        size="large"
        onClick={displayDetail}
      >
        <span className="font-bold text-xs">{book.name}</span>
      </Button>
      {info && <AlertDialog setInfo={setInfo} info={info} book={book} />}
    </div>
  );
};

export default Book;
