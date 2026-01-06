import { useState, useEffect, useCallback } from "react";
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
    "https://res.cloudinary.com/dapveboee/video/upload/v1767290248/video2_xduvgd.mp4",
  ];

  const [showAllImages, setShowAllImages] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(null);

  // Logic to determine what to show
  const visibleImages = showAllImages ? images : images.slice(0, 4); // Showing 4 initially looks better on grid
  const visibleVideos = showAllVideos ? videos : videos.slice(0, 2);

  const closePreview = () => setPreviewIndex(null);

  const nextImage = useCallback(() => {
    setPreviewIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setPreviewIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (previewIndex === null) return;
      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewIndex, nextImage, prevImage]);

  return (
    <section className="section gallery" id="gallery">
      <div className="container header-container">
        <h2 className="about-title">Our Gallery</h2>
        <p className="section-subtitle">Explore our latest visual collection</p>
      </div>

      {/* ---------- Images Grid ---------- */}
      <div className="container">
        <div className="gallery-grid">
          {visibleImages.map((img, idx) => (
            <div
              key={idx}
              className="media-card"
              onClick={() => setPreviewIndex(idx)}
            >
              <div className="img-wrapper">
                <img src={img} alt={`Gallery ${idx + 1}`} loading="lazy" />
                <div className="overlay">
                  <span>View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {images.length > 4 && (
          <div className="btn-container">
            <button
              className="gallery-btn"
              onClick={() => setShowAllImages(!showAllImages)}
            >
              {showAllImages ? "Show Less" : "View More Photos"}
            </button>
          </div>
        )}
      </div>

      {/* ---------- Videos Grid ---------- */}
      {videos.length > 0 && (
        <div className="container video-section">
          <h3 className="video-title">Featured Videos</h3>
          <div className="gallery-grid video-grid">
            {visibleVideos.map((vid, idx) => (
              <div key={idx} className="media-card video-card">
                <video controls preload="metadata">
                  <source src={vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>

          {videos.length > 2 && (
            <div className="btn-container">
              <button
                className="gallery-btn secondary"
                onClick={() => setShowAllVideos(!showAllVideos)}
              >
                {showAllVideos ? "Show Less" : "View More Videos"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* ---------- Lightbox / Modal ---------- */}
      {previewIndex !== null && (
        <div className="lightbox" onClick={closePreview}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closePreview}>
              &times;
            </button>

            <button className="nav-btn left" onClick={prevImage}>
              &#10094;
            </button>

            <img
              src={images[previewIndex]}
              className="lightbox-img"
              alt="Preview"
            />

            <button className="nav-btn right" onClick={nextImage}>
              &#10095;
            </button>

            <div className="lightbox-footer">
              <span className="counter">
                {previewIndex + 1} / {images.length}
              </span>
              <a href={images[previewIndex]} download className="download-link">
                Download High Res
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
