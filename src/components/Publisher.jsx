import React from 'react'
import { useLocation  } from 'react-router-dom'
import NewsContext from '../context/NewsContext';
import { toDateFormat } from '../utils/helpers';

const Publisher = () => {
    const location = useLocation();
    const newsContext = React.useContext(NewsContext);

    /** @type {import('../utils/axios').INewsItem[]} */
    const publisherNews = React.useMemo(() =>{
        const publisher = decodeURI(location.pathname).slice(1);
        return newsContext.state[publisher]?.sort((a,b) => a.TIMESTAMP -b.TIMESTAMP) || []
    },[location.pathname, newsContext.state]);

    return (
        <div className="card-container">
            {
                publisherNews.map((publish) => (
                    <div className="card">
                        <a href={publish.URL} target="_blank" rel="noreferrer"><h3 className="title">{publish.TITLE}</h3></a>
                        <span className="category">Category: {publish.CATEGORY}</span>
                        <h6 className="host">
                            <a href={`https://${publish.HOSTNAME}`} target="_blank" rel="noreferrer">{publish.HOSTNAME}</a>
                            <span className="time">{toDateFormat(publish.TIMESTAMP)}</span>
                        </h6>

                    </div>
                ))
            }
        </div>
    )
}

export default Publisher
