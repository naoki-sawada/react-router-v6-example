import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/Auth";

export default function RequireAuth(): JSX.Element {
  const { currentUser } = useContext(AuthContext);

  if (currentUser === undefined) return <Loading />;

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}
