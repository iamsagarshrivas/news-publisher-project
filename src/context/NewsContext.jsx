import React from 'react'
import { fetchPublishers } from '../utils/axios';

const NewsContext = React.createContext({});
NewsContext.displayName = "NewsContext";

export const NewsProvider = ({ children }) => {

    const [publishers, setPublishers] = React.useState({});

    React.useEffect(() => fetchPublishers().then(publishers => setPublishers(publishers)),[]);

    return (
        <NewsContext.Provider value={{state: publishers}}>
            {children}
        </NewsContext.Provider>
    )
};

export default NewsContext;
