import React from 'react'
import { Link } from 'react-router-dom';
import NewsContext from '../context/NewsContext';

const Home = () => {
    
  const newsContext = React.useContext(NewsContext);
  const  buttons = React.useMemo(() =>{
    return Object.keys(newsContext.state).map((key) => ({
      key,
      href: "/" + encodeURI(key)
    }))
  },[newsContext]);
    return (
        <div className="publishers">
          
          {
            buttons.map(btn => <Link key={btn.key} to={btn.href}><span >{btn.key}</span></Link> )
          }
        </div>
    )
}

export default React.memo(Home)
