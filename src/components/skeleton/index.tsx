const NewsCardSkeleton = () => {
  const skeleton = Array.from({ length: 12 }, () => null);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 sm:gap-y-16 sm:gap-x-4 sm:mt-8 lg:mt-16">
      {skeleton.map((_, index) => (
        <div key={index} className="w-full h-[110px] sm:h-auto sm:aspect-square bg-[#2A283E] animate-pulse"></div>
      ))}
    </div>
  );
};

export default NewsCardSkeleton;
