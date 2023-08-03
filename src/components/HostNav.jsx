import { NavLink } from "react-router-dom";
const NavBar = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red",
  };
  return (
    <nav className="sm:max-w-sm flex gap-2 bg-slate-800 text-white">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        end
        className="px-2 py-1 hover:bg-slate-900"
        to={"/host"}
      >
        Dashboard
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        className="px-2 py-1 hover:bg-slate-900"
        to={"/host/income"}
      >
        Imcome
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        className="px-2 py-1 hover:bg-slate-900"
        to={"/host/reviews"}
      >
        Reviews
      </NavLink>
    </nav>
  );
};

export default NavBar;
