import React from 'react';
import {FiMoreHorizontal} from 'react-icons/fi'

const Trendingtopics = () => {
    return (
        <div className='trending-topics'>
            <div className='first-trending'>
                    <div className='trending-topic-more'>
                        <span>Only on Twitter  ·Trending</span>
                        <div className='more-btn'><a href=''><FiMoreHorizontal/></a></div> 
                    </div>
                <div className='hashtag'>#Muskan</div> 
                <span>24.1k Tweets</span>
            </div>

            <div className='first-trending'>
                <div className='trending-topic-more'>
                    <span>Sports  ·Trending</span>
                    <div className='more-btn'><a href=''><FiMoreHorizontal/></a></div> 
                </div>
                <div className='hashtag'>James Anderson</div> 
                <span>1,971 Tweets</span>
            </div>

            <div className='first-trending'>
                <div className='trending-topic-more'>
                    <span>Entertainment  ·Trending</span>
                    <div className='more-btn'><a href=''><FiMoreHorizontal/></a></div> 
                </div>
                <div className='hashtag'>#ArabicKuthu</div>
                <span>177k Tweets</span>
            </div>

            <div className='first-trending'>
                <div className='trending-topic-more'>
                <span>Trending In Nepal  ·Trending</span>
                <div className='more-btn'><a href=''><FiMoreHorizontal/></a></div> 
                </div>
                <div className='hashtag'>#BadeMiyanChoteMiyan</div>
                <span>30k Tweets</span>
            </div>

            <div className='first-trending'>
                <div className='trending-topic-more'>
                    <span>Anupamaa  ·Trending</span>
                    <div className='more-btn'><a href=''><FiMoreHorizontal/></a></div> 
                </div>
                <div className='hashtag'>#AnujKapadia</div>
                <span>1,143 Tweets</span>
            </div>
            
            <div className='first-trending show-more'>
                <a href=''>Show More</a>
            </div>
        </div>
    );
}

export default Trendingtopics;
