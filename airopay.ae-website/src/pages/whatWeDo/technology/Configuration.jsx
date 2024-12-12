import { cardInfo, textBoxList } from "../../../db/whatWeDo/configuration";
import { TextBox } from "../../../components/text";
import { BodyText } from "../../../components/text";
import { Template as Page } from "../../../components/pageTemplate";
import { Line } from "../../../components/ui";
import { CardTemplate } from "../../../layouts";
import { StyleThree } from "../../../components/card";
import { configuration } from "../../../assets/images/technology/configuration";

const Configuration = () => {
  return (
    <Page first="Configuration as" second="Code">
      <BodyText>
        Using our configuration as code method, you can automate configuration
        deployments using build pipelines, standardize and move configurations
        between tenants, and version control configurations by keeping them in
        code repositories.
      </BodyText>
      <Line dis={true} />
      <TextBox
        title="Utilize configuration as code to innovate and adapt quickly."
        position={true}
        btnText="get in touch"
        img={configuration}
        list={textBoxList}
      />

      <CardTemplate
        blur={true}
        position={true}
        title="Advantages of Configuration as code"
      >
        {cardInfo.map((note, index) => {
          return (
            <StyleThree key={index} title={note.title} content={note.desc} />
          );
        })}
      </CardTemplate>
    </Page>
  );
};
export default Configuration;
