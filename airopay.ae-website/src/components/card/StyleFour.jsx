import { CardHeader } from "../text";
import CardWrapper from "./CardWrapper";

const StyleFour = ({ list, title, position }) => {
  return (
    <CardWrapper className="rounded-md py-10 px-7 md:px-8 text-left">
      <CardHeader position={position} cardTitle={title} className="text-left" />
      <ul
        className={`
        text-grayish-infoText 
        md:text-[12px] 
        lg:text-[13px]
        leading-7
        md:leading-8
        pl-5
        list-disc
        list-outside
        `}
      >
        {list.map((items, index) => {
          return (
            <li key={index} className="group-hover:text-whitish">
              {items}
            </li>
          );
        })}
      </ul>
    </CardWrapper>
  );
};
export default StyleFour;
