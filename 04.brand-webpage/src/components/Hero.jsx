import "../stylesheets/heroSection.css";
const HeroSection = () => {
  return (
    <main className="hero">
      {/* hero content div */}
      <div className="hero-content">
        <h1 >YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        {/* hero buttons div */}
        <div className="mainbtn">
          <button className="shopbtn">Shop Now</button>
          <button className="catbtn">Category</button>
        </div>
        <p>Also Available On</p>
        {/* merchants logo div */}
        <div className="merchant">
            <img src="../assets/amazon.png" alt="" />
            <img src="../assets/flipkart.png" alt="" />
        </div>
      </div>
      {/* hero image div  */}
      <div className="hero_image">
        <img src="../assets/shoe_image.png" alt="" />
      </div>
    </main>
  );
};
export default HeroSection;
