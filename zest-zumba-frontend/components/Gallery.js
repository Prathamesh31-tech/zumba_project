import { useState, useEffect, useCallback, useRef } from "react";

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
  const [isViewMoreOpen, setIsViewMoreOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [reelIndex, setReelIndex] = useState(null);

  // --- Auto Scroll Setup (Images) ---
  const imageScrollRef = useRef(null);
  const [isImagePaused, setIsImagePaused] = useState(false);
  const scrollImages = galleryImages.slice(0, 10);

  // --- Auto Scroll Setup (Videos) ---
  const videoScrollRef = useRef(null);
  const [isVideoPaused, setIsVideoPaused] = useState(false);

  // Helper Function for Auto Scroll Logic
  const setupAutoScroll = (ref, isPaused, speed = 1) => {
    const scrollContainer = ref.current;
    if (!scrollContainer) return;

    let animationId;
    const scrollStep = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += speed;
        // Infinite Loop Logic
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth - 1
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  };

  // Effect: Image Scroll
  useEffect(() => {
    return setupAutoScroll(imageScrollRef, isImagePaused, 0.5);
  }, [isImagePaused]);

  // Effect: Video Scroll
  useEffect(() => {
    return setupAutoScroll(videoScrollRef, isVideoPaused, 0.5);
  }, [isVideoPaused]);

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

      {/* 2. IMAGE AUTO SCROLL */}
      <div
        className="zg-scroll-container"
        ref={imageScrollRef}
        onMouseEnter={() => setIsImagePaused(true)}
        onMouseLeave={() => setIsImagePaused(false)}
        onTouchStart={() => setIsImagePaused(true)}
        onTouchEnd={() => setIsImagePaused(false)}
      >
        <div className="zg-scroll-track">
          {scrollImages.map((img, idx) => (
            <div
              key={idx}
              className="zg-scroll-card"
              onClick={() => openLightbox(idx)}
            >
              <img src={img} alt="Gallery Scroll" loading="lazy" />
              <div className="zg-overlay">
                <span className="zg-icon">🔍</span>
              </div>
            </div>
          ))}
          {/* Duplicate for Loop */}
          {scrollImages.map((img, idx) => (
            <div
              key={`dup-${idx}`}
              className="zg-scroll-card"
              onClick={() => openLightbox(idx)}
            >
              <img src={img} alt="Gallery Scroll" loading="lazy" />
              <div className="zg-overlay">
                <span className="zg-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      {galleryImages.length > 0 && (
        <div className="zg-btn-wrapper">
          <button
            className="zg-view-btn"
            onClick={() => setIsViewMoreOpen(true)}
          >
            View All Photos
          </button>
        </div>
      )}

      {/* 3. VIDEO AUTO SCROLL (UPDATED) */}
      {reelVideos.length > 0 && (
        <div className="zg-reels-section" id="video-gallery">
          <h3 className="zg-reels-title">Watch Us Move ⚡</h3>

          {/* Video Scroll Container */}
          <div
            className="zg-video-scroll-container"
            ref={videoScrollRef}
            onMouseEnter={() => setIsVideoPaused(true)}
            onMouseLeave={() => setIsVideoPaused(false)}
            onTouchStart={() => setIsVideoPaused(true)}
            onTouchEnd={() => setIsVideoPaused(false)}
          >
            <div className="zg-scroll-track">
              {/* Original Videos */}
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
              {/* Duplicate Videos for Infinite Loop */}
              {reelVideos.map((vid, idx) => (
                <div
                  key={`dup-vid-${idx}`}
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
        </div>
      )}

      {/* ---------------- MODALS / POPUPS (UNCHANGED) ---------------- */}

      {/* A. "View More" Modal */}
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

      {/* B. Image Lightbox */}
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

      {/* C. Video Lightbox */}
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
