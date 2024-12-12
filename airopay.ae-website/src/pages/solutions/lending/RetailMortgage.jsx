import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { rethinkingTextbox } from "../../../assets/images/solutions/lending/rethinking";
import { CardTemplate } from "../../../layouts";
import { StyleOne, StyleFour } from "../../../components/card";
import { Line } from "../../../components/ui";
import { cardContent } from "../../../db/solutions/businessLending";
import { firstCard } from "../../../db/solutions/retailMortgage";

const RetailMortgage = () => {
  return (
    <Page
      actionTitle={`Are you prepared to begin?`}
      first={`Retail`}
      second={`mortgages`}
    >
      <TextBox
        content="Customers anticipate quick, easy, and customized mortgage options that meet their objectives and financial circumstances. You need an agile and adaptable lending solution that will help you launch products rapidly, provide excellent customer service, and adjust to new opportunities if you want to compete in this industry."
        img={rethinkingTextbox}
        btnText={`contact us`}
      />

      <CardTemplate
        three={true}
        title="Invest. restructure the loan. Distinguish."
      >
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
export default RetailMortgage;
