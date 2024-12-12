import { cardContent } from "../../../db/customers/whoweserve/telcons";
import { StyleThree } from "../../../components/card";
import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { BodyText, HeaderBody } from "../../../components/text";
import { CardTemplate } from "../../../layouts";

const Telcons = () => {
  return (
    <Page
      first="Airopay for"
      second="telcos"
      actionBtnText="Contact us"
      actionTitle="Are you prepared to begin?"
    >
      <BodyText>
        Globe is connected by telcos. Additionally, astute operators are
        focusing on the market for mobile loans and banking. Use ubiquity to
        your advantage to gain more financial access and attract more clients.
      </BodyText>
      <HeaderBody
        title={`Reaching out to new markets`}
        desc={`We can assist you in launching user apps, expanding your portfolio, or creating new, lucrative revenue streams. Develop an ecosystem mentality to create collaborations that are among the finest. Additionally, real-time app deployment skills are needed to develop "experiences" that will help airplay attract and keep new client segments.`}
      />

      <CardTemplate title="The fundamentals of compatibility">
        {cardContent.map((content, index) => {
          return (
            <StyleThree
              key={index}
              content={content.desc}
              title={content.title}
            />
          );
        })}
      </CardTemplate>
    </Page>
  );
};
export default Telcons;
