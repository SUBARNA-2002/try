//mongodb+srv://razz:<password>@instagram.wq1ehi0.mongodb.net/?retryWrites=true&w=majority
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const port = 5001;
const cors = require("cors");
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); // Specify the upload destination

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://razz:123@instagram.wq1ehi0.mongodb.net/insta?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

const User = mongoose.model("users", UserSchema);

const detailSchema = new mongoose.Schema({
  name: String,
  image: String,
});
const Details = mongoose.model("posts", detailSchema);



app.use(express.json());
app.use(cors());

// Secret key for JWT token generation
const secretKey = "your-secret-key"; // Replace with your own secret key
app.post("/register", async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if the username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: "Username already exists" });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
  
      res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });
  
  // User login endpoint
  app.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if the user exists in the database
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      // Password is valid, authentication successful
  
      // Generate a token with the user ID as the payload
      const token = jwt.sign({ userId: user._id }, secretKey);
  
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error("An error occurred during login:", error);
      res
        .status(500)
        .json({ message: "An error occurred during login. Please try again later." });
    }
  });

  //
  app.get("/posts", async (req, res) => {
    try {
      const data = await Details.find({});
      if (data) {
        res.json(data);
      } else {
        res.status(500).json({ error: "Product not found" });
      }
    } catch (error) {
      console.error("Error fetching data from MongoDB:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  //
  app.post("/posts/add", async (req, res) => {
    try {
      const postDetail = req.body;
      const createdPosts = await Details.create(postDetail);
      res.status(201).json(createdPosts);
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to add Post");
    }
  });


  //
  app.delete("/posts/:id", async (req, res) => {
    try {
      const postsId = req.params.id;
      const deletedPost = await Details.findByIdAndDelete(postsId);
      if (!deletedPost) {
        return res.status(404).send("Product not found");
      }
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to delete product");
    }
  });

//
app.get('/products/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const details = await Details.findOne();

    if (!details) {
      return res.status(404).json({ error: 'Details not found' });
    }

    const productData = details.Details;

    const postsItem = productData.find(item => item.id === id);

    if (postsItem) {
      res.json(postsItem);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
