import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { rethinkingTextbox } from "../../../assets/images/solutions/lending/rethinking";
import { CardTemplate } from "../../../layouts";
import { StyleOne, StyleFour } from "../../../components/card";
import { Line } from "../../../components/ui";
import { cardContent } from "../../../db/solutions/businessBanking";

import { firstCard } from "../../../db/solutions/businessBanking";

const BusinessBanking = () => {
  return (
    <Page
      actionTitle={`Are you prepared to begin?`}
      first={`Business banking &`}
      second={`Deposits`}
    >
      <TextBox
        content="Customers aren't the only ones looking to improve their banking experience. Additionally, your business clients are using online platforms and making the shift to digital. With Airopay, you have access to cutting-edge technology that will enable you to create and introduce completely customizable business banking and deposit solutions that are suited to changing merchant requirements."
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
        {cardContent.map((content, index) => {
          return (
            <StyleFour key={index} title={content.title} list={content.list} />
          );
        })}
      </CardTemplate>
    </Page>
  );
};
export default BusinessBanking;
