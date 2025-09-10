import "../../compsCss/slogan.css";
import Logo from "./Logo";
import NavLinkes from "./NavLinkes";
// import { Link } from "react-router-dom";

export default function Slogan() {
  return (
    <div className="slogan-container">
      <h1>Linkodkod</h1>
      <NavLinkes/>
      {/* <Link to="/">HOME</Link>
      <Link to="getPostById">getPost</Link> */}
      <Logo />
    </div>
  );
}
