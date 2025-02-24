import React, {useState} from 'react'
import './NewsFeed.css'
import '../newsCard/NewsCard.css';
import '../pagination/Pagination.css'
import Loader from '../loader/Loader';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { useGetNewsQuery } from '../../redux/Newsapi'
import defaultImage from '../../assets/defaultimage.jpg'

export const NewsFeed = ({ category }) => {

  const [page, setPage] = useState(1);

  const { data , isLoading, error } = useGetNewsQuery({ category, page });
  

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const handImageError = (e) => {
    e.target.src = defaultImage;
  }

  console.log(data)


  return (
    <div className='news-feed'>
      <div className="news-grid">
          {data.articles.map((article, index) => (
            <div className='news-card' key={index}>
              <img src={article.urlToImage} alt="" className='news-image' onError={handImageError}/>
              <div className='news-content'>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a href={article.url}>Read more</a>
              </div>
            </div>
          ))}
      </div>



      <div className='pagination'>
        <button className="prev-btn" disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        
        <span className='page-numbers'> {page} </span>
        <button className="next-btn" onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default NewsFeed