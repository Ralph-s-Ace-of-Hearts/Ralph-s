const HomepageVideo = () => (
  <video
    src="/videos/stockBarVid1.mp4" // Place your video in the public/videos folder
    autoPlay
    loop
    muted
    playsInline
    style={{
      width: "100%",
      maxHeight: "400px",
      objectFit: "cover",
      borderRadius: "12px",
      display: "block",
      margin: "0 auto"
    }}
  />
);

export default HomepageVideo;

