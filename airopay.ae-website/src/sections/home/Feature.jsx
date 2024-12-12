import { Container } from "../../layouts";
import { featureImg } from "../../assets/images/home";
import { SlideBtn } from "../../components/button";
import { WordWidget } from "../../components/text";
import { FeaturesInfo } from "../../components/text";
import { CallToAction } from "../../components/ui";
import { useState } from "react";

const Feature = () => {
  const [widgetNumber, setWidgetNumber] = useState(0);

  const widgetContent = [
    {
      title: "Deliver distinctive CX.",
      desc: "By integrating Airopay into your banking or lending infrastructure, you can create a scalable technological base upon which to develop experiences that are entirely focused on your customers and under your complete control. You can access independent services and solutions for the development of unique financial offers through our vast partner network.",
    },
    {
      title: "Go Above the market",
      desc: "You need a high-velocity operating model-only achievable with Airopay-to be competitive. Our lives are not counted in years, but rather in days and weeks.Additionally, you are the future-proofed with airopay's low-code methodology, single code base, publicly accessible API's and frequent releases, allowing you to iterate continually without any interruptions",
    },
  ];

  const widgetChangeHandler = (direction) => {
    setWidgetNumber((prev) => {
      if (direction === "front") {
        if (prev === widgetContent.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      }
      if (direction === "back") {
        if (prev === 0) {
          return widgetContent.length - 1;
        } else {
          return prev - 1;
        }
      }
    });
  };

  return (
    <section>
      <Container>
        <div className="">
          {/* The image and text section */}
          <div
            className={`
            gap-10
            items-center
            justify-center
            mb-12
            hidden
            md:flex
            `}
          >
            <img src={featureImg} alt="" className="h-80" />
            <div className="w-[37.5%] border border-transparent ml-5 flex flex-col">
              <WordWidget
                title={widgetContent[widgetNumber]?.title}
                desc={widgetContent[widgetNumber]?.desc}
              />
              <div className="gap-2 flex items-end mt-[.1rem] justify-self-end">
                <SlideBtn
                  color="border-brown"
                  angle="left"
                  dark={true}
                  padding="p-2"
                  onClickHandler={() => widgetChangeHandler("back")}
                />
                <SlideBtn
                  color="border-brown"
                  dark={true}
                  padding="p-2"
                  onClickHandler={() => widgetChangeHandler("front")}
                />
              </div>
            </div>
          </div>
          {/* The information for mobile */}
          {widgetContent.map((each, index) => {
            return (
              <FeaturesInfo key={index} title={each.title} desc={each.desc} />
            );
          })}
          {/*Book a demo card */}
          <CallToAction
            title=" Book a Demo with Airopay now"
            btnText="Book demo"
          />
        </div>
      </Container>
    </section>
  );
};
export default Feature;
