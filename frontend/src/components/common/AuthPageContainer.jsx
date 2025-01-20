const AuthPageContainer = ({ children, className, ...props }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-[url('../src/assets/images/pattern.svg')] bg-repeat bg-160x180 bg-center h-screen w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AuthPageContainer;
