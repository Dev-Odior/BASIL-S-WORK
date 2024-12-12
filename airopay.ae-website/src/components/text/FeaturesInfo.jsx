import { featuresInfo } from "../../assets/images/home";

const FeaturesInfo = ({ img, title, desc }) => {
  const template = {
    img: featuresInfo,
  };
  return (
    <div className="md:hidden mb-3">
      <img src={template.img} alt="" className="mx-auto mb-5 h-72" />
      <h1 className="font-bold my-2 text-[17px] text-center ">{title}</h1>
      <p className="text-center p-[10px] text-grayish-text px-3 w-[96%]">
        {desc}
      </p>
    </div>
  );
};
export default FeaturesInfo;
