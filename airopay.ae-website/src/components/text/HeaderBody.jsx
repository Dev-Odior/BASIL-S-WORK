import SubHeader from "./SubHeader";
import BodyText from "./BodyText";

const HeaderBody = ({ title, desc }) => {
  return (
    <>
      {title && <SubHeader text={title} />}
      <BodyText>{desc}</BodyText>
    </>
  );
};
export default HeaderBody;
