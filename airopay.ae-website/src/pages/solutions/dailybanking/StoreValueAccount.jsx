import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { TextBox } from "../../../components/text";
import { rethinkingTextbox } from "../../../assets/images/solutions/lending/rethinking";
import { CardTemplate } from "../../../layouts";
import { StyleOne } from "../../../components/card";
import { firstCard } from "../../../db/solutions/storeValueAccount";

const StoreValueAccount = () => {
  return (
    <Page first={`Stored value`} second={`accounts`}>
      <TextBox
        content="The possibilities for growth in our increasingly cashless environment and the applications for stored value accounts are virtually limitless. With our cloud-based platform and deposit engine, Airopay facilitates businesses' seamless and proactive adoption of stored value account technology by offering solutions for stored value digital wallets and cards."
        img={rethinkingTextbox}
        btnText={`contact us`}
      />

      <CardTemplate
        gap={`gap-6`}
        three={true}
        title="Be creative. Setup and Integrate"
      >
        {firstCard.map((note, index) => {
          return (
            <StyleOne
              titleSize={`"sm:text-[.6rem] md:text-[.65rem]"`}
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
export default StoreValueAccount;
