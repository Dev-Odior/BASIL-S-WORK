import {
  aws,
  google,
  capgemini,
  pwc,
  deloitte,
} from "../../assets/images/clientsImg";

const images = [aws, google, capgemini, pwc, deloitte];

const ClientSlider = ({}) => {
  return (
    <div className="logo">
      <div className="logo__slide border bg-red-50">
        {images.map((client, index) => {
          return (
            <img
              key={index}
              src={client}
              alt=""
              className="h-10 p-1 inline mx-10"
            />
          );
        })}
      </div>
    </div>
  );
};
export default ClientSlider;
