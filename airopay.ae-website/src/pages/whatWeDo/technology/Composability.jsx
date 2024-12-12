import { StyleThree } from "../../../components/card";
import { Template as Page } from "../../../components/pageTemplate";
import { HeaderBody, TextBox } from "../../../components/text";
import { Line } from "../../../components/ui";
import { CardTemplate } from "../../../layouts";
import { cardInfoComposability } from "../../../db/whatWeDo/composability";
import { composability } from "../../../assets/images/technology/composability";

const Composability = () => {
  return (
    <Page
      first="Composable"
      second="Approach"
      actionBtnText="Contact us"
      actionTitle="Are you prepared to begin?"
    >
      <HeaderBody
        title={`What's composability?`}
        desc={`Composability is a principle of system design that addresses how
        components relate to one another. A highly modular system offers
        interchangeable parts that can be chosen and put together in different
        ways to meet the needs of different users. Composable is the design and
        delivery methodology used by Airopay for financial services. It is
        built on the quick and easy construction of separate, functionally sound
        systems. Using your preferred feature configuration, place our robust
        loan and/or deposit engines at the center of your financial
        architecture, and then build as many linked services as you like on top.
        All of this with a transparent and unambiguous SaaS pricing mechanism,
        and operating on any major cloud provider of your choice.`}
      />

      <Line />
      <TextBox
        content="Now, you can swiftly and cost-effectively create and evolve your financial solutions. Furthermore, Airopay and Composable provide you choices: you can join the lending industry, establish a brand-new bank from scratch, introduce a digital spin-off or speed boat in addition to your present offering, or entirely overhaul your core banking system. You get to make the decision."
        btnText="contact us"
        img={composability}
      />
      <Line dis={true} />
      <CardTemplate
        blur={true}
        position={"text-center"}
        title="The fundamentals of compatibility"
      >
        {cardInfoComposability.map((note, index) => {
          return (
            <StyleThree key={index} title={note.title} content={note.desc} />
          );
        })}
      </CardTemplate>
    </Page>
  );
};
export default Composability;
5;
