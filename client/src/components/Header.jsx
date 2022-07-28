import { Link } from "react-router-dom"

const Header = () => {

  return (
    <header>
      <nav>
        <Link to='/' className="home">Home</Link>
        <br/>
        <Link to='/about'className="about" >About</Link>
      </nav>
    </header>
  )
}

export default Header