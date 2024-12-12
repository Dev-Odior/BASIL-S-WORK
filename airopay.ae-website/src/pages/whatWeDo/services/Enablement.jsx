import { cardInfoEnablement } from "../../../db/whatWeDo/enablement";
import { BodyText } from "../../../components/text";
import { Template as Page } from "../../../components/pageTemplate";
import { Line } from "../../../components/ui";
import { CardTemplate } from "../../../layouts";
import { StyleThree } from "../../../components/card";

const Enablement = () => {
  return (
    <Page first="Enablement">
      <BodyText>
        As they walk you through configuring the Airopay platform and ecosystem,
        our customer success and enablement team will share best practices that
        they have learned from hundreds of implementations.
      </BodyText>
      <Line dis={true} />

      <CardTemplate
        position={"text-left"}
        title="Now let's take responsibility for this."
      >
        {cardInfoEnablement.map((note, index) => {
          return (
            <StyleThree key={index} title={note.title} content={note.desc} />
          );
        })}
      </CardTemplate>
    </Page>
  );
};
export default Enablement;
