import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Posting.css";

function Posting() {
  const [imgFile, setImgFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgPreview, setImgPreview] = useState(null);
  const fileRef = useRef();
  const navigate = useNavigate();

  // 이미지 업로드 핸들러
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
      setImgPreview(URL.createObjectURL(file));
    }
  };

  // 드래그 앤 드롭 지원
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImgFile(file);
      setImgPreview(URL.createObjectURL(file));
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 POST 요청 또는 상태 추가 (임시 alert)
    alert("Post published! (실제로는 저장 로직 추가)");
  };

  return (
    <div className="posting-container">
      <h1 className="main-title" onClick={() => navigate('/')}>Image Gallery</h1>
      <form className="posting-form" onSubmit={handleSubmit}>
        <label className="label">Image *</label>
        <div
          className="img-dropzone"
          onClick={() => fileRef.current.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {imgPreview ? (
            <img src={imgPreview} alt="preview" className="preview-img" />
          ) : (
            <span>Drag and drop your file here.</span>
          )}
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileRef}
            onChange={handleImage}
          />
        </div>
        <button
          type="button"
          className="btn upload-btn"
          onClick={() => fileRef.current.click()}
        >
          My PC
        </button>
        <label className="label">Title *</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value.slice(0, 20))}
          maxLength={20}
          placeholder="Text Filled"
          required
        />
        <label className="label">Description *</label>
        <textarea
          className="textarea"
          value={desc}
          onChange={(e) => setDesc(e.target.value.slice(0, 200))}
          maxLength={200}
          placeholder="Text Filled"
          required
        />
        <div className="form-footer">
          <button
            type="submit"
            className="btn submit-btn"
            disabled={!imgFile || !title || !desc}
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default Posting;
