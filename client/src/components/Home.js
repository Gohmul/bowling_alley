import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Welcome to Sauce Bowl!</h1>
      <p> Something about Sauce Bowl</p>
      <h2>Are you hungry?</h2>
      <nav>
        <Link to="/food">Snackbar Food</Link>
      </nav>
      <h3>Interested in joining a league?</h3>
      <nav>
        <Link to="/leagues">Join a league!</Link>
      </nav>
      <h3>Wanna throw a party?</h3>
      <nav>
        <Link to="/party">Party Info</Link>
      </nav>
    </div>
  );
};

export default Home;
