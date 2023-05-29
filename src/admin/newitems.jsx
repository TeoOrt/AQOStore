import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./MyForm.css";
import axios from "axios";
import ReactConfetti from "react-confetti";
function MyForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0.0);

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Add form data to the FormData object
    formData.append("image", image);

    formData.append("title", title);
    formData.append("price", price.toPrecision);
    formData.append("category", category);

    // Send a POST request to the server with the form data
    axios
      .post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setShowSuccess(true);
      })
      .catch((error) => {
        setShowSuccess(false);
        console.error(e);
      });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleFormMount = () => {
    setShowForm(true);
  };

  return (
    <div className="my-form-container">
      <CSSTransition in={showForm} timeout={500} classNames="fade">
        <form
          onSubmit={handleSubmit}
          className="my-form"
          onMount={handleFormMount}
        >
          <h2 className="form-title">Upload Balloons</h2>

          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title here"
              className="form-input"
              required
            />
          </div>
          <div>
            <label htmlFor="title" className="form-label">
              Balloon Arch Category
            </label>
            <input
              type="text"
              name="jewleryType"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter Category here"
              className="form-input"
              required
            />
          </div>

          <div>
            <label htmlFor="title" className="form-label">
              Estimated Price
            </label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price here"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="form-submit-btn">
            Upload
          </button>

          {showSuccess && (
            <div>
              <p>Form submitted successfully!</p>
              <ReactConfetti />
            </div>
          )}
        </form>
      </CSSTransition>
    </div>
  );
}
export default MyForm;
