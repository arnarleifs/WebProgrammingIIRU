import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, FormControl, Select, InputLabel, MenuItem } from "@mui/material"

export const NewsItemModal = ({
  isOpen,
  onSubmit,
  onClose,
  defaultValues,
}) => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  const onModalSubmit = () => onSubmit(title, shortDescription, category);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add news item</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a news item, please fill out the form below.
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
        <Button onClick={onModalSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}