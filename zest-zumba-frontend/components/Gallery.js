import { useState, useEffect, useCallback } from "react";

export default function Gallery() {
  // Demo Data
  const galleryImages = [
    "/gallery/img1.png",
    "/gallery/img2.png",
    "/gallery/img3.png",
    "/gallery/img4.png",
    "/gallery/img5.png",
    "/gallery/img2.png",
    "/gallery/img1.png",
    "/gallery/img3.png",
    "/gallery/img5.png",
    "/gallery/img1.png",
    "/gallery/img2.png",
    "/gallery/img3.png",
    "/gallery/img4.png",
    "/gallery/img5.png",
    "/gallery/img2.png",
    "/gallery/img1.png",
    "/gallery/img3.png",
    "/gallery/img5.png",
    "/gallery/img1.png",
    "/gallery/img2.png",
    "/gallery/img3.png",
    "/gallery/img4.png",
    "/gallery/img5.png",
    "/gallery/img2.png",
    "/gallery/img1.png",
    "/gallery/img3.png",
    "/gallery/img5.png",
    "/gallery/img1.png",
    "/gallery/img3.png",
    "/gallery/img5.png",
  ];

  const reelVideos = [
    "https://res.cloudinary.com/dapveboee/video/upload/v1767861996/WhatsApp_Video_2026-01-08_at_13.52.29_uyyhdz_7ec563.mp4",
    "https://res.cloudinary.com/dapveboee/video/upload/v1767860930/koi_j7uvli.mp4",
    "https://res.cloudinary.com/dapveboee/video/upload/v1767860938/WhatsApp_Video_2026-01-08_at_13.53.09_bk0kql.mp4",
    "https://res.cloudinary.com/dapveboee/video/upload/v1767860936/WhatsApp_Video_2026-01-08_at_13.53.08_unajvi.mp4",
    "https://res.cloudinary.com/dapveboee/video/upload/v1767860932/WhatsApp_Video_2026-01-08_at_13.53.07_r54qlx.mp4",
    "https://res.cloudinary.com/dapveboee/video/upload/v1767860931/radhta_xqvajw.mp4",
    "https://res.cloudinary.com/dapveboee/video/upload/v1767860936/WhatsApp_Video_2026-01-08_at_13.53.08_unajvi.mp4",
    "https://res.cloudinary.com/dapveboee/video/upload/v1767860932/WhatsApp_Video_2026-01-08_at_13.53.07_r54qlx.mp4",
    "https://res.cloudinary.com/dapveboee/video/upload/v1767860931/radhta_xqvajw.mp4",
    "https://res.cloudinary.com/dapveboee/video/upload/v1767860936/WhatsApp_Video_2026-01-08_at_13.52.23_tyrxrh.mp4",
  ];

  // --- States ---
  const [isViewMoreOpen, setIsViewMoreOpen] = useState(false); // For All Images Grid
  const [lightboxIndex, setLightboxIndex] = useState(null); // For Single Image Fullscreen
  const [reelIndex, setReelIndex] = useState(null); // For Video Player

  // Main page shows only first 6 images
  const mainPageImages = galleryImages.slice(0, 4);

  // --- Handlers: Image Lightbox ---
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = useCallback(
    (e) => {
      e?.stopPropagation();
      setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
    },
    [galleryImages.length]
  );

  const prevImage = useCallback(
    (e) => {
      e?.stopPropagation();
      setLightboxIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    },
    [galleryImages.length]
  );

  // --- Handlers: Reels ---
  const openReel = (index) => setReelIndex(index);
  const closeReel = () => setReelIndex(null);

  const nextReel = useCallback(
    (e) => {
      e?.stopPropagation();
      setReelIndex((prev) => (prev + 1) % reelVideos.length);
    },
    [reelVideos.length]
  );

  const prevReel = useCallback(
    (e) => {
      e?.stopPropagation();
      setReelIndex((prev) => (prev === 0 ? reelVideos.length - 1 : prev - 1));
    },
    [reelVideos.length]
  );

  // --- Keyboard Events ---
  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
      if (reelIndex !== null) {
        if (e.key === "Escape") closeReel();
        if (e.key === "ArrowRight") nextReel();
        if (e.key === "ArrowLeft") prevReel();
      }
      if (isViewMoreOpen && lightboxIndex === null && reelIndex === null) {
        if (e.key === "Escape") setIsViewMoreOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [
    lightboxIndex,
    reelIndex,
    isViewMoreOpen,
    nextImage,
    prevImage,
    nextReel,
    prevReel,
  ]);

  return (
    <section className="zg-section" id="gallery">
      {/* 1. Header Area */}
      <div className="zg-header-wrapper">
        <span className="zg-tagline">Feel The Vibe</span>
        <h2 className="zg-title">
          Capture The <span className="zg-highlight">Energy</span>
        </h2>
        <p className="zg-subtitle">Every beat, every move, captured in time.</p>
      </div>

      {/* 2. Full Width Magazine Grid (Main Page) */}
      <div className="zg-full-width-container">
        <div className="zg-mosaic-grid">
          {mainPageImages.map((img, idx) => (
            <div
              key={idx}
              className={`zg-card zg-item-${idx}`}
              onClick={() => openLightbox(idx)}
            >
              <img src={img} alt="Gallery" loading="lazy" />
              <div className="zg-overlay">
                <span className="zg-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      {galleryImages.length > 4 && (
        <div className="zg-btn-wrapper">
          <button
            className="zg-view-btn"
            onClick={() => setIsViewMoreOpen(true)}
          >
            View All Photos
          </button>
        </div>
      )}

      {/* 3. Reels Section (Horizontal Scroll) */}
      {reelVideos.length > 0 && (
        <div className="zg-reels-section">
          <h3 className="zg-reels-title">Watch Us Move ⚡</h3>
          <div className="zg-reels-container">
            {reelVideos.map((vid, idx) => (
              <div
                key={idx}
                className="zg-reel-card"
                onClick={() => openReel(idx)}
              >
                <video muted playsInline className="zg-reel-thumb">
                  <source src={`${vid}#t=0.1`} type="video/mp4" />
                </video>
                <div className="zg-play-icon">▶</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- MODALS / POPUPS ---------------- */}

      {/* A. "View More" Full Screen Grid Modal */}
      {isViewMoreOpen && (
        <div className="zg-modal-grid-overlay">
          <div className="zg-modal-header">
            <h3 className="about-title">All Memories</h3>
            <button
              className="zg-close-grid-btn"
              onClick={() => setIsViewMoreOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="zg-modal-scroll-area">
            <div className="zg-all-images-grid">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="zg-grid-item"
                  onClick={() => openLightbox(idx)}
                >
                  <img src={img} alt={`Gallery ${idx}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* B. Single Image Lightbox (Fullscreen Slider) */}
      {lightboxIndex !== null && (
        <div className="zg-lightbox">
          <button className="zg-lb-close" onClick={closeLightbox}>
            ✕
          </button>
          <button className="zg-lb-nav left" onClick={prevImage}>
            ❮
          </button>

          <div className="zg-lb-content">
            <img src={galleryImages[lightboxIndex]} alt="Full View" />
          </div>

          <button className="zg-lb-nav right" onClick={nextImage}>
            ❯
          </button>
          <div className="zg-lb-counter">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* C. Video Player Lightbox */}
      {reelIndex !== null && (
        <div className="zg-lightbox zg-video-mode">
          <button className="zg-lb-close" onClick={closeReel}>
            ✕
          </button>
          <button className="zg-lb-nav left" onClick={prevReel}>
            ❮
          </button>

          <div className="zg-lb-video-wrapper">
            <video
              controls
              autoPlay
              playsInline
              className="zg-fullscreen-video"
              key={reelIndex}
            >
              <source src={reelVideos[reelIndex]} type="video/mp4" />
            </video>
          </div>

          <button className="zg-lb-nav right" onClick={nextReel}>
            ❯
          </button>
        </div>
      )}
    </section>
  );
}
