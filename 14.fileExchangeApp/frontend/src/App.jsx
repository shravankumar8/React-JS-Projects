import React, { useState } from "react";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(""); // New state for image name

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
  };

  const handleImageNameChange = (event) => {
    setImageName(event.target.value);
  };

  const handleUpload = () => {
    if (image && imageName) {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("imageName", imageName); // Append the image name

      fetch("http://localhost:3001/upload", {
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
      <input
        type="text"
        placeholder="Image Name"
        value={imageName}
        onChange={handleImageNameChange}
      />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

export default UploadImage;
