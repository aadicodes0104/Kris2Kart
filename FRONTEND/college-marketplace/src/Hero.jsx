import heroImage from "./assets/hero-image.jpeg"
import "./Hero.css"
function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>Kris2Kart</h1>

        <p className="hero-subtitle">
          The Marketplace for Kristu Students
        </p>

        <p className="hero-description">
          Buy • Sell • Save Money on Campus Essentials
        </p>

        <button
  className="hero-btn"
  onClick={() => {
    document
      .getElementById("marketplace")
      .scrollIntoView({ behavior: "smooth" })
  }}
>
  Explore Marketplace
</button>

      </div>

      <div className="hero-right">

        <div className="hero-image">
    <img
        src={heroImage}
        alt="Kris2Kart Hero"
    />
</div>

      </div>

    </section>
  )
}

export default Hero






