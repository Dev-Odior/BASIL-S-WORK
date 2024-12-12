// import { btnArrow } from "../../assets/icons";

const Button = ({ name, light, hidden }) => {
  return (
    <button
      className={`rounded-3xl font-roboto text-[11px] uppercase outline-none border  py-2 px-7 lg:flex gap-2 items-center ${
        light ? "border-white" : "border-black"
      }
      ${hidden ? "hidden" : ""}
      `}
    >
      <span className={`${light ? "text-white" : ""}`}>{name}</span>
      <svg
        width="10"
        height="4"
        viewBox="0 0 10 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={light ? light : ""}
      >
        <path
          d="M7.24695 3.075C7.37695 2.79767 7.50262 2.555 7.62395 2.347C7.75395 2.139 7.87962 1.96567 8.00095 1.827H0.421951V1.281H8.00095C7.87962 1.13367 7.75395 0.956 7.62395 0.748C7.50262 0.54 7.37695 0.301666 7.24695 0.0329997H7.70195C8.24795 0.665667 8.81995 1.13367 9.41795 1.437V1.671C8.81995 1.96567 8.24795 2.43367 7.70195 3.075H7.24695Z"
          fill={light ? "white" : "#212121"}
        />
      </svg>
    </button>
  );
};
export default Button;
