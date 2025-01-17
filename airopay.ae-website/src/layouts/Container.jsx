const Container = ({ children }) => {
  return (
    <div
      className={`container w-[90%] mx-auto md:max-w-screen-md lg:max-w-screen-lg `}
    >
      {children}
    </div>
  );
};
export default Container;

//   md:max-w-screen-lg
//  sm:max-w-screen-md
//  xs:max-w-screen-sm
//  rounded-lg
//  md:max-w-screen-lg
//  sm:max-w-screen-md
//  xs:max-w-screen-sm
//  lg:max-w-screen-xl
//  w-[90%]
// lg:w-[80%]
// lg:max-w-screen-xl
// mx-auto
// lg:px-4
// overflow-hidden
