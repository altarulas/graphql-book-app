import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface DialogProps {
  info: boolean;
  setInfo: any;
  book: any;
}

export default function AlertDialog(props: DialogProps) {
  const { info, setInfo, book } = props;

  const handleClose = () => {
    setInfo(false);
  };

  return (
    <div>
      <Dialog
        open={info}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <span className="p-4 font-bold text-2xl mb-4">{book.name}</span>
        <div className="flex flex-col w-96 ml-4">
          <span className="mb-2">Book Name: {book.name}</span>
          <span className="mb-2">Genre: {book.genre}</span>
          <span className="mb-6">Author: {book.author.name}</span>
          <span className="mb-2">Author's other books: </span>
          {book.author.books.map((item: any) => {
            return (
              <div className="mb-1" key={item.id}>
                {item.name}
              </div>
            );
          })}
        </div>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
