import { slideArrow, slideArrowDark } from "../../assets/icons";

const LeftBtn = ({ color, padding, angle, size, dark }) => {
  // console.log(dark);
  return (
    <div
      className={` ${padding ? padding : "p-4"} ${
        color ? color : "border-customWhite-twenty"
      } ${size ? size : ""} rounded-full border grid place-items-center`}
    >
      <img
        src={dark ? slideArrowDark : slideArrow}
        alt="arrow"
        className={`${angle === "left" ? "rotate-180" : ""}`}
      />
    </div>
  );
};
export default LeftBtn;
