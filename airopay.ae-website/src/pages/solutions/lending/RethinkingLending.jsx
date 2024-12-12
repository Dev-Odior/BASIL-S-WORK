import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { rethinkingTextbox } from "../../../assets/images/solutions/lending/rethinking";
import { CardTemplate } from "../../../layouts";
import { firstCard, secondCard } from "../../../db/solutions/rethinking";
import { StyleOne, StyleTwo } from "../../../components/card";
import { Line } from "../../../components/ui";

const RethinkingLending = () => {
  return (
    <Page first={`Rethinking`} second={`Lending`}>
      <TextBox
        content="An API-driven platform for banking and financial services, Airopay is cloud-native and SaaS based. It is intended to spur financial innovation, accelerate the time to market for solutions, lower barriers to entry, and facilitate the growth of ecosystems."
        img={rethinkingTextbox}
        btnText={`contact us`}
      />

      <CardTemplate three={true} title="Create, Link, and Launch.">
        {firstCard.map((note, index) => {
          return (
            <StyleOne
              three={true}
              titleSize={true}
              height={`h-30`}
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
        three={true}
        title="Create, Link, and Launch."
      >
        {secondCard.map((note, index) => {
          return <StyleTwo key={index} title={note.title} desc={note.desc} />;
        })}
      </CardTemplate>
    </Page>
  );
};
export default RethinkingLending;
