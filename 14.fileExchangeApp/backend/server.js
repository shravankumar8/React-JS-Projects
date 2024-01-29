const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3001;
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), (req, res) => {
  const imageData = req.file.buffer; // This contains the binary data of the image
   const imageBuffer = Buffer.from(imageData, "base64");
   const imageName = req.body.imageName; // Access the image name from the request body
   const fileName = `${imageName}.png`;
    fs.writeFile(fileName, imageBuffer, (err) => {
      if (err) {
        console.error("Error writing image file:", err);
        return res.status(500).json({ error: "Error writing image file" });
      } else {
        console.log("Image file created successfully:", fileName);
      }
    });
  console.log(imageName);
  // Your existing code for handling image data...

  res.json({ message: "Image uploaded successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
