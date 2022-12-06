import "./Landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="hero"></div>
      <div className="description">
       <h2>The Best Place To Purchase What You Need!</h2>
       <p>Everything you want from the comfort of your home</p>
      </div>
      <div className="otherBlock">
        <p>
          Featured Items!
        </p>
        <div className="featuredItems">
          <div><Link to='/store'><img src={process.env.PUBLIC_URL + '/images/succulent.jpg'} /></Link></div>
          <div><Link to='/store'><img src={process.env.PUBLIC_URL + '/images/succulent.jpg'} /></Link></div>
          <div><Link to='/store'><img src={process.env.PUBLIC_URL + '/images/succulent.jpg'} /></Link></div>
        </div>
        <p>See All Products</p>
      </div>
    </div>
  );
};

export default Landing;
