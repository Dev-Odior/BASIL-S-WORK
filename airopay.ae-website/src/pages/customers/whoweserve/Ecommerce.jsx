import { cardContent } from "../../../db/customers/whoweserve/ecommerce";
import { StyleThree } from "../../../components/card";
import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { BodyText, HeaderBody } from "../../../components/text";
import { CardTemplate } from "../../../layouts";

const Ecommerce = () => {
  return (
    <Page
      first="Airopay for"
      second="eCommerce"
      actionBtnText="Contact us"
      actionTitle="Are you prepared to begin?"
    >
      <BodyText>
        Globe is connected by telcos. Additionally, astute operators are
        focusing on the market for mobile loans and banking. Use ubiquity to
        your advantage to gain more financial access and attract more clients.
      </BodyText>
      <HeaderBody
        title={`Smooth client experience`}
        desc={`Coordinating and launching end-to-end financial services, such as loans or cards and real-time payment, is simple with the correct platform. You can grab these opportunities with the aid of Airopay. You provide the concepts.`}
      />

      <CardTemplate>
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
export default Ecommerce;
