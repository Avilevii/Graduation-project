import "../../compsCss/slogan.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Slogan() {
  return (
    <div className="slogan-container">
      <h1>Linkodkod</h1>
      <Link to="/">HOME</Link>
      <Logo />
    </div>
  );
}
