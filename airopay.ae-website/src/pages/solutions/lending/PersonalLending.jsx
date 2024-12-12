import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { rethinkingTextbox } from "../../../assets/images/solutions/lending/rethinking";
import { CardTemplate } from "../../../layouts";
import { StyleOne, StyleFour } from "../../../components/card";
import { Line } from "../../../components/ui";
import { cardContent } from "../../../db/solutions/businessLending";
import { firstCard } from "../../../db/solutions/personalLending";

const PersonalLending = () => {
  return (
    <Page
      actionTitle={`Are you prepared to begin?`}
      first={`Personal`}
      second={`lending`}
    >
      <TextBox
        content="More options and convenience are what customers are want from their lenders. Our composable approach and cloud-native lending engine enable the flexible lending solutions that will win over clients and give you a competitive edge.."
        img={rethinkingTextbox}
        btnText={`contact us`}
      />

      <CardTemplate three={true} title="Be creative. Setup and Integrate">
        {firstCard.map((note, index) => {
          return (
            <StyleOne
              titleSize={true}
              height={true}
              key={index}
              title={note.title}
              desc={note.desc}
              img={note.img}
            />
          );
        })}
      </CardTemplate>
      <Line />
      <CardTemplate title="Utilize pre-built product combinations to innovate.">
        {cardContent.map((note, index) => {
          return <StyleFour key={index} title={note.title} list={note.list} />;
        })}
      </CardTemplate>
    </Page>
  );
};
export default PersonalLending;
