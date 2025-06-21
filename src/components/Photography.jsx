import React from "react";

const PortfolioPage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <img src="/logo.png" alt="Logo" style={styles.logo} />
          <p>Hi, This is Emad Captures—an accomplished photographer...</p>
        </div>
        <img src="/hero-image.jpg" alt="Camera" style={styles.heroImage} />
      </section>

      {/* About Us */}
      <section style={styles.about}>
        <img src="/about-image.jpg" alt="Photographer" style={styles.aboutImage} />
        <div style={styles.aboutText}>
          <h2 style={styles.heading}>About Us</h2>
          <p>My journey has taken me across the world...</p>
        </div>
      </section>

      {/* Photo Portfolio */}
      <section>
        <h2 style={styles.heading}>PHOTO PORTFOLIO</h2>
        <div style={styles.grid}>{renderImages("photo")}</div>
      </section>

      {/* Videography Portfolio */}
      <section>
        <h2 style={styles.heading}>VIDEOGRAPHY PORTFOLIO</h2>
        <div style={styles.grid}>{renderImages("video")}</div>
      </section>

      {/* Seamless Edit */}
      <section>
        <h2 style={styles.heading}>SEAMLESS EDIT</h2>
        <div style={styles.grid}>{renderImages("edit")}</div>
      </section>

      {/* Prints Section */}
      <section style={styles.prints}>
        <h2 style={styles.heading}>Prints</h2>
        <div style={styles.grid}>{renderImages("prints")}</div>
        <button style={styles.button}>Coming Soon</button>
      </section>

      {/* Experience & Photo Tours */}
      <section style={styles.experience}>
        <div style={styles.experienceText}>
          <h2>Experience</h2>
          <p>Where dreams become reality...</p>
          <button style={styles.button}>Book Now</button>
        </div>
        <img src="/experience.jpg" alt="Castle" style={styles.experienceImage} />
      </section>

      {/* Blog & Instagram */}
      <section>
        <h2 style={styles.heading}>Latest Blog</h2>
        <div style={styles.blogGrid}>{renderBlogs()}</div>
      </section>
    </div>
  );
};

const renderImages = (category) => {
  const images = {
    photo: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
    video: ["video1.jpg", "video2.jpg", "video3.jpg"],
    edit: ["edit1.jpg", "edit2.jpg", "edit3.jpg"],
    prints: ["print1.jpg", "print2.jpg", "print3.jpg"],
  };
  return images[category].map((img, index) => (
    <img key={index} src={`/${img}`} alt={category} style={styles.image} />
  ));
};

const renderBlogs = () => {
  return [
    { title: "Minimalist Photography", date: "Jan 21, 2025", img: "blog1.jpg" },
    { title: "Photography Tips", date: "Jan 21, 2025", img: "blog2.jpg" },
  ].map((blog, index) => (
    <div key={index} style={styles.blogCard}>
      <img src={`/${blog.img}`} alt={blog.title} style={styles.blogImage} />
      <h3>{blog.title}</h3>
      <p>{blog.date}</p>
    </div>
  ));
};

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif" },
  hero: { display: "flex", alignItems: "center", justifyContent: "space-between" },
  heroContent: { flex: 1, paddingRight: "20px" },
  heroImage: { width: "300px", borderRadius: "10px" },
  about: { display: "flex", marginTop: "40px" },
  aboutImage: { width: "40%", borderRadius: "10px" },
  aboutText: { paddingLeft: "20px" },
  heading: { fontSize: "24px", margin: "20px 0", textAlign: "center" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" },
  image: { width: "100%", borderRadius: "5px" },
  prints: { backgroundColor: "#f0f0f0", padding: "20px" },
  button: { marginTop: "10px", padding: "10px 20px", border: "none", backgroundColor: "#007bff", color: "white", cursor: "pointer" },
  experience: { display: "flex", alignItems: "center", marginTop: "40px" },
  experienceText: { flex: 1, paddingRight: "20px" },
  experienceImage: { width: "40%", borderRadius: "10px" },
  blogGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" },
  blogCard: { padding: "10px", textAlign: "center", border: "1px solid #ddd", borderRadius: "5px" },
  blogImage: { width: "100%", borderRadius: "5px" },
};

export default PortfolioPage;
