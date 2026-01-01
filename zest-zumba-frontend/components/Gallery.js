import { useState } from "react";

export default function Gallery() {
  const images = [
    "/gallery/img1.png",
    "/gallery/img2.png",
    "/gallery/img3.png",
    "/gallery/img4.png",
    "/gallery/img5.png",
  ];

  const videos = [
    "https://res.cloudinary.com/dapveboee/video/upload/v1767290259/video1_zvr8tg.mp4",
    "/https://res.cloudinary.com/dapveboee/video/upload/v1767290248/video2_xduvgd.mp4",
  ];

  const [showAllImages, setShowAllImages] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const [previewIndex, setPreviewIndex] = useState(null);

  const visibleImages = showAllImages ? images : images.slice(0, 2);
  const visibleVideos = showAllVideos ? videos : videos.slice(0, 2); // <-- changed here

  const closePreview = () => setPreviewIndex(null);

  const nextImage = () => setPreviewIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setPreviewIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="section gallery" id="gallery">
      <div className="container text-center">
        <h2>Gallery</h2>
      </div>

      {/* ---------- Images ---------- */}
      <div className="container gallery-grid">
        {visibleImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            className="gallery-thumb"
            alt="Gallery"
            onClick={() => setPreviewIndex(idx)}
          />
        ))}
      </div>

      <div className="container text-center">
        <button
          className="gallery-btn"
          onClick={() => setShowAllImages(!showAllImages)}
        >
          {showAllImages ? "Show Less Images" : "More Images"}
        </button>
      </div>

      {/* ---------- Videos ---------- */}
      <div className="container gallery-grid" style={{ marginTop: "2rem" }}>
        {visibleVideos.map((vid, idx) => (
          <video key={idx} className="gallery-thumb" controls>
            <source src={vid} type="video/mp4" />
          </video>
        ))}
      </div>

      <div className="container text-center">
        <button
          className="gallery-btn"
          onClick={() => setShowAllVideos(!showAllVideos)}
        >
          {showAllVideos ? "Show Less Videos" : "More Videos"}
        </button>
      </div>

      {/* ---------- Fullscreen Image Viewer ---------- */}
      {previewIndex !== null && (
        <div className="gallery-modal">
          <span className="close-btn" onClick={closePreview}>
            ×
          </span>

          <button className="nav-btn left" onClick={prevImage}>
            ❮
          </button>

          <img
            src={images[previewIndex]}
            className="gallery-full-image"
            alt="Preview"
          />

          <button className="nav-btn right" onClick={nextImage}>
            ❯
          </button>

          <a href={images[previewIndex]} download className="download-btn">
            ⬇ Download
          </a>
        </div>
      )}
    </section>
  );
}
