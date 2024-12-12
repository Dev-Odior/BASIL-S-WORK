import { BodyText } from "../../../components/text";
import { Template as Page } from "../../../components/pageTemplate";
import { Line } from "../../../components/ui";
import { CardTemplate } from "../../../layouts";
import { StyleTwo } from "../../../components/card";
import { cardInfoDev } from "../../../db/whatWeDo/devs";

const Devs = () => {
  return (
    <Page first="Airopay for" second="developers">
      <BodyText>
        You may learn about our API, creating custom reports, using webhooks,
        creating apps in Airopay, and much more in our guide to developing with
        Airopay.
      </BodyText>
      <Line dis={true} />

      <CardTemplate position={true} three={true} title="Examples of our work">
        {cardInfoDev.map((note, index) => {
          return <StyleTwo key={index} title={note.title} desc={note.desc} />;
        })}
      </CardTemplate>
    </Page>
  );
};
export default Devs;
