import { Template as Page } from "../../../components/pageTemplate";
import {
  BodyText,
  ListedDescription,
  SubHeader,
} from "../../../components/text";

import { Line } from "../../../components/ui";
import { CardTemplate } from "../../../layouts";

import { cardInfoSecurity, information } from "../../../db/whatWeDo/security";
import { StyleThree } from "../../../components/card";

const Security = () => {
  return (
    <Page first="Security and" second="compliance">
      <BodyText>
        Meeting the strictest requirements for financial security is what the
        Airopay platform does. Additionally, an external certification
        organization has confirmed that it complies with the most crucial
        industrial standards.
      </BodyText>

      <div>
        <SubHeader className={`mb-5`} text={`This is the method we use`} />
        <ListedDescription list={information} />
      </div>

      <Line dis={true} />

      <CardTemplate
        blur={true}
        position={true}
        title="Now let's take responsibility for this."
      >
        {cardInfoSecurity.map((note, index) => {
          return (
            <StyleThree key={index} title={note.title} content={note.desc} />
          );
        })}
      </CardTemplate>
    </Page>
  );
};
export default Security;
