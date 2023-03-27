import { useRef, useState, useEffect } from 'react';

interface textSwitchProps {
  leftValue: string;
  rightValue: string;
  active: boolean;
  onChange: () => void;
}

const TextSwitch = ({ leftValue, rightValue, active, onChange }: textSwitchProps) => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [selectedWidth, setWidth] = useState<number>(0);

  useEffect(() => {
    let newWidth = active ? rightRef.current?.clientWidth || 0 : leftRef.current?.clientWidth || 0;
    newWidth += 30;
    setWidth(newWidth);
  }, [leftRef, rightRef, active]);

  return (
    <button
      type="button"
      onClick={onChange}
      className="relative flex flex-row gap-4 px-4 py-2 bg-gray-600 border-2 border-gray-500 rounded-full"
    >
      <span className="z-10" ref={leftRef}>
        {leftValue}
      </span>
      <span className="z-10" ref={rightRef}>
        {rightValue}
      </span>
      <div
        className="absolute top-0 left-0 z-0 h-10 transition-all duration-500 bg-red-500 rounded-full"
        style={{
          width: selectedWidth,
          transform: active
            ? `translateX(calc(${leftRef.current?.clientWidth}px + 19px))`
            : 'translateX(0)',
        }}
      />
    </button>
  );
};

export default TextSwitch;
