import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";
import Nav from "./Nav";

export default function Layout() {
  const { signOut } = useContext(AuthContext);
  return (
    <div>
      <header>
        <button onClick={signOut}>Logout</button>
      </header>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
