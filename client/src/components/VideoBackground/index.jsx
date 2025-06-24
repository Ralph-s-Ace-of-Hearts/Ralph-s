const VideoBackground = () => (
  <div style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
    <video
      src="/videos/aceOfHearts.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "125%",
        height: "100vh",
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  </div>
);

export default VideoBackground;