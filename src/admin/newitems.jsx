import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./MyForm.css";

function MyForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [jewelryType, setJewelryType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Add form data to the FormData object
    formData.append("image", image);
    const data = {
      title,
      jewelryType,
    };
    formData.append("data", JSON.stringify(data));
    // Send a POST request to the server with the form data
    fetch("http://127.0.0.1:3030/api/data", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update the UI with the newly uploaded image
      })
      .catch((error) => {
        console.error(error);
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
          <h2 className="form-title">Upload Jewelry</h2>

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
              Jewelry Type
            </label>
            <input
              type="text"
              name="jewleryType"
              value={jewelryType}
              onChange={(e) => setJewelryType(e.target.value)}
              placeholder="Enter JewelryType here"
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
        </form>
      </CSSTransition>
    </div>
  );
}

export default MyForm;
