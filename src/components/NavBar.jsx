import { NavLink } from "react-router-dom";
const NavBar = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red",
  };

  return (
    <nav className="sm:max-w-sm mx-auto flex gap-2 bg-slate-800 text-white">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        className="px-2 py-1 hover:bg-slate-900"
        to={"/"}
      >
        Home
      </NavLink>

      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        className="px-2 py-1 hover:bg-slate-900"
        to={"/host"}
      >
        Host
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        className="px-2 py-1 hover:bg-slate-900"
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : null)}
        className="px-2 py-1 hover:bg-slate-900"
        to={"/van"}
      >
        Van
      </NavLink>
    </nav>
  );
};

export default NavBar;
