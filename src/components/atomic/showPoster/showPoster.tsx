interface propsTypes {
  title: string;
  imageUrl: string;
  className: string;
}

const ShowPoster = ({ title, imageUrl, className }: propsTypes) => (
  <div
    className={`flex flex-col items-center max-w-[150px] overflow-hidden ${className}`}
    style={{ height: 'calc(225px + 3em)' }}
  >
    <img width={150} height={225} src={imageUrl} alt={title} />
    <span className="text-center">{title}</span>
  </div>
);

export default ShowPoster;
