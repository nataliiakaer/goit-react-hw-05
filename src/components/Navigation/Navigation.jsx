import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = () => {
  const activeLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      <NavLink to="/" className={activeLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={activeLinkClass}>
        Movies
      </NavLink>
    </>
  );
};

export default Navigation;
