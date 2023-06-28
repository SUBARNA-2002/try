import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [name, setName] = useState(""); //for add Products
  const [image, setImage] = useState(""); // ||
  const navigate = useNavigate();

  const addProduct = (e) => {
    fetch("http://localhost:5001/posts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, image }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // parse response data as JSON
        } else {
          throw new Error("Failed to add product");
        }
      })
      .then((data) => {
        alert("Product added successfully");
        setName("");
        setImage("");
      })
      .catch((error) => alert(error.message));

      navigate('/Posts')

  };

  return (
    <div className="container">
      <center>
        <h1 style={{ color: "#039be5" }}>Add Post</h1>
        <p>Name</p>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <p>ImageURL</p>
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <button className="btn btn-warning" onClick={addProduct}>
          Add Product
        </button>
      </center>
    </div>
  );
}

export default AddPost;
