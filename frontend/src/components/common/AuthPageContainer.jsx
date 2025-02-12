const AuthPageContainer = ({ children, className, ...props }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-gradient-to-b from-black to-blue-900 bg-center h-screen w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AuthPageContainer;
