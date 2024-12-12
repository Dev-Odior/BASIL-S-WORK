import { logo } from "../assets/images/home";
import { Button } from "../components/button";
import Container from "./Container";
import Hamburger from "../components/button/Hanburger";
import { useSelector, useDispatch } from "react-redux";
import { NavModal } from "../components/modals";
import { populateNavLInks } from "../state/nav/navReducer";
import { toggleModal, toggleSidebar } from "../state/modals/modalsReducer";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nav } = useSelector((store) => store.nav);
  const { openNavModal } = useSelector((store) => store.modals);

  const onClickHandler = (title) => {
    dispatch(toggleModal());
    dispatch(populateNavLInks(title));
  };

  return (
    <header className="flex py-2 glass fixed top-3 z-40 w-full">
      <Container>
        <div className="flex items-center justify-between ">
          <div className="flex w-2/3 overflow-visible relative ">
            <AnimatePresence> {openNavModal && <NavModal />}</AnimatePresence>
            <img
              src={logo}
              alt=""
              className="h-10 md:h-[50px] mr-10 -ml-2"
              onClick={() => navigate("/")}
            />
            <div className="relative flex-1">
              <ul
                className={`
                hidden
                mt-[18px]
                lg:flex
                text-[10px]
                uppercase
                gap-[50px]
              text-grayish-text
                font-extrabold
                font-helvetica
                self-end 
                `}
              >
                {nav.map((link, index) => {
                  if (!link.mobile) {
                    return (
                      <li
                        onClick={() => onClickHandler(link.title)}
                        className={`relative ${
                          link.active ? "text-black font-extrabold" : ""
                        }
                      cursor-pointer
                      `}
                        key={index}
                      >
                        {link?.title}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>

          <Button name="contact us" className={`hidden md:flex`} />
          <Hamburger
            className="lg:hidden mr-3"
            onClickHandler={() => dispatch(toggleSidebar())}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
