


type Article = 
    | { author: null; title: string; description: string; url: string; urlToImage: string; publishedAt: string; content: string; }
    | { author: string; title: string; description: null; url: string; urlToImage: string; publishedAt: string; content: string; }

interface TopHeadlineCardProps {
  article: Article;
}

const TopHeadlineCard:React.FC<TopHeadlineCardProps> = (
  {
    article: {
      title,
      urlToImage,
      url
    }
  }
) => {
  return ( 
    <a href={url} target="_blank" className="flex cursor-pointer shadow-md rounded-md w-full h-[100px] p-2 gap-2 overflow-auto hide-scrollbar">
      <img className='rounded-md w-1/3' src={urlToImage} width={100} height={100} alt={title.slice(0,10)} />
      <h1 className='font-helvetica p-1 w-2/3 text-xs font-semibold text-slate-900'>
        {title}
      </h1>
    </a>
   );
}
 
export default TopHeadlineCard;