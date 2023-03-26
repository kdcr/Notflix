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
      className="bg-gray-600 px-4 py-2 rounded-full flex flex-row gap-4 border-2 border-gray-500 relative"
    >
      <span className="z-10" ref={leftRef}>
        {leftValue}
      </span>
      <span className="z-10" ref={rightRef}>
        {rightValue}
      </span>
      <div
        className="absolute bg-red-500 rounded-full h-10 top-0 z-0"
        style={{
          width: selectedWidth,
          left: !active ? '0' : '',
          right: active ? '0' : '',
        }}
      />
    </button>
  );
};

export default TextSwitch;
