import styled from "styled-components"
import Wrapper from "../assets/wrappers/LandingPage.js"
import main from '../assets/images/main.svg'
import { Link } from "react-router-dom"
import { Logo } from "../components/index.js"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job<span>tracking</span></h1>
          <p>
          I'm baby big mood messenger bag la croix listicle marxism pabst vice. Hexagon four loko tbh distillery, pop-up pork belly sartorial humblebrag neutral milk hotel hoodie 90's etsy cold-pressed. Kogi 8-bit tofu meditation distillery, glossier typewriter live-edge raw denim before they sold out kale chips flexitarian occupy. Hella mixtape mustache williamsburg. Swag schlitz letterpress vexillologist fam. Gatekeep 90's farm-to-table, health goth shaman bruh chambray Brooklyn mixtape shabby chic hashtag meh bodega boys.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
      
  )
}

export default Landing