import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { rethinkingTextbox } from "../../../assets/images/solutions/lending/rethinking";
import { CardTemplate } from "../../../layouts";
import { firstCard } from "../../../db/solutions/businessLending";
import { StyleOne, StyleFour } from "../../../components/card";
import { Line } from "../../../components/ui";
import { cardContent } from "../../../db/solutions/businessLending";

const BusinessLending = () => {
  return (
    <Page
      actionTitle={`Are you prepared to begin?`}
      first={`Lending to`}
      second={`businesses`}
    >
      <TextBox
        content="Whether you provide loans to assist expansion and growth or loans to start new activities, Airopay gives you the ability to create fully customizable business lending products that are suited to the particular requirements of small and medium-sized businesses and commercial organizations."
        img={rethinkingTextbox}
        btnText={`contact us`}
      />

      <CardTemplate three={true} title="Set up, Connect, Expand.">
        {firstCard.map((note, index) => {
          return (
            <StyleOne
              moreInfo={true}
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
      <CardTemplate
        position={true}
        title="Utilize pre-built product combinations to innovate."
      >
        {cardContent.map((content, index) => {
          return (
            <StyleFour key={index} title={content.title} list={content.list} />
          );
        })}
      </CardTemplate>
    </Page>
  );
};
export default BusinessLending;
