function Contact() {
    return (
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Have questions or ready to start your project? Let us know.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  