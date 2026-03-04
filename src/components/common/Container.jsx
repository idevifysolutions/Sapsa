// const Container = ({ children }) => {
//   return (
//     <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
//       {children}
//     </div>
//   );
// };

// export default Container;

const Container = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-[57px] relative">
      {children}
    </div>
  );
};

export default Container;