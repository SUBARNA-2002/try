import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

function Posts() {
  const tokenValue = JSON.parse(localStorage.getItem("token"));

  const [detail, setDetail] = useState([]); //for rendering
  //--------Render------------
  const getData = async () => {
    await fetch(`http://localhost:5001/posts`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  };

  const deletePost = (postId) => {
    fetch(`http://localhost:5001/posts/${postId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Product deleted successfully");
          // Perform any necessary actions after successful deletion
        } else if (response.status === 404) {
          throw new Error("Product not found");
        } else {
          throw new Error("Failed to delete product");
        }
      })
      .catch((error) => alert(error.message));
  };

  const handleDetail=()=>{

  }

  useEffect(() => {
    getData();
  }, [detail]);

  return (
    <div className="container">
      <h1>Posts!!</h1>
      <hr />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,2fr)" }}>
        {detail.map(
          (
            el //mapping each data from the data
          ) => (
            <div className="card my-2" style={{ width: "18rem" }}>
              <img src={el.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">DeScription</p>
                {tokenValue ? (
                  <>
                    <button
                      className="btn btn-dark"
                      onClick={() => deletePost(el._id)}
                    >
                      Delete
                    </button>
                    <Link to={'./Details'} className="btn btn-dark mx-3 " onClick={()=>handleDetail()}>View</Link>
                  </>
                ) : (
                  <>
                    <Link to="/Login" className="btn btn-dark my-2">
                      View
                    </Link>
                  </>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Posts;
