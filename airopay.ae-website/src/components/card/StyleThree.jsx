import { CardHeader, CardText } from "../text";
import CardWrapper from "./CardWrapper";

const StyleThree = ({ title, content }) => {
  return (
    <CardWrapper className="px-12 pt-12 pb-10 text-center group ">
      <CardHeader className="mb-7" cardTitle={title} />
      <CardText font="font-inter" content={content} />
    </CardWrapper>
  );
};

export default StyleThree;
