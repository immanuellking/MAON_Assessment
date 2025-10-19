import { useQuery } from "@tanstack/react-query";

const fetchNews = async () => {
  const res = await fetch(
    `https://finnhub.io/api/v1/news?category=general&token=${import.meta.env.VITE_NEWS_API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
};

export const useNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 1000 * 60 * 5,
  });
};