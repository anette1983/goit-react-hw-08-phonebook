import { Button, Fab } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ContactForm from './ContactForm/ContactForm';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new contact
      </Button>
      <Fab
        onClick={handleClickOpen}
        color="secondary"
        sx={{
          position: 'fixed',
          // bottom: theme => theme.spacing(2),
          // right: theme => theme.spacing(2),
          right: '30px',
          bottom: '30px',
        }}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            // color: theme => theme.palette.grey[500],
            color: '#ffffff',
          }}
        >
          <CloseIcon />
        </IconButton>
        <ContactForm handleClose={handleClose} />
      </Dialog>
    </>
  );
}
