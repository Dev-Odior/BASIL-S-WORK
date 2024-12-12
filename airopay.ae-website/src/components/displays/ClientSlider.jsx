import {
  aws,
  google,
  deloitte,
  pwc,
  capgemini,
  comply,
  globant,
  marqeta,
  ncino,
  nttdata,
  accenture,
} from "../../assets/images/clientsImg";

const images = [
  aws,
  google,
  deloitte,
  pwc,
  capgemini,
  comply,
  globant,
  marqeta,
  ncino,
  nttdata,
  accenture,
];

const ClientSlider = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden mt-[40px] md:mt-[50px] ">
      <div className="logo__slide flex justify-center items-center ">
        {images.map((client, index) => {
          return (
            <img
              key={index}
              src={client}
              alt=""
              className="scale-[50%] md:scale-[60%] -mx-8 "
            />
          );
        })}
      </div>
    </div>
  );
};
export default ClientSlider;
