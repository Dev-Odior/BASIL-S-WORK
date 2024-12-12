import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { HeaderBody, TextBox } from "../../../components/text";
import { rethinkingTextbox } from "../../../assets/images/solutions/lending/rethinking";
import { CardTemplate } from "../../../layouts";
import { StyleThree } from "../../../components/card";
import { Line } from "../../../components/ui";
import { firstCard } from "../../../db/solutions/deposit";

import { deposits } from "../../../assets/images/solutions/dailybanking/deposits";

const Deposits = () => {
  return (
    <Page actionTitle={`Are you prepared to begin?`} first={`Deposits`}>
      <TextBox
        content="Over 75% of people worldwide have a bank account through which they can make deposits, save money, pay bills, link a debit card, and receive money. By providing you with a dynamic deposit engine and a network of interconnected third-party suppliers, Airopay enables financial and non-financial institutions to create a range of deposit-based products and services to tap into this enormous market."
        img={rethinkingTextbox}
        btnText={`contact us`}
      />

      <HeaderBody
        title={`Easily update your transactional and deposit banking portfolio.`}
        desc={`With scalable, low-code/no-code product options, enter new markets. Use publicly accessible APIs and internal resources to test and iterate in order to lower development costs and integrate your whole deposit and transactional ecosystem.`}
      />

      <img src={deposits} alt="" className=" h-96 mx-auto" />

      <Line />

      <CardTemplate title="Utilize five product categories to customize solutions.">
        {firstCard.map((advantage, index) => {
          return (
            <StyleThree
              key={index}
              title={advantage.title}
              content={advantage.desc}
            />
          );
        })}
      </CardTemplate>
    </Page>
  );
};
export default Deposits;
