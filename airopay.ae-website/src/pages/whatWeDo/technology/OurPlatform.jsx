import { Template as Page } from "../../../components/pageTemplate";
import { BodyText } from "../../../components/text";
import { TextBox } from "../../../components/text";
import { StyleOne, StyleTwo } from "../../../components/card";
import { Line } from "../../../components/ui";
import { CardTemplate } from "../../../layouts";
import { cardInfoPlatform, cardInfo } from "../../../db/whatWeDo/platform";
import { textbox } from "../../../assets/images/platform";

const OurPlatform = () => {
  return (
    <Page
      first="our"
      second="platform"
      actionBtnText="Contact us"
      actionTitle="Are you prepared to begin?"
    >
      <BodyText className="margin-b text-left pr-3">
        Consumers desire improved financial management options. People are
        seeking ease and choice, which calls for change. We facilitate financial
        transformation with our cloud banking platform. Make a difference, work
        together, and revitalize services.
      </BodyText>
      <TextBox
        img={textbox}
        title="Technology that provides greater benefits."
        content="An API-driven platform for banking and financial services, Airopay is cloud-native and SaaS based. It is intended to spur financial innovation, accelerate the time to market for solutions, lower barriers to entry, and facilitate the growth of ecosystems."
        btnText="join our live demo"
      />

      <CardTemplate title="Without interfering">
        {cardInfo.map((info, index) => {
          return (
            <StyleOne
              key={index}
              title={info.title}
              desc={info.desc}
              img={info.img}
              two={true}
            />
          );
        })}
      </CardTemplate>

      <Line />

      <CardTemplate
        position={"text-center md:text-left"}
        title="who we transform"
        three={true}
      >
        {cardInfoPlatform.map((info, index) => {
          return <StyleTwo key={index} title={info.title} desc={info.desc} />;
        })}
      </CardTemplate>
    </Page>
  );
};
export default OurPlatform;
