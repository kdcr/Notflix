import { useRef, useState, useEffect } from 'react';
import MovieDTO from '../../../model/MovieDTO';
import ShowDTO from '../../../model/ShowDTO';
import CarrouselItem from '../../atomic/carrouselItem/CarrouselItem';
import chevronRightIcon from '../../../assets/chevron-right.svg';
import chevronLeftIcon from '../../../assets/chevron-left.svg';

interface carrouselProps {
  items: MovieDTO[] | ShowDTO[];
  className?: string;
}

const Carrousel = ({ items, className }: carrouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [scrolling, setScrolling] = useState<number>(0);

  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timer>();

  const doScroll = () => {
    const scroll = scrollContainerRef.current?.scrollLeft;
    if (typeof scroll === 'number') scrollContainerRef.current?.scroll(scroll + 10 * scrolling, 0);
  };

  useEffect(() => {
    if (scrollInterval) clearInterval(scrollInterval);
    if (scrolling !== 0) setScrollInterval(setInterval(doScroll, 10));
  }, [scrolling]);

  useEffect(() => {
    scrollContainerRef.current?.scroll(0, 0);
  }, [items]);

  return (
    <div className={`flex flex-row ${className}`}>
      <button
        className="w-[10%] select-none"
        onMouseDown={() => setScrolling(-1)}
        onMouseUp={() => setScrolling(0)}
        onMouseLeave={() => setScrolling(0)}
        onKeyDown={() => setScrolling(0)}
        type="button"
      >
        <img src={chevronLeftIcon} alt="right" className="w-full" />
      </button>
      <div
        className="flex flex-row overflow-x-scroll hide-scrollbar scroll-smooth w-[80%] h-full"
        ref={scrollContainerRef}
      >
        {items.map((item) => (
          <CarrouselItem item={item} className="p-2 mx-2 bg-gray-600 rounded !h-full" />
        ))}
      </div>
      <button
        className="w-[10%] select-none"
        onMouseDown={() => setScrolling(1)}
        onMouseUp={() => setScrolling(0)}
        onMouseLeave={() => setScrolling(0)}
        onKeyDown={() => setScrolling(0)}
        type="button"
      >
        <img src={chevronRightIcon} alt="right" className="w-full" />
      </button>
    </div>
  );
};

Carrousel.defaultProps = {
  className: '',
};

export default Carrousel;
