const BodyText = ({ children, className, home }) => {
  return (
    <p
      className={`
      text-grayish-infoText 
        md:text-[12px] 
        lg:text-[13.2px]
        leading-7
        md:leading-8
        ${home ? "text-center" : "text-justify"}
        ${className ? className : ""}
       `}
    >
      {children}
    </p>
  );
};
export default BodyText;
