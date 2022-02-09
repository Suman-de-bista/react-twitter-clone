import React from 'react';
import {AiOutlineSetting} from 'react-icons/ai'
import Trendingtopics from './trendingtopics';
import Follow from './follow';
import {FiMoreHorizontal} from 'react-icons/fi'

const Trending = () => {
    return (
        <div className='trend'>
            <div className='trend-search'>
                <input type='text' placeholder='Search Twitter'/> 
            </div>
            <div className='trends-for-you'>
                <div className='trend-headline'>
                    <h2>Trends for you</h2>
                </div>
                <div className='settings-logo'>
                    <a href='' >
                        <AiOutlineSetting/>
                    </a>
                </div>
                <div className='trend-content'>
                <Trendingtopics/>
                </div>
            </div>
            <div className='who-to-follow'>
                <Follow/>
            </div>
            <div className='terms-and-condition'>
                <a href=''>Terms of Service</a>
                <a href=''>Privacy Policy</a>
                <a href=''>Cookie Policy</a>
                <a href=''>Accessibility</a>
                <a href=''>Ads info</a>
                <a href=''>More</a><FiMoreHorizontal/>
                <div className='copyright'>© 2022 Twitter, Inc.</div>
            </div>
        </div>
    );
}

export default Trending;
