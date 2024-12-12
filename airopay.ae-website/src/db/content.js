import { composable, lending } from "../assets/images/product";
import { productImg } from "../assets/images/home";

export const widgetContent = [
  {
    title: "Deliver distinctive CX.",
    desc: "By integrating Airopa into your banking or lending infrastructure, you can create a scalable technological base upon which to develop experiences that are entirely focused on your customers and under your complete control. You can access independent services and solutions for the development of unique financial offers through our vast partner network.",
  },
  {
    title: "Go Above the market",
    desc: "You need a high-velocity operating model-only achievable with Airopay-to be competitive. Our lives are not counted in years, but rather in days and weeks.Additionally, you are the future-proofed with airopay's low-code methodology, single code base, publicly accessible API's and frequent releases, allowing you to iterate continually without any interruptions",
  },
];

export const productInfoContent = [
  {
    title: "Composable",
    active: false,
    desc: "At Airopay, composable banking was pioneered. When we saw that meaningful financial innovation was being hampered by rigid, antiquated core banking infrastructure, we launched the firm. You can put together independent parts and services with Airopay's modular approach to create precisely what you need, when you need it.",
    img: composable,
  },
  {
    title: "Lending",
    active: true,
    desc: "With Airopay's cloud-native lending engine, banks, fintechs, retailers, cooperates, and other businesses may create a range of loan products that are customized to meet the demands of their clients. SME loans, buy now pay later, mortgages, embedded finance, and purchase financing are all examples.",
    img: productImg,
  },
  {
    title: "Deposit",
    active: false,
    desc: "A dynamic deposits engine that can power a wide range of deposit-based solutions is what Airopay offers. Create a bank from the ground up or prioritize digitalization of current offerings, From building societies, credit unions, and banks of various sorts to prepaid cards, digital wallets, and more.",
    img: lending,
  },
];
