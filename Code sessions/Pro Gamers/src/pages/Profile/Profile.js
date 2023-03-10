import { TextField, FormControl, Paper, Button } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../slices/profileSlice";
import "./styles.css";

export const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);

  const fullNameRef = useRef(null);
  const [image, setImage] = useState(profile.image);

  function onImageUpload(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
      const image = e.target.result;
      setImage(image);
    }

    fileReader.readAsDataURL(file);
  }

  function onSubmit(e) {
    dispatch(update({
      fullName: fullNameRef.current.value,
      image
    }));
  }

  return (
    <>
      <h1>Profile</h1>
      <FormControl fullWidth>
        <TextField id="full-name" label="Full name" variant="outlined" inputRef={fullNameRef} defaultValue={profile.fullName} />
      </FormControl>
      <FormControl fullWidth>
        <TextField id="image" variant="outlined" type="file" onChange={onImageUpload} />
      </FormControl>
      <Paper style={{
        backgroundImage: `url(${image})`
      }} className="image-preview"></Paper>
      <Button variant="outlined" onClick={onSubmit}>Submit</Button>
    </>
  );
};