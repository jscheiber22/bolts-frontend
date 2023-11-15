import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const UploadAndDisplayImage = ({image}) => {

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    image(selectedImage);
  }, [selectedImage]);

  return (
    <div>
      <br />
      <br />

      <Typography variant="h4" style={{marginBottom: "3%"}} fontFamily={"inherit"}>Upload Image:</Typography>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />

      <br />

    </div>
  );
};

export default UploadAndDisplayImage;