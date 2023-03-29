interface headerProps {
  children: JSX.Element;
}

const Header = ({ children }: headerProps) => (
  <div className="w-screen h-screen">
    <div className="w-full flex items-center justify-start bg-red-500 h-[60px] lg:h-[80px] p-8">
      <span className="text-5xl lg:text-7xl">Notflix</span>
    </div>
    {children}
  </div>
);

export default Header;
