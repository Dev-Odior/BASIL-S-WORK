import { Template as Page } from "../../../components/pageTemplate";
import { BodyText, SubHeader, TextBox } from "../../../components/text";
import { Line } from "../../../components/ui";
import { CardTemplate } from "../../../layouts";
import { StyleThree } from "../../../components/card";
import { cloudPartners } from "../../../assets/images/clientsImg";
import { cloudBanking } from "../../../assets/images/technology/multiCloud";

import {
  multiCloudInformation,
  multiCloudAdvantages,
} from "../../../db/whatWeDo/multicloud";

const MultiCloud = () => {
  return (
    <Page
      actionTitle="Would you like more information about our platform?"
      actionBtnText="Contact us"
      first="Multi-Cloud"
      second="Approach"
    >
      <BodyText>
        Providers of financial services need to change fast and with greater
        flexibility. How do they accomplish this? through adopting cloud
        transformation to fast adjust to changes in the customer and market.
        Airopay is built for the cloud. Additionally, you can customize or
        advance your financial cloud journey with our multi-cloud approach.
      </BodyText>

      <TextBox
        img={cloudBanking}
        position={true}
        list={multiCloudInformation}
        title="Cloud banking is now"
        btnText="get in touch"
      />

      <SubHeader text="Proceed with confidence using these three top cloud providers" />
      <BodyText>
        Based on their unique business, technological, and regulatory
        requirements, Airopay customers can select any of the three cloud
        providers—Google Cloud Platform, Microsoft Azure, or AWS—regardless of
        whether they are based in the same or a different geographic region, and
        without compromising availability or service standards.
      </BodyText>
      <img
        src={cloudPartners}
        alt=""
        className="mx-auto h-6 md:mx-0 md:h-8 mb-3"
      />

      <Line />

      <CardTemplate
        blur={true}
        position={"text-center"}
        title="Airopay's multi-cloud strategy has several advantages"
      >
        {multiCloudAdvantages.map((advantage, index) => {
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
export default MultiCloud;
