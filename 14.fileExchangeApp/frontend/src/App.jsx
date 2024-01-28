import React, { useState } from "react";

function UploadImage() {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
  };

  const handleUpload = () => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
        // You may need to set additional headers based on your backend requirements
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Image uploaded successfully:", data);
          // Handle the response from the backend
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          // Handle errors
        });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

export default UploadImage;
