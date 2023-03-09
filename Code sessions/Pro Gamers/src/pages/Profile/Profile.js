import { FormControl, TextField, Paper, Button } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../slices/profileSlice";

export const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const translations = useSelector((state) => state.language.translations);

  const fullNameRef = useRef(null);
  const [image, setImage] = useState(profile.image);
  const dispatch = useDispatch();

  function onImageUpload(e) {
    const fileReader = new FileReader();

    fileReader.onload = function (event) {
      setImage(event.target.result);
    };

    fileReader.readAsDataURL(e.target.files[0]);
  }

  function onSubmit() {
    dispatch(
      update({
        fullName: fullNameRef.current.value,
        image,
      })
    );
  }

  return (
    <>
      <h1>{translations.profile}</h1>
      <FormControl fullWidth>
        <TextField
          defaultValue={profile?.fullName}
          id="full-name"
          label={translations.fullName}
          variant="outlined"
          inputRef={fullNameRef}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="profile-image"
          type="file"
          variant="outlined"
          onChange={onImageUpload}
        />
      </FormControl>
      <Paper
        variant="outlined"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          width: 500,
          height: 500,
        }}
      ></Paper>
      <Button onClick={onSubmit}>{translations.submit}</Button>
    </>
  );
};
