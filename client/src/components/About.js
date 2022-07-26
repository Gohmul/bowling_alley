import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Something about about</p>
      <h2>Bowling Specials!</h2>
      <p>Something about specials</p>
      <nav className="specials">
        <Link to="/specials">SnackBar Specials</Link>
      </nav>
      <h3>Pro Shop</h3>
      <p>Something about the proshop</p>
      <nav className="=proshop">
        <Link to="/proshop">Order a Ball</Link>
      </nav>
    </div>
  );
};

export default About;
