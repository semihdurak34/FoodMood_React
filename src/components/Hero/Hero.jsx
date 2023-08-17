import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-slogan">
        <span>Find The Best Food🔥</span>
        <h2>Always HOT </h2>
        <a href="/">Discover Now</a>
      </div>
      <div className="hero-image-container">
        <img src="/images/hero-image.jpg" alt="" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
