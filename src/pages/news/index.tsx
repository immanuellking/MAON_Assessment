import { useQuery } from "@tanstack/react-query";
import NewsCard from "../../components/news-card";
import NewsCardSkeleton from "../../components/skeleton";

const News = () => {
  const API_URL = `https://finnhub.io/api/v1/news?category=general&token=${
    import.meta.env.VITE_NEWS_API_KEY
  }`;
  const { data, isFetching } = useQuery({
    queryKey: ["news"],
    queryFn: () => {
      return fetch(`${API_URL}`).then((response) => response.json());
    },
  });

  console.log(data);
  return (
    <section className="sm:w-[90%] mx-auto">
      <h1 className="font-rubik font-bold sm:font-medium text-2xl sm:text-5xl text-white px-2 sm:px-0 py-4">
        NEWS
      </h1>

      {isFetching && <NewsCardSkeleton />}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 sm:gap-y-16 sm:gap-x-4 sm:mt-8 lg:mt-16">
        {data &&
          data.length > 0 &&
          data?.map((item: any) => (
            <NewsCard
              key={item.id}
              image={item.image}
              source={item.source}
              url={item.url}
              datetime={item.datetime}
              headline={item.headline}
            />
          ))}
      </div>
    </section>
  );
};

export default News;
