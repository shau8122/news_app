
type Article =
  | {
      author: null;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    }
  | {
      author: string;
      title: string;
      description: null;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    };

interface NewsCardProps {
  article: Article;
}
const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div  className="flex flex-col justify-center hover:shadow-xl  rounded-md  gap-2">
      <img
      className="rounded-md rounded-b-none h-[200px] w-full object-cover"
        src={article.urlToImage}
        alt={article.title.slice(0, 10)}
        loading="lazy"
      />
      <a href={article.url} target="_blank" className=" text-start font-helvetica text-lg font-semibold text-slate-900 px-2">
        {article.title?.slice(0, 70)+'...'}
      </a>
      <p className="text-xs text-slate-500 m-1 px-2">{article.publishedAt}</p>
      <p className="text-sm text-slate-700 px-2 pb-1">
        {article.description?.slice(0, 100)}
      </p>
    </div>
  );
};

export default NewsCard;
