const Container = ({ children }) => {
  return (
    <div class="container border border-lime-300 w-[90%] mx-auto lg:px-4 lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-md  rounded-lg overflow-hidden">
      {children}
    </div>
  );
};
export default Container;
