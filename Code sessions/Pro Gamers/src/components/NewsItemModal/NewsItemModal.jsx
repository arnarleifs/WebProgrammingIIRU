import { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, FormControl, Select, InputLabel, MenuItem } from "@mui/material"
import PropTypes from 'prop-types';

export const NewsItemModal = ({
  defaultItem,
  isOpen,
  onSubmit,
  onClose,
}) => {
  const [title, setTitle] = useState(defaultItem?.title)
  const [category, setCategory] = useState(defaultItem?.category);
  const [shortDescription, setShortDescription] = useState(defaultItem?.shortDescription);

  const onModalSubmit = () => onSubmit(defaultItem?.id, title, shortDescription, category);

  useEffect(() => {
    setTitle(defaultItem?.title ?? "");
    setCategory(defaultItem?.category ?? "");
    setShortDescription(defaultItem?.shortDescription ?? "");
  }, [defaultItem?.title, defaultItem?.category, defaultItem?.shortDescription]);

  const renderTitle = () => (defaultItem ? 'Edit news item' : 'Add news item');
  const renderDescription = () => defaultItem ? 'To edit a news item, please fill out the form below.' : 'To add a news item, please fill out the form below.';

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{renderTitle()}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {renderDescription()}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="short-description"
          label="Short description"
          type="text"
          fullWidth
          variant="standard"
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={e => setCategory(e.target.value)}
          >
            <MenuItem value='world'>World</MenuItem>
            <MenuItem value='financial'>Financial</MenuItem>
            <MenuItem value='technology'>Technology</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onModalSubmit}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}

NewsItemModal.propTypes = {
  defaultItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }),
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}