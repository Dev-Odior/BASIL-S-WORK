import { logo } from "../assets/images";
import { Link } from "react-router-dom";
import { navLinks } from "../db/navLinks";
import Container from "./Container";
import { Button } from "../components/button";
import Hamburger from "../components/button/Hanburger";

const Header = () => {
  return (
    <header className="flex border py-5 glass fixed z-50 w-full">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src={logo} alt="" className="h-12" />
            <ul className="hidden lg:flex text-[12px] uppercase gap-7 text-customGray-forty font-bold font-helvetica">
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link?.route}>{link?.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button name="contact us" hidden={true} />
          <Hamburger className="lg:hidden" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
