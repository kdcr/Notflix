const Pill = ({ children }: { children: JSX.Element }) => (
  <div className="inline-block h-10 px-4 bg-gray-600 rounded-full">
    <div className="flex items-center justify-center w-full h-full">{children}</div>
  </div>
);

export default Pill;
