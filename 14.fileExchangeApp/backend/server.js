const express = require("express");
const multer = require("multer");
const cors=require("cors")
const path = require("path");

const fs = require("fs");
const app = express();
const port = 3000;
app.use(cors())
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), (req, res) => {
  const imageData = req.file.buffer; // This contains the binary data of the image
  console.log(imageData);

  // Replace 'your_base64_encoded_image_string_here' with the actual base64 string
  const base64String = "your_base64_encoded_image_string_here";

  // Create a buffer from the base64 string
  const imageBuffer = Buffer.from(base64String, "base64");

  // Specify the file path and name
  const filePath = "/image.png";

  // Write the buffer to the file
  fs.writeFile(filePath, imageBuffer, (err) => {
    if (err) {
      console.error("Error writing image file:", err);
    } else {
      console.log("Image file created successfully:", filePath);
    }
  });


  // Handle the image data (save to storage, process, etc.)
  res.json({ message: "Image uploaded successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});