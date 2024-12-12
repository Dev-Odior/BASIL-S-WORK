import { cardContentCareer } from "../../../db/company/career";
import { TemplateTwo as Page } from "../../../components/pageTemplate";
import { BodyText, HeaderBody } from "../../../components/text";
import { CardTemplate } from "../../../layouts";
import { StyleOne, StyleThree } from "../../../components/card";
import { information } from "../../../db/company/career";
import { Button } from "../../../components/button";

const Career = () => {
  return (
    <Page first="Airopay for" second="career " actionBtnText="Contact us">
      <BodyText>
        We are a multinational group that finds solutions to challenging issues.
        Others refer to us as challengers since we use disruptive technology to
        change the way customers interact with us. There's no denying that our
        shared enthusiasm for resolving client difficulties, curiosity, and
        collaborative attitude are what unite us. We are improving everyone's
        quality of life in the world. Additionally, we're working jointly on it.
        We are seeking individuals who wish to have an impact since we are
        expanding quickly across six continents.
      </BodyText>
      {/* 
      <TextBox
        title={`Make lending flexible and lean.`}
        content={`To stay ahead, whether you're a new lender or an established one, you'll need to put in more effort, improve, and react more quickly. Peer-to-peer networks, e-wallets, crowdfunders, buy now, pay later companies, and traditional players are all included. Big tech and telcos are also participating.`}
        img={lenders}
        hideBtn={"yes"}
      /> */}

      <HeaderBody
        title={`Whichever position you're searching for, this is the place for you if you want to be a part of an inclusive, cooperative team of professionals that is transforming the lives of billions.`}
        desc={`At Airopay, our principles are a reflection of who we are. They serve as a reminder of how we blazed a path to get here and how we'll keep enabling individuals to design enjoyable banking experiences.`}
      />

      <CardTemplate three={true}>
        {cardContentCareer.map((content, index) => {
          return (
            <StyleOne
              titleSize={"text-lg leading-loose"}
              height={true}
              key={index}
              title={content.title}
              desc={content.desc}
              img={content.img}
            />
          );
        })}
      </CardTemplate>

      <CardTemplate position={true} title="Meet the team">
        {information.map((content, index) => {
          return (
            <StyleThree
              key={index}
              content={content.desc}
              title={content.title}
            />
          );
        })}
      </CardTemplate>

      <div className="mt-16 grid place-items-center">
        <Button name={`join us`} />
      </div>
    </Page>
  );
};
export default Career;
