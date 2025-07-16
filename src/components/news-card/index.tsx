const NewsCard = ({
  image,
  datetime,
  source,
  url,
  headline,
}: {
  image: string;
  datetime: number;
  source: string;
  url: string;
  headline: string;
}) => {
  const date = new Date(datetime * 1000);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const published: string = date.toLocaleDateString("en-GB", options);
  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-row items-center sm:flex-col gap-x-3 sm:gap-x-0 sm:gap-y-4 bg-transparent hover:bg-[#2A283E] p-2 sm:p-3 transition-colors duration-300 cursor-pointer ease-in"
    >
      <img
        src={image}
        alt="news_image_card"
        className="w-[100px] h-[100px] sm:w-full sm:h-[190px] object-center object-cover"
      />
      <div className="space-y-2">
        <div className="flex justify-between uppercase text-[#FFFFFFB2] text-xs font-normal font-rubik">
          <p>{source}</p>
          <p>{published.replace(",", "")}</p>
        </div>
        <div>
          <p className="line-clamp-3 sm:line-clamp-none text-xl text-white font-rubik font-medium ">
            {headline}
          </p>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
