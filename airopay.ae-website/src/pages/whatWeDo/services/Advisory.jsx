import { HeaderBody } from "../../../components/text";
import { Template as Page } from "../../../components/pageTemplate";
import { Line } from "../../../components/ui";
import { CardTemplate } from "../../../layouts";
import { StyleThree } from "../../../components/card";
import { cardInfoAdvisory } from "../../../db/whatWeDo/advisory";

const Advisory = () => {
  return (
    <Page first="Advisory">
      <HeaderBody
        title={`With the goal to help`}
        desc={`You can confidently navigate your future with the aid of Airopay Advisory. After working with hundreds of clients and partners worldwide for more than ten years, we present to you our distinct viewpoint and experience. We may assist you with creating a proposal to reach new client groups, creating digital product road maps, getting ready for launch, or finding methods to streamline your technology stack.`}
      />
      <HeaderBody
        title={`How does it function?`}
        desc={`As seasoned consultants from elite firms, we provide substantial expertise in banking and financial services. We can collaborate with you on longer-term projects or shorter sprints, depending on what suits you best. In addition, you will have access to a wealth of knowledge from our CTO, engineers, product owners, solution architects, dev ops, compliance, and even marketing specialists. From idea to completion, success is guaranteed by Airopay's open and collaborative internal structure.`}
      />

      <Line dis={true} />

      <CardTemplate position={true} blur={true} title="Examples of our work">
        {cardInfoAdvisory.map((note, index) => {
          return (
            <StyleThree key={index} title={note.title} content={note.desc} />
          );
        })}
      </CardTemplate>
    </Page>
  );
};
export default Advisory;
