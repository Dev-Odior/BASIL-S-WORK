import { cardContent } from "../../../db/customers/whoweserve/banks";
import { StyleThree } from "../../../components/card";
import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { CardTemplate } from "../../../layouts";
import { composability } from "../../../assets/images/technology/composability";

const Banks = () => {
  return (
    <Page
      first="Airopay for"
      second="banks"
      actionBtnText="Contact us"
      actionTitle="Are you prepared to begin?"
    >
      <TextBox
        content="As an established bank, these are difficult times. Challengers who are agile and less entrenched than you are trying to take your place in the client relationship. Although having a strong brand is still advantageous, younger, digitally native consumers now prioritize convenience, choice, and speed over all other factors."
        btnText="contact us"
        img={composability}
      />

      <CardTemplate position={true} title="The fundamentals of compatibility">
        {cardContent.map((note, index) => {
          return <StyleThree key={index} content={note.desc} />;
        })}
      </CardTemplate>
    </Page>
  );
};
export default Banks;
