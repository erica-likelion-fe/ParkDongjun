import React, { useState } from "react"; // useState import 추가
import { useNavigate } from "react-router-dom";
import "./Main.css";

const mockImages = Array.from({ length: 150 }, (_, i) => ({
  id: i + 1,
  title: `Title ${i + 1}`,
  desc: "Description",
  url: `https://picsum.photos/id/${(i % 20) + 1}/400/300`,
}));

const PAGE_SIZE = 16;

function Main() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const pageCount = Math.ceil(mockImages.length / PAGE_SIZE);
  const startIdx = (page - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const images = mockImages.slice(startIdx, endIdx);

  return (
    <div className="container">
      <h1 className="main-title">Image Gallery</h1>
      <div className="create-post-wrap">
        <button 
          className="btn create-post-btn"
          onClick={() => navigate('/posting')} // 버튼 클릭시 posting 페이지로 이동
        >
          Create Post
        </button>
      </div>
      <div className="gallery-title">
        <h2>Image</h2>
      </div>
      <div className="gallery">        
        {images.map((img) => (
          <div className="gallery-item" key={img.id}>
            <img src={img.url} alt={img.title} />
            <div className="item-title">{img.title}</div>
            <div className="item-desc">{img.desc}</div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            className={`pagination-btn${page === i + 1 ? " active" : ""}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Main;