import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { rethinkingTextbox } from "../../../assets/images/solutions/lending/rethinking";
import { CardTemplate } from "../../../layouts";
import { StyleOne, StyleFour } from "../../../components/card";
import { Line } from "../../../components/ui";

import { firstCard, cardContent } from "../../../db/solutions/personalbanking";

const PersonalBanking = () => {
  return (
    <Page
      actionTitle={`Are you prepared to begin?`}
      first={`Personal banking and`}
      second={`Deposits`}
    >
      <TextBox
        content="The retail banking sector is changing dramatically. The underbanked population's increasing financial needs and the population's growing digital literacy have led to increased demands for convenient and customized goods and services.  Your ability to create and deliver ground-breaking personal banking experiences with unparalleled speed, scale, and agility is what makes Airopay a competitive edge."
        img={rethinkingTextbox}
        btnText={`contact us`}
      />

      <CardTemplate three={true} title="Be creative. Setup and Integrate">
        {firstCard.map((note, index) => {
          return (
            <StyleOne
              titleSize={`"sm:text-[.7rem] md:text-[.9rem]"`}
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
export default PersonalBanking;
