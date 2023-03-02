import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./MyForm.css";

function MyForm() {
  const [title, setTitle] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending data to a server
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
          <h2 className="form-title">Upload Jewlery</h2>

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

          <div className="form-group">
            <label htmlFor="instagramLink" className="form-label">
              Instagram Link
            </label>
            <input
              type="url"
              id="instagramLink"
              name="instagramLink"
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
              placeholder="Enter Instagram link here"
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
