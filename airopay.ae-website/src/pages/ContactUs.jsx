import { Template as Page } from "../components/pageTemplate";

const contactData = [
  {
    title: "Send a mail to our support team",
    contact: "support@airopay.com",
    underline: true,
  },
  {
    title: "Visit our office",
    contact: "4517 Washington Ave. Manchester, Kentucky 39495",
  },
  {
    title: "Call Us",
    contact: "+234-9055617283",
    underline: true,
  },
];

const ContactUs = () => {
  return (
    <Page first="Contact us -" second="Airopay" actionBtnText="Contact us">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contactData.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded-lg shadow-lg bg-white flex items-center flex-col gap-4 py-16 px-5 hover:-translate-y-2 transition-all duration-500 text-center"
            >
              <h3 className="font-bold text-sm">{item?.title}</h3>
              <p
                className={`${item?.underline ? "underline" : ""} text-[12px]`}
              >
                {item?.contact}
              </p>
            </div>
          );
        })}
      </div>
    </Page>
  );
};
export default ContactUs;
