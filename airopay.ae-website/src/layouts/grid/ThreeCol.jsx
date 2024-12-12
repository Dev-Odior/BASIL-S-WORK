const ThreeCol = ({ children, gap }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${
        gap ? gap : "gap-5 md:gap-10"
      } place-items-center mt-5 md:px-0`}
    >
      {children}
    </div>
  );
};
export default ThreeCol;
