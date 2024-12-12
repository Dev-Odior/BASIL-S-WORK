import { Button } from "../../components/button";
import { BodyText, CardHeader } from "../../components/text";
import { homeServices } from "../../db/services/services";

import { Container } from "../../layouts";

const ServiceMain = () => {
  return (
    <Container className="">
      {homeServices.map((each, index) => {
        return (
          <div
            className="mx-auto w-full md:w-[70%] p-2 md:p-5 grid  grid-cols-1 md:grid-cols-2 gap-10 mb-10 shadow-md"
            key={index}
          >
            <img
              src={each.largeImg}
              loading="lazy"
              className="h-[18rem]"
              alt=""
            />
            <div>
              <CardHeader cardTitle={each.title} />
              <BodyText>{each.desc}</BodyText>
              <Button name={`learn more`} route={`/services/${each.id}`} />
            </div>
          </div>
        );
      })}
    </Container>
  );
};
export default ServiceMain;
