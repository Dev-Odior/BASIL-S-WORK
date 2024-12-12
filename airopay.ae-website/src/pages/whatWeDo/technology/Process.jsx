import { Template as Page } from "../../../components/pageTemplate";
import { BodyText, TextBox } from "../../../components/text";
import { information } from "../../../db/whatWeDo/process";
import {
  processOne,
  processTwo,
} from "../../../assets/images/technology/process";
import { Line } from "../../../components/ui";
import { CardTemplate } from "../../../layouts";
import { StyleFour } from "../../../components/card";
import { cardContent } from "../../../db/whatWeDo/process";

const Process = () => {
  return (
    <Page first="process" second="orchestration">
      <BodyText>
        Create a modular environment the way you want it. Select and expand
        service paths to guarantee smooth communication. Airopay connects the
        dots so you can quickly create excellent financial experiences and
        integrate services.
      </BodyText>
      <TextBox
        img={processOne}
        btnText="Explore"
        list={information}
        title="Quick access to the Airopay ecosystem"
      />
      <Line />

      <CardTemplate position={true} className={`mb-10`}>
        {cardContent.map((item, index) => {
          return <StyleFour key={index} title={item.title} list={item.list} />;
        })}
      </CardTemplate>

      <Line dis={true} />

      <TextBox
        img={processTwo}
        btnText={`Explore`}
        title="Maintain control"
        content={`With our modular strategy, financial services are expedited by the quick and adaptable assembly of stand-alone, optimally functional solutions. It offers business process management and API connections, which combine to provide it a competitive edge.`}
      />
    </Page>
  );
};
export default Process;
