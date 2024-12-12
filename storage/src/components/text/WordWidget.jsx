const WordWidget = ({ title, desc, textStyle, headerStyle }) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <p className={`${textStyle} text-sm leading-6`}>{desc}</p>
    </div>
  );
};
export default WordWidget;
