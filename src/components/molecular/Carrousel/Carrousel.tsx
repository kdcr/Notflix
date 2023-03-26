import { useRef, useState, useEffect, MouseEvent } from 'react';
import MovieDTO from '../../../model/MovieDTO';
import ShowDTO from '../../../model/ShowDTO';
import CarrouselItem from '../../atomic/carrouselItem/CarrouselItem';
import chevronRightIcon from '../../../assets/chevron-right.svg';
import chevronLeftIcon from '../../../assets/chevron-left.svg';

interface carrouselProps {
  items: MovieDTO[] | ShowDTO[];
  className?: string;
  onClick?: (index: number) => void;
}

const Carrousel = ({ items, className, onClick }: carrouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [buttonScrolling, setButtonScrolling] = useState<number>(0);
  const [lastHandScroll, setLastHandScroll] = useState<number>(0);

  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timer>();

  const doScroll = () => {
    const scroll = scrollContainerRef.current?.scrollLeft;
    if (typeof scroll === 'number')
      scrollContainerRef.current?.scroll(scroll + 20 * buttonScrolling, 0);
  };

  const handleGoTop = () => {
    scrollContainerRef.current?.scroll(0, 0);
  };

  const handleHandScroll = (e: MouseEvent) => {
    const { current } = scrollContainerRef;
    if (e.buttons === 1) {
      current?.scroll(current.scrollLeft - e.nativeEvent.movementX * 2, 0);
      setLastHandScroll(new Date().getTime());
    }
  };

  const handleClick = (index: number) => {
    if (lastHandScroll + 100 < new Date().getTime()) onClick?.(index);
  };

  useEffect(() => {
    if (scrollInterval) clearInterval(scrollInterval);
    if (buttonScrolling !== 0) setScrollInterval(setInterval(doScroll, 10));
  }, [buttonScrolling]);

  useEffect(() => {
    scrollContainerRef.current?.scroll(0, 0);
  }, [items]);

  return (
    <div className={`flex flex-row items-center justify-center ${className}`}>
      <button
        className="w-[10%] select-none hidden lg:block"
        onMouseDown={() => setButtonScrolling(-1)}
        onMouseUp={() => setButtonScrolling(0)}
        onMouseLeave={() => setButtonScrolling(0)}
        onKeyDown={() => setButtonScrolling(0)}
        onDoubleClick={handleGoTop}
        type="button"
      >
        <img src={chevronLeftIcon} alt="right" className="w-full" />
      </button>
      <div
        className="flex flex-col lg:flex-row overflow-x-scroll hide-scrollbar scroll-smooth w-[80%] h-full gap-2 select-none"
        onMouseMove={(e) => handleHandScroll(e)}
        ref={scrollContainerRef}
      >
        {items.map((item, index) => (
          <CarrouselItem
            item={item}
            className="p-2 bg-gray-600 rounded !h-full"
            onMouseUp={() => handleClick(index)}
          />
        ))}
      </div>
      <button
        className="w-[10%] select-none hidden lg:block"
        onMouseDown={() => setButtonScrolling(1)}
        onMouseUp={() => setButtonScrolling(0)}
        onMouseLeave={() => setButtonScrolling(0)}
        onKeyDown={() => setButtonScrolling(0)}
        type="button"
      >
        <img src={chevronRightIcon} alt="right" className="w-full" />
      </button>
    </div>
  );
};

Carrousel.defaultProps = {
  className: '',
  onClick: () => null,
};

export default Carrousel;
