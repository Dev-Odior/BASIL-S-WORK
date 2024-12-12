import { cardContent } from "../../../db/customers/whoweserve/fintech";

import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { BodyText, HeaderBody, TextBox } from "../../../components/text";
import { CardTemplate } from "../../../layouts";
import { StyleOne } from "../../../components/card";
import { lenders } from "../../../assets/images/customers/whoweserve/lenders";

const Lenders = () => {
  return (
    <Page first="Airopay for" second="lenders" actionBtnText="Contact us">
      <BodyText>
        We are in the digital age of lending. Your clients anticipate being able
        to borrow items at the best possible price, when they need them, and
        when they need them.
      </BodyText>

      <TextBox
        title={`Make lending flexible and lean.`}
        content={`To stay ahead, whether you're a new lender or an established one, you'll need to put in more effort, improve, and react more quickly. Peer-to-peer networks, e-wallets, crowd funders, buy now, pay later companies, and traditional players are all included. Big tech and telcos are also participating.`}
        img={lenders}
        hideBtn={"yes"}
      />

      <HeaderBody
        title={`Our technology, your ideas.`}
        desc={`Simplify, streamline, and automate. Create an ecosystem of top-tier players to enhance your product and free up more funds for expansion and acquisition. The ideas are yours to bring. Plug-and-play environment and enabling platform are what we bring.`}
      />

      <CardTemplate
        three={true}
        title={`The essential BaaS features of Airopay`}
      >
        {cardContent.map((content, index) => {
          return (
            <StyleOne
              height={true}
              key={index}
              title={content.title}
              desc={content.desc}
              img={content.img}
            />
          );
        })}
      </CardTemplate>
    </Page>
  );
};
export default Lenders;
