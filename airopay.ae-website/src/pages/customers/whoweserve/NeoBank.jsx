import { cardContent } from "../../../db/customers/whoweserve/neobanks";
import { StyleThree } from "../../../components/card";
import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { CardTemplate } from "../../../layouts";
import { composability } from "../../../assets/images/technology/composability";

const NeoBank = () => {
  return (
    <Page
      first="Airopay for"
      second="neobanks"
      actionBtnText="Contact us"
      actionTitle="Are you prepared to begin?"
    >
      <TextBox
        position={"yes"}
        hideBtn={true}
        content="With no legacy, neobanks have an envied advantage over established players. But is it sufficient to maintain your growth and agility?"
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
export default NeoBank;
