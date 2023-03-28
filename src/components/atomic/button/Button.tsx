interface ButtonProps {
  onClick: () => void;
  children: JSX.Element;
  className: string;
}

const Button = ({ onClick, children, className }: ButtonProps) => (
  <button
    className={`inline-block h-10 px-4 bg-red-500 hover:bg-red-600 rounded-full  ${className}`}
    type="button"
    onClick={onClick}
  >
    <div className="flex items-center justify-center w-full h-full">{children}</div>
  </button>
);

export default Button;
