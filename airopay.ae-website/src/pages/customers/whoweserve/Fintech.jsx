import { cardContent } from "../../../db/customers/whoweserve/fintech";

import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { BodyText, HeaderBody } from "../../../components/text";
import { CardTemplate } from "../../../layouts";
import { StyleOne } from "../../../components/card";

const Fintech = () => {
  return (
    <Page first="Airopay for" second="fintechs" actionBtnText="Contact us">
      <BodyText>
        A global revolution in bettering financial access is being led by
        fintechs. Hence, you need to be extremely flexible, completely
        responsive, and resource-light, regardless of whether you're an aspiring
        unicorn just getting started, want to find under served new markets,
        advance open finance, or just want to do things differently.
      </BodyText>
      <HeaderBody
        title={`We realize your fintech dreams, no matter how big or small.`}
        desc={`Chill out about the big issues. We can assist you with expanding your portfolio, launching user-apps, developing new fintech revenue streams, and cutting operational costs without causing interruption or needless work.`}
      />

      <CardTemplate
        three={true}
        title={`The essential BaaS features of Airopay`}
      >
        {cardContent.map((content, index) => {
          return (
            <StyleOne
              height={true}
              key={index}
              title={content.title}
              desc={content.desc}
              img={content.img}
            />
          );
        })}
      </CardTemplate>
    </Page>
  );
};
export default Fintech;
