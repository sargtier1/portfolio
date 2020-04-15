import ThemeContext from "../lib/context/theme";
import { Link } from "@zeit-ui/react";
import { X, Menu } from "react-feather";

export default function Header({ isSmall }) {
  const { themeType } = React.useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);

  function openNav(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function closeNav(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  return isSmall ? (
    <>
      <header>
        <div>brand | Small</div>
        <div>
          <Link style={{ zIndex: 15 }} pure block onClick={openNav}>
            {isOpen ? (
              <X size={40} color={themeType === "light" ? "black" : "white"} />
            ) : (
              <Menu
                size={40}
                color={themeType === "light" ? "black" : "white"}
              />
            )}
          </Link>
        </div>
      </header>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      `}</style>
      <Nav isOpen={isOpen} closeNav={closeNav} themeType={themeType} />
    </>
  ) : (
    <>
      <header>
        <div>brand | Big</div>
        links
      </header>
    </>
  );
}

function Nav({ isOpen, closeNav, themeType }) {
  return (
    <>
      <div onClick={closeNav} className="nav-wrapper">
        <nav>links go here</nav>
      </div>
      <style jsx>{`
        .nav-wrapper {
          height: 100%;
          min-width: 100%;
          position: fixed !important;
          z-index: 1;
          overflow: auto;
          margin-top: -40px;
        }
      `}</style>
      <style jsx>{`
        .nav-wrapper {
          display: ${isOpen ? "block" : "none"};
          background-color: ${themeType === "light"
            ? "#ffffffd0"
            : "#ffffffa0"};
        }
      `}</style>
    </>
  );
}
