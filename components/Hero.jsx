function Hero() {
    return (
      <section id="hero">
        <h1>Welcome to Team Nadir Ali Khan</h1>
        <p>We specialize in Python, Blockchain, Trading Bots, and more.</p>
        <button onClick={() => window.location.replace('#contact')}>
          Contact Us
        </button>
      </section>
    );
  }
  
  export default Hero;
  