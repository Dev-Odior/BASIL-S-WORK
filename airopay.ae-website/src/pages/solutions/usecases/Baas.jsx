import { Template as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { rethinkingTextbox } from "../../../assets/images/solutions/lending/rethinking";
import { CardTemplate } from "../../../layouts";
import { cardBaas } from "../../../db/solutions/baas";
import { StyleOne } from "../../../components/card";

const Baas = () => {
  return (
    <Page
      actionTitle={`Are you prepared to begin?`}
      first={`Banking as a`}
      second={`service`}
    >
      <TextBox
        content="The rise of Banking-as-a-Service (BaaS), in which regulated banks rent out their infrastructure and functionalities to outside parties, has been spurred by the adoption of more customer-focused service models. Combining Airopay's cloud-native banking platform with BaaS providers allows them to provide these services. We promote speed and scalability by hosting on our reliable, expandable, and secure infrastructure."
        img={rethinkingTextbox}
        btnText={`contact us`}
      />

      <CardTemplate
        three={true}
        title={`The essential BaaS features of Airopay`}
      >
        {cardBaas.map((note, index) => {
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
export default Baas;
