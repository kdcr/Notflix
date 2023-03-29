interface headerProps {
  children: JSX.Element;
}

const Header = ({ children }: headerProps) => (
  <div className="w-full h-[100vh] flex flex-col overflow-x-hidden">
    <div className="w-full flex items-center justify-start bg-red-500 h-[60px] lg:min-h-[80px] p-8">
      <span className="text-5xl lg:text-7xl">Notflix</span>
    </div>
    <div style={{ height: 'calc(100% - 80px)' }}>{children}</div>
  </div>
);

export default Header;
