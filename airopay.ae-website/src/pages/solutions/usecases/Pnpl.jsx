import { Template as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { rethinkingTextbox } from "../../../assets/images/solutions/lending/rethinking";
import { CardTemplate } from "../../../layouts";
import { firstCard } from "../../../db/solutions/pnpl";
import { StyleOne } from "../../../components/card";

const Pnpl = () => {
  return (
    <Page
      actionTitle={`Are you prepared to begin?`}
      first={`Purchase now`}
      second={`pay later`}
    >
      <TextBox
        content="BNPL (Buy Now Pay Later) is growing at an exponential rate. By 2030, the global BNPL industry is expected to grow from its 2020 projection of USD 90.69 billion to USD 3.98 trillion (€3.5 trillion). With adaptable BNPL choices from Airopay, you can empower your business."
        img={rethinkingTextbox}
        btnText={`contact us`}
      />

      <CardTemplate three={true} title="The essential BaaS features of Airopay">
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
    </Page>
  );
};
export default Pnpl;
