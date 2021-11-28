import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
