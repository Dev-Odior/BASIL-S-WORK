import { hamburger } from "../../assets/icons";

const Hamburger = ({ className }) => {
  return (
    <button
      className={`${className ? className : ""} outline-none border-none`}
    >
      <img src={hamburger} alt="" />
    </button>
  );
};
export default Hamburger;
