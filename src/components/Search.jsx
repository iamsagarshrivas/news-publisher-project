import React from 'react'
import { Link } from 'react-router-dom';
import NewsContext from '../context/NewsContext';

const Search = () => {
    const [search, setSearch] = React.useState({
        text: "",
        open: false
    });
    
    const newsContext = React.useContext(NewsContext);
    const handleChange = React.useCallback(({ target }) => setSearch((prev) => ({ ...prev, text: target.value })) ,[]);
    const toggleOpen = React.useCallback(() => setSearch((prev) => ({ ...prev, open: true })), []);
    const toggleClose = React.useCallback(() => setTimeout(() => setSearch((prev) => ({ ...prev, open: false })), 100), []);


    /** @type {import('../utils/axios').INewsItem[]} */
    const filteredList = React.useMemo(() => {
        return Object.values(newsContext.state).flat()
        .filter(({TITLE: text}) => text.toLowerCase().includes(search.text.toLowerCase()));
    },[newsContext.state, search.text]);

    return (
        <div className="search">
            <div className="search-container">
                <input placeholder="Search..." type="text" value={search.text} onChange={handleChange} onFocus={toggleOpen} onBlur={toggleClose} />
                <ul style={{display: search.open ? "block" : "none"}}>
                    {filteredList.map(key => <li key={key.ID}>
                        <Link to={`/${encodeURI(key.PUBLISHER)}`}><span>{key.TITLE}</span></Link>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Search
