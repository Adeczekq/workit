import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="./assets/images/logo-light.svg" alt="logo"></img>
        </div>
        <div className="apply"> Apply for access</div>
      </div>
      <div className="hero ">
        <img
          className="bg-pattern1"
          src="./assets/images/bg-pattern-1.svg"
          alt="pattern"
        ></img>
        <img
          className="bg-pattern2"
          src="./assets/images/bg-pattern-2.svg"
          alt="pattern"
        ></img>
        <div className="title">
          Data <span className="tail">tailored</span> to your needs
        </div>
        <button className="button-learn">Learn more</button>
        <div className="phone">
          <img src="./assets/images/image-hero.webp" alt="hero-phone"></img>
        </div>
      </div>
      <img
        className="border"
        src="./assets/images/svgborder.svg"
        alt="hero border"
      ></img>

      <div className="second-section">
        <div className="second-items">
          <div className="circle">1</div>
          <div className="second-title">Actionable inshigts</div>
          <p>
            Optimize your products, improve customer satisfaction and stay ahead
            of the competition with our product data analytics.
          </p>
        </div>
        <div className="second-items">
          <div className="circle">2</div>
          <div className="second-title">Data-driven decisions</div>
          <p>
            Make data-driven decisions with our product data analytics. Our
            AI-generated reports help you unlock insights hidden in your product
            data.
          </p>
        </div>
        <div className="second-items">
          <div className="circle">3</div>
          <div className="second-title">Always affordable</div>
          <p>
            Always affordable pricing that scales with your business. Get
            top-quality product data analytics services without hidden costs or
            unexpected fees.
          </p>
        </div>
      </div>
      <img
        className="border-second"
        src="./assets/images/svgborder-second.svg"
        alt="second border"
      ></img>

      <div className="third-section">
        <div className="avatar-con">
          <img
            className="avatar-img"
            src="./assets/images/image-founder.webp"
            alt="avatar"
          ></img>
        </div>
        <div className="third-text">
          <p>Be the first to test</p>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
          <button className="button-learn margin-top">Apply for access</button>
          <img
            className="bg-pattern3"
            src="./assets/images/bg-pattern-3.svg"
            alt="pattern"
          ></img>
        </div>
      </div>
      <div className="footer">
        <div className="footer-logo">
          {" "}
          <img src="./assets/images/logo-dark.svg" alt="logo"></img>
        </div>
        <div className="socials">
          <img src="./assets/images/icon-facebook.svg" alt="fb"></img>
          <img src="./assets/images/icon-twitter.svg" alt="twitter"></img>
          <img src="./assets/images/icon-instagram.svg" alt="instagram"></img>
        </div>
      </div>
    </>
  );
}

export default App;
