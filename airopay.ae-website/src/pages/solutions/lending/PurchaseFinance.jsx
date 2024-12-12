import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { rethinkingTextbox } from "../../../assets/images/solutions/lending/rethinking";
import { CardTemplate } from "../../../layouts";
import { StyleOne, StyleFour } from "../../../components/card";
import { Line } from "../../../components/ui";
import { cardContent } from "../../../db/solutions/businessLending";
import { firstCard } from "../../../db/solutions/purchaseFinance";

const PurchaseFinance = () => {
  return (
    <Page
      actionTitle={`Are you prepared to begin?`}
      first={`Purchase`}
      second={`finance`}
    >
      <TextBox
        content="Whether you want to provide Buy Now Pay Later options, revolving credit lines, or point-of-sale financing, Airopay gives you the resources you need to create and introduce completely customizable buy finance solutions that are catered to the particular requirements of your clients.."
        img={rethinkingTextbox}
        btnText={`contact us`}
      />

      <CardTemplate three={true} title="Set up, Connect, Expand.">
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
export default PurchaseFinance;
