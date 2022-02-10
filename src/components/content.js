import React from 'react';
import Tweet from './tweet';
import Posts from './posts';

const Content = () => {
    return (
        <div className='feeds'>
            <div className='feed-home'>Home</div>
            <Tweet/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
        </div>
    );
}

export default Content;
