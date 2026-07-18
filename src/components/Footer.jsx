import { PROFILE } from "../data/profile.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {PROFILE.name}. Feito com React & vidro líquido.
      </p>
    </footer>
  );
}
