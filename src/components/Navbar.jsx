import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { links } from "../data";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef();
  const linksRef = useRef();
  const { myBasket } = useAppContext();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-icon">
          <h1>PRODUCTS APP</h1>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          style={{
            height: showLinks
              ? `${linksRef?.current?.getBoundingClientRect().height}px`
              : "0px",
          }}
          className="links-container"
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink to={link.url}>{link.text}</NavLink>
                </li>
              );
            })}
            <li className="basket">
              <NavLink
                to="mybasket"
                style={{ fontSize: "24px", color: "var(--primary-500)" }}
              >
                <SlBasket />
                <span>{myBasket.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
