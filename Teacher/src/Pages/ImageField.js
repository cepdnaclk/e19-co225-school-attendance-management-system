import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoIcon from '@mui/icons-material/Photo';

const ImageField = ({ label, onChange }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    onChange(file); // Pass the selected file to the parent component

    // Create a preview of the selected image
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <TextField
        type="file"
        label={label}
        InputProps={{
          startAdornment: (
            <IconButton component="span">
              <PhotoIcon />
            </IconButton>
          ),
        }}
        onChange={handleImageChange}
      />
      {imagePreview && (
        <img src={imagePreview} alt="Profile" style={{ width: '100%', marginTop: 10 }} />
      )}
    </div>
  );
};

export default ImageField;
